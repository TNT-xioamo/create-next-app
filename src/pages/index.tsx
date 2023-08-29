import React, { memo, type PropsWithChildren} from 'react'
import { AppPageMain } from '@/components'

export default memo(function AppHomePage(props: PropsWithChildren): JSX.Element {
  return (
    <div>
      <AppPageMain center>
        首页
      </AppPageMain>
    </div>
)})
