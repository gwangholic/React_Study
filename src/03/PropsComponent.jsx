// 프로퍼티 - 컴포넌트에 데이터를 전달
// 프로퍼티의 자료형을 미리 선언하면 리엑트 엔진이 프로퍼티로 전달하는 값의 변화를 효율적으로 감지하고
// 개발자의 실수를 막아준다.
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class PropsComponent extends Component {
  render() {
    return <div className="message-container">{this.props.name}</div>
  }
}

PropsComponent.propTypes = {
  name: PropTypes.string,
}
