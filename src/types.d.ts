declare module '*.glb';
declare module '*.png';
declare module '*.css';

type MeshLineGeometryType = import('meshline').MeshLineGeometry;
type MeshLineMaterialType = import('meshline').MeshLineMaterial;
type Object3DNodeType<T, P> = import('@react-three/fiber').Object3DNode<T, P>;

declare global {
    namespace JSX {
        interface IntrinsicElements {
            meshLineGeometry: Object3DNodeType<MeshLineGeometryType, typeof import('meshline').MeshLineGeometry>;
            meshLineMaterial: Object3DNodeType<MeshLineMaterialType, typeof import('meshline').MeshLineMaterial>;
        }
    }
}