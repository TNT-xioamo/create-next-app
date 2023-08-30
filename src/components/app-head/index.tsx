import React, { type PropsWithChildren, memo } from 'react'
import AppHeadwrapper from './head-wrapper'
import Headactivity from '@/components/app-head/head-hotspot'
import { useStore } from '@/store'
import { observer } from 'mobx-react-lite'

function AppHeadMain(props: PropsWithChildren<{}>): JSX.Element {
  const { systemStore } = useStore()
  const { showHotBar } = systemStore.systemInfo
  return(
    <>
      { showHotBar && <Headactivity /> }
      <AppHeadwrapper />
    </>
  )
}

export default observer(AppHeadMain)