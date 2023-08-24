import React, { type PropsWithChildren, memo } from 'react'
import { Activitywrapper } from './head-style'

export default memo(function Headactivity({ children }: PropsWithChildren<{}>) {

  const img1 = 'https://static001.geekbang.org/resource/image/c9/71/c9580c6d9a74fd45776e1e4ac4949171.png'
  const img2 = 'https://static001.geekbang.org/resource/image/06/42/06595026a75cef46fa1f316288524542.png'

  const click_activity = () => {}

  return (
    <>
      <Activitywrapper img1={img1} img2={img2}>
        <div onClick={ () => click_activity() }>
          <div></div>
        </div>
      </Activitywrapper>
    </>
  )
})