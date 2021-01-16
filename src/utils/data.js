export function postData(){
    const count=Math.floor(Math.random()*100)
    let dataAry=[]
    for(let i=0;i<count;i++){
        let name=String.fromCharCode(Math.floor(Math.random()*65000))
        let age =Math.floor(Math.random()*99)
        dataAry.push({name,age})
    }
    return dataAry
}