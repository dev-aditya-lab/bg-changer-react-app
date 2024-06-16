import { useState } from "react";


function App() {

  const [color,setColor] = useState("bg-green-600")

  return (
    <>
        <div className={`w-[100vw] h-[100vh] duration-300 bg ${color} flex justify-center relative`}>
          <div className="bg-white rounded-lg w-3/4 h-14 absolute  bottom-20 flex justify-center align-middle gap-5 p-2" >
             <button onClick={()=> setColor("bg-black")} className="btn bg-black px-5 rounded-3xl text-white">Black</button>
             <button onClick={()=> setColor("bg-slate-600")} className="btn bg-slate-600 px-5 rounded-3xl text-white">slate</button>
             <button onClick={()=> setColor("bg-red-600")} className="btn bg-red-600 px-5 rounded-3xl text-white">Red</button>
             <button onClick={()=> setColor("bg-pink-500")} className="btn bg-pink-500 px-5 rounded-3xl text-white">Pink</button>
             <button onClick={()=> setColor("bg-yellow-100")} className="btn bg-yellow-100 px-5 rounded-3xl text-white">Yellow</button>
             <button onClick={()=> setColor("bg-blue-700")} className="btn bg-blue-700 px-5 rounded-3xl text-white">Blue</button>
             <button onClick={()=> setColor("bg-violet-600")} className="btn bg-violet-600 px-5 rounded-3xl text-white">Violet</button>
             <button onClick={()=> setColor("bg-emerald-700")} className="btn bg-emerald-700 px-5 rounded-3xl text-white">Emerald</button>
             <button onClick={()=> setColor("bg-amber-800")} className="btn bg-amber-800 px-5 rounded-3xl text-white">Amber</button>
             <button onClick={()=> setColor("bg-teal-800")} className="btn bg-teal-800 px-5 rounded-3xl text-white">Teal</button>
             <button onClick={()=> setColor("bg-rose-400")} className="btn bg-rose-400 px-5 rounded-3xl text-white">Rose</button>

          </div>
        </div>
    </>
  )
}

export default App;

