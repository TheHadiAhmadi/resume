import { BROWSERLESS_API_TOKEN } from '$env/static/private'
// import chrome from 'chrome-aws-lambda'
// import puppeteer from 'puppeteer-core'

// async function printPDF() {
//     const browser = await puppeteer.launch({ 
//         args: [...chrome.args, '--hide-scrollbars', '--disable-web-security'],
//         defaultViewport: chrome.defaultViewport,
//         executablePath: await chrome.executablePath,
//         headless: true,
//         ignoreHTTPSErrors: true
//     });

//     const page = await browser.newPage();
//     await page.goto('https://hadi-resume.vercel.app', {waitUntil: 'networkidle0'});
//     const pdf = await page.pdf({ format: 'A4', printBackground: true, pageRanges: [1] });
   
//     await browser.close();
//     return pdf
// }

export async function GET({request}) {
    // const pdf = await printPDF()
    const token = BROWSERLESS_API_TOKEN;

    const options = {
        url: new URL(request.url).origin,
        options: {
            'displayHeaderFooter': true,
            format: 'A4',
            printBackground: true
        }
    }
    console.log(options)
    const res = await fetch('https://chrome.browserless.io/pdf?token=' + token, {
        method: 'POST',
        headers: {
            'Cache-Control': 'no-cache',
            'Content-Type': 'application/json',
            body: JSON.stringify(options)
        }
    })
    
    return res;
}