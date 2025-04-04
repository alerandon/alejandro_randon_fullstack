import React from "react";
import AppIcon from "../components/common/AppIcon";
import { Awake, Logout } from "@carbon/icons-react";

const SearchPage: React.FC = () => {
  const SPOTIFY_API_URL = "https://api.spotify.com/v1";
  const sessionToken = sessionStorage.getItem("spotifyAccessToken") ?? "";
  const ACCESS_TOKEN_OBJECT = JSON.parse(sessionToken);
  const isProcessed = React.useRef(false);

  React.useEffect(() => {
    if (isProcessed.current) return;

    const { access_token } = ACCESS_TOKEN_OBJECT;
    if (!access_token) {
      console.error("Access token is missing. Please log in again.");
      return;
    }

    const fetchProfile = async () => {
      try {
        const response = await fetch(`${SPOTIFY_API_URL}/me`, {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };
    // fetchProfile();

    isProcessed.current = true;
  }, [ACCESS_TOKEN_OBJECT]);

  return (
    <div className="flex flex-col w-full mx-auto pb-10">
      <header className="p-3 sticky top-0 flex justify-between bg-[#222222] z-10 shadow-md">
        <AppIcon />
        <div className="flex items-center">
          <p className="text-[#D6F379] font-semibold text-[10px]">Buscar</p>
          <p className="font-semibold text-[10px] text-nowrap px-2">Mis albumes</p>
          <div className="flex items-center border-white border-l-1 h-2/3 px-2">
            <Logout className="w-full h-full" />
          </div>
          <div className="flex items-center border-white border-l-1 h-2/3 px-2">
            <Awake className="w-full h-full" />
          </div>
        </div>
      </header>
    </div>
  );
};

export default SearchPage;
