import React, {Component} from 'react';

class CounterClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count:0
        }
        this.addState = this.addState.bind(this);
        this.removeState = this.removeState.bind(this);
    }
     addState(){
        this.setState({count: this.state.count + 1})
    }

     removeState(){
         this.setState({count: this.state.count - 1})
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                    <button onClick={this.addState}>Add</button>
                    <button onClick={this.removeState}>Remove</button>

            </div>
        );
    }
}

export default CounterClass;