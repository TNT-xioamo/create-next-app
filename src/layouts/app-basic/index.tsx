import React, { type PropsWithChildren, memo } from 'react'
import { Basic } from './basic.style'

function Layout(props: PropsWithChildren): JSX.Element {
  return (
    <>
      <Basic>
        {props.children}
      </Basic>
    </>
  )
}

export default memo(Layout)
