import {
  GridFilterModel,
  GridLogicOperator,
  GridSortModel,
} from '@mui/x-data-grid'
import { useCallback, useEffect, useState } from 'react'

export const useTable = () => {
  const [filterModel, setFilterModel] = useState<GridFilterModel>({
    items: [],
    quickFilterExcludeHiddenColumns: true,
    quickFilterValues: [],
    quickFilterLogicOperator: GridLogicOperator.Or,
  })

  const [sortModel, setSortModel] = useState<GridSortModel>([])

  const [sortKey, setSortKey] = useState<string>()

  const handleSort = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSortKey((event.target as HTMLInputElement).value)
  }

  const updateSortDirection = useCallback((key: string) => {
    setSortModel((prevSortModel) => {
      // Find the current sort value
      const currentSort = prevSortModel.length
        ? prevSortModel[0].sort
        : undefined

      // Toggle the sort value (ascending to descending, descending to ascending)
      const newSort = currentSort === 'asc' ? 'desc' : 'asc'

      return [
        {
          field: key,
          sort: newSort,
        },
      ]
    })
  }, [])

  const updateSort = useCallback(() => {
    if (sortKey) {
      updateSortDirection(sortKey)
    }
  }, [sortKey, updateSortDirection])

  function updateFilterModel(filterModel: GridFilterModel) {
    setFilterModel(filterModel)
  }

  function updateSortmodel(filterModel: GridSortModel) {
    setSortModel(filterModel)
  }

  useEffect(() => {
    updateSort()
  }, [updateSort])

  return {
    handleSort,
    sortModel,
    filterModel,
    updateFilterModel,
    sortKey,
    updateSortmodel,
    updateSortDirection,
  }
}
