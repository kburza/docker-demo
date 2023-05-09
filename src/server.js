const express = require("express");
const app = express();

app.get("/", (req, res) => {
  const asciiArt = `
  The Docker Node-app demo is running...

                    ##        .            
              ## ## ##       ==            
           ## ## ## ##      ===            
       /""""""""""""""""\\\___/ ===        
  ~~~ {~~ ~~~~ ~~~ ~~~~ ~~ ~ /  ===- ~~~   
       \\\______ o          __/            
         \\\    \\\        __/             
          \\\____\\\______/                
                                          
          |          |                     
       __ |  __   __ | _  __   _           
      /  \\\| /  \\\ /   |/  / _\\\ |      
      \\\__/| \\\__/ \\\__ |\\\_ \\\__  |  
`;

  const cssStyle = `
    <style>
      body {
        background-color: black;
        color: white;
      }
    </style>
  `;

  res.set("Content-Type", "text/html");
  res.send(`${cssStyle}<pre>${asciiArt}</pre>`);
});

app.listen(8000, function () {
  console.log("Node-app listening on port 8000");
});
