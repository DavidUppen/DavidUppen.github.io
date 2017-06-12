

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
	.setPath( 'I:/RealidadVirtual/' )
	.load( [
		'Future1.png',
		'Future2.png',
		'Future3.png',
		'Future4.png',
		'Future5.png',
		'Future6.png'
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


