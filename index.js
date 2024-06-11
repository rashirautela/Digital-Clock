//Digital Clock Program

function updateClock() {
    const present = new Date();
    let hour = present.getHours();
    const min = present.getMinutes().toString().padStart(2, 0);
    const sec = present.getSeconds().toString().padStart(2, 0);
    const meridiam = hour >= 12 ? "pm" : "am";
    if (hour > 12) {
        hour = hour - 12;
    }
    hour = hour.toString().padStart(2, 0);
    const newTime = `${hour} : ${min} : ${sec} ${meridiam}`;
    document.getElementById("clock").textContent = newTime;
}
updateClock();
setInterval(updateClock, 1000);
