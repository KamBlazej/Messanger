/* eslint-disable no-constant-condition */

import { put, takeEvery, delay } from '../../../../src/effects'

export function* incrementAsync() {
  yield delay(1000)
  yield put({type: 'INCREMENT'})
}

export function* setChannels(d) {
  console.log(d);
  yield put({type: 'SETCHANNELS',data: d.data})
}
export function* setMessages(d) {
  console.log(d);
  yield put({type: 'SETMESSAGES',data: d.data})
}

export default function* rootSaga() {
  //yield takeEvery('INCREMENT_ASYNC', incrementAsync)
  //yield takeEvery('SETCHANNELS', setChannels)
 // yield takeEvery('SETMESSAGES', setMessages)
  
}
