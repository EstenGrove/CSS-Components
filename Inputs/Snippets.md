# Input Snippets & Reusable Components

### __Pseudo-Validating Input__
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
### __Basic Validating Login Form__
```html
<form class="login-form">
  <h4 class="login-form__title">Contact Us</h4>
  <label for="username">Username</label>
  <input type="text" name="username" placeholder="Type your username or email..." required/>
  <label for="password">Password</label>
  <input type="text" name="password" placeholder="Type your password..." required/>
  <button class="btn">Submit</button>
</form>
```
```css
/* -- CSS Reset at the top -- */

*,
*::after, 
*::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html {
  font-size: 62.5%;
  font-family: 'Raleway';
}
/* -- Form -- */
.login-form {
  margin: 2rem auto;
  max-width: 35rem;
  height: 35rem;
  border: 1px solid #333;
  border-radius: 1rem;
  padding: 2rem 2rem;
  display: flex;
  flex-direction: column;
}
.login-form__title {
  font-size: 3rem;
  margin-bottom: 5rem;
}
label[for="username"],
label[for="password"] {
  font-size: 1.7rem;
}
/* "Input Validating" CSS */
input[type="text"]{
  width: 100%;
  height: 2.5rem;
  border: 1px solid #8a5cea;
  border-radius: .3rem;
  outline: none;
  padding: .3rem;
  margin-bottom: 2rem;
}
input[type="text"]:invalid:focus {
  border: 1px solid #d7263d;
}
input[type="text"]:valid {
  border: 1px solid #61E294;
}
input[type="text"]::placeholder {
  font-weight: 100;
  color: #aaa;
}

.btn {
  padding: .8rem 2rem;
  background: #8a5cea;
  color: #fff;
  font-family: 'Raleway';
  font-size: 1.4rem;
  border: none;
  outline: none;
  border-radius: .5rem;
}
.btn:hover {
  cursor: pointer;
}

```
