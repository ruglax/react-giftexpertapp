export const getGifts = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=NgmoeFJeDL5Rl7s3mcIJsTAQ0hvEVjb8&q=${encodeURI(
    category
  )}&limit=25&offset=0&rating=g&lang=en`;
  const response = await fetch(url);
  const { data } = await response.json();
  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    };
  });

  return gifs;
};
