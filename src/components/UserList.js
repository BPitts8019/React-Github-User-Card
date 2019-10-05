import React from "react";
import axios from "axios";
import UserCard from "./UserCard.js";

class UserList extends React.Component {
   constructor (props) {
      super(props);
      this.state = {
         user_query: "BPitts8019"
      }
   }
   // handleChange = (e) => {
   //    this.setState({
   //        name: e.target.value
   //    })
   // }

   get USER_DATA () {
      return {
         "login": "BPitts8019",
         "id": 31142450,
         "node_id": "MDQ6VXNlcjMxMTQyNDUw",
         "avatar_url": "https://avatars3.githubusercontent.com/u/31142450?v=4",
         "gravatar_id": "",
         "url": "https://api.github.com/users/BPitts8019",
         "html_url": "https://github.com/BPitts8019",
         "followers_url": "https://api.github.com/users/BPitts8019/followers",
         "following_url": "https://api.github.com/users/BPitts8019/following{/other_user}",
         "gists_url": "https://api.github.com/users/BPitts8019/gists{/gist_id}",
         "starred_url": "https://api.github.com/users/BPitts8019/starred{/owner}{/repo}",
         "subscriptions_url": "https://api.github.com/users/BPitts8019/subscriptions",
         "organizations_url": "https://api.github.com/users/BPitts8019/orgs",
         "repos_url": "https://api.github.com/users/BPitts8019/repos",
         "events_url": "https://api.github.com/users/BPitts8019/events{/privacy}",
         "received_events_url": "https://api.github.com/users/BPitts8019/received_events",
         "type": "User",
         "site_admin": false,
         "name": "Bradley Pitts",
         "company": null,
         "blog": "",
         "location": "Phoenix, AZ",
         "email": null,
         "hireable": null,
         "bio": null,
         "public_repos": 44,
         "public_gists": 0,
         "followers": 1,
         "following": 3,
         "created_at": "2017-08-18T19:49:32Z",
         "updated_at": "2019-09-18T02:00:56Z"
      };
   }
   // getUserCards = (userLogin, getFollowers = false) => {
   //    axios
   //       .get(`https://api.github.com/users/${userLogin}`)
   //       .then(response => {
   //          const userCards = buildUserCard(response.data);
   //          console.log(userCards);
   
   //          document.querySelector(".cards").appendChild(userCards);
   
   //          if (getFollowers) {
   //             return axios.get(`https://api.github.com/users/${userLogin}/followers`);
   //          }
   
   //          return null;
   //       })
   //       .then(response => {
   //          if (response) {
   //             let followers = response.data.map(follower => follower.login);
   //             followers = followers.concat([
   //                "thisshouldError",
   //                "tetondan",
   //                "dustinmyers",
   //                "justsml",
   //                "luishrd",
   //                "bigknell"
   //             ]);
   
   //             followers.forEach(follower => {
   //                getUserCards(follower);
   //             });
   //          }
   //       })
   //       .catch(error => {
   //          console.log(`There was a problem getting ${userLogin}'s user data from GitHub!`);
   //          console.log(error);
   //       });
   // };

   componentDidMount () {
      this.setState({
         github_data: this.USER_DATA
      });
      // axios
      //    .get(`https://api.github.com/users/${this.state.username}`)
      //    .then(response => {
      //       this.setState({
      //          github_data: response.data
      //       });
      //    })
      //    .catch(error => {
      //       console.error(`There was a problem getting ${this.state.username}'s user data from GitHub!`);
      //       console.error(error);
      //    })
   }

   // componentDidUpdate () {
   //    console.log(this.state);
   // }

   render () {
      console.log(
         (this.state.github_data)
         ? this.state.github_data
         : "no data"
      );

      return (
         (this.state.github_data)
         ?  <UserCard data={this.state.github_data} />
         :  <h1>Loading GitHub Data...</h1>
      );
   }
}

export default UserList;
