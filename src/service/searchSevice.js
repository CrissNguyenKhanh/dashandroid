// lay mot request ben kia
import * as request from "../utils/httpRequest";

export const searchApi = async (q, type = "more") => {
  try {
    const res = await request.getSearch(`doctor/getAllDoctorData`, {
      params: {
        q,
        type,
      },
    });


    return res.data;
  } catch (error) {
    console.log(error);
  }
};
