# Upload File Form

## HTML Markup

```html
<section class="wrapper">
    <form action="">
      <label for="filename">Save the file as...</label>
      <input type="text" name="filename" id="filename" placeholder="Create a filename...">
      <label for="folder">Pick a file path...</label>
      <input type="text" name="folder" id="folder" placeholder="Create a folder name...">
      <label for="desc">Description</label>
      <textarea name="desc" id="desc" placeholder="Add a description..."></textarea>
      <input type="file" name="fileUpload" id="fileUpload">
      <button class="btn" id="initUpload">Upload File</button>
    </form>
  </section>
```

## CSS Styles

```css
.wrapper {
    display: block;
    margin: 3rem auto;
    width: 35rem;
    height: 40rem;
    padding: 2rem 1rem;
    border-radius: .5rem;
    -webkit-box-shadow: 0px 1px 7px -1px rgba(0, 0, 0, 0.25);
    box-shadow: 0px 1px 7px -1px rgba(0, 0, 0, 0.25);
}

form {
    width: 100%;
    height: 100%;
    padding: 1rem;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
}

label {
    font-size: 1.4rem;
    font-weight: 300;
}

input[type="text"] {
    width: 100%;
    height: 3.5rem;
    background-color: #eaecef;
    font-size: 1.6rem;
    padding-left: .5rem;
    border: none;
    outline: none;
    border-radius: .5rem;
    margin-bottom: 2rem;
}

input[type="text"]::-webkit-input-placeholder,
textarea::-webkit-input-placeholder {
    font-weight: 300;
    opacity: .4;
}

input[type="text"]:-ms-input-placeholder,
textarea:-ms-input-placeholder {
    font-weight: 300;
    opacity: .4;
}

input[type="text"]::-ms-input-placeholder,
textarea::-ms-input-placeholder {
    font-weight: 300;
    opacity: .4;
}

input[type="text"]::placeholder,
textarea::placeholder {
    font-weight: 300;
    opacity: .4;
}

textarea {
    width: 100%;
    height: 10rem;
    padding: .5rem;
    border: none;
    font-size: 1.6rem;
    border-radius: .5rem;
    background-color: #eaecef;
    resize: none;
    margin-bottom: 2rem;
}

.btn {
    margin-top: 2rem;
    padding: 1.2rem 2.4rem;
    background-color: hsla(259, 77%, 64%, .4);
    color: hsla(259, 77%, 64%, 1);
    font-weight: 600;
    font-size: 1.5rem;
    border-radius: .5rem;
    border: none;
    outline: none;
}

.btn:hover {
    cursor: pointer;
    -webkit-box-shadow: 0px 1px 7px -1px rgba(0, 0, 0, 0.25);
    box-shadow: 0px 1px 7px -1px rgba(0, 0, 0, 0.25);
}
```
