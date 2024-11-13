import { useEffect, useState, createContext } from 'react'
import { initialItems } from '../lib/constants'

// eslint-disable-next-line react-refresh/only-export-components
export const ItemsContext = createContext()

function ItemContextProvider({ children }) {
  const [items, setItems] = useState(() => {
    const storedItems = localStorage.getItem('items')
    return storedItems ? JSON.parse(storedItems) : initialItems
  })

  const handleAddItem = (newItemText) => {
    const newItem = {
      name: newItemText,
      packed: false,
      id: new Date().getTime(),
    }

    const newItems = [...items, newItem]
    setItems(newItems)
  }

  const handleDeleteItem = (id) => {
    const newItems = items.filter((item) => item.id !== id)
    setItems(newItems)
  }

  const handleToggleItem = (id) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, packed: !item.packed }
      }
      return item
    })
    setItems(newItems)
  }

  const handleRemoveAllItems = () => {
    setItems([])
  }

  const handleResetToInitial = () => {
    setItems(initialItems)
  }

  const handleMarkAllAsComplete = () => {
    setItems(items.map((item) => ({ ...item, packed: true })))
  }

  const handleMarkAllAsIncomplete = () => {
    setItems(items.map((item) => ({ ...item, packed: false })))
  }

  const handleItemsPackedCount = () => [
    items.filter((item) => item.packed).length,
    items.length,
  ]

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items))
  }, [items])

  return (
    <ItemsContext.Provider
      value={{
        items,
        handleAddItem,
        handleDeleteItem,
        handleToggleItem,
        handleRemoveAllItems,
        handleResetToInitial,
        handleMarkAllAsComplete,
        handleMarkAllAsIncomplete,
        handleItemsPackedCount,
      }}
    >
      {children}
    </ItemsContext.Provider>
  )
}

export default ItemContextProvider
