type HotBtn = {
  key: string,
  label: string,
  link: string
}

const hotButton: HotBtn[] = [
  { key: '1', label: 'AIGC', link: 'hot' },
  { key: '2', label: 'K8S', link: 'hot' },
  { key: '3', label: 'STARK', link: 'hot' },
  {key: '4',label: 'AI大模型实战开发',link: 'hot' },
  { key: '5', label: 'PMP 项目管理', link: 'hot' }
]

const MenuOption = [
  {key: '1',label: '课程',menuitems: 'course' },
  {key: '2',label: '训练营',menuitems: 'bootcamp' },
  {key: '3',label: '年卡',menuitems: 'annual' },
  {key: '4',label: '部落',menuitems: 'tribe' },
  {key: '5',label: '社区',menuitems: 'community' },
  {key: '6',label: '企业版',menuitems: 'enterprise' }
]

export { MenuOption, hotButton }