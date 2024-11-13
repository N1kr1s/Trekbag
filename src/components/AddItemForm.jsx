import { useState, useRef } from 'react'
import Button from './Button'
import { useItemsContext } from '../lib/hook'

function AddItemForm() {
  const { handleAddItem: onAddItem } = useItemsContext()
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
