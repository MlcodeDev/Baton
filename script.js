document.addEventListener("DOMContentLoaded", () => {
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  class ColorScheme {
    static allSchemes = [];
    static previousScheme = null;

    constructor(primary, secondary, font_color, font = "Inter") {
      this.primary = primary;
      this.secondary = secondary;
      this.font_color = font_color;
      this.font = font;
      ColorScheme.allSchemes.push(this);
    }

    static get getRandomScheme() {
      let randomScheme;
      do {
        randomScheme =
          ColorScheme.allSchemes[
            getRandomInt(0, ColorScheme.allSchemes.length)
          ];
      } while (randomScheme === ColorScheme.previousScheme);

      ColorScheme.previousScheme = randomScheme;
      return randomScheme;
    }

    static applyRandomScheme(
      bodyElement,
      buttonElement,
      textElement = undefined,
    ) {
      const randomScheme = ColorScheme.getRandomScheme;

      bodyElement.style.backgroundColor = randomScheme.primary;
      buttonElement.style.backgroundColor = randomScheme.secondary;
      buttonElement.style.color = randomScheme.font_color;
      buttonElement.style.fontFamily = randomScheme.font;
      textElement.style.color = randomScheme.font_color;
    }
  }

  new ColorScheme("#0d3b66", "#faf0ca", "#f4d35e");
  new ColorScheme("#006d77", "#83c5be", "#edf6f9");
  new ColorScheme("#2b2d42", "#8d99ae", "#edf2f4");
  new ColorScheme("#064789", "#427aa1", "#ebf2fa");
  new ColorScheme("#0b132b", "#1c2541", "#3a506b");
  new ColorScheme("#092327", "#0b5351", "#00a9a5");
  new ColorScheme("#333333", "#48e5c2", "#fcfaf9");
  new ColorScheme("#cc8b86", "#f9eae1", "#7d4f50");
  new ColorScheme("#022b3a", "#1f7a8c", "#bfdbf7");
  new ColorScheme("#283044", "#78a1bb", "#ebf5ee");
  new ColorScheme("#0a1128", "#001f54", "#034078");

  const body = document.querySelector("body");
  const button = document.querySelector(".button-1");
  const count = document.querySelector(".click-count");

  body.style.transition = "background-color 0.5s ease-in-out";
  count.style.transition = "all 0.5s";

  let clickCount = 0;
  button.addEventListener("click", () => {
    ColorScheme.applyRandomScheme(body, button, count);

    clickCount++;
    count.textContent = `clicks: ${clickCount}`;

    switch (clickCount) {
      case 1:
        button.textContent = `Kierowniku weź no kliknij jeszcze raz`;
        break;
      case 2:
        button.textContent = `Kierowniku weź no kliknij drugi raz`;
        break;
      case 3:
        button.textContent = `Kierowniku weź no kliknij trzeci raz`;
        break;
      case 4:
        button.textContent = `Kierowniku weź no kliknij czwarty raz`;
        break;
      case 5:
        button.textContent = `Kierowniku weź no kliknij piąty raz`;
        break;
      case 6:
        button.textContent = `Kierowniku weź no kliknij szósty raz`;
        break;
      case 7:
        button.textContent = `Kierowniku weź no kliknij siódmy raz`;
        break;
      case 8:
        button.textContent = `Kierowniku weź no kliknij ósmy raz`;
        break;
      case 9:
        button.textContent = `Kierowniku weź no kliknij dziewiąty raz`;
        break;
    }
    if (clickCount >= 10) {
      button.textContent = `Dziemkujem kierowniku :)`;
    }
  });
});
