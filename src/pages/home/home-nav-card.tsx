import React, { memo, useState } from 'react'
import { Card } from 'antd'
import { navMenu } from './home-data'
import { AnyObject } from 'antd/es/_util/type'

export default memo(function HomeNavCard(props): JSX.Element {

  const [activeKey, setActiveKey] = useState('')

  const _on_mouse_move = (e: React.MouseEvent<HTMLUListElement, MouseEvent>) => {
    const { target } = e as any
    const key = target?.getAttribute('data-key') ?? target.parentNode.getAttribute('data-key')
    if (!key || key === activeKey) return
    setActiveKey(key)
    _render_card(key)
  }

  const _on_mouse_leave = (e: React.MouseEvent<HTMLUListElement, MouseEvent>) => {
    setActiveKey('')
  }

  const _render_card = (key: string, par?: AnyObject) => {
    console.error(key)
    
  }

  return (
    <>
      <Card hoverable className='nav-card'>
        <ul className='menu-list' onMouseMove={(e) => _on_mouse_move(e)} onMouseLeave={(e) => _on_mouse_leave(e)}>
          {
            navMenu.map(item => {
              return (
                <li className='n-li f-c-sa mouse-p' key={item.key} data-key={item.key}>
                  <a className='n-title' title={item.title}>{ item.title }</a>
                  <div className='nav-category'>{ item.category }</div>
                </li>
              )
            })
          }
        </ul>
        <div className='card-pos'></div>
      </Card>
    </>
  )
})