// 함수형 컴포넌트
import React from 'react'
import TodaysPlan from './TodaysPlan'

export default function SFCTodaysPlanApp() {
  const { onButtonClick, hasPlan } = this.props
  return (
    <div className="body">
      {hasPlan ? <TodaysPlan /> : null}
      <button onClick={onButtonClick}>계획없음</button>
    </div>
  )
}
