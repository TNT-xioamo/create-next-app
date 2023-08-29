import userStore, { IUserStore } from './user-store'
import systemStore, { ISystemStore } from './system-store'

export interface IStore {
  user: IUserStore
  systemStore: ISystemStore
}

export default function createStore(initialValue: any): () => IStore{

  return () => {
    return {
      user: { ...userStore(), ...initialValue?.user },
      systemStore: { ...systemStore(), ...initialValue?.systemStore }
    }
  }
}
