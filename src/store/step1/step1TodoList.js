export function step1TodoList(state = [], action) {
  switch (action.type) {
    case 'TODO_ADD':
      return state.concat(action.text);
    case 'STEP1_INCREASE':
      return state = ['WARN!! 카운터와 겹치는 액션을 사용하여 잘못된 값이 저장됨 WARN!!'];
    default:
      return state;
  }
}
