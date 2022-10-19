/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: BlackCube (https://sketchfab.com/blackcube4)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/nzxt-minitkl-mechanical-keyboard-bcc7172169ac49e7bb7921de405e7a4c
title: NZXT miniTKL - mechanical Keyboard
*/

import * as THREE from "three";
import { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
	nodes: {
		Outer_Volume_Control_Outer_Volume_Control_0: THREE.Mesh;
		Side_Buttons_Side_Buttons_0: THREE.Mesh;
		Inner_Volume_Control_Inner_Volume_Control_0: THREE.Mesh;
		Stand_Side_0: THREE.Mesh;
		Stand_Rubber_0: THREE.Mesh;
		Bottom_Shell_Bottom_Shell_0: THREE.Mesh;
		Bottom_Shell_Side_0: THREE.Mesh;
		Rubber_Feet_Rubber_0: THREE.Mesh;
		PCB_LEDs_0: THREE.Mesh;
		PCB_PCB_0: THREE.Mesh;
		Top_Shell_Top_Plate_0: THREE.Mesh;
		Stabilizer_Base_Stabilizer_2_0: THREE.Mesh;
		wire_Metal_0: THREE.Mesh;
		Stabilizer_Base001_Stabilizer_2_0: THREE.Mesh;
		wire001_Metal_0: THREE.Mesh;
		Stabilizer_Base002_Stabilizer_2_0: THREE.Mesh;
		wire002_Metal_0: THREE.Mesh;
		Stabilizer_Base003_Stabilizer_2_0: THREE.Mesh;
		wire003_Metal_0: THREE.Mesh;
		Object_51: THREE.SkinnedMesh;
		Object_52: THREE.SkinnedMesh;
		Object_53: THREE.SkinnedMesh;
		Object_54: THREE.SkinnedMesh;
		Object_55: THREE.SkinnedMesh;
		Object_56: THREE.SkinnedMesh;
		Object_57: THREE.SkinnedMesh;
		_rootJoint: THREE.Bone;
	};
	materials: {
		Outer_Volume_Control: THREE.MeshStandardMaterial;
		Side_Buttons: THREE.MeshStandardMaterial;
		Inner_Volume_Control: THREE.MeshStandardMaterial;
		Side: THREE.MeshStandardMaterial;
		Rubber: THREE.MeshStandardMaterial;
		Bottom_Shell: THREE.MeshStandardMaterial;
		LEDs: THREE.MeshStandardMaterial;
		material: THREE.MeshStandardMaterial;
		Top_Plate: THREE.MeshStandardMaterial;
		Stabilizer_2: THREE.MeshStandardMaterial;
		Metal: THREE.MeshStandardMaterial;
		Switch: THREE.MeshStandardMaterial;
		Keys_Bottom: THREE.MeshStandardMaterial;
		Keys_Top: THREE.MeshStandardMaterial;
		Stabilizer_1: THREE.MeshStandardMaterial;
		Switch_Bottom: THREE.MeshStandardMaterial;
		Switch_Mid: THREE.MeshPhysicalMaterial;
	};
	animations: GLTFAction[];
};

type ActionName = "Open";
// type GLTFActions = Record<ActionName, THREE.AnimationAction>
interface GLTFAction extends THREE.AnimationClip {
	name: ActionName;
}

type Props = {
	groupProps?: JSX.IntrinsicElements["group"];
	toggle: boolean;
};

export function Keyboard({ groupProps, toggle }: Props) {
	const group = useRef<THREE.Group>(null);
	const { nodes, materials, animations } = useGLTF("model/keyboard/keyboard.glb") as any as GLTFResult;
	const { actions } = useAnimations(animations, group);

	useEffect(() => {
		if (actions.Open) {
			console.log(toggle);
			if (toggle) {
				actions.Open.play();
			} else {
				actions.Open.stop();
			}
		}
	}, [toggle]);

	return (
		<group ref={group} {...groupProps} dispose={null}>
			<group name="Sketchfab_Scene">
				<group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={4.34}>
					<group name="NZXT_18_-_animation_with_bonesfbx" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
						<group name="Object_2">
							<group name="RootNode">
								<group
									name="Outer_Volume_Control"
									position={[-16.44, 2.73, -8.7]}
									rotation={[-1.38, 0, 0]}
									scale={0.86}
								>
									<mesh
										name="Outer_Volume_Control_Outer_Volume_Control_0"
										castShadow
										receiveShadow
										geometry={nodes.Outer_Volume_Control_Outer_Volume_Control_0.geometry}
										material={materials.Outer_Volume_Control}
									/>
								</group>
								<group name="Side_Buttons" position={[-16.66, 1.65, -5.08]} rotation={[-1.38, 0, 0]} scale={0.36}>
									<mesh
										name="Side_Buttons_Side_Buttons_0"
										castShadow
										receiveShadow
										geometry={nodes.Side_Buttons_Side_Buttons_0.geometry}
										material={materials.Side_Buttons}
									/>
								</group>
								<group
									name="Inner_Volume_Control"
									position={[-16.44, 2.73, -8.7]}
									rotation={[-1.38, 0, 0]}
									scale={173.44}
								>
									<mesh
										name="Inner_Volume_Control_Inner_Volume_Control_0"
										castShadow
										receiveShadow
										geometry={nodes.Inner_Volume_Control_Inner_Volume_Control_0.geometry}
										material={materials.Inner_Volume_Control}
									/>
								</group>
								<group name="Stand" position={[-13.12, 0.94, -9.4]} rotation={[-1.44, 0, 0]} scale={173.44}>
									<mesh
										name="Stand_Side_0"
										castShadow
										receiveShadow
										geometry={nodes.Stand_Side_0.geometry}
										material={materials.Side}
									/>
									<mesh
										name="Stand_Rubber_0"
										castShadow
										receiveShadow
										geometry={nodes.Stand_Rubber_0.geometry}
										material={materials.Rubber}
									/>
								</group>
								<group name="Bottom_Shell" position={[-16.94, 1.06, 1.9]} rotation={[-1.44, 0, 0]} scale={173.44}>
									<mesh
										name="Bottom_Shell_Bottom_Shell_0"
										castShadow
										receiveShadow
										geometry={nodes.Bottom_Shell_Bottom_Shell_0.geometry}
										material={materials.Bottom_Shell}
									/>
									<mesh
										name="Bottom_Shell_Side_0"
										castShadow
										receiveShadow
										geometry={nodes.Bottom_Shell_Side_0.geometry}
										material={materials.Side}
									/>
								</group>
								<group name="Rubber_Feet" rotation={[1.7, 0, 0]} scale={0.61}>
									<mesh
										name="Rubber_Feet_Rubber_0"
										castShadow
										receiveShadow
										geometry={nodes.Rubber_Feet_Rubber_0.geometry}
										material={materials.Rubber}
									/>
								</group>
								<group name="PCB" position={[10.03, 2.13, -1.31]} rotation={[-1.38, 0, -Math.PI]} scale={100.01}>
									<mesh
										name="PCB_LEDs_0"
										castShadow
										receiveShadow
										geometry={nodes.PCB_LEDs_0.geometry}
										material={materials.LEDs}
									/>
									<mesh
										name="PCB_PCB_0"
										castShadow
										receiveShadow
										geometry={nodes.PCB_PCB_0.geometry}
										material={materials.material}
									/>
								</group>
								<group name="Top_Shell" position={[-16.94, 1.06, 1.9]} rotation={[-1.38, 0, 0]} scale={173.44}>
									<mesh
										name="Top_Shell_Top_Plate_0"
										castShadow
										receiveShadow
										geometry={nodes.Top_Shell_Top_Plate_0.geometry}
										material={materials.Top_Plate}
									/>
								</group>
								<group name="Stabilizer_Base" position={[-7.68, 1.12, 0.4]} rotation={[-1.38, 0, -Math.PI]}>
									<mesh
										name="Stabilizer_Base_Stabilizer_2_0"
										castShadow
										receiveShadow
										geometry={nodes.Stabilizer_Base_Stabilizer_2_0.geometry}
										material={materials.Stabilizer_2}
									/>
								</group>
								<group name="wire" position={[-2.89, 1.35, -0.45]} rotation={[0.19, 0, 0]} scale={0.08}>
									<mesh
										name="wire_Metal_0"
										castShadow
										receiveShadow
										geometry={nodes.wire_Metal_0.geometry}
										material={materials.Metal}
									/>
								</group>
								<group name="Stabilizer_Base001" position={[11.5, 1.78, -2.94]} rotation={[-1.38, 0, -Math.PI / 2]}>
									<mesh
										name="Stabilizer_Base001_Stabilizer_2_0"
										castShadow
										receiveShadow
										geometry={nodes.Stabilizer_Base001_Stabilizer_2_0.geometry}
										material={materials.Stabilizer_2}
									/>
								</group>
								<group name="wire001" position={[10.61, 2.09, -4.22]} rotation={[0.19, Math.PI / 2, 0]} scale={0.08}>
									<mesh
										name="wire001_Metal_0"
										castShadow
										receiveShadow
										geometry={nodes.wire001_Metal_0.geometry}
										material={materials.Metal}
									/>
								</group>
								<group name="Stabilizer_Base002" position={[12.02, 2.56, -6.92]} rotation={[-1.38, 0, 0]}>
									<mesh
										name="Stabilizer_Base002_Stabilizer_2_0"
										castShadow
										receiveShadow
										geometry={nodes.Stabilizer_Base002_Stabilizer_2_0.geometry}
										material={materials.Stabilizer_2}
									/>
								</group>
								<group name="wire002" position={[10.74, 2.45, -6.06]} rotation={[-2.95, 0, -Math.PI]} scale={0.08}>
									<mesh
										name="wire002_Metal_0"
										castShadow
										receiveShadow
										geometry={nodes.wire002_Metal_0.geometry}
										material={materials.Metal}
									/>
								</group>
								<group name="Stabilizer_Base003" position={[11.31, 1.48, -1.42]} rotation={[-1.38, 0, 0]}>
									<mesh
										name="Stabilizer_Base003_Stabilizer_2_0"
										castShadow
										receiveShadow
										geometry={nodes.Stabilizer_Base003_Stabilizer_2_0.geometry}
										material={materials.Stabilizer_2}
									/>
								</group>
								<group name="wire003" position={[10.03, 1.37, -0.56]} rotation={[-2.95, 0, -Math.PI]} scale={0.08}>
									<mesh
										name="wire003_Metal_0"
										castShadow
										receiveShadow
										geometry={nodes.wire003_Metal_0.geometry}
										material={materials.Metal}
									/>
								</group>
								<group name="Armature" position={[0, 0, 2.78]} rotation={[-1.38, 0, 0]}>
									<group name="Object_40">
										<primitive object={nodes._rootJoint} />
										<group name="Object_50" position={[15.51, 2.19, 0.61]} rotation={[-1.38, 0, 0]} />
										<skinnedMesh
											name="Object_51"
											geometry={nodes.Object_51.geometry}
											material={materials.Switch}
											skeleton={nodes.Object_51.skeleton}
										/>
										<skinnedMesh
											name="Object_52"
											geometry={nodes.Object_52.geometry}
											material={materials.Keys_Bottom}
											skeleton={nodes.Object_52.skeleton}
										/>
										<skinnedMesh
											name="Object_53"
											geometry={nodes.Object_53.geometry}
											material={materials.Keys_Top}
											skeleton={nodes.Object_53.skeleton}
										/>
										<skinnedMesh
											name="Object_54"
											geometry={nodes.Object_54.geometry}
											material={materials.Stabilizer_1}
											skeleton={nodes.Object_54.skeleton}
										/>
										<skinnedMesh
											name="Object_55"
											geometry={nodes.Object_55.geometry}
											material={materials.Switch_Bottom}
											skeleton={nodes.Object_55.skeleton}
										/>
										<skinnedMesh
											name="Object_56"
											geometry={nodes.Object_56.geometry}
											material={materials.Switch_Bottom}
											skeleton={nodes.Object_56.skeleton}
										/>
										<skinnedMesh
											name="Object_57"
											geometry={nodes.Object_57.geometry}
											material={materials.Switch_Mid}
											skeleton={nodes.Object_57.skeleton}
										/>
									</group>
								</group>
								<group name="MX_Switch_Top" position={[15.51, 2.19, 0.61]} rotation={[-1.38, 0, 0]} />
								<group name="Camera" position={[0, 25.09, -0.18]} rotation={[-1.4, Math.PI / 2, 0]}>
									<group name="Object_60" />
								</group>
							</group>
						</group>
					</group>
				</group>
			</group>
		</group>
	);
}

useGLTF.preload("/keyboard.glb");
