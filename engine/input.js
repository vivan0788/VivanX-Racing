const Input = {
    keys: {}
};

document.addEventListener("keydown", e => Input.keys[e.key] = true);
document.addEventListener("keyup", e => Input.keys[e.key] = false);
