import { render, screen, act } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import { theme } from './DefaultThemeProvider';

import { NavAvatarWithUserName } from './Avatar';

const renderStyledComponent = (Component) =>
  render(<ThemeProvider theme={theme}>{Component}</ThemeProvider>);

describe('Avatar component', () => {
  it('renders with data - it uses MSW mocks/handlers.js', async () => {

    // render container with data from MSW
    renderStyledComponent(<NavAvatarWithUserName />);
    expect(await screen.findByText('Jan MSW')).toBeInTheDocument();
    // uncomment to see how it is rendered
    // screen.debug();
  })

  it('renders with data without msw', async () => {
    // fetch on window object
    jest.spyOn(window, 'fetch');
    window.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        results: [{
          name: {
            first: 'Jan Mocked'
          }
        }]
      }),
    });
    // screen.debug();
    await act(async () => {
      // render container with mocked response
      renderStyledComponent(<NavAvatarWithUserName />);
    });
    // uncomment to see how it is rendered
    // screen.debug();
    expect(screen.getByText('Jan Mocked')).toBeInTheDocument();
  });
});