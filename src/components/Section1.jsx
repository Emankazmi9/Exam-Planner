
import {useState} from 'react'

const Section1 = ({ task, settask }) => {

  const [title, settitle] = useState('');
  const [date, setdate] = useState('');
  const [time, settime] = useState('');
  const [status, setstatus] = useState('');
  const submited =(e)=>{
  e.preventDefault();
   const copytask =[...task];
      copytask.push({title,date,time,status})
      settask(copytask); 
      settitle('');
      setdate('');
      settime('');
      setstatus('');
}
  return (
      <form onSubmit={(e)=>{
      submited(e);
     
      }}
      className={`flex flex-col justify-between   px-15 mt-10 
        ${task.length < 3 ? " lg:w-1/2":""}`}
         >
        <h1 className="font-bold text-2xl">Add New Exam</h1>
       <label className="flex flex-col gap-2 ">
         Subject:
        <input className ="p-3 border rounded"
         type ="text"
         placeholder="Enter subject name"
         value={title}
         onChange={(e)=>{
          settitle(e.target.value)
         }}
         >
         </input>
       </label>
       <label className="flex flex-col gap-2 ">
         Exam Date:
        <input className ="p-3 border rounded"
         type="date" 
         value={date}
         onChange={(e)=>{
          setdate(e.target.value)
         }}
         ></input>
       </label>
        <label className="flex flex-col gap-2 ">
        Exam Time:
        <input className ="p-3 border rounded" 
        type="time"
        value={time}
         onChange={(e)=>{
          settime(e.target.value)
         }}
        ></input>
        </label> 
      <label className="flex flex-col gap-2">
        Status:
      <select className ="p-3 border rounded" name=" status"
      value={status}
      onChange={(e)=>{
       setstatus(e.target.value)
         }}
         >
        <option value="">--Choose Status</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed" >Completed</option>
        <option value="Not Started">Not Started</option>
    </select>
  </label>
 <button className="bg-sky-600 cursor-pointer hover:bg-sky-700 text-white rounded mt-5 py-2">Add Exam</button>
      </form>
  )
}

export default Section1
