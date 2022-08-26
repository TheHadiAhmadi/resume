import { getResume } from "../../lib/api/resume";

export async function load({params}) {
    return getResume(params.id)
}