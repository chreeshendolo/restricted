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
asset.add( { name: "objects", type: "sprite" } );
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
atlas.add( { name: "wallOutUpLeft", sprite: "tiles", x: 32, y: 0, w: 32, h: 32 } );
atlas.add( { name: "wallInUpLeft", sprite: "tiles", x: 0, y: 96, w: 32, h: 32 } );
atlas.add( { name: "wallLeft", sprite: "tiles", x: 32, y: 32, w: 32, h: 32 } );
atlas.add( { name: "wallOutDownLeft", sprite: "tiles", x: 32, y: 64, w: 32, h: 32 } );
atlas.add( { name: "wallInDownLeft", sprite: "tiles", x: 64, y: 96, w: 32, h: 32 } );

atlas.add( { name: "wallUp", sprite: "tiles", x: 64, y: 0, w: 32, h: 32 } );
atlas.add( { name: "wallSpace", sprite: "tiles", x: 64, y: 32, w: 32, h: 32 } );
atlas.add( { name: "wallDown", sprite: "tiles", x: 64, y: 64, w: 32, h: 32 } );


atlas.add( { name: "wallOutUpRight", sprite: "tiles", x: 96, y: 0, w: 32, h: 32 } );
atlas.add( { name: "wallInUpRight", sprite: "tiles", x: 32, y: 96, w: 32, h: 32 } );
atlas.add( { name: "wallRight", sprite: "tiles", x: 96, y: 32, w: 32, h: 32 } );
atlas.add( { name: "wallOutDownRight", sprite: "tiles", x: 96, y: 64, w: 32, h: 32 } );
atlas.add( { name: "wallInDownRight", sprite: "tiles", x: 96, y: 96, w: 32, h: 32 } );


atlas.add( { name: "hero", sprite: "entities", x: 0, y: 0, w: 16, h: 16 } );
atlas.add( { name: "heroR", sprite: "entities", x: 0, y: 16, w: 16, h: 16 } );
atlas.add( { name: "heroU", sprite: "entities", x: 0, y: 32, w: 16, h: 16 } );

atlas.add( { name: "friend", sprite: "entities", x: 48, y: 0, w: 16, h: 16 } );
atlas.add( { name: "key", sprite: "entities", x: 16, y: 0, w: 16, h: 16 } );
atlas.add( { name: "enemy", sprite: "entities", x: 32, y: 0, w: 16, h: 22 } );
// atlas.add( { name: "enemyU", sprite: "entities", x: 32, y: 16, w: 16, h: 16 } );
// atlas.add( { name: "enemyR", sprite: "entities", x: 32, y: 32, w: 16, h: 16 } );


atlas.add( { name: "barsDownLeftEdge", sprite: "objects", x: 0, y: 0, w: 32, h: 32 } );
atlas.add( { name: "barsDownLeftSpace", sprite: "objects", x: 32, y: 0, w: 32, h: 32 } );
atlas.add( { name: "barsDownDoor", sprite: "objects", x: 64, y: 0, w: 32, h: 32 } );
atlas.add( { name: "barsDownRightSpace", sprite: "objects", x: 96, y: 0, w: 32, h: 32 } );
atlas.add( { name: "barsDownRightEdge", sprite: "objects", x: 128, y: 0, w: 32, h: 32 } );
atlas.add( { name: "barsUpLeftEdge", sprite: "objects", x: 0, y: 32, w: 32, h: 32 } );
atlas.add( { name: "barsUpLeftSpace", sprite: "objects", x: 32, y: 32, w: 32, h: 32 } );
atlas.add( { name: "barsUpDoor", sprite: "objects", x: 64, y: 32, w: 32, h: 32 } );
atlas.add( { name: "barsUpRightSpace", sprite: "objects", x: 96, y: 32, w: 32, h: 32 } );
atlas.add( { name: "barsUpRightEdge", sprite: "objects", x: 128, y: 32, w: 32, h: 32 } );

atlas.add( { name: "barsRightTopEdge", sprite: "objects", x: 0, y: 64, w: 32, h: 32 } );
atlas.add( { name: "barsRightTopSpace", sprite: "objects", x: 0, y: 96, w: 32, h: 32 } );
atlas.add( { name: "barsRightDoor", sprite: "objects", x: 0, y: 128, w: 32, h: 32 } );
atlas.add( { name: "barsRightBottomSpace", sprite: "objects", x: 0, y: 160, w: 32, h: 32 } );
atlas.add( { name: "barsRightBottomEdge", sprite: "objects", x: 0, y: 192, w: 32, h: 32 } );

