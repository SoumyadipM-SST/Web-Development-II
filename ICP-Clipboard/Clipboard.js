const box = document.getElementById("box");
const StatusText = document.getElementById("StatusText");

document.getElementById("copy").onclick = async () => {
    try {
        await navigator.clipboard.writeText(box.value);
        StatusText.textContent = "Copied!";
        StatusText.style.color = "green";
        setTimeout(() => StatusText.textContent = "", 1500);
    }
    catch {
        StatusText.innerText = "Copy failed";
        StatusText.style.color = "red";
    }
};

document.getElementById("paste").onclick = async () => {
    try {
        const text = await navigator.clipboard.readText();
        box.value = text;
        StatusText.textContent = "Pasted!";
        StatusText.style.color = "green";
        setTimeout(() => StatusText.textContent = "", 1500);
    }
    catch {
        StatusText.textContent = "Paste blocked";
        StatusText.style.color = "red";
    }
};
