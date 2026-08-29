const btnSalvar = document.getElementById('btnSalvar');

btnSalvar.addEventListener('click', sendForm);

 function sendForm(event) {
     event.preventDefault() // stop the form from submitting
     let data = document.getElementById("data").value;
     let nome = document.getElementById("nome").value;
     let tipo = document.getElementById("tipo").value;
     let valor = document.getElementById("valor").value;
     let desc = document.getElementById("desc").value;
     let user = document.getElementById("user").value;
     window.electronAPI.SalvarEntry(data,nome,tipo,valor,desc,user);
};


import './index.css';


console.log(
  '👋 This message is being logged by "renderer.js", included via webpack',
);