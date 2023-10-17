import React from 'react'
import { Card } from './card'
import { Button } from './button'
import { MenuIcon, ShoppingCartIcon } from 'lucide-react'

export default function Header() {
  return (
    <div className="container">
      <Card className="flex justify-between p-[1.875rem] items-center">
        <Button variant={'outline'} size="icon">
          <MenuIcon />
        </Button>
        <h1 className="font-semibold text-lg">
          <span className="text-primary">FSW</span> Store
        </h1>
        <Button variant={'outline'} size="icon">
          <ShoppingCartIcon />
        </Button>
      </Card>
    </div>
  )
}
