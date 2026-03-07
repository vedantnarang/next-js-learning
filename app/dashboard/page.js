import Link from 'next/link'
import React from 'react'

const DashbordPage = () => {
  return (
    <div>
        <h1>Dashborad</h1>
        <Link href="/dashboard/reports"> View Reports</Link>
        <Link href="/profile"> View profile</Link>
    </div>
  )
}

export default DashbordPage