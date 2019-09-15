import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent';
import EventPractice from './EventPractice';
import ValidationSample from "./ValidationSample";
import ScrollBox from "./ScrollBox";
import Counter from './Counter';
import Say from './Say';

/*class App extends Component {
    render() {
        return (
            /!*
            <MyComponent name="React"/>
            *!/
            /!*
            <MyComponent name={"React"} age={4}/>
            *!/
            /!*
            <EventPractice/>
            *!/
            /!*
            <ValidationSample></ValidationSample>
            *!/
            /!*
            <div>
                <ScrollBox
                    ref={(ref) => this.scrollBox = ref}/>
                <button onclick={() => this.scrollBox.scrollToBottom()}>
                    맨 밑으로
                </button>
            </div>
            *!/

        );
    }
}*/

const App = () => {
    return <Say/>;
}

export default App;
