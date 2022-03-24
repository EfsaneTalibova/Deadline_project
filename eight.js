function Eight_Function(array, word) {
    let new_array = []
    for (let i = 0; i < array.length; i++) {
        if (array[i][0].trim().toLowerCase() == word.toLowerCase()) {
            new_array.push(array[i])
        }
    }
    return new_array
}