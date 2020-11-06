export function digimonsRepository() {
  const url = "https://digimon-api.vercel.app/api/digimon";

  function getAll() {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await fetch(`${url}`);
        resolve(await response.json());
      } catch (e) {
        reject(e);
      }
    });
  }

  return { getAll };
}