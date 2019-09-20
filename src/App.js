import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent';
import EventPractice from './EventPractice';
import ValidationSample from "./ValidationSample";
import ScrollBox from "./ScrollBox";
import Counter from './Counter';
import Say from './Say';
import IterationSample from "./IterationSample";
import LifeCycleSample from "./LifeCycleSample";

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

function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
    state = {
        color: '#000000'
    }

    handleClick = () => {
        this.setState({
            color: getRandomColor()
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>랜덤 색상</button>
                <LifeCycleSample color={this.state.color}/>
            </div>
        );
    }
}

export default App;
