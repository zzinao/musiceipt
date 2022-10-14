import { Global } from '@emotion/react';
import { RecoilRoot } from 'recoil';
import Router from './router';
import { reset } from './styles/Reset'

function App() {
  return (
    <RecoilRoot>
      <Global styles={reset} />
      <Router />
    </RecoilRoot>
  )
}

export default App
