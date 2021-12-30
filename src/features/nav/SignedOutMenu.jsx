import React from 'react';
import { useDispatch } from 'react-redux';
import { Button, MenuItem } from 'semantic-ui-react';
import { openModal } from '../../app/common/modals/modalReducer';

export default function SignedOutMenu() {
  const dispatch = useDispatch();

  return (
    <MenuItem position="right">
      <Button
        onClick={() => dispatch(openModal({ modalType: 'LoginForm' }))}
        basic
        inverted
        content="Login"
      />
      <Button
        onClick={() => dispatch(openModal({ modalType: 'RegisterForm' }))}
        basic
        inverted
        content="Register"
        style={{ marginLeft: '0.5em' }}
      />
    </MenuItem>
  );
}
