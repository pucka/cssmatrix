CSSMatrix
=========

A pollyfill for the WebKitCSSMatrix and MSCSSMatrix classes. WebKit browsers and IE10 have this class that from an element can return a CSSMAtrix class with info and functions manipulating the transformation matrix of that element. Other browsers does not have this function. That's where this little pollyfil can help. If non of the native classes are present it creates a mimick object. This only works if amatrix is used. As for now it's just an object where you can access the matrix properties. but a full pollyfill will be built.

Usage
-----

This example uses jQuery, but you can use getComputedStyle if you want.

	var cssmatrix = new CSSMatrix($('#myElement').css('transform'));