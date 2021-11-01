document.querySelector('#button').onclick = function() {
    alert('What does clicking do but waste time? Wait, nvm. Does the table of contents still work?');
}

document.querySelector('#sidebar').onclick = function() {
    alert('how do I do ids');
}

document.querySelector('#update').onclick = function() {
    alert('Before you ask, yes, I have absolutely no idea what I\'m doing. Seriously. :P I\m still learning basic JS.');
}

/* document.querySelector('#randotext').onclick = function() {
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
*/
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