atlas.add( { name: "barsLeftTopEdge", sprite: "objects", x: 32, y: 64, w: 32, h: 32 } );
atlas.add( { name: "barsLeftTopSpace", sprite: "objects", x: 32, y: 96, w: 32, h: 32 } );
atlas.add( { name: "barsLeftDoor", sprite: "objects", x: 32, y: 128, w: 32, h: 32 } );
atlas.add( { name: "barsLeftBottomSpace", sprite: "objects", x: 32, y: 160, w: 32, h: 32 } );
atlas.add( { name: "barsLeftBottomEdge", sprite: "objects", x: 32, y: 192, w: 32, h: 32 } );


tile.addData( { name: '0', atlas: "floor" } );
tile.addData( { name: '*', atlas: "wallSpace" } );
tile.addData( { name: ')', atlas: "wallInUpRight" } );
tile.addData( { name: '(', atlas: "wallInUpLeft" } );
tile.addData( { name: '_', atlas: "wallDown" } );
tile.addData( { name: '-', atlas: "wallUp" } );
tile.addData( { name: ']', atlas: "wallRight" } );
tile.addData( { name: '[', atlas: "wallLeft" } );
tile.addData( { name: '<', atlas: "wallInDownLeft" } );
tile.addData( { name: '>', atlas: "wallInDownRight" } );
tile.addData( { name: 'q', atlas: "wallOutUpLeft" } );
tile.addData( { name: 'z', atlas: "wallOutDownLeft" } );
tile.addData( { name: 'p', atlas: "wallOutUpRight" } );
tile.addData( { name: 'm', atlas: "wallOutDownRight" } );

tile.addMap( { name: '0', map:
	[
		['*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*'],
		['*','(','_','_','_','_','_',')','*','(','_','_','_','_','_',')','*','*','*','*'],
		['*',']','0','0','0','0','0','[','*',']','0','0','0','0','0','[','*','*','*','*'],
		['*',']','0','0','0','0','0','[','*',']','0','0','0','0','0','[','*','*','*','*'],
		['*','<','p','0','0','0','q','>','*','<','p','0','0','0','q','>','*','*','*','*'],
		['*','*',']','0','0','0','[','*','*','*',']','0','0','0','[','*','*','*','*','*'],
		['*','(','m','0','0','0','z','_','_','_','m','0','0','0','z','_','_','_',')','*'],
		['*',']','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','[','*'],
		['*','<','p','0','0','0','q','-','-','-','p','0','0','0','q','-','-','-','>','*'],
		['*','*',']','0','0','0','[','*','*','*',']','0','0','0','[','*','*','*','*','*'],
		['*','(','m','0','0','0','z',')','*','(','m','0','0','0','z',')','*','*','*','*'],
		['*',']','0','0','0','0','0','[','*',']','0','0','0','0','0','[','*','*','*','*'],
		['*',']','0','0','0','0','0','[','*',']','0','0','0','0','0','[','*','*','*','*'],
		['*','<','-','-','-','-','-','>','*','<','-','-','-','-','-','>','*','*','*','*'],
		['*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*']
	]
} );


