import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useDispatch, useSelector } from 'react-redux'
import { landingTab } from '../../../actions/landing';

function Box(props) {
  const tab = useSelector(state => state.landingTab);
  const dispatch = useDispatch();

  const { value } = props;
  
  const ref = useRef()
  const [hovered, hover] = useState(false)
  useFrame((state, delta) => (ref.current.rotation.x += delta))

  return (
    <mesh
      {...props}
      ref={ref}
      scale={(tab === props.value) ? 1.5 : 1}
      onClick={() => dispatch(landingTab(value))}
      onPointerOver={(event) => (event.stopPropagation(), hover(true))}
      onPointerOut={(event) => hover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'gray' : 'black'} />
    </mesh>
  )
}

export default function Model() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Box position={[-1.2, 0, 0]} value="main"/>
      <Box position={[1.2, 0, 0]} value="table"/>
      <OrbitControls />
    </Canvas>
  )
}
