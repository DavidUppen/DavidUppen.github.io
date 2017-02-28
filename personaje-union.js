var points = [];
for ( var i = 0; i < 10; i ++ ) {
	points.push( new THREE.Vector2( Math.sin( i * 0.2 ) * 10 + 5, ( i - 5 ) * 2 ) );
}
var tazonForma = new THREE.LatheGeometry( points );
var cilindroForma = new THREE.CylinderGeometry(.125, .25, .2);
//var esferaForma = new THREE.SphereGeometry(.65);
//esferaForma.translate(0,1,0);
var cilindroMalla = new THREE.Mesh(cilindroForma);
var tazonMalla = new THREE.Mesh(tazonForma);

var formaForma = new THREE.Geometry();
formaForma.merge(cilindroMalla.geometry, cilindroMalla.matrix);
formaForma.merge(tazonMalla.geometry, tazonMalla.matrix);

var material = new THREE.MeshNormalMaterial();
var formaMalla = new THREE.Mesh(formaForma, material);

var escena = new THREE.Scene();
escena.add(formaMalla);

var camara = new THREE.PerspectiveCamera();
camara.position.z = 5;

renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
