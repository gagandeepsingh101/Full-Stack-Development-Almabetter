function check_a_point(a, b, x, y, r) {
    // Your code goes here
    let dis = (a - x) + (b - y);
    if (dis < r) {
        return true;
    }
    else {
        return false;
    }
}
console.log(check_a_point(4,4,2,2,5));