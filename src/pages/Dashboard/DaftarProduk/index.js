import React from 'react'
import Sidebar from '../../../components/Sidebar'

const Produk = () => {
  return (
    <div className="flex page-container">
      <Sidebar />
      <main className="flex-grow">
        <div className="flex justify">
          <p>Produk</p>
        </div>
      </main>
    </div>
  )
}

export default Produk