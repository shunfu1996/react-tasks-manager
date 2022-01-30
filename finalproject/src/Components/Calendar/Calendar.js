import React, {useState} from 'react'
import Calendar from 'react-calendar'
import './Calendar.css';
import moment from 'moment'


const ACalendar = ({dateState, setDateState, CardData, filterTask, setFilterTask, isScheduler}) => {
    const changeDate = (e) => {
        handleToday()
      setDateState(e)
    }
    const handleToday = () =>{
        console.log(`YY ${dateState}`)
        let selectDay = dateState
        let isSelectDay = selectDay.getFullYear()+'-'+("0" + (selectDay.getMonth() + 1)).slice(-2)+'-'+selectDay.getDate();
        setFilterTask(CardData.filter((task) => {
            if(isSelectDay == task.dueDate){
                return true
              }
        }))
    }
    
    function filterToday(task){
        console.log(task.dueDate)
        if(dateState == task.dueDate){
          return true
        }
    }
  
    return (
      <div style={isScheduler?{display: "block"}:{display: "none"}}>
        <Calendar 
        value={dateState}
        onChange={changeDate}
        // Change the language tag
        locale={"en-EN"} 
        // returnValue={"end"}
        // formatMonth={"date, MMM"}
        // isMultiSelection={true}
        />
        <p>Current selected date is <b>{moment(dateState).format('MMMM Do YYYY')}</b></p>
      </div>
    )
}

export default ACalendar;
