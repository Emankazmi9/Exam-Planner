import {useState} from 'react'
import Section1 from "./components/Section1"
import Section2 from "./components/Section2"

const App = () => {
   const [task, settask] = useState([]);
  return (
    <div className=" bg-sky-100">
     <h1 className="font-bold text-2xl text-center pt-10">MY EXAM PLANNER</h1>
     <p className="text-center text-gray-700">Plan your exam and stay prepared.Your key to success!</p>
     <div className= {task.length < 3 ? "lg:flex  " : ""}>
     <Section1   task={task} settask={settask} />
     <Section2  task={task} settask={settask} />
     </div>
    </div>
  )
}

export default App

