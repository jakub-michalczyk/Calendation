let eventsList = [];
let activeMonth;
let newEvent;
let currentlyEdited = null;

class Event{
    constructor(title, idx, date, hour, minutes, weekDay, month, img){
        this.title = title;
        this.idx = idx;
        this.date = date;
        this.hour = hour;
        this.minutes = minutes;
        this.weekDay = weekDay;
        this.month = month;
        this.img = img;
    }
    addToList(){
        eventsList.push(this)
    }
}

(function init(){
    const hamburgerBox = document.querySelector('#hamburgerBox');
    const monthsList = document.querySelectorAll('#monthsList li');

    monthsList.forEach( li => {
        li.addEventListener('click', e => {
            monthsList.forEach( li => {
                li.className = "";
            });
            li.className = "currentMonth";
            activeMonth = e.target.dataset.id;
            //Create day boxes for specifed month
            return createDayBoxes(Number(e.target.dataset.id));
        });
    });

    hamburgerBox.addEventListener('click', menuToggle);

    findCurrentMonth();
    createDayBoxes();
    return checkStorage();
})();

function findCurrentMonth(){
    document.querySelector(`#monthsList li[data-id='${new Date().getMonth() + 1}']`).className = "currentMonth";
}

function checkStorage(){
    try{
        if(localStorage.getItem('event') !== null){
            let storageEvents = localStorage.getItem('event');
    
            eventsList = JSON.parse(storageEvents);
            eventsList.forEach( event => {
                let eventDay = event.date.split('-')[0];
                eventDay[0] === '0' ? eventDay = eventDay.substring(1) : null; //Check if day which has event is lower than 10, and if true cut the '0'
                if(event.month === activeMonth){
                    return createEventMiniature(document.querySelector(`.dayBox[data-id="${eventDay}"]`), event);
                }  
            });  
        }
    }
    catch(e){
        console.log(e)
    }
}

function createDayBoxes(selectedMonth){
    let currentDate = new Date();
    let month;

    selectedMonth === undefined ? month = currentDate.getMonth() + 1 : month = selectedMonth;

    let firstDay = new Date(currentDate.getFullYear() + "-" + month + "-01").getDay(); //Check the week day that month starts with
    let monthsLength = new Date(currentDate.getFullYear(), month, 0).getDate(); //Calculate how many days the month has
    const calendar = document.querySelector('#calendar');

    calendar.innerHTML = '';
    month < 10 ? activeMonth = '0' + month : activeMonth = month;

    for(let i = 1; i <= monthsLength; i++){
        calendar.innerHTML += 
            `<div data-id="${i}" class="dayBox">
                <i class='fas fa-plus calendarPlus'></i>
                <div class="dayBoxInfo">
                    <div class="weekDay">${i}</div>
                    <div class="dayBoxDate">${i < 10 ? '0' + i : i}-${month < 10 ? '0' + month : month}-${currentDate.getFullYear()}</div>
                </div>
             </div>`
    }

    makeWeekDays(firstDay);

    document.querySelectorAll('.dayBox').forEach( box => box.addEventListener('click', creatingEventBox));

    return checkStorage();
}

function makeWeekDays(startPoint){
    let weekCounter = startPoint;
    let day;

    document.querySelectorAll('.weekDay').forEach( week => {
        if(weekCounter === 7){
            weekCounter = 0;
        }
        switch(weekCounter){
            case 0:
                day = 'Niedziela';
                break;
            case 1:
                day = 'Poniedziałek';
                break;
            case 2:
                day = 'Wtorek';
                break;
            case 3:
                day = 'Środa';
                break;
            case 4:
                day = 'Czwartek';
                break;
            case 5:
                day = 'Piątek';
                break;
            case 6:
                day = 'Sobota';
                break;
        }

        week.textContent = day;
        weekCounter++;
    });
}

function creatingEventBox(e){
    if(e.target.className === 'cancelEvent'  || e.target.parentNode.className === 'cancelEvent' || e.target.className === 'dayBoxInfo' || e.target.parentNode.className === 'dayBoxInfo'){
        return;
    }
    else{
        const popup = document.createElement('div');
        const overlayer = document.createElement('div');
        let target = null;
        
        overlayer.id = 'overlayer'
        popup.id = 'addingBox';
        
        document.body.append(popup, overlayer);
        popup.className = 'popUpAnimation';

        if(e.target.nodeName === 'IMG' || e.target.id === 'overlayerInfo'){
            return editEvent(e.target.parentNode.dataset.id);
        }
        else if(e.target.id === 'overlayerDate' || e.target.id === 'overlayerTitle'){
            return editEvent(e.target.parentNode.parentNode.dataset.id);
        }
        else if(e.target.className === 'dayBox'){
            if(e.target.children[0].nodeName === 'IMG'){
                return editEvent(e.target.dataset.id);
            }
        }

        e.target.dataset.id === undefined ? target = e.target.parentNode.dataset.id : target = e.target.dataset.id;
        return addNewEvent(target);
    }
}

