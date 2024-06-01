import React, { useRef,useState } from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
const App = () => {
  const boxRef  = useRef();
  useGSAP(()=>{
    gsap.from(boxRef.current,{
      rotate:720,
      duration:1,
      delay:1,
    })
  },{scope:"container1"})
  // const [contextSafe] = useGSAP;
  const [box, setBox] = useState(0);
  const random = gsap.utils.random(-200,200,30)
  useGSAP(()=>{
    gsap.to(".box",{
      x:box,
      y:box,
      duration:1,
      yoyo:true,
      repeat:-1,
      rotate:100*box,
    })
  },[box])

  return (
    <main>
      <div className='container1'>
          <div className='circle'></div>
          <div ref={boxRef} className='box'></div>
      </div>
      <div className='container2'>
          <div className='circle'></div>
          <div className='box'></div>
      </div>
      <button onClick={()=>{
        setBox(random)
      }}>Animate</button>
      <div className="box"></div>
    </main>
  )
}

export default App