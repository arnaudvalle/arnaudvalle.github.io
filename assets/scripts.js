// Service Worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').then(function() {
        // console.log('Service worked registered :+1:');
    });
}

/*! 
A fix for the iOS orientationchange zoom bug.
 Script by @scottjehl, rebound by @wilto.
 MIT License.
*/
(function(w){
	// This fix addresses an iOS bug, so return early if the UA claims it's something else.
	if( !( /iPhone|iPad|iPod/.test( navigator.platform ) && navigator.userAgent.indexOf( "AppleWebKit" ) > -1 ) ){ return; }
    var doc = w.document;
    if( !doc.querySelector ){ return; }
    var meta = doc.querySelector( "meta[name=viewport]" ),
        initialContent = meta && meta.getAttribute( "content" ),
        disabledZoom = initialContent + ",maximum-scale=1",
        enabledZoom = initialContent + ",maximum-scale=10",
        enabled = true,
		x, y, z, aig;
    if( !meta ){ return; }
    function restoreZoom(){
        meta.setAttribute( "content", enabledZoom );
        enabled = true; }
    function disableZoom(){
        meta.setAttribute( "content", disabledZoom );
        enabled = false; }
    function checkTilt( e ){
		aig = e.accelerationIncludingGravity;
		x = Math.abs( aig.x );
		y = Math.abs( aig.y );
		z = Math.abs( aig.z );
		// If portrait orientation and in one of the danger zones
        if( !w.orientation && ( x > 7 || ( ( z > 6 && y < 8 || z < 8 && y > 6 ) && x > 5 ) ) ){
			if( enabled ){ disableZoom(); } }
		else if( !enabled ){ restoreZoom(); } }
	w.addEventListener( "orientationchange", restoreZoom, false );
	w.addEventListener( "devicemotion", checkTilt, false );
})( this );

/*!
    opens links with the class "external" in a new tab
*/
document.onclick = function(event) {
    event = event || window.event;
    var el = event.target || event.srcElement;

    // if clicking on an image within a link
    if (el.nodeName && el.nodeName == 'IMG') {
        el = el.parentNode;
    }

    if (hasClass(el, 'external')) {
        if (event.preventDefault) {
            event.preventDefault();
        }
        window.open(el.href, '_blank');
        return false;

    }
};

function hasClass(elem, className) {
    return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
}

/**
 * Quick hack to hide the actual email address from spam bots... hopefully...
 */
var contactform =  document.getElementById('contactForm');
contactform ? contactform.setAttribute('action', '//formspree.io/' + 'arnaud.valle+contact' + '@' + 'gmail' + '.' + 'com') : undefined;