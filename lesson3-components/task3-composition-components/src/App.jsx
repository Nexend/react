import React from 'react';
import Comment from './Comment.jsx';

const userInfo = {
  name: 'Tom',
  avatarUrl:
    'https://cs-love.net/avatars/images/cs-love-avatar-0.jpg',
};

const App = () => {
  return (
    <Comment
      author={userInfo}
      text="Good job!"
      date={new Date('2019-01-01T11:32:19.566Z')}
    />
  );
};

export default App;
