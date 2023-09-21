import BinaryTree, { BinaryTreeNode } from "./binary-tree"

describe("Binary Tree", () => {
  it("Creates Root", () => {
    let tree = new BinaryTree()
    tree.insert(10)
    expect(tree.root?.value).toBe(10)
  })

  it("It inserts correctly", () => {
    let tree = new BinaryTree()
    tree.insert(10)
    tree.insert(14)
    tree.insert(13)
    tree.insert(15)
    tree.insert(8)
    tree.insert(4)

    expect(tree.root?.value).toBe(10)
    expect(tree.root?.left?.value).toBe(8)
    expect(tree.root?.left?.left?.value).toBe(4)
    expect(tree.root?.right?.value).toBe(14)
    expect(tree.root?.right?.left?.value).toBe(13)
    expect(tree.root?.right?.right?.value).toBe(15)
  })

  it("It finds correct node", () => {
    let tree = new BinaryTree()
    tree.insert(10)
    tree.insert(14)
    tree.insert(13)
    tree.insert(15)
    tree.insert(8)
    tree.insert(4)

    let foundNode = tree.find(14) as BinaryTreeNode
    expect(foundNode?.right?.value).toBe(15)
    expect(foundNode?.left?.value).toBe(13)
  })

  it("It throws error when not found", () => {
    let tree = new BinaryTree()
    tree.insert(10)
    tree.insert(14)
    tree.insert(13)
    tree.insert(15)
    tree.insert(8)
    tree.insert(4)

    let foundNode = tree.find(28) as number
    expect(foundNode).toBe(-1)
  })
})
