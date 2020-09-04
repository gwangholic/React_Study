import React from 'react'
import Counter from './03/Counter2'

class CounterApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 1,
    }
    this.increaseCount = this.increaseCount.bind(this)
  }
  increaseCount() {
    this.setState(({ count }) => ({ count: count + 1 }))
  }

  render() {
    return (
      <div>
        <Counter count={this.state.count} onAdd={this.increaseCount} />
      </div>
    )
  }
}

export default CounterApp
