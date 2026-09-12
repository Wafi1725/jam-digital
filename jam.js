const jam = document.getElementById("jam");

function jamJalan(){
    const waktu = new Date();
    let hours = waktu.getHours().toString().padStart(2,0);
    let minutes = waktu.getMinutes().toString().padStart(2,0);
    let seconds = waktu.getSeconds().toString().padStart(2,0);
    jam.textContent = `${hours}:${minutes}:${seconds}`;
}

jamJalan();
setInterval(jamJalan, 1000);