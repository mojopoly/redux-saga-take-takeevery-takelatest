import { takeLatest, delay, put, take, takeEvery } from 'redux-saga/effects';

export function* onIncrement() {
  yield console.log('I am incremented');
  yield delay(2000);
  yield put({ type: 'INCREMENT_FROM_SAGA' });
}

export function* incrementSaga() {
  yield takeEvery('INCREMENT', onIncrement); //if we define INCREMENT in app.reducer with same functionality of INCREMENT_FROM_SAGA, then  delay effect defined above won't happen nor yield put
  //yield takeLatest('INCREMENT', onIncrement);//takeLatest only triggers the last click if we define a delay
  // while(true) { //this while loop with every mimics what takeEvery does, if fires the console everytime we click 
  //   yield take('INCREMENT');
  //   yield console.log('I am incremented');
  //   yield delay(5000);//this will delay our console.log by 5 sec
  // }
}

// import {take, takeEvery} from 'redux-saga/effects';

// export function* incrementSaga() {
//   //const incrementPayload = yield take('INCREMENT'); //we don't need a second arg for take like we do for takeEvery; instead, take waits for an action. When action happens, take will get the payload from the incoming action if we wanted to by setting it to a const like above. The main difference between take and takeEvery is that take will fire the below console.log once, wehereas takeEvery fires it everytime we click the button to increment. The reason is takeEvery takes a second arg as a function and fire the generator function(incrementSaga) everytime we click the button 
//   yield take('INCREMENT');
//   console.log('I am incremented');
// }