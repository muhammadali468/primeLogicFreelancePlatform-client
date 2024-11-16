import { ENV } from "@/config";

const accessTokenExpiry = 14 * 60 * 1000; // 14 minutes in milliseconds
export const refreshTokenExpiry = 7 * 24 * 60 * 60 * 1000; // 7 days in milliseconds
const COOKIEOPTIONS = {
  ACESSTOKENCOOKIEOPTIONS: {
    httpOnly: ENV === "PRODUCTION",
    secure: ENV === "PRODUCTION",
    sameSite: "none",
    expires: new Date(Date.now() + accessTokenExpiry)
  },
  REFRESHTOKENCOOKIEOPTIONS: {
    httpOnly: ENV === "PRODUCTION",
    secure: ENV === "PRODUCTION",
    sameSite: "none",
    expires: new Date(Date.now() + refreshTokenExpiry)
  }
};
export const { REFRESHTOKENCOOKIEOPTIONS, ACESSTOKENCOOKIEOPTIONS } = COOKIEOPTIONS;
