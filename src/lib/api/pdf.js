import { BROWSERLESS_API_TOKEN } from '$env/static/private'

export async function generatePDF(origin, name) {
  
    const token = BROWSERLESS_API_TOKEN;

    const headers = {
        'Cache-Control': 'no-cache',
        'Content-Type': 'application/json',
    }

    let url = origin;
    if(name) url += '/' + name

    const options = {
        url,
        options: {
            'displayHeaderFooter': true,
            format: 'A4',
            printBackground: true
        }
    }

    const body = JSON.stringify(options)
    return fetch('https://chrome.browserless.io/pdf?token=' + token, {
        method: 'POST',
        headers,
        body
    })
}
