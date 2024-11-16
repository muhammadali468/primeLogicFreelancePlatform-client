"use client";
// import ButtonLoader from "@/_subComponents/buttonLoader/buttonLoader";
// import DivWrapper from "@/_subComponents/divWrapper/DivWrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useLoading } from "@/hooks/useLoading";
import { useMessage } from "@/hooks/useMessage";
import { cn } from "@/lib/utils";
import type { UserRegisterTypes } from "@/types";
import { registerSchema } from "@/validation/Schemas/dataSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { EyeClosedIcon, EyeOpenIcon } from "@radix-ui/react-icons";
import { axios } from "@/axios/index";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
// ********************  Register Form

function RegisterForm() {
  const { errorMessage, successMessage } = useMessage();
  const { isLoading, startLoading, stopLoading } = useLoading();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setConfirmShowPassword] = useState(false);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors }
  } = useForm<UserRegisterTypes>({ resolver: zodResolver(registerSchema) });
  const router = useRouter();
  const handleRegisterSubmit = async (data: UserRegisterTypes) => {
    const { username, fullName, email, password } = data;

    try {
      startLoading();
      const response = await axios.post(
        `/auth/register`,
        {
          username: username.toLowerCase(),
          fullName: fullName.toLowerCase(),
          email: email.toLowerCase(),
          password
        },
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
      console.log(response.data);

      stopLoading();
      if (response.data.success) {
        reset();
        successMessage(response.data.message || "User Registered successfully .");
        const res = await fetch("/api/fetchToken", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            token: response.data.data.accessToken
          })
        });

        const data = await res.json();
        console.log(data);

        stopLoading();
        return router.push("/auth/verify-account");
      }
    } catch (error: unknown) {
      stopLoading();
      // console.log(response.data);
      if (error instanceof Error) {
        return errorMessage(error.message || "User registration  fail");
      } else {
        console.log(`error::`, { error });
      }
      // return errorMessage(error?.response?.data?.message || "some thing went wrong while register the user");
    } finally {
      stopLoading();
    }
  };
  return (
    <>
      <section className="relative top-20">
        <form
          onSubmit={handleSubmit(handleRegisterSubmit)}
          className="">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0 ">
            <div className="border rounded-lg shadow-sm  sm:w-full bg-background md:mt-0 sm:max-w-md xl:p-0  border-solid">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-center text-foreground md:text-2xl">Create an Account</h1>
                <div className="grid items-center w-full max-w-sm">
                  <Label
                    className="mb-1"
                    htmlFor="username">
                    Username
                  </Label>
                  <Input
                    autoCapitalize="off"
                    {...register("username")}
                    type="text"
                    placeholder="john_doe"
                    id="username"
                    className="border-solid"
                  />
                  <p className="h-[15px]">
                    {errors.username && (
                      <span className="text-xs select-none text-red-500 h-[15px] text-balance ml-2">{errors.username.message}</span>
                    )}
                  </p>
                </div>
                <div className="grid items-center w-full max-w-sm">
                  <Label
                    className="mb-1"
                    htmlFor="fullName">
                    Full Name
                  </Label>
                  <Input
                    {...register("fullName")}
                    type="text"
                    placeholder="John Doe"
                    id="fullName"
                    className="border-solid"
                  />
                  <p className="h-[15px]">
                    {errors.fullName && (
                      <span className="text-xs select-none text-red-500 h-[15px] text-balance ml-2">{errors.fullName.message}</span>
                    )}
                  </p>
                </div>
                <div className="grid items-center w-full max-w-sm">
                  <Label
                    className="mb-1"
                    htmlFor="email">
                    Email
                  </Label>
                  <Input
                    {...register("email")}
                    type="email"
                    placeholder="john@mail.com"
                    id="email"
                    className="border-solid"
                  />
                  <p className="h-[15px]">
                    {errors.email && <span className="text-xs select-none text-red-500 h-[15px] text-balance ml-2">{errors.email.message}</span>}
                  </p>
                </div>
                <div className="relative grid items-center w-full max-w-sm">
                  <Label
                    className="mb-1"
                    htmlFor="password">
                    Password
                  </Label>
                  <Input
                    className="pr-14 border-solid"
                    {...register("password")}
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    id="password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-3 top-6  cursor-pointer h-7 w-7">
                    {showPassword ? <EyeOpenIcon /> : <EyeClosedIcon />}
                  </button>
                  <p className="h-[15px]">
                    {errors.password && (
                      <span className="text-xs select-none text-red-500 h-[15px] text-balance ml-2">{errors.password.message}</span>
                    )}
                  </p>
                </div>
                <div className="relative grid items-center w-full max-w-sm">
                  <Label
                    className="mb-1"
                    htmlFor="confirm">
                    Confirm Password
                  </Label>
                  <Input
                    className="pr-14 border-solid"
                    {...register("confirmPassword")}
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="••••••••"
                    id="confirm"
                  />
                  <button
                    type="button"
                    onClick={() => setConfirmShowPassword((prev) => !prev)}
                    className="absolute right-3 top-6  cursor-pointer h-7 w-7">
                    {showConfirmPassword ? <EyeOpenIcon /> : <EyeClosedIcon />}
                  </button>
                  <p className="h-[15px]">
                    {errors.confirmPassword && (
                      <span className="text-xs select-none text-red-500 h-[15px] text-balance ml-2">{errors.confirmPassword.message}</span>
                    )}
                  </p>
                </div>

                <Button
                  disabled={isLoading}
                  className={cn("w-full", isLoading && "cursor-not-allowed bg-foreground/80   hover:bg-background/80 ")}>
                  {isLoading ? "loading" : <span>Register</span>}
                </Button>
                <p className="text-sm text-center ">
                  Already have an Account ?
                  <Link
                    href="/user-auth/sign-in"
                    className="hover:underline">
                    <span>&nbsp; Login</span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
}

export default RegisterForm;
