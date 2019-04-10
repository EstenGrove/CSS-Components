# Media Queries
- [Internet Explorer](#internet-explorer)

A collection of various cross-browser media queries for supporting IE, Opera, Edge, Firefox and older versions of Chrome.
## [#internet-explorer]__Internet Explorer__

#### Conditional Statements for using an alternate stylesheet(used in the <head></head>)
- IE 9 and lower
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
