/**
 * @param {string[]} teams 目前还剩多少队伍没有参与组合
 * @param {string[]} result 保存当前已经组合的队伍 */
function combine(teams, result, m) {
    // 避免多余计算
    if (teams.length + result.length < m) return;
    
    if (result.length === m) {
        console.log(result, '\n')
        return
    }
    for (let i = 0; i < teams.length; i++) {
        const newResult = [...result, teams[i]];
        // 为了避免重复 i前面的都去掉
        const restTeams = teams.slice(i + 1);
        combine(restTeams, newResult, m);
    }
}

combine([
    'a',
    'b',
    'c'
], [], 2)