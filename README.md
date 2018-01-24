# ES TML
Render html ES6 way :)  
[![npm package](https://img.shields.io/npm/v/estml.svg?maxAge=2592000)](https://www.npmjs.com/package/estml)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install
```bash
npm i estml
```
## Usage
```js
const T = require('estml')
```
### Simple tag with no attribute
```js
T('br')
```
`toString` result
```html
<br>
```
### Simple tag with attribute
```js
T('span', {class: 'foo'})
```
`toString` result
```html
<span class="foo"></span>
```

### Simple tag with inner html
```js
T('h1')`TITLE!`
```
result
```html
<h1>TITLE!</h1>
```

### Self closing tag
```js
T('foo-component/')
```
`toString` result
```html
<foo-component/>
```

### Mixed example
```js
T('div')`
  ${T('input', {type: 'text', class: 'foo'})}
  Foo Text${T('br')}
  ${T('div')`
    inside div
    ${T('foo-component/')}
  `}
`
```
result
```html
<div>
  <input type="text" class="foo">
  Foo Text<br>
  <div>
    inside div
    <foo-component/>
  </div>
</div>
```

## What is the benefit of using this?
### Nothing.
Just read the code and have fun :)