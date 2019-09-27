import { WEBGL } from 'three/examples/jsm/WebGL.js';

if ( WEBGL.isWebGL2Available() === false ) {

	document.body.appendChild( WEBGL.getWebGL2ErrorMessage() );

}

var canvas = document.createElement( 'canvas' );
var context = canvas.getContext( 'webgl2', { alpha: false } );
var renderer = new THREE.WebGLRenderer( { canvas: canvas, context: context } );