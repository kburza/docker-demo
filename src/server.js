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
  res.set("Content-Type", "text/plain");
  res.send(asciiArt);
});

app.listen(3200, function () {
  console.log("Node-app listening on port 3200");
});
