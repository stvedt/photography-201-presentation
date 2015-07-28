// ©2014 Spies & Assassins.  All rights reserved.

// App is a class (denoted by it's uppercase name) definition that will later be instantiated in the document ready.
var App = function(/* Import jQuery($) to App Scope */$,Social){


    // Save reference to App object scope
    var _this = this;

    // Single point of entry - called immediately after instantiation
    function _init(){


    }

    // Application methods



    /* ************************************************************************** */
    /* At the end of App instantiation, call the init function of the App object. */
    /* ************************************************************************** */
    _init.call(this);

};

// Override the toString method for more productive error reporting.
App.prototype.toString = function(){
    return '[object App]';
};


// Instantiate application in $(document).ready()
$(function(jquery){
    /* $(document).ready(function(){ //... }); */
    /* window.onload = function(){ */

    Reveal.addEventListener( 'slidechanged', function( event ) {
        var current = Reveal.getIndices().h;


        // if(current > 0){
        //     $("#logo-overlay").css("opacity","1.0");
        // } else {
        //     $("#logo-overlay").css("opacity","0.0");
        // }
    } );

});
