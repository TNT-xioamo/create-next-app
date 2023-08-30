import React, { memo, type PropsWithChildren} from 'react'
import { AppPageMain } from '@/components'
import HomeNavCard from './home/home-nav-card'
import { NavWrapper } from './home/home-style'

export default memo(function AppHomePage(props: PropsWithChildren): JSX.Element {
  return (
    <>
      <AppPageMain center>
        <NavWrapper>
          <HomeNavCard />
        </NavWrapper>
      </AppPageMain>
    </>
)})
