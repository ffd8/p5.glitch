# p5.glitch

p5.js library for glitching images and binary files in the web browser.  
cc [teddavis.org](https://teddavis.org) 2020 –  

![p5.glitch logo animated](https://raw.githubusercontent.com/ffd8/p5.glitch/master/includes/images/p5.glitch_ani.gif)


## Contents
- [Examples](#examples)
- [Installation](#installation)
- [Usage](#usage)
- [References](#references)
- [Contributing](#contributing)
- [In the Wild](#in-the-wild)


## Examples
Here are a few examples to get you going:

- image – [demo](https://p5.glitch.me/examples/web/P5L_p5.glitch-image.html) / [html](https://github.com/ffd8/p5.glitch/blob/master/examples/web/P5L_p5.glitch-image.html) / [editor.p5js](https://editor.p5js.org/ffd8/sketches/wwo8xjaIt)
 / [p5live](https://github.com/ffd8/p5.glitch/blob/master/examples/p5live/P5L_p5.glitch-image.json)
- image-types – [demo](https://p5.glitch.me/examples/web/P5L_p5.glitch-image-types.html) / [html](https://github.com/ffd8/p5.glitch/blob/master/examples/web/P5L_p5.glitch-image-types.html) / [editor.p5js](https://editor.p5js.org/ffd8/sketches/6_7JU6kI0)
 / [p5live](https://github.com/ffd8/p5.glitch/blob/master/examples/p5live/P5L_p5.glitch-image-types.json)
- webcam – [demo](https://p5.glitch.me/examples/web/P5L_p5.glitch-webcam.html) / [html](https://github.com/ffd8/p5.glitch/blob/master/examples/web/P5L_p5.glitch-webcam.html) / [editor.p5js](https://editor.p5js.org/ffd8/sketches/5aew0QfB4) / [p5live](https://github.com/ffd8/p5.glitch/blob/master/examples/p5live/P5L_p5.glitch-webcam.json)
- video – [demo](https://p5.glitch.me/examples/web/P5L_p5.glitch-video.html) / [html](https://github.com/ffd8/p5.glitch/blob/master/examples/web/P5L_p5.glitch-video.html) / [editor.p5js](https://editor.p5js.org/ffd8/sketches/6OfUZnw9d) / [p5live](https://github.com/ffd8/p5.glitch/blob/master/examples/p5live/P5L_p5.glitch-video.json)
- binary-font – [demo](https://p5.glitch.me/examples/web/P5L_p5.glitch-binary-font.html) / [html](https://github.com/ffd8/p5.glitch/blob/master/examples/web/P5L_p5.glitch-binary-font.html) / [editor.p5js](https://editor.p5js.org/ffd8/sketches/FHdpg_tt9) / [p5live](https://github.com/ffd8/p5.glitch/blob/master/examples/p5live/P5L_p5.glitch-binary-font.json)
- almost-everything – [demo](https://p5.glitch.me/examples/web/P5L_p5.glitch-almost-everything.html) / [html](https://github.com/ffd8/p5.glitch/blob/master/examples/web/P5L_p5.glitch-almost-everything.html) / [editor.p5js](https://editor.p5js.org/ffd8/sketches/pckumarhp) / [p5live](https://github.com/ffd8/p5.glitch/blob/master/examples/p5live/P5L_p5.glitch-almost-everything.json)
- callback – [demo](https://p5.glitch.me/examples/web/P5L_p5.glitch-buildimage-callback.html) / [html](https://github.com/ffd8/p5.glitch/blob/master/examples/web/P5L_p5.glitch-buildimage-callback.html) / [editor.p5js](https://editor.p5js.org/ffd8/sketches/OOeGitKMw) / [p5live](https://github.com/ffd8/p5.glitch/blob/master/examples/p5live/P5L_p5.glitch-buildimage-callback.json)
- instance - [demo](https://p5.glitch.me/examples/web/P5L_p5.glitch-instance.html) / [html](https://github.com/ffd8/p5.glitch/blob/master/examples/web/P5L_p5.glitch-instance.html)


## Installation
Download [`p5.glitch.js`](p5.glitch.js) and include with your p5.js sketch's index.html file.  
Optionally clone/download the [GitHub Repo](https://github.com/ffd8/p5.glitch).  

Load remotely via [jsdelivr CDN](https://cdn.jsdelivr.net/npm/p5.glitch@latest/p5.glitch.js):

```javascript
<script src="https://cdn.jsdelivr.net/npm/p5.glitch@latest/p5.glitch.js"></script>
```

## Usage
p5.glitch is a `class`, so after an instance has been attached to a variable, you'll need to use that prefix in front of every function listed below, ie: `glitch.loadImage()`. This enables you to have multiple glitches running parallel. All examples below use `glitch` as the instance prefix.

- [Setup](#setup)
- [Images](#images)
- [Binary](#binary)

### Setup
Create a global instance of p5.glitch:

```javascript
let glitch;

function setup() {
	createCanvas(windowWidth, windowHeight);
	
	/* create glitch instance */
	glitch = new Glitch();
	
	/* optional settings */
	// glitch.pixelate(1); // hard pixel edges (pixelDensity)
	// glitch.errors(false); // hide any bad data warnings
	// glitch.debug(); // show debugs - avoid if anything called in draw()
	// glitch.debug(false); // hide debug
}
```
See *instance* demo above for using with p5.js [instance mode](https://github.com/processing/p5.js/wiki/Global-and-instance-mode).

### Images  
Images can be live previewed within your sketch and browser:

```javascript
/* load image */
glitch.loadType('jpg'); // specify jpeg file glitching, default
glitch.loadQuality(.25); // optionally crunch to low quality
glitch.loadImage('data/images/fish.png'); // load image by path
// glitch.loadImage(capture); // load existing p5.js image

/* reset bytes */
// glitch.resetBytes(); // reset glitch to original bytes if loaded in setup
 
/* sample glitching functions */
glitch.randomBytes(10); // randomize 10 bytes
glitch.replaceBytes(45, 127); // find + replace all
glitch.replaceHex('ffdb00430001','ffdb004300ff'); // jpg quant table

/* build and display image */
glitch.buildImage(); // creates image from glitched data
image(glitch.image, 0, 0); // display glitched image

/* save image */
glitch.saveImage('fish_glitched.jpg'); // save raw glitched file
// glitch.saveSafe('fish_glitched'); // save safe glitched file
// glitch.saveCanvas('fish_glitched'); //  saves entire canvas
```

### Binary
Binary data (any file) can be loaded, glitched, saved. Best in `setup()` or on demand:

```javascript
/* load binary file with callback when ready */
glitch.loadBytes('data/movies/fish.mp4', function(){
	
	/* sample glitching functions */
	glitch.randomBytes(100); // randomize 100 bytes
	glitch.replaceBytes(45, 127); // find + replace all

	/* save binary file */
	glitch.saveBytes('fish_glitched.mp4'); // compiles and download
	
});
```


## References
Throughout the reference sub-heads, the instance prefix has been left away for easier reading. Don't forget to include it during use (ie. `glitch.image`).

- [Variables](#variables)
- [Image Functions](#image-functions)
- [Binary Functions](#binary-functions)
- [Glitch Functions](#glitch-functions)
- [Custom Glitch Functions](#custom-glitch-functions)
- [Meta Functions](#meta-functions)

### Variables

#### types
Array containing list of available image/filetypes, based on browser, for image glitching. 

```javascript
print(glitch.types); // see list of available image types
```

---

#### bytes / bytesGlitched
Array of original and glitched bytes after running `loadImage()` or `loadBytes()`.  
The `bytesGlitched` array is updated with each glitch function. Use in combination with `updateBytes()` for creating custom glitch functions. 

---

#### image
After running `buildImage()`, contains glitched bytes as p5.js image to display.

```javascript
image(glitch.image, 0, 0); // image from top-left downward
```
```javascript
imageMode(CENTER); // set center-out images
image(glitch.image, width / 2, height / 2); // draw in center of canvas
```

---

#### width / height
Automatically calculated dimensions to fill canvas when displaying `image`.

```javascript
image(glitch.image, 0, 0, glitch.width, glitch.height); // fills canvas
```

---

### Image Functions

#### pixelate( *[newDensity]* )
Use to force hard pixels when resizing (nearest neighbor). Sets the sketch to `noSmooth()` and the canvas style *imageRendering* to *pixelated*. Optionally set the `pixelDensity()` by including a **newDensity** value (constrainted from 0 to `displayDensity()`). Only set within the `setup()`.

```javascript
glitch.pixelate(0.5);
```

---

#### loadType( newType )
Sets the **image/type** when converting loaded image to base64/bytes.  
Check `types` for list of available filetypes based on your browser (each support different ones).

```javascript
glitch.loadType('image/png'); // complete type as processed
glitch.loadType('png'); // same as above, 'image/' inserted if missing
glitch.loadType(random(glitch.types)); // load random available types

// used before glitch.loadImage()
```

---

#### loadQuality( newQuality )
Sets the **quality** when converting loaded image to base64/bytes.  
Only available for **jpeg** and **webp**. Number between 0.0 – 1.0

```javascript
glitch.loadQuality(1.0); // set hi-quality
glitch.loadQuality(0.01); // set extremely low-quality
glitch.loadQuality(random(0.01, 1.0); // set random quality

// used before glitch.loadImage()
```

---

#### loadImage( img, *[callback]* )
Load an image by string (filepath) or passing an existing p5.js image from the built-in [`loadImage()`](https://p5js.org/reference/#/p5/loadImage) or video/webcam. Optionally declare a `callback` function to be run once loaded. 

Each time function is called, `bytes` + `bytesGlitched` are replaced. If a static image, simply load it once and use `resetBytes()` to revert changes. 

```javascript
// load by filepath string
glitch.loadImage('data/images/fish.png');
```
```javascript
// load p5.js image (same as above, useful if already loaded)
loadImage('data/images/fish.png', function(img){
	glitch.loadImage(img);
});
```
```javascript
// load using webcam (see p5.js example for capture)
glitch.loadImage(capture);

```

---

#### buildImage( *[callback]* )
Compile any processed glitches into `image` for displaying and saving. Optionally use a `callback` function to display the compiled image after each glitch.

```javascript
// basic usage before displaying image
glitch.buildImage(); // compile glitched data
image(glitch.image, 0, 0); // display image whenever compiled
```
```javascript
// callback usage 
glitch.randomBytes(1); // 1 random byte
glitch.buildImage(function(img){
	image(img, width / 2, height * 0.25);
});

glitch.randomBytes(100); // 100 additional random bytes
glitch.buildImage(function(img){
	image(img, width / 2, height * 0.75);
});
```

---

#### saveImage( *[fileName]* )
Downloads glitched image file from `bytesGlitched` (live glitch = software may reject it).  
Use custom **fileName** or defaults to **p5.glitch_timestamp**. File format extension used during `loadImage()` is automatically added to filename suffix.

```javascript
glitch.saveImage(); // saved as 'p5.glitch_######_######.ext' (ext = format)
glitch.saveImage('fish_glitched'); // saved as 'fish_glitched.ext' (ext = format)
```

---

#### saveSafe( *[fileName, fileType]* )
Downloads a safe copy of the glitched `image`. While `saveImage()` still contains glitchy bytes (volatile and might not be able to upload or open in software), this safe copy is a normal image.
Use custom **fileName** or defaults to **p5.glitch_timestamp**. Add a custom **fileType** – accepts *jpg* or *png* is default for highest quality.

```javascript
glitch.saveSafe(); // saved as 'p5.glitch_######_######_safe.png'
glitch.saveSafe('fish_glitched'); // saved as 'fish_glitched_safe.png'
glitch.saveSafe('fish_glitched', 'jpg'); // saved as 'fish_glitched_safe.jpg'
```

---

#### saveCanvas( *[fileName, fileType]* )
Saves the entire p5.js canvas incase compositing glitched images or used to create a 'safe' version of the glitch (stable image for sharing). Use  custom **fileName** or defaults to **p5.glitch**. **_canvas.png**. Add a custom **fileType** – accepts *jpg* or *png* is default for highest quality.

```javascript
glitch.saveCanvas(); // saved as 'p5.glitch_######_######_canvas.png'
glitch.saveCanvas('fish', 'jpg'); // saved as 'fish_canvas.jpg'
```

---

### Binary Functions

#### loadBytes( bytes, *[callback]* )
Load any binary file either by string (filepath) or passing a previously loaded array of bytes from p5.js [`loadBytes()`](https://p5js.org/reference/#/p5/loadBytes). Optionally declare a `callback` function to be run once loaded. 

```javascript
// load by filepath string
glitch.loadBytes('data/movies/fish.png');
```
```javascript
// load using p5.js loadBytes
loadBytes('data/movie/fish.png', function(loadedBytes){
	glitch.loadBytes(loadedBytes, function(){
		// print(glitch.bytes.length); // check size of loaded bytes
	});
});
```
---

#### saveBytes( fileName )
Compiles and downloads binary file from `bytesGlitched`. Be sure to give same file format extension to **fileName** as your input file. 

```javascript
glitch.saveBytes('fish_glitched.mp4');
```

---

### Glitch Functions
These functions should be called between the loading and saving/displaying of your binary/image.

#### resetBytes()
Resets `bytesGlitched` to the original `bytes` array.  
Especially useful if only using `loadBytes()` or `loadImage()` on demand (or in `setup()`) to regularly reset the glitched bytes as needed. 

```javascript
glitch.resetBytes();
```

---

#### limitBytes( limitStart, *[limitStop]* )
Constrains where in the file glitch functions `randomBytes()` and `replaceBytes()` are allowed to modify the bytes array. This is useful to help avoid breaking the [**header**](https://en.wikipedia.org/wiki/File_format#File_header) of a file. By default, **limitStart** is .2 (20% into the data) and **limitStop** is 1.0 (end of file). You can adjust this as often as needed throughout your sketch, providing just a new starting point, or and start and stop point.

```javascript
glitch.limitBytes(0.5, 0.6); // only modify the middle 10% of file
```

---

#### randomByte( bytePos )
Sets a *single* byte, at provided **bytePos** position, to a random value between 0 - 255. Can set position by decimal or hex.

```javascript
glitch.randomByte(123); // the 123rd byte
glitch.randomByte('7b'); // the 123rd byte, using hex
```

---

#### randomBytes( byteCount, *[replaceVal]* )
Sets **byteCount** number of *multiple* random bytes to either a random value between 0 - 255, or optionally, the provided **replaceVal**. The **replaceVal** can be set by decimal or hex.

```javascript
glitch.randomBytes(10); // set 10 random bytes, throughout data
glitch.randomBytes(100, 'ff'); // sets 100 random bytes to 'ff' (255)
```

---

#### replaceByte( bytePos, replaceVal )
Sets a *single* byte, at provided **bytePos** position, to the provided **replaceVal**. Both values can be set by decimal or hex.

```javascript
glitch.replaceByte(123, 255); // replaces 123rd byte with value 255
glitch.replaceByte('7b', 'ff'); // same as above, in hex
```

---

#### replaceBytes( findVal, replaceVal )
Sets *all* bytes found from **findVal** to the provided **replaceVal**. Both values can be set by decimal or hex.

```javascript
glitch.replaceBytes(42, 24); // replaces all bytes with 42 to 24
glitch.replaceBytes('ff', '00'); // replaces all (as hex) from 255 to 0
```

---

#### replaceHex( findVal, replaceVal )
Use this for [precise mishandling](https://link.springer.com/content/pdf/10.1007%2F978-3-642-21675-6_25.pdf) data that you know the hex structure of. While `replaceBytes()` handles individual bytes from the array, `replaceHex()` allows you to replace entire strings of data. Sets *all* bytes (as hex string) found from **findVal** to the provided **replaceVal**.

```javascript
// modify jpg quantization table 1
glitch.replaceHex('ffdb00430001', 'ffdb004300ff'); // wootwoot!

// modify jpg quantization table 2
glitch.replaceHex('ffdb00430101', 'ffdb004301ff'); // soo colorful!
```

---

### Custom Glitch Functions
Here are some useful functions if creating your own glitch functions to manipulate the original `bytes` or additive `bytesGlitched`.

#### parsePosition( newPos, *[bytes]* )
Safely find **newPos** position within the `bytesGlitched`, or optionally a custom **bytes** array. **newPos** position can be set by decimal or hex.

```javascript
// custom glitch function
let newBytes = glitch.bytesGlitched.slice(); // clone glitched array

// find position in byte array
let randomPos = random(0, glitch.bytesGlitched.length);
let safePos = glitch.parsePosition(randomPos);
newBytes[safePos] = 255; // change single random byte

// ... updateBytes() to save changes
```

---

#### parseByte( newVal )
Safely convert **newVal** to decimal byte if given a floating point or string. **newVal** value can be set by decimal or hex.

```javascript
// custom glitch function
let newBytes = glitch.bytesGlitched.slice(); // clone glitched array

// find position in byte array
newBytes[50] = glitch.parseByte(random(255)); // single random value

// ... updateBytes() to save changes
```

---

#### updateBytes( newBytes )
This is automatically called at the end of each glitch function to set both the `bytesGlitched` and `base64Glitched` variables for compiling and displaying thereafter. Pass **newBytes** a modified clone original or glitched byte array.

```javascript
// custom glitch function
let newBytes = glitch.bytes.slice(); // clone original data array
newBytes[50] = glitch.parseByte(24); // change single byte
glitch.updateBytes(newBytes); // updates glitch.bytesGlitched

// ... display/save/etc have current changes
```

---

#### bytesToHex( bytes ) / hexToBytes( hex )
Convert **byte** array to hex for string based manipulations with `bytesToHex()`. Convert back to bytes with `hexToBytes()` before passing modified data to `updateBytes()`.

```javascript
// custom hex glitch function
let tempHex = glitch.bytesToHex(glitch.bytes); // bytes array to hex
tempHex = tempHex.split('ffff').join('cccc'); // find + replace hex
let newBytes = hexToBytes(tempHex);
glitch.updateBytes(newBytes); // updates glitch.bytesGlitched

// ... display/save/etc have current changes
```

---

### Meta Functions

#### errors( mode )
Occasionally you'll kill the image, producing a p5.js error in the console. If you want to ignore all errors, disable them within the `setup()`:

```javascript
glitch.errors(false); // disable error logging
p5.disableFriendlyErrors = true; // disable p5.js warnings about bad images
```

---

#### debug( *[mode]* )
If you want to follow the progress of on-demand load/save bytes, enable `debug()`. Be sure to disable if processing anything within the `draw()` otherwise you'll flood the console. 

```javascript
glitch.debug(); // activate debug
glitch.debug(false); // disable debug (default)
```

---


## Contributing
Found a bug, missing feature, and/or created a project with p5.glitch, let me know!  
[Create an issue](https://github.com/ffd8/p5.glitch/issues) on GitHub. 

## In the Wild
- [glitch.ext @ HeK Net Works, March 2021](https://www.hek.ch/projekte/hek-net-works/ted-davis-glitch-ext-09-03-2021/) + [documentation](https://www.youtube.com/watch?v=8bRTGsEjlzY)
- [glitch.ext @ Chromium Extension](https://github.com/ffd8/glitch.ext)

[![p5.glitch 2021 Basel Media Art Nomination](https://raw.githubusercontent.com/ffd8/p5.glitch/master/includes/images/BFP.Laurel_Medienkunstpreis_Nominiert2021_glitch.png)](https://www.kultur.bs.ch/kulturprojekte/film-und-medienkunst/preisvergaben.html)


## License
[MIT](https://choosealicense.com/licenses/mit/)