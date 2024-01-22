'use client'

import { AppBar, Avatar, Box, Menu } from '@mui/material'
import { Logo } from '@/components'

import { useState } from 'react'
import { HeaderItem } from './HeaderItem'

const navItems = ['Clientes', 'Endereços', 'Entregas']

export function Header() {
  const [tab, setTab] = useState('Clientes')

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null)

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  return (
    <AppBar
      position="static"
      className="px-10 py-2 md:py-0 flex justify-between items-center md:items-end flex-row bg-white border border-solid border-t-0 border-b-gray-100 shadow-none "
      component="nav"
    >
      <Box className="md:hidden flex flex-1">
        <Logo onClick={handleOpenNavMenu} />
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          classes={{
            paper: 'mt-2 md:mt-0',
            list: 'flex flex-col md:none ',
          }}
        >
          {navItems.map((item) => (
            <HeaderItem
              key={item}
              onClick={() => setTab(item)}
              selected={tab === item}
              label={item}
            />
          ))}
        </Menu>
      </Box>
      <Box className="items-center gap-10 hidden md:flex">
        <Logo />
        <Box className="flex items-center gap-4">
          {navItems.map((item) => (
            <HeaderItem
              key={item}
              onClick={() => setTab(item)}
              selected={tab === item}
              label={item}
            />
          ))}
        </Box>
      </Box>
      <Box className="py-0 px-0 my-auto mx-0">
        <Avatar className="bg-violet-500 h-8 w-8 text-base leading-5 tracking-0.15">
          L
        </Avatar>
      </Box>
    </AppBar>
  )
}
