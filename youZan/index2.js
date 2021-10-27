
/**
 * ## 问题3
 * 将48位的时间位图格式化成字符串
 * 要求：写一个函数timeBitmapToRanges，将下述规则描述的时间位图转换成一个选中时间区间的数组。
 * 
 * 规则描述：
 * 将一天24小时按每半小划分成48段，我们用一个位图表示选中的时间区间，例如`110000000000000000000000000000000000000000000000`，
 * 表示第一个半小时和第二个半小时被选中了，其余时间段都没有被选中，也就是对应00:00~01:00这个时间区间。一个位图中可能有多个不连续的
 * 时间区间被选中，例如`110010000000000000000000000000000000000000000000`，表示00:00-1:00和02:00-02:30这两个时间区间被选中了。
 * 
 * 示例输入：`"110010000000000000000000000000000000000000000000"`
 * 示例输出：`["00:00~01:00", "02:00~02:30"]`
 */
 function timeBitmapToRanges(bitmap) {
    // TODO
    /**
     * 得到区间 spanList = [[0, 1], [7, 10], ...]
     *      let currSpan = []
     *      let currIndex = 0
     *      let inSpan = false
     *      while (currIndex <= bitmap.length) {
     *          if (spanList[currIndex] === 1) {
     *              
     *              inSpan = true
     *          } else { inSpan = true }
     *      }
     * for (arr of spanList) {
     *      
     * }
     */
    const bitList = bitmap.split('')

    const spanList = bitList.reduce((result, value, index) => {
        if (value !== '1') return result;
        if (!result[0]) {
            result[0] = [index];
            return result
        }

        // 记错: value[index - 1
        if (bitList[index - 1] === '1') {
            const lastSpan = result[result.length - 1];
            lastSpan[1] = index;
        } else {
            result.push([index])
        }
        return result
    }, []);
    console.log('spanList', spanList)
}

console.log(timeBitmapToRanges('111010000000000000000000000000000000000000000011'));