function generate() {
    return Math.floor(Math.random() * 12 + 1);
}

function generate2() {

    let numbers = [];
    let nr = 0;
    while (nr != 0) {
        let rand = generate();
        if (!numbers.includes(rand)) {
            nr++;
            numbers.push(rand);
        }
    }

}

export {
    generate2
}