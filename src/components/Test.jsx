import { OrbitControls, RenderTexture, Text } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import React, { Suspense } from 'react'
import styled from 'styled-components'
import Cube from './Cube'
import AnimatedSphere from './AnimatedSphere'


const Container = styled.div`
height: 100vh;
width: 100%;
scroll-snap-align: center;
/* background-color: black; */
`
const Test = () => {

    return (
        <Container>
            <Canvas>


                <OrbitControls enableZoom={false} />
                <ambientLight intensity={0.5} />
                <directionalLight position={[-2, 5, 1]} intensity={2} />
                <ambientLight intensity={1} />
                {/* <Cube /> */}
                <Suspense fallback={null}>
                    <AnimatedSphere />
                </Suspense>


            </Canvas>
        </Container>
    )
}

export default Test
