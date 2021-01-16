// 排序方法，但是不适宜数字太大，时间复杂度太高
export function lazySort(list, callback) {
    let results = []
    list.forEach(i => {
        let sort=setTimeout(() => {
            results.push(i)
            clearTimeout(sort)
            if (results.length === list.length) {
                if(typeof callback==='function'){
                    callback(results)
                }else{
                    console.log(results)
                }
            }
        },i)
    })
}