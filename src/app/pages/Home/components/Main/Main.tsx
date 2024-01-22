import { Box, Typography, useMediaQuery } from '@mui/material'
import { GridColDef, GridRowClassNameParams } from '@mui/x-data-grid'
import { useUsers } from '@/hooks/useUsers'
import { Loader, Table } from '@/components'
import { Chip } from './Chip'
import { formatDateToBR } from '@/utils/date'
import { Actions } from './Actions'

export function Main() {
  const { data, isFetching } = useUsers()

  const matches = useMediaQuery('(min-width: 1920px)')

  if (isFetching || !data) {
    return <Loader variant="violet" fontSize="small" />
  }

  function handleInactiveCells(params: GridRowClassNameParams) {
    const isInactive = params.row.status.toLowerCase() === 'inativo'

    if (isInactive) {
      return 'bg-gray-150 hover:!bg-gray-150'
    }

    return 'bg-white hover:!bg-white'
  }

  const columns: GridColDef[] = [
    {
      field: 'id',
      headerName: 'ID',
      width: matches ? 250 : 200,
      disableColumnMenu: true,
      resizable: false,
    },
    {
      field: 'name',
      headerName: 'Nome',
      disableColumnMenu: true,
      minWidth: 200,
      maxWidth: matches ? undefined : 250,

      flex: 1,
      resizable: false,
    },
    {
      field: 'phone',
      headerName: 'Telefone',
      disableColumnMenu: true,
      minWidth: 350,
      maxWidth: matches ? undefined : 400,

      flex: 1,
      resizable: false,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'registrationDate',
      headerName: 'Data de cadastro',
      disableColumnMenu: true,
      minWidth: 250,
      flex: 1,
      headerAlign: 'center',
      align: 'center',
      maxWidth: matches ? undefined : 250,
      type: 'date',
      valueFormatter: (value) => formatDateToBR(value.value),
      resizable: false,
    },
    {
      field: 'status',
      headerName: 'Status',
      disableColumnMenu: true,
      resizable: false,
      width: matches ? 200 : 250,
      align: 'center',
      renderCell: (value) => {
        return (
          <Chip
            label={value.row.status}
            variant={value.row.status.toLowerCase()}
          />
        )
      },
      headerAlign: 'center',
    },
    {
      field: 'actions',
      headerName: '',
      disableColumnMenu: true,
      resizable: false,
      width: 100,

      align: 'center',
      renderCell: (value) => {
        return <Actions id={value.row.id} />
      },
      headerAlign: 'center',
      filterable: false,
    },
  ]

  return (
    <main className="p-10 flex flex-col gap-4  bg-white">
      <Typography
        variant="h5"
        className="font-roboto text-gray-900 font-normal text-2xl leading-8"
      >
        Usuários
      </Typography>
      <Box className="grid grid-flow-row rounded-4">
        <Table
          columns={columns}
          rows={data}
          getRowClassName={handleInactiveCells}
        />
      </Box>
    </main>
  )
}
