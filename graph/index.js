const { Dictionary } = require('./dictionary.js')

const { Queue } = require('./queue.js')

class Graph{
  constructor(){
    this.vertices = []; // 顶点
    this.adjList = new Dictionary(); // 邻接矩阵 vertice:string -> string[]
  }
  addVertex(v){
    console.log(this.adjList.toString())
    this.vertices.push(v);
    this.adjList.set(v, []);
  }
  addEdge(v, w){
    // 无向图
    console.log(`\nadd edge ${v} and ${w}`)
    this.adjList.get(v).push(w);
    this.adjList.get(w).push(v);
  }

  addVectorEdge(v, w){
    // 有向图
    console.log(`\nadd edge ${v} -> ${w}`)
    this.adjList.get(v).push(w);
  }
  toString(){
    let s = '';
    for(const vertice of this.vertices){
      s += vertice + ' -> ';
      const nerghbors = this.adjList.get(vertice);
      for(const nerghbor of nerghbors){
        s += nerghbor + ' '
      }
      s += '\n';
    }
    return s
  }
  initializeColor(){
    const color = {};
    for(const vertice of this.vertices){
      color[vertice] = 'white';
    }
    return color
  }
  /** breadth first search
   * @param  {string} v
   * @param  {function} callback
   * @var {{vName: 'white'|'grey'|'black'}} color
   * 一次染色往往伴随一次操作(入队white>grey|出队grey>black|callback)出现
   * white-从未被触及 grey-被探索放入队列，未操作 black-出队并已操作
   */
  bfs(v, callback){
    const vertice2color = this.initializeColor();
    const vQueue = [v]; // 广度优先 编排
    const distances = { [v]: 0 };
    const predecessors = {};

    while (vQueue.length) {
      const currV = vQueue.shift();
      vertice2color[currV] = 'black';
      if (typeof callback === 'function') { // 历
        callback(currV);
      }

      const adjListOfV = this.adjList.get(currV);

      for (const adjVertice of adjListOfV) {
        if (vertice2color[adjVertice] === 'white') {
          vQueue.push(adjVertice);
          vertice2color[adjVertice] = 'grey';
          predecessors[adjVertice] = currV;
          console.log('adjVertice:', adjVertice, ' currV:', currV)
          distances[adjVertice] = distances[currV] + 1;
        }
      }
    }

    return {
      distances,
      predecessors,
    }
  }

  // dfs(callback) { // 自己写的原始版本
  //   const vertice2color = this.initializeColor();
  //   let time = 0;
  //   const discovery = [];
  //   const finished = [];
  //   const predecessors = [];

  //   const walk = (vertice, callback) => {
  //     if (vertice2color[vertice] === 'white') {
  //       typeof callback === 'function' && callback(vertice); // 历
  //       vertice2color[vertice] = 'black'; // 标记2
  //       predecessors.push(vertice)
  //       // vertice2color[vertice] = 'black'; // 标记1

  //       const adjListOfV = this.adjList.get(vertice);
  //       for (const adjVertice of adjListOfV) {
  //         // 也可以在这里判断 颜色
  //         walk(adjVertice, callback)
  //       }

  //     }
  //   }
  //   for (const vertice of this.vertices) {
  //     walk(vertice, callback);
  //   }

  //   return {
  //     discovery,
  //     finished,
  //     predecessors,
  //   }
  // }
  dfs(callback) { // 深度优先
    const vertice2color = this.initializeColor();
    let time = 0;
    const discoveryTimes = {};
    const finishedTimes = {};
    const predecessors = {};

    const walk = (vertice, callback) => {
      vertice2color[vertice] = 'grey';
      discoveryTimes[vertice] = ++time;

      typeof callback === 'function' && callback(vertice); // 历

      const adjListOfV = this.adjList.get(vertice);
      for (const adjVertice of adjListOfV) {
        if (vertice2color[adjVertice] === 'white') {
          predecessors[adjVertice] = vertice;
          walk(adjVertice, callback)
        }
      }

      vertice2color[vertice] = 'black'; // 标记2
      finishedTimes[vertice] = ++time;
    }

    
    for (const vertice of this.vertices) {
      discoveryTimes[vertice] = 0;
      finishedTimes[vertice] = 0;
      predecessors[vertice] = null;
    }

    for (const vertice of this.vertices) {
      if (vertice2color[vertice] === 'white') walk(vertice, callback);
    }

    return {
      discoveryTimes,
      finishedTimes,
      predecessors,
    }
  }

  getShortestPath(startVertice, endVertice) {
    const { predecessors } = this.bfs(endVertice);
    let currVertice = startVertice;
    let backPath = [startVertice];
    while (currVertice) {
      currVertice = predecessors[currVertice];
      currVertice && backPath.push(currVertice);
    }
    return backPath.join(' >> ')
  }
}

const graph = new Graph();
const myVertices = ['A','B','C','D','E','F' /* ,'G','H','I'*/ ];
for(const vertice of myVertices){
  // console.log(vertice)
  graph.addVertex(vertice)
}

/** g1 */
// graph.addEdge('A', 'B');
// graph.addEdge('A', 'C');
// graph.addEdge('A', 'D');
// graph.addEdge('C', 'D');
// graph.addEdge('C', 'G');
// graph.addEdge('D', 'G');
// graph.addEdge('D', 'H');
// graph.addEdge('B', 'E');
// graph.addEdge('B', 'F');
// graph.addEdge('E', 'I');

/** g2 */
graph.addVectorEdge('A', 'C');
graph.addVectorEdge('A', 'D');
graph.addVectorEdge('B', 'D');
graph.addVectorEdge('B', 'E');
graph.addVectorEdge('C', 'F');
graph.addVectorEdge('F', 'E');

console.log(graph.toString())

// graph.bfs(myVertices[0], v => console.log('Visited vertex: ' + v))
// const shortestPathA = graph.bfs(myVertices[0], v => console.log('------', v))
// const shortestPathA = graph.bfs('C')
// console.log(shortestPathA)
// const path = graph.getShortestPath('I', 'A')
const path = graph.dfs('A', vertice => console.log(vertice))
console.log('path', path)