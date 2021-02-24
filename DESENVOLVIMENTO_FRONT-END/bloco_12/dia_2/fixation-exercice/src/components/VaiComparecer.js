import React from 'react'

class VaiComparecer extends React.Component {
  render() {

    const { value, handleChange } = this.props

    return (
      <label>
        Vai comprecer a conferencia?
        <input
          type="checkbox"
          name="vaiComparecer"
          value={value}
          onChange={handleChange}
        />
      </label>
    )
  }
}

export default VaiComparecer;