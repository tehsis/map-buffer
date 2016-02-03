# map-buffer

Creates a new Buffer with the results of calling a provided function on every element in this Buffer (ie. like Array.prototype.map but for buffers).

## Usage example

```js
const mapBuffer = require('map-buffer');

const buf = new Buffer([0x62,0x75,0x66,0x66,0x65,0x72]);

const new_buf = mapBuffer(buf, (value, index, original_buffer) => {
  return value === 0x62 ? 0x75 : value;
});

console.log(new_buf); // <Buffer 75 75 66 66 65 72>
```
