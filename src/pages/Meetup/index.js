import React, { useState, useEffect } from 'react';

import { Container, Content, Footer } from './styles';
import api from '~/services/api';
import history from '~/services/history';

export default function Meetup({ match }) {
  const [meetup, setMeetup] = useState({});
  useEffect(() => {
    const { id } = match.params;
    async function loadMeetup() {
      try {
        const response = await api.get(`/meetups/${id}`);

        const data = { ...response.data, imageUrl: response.data.image.url };

        setMeetup(data);
      } catch (error) {
        history.push('/notfound');
      }
    }
    loadMeetup();
  }, [match.params]);

  return (
    <Container>
      <header>
        <h1>{meetup.title}</h1>
        <aside>
          <button
            onClick={() => history.push(`/meetup/${meetup.id}/edit`)}
            className="edit"
            type="button"
          >
            Editar
          </button>
          <button type="button">Cancelar</button>
        </aside>
      </header>
      <Content>
        <img src={meetup.imageUrl} alt={meetup.title} />
        <p className="description">Descrição:</p>
        <p>{meetup.description}</p>
        <Footer>
          <p>{meetup.date}</p>
          <p>{meetup.location}</p>
        </Footer>
      </Content>
    </Container>
  );
}
