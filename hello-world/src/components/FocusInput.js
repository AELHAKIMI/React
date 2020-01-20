import React, { Component } from 'react'
import Input from './Input'

class FocusInput extends Component {
    constructor(props) {
        super(props)
        this.ComponentRef = React.createRef()
    
    }
    clickHandler = () =>{
        this.ComponentRef.current.focusInput()
    }
    
    render() {
        return (
            <div>
                <Input  ref= {this.ComponentRef}/>
                <button onClick={this.clickHandler}> Focus Input</button> 
            </div>
        )
    }
}

export default FocusInput
