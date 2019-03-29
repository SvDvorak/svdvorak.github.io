
if(document.addEventListener)
    document.addEventListener("DOMContentLoaded", init,false);
else
    document.attachEvent("onreadystatechange", init);

function byClass(className, obj) {

    if (obj.getElementsByClassName) {
        return obj.getElementsByClassName(className);
    } else {
        var retnode = [];
        var elem = obj.getElementsByTagName('*');
        for (var i = 0; i < elem.length; i++) {
            if ((' ' + elem[i].className + ' ').indexOf(' ' + className + ' ') > -1) retnode.push(elem[i]);
        }
        return retnode;
    }
}

function init() {

	/*elem_coll = byClass("modelviewer", document);
        for (var i = 0; i < elem_coll.length; i++) {
        	setupModelViewer(elem_coll[i]);
        }*/
}

function LoadModelViewer(container)
{
	if(container.children.length == 1 && container.children[0].tagName.toUpperCase() != "CANVAS") {
		setupModelViewer(container);
	}
}

function setupModelViewer(container) {
	var getWidth = function() {
		return container.offsetWidth;
	}
	var getHeight = function() {
		return 400;
	}

	console.log("Called");

	var width = getWidth();
	var height = getHeight();

	var camera = new THREE.PerspectiveCamera( 45, width / height, 0.1, 200 );
	camera.position.z = 5;

	var render = function() {

		renderer.render( scene, camera );

	}

	var controls = new THREE.OrbitControls( camera, container );
	controls.addEventListener( 'change', render );

	// scene

	var scene = new THREE.Scene();

	var ambient = new THREE.AmbientLight( 0x222222 );
	scene.add( ambient );

	// back left
	var backLight1 = new THREE.DirectionalLight( 0xFFE5E5 );
	backLight1.position.set( -6, 6, -6 );
	backLight1.intensity = 0.5;
	scene.add( backLight1 );

	// back right
	var backLight2 = backLight1.clone();
	backLight2.position.set( 6, 6, -6 );
	scene.add( backLight2 );

	// front left
	var frontLight1 = new THREE.DirectionalLight( 0xE0E0FF );
	frontLight1.position.set( 3, 6, 4 );
	frontLight1.intensity = 0.8;
	scene.add( frontLight1 );

	// right
	var rightLight = new THREE.DirectionalLight( 0xFFFFFF );
	rightLight.position.set( -4, 2, 0 );
	rightLight.intensity = 0.2;
	scene.add( rightLight );

	// texture

	var manager = new THREE.LoadingManager();
	manager.onProgress = function ( item, loaded, total ) {

		console.log( item, loaded, total );

	};

	var texture = new THREE.Texture();

	var onProgress = function ( xhr ) {
		if ( xhr.lengthComputable ) {
			var percentComplete = xhr.loaded / xhr.total * 100;
			console.log( Math.round(percentComplete, 2) + '% downloaded' );
		}
	};

	var onError = function ( xhr ) {
	};


	var loader = new THREE.ImageLoader( manager );
	loader.load( container.getAttribute("texture"), function ( image ) {

		texture.image = image;
		texture.needsUpdate = true;

		render();
	} );

	// model

	var loader = new THREE.OBJLoader( manager );
	loader.load( container.getAttribute("model"), function ( object ) {

		object.traverse( function ( child ) {

			if ( child instanceof THREE.Mesh ) {

				child.material.map = texture;

			}

		} );

		// Set focus point
		var bbox = new THREE.Box3().setFromObject(object);
		var normbbox = bbox.max.sub(bbox.min);
		var midPoint = normbbox.multiplyScalar(0.5);
		var cameraPos = camera.position;
		camera.position = cameraPos.add(new THREE.Vector3(0, midPoint.y, normbbox.z*1.5));
		controls.target.set(0, midPoint.y, 0);
		controls.constraint.rotateUp(15 * Math.PI / 180);
		controls.constraint.rotateLeft(40 * Math.PI / 180);

		object.position.y = - 0;
		scene.add( object );

		render();
	}, onProgress, onError );

	var renderer = new THREE.WebGLRenderer();
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setClearColor( 0x222222, 1 );
	renderer.setSize( width, height );

	while (container.hasChildNodes()) {
	    container.removeChild(container.lastChild);
	}

	container.appendChild( renderer.domElement );

	var instructionsNode = document.createElement("p");
	instructionsNode.appendChild(document.createTextNode("Mouse or touch to interact"));
	instructionsNode.className = "viewer_instructions";
	container.appendChild(instructionsNode);

	var onWindowResize = function() {
		var width = getWidth();
		var height = getHeight();
		camera.aspect = width / height;
		camera.updateProjectionMatrix();

		renderer.setSize( width, height );

		render();
	}

	container.addEventListener( 'resize', onWindowResize, false );

	var animate = function animate() {

		requestAnimationFrame( animate );
		controls.update();

	}

	animate();
	render();
}