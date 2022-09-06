var minStore  = document.getElementById('min');
var secStore  = document.getElementById('sec');
var msStore  = document.getElementById('ms');

var min = 0;
var sec  = 0;
var ms = 0;
var timer = false;

function stopWatch(){
    if(timer == true){
        ms = ms+1;
        if(ms == 99){
            sec = sec+1;
            ms = 0;
        }
        if(sec == 60){
            min = min+1;
            sec = 0;
        }
        var minStr  = min;
        var secStr = sec;
        var msStr = ms;
        if(min<10){
            minStr = "0"+minStr;
        }
        if(sec<10){
            secStr = "0"+secStr;
        }
        if(ms<10){
            msStr = "0"+msStr;
        }
        minStore.innerHTML = minStr;
        secStore.innerHTML = secStr;
        msStore.innerHTML = msStr;

        setTimeout("stopWatch()",10);
    }
}

function startTimer(){
    timer = true;
    stopWatch();
}

function resetTimer(){
    timer = false;
    min = 0;
    sec = 0;
    ms = 0;

    minStore.innerHTML = "00";
    secStore.innerHTML = "00";
    msStore.innerHTML = "00";
}

function stopTimer(){
    timer = false;
}

var store = document.getElementById('storeTime');
var id =0;

// var arr = [];
// if(localStorage.getItem("item")){
//   arr = JSON.parse(localStorage.getItem("item"));
//   addToDom();
// }
// function addToLocal(index){
//   let obj = {};
//   obj.number = document.getElementById(`n-${index}`);
//   obj.minute = document.getElementById(`t1-${index}`);
//   obj.second = document.getElementById(`t2-${index}`);
//   obj.milisec = document.getElementById(`t3-${index}`);
  
//   arr.push(obj);
//   localStorage.setItem("item", JSON.stringify(arr));
//   addToDom();
// }
// function addToDom(){
//   store.innerHTML = "";
//   arr.forEach(function(item, index){
//     store.innerHTML += `
//         <div class="lapList"">
//             <div>
//             <span class="number" id="n-${index}">Lap ${index}</span>
//             </div>
//             <div>
//             <span class="time" id="t1-${index}">${item.minute}:</span>
//             <span class="time" id="t2-${index}">${item.second}:</span>
//             <span class="time" id="t3-${index}">${item.milisec}</span>
//             <div>
//         </div>
//     `;
//   })
// }

function addToDom(){
    var div  = document.createElement('div');
    var numberstap = document.createElement('span');
    var timestamp = document.createElement('span');

    div.setAttribute('id','lapList');
    numberstap.setAttribute('id','number');
    timestamp.setAttribute('id','time');
    
    numberstap.innerText = `Lap${++id}`;
    timestamp.innerHTML=`${min} : ${sec} : ${ms}`;
    
    div.append(numberstap,timestamp);
    store.append(div);
}
