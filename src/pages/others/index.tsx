import React from 'react'

interface Props {
  labelOn: string
  labelOff: string
}

interface State {
  isChecked: boolean
}
class Index extends React.Component<Props, State> {
  state = {
    isChecked: false,
  }

  onChange() {
    this.setState((old) => {
      return { ...old, isChecked: !old.isChecked }
    })
  }

  render() {
    const { isChecked } = this.state
    const { labelOn, labelOff } = this.props

    return (
      <label>
        <input type="checkbox" checked={isChecked} onChange={() => this.onChange()} />
        {isChecked ? labelOn : labelOff}
      </label>
    )
  }
}

export default Index
