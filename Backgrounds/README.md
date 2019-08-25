# Collection of Different Background Styles


### Styles
- Wavy background
- Angled clip-path
- Solid color
- Hero image
- Gradient



### Wavy Background

##### Method 1: Absolute Positioning

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

##### SVG Background
```html
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 1440 126" style="enable-background:new 0 0 1440 126;" xml:space="preserve">
<style type="text/css">
	.st0{fill:#0052CC;}
</style>
<title>Rectangle 3</title>
<desc>Created with Sketch.</desc>
<path class="st0" d="M685.6,38.8C418.7-11.1,170.2,9.9,0,30v96h1440V30C1252.7,52.2,1010,99.4,685.6,38.8z"/>
</svg>
```

```css
.element {
    background-image: url(https://bitbucket-marketing-cdn.atlassian.com/dam/jcr:cd01b96d-381e-49ab-a487-c7d1df92cf59/atlassian%20wave%20adg30524.svg?cdnVersion=jh);
    background-position: center bottom;
    background-size: 1440px 126px;
    background-repeat: repeat-x;
}
```
