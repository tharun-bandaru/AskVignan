import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Avtar from "../../Avtar/Avtar";
import LeftSideBar from "../../components/LeftSideBar/LeftSideBar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBirthdayCake, faPen } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
import EditProfileForm from "./EditProfileForm";
import ProfileBio from "./ProfileBio";

import "./UserProfile.css";

const UserProfile = () => {
  const { id } = useParams();
  const [Switch, setSwitch] = useState(false);
  const users = useSelector((state) => state.usersReducer);
  const currentProfile = users.filter((user) => user._id === id)[0];

  const currentUser = useSelector((state) => state.currentUserReducer);

  return (
    <div className="home-container-1">
      <LeftSideBar />
      <div className="home-container-2">
        <section>
          <div className="users-details-container">
            <div className="user-details">
              <Avtar
                backgroundColor="purple"
                color="white"
                fontSize="50px"
                px="30px"
                py="20px"
              >
                {currentProfile?.name.charAt(0).toUpperCase()}
              </Avtar>

              <div className="user-name">
                <h1>{currentProfile?.name}</h1>
                <p>
                  <FontAwesomeIcon icon={faBirthdayCake} /> member for{" "}
                  {moment(currentProfile?.joinedOn).fromNow()}
                </p>
              </div>
            </div>
            <div>
              {console.log("some", currentProfile, "checking swithc", Switch)}
            </div>
            {currentUser?.result._id === id && (
              <button
                onClick={() => setSwitch(true)}
                className="edit-profile-btn"
              >
                <FontAwesomeIcon icon={faPen} />
                Edit Profile
              </button>
            )}
          </div>
          <>
            {Switch ? (
              <EditProfileForm
                currentProfile={currentProfile}
                setSwitch={setSwitch}
              />
            ) : (
              <ProfileBio currentProfile={currentProfile} />
            )}
          </>
        </section>
      </div>
    </div>
  );
};

export default UserProfile;
