import { ImageResponse } from "next/server";

export const runtime = "edge";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    // ?title=<title>
    const hasTitle = searchParams.has("title");
    const title = hasTitle
      ? searchParams.get("title")?.slice(0, 100)
      : "My default title";

    const imageData = await fetch(
      new URL(
        "../../../public/images/ice.png",
        import.meta.url,
      ),
    ).then((res) => res.arrayBuffer());

    const fontData = await fetch(
      new URL(
        "../../../public/fonts/source-sans-3-black.ttf",
        import.meta.url,
      ),
    ).then((res) => res.arrayBuffer());

    return new ImageResponse(
      (
        <div
          style={{
            backgroundColor: "black",
            height: "100%",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            flexWrap: "nowrap",
          }}
        >
          <div
            style={{
              display: "flex",
            }}
          >
            <img
              width="150"
              height="150"
              src={imageData as unknown as string}
            />
          </div>
          <div
            style={{
              fontSize: 70,
              fontStyle: "normal",
              letterSpacing: "-0.025em",
              color: "white",
              marginTop: 50,
              padding: "0 120px",
              lineHeight: 1,
              textAlign: "center",
              whiteSpace: "pre-wrap",
              fontFamily: '"Source Sans 3"',
            }}
          >
            {title}
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: "Source Sans 3",
            data: fontData,
            style: "normal",
          },
        ],
      },
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}