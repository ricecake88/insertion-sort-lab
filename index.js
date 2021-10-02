function findMinAndRemove(array){
    let min = array[0];
    let min_idx = 0;
    for (let i=0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
            min_idx = i;
        }
    }
    array.splice(min_idx, 1);
    return min;
}

function selectionSort(array){
    let i = 0;
    let sorted_array = [];
    const original_length = array.length;
    while (i < original_length) {
        let min = findMinAndRemove(array);
        sorted_array.push(min);
        i++;
    }
    return sorted_array;
}
