async function GetData(url) {
  const response = await fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      return data;
    });
}

export default GetData;