import { render, screen, act } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import { theme } from './DefaultThemeProvider';

import { NavAvatarWithUserName } from './Avatar';
// import { fetchUser } from './services/users';

const renderStyledComponent = (Component) => 
  render(<ThemeProvider theme={theme}>{Component}</ThemeProvider>);

describe('Avatar component', () => {
  it('renders without data', () => {
    act(() => {
        const container = renderStyledComponent(<NavAvatarWithUserName />);
        const userName = container.queryByTestId('avatar-username');
        container.debug();
    });
    expect(userName.textContent).toBe('Jan');
  })

  it('renders with data', () => {

  });
});