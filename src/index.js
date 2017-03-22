import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './style.css';

/**
 * Create a counter that increments the count state by 1 when clicked.
 */

class Counter extends Component {

    state = {};

    render() {
        return (
            <div>
                <button type="button">increment</button>
            </div>
        )
    }
}

ReactDOM.render(<Counter/>,
    document.getElementById('implementation')
);
