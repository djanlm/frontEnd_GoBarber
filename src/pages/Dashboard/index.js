import React, { useState, useMemo } from 'react';
import { format, subDays, addDays } from 'date-fns';
import en from 'date-fns/locale/en-US';

import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import api from '~/services/api';
import { Container, Time } from './styles';

export default function Dashboard() {
  const [date, setDate] = useState(new Date());

  const dateFormatted = useMemo(() => format(date, 'MMMM d ', { locale: en }), [
    date,
  ]);

  function handlePrevDay() {
    setDate(subDays(date, 1)); // subtrai 1 dia
  }

  function handleNextDay() {
    setDate(addDays(date, 1)); // add one day
  }

  return (
    <Container>
      <header>
        <button type="button" onClick={handlePrevDay}>
          <MdChevronLeft size={36} color="#fff" />
        </button>
        <strong>{dateFormatted}</strong>
        <button type="button" onClick={handleNextDay}>
          <MdChevronRight size={36} color="#fff" />
        </button>
      </header>

      <ul>
        <Time past>
          <strong>08:00</strong>
          <span>Djanilson Martins</span>
        </Time>
        <Time available>
          <strong>09:00</strong>
          <span>Open</span>
        </Time>
        <Time>
          <strong>10:00</strong>
          <span>Djanilson Martins</span>
        </Time>
        <Time>
          <strong>11:00</strong>
          <span>Djanilson Martins</span>
        </Time>
      </ul>
    </Container>
  );
}
