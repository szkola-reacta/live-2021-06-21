import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import { theme } from './DefaultThemeProvider';

import { NavAvatarWithUserName } from './Avatar';

const renderStyledComponent = (Component) => 
  render(<ThemeProvider theme={theme}>{Component}</ThemeProvider>);

describe('Avatar component', () => {
  it('renders without crashing', () => {
    const container = renderStyledComponent(<NavAvatarWithUserName />);
    const userName = container.queryByTestId('avatar-username');

    expect(userName.textContent).toBe('Jan');
  })
});