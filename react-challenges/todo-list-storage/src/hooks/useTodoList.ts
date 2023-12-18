import { useEffect, useState } from "react"

interface TodoListItem {
  id: string;
  title: string;
  completed: boolean;
}

export const useTodoList = () => {
  const [items, setItems] = useState<TodoListItem[]>([])

  useEffect(() => {
    const itemsFromStorage = localStorage.getItem('todoListItems')

    if (itemsFromStorage) {
      setItems(JSON.parse(itemsFromStorage))
    }
  }, [])

  const storeItems = (itemsToStore: TodoListItem[]) =>  {
    localStorage.setItem('todoListItems', JSON.stringify(itemsToStore))
  }

  const toggleCompleted = (id: string, completed = true) => {
    setItems(prevItems => {
      const updatedItems = [...prevItems].map(item => {
        if (item.id === id) {
          item.completed = completed
        }

        return item
      })
      storeItems(updatedItems)

      return updatedItems
    })

  }

  const addItem = (newItem: TodoListItem) => {
    setItems(prevItems => {
      const updatedItems = [...prevItems, newItem]
      storeItems(updatedItems)
      return updatedItems
    })
  }

  const removeItem = (id: string) => {
    setItems(prevItems => {
      const updatedItems = [...prevItems.filter(item => item.id !== id)]
      storeItems(updatedItems)
      return updatedItems
    })
  }

  return {
    items,
    toggleCompleted,
    addItem,
    removeItem
  }
}