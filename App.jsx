import React, { Component } from 'react';
class App extends Component {
    state = { cal: "", rbc:"" }
    sub=(e)=>{
        if(e[e.length-1]==="-"){
            var y=eval(this.state.cal);
            this.setState({cal: this.state.cal+'-'})
            this.setState({rbc: y})
        }
    }
    plus=(e)=>{
        if(e[e.length-1]==="+"){
            var y=eval(this.state.cal);
            this.setState({cal: this.state.cal+'+'})
            this.setState({rbc: y})
        }
    }
    mult=(e)=>{
        if(e[e.length-1]==="*"){
            var y=eval(this.state.cal);
            this.setState({cal: this.state.cal+'*'})
            this.setState({rbc: y})
        }
    }
    div=(e)=>{
        if(e[e.length-1]==="/"){
            var y=eval(this.state.cal);
            this.setState({cal: this.state.cal+'/'})
            this.setState({rbc: y})
        }
    }
    one=()=>{
        this.setState({cal: this.state.cal+'1'})
    }
    two=()=>{
        this.setState({cal: this.state.cal+'2'})
    }
    three=()=>{
        this.setState({cal: this.state.cal+'3'})
    }
    four=()=>{
        this.setState({cal: this.state.cal+'4'})
    }
    five=()=>{
        this.setState({cal: this.state.cal+'5'})
    }
    six=()=>{
        this.setState({cal: this.state.cal+'6'})
    }
    seven=()=>{
        this.setState({cal: this.state.cal+'7'})
    }
    eight=()=>{
        this.setState({cal: this.state.cal+'8'})
    }
    nine=()=>{
        this.setState({cal: this.state.cal+'9'})
    }
    zero=()=>{
        this.setState({cal: this.state.cal+'0'})
    }
    clear=()=>{
        this.setState({cal: this.setState.cal=''})
        this.setState({rbc: this.setState.rbc=""})
    }
    equal=(e)=>{
        if(e[e.length-1]==="="){
            var y=eval(this.state.cal);
            this.setState({cal: y})
            this.setState({rbc: y})
        }
        else{
            this.setState({cal: e})
        }     
    }
    dot=(e)=>
    {
        this.setState({cal: this.state.cal+'.'})
    }
    del=(e)=>
    {
        this.setState({cal: this.state.cal.substring(0,this.state.cal.length-1)})
    }

    render() { 
        return (
            <div className="calculator">
            <div className='holder'>
                <input className="display-box" type="text" value={this.state.cal}></input>
                <input className="right-corner-box" type="text" value={this.state.rbc}></input>
            </div>
            <button className='span-two' onClick={(e)=>this.clear(e.target.innerHTML)} value={this.state.cal}>AC</button>
            <button onClick={(e)=>this.del(e.target.innerHTML)} value={this.state.cal}>del</button>
            <button onClick={(e)=>this.div(e.target.innerHTML)} value={this.state.cal}>/</button>
            <button onClick={(e)=>this.one(e.target.innerHTML)} value={this.state.cal}>1</button>
            <button onClick={(e)=>this.two(e.target.innerHTML)} value={this.state.cal}>2</button>
            <button onClick={(e)=>this.three(e.target.innerHTML)} value={this.state.cal}>3</button>
            <button onClick={(e)=>this.mult(e.target.innerHTML)} value={this.state.cal}>*</button>
            <button onClick={(e)=>this.four(e.target.innerHTML)} value={this.state.cal}>4</button>
            <button onClick={(e)=>this.five(e.target.innerHTML)} value={this.state.cal}>5</button>
            <button onClick={(e)=>this.six(e.target.innerHTML)} value={this.state.cal}>6</button>
            <button onClick={(e)=>this.plus(e.target.innerHTML)} value={this.state.cal}>+</button>
            <button onClick={(e)=>this.seven(e.target.innerHTML)}value={this.state.cal}>7</button>
            <button onClick={(e)=>this.eight(e.target.innerHTML)} value={this.state.cal}>8</button>
            <button onClick={(e)=>this.nine(e.target.innerHTML)} value={this.state.cal}>9</button>
            <button onClick={(e)=>this.sub(e.target.innerHTML)} value={this.state.cal}>-</button>
            <button onClick={(e)=>this.zero(e.target.innerHTML)} value={this.state.cal}>0</button>
            <button onClick={(e)=>this.dot(e.target.innerHTML)} value={this.state.cal}>.</button>
            <button className='span-two' onClick={(e)=>this.equal(e.target.innerHTML)} value={this.state.cal}>=</button>
            </div>
        )
    }
}
 
export default App;