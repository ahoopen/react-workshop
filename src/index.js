import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './style.css';

/**
 *
 * Render the counter button. When the counter reaches 10
 * show the following message 'You have won!'
 *
 * hint: you can pass functions as props
 */
class Verdict extends Component {

    render() {
        return (
            <div>
                // your solution
            </div>
        );
    }
}

class Counter extends Component {

    state = {
        count: 0
    };

    increment = () => {
        this.setState({ count: this.state.count + 1 });
    };

    render() {
        return (
            <div>
                <button type="button" onClick={this.increment}>increment</button>
                {this.state.count}
            </div>
        )
    }
}

ReactDOM.render(<Verdict/>,
    document.getElementById('implementation')
);