function createEventModulationBox(action, hour, minutes, title){
    let time = `${hour}:${minutes}`;

    document.querySelector('#addingBox').innerHTML =
        `<div id="popUpShowing">
            <div id="closePopup">
                <i class='fas fa-close'></i>
            </div>
            <h2>${action} wydarzenia</h2>
            <div id="dateBox">
                <h3 id="eventDate"></h3>
                <div class="slash">/</div>
                <div id="titleBox">
                    <input type="time" id="time" value="${time}">
                </div>
            </div>
            <input placeholder="Nazwa wydarzenia" type="text" id="title" name="title" value="${title}">
        </div>`;

    createEventModulationButtons(action);
}

function createEventModulationButtons(action){
    let buttonsArr = [];

    //CREATE FEW BUTTONS, DEPENDING ON THE ACTION
    for (let i = 0; i <= 4; i++) {
        buttonsArr.push(document.createElement('div'));
        if (i === 0) {
            buttonsArr[i].id = 'buttonsBox';
        }
        else if (i === 1) {
            buttonsArr[i].className = 'readyButton';
            buttonsArr[i].id = 'placeholderImgBtn';
            buttonsArr[i].textContent = 'Wybierz zdjęcie';
        }
        else if (i === 2) {
            buttonsArr[i].className = 'readyButton';
            buttonsArr[i].id = 'uploadButton';
            buttonsArr[i].textContent = 'Dodaj miniaturkę';
        }
        else if (i === 3) {
            buttonsArr[i].className = 'saveEditedEvent';
            buttonsArr[i].id = 'checkButton';
            buttonsArr[i].textContent = 'Zapisz zmiany';
        }
    }

    if (action === 'Dodawanie') {
        buttonsArr[0].append(buttonsArr[1], buttonsArr[2])
    }
    else {
        buttonsArr[2].textContent = 'Dodaj nową miniaturkę';
        buttonsArr[3].textContent = 'Zapisz zmiany';
        buttonsArr[0].append(buttonsArr[2], buttonsArr[3]);
    }

    document.querySelector('#popUpShowing').appendChild(buttonsArr[0]);
    document.querySelector('#closePopup').addEventListener('click', removeEventBox);

    document.querySelectorAll('.readyButton').forEach( btn => {
        if(btn.textContent === 'Dodaj miniaturkę' || btn.textContent === 'Zapisz zmiany' || btn.textContent === 'Wybierz zdjęcie') {
            btn.addEventListener('click', saveInfo);
        }
        else{
            btn.addEventListener('click', () => {
                eventsList.forEach( event => event.date === document.querySelector('#eventDate') ? currentlyEdited = event : null);
                addURL();
            })
        }
    });
}

function removeEventBox(){
    document.querySelector('#overlayer').remove();
    document.querySelector('#addingBox').remove();
}

function choosePlaceholderImg(){
    document.querySelector("#addingBox").innerHTML = 
        `
            <h2>Wybierz miniaturkę twojego wydarzenia</h2>
            <div id="imageBox">
                <div class="placeholderImg choosedImg">
                   <img src="../img/1.jpg">
                </div>
                <div class="placeholderImg">
                    <img src="../img/2.jpg">
                </div>
                <div class="placeholderImg">
                    <img src="../img/3.jpg">
                </div>
                <div class="placeholderImg">
                    <img src="../img/4.jpg">
                </div>
                <div class="placeholderImg">
                    <img src="../img/5.jpg">
                </div> 
            </div>
            <div id="choosePlaceholderImg">Wybierz miniaturkę</div>
        `;

    document.querySelectorAll(".placeholderImg").forEach(img => {
        img.addEventListener("click", e => {
            document.querySelectorAll(".placeholderImg").forEach(img => img.className = "placeholderImg");
            e.currentTarget.className += " choosedImg";
        });
    });
    
    document.querySelector("#choosePlaceholderImg").addEventListener("click", saveImg);
}

