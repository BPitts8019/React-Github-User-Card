import React from "react"

class UserCard extends React.Component {
   constructor (props) {
      super(props);
   }

   render () {
      return (
         <div className="card">
            <img src={this.props.data.avatar_url} alt="a user" />
            <div className="card-info">
               <h3 className="name">{this.props.data.name}</h3>
               <p className="userName">{this.props.data.login}</p>
               <p>{`Location: ${this.props.data.location}`}</p>
               <p>
                  Profile: 
                  <a href={this.props.data.html_url} target="_blank">
                     {this.props.data.html_url}
                  </a>
               </p>
               <p>{`Followers: ${this.props.data.followers}`}</p>
               <p>{`Following: ${this.props.data.following}`}</p>
               <p className={(!this.props.data.bio)? "sarcastic" : ""}>{
                  (this.props.data.bio)
                  ?  `Bio: ${this.props.data.bio}` 
                  :  "Wow! So much empty."
               }</p>
            </div>
         </div>
      );
   }
}

export default UserCard;