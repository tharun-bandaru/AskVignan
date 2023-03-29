import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateProfile } from "../../actions/users";

const EditProfileForm = ({ currentProfile, setSwitch }) => {
  console.log("edit profile page", currentProfile._id);
  const dispatch = useDispatch();
  const [tags, setTags] = useState("");
  const [name, setName] = useState(currentProfile.name);
  const [about, setAbout] = useState(currentProfile.about);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(currentProfile?.result?._id);
    console.log("data sending", currentProfile._id, tags, name, about);
    if (tags.length === 0) {
      dispatch(
        updateProfile(currentProfile._id, {
          name,
          about,
          tags: currentProfile.tags,
        })
      );
    } else {
      dispatch(updateProfile(currentProfile._id, { name, about, tags }));
    }
    setSwitch(false);
  };

  return (
    <div>
      <h1 className="edit-profile-title">Edit Your Profile</h1>
      <h2 className="edit-profile-title-2">Public information</h2>
      <form className="edit-profile-form" onSubmit={handleSubmit}>
        <label htmlFor="name">
          <h3>Display name</h3>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label htmlFor="about">
          <h3>About me</h3>
          <textarea
            id="about"
            cols="30"
            rows="10"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
          ></textarea>
        </label>
        <label htmlFor="tags">
          <h3>Watched tags</h3>
          <p>Add tags separated by 1 space</p>
          <input
            type="text"
            id="tags"
            onChange={(e) => setTags(e.target.value.split(" "))}
          />
        </label>
        <br />
        <input
          type="submit"
          value="Save profile"
          className="user-submit-btn"
          aria-label="Save profile"
        />
        <button
          type="button"
          className="user-cancel-btn"
          onClick={() => setSwitch(false)}
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditProfileForm;
