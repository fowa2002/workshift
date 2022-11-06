import { Calendar, dateFnsLocalizer} from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import React,{ useState } from "react";
import DatePicker from "react-datepicker";


const locales = {
    "ja": require("date-fns/locale/ja")
  }
  const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales
  })


//Dummy Data
const events = [
    {
        title: "Big Meeting",
        allDay: true,
        start: new Date(2022,11,0),
        end: new Date(2022,11,0)
    },
    {
        title: "Vaccation",
        start: new Date(2022,11,0),
        end: new Date(2022,11,0)
    },
    {
        title: "Big Meeting",
        start: new Date(2022,11,0),
        end: new Date(2022,11,0)
    }
  ]


function Calender() {

    const [ newEvent, setNewEvent] = useState({title:"", start:"", end:""})
    const [ allEvents, setAllEvents] = useState(events)

    function handleAddEvent() {
        setAllEvents([...allEvents, newEvent])
    }

    return (
        <div >
            {/* 달력 페이지입니다. */}
            <h1>Calendar</h1>
            <h2>Add New Event</h2>
            <input type="text" placeholder="Add Title" style={{width:"20%", marginRight:"10px"}}
                value={newEvent.title} onChange={(e) => setNewEvent({...newEvent, title:e.target.value})}
            />
            <DatePicker placeholderText="Start Date" style={{marginright:"10px"}}
             selected={newEvent.start} onchange={(start) => setNewEvent({...newEvent,start})}
            />
            <DatePicker placeholderText="End Date" style={{marginright:"10px"}}
             selected={newEvent.end} onchange={(end) => setNewEvent({...newEvent,end})}
            />
            <button style={{marginTop:"10px"}} onClick={handleAddEvent}>Click</button>
            <Calendar 
                localizer={localizer} 
                events={events}
                startAcessor="start" 
                endAccessor="end" 
                style={{height:500, margin:"50px"}}
            />
        </div>
    );
};

export default Calender;