var lights2 = document.getElementById('c2')
lights2.addEventListener('mouseover', ()=>{
    lights2.style.backgroundColor = 'orange'
}) 

function go() {
    var of1 = document.getElementById('c1')
    var of2 = document.getElementById('c2')
    var on3 = document.getElementById('c3')
    of1.style.backgroundColor = 'transparent'
    of2.style.backgroundColor = 'transparent'
    on3.style.backgroundColor = 'green'

}

function reset() {
    var a = document.getElementById('c1')
    var b = document.getElementById('c2')
    var c = document.getElementById('c3')
    a.style.backgroundColor = 'red'
    b.style.backgroundColor = 'transparent'
    c.style.backgroundColor = 'transparent'
}


