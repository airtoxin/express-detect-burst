var Sandglass = require( 'sandglass' );

exports = module.exports = function ( options ) {
	var sandglass = new Sandglass();
	var threshold = options.threshold || 1000;
	var interval  = options.interval  || 60000; // default interval = 1 min.
	var callback  = options.callback  || function () {};
	var sandStream = sandglass.liveCount( interval );

	sandStream.on( 'aggregate', function ( agg ) {
		if ( agg.length >= threshold ) return callback();
	} );

	return function burst( req, res, next ) {
		sandglass.emit( 1 );
		next();
	};
};
