// 배열 컴포넌트에는 key 값을 꼭 정의해 주어야함
// 키값을 정의해서 출력한 배열 컴포넌트는 다시 출력해야 하는 경우 리액트 엔진이 기존의 컴포넌트를 재활용하여
// 성능을 높일 수 있기 때문.
import React, { PureComponent } from 'react'

export default class TodoList extends PureComponent {
  render() {
    const todoList = [
      {
        taskName: '빨래하기',
        finished: false,
      },
      {
        taskName: '공부하기',
        finished: true,
      },
    ]
    return (
      <div>
        {todoList.map((todo) => (
          <div key={todo.taskName}>{todo.taskName}</div>
        ))}
      </div>
    )
  }
}
