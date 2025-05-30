import { useEffect, useState } from 'react'
import { getAnswer } from '../../api/https'
import { getDataByDate, getDaysInMonth } from '../../utils/common'
import { Layout } from 'antd'
import { Content, Header } from 'antd/es/layout/layout'
import Sidebar from '../../components/Dashboard/Sidebar'
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons'
import { Card, Col, Row, Statistic } from 'antd'
import dayjs from 'dayjs'

const Dashboard = () => {
  const [data, setData] = useState([])
  const [dataByNow, setDataByNow] = useState<{ time_stamp: string | number | Date }[]>([])
  const [dataYesterday, setDataYesterDay] = useState<{ time_stamp: string | number | Date }[]>([])
  const [dataByMonth, setDataByMonth] = useState<{ time_stamp: string | number | Date }[]>([])

  useEffect(() => {
    getAnswer()
      .then((response) => {
        setData(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  useEffect(() => {
    const now = new Date('4/19/2025')
    const yesterday = new Date().setDate(now.getDate() - 1)
    const month = new Date().getMonth()
    const year = new Date().getFullYear()
    const allDays = getDaysInMonth(3, year)

    const queryByNow = getDataByDate(data, now, now)
    setDataByNow(queryByNow)
    const queryByYesterday = getDataByDate(data, new Date(yesterday), new Date(yesterday))
    setDataYesterDay(queryByYesterday)

    const queryByMonth = getDataByDate(data, allDays[0], allDays[allDays.length - 1])
    setDataByMonth(queryByMonth)
  }, [data])

  return (
    <Layout hasSider>
      <Sidebar />
      <Layout>
        <Header
          style={{
            position: 'sticky',
            top: 0,
            zIndex: 1,
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            backgroundColor: 'gray'
          }}
        />
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <Row gutter={10}>
            <Col span={6}>
              <Card variant='borderless'>
                <Statistic
                  title={<div>{dayjs().format('DD/MM/YYYY')}</div>}
                  value={dataByNow.length}
                  valueStyle={{ color: '#3f8600' }}
                  prefix={<ArrowUpOutlined />}
                  suffix='Lượt trả lời'
                />
              </Card>
            </Col>
            <Col span={6}>
              <Card variant='borderless'>
                <Statistic
                  title='Ngày'
                  value={9.3}
                  precision={2}
                  valueStyle={{ color: '#cf1322' }}
                  prefix={dataByNow.length > dataYesterday.length ? <ArrowDownOutlined /> : <ArrowUpOutlined />}
                  suffix='%'
                />
              </Card>
            </Col>
            <Col span={6}>
              <Card variant='borderless'>
                <Statistic
                  title='Tháng'
                  value={9.3}
                  precision={2}
                  valueStyle={{ color: '#cf1322' }}
                  prefix={<ArrowDownOutlined />}
                  suffix='%'
                />
              </Card>
            </Col>
            <Col span={6}>
              <Card variant='borderless'>
                <Statistic
                  title='Năm'
                  value={9.3}
                  precision={2}
                  valueStyle={{ color: '#cf1322' }}
                  prefix={<ArrowDownOutlined />}
                  suffix='%'
                />
              </Card>
            </Col>
          </Row>
        </Content>
      </Layout>
    </Layout>
  )
}

export default Dashboard
