export const getDataByDate = (
  data: { time_stamp: string | number | Date }[],
  startDate: string | number | Date,
  endDate: string | number | Date
) => {
  const start = new Date(startDate).setHours(0, 0, 0)
  const end = new Date(endDate).setHours(23, 59, 59)
  const newData = data.filter((item) => {
    const time = new Date(item.time_stamp).getTime()
    return start < time && time < end
  })
  return newData
}

export const getDaysInMonth = (month: number, year: number) => {
  const date = new Date(year, month, 1)
  const days = []
  while (date.getMonth() === month) {
    days.push(new Date(date))
    date.setDate(date.getDate() + 1)
  }
  return days
}
