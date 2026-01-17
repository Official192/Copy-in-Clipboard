const input = document.querySelector("#input");

function app() {
    const write = input.value;

    if(write) {
        alert("Copied");
    }

    navigator.clipboard.writeText(write);
}