import { IApiResponse } from "@/interfaces/IApiResponse";
import conn from "@/lib/db";

// Revalidate is set to 0 because the data is changing constantly and so it must be fetched on every request.
export const revalidate = 0;

export interface ITotalCountData {
  count?: number;
}

export async function GET(): Promise<Response> {
  let apiResponse: IApiResponse<ITotalCountData>;

  try {
    const sqlQuery = "SELECT SUM(total_ingested) FROM public.arxiv_categories;";

    const res = await conn?.query(sqlQuery);

    apiResponse = {
      success: true,
      message: "Total count of scholarly articles ingested",
      data: {
        count: res?.rows[0].sum,
      },
      respondedAt: new Date().toUTCString(),
    };

    return Response.json(apiResponse, { status: 200 });
  } catch (error) {
    apiResponse = {
      success: false,
      message: `Error while fetching total count: ${error}`,
      data: {
        count: undefined,
      },
      respondedAt: new Date().toUTCString(),
    };

    return Response.json(apiResponse, { status: 500 });
  }
}
