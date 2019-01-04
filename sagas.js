import { delay } from 'redux-saga'
import { put, takeEvery, all } from 'redux-saga/effects'

// Our worker Saga: 将执行异步的 increment 任务
export function* incrementAsync() {
//   yield delay(1000)
    // while(true) {

    // // const action= yield take('INCREMENT');
    // // console.log(action);
    yield put({ type: 'increment' })
    // }
}

// Our watcher Saga: 在每个 INCREMENT_ASYNC action spawn 一个新的 incrementAsync 任务
export function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
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