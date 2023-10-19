'use client'
import React from 'react'
import { Card } from './card'
import { Button } from './button'
import {
  HomeIcon,
  ListOrderedIcon,
  LogInIcon,
  LogOutIcon,
  MenuIcon,
  PercentIcon,
  ShoppingCartIcon,
} from 'lucide-react'
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from './sheet'
import { signIn, signOut, useSession } from 'next-auth/react'
import { Avatar, AvatarFallback, AvatarImage } from './avatar'
import { Separator } from './separator'

export default function Header() {
  const { status, data } = useSession()

  const handleLoginClick = async () => {
    await signIn()
  }
  const handleLogoutClick = async () => {
    await signOut()
  }

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
          {status === 'authenticated' && data?.user && (
            <div className="flex flex-col ">
              <div className="flex items-center gap-3 py-4">
                <Avatar>
                  <AvatarFallback>
                    {data.user.name?.[0].toUpperCase()}
                  </AvatarFallback>
                  {data.user.image && <AvatarImage src={data.user.image} />}
                </Avatar>
                <p className="font-semibold">{data.user.name}</p>
                {status === 'authenticated' && (
                  <Button
                    onClick={handleLogoutClick}
                    variant={'ghost'}
                    className="ml-auto justify-start gap-2"
                  >
                    <LogOutIcon />
                    Logout
                  </Button>
                )}
              </div>
              <Separator className="mb-3" />
            </div>
          )}
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
            {status === 'unauthenticated' && (
              <Button
                onClick={handleLoginClick}
                variant={'outline'}
                className="w-full justify-start gap-2"
              >
                <LogInIcon />
                Login
              </Button>
            )}
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
