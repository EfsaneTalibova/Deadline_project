function first_Func(sentence) {
    let arr_of_sentence = sentence.split(' ')
    let str_arr = ""
    for (let i = 0; i < arr_of_sentence.length; i++) {
        str_arr += arr_of_sentence[i];
    }
    return sentence.length - str_arr.length
}