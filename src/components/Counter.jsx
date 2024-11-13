import { useItemsContext } from '../lib/hook'

function Counter() {
  const { handleItemsPackedCount } = useItemsContext()
  const [itemsPackedCount, totalItems] = handleItemsPackedCount()
  return (
    <p>
      <b>{itemsPackedCount}</b>/{totalItems} items packed
    </p>
  )
}

export default Counter
