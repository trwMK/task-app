import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h2>Hi my name is Mike and I´m learning React!</h2>
      <h4>Version 1.0</h4>
      <Link to="/">Go back!</Link>
    </div>
  );
};

export default About;
