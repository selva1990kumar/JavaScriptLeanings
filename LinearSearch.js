// Linear Search
let searchArray = [1,2,3,8,4,5,6];
let searchElement = 45;

let linearSearch = (searchArray,searchElement) =>{
    for(let i =0; i<searchArray.length; i++){
        if(searchArray[i] == searchElement){
            return i;
        }
    }
    return -1;
};

console.log(linearSearch(searchArray,searchElement));
