import React, { createContext, useEffect , useState , useReducer } from 'react';
import './App.css';
// import axios from 'axios'
// import WrapComponent from './components/WrapComponent';
import Check from './components/Check';
import FocusInput from './components/FocusInput';
import Count_ref from './components/Count_ref';
import DocTitleUpdateOne from './components/DocTitleUpdateOne';
import DocTitleUpdateTwo from './components/DocTitleUpdateTwo';
import Form from './components/Form';
// import ComponentA from './components/ComponentA';
// import ComponentB from './components/ComponentB';
// import ComponentC from './components/ComponentC';
// import CounterReducer from './components/CounterReducer';
// import EffectHook from './components/EffectHook';
// import MouseEventEffect from './components/MouseEventEffect';
// import DataFetch from './components/DataFetch';
// import DataFetchById from './components/DataFetchById';
// import ComponentC from './components/ComponentC';
// import Counter from './components/Counter';
// import CounterHook from './components/CounterHook';
// import FormHook from './components/FormHook';
// import ItemHook from './components/ItemHook';

// export const UserContext = createContext()
// export const LanguageContext = createContext()
// export const CountContext = createContext()

// const initialState = {
//   // firstCounter: 0
//   loading: true,
//   error: '',
//   post: {}
// }
// const reducer = (state, action) => {
  // switch(action.type) {// action -> action.type
  //   case 'increment1':
  //     // return state + 1
  //     return {...state, firstCounter: state.firstCounter + action.value}
  //   case 'decrement1' :
  //     return {...state, firstCounter: state.firstCounter - action.value}
  //   case 'reset':
  //     return initialState
  //   default:
  //     return state

//   switch(action.type) {
//     case 'FETCH_SUCCESS':
//       console.log(action.payload)
//       return {
//         loading: false,
//         post: action.payload,
//         error: ''
//       }
//     case 'FETCH_ERROR':
//       return {
//         loading: false,
//         post: {},
//         error: 'データの取得に失敗しました。'
//       }
//     default:
//       return state
//   }
// }

function App() {
  // const [user, setUser] = useState({name: 'yamada', age: '32'})
  // const [language, setLanguage] = useState('日本語')

  // const [state, dispatch] = useReducer(reducer, initialState)
  // const [count, dispatch] = useReducer(reducer, initialState)

  // useEffect(() => {
  //   axios
  //     .get('https://jsonplaceholder.typicode.com/posts/1')
  //     .then(res => {
  //       dispatch({type: 'FETCH_SUCCESS', payload: res.data})
  //     })
  //     .catch(err => {
  //       dispatch({type: 'FETCH_ERROR'})
  //     })
  // }, [])
  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <CounterHook /> */}
      {/* <FormHook /> */}
      {/* <ItemHook /> */}
      {/* <EffectHook /> */}
      {/* <MouseEventEffect /> */}
      {/* <DataFetch /> */}
      {/* <DataFetchById /> */}
      {/* <UserContext.Provider value={user}>
        <LanguageContext.Provider value={language}>
          <ComponentC />
        </LanguageContext.Provider>
      </UserContext.Provider> */}
      {/* <CounterReducer /> */}
      {/* <h1>カウント : {count.firstCounter}</h1>
        <CountContext.Provider
          value={{ countState: count, countDispatch: dispatch}} >
          <ComponentA />
          <ComponentB />
          <ComponentC />
        </CountContext.Provider> */}
      {/* <h1>{state.loading ? 'Loading...': state.post.title}</h1>
      <h2>{state.error ? state.error: null}</h2> */}

      {/* <WrapComponent /> */}
      {/* <Check /> */}
      {/* <h1>useRef</h1> */}
      {/* <FocusInput /> */}
      {/* <Count_ref /> */}

      <h1>Custom Hook</h1>
      {/* <DocTitleUpdateOne />
      <DocTitleUpdateTwo /> */}
      <Form />
    </div>
  );
}

export default App;
