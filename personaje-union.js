function CustomSinCurve( scale ){

	this.scale = ( scale === undefined ) ? 1 : scale;

}

CustomSinCurve.prototype = Object.create( THREE.Curve.prototype );
CustomSinCurve.prototype.constructor = CustomSinCurve;

CustomSinCurve.prototype.getPoint = function ( t ) {

	var tx = t * 3 - 1.5;
	var ty = Math.sin( 2 * Math.PI * t );
	var tz = 0;

	return new THREE.Vector3( tx, ty, tz ).multiplyScalar( this.scale );

};

var path = new CustomSinCurve( 10 );
var tubometry = new THREE.TubeGeometry( path, 5, 2, .5, false );

var esferaForma = new THREE.SphereGeometry(.65);
esferaForma.translate(0,1,0);

var tuboMalla = new THREE.Mesh(tubometry);
var esferaMalla = new THREE.Mesh(esferaForma);

var dragon = new THREE.Geometry();
dragon.merge(tuboMalla.geometry, tuboMalla.matrix);
dragon.merge(esferaMalla.geometry, esferaMalla.matrix);

var material = new THREE.MeshNormalMaterial();
var dragonMalla = new THREE.Mesh(dragon, material);

var escena = new THREE.Scene();
escena.add(dragonMalla);

var camara = new THREE.PerspectiveCamera();
camara.position.z = 5;

renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
