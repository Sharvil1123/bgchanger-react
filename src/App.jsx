
import { useState } from "react";
import "./App.css";


function App() {

  const [color, setColor] = useState("white")

  return (
    <>
      <div className="align-baseline h-[32rem] border-4 border-slate-950 rounded-lg my-4" style={{backgroundColor: color}}>
      
      </div>
      <div className="rounded-2xl border-spacing-2 bg-slate-50 mx-auto p-4 m-4 flex flex-wrap justify-center
      border-2 border-slate-950">
        <button className="border-2 border-slate-950 bg-red-400 m-4 p-4 rounded-full text-center " 
        onClick={() => setColor("red")}>Red</button>
        <button className="border-2 border-slate-950 bg-green-400 m-4 p-4 rounded-full text-center " 
        onClick={() => setColor("green")}>Green</button>
        <button className="border-2 border-slate-950 bg-blue-400 m-4 p-4 rounded-full text-center " 
        onClick={() => setColor("blue")}>Blue</button>
        <button className="border-2 border-slate-950 bg-purple-400 m-4 p-4 rounded-full text-center " 
        onClick={() => setColor("purple")}>Purple</button>
        <button className="border-2 border-slate-950 bg-pink-400 m-4 p-4 rounded-full text-center " 
        onClick={() => setColor("pink")}>Pink</button>
        <button className="border-2 border-slate-950 bg-slate-400 m-4 p-4 rounded-full text-center " 
        onClick={() => setColor("grey")}>Gray</button>
        <button className="border-2 border-slate-950 bg-amber-900 m-4 p-4 rounded-full text-center " 
        onClick={() => setColor("Brown")}>Brown</button>
        <button className="border-2 border-slate-950 bg-yellow-400 m-4 p-4 rounded-full text-center " 
        onClick={() => setColor("yellow")}>Yellow</button>
        <div>
        <button className="border-2 border-slate-950 m-4 p-4 rounded-full text-center" 
        onClick={() => setColor("white")}>Reset</button>
        </div>
       
      </div>
    </>
  );
}

export default App;
