const btn = document.querySelector('#btn');
const list = document.querySelector('#list');

btn.addEventListener('click', async () => {
  const userId = Math.floor(Math.random() * 10) + 1;
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
  const user = await response.json();

  const li = document.createElement('li');
  li.textContent = `${user.name} (${user.email})`;
  list.appendChild(li);
});

btn.addEventListener('click', async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const user = await response.json();
    console.log(user.name);
  } catch (error) {
    console.log('取得に失敗しました');
  }
});