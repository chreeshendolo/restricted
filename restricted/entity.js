console.log( "entity.js is up!" );


var entity = {
	active: [],
	dead: [],
	data: {},
	response: {}
};

entity.crawl = function( obj ) {
	for ( var i = this.active.length - 1; i >= 0; --i ) {
		var ent = this.active[ i ];
		obj.callback( ent );
	}
}

entity.cleanup = function() {
	for ( var i = this.active.length - 1; i >= 0; --i ) {
		if ( this.active[ i ].cleanup ) {
			this.active.splice( i, 1 );
			// var dead = this.active.splice( i, 1 );
			// for( var key in dead ) {
				// dead[ key ] = null;
				// this.dead.push( dead );
			// }
		}
	}
}

entity.addEnt = function( obj ) {
		this.active.push( obj );
}

entity.getEnt = function( obj ) {
	for ( var i = this.active.length - 1; i >= 0; --i ) {
		var ent = this.active[ i ],
			match = true;
		for ( var key in obj ) {
			if ( ent[ key ] != obj[ key ] ) { 
				match = false;
			}
		}
		if ( match ) return ent;
	}
	return false;
}

entity.addData = function( obj ) {
	if ( !this.data[ obj.name ] ) this.data[ obj.name ] = {};
	for ( var key in obj ) {
		if ( key != "name" ) this.data[ obj.name ][ key ] = obj[ key ];
	}
}

entity.getData = function( name ) {
	return this.data[ name ];
}

entity.addResponse = function( obj ) {
	this.response[ obj.name ] = obj.response;
}

entity.getResponse = function( name ) {
	return this.response[ name ];
}
