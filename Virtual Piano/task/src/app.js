// let keyboard = document.querySelectorAll('kbd')

document.addEventListener("keydown", function (event) {
    if (event.code === "KeyA") {
        let audio = document.createElement("audio");
        audio.src = "Virtual%20Piano/task/src/Audio/do.mp3";
        audio.play();
    } else if (event.code === "KeyS") {
        let audio = document.createElement("audio");
        audio.src = "/Users/haykay14/Desktop/white_keys/S.mp3";
        audio.play();
    } else if (event.code === "KeyD") {
        let audio = document.createElement("audio");
        audio.src = "/Users/haykay14/Desktop/white_keys/D.mp3";
        audio.play();
    } else if (event.code === "KeyF") {
        let audio = document.createElement("audio");
        audio.src = "/Users/haykay14/Desktop/white_keys/F.mp3";
        audio.play();
    } else if (event.code === "KeyG") {
        let audio = document.createElement("audio");
        audio.src = "/Users/haykay14/Desktop/white_keys/G.mp3";
        audio.play();
    } else if (event.code === "KeyH") {
        let audio = document.createElement("audio");
        audio.src = "/Users/haykay14/Desktop/white_keys/H.mp3";
        audio.play();
    } else if (event.code === "KeyJ") {
        let audio = document.createElement("audio");
        audio.src = "/Users/haykay14/Desktop/white_keys/J.mp3";
        audio.play();
    } else if (event.code === "KeyW") {
        let audio = document.createElement("audio");
        audio.src = "/Users/haykay14/Desktop/white_keys/W.mp3";
        audio.play();
    } else if (event.code === "KeyE") {
        let audio = document.createElement("audio");
        audio.src = "/Users/haykay14/Desktop/white_keys/E.mp3";
        audio.play();
    } else if (event.code === "KeyT") {
        let audio = document.createElement("audio");
        audio.src = "/Users/haykay14/Desktop/white_keys/T.mp3";
        audio.play();
    } else if (event.code === "KeyY") {
        let audio = document.createElement("audio");
        audio.src = "/Users/haykay14/Desktop/white_keys/Y.mp3";
        audio.play();
    } else if (event.code === "KeyU") {
        let audio = document.createElement("audio");
        audio.src = "/Users/haykay14/Desktop/white_keys/U.mp3";
        audio.play();
    } else {
        console.log(
            "Error! Please press the right key as seen on the keyboard"
        );
    }
});
