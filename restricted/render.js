console.log( "render.js is up!" );

var render = {
	active: []
}

render.add = function( obj ) {
	this.active.push( helper.copyObj( obj ) );
}

render.update = function() {
	for ( var i = this.active.length - 1; i >= 0; --i ) {
		var rndr = this.active[ i ],
			rwh = rndr.w * .5,
			rhh = rndr.h * .5,
			rotate = rndr.rotate || 0,
			flip = rndr.flip || false;
		
		ctx.save();
		
		ctx.translate( rndr.x + rwh, rndr.y + rhh );
		
		ctx.rotate( rotate * Math.PI / 180 );
		
		if ( flip ) ctx.scale( -1, 1 );
		
		if ( rndr.sprite ) ctx.drawImage( rndr.sprite, rndr.sx, rndr.sy, rndr.sw, rndr.sh, -rwh, -rhh, rndr.w, rndr.h );
		
		// if ( rndr.color ) {
			// ctx.fillStyle = rndr.color;
			// ctx.fillRect( rndr.x, rndr.y, rndr.w, rndr.h );
		// }
		
		ctx.restore();
		
		this.active.splice( i, 1 );
	}
}