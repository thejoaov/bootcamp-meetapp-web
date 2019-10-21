import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { Container } from './styles';
import ImageInput from '~/components/ImageInput';
import DatePicker from '~/components/DatePicker';
import api from '~/services/api';
import history from '~/services/history';

export default function EditMeetup() {
  async function handleSubmit(data) {
    console.tron.log(data);
    const response = await api.post('/meetups', data);
    const { id } = response.data;
    history.push(`/meetup/${id}`);
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <ImageInput name="image_id" />

        <Input name="title" placeholder="Título" />
        <Input name="description" multiline placeholder="Descrição" />
        <DatePicker name="date" placeholder="Data" />
        <Input name="location" placeholder="Localização" />
        <aside>
          <button type="submit">Criar Meetup</button>
        </aside>
      </Form>
    </Container>
  );
}
