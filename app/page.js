'use client'
import { useCallback, useState } from "react"

export default function Page() {
  const [user, setUser] = useState(null)
  
  const logUser = useCallback(() => {
    console.log('Log user', user.name)
  }, [user])


  return (
    <div>
      <h1>Page</h1>
      <button onClick={() => setUser({ name: 'John' })}>Set user</button>
      {user ? (
        <div>
          <h2>{user.name}</h2>
          <button onClick={logUser}>Logout</button>
        </div>
      ) : null}
    </div>
  )
}