import { IStoreContext, StoreContext } from '../contexts/StoreContext'
import { useContext } from 'react'

export function useStore(): IStoreContext {
  const context = useContext(StoreContext)

  if (context === null) {
    throw new Error(
      'useStore requires components to be wrapped in a StoreProvider'
    )
  }

  return context
}
