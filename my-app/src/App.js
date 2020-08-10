import React from 'react';
import './App.css';
import axios from "axios";
import UserList from './components/UserList.js'

//Question: Should I not have the my-app folder? Is there a better way to create it that uses existing folder you're creating in?

//Question: Currently I am imagining this as a list of identical cards, one of which just happens to be the original whose followers are grabbed. But, should the initial user be set apart from followers?

//Question: How do I stop a rerender (and thus a call) every time I change a bit of code? Is that from 'npm start' or is it maybe something else I havea installed? It doesn't do it in codesandbox. Turn LiveServer off maybe? (Note: It wasn't LiveServer. Still does it with LiveServer disabled.)

class App extends React.Component {


  constructor() {
    super();
    this.state = {
      pullName: "tetondan",
      mainUser: {},
      followers: []
    };
  }

  componentDidMount() {
    console.log("App mounted");
    //Get main user
    //Okay this is functional, maybe, but its doing weird array within array stuff
    axios
      .get("https://api.github.com/users/" + this.state.pullName)
      .then((res) => {
        console.log("Main user pulled");
        console.log("main user,", res.data);
        this.setState({
         mainUser: res.data
        })
        console.log("state main user", this.state);
        
      
      })
      .catch((err) => console.log(err));

      //Get followeres

      axios
        .get("https://api.github.com/users/" + this.state.pullName + "/followers")
        .then((res) => {
          console.log("Users pulled");
          console.log(res.data);
          this.setState({
            followers: res.data
          })
          console.log("state all", this.state);
        })
        .catch((err) => console.log(err));
   
    
    
  }

  render() {
    return (
      <div className="App">
        <UserList followers = {this.state.followers} mainUser = {this.state.mainUser}/>
      </div>
    );
  };
  
}

export default App;
