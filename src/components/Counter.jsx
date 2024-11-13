function Counter({ handleItemsPackedCount }) {
  const [itemsPackedCount, totalItems] = handleItemsPackedCount()
  return (
    <p>
      <b>{itemsPackedCount}</b>/{totalItems} items packed
    </p>
  )
}

export default Counter
