import styled from "styled-components";
import { useState, useEffect } from 'react';

import { fetchUser } from './services/users';
import iconAvatar from "./assets/icons/svg/icon-user.svg";

const Avatar = styled.div`
  width: 17px;
  height: 17px;
  background-image: url(${iconAvatar});
`;

const AvatarWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const UserName = styled.span`
  font-family: ${({ theme }) => theme.fonts.latoBold};
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.text};
  margin-left: 7px;
  max-width: 230px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const NavAvatarWithUserName = () => {



  // src/services/users
  // export async const fetchUser = () => {
  //   try {
  //     const response = await fetch('https://foo.com/users');
  //     const data = await response.json();

  //     return data;
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  const Greeting = () => {
    const [user, setUser] = useState(null);

    const fetchData = async () => {
      const data = await fetchUser();
      setUser(data);
    }

    useEffect(() => {
      fetchData();
    }, []);

    // const userData = { name: 'Jan' }; // simulation

    // Case 1
    // import { fetchuser } from '../src/services/users
    // const fetchUserMock = jest.spyOn(fetchUser)
    // fetchUserMock.mockReturnValue({
    //   name: 'Jan',
    //   surname: 'Kowalski'
    // })

    // Case 2
    // jest.mock('../src/services/users');
    // const fetchUserMock = require('../src/services/users');
    // fetchUserMock.mockImplementation(() => ({
    //   name: 'Jan',
    //   surname: 'Kowalski'
    // }));

    // const userData = await fetchUser();

    if (user && user.name.first) {
        return <UserName data-testid="avatar-username">{user.name.first}</UserName>
    }
    return <UserName />
  };

  return (
    <AvatarWrapper>
      <Avatar />
      <Greeting />
    </AvatarWrapper>
  );
};
