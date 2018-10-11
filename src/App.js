import React, { Component } from 'react'
import './App.css'
import { user, node } from '@solid/query-ldflex'
import auth from 'solid-auth-client'
import { AuthButton, LoggedInPane, LoggedOutPane, DataField } from './solid-components/index'
import Profile from './components/Profile'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <div className="App">
        <LoggedInPane>
          <Profile user={ user } image='https://media.licdn.com/dms/image/C5103AQE91XRAYxb73A/profile-displayphoto-shrink_200_200/0?e=1544054400&v=beta&t=ZDP1HOpBbU61AisTBzkRdPMJlT7iBkbmhvsacymVrPI'/>
        </LoggedInPane>
        <LoggedOutPane>
          <p>You are logged out.</p>
        </LoggedOutPane>
        <br/>
        <AuthButton popup="https://solid.community/common/popup.html"/>
      </div>
    );
  }
}

export default App
