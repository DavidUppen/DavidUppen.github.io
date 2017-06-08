
var listener = function() {
	camera.aspect = window.innerWidth/window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight);
}


function push(e) {
	if (e.keyCode===87){				// W
		if(impact[2]===0){
			esfera.position.y+=.1;
			camera.position.y+=.1;
		}	
	}
	else if (e.keyCode===83){				//S
		if(impact[3]===0){
			esfera.position.y-=.1;
			camera.position.y-=.1;
		}
	}
	else if (e.keyCode===65){				//A
		if(impact[1]===0){
			esfera.position.x-=.1;
			camera.position.x-=.1;
		}
	}	
	else if (e.keyCode===68){				//D
		if(impact[0]===0){
			esfera.position.x+=.1;
			camera.position.x+=.1;
		}
	}
	else if (e.keyCode===57){				//9
		camera.position.z-=.1;
	}	
	else if (e.keyCode===48){				//0
		camera.position.z+=.1;
	}
}


function Agent(x=0, y=0){

	THREE.Object3D.call(this);
	this.position.x= x;
	this.position.y= y;

}

function getRandomArbitrary(min, max) {
  	return Math.random() * (max - min) + min;
}

Agent.prototype = new THREE.Object3D();

Agent.prototype.sense= function(environment) {};
Agent.prototype.plan= function(environment) {};
Agent.prototype.act= function(environment) {};

function Environment(){

	THREE.Scene.call(this);

}

Environment.prototype= new THREE.Scene();

Environment.prototype.sense = function(){
	for(var i=0; i< this.children.length; i++){
		if (this.children[i].sense !== undefined)
			this.children[i].sense(this);
	}
}

Environment.prototype.plan= function(){
	for(var i=0; i< this.children.length; i++){
		if (this.children[i].plan !== undefined)
			this.children[i].plan(this);
	}
}

Environment.prototype.act = function (){
	for(var i=0; i< this.children.length; i++){
		if (this.children[i].act !== undefined)
			this.children[i].act(this);	
	}
}

Environment.prototype.setMap= function(map) {

	var _offset = Math.floor(map.length/2);

	for (var i=0; i < map.length; i++)
		for(var j=0; j< map.length; j++){
			if (map[i][j]=== "x")
				this.add(new Wall(1,j - _offset-.5, -(i- _offset-.5)));
			else if(map[i][j] ==="r")
				this.add (new Robot(0.4, j- _offset, -(i- _offset)));		
		}
};

function WallE(){
	
	var f=8;
	
	// Wall-E
	var llanta = new THREE.Shape();
            	llanta.moveTo(9.5/(1*f),0);
            	llanta.lineTo(18.5/(1*f),0);
            	llanta.lineTo(16.5/(1*f),5/(1*f));
		llanta.lineTo(11.5/(1*f),5/(1*f));
		llanta.lineTo(9.5/(1*f),0);

            	var extruir = {
                		steps: 10,
                		amount: 1,
                		bevelEnabled: false,
                		bevelThickness: 0,
                		bevelSize: 0,
                		bevelSegments: 1
            	};

        	var llanta1 = new THREE.ExtrudeGeometry(llanta, extruir);
	var llanta2 = new THREE.ExtrudeGeometry(llanta, extruir);
	var bodyForma = new THREE.BoxGeometry( 8.5/f, 8.5/f, 8.5/f );
	var bodyForma1 = new THREE.BoxGeometry( 6.8/f, 3.2/f, 3.2/f );
	var eyeForma1= new THREE.CylinderGeometry(1.2/f,1.2/f,2/f);
	var eyeForma2= new THREE.CylinderGeometry(1.2/f,1.2/f,2/f);
	var neckForma= new THREE.CylinderGeometry(1/f,1/f,2.5/f);
	llanta1.rotateX(Math.PI/2);
	llanta2.rotateX(Math.PI/2);
	llanta1.rotateZ(Math.PI/2);
	llanta2.rotateZ(Math.PI/2);
	bodyForma.translate(0,0,0.2);
	neckForma.rotateX(Math.PI/2);
	llanta1.translate(-0.3,-1.75,-0.5);
	llanta2.translate(-0.7,-1.75,-0.5);
	bodyForma1.translate(0,0,1.1);
	eyeForma1.translate(-0.22,-0.3,1.1);
	eyeForma2.translate(0.22,-0.3,1.1);
	neckForma.translate(0,0,.9);

	var material = new THREE.MeshBasicMaterial({color: '#aa0000'});

	var llanta1Malla = new THREE.Mesh(llanta1,material);
	var llanta2Malla = new THREE.Mesh(llanta2,material);
	var cuboMalla = new THREE.Mesh(bodyForma, material);
	var cuboMalla1 = new THREE.Mesh(bodyForma1, material);
	var eyeMalla1 = new THREE.Mesh(eyeForma1, material);
	var eyeMalla2 = new THREE.Mesh(eyeForma2, material);
	var neckMalla = new THREE.Mesh(neckForma, material);	

	var WallEForma = new THREE.Geometry();
	WallEForma.merge(llanta1Malla.geometry,llanta1Malla.matrix)
	WallEForma.merge(llanta2Malla.geometry,llanta2Malla.matrix)
	WallEForma.merge(cuboMalla.geometry,cuboMalla.matrix)
	WallEForma.merge(cuboMalla1.geometry,cuboMalla1.matrix)
	WallEForma.merge(eyeMalla1.geometry,eyeMalla1.matrix)
	WallEForma.merge(eyeMalla2.geometry,eyeMalla2.matrix)
	WallEForma.merge(neckMalla.geometry,neckMalla.matrix)
	var mesh = new THREE.Mesh(WallEForma,material);

	//mesh.rotateZ(Math.PI/2);
	return mesh;
}


