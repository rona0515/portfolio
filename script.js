window.addEventListener("load", loadSiden);

function loadSiden() {
    console.log("loadSiden")

    //Tildel animation på knap


    document.querySelector("#grid_item1").addEventListener("click", basicwebSiden);
    document.querySelector("#grid_item2").addEventListener("click", uxSiden);
    document.querySelector("#grid_item3").addEventListener("click", animationSiden);
    document.querySelector("#grid_item4").addEventListener("click", contentSiden);

    function basicwebSiden() {
        console.log("basicwebSiden")
    }

    function uxSiden() {
        console.log("uxSiden")
    }

    function animationSiden() {
        console.log("animationSiden")
    }

    function contentSiden() {
        console.log("contentSiden")
    }
