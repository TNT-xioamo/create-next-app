export type IUserInfo = {
  userId?: number
  nickname?: string
  avatar?: string
  id?: number
  introduce?: string
  job?: string
  skill?: string
}

export interface IUserStore {
  userInfo: IUserInfo
  setUserInfo: (value: IUserInfo) => void
 }


const userStore = (): IUserStore => {
  return {
    userInfo: {},
    setUserInfo: function (value: IUserInfo) {
      this.userInfo = value
    }
  }
}

export default userStore
