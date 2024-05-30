import React, { useState } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

const ProfilePage = () => {
  const [editing, setEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'John Doe',
    phone: '123-456-7890',
    address: '123 Main St, Anytown, USA',
    password: 'password123',
  });

  const [newProfile, setNewProfile] = useState(profile);

  const handleEditToggle = () => setEditing(!editing);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProfile({ ...newProfile, [name]: value });
  };

  const handleSave = () => {
    setProfile(newProfile);
    setEditing(false);
  };

  const springProps = useSpring({
    opacity: editing ? 1 : 0,
    transform: editing ? 'translateY(0)' : 'translateY(-20px)',
  });

  return (
    <ProfileContainer>
      <ProfileCard>
        <h2 className='text-center'>Profile</h2>
        <ProfileField>
          <label>Name:</label>
          {editing ? (
            <animated.input style={springProps} type="text" name="name" value={newProfile.name} onChange={handleChange} />
          ) : (
            <p>{profile.name}</p>
          )}
        </ProfileField>
        <ProfileField>
          <label>Phone:</label>
          {editing ? (
            <animated.input style={springProps} type="text" name="phone" value={newProfile.phone} onChange={handleChange} />
          ) : (
            <p>{profile.phone}</p>
          )}
        </ProfileField>
        <ProfileField>
          <label>Address:</label>
          {editing ? (
            <animated.input style={springProps} type="text" name="address" value={newProfile.address} onChange={handleChange} />
          ) : (
            <p>{profile.address}</p>
          )}
        </ProfileField>
        <ProfileField>
          <label>Password:</label>
          {editing ? (
            <animated.input style={springProps} type="password" name="password" value={newProfile.password} onChange={handleChange} />
          ) : (
            <p>{'*'.repeat(profile.password.length)}</p>
          )}
        </ProfileField>
        <Button onClick={editing ? handleSave : handleEditToggle}>
          {editing ? 'Save' : 'Edit'}
        </Button>
      </ProfileCard>
    </ProfileContainer>
  );
};

const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #f0f2f5;
`;

const ProfileCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 75%;
  height: 70%;
`;

const ProfileField = styled.div`
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  label {
    font-weight: bold;
  }

  p {
    margin: 0;
  }

  input {
    width: 100%;
    padding: 0.5rem;
    margin-left: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 0.75rem;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 15px;

  &:hover {
    background: #0056b3;
  }
`;

export default ProfilePage;
