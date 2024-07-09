// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');


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
${generateMarkdown.renderLicenseLink(answers.license)}
`;

  if (!fs.existsSync('./output')) {
    fs.mkdirSync('./output');
  }
  // Write the content to a README file
  fs.writeFile('output/README.md', content, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('README.md file created successfully!');
  });
}


// TODO: Create an array of questions for user input
//const userResponses = [];
// Array of questions for user input
const questions = [
  {
    type: "input",
    name: "name",
    message: "Enter your projects title",
    default: "New Application",
  },
  {
    type: "input",
    name: "location",
    message: "Where your application was created",
    default: "Earth Planet"
  },
  {
    type: "input",
    name: "description",
    message: "Describe your project breafly",
    default: "To make our life better",
  },
  {
    type: "input",
    name: "installation",
    message: "How to install your application",
    default: "Download from some site",
  },
  {
    type: "input",
    name: "usage",
    message: "What is the usage of your program",
    default: "On your on choise",
  },
  {
    type: "input",
    name: "contributing",
    message: "How to contribute to your project",
    default: "Find us on gitHub",
  },
  {
    type: "input",
    name: "test",
    message: "How to test your app",
    default: "Free",
  },
  {
    type: "input",
    name: "linkedIn",
    message: "Enter LinkedIn handle",
    default: "nariman-suleimenov-61ba422b8/",
  },
  {
    type: "input",
    name: "gitHub",
    message: "Enter GitHub username",
    default: "NarSulEsz",
  },
  {
    type: "input",
    name: "email",
    message: "Write your email",
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

// TODO: Create a function to initialize app
function init() {
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
}

// Function call to initialize app
init();