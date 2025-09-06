const names = [
      "Hussein Mahmoud Fouad Elsaid",
      "ABDALLA BESHR MAHMOUD GOUHAR",
      "Aya Gamal Hanfe hassen",
      "Mohamed Magdy Abdelsamea Ismael",
      "Ahmed Ibrahim AbdElazim AbdAllah",
      "Mohammed Abdelraouf Ahmed Abdelshafi",
      "Omar Mohamed Diaaeldin Ibrahim",
      "noha sherif zein elabdeen ahmed",
      "Mohab Islam Sayed Mohamed",
      "Manar Emad Ashry Jomaa",
      "Rana Yehia Zakria Mohamed",
      "Abdullah Ibrahim Ahmed Mohamed",
      "Mohamed Khaled Ali Habash",
      "Salma Samir Abdelmotaleb Ahmed",
      "Bassant Waheed Hassan Khatab",
      "Ahmed Sabry Abohashem Mohamed",
      "reem mohamed abdelmonaim",
      "Mostafa Mohie Mohamed",
      "Basem hussein mohamed",
      "Ahmed Khaled Abdullah",
      "Mohamed Gamal Ahmed",
      "Ramez Sameh Soliman",
      "Remon Reda Agayby",
      "Islam Ahmed Abdelfattah"
    ];

    let interval;

    function startPicking() {
      const resultDiv = document.getElementById("result");
      let counter = 0;

      clearInterval(interval);
      resultDiv.classList.remove("sparkle");

      interval = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * names.length);
        resultDiv.textContent = names[randomIndex];

        counter++;

        if (counter > 25) {
          clearInterval(interval);
          const finalIndex = Math.floor(Math.random() * names.length);
          resultDiv.textContent = "🎉 Winner: " + names[finalIndex] + " 🎉";
          resultDiv.classList.add("sparkle");

          launchConfetti();
        }
      }, 120);
    }

    function launchConfetti() {
      for (let i = 0; i < 50; i++) {
        const confetti = document.createElement("div");
        confetti.classList.add("confetti");
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
        confetti.style.animationDuration = (2 + Math.random() * 3) + "s";
        document.body.appendChild(confetti);

        setTimeout(() => {
          confetti.remove();
        }, 5000);
      }
    }