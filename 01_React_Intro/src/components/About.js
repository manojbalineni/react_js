import User from "./User";
import UserClass from "./UserClass";

const About = () => {
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
    </div>
  );
};

export default About;
