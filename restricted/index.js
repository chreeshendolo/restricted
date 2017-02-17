console.log( "index.js is up!" );

var c = document.createElement( "canvas" ),
	ctx = c.getContext( "2d" );

c.width = 640;
c.height = 480;

document.body.appendChild( c );


var tileMap = [
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
]

var getTileValue = function( obj ) {
	if ( obj.row < tileMap.length && obj.col < tileMap[ 0 ].length && obj.row >= 0 && obj.col >= 0 ) {
		return tileMap[ obj.row ][ obj.col ];
	}
	else {
		return false;
	}
}

var seen = [];

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

var entity = {
	active: [],
	deadPool: []
}

entity.spawn = function( obj ) {
	obj.x = obj.col * 32;
	obj.y = obj.row * 32;
	
	var entData = entities[ obj.type ];
	
	if ( entData.player ) obj.seen = [];
	
	entity.active.push( obj );
}


entity.tileCheck = function( obj ) {
	var ent = obj.ent,
		tile = obj.tile,
		tileValue = tileMap[ tile.row ][ tile.col ];
	tileResponse[ tileValue ]( obj );
}

var tileResponse = {
	0: function( obj ) {
		obj.ent.col = obj.tile.col;
		obj.ent.col = obj.tile.col;
		obj.ent.row = obj.tile.row;
		obj.ent.row = obj.tile.row;
		obj.ent.x = obj.ent.col * 32;
		obj.ent.y = obj.ent.row * 32;
		if ( obj.ent.seen ) {
			obj.ent.seen.push( { col: obj.ent.col, row: obj.ent.row } );
		}
	},
	1: function( obj ) {
		
	},
	2: function( obj ) {
		if ( obj.ent.key ) tileMap[ obj.tile.row ][ obj.tile.col ] = 0;
	}
}




entity.entCheck = function( obj ) {
	for( var i = entity.active.length - 1; i >= 0; --i ) {
		var target = entity.active[ i ],
			targetData = entities[ target.type ];
		if ( target.col == obj.target.col && target.row == obj.target.row ) {
			obj.target = target;
			entResponse[ target.type ]( obj );
			return targetData.walkable;
		}
	}
	return true;
}

var entResponse = {
	0: function( obj ) {

	},
	1: function( obj ) {
		obj.ent.key = true;
		obj.target.cleanup = true;
	},
	2: function( obj ) {

	}
}

var tiles = [
	{ w: 32, h: 32, color: "rgb( 60, 60, 60 )" },
	{ w: 32, h: 32, color: "grey" },
	{ w: 32, h: 32, color: "brown" },
]

var entities = [
	{ w: 16, h: 16, color: "green", input: true, player: true },
	{ w: 16, h: 16, color: "yellow", input: false, walkable: true },
]

entity.spawn( { type: 0, col: 10, row: 10 } );
entity.spawn( { type: 1, col: 4, row: 1 } );

var game = {};
game.time = {
	now: 0,
	last: 0,
	dt: 0
}