function Robot(size,x=0,y=0){

	Agent.call(this,x,y);
	
	this.sensor= new Sensor();
	this.actuator= new WallE();
	this.actuator.commands={};
	this.add(this.actuator);

}

Robot.prototype= new Agent();


Robot.prototype.sense= function(environment){
	this.sensor.set(this.position, new THREE.Vector3(Math.cos(this.rotation.z),Math.sin(this.rotation.z),0));
	var obstaculo = this.sensor.intersectObjects(environment.children,true);


	if((obstaculo.length >0 && (obstaculo[0].distance <= .6)))
		this.sensor.colision= true;
	else
		this.sensor.colision= false;

};


Robot.prototype.plan= function(environment){
	
	this.actuator.commands=[];
	this.actuator.random=getRandomArbitrary(1,1001);

	if(this.sensor.colision == true){
		if(this.actuator.random<=500){
			this.actuator.commands.push('rotateCCW');
		}		
		else{
			this.actuator.commands.push('rotateCW');
		}
	}
	else{
		if(this.actuator.random<=970){
			this.actuator.commands.push('goStraight');
		}		
		else if(this.actuator.random<=985){
			this.actuator.commands.push('rotateCW');
		}
		else{
			this.actuator.commands.push('rotateCCW');
		}
	}
};



Robot.prototype.act= function(environment){
	var command= this.actuator.commands.pop();

	if (command === undefined)
		console.log('Undefined command');
	else if (command in this.operations)
		this.operations[command](this);
	else
		console.log('Unknown command');
};


function Wall(size,x=0,y=0){
	THREE.Mesh.call(this, new THREE.BoxGeometry(size, size, 10*size), new THREE.MeshNormalMaterial());
	this.size= size;
	this.position.x= x;
	this.position.y= y;
}

Wall.prototype= new THREE.Mesh();


function Sensor(position, direction){
	THREE.Raycaster.call(this, position, direction);
	this.colision=false;

}

Sensor.prototype= new THREE.Raycaster();



Robot.prototype.operations={};


Robot.prototype.operations.goStraight= function(robot, distance){
	if (distance=== undefined)
		distance= 0.1;
		robot.position.x += distance*Math.cos(robot.rotation.z);
		robot.position.y += distance*Math.sin(robot.rotation.z);
};


Robot.prototype.operations.rotateCW = function(robot, angle){
	if(angle=== undefined)
		angle= -Math.PI/2;
		robot.rotation.z += angle;
};


Robot.prototype.operations.rotateCCW = function(robot, angle){
	if(angle=== undefined)
		angle= Math.PI/2;
		robot.rotation.z += angle;
};


