import { Main } from './main.tsx';
import GlobalStyle from './globalStyles.ts';
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Main />
    </Fragment>
  );
}

export default App;
