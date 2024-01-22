import { useClickOutside } from '@/hooks'
import {
  FormControlLabel,
  List,
  ListItem,
  Radio,
  RadioGroup,
} from '@mui/material'
import { useGridApiContext } from '@mui/x-data-grid'
import { useRef } from 'react'
import { useSortPanel } from './Toolbar'
type FilterPaneProps = {
  value?: string
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  updateSortDirection: (key: string) => void
}

export function FilterPanel({
  handleChange,
  value,
  updateSortDirection,
}: FilterPaneProps) {
  const { current } = useGridApiContext()
  const { getAllColumns } = current

  const radioGroupRef = useRef<HTMLElement>(null)

  const listRef = useRef<HTMLDivElement>(null)

  const { onClose, open } = useSortPanel()

  useClickOutside(listRef, onClose)

  return (
    <>
      {open && (
        <List
          className="absolute bg-white rounded-4 p-sort z-10 shadow-sort2 min-w-[250px]"
          component={'div'}
          ref={listRef}
        >
          <ListItem>
            <RadioGroup
              ref={radioGroupRef}
              aria-label="ringtone"
              name="ringtone"
              value={value}
              onChange={handleChange}
              onClick={(event) =>
                updateSortDirection(
                  (event.target as HTMLInputElement).value as string,
                )
              }
            >
              {getAllColumns()
                .filter((column) => Boolean(column.headerName))
                .map((option) => (
                  <FormControlLabel
                    key={option.field}
                    value={option.field}
                    control={
                      <Radio
                        classes={{
                          checked: '!text-violet-500',
                        }}
                      />
                    }
                    label={option.headerName}
                    classes={{
                      label:
                        'font-normal text-base leading-6 tracking-0.15 text-black-textPrimary',
                    }}
                  />
                ))}
            </RadioGroup>
          </ListItem>
        </List>
      )}
    </>
  )
}
