function component(){
    var element = document.createElement('div')
    element.innerHTML = 'Hello,Webpack。justdoit'
    return element
}

document.body.appendChild(component())