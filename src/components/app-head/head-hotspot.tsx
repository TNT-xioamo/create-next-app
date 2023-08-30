import React, { type PropsWithChildren, memo } from 'react'
import { AiOutlineClose } from 'react-icons/ai'

import { Activitywrapper } from './head-style'
import { useStore } from '@/store'

export default memo(function Headactivity({ children }: PropsWithChildren<{}>): JSX.Element {
  const { systemStore } = useStore()
  const img1 = 'https://static001.geekbang.org/resource/image/c9/71/c9580c6d9a74fd45776e1e4ac4949171.png'
  const img2 = 'https://static001.geekbang.org/resource/image/06/42/06595026a75cef46fa1f316288524542.png'

  const click_activity = () => {}

  const click_cancel = () => {
    systemStore?.setSystemInfo({ showHotBar: false })
  }

  return (
    <>
      <Activitywrapper $img1={img1} $img2={img2}>
        <div className='activity-wrapper' onClick={ () => click_activity() }>
          <div className='wrapper-content'>
            <AiOutlineClose className='content-cancel' onClick={() => click_cancel()} />
          </div>
        </div>
      </Activitywrapper>
    </>
  )
})