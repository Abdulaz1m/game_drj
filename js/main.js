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

//объекты
const obj1 = {
    photo: "img/whats_ava1.jpg"
}

//новый чат
const msg_audio = document.getElementById('whats_msg')

function msgAmount () {
    document.querySelector('.whats__chat-new').classList.remove('none')
    document.querySelector('.menu__new-msg').classList.remove('none')
    document.querySelector('.menu__new-msg').textContent = document.querySelectorAll('.msg1').length
    document.querySelector('.whats__chat-new').textContent = document.querySelectorAll('.msg').length
}

function writeSomeone () {
    document.querySelector('.whats__body1').classList.add('block')
    document.querySelector('.no__chat').classList.add('none')
    // document.querySelector('.chat__name').textContent = 'Неизвестный'
    // document.querySelector('.chat__time').textContent = 'В сети'
    // document.querySelector('.chat__date').textContent = 'Сегодня'
    // if (!document.querySelector('.msg1_1')){
    //     document.querySelector('.chat__body').innerHTML += `<p class="msg msg1 msg1_1">Привет</p>`
    // }
    document.querySelector('.menu__new-msg').classList.add('flex')
    document.querySelector('.whats__chats').innerHTML += `
    <div data-photo="${obj1.photo}" data-name="Неизвестный" class="whats__chat whats__chat1">
        <img src="img/whats_ava1.jpg" alt="ava">
        <div class="whats__chat-info">
            <h3>Неизвестный</h3>
            <p>Привет</p>
        </div>
        <div class="whats__chat-new none"></div>
        <span class="whats__chat-time"></span>
    </div>
    `
    msgAmount()
    newChat()
}
setTimeout(writeSomeone, 1 * 1000)

//открыть/закрыть чат
function newChat () {
    let chats = document.querySelectorAll('.whats__chat')
    chats.forEach(chat => chat.addEventListener('click', openChat))
    function openChat (e) {
        e.preventDefault();
        const dataset = e.target.dataset
        const data = {
            photo: dataset.photo,
        }
        document.querySelector('.whats__main').classList.add('whats__left')
        document.querySelector('.whats-chat__body').classList.add('whats__left2')
        document.querySelector('.whats__chat-new').classList.add('none')
        document.querySelector('.menu__new-msg').textContent -= document.querySelectorAll('.msg1').length
        if (document.querySelector('.menu__new-msg').textContent = '0'){
            document.querySelector('.menu__new-msg').classList.add('none')
        }
        if (!document.querySelector('.whats-chat__body1')){
            document.querySelector('.whats-chat__body').innerHTML += `
                <div class="whats-chat__body1">
                    <div class="chat__menu">
                        <button onclick="exitChat()" class="chat__exit">
                            <img class="chat__back" src="img/arrow_left.svg" alt="arrow_left">
                        </button>                           
                        <img class="chat__ava" src="${e.target.dataset.photo}" alt="chat__ava">
                        <div class="chat__info">
                            <h4 class="chat__name"></h4>
                            <p class="chat__time"></p>
                        </div>
                    </div>
                    <div class="chat__body">
                        <div class="chat__date"></div>
                    </div>
                    <div class="chat__text">
                        <input placeholder="Сообщение" type="text" class="text">
                        <button class="text__send">
                            <img src="img/whats_send.png" alt="whats_send">
                        </button>
                    </div>
                </div>
            `
        }
    }
}
function exitChat () {
    document.querySelector('.whats__main').classList.remove('whats__left')
    document.querySelector('.whats-chat__body').classList.remove('whats__left2')
}

