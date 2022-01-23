var fs = require ('fs')

fs.readFile("canada.txt", (err,data) =>{
    if (err){
        console.log(err)
        return
    }
    console.log(data.toString())
})

var data = fs.readFileSync("input_countries.csv")
console.log(data.toString())




// fs.unlink("canada.txt", (err) =>{
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log("File detected")
// })


