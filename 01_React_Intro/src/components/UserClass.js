import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    const { name, location } = this.props;
    const { count } = this.state;
    return (
      <div className="user-card">
        <h3>Count : {count}</h3>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increment count
        </button>

        <h3>Name : {name}</h3>
        <h4>Location : {location}</h4>
        <h4>Contact : manoj.balineni04@gmail.com</h4>
      </div>
    );
  }
}

export default UserClass;
