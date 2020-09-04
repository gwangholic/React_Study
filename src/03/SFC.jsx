// 함수형 컴포넌트
// - state가 없음 (stateless functional component)
// - 생명주기함수를 사용할 수 없음
// => 단순한 구조의 UI 컴포넌트를 제작할 때 사용
import React from 'react'
import PropTypes from 'prop-types'

export default function SFC(props, context) {
  // 클래스형 컴포넌트의 this.props값과 동일
  const { somePropValue } = props
  // 클래스형 컴포넌트의 this.context와 동일
  const { someContextValue } = context
  return <h1>Hello, {somePropValue}</h1>
}

SFC.propType = { somePropValue: PropTypes.any }
SFC.defaultProps = { somePropValue: 'default value' }
