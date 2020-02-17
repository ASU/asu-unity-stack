// jest-puppeteer.config.js
module.exports = {
  launch: {
    headless: process.env.HEADLESS !== 'false',
    slowMo: (process.env.HEADLESS === 'false') ? 150 : false,
    args: ['--no-sandbox', '--disable-dev-shm-usage']
  }
}
