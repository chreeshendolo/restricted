console.log( "asset.js is up!" );

var asset = {
	model: {},
	queue: [],
	cache: {}
};

asset.add = function( obj ) {
	this.model[ obj.type ]( obj );
	this.queue.push( obj );
};

asset.get = function( obj ) {
	return this.cache[ obj.type ][ obj.name ];
}

asset.getSound = function( name ) {
	return this.cache.sound[ name ];
}

asset.getSprite = function( name ) {
	return this.cache.sprite[ name ];
}


var model = asset.model;

model.sprite = function( obj ) {
		obj.asset = new Image();
		obj.asset.src = "sprites/" + obj.name + ".png";
		obj.listener = "load";
	};
	
model.sound = function( obj ) {
		obj.asset = new Audio();
		obj.asset.src = "sounds/" + obj.name + ".wav";
		obj.listener = "canplaythrough";
	};

	
asset.load = function( callback ) {
	this.count = 0;

	for ( var i = this.queue.length - 1; i >= 0; --i ) {
		var obj = this.queue[ i ],
			that = this;
	
		obj.asset.addEventListener( obj.listener, function() {
			++that.count;
			if ( that.count == that.queue.length ) {
				callback();
				that.queue = [];
			}
		}, false );
		
		if ( !this.cache[ obj.type ] ) this.cache[ obj.type ] = {};
		this.cache[ obj.type ][ obj.name ] = obj.asset;
	};
	
	if ( !this.queue.length ) callback();
};