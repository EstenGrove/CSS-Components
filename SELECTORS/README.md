# CSS Selectors

### Select by Beginning of Class Name, ID etc.
```css
/* -- this selects all divs with a class that starts with "item-" -- */
div[class^="item-"] {
  border: 1px solid red;
}


/* -- this selects all input with an id that starts with "input-" -- */
input[id^="input="] {
  
}
```

### Select by The *Ending* of a Class Name, ID etc.

```css
/* -- this selects all divs with an id ending in "ending" -- */
div[id$="ending"] {

}
```

### Select Items That *Contain* a String of Text

```css
/* -- this selects all divs with a class name that contains "item" -- */
div[class*="item"] {

}
```

### Grab All Images Without an "alt" Attribute
```css
img[alt=""] { 

}
```

### Adjacent Sibling Selectors
- sibling selectors use the ```+``` sign
```css
p + <sibling> {
  
}
```
###### Example
- this selector "combo" will grab an element's sibling
- this example will select the ```p``` tag's sibling element: ```h4``` and color it red
```html
<div>
  <p>Not me</p>
  <h4>Select me</h4>
</div>
```
```css
p + h4 {
  color: red;
}
```

### General Sibling Combinator
```
// Pseudo code
<former_element> ~ <target_element> {  
  
}
```
