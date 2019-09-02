# Dark Theme
Snippets and helpers for handling a dark theme.


### Media Queries for User Theme Preference

```scss
// dark theme preference
@media (prefers-color-scheme: dark){
  // some dark styles here...
}

// light theme preference
@media (prefers-color-scheme: light){
  // some light styles here...
}
```

### Dark Theme HTML Properties
```scss
html[data-theme='dark'] {
  // set colors for theme
}
```
