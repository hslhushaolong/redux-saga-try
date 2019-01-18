import { delay } from 'redux-saga'
import { put, takeLatest, all, call } from 'redux-saga/effects'
import { fetchAppurltry } from './api/app'
// Our worker Saga: 将执行异步的 increment 任务
var num = 0;
export function* incrementAsync(action) {
    // while(true) {
    // const action= yield take('INCREMENT');
    const payload = {id: 1213, name: '胡少龙'};
    const result = yield call(fetchAppurltry, payload)
    console.log(result)
    num+=1;
    console.log(num)
    // }
}

// Our watcher Saga: 在每个 INCREMENT_ASYNC action spawn 一个新的 incrementAsync 任务
export function* watchIncrementAsync() {
  yield takeLatest('INCREMENT_ASYNC', incrementAsync)
  // yield takeEvery('INCREMENT_ASYNC', twofunc)
}

export function* helloSaga() {
    console.log('Hello Sagas!');
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
function* rootSaga() {
    yield all([
      helloSaga(),
      watchIncrementAsync()
    ])
}

export default rootSaga;