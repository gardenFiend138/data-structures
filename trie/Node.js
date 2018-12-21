class Node {
  constructor(value = '', isWord = false) {
    this.value = value.toLowerCase();
    this.isWord = isWord;
    this.edges = Array.from({ length: 26 });
  }

  addEdge(node) {
    const index = this.getIndex(node.value);
    if (!this.edges[index]) {
      this.edges[index] = node;
    }
  }

  hasEdge(char) {
    const index = this.getIndex(char);
    return !!this.edges[index];
  }

  getIndex(char) {
    return char.toLowerCase().charCodeAt(0) - 97;
  }
}

module.exports = Node;

/*
const rootNode = new Node();
const aNode = new Node('a');
const nNode = new Node('n');
const tNode = new Node('t', true);
rootNode.addEdge(aNode);
aNode.addEdge(nNode);
nNode.addEdge(tNode);
console.log('root', rootNode);
console.log('aNode', aNode);
console.log('nNode', nNode);
console.log('tNode', tNode);
*/
