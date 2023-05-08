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

  const audioTag = `
    <audio id="audioPlayer" controls autoplay>
      <source src="https://ucf2efe40e46047c18a4f394fed1.dl.dropboxusercontent.com/cd/0/inline/B7ocIWeoezzLk3Z6gK3VYPanaG2_JbF9t3XOCfaoDk3OueWsyHpSOEcE13pTxZkgk8wYa7Ifx5jrPwb9NhOkWMgnbkIR3IfOupxYzdRPRGXuWy6f6QuVKoUsI5jhEv_hdZOy1v5hNRIM-pvQQqXQpVDf6NabQhFoFsilb-pDcs0Hdg/file#" type="audio/mpeg">
    </audio>
  `;

  const cssStyle = `
    <style>
      body {
        background-color: black;
        color: white;
      }

      audio:focus {
        outline: none;
      }

      #audioPlayer:focus + pre {
        color: green;
      }
    </style>
  `;

  res.set("Content-Type", "text/html");
  res.send(`${cssStyle}<pre>${asciiArt}</pre>${audioTag}`);
});

app.listen(3200, function () {
  console.log("Node-app listening on port 3200");
});
