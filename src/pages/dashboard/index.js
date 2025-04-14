import AdminDashboard from '@/components/AdminDashboard'
import React from 'react'
import ProtectedRoute from '@/components/ProtectedRoute'

const index = () => {
  return (
    <ProtectedRoute>
      <div>
        <AdminDashboard />
      </div>
    </ProtectedRoute>
  )
}

export default index
