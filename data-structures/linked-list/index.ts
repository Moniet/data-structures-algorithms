export interface LLNode {
  next: null | LLNode
  data: null | number | string | boolean
}

class LinkedListNode {
  next: null | LLNode
  data: null | number | string | boolean

  constructor(data = null) {
    this.next = null
    this.data = data
  }
}

class LinkedList {
  head: null | LLNode

  constructor() {
    this.head = null
  }

  append = (data: any) => {
    const node = new LinkedListNode(data)

    if (!this.head) {
      this.head = node
      return
    }

    let currentNode: LLNode = this.head

    while (currentNode.next !== null) {
      currentNode = currentNode.next
    }

    currentNode.next = node
  }

  prepend = (data: any) => {
    if (!data) return null

    const node = new LinkedListNode(data)
    node.next = this.head
    this.head = node
  }

  deleteNode = (data: any) => {
    if (!this.head) return null
    let currentNode = this.head

    while (currentNode.next) {
      if (this.head?.data === data) {
        this.head = this.head?.next
        return null
      }

      if (currentNode.next?.data === data) {
        currentNode.next = currentNode.next.next
      }

      currentNode == currentNode.next
    }
  }
}

export default LinkedList
