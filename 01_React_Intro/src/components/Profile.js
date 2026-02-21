import React from "react";

class Profile extends React.Component {
  constructor(props) {
    console.log("Constructor Called");

    super(props);
    this.state = {
      userInfo: {
        name: "sample_name",
        location: "Sample_location",
      },
    };
  }
  async componentDidMount() {
    console.log("Component did mount called");

    const data = await fetch("https://api.github.com/users/manojbalineni");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    console.log(json);
  }
  render() {
    console.log("Render method called");

    const { avatar_url, name, location } = this.state.userInfo;
    console.log("Rendering of the component");
    return (
      <div className="profile-details">
        <h2>Details fetched from github</h2>
        <img src={avatar_url} alt="" />
        <h3>Name :{name}</h3>
        <h3>Location : {location}</h3>
      </div>
    );
  }
}

export default Profile;
