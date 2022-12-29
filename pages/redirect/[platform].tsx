import { useRouter } from "next/router";
import type { NextRouter } from "next/router";
import { useEffect } from "react";

import keys from "types/keys";

const key = keys.spotifyAccessTokenKey;

const Redirect = () => {
  const router = useRouter();
  const setAccessToken = (router: NextRouter) => {
    const platformName = router.query.platform;
    const pathName = router.asPath;
    const tokenInfos = pathName.split("&")[0];
    const accessToken = tokenInfos.split("=")[1];
    switch (platformName) {
      case "spotify":
        window.localStorage.setItem(key, accessToken);
        router.replace("/exp/spotify");
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    setAccessToken(router);
  }, [router]);

  return <div className="page signin"></div>;
};

export default Redirect;
