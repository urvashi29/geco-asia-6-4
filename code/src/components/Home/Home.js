import React, { Component } from "react";
import axios from "axios";

class Home extends Component {
    
  handleClick = () => {
    let api = "https://reqres.in/api/users/";
    let user = {
      name: "morpheus",
      job: "leader",
    };

    axios
      .post(api, user)
      .then((res) => {
        console.log(res);
        // navigate('/about');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        Welcome to our website.
        <button onClick={this.handleClick}>Send</button>
      </div>
    );
  }
}

export default Home;
