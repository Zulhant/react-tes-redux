import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Image, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./style.css";

function Profile(props) {
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
          {user ? (
            <div>
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
            </div>
          ) : (
            <div>
              <Link to="/login">
                <Button>Login</Button>
              </Link>
            </div>
          )}
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
