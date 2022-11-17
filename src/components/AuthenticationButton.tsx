import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0()
  return (
    <button
      className="btn btn-primary btn-block"
      onClick={() =>
        loginWithRedirect({
          screen_hint: 'signup',
        })
      }
    >
      Log In
    </button>
  )
}

const LogoutButton = () => {
  const { logout } = useAuth0()
  return (
    <button
      className="btn btn-danger btn-block"
      onClick={() =>
        logout({
          returnTo: window.location.origin,
        })
      }
    >
      Log Out
    </button>
  )
}

const AuthenticationButton = () => {
  const { isAuthenticated } = useAuth0()
  return isAuthenticated ? <LogoutButton /> : <LoginButton />
}

export default AuthenticationButton
