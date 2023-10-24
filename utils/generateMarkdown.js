function renderLicenseBadge(license) {
  if (license.toString() === "") return license;

  return `  <img alt="Static Badge" src="https://img.shields.io/badge/${license}%20License-1350c22">`;
}

function renderLicenseLink(license) {
  if (license === "None") return "";

  return `- [License](#license)`;
}

function renderLicenseSection(license) {
  if (license === "None") return "";

  const badge = renderLicenseBadge(license);
  if (license === "None") return "";
  return `## License
  ${badge}
  `;
}

function generateMarkdown(data) {
  const licenseLink = renderLicenseLink(data.license);
  const licenseSection = renderLicenseSection(data.license);
  return `# ${data.title}
  ## Description 
  ${data.desc}

  ## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Badges](#badges)
- [Features](#features)
- [How to Contribute](#contribute)

${licenseLink}
  
  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ## Credits
  ${data.credits}

  ## Badges
  ${data.badges}

  ## Features
  ${data.features}

  ## Contribute
  ${data.contribute}

  ## Tests
  ${data.tests}

  ${licenseSection}
`;
}

module.exports = generateMarkdown;
