console.log( "index.js is up!" );

var c = document.createElement( "canvas" ),
	ctx = c.getContext( "2d" );

c.width = 640;
c.height = 480;

document.body.appendChild( c );

var helper = {};

helper.copyObj = function( obj ) {
	var cpObj = {};
	for ( var key in obj ) {
		cpObj[ key ] = obj[ key ];
	}
	
	return cpObj;
}



asset.add( { name: "tiles", type: "sprite" } );
asset.add( { name: "entities", type: "sprite" } );
asset.add( { name: "step", type: "sound" } );
asset.add( { name: "coin", type: "sound" } );
asset.add( { name: "door", type: "sound" } );
asset.add( { name: "open", type: "sound" } );
asset.add( { name: "tribal", type: "sound" } );

asset.load( function(){} );


asset.cache.sound[ "step" ].volume = .3;
asset.cache.sound[ "coin" ].volume = .3;
asset.cache.sound[ "door" ].volume = .3;
asset.cache.sound[ "open" ].volume = .5;
asset.cache.sound[ "tribal" ].volume = 1;
asset.cache.sound[ "tribal" ].loop = true;
//asset.getSound( "tribal" ).play();
//asset.cache.sound[ "tribal" ].play();


atlas.add( { name: "floor", sprite: "tiles", x: 0, y: 0, w: 32, h: 32 } );
atlas.add( { name: "exit", sprite: "tiles", x: 32, y: 0, w: 32, h: 32 } );
atlas.add( { name: "door", sprite: "tiles", x: 64, y: 0, w: 32, h: 32 } );
atlas.add( { name: "wall", sprite: "tiles", x: 96, y: 0, w: 32, h: 32 } );
atlas.add( { name: "hero", sprite: "entities", x: 0, y: 0, w: 16, h: 16 } );
atlas.add( { name: "key", sprite: "entities", x: 16, y: 0, w: 16, h: 16 } );
atlas.add( { name: "villan", sprite: "entities", x: 32, y: 0, w: 16, h: 16 } );


