import React from 'react'
import Sidebar from '../../../components/Sidebar'

const UMKM = () => {
  return (
    <div className="flex page-container">
      <Sidebar />
      <main className="flex-grow">
        <div className="flex justify">
          <p>UMKM</p>
        </div>
      </main>
    </div>
  )
}

export default UMKM