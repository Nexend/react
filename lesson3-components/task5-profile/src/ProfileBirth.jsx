import React from 'react';
import moment from 'moment';

const formatDate = date => moment(date).format('DD MMM YY');

const ProfileBirth = props => {
  return (
    <div className="profile__birth">
      {`Was born ${formatDate(props.birthDate)} in ${
        props.birthPlace
      }`}
    </div>
  );
};

export default ProfileBirth;
