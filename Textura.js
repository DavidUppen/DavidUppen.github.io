
function setup(){
  THREE.ImageUtils.crossOrigin = '';
  var textura = THREE.ImageUtils.loadTexture('http://daviduppen.github.io/METAL.jpg');
  var material = new THREE.MeshBasicMaterial( {map: textura} );
  var forma = new THREE.BoxGeometry(1, 1, 1);
  malla = new THREE.Mesh(forma, material);
 
  var geometry = new THREE.CylinderGeometry( 5, 4, 30, 3, 2, false, 0, 3.141592);
	cylinder = new THREE.Mesh( geometry, material );
  
  
  
  
  escena = new THREE.Scene();
  escena.add(malla);
  
  camara = new THREE.PerspectiveCamera();
  camara.position.z = 5;
  
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerHeight*.95, window.innerHeight*.95);
  document.body.appendChild(renderer.domElement);
  }
  
  function loop(){
    requestAnimationFrame(loop);
    
    malla.rotation.x += 0.01;
    malla.rotation.y += 0.01;
    
    renderer.render(escena, camara);
  }
  
  var camara, escena, renderer, malla;
  setup();
  loop();
