import axios from "axios";

export async function getUser(user: string) {
  const url = `https://api.github.com/users/${user}`;
  const { data } = await axios.get(url);

  return data;
}
