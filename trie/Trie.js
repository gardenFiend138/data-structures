const Node = require('./Node.js');

class Trie {
  constructor() {
    this.root = new Node();
  }

  addWord(string) {
    let currentNode = this.root;

    for (let idx in string) {
      let char = string[idx];
      let isLastLetter = idx === string.length - 1;

      if (!currentNode.hasEdge(char)) {
        let node = new Node(char, isLastLetter);
        currentNode.addEdge(node);
      }
      
      currentNode = currentNode.edges[currentNode.getIndex(char)];
    }  
  }

  hasWord(string) {
    let currentNode = this.root;
    for (let char of string) {
      if (!currentNode.hasEdge(char)) {
        return false;
      }
      currentNode = currentNode.edges[currentNode.getIndex(char)];
    }

    return true;
  }
}

const trie = new Trie();
trie.addWord('word');
console.log(trie.hasWord('word'));
console.log(trie.hasWord('dog'));
trie.addWord('world');
console.log(trie.hasWord('word'));
console.log(trie.hasWord('world'));
