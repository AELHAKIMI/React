import React,{Component} from 'react'

class  Welcome extends Component {
    render(){
        const {firstName , lastName} = this.props
        //const {state1, state2} = this.state
        return(
            <h1>Welcome {firstName} {lastName}</h1>
        )
        
    } 
}

export default Welcome