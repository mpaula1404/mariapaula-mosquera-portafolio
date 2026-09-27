import { chromium } from "playwright";
import chromiumBinary from "@sparticuz/chromium";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function GET() {
  let browser;

  try {
    const executablePath = await chromiumBinary.executablePath();

    browser = await chromium.launch({
      args: chromiumBinary.args,
      executablePath,
      headless: true,
    });

    const page = await browser.newPage({
      viewport: {
        width: 1600,
        height: 1000,
      },
      deviceScaleFactor: 1,
    });

    const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

    await page.goto(baseUrl, {
    waitUntil: "networkidle",
    });

    await page.emulateMedia({
      media: "screen",
    });

    const pdf = await page.pdf({
      format: "A4",
      printBackground: true,
      margin: {
        top: "0",
        right: "0",
        bottom: "0",
        left: "0",
      },
    });

    return new NextResponse(new Uint8Array(pdf), {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition":
          'attachment; filename="CV-Maria-Paula-Mosquera.pdf"',
      },
    });
  } catch (error) {
    console.error("Error generando PDF:", error);

    return NextResponse.json(
      {
        error: "No se pudo generar el PDF",
      },
      { status: 500 }
    );
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}