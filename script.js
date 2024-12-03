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

    static applyRandomScheme(bodyElement, buttonElement) {
      const randomScheme = ColorScheme.getRandomScheme;

      bodyElement.style.backgroundColor = randomScheme.primary;
      buttonElement.style.backgroundColor = randomScheme.secondary;
      buttonElement.style.color = randomScheme.font_color;
      buttonElement.style.fontFamily = randomScheme.font;
    }
  }
  // Old color schemes
  // new ColorScheme("#C7395F", "#DED4E8", "#E8BA40");
  // new ColorScheme("#80C4B7", "#E3856B", "#E3856B");
  // new ColorScheme("#E87A5D", "#F3B941", "#3B5BA5");
  // new ColorScheme("#E26274", "#F9EC7E", "#E3CCB2");
  // new ColorScheme("#FBEAE7", "#552619", "#B2456E");
  // new ColorScheme("#31473A", "#7C8363", "#EDF4F2");

  new ColorScheme("#dce0d9", "#fbf6ef", "#ead7c3");
  new ColorScheme("#0d3b66", "#faf0ca", "#f4d35e");
  new ColorScheme("#f6f7eb", "#e94f37", "#393e41");
  new ColorScheme("#006d77", "#83c5be", "#edf6f9");
  new ColorScheme("#ed6a5a", "#f4f1bb", "#9bc1bc");
  new ColorScheme("#2b2d42", "#8d99ae", "#edf2f4");
  new ColorScheme("#f4f1de", "#ef476f", "#ffd166");
  new ColorScheme("#064789", "#427aa1", "#ebf2fa");
  new ColorScheme("#0b132b", "#1c2541", "#3a506b");

  const body = document.querySelector("body");
  const button = document.querySelector(".button-1");

  body.style.transition = "background-color 0.5s ease-in-out";

  button.addEventListener("click", () => {
    ColorScheme.applyRandomScheme(body, button);
  });
});
