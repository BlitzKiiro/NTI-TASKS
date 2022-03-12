const getCategoryNews = async (keyword) => {
  try {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${keyword}&pageSize=12&apiKey=50b2bfd3177c494ea45067863376aa4e`
    );
    const result = await response.json();
    return result;
  } catch (error) {
    return new Error(error);
  }
};
