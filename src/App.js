import React from 'react';
import UserList from "./components/UserList.js";
import './App.css';

class App extends React.Component {
   render() {
      return (
         <div className="App">
            <header>
               <img src="./images/lambdalogo.png" alt="Lambda Logo" />
               <p>❤️'s</p>
               <img src="./images/githublogo.png" alt="GitHub Logo" />
            </header>
            <div className="cards">
               <UserList />
            </div>
         </div>
      );
   }
}

export default App;
