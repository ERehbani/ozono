import React from 'react'
import useUserStore from '../store/userStore'

function Home() {
  const userStore = useUserStore()
  console.log(userStore)
  return (
    <div>
      HOME
    </div>
  )
}

export default Home
