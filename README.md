# Simple Calculator

A TypeScript-based command-line calculator that evaluates mathematical operations including basic arithmetic operations, scientific functions, and complex mathematical expressions.

---
## Table of Contents

- [About](#about)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [Tech-Stack](#tech-stack)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#licence)
- [Contact](#contact)
---
## About
A simple basic TypeScript-based command-line calculator application for kindergartener, who wants to learn calculations. The application has the operations like addition, subsraction, multiplication, division, modulus, expinential calculation and advance operations like square root calculation and factroial.

## Installation
```bash
# Clone the repository by running the below command in terminal.
git clone git@github.com:mohammed412anas/calculator.git

# Go into the project directory in your terminal or open the directory that you have cloned and open the terminal from this downloaded directory and run this command.
cd calculator

# Install dependencies in the project repo with the command.
npm install
```

## Usage

### Running the Calculator

```bash
# To run the application in CLI run the command from the project directory.
npm run dev
# or
tsc && node dist/main.js
```


### Supported Operations

- Basic arithmetic: `+`, `-`, `*`, `/`, `%`, `^` or `**`.
- Scientific functions: `sqrt()`, factorial (`!`).
- Numbers with quotes are automatically filtered.


## Testing 
```bash
# To test the code first go to the project directory if you are not in the project directory open the directory that you have cloned and open the terminal from this downloaded directory and run this command.
cd calculator

# To test the project run the below command.
npm run test

# To see the code coverage of the project run the below command in terminal.
npm run coverage

```

## Tech-Stack

- Typescript
- NodeJs


## Dependencies(Dev)

- `prompt-sync`: Interactive command-line input.
- `mathjs`: Mathematical expression evaluation.
- `jest`: Testing framework .
- `ts-node`: To automatically transpile and run Typescript file.


## Contributing
 - Fork this repository to your own GitHub account.
 - Clone your fork to your local machine.
 - Create your feature branch (`git checkout -b feature/your-feature`).
 - Commit your changes (`git commit -m 'feat: add your feature'`).
 - Push to the branch (`git push origin feature/your-feature`).
 - Open a Pull Request.

 ## License
This project is licensed under the MIT License.

## Contact
 - Name – mohammed.anas@everest.engineering
 - GitHub – mohammed412anas
