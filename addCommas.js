

nums =[
    1000,
    1000000,
    23457891,
    362,
    2,
    0,
    89321,
    -1238,
    -1
]


function addCommas(nums) {

    console.log((nums).toLocaleString())};
    // const count = Math.ceil(nums.length/3)
    // function everyThree(i){
    //     return "," + nums.toString().slice(i)
    // }

    // for (let i = 0; i< nums.length; i++){
    //    console.log(nums[i].toString().slice(0,1) + everyThree(i))
    // }
    // }

// if (nums[i].length % 3 === 0 && nums[i].length > 3) {
//     let n=[3,6]
//     return "," + nums[i].toString().slice(-n)
// let count = 0
// while (count <= 0){
// for (let i=0; i<= nums.toString().length; i+=3){
//  console.log(nums.toString().slice(0,1) + "," + everyThree(i) + everyThree(i+3))}
// count ++}

//         console.log(x)
//     listA.push(nums[i].toString().slice(x) + ",")
    
        

//     }
//     console.log(listA)}
// }}
    // }}}
for (let i =0 ; i< nums.length; i++){
addCommas(nums[i])}



module.exports = {addCommas}