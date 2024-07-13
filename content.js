var elemDiv = document.createElement('div');
elemDiv.style = "position: relative; display: inline-block; cursor: pointer; user-select: none;";
elemDiv.id = 'translate-id-popup';
document.documentElement.insertBefore(elemDiv, document.body.nextSibling);

var elemSpan = document.createElement('span');
elemSpan.style = "visibility: hidden; width: 160px; background-color: #555; color: #fff; text-align: center; border-radius: 6px; padding: 8px 0; position: absolute; z-index: 1; bottom: 50%; left: 50%;";
elemSpan.id = "myPopup";
elemDiv.appendChild(elemSpan);
var interval = null;

document.addEventListener('dblclick', async () => {
    let selection = window.getSelection().toString().trim();
   
    if (selection !== undefined && selection.length > 0) {
        console.log('selection', selection);
        const response = await chrome.runtime.sendMessage({ action: 'translate', text: selection });
        console.log('sent', response);
        if (interval) {
            clearInterval(interval);
        }
        if (elemSpan.style.visibility === 'hidden') {
            elemSpan.innerText = response.response;
            fadeIn(elemSpan);
        } else {
            elemSpan.innerText = '';
            elemSpan.style.visibility = 'hidden';
        }
 
       
        elemSpan.classList.toggle("show");
    }
  });
  
  function fadeIn(element) {
    element.style.visibility = "visible";
    var opacity = 1;
    element.style.opacity = opacity;

    // Start the interval timer
    var counter = 0;
    interval = setInterval(function() {
        if (counter >= 1000) {
            elemSpan.style.visibility = 'hidden';
            clearInterval(interval);
            console.log("Timer stopped after 10 seconds");
        }
        else {
            opacity = opacity - 0.001;
            element.style.opacity = opacity;
        
        }

        counter++;
    }, 10);
  }