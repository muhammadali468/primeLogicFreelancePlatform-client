import {} from "react";
import { OTPinput } from "./comp/VerifyAccount";
import useCookieGrabber from "@/hooks/useCookieGrabber";
import { jwtDecode } from "jwt-decode";

function VerifyAccountPage() {
  const token = useCookieGrabber();
  if (!token) {
    return <div>no token found...</div>;
  }
  const decodedToken = jwtDecode(token?.value || "");

  if (!decodedToken || !decodedToken.sub) {
    return <div>Invalid token</div>;
  }

  const uid = decodedToken.sub;
  console.log("Email:", uid); // Log the email for debugging purposes. In a real-world application, you should use this email to send the OTP to the user.

  return (
    <>
      <section className="h-screen flex items-center justify-center">
        <OTPinput />
      </section>
    </>
  );
}

export default VerifyAccountPage;
