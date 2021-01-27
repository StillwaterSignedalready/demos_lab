/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function (accounts) {
  /**
   * 一个邮箱对应一个 vertice
   * 一个账户对应一个联通分量
   */
  const emailToIndex = new Map();
  const emailToName = new Map();
  let emailsCount = 0;
  for (const account of accounts) {
    const name = account[0];
    const size = account.length;
    for (let i = 1; i < size; i++) {
      const email = account[i];
      if (!emailToIndex.has(email)) {
        emailToIndex.set(email, emailsCount++);
        emailToName.set(email, name);
      }
    }
  }

  const uf = new UnionDisJointSet(emailsCount);
  for (const account of accounts) {
    const firstEmail = account[1];
    const firstIndex = emailToIndex.get(firstEmail);
    const size = account.length;
    for (let i = 2; i < size; i++) {
      const nextEmail = account[i];
      const nextIndex = emailToIndex.get(nextEmail);
      uf.merge(firstIndex, nextIndex);
    }
  }


  const indexToEmails = new Map();
  for (const email of emailToIndex.keys()) {
    const index = uf.findSet(emailToIndex.get(email));
    const account = indexToEmails.get(index) ? indexToEmails.get(index) : [];
    account.push(email);
    indexToEmails.set(index, account);
  }
  const merged = [];
  for (const emails of indexToEmails.values()) {
    emails.sort();
    const name = emailToName.get(emails[0]);
    const account = [];
    account.push(name);
    account.push(...emails);
    merged.push(account);
  }
  return merged;
};

class UnionDisJointSet {
  constructor(verticeCount) {
    this.parent = Array(verticeCount).fill(null).map((foo, index) => index); // index or -1
  }

  merge(index1, index2) {
    // 路径压缩
    // this.parent[this.findSet(index1)] = this.findSet(index2);
    this.parent[this.findSet(index1)] = this.findSet(index2);
  }
  /**
   * @returns {number} index
   */
  findSet(index) {
    if (index !== this.parent[index]) {
      this.parent[index] = this.findSet(this.parent[index]); // 路径压缩
    };
    return this.parent[index];
  }

}

// const arr = [1,2,5,9,5,9,5,5,5];
// const arr = [
//   ["John", "johnsmith@mail.com", "john00@mail.com"],
//   ["John", "johnnybravo@mail.com"],
//   ["John", "johnsmith@mail.com", "john_newyork@mail.com"],
//   ["Mary", "mary@mail.com"],
// ];
const arr = [
  [
    "David",
    "David0@m.co",
    "David0@m.co",
    "David1@m.co",
    "David2@m.co",
    "David3@m.co",
    "David4@m.co",
    "David5@m.co",
    "David6@m.co",
    "David7@m.co"
  ],
  [
    "David",
    "David0@m.co",
    "David0@m.co",
    "David1@m.co",
    "David2@m.co",
    "David3@m.co",
    "David4@m.co",
    "David5@m.co",
    "David6@m.co",
    "David7@m.co"
  ],
  [
    "David",
    "David2@m.co",
    "David18@m.co",
    "David19@m.co",
    "David20@m.co",
    "David21@m.co",
    "David22@m.co",
    "David23@m.co",
    "David24@m.co",
    "David25@m.co"
  ],
  [
    "David",
    "David3@m.co",
    "David27@m.co",
    "David28@m.co",
    "David29@m.co",
    "David30@m.co",
    "David31@m.co",
    "David32@m.co",
    "David33@m.co",
    "David34@m.co"
  ],
  [
    "David",
    "David1@m.co",
    "David9@m.co",
    "David10@m.co",
    "David11@m.co",
    "David12@m.co",
    "David13@m.co",
    "David14@m.co",
    "David15@m.co",
    "David16@m.co"
  ]
]
// const arr = [
//   ["John", "johnsmith@mail.com", "john00@mail.com"],
//   ["John", "johnnybravo@mail.com"],
//   ["John", "johnsmith@mail.com", "john_newyork@mail.com"],
//   ["Mary", "mary@mail.com", "john00@mail.com"],
// ];
const res = accountsMerge(arr);

console.log('res', res)
