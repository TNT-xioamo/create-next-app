import React, { type PropsWithChildren, memo } from 'react'

import { Headwrapper } from './head-style'

import HeadLogo from './head-logo'

export default memo(function AppHeadwrapper(props: PropsWithChildren<{}>) {
  return(
    <>
      <Headwrapper>
        <div className='wrappe-content'>
          <HeadLogo />
        </div>
      </Headwrapper>
    </>
  )
})
