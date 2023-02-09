// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
let button = ''

function generateMarkdown(data) {
  if (data.license == 'Apache License 2.0') {
    button = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }
  if (data.license == 'GNU General Public License v3.0') {
    button = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  }
  if (data.license == 'MIT License') {
    button = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)` 
  }
  if (data.license == 'BSD 2-Clause "Simplified" License') {
    button = `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`
  }
  if (data.license == 'BSD 3-Clause "New" or "Revised" License') {
    button = `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)` 
  }
  if (data.license == 'Boost Software License 1.0') {
    button = `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)` 
  }
  if (data.license == 'Creative Commons Zero v1.0 Universal') {
    button = `[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)` 
  }
  if (data.license == 'Eclipse Public License 2.0') {
    button = `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`
  }
  if (data.license == 'GNU Affero General Public License v3.0') {
    button = `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`
  }
  if (data.license == 'GNU General Public License v2.0') {
    button = `![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`
  }
  if (data.license == 'GNU Lesser General Public License v2.1') {
    button = `[![License: FDL 1.3](https://img.shields.io/badge/License-GPL_v2.1-blue.svg)](https://www.gnu.org/licenses/fdl-1.3)`
  }
  if (data.license == 'Mozilla Public License 2.0') {
    button = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)` 
  }
  if (data.license == 'The Unlicense') {
    button = `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`
  }
  return button
}


module.exports = generateMarkdown;
