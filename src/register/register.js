import React, {Component} from 'react';
import {FormErrors} from './formErrors';
import './register.css';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
            password: '',
            formErrors: {login: '', password: ''},
            loginValid: false,
            passwordValid: false,
            formValid: false
        }
    }

    render() {
        return (
            <div className="register-body">
                <div className="register-form">
                    <form>
                        <div className="panel panel-default">
                            <FormErrors formErrors={this.state.formErrors}/>
                        </div>
                        <div className="form-row">
                            <div className={`form-group col-md-6 ${Register.errorClass(this.state.formErrors.login)}`}>
                                <label htmlFor="login">Login</label>
                                <input type="text" className="form-control" id="login" name="login"
                                       placeholder="Enter login" value={this.state.login}
                                       onChange={this.handleUserInput} required/>
                            </div>
                            <div className={`form-group col-md-6 ${Register.errorClass(this.state.formErrors.password)}`}>
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control" name="password"
                                       placeholder="Password"
                                       value={this.state.password}
                                       onChange={this.handleUserInput} required/>
                            </div>
                        </div>
                        <div className="form-group register-slim">
                            <label htmlFor="sex">Sex</label>
                            <select className="form-control" id="sex">
                                <option>Female</option>
                                <option>Male</option>
                            </select>
                        </div>
                        <div className="form-group register-slim">
                            <label htmlFor="age">Age</label>
                            <input type="number" className="form-control" id="age" placeholder="Age" min={1} max={120} required/>
                        </div>
                        <button type="submit" className="btn btn-primary" disabled={!this.state.formValid}>Submit
                        </button>
                    </form>
                </div>
            </div>
        );
    }

    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value},
            () => {
                this.validateField(name, value)
            });
    };

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let loginValid = this.state.loginValid;
        let passwordValid = this.state.passwordValid;

        switch (fieldName) {
            case 'login':
                loginValid = value.match(/^[a-zA-Z_]+$/);
                fieldValidationErrors.login = loginValid ? '' : ' is invalid';
                break;
            case 'password':
                passwordValid = value.length >= 5;
                fieldValidationErrors.password = passwordValid ? '' : ' is too short';
                break;
            default:
                break;
        }
        this.setState({
            formErrors: fieldValidationErrors,
            loginValid: loginValid,
            passwordValid: passwordValid
        }, this.validateForm);
    }

    validateForm() {
        this.setState({formValid: this.state.loginValid && this.state.passwordValid});
    }

    static errorClass(error) {
        return (error.length === 0 ? '' : 'has-error');
    }
}

export default Register;
