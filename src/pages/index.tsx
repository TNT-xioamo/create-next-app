import React, { memo, type PropsWithChildren} from 'react'
import Headactivity from '@/components/app-head/head-hotspot'
import AppHeadMain from '@/components/app-head'

export default memo(function AppHomePage(props: PropsWithChildren): JSX.Element {
  return (
    <div>
      <Headactivity />
      <AppHeadMain />
    </div>
)})
