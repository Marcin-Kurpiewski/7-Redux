import { createStore } from 'redux';
import reducers from './reducer.js';

const store = createStore(reducers);



// odłączenie nasłuchiwania na zmiany
// var unsubscibe = store.subscribe(() => console.log('zmiana w stanie'));
// unsubscribe();


store.subscribe(() => console.log(store.getState()));

store.dispatch(addComment('pierwszy komentarz'))
store.dispatch(addComment('drugi komentarz'))