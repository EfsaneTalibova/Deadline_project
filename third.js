function Third_Function(total_arr) {
    let numbers = [];
    for (let i = 0; i < total_arr.length; i++) {
        if (total_arr[i] % 2 == 0) {
            numbers.push(total_arr[i]);
        }
    }
    return numbers;
}