function editEvent(day){
    let hour;
    let minutes;
    let title;
    let month;
    currentlyEdited = null;

    eventsList.forEach(event => {
        if(event.idx === day && event.month === activeMonth){
            currentlyEdited = event;
            month = event.month
            hour = event.hour;
            minutes = event.minutes;
            title = event.title;
        }
    });

    Number(day) < 10 ? day = '0' + day : null;
    
    createEventModulationBox('Edycja', hour, minutes, title);
    eventBoxAnimation();

    document.querySelector('#eventDate').textContent = `${day}-${month}-${new Date().getFullYear()}`;
    document.querySelector('#checkButton') !== null ? document.querySelector('#checkButton').addEventListener('click', saveEditedEvent) : null;
}

function saveEditedEvent(){
    let editedEvent;

    editedEvent = document.querySelector('#eventDate').textContent.split('-')[0];
    editedEvent[0] === '0' ? editedEvent = editedEvent.substring(1) : null;

    eventsList.forEach( event => {
        if(event.idx === editedEvent && event.month === activeMonth){
            event.hour = document.querySelector('#time').value.split(':')[0];
            event.minutes = document.querySelector('#time').value.split(':')[1];
            event.title = document.querySelector('#title').value;

            createEventMiniature(document.querySelector(`.dayBox[data-id="${editedEvent}"]`), event);
            addToStorage('event', eventsList);
        }
    });
    
    return removeEventBox();
}

function addNewEvent(day){
    day < 10 ? day = `0${day}` : null;
    createEventModulationBox('Dodawanie', '', '', '');
    eventBoxAnimation();
    document.querySelector('#eventDate').textContent = `${day}-${activeMonth}-${new Date().getFullYear()}`;
}

function eventBoxAnimation(){
    setTimeout( () => {
        document.querySelector('#popUpShowing').style.opacity = '1';  
    }, 150);
}

function saveInfo(e){
    if(document.querySelector('#title').value === '' || document.querySelector('#time').value === ''){
        document.querySelector('#title').value = 'An unnamed event'
        document.querySelector('#time').value = '12:00';
        saveInfo(e)
    }
    else {
        let idx;

        if(document.querySelector('#eventDate').textContent[0] === '0'){
            idx = document.querySelector('#eventDate').textContent.split('-')[0].substring(1);
        }
        else{
            idx = document.querySelector('#eventDate').textContent.split('-')[0];
        }

        newEvent = new Event(
            document.querySelector('#title').value,
            idx,
            document.querySelector('#eventDate').textContent, 
            document.querySelector('#time').value.split(':')[0], 
            document.querySelector('#time').value.split(':')[1], 
            document.querySelector(`.dayBox[data-id="${idx}"] .dayBoxInfo .weekDay`).textContent,
            activeMonth,
            null
        );

        e.target.id === 'placeholderImgBtn' ? choosePlaceholderImg() : addURL();
    }
}

function saveEvent(){
    let eventBox = document.createElement('div');
    let eventDay = newEvent.date.split('-')[0];


    eventDay[0] === '0' ? eventDay = eventDay.substring(1) : null;
    addToStorage('event', eventsList)
    return createEventMiniature(document.querySelector(`.dayBox[data-id="${eventDay}"]`), newEvent); 
}

function createEventMiniature(dayBox, createdEvent){
    const miniature = new Image();
    const overlayerInfo = document.createElement('div');
    const overlayerTitle = document.createElement('div');
    const cancelEvent = document.createElement('div');

    overlayerInfo.id = 'overlayerInfo';
    overlayerInfo.innerHTML = 
        `<div id="overlayerTitle">${createdEvent.title}</div>
         <div id="overlayerDate">
            <div>${createdEvent.date}</div>
            <div>${createdEvent.hour}:${createdEvent.minutes}</div>
         </div>`

    cancelEvent.className = 'cancelEvent';
    cancelEvent.innerHTML = "<i class='fas fa-close'></i>";

    miniature.src = createdEvent.img;
    miniature.style.width = '100%';
    miniature.style.height = '100%';

    dayBox.innerHTML = '';
    dayBox.append(miniature, overlayerInfo, cancelEvent);

    document.querySelectorAll('.cancelEvent').forEach(cancel => cancel.addEventListener('click', removeEvent));
}

function removeEvent(e){
    let newArr = [];
    let dayBox;
    let eventID;
    let weekDay = '';
    let eventDate = '';

    if(e.target.nodeName === 'I'){
        dayBox = e.target.parentNode.parentNode;
        eventID = e.target.parentNode.parentNode.dataset.id;
    }
    else if(e.target.nodeName === 'DIV'){
        dayBox = e.target.parentNode;
        eventID = e.target.parentNode.dataset.id;
    }

    eventsList.forEach( event => {
        if(event.idx === eventID && event.month === activeMonth){
            weekDay = event.weekDay;
            eventDate = event.date;
            eventsList.splice(eventsList.indexOf(event), 1);
        }
    });

    dayBox.innerHTML = 
            `<i class='fas fa-plus calendarPlus'></i>
            <div class="dayBoxInfo">
                <div class="weekDay">${weekDay}</div>
                <div class="dayBoxDate">${eventDate}</div>
            </div>
         </div>`;

    return addToStorage('event', eventsList)
}

