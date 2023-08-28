import React, { type PropsWithChildren, memo } from 'react'

import { Headwrapper } from './head-style'

import HeadLogo from './head-logo'
import HeadMenuWrapper from './head-menu'
import HeadInquireWrapper from './head-inquire'
import HeadnrollloginWrapper from './head-enroll-login'

export default memo(function AppHeadwrapper(props: PropsWithChildren<{}>) {
  return(
    <>
      <Headwrapper>
        <div className='wrappe-content f-c-sa'>
          <HeadLogo />
          <HeadMenuWrapper />
          <HeadInquireWrapper />
          <HeadnrollloginWrapper />
        </div>
      </Headwrapper>
    </>
  )
})
