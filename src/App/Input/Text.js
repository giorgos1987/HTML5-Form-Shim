			/**
 * @author sheiko
 * @license MIT
 * jscs standard:Jquery
 * @module App/main
 */

/**
 * Module representing Text Input
 * @module App/Input/Text
 */

// UMD boilerplate according to https://github.com/umdjs/umd
if ( typeof module === "object" && typeof define !== "function" ) {
	/**
	* Override AMD `define` function for RequireJS
	* @param {function( function, Object, Object )} factory
	*/
	var define = function ( factory ) {
		module.exports = factory( require, exports, module );
	};
}
/**
 * @constructor
 * @alias module:App/Input/Text
 */
define(function( require ) {
	"use strict";
	var /** @type {module:App/config} */
		config = require( "../config" ),
		/**
		* @constant
		* @default
		* @type {string}
		*/
		NAME = "Input/Text";
	/** @lends module:App/Input/Text.prototype */
	return function() {
			return {
			__extends__: require( "./Abstract" ),
			/**
			* @constructs
			*/
			__constructor__: function() {
				config.debug && console.log( "%s: initialized on %o", NAME, this.boundingBox.get( 0 ) );
			}
		};
	};
});