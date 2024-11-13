import Footer from './Footer'
import BackgroundHeading from './BackgroundHeading'
import Header from './Header'
import ItemList from './ItemList'
import Sidebar from './Sidebar'
import { useState } from 'react'
import { initialItems } from '../lib/constants'

function App() {
  const [items, setItems] = useState(initialItems)

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

  return (
    <>
      <BackgroundHeading />
      <main>
        <Header handleItemsPackedCount={handleItemsPackedCount} />
        <ItemList
          items={items}
          handleDeleteItem={handleDeleteItem}
          handleToggleItem={handleToggleItem}
        />
        <Sidebar
          handleAddItem={handleAddItem}
          handleRemoveAllItems={handleRemoveAllItems}
          handleResetToInitial={handleResetToInitial}
          handleMarkAllAsComplete={handleMarkAllAsComplete}
          handleMarkAllAsIncomplete={handleMarkAllAsIncomplete}
        />
      </main>
      <Footer />
    </>
  )
}

export default App
