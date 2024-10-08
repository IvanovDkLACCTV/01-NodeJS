const fs = require('fs');

fs.writeFile('./file.txt', 'Hello World!', (err) => {
  if (err) console.log(err)
    else {
      console.log('The file has been saved!');
      fs.appendFile('./file.txt', '\nOne more line', (err) => {
        if (err) console.log(err)
          else {
            console.log('The file has been appended!');
            fs.rename('./file.txt', './folder/newFile.txt', (err) => {
              if (err) console.log(err)
                else console.log('The file has been renamed!');
                  });
                }
            });
          }
      });


