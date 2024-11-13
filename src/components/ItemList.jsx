import { useMemo, useState } from 'react'
import EmptyView from './EmptyView'
import Select from 'react-select'

const sortingOptions = [
  {
    label: 'Sort by default',
    value: 'default',
  },
  {
    label: 'Sort by packed',
    value: 'packed',
  },
  {
    label: 'Sort by unpacked',
    value: 'unpacked',
  },
]

export default function ItemList({
  items,
  handleDeleteItem,
  handleToggleItem,
}) {
  const [sortBy, setSortBy] = useState('default')

  const sortedItems = useMemo(
    () =>
      [...items].sort((a, b) => {
        if (sortBy === 'default') {
          return a.name.localeCompare(b.name)
        } else if (sortBy === 'packed') {
          return b.packed - a.packed
        } else if (sortBy === 'unpacked') {
          return a.packed - b.packed
        }
      }),
    [items, sortBy]
  )

  return (
    <ul className='item-list'>
      {items.length === 0 && <EmptyView />}

      {items.length > 0 ? (
        <section className='sorting'>
          <Select
            onChange={(e) => setSortBy(e.value)}
            options={sortingOptions}
            defaultValue={sortingOptions[0]}
          />
        </section>
      ) : null}

      {sortedItems.map((item) => (
        <Item
          key={item.id}
          {...item}
          onDeleteItem={handleDeleteItem}
          onToggleItem={handleToggleItem}
        />
      ))}
    </ul>
  )
}

function Item({ name, packed, id, onDeleteItem, onToggleItem }) {
  return (
    <li className='item'>
      <label>
        <input
          onChange={() => onToggleItem(id)}
          type='checkbox'
          checked={packed}
          readOnly
        />
        {name}
      </label>
      <button onClick={() => onDeleteItem(id)}>❌</button>
    </li>
  )
}
