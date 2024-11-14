import { useState, useRef } from 'react'
import Button from './Button'
import { useItemsStore } from '../stores/itemsStore'

function AddItemForm() {
  const onAddItem = useItemsStore((state) => state.addItem)
  const [itemText, setItemText] = useState('')
  const inputRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!itemText) {
      inputRef.current.focus()
      return
    }

    onAddItem(itemText)

    setItemText('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add an item</h2>
      <input
        autoFocus
        ref={inputRef}
        type='text'
        value={itemText}
        onChange={(e) => {
          setItemText(e.target.value)
        }}
      />
      <Button>Add to list</Button>
    </form>
  )
}

export default AddItemForm
