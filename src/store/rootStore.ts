import userStore, { IUserStore } from './userStore'

export interface IStore {
  user: IUserStore
}

export default function createStore(initialState: any): () => IStore{
  return () => {
    return {
      user: { ...userStore(), ...initialState?.user }
    }
  }
}
