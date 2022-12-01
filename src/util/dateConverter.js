
const dateConverter = (date) => {
  const year = date.slice(0, 4)
  const month = date.slice(5, 7)
  const day = date.slice(8, 10)
  let longMonth = ''
  
  switch (month){
    case '01':
      longMonth = 'January'
      break
    case '02':
      longMonth = 'February'
      break
    case '03':
      longMonth = 'March'
      break
    case '04':
      longMonth = 'April'
      break
    case '05':
      longMonth = 'May'
      break
    case '06':
      longMonth = 'June'
      break
    case '07':
      longMonth = 'July'
      break
    case '08':
      longMonth = 'August'
      break
    case '09':
      longMonth = 'September'
      break
    case '10':
      longMonth = 'October'
      break
    case '11':
      longMonth = 'November'
      break
    case '12':
      longMonth = 'December'
      break
  }

  const formatDate = `${longMonth} ${day}, ${year}`
  return formatDate
}

export default dateConverter