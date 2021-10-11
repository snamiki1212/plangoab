import { API_SERVER_DOMAIN, LOCAL_HOST } from "~/src/constants/app";

const isDev = process.env.NODE_ENV === "development";
const DOMAIN = isDev ? LOCAL_HOST : API_SERVER_DOMAIN;

export const HOST_API_V1 = `${DOMAIN}/api/v1`;
