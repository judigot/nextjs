import { NextRequest, NextResponse } from "next/server";

interface Data {
  data: string;
}

const GetHandler = async (req: NextRequest) => {
  const urlParams = new URL(req.url);

  const data = urlParams.searchParams.get("sampleURLVariable");

  return NextResponse.json<Data>({
    data: `Get Handler Response: ${urlParams.searchParams}`,
  });
};

export default GetHandler;
