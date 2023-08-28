import React, { type PropsWithChildren, memo } from 'react'
import { Dropdown } from 'antd'
import type { MenuProps } from 'antd'
import { AnyObject } from 'antd/es/_util/type'

import { MenuOption } from './head-menu-data'
import { Menuwrapper } from './head-style'

export default memo(function HeadMenuWrapper(props: PropsWithChildren<{}>) {

  const render_course_menu = (props: string | void) => {
    const item: MenuProps['items'] = [
      {
        key: '1-1',
        label: ( <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">体系课</a> )
      },
      {
        key: '1-2',
        label: ( <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">公开课</a> )
      },
      {
        key: '1-3',
        label: ( <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">大厂案例</a> )
      },
      {
        key: '1-4',
        label: ( <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">每日一课</a> )
      }
    ]

    return item
  }

  return(
    <>
      <Menuwrapper>
        {
          MenuOption.map((item: AnyObject) => {
            const items = render_course_menu(item.menuitems)
            return (
              <Dropdown key={item.key} menu={{ items }}>
                <div className='f-c-c-1 mouse-p hover-color'>{ item.label }</div>
              </Dropdown>
            )
          })
        }
      </Menuwrapper>
    </>
  )
})