# Colors, Palettes, Snippets and Utilities

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
