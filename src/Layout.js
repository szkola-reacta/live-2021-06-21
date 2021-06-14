import { GlobalStyle } from './Globals';

function Layout({ children }) {
  return (
    <GlobalStyle>
      <h1>Layout</h1>
      {children}
    </GlobalStyle>
  );
}

export default Layout;
