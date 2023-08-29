import React, { type PropsWithChildren, memo } from 'react'
import AppHeadwrapper from './head-wrapper'
import Headactivity from '@/components/app-head/head-hotspot'
export default memo(function AppHeadMain(props: PropsWithChildren<{}>): JSX.Element {
  return(
    <>
      <Headactivity />
      <AppHeadwrapper />
    </>
  )
})