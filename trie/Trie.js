const Node = require('./Node.js');

class Trie {
  constructor() {
    this.root = new Node();
  }

  addWord(string) {
    let currentNode = this.root;

    for (let i = 0; i < string.length; i++) {
      let char = string[i];
      let isLastLetter = i === string.length - 1;
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

  printAllWords() {
    const allWords = [];
    let currentNode = this.root;
    let previousNode;
    let currentWord = '';
    let stack = [];
    let prevNode;

    while (currentNode) {

      for (let node of currentNode.edges) {
        if (node instanceof Node && !node.visited) {
          node.visited = true;
          stack.push(node);
        }
      }
      prevNode = currentNode;
      currentNode = stack.pop();

      if (currentNode) {
        currentWord += currentNode.value;
        if (currentNode.isWord) {
          allWords.push(currentWord);
          currentWord = '';
          currentNode = prevNode;
        }
      }
    }

    return allWords;
  }
}

const trie = new Trie();
trie.addWord('word');
console.log(trie.hasWord('word'));
console.log(trie.hasWord('dog'));
trie.addWord('world');
console.log(trie.hasWord('word'));
console.log(trie.hasWord('world'));
console.log(trie.printAllWords());
