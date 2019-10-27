# Useful CSS Snippets

### System Fonts Stack: ```font-family``` Snippet
NOTE: In Safari/Firefox the browser will try to grab the ```-apple-system``` font which is current ```San Francisco```, then will move on if not available

```css
body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI",
  "Roboto", "Oxygen", "Ubuntu", "Helvetica Neue", Arial, sans-serif;
}
```
#### Common System Fonts
- Segoe UI
- Roboto
- Oxygen
- Ubuntu
- Helvetica Neue
- Arial


### Common Font Embed: Link Tag
```html
<link href="https://fonts.googleapis.com/css?family=Lobster|Lora|Open+Sans:300,400,600,700,800|Pacifico&display=swap" rel="stylesheet">
```

### Blur on Hover Effect
- This effect will blur all items NOT being hovered. Useful for navbars and links
```html
<!-- Here's the HTML Markup -->

<div class="container">
      <div class="item-1">Home</div>
      <div class="item-2">Projects</div>
      <div class="item-3">Blog</div>
      <div class="item-4">About</div>
      <div class="item-5">Contact</div>           
</div>
```
- Here's the magic CSS
```css
/* -- CSS Reset -- */

*,
*::after,
*::before {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
}
html {
      font-size: 62.5%;
      font-family: 'Raleway', san-serif;
}

/* -- Here's the magic styles -- */

.container {
      display: flex;
}

div[class^="item-"] {
      padding: .5rem 1rem;
      font-size: 1.8rem;
      transition: opacity .2s;
}

.container:hover div[class^="item-"]:not(:hover) {
      opacity: .5;
}

```

## Center ```fixed``` or ```absolute```ly Positioned Elements (like modals)
- In order to horizontally and vertically center an element that has ```absolute``` or a ```fixed``` position you must provide a couple negative margins:
- a negative "top" margin that is half the element's height: ```margin-top: -20px;```
- a negative "left" margin that is half the element's width: ```margin-left: -40px;```
- ```left: 50%;```
- ```top: 50%;```

##### Usage Example of Vertical & Horizontal Center of Fixed/Absolutely Positioned Items
```html
<div class="modal">
      <h1 class="modal-title">Modal Component</h1>
</div>
```
- and the CSS...
```css
body {
      position: relative;
      z-index: 1;
}

.modal {
      display: block;
      position: fixed;
      top: 50%;
      left: 50%;
      width: 30rem;
      height: 40rem;
      margin-left: -15rem;
      margin-top: -20rem;
      z-index: 10;
}
```


------------


### <u>__Reusables__</u>
##### __Box Shadow__
```css
/* MATERIAL DESIGN-ISH SHADOW */
box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

/* MAIN USE - Light and Subtle Box Shadow */
-webkit-box-shadow: 0px 1px 7px -1px rgba(0, 0, 0, 0.25);
box-shadow: 0px 1px 7px -1px rgba(0, 0, 0, 0.25);

/* Darker shadow */
box-shadow: 3px 4px 16px -1px rgba(0,0,0,0.75);

/* Inset Box Shadow */
box-shadow: inset 0 2px 4px 0 hsla(0, 0%, 0%, .2);
```

### Tooltip Clip-Path
```css
clip-path: polygon(81% 60%, 91% 45%, 100% 60%, 100% 100%, 0 100%, 0% 60%, 59% 60%);
```

### Common Color Palettes
##### __Company Palette__
```css
/*
ALA Color Palette
      #00aced - twitter
      #007bb6 - linkedin
      #cb2027 - pinterest
      #27a9e1 - mail
      // Core Colors
      #27a9e1 - light blue, hover states
      #0f579e - medium blue, footer
      #03416B - dark blue, banners
      #9ad123 - btn green, buttons
*/
