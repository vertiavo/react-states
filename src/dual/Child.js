import React, {Component} from 'react';
import './dual.css';

class Child extends Component {

    makeOperation = (e) => {
        const operation = e.target.name;
        let value = this.props.age;
        switch (operation) {
            case 'increment':
                value++;
                break;
            case 'decrement':
                value--;
                break;
            default:
                break;
        }
        this.props.updateAge(value);
    };

    render() {
        return (
            <div>
                <div className="form-group">
                    <label htmlFor="age">Selected age:</label>
                    <input type="number" className="form-control" id="age" name="age" value={this.props.age} disabled/>
                </div>
                <button type="submit" className="btn btn-primary" name="decrement" onClick={this.makeOperation}
                        disabled={this.props.age <= 1}>Decrement
                </button>
                |
                <button type="submit" className="btn btn-primary" name="increment" onClick={this.makeOperation}
                        disabled={this.props.age >= 120}>Increment</button>
            </div>
        );
    }
}

export default Child;
