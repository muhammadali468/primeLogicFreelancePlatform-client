import {} from "react";
import { OTPinput } from "./comp/VerifyAccount";
import useCookieGrabber from "@/hooks/useCookieGrabber";
import { jwtDecode } from "jwt-decode";
import { redirect } from "next/navigation";

type UserToken = {
  uid: string; // Email address of the user
  isVerified: boolean | null; // Indicates if the user is verified; can be null
  tokenVersion: number; // Version of the token (e.g., for invalidation purposes)
  role: "CLIENT" | "ADMIN" | "MODERATOR"; // User role; extend as needed
  iat: number; // Issued at timestamp (UNIX time)
  exp: number; // Expiry timestamp (UNIX time)
};
function VerifyAccountPage() {
  const token = useCookieGrabber();
  console.log(token);

  if (token?.value.length === 0) {
    return <div>no token found...</div>;
  }
  const decodedToken = jwtDecode(token?.value || "") as UserToken;
  console.log(decodedToken);
  if (!decodedToken || !decodedToken.uid) {
    return redirect("/");
  }

  const uid = decodedToken.uid;
  console.log("Email:", uid); // Log the email for debugging purposes. In a real-world application, you should use this email to send the OTP to the user.

  return (
    <>
      <section className="h-screen flex items-center justify-center">
        <OTPinput email={uid} />
      </section>
    </>
  );
}

export default VerifyAccountPage;
