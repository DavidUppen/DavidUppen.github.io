var listener = function() {
	camera.aspect = window.innerWidth/window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight);
}
function push(e) {

	if(pause!=1){				
		if (e.keyCode===104 || e.keyCode===87){			// W, NUM8	(Arriba)			
			if(derecha===0 && izquierda===0){
				if(impact[2]===0&&impact[4]===0&&impact[5]===0){
					personaje.position.y+=.2;
					camera.position.y+=.2;
				}
			}		
			else if((derecha===1 && izquierda===-1)||(derecha===-3 && izquierda===3)){
				if(impact[0]===0&&impact[4]===0&&impact[6]===0){
					personaje.position.x+=.2;
					camera.position.x+=.2;
				}
			}
			else if((derecha===2 && izquierda===-2)||(derecha===-2 && izquierda===2)){
				if(impact[3]===0&&impact[6]===0&&impact[7]===0){
					personaje.position.y-=.2;
					camera.position.y-=.2;
				}
			}
			else if((derecha===3 && izquierda===-3)||(derecha===-1 && izquierda===1)){
				if(impact[1]===0&&impact[5]===0&&impact[7]===0){
					personaje.position.x-=.2;
					camera.position.x-=.2;
				}
			}	
		}
		else if (e.keyCode===98||e.keyCode===83){		// S, NUM2	(Abajo)
			if(derecha===0 && izquierda===0){
				if(impact[3]===0&&impact[6]===0&&impact[7]===0){
					personaje.position.y-=.2;
					camera.position.y-=.2;
				}
			}		
			else if((derecha===1 && izquierda===-1)||(derecha===-3 && izquierda===3)){
				if(impact[1]===0&&impact[5]===0&&impact[7]===0){
					personaje.position.x-=.2;
					camera.position.x-=.2;
				}
			}
			else if((derecha===2 && izquierda===-2)||(derecha===-2 && izquierda===2)){
				if(impact[2]===0&&impact[4]===0&&impact[5]===0){
					personaje.position.y+=.2;
					camera.position.y+=.2;
				}
			}
			else if((derecha===3 && izquierda===-3)||(derecha===-1 && izquierda===1)){
				if(impact[0]===0&&impact[4]===0&&impact[6]===0){
					personaje.position.x+=.2;
					camera.position.x+=.2;
				}
			}
		}
		else if (e.keyCode===69){				// E		(Derecha)
			if(derecha===0 && izquierda===0){
				if(impact[0]===0&&impact[4]===0&&impact[6]===0){
					personaje.position.x+=.2;
					camera.position.x+=.2;
				}
			}		
			else if((derecha===1 && izquierda===-1)||(derecha===-3 && izquierda===3)){
				if(impact[3]===0&&impact[6]===0&&impact[7]===0){
					personaje.position.y-=.2;
					camera.position.y-=.2;
				}
			}
			else if((derecha===2 && izquierda===-2)||(derecha===-2 && izquierda===2)){
				if(impact[1]===0&&impact[5]===0&&impact[7]===0){
					personaje.position.x-=.2;
					camera.position.x-=.2;
				}
			}
			else if((derecha===3 && izquierda===-3)||(derecha===-1 && izquierda===1)){
				if(impact[2]===0&&impact[4]===0&&impact[5]===0){
					personaje.position.y+=.2;
					camera.position.y+=.2;
				}
			}
		}
		else if (e.keyCode===81){				//Q		(Izquierda)
			if(derecha===0 && izquierda===0){
				if(impact[1]===0&&impact[5]===0&&impact[7]===0){
					personaje.position.x-=.2;
					camera.position.x-=.2;
				}
			}		
			else if((derecha===1 && izquierda===-1)||(derecha===-3 && izquierda===3)){
				if(impact[2]===0&&impact[4]===0&&impact[5]===0){
					personaje.position.y+=.2;
					camera.position.y+=.2;
				}
			}
			else if((derecha===2 && izquierda===-2)||(derecha===-2 && izquierda===2)){
				if(impact[0]===0&&impact[4]===0&&impact[6]===0){
					personaje.position.x+=.2;
					camera.position.x+=.2;
				}
			}
			else if((derecha===3 && izquierda===-3)||(derecha===-1 && izquierda===1)){
				if(impact[3]===0&&impact[6]===0&&impact[7]===0){
					personaje.position.y-=.2;
					camera.position.y-=.2;
				}
			}
		}
	}
	if (e.keyCode===100||e.keyCode===65){			// A, NUM4	(Camara Izquierda)
		camera.rotateX(rotation*(-Math.PI/32));
		camera.rotateX(Math.PI/8);
		camera.rotateY(Math.PI/2);
		camera.rotateX(-Math.PI/8);
		personaje.rotateZ(-Math.PI/2);
		derecha-=1;
		izquierda+=1;
		if (def!=1){
			camera.rotateX(rotation*(Math.PI/32));
		}
		else{
			camera.position.z=1.5;
			k=-2;
			rotation=0;
			def=0;
		}	
		if((derecha===0&&izquierda===0)||(derecha===4||izquierda===4)){
			derecha=0;
			izquierda=0;
			camera.position.y=personaje.position.y+k;
			camera.position.x=personaje.position.x;
		}
		else if((derecha===-1&&izquierda===1)||(derecha===3&&izquierda===-3)){
			camera.position.y=personaje.position.y;
			camera.position.x=personaje.position.x-k;
		}
		else if((derecha===2&&izquierda===-2)||(derecha===-2&&izquierda===2)){
			camera.position.y=personaje.position.y-k;
			camera.position.x=personaje.position.x;
		}
		else if((derecha===1&&izquierda===-1)||(derecha===-3&&izquierda===3)){
			camera.position.y=personaje.position.y;
			camera.position.x=personaje.position.x+k;	
		}
		console.log(derecha);
		console.log(izquierda);
	}
	else if (e.keyCode===102||e.keyCode===68){		// D, NUM6	(Camara Derecha)	
		camera.rotateX(rotation*(-Math.PI/32));
		camera.rotateX(Math.PI/8);
		camera.rotateY(-Math.PI/2);
		camera.rotateX(-Math.PI/8);
		personaje.rotateZ(Math.PI/2);
		derecha+=1;
		izquierda-=1;
		if (def!=1){
			camera.rotateX(rotation*(Math.PI/32));
		}
		else{
			camera.position.z=1.5;
			k=-2;
			rotation=0;
			def=0;
		}
		if((derecha===0&&izquierda===0)||(derecha===4||izquierda===4)){
			derecha=0;
			izquierda=0;
			camera.position.y=personaje.position.y+k;
			camera.position.x=personaje.position.x;
		}
		else if((derecha===-1&&izquierda===1)||(derecha===3&&izquierda===-3)){
			camera.position.y=personaje.position.y;
			camera.position.x=personaje.position.x-k;
		}
		else if((derecha===2&&izquierda===-2)||(derecha===-2&&izquierda===2)){
			camera.position.y=personaje.position.y-k;
			camera.position.x=personaje.position.x;
		}
		else if((derecha===1&&izquierda===-1)||(derecha===-3&&izquierda===3)){
			camera.position.y=personaje.position.y;
			camera.position.x=personaje.position.x+k;	
		}
		console.log(derecha);
		console.log(izquierda);
	}
	else if (e.keyCode===54){			//6	(Aleja CamaraX)
		camera.position.x-=.2;
	}	
	else if (e.keyCode===53){			//5	(Acerca CamaraX)
		camera.position.x+=.2;
	}
	else if (e.keyCode===57){			//9	(Baja Camara)
		camera.position.z-=.2;
	}	
	else if (e.keyCode===48){			//0	(Sube Camara)
		camera.position.z+=.2;
	}
	else if (e.keyCode===56){			//8	(Aleja CamaraY)
		camera.position.y-=.2;
		k-=.2;
	}	
	else if (e.keyCode===55){			//7	(Acerca CamaraY)
		camera.position.y+=.2;
		k+=.2;
	}
	else if (e.keyCode===52){			//4	(Inclinación Camara X)
		rotation-=1;
		camera.rotateX(-Math.PI/32);
	}
	else if (e.keyCode===51){			//3	(Inclinación Camara X)
		rotation+=1;
		camera.rotateX(Math.PI/32);
	}
	else if (e.keyCode===80){			//P	(Pausa)
		pause+=1;
		if (pause!=1){
			pause=0;
		}	
	}							
	else if (e.keyCode===76){			//L	(Camara por Defecto)
		def+=1;
		if (def!=1){
			def=0;
		}	
	}
	//else{						//	(Muestra Código ASCII Obtenido)
		console.log(e.keyCode);
		//console.log(e.keyCode);
	//}
}

