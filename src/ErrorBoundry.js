import React, {Component} from 'react'
import {Link, Redirect, navigate } from '@reach/router'

class ErrorBoundry extends Component {
    state = { hasError: false}
    static getDerivedStateFromError () {
        return {
            hasError: true,
            redirect: false
        }
    }
    componentDidCatch(error, info){
        console.error ("ErrorBoundry caught an error", error, info);
    }

    componentDidUpdate(){
        if (this.state.hasError){
            setTimeout (()=> navigate('/'), 5000);
        }
    }
    render (){
        if (this.state.redirect){
            return <Redirect to="/" />
        }
        if (this.state.hasError){
            return (
                <div>
                    <h1> Error was found. {" "}<Link to="/"> Click here and wait 5 seconds</Link></h1>
                </div>
            )
        }

        return this.props.children;
    }
}

export default ErrorBoundry;