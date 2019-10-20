import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { Container } from './styles';
import ImageInput from '~/components/ImageInput';
import NotFound404 from '~/pages/NotFound404';

export default function EditMeetup({ location }) {
  if (!location.state) return <NotFound404 />;
  const { meetup } = location.state;

  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <Container>
      <Form initialData={meetup} onSubmit={handleSubmit}>
        <ImageInput name="image_id" />

        <Input name="title" placeholder="Título" />
        <Input name="description" multiline placeholder="Descrição" />
        <Input name="date" placeholder="Data" />
        <Input name="location" placeholder="Localização" />
        <aside>
          <button type="submit">Salvar perfil</button>
        </aside>
      </Form>
    </Container>
  );
}
