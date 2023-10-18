'use client'

import { useSession } from 'next-auth/react'

export default function Home() {
  const { data } = useSession()

  return (
    <div className="container">
      <h1 className="text-center">Page initial</h1>
      <h1 className="text-center">Seja bem vindo! {data?.user?.name}</h1>
    </div>
  )
}
