import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo-purple.svg';
import Notifications from '~/components/Notifications';

import { Container, Content, Profile } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="logoGoBarber" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>
        <aside>
          <Notifications />
          <Profile>
            <div>
              <strong>Djanilson Martins</strong>
              <Link to="/profile">My profile</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/50/abott@adorable.png"
              alt="avatar"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
