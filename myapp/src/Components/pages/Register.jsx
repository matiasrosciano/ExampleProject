import React, { Component } from 'react'
import { auth } from '../helpers/Auth'
import 'purecss'
import './login-register.css'

export default class Register extends Component{
    constructor(...props){
        super(...props)
        
        this.state = { loginMessage: null }

        this.handleOnSubmit = this.handleOnSubmit.bind(this)
        this.setMessage = this.setMessage.bind(this)
    }

    handleOnSubmit(e){
        e.preventDefault()
        auth( this.email.value, this.password.value )
            .catch( err => this.setState( this.setMessage(`Error : ${err.message}`) ) )
    }

    setMessage(err){
        return { loginMessage : err }
    }

    render(){
        return(
            <article className="Main-container">
                <h1>Seccion Registro</h1>
                <form className="pure-form AuthForm" onSubmit={this.handleOnSubmit}>
                    <input type="email" placeholder="Email" ref={ email => this.email = email } />
                    <input type="password" placeholder="Password" ref={ password => this.password = password } />
                    {
                        this.state.loginMessage && 
                        <div className="u-error">
                            <p>
                            Error: {this.state.loginMessage}
                            </p>
                        </div>
                    }
                    <input type="submit" className="pure-button pure-button.primary" value="Registrar"/>
                </form>
                
            </article>
        )
    }
}