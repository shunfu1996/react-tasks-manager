import Calendar from 'react-calendar'
import './Calendar.css';
import moment from 'moment'


const ACalendar = ({dateState, setDateState, CardData, setFilterTask, isScheduler}) => {
    const changeDate = (e) => {
        handleToday()
      setDateState(e)
    }
    const handleToday = () =>{
        setFilterTask(CardData.filter(filterToday)
        )
      }
      
    function filterToday(task) {
      let selectDay = dateState
      let isSelectDay = selectDay.getFullYear()+'-'+("0" + (selectDay.getMonth() + 1)).slice(-2)+'-'+selectDay.getDate();
        if(isSelectDay === task.dueDate){
          return true
        }
    }
  
    return (
      <div style={isScheduler?{display: "block"}:{display: "none"}} >
        <Calendar
        value={dateState}
        onChange={changeDate}
        locale={"en-EN"} 
        />
        <p>Current selected date is <b>{moment(dateState).format('MMMM Do YYYY')}</b></p>
      </div>
    )
}

export default ACalendar;
