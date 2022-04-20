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
    document.querySelector('.whats__chat-new').textContent = document.querySelectorAll('.msg1').length
    if(document.querySelector('.menu__new-msg').textContent < 1){
        document.querySelector('.menu__new-msg').classList.add('none')
    }
    if(document.querySelector('.whats__chat-new1').textContent < 1){
        document.querySelector('.whats__chat-new1').classList.add('none')
    }
}

function writeSomeone () {
    document.querySelector('.whats__body1').classList.add('block')
    document.querySelector('.no__chat').classList.add('none')
    document.querySelector('.menu__new-msg').classList.add('flex')
    document.querySelector('.whats__chat1').innerHTML += `
        <div class="whats__chat-img">
            <img src="img/whats_ava1.jpg" alt="ava">
            <div class="here1"></div>
        </div>
        <div class="whats__chat-info">
            <h3>Неизвестный</h3>
            <p class="tap tap1">Привет</p>
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
                    <p class="chat__time tap tap2">В сети</p>
                </div>
            </div>
            <div class="chat__body">
                <div class="chat__date">Сегодня</div>
                <p class="msg msg1 msg__tap1">Привет</p>
            </div>
            <div class="chat__text">
                <input placeholder="Сообщение" type="text" class="text">
                <button class="text__send">
                    <img src="img/whats_send.png" alt="whats_send">
                </button>
            </div>   
        `    
    }
    chat1()
    msgAmount()
    //важные данные

    //время
    let date = new Date()
    let hour = date.getHours()
    let minute = date.getMinutes()
    let minute1 = "0" + minute
    //время 

    //был в сети
    function wasTime() {
        document.querySelector('.tap2').textContent = `был(-а) сегодня в ${hour}:${minute}`
        if(minute < 10){
            document.querySelector('.tap2').textContent = `был(-а) сегодня в ${hour}:${minute1}`
        }
        document.querySelector('.here1').classList.add('none')
    }
    //был в сети

    //в сети 
    const tap_msg = document.querySelectorAll('.tap')
    function last_tap () {
        let msgs = document.querySelectorAll('.msg__tap1')
        document.querySelector('.tap1').textContent = msgs[msgs.length - 1].textContent
        document.querySelector('.tap2').textContent = "в сети"
        tap_msg.forEach(taps => {
            taps.classList.remove('green')
        })
    }
    //в сети

    //печать
    function tap (){
        tap_msg.forEach(taps => {
            taps.textContent = "печатает..."
            taps.classList.add('green')
        })
    }
    //печать

    //удалений сообщений
    function delMsgs() {
        let msgs = document.querySelectorAll('.msg1')
        msgs.forEach(msgss => {
            msgss.classList.remove('msg1')
        })
        msgAmount()
    }
    //удаление сообщений

    //input
    let input = document.querySelector('.text').value
    //input

    //button send
    const send = document.querySelector('.text__send')
    //button send

    //регекс слова
    let hi = /привет/gi
    let yes = /да/gi
    let no = /нет/gi
    //регекст слова

    //важные данные

    //войти-выйти из чата
     function openChat1() {
        document.querySelector('.whats__main').classList.add('whats__left')
        document.querySelector(`.whats-chat__body1`).classList.add('whats__left2')
        document.querySelector('.whats__chat-new1').classList.add('none')
        document.querySelector('.menu__new-msg').textContent -= document.querySelectorAll('.msg1').length
        if (document.querySelector('.menu__new-msg').textContent = '0'){
            document.querySelector('.menu__new-msg').classList.add('none')
        }
        delMsgs()
    }
    function exitChat () {
        document.querySelector('.whats__main').classList.remove('whats__left')
        document.querySelector('.whats-chat__body1').classList.remove('whats__left2')
        delMsgs()
    }
    document.querySelector('.whats__chat1').addEventListener('click', openChat1)
    document.querySelector('.chat__exit1').addEventListener('click', exitChat)
    //войти-выйти из чата

    //отправка сообщений
    send.addEventListener('click', function(){
        input = document.querySelector('.text').value
        if(input){
            document.querySelector('.chat__body').innerHTML += `
                <div class="person__block">
                    <p class="person">${input}</p>
                </div>
            `
        }
    })
    //отправка сообщений
    
    setTimeout(tap, 1 * 1000)
    function ms1() {
        document.querySelector('.chat__body').innerHTML += `
            <p class="msg msg1 msg__tap1">Можем познакомиться?</p>
        `
        msgAmount()
        last_tap()
        function bot1() {
            if(hi.test(input)){
                setTimeout(last_tap, 4 * 1000)
                setTimeout(wasTime, 15 * 1000)
            } else if (yes.test(input)){
                send.removeEventListener('click', bot1)
                setTimeout(last_tap, 3 * 1000)
                setTimeout(tap, 4 * 1000)
                setTimeout(ms1_1, 12 * 1000)
            } else {
                setTimeout(wasTime, 15 * 1000)
            }
        }
        send.addEventListener('click', bot1)
    }

    function ms1_1 () {
        last_tap()
        document.querySelector('.chat__body').innerHTML += `
            <p class="msg msg1 msg__tap1">Меня зовут Dryjorse, а тебя?</p>
        `
        msgAmount()
        last_tap()
        function bot_name(){
            setTimeout(last_tap, 3 * 1000)
            setTimeout(tap, 4 * 1000)
            setTimeout(function(){
                send.removeEventListener('click', bot_name)
                document.querySelector('.chat__body').innerHTML += `
                    <p class="msg msg1 msg__tap1">Рад знакомству ${input}!</p>
                `
                msgAmount()
                last_tap()
            }, 11 * 1000)
        }
        send.addEventListener('click', bot_name)
    }

    setTimeout(ms1, 4 * 1000)
}
setTimeout(writeSomeone, 1 * 1000)




