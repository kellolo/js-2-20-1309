export let get = (url) => {
  return fetch(url).then((d) => d.json());
};

export let post = (url, item) => {
  return fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(item),
  }).then((d) => d.json());
};

export let put = (url, pl) => {
  return fetch(url, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(pl),
  }).then((d) => d.json());
};

export let del = (url) => {
  return fetch(url, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  }).then((d) => d.json());
};
