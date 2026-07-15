export async function setToken(token: string) {
  const expires = new Date(Date.now() + 60 * 60 * 1000).toUTCString();

  document.cookie = `token=${token}; path=/; expires=${expires}; secure; SameSite=None`;
}

export async function getToken() {
  const cookies = document.cookie.split('; ');

  const tokenCookie = cookies.find((cookie) => cookie.startsWith('token='));

  if (!tokenCookie) return null;

  return tokenCookie.split('=')[1];
}

export async function removeToken() {
  document.cookie = 'token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; secure; SameSite=None';
}
