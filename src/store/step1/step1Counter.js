export function step1Counter(state = 0, action) {
  switch (action.type) {
    case 'STEP1_INCREASE':
      return state + 1;
    case 'STEP1_DECREASE':
      return state - 1;
    default:
      return state;
  }
}
