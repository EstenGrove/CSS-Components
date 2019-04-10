# Media Queries
A collection of various cross-browser media queries for supporting IE, Opera, Edge, Firefox and older versions of Chrome.

- [Internet Explorer](#internet-explorer)
- [Edge](#edge)
- [Firefox](#firefox)
- [Chrome](#chrome)
- [Safari](#safari)
- [Opera](#opera)

##### [Other Browser-Specific Hacks](#other-browser-specific-hacks-1)

##### [Javascript Browser Hacks](#javascript-browser-hacks-1)

## __Internet Explorer__

### __Using Conditional Comments__
- Conditional Statements for loading alternate stylesheets(used in the <head></head>)

#### IE 6-9
```html
<!--[if IE 6]> Internet Explorer 6 <![endif]-->
<!--[if IE 7]> Internet Explorer 7 <![endif]-->
<!--[if IE 8]> Internet Explorer 8 <![endif]-->
<!--[if IE 9]> Internet Explorer 9 <![endif]-->
```
 
#### IE 9 and lower
```html
<!--[if IE]>
  <link rel="stylesheet" type="text/css" href="all-ie-only.css" />
<![endif]-->
```
#### Internet Explorer 10 & 11
- Uses regular media query
```css
@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
     /* place css here... */
}
```
#### Internet Explorer 9 and above
- Uses regular media query
```css
@media screen and (min-width:0\0) and (min-resolution: +72dpi) {
    /* place css here... */
}
```
#### Internet Explorer 8, 9 & 10
- Uses regular media query
```css
@media \0screen {
    /* place css here... */
}
```
#### Internet Explorer 6, 7 & 8
- Uses regular media query
```css
@media \0screen\,screen\9 {
    /* place css here... */
}
```
#### Internet Exporer 6 & 7
- Uses regular media query
```css
@media screen\9 { 
    /* place css here... */
}
```
[ToTop](#media-queries)
## __Edge__
#### Edge 12
- Media query that checks for "accelerator" support.
```css
@supports (-ms-accelerator:true) {
  /* place css here... */ 
}
```
## __Firefox__
#### Firefox Any version
```css
@-moz-document url-prefix() {
    /* place css here... */
}
```
#### Firefox (Quantum w/ Stylo)
```css
@-moz-document url-prefix() {
    @supports (animation: calc(0s)) {
        /* place css here... */
    }
}
```
#### Firefox Legacy (w/ Stylo)
```css
@-moz-document url-prefix() {
    @supports not (animation: calc(0s)) {
        /* Gecko */
        .ffGecko {
            property: value;
        }
    }
}
```
[ToTop](#media-queries)
## __Chrome__
#### Chrome & Safari any version
```css
@media screen and (-webkit-min-device-pixel-ratio:0) { 
    /* place css here... */
}
```
#### Chrome Version 29+
```css
@media screen and (-webkit-min-device-pixel-ratio:0) and (min-resolution:.001dpcm) {
    .chrome {
        property: value;
    }
}
```
## __Safari__
#### Safari 7.1+
```css
_::-webkit-full-page-media, _:future, :root .safari_only {
    /* place css here... */
}
```
#### Safari 6.1-10.0
```css
@media screen and (min-color-index:0) and(-webkit-min-device-pixel-ratio:0) { 
    @media {
        /* place css here... */
    }
}
```
#### Safari 10+
```css
@media not all and (min-resolution:.001dpcm) { 
    @media {
        /* place css here... */
    }
}
```
[ToTop](#media-queries)
## __Opera__
#### Opera 12+
```css
@media (min-resolution: .001dpcm) {
    _:-o-prefocus, .selector {
        /* place css here... */
    } 
}
```
#### Opera 11 and lower
```css
@media all and (-webkit-min-device-pixel-ratio:10000), not all and (-webkit-min-device-pixel-ratio:0) {
    /* place css here... */
}
```
## Other Browser-Specific Hacks
#### Webkit Selectors - CSS
- works for Chrome, Safari*, Opera >= 14 and Android
```css
.selector:not(*:root) {}
```
[ToTop](#media-queries)
## Javascript Browser Hacks
#### Test for Chromium
- works for Chrome, Opera >= 14 and Android 4.0.4
```javascript
const isChromium = !!window.chrome;
```
#### Test for Webkit
- works for Chrome, Safari >=3 and Opera >= 14
```javascript
const isWebkit = 'WebkitAppearance' in document.documentElement.style;
```
#### Test for Chrome
- works for Chrome >= 14
```javascript
const isChrome = !!window.chrome && !!window.chrome.webstore;
```
#### Test for Firefox
- several different methods that works when testing for Firefox
```javascript
// Checking for sidebar
const isFF = !!window.sidebar

// Checking for "Moz" in styling
const isFF = 'MozAppearance' in document.documentElement.style;

// Using Navigator Object
const isFF = !!navigator.userAgent.match(/firefox/i);

// Checking for Global Storage
const isFF = !!window.globalStorage;
```
#### Test for Internet Explorer
- works for IE 8-10 and Edge
```javascript
const isIE = document.all && document.querySelector;
```
- works for IE 6-10
```javascript
// Check ActiveX Object - works for
var isIE = !!window.ActiveXObject;
```
#### Test for Opera
- works for Opera version 12.4 or lower
```javascript
const isOpera = !!window.opera;
```
##### __Test for Opera Mini__
```javascript
const isOperaMini = (navigator.userAgent.indexOf('Opera Mini') > -1);
```
[ToTop](#media-queries)
### Alternate Resources 
- [Browserhacks](http://browserhacks.com/#hack-f4ade0540d8e891e8190065f75acb186)
