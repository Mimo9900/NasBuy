

const apple = document.querySelector(".apple");
const button = document.querySelector(".button");
const buttonsMain = document.querySelectorAll(".buttons");
const iphone14 = document.querySelector(".iphone-14");
const iphoneRoom = document.querySelectorAll(".iphone-room");

const iphone15 = document.querySelector(".iphone14-pluse");

const iphonePro = document.querySelector(".iphone14-pro");

const iphoneSe = document.querySelector(".iPhoneSE");
const footerImg = document.querySelector(".parent-of-imgbox");

const stepes = document.querySelector(".step-tow");

//to be changes to all
const expandButtons = document.querySelectorAll(".iphone-details-parent");

const sidbarLeft = document.querySelector(".side-bar-left");

const answers = document.querySelectorAll(".iphone-details-parents");
const lists1 = document.querySelectorAll(".list1");

const lists = document.querySelectorAll(".list");

const questions = document.querySelector(".questions");

const loadingElement = document.querySelector(".loading");

questions.classList.remove("hidden");

apple.addEventListener("click", () => {
  console.log("clicked");

  loadingElement.classList.remove("hidden");

  // here

  apple.classList.add("hidden");
  questions.classList.add("hidden");

  setTimeout(function () {
    var loadingElement = document.querySelector(".loading");
    loadingElement.classList.add("hidden");
    button.classList.remove("hidden");
  }, 1000);
});

const actionButton = buttonsMain.forEach((el, index) => {
  const buttons = el;
  if (index === 0) {
    //ihpne-14
    buttons.addEventListener("click", () => {
      loadingElement.classList.remove("hidden");

      button.classList.add("hidden");

      setTimeout(function () {
        var loadingElement = document.querySelector(".loading");
        loadingElement.classList.add("hidden");

        stepes.style.backgroundColor = "#4c6ef5";
        iphone14.classList.remove("hidden");
      }, 500);
    });
    //here
    for (let i = 0; i < iphoneRoom.length; i++) {
      iphoneRoom[i].addEventListener("click", () => {
        iphone15.classList.add("hidden");

        footerImg.classList.remove("hidden");
        sidbarLeft.classList.remove("hidden");

        expandButtons.forEach((expandButton) => {
          expandButton.classList.remove("hidden");
        });
      });
    }
  } else if (index === 1) {
    //ihpne-14
    buttons.addEventListener("click", () => {
      console.log("wow");

      button.classList.add("hidden");
      iphone15.classList.remove("hidden");
    });

    for (let i = 0; i < iphoneRoom.length; i++) {
      iphoneRoom[i].addEventListener("click", () => {
        iphone14.classList.add("hidden");
        footerImg.classList.remove("hidden");
        sidbarLeft.classList.remove("hidden");
        expandButtons.forEach((expandButton) => {
          expandButton.classList.remove("hidden");
        });
      });
    }
  } else if (index === 2) {
    //ihpne-14
    buttons.addEventListener("click", () => {
      console.log("now");
      button.classList.add("hidden");
      iphonePro.classList.remove("hidden");
    });
    for (let i = 0; i < iphoneRoom.length; i++) {
      iphoneRoom[i].addEventListener("click", () => {
        iphonePro.classList.add("hidden");
        footerImg.classList.remove("hidden");
        sidbarLeft.classList.remove("hidden");
        expandButtons.forEach((expandButton) => {
          expandButton.classList.remove("hidden");
        });
      });
    }
  } else if (index === 3) {
    //ihpne-14
    buttons.addEventListener("click", () => {
      console.log("wow");
      button.classList.add("hidden");
      iphonePro.classList.remove("hidden");
    });
    for (let i = 0; i < iphoneRoom.length; i++) {
      iphoneRoom[i].addEventListener("click", () => {
        iphonePro.classList.add("hidden");
        footerImg.classList.remove("hidden");
        sidbarLeft.classList.remove("hidden");
        expandButtons.forEach((expandButton) => {
          expandButton.classList.remove("hidden");
        });
      });
    }
  } else if (index === 4) {
    //ihpne-14
    buttons.addEventListener("click", () => {
      console.log("wow");
      button.classList.add("hidden");
      iphoneSe.classList.remove("hidden");
    });

    for (let i = 0; i < iphoneRoom.length; i++) {
      iphoneRoom[i].addEventListener("click", () => {
        iphoneSe.classList.add("hidden");
        footerImg.classList.remove("hidden");
        sidbarLeft.classList.remove("hidden");
        expandButtons.forEach((expandButton) => {
          expandButton.classList.remove("hidden");
        });
      });
    }
  } else if (index === 5) {
    //ihpne-14
    buttons.addEventListener("click", () => {
      button.classList.add("hidden");
      iphone14.classList.remove("hidden");
    });
    for (let i = 0; i < iphoneRoom.length; i++) {
      iphoneRoom[i].addEventListener("click", () => {
        iphone14.classList.add("hidden");
        footerImg.classList.remove("hidden");
        sidbarLeft.classList.remove("hidden");
        expandButtons.forEach((expandButton) => {
          expandButton.classList.remove("hidden");
        });
      });
    }
  } else if (index === 6) {
    //ihpne-14
    buttons.addEventListener("click", () => {
      button.classList.add("hidden");
      iphone14.classList.remove("hidden");
    });
    for (let i = 0; i < iphoneRoom.length; i++) {
      iphoneRoom[i].addEventListener("click", () => {
        iphone14.classList.add("hidden");
        footerImg.classList.remove("hidden");
        sidbarLeft.classList.remove("hidden");
        expandButtons.forEach((expandButton) => {
          expandButton.classList.remove("hidden");
        });
      });
    }
  } else if (index === 7) {
    //ihpne-14
    buttons.addEventListener("click", () => {
      console.log("wow");
      button.classList.add("hidden");
      iphonePro.classList.remove("hidden");
    });
    for (let i = 0; i < iphoneRoom.length; i++) {
      iphoneRoom[i].addEventListener("click", () => {
        iphonePro.classList.add("hidden");
        footerImg.classList.remove("hidden");
        sidbarLeft.classList.remove("hidden");
        expandButtons.forEach((expandButton) => {
          expandButton.classList.remove("hidden");
        });
      });
    }
  } else if (index === 8) {
    //ihpne-14
    buttons.addEventListener("click", () => {
      console.log("wow");
      button.classList.add("hidden");
      iphonePro.classList.remove("hidden");
    });
    for (let i = 0; i < iphoneRoom.length; i++) {
      iphoneRoom[i].addEventListener("click", () => {
        iphonePro.classList.add("hidden");
        footerImg.classList.remove("hidden");
        sidbarLeft.classList.remove("hidden");
        expandButtons.forEach((expandButton) => {
          expandButton.classList.remove("hidden");
        });
      });
    }
  } else if (index === 9) {
    //ihpne-14
    buttons.addEventListener("click", () => {
      console.log("wow");
      button.classList.add("hidden");
      iphoneSe.classList.remove("hidden");
    });
    for (let i = 0; i < iphoneRoom.length; i++) {
      iphoneRoom[i].addEventListener("click", () => {
        iphoneSe.classList.add("hidden");
        footerImg.classList.remove("hidden");
        sidbarLeft.classList.remove("hidden");
        expandButtons.forEach((expandButton) => {
          expandButton.classList.remove("hidden");
        });
      });
    }
  } else if (index === 10) {
    //ihpne-14
    buttons.addEventListener("click", () => {
      console.log("wow");
      button.classList.add("hidden");
      iphone14.classList.remove("hidden");
    });
    for (let i = 0; i < iphoneRoom.length; i++) {
      iphoneRoom[i].addEventListener("click", () => {
        iphone14.classList.add("hidden");
        footerImg.classList.remove("hidden");
        sidbarLeft.classList.remove("hidden");
        expandButtons.forEach((expandButton) => {
          expandButton.classList.remove("hidden");
        });
      });
    }
  } else if (index === 11) {
    //ihpne-14
    buttons.addEventListener("click", () => {
      console.log("wow");
      button.classList.add("hidden");
      iphone14.classList.remove("hidden");
    });
    for (let i = 0; i < iphoneRoom.length; i++) {
      iphoneRoom[i].addEventListener("click", () => {
        iphone14.classList.add("hidden");
        footerImg.classList.remove("hidden");
        sidbarLeft.classList.remove("hidden");
        expandButtons.forEach((expandButton) => {
          expandButton.classList.remove("hidden");
        });
      });
    }
  }
});




