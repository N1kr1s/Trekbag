import EmptyView from './EmptyView'

export default function ItemList({
  items,
  handleDeleteItem,
  handleToggleItem,
}) {
  return (
    <ul className='item-list'>
      {items.length === 0 && <EmptyView />}
      {items.map((item) => (
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
