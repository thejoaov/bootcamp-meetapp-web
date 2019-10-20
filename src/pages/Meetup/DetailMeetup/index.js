import React, { useState, useEffect } from 'react';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';
import { MdLocationOn, MdEvent } from 'react-icons/md';

import { Container, Content, Footer } from './styles';
import api from '~/services/api';
import history from '~/services/history';

export default function DetailMeetup({ match }) {
  const [meetup, setMeetup] = useState({});
  useEffect(() => {
    const { id } = match.params;
    async function loadMeetup() {
      try {
        const response = await api.get(`/meetups/${id}`);

        const data = {
          ...response.data,
          imageUrl: response.data.image.url,
          formattedDate: format(
            parseISO(response.data.date),
            "dd ' de ' MMMM ' às' H BBBB",
            {
              locale: pt,
            }
          ),
        };

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
            onClick={() =>
              history.push(`/meetup/${meetup.id}/edit`, { meetup })
            }
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
          <p>
            <MdEvent /> {meetup.formattedDate}
          </p>
          <p>
            <MdLocationOn /> {meetup.location}
          </p>
        </Footer>
      </Content>
    </Container>
  );
}
