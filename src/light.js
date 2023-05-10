/**
 * Lights
 */
  
var light = new THREE.DirectionalLight("#ffffff", 1);
var ambient = new THREE.AmbientLight("#85b2cd",2);
light.position.set( 0, -70, 100 ).normalize();
scene.add(light);
scene.add(ambient);