function Agent(x=0, y=0){				//	(Declaración Agente)

	THREE.Object3D.call(this);
	this.position.x= x;
	this.position.y= y;

}

Agent.prototype = new THREE.Object3D();
Agent.prototype.sense= function(environment) {};
Agent.prototype.plan= function(environment) {};
Agent.prototype.act= function(environment) {};


function getRandomArbitrary(min, max) {			//	(Obtención Números Aleatorios)
  	return Math.random() * (max - min) + min;
}


function Environment(){					//	(Declaración Ambiente)

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
	
	// Wall-E
	var llanta = new THREE.Shape();
            	llanta.moveTo(9.5/8,0);
            	llanta.lineTo(18.5/8,0);
            	llanta.lineTo(16.5/8,5/8);
		llanta.lineTo(11.5/8,5/8);
		llanta.lineTo(9.5/8,0);

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
	var bodyForma = new THREE.BoxGeometry( 8.5/8, 8.5/8, 8.5/8 );
	var bodyForma1 = new THREE.BoxGeometry( 6.8/8, 3.2/8, 3.2/8 );
	var eyeForma1= new THREE.CylinderGeometry(1.2/8,1.2/8,2/8);
	var eyeForma2= new THREE.CylinderGeometry(1.2/8,1.2/8,2/8);
	var neckForma= new THREE.CylinderGeometry(1/8,1/8,2.5/8);
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

	//var material = new THREE.MeshBasicMaterial({color: '#aa0000'});
	THREE.ImageUtils.crossOrigin = '';
 	var textura = THREE.ImageUtils.loadTexture('http://daviduppen.github.io/TWE2.jpg');
  	var material = new THREE.MeshBasicMaterial( {map: textura} );

	var llanta1Malla = new THREE.Mesh(llanta1,material);
	var llanta2Malla = new THREE.Mesh(llanta2,material);
	var cuboMalla = new THREE.Mesh(bodyForma, material);
	var cuboMalla1 = new THREE.Mesh(bodyForma1, material);
	var eyeMalla1 = new THREE.Mesh(eyeForma1, material);
	var eyeMalla2 = new THREE.Mesh(eyeForma2, material);
	var neckMalla = new THREE.Mesh(neckForma, material);	

	var WallEForma = new THREE.Geometry();
	WallEForma.merge(llanta1Malla.geometry,llanta1Malla.matrix);
	WallEForma.merge(llanta2Malla.geometry,llanta2Malla.matrix);
	WallEForma.merge(cuboMalla.geometry,cuboMalla.matrix);
	WallEForma.merge(cuboMalla1.geometry,cuboMalla1.matrix);
	WallEForma.merge(eyeMalla1.geometry,eyeMalla1.matrix);
	WallEForma.merge(eyeMalla2.geometry,eyeMalla2.matrix);
	WallEForma.merge(neckMalla.geometry,neckMalla.matrix);
	var mesh = new THREE.Mesh(WallEForma,material);

	mesh.rotateZ(Math.PI/2);
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

	if((obstaculo.length >0 && (obstaculo[0].distance <= .7)))
		this.sensor.colision= true;
	else
		this.sensor.colision= false;
};


