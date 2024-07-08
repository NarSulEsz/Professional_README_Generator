// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  } else if (license === 'Apache') {
      return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  } else if (license === 'GPL') {
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
  } else {
      return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { if (license === 'MIT') {
  return '[MIT License](https://opensource.org/licenses/MIT)';
} else if (license === 'Apache') {
  return '[Apache License 2.0](https://opensource.org/licenses/Apache-2.0)';
} else if (license === 'GPL') {
  return '[GNU GPL v3.0 License](https://www.gnu.org/licenses/gpl-3.0)';
} else {
  return '';
}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'MIT') {
  return 'This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.';
} else if (license === 'Apache') {
  return 'This project is licensed under the Apache License 2.0. See the [LICENSE](LICENSE) file for details.';
} else if (license === 'GPL') {
  return 'This project is licensed under the GNU General Public License v3.0. See the [LICENSE](LICENSE) file for details.';
} else {
  return '';
}
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  
  ## License
  ${renderLicenseSection(data.license)}
  [License Link](${renderLicenseLink(data.license)})
  `;
}
module.exports = {
  generateMarkdown,
  renderLicenseLink,
  renderLicenseBadge,
  renderLicenseSection
};
