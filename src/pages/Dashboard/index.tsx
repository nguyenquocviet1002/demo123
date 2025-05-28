import { useEffect, useState } from 'react'
import { getAnswer } from '../../api/https'
import { getDataByDate, getDaysInMonth } from '../../utils/common'

const Dashboard = () => {
  const [data, setData] = useState([])
  const [dataByNow, setDataByNow] = useState<{ time_stamp: string | number | Date }[]>([])
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
    const now = new Date('4/18/2025')
    const month = new Date().getMonth()
    const year = new Date().getFullYear()
    const allDays = getDaysInMonth(3, year)

    const queryByNow = getDataByDate(data, now, now)
    setDataByNow(queryByNow)

    const queryByMonth = getDataByDate(data, allDays[0], allDays[allDays.length - 1])
    setDataByMonth(queryByMonth)
  }, [data])
  return <h1>Dashboard</h1>
}

export default Dashboard
