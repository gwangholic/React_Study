import React, { Component } from 'react'

export default class StateExample extends Component {
  constructor(props) {
    super(props)
    // state 정의
    this.state = {
      loading: true,
      formData: 'no data',
    }
    this.handleData = this.handleData.bind(this)
    // 4초후 handleData 함수를 호출
    setTimeout(this.handleData, 4000)
  }
  handleData() {
    const data = 'new data'
    const { formData } = this.state
    //state 변경
    this.setState({
      loading: false,
      formData: data + formData,
    })
    // this.state.loading은 현재 true
    console.log('loading값', this.state.loading)
    // 이후 호출될 render()함수에서의 this.state.loading은 false
  }
  render() {
    return (
      <div>
        {/* state 데이터는 this.state로 접근 가능*/}
        <span>로딩중: {String(this.state.loading)}</span>
        <span>결과: {this.state.formData}</span>
      </div>
    )
  }
}
/* state를 사용할 때 주의할 점
   - 생성자에서 반드시 초기화
   - state값을 변경할 때는 setState() 함수(상태 관리 함수)를 반드시 사용
   - setState() 함수는 비동기로 처리되면, setState() 코드 이후로 연결된 함수들의 실행이 완료된 시점에 
   화면 동기화 과정을 거침
*/
