export const addRuble = (val) => {
    let value = val.toString();
    let sum;
    switch (value.length) {
        case (3, 4):
            sum = `${value} ₽`;
            break;
        case 5:
            sum = `${value.slice(0, 2)} ${value.slice(2)} ₽`;
            break;
        case 6:
            sum = `${value.slice(0, 3)} ${value.slice(3)} ₽`;
            break;
        case 7:
            sum = `${value.slice(0, 1)} ${value.slice(2, 5)} ${value.slice(
                4
            )} ₽`;
            break;
    }
    return sum;
};
