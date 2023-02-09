var inquirer = require("inquirer");
var fs = require("fs");
const renderLicenseBadge = require("./utils/generateMarkdown");

var profile = new Promise(function (resolve, reject) {
    resolve(inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is the title of your project?"
        },
        {
            type: "input",
            name: "description",
            message: "Please provide a description for your project."
        },
        {
            type: "input",
            name: "installation",
            message: "Please provide the installation for your project."
        },
        {
            type: "input",
            name: "usage",
            message: "Please provide the usage of your project."
        },
        {
            type: "list",
            name: "license",
            message: "Please select the license for your project.",
            choices: [
                "Apache License 2.0",
                "GNU General Public License v3.0",
                "MIT License",
                'BSD 2-Clause "Simplified" License',
                'BSD 3-Clause "New" or "Revised" License',
                'Boost Software License 1.0',
                'Creative Commons Zero v1.0 Universal',
                'Eclipse Public License 2.0',
                'GNU Affero General Public License v3.0',
                'GNU General Public License v2.0',
                'GNU Lesser General Public License v2.1',
                'Mozilla Public License 2.0',
                'The Unlicense',
            ]
        },
        {
            type: "input",
            name: "contribute",
            message: "Please provide any contributions guidlines to your project."
        },
        {
            type: "input",
            name: "test",
            message: "Please provide the test instructions for your project."
        },
        {
            type: "input",
            name: "github",
            message: "Please provide the username for you github account."
        },
        {
            type: "input",
            name: "email",
            message: "Please provide the email you would like to be contacted at."
        },
    ])
    )
});

profile.then(function(data){
    const readme = `# ${data.title}

${renderLicenseBadge(data)}
    
## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)


## Installation

${data.installation}

## Usage 

${data.usage}

## License

This application is covered by the following license: ${data.license}.

## Contributing

${data.contribute}

## Tests

${data.test}

## Questions

If you have any futher questions, feel free to message me through my email or my github. Both of which are linked bellow

[Github Profile](https://github.com/${data.github}) | 
[My Email - ${data.email}](mailto:${data.email})
`;
    fs.writeFile('README.md', readme, function (err) {
        if (err) {
            return console.log(err);
        }

        console.log('README has been created!');
    });
})
