import React, { Component } from 'react'

class UsersForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [
                {
                    name: "julius",
                    email: "julius@gmail.com",
                    password: "1234567890",
                    description: "i am awesome and i love to code.",
                },

                // {
                //     name: "Eric",
                //     email: "eric@gmail.com",
                //     password: "00000000000000",
                //     description: "i am awesome and i love to eat.",
                // },
            ],
            name: "",
            email: "",
            password: "",
            description: "",
        }

    }

    handleChange = (e) => {
        e.preventDefault()
        this.setState({ [e.target.name]: e.target.value })

    };


    handleSubmit = (e) => {
        e.preventDefault()
        const newPerson = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            description: this.state.description,
        }
        this.setState({
            users: [...this.state.users, newPerson],
            name: "",
            email: "",
            password: "",
            description: "",

        })
    }

    render() {
        return (
            <section style={{ margin: "4rem" }}>

                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Name</label>
                        <br />
                        <input type="text" name='name' value={this.state.name} onChange={this.handleChange} />
                    </div>

                    <div>
                        <label>Email</label>
                        <br />
                        <input type="email" name='email' value={this.state.email} onChange={this.handleChange} />
                    </div>

                    <div>
                        <label>Password</label>
                        <br />
                        <input type="password" name='password' value={this.state.password} onChange={this.handleChange} />
                    </div>

                    <label>
                        <label>Description</label>
                        <br />
                        <textarea name="description" value={this.state.description} onChange={this.handleChange}></textarea>
                    </label>
                    <br />
                    <button>Submit</button>
                </form>

                {this.state.users.map((user, index) => {
                    return (
                        <div key={index}>
                            <h4>Name: {user.name} </h4>
                            <h4>Email: {user.email}</h4>
                            <h4>Password: {user.password}</h4>
                            <p>Description: {user.description}</p>
                            <hr />
                        </div>
                    )
                })}

            </section>
        )
    }
}

export default UsersForm;
