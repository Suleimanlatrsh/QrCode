

/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from "fs";


inquirer
  .prompt([
    /* Pass your questions in here */
    {
      message : "typr your URL: ", 
      name: "URL"
    }

    
  ])

  
  .then((answers) => {
    // Use user feedback for... whatever!!

    const URL =answers.URL;
    var qr_svg = qr.image(URL);
    qr_svg.pipe(fs.createWriteStream("qr_image.png"))


    fs.writeFile("URL.txt", URL, (err) => {
      if (err) throw err;
      console.log("The file has been saved!");
    });

  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
 
  // var qr_svg = qr.image('I love QR!', { type: 'svg' });

  // qr_svg.pipe(require('fs').createWriteStream('i_love_qr.svg'));
   
  // var svg_string = qr.imageSync('I love QR!', { type: 'svg' });