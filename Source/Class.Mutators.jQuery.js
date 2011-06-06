/*
---

script: Class.Mutators.jQuery

description: Bridges a MooTools class to the jQuery object prototype.

license: MIT-style license.

author: Ryan Florence

requires:
  - Core/Class

provides: [Moo4q]

...
*/

Class.Mutators.jQuery = function(name){
	var self = this;
	jQuery.fn[name] = function (arg){
		var instance = this.data(name);
		if (typeOf(arg) == 'string'){
			var prop = instance[arg];
			if (typeOf(prop) == 'function'){
				var returns = prop.apply(instance, Array.slice(arguments, 1));
				return (returns == instance) ? this : returns;
			} else if (arguments.length == 1){
				return prop;
			}
			instance[arg] = arguments[1];
		} else {
			if (instance) return instance;
			this.data(name, new self(this.selector, arg));
		}
		return this;
	};
};
