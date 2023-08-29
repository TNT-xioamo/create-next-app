/* eslint-disable @next/next/no-html-link-for-pages */
import React, { type PropsWithChildren, memo } from 'react'
import logo from '@/assets/app/app-head/logo-cn.svg'

export default memo(function HeadLogo(props: PropsWithChildren<{}>) {

  return(
    <>
      <div className='logo-wrapper'>
        <a className='go-home' href="/">
          <h1 className='logo-title'>天空之城</h1>
          <img className='head-logo' src = { logo.src } alt="logo" />
        </a>
      </div>
    </>
  )
})
