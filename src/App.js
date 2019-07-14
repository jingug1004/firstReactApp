import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent';

function App() {
    return (
        /*
        <MyComponent name="React"/>
        */
        <MyComponent name={"React"} age={4}/>
    );
}

export default App;
