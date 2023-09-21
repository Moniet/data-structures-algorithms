export class BinaryTreeNode {
  left: BinaryTreeNode | null
  right: BinaryTreeNode | null
  value: number

  constructor(
    left: BinaryTreeNode | null,
    right: BinaryTreeNode | null,
    value: number
  ) {
    this.left = left
    this.right = right
    this.value = value
  }
}

export default class BinaryTree {
  root: BinaryTreeNode | null

  constructor() {
    this.root = null
  }

  insert(num: number) {
    const node = new BinaryTreeNode(null, null, num)

    if (this.root === null) {
      this.root = node
      return this
    }

    let nextNode: BinaryTreeNode = this.root

    while (true) {
      if (node.value > nextNode?.value && nextNode.right === null) {
        nextNode.right = node
        return this
      }

      if (node.value < nextNode?.value && nextNode.left === null) {
        nextNode.left = node
        return this
      }

      if (node.value > nextNode.value) {
        nextNode = nextNode.right as any
        continue
      }

      if (node.value < nextNode.value) {
        nextNode = nextNode.left as any
        continue
      }

      if (
        node.value > nextNode?.value &&
        nextNode.right &&
        node.value < nextNode.right?.value
      ) {
        let prevRight = nextNode.right
        node.right = prevRight
        nextNode.right = node
        return this
      }

      if (
        node.value < nextNode?.value &&
        nextNode.left &&
        node.value > nextNode.left?.value
      ) {
        let prevLeft = nextNode.left
        node.left = prevLeft
        nextNode.left = node
        return this
      }
    }
  }

  find(num: number): number | BinaryTreeNode {
    let currentNode = this.root

    while (true) {
      if (currentNode === null) {
        return -1
      }

      if (currentNode.value === num) {
        return currentNode
      }

      if (num > currentNode?.value) {
        currentNode = currentNode.right
      } else {
        currentNode = currentNode.left
      }
    }
  }
}
