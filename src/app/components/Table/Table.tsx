/* eslint-disable @typescript-eslint/no-explicit-any */
import { LabelDisplayedRowsArgs, SxProps } from '@mui/material'
import {
  DataGridPro,
  DataGridProProps,
  GridClasses,
  GridFilterPanel,
  GridLocaleText,
  useGridApiRef,
  gridClasses,
  UncapitalizedGridProSlotsComponent,
} from '@mui/x-data-grid-pro'
import { Toolbar } from './Toolbar'
import { useTable, useWindowSize } from '@/hooks'
import { Add, DeleteForever } from '@mui/icons-material'
import { GridProSlotProps } from '@mui/x-data-grid-pro/models/gridProSlotProps'

const dataGridClasses: Partial<GridClasses> = {
  columnHeaders: 'w-full border-b border-gray-50 border-solid sticky',
  columnHeaderTitleContainer: 'p-4 ',
  columnHeaderTitle: 'font-medium leading-4 tracking-0.17 text-gray-900',
  iconSeparator: 'hidden',
  root: 'border-0',
  overlay: 'hidden',
  withBorderColor: 'border-0 outline-none',
  cellContent: 'p-cell ',
  cell: 'border border-red-500 border-solid ',
  iconButtonContainer: 'hidden',
  columnHeader: 'focus:!outline-none',
  filterForm: 'gap-4 p-4',
  virtualScroller: '!mt-0',
  main: 'unset',
  panelWrapper: 'w-full ',
}

const pagination: Partial<GridLocaleText> = {
  MuiTablePagination: {
    labelDisplayedRows: ({ from, to, count }: LabelDisplayedRowsArgs) => (
      <span className="font-normal text-gray-800 leading-5 tracking-0.4 text-xs">{`${from} - ${to} de ${count}`}</span>
    ),

    rowsPerPageOptions: [5, 10, 20],
    labelRowsPerPage: (
      <span className="font-normal text-gray-800 leading-5 tracking-0.4 text-xs">
        Linhas por página
      </span>
    ),
    classes: {
      select: 'font-normal text-gray-800 leading-5 tracking-0.4 text-xs',
      toolbar: 'py-0 px-[30px]',
    },
  },
  'filterOperator!=': 'Diferente de',
  'headerFilterOperator=': 'Igual a',
  'filterOperator<': 'Menor que',
  'filterOperator<=': 'Menor ou igual a',
  'filterOperator>': 'Maior que',
  'filterOperator>=': 'Maior ou igual a',
  filterOperatorOnOrBefore: 'Menor ou igual a',
  filterOperatorIsEmpty: 'Está vazio',
  filterPanelOperator: <></>,
  filterPanelColumns: <></>,
  filterPanelInputPlaceholder: 'Filtrar',
  filterOperatorIsAnyOf: 'É qualquer um de',
  filterOperatorIsNotEmpty: 'Não Está vazio',
  filterOperatorStartsWith: 'Começa com',
  filterOperatorEndsWith: 'Termina com',
  filterOperatorContains: 'Contém',
  filterOperatorEquals: 'Igual',
  filterPanelOperatorAnd: 'E',
  filterPanelOperatorOr: 'Ou',
  filterPanelRemoveAll: (
    <span className="flex gap-2 items-center normal-case text-red-300  rounded-4">
      Remover todos
    </span>
  ),
  filterPanelAddFilter: (
    <span className="flex gap-2 items-center normal-case text-violet-500 rounded-4">
      Adicionar filtro
    </span>
  ),
  filterPanelDeleteIconLabel: 'Remover',
  toolbarFilters: <>gaeojngebou</>,
}

const slotProps: GridProSlotProps = {
  baseTextField: {
    variant: 'outlined',
    label: '',
    className: 'focus:border-2 focus:border-blue-primaryNormal hover:border-0',
    sx: {
      '& fieldset': {
        '&:hover': {
          border: '0px',
        },
      },
      '&:.MuiOutlinedInput-notchedOutline': {
        color: 'red',
      },
    },
  },
  baseSelect: {
    variant: 'outlined',
    label: '',
    className: '',
  },
  baseFormControl: {
    className: 'focus:border-blue-primaryNormal focus:border-solid',
  },
  filterPanel: {
    filterFormProps: {
      deleteIconProps: {
        sx: {
          button: {
            color: '#E53E3E',
          },
        },
      },
    },
  },
  panel: {
    placement: 'top',
    className:
      '!relative !overflow-scroll md:!absolute md:!top-full lg:!overflow-visible md:!left-[6%] lg:!left-[-1%] scale-50',
  },
}

const sx: SxProps = {
  '&.MuiDataGrid-root .MuiDataGrid-cell:focus-within': {
    outline: 'none !important',
  },
  [`.${gridClasses.main}`]: {
    overflow: 'unset',
  },
  [`.${gridClasses.columnHeaders}`]: {
    position: 'sticky',
    top: 0,
    backgroundColor: 'white',
    zIndex: 1,
  },
}

export function Table({ rows, columns, getRowClassName }: DataGridProProps) {
  const {
    filterModel,
    updateFilterModel,
    handleSort,
    sortModel,
    sortKey,
    updateSortmodel,
    updateSortDirection,
  } = useTable()

  const apiRef = useGridApiRef()

  const { state } = apiRef.current

  const { width } = useWindowSize()

  const slots: Partial<UncapitalizedGridProSlotsComponent> = {
    toolbar: () => {
      return (
        <Toolbar
          sortKey={sortKey}
          handleSort={handleSort}
          updateSortDirection={updateSortDirection}
        />
      )
    },
    filterPanel: (props) => {
      return <GridFilterPanel {...props} />
    },
    filterPanelRemoveAllIcon: () => <DeleteForever className="text-red-300" />,
    filterPanelAddIcon: () => <Add className="text-violet-500" />,
  }

  const tableHeight = state?.pagination?.paginationModel?.pageSize

  const pageSizeOptions = rows.length ? [5, 10, 20] : undefined

  return (
    <div
      style={{
        height: tableHeight,
        maxWidth: width,
      }}
    >
      <DataGridPro
        rows={rows}
        columns={columns}
        apiRef={apiRef}
        getRowClassName={getRowClassName}
        classes={dataGridClasses}
        sx={sx}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        ignoreDiacritics
        filterModel={filterModel}
        onFilterModelChange={updateFilterModel}
        slots={slots}
        slotProps={slotProps}
        pageSizeOptions={pageSizeOptions}
        localeText={pagination}
        pagination
        onSortModelChange={updateSortmodel}
        sortModel={sortModel}
      />
    </div>
  )
}