Robot.prototype.plan= function(environment){
	
	this.actuator.commands=[];
	this.actuator.random=getRandomArbitrary(1,1001);

	if(pause!=1){
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
	}
};


Robot.prototype.act= function(environment){
	var command= this.actuator.commands.pop();
	if(pause!=1){
		if (command === undefined)
			console.log('Undefined command');
		else if (command in this.operations)
			this.operations[command](this);
		else
			console.log('Unknown command');
	}
};


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


function Wall(size,x=0,y=0){
	THREE.ImageUtils.crossOrigin = '';
 	var textura = THREE.ImageUtils.loadTexture('http://daviduppen.github.io/WALL1.gif');
  	var material = new THREE.MeshBasicMaterial( {map: textura} );
	THREE.Mesh.call(this, new THREE.BoxGeometry(size, size, 10*size), material);
	this.size= size;
	this.position.x= x;
	this.position.y= y;
	this.position.z=4.5;
}

Wall.prototype= new THREE.Mesh();


function Personaje(t){

	if(t==1){
		var headForma = new THREE.BoxGeometry( 1, 0.45, 0.5 );
		var bodyForma = new THREE.BoxGeometry( 0.5, 0.35, 1.25 );
		var eyeForma = new THREE.CylinderGeometry( .18,.18,0.5 );
		var eyeForma2 = new THREE.CylinderGeometry( .18, .18,0.5 );
		var armForma = new THREE.BoxGeometry( .2, .8, .3 );
		var armForma2 = new THREE.ConeGeometry( .2, .8, .5  );
		var baseForma = new THREE.TorusGeometry( .35, .15, 100 );
		var baseForma2 = new THREE.TorusGeometry( .315, .115, 100 );
		var esferaForma = new THREE.SphereGeometry(.4);

		baseForma.translate(0,0,-0.25);
		baseForma2.translate(0,0,-0.4);
		esferaForma.translate(0,0,-.08);
		bodyForma.translate(0,0,-0.8);
		headForma.translate(0,0,-1.25);
		eyeForma.translate(.2225,.30,-1.25);
		eyeForma2.translate(-.2225,.30,-1.25);
		armForma.translate(.35,.25,-.8);
		armForma2.translate(-.4,.335,-.8);

		var headMalla = new THREE.Mesh(headForma);
		var bodyMalla = new THREE.Mesh(bodyForma);
		var eyeMalla = new THREE.Mesh(eyeForma);
		var eyeMalla2 = new THREE.Mesh(eyeForma2);
		var armMalla = new THREE.Mesh(armForma);
		var armMalla2 = new THREE.Mesh(armForma2);
		var baseMalla= new THREE.Mesh(baseForma);
		var baseMalla2= new THREE.Mesh(baseForma2);
		var esferaMalla = new THREE.Mesh(esferaForma);

		var meshForma = new THREE.Geometry();
		meshForma.merge(headMalla.geometry, headMalla.matrix);
		meshForma.merge(bodyMalla.geometry, bodyMalla.matrix);				
		meshForma.merge(eyeMalla.geometry, eyeMalla.matrix);
		meshForma.merge(eyeMalla2.geometry, eyeMalla2.matrix);
		meshForma.merge(armMalla.geometry, armMalla.matrix);
		meshForma.merge(armMalla2.geometry, armMalla2.matrix);
		meshForma.merge(baseMalla.geometry, baseMalla.matrix);
		meshForma.merge(baseMalla2.geometry, baseMalla2.matrix);
		meshForma.merge(esferaMalla.geometry, esferaMalla.matrix);

		var material = new THREE.MeshNormalMaterial();
		var mesh = new THREE.Mesh(meshForma, material);
		mesh.rotateY(Math.PI);
		
	}
	else if(t==2){
		var headForma = new THREE.BoxGeometry( .9, 0.6, 0.45 );
		var headForma2 = new THREE.CylinderGeometry( .3, .3, .9,3);
		var bodyForma = new THREE.CylinderGeometry( 0.225, 0.225, .6,6 );
		var eyeForma = new THREE.CylinderGeometry( .18,.18,0.3 );
		var eyeForma2 = new THREE.CylinderGeometry( .18, .18,0.3 );
		var armForma = new THREE.CylinderGeometry( .15, .15, .25,6 );
		var armForma2 = new THREE.CylinderGeometry( .15, .15, .25,6  );
		var legForma = new THREE.CylinderGeometry( .1, .1, .25 );
		var legForma2 = new THREE.CylinderGeometry( .1, .1, .25 );
		var earForma = new THREE.CylinderGeometry( .03, .15, .25 );
		var earForma2 = new THREE.CylinderGeometry( .03, .15, .25 );
		var esferaForma = new THREE.SphereGeometry(.15);
		var esferaForma2 = new THREE.SphereGeometry(.25);

		legForma.rotateX(-Math.PI/2);
		legForma2.rotateX(-Math.PI/2);
		legForma.translate(.14,0,0);
		legForma2.translate(-.14,0,0);
		bodyForma.rotateX(Math.PI/2);
		bodyForma.translate(0,0,-.35);
		headForma.translate(0,0,-0.8);
		headForma2.rotateZ(Math.PI/2);
		headForma2.rotateX(Math.PI/3);
		headForma2.translate(0,0,-1.125);
		armForma.translate(-.3,0,-0.35);
		armForma2.translate(.3,.18,-.4);
		eyeForma.translate(-.25,.25,-.825);
		eyeForma2.translate(.25,.25,-.825);
		esferaForma.translate(0,-0.2,-.2);
		earForma.rotateX(-4*Math.PI/5);
		earForma2.rotateX(-4*Math.PI/5);
		earForma.translate(-.25,-.18,-1.35);
		earForma2.translate(.25,-.18,-1.35);


		var headMalla = new THREE.Mesh(headForma);
		var headMalla2 = new THREE.Mesh(headForma2);
		var bodyMalla = new THREE.Mesh(bodyForma);
		var eyeMalla = new THREE.Mesh(eyeForma);
		var eyeMalla2 = new THREE.Mesh(eyeForma2);
		var armMalla = new THREE.Mesh(armForma);
		var armMalla2 = new THREE.Mesh(armForma2);
		var  legMalla= new THREE.Mesh(legForma);
		var  legMalla2= new THREE.Mesh(legForma2);
		var earMalla= new THREE.Mesh(earForma);
		var  earMalla2= new THREE.Mesh(earForma2);
		var esferaMalla = new THREE.Mesh(esferaForma);
		var esferaMalla2 = new THREE.Mesh(esferaForma2);

		var meshForma = new THREE.Geometry();
		meshForma.merge(headMalla.geometry, headMalla.matrix);
		meshForma.merge(headMalla2.geometry, headMalla2.matrix);
		meshForma.merge(bodyMalla.geometry, bodyMalla.matrix);
		meshForma.merge(eyeMalla.geometry, eyeMalla.matrix);
		meshForma.merge(eyeMalla2.geometry, eyeMalla2.matrix);
		meshForma.merge(armMalla.geometry, armMalla.matrix);
		meshForma.merge(armMalla2.geometry, armMalla2.matrix);
		//meshForma.merge(legMalla.geometry, legMalla.matrix);
		//meshForma.merge(legMalla2.geometry, legMalla2.matrix);
		meshForma.merge(earMalla.geometry, earMalla.matrix);
		meshForma.merge(earMalla2.geometry, earMalla2.matrix);
		meshForma.merge(esferaMalla.geometry, esferaMalla.matrix);
		meshForma.merge(esferaMalla2.geometry, esferaMalla2.matrix);

		var material = new THREE.MeshNormalMaterial();
		var mesh = new THREE.Mesh(meshForma, material);

		mesh.rotateY(Math.PI);	
	}
	else if(t==3){
		var headForma = new THREE.BoxGeometry( .45, .45, .35 );
		var bodyForma = new THREE.BoxGeometry( 0.35, 0.3, .6 );
		var eyeForma = new THREE.CylinderGeometry( .1,.1,0.4 );
		var eyeForma2 = new THREE.CylinderGeometry( .1, .1,0.4 );
		var armForma = new THREE.CylinderGeometry( .04, .03, .3 );
		var armForma2 = new THREE.CylinderGeometry( .04, .03, .3  );
		var handForma = new THREE.SphereGeometry( .08 );
		var handForma2 = new THREE.SphereGeometry( .08 );
		var cableForma = new THREE.CylinderGeometry( .02, .02, .4 );
		var cableForma2 = new THREE.CylinderGeometry( .02, .02, .4 );
		var cableForma3 = new THREE.CylinderGeometry( .02, .02, .6 );
		var esferaForma = new THREE.SphereGeometry(.05);
		var shoulderForma= new THREE.CylinderGeometry(.10,.15,.35,3);
		var shoulderForma2= new THREE.CylinderGeometry(.15,.10,.35,3);

		esferaForma.translate(0,0,0);
		cableForma3.rotateX(-Math.PI/2);
		cableForma3.translate(0,0,-0.25);
		bodyForma.translate(0,0,-0.8);
		headForma.translate(0,0,-1.2);
		armForma.rotateX(Math.PI/2);
		armForma2.rotateX(Math.PI/2);
		armForma.translate(.32,0,-.5);
		armForma2.translate(-.32,0,-.5);
		handForma.translate(.32,0,-0.3);
		handForma2.translate(-.32,0,-0.3);
		eyeForma.translate(.12,.10,-1.2);
		eyeForma2.translate(-.12,.10,-1.2);
		shoulderForma.rotateZ(Math.PI/2);
		shoulderForma2.rotateZ(Math.PI/2);
		shoulderForma.translate(-.25,0,-.95);
		shoulderForma2.translate(.25,0,-.95);
		cableForma.rotateX(Math.PI/2);
		cableForma2.rotateX(Math.PI/2);
		cableForma.translate(-.32,0,-.8);
		cableForma2.translate(.32,0,-.8);

		var headMalla = new THREE.Mesh(headForma);
		var bodyMalla = new THREE.Mesh(bodyForma);
		var eyeMalla = new THREE.Mesh(eyeForma);
		var eyeMalla2 = new THREE.Mesh(eyeForma2);
		var armMalla = new THREE.Mesh(armForma);
		var armMalla2 = new THREE.Mesh(armForma2);
		var handMalla= new THREE.Mesh(handForma);
		var handMalla2= new THREE.Mesh(handForma2);
		var cableMalla= new THREE.Mesh(cableForma);
		var cableMalla2= new THREE.Mesh(cableForma2);
		var cableMalla3= new THREE.Mesh(cableForma3);
		var shoulderMalla= new THREE.Mesh(shoulderForma);
		var shoulderMalla2= new THREE.Mesh(shoulderForma2);
		var esferaMalla = new THREE.Mesh(esferaForma);

		var meshForma = new THREE.Geometry();
		meshForma.merge(headMalla.geometry, headMalla.matrix);
		meshForma.merge(bodyMalla.geometry, bodyMalla.matrix);
		meshForma.merge(eyeMalla.geometry, eyeMalla.matrix);
		meshForma.merge(eyeMalla2.geometry, eyeMalla2.matrix);
		meshForma.merge(armMalla.geometry, armMalla.matrix);
		meshForma.merge(armMalla2.geometry, armMalla2.matrix);
		meshForma.merge(handMalla.geometry, handMalla.matrix);
		meshForma.merge(handMalla2.geometry, handMalla2.matrix);
		meshForma.merge(cableMalla.geometry, cableMalla.matrix);
		meshForma.merge(cableMalla2.geometry, cableMalla2.matrix);
		meshForma.merge(cableMalla3.geometry, cableMalla3.matrix);
		meshForma.merge(shoulderMalla.geometry, shoulderMalla.matrix);
		meshForma.merge(shoulderMalla2.geometry, shoulderMalla2.matrix);
		meshForma.merge(esferaMalla.geometry, esferaMalla.matrix);

		var material = new THREE.MeshNormalMaterial();
		var mesh = new THREE.Mesh(meshForma, material);

		mesh.rotateY(Math.PI);

	}
	if(t==4){
		var headForma = new THREE.SphereGeometry( 0.35,30);
		var esferaForma1 = new THREE.SphereGeometry( 0.07,20);
		var esferaForma2 = new THREE.SphereGeometry( 0.07,20);
		var cableForma1 = new THREE.CylinderGeometry( .07, .07, .35,20 );
		var cableForma2 = new THREE.CylinderGeometry( .07, .07, .35,20 );
		var bodyForma = new THREE.CylinderGeometry( 0.35, 0.35,.8,20);
		var armForma1 = new THREE.CylinderGeometry( .12, .12, .7 ,20);
		var armForma2 = new THREE.CylinderGeometry( .12, .12, .7 ,20);
		var eyeForma1 = new THREE.CylinderGeometry( .1,.1,0.4 );
		var eyeForma2 = new THREE.CylinderGeometry( .1, .1,0.4 );
		var esferaForma3 = new THREE.SphereGeometry( 0.12,20);
		var esferaForma4 = new THREE.SphereGeometry( 0.12,20);
		var esferaForma5 = new THREE.SphereGeometry( 0.12,20);
		var esferaForma6 = new THREE.SphereGeometry( 0.12,20);
		var esferaForma7= new THREE.SphereGeometry(.35,20);


		cableForma1.rotateX(Math.PI/2);
		cableForma2.rotateX(Math.PI/2);
		cableForma1.rotateY(Math.PI/6);
		cableForma2.rotateY(-Math.PI/6);
		cableForma1.translate(-.3,0,-1.2);
		cableForma2.translate(.3,0,-1.2);
		esferaForma7.translate(0,0,0);
		bodyForma.rotateX(Math.PI/2);
		bodyForma.translate(0,0,-.35);
		headForma.translate(0,0,-.8);
		armForma1.translate(-.44,.055,-.6);
		armForma1.rotateX(Math.PI/8)
		armForma2.translate(.44,.055,-.6);
		armForma2.rotateX(Math.PI/7);
		eyeForma1.translate(0.15,.16,-.9);
		eyeForma2.translate(-.15,.16,-.9);
		esferaForma6.translate(.44,.6,-.37);
		esferaForma5.translate(-.44,.58,-.416);
		esferaForma1.translate(-.39,0,-1.36);
		esferaForma2.translate(.39,0,-1.36);
		esferaForma3.translate(.44,-0.05,-.69);
		esferaForma4.translate(-.445,-0.05,-.67);

		var headMalla = new THREE.Mesh(headForma);
		var cableMalla1 = new THREE.Mesh(cableForma1);
		var cableMalla2 = new THREE.Mesh(cableForma2);
		var eyeMalla1 = new THREE.Mesh(eyeForma1);
		var eyeMalla2 = new THREE.Mesh(eyeForma2);
		var bodyMalla= new THREE.Mesh(bodyForma);
		var armMalla1 = new THREE.Mesh(armForma1);
		var armMalla2 = new THREE.Mesh(armForma2);
		var esferaMalla1 = new THREE.Mesh(esferaForma1);
		var esferaMalla2 = new THREE.Mesh(esferaForma2);
		var esferaMalla3= new THREE.Mesh(esferaForma3);
		var esferaMalla4 = new THREE.Mesh(esferaForma4);
		var esferaMalla5 = new THREE.Mesh(esferaForma5);
		var esferaMalla6 = new THREE.Mesh(esferaForma6);
		var esferaMalla7 = new THREE.Mesh(esferaForma7);

		var meshForma = new THREE.Geometry();
		meshForma.merge(headMalla.geometry, headMalla.matrix);
		meshForma.merge(bodyMalla.geometry, bodyMalla.matrix);
		meshForma.merge(eyeMalla1.geometry, eyeMalla1.matrix);
		meshForma.merge(eyeMalla2.geometry, eyeMalla2.matrix);
		meshForma.merge(armMalla1.geometry, armMalla1.matrix);
		meshForma.merge(armMalla2.geometry, armMalla2.matrix);
		meshForma.merge(cableMalla1.geometry, cableMalla1.matrix);
		meshForma.merge(cableMalla2.geometry, cableMalla2.matrix);
		meshForma.merge(esferaMalla1.geometry, esferaMalla1.matrix);
		meshForma.merge(esferaMalla2.geometry, esferaMalla2.matrix);
		meshForma.merge(esferaMalla3.geometry, esferaMalla3.matrix);
		meshForma.merge(esferaMalla4.geometry, esferaMalla4.matrix);
		meshForma.merge(esferaMalla5.geometry, esferaMalla5.matrix);
		meshForma.merge(esferaMalla6.geometry, esferaMalla6.matrix);
		meshForma.merge(esferaMalla7.geometry, esferaMalla7.matrix);

		var material = new THREE.MeshNormalMaterial();
		var mesh = new THREE.Mesh(meshForma, material);
		
		mesh.rotateY(Math.PI);
	}
	return mesh;
}


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


	personaje = new Personaje(1);	

	var piso = new THREE.BoxGeometry(48, 48, 0.2);
        var color1 = new THREE.Color(0xC9C9C9);
	piso.translate(0,0,-.6);
        THREE.ImageUtils.crossOrigin = '';
 	var textura = THREE.ImageUtils.loadTexture('http://daviduppen.github.io/ESPACIO1.jpg');
  	var material = new THREE.MeshBasicMaterial( {map: textura} );
	//var material = new THREE.MeshBasicMaterial(color1);
        //material.color = color1;
       	var pisoMalla = new THREE.Mesh(piso, material);
	
	
	// LIGHTS
	//var light = new THREE.AmbientLight(0xffffff,0.5);
	//scene.add(light);

	//var light = new THREE.PointLight(0xffffff,2.0, 600);
	//light.position.z= 20;
	//scene.add(light);
	
	//var light = new THREE.DirectionalLight(0xffffff);
	//scene.add(light);

	//var light = new THREE.SpotLight(0xffffff,2.0,1000,1);
	//light.position.set( -80, -80, 50 );
	//light.castShadow= true;
	//scene.add(light);

	environment= new Environment();
	environment.setMap(mapa);
	environment.add(personaje);
	environment.add(pisoMalla);
	//environment.add(light);

	raycaster[0]= new THREE.Raycaster( personaje.position, new THREE.Vector3(1,0,0));
	raycaster[1]= new THREE.Raycaster( personaje.position, new THREE.Vector3(-1,0,0));
	raycaster[2]= new THREE.Raycaster( personaje.position, new THREE.Vector3(0,1,0));
	raycaster[3]= new THREE.Raycaster( personaje.position, new THREE.Vector3(0,-1,0));
	raycaster[4]= new THREE.Raycaster( personaje.position, new THREE.Vector3(1,1,0));
	raycaster[5]= new THREE.Raycaster( personaje.position, new THREE.Vector3(-1,1,0));
	raycaster[6]= new THREE.Raycaster( personaje.position, new THREE.Vector3(1,-1,0));
	raycaster[7]= new THREE.Raycaster( personaje.position, new THREE.Vector3(-1,-1,0));

	camera= new THREE.PerspectiveCamera();
	camera.position.z=1.5;
	camera.position.y=-2;
	camera.rotateX(Math.PI/2);
	camera.rotateX(-Math.PI/8);

	renderer = new THREE.WebGLRenderer();
	renderer.setSize( window.innerWidth, window.innerHeight);
	document.body.appendChild(renderer.domElement);


	environment.add(camera);

	//renderer.shadowMapEnabled= true;
	//personaje.castShadow= true;
	//pisoMalla.receiveShadow= true;
	

	var tipoEvento = 'resize';
	var capturar = false;

	window.addEventListener( tipoEvento, listener, capturar);
	window.addEventListener( 'keydown',push, false);
}


function loop(){
	
	var id;
	id = requestAnimationFrame(loop);

	var intersects = new Array();
	
	for(i=0;i<8;i++){
		intersects[i] = raycaster[i].intersectObjects( environment.children,true);
		if (intersects[i].length > 0 &&  intersects[i][0].distance <= .5){
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
var derecha=0, izquierda=0, rotation=0,pause=0, delta=0,k=-2, def=0;

setup();
loop();
