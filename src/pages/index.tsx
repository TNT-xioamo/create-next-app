import React, { memo, type PropsWithChildren} from 'react'
import { AppPageMain } from '@/components'
import HomeNavCard from './home/home-nav-card'

export default memo(function AppHomePage(props: PropsWithChildren): JSX.Element {
  return (
    <>
      <AppPageMain center>
        <HomeNavCard />
      </AppPageMain>
    </>
)})
