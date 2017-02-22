console.log( "tile.js is up!" );

var tile = {
	current: null,
	map: {},
	data: {}
};

tile.crawl = function( obj ) {
	var map = this.map[ this.current ],
		callback = obj.callback;
	for ( var i = map.length - 1; i >= 0; --i ) {
		for ( var j = map[ i ].length - 1; j >= 0; --j ) {
			var tileObj = {
				col: j,
				row: i,
				value: map[ i ][ j ]
			}
			callback( tileObj );
		}
	}
}

tile.getValue = function( obj ) {
	return this.map[ this.current ][ obj.row ][ obj.col ];
}

tile.assignValue = function( obj ) {
	this.map[ this.current ][ obj.row ][ obj.col ] = obj.value;
}

tile.addMap = function( obj ) {
	this.map[ obj.name ] = obj.map;
}

tile.getMap = function( name ) {
	return this.map[ name ];
}

tile.addData = function( obj ) {
	if ( !this.data[ obj.name ] ) this.data[ obj.name ] = {};
	for ( var key in obj ) {
		if ( key != "name" ) this.data[ obj.name ][ key ] = obj[ key ];
	}
}

tile.getData = function( name ) {
	return this.data[ name ];
}