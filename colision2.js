

function setup() {

	cubo1= new THREE.Mesh( new THREE.BoxGeometry ( 1, 1, 1),
			       new THREE.MeshNormalMaterial());
	cubo2= new THREE.Mesh( new THREE.BoxGeometry ( 1, 1, 1),
			       new THREE.MeshNormalMaterial());

	cubo1.position.x= 0.7;
	cubo2.position.x= -0.7;

	camara= new THREE.PerspectiveCamera();
	camara.position.z= 5;


	raycaster= new THREE.Raycaster();
	raycaster.setFromCamera( new THREE.Vector2(0, 0), camara );




escena = new THREE.Scene();
escena.background = new THREE.CubeTextureLoader();
	escena.background.setPath( 'http://daviduppen.github.io' )
	escena.background.load( [
		'http://daviduppen.github.io/Future1.png',
		'http://daviduppen.github.io/Future2.png',
		'http://daviduppen.github.io/Future3.png',
		'http://daviduppen.github.io/Future4.png',
		'http://daviduppen.github.io/Future5.png',
		'http://daviduppen.github.io/Future6.png'
	] );







	escena.add( cubo1 );
	escena.add( cubo2 );
	escena.add( camara );

	renderer = new THREE.WebGLRenderer();
	renderer.setSize( window.innerWidth,
			  window.innerHeight);

	document.body.appendChild( renderer.domElement);

	step= 0.01;

}


function loop(){

	var intersects = raycaster.intersectObjects( escena.children);

	if (intersects.length > 0) step= -step;

	
	cubo1.rotation.x += step;
	cubo1.rotation.y += step;

	cubo2.rotation.x += step;
	cubo2.rotation.y += step;

	renderer.render( escena, camara);
	requestAnimationFrame( loop);
 

}



	var cubo1, cubo2, escena, camara, renderer;
	var raycaster, step;
	
	setup();
	loop();


