
const futureDate = "15 October 2023  01:30 PM "
document.querySelector("#future-Date").innerText = futureDate;
const inputs = document.querySelectorAll("input");
const day = "COUNT DOWN END";

function clock() {
    const future = new Date(futureDate);
    const current = new Date();
    const diff = (future - current) / 1000;
    if (diff < 0) {

        document.getElementById("countDown-day").innerHTML = "COUNT- DOWN END"
        document.getElementById("up").style.display = "none";
        return;
    } else {
        document.getElementById("countDown-day").innerHTML = "COUNT- DOWN START"
        document.getElementById("up").style.display = "inline";
    };

    inputs[0].value = Math.floor(diff / 3600 / 24);
    inputs[1].value = Math.floor(diff / 3600) % 24;
    inputs[2].value = Math.floor(diff / 60) % 60;
    inputs[3].value = Math.floor(diff) % 60;

}
clock();
setInterval(clock, 1000);