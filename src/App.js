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

  componentDidMount(){

    const ruben = node('https://ruben.verborgh.org/profile/#me');
    showProfile(ruben);

    async function showProfile(person) {
      const label = await person.label;
      console.log(`\nNAME: ${label}`);

      const birthday = await person.birthday;
      console.log(`\nIMG: ${birthday}`);

      console.log('\nTYPES');
      for await (const type of person.type)
        console.log(`  - ${type}`);

      // console.log('\nFRIENDS');
      // for await (const name of person.friends.firstName)
      //   console.log(`  - ${name} is a friend`);
    }
  }

  render() {
    return (
      <div className="App">
        <LoggedInPane>
          <Profile name='Stephan' city='Cologne' image='https://media.licdn.com/dms/image/C5103AQE91XRAYxb73A/profile-displayphoto-shrink_200_200/0?e=1544054400&v=beta&t=ZDP1HOpBbU61AisTBzkRdPMJlT7iBkbmhvsacymVrPI'/>
          <DataField data={user.firstName}/>
        </LoggedInPane>
        <LoggedOutPane>
          <p>You are logged out.</p>
          <AuthButton popup="https://solid.community/common/popup.html"/>
        </LoggedOutPane>
      </div>
    );
  }
}

export default App
