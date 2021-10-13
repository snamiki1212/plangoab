import { useEffect } from "react";
import { HOST_API_V1 } from "~/src/services/api/v2/url";
import fetch from "isomorphic-fetch";

const HEALTH_CHECK_URL = `${HOST_API_V1}/healthcheck`;

export const useHealthcheck = () => {
  useEffect(() => {
    fetch(HEALTH_CHECK_URL).catch((e) =>
      console.error("Cannot work health-check for back-end", e)
    );
  }, []);
};
