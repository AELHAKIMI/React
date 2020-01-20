import React, { Component } from 'react'

export class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }
    incrementOne(){
        this.setState( prevState =>({
            count: prevState.count +1
        }))
    }
    incrementFive(){
        this.incrementOne()
        this.incrementOne()
        this.incrementOne()
        this.incrementOne()
        this.incrementOne()
    }
    decrementOne(){
        this.setState(prevState => ({
          count: prevState.count >= 1 ? prevState.count - 1 : 0
        }));
    }
     decrementFive(){
         this.decrementOne()
         this.decrementOne()
         this.decrementOne()
         this.decrementOne()
         this.decrementOne()
     }
    render() {
        return (
          <div>
            <div>
              {" "}
              <h1>{this.state.count}</h1>{" "}
            </div>
            <button onClick={() => this.incrementOne()}>+1</button>{" "}
            <button onClick={() => this.incrementFive()}>+5</button>{" "}
            <button onClick={() => this.decrementOne()}>-1</button>{" "}
            <button onClick={() => this.decrementFive()}>-5</button>{" "}
          </div>
        );
    }
}

export default Counter
