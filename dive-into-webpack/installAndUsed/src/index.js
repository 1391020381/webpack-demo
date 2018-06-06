import './style.css'
import timg from './timg.jpg'
import u from './u=3532743473,184108530&fm=200&gp=0.jpg'
function component(){
    var element = document.createElement('div')
    element.innerHTML = 'Hello,Webpack。justdoit,build with npm srcipt'
    element.classList.add('hello')
    var myTimg = new Image()
    myTimg.src = timg
    element.appendChild(myTimg)
    var myU = new Image()
    myU.src = u
    element.appendChild(myU)
    return element
}

document.body.appendChild(component())