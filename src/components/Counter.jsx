import { useItemsStore } from '../stores/itemsStore'

function Counter() {
  const totalItems = useItemsStore((state) => state.items)
  const itemsPackedCount = totalItems.filter((item) => item.packed).length
  return (
    <p>
      <b>{itemsPackedCount}</b>/{totalItems.length} items packed
    </p>
  )
}

export default Counter
