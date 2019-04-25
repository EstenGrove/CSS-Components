# List of Input Tag Snippets

### __Useful Input Attributes__
- ```selected```
- ```valid```
- ```invalid```
- ```checked```
- ```focus```
- ```focus-within```

#### __List of Input Types__
- button
  - An alternate way of doing buttons, using an input.
  - ``` <input type="button" /> ```
- text
  - A standard text input that accepts any time of string.
  - ``` <input type="text" /> ```
- checkbox
  - A square input with a checkmark selection option.
  - ``` <input type="checkbox" /> ```
- color
  - ``` <input type="color" /> ```
- date 
  - ``` <input type="date" /> ```
- datetime-local
  - ``` <input type="datetime-local" /> ```
- email 
  - ``` <input type="email" /> ```
- password
  - ``` <input type="password" /> ```
- file
  - An input that accepts a file as an input, for uploading.
  - ``` <input type="file" /> ```
- hidden
  - ``` <input type="hidden" /> ```
- image 
  - ``` <input type="image" /> ```
- month
  - ``` <input type="month" /> ```
- number
  - A numerical input that doesn't allow text, only numbers.
  - ``` <input type="number" /> ```
- radio
  - Round clickable button, similar to a checkbox.
  - ``` <input type="radio" /> ```
  - __Attributes:__
    - autofocus
    - defaultChecked
      - returns the default value of the 'checked' attribute
    - checked
      - sets the 'checked' value
    - disabled
    - form
      - returns a reference to the form that contains the radio input
    - required
    - value
      - just the value attribute
- range
  - An input that provides a range that is set with the ```min``` and ```max``` attributes.
  - ``` <input type="range" /> ```
- reset
  - A reset input is simply a "reset button" that will reset all inputs in a form upon click.
  - ``` <input type="reset" /> ```
- search
  - ``` <input type="search" /> ```
- submit
  - A basic button that's used for submitting a form.
  - ``` <input type="submit" /> ```
- tel
  - ``` <input type="tel" /> ```
- time  
  - ``` <input type="time" /> ```
- url
  - ``` <input type="url" /> ```
- week
  - ``` <input type="week" /> ```

### __Alternate Input Tags__

#### __Select Dropdown__
- ```selected``` attribute: defines a selection from the user. Also, used for handling default selections.
- ```size``` attribute: defines the number of options that are shown to the user, even if there's more.
- ```mulitple``` attribute: allows for multiple selections.
```html
<select name="categories" size="3" multiple>
  <option value="Phones" selected>Phones</option>
  <option value="Tablets">Tablets</option>
  <option value="Laptops">Laptops</option>
  <option value="Accessories">Accessories</option>
</select>
```  
#### __Datalist Tag__
- The ```datalist``` tag allows you to provide a dropdown list of data options, to be used in conjunction with an input typically.
```html
<datalist>
  <option value="Phones" selected>Phones</option>
  <option value="Tablets">Tablets</option>
  <option value="Laptops">Laptops</option>
  <option value="Accessories">Accessories</option>
</datalist>
```
#### __Color Input Tag__
- The color input tag allows you to create a color picker option for the user, in the browser.
```html
<input type="color" />
```
#### __Date Input__
- Date input allows for user input in the form of __mm/dd/yy__
#### __Datetime-Local Input__
- Similar to the date input but it allows the user to define a time of day as well: __mm/dd/yy hh:mm:ss__
