// scripts/data_hora.js
function updateStatus(message) {
    window.status = message;
    return true;
}

function displayDate() {
    var today = new Date();
    var day = today.getDay();
    var daylist = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    var month = today.getMonth();
    var monthlist = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    var date = today.getDate();
    var year = today.getFullYear();
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    document.getElementById("currentDate").innerHTML = daylist[day] + ", " + date + " de " + monthlist[month] + " de " + year + " " + strTime;
}