tile.addMap( { name: '0', map:
	[
		['1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1'],
		['1','1','0','0','0','0','0','1','0','0','0','0','0','1','0','0','0','0','0','1'],
		['1','1','0','0','0','0','0','1','0','0','0','0','0','1','0','0','0','0','0','1'],
		['1','1','0','0','0','0','0','1','0','0','0','0','0','1','0','0','0','0','0','1'],
		['1','1','0','0','0','0','0','1','0','0','0','0','0','1','0','0','0','0','0','1'],
		['1','1','1','1','2','1','1','1','1','1','2','1','1','1','1','1','2','1','1','1'],
		['1','1','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','1'],
		['1','1','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
		['1','1','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','1'],
		['1','1','1','1','2','1','1','1','1','1','2','1','1','1','1','1','2','1','1','1'],
		['1','1','0','0','0','0','0','1','0','0','0','0','0','1','0','0','0','0','0','1'],
		['1','1','0','0','0','0','0','1','0','0','0','0','0','1','0','0','0','0','0','1'],
		['1','1','0','0','0','0','0','1','0','0','0','0','0','1','0','0','0','0','0','1'],
		['1','1','0','0','0','0','0','1','0','0','0','0','0','1','0','0','0','0','0','1'],
		['1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1']
	]
} );

tile.addMap( { name: '1', map:
	[
		['1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1'],
		['1','1','0','0','0','0','0','1','0','0','0','0','0','1','0','0','0','0','0','1'],
		['1','1','0','0','0','0','0','1','0','0','0','0','0','1','0','0','0','0','0','1'],
		['1','1','0','0','0','0','0','1','0','0','0','0','0','1','0','0','0','0','0','1'],
		['1','1','0','0','0','0','0','1','0','0','0','0','0','1','0','0','0','0','0','1'],
		['1','1','1','1','2','1','1','1','1','1','2','1','1','1','1','1','2','1','1','1'],
		['1','1','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','1'],
		['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
		['1','1','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','1'],
		['1','1','1','1','2','1','1','1','1','1','2','1','1','1','1','1','2','1','1','1'],
		['1','1','0','0','0','0','0','1','0','0','0','0','0','1','0','0','0','0','0','1'],
		['1','1','0','0','0','0','0','1','0','0','0','0','0','1','0','0','0','0','0','1'],
		['1','1','0','0','0','0','0','1','0','0','0','0','0','1','0','0','0','0','0','1'],
		['1','1','0','0','0','0','0','1','0','0','0','0','0','1','0','0','0','0','0','1'],
		['1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1']
	]
} );

tile.addMap( { name: '2', map:
	[
		['1','1','1','1','1','1','1','1','1','1','0','1','1','1','1','1','1','1','1','1'],
		['1','1','0','0','0','0','0','1','0','0','0','0','0','1','0','0','0','0','0','1'],
		['1','1','0','0','0','0','0','1','0','0','0','0','0','1','0','0','0','0','0','1'],
		['1','1','0','0','0','0','0','1','0','0','0','0','0','1','0','0','0','0','0','1'],
		['1','1','0','0','0','0','0','1','0','0','0','0','0','1','0','0','0','0','0','1'],
		['1','1','1','1','2','1','1','1','0','0','0','0','0','1','1','1','2','1','1','1'],
		['1','1','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','1'],
		['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
		['1','1','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','1'],
		['1','1','1','1','2','1','1','1','0','0','0','0','0','1','1','1','2','1','1','1'],
		['1','1','0','0','0','0','0','1','0','0','0','0','0','1','0','0','0','0','0','1'],
		['1','1','0','0','0','0','0','1','0','0','0','0','0','1','0','0','0','0','0','1'],
		['1','1','0','0','0','0','0','1','0','0','0','0','0','1','0','0','0','0','0','1'],
		['1','1','0','0','0','0','0','1','0','0','0','0','0','1','0','0','0','0','0','1'],
		['1','1','1','1','1','1','1','1','1','1','0','1','1','1','1','1','1','1','1','1']
	]
} );

tile.addMap( { name: '2a', map:
	[
		['1','1','1','1','1','1','1','1','1','1','0','1','1','1','1','1','1','1','1','1'],
		['1','1','0','0','0','0','0','1','0','0','0','0','0','1','0','0','0','0','0','1'],
		['1','1','0','0','0','0','0','1','0','0','0','0','0','1','0','0','0','0','0','1'],
		['1','1','0','0','0','0','0','1','0','0','0','0','0','1','0','0','0','0','0','1'],
		['1','1','0','0','0','0','0','1','0','0','0','0','0','1','0','0','0','0','0','1'],
		['1','1','1','1','2','1','1','1','0','0','0','0','0','1','1','1','2','1','1','1'],
		['1','1','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','1'],
		['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
		['1','1','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','1'],
		['1','1','1','1','2','1','1','1','0','0','0','0','0','1','1','1','2','1','1','1'],
		['1','1','0','0','0','0','0','1','0','0','0','0','0','1','0','0','0','0','0','1'],
		['1','1','0','0','0','0','0','1','0','0','0','0','0','1','0','0','0','0','0','1'],
		['1','1','0','0','0','0','0','1','0','0','0','0','0','1','0','0','0','0','0','1'],
		['1','1','0','0','0','0','0','1','0','0','0','0','0','1','0','0','0','0','0','1'],
		['1','1','1','1','1','1','1','1','1','1','0','1','1','1','1','1','1','1','1','1']
	]
} );

tile.addMap( { name: '3', map:
	[
		['1','1','1','1','1','1','1','1','1','1','0','1','1','1','1','1','1','1','1','1'],
		['1','1','0','0','0','0','0','1','0','0','0','0','0','1','0','0','0','0','0','1'],
		['1','1','0','0','0','0','0','1','0','0','0','0','0','1','0','0','0','0','0','1'],
		['1','1','0','0','0','0','0','1','0','0','0','0','0','1','0','0','0','0','0','1'],
		['1','1','0','0','0','0','0','1','0','0','0','0','0','1','0','0','0','0','0','1'],
		['1','1','1','1','2','1','1','1','0','0','0','0','0','1','1','1','2','1','1','1'],
		['1','1','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','1'],
		['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
		['1','1','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','1'],
		['1','1','1','1','2','1','1','1','0','0','0','0','0','1','1','1','2','1','1','1'],
		['1','1','0','0','0','0','0','1','0','0','0','0','0','1','0','0','0','0','0','1'],
		['1','1','0','0','0','0','0','1','0','0','0','0','0','1','0','0','0','0','0','1'],
		['1','1','0','0','0','0','0','1','0','0','0','0','0','1','0','0','0','0','0','1'],
		['1','1','0','0','0','0','0','1','0','0','0','0','0','1','0','0','0','0','0','1'],
		['1','1','1','1','1','1','1','1','1','1','0','1','1','1','1','1','1','1','1','1']
	]
} );

tile.addMap( { name: '2z', map:
	[
		['1','1','1','1','1','1','1','1','1','1','0','1','1','1','1','1','1','1','1','1'],
		['1','1','0','0','0','0','0','1','0','0','0','0','0','1','0','0','0','0','0','1'],
		['1','1','0','0','0','0','0','1','0','0','0','0','0','1','0','0','0','0','0','1'],
		['1','1','0','0','0','0','0','1','0','0','0','0','0','1','0','0','0','0','0','1'],
		['1','1','0','0','0','0','0','1','0','0','0','0','0','1','0','0','0','0','0','1'],
		['1','1','1','1','2','1','1','1','0','0','0','0','0','1','1','1','2','1','1','1'],
		['1','1','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','1'],
		['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
		['1','1','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','1'],
		['1','1','1','1','2','1','1','1','0','0','0','0','0','1','1','1','2','1','1','1'],
		['1','1','0','0','0','0','0','1','0','0','0','0','0','1','0','0','0','0','0','1'],
		['1','1','0','0','0','0','0','1','0','0','0','0','0','1','0','0','0','0','0','1'],
		['1','1','0','0','0','0','0','1','0','0','0','0','0','1','0','0','0','0','0','1'],
		['1','1','0','0','0','0','0','1','0','0','0','0','0','1','0','0','0','0','0','1'],
		['1','1','1','1','1','1','1','1','1','1','0','1','1','1','1','1','1','1','1','1']
	]
} );


tile.addData( { name: '0', atlas: "floor" } );
tile.addData( { name: '1', atlas: "wall" } );
tile.addData( { name: '2', atlas: "door" } );

entity.addResponse( { 
	name: "0",
	response: function( obj ) {
		var ent = obj.ent,
			target = obj.target;
		ent.col = target.col;
		ent.row = target.row;
		asset.getSound( "step" ).currentTime = 0;
		asset.getSound( "step" ).play();
	}
} );

entity.addResponse( { 
	name: "1",
	response: function( obj ) {
		var ent = obj.ent,
			target = obj.target;
		asset.getSound( "door" ).currentTime = 0;
		asset.getSound( "door" ).play();
	}
} );

entity.addResponse( { 
	name: "2",
	response: function( obj ) {
		var ent = obj.ent,
			target = obj.target;

		if ( ent.key ) {
			target.value = '0';
			tile.assignValue( target );
			asset.getSound( "open" ).currentTime = 0;
			asset.getSound( "open" ).play();
		}
		else {
			asset.getSound( "door" ).currentTime = 0;
			asset.getSound( "door" ).play();
		}
	}
} );

entity.addResponse( { 
	name: "pickup",
	response: function( obj ) {
		var ent = obj.ent,
			target = obj.target;
		ent[ target.flag ] = true;
		target.cleanup = true;
		asset.getSound( "coin" ).currentTime = 0;
		asset.getSound( "coin" ).play();
	}
} );

entity.addResponse( { 
	name: "exit",
	response: function( obj ) {
		var ent = obj.ent,
			target = obj.target;
		asset.getSound( "coin" ).currentTime = 0;
		asset.getSound( "coin" ).play();
		if ( level.scene[ target.map ] ) {
			level.persist( { map: tile.current } );
			level.spawn( { map: target.map } );
			ent = entity.getEnt( { control: "input" } );
			ent.col = target.sc;
			ent.row = target.sr;
		}
		else {
			console.log( tile.current );
			console.log( target.map );
		}
	}
} );

entity.addResponse( { 
	name: "fight",
	response: function( obj ) {
		var ent = obj.ent,
			target = obj.target;
		target.cleanup = true;
		asset.getSound( "door" ).currentTime = 0;
		asset.getSound( "door" ).play();
		entity.addEnt( { atlas: "key", col: target.col, row: target.row, response: "pickup", flag: "key" } );
	}
} );




level.add({
	map: '0',
	fresh: function() {
		entity.addEnt( { atlas: "hero", col: 2, row: 1, control: "input" } );
		entity.addEnt( { atlas: "key", col: 6, row: 1, response: "pickup", flag: "key" } );
		entity.addEnt( { atlas: "exit", col: 19, row: 7, response: "exit", map: '1', sc: 1, sr: 7 } );
	}
})

level.add({
	map: '1',
	fresh: function() {
		entity.addEnt( { atlas: "hero", col: 1, row: 7, control: "input" } );
		entity.addEnt( { atlas: "exit", col: 0, row: 7, response: "exit", map: '0', sc: 18, sr: 7, flip: true } );
		entity.addEnt( { atlas: "villan", col: 8, row: 7, response: "fight" } );
		entity.addEnt( { atlas: "exit", col: 19, row: 7, response: "exit", map: '2', sc: 1, sr: 7 } );
	}
})

level.add( {
	map: '2',
	fresh: function() {
		entity.addEnt( { atlas: "hero", col: 1, row: 7, control: "input" } );
		entity.addEnt( { atlas: "exit", col: 0, row: 7, response: "exit", map: '1', sc: 18, sr: 7, flip: true } );
		entity.addEnt( { atlas: "villan", col: 8, row: 7, response: "fight" } );
		entity.addEnt( { atlas: "exit", col: 19, row: 7, response: "exit", map: '3', sc: 1, sr: 7 } );
		entity.addEnt( { atlas: "exit", col: 10, row: 0, response: "exit", map: '2a', rotate: 270, sc: 10, sr: 13 } );
		entity.addEnt( { atlas: "exit", col: 10, row: 14, response: "exit", map: '2z', rotate: 90, sc: 10, sr: 1 } );
	}
} )

level.add( {
	map: '2a',
	fresh: function() {
		entity.addEnt( { atlas: "hero", col: 1, row: 7, control: "input" } );
		entity.addEnt( { atlas: "exit", col: 0, row: 7, response: "exit", map: '1a', sc: 18, sr: 7, flip: true } );
		entity.addEnt( { atlas: "villan", col: 8, row: 7, response: "fight" } );
		entity.addEnt( { atlas: "exit", col: 19, row: 7, response: "exit", map: '3a', sc: 1, sr: 7 } );
		entity.addEnt( { atlas: "exit", col: 10, row: 0, response: "exit", map: '2b', rotate: 270, sc: 10, sr: 13 } );
		entity.addEnt( { atlas: "exit", col: 10, row: 14, response: "exit", map: '2', rotate: 90, sc: 10, sr: 1 } );
	}
} )

level.add( {
	map: '2z',
	fresh: function() {
		entity.addEnt( { atlas: "hero", col: 1, row: 7, control: "input" } );
		entity.addEnt( { atlas: "exit", col: 0, row: 7, response: "exit", map: '1z', sc: 18, sr: 7, flip: true } );
		entity.addEnt( { atlas: "villan", col: 8, row: 7, response: "fight" } );
		entity.addEnt( { atlas: "exit", col: 19, row: 7, response: "exit", map: '3z', sc: 1, sr: 7 } );
		entity.addEnt( { atlas: "exit", col: 10, row: 0, response: "exit", map: '2', rotate: 270, sc: 10, sr: 13 } );
		entity.addEnt( { atlas: "exit", col: 10, row: 14, response: "exit", map: '2y', rotate: 90, sc: 10, sr: 1 } );
	}
} )



level.spawn( { map: '0' } );


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

	entity.crawl( {
		callback: function( obj ) {
			if ( obj.control == "input" ) {
				var keyState = input.keyState,
					target = {},
					change = false;
				if ( input.keyState[ 65 ] == "down" ) {
					target.col = obj.col - 1;
					target.row = obj.row;
					change = true;
				}
					
				if ( input.keyState[ 68 ] == "down" ) {
					target.col = obj.col + 1;
					target.row = obj.row;
					change = true;
				}
					
				if ( input.keyState[ 87 ] == "down" ) {
					target.col = obj.col;
					target.row = obj.row - 1;
					change = true;
				}
					
				if ( input.keyState[ 83 ] == "down" ) {
					target.col = obj.col;
					target.row = obj.row + 1;
					change = true;
				}
				if ( change ) {
					var targetEnt = entity.getEnt( target );
					if ( targetEnt ) {
						entity.getResponse( targetEnt.response )( { ent: obj, target: targetEnt } )
					}
					else {
						target.value = tile.getValue( target );
						entity.getResponse( target.value )( { ent: obj, target: target } );
					}

				}
			}
		}
	} );

	entity.crawl( {
		callback: function( obj ) {
			if ( obj.atlas ) {
				var sd = helper.copyObj( atlas.get( obj.atlas ) );
		
				sd.sprite = asset.getSprite( sd.sprite );
		
				render.add( { sprite: sd.sprite, x: obj.col * 32 + ( 32 - sd.w ) * .5, y: obj.row * 32 + ( 32 - sd.h ) * .5, w: sd.w, h: sd.h, sx: sd.x, sy: sd.y, sw: sd.w, sh: sd.w, flip: obj.flip, rotate: obj.rotate } );
			}
		}
	} );	

	
	tile.crawl( {
		callback: function( obj ) {
			var tileData = tile.getData( obj.value ),
				sd = helper.copyObj( atlas.get( tileData.atlas ) );
			
			sd.sprite = asset.getSprite( sd.sprite );
	
			render.add( { sprite: sd.sprite, x: obj.col * 32, y: obj.row * 32, w: sd.w, h: sd.h, sx: sd.x, sy: sd.y, sw: sd.w, sh: sd.w } );
		}
	} );
	
	render.update();
	input.clear();
	entity.cleanup();
	
	time.last = time.now;
	requestAnimationFrame( game.loop );
}


game.loop( 1 );