
/**
 * ## 问题2
 * 将一个json数据的所有key从下划线改为驼峰
 * @param {object | array} value 待处理对象或数组
 * @returns {object | array} 处理后的对象或数组
 */

 const testData = {
    a_bbb: 123,
    a_g: [1, 2, 3, 4],
    a_d: {
        s: 2,
        s_d: 3
    },
    a_f: [1, 2, 3, {
        a_g: 5
    }],
    a_d_s: 1
}

function mapKeysToCamelCase(data) {
    // TODO
    const walk = (node) => {
        if (Array.isArray(node)) {
            for (const child of node) {
                walk(child)  
            }
        } else if (typeof node === 'object') {
            for (const key of Object.keys(node)) {
                const words = key.split('_');
                const newKey = words
                    .map((str, index) => `${index === 0 ? str[0] : str[0].toUpperCase()}${str.slice(1, str.length)}`)
                    .join('')
                node[newKey] = node[key]
                if (newKey !== key) { delete node[key] }
                walk(node[newKey])
            }
        }
    }
    walk(data)
    return data
}

console.log(mapKeysToCamelCase(testData));
