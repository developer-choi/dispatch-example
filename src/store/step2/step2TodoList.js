const TODO_ADD = 'TODO_ADD';

export function step2TodoAddActionCreator(value) {
  return {
    type: TODO_ADD,
    forcePropertyName: value
  };
}

export function step2TodoList(state = [], action) {
  switch (action.type) {
    case TODO_ADD:
      return state.concat(action.forcePropertyName);
    default:
      return state;
  }
}
