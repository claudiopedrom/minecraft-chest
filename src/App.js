import React, { Suspense, useState } from 'react'
//Styles
import './assets/styles/App.scss'
//Three
import { Canvas } from 'react-three-fiber'
import Lights from './components/Three/lights'
import Floor from './components/Three/floor'
import { softShadows } from '@react-three/drei'
//Model
import Model from './components/Three/chest'

softShadows()

const App = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Canvas colorManagement shadowMap camera={{ position: [-5, 4, 4], fov: 40 }}>
        <Lights />
        <Suspense fallback={null}>
          <Model open={open} setOpen={setOpen} />
          <Floor />
        </Suspense>
      </Canvas>
    </>
  )
}

export default App
