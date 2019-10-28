
export default 'pageA'
import './subPageB'
import './subPageA'
// import * as _ from 'lodash'


var page  = 'subPageA'
if(page === 'subPageA'){
   require.ensure(['./subPageA'],function(){
       var subpageA = require('./subPageA')
   },'subPageA') 
}else if(page === 'subPageB'){
    require.ensure(['./subPageA','./subPageB'],function(){
        var subPageA= require('./subPageA')
        var subPageB= require('./subPageB')
    },'subPage') 
}


// if(page === 'subpageA'){
//     import(/* webpackChunkName:'subpageA' */'./subPageA').then(function(subPageA){   

//     })
// }