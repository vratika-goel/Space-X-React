import fetch from "isomorphic-fetch";

export async function fetchAllMissions(url) {
  const response = await fetch(url);
  return response.json();
}