import { NextRequest, NextResponse } from "next/server";

import GetHandler from "./Get";
import PostHandler from "./Post";
// import PatchHandler from "./Patch";
// import PutHandler from "./Put";
// import DeleteHandler from "./Delete";
// import HeadHandler from "./Head";
// import OptionsHandler from "./Options";

export const GET = async (req: NextRequest) => GetHandler(req);
export const POST = async (req: NextRequest) => PostHandler(req);
// export const PATCH = async (req: NextRequest) => PatchHandler(req);
// export const PUT = async (req: NextRequest) => PutHandler(req);
// export const DELETE = async (req: NextRequest) => DeleteHandler(req);
// export const HEAD = async (req: NextRequest) => HeadHandler(req);
// export const OPTIONS = async (req: NextRequest) => OptionsHandler(req);
