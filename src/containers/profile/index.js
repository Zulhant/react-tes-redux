import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Image, Card, Col, Row, Button } from "react-bootstrap";

import "./style.css";

function Profile(props) {
  console.log("props", props);

  const user = props.user.userInfo;

  const onLogout = () => {
    if (props.user.userInfo.name) {
      localStorage.removeItem("access_user_google");
      localStorage.removeItem("access_user_fb");
    }

    props.history.push("/login");
  };

  return (
    <>
      <Card>
        <Card.Body className="card-profile">
          <center>
            <Image src={user.imageUrl} roundedCircle />
          </center>
          <hr />
          <label>FullName</label>
          <br />
          <p>{user.name}</p>

          <label>Email</label>
          <br />
          <p>{user.email}</p>

          <hr />

          <Button onClick={onLogout}>Logout</Button>
        </Card.Body>
      </Card>
    </>
  );
}

const mapStateToProps = state => {
  return {
    ...state
  };
};

export default connect(mapStateToProps)(Profile);
