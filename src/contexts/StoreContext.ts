import { Item } from '../types'
import { createContext } from 'react'

export interface IStoreContext {
  items: Item[]
  addItem: (name: string) => void
  clearItems: () => void
  removeItem: (itemUuid: string) => void
  shuffleItems: () => void
}

export const StoreContext = createContext<IStoreContext | null>(null)
