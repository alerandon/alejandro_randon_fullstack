import React from "react";

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
    <div>
      <h1>Search Page</h1>
      <p>Search for something...</p>
    </div>
  );
};

export default SearchPage;
