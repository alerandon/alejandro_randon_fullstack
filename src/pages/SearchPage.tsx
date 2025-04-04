import React from "react";
import UserHeader from "../components/user/UserHeader";
import ArtistSearcherSection from "../components/searcher/ArtistSearcherSection";
import SearcherHeroSection from "../components/searcher/SearcherHeroSection";

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
    <div className="flex flex-col items-center w-full pb-10">
      <UserHeader />
      <main className="flex flex-col items-center md:items-start justify-center h-full max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl pt-4 md:pt-6 gap-8 md:gap-20 lg:gap-12 mx-5">
        <SearcherHeroSection />
        <ArtistSearcherSection />
      </main>
    </div>
  );
};

export default SearchPage;
