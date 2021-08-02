import * as React from "react";

export function RegisterForm () {

    const [form, setForm] = React.useState({
        username: '',
        password: '',
        email: '',
        firstName: '',
        lastName: ''
    });

    const handleInputChange = e => {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        setForm({
            ...form,
            [name]: value
        });
    }

    return (
        <section className="hero">
            <div className="hero-body container">
                <h3 className="title has-text-centered">Let's gooooo</h3>
                <form action="post" className="box">
                    <div className="columns is-variable is-5">
                        <div className="column">
                            <div className="field">
                                <label className="label">Email</label>
                                <div className="control">
                                    <input
                                        onChange={handleInputChange} 
                                        type="email"
                                        name="email" 
                                        className="input" 
                                    />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Username</label>
                                <div className="control">
                                    <input
                                        onChange={handleInputChange} 
                                        name="username"
                                        type="text" 
                                        className="input" />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Password</label>
                                <div className="control">
                                    <input
                                        onChange={handleInputChange} 
                                        type="password"
                                        name="password"
                                        className="input" />
                                </div>
                            </div>
                        </div>

                        <div className="column">
                            <div className="field">
                                <label className="label">First Name</label>
                                <div className="control">
                                    <input
                                        onChange={handleInputChange}
                                        name="firstName"
                                        type="text" 
                                        className="input" />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Last Name</label>
                                <div className="control">
                                    <input
                                        onChange={handleInputChange} 
                                        name="lastName" 
                                        type="text" 
                                        className="input" />
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="buttons">
                        <button className="button is-primary" type="submit">Sign up</button>
                        <button className="button">Cancel</button>
                    </div>
                </form>                                    
            </div>
        </section>
    )
}

export default RegisterForm;