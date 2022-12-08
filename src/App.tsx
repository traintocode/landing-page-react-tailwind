import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Lottie from "lottie-react";
import cactusAnimation from "./cactus.json";


function App() {
  const [count, setCount] = useState(0)
  const lottieRef = useRef();
  useEffect( () => {
    if (lottieRef) setTimeout(() => (lottieRef.current as any).pause(), 1500);
  }, [lottieRef]);

  return <main className="">
    {/* <!--Nav--> */}
    <div className="w-full container mx-auto p-6">

      <div className="w-full flex items-center justify-between">
        <a className="flex items-center text-indigo-400 no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="#">
          {/* <img className="h-12 fill-current text-indigo-600 pr-2" src="cactus.svg" /> */}
        </a>

        <div className="flex w-1/2 justify-end">
          <div className="">
            <button type="button" className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
          </div>
        </div>

      </div>
    </div>

    <Lottie animationData={cactusAnimation} lottieRef={lottieRef as any} />

    <a href="https://www.vecteezy.com/free-vector/logo-svg">Logo Svg Vectors by Vecteezy</a>
  </main>
}

export default App
