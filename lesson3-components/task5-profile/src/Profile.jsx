import React from 'react';
import ProfileName from './ProfileName.jsx';
import ProfileBirth from './ProfileBirth.jsx';

const Profile = props => {
  return (
    <div className="greeting">
      <ProfileName
        firstName={props.userData.firstName}
        lastName={props.userData.lastName}
      />
      <ProfileBirth
        birthDate={props.userData.birthDate}
        birthPlace={props.userData.birthPlace}
      />
    </div>
  );
};

export default Profile;
