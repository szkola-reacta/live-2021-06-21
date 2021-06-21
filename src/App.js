import { GlobalStyle } from './Globals';
import { DefaultThemeProvider } from './DefaultThemeProvider';
import { NavAvatarWithUserName } from './Avatar';

// import './App.css';

function App() {
  return (
    <DefaultThemeProvider>
      <GlobalStyle />
      <NavAvatarWithUserName />
    </DefaultThemeProvider>
  );
}

export default App;
