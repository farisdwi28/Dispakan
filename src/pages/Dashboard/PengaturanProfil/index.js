import React from 'react'
import Sidebar from '../../../components/Sidebar'

const Profil = () => {
  return (
    <div className="flex page-container">
      <Sidebar />
      <main className="flex-grow">
        <div className="flex justify">
          <p>Profil</p>
        </div>
      </main>
    </div>
  )
}

export default Profil