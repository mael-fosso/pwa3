if("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").then(registraction=> {
        console.log("SW Registered!");
        console.log(registraction);
    }).catch(error => {
        console.log("SW Registration Failed!");
        console.log(error);
    });
}