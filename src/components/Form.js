import {Component} from 'react';
import {FiSearch} from 'react-icons/fi';
import axios from 'axios';
import '../css/Form.css';

class Form extends Component{

    state = {
        username: ''
    }
    
    fetchData = async() =>{
        const dummyData = {
            name: "Invalid Username",
            created_at: "2020-01-01T19:32:37Z",
            bio: "No bio",
            twitter_username: 'No twitter account',
            public_repos: 0,
            followers: 0,
            following: 0,
            location: 'Unknown'
        }

        try{
            const res = await axios.get(`https://api.github.com/users/${this.state.username}`);
            this.props.fetchUserData(res.data);
        }
        catch(err){
            alert("Invalid Username");
            this.props.fetchUserData(dummyData);
        }
        this.setState({
            username:''
        })
        
    }
    
    
    render(){
        const style = { color: "#0378fc" };
        return(
            <div className="form">
                <div className="wrapper">
                    <FiSearch style = {style}/> 
                    <input 
                        value={this.state.username}
                        onChange = {(e) => this.setState({username: e.target.value})}
                        type="text" placeholder="Search github username..." 
                        className="user_input"
                    />
                </div>
                <button onClick={this.fetchData} className="submit-btn">Search</button>
            </div>
        )
    }
}

export default Form;