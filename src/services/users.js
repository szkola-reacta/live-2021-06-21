export const fetchUser = async () => {
  try {
    const response = await fetch('https://randomuser.me/api/');
    const data = await response.json();
    return data.results[0];
  } catch (error) {
    // log error
  }
}