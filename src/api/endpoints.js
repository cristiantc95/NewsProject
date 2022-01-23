const API_KEY = "a31742de-f9db-47f0-b0b0-bf4a064ceca8";

export function getNewsCategoriesEndpoint(
  category,
  pageNumber = 1,
  pageSize = 20
) {
  const queryParams = `?api-key=${API_KEY}&section=${category}&show-fields=all&page-size=${pageSize}&page=${pageNumber}`;

  return `https://content.guardianapis.com/search${queryParams}`;
}

export function getNewsDetailsEndpoint(newsId) {
  
  const queryParams = `?api-key=${API_KEY}&show-fields=all`;

  return `https://content.guardianapis.com/${newsId}${queryParams}`;
}
