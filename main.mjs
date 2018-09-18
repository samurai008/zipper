import Zipper from './zipper.mjs';

function bt(value, left, right) {
  return {
    value: value,
    left: left,
    right: right
  };
}

function leaf(value) {
  return bt(value, null, null);
}

function printObj(obj) {
  return JSON.stringify(obj, null, 2);
}

const t1 = bt(1, bt(2, null, leaf(3)), leaf(4));
let zipper = Zipper.fromTree(t1);
console.log(printObj(zipper.left().setRight(null).toTree()))