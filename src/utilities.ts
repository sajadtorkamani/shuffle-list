import { v4 as uuidv4 } from 'uuid'
import { Item } from './types'

export function uuid(): string {
  return uuidv4()
}

export function saveItems(items: Item[]) {
  localStorage.setItem('shuffle-list.items', JSON.stringify(items))
}

export function loadItems(): Item[] {
  const items = localStorage.getItem('shuffle-list.items')
  return items ? JSON.parse(items) : []
}
