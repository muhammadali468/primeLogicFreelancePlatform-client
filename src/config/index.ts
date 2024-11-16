// let  = true;

const _config = {
  BACKEND_URI: process.env.NEXT_PUBLIC_BACKEND_URI_DEV as string,
  SECRET: process.env.NEXT_PUBLIC_JWT_ACCESS_SECRET as string,
  ENV: process.env.NEXT_PUBLIC_ENV
};
console.log(_config.BACKEND_URI);

export const { BACKEND_URI, SECRET, ENV } = _config;
