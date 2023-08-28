import React, { memo, type PropsWithChildren} from 'react'
import AppHeadMain from '@/components/app-head'

export default memo(function AppHomePage(props: PropsWithChildren): JSX.Element {
  return (
    <div>
      <AppHeadMain />
    </div>
)})
