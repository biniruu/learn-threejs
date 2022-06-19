import { Canvas, useFrame } from '@react-three/fiber'
import React, { useRef } from 'react'

const Box = () => {
  const ref = useRef()
  useFrame(() => {
    ref.current.rotation.x += 0.01
    ref.current.rotation.y += 0.01
  })
  return (
    <mesh ref={ref}>
      <boxBufferGeometry />
      <meshBasicMaterial color="blue" />
    </mesh>
  )
}

function App() {
  return (
    <Canvas style={{ width: '100vw', height: '100vh', background: 'black' }}>
      <Box />
    </Canvas>
  )
}

export default App
