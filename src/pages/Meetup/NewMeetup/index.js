import React from 'react';

import { Container } from './styles';
import ImageInput from '~/components/ImageInput';

export default function NewMeetup() {
  return (
    <Container>
      <ImageInput name="image_id" />
    </Container>
  );
}