game.loop = function( t ) {
	var time = game.time;
	
	time.now = t;
	time.dt = time.now - time.last;

	//ctx.fillStyle = "black";
	//ctx.fillRect( 0, 0, 640, 480 );
	

	for( var i = entity.active.length - 1; i >= 0; --i ) {
		var ent = entity.active[ i ],
			entData = entities[ ent.type ];
		if ( entData.input ) {
			if ( input.keyState[ 65 ] == "down" ) {
				var walkable = entity.entCheck( { ent: ent, target: { col: ent.col - 1, row: ent.row } } );
				if ( walkable ) entity.tileCheck( { ent: ent, tile: { col: ent.col - 1, row: ent.row } } );
			}
			if ( input.keyState[ 68 ] == "down" ) {
				var walkable = entity.entCheck( { ent: ent, target: { col: ent.col + 1, row: ent.row } } );
				if ( walkable ) entity.tileCheck( { ent: ent, tile: { col: ent.col + 1, row: ent.row } } );
			}
			if ( input.keyState[ 87 ] == "down" ) {
				var walkable = entity.entCheck( { ent: ent, target: { col: ent.col, row: ent.row - 1 } } );
				if ( walkable ) entity.tileCheck( { ent: ent, tile: { col: ent.col, row: ent.row - 1 } } );
			}
			if ( input.keyState[ 83 ] == "down" ) {
				var walkable = entity.entCheck( { ent: ent, target: { col: ent.col, row: ent.row + 1 } } );
				if ( walkable ) entity.tileCheck( { ent: ent, tile: { col: ent.col, row: ent.row + 1 } } );
			}
		}
	}
	input.clear();
	
	for ( var i = tileMap.length - 1; i >= 0; --i ) {
		for ( var j = tileMap[ i ].length - 1; j >= 0; --j ) {
			var tile = tiles[ tileMap[ i ][ j ] ];
			ctx.fillStyle = tile.color;
			ctx.fillRect( j * tile.w, i * tile.h, tile.w, tile.h );
		}
	}
	
	for( var i = entity.active.length - 1; i >= 0; --i ) {
		var ent = entity.active[ i ],
			entData = entities[ ent.type ];
		ctx.fillStyle = entData.color;
		ctx.fillRect( ent.x + entData.w * .5, ent.y + entData.h * .5, entData.w, entData.h );
	}
	
	var player = null;
	for( var i = entity.active.length - 1; i >= 0; --i ) {
		var ent = entity.active[ i ],
			entData = entities[ ent.type ];
		if ( entData.player ) player = ent;
	}
	
	var vision = 3,
		col = player.col,
		row = player.row,
		newSeen = [];
	newSeen.push( { col: col, row: row } );
	
	
	
	
	var los = {
		l: true,
		r: true,
		u: true,
		d: true,
		dr: true
	}
	var fill = vision;
	for ( var i = 0; i < vision; ++i ) {
		var l = { col: col - i, row: row };
		l.value = getTileValue( l );
		
		//if ( los.l ) newSeen.push( l );
		if ( l.value != 0 ) los.l = false;
		
		var r = { col: col + i, row: row };
		r.value = getTileValue( r );
		
		//if ( los.r ) newSeen.push( r );
		if ( r.value != 0 ) los.r = false;
		
		var u = { col: col, row: row - i };
		u.value = getTileValue( u );
		
		//if ( los.u ) newSeen.push( u );
		if ( u.value != 0 ) los.u = false;
		
		var d = { col: col, row: row + i };
		d.value = getTileValue( d );
		
		//if ( los.d ) newSeen.push( d );
		if ( d.value != 0 ) los.d = false;
		
		for( var j = 0; j < fill; ++j ) {
			var dr = { col: col + i , row: row + j };
			dr.value = getTileValue( dr );
			
			if ( los.dr ) newSeen.push( dr );
			if ( dr.value != 0 ) los.dr = false;

		}
		
		--fill;
	}
	
	for ( var i = seen.length - 1; i >= 0; --i ) {
		var oldSeen = seen[ i ];
		for ( var j = newSeen.length - 1; j >= 0; --j ) {
			var ns = newSeen[ j ];
			if ( ns.col == oldSeen.col && ns.row == oldSeen.row ) {
				newSeen.splice( j, 1 );
			}
		}
	}

	for ( var i = newSeen.length - 1; i >= 0; --i ) {
		var ns = newSeen[ i ];
		seen.push( ns );
	}
		
	for ( var i = tileMap.length - 1; i >= 0; --i ) {
		for ( var j = tileMap[ i ].length - 1; j >= 0; --j ) {
			var tile = tiles[ tileMap[ i ][ j ] ],
				alpha = 1;
			for ( var k = seen.length - 1; k >= 0; --k ) {
				var sn = seen[ k ];
				if ( sn.col == j && sn.row == i ) alpha = 0;
			}
			
			ctx.fillStyle = "rgba( 0, 0, 0, " + alpha + " )";
			ctx.fillRect( j * tile.w, i * tile.h, tile.w, tile.h );
		}
	}
			

	
	for( var i = entity.active.length - 1; i >= 0; --i ) {
		var ent = entity.active[ i ];
		if( ent.cleanup ) {
			entity.deadPool.push( entity.active.splice( i, 1 ) );
		}
	}
	
	time.last = time.now;
	requestAnimationFrame( game.loop );
}

game.loop( 1 );