import React, { Component } from 'react'
import RegComp from './RegComp'
import PureComp from '../PureComp'
import MemoComp from './MemoComp'

class ParentComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: "EL HAKIMI"
        }
    }
    componentDidMount(){
        setInterval(() => {
            this.setState({
                name: "EL HAKIMI"
            })
        }, 2000)
    }
    
    render() {
        console.log("########################### Parent Coponent Render  ##################")
        return (
            <div>
                Parent Component
                <MemoComp name={this.state.name} />
                {/* <RegComp name= {this.props.name} />
                <PureComp name={this.props.name} /> */}

            </div>
        )
    }
}

export default ParentComp
