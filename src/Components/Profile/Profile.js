import React from "react";
import PropTypes from "prop-types";
import "./profile.css";

function Profile({ fullName, bio, profession, children, handleAlert }) {
    return (
        <div className="profile">
            {children}
            <div>First Name: {fullName}</div>
            <div>Bio : {bio}</div>
            <div>Profession : {profession}</div>
            <button onClick={() => handleAlert(fullName)}>Click me</button>
        </div>
    );
}

Profile.defaultProps = {
    fullName: "your name",
    bio: "A biographie must be placed here",
    profession: "a profession is unknown",
};
Profile.propTypes = {
    fullName: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,
    handleAlert: PropTypes.func,
};

export default Profile;
