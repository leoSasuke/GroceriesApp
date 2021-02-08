export default async function fetchApi(Itens, setData = '') {
  let endpoint;
    endpoint = `https://api.sheety.co/16bff9b8a184a9a0e8814234597e6b7c/frutas&verduras/${Itens}`;
  const response = await fetch(endpoint);
  const responseJson = await response.json();
  
  setData(responseJson.fruits);
}