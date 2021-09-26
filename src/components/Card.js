import {Component} from 'react';
import {IoLocationSharp} from 'react-icons/io5';
import {AiOutlineTwitter} from 'react-icons/ai';
import '../css/Card.css';

class Card extends Component{
    render(){

        const user = this.props.user;
        return(
            <div className="card">
                <div className="cat-img-container">
                    <img className="github-cat" src="/github-octocat.png" alt="gitcat"/>
                </div>
                <div className="card-content-box">
                    <div className="content-box1">
                        <div className="name_row1">
                            <span className="name">{user.name}</span>
                            <span className="join-date">{user.join_date}</span>
                        </div>
                        <div className="nickname">@{user.user_name}</div>
                        <div className="bio">{user.bio}</div>
                    </div>
                    <div className="content-box2">
                        <div className="content-inner-box">
                            <div className="content-title">Repos</div>
                            <div className="content-value">{user.public_repos}</div>
                        </div>
                        <div className="content-inner-box">
                            <div className="content-title">Followers</div>
                            <div className="content-value">{user.followers}</div>
                        </div>
                        <div className="content-inner-box">
                            <div className="content-title">Following</div>
                            <div className="content-value">{user.following}</div>
                        </div>
                    </div>
                    <div className="content-box3">
                        <div>
                            <IoLocationSharp />
                            <span>{user.location}</span>
                        </div>
                        <div>
                            <AiOutlineTwitter />
                            <span>{user.twitter_username}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card;