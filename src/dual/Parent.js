import React, {Component} from 'react';
import './dual.css';
import Child from "./Child";

class Parent extends Component {

    constructor() {
        super();
        this.state = {
            age: 1
        };
    }

    onAgeUpdate = (age) => {
        this.setState({
            age: age
        })
    };

    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value});
    };

    render() {
        return (
            <div className="dual-body">
                <div className="form-row dual-comp">
                    <div className="form-group col-md-3">
                        <form>
                            <b>Parent component</b><br/>
                            <div className="form-group">
                                <label htmlFor="age">Age</label>
                                <input type="number" id="age" name="age" className="form-control"
                                       placeholder="Enter age" min={1} max={120}
                                       aria-label="Age" value={this.state.age} onChange={this.handleUserInput}/>
                            </div>
                        </form>
                    </div>
                    <div className="form-group col-md-4">
                        <b>Child component</b><br/>
                        <Child age={this.state.age} updateAge={this.onAgeUpdate}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Parent;
