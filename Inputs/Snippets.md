# Input Snippets & Reusable Components

#### __Pseudo-Validating Input__
- The input has a base border color, then changes to red when the input is in focus, then changes to green when the input requirement is met.

```html 
<input type="text" required/>
```
```css
/* Base style */
input[type="text"]{
  width: 100%;
  height: 2.5rem;
  border: 1px solid #8a5cea;
  border-radius: .3rem;
  outline: none;
  padding: .3rem;
  margin-bottom: 2rem;
}
/* Styling the placeholder text */
input[type="text"]::placeholder {
  font-weight: 100;
  color: #aaa;
}
/* Set the border to red when the input is focused */
input[type="text"]:invalid:focus {
  border: 1px solid #d7263d;
}
/* Change the border to green when the input's requirement is met */
input[type="text"]:valid {
  border: 1px solid #61E294;
}
```
