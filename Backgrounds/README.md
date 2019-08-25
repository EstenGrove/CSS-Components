# Collection of Different Background Styles


### Styles
- Wavy background
- Angled clip-path
- Solid color
- Hero image
- Gradient



#### Wavy Background
- Using ```position: absolute;``` for setting up a background color pattern/shape.
```html
<div id="wave"/>
<div/>
```

```css
#wave {
  position: relative;
  height: 70px;
  width: 600px;
  background: #e0efe3;
}

#wave:before {
  content: "";
  display: block;
  position: absolute;
  border-radius: 100% 50%;
  width: 340px;
  height: 80px;
  background-color: white;
  right: -5px;
  top: 40px;
}

#wave:after {
  content: "";
  display: block;
  position: absolute;
  border-radius: 100% 50%;
  width: 300px;
  height: 70px;
  background-color: #e0efe3;
  left: 0;
  top: 27px;
}

```
