const planetInfo = {
    Mercury: "Merkurius adalah planet terkecil dan terdekat dengan matahari.",
    Venus: "Venus sering disebut kembaran bumi karena ukurannya mirip",
    Earth: "Bumi dalah satu-satunya planet yang diketahui memiliki kehidupan",
    Mars: "Mars dikenal sebagai planet merah",
    Jupiter: "Jupiter adalah planet terbesar di tata surya",
    Saturn: "Saturnus terkenal dengan cincin indahnya",
    Uranus: "Uranus berotasi miring hampir 90 derajat",
    Neptune: "Neptunus adalah planet terjauh dari matahari"
};

document.getElementById("merkurius").addEventListener("click", function () {
    document.getElementById("info").innerText = planetInfo.Mercury;
    document.getElementById("info").style.opacity = "1";
});

document.getElementById("venus").addEventListener("click", function () {
    document.getElementById("info").innerText = planetInfo.Venus;
    document.getElementById("info").style.opacity = "1";
});

document.getElementById("bumi").addEventListener("click", function () {
    document.getElementById("info").innerText = planetInfo.Earth;
    document.getElementById("info").style.opacity = "1";
});

document.getElementById("mars").addEventListener("click", function () {
    document.getElementById("info").innerText = planetInfo.Mars;
    document.getElementById("info").style.opacity = "1";
});

document.getElementById("jupiter").addEventListener("click", function () {
    document.getElementById("info").innerText = planetInfo.Jupiter;
    document.getElementById("info").style.opacity = "1";
});

document.getElementById("saturnus").addEventListener("click", function () {
    document.getElementById("info").innerText = planetInfo.Saturn;
    document.getElementById("info").style.opacity = "1";
});

document.getElementById("uranus").addEventListener("click", function () {
    document.getElementById("info").innerText = planetInfo.Uranus;
    document.getElementById("info").style.opacity = "1";
});

document.getElementById("neptunus").addEventListener("click", function () {
    document.getElementById("info").innerText = planetInfo.Neptune;
    document.getElementById("info").style.opacity = "1";
});