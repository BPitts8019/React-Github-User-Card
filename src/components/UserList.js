import React from "react";
import axios from "axios";
import UserCard from "./UserCard.js";

class UserList extends React.Component {
   constructor (props) {
      super(props);
      this.state = {
         user_query: "BPitts8019",
         base_user: {},
         allUsers: []
      }
   }

   getUserData = login => {
      
   };

   componentDidMount () {
      // this.setState({
      //    github_data: {
      //       "login": "BPitts8019",
      //       "id": 31142450,
      //       "node_id": "MDQ6VXNlcjMxMTQyNDUw",
      //       "avatar_url": "https://avatars3.githubusercontent.com/u/31142450?v=4",
      //       "gravatar_id": "",
      //       "url": "https://api.github.com/users/BPitts8019",
      //       "html_url": "https://github.com/BPitts8019",
      //       "followers_url": "https://api.github.com/users/BPitts8019/followers",
      //       "following_url": "https://api.github.com/users/BPitts8019/following{/other_user}",
      //       "gists_url": "https://api.github.com/users/BPitts8019/gists{/gist_id}",
      //       "starred_url": "https://api.github.com/users/BPitts8019/starred{/owner}{/repo}",
      //       "subscriptions_url": "https://api.github.com/users/BPitts8019/subscriptions",
      //       "organizations_url": "https://api.github.com/users/BPitts8019/orgs",
      //       "repos_url": "https://api.github.com/users/BPitts8019/repos",
      //       "events_url": "https://api.github.com/users/BPitts8019/events{/privacy}",
      //       "received_events_url": "https://api.github.com/users/BPitts8019/received_events",
      //       "type": "User",
      //       "site_admin": false,
      //       "name": "Bradley Pitts",
      //       "company": null,
      //       "blog": "",
      //       "location": "Phoenix, AZ",
      //       "email": null,
      //       "hireable": null,
      //       "bio": null,
      //       "public_repos": 44,
      //       "public_gists": 0,
      //       "followers": 1,
      //       "following": 3,
      //       "created_at": "2017-08-18T19:49:32Z",
      //       "updated_at": "2019-09-18T02:00:56Z"
      //    }
      // });
      let baseUser = this.getUserData();
      axios
         .get(`https://api.github.com/users/${this.state.user_query}`)
         .then(response => {
            console.log(response.data);
            this.setState({
               base_user: response.data
            });

            if (response.data.followers > 0) {
               return axios.get(`https://api.github.com/users/${this.state.user_query}/followers`);
            } else {
               this.setState({
                  allUsers: [
                     response.data
                  ]
               });
            }
         })
         .then(response => {
            console.log(response.data);

            let followerNames = response.data.map(follower => follower.login);
            followerNames = [
               ...followerNames,
               // "thisshouldError",
               "tetondan",
               "dustinmyers",
               "justsml",
               "luishrd",
               "bigknell"
            ];
            console.log(followerNames);

            const followersList = followerNames.map(follower => axios.get(`https://api.github.com/users/${follower}`));
            return new Promise((resolve, reject) => {
               if (followersList && followersList.length > 0) {
                  resolve(axios.all(followersList));
               } else {
                  reject(Error("No Followers to process"));
               }
            });
            
         })
         .then(followers => {
            // console.log(followers);

            // console.log([
            //    this.state.base_user,
            //    ...followers.map(follower => follower.data)
            // ]);

            this.setState({
               allUsers: [
                  this.state.base_user,
                  ...followers.map(follower => follower.data)
               ]
            });
         })
         .catch(error => {
            console.error(`There was a problem getting ${this.state.username}'s user data from GitHub!`);
            console.error(error);
         })
   }

   render () {
      return (
         (this.state.allUsers.length > 0)
         ?  this.state.allUsers.map(user => <UserCard key={user.id} data={user} />)
         :  <h1>Loading GitHub Data...</h1>
      );
   }
}

export default UserList;

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