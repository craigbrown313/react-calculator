import React, { Component } from 'react';
import {Button} from 'semantic-ui-react'; 

export default class Keys extends Component {
    keyTriggerd = (e) => {
        this.props.keyTriggerd(e.target.name);
    };
    render() {
        return (
            <div className="keys">
            <Button name="(" onClick={this.keyTriggerd}>(</Button>
                <Button name="C" onClick={this.keyTriggerd}>C</Button>
                <Button name="CE" onClick={this.keyTriggerd}>CE</Button>
                <Button name=")" onClick={this.keyTriggerd}>)</Button>
                <Button name="1" onClick={this.keyTriggerd}>1</Button>
                <Button name="2" onClick={this.keyTriggerd}>2</Button>
                <Button name="3" onClick={this.keyTriggerd}>3</Button>
                <Button name="+" onClick={this.keyTriggerd}>+</Button>
                <Button name="4" onClick={this.keyTriggerd}>4</Button>
                <Button name="5" onClick={this.keyTriggerd}>5</Button>
                <Button name="6" onClick={this.keyTriggerd}>6</Button>
                <Button name="-" onClick={this.keyTriggerd}>-</Button>
                <Button name="7" onClick={this.keyTriggerd}>7</Button>
                <Button name="8" onClick={this.keyTriggerd}>8</Button>
                <Button name="9" onClick={this.keyTriggerd}>9</Button>
                <Button name="*" onClick={this.keyTriggerd}>*</Button>
                <Button name="0" onClick={this.keyTriggerd}>0</Button>
                <Button name="." onClick={this.keyTriggerd}>.</Button>
                <Button name="=" onClick={this.keyTriggerd}>=</Button>
                <Button name="/" onClick={this.keyTriggerd}>/</Button>
                
                
            </div>
        )
    }
}
