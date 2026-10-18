type MemoizedFn<T> = (...args: any[]) => T;

class TrieNode<T> {
  hasValue = false;
  value?: T;
  children = new Map<any, TrieNode<T>>();
}

function memoize<T>(fn: (...args: any[]) => T): MemoizedFn<T> {
  const root = new TrieNode<T>();

  return function(this: any, ...args: any[]): T {
    let currentNode = root;

    for (let i = 0; i < args.length; i++) {
      const arg = args[i];
      let childNode = currentNode.children.get(arg);
      
      if (!childNode) {
        childNode = new TrieNode<T>();
        currentNode.children.set(arg, childNode);
      }
      currentNode = childNode;
    }

    if (!currentNode.hasValue) {
      currentNode.value = fn.apply(this, args);
      currentNode.hasValue = true;
    }

    return currentNode.value as T;
  };
}
