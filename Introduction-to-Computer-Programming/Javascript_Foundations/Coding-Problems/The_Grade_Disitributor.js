function distributeGrades(scores) {
    let markObj = {
        A: 0,
        B: 0,
        C: 0,
        D: 0,
        F: 0
    }
    for (let i = 0; i < scores.length; i++) {
        if (scores[i] >= 90 && scores[i] <= 100) {
            markObj.A = markObj.A + 1;
        }
        else if (scores[i] >= 80 && scores[i] <= 89) {
            markObj.B = markObj.B + 1;
        }
        else if (scores[i] >= 70 && scores[i] <= 79) {
            markObj.C = markObj.C + 1;
        }
        else if (scores[i] >= 60 && scores[i] <= 69) {
            markObj.D = markObj.D + 1;
        }
        else {
            markObj.F = markObj.F + 1;
        }
    }
    return markObj;
}

console.log(distributeGrades([89, 90,78,80,92,99,65,55,34,67,89]));