
/**
 * Objects
 */


// init loader
const loader = new THREE.GLTFLoader()
 
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
    loadAsync('models/crema.gltf'),
    loadAsync('models/monkey.gltf'),
    loadAsync('models/monkey.gltf')
]).then(models => {
    // get what you need from the models array
    const model1 = models[0].scene.children[0]
    model1.scale.set(20, 20, 20);
    model1.position.set(1.5, objectsDistance * 0, -10)

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

 





