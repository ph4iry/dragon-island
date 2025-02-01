import useSpline from '@splinetool/r3f-spline'
import { OrthographicCamera, PerspectiveCamera } from '@react-three/drei'
import { ScrollTriggeredIsland, ScrollTriggeredSatScore } from './ScrollTriggers'

export default function Scene({ ...props }) {
  const { nodes, materials } = useSpline('https://prod.spline.design/wTvRN7WaWeNmuIYK/scene.splinecode')
  // console.log(nodes);
  return (
    <>
      <color attach="background" args={['#FFE8C5']} />
      <group {...props} dispose={null}>
        <scene name="Scene 1">
          
          <PerspectiveCamera
            name="Camera"
            makeDefault={true}
            far={100000}
            near={70}
            fov={45}
            position={[1035.52, 227.87, -2886.39]}
            rotation={[-Math.PI, 0, Math.PI]}
          />

          <ScrollTriggeredSatScore start={0.6} end={0.8}>
            <group name="sat score" position={[3000, -650, -900]} rotation={[0, 0.34, 0]} scale={1}>
              <mesh
                name="Ellipse"
                geometry={nodes.Ellipse.geometry}
                material={materials['Ellipse Material']}
                castShadow
                receiveShadow
                position={[4.16, 13.02, -2.87]}
                rotation={[-Math.PI, -0.01, -2.74]}
                scale={1}
              />
              <mesh
                name="Text"
                geometry={nodes.Text.geometry}
                material={materials['Text Material']}
                castShadow
                receiveShadow
                position={[-12.68, 25.2, -5.35]}
                rotation={[-3.13, -0.02, -2.62]}
                scale={1}
              />
              <mesh
                name="Cube"
                geometry={nodes.Cube.geometry}
                material={materials['Cube Material']}
                castShadow
                receiveShadow
                position={[0, 0, 5.22]}
                rotation={[Math.PI / 2, -0.4, 3.13]}
                scale={1}
              />
            </group>
          </ScrollTriggeredSatScore>

          <ScrollTriggeredIsland start={0.1} end={0.2}>
            <group name="island" position={[0, 300.52, -300]}>
              <mesh
                name="pCube13"
                geometry={nodes.pCube13.geometry}
                material={nodes.pCube13.material}
                castShadow
                receiveShadow
                position={[-1148.54, -387.02, 563.45]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={[10.98, 9.42, 4.23]}
              />
              <group name="flag" position={[712.96, -122.24, 155.17]}>
                <mesh
                  name="Triangle"
                  geometry={nodes.Triangle.geometry}
                  material={materials['Triangle Material']}
                  castShadow
                  receiveShadow
                  position={[-0.14, 123.42, 1.63]}
                  rotation={[-Math.PI, 0, -1.58]}
                  scale={1}
                />
                <mesh
                  name="Cylinder"
                  geometry={nodes.Cylinder.geometry}
                  material={materials['Cylinder Material']}
                  castShadow
                  receiveShadow
                  position={[-114.03, 0, 0]}
                  rotation={[-Math.PI, 0, -Math.PI]}
                  scale={1}
                />
              </group>
              <group name="Group 4">
                <group
                  name="Tree green_01"
                  position={[163.53, -335.19, 186.71]}
                  rotation={[0, -0.5, 0]}
                  scale={[1.7, 2.52, 1.73]}
                >
                  <mesh
                    name="leaf"
                    geometry={nodes.leaf.geometry}
                    material={materials['Grass 1']}
                    castShadow
                    receiveShadow
                    position={[-22.44, 272.09, -3.22]}
                    scale={0.48}
                  />
                  <mesh
                    name="Cylinder1"
                    geometry={nodes.Cylinder1.geometry}
                    material={materials['Ground Dirt Cracked 02']}
                    castShadow
                    receiveShadow
                    position={[-4.37, 84.27, -3.46]}
                    rotation={[0, 0.61, 0]}
                    scale={0.86}
                  />
                </group>
                <group name="Grass Tall 2" position={[509.95, -315.99, -171.34]} rotation={[0, -0.42, 0]} scale={0.2}>
                  <mesh
                    name="Subdiv 4"
                    geometry={nodes['Subdiv 4'].geometry}
                    material={materials['Grass 1']}
                    castShadow
                    receiveShadow
                    position={[-25.73, 33.06, 9.24]}
                    rotation={[-1.01, -0.45, -1.06]}
                    scale={[0.19, 0.12, 0.65]}
                  />
                  <mesh
                    name="Subdiv 41"
                    geometry={nodes['Subdiv 41'].geometry}
                    material={materials['Grass 1']}
                    castShadow
                    receiveShadow
                    position={[-30.88, 69.94, 9.72]}
                    rotation={[-1.37, -0.34, -1.25]}
                    scale={[0.34, 0.22, 1.19]}
                  />
                  <mesh
                    name="Subdiv 42"
                    geometry={nodes['Subdiv 42'].geometry}
                    material={materials['Grass 1']}
                    castShadow
                    receiveShadow
                    position={[0.4, 46.61, -23.07]}
                    rotation={[-1.87, -0.02, 2.39]}
                    scale={[0.19, 0.12, 0.75]}
                  />
                </group>
                <group name="Grass Tall" position={[529.82, -316.26, -155.85]} rotation={[0, 0.12, 0]} scale={0.31}>
                  <mesh
                    name="Subdiv 43"
                    geometry={nodes['Subdiv 43'].geometry}
                    material={materials['Grass 1']}
                    castShadow
                    receiveShadow
                    position={[-25.73, 33.06, 9.24]}
                    rotation={[-1.01, -0.45, -1.06]}
                    scale={[0.19, 0.12, 0.65]}
                  />
                  <mesh
                    name="Subdiv 44"
                    geometry={nodes['Subdiv 44'].geometry}
                    material={materials['Grass 1']}
                    castShadow
                    receiveShadow
                    position={[-30.88, 69.94, 9.72]}
                    rotation={[-1.37, -0.34, -1.25]}
                    scale={[0.34, 0.22, 1.19]}
                  />
                  <mesh
                    name="Subdiv 45"
                    geometry={nodes['Subdiv 45'].geometry}
                    material={materials['Grass 1']}
                    castShadow
                    receiveShadow
                    position={[0.4, 46.61, -23.07]}
                    rotation={[-1.87, -0.02, 2.39]}
                    scale={[0.19, 0.12, 0.75]}
                  />
                </group>
                <group name="Group 2" position={[222.78, 64.65, -22.57]}>
                  <mesh
                    name="Ellipse"
                    geometry={nodes.Ellipse.geometry}
                    material={materials['Ellipse Material']}
                    castShadow
                    receiveShadow
                    position={[-69.1, -450.58, 32.7]}
                    rotation={[-Math.PI / 2, 0, -Math.PI]}
                  />
                  <group
                    name="float 2"
                    visible={false}
                    position={[-283.55, -572.14, 197.2]}
                    rotation={[-Math.PI, 0, -Math.PI]}
                    scale={[10.98, 9.42, 4.23]}
                  >
                    <mesh
                      name="pCube131"
                      geometry={nodes.pCube131.geometry}
                      material={nodes.pCube131.material}
                      castShadow
                      receiveShadow
                      position={[87.03, 214.9, -74.16]}
                    />
                  </group>
                </group>
              </group>
            </group>
          </ScrollTriggeredIsland>
          <OrthographicCamera name="1" makeDefault={false} far={10000} near={-50000} />
          <hemisphereLight name="Default Ambient Light" intensity={1.28} color="#3f796d" />
        </scene>
      </group>
    </>
  )
}