class Node {
  constructor(value = '', isWord = false) {
    this.value = value.toLowerCase();
    this.isWord = isWord;
    this.edges = Array.from({ length: 26 });
  }

  addEdge(node) {
    const index = node.value.charCodeAt(0) - 65;
    if (!this.edges[index]) {
      this.edges[index] = node;
    }
  }
}
