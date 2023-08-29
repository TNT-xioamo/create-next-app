export type ISystemInfo = {
  isShowDrawer?: boolean,
  defstyle?: boolean,
  showDrawer?: boolean,
  isShowSuggest?: boolean
}

export interface ISystemStore {
  systemInfo: ISystemInfo
  setSystemInfo: (systemInfo: ISystemInfo) => void
}

const systemStore= (): ISystemStore => {
  return {
    systemInfo: {
      isShowSuggest: false,
    },
    setSystemInfo: function (value: ISystemInfo) {
      this.systemInfo = {
        ...this.systemInfo,
        ...value}
    }
  }
}

export default systemStore