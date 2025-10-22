const fs = require('fs');
const path = require('path');

const logsDir = path.join(process.cwd(), 'logs');

// Check if logs directory exists
if (fs.existsSync(logsDir)) {
    // If it exists -
    // Read the files inside the logs directory
    const files = fs.readdirSync(logsDir);
    // Print the names of the files and delete them
    files.forEach(file => {
    console.log(`delete files...${file}`);
    fs.unlinkSync(path.join(logsDir, file));
  });
    // Remove the directory
    fs.rmdirSync(logsDir);
} else {
    console.log("Directory does not exist");
}

