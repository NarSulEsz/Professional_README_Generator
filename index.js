// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { type } = require('os');
const { generateMarkdown, renderLicenseLink, renderLicenseBadge, renderLicenseSection } = require('./generateMarkdown.js');
//const generateMarkdown = require('./utils/generateMarkdown.js');


// TODO: Create a function to write README file
function generateREADME(answers) {
  // Generate the content for the README file based on user input
  const content = `# ${answers.name}
## Description
${answers.description}

## Installation
${answers.installation}

## Usage
${answers.usage}

## Contributing
${answers.contributing}

## Tests
${answers.test}

## Questions
LinkedIn: ${answers.linkedIn}
GitHub: ${answers.gitHub}
Email: ${answers.email}

## License
    [License Link](${renderLicenseLink(answers.license)})
`;
 // Write the content to a README file
  fs.writeFile('README.md', content, (err) => {
      if (err) {
          console.error(err);
          return;
      }
      console.log('README.md file created successfully!');
  });
}
// Function to save the generated README file
const saveREADME = (md) => {
  //console.log(md);
  fs.writeFileSync("newREADME.md", md);
  console.log("Successfully written!");

}


// TODO: Create an array of questions for user input
//const userResponses = [];
// Array of questions for user input
const questions = [
    {
        type:"input",
        name:"name",
        message:"Enter your projects title", 
        default: "New Application",       
    },
    {
        type:"input",
        name:"location",
        message:"Where your application was created",   
        default: "Earth Planet"     
    },
    {
        type:"input",
        name:"description",
        message:"Describe your project breafly",
        default: "To make our life better",
    },
    {
        type:"input",
        name:"installation",
        message:"How to install your application",
        default: "Download from some site",
    },
    {
        type:"input",
        name:"usage",
        message:"What is the usage of your program",
        default: "On your on choise",
    },
    {
        type:"input",
        name:"contributing",
        message:"How to contribute to your project",
        default: "Find us on gitHub",
    },
    {
        type:"input",
        name:"test",
        message:"How to test your app",
        default: "Free",
    },
    {
        type:"input",
        name:"linkedIn",
        message:"Enter LinkedIn handle",    
        default: "nariman-suleimenov-61ba422b8/",    
    },
    {
        type:"input",
        name:"gitHub",
        message:"Enter GitHub username",   
        default: "NarSulEsz",     
    },
    {
        type:"input",
        name:"email",
        message:"Write your email",   
        default: "noadress@gmail.com",     
    },
    {
      type: "list",
      name: "license",
      message: "Choose a license for your project",
      choices: ["MIT", "Apache", "GPL"],
      default: "MIT"
  },
];
// Prompt the user for input based on the questions array
inquirer.prompt(questions)
  .then(answers => {
    console.log('User Responses:');
    console.log(answers);
    // You can further process the user responses here
  generateREADME(answers);
    })
   .catch(error => {
    console.error('Error occurred:', error);
  })

  

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();


const content = `# ${answers.name}
${renderLicenseBadge(answers.license)}
${renderLicenseLink(answers.license)}
${renderLicenseSection(answers.license)}

## Description
${answers.description}
`