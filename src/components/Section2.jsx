
import { Calendar ,Clock4 ,Trash} from 'lucide-react';
const Section2 = ({task ,settask}) => {

    const deleted=(idx)=>{
       const copytask = [...task];
       copytask.splice(idx,1);
       settask(copytask);
    }
    return (
    <div className={`px-15 mt-10 border-l-1 border-cyan-900 
         ${task.length < 3 ? "lg:w-1/2":""}`} >
      <h1 className="font-bold text-2xl">Your Scheduled Exam</h1>
     <div className='flex flex-wrap gap-5'>
     {task.map((elem,idx)=>{
        return(
            <div  key={idx} className='bg-white h-40 w-90 border  border-gray-600 rounded mt-5'>
                <div className='flex justify-between  px-5 py-3'>
                    <h1 className="font-bold  text-2xl ">{elem.title}</h1>
                    <Trash onClick={()=>{
                        deleted(idx)
                    }}  size={16} color="#e21212" strokeWidth={1.75} />
                </div>
                 <div className='flex items-center text-sm pl-3'>
                 <Calendar size={16} color="#1a1919" />
                <p className='pl-3 font-semibold'>{elem.date.split("-").reverse().join("-")}</p>
                 </div>
                 <div className='flex items-center text-sm pl-3 mt-3'>
                    <Clock4 size={16} color="#1d1b1b" />
                    <p className='pl-3 font-semibold'>{elem.time}</p>
                 </div>
                 <div className={`px-4 py-1 m-3 md:w-1/2 rounded
                 ${
                 elem.status === "Not Started"
                 ?"bg-red-500"
                 :elem.status === "In Progress"
                 ?"bg-yellow-400"
                 :"bg-green-400"
                 }`}
                 >
                    Status : {elem.status}
                 </div>
            </div>
            
        )
     })}
     
      
      </div>
    </div>
  )
}

export default Section2
