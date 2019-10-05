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

   componentDidMount () {
      //Get base user data from GitHub
      axios
         .get(`https://api.github.com/users/${this.state.user_query}`)
         .then(response => {
            console.log(response.data);
            this.setState({
               base_user: response.data
            });

            //if user has followers, then grab the list
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

            //we only get here if there were followers
            //process the list of followers into a list of usernames,
            //then add a few extra
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
            //we only get here if all of the promises have been resolved
            //combine all the user data into one array
            this.setState({
               allUsers: [
                  this.state.base_user,
                  ...followers.map(follower => follower.data)
               ]
            });
         })
         .catch(error => {
            console.error(`There was a problem getting user data from GitHub!`);
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