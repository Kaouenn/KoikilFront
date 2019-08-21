import React from "react";
import MainLayout from "./MainLayout";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render = () => {
    // const query = queryString.parse(this.props.location.search);
    // console.log(query);

    return (
      <MainLayout user={this.props.user} setUser={this.props.setUser}>
        hello
      </MainLayout>
    );
  };
}

export default Home;
