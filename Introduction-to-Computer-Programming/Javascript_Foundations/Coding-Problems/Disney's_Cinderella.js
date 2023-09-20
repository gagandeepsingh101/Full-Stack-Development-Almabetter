let slippers=[10, 7, 25, 14];
function sortSlippers(slippers) {

    return slippers.sort((a, b) => {
        if(a>b){
            return 1;
        }
        else if(a<b){
            return -1;
        }
        else{
            return 0;
        }
    });
}
console.log(sortSlippers(slippers));
