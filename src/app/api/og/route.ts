import { ImageResponse } from "next/og";
import fs from "fs";
import path from "path";

export const runtime = "edge";

// Load the font file
const tankerFont = fs.readFileSync(
  path.join(process.cwd(), "app/fonts/Tanker-Regular.woff2")
);

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
            backgroundColor: "#0A2933",
            width: "1200px",
            height: "630px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            textAlign: "center",
            padding: "50px",
          fontFamily: "Tanker",
        }}
      >
        <span style={{ fontSize: 64 }}>Nimesh Babu Thapa</span>
        <span style={{ fontSize: 32, marginTop: 20 }}>
          UI / UX Designer & Creative Developer
        </span>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Tanker",
          data: tankerFont,
          style: "normal",
          weight: 400,
        },
      ],
    }
  );
}
