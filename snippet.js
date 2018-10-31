function factr(n){
    return n === 0 ? 1 : n*factr(n-1);
}