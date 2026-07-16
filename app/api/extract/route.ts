import { NextRequest, NextResponse } from "next/server";
import { extractLetter, type ExtractInput } from "@/lib/pipeline";

/**
 * POST /api/extract — extract one NHS letter into strict JSON.
 *
 * Accepts either:
 *  - application/json: { sampleId?, text? }
 *  - multipart/form-data: file (image), or a `text` field, or `sampleId`
 */
export async function POST(req: NextRequest) {
  try {
    const contentType = req.headers.get("content-type") || "";
    const input: ExtractInput = {};

    if (contentType.includes("multipart/form-data")) {
      const form = await req.formData();
      const sampleId = form.get("sampleId");
      const text = form.get("text");
      const file = form.get("file");
      if (typeof sampleId === "string" && sampleId) input.sampleId = sampleId;
      if (typeof text === "string" && text) input.text = text;
      if (file && file instanceof File) {
        const buf = Buffer.from(await file.arrayBuffer());
        input.imageBase64 = buf.toString("base64");
        input.imageMime = file.type || "image/png";
      }
    } else {
      const body = (await req.json()) as ExtractInput;
      if (body.sampleId) input.sampleId = body.sampleId;
      if (body.text) input.text = body.text;
      if (body.imageBase64) {
        input.imageBase64 = body.imageBase64;
        input.imageMime = body.imageMime;
      }
    }

    const extraction = await extractLetter(input);
    return NextResponse.json({ extraction });
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "extract failed" },
      { status: 400 },
    );
  }
}