tile.addMap( { name: '1', map:
	[
		['*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*'],
		['*','(','_','_','_','_','_',')','*','(','_','_','_','_','_',')','*','*','*','*'],
		['*',']','0','0','0','0','0','[','*',']','0','0','0','0','0','[','*','*','*','*'],
		['*',']','0','0','0','0','0','[','*',']','0','0','0','0','0','[','*','*','*','*'],
		['*','<','p','0','0','0','q','>','*','<','p','0','0','0','q','>','*','*','*','*'],
		['*','*',']','0','0','0','[','*','*','*',']','0','0','0','[','*','*','*','*','*'],
		['*','(','m','0','0','0','z','_','_','_','m','0','0','0','z','_','_','_',')','*'],
		['*',']','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','[','*'],
		['*','<','p','0','0','0','q','-','-','-','p','0','0','0','q','-','-','-','>','*'],
		['*','*',']','0','0','0','[','*','*','*',']','0','0','0','[','*','*','*','*','*'],
		['*','(','m','0','0','0','z',')','*','(','m','0','0','0','z',')','*','*','*','*'],
		['*',']','0','0','0','0','0','[','*',']','0','0','0','0','0','[','*','*','*','*'],
		['*',']','0','0','0','0','0','[','*',']','0','0','0','0','0','[','*','*','*','*'],
		['*','<','-','-','-','-','-','>','*','<','-','-','-','-','-','>','*','*','*','*'],
		['*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*']
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
	name: "bump",
	response: function( obj ) {
		var ent = obj.ent,
			target = obj.target;
		asset.getSound( "door" ).currentTime = 0;
		asset.getSound( "door" ).play();
	}
} );

entity.addResponse( { 
	name: "swap",
	response: function( obj ) {
		var ent = obj.ent,
			target = obj.target,
			hold = {};
			
		hold.col = ent.col;
		hold.row = ent.row;
		
		ent.col = target.col;
		ent.row = target.row;
		
		target.col = hold.col;
		target.row = hold.row;
		
		asset.getSound( "step" ).currentTime = 0;
		asset.getSound( "step" ).play();
	}
} );

entity.addResponse( { 
	name: "locked",
	response: function( obj ) {
		var ent = obj.ent,
			target = obj.target;

		if ( ent.key ) {
			target.cleanup = true;
			//tile.assignValue( target );
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
			
			//ent = entity.getEnt( { control: "input" } );
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
			
		if ( target.facing ) {
			var killed = target;
			if ( target.facing == 'l' && ent.col < target.col ) killed = ent;
			if ( target.facing == 'r' && ent.col > target.col ) killed = ent;
			if ( target.facing == 'u' && ent.row < target.row ) killed = ent;
			if ( target.facing == 'd' && ent.row > target.row ) killed = ent;
			
			killed.cleanup = true;
			asset.getSound( "door" ).currentTime = 0;
			asset.getSound( "door" ).play();
			entity.addEnt( { atlas: "key", col: killed.col, row: killed.row, response: "pickup", flag: "key" } );
			
		}
		else {
			target.cleanup = true;
			asset.getSound( "door" ).currentTime = 0;
			asset.getSound( "door" ).play();
			entity.addEnt( { atlas: "key", col: target.col, row: target.row, response: "pickup", flag: "key" } );
		}
	}
} );




level.add({
	map: '0',
	fresh: function() {
		entity.addEnt( { atlas: "hero", col: 3, row: 7, control: "input", vision: { type: "cone", value: 2}, asset: { l: "heroR", r: "heroR", u: "heroU", d: "hero" } } );
		entity.addEnt( { response: "swap", atlas: "friend", col: 4, row: 2 } );
		entity.addEnt( { response: "fight", atlas: "enemy", col: 2, row: 7, vision: { type: "cone", value: 2} } );
		
		
		entity.addEnt( { response: "bump", atlas: "barsDownLeftEdge", col: 2, row: 5 } );
		entity.addEnt( { response: "bump", atlas: "barsDownLeftSpace", col: 3, row: 5 } );
		entity.addEnt( { response: "locked", atlas: "barsDownDoor", col: 4, row: 5 } );
		entity.addEnt( { response: "bump", atlas: "barsDownRightSpace", col: 5, row: 5 } );
		entity.addEnt( { response: "bump", atlas: "barsDownRightEdge", col: 6, row: 5 } );
		
		
		entity.addEnt( { response: "bump", atlas: "barsDownLeftEdge", col: 10, row: 5 } );
		entity.addEnt( { response: "bump", atlas: "barsDownLeftSpace", col: 11, row: 5 } );
		entity.addEnt( { response: "locked", atlas: "barsDownDoor", col: 12, row: 5 } );
		entity.addEnt( { response: "bump", atlas: "barsDownRightSpace", col: 13, row: 5 } );
		entity.addEnt( { response: "bump", atlas: "barsDownRightEdge", col: 14, row: 5 } );
		
		
		entity.addEnt( { response: "bump", atlas: "barsUpLeftEdge", col: 2, row: 9 } );
		entity.addEnt( { response: "bump", atlas: "barsUpLeftSpace", col: 3, row: 9 } );
		entity.addEnt( { response: "locked", atlas: "barsUpDoor", col: 4, row: 9 } );
		entity.addEnt( { response: "bump", atlas: "barsUpRightSpace", col: 5, row: 9 } );
		entity.addEnt( { response: "bump", atlas: "barsUpRightEdge", col: 6, row: 9 } );
		
		entity.addEnt( { response: "bump", atlas: "barsUpLeftEdge", col: 10, row: 9 } );
		entity.addEnt( { response: "bump", atlas: "barsUpLeftSpace", col: 11, row: 9 } );
		entity.addEnt( { response: "locked", atlas: "barsUpDoor", col: 12, row: 9 } );
		entity.addEnt( { response: "bump", atlas: "barsUpRightSpace", col: 13, row: 9 } );
		entity.addEnt( { response: "bump", atlas: "barsUpRightEdge", col: 14, row: 9 } );
		
		entity.addEnt( { response: "bump", atlas: "barsLeftTopEdge", col: 16, row: 6 } );
		entity.addEnt( { response: "locked", atlas: "barsLeftDoor", col: 16, row: 7 } );
		entity.addEnt( { response: "bump", atlas: "barsLeftBottomEdge", col: 16, row: 8 } );
		
		entity.addEnt( { response: "exit", col: 17, row: 7, map: 1, sc: 2, sr: 7 } );
		
		//entity.addEnt( { atlas: "key", col: 6, row: 2, response: "pickup", flag: "key" } );
		//entity.addEnt( { atlas: "exit", col: 19, row: 7, response: "exit", map: '1', sc: 1, sr: 7 } );
	}
})

level.add({
	map: '1',
	fresh: function() {
		//entity.addEnt( { atlas: "hero", col: 1, row: 7, control: "input" } );
		entity.addEnt( { atlas: "enemy", col: 8, row: 7, response: "fight", control: "look", sequence: [ 'r', 'r' ,'r', 'l', 'u', 'd' ], current: 0, asset: { l: "enemyR", r: "enemyR", u: "enemyU", d: "enemy", } } );
	}
})

level.add( {
	map: '2',
	fresh: function() {
		entity.addEnt( { atlas: "hero", col: 1, row: 7, control: "input" } );
		entity.addEnt( { atlas: "exit", col: 0, row: 7, response: "exit", map: '1', sc: 18, sr: 7, flip: true } );
		entity.addEnt( { atlas: "enemy", col: 8, row: 7, response: "fight", control: "look", sequence: [ 'l', 'r', 'u', 'd' ], current: 0, asset: { l: "enemyR", r: "enemyR", u: "enemyU", d: "enemy", } } );
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
		entity.addEnt( { atlas: "enemy", col: 8, row: 7, response: "fight" } );
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
		entity.addEnt( { atlas: "enemy", col: 8, row: 7, response: "fight" } );
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
					change = "l";
				}
					
				if ( input.keyState[ 68 ] == "down" ) {
					target.col = obj.col + 1;
					target.row = obj.row;
					change = "r";
				}
					
				if ( input.keyState[ 87 ] == "down" ) {
					target.col = obj.col;
					target.row = obj.row - 1;
					change = "u";
				}
					
				if ( input.keyState[ 83 ] == "down" ) {
					target.col = obj.col;
					target.row = obj.row + 1;
					change = "d";
				}
				if ( change ) {
					obj.facing = change;
					var targetEnt = entity.getEnt( target );
					if ( targetEnt ) {
						entity.getResponse( targetEnt.response )( { ent: obj, target: targetEnt } );
					}
					else {
						target.value = tile.getValue( target );
						target.value = ( target.value != 0 ) ? 1 : target.value;
						entity.getResponse( target.value )( { ent: obj, target: target } );
					}

				}
			}
		}
	} );
	
	
	entity.crawl( {
		callback: function( obj ) {
			if ( obj.control == "look" ) {
				var l = ( input.keyState[ 65 ] == "down" ),
					r = ( input.keyState[ 68 ] == "down" ),
					u = ( input.keyState[ 87 ] == "down" ),
					d = ( input.keyState[ 83 ] == "down" );
					
				if ( l || r || u || d ) {
					var sequence = obj.sequence;
						
					obj.facing = obj.sequence[ obj.current ];
					obj.current = ( obj.current == sequence.length - 1 ) ? 0 : obj.current + 1;
					//console.log( obj.facing );
				}
			}
		}
	} );
	
	
	entity.crawl( {
		callback: function( obj ) {
			if ( obj.atlas ) {
				var flip = false;
				if ( obj.facing ) {
					obj.atlas = obj.asset[ obj.facing ]
					if ( obj.facing == 'l' ) flip = true;

				}
				var sd = helper.copyObj( atlas.get( obj.atlas ) );
		
				sd.sprite = asset.getSprite( sd.sprite );
				
				sd.flip = flip || obj.flip;
				
				render.add( { sprite: sd.sprite, x: obj.col * 32 + ( 32 - sd.w ) * .5, y: obj.row * 32 + ( 32 - sd.h ) * .5, w: sd.w, h: sd.h, sx: sd.x, sy: sd.y, sw: sd.w, sh: sd.h, flip: sd.flip, rotate: obj.rotate } );
			}
		}
	} );	

	
	tile.crawl( {
		callback: function( obj ) {
			var tileData = tile.getData( obj.value ),
				sd = helper.copyObj( atlas.get( tileData.atlas ) );
			
			sd.sprite = asset.getSprite( sd.sprite );
			var y = obj.row * 32 - ( sd.h - 32 );
			//console.log( obj.h - 32)
			render.add( { sprite: sd.sprite, x: obj.col * 32, y: y, w: sd.w, h: sd.h, sx: sd.x, sy: sd.y, sw: sd.w, sh: sd.h } );
		}
	} );
	

	render.update();
	
	var seen = level.scene[ tile.current ].seen;
	tile.crawl( {
		callback: function( tileObj ) {
			var alpha = 1;
			entity.crawl( {
				callback: function( entObj ) {
					if ( entObj.vision ) {
						var colDiff = 0,
							rowDiff = 0;
						if ( tileObj.col >= entObj.col ) {
							colDiff += tileObj.col - entObj.col;
						}
						else {
							colDiff += entObj.col - tileObj.col;
						}
						if ( tileObj.row >= entObj.row ) {
							rowDiff += tileObj.row - entObj.row;
						}
						else {
							rowDiff += entObj.row - tileObj.row;
						}
						var totalDiff = colDiff + rowDiff;
						
						if ( entObj.vision.type == "burst" ) {
							if ( totalDiff <= entObj.vision.value ) {
								alpha = .6 - ( entObj.vision.value - totalDiff ) / entObj.vision.value;
								var add = true;
								for ( var i = seen.length - 1; i >= 0; --i ) {
									var sn = seen[ i ];
									if ( sn.col == tileObj.col && sn.row == tileObj.row ) {
										add = false;
									}
								}
								if ( add ) seen.push( tileObj );
							}
							else {
								for ( var i = seen.length - 1; i >= 0; --i ) {
									var sn = seen[ i ];
									if ( sn.col == tileObj.col && sn.row == tileObj.row ) {
										alpha = .8;
									}
								}
							}
						}
						
						if ( entObj.vision.type == "cone" ) {
							if ( totalDiff <= entObj.vision.value ) {
								alpha = .6 - ( entObj.vision.value - totalDiff ) / entObj.vision.value;
								var add = true;
								for ( var i = seen.length - 1; i >= 0; --i ) {
									var sn = seen[ i ];
									if ( sn.col == tileObj.col && sn.row == tileObj.row ) {
										add = false;
									}
								}
								if ( add ) seen.push( tileObj );
							}
							else {
								for ( var i = seen.length - 1; i >= 0; --i ) {
									var sn = seen[ i ];
									if ( sn.col == tileObj.col && sn.row == tileObj.row ) {
										alpha = .8;
									}
								}
							}
						}
						
						
						
						
						
					}
				}
			} )
			
			ctx.fillStyle = "rgba( 0, 0, 0, " + alpha + " )";
			ctx.fillRect( tileObj.col * 32, tileObj.row * 32, 32, 32 );
		}
	} )
	
	
	input.clear();
	entity.cleanup();

	
	time.last = time.now;
	requestAnimationFrame( game.loop );
}


game.loop( 1 );