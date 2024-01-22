import { useDataGrid } from '@/hooks'
import {
  CheckCircleOutline,
  MoreVert,
  NotInterested,
} from '@mui/icons-material'
import { Divider, IconButton, Menu, MenuItem, MenuList } from '@mui/material'
import { useState } from 'react'
import { tv } from 'tailwind-variants'

type ActionsProps = {
  id: number
}

export function Actions({ id }: ActionsProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const open = Boolean(anchorEl)

  function openMenu(event: React.MouseEvent<HTMLButtonElement>) {
    setAnchorEl(event.currentTarget)
  }

  function closeMenu() {
    setAnchorEl(null)
  }

  const { changeStatus } = useDataGrid()

  function activateUser() {
    changeStatus({ id, field: 'status', newValue: 'Ativo' })
    closeMenu()
  }

  function deactivateUser() {
    changeStatus({ id, field: 'status', newValue: 'Inativo' })
    closeMenu()
  }

  return (
    <>
      <IconButton onClick={openMenu}>
        <MoreVert />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={closeMenu}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuList className="p-0">
          <StyledMenuItem variant="default">Mudar status</StyledMenuItem>
          <Divider />
          <StyledMenuItem variant="ativo" onClick={activateUser}>
            <CheckCircleOutline fontSize="small" /> Ativar
          </StyledMenuItem>
          <StyledMenuItem variant="inativo" onClick={deactivateUser}>
            <NotInterested fontSize="small" /> Inativar
          </StyledMenuItem>
        </MenuList>
      </Menu>
    </>
  )
}

type MenuItemProps = {
  children: React.ReactNode
  variant?: 'ativo' | 'inativo' | 'default'
  onClick?: () => void
}

const menuItem = tv({
  base: ['text-base font-normal leading-6'],

  variants: {
    variant: {
      ativo: ' text-green-400 flex gap-2 items-start',
      inativo: 'text-red-error flex gap-2 items-start',
      default: 'cursor-default hover:bg-white',
    },
  },

  defaultVariants: {
    variant: 'ativo',
  },
})

function StyledMenuItem({
  children,
  variant = 'default',
  onClick,
}: MenuItemProps) {
  return (
    <MenuItem className={menuItem({ variant })} onClick={onClick}>
      {children}
    </MenuItem>
  )
}
