const { Dictionary } = require('./dictionary.js')
const { Queue } = require('./queue.js')

class Graph{
  constructor(){
    this.vertices = []; // 顶点
    this.adjList = new Dictionary(); // 邻接矩阵
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
    const color = this.initializeColor(), // all vertices are white at beginning
    queue = new Queue(),
    d = {},
    pred = {};
    queue.enqueue(v);

    for(const vertice of this.vertices){
      d[vertice] = 0;
      pred[vertice] = null;
    }

    while(!queue.isEmpty()){
      /** 出队一个vertice u 染色为grey */
      const
        u = queue.dequeue(), // first in, first out
        neighbors = this.adjList.get(u);
      color[u] = 'grey';
      /** u的white的neighbors入队,染色为grey,防止重复入队 */
      for(const w of neighbors){
        if(color[w] === 'white'){
          color[w] = 'grey';
          queue.enqueue(w);
        }
      }
      /** 操作u,染色为black */
      color[u] = 'black';
      callback && callback(u)
    }
  }
}

const graph = new Graph();
const myVertices = ['A','B','C','D','E','F','G','H','I'];
for(const vertice of myVertices){
  // console.log(vertice)
  graph.addVertex(vertice)
}

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('E', 'I');

console.log(graph.toString())

graph.bfs(myVertices[0], v => console.log('Visited vertex: ' + v))