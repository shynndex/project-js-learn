const linkUrl=`http://localhost:3006/`

export const fetchData = async (path) => {
  const response = await axios.get(linkUrl + path);
  return response.data;
};
