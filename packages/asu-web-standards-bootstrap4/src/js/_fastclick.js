+function () {
  'use strict';

  if ( typeof FastClick == 'undefined' ) throw new Error( 'FastClick is required!' )

  if ( 'addEventListener' in document ) {
    document.addEventListener ( 'DOMContentLoaded', function () {
      FastClick.attach ( document.body );
    }, false );
  }

} ();
