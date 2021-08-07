export const fetcher = async (instance: any, url: any) => {
  try {
    const res = await instance.get(url);
    return res.data;
  } catch (err) {
    throw err.response.data;
  }
};
