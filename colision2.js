

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


		var r= "";
		var urls=[r + "Future1.png", r + "Future2.png",
			  r + "Future3.png", r + "Future4.png",
			  r + "Future5.png", r + "Future6.png"
			 ];
		
		var textureCube = new THREE.CubeTextureLoader().load(urls);
		escena = new THREE.Scene();
		escena.background =textureCube;
	
	


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


