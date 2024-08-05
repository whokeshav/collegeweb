import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import { sendEmail } from "@/helpers/mailer";
import jwt from "jsonwebtoken";
import { getDataFromToken } from "@/helpers/getDataFromToken";

connect();

export async function POST(request: NextRequest) {
  const userId = await getDataFromToken(request);
  const user = User.findOne({ _id: userId }).select("-password");
  // check if there is no user already
  return NextResponse.json({
    message: "User Found",
    data: user,
  });
}
