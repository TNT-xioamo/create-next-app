import React, { type PropsWithChildren, memo, useState } from 'react'
import { Button} from 'antd'


export default memo(function HeadnrollloginWrapper (props: PropsWithChildren<{}>) {
  const _go_to_login = () => {
    console.error('去登录')
  }
  return (
    <>
      <Button type="text" onClick={() => {}}>登录 ｜ 注册</Button>
    </>
  )
})