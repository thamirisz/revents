import React from 'react';
import { Link } from 'react-router-dom';
import { Image, ListItem } from 'semantic-ui-react';

export default function EventListAttendee({ attendee }) {
  return (
    <ListItem as={Link} to={`/profile/${attendee.id}`}>
      <Image size="mini" circular src={attendee.photoURL} />
    </ListItem>
  );
}
