function timeConversion(s) {
    // Extract the hours, minutes, seconds, and AM/PM part from the input string
    const timeComponents = s.split(":");
    const hours = parseInt(timeComponents[0], 10);
    const minutes = timeComponents[1];
    const seconds = timeComponents[2].substr(0, 2);
    const period = timeComponents[2].substr(2, 2);

    // Convert to 24-hour format
    if (period === 'PM' && hours !== 12) {
        hours += 12;
    } else if (period === 'AM' && hours === 12) {
        hours = 0;
    }

    // Format the time components in 24-hour format
    const formattedTime = String(hours).padStart(2, '0') + ":" + minutes + ":" + seconds;

    return formattedTime;
}
