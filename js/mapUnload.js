var frame = document.querySelector("iframe");
var loaded = false;

console.log(frame);

frame.addEventListener("load", function () {
    loaded = frame.querySelector("#sub-frame-error");

    if(loaded){
    console.log("frfrfrfrr;");}

  /*  loaded = true;

    if(loaded) {
        console.log("frfrfrfrr;");
    } else {
        frame.classList.add("map__iframe-none");
        console.log("111111111111");
    }*/
});