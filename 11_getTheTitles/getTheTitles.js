const getTheTitles = function(arr) {
        // console.log(arr);
        let titles = [];
        // for(let i = 0; i< arr.length; i++) {
        //     titles.push(arr[0].title)
        // }
        arr.forEach(element => titles.push(element.title))
    return titles
};

// const books = [
//   {
//     title: "Book",
//     author: "Name",
//   },
//   {
//     title: "Book2",
//     author: "Name2",
//   },
// ];
// console.log(getTheTitles(books)); 
// Do not edit below this line
module.exports = getTheTitles;
