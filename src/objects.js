
/**
 * Objects
 */


// init loader
const loader = new THREE.GLTFLoader()
let model4;

// make async loader
const loadAsync = url => {
    return new Promise(resolve => {
        loader.load(url, gltf => {
            resolve(gltf)

        })
    })
}

// load both models in parallel
Promise.all([
    loadAsync('models/pozo/pozo.gltf'),
    loadAsync('models/monkey.gltf'),
    loadAsync('models/monkey.gltf'),
    loadAsync('models/rocket/rocket.glb')

]).then(models => {


    // get what you need from the models array
    const model1 = models[0].scene.children[0]
    model1.isDraggable = true;

    model1.scale.set(1, 1, 1);
    model1.position.set(1.5, -1, -10)

    const model2 = models[1].scene.children[0]
    model2.scale.set(1, 1, 1)
    model2.position.set(-3, -4, 4)


    const model3 = models[2].scene.children[0]
    model3.scale.set(1, 1, 1)
    model3.position.set(-2, -8, 10)



    // add models to the scene
    scene.add(model1, model2, model3)
    sectionMeshes.push(model1, model2, model3);
})

//===================================================== model
var mixer;
var model;
loader.load("models/rocket/rocket.glb",
    function (gltf) {
        gltf.scene.traverse(function (node) {
            if (node instanceof THREE.Mesh) {
                node.castShadow = true;
                node.material.side = THREE.DoubleSide;
            }
        });
        console.log(gltf)
        model = gltf.scene.children[0]
        model.scale.set(1, 1, 1);
        model.position.set(1.5, -1, -10)

        scene.add(model);

        mixer = new THREE.AnimationMixer(model);
        // mixer.clipAction(gltf.animations[1]).play();
        var action = mixer.clipAction(gltf.animations[0]);
        action.play();

        createAnimation(mixer, action, gltf.animations[0]);


    }
);

function createAnimation(mixer, action, clip) {
    let proxy = {
        get time() {
            return mixer.time;
        },
        set time(value) {
            action.paused = false;
            mixer.setTime(value);
            action.paused = true;
        }
    };
}
 