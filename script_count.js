//############ DECLEARING VARIABLE FOR HTML ELEMENT #############

let countEl1 = document.getElementById("count_el");
let countEl = document.getElementById("count_el");
let countRst = document.getElementById("count_el");
let countsav = document.getElementById("values");
let generateCount = document.getElementById('count_Add');
let time = document.getElementById('date_area');
let count = 0;
let savedNumbers = [];



// ############ INCREAMENT LOGIC ############
function incre() {
    count += 1;
    countEl1.innerText = count;
}

// ############ DECREAMENT LOGIC ############
function decre() {
    count -= 1
    countEl.innerText = count
    if (count < 0) {
        countEl.innerText = " ";
    }
}

// ############# SAVE NUMBERS LOGIC ############# 
function save() {
    let count_Str = count;
    countsav.innerText += (" " + count_Str);
    savedNumbers.push(count); //pushing generated number into the empty array
    count = 0; //Reset Count to zero
    countRst.innerText = count; //Update count display
}


// ############# ADD NUMBER LOGIC ############# 
function sumAll(){
    let totalVal = savedNumbers.reduce((accumulate, currentVal) => accumulate + currentVal, 0, )
    generateCount.textContent = `Total count: ${totalVal}`;
    generateCount.style.visibility = "visible";
    count= "";
    countsav.innerHTML = count;
    count=0;



}


//################ RESET BUTTON LOGIC ################       
function wipe_screen() {
    count = null;
    count = 0;
    countsav.innerText = " ";
    countRst.innerText = count;
    generateCount.textContent = null;


}

//################### CLOCK LOGIC #####################
function times() {
    let ourTime = new Date()
    let hrs = ourTime.getHours();
    let mins = ourTime.getMinutes();
    let secs = ourTime.getSeconds();

    document.getElementById('hours').textContent = hrs;
    document.getElementById('minutes').textContent = mins;
    document.getElementById('seconds').textContent = secs;

    if (hrs > 12) {
        document.getElementById("meridian").textContent = "PM";
        document.getElementById("hours").textContent = (hrs - 12);
    };

    if (mins < 10){
        document.getElementById("minutes").textContent=`0${mins}`;
    };

    
    if (secs < 10) {
        document.getElementById("seconds").textContent = `0${secs}`
    };
}
setInterval(times, 1000);