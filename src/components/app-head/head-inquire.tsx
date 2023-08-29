import React, { type PropsWithChildren, memo, useState } from 'react'
import { Button, Form, Input, Space, Card } from 'antd'
import { AiOutlineSearch } from 'react-icons/ai'

import { useStore } from '@/store'
// import { observer } from "mobx-react-lite"

function HeadInquireWrapper (props: PropsWithChildren<{}>) {

  const { systemStore } = useStore()
  const { isShowSuggest } = systemStore.systemInfo
  const [valueSearch, setSearchValue] = useState('')

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
    return (
      <Card title="搜索建议"></Card>
    )
  }

  return (
    <>
      <Form className="head-inquire f-c-c">
        <Form.Item>
          <Space.Compact style={{ width: '100%' }}>
            <Input placeholder="今日热点 AI" value={valueSearch} onChange={(e) => _setSearchValue(e) } onFocus={() => _on_search_focus()} />
            <Button type="primary" icon={<AiOutlineSearch />} className='f-c-c' onClick={ () => _search_query() }>搜索</Button>
          </Space.Compact>
        </Form.Item>
      </Form>
      { isShowSuggest && _render_suggest_card() }
    </>
  )
}

export default memo(HeadInquireWrapper)