//ends


expandButtons.forEach((button, index) => {
  let isOpen = false;
  console.log(expandButtons);

  button.addEventListener("click", function () {
    isOpen = !isOpen;

    lists[index].classList.toggle("expand");
    lists[index].style.maxHeight = isOpen
      ? lists[index].scrollHeight + "px"
      : "0";

    Array.from(lists[index].children).forEach((li, liIndex) => {
      li.style.opacity = isOpen ? "1" : "0";
    });
  });
});

answers.forEach((button, index) => {
  let isOpen = false;
  console.log(expandButtons);

  button.addEventListener("click", function () {
    isOpen = !isOpen;

    lists1[index].classList.toggle("expand");
    lists1[index].style.maxHeight = isOpen
      ? lists1[index].scrollHeight + "px"
      : "0";

    Array.from(lists1[index].children).forEach((li, liIndex) => {
      li.style.opacity = isOpen ? "1" : "0";
    });
  });
});


const sidbar = document.querySelector(".side-bar-left"); 
const finallBtn = document.querySelector(".btns"); 
const selectparent = document.querySelector(".select-parent");

finallBtn.addEventListener("click", () => {
  sidbar.classList.add("hidden")
  selectparent.classList.remove("hidden")
})

 

// apis



/*
loadFacts();
async function loadFacts() {
  const res = await fetch(
    "https://izlxrscilonbumpenzxm.supabase.co/rest/v1/customers",

    {
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml6bHhyc2NpbG9uYnVtcGVuenhtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODk0MjM0NTcsImV4cCI6MjAwNDk5OTQ1N30.LeBCZRC5w1XOyFoelbeesQNMQMxhXrm_l9XyT2xmVcE",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml6bHhyc2NpbG9uYnVtcGVuenhtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODk0MjM0NTcsImV4cCI6MjAwNDk5OTQ1N30.LeBCZRC5w1XOyFoelbeesQNMQMxhXrm_l9XyT2xmVcE",
      },
    }
  );
  const data = await res.json();

  createFactList(data);

}
/*
const factList = document.querySelector(".factList");


function createFactList(dataArray) {
  const htmlArr = dataArray.map((user) => {
 
    return `<h1>${user.firstName}</h1>`; // Add the return statement
  });

  console.log(htmlArr);
  const html = htmlArr.join(" ");
  factList.insertAdjacentHTML("afterbegin", html);
}
// ends here

*/


