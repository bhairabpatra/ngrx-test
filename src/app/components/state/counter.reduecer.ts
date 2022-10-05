import { Action, createReducer, on } from '@ngrx/store';
import { dec, inc, reset } from './counter.action';
import { initailState } from './counter.state';

const _countReducer = createReducer(
  initailState,

  on(inc, (state) => {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }),
  on(dec, (state) => {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }),
  on(reset, (state) => {
    return {
      ...state,
      counter: state.counter * 0,
    };
  })
);

export function countReduer(state: any, action: Action) {
  return _countReducer(state, action);
}