function addToStorage(name, itemToAdd){
    try{
        localStorage.setItem(name, JSON.stringify(itemToAdd));
    }
    catch(e){
        console.log(e)
    }

}

function menuToggle(){
    const hamburger = document.querySelector('#hamburger');
    const lines = [
        document.querySelector('#hamburger #line1'), 
        document.querySelector('#hamburger #line2'), 
        document.querySelector('#hamburger #line3')
    ];

    hamburger.style.top = '45%';

    if(hamburger.dataset.type === 'hide'){
        hamburger.dataset.type = 'show';
        lines[2].style = `margin-top:-10px;`;
        setTimeout( () => lines[0].style.transform = `rotate(45deg)`, 200);
        setTimeout( () => {
          lines[1].style.transform += `translateY(-200%) rotate(-45deg)`;
          lines[2].style.opacity = `0`;
        });
        document.querySelector('nav').style.left = '0%';
        document.querySelectorAll('#hamburger span').forEach( line => line.style.backgroundColor = '#fff')
    }
    else{
        hamburger.style.top = '35%';
        hamburger.dataset.type = 'hide';
        lines[2].style = `margin-top:5px;`;
        setTimeout( () => {
            lines[1].style.transform = `translateY(0.5px)`;
            lines[0].style.transform = `rotate(0deg)`;
            lines[1].style.transform = `translateY(0%) rotate(0deg)`;
            lines[2].style.opacity = `1`;
        }, 200);
        document.querySelector('nav').style.left = '-100%';
        document.querySelectorAll('#hamburger span').forEach( line => line.style.backgroundColor = '#65913d')
    }
}

function addURL() {
    document.querySelector('#addingBox').innerHTML =
        `<div id="closeAddingURL">
            <i class='fas fa-close'></i>
         </div>
         <h2>Wklej adres URL lub przeciągnij zdjęcie</h2>
         <div id="drop" data-dropped="none">
         </div>
         <input placeholder="Adres URL zdjęcia" id="url" type="text">
         <input id="saveUrl" type="button" value="Dodaj miniaturkę">`;
    
    document.querySelector('#closeAddingURL').addEventListener('click', removeEventBox); 
    document.querySelector('#saveUrl').addEventListener('click', saveImg);
    document.querySelector('#drop').addEventListener('drop', dropImage);
    document.querySelector('#drop').addEventListener('dragover', (e) =>  e.preventDefault());
}

function dropImage(e){
 e.preventDefault();

 if (e.dataTransfer.items) {
   for (var i = 0; i < e.dataTransfer.items.length; i++) {
     if (e.dataTransfer.items[i].kind === 'file') {
       let file = e.dataTransfer.items[i].getAsFile();
       imageDataURL(file)
     }
   }
 } else {
   for (var i = 0; i < e.dataTransfer.files.length; i++) {
        file.onload = loadImage(file)
   }
 }
}

function imageDataURL(file) {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
       const img = new Image();
       document.querySelector('#drop').appendChild(img)
       document.querySelector('#drop').dataset.dropped = 'drop';
       document.querySelector('#drop img').src = reader.result;
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
 }

function saveImg(){
    if(currentlyEdited === null){
        if(document.querySelector('#drop') !== null){
            if(document.querySelector('#drop').dataset.dropped === 'drop'){
                newEvent.img = document.querySelector('#drop img').src ;
            }
        }
        else if(document.querySelector("#imageBox") !== null){
            newEvent.img = document.querySelector('.choosedImg').children[0].src;
        }
        else{
            newEvent.img = document.querySelector('#url').value;
        }

        newEvent.addToList();
        removeEventBox();
        
        return saveEvent();
    }
    else{
        let eventRoute;

        Number(currentlyEdited.date.split('-')[0]) >= 10 ? eventRoute =  `.dayBox[data-id="${currentlyEdited.date.split('-')[0].trim()}"]` : eventRoute = `.dayBox[data-id="${currentlyEdited.date.split('-')[0].substring(1).trim()}"]`; 
        currentlyEdited.img =  document.querySelector('#url').value;
        
        createEventMiniature(document.querySelector(eventRoute), currentlyEdited);
        currentlyEdited = null;
        addToStorage('event', eventsList);
        removeEventBox();
    }
}
