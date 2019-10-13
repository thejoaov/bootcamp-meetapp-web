import React from 'react';

import { Container } from './styles';

export default function EditMeetup({ location }) {
  const { meetup } = location.state;
  return (
    <Container>
      <h1>{meetup.title}</h1>
    </Container>
  );
}
