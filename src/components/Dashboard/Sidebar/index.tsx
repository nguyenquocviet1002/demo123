import Sider from 'antd/es/layout/Sider'
import { Menu, type MenuProps } from 'antd'
import { BarChartOutlined } from '@ant-design/icons'
import { createElement } from 'react'

const Sidebar = () => {
  const items: MenuProps['items'] = [
    {
      key: 1,
      icon: createElement(BarChartOutlined),
      label: 'Thống kê'
    }
  ]
  return (
    <Sider
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'sticky',
        insetInlineStart: 0,
        top: 0,
        bottom: 0,
        padding: 10,
        scrollbarWidth: 'thin',
        scrollbarGutter: 'stable'
      }}
    >
      <Menu theme='dark' mode='inline' defaultSelectedKeys={['4']} items={items} />
    </Sider>
  )
}

export default Sidebar
