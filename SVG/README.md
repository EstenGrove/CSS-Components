# SVGs & SVG Sprites


## Gradients
To apply a gradient include this in the markup and make sure the height/width is 0 then set the ```fill="url(#g1)"
```html

<svg xmlns="http://www.w3.org/2000/svg" width="0" height="0">
  <defs>
    <linearGradient id="g1" y1="100%">
      <stop stop-color="#5183f5"/>
      <stop offset=".25" stop-color="#5379f7"/>
      <stop offset=".5" stop-color="#5b6df8"/>
      <stop offset=".75" stop-color="#6560f8"/>
      <stop offset="1" stop-color="#7251f5"/>
    </linearGradient>
  </defs>
<rect width="100%" height="100%" fill="url(#g1)"/>
</svg>
```
