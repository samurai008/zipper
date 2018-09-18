export default class Zipper {
  constructor(tree) {
    this.tree = tree;
  }

  static fromTree(tree) {
    Zipper.ogTree = tree;
    Zipper.hist = [];
    return new Zipper(Zipper.ogTree);
  }

  toTree() {
    return Zipper.ogTree;
  }

  left() {
    Zipper.hist.push(this.tree)
    return this.tree.left != null ? new Zipper(this.tree.left) : null;
  }

  right() {
    Zipper.hist.push(this.tree)
    return this.tree.right != null ? new Zipper(this.tree.right) : null;
  }

  up() {
    if (Zipper.hist.length == 0) {
      return null;
    }
    return new Zipper(Zipper.hist.pop());
  }

  setValue(v) {
    this.tree.value = v;
    return new Zipper(this.tree);
  }

  setLeft(_tree) {
    this.tree.left = _tree;
    return new Zipper(this.tree);
  }

  setRight(_tree) {
    this.tree.right = _tree;
    return new Zipper(this.tree);
  }

  value() {
    return this.tree.value;
  }

  printObj(obj) {
    return JSON.stringify(obj, null, 2);
  }
}

