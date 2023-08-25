import React, { type PropsWithChildren, memo } from 'react'
import AppHeadwrapper from './head-wrapper'
export default memo(function AppHeadMain(props: PropsWithChildren<{}>) {
  return(
    <>
      <AppHeadwrapper />
    </>
  )
})