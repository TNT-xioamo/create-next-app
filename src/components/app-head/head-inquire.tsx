import React, { type PropsWithChildren, memo, useState, useRef, ReactNode } from 'react'
import { Button, Form, Input, Space, Card } from 'antd'
import { AiOutlineSearch } from 'react-icons/ai'
import { FaHotjar } from 'react-icons/fa'
import { observer } from 'mobx-react-lite'

import { useStore } from '@/store'
import  { Inquirewrapper } from './head-style'
import useClickOut from '@/hooks/use-click-out'

function HeadInquireWrapper (props: PropsWithChildren<{}>): JSX.Element {

  const { systemStore } = useStore()

  const { isShowSuggest } = systemStore.systemInfo
  const [valueSearch, setSearchValue] = useState('')

  const popoverRef = useRef<HTMLDivElement>(null)

  useClickOut({
    domTargetRef : [popoverRef],
    onClickOut: (e: Event) => {
      !isShowSuggest && systemStore?.setSystemInfo({ isShowSuggest: false })
    }
  })

  const _search_query = () => {
    console.log('去查询', valueSearch)
  }

  const _setSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value.replace(/^\s*|\s*$/g, ''))
  }

  const _on_search_focus = () => {
    if (!isShowSuggest) systemStore?.setSystemInfo({ isShowSuggest: true })
  }

  const _render_suggest_card = () => {
    const title: ReactNode = <div><FaHotjar color='#ff8907' />热门搜索</div>
    return (
      <Card title={ title } className='pos-card  scale-up-center'> 土建 </Card>
    )
  }

  return (
    <>
      <Inquirewrapper ref={popoverRef}>
        <Form className="head-inquire f-c-c">
          <Form.Item>
            <Space.Compact style={{ width: '100%' }}>
              <Input placeholder="今日热点 AI" value={valueSearch} onChange={(e) => _setSearchValue(e) } onFocus={() => _on_search_focus()} />
              <Button type="primary" icon={<AiOutlineSearch />} className='f-c-c' onClick={ () => _search_query() }>搜索</Button>
            </Space.Compact>
          </Form.Item>
        </Form>
        { isShowSuggest && _render_suggest_card() }
      </Inquirewrapper>
    </>
  )
}

export default observer(HeadInquireWrapper)