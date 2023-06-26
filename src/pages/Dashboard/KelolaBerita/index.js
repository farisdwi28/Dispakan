import React from 'react'
import Sidebar from '../../../components/Sidebar'

const Berita = () => {
  return (
    <div className="flex page-container">
      <Sidebar />
      <main className="flex-grow">
        <div className="flex justify">
          <p>Berita</p>
        </div>
      </main>
    </div>
  )
}

export default Berita