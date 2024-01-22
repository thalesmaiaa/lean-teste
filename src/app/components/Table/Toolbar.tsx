/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box } from '@mui/material'
import { GridToolbarQuickFilter, useGridApiContext } from '@mui/x-data-grid'
import { FilterButton } from './FilterButton'
import { FilterPanel } from './FilterPanel'
import { createContext, useContext, useState } from 'react'

const inputProps = {
  className:
    'py-2 px-3 text-black-textPrimary text-base leading-6 tracking-0.15',
}

const inputLabelProps = {
  className: 'font-normal text-base leading-6 tracking-0.15  text-gray-800',
}

const sx = {
  '& fieldset': { border: '1px solid #E2E2E2' },
}

type SortPanelContextType = {
  open: boolean
  onClose: () => void
}

const SortPanelContext = createContext({} as SortPanelContextType)

type FilterPaneProps = {
  sortKey?: string
  handleSort: (event: React.ChangeEvent<HTMLInputElement>) => void
  updateSortDirection: (key: string) => void
}

export function Toolbar({
  sortKey,
  handleSort,
  updateSortDirection,
}: FilterPaneProps) {
  const [openSortModal, setOpenSortModal] = useState(false)

  const { current } = useGridApiContext()

  const { showFilterPanel: showPanel, state } = current

  function parseFilter(searchInput: string) {
    return searchInput.split(',').map((value) => value.trim())
  }

  function formatFilter(filter: any[]) {
    return filter.join(', ')
  }

  const isSorting = openSortModal
  const direction = isSorting ? 'up' : 'down'

  const isFiltering = state.preferencePanel.open
  const filterDirection = isFiltering ? 'up' : 'down'

  function closeSortModal() {
    setOpenSortModal(false)
  }

  function showFilterPanel() {
    showPanel('')
  }

  return (
    <SortPanelContext.Provider
      value={{ open: openSortModal, onClose: closeSortModal }}
    >
      <Box className="flex flex-col items-start md:flex-row gap-4 md:items-center py-4">
        <GridToolbarQuickFilter
          quickFilterParser={parseFilter}
          quickFilterFormatter={formatFilter}
          ignoreDiacritics
          debounceMs={500}
          variant="outlined"
          inputProps={inputProps}
          placeholder="Pesquisar ID ou nome ou telefone..."
          InputLabelProps={inputLabelProps}
          className="rounded-4 focus:outline-none "
          classes={{
            root: 'min-w-[25%]',
          }}
          sx={sx}
          InputProps={{
            startAdornment: null,
          }}
        />
        <Box className="relative">
          <FilterButton
            label="Ordernar por"
            onClick={() => setOpenSortModal(true)}
            direction={direction}
          />

          <FilterPanel
            value={sortKey}
            handleChange={handleSort}
            updateSortDirection={updateSortDirection}
          />
        </Box>

        <FilterButton
          label="Filtros"
          onClick={showFilterPanel}
          direction={filterDirection}
        />
      </Box>
    </SortPanelContext.Provider>
  )
}

export const useSortPanel = () => useContext(SortPanelContext)
