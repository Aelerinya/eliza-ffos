var elizaP = document.getElementById('eliza');
var elizaIn = document.getElementById('eliza_input');
var elizaBt = document.getElementById('eliza_button');

var eliza = new ElizaBot();

function elizaReply() {
  if (elizaIn.value) {
    var question = document.createElement('p');
    question.textContent = '> '+elizaIn.value;
    
    var reply = document.createElement('p');
    reply.textContent = eliza.transform(elizaIn.value);
    
    elizaP.appendChild(question);
    elizaP.appendChild(reply);
    
    if (elizaP.childElementCount > 6) {
      elizaP.removeChild(elizaP.firstChild);
      elizaP.removeChild(elizaP.firstChild);
    }
    
    elizaIn.value = '';
    elizaIn.focus();
  }
}

window.addEventListener('keypress', function (e) {
  if (e.keyCode == 13) {
    elizaReply();
  };
  e.preventDefault;
}, false);

elizaBt.addEventListener('click', function() {
  elizaReply();
}, false);

elizaP.removeChild(elizaP.firstChild);
var initial = document.createElement('p');
initial.textContent = eliza.getInitial();
elizaP.appendChild(initial);