/**
 * Lights
 */
  
var light = new THREE.DirectionalLight("#ffffff", 1.5);
var ambient = new THREE.AmbientLight("#ffffff",1.5);
light.position.set( 0, 50, 50 ).normalize();
scene.add(light);
scene.add(ambient);
