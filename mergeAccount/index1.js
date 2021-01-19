/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function(accounts) {
  // * 极端情况处理
  /**
   * 图，一个用户是一个 vertice，存在相同邮箱的用户之间存在 edge
   * 每个联通分量内的所有用户合并为一个
   */
  // * 邻接矩阵
  const relations = {}; // accountIndex -> accountIndex[]
  // 是否能提高性能？
  for (const [i, [name ,...account0]] of accounts.entries()) {
    for (const [j, [name ,...account1]] of accounts.entries()) {
      if (i !== j && account1.find(mail => account0.includes(mail))) {
          // console.log(account0, account1)
          Array.isArray(relations[i]) ?
            relations[i].push(j) :
            relations[i] = [j];
      }
    }
  }
  // console.log('relations', relations)

  // dfs
  const mergeAction = {}; // entranceIndex -> mergedIndex[]
  const accountIndexTouched = new Set(); // Set<accountIndex>
  function depthFirst(accountIndex, mergedIndexList) { // 
    // console.log('accountIndex', accountIndex)
    accountIndexTouched.add(accountIndex);
    mergedIndexList.push(accountIndex);
    if (!Array.isArray(relations[accountIndex])) return;
    for (const accountIndex2merge of relations[accountIndex]) {
      // console.log('accountIndex2merge', accountIndex2merge)
      if (!accountIndexTouched.has(accountIndex2merge)) {
        // console.log('')
        depthFirst(accountIndex2merge, mergedIndexList)
      }
    }
  }

  for (let i = 0; i < accounts.length; i++) {
    // accountIndexTouched.add(i); // 对于每个联通分量 先加一个点作为保留的点
    if (!accountIndexTouched.has(i)) {
      mergeAction[i] = [];
      depthFirst(i, mergeAction[i]);
    }
  }
  // console.log('mergeAction', mergeAction)

  return Object.keys(mergeAction).reduce((arr, entranceIndex) => {
    const mergedIndexList = mergeAction[entranceIndex];
    let allMail = [];
    for (const mergedIndex of mergedIndexList) {
      allMail = allMail.concat(accounts[mergedIndex].slice(1));
    }
    arr.push([
      accounts[entranceIndex][0],
      ...Array.from(new Set(allMail)).sort()
    ])
    return arr;
  }, [])
};

// const arr = [1,2,5,9,5,9,5,5,5];
// const arr = [
//   ["John", "johnsmith@mail.com", "john00@mail.com"],
//   ["John", "johnnybravo@mail.com"],
//   ["John", "johnsmith@mail.com", "john_newyork@mail.com"],
//   ["Mary", "mary@mail.com"],
// ];
const arr = [
  ["John", "johnsmith@mail.com", "john00@mail.com"],
  ["John", "johnnybravo@mail.com"],
  ["John", "johnsmith@mail.com", "john_newyork@mail.com"],
  ["Mary", "mary@mail.com", "john00@mail.com"],
];
const res = accountsMerge(arr);

console.log('res', res)
