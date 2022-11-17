import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useAuth0 } from '@auth0/auth0-react'
import LoginButton from './components/AuthenticationButton'
import { withAuthenticationRequired } from '@auth0/auth0-react'
import { useSearchParams } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)
  const { user } = useAuth0()

  console.log(user)
  const { isLoading } = useAuth0()

  if (isLoading) {
    return <div>Loading</div>
  }

  return (
    <div className="App">
      <LoginButton />
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </div>
  )
}

const SomeComponent = (app) => {
  const params = new URLSearchParams(window.location.search) // id=123
  let param = params.get('aws-id') // 123 

  const loginOptions = {}
  if (param) {
    loginOptions['aws-id'] = param
  }
  // const param = searchParams.get('test')
  return withAuthenticationRequired(app, {
    // Show a message while the user waits to be redirected to the login page.
    onRedirecting: () => <div>Loading</div>,
    loginOptions
  });
};

// export default App
export default SomeComponent(App)
