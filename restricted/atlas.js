console.log( "atlas.js is up!" );

var atlas = {
	sprite: {}
}

atlas.add = function( obj ) {
	if ( !this.sprite[ obj.name ] ) this.sprite[ obj.name ] = {};
	for ( var key in obj ) {
		if ( key != "name" ) this.sprite[ obj.name ][ key ] = obj[ key ];
	}
}

atlas.get = function( name ) {
	return this.sprite[ name ];
}