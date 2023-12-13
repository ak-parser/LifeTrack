export const getRandomColor = () => {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

export const getData = () => {
    return Math.round(Math.random() * 100) % 2 === 0
        ? "Значення показнику покращилось"
        : "Значення показнику погіршилося";
};
