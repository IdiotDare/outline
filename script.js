document.querySelector('#button').onclick = function() {
    alert('What does clicking do but waste time? Wait, nvm. Does the table of contents still work?');
}

document.querySelector('#sidebar').onclick = function() {
    alert('how do I do ids');
}

document.querySelector('#update').onclick = function() {
    alert('Before you ask, yes, I have absolutely no idea what I\'m doing. Seriously. :P I\m still learning basic JS.');
}


function testButton() {//popup random text testing
    var num = Math.floor(Math.random()*(10-1)+1);
    switch(num+0){
        case 1:
            alert("I know right?");
            break;
        case 2:
            alert("Confusing, huh?");
            break;
        case 3:
            alert("I don't know what you want.");
            break;
        case 4:
            alert("I'm not sure why you're asking me.");
            break;
        case 5:
            alert("I don't think you should ask me.");
            break;
        case 6:
            alert("I...");
            break;
        case 7:
            alert("I...am not exactly unsure.");
            break;
        case 8:
            alert("I don't get it...")
            break;
        case 9:
            alert("Sorry. I don't understand.")
            break;
        case 10:
            alert("I don't know. Do I look like I even care? ...Sorry.");
            break;
        default:
            saysText.push("Please stop.");
            break;
    }
}


//line break
    }
}

// onclick="change_text" button id is #randotext paragraph id is "text" no hastag needed to mention ids
/* Text options:


            "I know right?"
            "Confusing, huh?"
            "I don't know what you want."
            "I'm not sure why you're asking me."
            "I don't think you should ask me."
            "I..."
            "I...am not exactly unsure."
            "I don't get it..."
            "Sorry. I don't understand."
            "I don't know. Do I look like I even care? ...Sorry."
            "Please stop.";
            */
