// 배열 컴포넌트 주로 게시판이나 목록에 사용
// map() 함수 사용
import React, { PureComponent } from 'react'

export default class ListExample extends PureComponent {
  render() {
    const priceList = [1000, 2000, 3000, 4000]
    const prices = priceList.map((price) => <div>가격: {price}원</div>)
    return (
      <div>
        <label>가격 목록</label>
        {prices}
      </div>
    )
  }
}
