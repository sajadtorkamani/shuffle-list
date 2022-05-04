import React from 'react'
import { useStore } from '../hooks/useStore'
import { Item as IItem } from '../types'
import ActionButton from './ActionButton'

type Props = { item: IItem }

const Item: React.FC<Props> = ({ item }) => {
  const { removeItem } = useStore()

  return (
    <div className="border border-gray-400 flex justify-between mb-2.5 p-2.5">
      <div>{item.name}</div>

      <div>
        <ActionButton
          className="text-red-700"
          onClick={() => removeItem(item.uuid)}
        >
          Remove
        </ActionButton>
      </div>
    </div>
  )
}

export default Item
