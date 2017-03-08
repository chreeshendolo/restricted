console.log( "level.js is up!" );

var level = {
	scene: {}
}

level.add = function( obj ) {
	this.scene[ obj.map ] = {
		fresh: obj.fresh,
		stale: [],
		seen: []
	}
}

level.spawn = function( obj ) {

	var lvl = this.scene[ obj.map ];
	if ( !lvl.stale.length ) {
		lvl.fresh();
	}
	else {
		for ( var i = lvl.stale.length - 1; i >= 0; --i ) {
			lvl.stale[ i ]
			entity.active.push( lvl.stale[ i ] );
			
			lvl.stale.splice( i, 1 );
		}
	}
	tile.current = obj.map;
}

level.persist = function( obj ) {
	var lvl = this.scene[ obj.map ];

	entity.crawl( { 
		callback: function( obj ) {
			if ( obj.control != "input" ) {
				lvl.stale.push( helper.copyObj( obj ) );
				obj.cleanup = true;
			}
		}	
	} );
}