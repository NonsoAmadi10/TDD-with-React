import React, { Component } from 'react';
import './Timer.css';
class Timer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            minutes: 25,
            seconds: 0,
            isOn: false
        }
    }
    startTimer = () => {
        console.log('starting...')
    }

    stopTimer = () => {
        console.log('stopping...')
    }

    resetTimer = () => {
        console.log('resetting...')
    }

    render() {
        return (
            <section class="time-container" />
        )
    }
};

export default Timer;
