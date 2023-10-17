import React from 'react'
import { Card } from './card'
import { Button } from './button'
import {
  HomeIcon,
  ListOrderedIcon,
  LogInIcon,
  MenuIcon,
  PercentIcon,
  ShoppingCartIcon,
} from 'lucide-react'
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from './sheet'

export default function Header() {
  return (
    <Card className="flex items-center justify-between p-[1.875rem]">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant={'outline'} size="icon">
            <MenuIcon />
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader className="text-left text-lg font-semibold">
            Menu
          </SheetHeader>
          <div className="mt-2 flex flex-col gap-3">
            <Button variant={'outline'} className="w-full justify-start gap-2">
              <HomeIcon />
              Início
            </Button>
            <Button variant={'outline'} className="w-full justify-start gap-2">
              <PercentIcon />
              Ofertas
            </Button>
            <Button variant={'outline'} className="w-full justify-start gap-2">
              <ListOrderedIcon />
              Catalago
            </Button>
            <Button variant={'outline'} className="w-full justify-start gap-2">
              <LogInIcon />
              Login
            </Button>
          </div>
        </SheetContent>
      </Sheet>
      <h1 className="text-lg font-semibold">
        <span className="text-primary">FSW</span> Store
      </h1>
      <Button variant={'outline'} size="icon">
        <ShoppingCartIcon />
      </Button>
    </Card>
  )
}
