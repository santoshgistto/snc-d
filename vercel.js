const fs = require('fs')
var http = require('http');
const fetch  = require('node-fetch')

 function readDir(){
    
    let configs =[]
    let fileNames =[]

    try{
        console.log(`------------------`)
        filesNames = fs.readdirSync("content")
        console.log(`--------------${filesNames}-----`)
        for (const file in filesNames) {
            try {
                const data = fs.readFileSync(`content/${filesNames[file]}`, 'utf8')
                let config = {
                    "file": filesNames[file],
                    "data": data
                }
                configs.push(config)
                let f = {
                    "name":filesNames[file]
                }
                fileNames.push(f)
                console.log(data)
              } catch (err) {
                console.error(err)
              }
          }
    }catch(error){
        console.log(`--------------${error}-----`)

    }
   // console.log(`--------------${JSON.stringify(configs)}-----`)
    let indexfile = {
        "name":"index.json",
        "data":fileNames
    }
  //  console.log(`--------------${JSON.stringify(indexfile)}-----`)

    //configs.push(indexfile)
    deploy(configs)
}
readDir()

 async function deploy(configs){
    let token = 'oTlVVCm6D17HNbthtq6LjSuD' 
    var data = `{
      "name":"rest",
      "files": ${configs} ,
      "projectSettings": {
        "framework": null
      }
    }`;
    var d = {
        name : "rest",
        target:"production",
        files:configs,
        projectSettings: {
            "framework": null
          }
    }

    console.log('vercel---->', JSON.stringify(data))
    let vercelUrl = 'https://api.vercel.com/v13/deployments'
    const response = await fetch(vercelUrl, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json'      
      },
      body: JSON.stringify(d) // body data type must match "Content-Type" header
    });
    console.log("vercelUrl response ===>", response)
}