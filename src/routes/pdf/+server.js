import { generatePDF } from "../../lib/api/pdf";

export async function GET({request}) {
  
    return generatePDF(new URL(request.url).origin, '');
}