import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn:true
        }
    }
    
    render() {
        //////////// 1 
        // if (this.state.isLoggedIn){
        //     return <div>Welcome Hakimi</div>
        // }
        // else{
        //     return <div>Welcome Guest</div>
        // }

        ///////////// 2
        // let message
        // if (this.state.isLoggedIn){
        //     message = <div>Hello Hakimi</div>
        // }
        // else{
        //     message = <div>Hello Guest</div>
        // }
        // return <div>{message}</div>

        ///////////// 3 

        return this.state.isLoggedIn? (
            <div>Hello Hakimi</div>
        ):(
            <div>Hello Guest</div>
        )

        ///////////// 4 
        // return this.state.isLoggedIn && <div> welcome hakimi</div>

    }
}

export default UserGreeting
