import React from 'react'
import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { instance } from './base'
import { map } from 'lodash'
import { from, Observable, takeUntil, Subject } from 'rxjs'
interface S {
  cancel: boolean
}

interface Method {
  service: <D = unknown, C = unknown>(...config: AxiosRequestConfig<C>[]) => Observable<AxiosResponse<D, C>[]>
  untilLeave: Subject<boolean>
}
export type WithServer = S & Method

export function withServer<T extends Record<string, unknown>>(WapperComponent: React.ComponentType<T & WithServer>) {
  return class MyServer extends React.Component<T, S> {
    private unmount = new Subject<boolean>()
    constructor(props: T) {
      super(props)
      this.state = { cancel: false }
      this.service = this.service.bind(this)
    }

    service<D = unknown, C = unknown>(...configs: AxiosRequestConfig<C>[]): Observable<AxiosResponse<D, C>[]> {
      return from(Promise.all(map(configs, (item) => instance({ ...item })))).pipe(takeUntil(this.unmount))
    }

    get untilLeave() {
      return this.unmount
    }

    componentWillUnmount(): void {
      this.unmount.next(true)
      this.unmount.complete()
    }

    render(): JSX.Element {
      return <WapperComponent {...this.props} {...this.state} service={this.service} untilLeave={this.untilLeave} />
    }
  }
}
