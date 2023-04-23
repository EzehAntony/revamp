import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(request) {
  const res = await request.json();
  axios
    .post("https://api.imgur.com/3/image", {
      headers: {
        Authorization: "Client-ID a106643445852ec",
      },
      data: res.formData,
    })
    .then((res) => {
      return NextResponse.json({ res });
    })
    .catch((err) => {
      console.log(err.response);
      throw new Error(err);
    });
}
