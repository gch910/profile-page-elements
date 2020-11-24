window.addEventListener("DOMContentLoaded", (event) => {
  document.body.style.backgroundColor = 'grey';
  //create h1 and assign name as text
  const h1 = document.createElement("h1");

  h1.setAttribute("id", "my-name");
  h1.setAttribute("class", "name");

  const text = document.createTextNode("Gabriel");

  h1.appendChild(text);

  document.body.appendChild(h1);

  const picture = document.createElement("img");

  picture.setAttribute("id", "my-photo");

  picture.setAttribute("src", "./media/img_0419.jpeg");

  document.body.appendChild(picture);

  //add list items with function
  //   const ul = document.createElement("ul");
  //   ul.setAttribute("id", "hobbies");
  //   document.body.appendChild(ul);

  //   const createListItems = (...info) => {
  //     info.forEach((item) => {
  //       const text = document.createTextNode(item);
  //       const li = document.createElement("li");
  //       li.appendChild(text);
  //       ul.appendChild(li);
  //     });
  //   };
  //   createListItems("music", "reading", "programming", "outdoors");
  //time

  //doing it with a list and changing innerHTML
  const clock = document.createElement('h1');

  document.body.appendChild(clock);

  const ul = document.createElement("ul");
  ul.setAttribute("id", "info");
  ul.setAttribute("class", "my-info");
  document.body.appendChild(ul);

  const myInfo = ["<li>music</li>", "<li>programming</li>", "<li>reading</li>"];

  const infoString = myInfo.join("");
  const infoList = document.getElementById("info");
  infoList.innerHTML = infoString.toUpperCase();


  function getTime() {
    const date = new Date();
    const seconds = date.getSeconds();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    let time = `The Current time is ${hours} : ${minutes} : ${seconds}`;
    clock.innerHTML = time;

  }

  setInterval(() => {
    getTime();
  }, 1000);


  const allLi = document.querySelectorAll("li");

  allLi.forEach((item) => {
    item.className = "detail";
    console.log(item);
  });

  const button = document.createElement("button");

  button.style.width = '200px'

  button.style.height = '100px'

  button.innerHTML = '<h1>CLICK ME</H1>'

  const clickMe = () => {
      button.style.backgroundColor = 'red'
  }

  const backToNormal = () => {
      button.style.backgroundColor = 'white'
  }

  button.onmousedown = clickMe;

  button.onmouseup = backToNormal;

  document.body.appendChild(button);


  //setInterval(getTime, 900)
  //setInterval(() => {myInfo.pop()}, 1000)

  //setInterval(getTime, 1000)
});
