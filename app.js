const deadline = 'November 2022 26 23:59'

console.log(deadline);

function getTime(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date()),
        hours = Math.round((t / (1000 * 60 * 60)) % 24),
        minutes = Math.round((t / 1000 / 60) % 60),
        seconds = Math.round((t / 1000) % 60);

    return {
        t,
        hours,
        minutes,
        seconds
    }
}

function setTime(selector, endtime) {
    const timer = document.querySelector(selector),
        hours = timer.querySelector('#hours'),
        minutes = timer.querySelector('#minutes'),
        seconds = timer.querySelector('#seconds'),
        updateInt = setInterval(updateTime, 1)


    function updateTime() {
        const t = getTime(endtime)

        hours.innerHTML = t.hours
        minutes.innerHTML = t.minutes
        seconds.innerHTML = t.seconds

        if (t.t <= 0) {
            clearInterval(updateInt)
        }
    }

}

setTime('.timer', deadline)




let grid4 = document.querySelector('.grid4')

for (let i = 0; i <= 7; i++) {
    let phone1 = document.createElement('div')
    let left = document.createElement('div')
    let right = document.createElement('div')
    let img = document.createElement('img')
    let p = document.createElement('p')
    let b = document.createElement('b')
    let btn = document.createElement('button')
    let span = document.createElement('span')
    let column = document.createElement('div')
    let magaz = document.createElement('span')
    let h3 = document.createElement('h3')
    let br = document.createElement('br')

    phone1.classList.add('phone1')
    btn.classList.add('buy')
    left.classList.add('left1')
    right.classList.add('right1')
    span.classList.add('material-symbols-outlined')
    span.classList.add('flex5')
    column.classList.add('column')
    magaz.classList.add('material-symbols-outlined')

    p.innerHTML = `Смартфон Realme GT  Master ${br} Edition 5G 6/128GB Daybreak blue`
    b.innerHTML = "3 960 000 сум"
    btn.innerHTML = "330 000 сум x 12 мес"
    span.innerHTML = "favorite"
    span.innerHTML = "signal_cellular_alt"
    magaz.innerHTML = "shopping_cart"
    h3.innerHTML = "В рассрочку"

    grid4.append(phone1)
    phone1.append(left, right, column)
    right.append(span)
    left.append(img)
    column.append(p, b, btn)
    phone1.append(magaz, h3)
}