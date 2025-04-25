const donationBtn = document.getElementById("donationBtn");
const historyBtn = document.getElementById("historyBtn");
const hideQuestion = document.getElementById("question");

historyBtn.addEventListener("click", function () {
  const main = document.querySelector("#main");
  const historySection = document.getElementById("historySection");
  main.className = "hidden";
  hideQuestion.className = "hidden";
  historySection.className = "block";
  historySection.style.background = "white";
  donationBtn.classList.remove("bg-btnColor");
  historyBtn.classList.add("bg-btnColor");
});

donationBtn.addEventListener("click", function () {
  const main = document.querySelector("#main");
  const historySection = document.getElementById("historySection");
  main.className = "block";
  historySection.className = "hidden";
  historyBtn.classList.remove("bg-btnColor");
  donationBtn.classList.add("bg-btnColor");
});

const sections = document.querySelectorAll("section");
const button = document.getElementById("btn");

for (const section of sections) {
  const addInput = section.querySelector("#addMoney");
  const addDonateMoney = section.querySelector("#addedDonateMoney");
  const totalBalance = document.querySelector("#accountBalance");
  const title = section.querySelector("#title");

  const addMoneyBtn = section.querySelector("#addMoneyBtn");
  const modal = document.getElementById("modelContainer");

  if (addMoneyBtn) {
    addMoneyBtn.addEventListener("click", function () {
      const amount = Number(addInput.value);

      if (!isNaN(amount) && amount > 0) {
        const totalDonateMoney = Number(addDonateMoney.innerText);
        const updateAmount = totalDonateMoney + amount;

        const accountBalance = Number(totalBalance.innerText);
        const reduceBalance = accountBalance - amount;
        if (reduceBalance < 0) {
          addInput.value = "";
          alert("Your account Balance is low, pleace recharge");

          return;
        }
        addDonateMoney.innerText = updateAmount;
        totalBalance.innerText = reduceBalance;

        addInput.value = "";

        // const historysection = document.getElementById("historyContainer");
        const historyDiv = document.createElement("div");

        const date = new Date();
        const dateFormet = date.toString();

        historyDiv.className = "lg:p-5 border border-border rounded-md p-3 m-2";
        historyDiv.innerHTML = `
                     <h2 class="text-hColor font-semibold text-xl">${amount} Taka is Donated for ${title.innerText}</h2>
                     <p class="text-pColor mt-4">Date: ${dateFormet}</p>
          `;

        historyContainer.appendChild(historyDiv);

        modal.style.display = "block";
      } else {
        addInput.value = "";
        alert("you have to add valid amount");
        return;
      }
    });
  } else {
    alert("yout btn has problem");
  }

  const close = document.querySelector(".close");

  close.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (e) {
    if (e.target == modal) {
      modal.style.display = "none";
    }
  };
}

const showInputFild = document.getElementById("question");
const blog = document.querySelector("#blog");
const hideElement = document.querySelector("main");
const menu = document.getElementById("blur");
showInputFild.style.height = "100vh";
let change = 0;

blog.addEventListener("click", function () {
  if (change == 0) {
    showInputFild.className = "block";
    historySection.className = "hidden";
    hideElement.className = "hidden";
    menu.className = "hidden";
    blog.innerHTML = "home";
    change = 1;
  } else {
    showInputFild.className = "hidden";
    historySection.className = "block";
    menu.className = "block";
    hideElement.className = "block";
    blog.innerHTML = "blog";
    historySection.className = "hidden";
    historyBtn.classList.remove("bg-btnColor");
    donationBtn.classList.add("bg-btnColor");
    menu.style.textAlign = "center";
    menu.className = "py-5";

    change = 0;
  }
});

const questions = document.querySelectorAll("#question #inputContainer");

for (const question of questions) {
  const inputTitle = question.querySelector("#inputTitle");
  const questionInput = question.querySelector("#questionInput");
  const addbtn = question.querySelector("#add");

  let count = 0;

  inputTitle.addEventListener("click", function () {
    if (count == 0) {
      addbtn.className = "block";
      addbtn.style.color = "black";
      questionInput.className = "block";
      questionInput.style.backgroundColor = "white";
      questionInput.style.padding = "10px 15px 10px 0px";
      questionInput.style.width = "60%";
      count = 1;
    } else {
      questionInput.className = "hidden";
      addbtn.classList.add("hidden");
      count = 0;
    }
  });

  addbtn.addEventListener("click", function () {
    const questionValue = questionInput.value;
    const p = document.createElement("p");
    p.innerText = questionValue;
    p.style.color = "black";
    question.appendChild(p);
    addbtn.className = "hidden";
  });
}
