
function debounce(cb, interval = 500) {
    let timer;
    return function() {
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
            cb(...arguments)
        }, interval);
    }
}

function throttle(cb, interval = 500) {
    let cbSwitch = true;
    return function() {
        if (cbSwitch) {
            cbSwitch = false;
            cb(...arguments)
            setTimeout(() => {
                cbSwitch = true;
            }, interval);
        }

    }
}



var foo = () => console.log('foooooo ~~~~~~~~~')
// var deFoo = debounce(foo, 1500)
var deFoo = throttle(foo, 1500)