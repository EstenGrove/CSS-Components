#### __Fixed Navbar__

A basic navbar fixed at the top of the page with the anchor links centered vertically and horizontally using flexbox.


------
![fixed-navbar optimized](https://user-images.githubusercontent.com/41505038/53224224-3a3ec380-3631-11e9-94fd-fc696950aafe.gif)




-------
###### __Basic Setup__

-Add a navbar:
```html
<nav>
  <a href="#">Home</a>
  <a href="#">Works</a>
  <a href="#">About</a>
  <a href="#">Contact</a>
</nav>
```
-Set the navbar container to position:fixed and 100% of the viewport
```css
nav { 
  position: fixed; 
  width: 100vw; 
  display: flex;
  justify-content: center;
  align-items: center;
}
```
-Then set the height of the navbar as desired and add any additional styling you'd like and you're set. 
