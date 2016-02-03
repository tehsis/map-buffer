'use strict';

const assert = require('assert');
const mapBuffer = require('../');


function test_map () {
  const buf = new Buffer([0x62, 0x75, 0x66, 0x66, 0x65, 0x72]);
  const negated_buffer = new Buffer([0x9d, 0x8a, 0x99 ,0x99, 0x9a, 0x8d]);

  let i = 0;

  const new_buf = mapBuffer(buf, (value, index, org_buffer) => {
    assert.ok(value === org_buffer[index]);
    assert.ok(index == i);
    assert.ok(buf.compare(org_buffer) === 0);

    i++;

    return ~value;
  });

  assert.ok(new_buf.compare(negated_buffer) === 0);

  process.stdout.write(' ✓ Maps works\n');
}

function test_first_argument () {
  try {
    mapBuffer('');
  } catch (e) {
    assert.ok(/string/.test(e.message));
  }

  process.stdout.write(' ✓ First Argument must be a Buffer\n');
}

function test_second_argument () {
  const buf = new Buffer([0x62,0x75,0x66,0x66,0x65,0x72]);

  try {
    mapBuffer(buf, '');
  } catch (e) {
    assert.ok(/function/.test(e.message));
  }

  process.stdout.write(' ✓ Second Argument must be a function\n');
}

test_map();
test_first_argument();
test_second_argument();



