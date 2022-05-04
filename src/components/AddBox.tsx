import React, { SyntheticEvent, useMemo, useState } from 'react'
import { useStore } from '../hooks/useStore'

const AddBox: React.FC = () => {
  const { addItem } = useStore()

  const [itemName, setItemName] = useState<string>('')

  const handleAddItem = (event: SyntheticEvent) => {
    event.preventDefault()

    addItem(itemName)
    setItemName('')
  }

  const isItemValid = useMemo(() => itemName.trim().length > 0, [itemName])

  return (
    <form onSubmit={handleAddItem}>
      <div className="flex">
        <input
          className="border border-gray-400 px-1.5 w-full h-[36px]"
          autoFocus
          type="text"
          placeholder="Add item..."
          value={itemName}
          onChange={(event) => setItemName(event.currentTarget.value)}
        />

        <button
          type="submit"
          disabled={!isItemValid}
          className="btn px-2.5 min-w-[60px] h-[36px] cursor-pointer"
        >
          Add
        </button>
      </div>
    </form>
  )
}

export default AddBox
