moo4q!
======

Include all three files into your document

    <script src="jquery-1.4.2.js"></script>
    <script src="mootools-1.2.4-base.js"></script>
    <script src="Class.Mutators.jQuery.js"></script>

Add a jQuery prototype method name to your class and a selector and options as the only arguments to the initialize method:

    var Fake = new Class({
      
      jQuery: 'fake'
      
      initialize: function(selector, options){
        // do stuff
      }

    });

And now you have the power and flexibility of MooTools Class, Core, and Native and the popularity of jQuery's DOM-focused library.  Note the MooTools portion is only 8k gzipped.

Useless Example Class
---------------------

### A Person class

    var Person = new Class({
      
      Implements: Options, 
    	
      options: {
    	  height: 'tall',
    	  weight: 'fat'
      },
      
      jQuery: 'person', // must be after options definition
      
      awesome: true,
      
      initialize: function(selector, options){
        this.setOptions(options);
        this.jqueryObject = jQuery(selector);
      },
    	
      dance: function(whichDance){
        alert(whichDance);
        return this;
      }
    
    });

### Usage

    // regular javascript api
    var bob = new Person('#dude',{ height: 'short' });
    bob.dance('salsa'); // dances the salsa and returns bob
    bob.awesome; // returns true
    bob.awesome = false; // set the property to something else

    // jQuery api
    $('#bob').person({ height: 'short' }); // instantiate with options
    $('#bob').person(); // returns the class instance since it's already been instantiated
                        // or in other words, returns and object like `bob` from above
    $('#bob').person('dance', 'salsa'); // dance the salsa and returns the jQuery object
                               // because the class returns `this`, (magic from the mutator)
    $('#dude').person('awesome'); // returns true, not the jQuery object because the
                                  // method doesn't return the instance, it returns a value
    $('#dude').persons('awesome', false); // reassign the property

Why?
----

### jQuery &lt;3 the DOM

jQuery is awesome but it's scope is (generally) limited to the DOM.  While the API is clear and simple to use, for large applications it can lead to code that is difficult to maintain and dangerously bound to your document's HTML.  Note that jQuery is not doing anything wrong, it simply makes no attempt to help you organize your code.  

### Immutable Functions #ftl

You might wrap your code up into plugins or write functions that are shared, but those are all immutable.  When you need to do similar things you end up copying code and tweaking, and may end up with a mess.  There's a better way.

### Stateful Objects #ftw

JavaScript solves this problem with objects.  Arrays are objects.  An array object inherits a bunch of methods from it's prototype to help you work with the list.  With JavaScript, you can create your own objects to use throughout your application that, like an array, inherit a bunch of stuff from their prototype. You can then create new objects that inherit from other objects. Then, when you find a bug in your application, simply fix the code in the offending object prototype and everything in your application that uses or depends on it is fixed.  Same goes for new features: trick out the solitary object prototype and all of it's instances get an upgrade too.

### MooTools &lt;3 JavaScript

JavaScript is an object oriented language believe it or not, but harnessing the power of prototypal inheritance is a little cumbersome. That's probably why so few people do it.  MooTools is not a _library_ like jQuery, but rather a general purpose application _framework_.  It's scope is not limited to the DOM but to JavaScript generally.  Similarly to how jQuery makes the DOM cake to work with, parts of MooTools make prototypal inheritance huckleberry pie.  It exposes the full power of JavaScript through a beautiful object oriented API in a module called _Class_ (with subclasses and mixins to boot.)

### Moo4q Combines the Two Efficiently

Moo4q uses MooTools to fill in where jQuery leaves off.  MooTools is modular and encourages users to only use the pieces they need.  We only need a couple modules from MooTools, none of which contain any code relevant to working with Elements, Animation, or AJAX.  Moo4q leaves that to jQuery.  So there's little, if any, functional duplication.  All said and done, the MooTools code is only 8k gzipped--diddly squat.

### Moo4q &lt;3 jQuery Syntax

Part of what makes moo4q so cool is a bit of code (the jQuery mutator) that automagically turns your MooTools Class into a jQuery plugin, making your objects accessible through familiar jQuery syntax.  It follows jQuery patterns for setting and getting values, instantiating stuff, and chaining.  Of course, you can still use your classes as regular JavaScript objects if you prefer, up to you.  Check out the <a href="http://moo4q.com">website for more information</a>.
