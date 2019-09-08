# Colors, Palettes, Snippets and Utilities

# Main Palette
```scss
#5751F5  -  hsla(242, 89%, 64%, 1)  // MAIN PURPLE
#d7263d  -  hsla(352, 70%, 50%, 1)  // MAIN RED
#61E294  -  hsla(144, 69%, 63%, 1)  // MAIN GREEN

#D579E3  - Pinkmaroon 
#FF79B7
#FF9985
#FFC965
#F9F871

// GREYS
#f7fafc
#edf2f7
#e2e8f0  -  hsla(214, 32%,  91%, 1)
#cbd5e0  -  hsla(211, 25%,  84%, 1)
#a0aec0
#718096
#4a5568
#2d3748
#1a202c


// ALTS
#5183f5  -  hsla(222, 89%, 64%, 1)
#A46AF2  -  hsla(266, 84%, 68%, 1)
#D579E3  -  hsla(292, 65%, 68%, 1)
#FF79B7  -  hsla(332, 100% ,74%, 1)
#FF9985  -  hsla(10, 100%, 76%, 1)
#FFC965  -  hsla(39, 100% ,70%, 1)
#F9F871  -  hsla(60, 92%, 71%, 1)
```


## Common Palette(s)
```sass
$blue: hsla(197, 100%, 50%, 1);
$red: hsla(330, 100%, 41%, 1);
$purple: hsla(222, 89%, 64%, 1);
$green: hsla(144, 69%, 63%, 1);
$charcoal: hsla(268, 10%, 30%, 1);
$grey: hsla(216, 14%, 93%, 1);
$altPurple: hsla(259, 77%, 64%, 1);
$orange: hsla(11, 100%, 75%, 1);
$yellow: hsla(60, 92%, 71%, 1);
```



### Using Gradients w/ SVG Sprites & SVGs
- Include an ```<svg></svg>``` in the markup that has it's size set to ```width: 0; height: 0;``` so it's NOT visible on the page, but can still be accessed.

```html
<!-- svg that "holds" the gradient -->
<svg class="icon" fill="url(#my-cool-gradient) #447799;" aria-hidden="true" focusable="false">
  <use xlink:href="#symbol-id"></use>
</svg>

<!-- then to use it simply set the fill value to the "url" -->
<svg fill="url('#my-cool-gradient')">
  <use xlink:href="sprite.svg#icon-show"></use>
</svg>
```
