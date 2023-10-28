function findRepeatingElements(arr) {
    const n = arr.length;

    
    for (let i = 0; i < n; i++) {
        const index = Math.abs(arr[i]);

       
        if (arr[index] > 0) {
            arr[index] = -arr[index];
        } else {
           
            console.log(index);
        }
    }
}

const arr = [1, 2, 3, 6, 3, 6, 1];
console.log("Repeating elements:");
findRepeatingElements(arr);
