function plusMinus(arr) {
    let positiveCount = 0;
    let negativeCount = 0;
    let zeroCount = 0;

    // Calculate the counts of positive, negative, and zero values
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            positiveCount++;
        } else if (arr[i] < 0) {
            negativeCount++;
        } else {
            zeroCount++;
        }
    }

    // Calculate the ratios
    const total = arr.length;
    const positiveRatio = (positiveCount / total).toFixed(6);
    const negativeRatio = (negativeCount / total).toFixed(6);
    const zeroRatio = (zeroCount / total).toFixed(6);

    // Print the ratios
    console.log(positiveRatio);
    console.log(negativeRatio);
    console.log(zeroRatio);
}