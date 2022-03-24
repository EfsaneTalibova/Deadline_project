function Fifth_Function(sentence) {
    let array = sentence.split(' ')
    let new_sentence = ""
    for (let i = 0; i < array.length; i++) {
        new_sentence += array[i]
        if (i < array.length - 1) {
            new_sentence += ","
        }
    }
    return new_sentence
}