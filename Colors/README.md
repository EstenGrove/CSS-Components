# Colors, Palettes, Snippets and Utilities

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
