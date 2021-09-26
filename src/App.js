import React from 'react';
import './App.css';
import Card from './components/Card';
import Form from './components/Form';


class App extends React.Component{

      state = {
        user: {
            name: "John Doe",
            join_date: "Joined 30 June 2020",
            user_name: "JohnDoe",
            bio: "This is just a sample fake github card",
            twitter_username: 'johndoe22',
            public_repos: 34,
            followers: 123,
            following: 126,
            location: 'Madrid'
        }
      }

      giveDate = (userDate) => {
          const months = ['January', 'February', 'March', 'April','May', 'June', 
          'July', 'August', 'September', 'October', 'November','December']
          
          let createDate = "Joined ";
          const dateValue = userDate.slice(8,10);
          let idx = parseInt(userDate.slice(5,7));
          console.log(idx);
          const month = months[idx-1];
          const year = userDate.slice(0,4);

          createDate = createDate + dateValue + " " + month + " " + year;
          return createDate;
      }

      fetchUserData = (userData) =>{
        this.setState({
          user: {
            name: userData.name,
            join_date: this.giveDate(userData.created_at),
            user_name: userData.name,
            bio: userData.bio,
            twitter_username: userData.twitter_username,
            public_repos: userData.public_repos,
            followers: userData.followers,
            following: userData.following,
            location: userData.location
          } 
        })
      }

      render(){

        return(
          <div className="App">
            <Form fetchUserData={this.fetchUserData} />
            <Card user={this.state.user}/>
          </div>

        )
      }
}

export default App;
