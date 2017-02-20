console.log( "index.js is up!" );

var c = document.createElement( "canvas" ),
	ctx = c.getContext( "2d" );

c.width = 640;
c.height = 480;

document.body.appendChild( c );


var levels = {
	0: function() {
		tileMap = [
			[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
			[1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1],
			[1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1],
			[1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1],
			[1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1],
			[1,1,1,1,2,1,1,1,1,1,2,1,1,1,1,1,2,1,1,1],
			[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
			[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
			[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
			[1,1,1,1,2,1,1,1,1,1,2,1,1,1,1,1,2,1,1,1],
			[1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1],
			[1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1],
			[1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1],
			[1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1],
			[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
		];
		entity.clear();
		entity.spawn( { type: 0, col: 2, row: 1 } );
		entity.spawn( { type: 1, col: 4, row: 1 } );
	},
	1: function() {
		tileMap = [
			[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
			[1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1],
			[1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1],
			[1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1],
			[1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1],
			[1,1,1,1,2,1,1,1,1,1,2,1,1,1,1,1,2,1,1,1],
			[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
			[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
			[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
			[1,1,1,1,2,1,1,1,1,1,2,1,1,1,1,1,2,1,1,1],
			[1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1],
			[1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1],
			[1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1],
			[1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1],
			[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
		];
		entity.clear();
		entity.spawn( { type: 0, col: 1, row: 1 } );
		entity.spawn( { type: 1, col: 4, row: 1 } );
	},

};

var tileMap = [
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1],
	[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1],
	[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1],
	[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1],
	[1,1,1,2,1,1,1,1,1,2,1,1,1,1,1,2,1,1,1,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
	[1,1,1,2,1,1,1,1,1,2,1,1,1,1,1,2,1,1,1,1],
	[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1],
	[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1],
	[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1],
	[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1],
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

entity.clear = function() {
	for( var i = this.active.length - 1; i >= 0; --i ) {
		var ent = this.active[ i ];
		ent.cleanup = true;
	}
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
		if ( obj.ent.key ) { 
			tileMap[ obj.tile.row ][ obj.tile.col ] = 0;
			obj.ent.key = false;
		}
	},
	3: function( obj ) {
		levels[ 1 ]();
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
	{ w: 32, h: 32, color: "red" },
]

var entities = [
	{ w: 16, h: 16, color: "green", input: true, player: true },
	{ w: 16, h: 16, color: "yellow", input: false, walkable: true },
]

levels[ 0 ]();

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