import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Dropdown, Image, MenuItem } from 'semantic-ui-react';
import { signOutFirebase } from '../../app/firestore/firebaseService';

export default function SignedInMenu() {
  const history = useHistory();
  const { currentUserProfile } = useSelector((state) => state.profile);

  async function handleSignOut() {
    try {
      history.push('/');
      await signOutFirebase();
    } catch (error) {
      toast.error(error.message);
    }
  }

  return (
    <MenuItem position="right">
      <Image
        avatar
        spaced="right"
        src={currentUserProfile?.photoURL || '/assets/user.png'}
      />
      <Dropdown pointing="top left" text={currentUserProfile?.displayName}>
        <Dropdown.Menu>
          <Dropdown.Item
            as={Link}
            to="/createEvent"
            text="Create Event"
            icon="plus"
          />
          <Dropdown.Item
            as={Link}
            to={`/profile/${currentUserProfile?.id}`}
            text="My Profile"
            icon="user"
          />
          <Dropdown.Item
            as={Link}
            to="/account"
            text="My Account"
            icon="settings"
          />
          <Dropdown.Item
            as={Link}
            to="/"
            text="Sign Out"
            icon="power"
            onClick={handleSignOut}
          />
        </Dropdown.Menu>
      </Dropdown>
    </MenuItem>
  );
}
