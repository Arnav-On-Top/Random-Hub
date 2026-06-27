function coinToss() {
    let tosses=document.getElementById("coinInput").value;
    if (tosses=="") {
        document.getElementById("coinResult").innerHTML="Please enter a number";
        return;
    }
    if (tosses <=0) {
        document.getElementById("coinResult").innerHTML="Please enter a number";
        return;
    }
    let heads=0;
    let tails=0;
    for (let i=0; i<tosses; i++) {
        let random=Math.random();
        if (random<0.5) {
            heads=heads+1;
        } else {
            tails=tails+1;
        }
    }
    document.getElementById("coinResult").innerHTML="Heads: "+heads+"<br>Tails: "+tails;
    }
function rollDice() {
    let rolls=document.getElementById("diceInput").value; 
    if (rolls=="") {
        document.getElementById("diceResult").innerHTML="Please enter a number.";
        return;
    }
    if (rolls<=0) {
        document.getElementById("diceResult").innerHTML="Number must be more than 0.";
        return;
    }
    let one=0;
    let two=0;
    let three=0;
    let four=0
    let five=0;
    let six=0;
    for (let i=0; i<rolls; i++) {
        let dice=Math.floor(Math.random()*6)+1;
        if (dice==1) {
            one++;
        }
        if (dice==2) {
            two++;
        }
        if (dice==3) {
            three++;
        }
        if (dice==4) {
            four++;
        }
        if (dice==5) {
            five++;
        }
        if (dice==6) {
            six++;
        }
    }
    document.getElementById("diceResult").innerHTML="1: "+one+"<br>"+"2: "+two+"<br>"+"3: "+three+"<br>"+"4: "+four+"<br>"+"5: "+five+"<br>"+"6: "+six;
}
function drawCard() {
    let cards=["Ace of Spades","King of Hearts","Queen of Diamonds","Jack of Clubs"];
    let random=Math.floor(Math.random()*cards.length);
    document.getElementById("cardResult").innerHTML="You drew: "+cards[random];
}
function pickBall(){
    let balls=["Red Ball","Blue Ball","Green Ball","Yellow Ball"];
    let random=Math.floor(Math.random()*balls.length);
    document.getElementById("ballResult").innerHTML="Picked: "+balls[random];
}
function lotteryGame() {
    let user1=document.getElementById("num1").value;
    let user2=document.getElementById("num2").value;
    let user3=document.getElementById("num3").value;
    if (user1=="" || user2=="" || user3== "") {
        document.getElementById("lotteryResult").innerHTML="Please fill all numbers";
        return;
    }
    if (user1<=0 || user2<=0 || user3<=0) {
        document.getElementById("lotteryResult").innerHTML="Numbers must be more than 0.";
        return;
    }
    let lucky1=Math.floor(Math.random()*10)+1;
    let lucky2=Math.floor(Math.random()*10)+1;
    let lucky3=Math.floor(Math.random()*10)+1;
    let match=0;
    if(user1==lucky1) {
        match++;
    }
    if(user2==lucky2) {
        match++;
    }
    if(user3==lucky3) {
        match++;
    }
    if (user1 > 10 || user2 > 10 || user3 > 10) {
    document.getElementById("lotteryResult").innerHTML =
        "Numbers must be between 1 and 10.";
    return;
    }
    document.getElementById("lotteryResult").innerHTML="Lottery numbers: "+lucky1+ ", "+lucky2+", "+lucky3+"<br>You matched "+match+" numbers.";
}
function resetCoin() {
    document.getElementById("coinInput").value="";
    document.getElementById("coinResult").innerHTML="";
}
function resetDice() {
    document.getElementById("diceInput").value="";
    document.getElementById("diceResult").innerHTML="";
}
function resetCard() {
    document.getElementById("cardResult").innerHTML="";
}
function resetBall() {
    document.getElementById("ballResult").innerHTML="";
}
function resetLottery() {
    document.getElementById("num1").value="";
    document.getElementById("num2").value="";
    document.getElementById("num3").value="";
    document.getElementById("lotteryResult").innerHTML="";
}
function changeTheme() {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
}
window.onload = function () {
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");
    }
};