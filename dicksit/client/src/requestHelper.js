export const callApi = async (dest) => {
  const response = await fetch(`/api/${dest}`);
  const body = await response.json();

  if (response.status !== 200) {
    throw Error(body.message);
  }

  return body;
};

export const postGameInfo = async (info) => {
  const response = await fetch('/api/gameinfo', {
    method: 'post',
    headers: {
      // prettier-ignore
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(info),
  });

  const body = await response.json();

  if (response.status !== 200) {
    throw Error(body.message);
  }

  return body;
};
