
import React, { Component } from 'react'

class UserInformation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usersinfo: [
                {
                    name: "julius",
                    email: "julius@gmail.com",
                    password: "123456788",
                    description: "I am an awesome person who likes to eat"
                },

                {
                    name: "Evans",
                    email: "Evans@gmail.com",
                    password: "1236666666688",
                    description: "I am an awesome person who likes to swin"
                }
            ],
            name: "",
            email: "",
            password: "",
            description: "",
            
        };

    }

    }
    render() {
        return (
            <section style={{margin: "5rem"}}>

                <form>
                    <div>
                        <label>Name</label>
                        <br />
                        <input type="text" name='name' value={this.state.name} onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label>Email</label>
                        <br />
                        <input type="email" name="email" value={this.state.email} onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label>Password</label>
                        <br />
                        <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                    </div>

                    <div>
                        <label>Description</label>
                        <br />
                        <textarea name="description" value={this.state.description} onChange={this.handleChange}></textarea>
                    </div>
                    <button>Submit</button>
                </form>

                {this.state.usersinfo.map((user, index) => {
                    return (
                        <div key={index}>
                            <h4>Name: {user.name}</h4>
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

export default UserInformation;
