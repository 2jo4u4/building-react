import React from 'react'
import { withServer, WithServer } from '../../server'

class App extends React.Component<WithServer> {
  constructor(props: WithServer) {
    super(props)
    this.getData = this.getData.bind(this)
  }
  getData() {
    this.props
      .service({
        url: 'https://api.spacexdata.com/v4/launches/latest',
        method: 'get',
      })
      .subscribe({
        next: function (value) {
          console.log(value)
        },
        complete: function () {
          console.log('complete!')
        },
        error: function (error) {
          console.log(error)
        },
      })
  }

  render() {
    return (
      <div>
        Index
        <button onClick={() => this.getData()}>getData</button>
      </div>
    )
  }
}

export default withServer<React.PropsWithChildren<Record<string, unknown>>>(App)
