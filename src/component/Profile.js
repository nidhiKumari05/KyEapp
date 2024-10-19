import React from 'react';

const Profile = () => {
  const user = {
    name: "Nidhi Kumari",
    email: "nidhikumari@example.com",
    bio: "A passionate software developer with 3 years of experience in building web applications.",
    
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>My Profile</h2>
      <h3>{user.name}</h3>
      <p style={{ fontSize: '18px', lineHeight: '1.6', maxWidth: '600px', margin: 'auto' }}>
        <strong>Email:</strong> {user.email}
      </p>
      <p style={{ fontSize: '18px', lineHeight: '1.6', maxWidth: '600px', margin: 'auto' }}>
        <strong>Bio:</strong> {user.bio}
      </p>
     
    </div>
  );
};

export default Profile;
