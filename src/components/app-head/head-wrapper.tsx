import React, { type PropsWithChildren } from 'react'

import { Headwrapper } from './head-style'
import { useStore } from '@/store'

import HeadLogo from './head-logo'
import HeadMenuWrapper from './head-menu'
import HeadInquireWrapper from './head-inquire'
import HeadnrollloginWrapper from './head-enroll-login'
import { observer } from 'mobx-react-lite'

function AppHeadwrapper(props: PropsWithChildren<{}>): JSX.Element {
  const { systemStore } = useStore()
  const { showHotBar } = systemStore.systemInfo || false

  return(
    <>
      <Headwrapper $showhot={showHotBar}>
        <div className='wrappe-content f-c-sa'>
          <HeadLogo />
          <HeadMenuWrapper />
          <HeadInquireWrapper />
          <HeadnrollloginWrapper />
        </div>
      </Headwrapper>
    </>
  )
}

export default observer(AppHeadwrapper)