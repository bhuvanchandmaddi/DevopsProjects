const fs = require("fs")

// All of these operations are asynchronous 

// Reading from the file
// you can speciy the encoding as utf-8 here or in line 10 data -> data.toString()

fs.readFile("./docs/file1.txt","utf8",(err,data) => {
    if (err){
        console.log(err)
    }
    console.log(data)
});


//Write to the file

fs.writeFile("./docs/file2.txt","This is dummy data",() => {
    console.log("contents written to file");
});

// create a directory
if(!fs.existsSync("./temp_dir")){
    fs.mkdir("./temp_dir",(err)=>{
        if(err){
            console.log(err)
        }
        console.log("Created successfully")
    })
}
else{
    //Delete the directory if it exists already
    fs.rmdir("./temp_dir",(err)=>{
        if(err){
            console.log(err)
        }
        console.log("Deleted successfully")
    })
}

// Delete file

if(fs.existsSync("./docs/deleteme")){
    fs.unlink("./docs/deleteme",(err)=>{
        if(err){
            console.log(err)
        }
        console.log("File deleted successfully")
    })
}