function setup(){

var mapa = new Array();


	mapa[0] = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";
	mapa[1] = "x_x_r_x____x__x________x__________r____________x";
	mapa[2] = "x_x___x_r__x__x________x_______________________x";
	mapa[3] = "x_x_r_x____x__x__r__x______xxxxxxxxxxxxxxxx____x";
	mapa[4] = "x_x___x____x__x_____x_____x________________x___x";
	mapa[5] = "x__r__x________x_________x_______xxxx_______x__x";
	mapa[6] = "x___x_x________x_________x_______x__x___r___x__x";
	mapa[7] = "x__x__x________x____x____x_______x__x_______x__x";
	mapa[8] = "x_x_______r______________x___r__xx__xx______x__x";
	mapa[9] = "x_x______________________x______x____x______x__x";
	mapa[10] = "x__x_x_x_________________x_____xx_____xx____x__x";
	mapa[11] = "xx_x___________x_________x_xxx_x______xxxxx_x__x";
	mapa[12] = "x________r_____x_________x_x__________r___x_x__x";
	mapa[13] = "x_______xx____x__________x_x____ x__x_____x_x__x";
	mapa[14] ="x___xx________x____r_____x_xx____x__x____xx_x__x";
	mapa[15] = "xx_x_______x_____________x__xx__________xx__x__x";
	mapa[16] = "x__x_______x_____________x___xx___r____xx___x__x";
	mapa[17] = "x_x__x_____x_____________x___xx________xx___x__x";
	mapa[18] = "x_r___xxx__x_____________x___x__________x___x__x";
	mapa[19] = "x____xx__________________x__xx____xx____xx__x__x";
	mapa[20] = "x________________________x__x___xxxxxx___x__x__x";
	mapa[21] = "xxxxxxxxx__x_r______r____x__x__xx_r__xx_____x__x";
	mapa[22] = "xxxxxxxxx___xx___________x__xxxx______xxxx__x__x";
	mapa[23] = "x________________________x______r___________x__x";
	mapa[24] = "x_____r___________________x__x_____________x___x";
	mapa[25] = "x__________________________xxxxxxx__xxxxxxx____x";
	mapa[26] ="x________r_____________________________________x";
	mapa[27] = "x_____xxxxxxxxxx__r____________________________x";
	mapa[28] = "x    x_____r____x_________x_r__________________x";
	mapa[29] = "x   x___xxxxxx___x__________x__________________x";
	mapa[30] = "x   x__x______x__x_______________________r_____x";
	mapa[31] = "x   x_x________x_x___________x_________________x";
	mapa[32] = "x   x_x___r____x_x_____________________________x";
	mapa[33] = "x   x_x___xx___x_x_____r__xxx__________________x";
	mapa[34] = "x   x__xxxxx___x_x_______xx____________________x";
	mapa[35] = "x   x____x____x__x___________________r_________x";
	mapa[36]= "x___x_r__x___x___x_____________________________x";
	mapa[37] = "x   x_____x_x____x_______r_____________________x"
	mapa[38] = "x r x____x_r_x___x_____________________________x";
	mapa[39] = "x   x_r__x___x___x_____________________________x"
	mapa[40] = "x   x_____x_x____x___________xxxxxxx___________x";
	mapa[41] = "x   x____________x____________________x________x";
	mapa[42] = "x____x__________x_______________r______________x";
	mapa[43]=  "x_____xxx____xxx_______________________________x";
	mapa[44] = "x_______________________________________x______x";
	mapa[45] = "x____r__________________________r______________x";
	mapa[46] = "x______________________________________________x";
	mapa[47] ="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";



	esfera = new THREE.Mesh(new THREE.SphereGeometry(0.5), new THREE.MeshNormalMaterial());
	
	//Tablero

	THREE.ImageUtils.crossOrigin = '';
  	var textura = THREE.ImageUtils.loadTexture('http://daviduppen.github.io/SNOW.jpg');
  	var material = new THREE.MeshBasicMaterial( {map: textura} );
        var tablero = new THREE.BoxGeometry(48, 48, 0.2);
        //var color1 = new THREE.Color(0x22DC6C);
	tablero.translate(0,0,-.6);
        //var material = new THREE.MeshBasicMaterial(color1);
        //material.color = color1;
        var tableroMalla = new THREE.Mesh(tablero, material);

	//



	environment= new Environment();
	environment.setMap(mapa);
	environment.add(esfera);
	environment.add(tableroMalla);

	raycaster[0]= new THREE.Raycaster( esfera.position, new THREE.Vector3(1,0,0));
	raycaster[1]= new THREE.Raycaster( esfera.position, new THREE.Vector3(-1,0,0));
	raycaster[2]= new THREE.Raycaster( esfera.position, new THREE.Vector3(0,1,0));
	raycaster[3]= new THREE.Raycaster( esfera.position, new THREE.Vector3(0,-1,0));

	camera= new THREE.PerspectiveCamera();
	camera.position.z=1.5;
	camera.position.y=-1.5;
	camera.rotateX(Math.PI/2);
	camera.rotateX(-Math.PI/8);
	
	
	renderer = new THREE.WebGLRenderer();
	renderer.setSize( window.innerWidth, window.innerHeight);
	document.body.appendChild(renderer.domElement);
	
	environment.add(camera);
	
	var tipoEvento = 'resize';
	var capturar = false;

	window.addEventListener( tipoEvento, listener, capturar);
	window.addEventListener( 'keydown',push, false);
}


function loop(){
	
	requestAnimationFrame(loop);

	var intersects = new Array();
	
	for(i=0;i<4;i++){
		intersects[i] = raycaster[i].intersectObjects( environment.children,true);
		if (intersects[i].length > 0 &&  intersects[i][0].distance <= 0.5){
			impact[i]= 1;
		} 
		else{
			impact[i]=0;
		}	
	}

	environment.sense();
	environment.plan();
	environment.act();

	renderer.render(environment, camera);

}


var environment, camera, renderer;
var raycaster= new Array();
var impact = new Array();

setup();
loop();
