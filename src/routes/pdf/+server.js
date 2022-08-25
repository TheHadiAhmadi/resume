import puppeteer from 'puppeteer'

async function printPDF() {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto('https://hadi-resume.vercel.app', {waitUntil: 'networkidle0'});
    const pdf = await page.pdf({ format: 'A4', printBackground: true, pageRanges: [1] });
   
    await browser.close();
    return pdf
}

export async function GET() {
    const pdf = await printPDF()

    const response = new Response(pdf, {headers: {
        "Content-Type": 'application/pdf',
        'Content-Length': pdf.length
    }})  
    
    return response;
}