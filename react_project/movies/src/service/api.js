const API_KEY="b28f97a1a2e2cb2ddf0417e394e06e12";
const BASE_URL ="https://api.themoviedb.org/3"

export const getFavoriteMovie= async ()=>{
    const response =await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    if (!response.ok) {
    throw new Error('Failed to fetch movies')
  }
    const data=await response.json();
    return data.results;
}
export const searchQuery =async (query)=>{
    const response =await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    const data=await response.json();
    return data.results;
}