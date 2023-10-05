const headers = {
  "Content-type": "application/json; charset=UTF-8",
};

export const getTodos = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
    headers,
  })
    .then((res) => res.json())
    .then((json) => JSON.parse(JSON.stringify(json)));

  return response;
};
