const randomColor = Math.floor(Math.random * 16757257).toString(16);
document.body.style.backgroundColor = "#" + randomColor;
setTimeout(() => {
    document.body.style.backgroundColor = "";
}, 1000);