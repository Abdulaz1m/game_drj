//передвижение в меню
const menu__chats = document.getElementById('menu__chats')
const menu__groups = document.getElementById('menu__groups')
const menu__status = document.getElementById('menu__status')
const menu__calls = document.getElementById('menu__calls')

menu__chats.addEventListener('click', function () {
    menu__chats.classList.add('menu__moving')
    menu__groups.classList.remove('menu__moving')
    menu__status.classList.remove('menu__moving')
    menu__calls.classList.remove('menu__moving')
    document.querySelector('.menu__line').classList.add('menu__line1')
    document.querySelector('.menu__line').classList.remove('menu__line2')
    document.querySelector('.menu__line').classList.remove('menu__line3')
    document.querySelector('.menu__line').classList.remove('menu__line4')
    document.querySelector('.whats__body1').classList.remove('whats__left')
})
menu__groups.addEventListener('click', function () {
    menu__chats.classList.remove('menu__moving')
    menu__groups.classList.add('menu__moving')
    menu__status.classList.remove('menu__moving')
    menu__calls.classList.remove('menu__moving')
    document.querySelector('.menu__line').classList.add('menu__line2')
    document.querySelector('.menu__line').classList.remove('menu__line1')
    document.querySelector('.menu__line').classList.remove('menu__line3')
    document.querySelector('.menu__line').classList.remove('menu__line4')
    document.querySelector('.whats__body1').classList.add('whats__left')
})
menu__status.addEventListener('click', function () {
    menu__chats.classList.remove('menu__moving')
    menu__groups.classList.remove('menu__moving')
    menu__status.classList.add('menu__moving')
    menu__calls.classList.remove('menu__moving')
    document.querySelector('.menu__line').classList.add('menu__line3')
    document.querySelector('.menu__line').classList.remove('menu__line1')
    document.querySelector('.menu__line').classList.remove('menu__line2')
    document.querySelector('.menu__line').classList.remove('menu__line4')
    document.querySelector('.whats__body1').classList.add('whats__left')
})
menu__calls.addEventListener('click', function () {
    menu__chats.classList.remove('menu__moving')
    menu__groups.classList.remove('menu__moving')
    menu__status.classList.remove('menu__moving')
    menu__calls.classList.add('menu__moving')
    document.querySelector('.menu__line').classList.add('menu__line4')
    document.querySelector('.menu__line').classList.remove('menu__line2')
    document.querySelector('.menu__line').classList.remove('menu__line1')
    document.querySelector('.menu__line').classList.remove('menu__line3')
    document.querySelector('.whats__body1').classList.add('whats__left')
})

//новый чат
function msgAmount () {
    document.querySelector('.whats__chat-new').classList.remove('none')
    document.querySelector('.menu__new-msg').classList.remove('none')
    document.querySelector('.menu__new-msg').textContent = document.querySelectorAll('.msg1').length
    document.querySelector('.whats__chat-new').textContent = document.querySelectorAll('.msg').length
}

function writeSomeone () {
    document.querySelector('.whats__body1').classList.add('block')
    document.querySelector('.no__chat').classList.add('none')
    document.querySelector('.menu__new-msg').classList.add('flex')
    document.querySelector('.whats__chat1').innerHTML += `
        <img src="img/whats_ava1.jpg" alt="ava">
        <div class="whats__chat-info">
            <h3>Неизвестный</h3>
            <p>Привет</p>
        </div>
        <div class="whats__chat-new whats__chat-new1 none"></div>
        <span class="whats__chat-time"></span>
    `
    function chat1 () {
        document.querySelector('.whats-chat__body1').innerHTML += `
            <div class="chat__menu">
                <button class="chat__exit chat__exit1">
                    <img class="chat__back" src="img/arrow_left.svg" alt="arrow_left">
                </button>                           
                <img class="chat__ava" src="img/whats_ava1.jpg" alt="chat__ava">
                <div class="chat__info">
                    <h4 class="chat__name">Неизвестный</h4>
                    <p class="chat__time">В сети</p>
                </div>
            </div>
            <div class="chat__body">
                <div class="chat__date">Сегодня</div>
            </div>
            <div class="chat__text">
                <input placeholder="Сообщение" type="text" class="text">
                <button class="text__send">
                    <img src="img/whats_send.png" alt="whats_send">
                </button>
            </div>   
        `    
    }
     function openChat1() {
        document.querySelector('.whats__main').classList.add('whats__left')
        document.querySelector(`.whats-chat__body1`).classList.add('whats__left2')
        document.querySelector('.whats__chat-new1').classList.add('none')
        document.querySelector('.menu__new-msg').textContent -= document.querySelectorAll('.msg1').length
        if (document.querySelector('.menu__new-msg').textContent = '0'){
            document.querySelector('.menu__new-msg').classList.add('none')
        }
    }
    function exitChat () {
       document.querySelector('.whats__main').classList.remove('whats__left')
        document.querySelector('.whats-chat__body1').classList.remove('whats__left2')
    }
    chat1()
    msgAmount()
    document.querySelector('.whats__chat1').addEventListener('click', openChat1)
    document.querySelector('.chat__exit1').addEventListener('click', exitChat)
}
setTimeout(writeSomeone, 1 * 1000)




