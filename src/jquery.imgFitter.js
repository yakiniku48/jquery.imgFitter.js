(function ( $ ) {
	$.fn.imgFitter = function ( options ) {
		var settings = $.extend( {
			backgroundPosition: 'center center',
			fadeinDelay: 400,
			fadeinTime: 1200
		}, options );
		
		return this.each( function ( i, elem ) {
			if ( $( elem ).prop( 'tagName' ).toUpperCase() != 'IMG' ) return false;
			$( elem )
				.attr( 'src', 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEHAAEALAAAAAABAAEAAAICTAEAOw==' )
				.css( {
					backgroundImage: 'url(' + $( elem ).attr( 'data-src' ) + ')',
					backgroundPosition: settings.backgroundPosition,
					backgroundSize: 'cover',
					opacity: 0
				} )
				.delay( settings.fadeinDelay )
				.animate( { opacity: 1 }, settings.fadeinTime );
		} );
	};
}( jQuery ));