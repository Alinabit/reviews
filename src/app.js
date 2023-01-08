const reviews = [
  {
    name: "Сводцева Юлиана",
    job: "Оператор Колл-Центра",
    image:
      "https://i.pinimg.com/originals/80/a9/75/80a97501a5106fafbef9eb2af44c21e6.jpg",
    text: "Компетентные сотрудники, начальство относится с пониманием к просьбым и пожеланиям, зарплата вовремя, есть возможность получать бонусы если качественно работать.",
  },
  {
    name: "Елизавета Кашина",
    job: "web designer",
    image:
      "https://kamilionare.tmweb.ru/copywriting-site/wp-content/uploads/2019/12/226-managing-microsoft-exchange-online-in-office-365.jpg",
    text: "Коллектив дружелюбный, зарплата своевременная, руководство, пусть и строгое к дисциплине и клиентоориентированности, тем не менее лояльное и относится к сотрудникам по-человечески, если надо, входят в положение.",
  },
  {
    name: "Марк Андреев",
    job: "Мастер участка",
    image:
      "https://bn-crimea.ru/thumb/2/SmREuYppcSoP-S_d5I3ynw/r/d/grigoriy.jpg",
    text: "Адекватное и компетентное руководство. Помогали на первых порах вникнуть в особенности работы. За год вырос в должности, то есть карьерный рост реален.",
  },
  {
    name: "Михаил Соколов",
    job: "Агент",
    image: "https://itcrumbs.ru/wp-content/uploads/2021/11/Ofis.jpg",
    text: "Своевременные выплаты, чистый, удобный офис. Карьерный рост возможен, если трудолюбив, компания все для этого предоставляет: обучение, курсы для повышения квалификации. Сам через все это прошел.",
  },
  {
    name: "Маргарита Абрикосова",
    job: "Арт-директор",
    image:
      "https://www.factroom.ru/wp-content/uploads/2017/11/Depositphotos_10745648_l-2015.jpg",
    text: "Единственный плюс это близость к метро, но в центре везде оно рядом.",
  },
];

const rewiewsID = document.getElementById("reviews");

function renderReviews(reviews, index) {
  rewiewsID.innerHTML = "";
  rewiewsID.innerHTML += `
    <div class="review">
      <div class="review_img_cont">
        <img class="review_img" id="review_img" src="${reviews[index].image}" alt=""/>
      </div>
      <div class="review_name">
        <p>${reviews[index].name}</p>
      </div>
      <div class="review_job">
        <p><span>${reviews[index].job}</span></p>
      </div>
      <div class="review_text">
        <p>${reviews[index].text}</p>
      </div>
      <div class="review_buttons">
        <button id="btn_back_${reviews[index]}" class="review_btn">Назад</button>
        <button id="btn_next_${reviews[index]}" class="review_btn">Вперед</button>
      </div>
      <div class="review_surp">
        <button id="btn_random_${reviews[index]}" class="review_btn">Случайный</button>
        </div>
    </div>
    `;
  randomButton(reviews, index);
  toNext(reviews, index);
  toBack(reviews, index);
}

function randomReview(reviews) {
  let randomIndex = Math.floor(Math.random() * reviews.length);
  renderReviews(reviews, randomIndex);
}

function randomButton(reviews, index) {
  let random = document.getElementById(`btn_random_${reviews[index]}`);
  const toRandom = () => {
    randomReview(reviews);
  };
  random.addEventListener("click", toRandom);
}

function slideToRight(reviews, index) {
  const indexReview = reviews.indexOf(reviews[index]);
  if (indexReview === reviews.length - 1) {
    return renderReviews(reviews, 0);
  } else if (indexReview < reviews.length) {
    let nextIndex = indexReview + 1;
    renderReviews(reviews, nextIndex);
  }
}

function toNext(reviews, index) {
  let nextRew = document.getElementById(`btn_next_${reviews[index]}`);
  const toNetc = () => {
    slideToRight(reviews, index);
  };
  nextRew.addEventListener("click", toNetc);
}

function slideToLeft(reviews, index) {
  const indexReview = reviews.indexOf(reviews[index]);
  if (indexReview === 0) {
    return renderReviews(reviews, reviews.length - 1);
  } else if (indexReview > 0 && indexReview <= reviews.length) {
    let nextIndex = indexReview - 1;
    renderReviews(reviews, nextIndex);
  }
}

function toBack(reviews, index) {
  const backRew = document.getElementById(`btn_back_${reviews[index]}`);
  const toBetc = () => {
    slideToLeft(reviews, index);
  };
  backRew.addEventListener("click", toBetc);
}

renderReviews(reviews, 0);
