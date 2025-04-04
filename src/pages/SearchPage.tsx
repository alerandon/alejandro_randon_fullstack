import React from "react";

const SPOTIFY_API_URL = "https://api.spotify.com/v1";
const ACCESS_TOKEN = sessionStorage.getItem("accessToken") || "";

React.useEffect(() => {
  const fetchProfile = async () => {
    try {
      const response = await fetch(`${SPOTIFY_API_URL}/me`, {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error fetching artists:", error);
    }
  };

  fetchProfile(); // Example query
}, []);

const SearchPage: React.FC = () => {
  return (
    <div>
      <h1>Search Page</h1>
      <p>Search for something...</p>
    </div>
  );
}

export default SearchPage;
