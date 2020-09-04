import React, { Component } from 'react'

export default class LifecycleExample extends Component {
  static getDerivedStateFromProps() {
    console.log('getDerivedStateFromProps 호출')
    return {}
  }
  constructor(props) {
    super(props)
    // getDerivedStateFromProps() 함수를 사용하므로
    // 경고 메시지를 건너 뛰기 위해 state 초깃값 설정
    this.state = {}
    console.log('constructor 호출')
  }
  componentDidMount() {
    console.log('componentDidMount 호출')
    this.setState({
      updated: true,
    })
  }
  componentDidUpdate() {
    console.log('componentDidUpdate 호출')
  }
  componentWillUnmount() {
    console.log('componentWillUnmount 호출')
  }
  getSnapshotBeforeUpdate() {
    console.log('getSnapshotBeforeUpdate 호출')
    return {}
  }
  shouldComponentUpdate() {
    console.log('shouldComponentUpdate 호출')
    return false
  }
  render() {
    console.log('render 호출')
    return null
  }
}
// 1. constructor -> getDerivedStateFromProps -> rendor -> componentDidMount 순으로 호출
// 2. componentDidMount에 setState 함수를 호출해 state 변경 =>
// constructor -> getDerivedStateFromProps -> rendor -> componentDidMount -> getDerivedStateFromProps
// shouldComponent -> rendor -> getSnapshotBeforeUpdate -> componentDidUpdate 순으로 호출
// 3. shouldComponentUpdate() 함수의 반환값을 false => 리액트 엔진은 데이터 비교 후 변경사항이 없다고 판단이후 생명주기 함수가 실행x
// shouldComponent() 함수의 결괏값과 상관없이 화면 동기화 과정을 진행하려면 forceUpdate() 함수를 componentDidMount에 사용
// 4. App 컴포넌트에서 LifeCycleExample 컴포넌트를 그리지 않도록 코드를 작성하면
// constructor -> getDerivedStateFromProps -> rendor -> componentDidMount -> componentWillUnmount 순으로 호출
