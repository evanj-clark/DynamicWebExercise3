var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 30, window.innerWidth/window.innerHeight, 0.1, 1000 );
var mesh;
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// add cube
var geometry = new THREE.IcosahedronGeometry(20,0);
THREE.ImageUtils.crossOrigin = true;
var textureLoader = new THREE.TextureLoader();
textureLoader.crossOrigin = true;
// I cant get the image to work at all i keep getting this error even when trying the examples so they are no help either
// "Access to image at 'https://www.muralswallpaper.com/app/uploads/deep-blue-clouded-marble-textures-plain.jpg' from origin 'null' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource."
textureLoader.load('https://www.muralswallpaper.com/app/uploads/deep-blue-clouded-marble-textures-plain.jpg', function(texture) {
  texture.wrapS = texture.wrapT =   THREE.RepeatWrapping;
    texture.repeat.set( 2, 2 );
    var material = new THREE.MeshLambertMaterial( {map: texture} );
  mesh = new THREE.Mesh( geometry, material );
  scene.add( mesh );
  
});


camera.position.z = 100;

var light = new THREE.PointLight( 0xFFFF00 );
light.position.set( 10, 0, 25 );
scene.add( light );


var render = function () {
  requestAnimationFrame( render );
  mesh.rotation.x += 0.01;
  // i also keep getting the error the "mesh" is undefined even though it is declared on line 3 and assigned on 19
  renderer.render(scene, camera);
  
};

render();




