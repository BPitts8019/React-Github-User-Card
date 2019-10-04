import React from 'react';
import UserList from "./components/UserList.js";
import './App.css';
/*
// 20191004153000
// https://api.github.com/users/BPitts8019

{
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
}
*/
class App extends React.Component {
   render() {
      return (
         <div className="App">
            <header>
               <img src="./images/lambdalogo.png" alt="Lambda Logo" />
               <p>❤️'s</p>
               <img src="./images/githublogo.png" alt="GitHub Logo" />
            </header>
            <div class="cards">
               <h1>Show some Cards here</h1>
            </div>
         </div>
      );
   }
}

export default App;
