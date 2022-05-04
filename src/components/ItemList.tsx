import React from 'react'
import { useStore } from '../hooks/useStore'
import Item from './Item'

const ItemList: React.FC = () => {
  const { items } = useStore()

  return (
    <div className="mt-5">
      {items.map((item) => (
        <Item key={item.uuid} item={item} />
      ))}
    </div>
  )
}

export default ItemList
