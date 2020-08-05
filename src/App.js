import React, { Component } from 'react';
import PhoneForm from './PhoneForm';

class App extends Component {
  hanleCreate = (data) => {
    console.log(data);
  }
  render() {
    return (
      <div>
        <PhoneForm onCreate={this.handleCreate} />
      </div>
    );
  }
}

export default App;