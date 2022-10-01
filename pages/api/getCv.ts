import { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from '../../sanity'
import { IcV } from "../../typings";

const query = groq`
   *[_type == "pageInfo"][0] {
   "cv": cv.asset->url
 }
`

type Data = IcV




export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
){
    const cV: IcV = await sanityClient.fetch(query);

    res.status(200).json( cV )
}