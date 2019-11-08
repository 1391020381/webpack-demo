// import 'babel-polyfill'

// es6
import sum from "./sum";


// commonjs
var minus = require('./minus')

// amd

require(['./muti'],function(muti){
  console.log('muti(2,3)=',muti(2,3))  
})

console.log('sum(23,24)=',sum(23,24))
console.log('minus(24-17)=',minus(24,17))
console.log(Object.assign({},{a:'justdoit'}))