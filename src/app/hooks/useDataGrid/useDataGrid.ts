import { useGridApiContext } from '@mui/x-data-grid'
type ChangeStatusProps = {
  id: number
  field: string
  newValue: string | number
}

export const useDataGrid = () => {
  const apiRef = useGridApiContext()

  function changeStatus({ id, field, newValue }: ChangeStatusProps) {
    const data = apiRef.current.getRowWithUpdatedValues(id, field)
    apiRef.current.updateRows([{ id, ...data, [field]: newValue }])
  }

  return {
    changeStatus,
  }
}
