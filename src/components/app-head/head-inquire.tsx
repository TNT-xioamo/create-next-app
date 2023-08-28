import React, { type PropsWithChildren, memo, useState } from 'react'
import { Button, Form, Input, Space } from 'antd'
import { AiOutlineSearch } from 'react-icons/ai'


export default memo(function HeadInquireWrapper (props: PropsWithChildren<{}>) {

  const [valueSearch, setSearchValue] = useState('')

  const _search_query = () => {
    console.log('去查询', valueSearch)
  }

  const _setSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value.replace(/^\s*|\s*$/g, ''))
  }
  return (
    <>
      <Form className="head-inquire f-c-c">
        <Form.Item>
          <Space.Compact style={{ width: '100%' }}>
            <Input placeholder="今日热点 AI" value={valueSearch} onChange={(e) => _setSearchValue(e) } />
            <Button type="primary" icon={<AiOutlineSearch />} className='f-c-c' onClick={ () => _search_query() }>搜索</Button>
          </Space.Compact>
        </Form.Item>
      </Form>
    </>
  )
})

