const puppeteer = require("puppeteer");
const url = "https://www.baidu.com/";

// 访问网页并打印为图片
// const puppeteer = require('puppeteer');
// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.goto('https://www.baidu.com/');
//   await page.screenshot({path: 'file/example.jpg'});

//   await browser.close();
// })();

// 访问网页并打印为pdf
// const puppeteer = require('puppeteer');
// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.goto('https://www.baidu.com', {waitUntil: 'networkidle2'});
//   await page.pdf({path: 'file/hn.pdf', format: 'A4'});
//   await browser.close();
// })();

// 访问网页并执行脚本
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  // Get the "viewport" of the page, as reported by the page.
  const dimensions = await page.evaluate(() => {
    return {
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
      deviceScaleFactor: window.devicePixelRatio,
    };
  });
  // console.log("Dimensions:", dimensions);
  await browser.close();
})();
