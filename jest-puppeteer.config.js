// jest-puppeteer.config.js
module.exports = {
  launch: {
    headless: process.env.HEADLESS !== 'false',
    slowMo: (process.env.HEADLESS === 'false') ? 150 : false,
    executablePath: process.env.CHROME_BIN
  }
}
