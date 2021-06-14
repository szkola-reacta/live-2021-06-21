import styled from "styled-components";

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
  const Greeting = () => {
    const userData = { name: 'Jan '};

    if (userData) {
        return <UserName data-testid="avatar-username">{userData.name}</UserName>
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
