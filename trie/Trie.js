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
    let currentPath = [];

    while (currentNode) {

      for (let node of currentNode.edges) {
        if (node instanceof Node) {
          stack.push(node);
        }
      }
      currentNode = stack.pop();

      if (currentNode) {
        currentWord += currentNode.value;

        if (currentNode.isWord) {
          allWords.push(currentWord);
          currentWord = '';
        } else {
          currentPath.push(currentNode);
        }
      }
      if (currentPath.length) {
        currentNode = currentPath.pop();
      }
    }

    return allWords;
  }
}

const trie = new Trie();
trie.addWord('dot');
trie.addWord('bat');
trie.addWord('ant');
trie.addWord('zoo');
trie.addWord('any');
console.log(trie.hasWord('dot'));
console.log(trie.hasWord('bat'));
console.log(trie.hasWord('ant'));
console.log(trie.hasWord('zoo'));
console.log(trie.printAllWords());
