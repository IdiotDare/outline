document.querySelector('#button').onclick = function() {
    alert('What does clicking do but waste time? Wait, nvm. Does the table of contents still work?');
}

document.querySelector('#sidebar').onclick = function() {
    alert('how do I do ids');
}

document.querySelector('#update').onclick = function() {
    alert('Before you ask, yes, I have absolutely no idea what I\'m doing. Seriously. :P I\m still learning basic JS.');
}

var saysText = [];

function textGenerato() {//should generator a random string into a var, which is then presented by change_text
    var num = Math.floor(Math.random()*(10-1)+1);
    switch(num+0){
        case 1:
            saysText.push("I know right?");
            break;
        case 2:
            saysText.push("Confusing, huh?");
            break;
        case 3:
            saysText.push("I don't know what you want.");
            break;
        case 4:
            saysText.push("I'm not sure why you're asking me.");
            break;
        case 5:
            saysText.push("I don't think you should ask me.");
            break;
        case 6:
            saysText.push("I...");
            break;
        case 7:
            saysText.push("I...am not exactly unsure.");
            break;
        case 8:
            saysText.push("I don't get it...")
            break;
        case 9:
            saysText.push("Sorry. I don't understand.")
            break;
        case 10:
            saysText.push("I don't know. Do I look like I even care? ...Sorry.");
            break;
        default:
            saysText.push("Please stop.");
            break;
    }
}


function change_text(){//button onclick calls this function
    textGenerato()
    document.getElementById("text").innerHTML = saysText[0];
    
}

//    document.getElementById("text").innerHTML = "You clicked the button, I am new paragraph.";









/*
document.querySelector('#randotext').onclick = function() {
    var num = Math.floor(Math.random()*(10-1)+1);
    switch(num+0){
    case 1:
        alert('I know right?);
        break;
    case 2:
        alert('Confusing, huh?');
        break;
    case 3:
        alert("I don't know what you want.");
        break;
    case 4:
        alert("I'm not sure why you're asking me.")
        break;
    case 5:
        alert("I don't think you should ask me.")
        break;
    case 6:
        alert("I...")
        break;
        
    default:
        alert("Please stop.")      
 }    
}
*/
/*
function randotext() {
    var num = Math.floor(Math.random()*(10-1)+1);
    switch(num){
    case num == 1:
        alert('I know right?);
        break;
    case num == 2:
        alert('Confusing, huh?');
        break;
    case num == 3:
        alert("I don't know what you want.");
        break;
    case num == 4:
        alert("I'm not sure why you're asking me.")
        break;
    case num == 5:
        alert("I don't think you should ask me.")
        break;
    case num == 6:
        alert("I...")
        break;
        
    default:
        alert("Please stop.")      
 }    
}

document.querySelector('#randotext').onclick = randotext()
*/
