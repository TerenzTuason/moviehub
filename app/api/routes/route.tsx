
import { NextRequest, NextResponse } from "next/server";
import connect from "../../db";
import Movies from "../../../models/Movies";
import { NextApiRequest, NextApiResponse } from "next";

export const GET = async (request: NextApiRequest, { params } : {
  params: { id : string }
}) => {
    try {
        await connect();
        const movies = await Movies.find();
        return new NextResponse(JSON.stringify(movies), { status: 200 })
    }
    catch (error) {
        return new NextResponse("Error in fetching movies " + error, { status: 500 })
    }
}

