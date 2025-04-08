import { useState } from 'react'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons'
import { Button, Layout, Menu, Space, theme } from 'antd'
import { decrement, increment } from '../../global/redux/counter/couter-slice'
import { useAppSelector, useAppDispatch } from '../../global/redux/hooks'
import { fetchProducts } from '../../apis/products'

const { Header, Sider, Content } = Layout

export default function Home() {
  const [collapsed, setCollapsed] = useState(false)
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()

  fetchProducts()

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken()

  return (
    <Layout style={{ height: '100vh' }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className='demo-logo-vertical' />
        <Menu
          theme='dark'
          mode='inline'
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'nav 1',
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: 'nav 2',
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'nav 3',
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type='text'
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <div>
            <Space>
              <Button onClick={() => dispatch(increment())}>Increment</Button>

              <Button onClick={() => dispatch(decrement())}>Decrement</Button>
              <span>{count}</span>
            </Space>
          </div>
        </Content>
      </Layout>
    </Layout>
  )
}
