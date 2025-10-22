const fs = require('fs');
const path = require('path');

const logsDir = path.join(process.cwd(), 'logs');

// Check if logs directory exists
if (fs.existsSync(logsDir)) {
    // If it already exists -
    // Change current working directory to logs
    process.chdir(logsDir);
} else {
    // If it does not exisit -
    // Create the logs directory and 
    fs.mkdirSync(logsDir);
    // Change current working directory to logs
    process.chdir(logsDir);
}

// Create 10 log files
for (let i = 0; i <= 9; i++) {
  const fileName = `log${i}.txt`;
  fs.writeFileSync(fileName, `This is log file #${i}`);
  console.log(fileName);
}

