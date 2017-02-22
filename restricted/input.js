console.log( "input.js is up!" );

var input = {
	keyState: {}
}

input.listen = function() {
	document.addEventListener( "keydown", function( e ) {
		if ( this.keyState[ e.keyCode ] != "old" ) this.keyState[ e.keyCode ] = "down";
	}.bind( this ) );
	document.addEventListener( "keyup", function( e ) {
		this.keyState[ e.keyCode ] = "up";
	}.bind( this ) );
}

input.clear = function() {
	for ( var key in this.keyState ) {
		var keyState = this.keyState[ key ];
		if ( keyState == "down" ) this.keyState[ key ] = "old";
		if ( keyState == "up" ) this.keyState[ key ] = false;
	}
}

input.listen();