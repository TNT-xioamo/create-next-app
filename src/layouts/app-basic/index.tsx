import React, { type PropsWithChildren, memo } from 'react'
import { Basic } from './basic.style'
import { AppHeadMain } from '@/components'

function Layout(props: PropsWithChildren): JSX.Element {
  return (
    <>
      <Basic>
        <AppHeadMain />
        {props.children}
      </Basic>
    </>
  )
}

export default memo(Layout)
