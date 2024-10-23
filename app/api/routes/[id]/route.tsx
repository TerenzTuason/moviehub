import { NextApiRequest, NextApiResponse } from "next";
import connect from "../../../db";
import Movies from "../../../../models/Movies";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const GET = async (request: NextApiRequest, { params }: {
    params: { id: string }
}) => {
    try {
        await connect();
        const movie = await Movies.findById(params.id);
        return new NextResponse(JSON.stringify(movie), { status: 200 })
    }
    catch (error) {
        return new NextResponse("Error in fetching movies " + error, { status: 500 })
    }
}
