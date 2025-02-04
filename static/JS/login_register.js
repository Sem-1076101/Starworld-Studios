$(document).ready(function() {
    // Laat de tijden en de terugknop één voor één invliegen
    $("#time-tokyo").fadeIn(1000);
    $("#time-london").delay(500).fadeIn(1000);
    $(".inner_flex_back").delay(1000).fadeIn(1000);
    $("#time-rotterdam").delay(1500).fadeIn(1000);
    $("#time-newyork").delay(2000).fadeIn(1000);

    // Start de tijdupdate-functie
    updateTime();
    setInterval(updateTime, 1000);
});

// Functie om tijd op te halen en in de juiste elementen te zetten
function updateTime() {
    const options = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };

    const timeZones = {
        "time-tokyo": "Asia/Tokyo",
        "time-london": "Europe/London",
        "time-rotterdam": "Europe/Amsterdam",
        "time-newyork": "America/New_York"
    };

    for (const [id, timeZone] of Object.entries(timeZones)) {
        const element = document.querySelector(`#${id} .time`);
        if (element) {
            const formatter = new Intl.DateTimeFormat('nl-NL', { ...options, timeZone });
            element.innerText = formatter.format(new Date());
        } else {
            console.warn(`Time element for ID '${id}' not found.`);
        }
    }
}

function goBack() {
    window.history.back();
}
