import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import createOscillator from './utils/createOscillator';
import './index.css';

const Theremin = class extends Component {

    componentDidMount() {
        this.oscillator = createOscillator()
    }

    play = () => {
        this.oscillator.play()
    };

    stop = () => {
        this.oscillator.stop()
    };

    changeTone = (event) => {
        const {clientX, clientY} = event;
        const {top, right, bottom, left} = event.target.getBoundingClientRect();
        const pitch = (clientX - left) / (right - left);
        const volume = 1 - (clientY - top) / (bottom - top);

        this.oscillator.setPitchBend(pitch);
        this.oscillator.setVolume(volume);
    };

    render() {
        return (
            <div>
                <h1>Theremin</h1>
                <div
                    className="theramin"
                    onMouseEnter={this.play}
                    onMouseLeave={this.stop}
                    onMouseMove={this.changeTone}
                />
            </div>
        );
    }
};


ReactDOM.render(
    <Theremin />,
    document.getElementById('root')
);
