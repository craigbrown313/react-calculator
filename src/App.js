import React, { Component } from 'react';
import './App.css';
import Keys from './components/Keys';
import Display from './components/Display';

class App extends Component {
  state = {
    value: ''
  }
  keyTriggerd = trigger => {
    if (trigger === "="){
      this.calc();
    } else if (trigger === 'C'){
      this.clear()
    } else if(trigger === 'CE'){
      this.delete();
    } else
    this.setState({
      value: this.state.value + trigger
    });
  };

  delete = () => {
    this.setState({
      value: this.state.value.slice(0, 1)
    })
  }
clear = () => {
  this.setState({
    value: ""
  })
};

  calc = () =>  {
  try {this.setState({value: (eval(this.state.value) || "") + ""
    });
  } catch(e){
    this.setState({
      value: 'error'
    });
  }
};
      

    


  render() {
  return (
    <div className="App">
    <div className="body">
      <Display value={this.state.value}/>
       <Keys keyTriggerd={this.keyTriggerd}/>
     </div>
     </div>
  );
}
}

export default App;
