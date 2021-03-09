const STEP2_INCREASE = 'STEP2_INCREASE';
const STEP2_DECREASE = 'STEP2_DECREASE';

export function step2IncreaseActionCreator() {
  return {
    type: STEP2_INCREASE
  };
}

export function step2DecreaseActionCreator() {
  return {
    type: STEP2_DECREASE
  };
}

export function step2Counter(state = 0, action) {
  switch (action.type) {
    case STEP2_INCREASE:
      return state + 1;
    case STEP2_DECREASE:
      return state - 1;
    default:
      return state;
  }
}
