export const API_URL = import.meta.env.VITE_API_URL;

export async function getStats() {
  const res = await fetch(`${API_URL}/api/mentions/stats`);
  return res.json();
}
