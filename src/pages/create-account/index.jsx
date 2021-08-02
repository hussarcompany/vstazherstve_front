import React, { useState } from "react";

import axios from "axios";

import { FormValidation } from "./form-validation";

export function RegisterForm () {

    const [form, setForm] = useState({
        username: '',
        password: '',
        email: '',
        firstName: '',
        lastName: ''
    });

    const [inputsValidation, setInputsValidation] = useState({
        emailValid: true,
        userNameValid: true,
        passwordValid: true,
        firstNameValid: true,
        lastNameValid: true
   });

    const [showResponseMessage, setShowResponseMessage] = useState(false);

    const handleInputChange = e => {
        const value = e.target.value;
        const name = e.target.name;

        setForm({
            ...form,
            [name]: value
        });
    };

    const validate = e => {
        const value = e.target.value;
        const name = e.target.name;

        switch (name) {
            
            case 'email':
            const emailValid = value.length >=5 && value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);

            assignValidation('emailValid', emailValid);
                break;
            
            case 'username':
            const userNameValid = value.length < 19 && value.length > 5;

            assignValidation('userNameValid', userNameValid);
                break;
        
            case 'password':
            const passwordValid = value.length >=6 && value.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i);

            assignValidation('passwordValid', passwordValid);
                break;
            
            case 'firstName':
            const firstNameValid = value.length >= 3 && value.match(/^[a-z ,.'-]+$/i) && value.length <= 30;

            assignValidation('firstNameValid', firstNameValid);
                break;
            
            case 'lastName':
            const lastNameValid = value.length >= 3 && value.match(/^[a-z ,.'-]+$/i) && value.length <= 30;

            assignValidation('lastNameValid', lastNameValid)
                break;
        
            default:
                break;
        }
    }

    const assignValidation = (name, isValid) => {
        setInputsValidation({
            ...inputsValidation,
            [name]: isValid
        })
    }

    const submitForm = e => {
        e.preventDefault();

        const user = form;

        axios.post('https://vstazuserserviceprovider.herokuapp.com/send_here', 
            user, 
            {
                headers: { 
                    'Content-Type' : 'text/json' 
                }
            }
            ).then(res => {
            if (res) setShowResponseMessage(true) 
        });
    }

    //Todo: Валидация
    //Todo: Фэйковый субмит

    return (
        <section className="hero">
            <div className="hero-body container">
                <h3 className="title has-text-centered">Let's gooooo</h3>
                <form onSubmit={submitForm} action="post" className="box">
                    <div className="columns is-variable is-5">
                        <div className="column">
                            <div className="field">
                                <label className="label">Email</label>
                                <div className="control">
                                    <input
                                        onChange={handleInputChange}
                                        onBlur={validate} 
                                        type="email"
                                        name="email" 
                                        className="input"
                                        required 
                                    />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Username</label>
                                <div className="control">
                                    <input
                                        onChange={handleInputChange}
                                        onBlur={validate} 
                                        name="username"
                                        type="text" 
                                        className="input" 
                                        required
                                        />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Password</label>
                                <div className="control">
                                    <input
                                        onChange={handleInputChange}
                                        onBlur={validate}
                                        type="password"
                                        name="password"
                                        className="input"
                                        required 
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="column">
                            <div className="field">
                                <label className="label">First Name</label>
                                <div className="control">
                                    <input
                                        onChange={handleInputChange}
                                        onBlur={validate} 
                                        name="firstName"
                                        type="text" 
                                        className="input" 
                                        required    
                                    />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Last Name</label>
                                <div className="control">
                                    <input
                                        onChange={handleInputChange}
                                        onBlur={validate} 
                                        name="lastName" 
                                        type="text" 
                                        className="input" 
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="buttons">
                        <button className="button is-primary" type="submit">Sign up</button>
                        <button className="button">Cancel</button>
                    </div>
                </form>
                {
                    <FormValidation formErrors={{inputsValidation}} />                                    
                }
                {
                    showResponseMessage ? <p className="has-text-primary">Form succesfully submited!</p> : ''
                }
            </div>            
        </section>
    )
}

export default RegisterForm;