import * as THREE from 'https://unpkg.com/three@0.119.1/build/three.module.js';
//import * as THREE from './typings/globals/three/index';

function main() {
    const canvas = document.querySelector("#canv");
    const renderer = new THREE.WebGLRenderer({canvas});
    

    //camera
    const fieldOfView = 75; //deg
    const aspect = 2; //canvas 300x150 = 300/150 = 2
    const near = 0.1;
    const far = 5;
    const camera = new THREE.PerspectiveCamera(fieldOfView, aspect, near. far)
    camera.position.z = 2;

    //scene
    const scene = new THREE.Scene();

    {
        const color = 0xFFFFFF;
        const intensity = 1;
        const light = new THREE.DirectionalLight(color, intensity);
        light.position.set(-1, 2, 4);
        scene.add(light);
    }
    //geometry
    const boxWidth = 1;
    const boxHeight = 1;
    const boxDepth = 1;
    const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);
    //material
    /*
    //const material = new THREE.MeshBasicMaterial({color: 0x44aa88});
    const material = new THREE.MeshPhongMaterial({color: 0x44aa88});
    //mesh
    const cube = new THREE.Mesh(geometry, material);

    scene.add(cube);

    function render(time) {
        time*=0.001; //convert into sec
        cube.rotation.x = time;
        cube.rotation.y = time;

        renderer.render(scene, camera);
        requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
    */

    function makeInstance(geometry, color, x) {
        const material = new THREE.MeshPhongMaterial({color});

        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        cube.position.x = x;

        return cube;
    }

    const cubes = [
        makeInstance(geometry, 0x44aa88, 0),
        makeInstance(geometry, 0x8844aa, -2),
        makeInstance(geometry, 0xaa8844, 2),

    ];

    function render(time) {
        time*=0.001; //convert into sec
        cubes.forEach((cube, ndx) => {
            const speed = 1 + ndx * .1;
            const rot = time * speed;
            cube.rotation.x = rot;
            cube.rotation.y = rot;
        });

        renderer.render(scene, camera);

        requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
    
}
main();