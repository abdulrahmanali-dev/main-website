// DAWN, SHRINE, IMPACT, IMPULSE, SMILE LUMIN, PRESTIGE, REFRESH, SLEEK THEME SCRIPT

console.log("Test UpCart script is working");

function checkAndClickToggleSwitch() {
  const checkForToggleSwitch = setInterval(() => {
    const shadowHost = document.getElementById("upCart");
    console.log("Shadow Host:", shadowHost);
 
      // Access the shadow root
      const shadowRoot = shadowHost.shadowRoot;
      console.log("Shadow Root:", shadowRoot);

      if (shadowRoot) {
        const innerButton = shadowRoot.querySelector(".styles_ToggleSwitch__");
        console.log("Inner Button:", innerButton);
        if (innerButton) {
            console.log("Toggle switch found:", innerButton);
            const checkClass = setInterval(() => {
              if (!innerButton.classList.contains("styles_ToggleSwitch--active__")) {
                innerButton.click();
                console.log("Toggle switch clicked");
                clearInterval(checkClass);
                // Stop checking once clicked
              }
            }, 10);
            clearInterval(checkForToggleSwitch);
            // Stop checking once found
          }
      } else {
        const innerButton = document.querySelector(".styles_ToggleSwitch__");
        console.log("Inner Button:", innerButton);
        if (innerButton) {
            console.log("Toggle switch found:", innerButton);
            const checkClass = setInterval(() => {
              if (!innerButton.classList.contains("styles_ToggleSwitch--active__")) {
                innerButton.click();
                console.log("Toggle switch clicked");
                clearInterval(checkClass);
                // Stop checking once clicked
              }
            }, 10);
            clearInterval(checkForToggleSwitch);
            // Stop checking once found
          }
      }
 
  }, 10);
}
const cartIconBubble = document.querySelector("#cart-icon-bubble") || document.querySelector("a.relative.block.tap-area") || document.querySelector(".cart-drawer-button") || document.querySelector("a.site-nav__link.site-nav__link--icon.js-drawer-open-cart") || document.querySelector("li.relative.header__cart-link a");

console.log(cartIconBubble);
cartIconBubble.onmouseover = function () {
  checkAndClickToggleSwitch();
};
// dawn theme
const productSubmitButtonsdawn = document.querySelectorAll(".product-form__submit");
console.log(productSubmitButtonsdawn);

productSubmitButtonsdawn.forEach((button) => {
  button.onmouseover = function () {
    checkAndClickToggleSwitch();
  };
});
// impulse theme
const productSubmitButtonsimpulse = document.querySelectorAll("button.btn.btn--full.add-to-cart");
console.log(productSubmitButtonsimpulse);

productSubmitButtonsimpulse.forEach((button) => {
  button.onmouseover = function () {
    checkAndClickToggleSwitch();
  };
});
// Shrine theme

const productSubmitButtonsShrine = document.querySelectorAll('.atc-button.product-form__submit.button--margin-x.main-product-atc');
console.log(productSubmitButtonsShrine);

productSubmitButtonsShrine.forEach(button => {
    button.onmouseover = function() {
        checkAndClickToggleSwitch();
    }
    ;
}
);
// Impact theme

const productSubmitButtonsImpact = document.querySelectorAll('buy-buttons');
console.log(productSubmitButtonsImpact);

productSubmitButtonsImpact.forEach(button => {
    button.onmouseover = function() {
        checkAndClickToggleSwitch();
    }
    ;
}
);
const productSubmitButtonSections = document.querySelectorAll(".grid.product-grid");

console.log(productSubmitButtonSections);

if (productSubmitButtonSections.length > 0) {
  productSubmitButtonSections.forEach((section) => {
    section.onmouseover = function () {
      checkAndClickToggleSwitch();
    };
  });
}
// quick buy Shrine
const productSubmitButtonSectionsShrine = document.querySelectorAll('.product-card__quick-buy .button');

console.log(productSubmitButtonSectionsShrine);

if (productSubmitButtonSectionsShrine.length > 0) {
    productSubmitButtonSectionsShrine.forEach(section => {
        section.onmouseover = function() {
            checkAndClickToggleSwitch();

        }
        ;
    }
    );
}
// quick buy Sleek
const productSubmitButtonSectionsSleek = document.querySelectorAll('button.product-card__atc.product-card__action-button');

console.log(productSubmitButtonSectionsSleek);

if (productSubmitButtonSectionsSleek.length > 0) {
    productSubmitButtonSectionsSleek.forEach(section => {
        section.onmouseover = function() {
            checkAndClickToggleSwitch();

        }
        ;
    }
    );
}
const productSubmitButtonSectionsSleek2 = document.querySelectorAll('button.product-card__action-button.product-card__atc');

console.log(productSubmitButtonSectionsSleek2);

if (productSubmitButtonSectionsSleek2.length > 0) {
    productSubmitButtonSectionsSleek2.forEach(section => {
        section.onmouseover = function() {
            checkAndClickToggleSwitch();

        }
        ;
    }
    );
}
// quick buy Refresh
const productSubmitButtonSectionsRefresh = document.querySelectorAll('.quick-add__submit.button');

console.log(productSubmitButtonSectionsRefresh);

if (productSubmitButtonSectionsRefresh.length > 0) {
    productSubmitButtonSectionsRefresh.forEach(section => {
        section.onmouseover = function() {
            checkAndClickToggleSwitch();

        }
        ;
    }
    );
}
// quick buy Refresh
const productSubmitButtonSectionsPrestige = document.querySelectorAll('.product-card__quick-add-button');

console.log(productSubmitButtonSectionsPrestige);

if (productSubmitButtonSectionsPrestige.length > 0) {
    productSubmitButtonSectionsPrestige.forEach(section => {
        section.onmouseover = function() {
            checkAndClickToggleSwitch();
        };
    });
}

const productSubmitButtonSections4 = document.querySelectorAll(".product-card__quick-buy .product-card__mobile-quick-buy-button");

console.log(productSubmitButtonSections4);

if (productSubmitButtonSections4.length > 0) {
  productSubmitButtonSections4.forEach((section) => {
    section.onmouseover = function () {
      checkAndClickToggleSwitch();
    };
  });
}
setTimeout(() => {
    const productSubmitButton2 = document.querySelector('.sticky-atc__button');
    console.log(productSubmitButton2);
    productSubmitButton2.onmouseover = function() {
            checkAndClickToggleSwitch()
    };

}, 1100);
