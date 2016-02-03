'use strict';

module.exports = function mapBuffer (buffer, fn) {
    if (!Buffer.isBuffer(buffer)) {
      throw new TypeError(`Parameter buffer must be a Buffer not a ${typeof buffer}`);
    }

    if (!(fn instanceof Function)) {
      throw new TypeError(`${fn} is not a function`);
    }

    let new_buf = new Buffer(buffer.length);

    buffer.forEach((b, index) => {
      new_buf[index] = fn(b, index, buffer);
    }); 

    return new_buf;
}
