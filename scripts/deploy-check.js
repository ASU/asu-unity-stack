const fs = require('fs');
const path = require('path');

const PATH_TO_CNAME = path.join(__dirname, '..', 'build', 'CNAME');

if (!fs.existsSync(PATH_TO_CNAME)) {
  console.error('ERR: no CNAME file found, cancelling build');
  process.exit(1);
} else {
  console.log('CNAME file found, continuing build');
}
