import React, { createContext, useState } from 'react';
import './App.css';
import CounterReducer from './components/CounterReducer';
// import EffectHook from './components/EffectHook';
// import MouseEventEffect from './components/MouseEventEffect';
// import DataFetch from './components/DataFetch';
// import DataFetchById from './components/DataFetchById';
// import ComponentC from './components/ComponentC';
// import Counter from './components/Counter';
// import CounterHook from './components/CounterHook';
// import FormHook from './components/FormHook';
// import ItemHook from './components/ItemHook';

export const UserContext = createContext()
export const LanguageContext = createContext()

function App() {
  // const [user, setUser] = useState({name: 'yamada', age: '32'})
  // const [language, setLanguage] = useState('日本語')
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
      <CounterReducer />
      
    </div>
  );
}

export default App;
