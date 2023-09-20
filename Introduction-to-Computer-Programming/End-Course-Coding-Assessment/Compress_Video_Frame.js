function compressVideo(frames) {
    // Your code goes here
    let i = 0;
    while (i < frames.length) {
        // check if i > 0 or i < frames.length then check if frames[i] is equal to its previous frame or its equal to next frame
        if ((i > 0 && frames[i] === frames[i - 1]) || (i < frames.length - 1 && frames[i] === frames[i + 1])) {
            // remove the next frame from ith frames
            frames.splice(i, 1);
            // set i=0
            i = 0;
        } else {
            i++;
        }
    }
    return frames.length;
}
console.log(compressVideo([1,2,2,2,1]));