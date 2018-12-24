const _ = require('./underscore')


// _.each()
_.each([1, 2, 3], console.log);

_.each({one:1,two:2},console.log)

// _.map()
_.map([4,5,6],function(item,i,list){
    console.log(item)
})
_.map({three:3,four:4},function(val,key,list){
    console.log(val)
})

// _.reduce()
console.log('-------------reduce-------------')
let sum=_.reduce([5,6,7,8],function(memo,val,index,list){
    return memo+val
},2)
console.log(sum)

// _.reduceRight
console.log('-------------reduceRight-------------')
let arr=_.reduceRight([3,4,5,6,[0,5,6]],function(a,b){
    return a.concat(b)
},[])
console.log(arr)