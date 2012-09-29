# Konami

jQuery plugin to detect and respond to [Konami codes][konami_code].

[konami_code]: http://en.wikipedia.org/wiki/Konami_Code

## Getting Started
Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/brentertz/konami/master/dist/konami.min.js
[max]: https://raw.github.com/brentertz/konami/master/dist/konami.js

In your web page:

```html
<script src="jquery.js"></script>
<script src="konami.min.js"></script>
<script>
jQuery(function($) {
  $.konami(function(){
  	console.log('Konami');
  });
});
</script>
```

## Documentation

jQuery plugin to detect keystrokes matching Konami (or custom) code(s) and execute callbacks.
See [code comments][comments] in src for method signature and details.

[comments]: https://raw.github.com/brentertz/konami/master/src/konami.js

## Examples

### Original Konami Code (↑ ↑ ↓ ↓ ← → ← → B A)

```html
jQuery(function($) {
  $.konami(function(){
  	console.log('Konami');
  });
});
```

### Custom Code (konami)

```html
jQuery(function($) {
  $.konami(function(){
  	console.log('Konami');
  }, [75,79,78,65,77,73]);
});
```

### Multiple Codes (↑ ↑ ↓ ↓ ← → ← → B A)

```html
jQuery(function($) {
  $.konami(function(){
  	console.log('↑ ↑');
  }, [38,38])
  .konami(function(){
  	console.log('↓ ↓');
  }, [40,40])
  .konami(function(){
  	console.log('Konami');
  });
});
```

### Get Creative

#### Cornify (Unicorns and Rainbows)

```html
jQuery(function($) {
  $.konami(function(){
	$(document).off('keyup', arguments.callee.caller);
    $.getScript('http://www.cornify.com/js/cornify.js', function(){
      cornify_add();
      $(document).keydown(cornify_add);
    });
  });
});
```

#### Browser Ponies

```html
jQuery(function($) {
  $.konami(function(){
    $(document).off('keyup', arguments.callee.caller);
    $.when(
      $.getScript('http://panzi.github.com/Browser-Ponies/basecfg.js'),
      $.getScript('http://panzi.github.com/Browser-Ponies/browserponies.js')
    ).then(function(){
      (function(cfg){
        BrowserPonies.setBaseUrl(cfg.baseurl);
        BrowserPonies.loadConfig(BrowserPoniesBaseConfig);
        BrowserPonies.loadConfig(cfg);
      })({
        "baseurl":"http://panzi.github.com/Browser-Ponies/",
        "fadeDuration":500,
        "volume":1,
        "fps":25,
        "speed":3,
        "audioEnabled":false,
        "showFps":false,
        "showLoadProgress":true,
        "speakProbability":0.1,
        "spawn":{"applejack":1,"fluttershy":1,"pinkie pie":1,"rainbow dash":1,"rarity":1,"twilight sparkle":1},
        "autostart":true
      });
    });
  });
});
```

_Be sure to check out the examples folder.  Send me a pull request if you would like to include your awesome example._

## Release History
0.1.0 - Initial release

## License
Copyright (c) 2012 Brent Ertz
Licensed under the MIT, GPL licenses.

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt](https://github.com/cowboy/grunt).

### Important notes
Please don't edit files in the `dist` subdirectory as they are generated via grunt. You'll find source code in the `src` subdirectory!

While grunt can run the included unit tests via PhantomJS, this shouldn't be considered a substitute for the real thing. Please be sure to test the `test/*.html` unit test file(s) in _actual_ browsers.

### Installing grunt
_This assumes you have [node.js](http://nodejs.org/) and [npm](http://npmjs.org/) installed already._

1. Test that grunt is installed globally by running `grunt --version` at the command-line.
1. If grunt isn't installed globally, run `npm install -g grunt` to install the latest version. _You may need to run `sudo npm install -g grunt`._
1. From the root directory of this project, run `npm install` to install the project's dependencies.

### Installing PhantomJS

In order for the qunit task to work properly, [PhantomJS](http://www.phantomjs.org/) must be installed and in the system PATH (if you can run "phantomjs" at the command line, this task should work).

Unfortunately, PhantomJS cannot be installed automatically via npm or grunt, so you need to install it yourself. There are a number of ways to install PhantomJS.

* [PhantomJS and Mac OS X](http://ariya.ofilabs.com/2012/02/phantomjs-and-mac-os-x.html)
* [PhantomJS Installation](http://code.google.com/p/phantomjs/wiki/Installation) (PhantomJS wiki)

Note that the `phantomjs` executable needs to be in the system `PATH` for grunt to see it.

* [How to set the path and environment variables in Windows](http://www.computerhope.com/issues/ch000549.htm)
* [Where does $PATH get set in OS X 10.6 Snow Leopard?](http://superuser.com/questions/69130/where-does-path-get-set-in-os-x-10-6-snow-leopard)
* [How do I change the PATH variable in Linux](https://www.google.com/search?q=How+do+I+change+the+PATH+variable+in+Linux)
