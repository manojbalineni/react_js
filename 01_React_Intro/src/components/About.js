import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import Profile from "./Profile";

class About extends React.Component {
  constructor() {
    super();
    console.log("Constructor method in parent component");
  }

  componentDidMount() {
    console.log("Component did mount in the parent component");
  }
  render() {
    console.log("Render method in the parent component");

    return (
      <div>
        <h1>This is the About us page</h1>
        <User
          name={"Manoj Babu (functional compenent)"}
          location={"Hyderabad (functional component)"}
        />
        <UserClass
          name={"Manoj Babu (class compenent)"}
          location={"Hyderabad (class component)"}
        />
        <Profile />
      </div>
    );
  }
}

export default About;
