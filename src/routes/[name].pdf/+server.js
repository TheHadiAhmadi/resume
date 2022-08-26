import { generatePDF } from "../../lib/api/pdf";

export async function GET({request, params}) {
    return generatePDF(new URL(request.url).origin, params.name);
}