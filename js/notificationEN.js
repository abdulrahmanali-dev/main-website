var template,
  notificationsList = [],
  baseClass = "Notification",
  listElement = document.getElementsByClassName(baseClass + "s__List")[0],
  addBtn = document.getElementsByClassName(baseClass + "s__addBtn")[0],
  removeBtn = document.getElementsByClassName(baseClass + "s__removeBtn")[0],
  userName = "You";

notificationsList.push(
  {
    name: "Shopify",
    icon: "./images/shopify_logo_apple.png",
    time: "Now",
    title: userName,
    content: "You are a new order for 1 item totaling $365,99",
  },
  {
    name: "Shopify",
    icon: "./images/shopify_logo_apple.png",
    time: "Now",
    title: userName,
    content: "You are a new order for 1 item totaling $365,99",
  },
  {
    name: "Shopify",
    icon: "./images/shopify_logo_apple.png",
    time: "Now",
    title: userName,
    content: "You are a new order for 1 item totaling $365,99",
  },
  {
    name: "Shopify",
    icon: "./images/shopify_logo_apple.png",
    time: "Now",
    title: userName,
    content: "You are a new order for 1 item totaling $365,99",
  }
);

template = (() => {
  let elm = document.getElementsByClassName("Notification")[0],
    tmp = elm.cloneNode(true);

  tmp.classList.add(baseClass + "--Close");
  tmp.classList.add(baseClass + "--Optimize");

  elm.remove();

  listElement.innerHTML = "";

  return tmp;
})();

function rnd(size) {
  return Number.parseInt(Math.random() * size);
}

function Notification(config = {}) {
  var element = template.cloneNode(true);

  function handler(klass, attr, value, child) {
    var tmp = element.getElementsByClassName(baseClass + klass)[0];

    if (typeof child === "number") {
      tmp = tmp.children[child];
    }

    if (attr === "value") {
      return (tmp.innerText = value);
    }

    return tmp.setAttribute(attr, value);
  }

  handler("__Icon", "src", config.icon, 0);
  handler("__Name", "value", config.name);
  handler("__Time", "value", config.time);
  handler("__Title", "value", config.title);
  handler("__Content", "value", config.content);

  return element;
}

function addNotification(notification, callback) {
  // Ajoute la nouvelle notification au début de la liste
  listElement.insertAdjacentElement("afterBegin", notification);

  // Attend un court moment pour la transition
  setTimeout(() => {
    notification.classList.remove(baseClass + "--Close");
    setTimeout(() => {
      notification.classList.remove(baseClass + "--Optimize");

      // Après les transitions, effectuez le callback si nécessaire
      if (typeof callback === "function") callback();

      // Vérifie maintenant le nombre de notifications après l'ajout
      // Obtient toutes les notifications actuelles
      const notifications = document.querySelectorAll("." + baseClass);
      // Si le nombre dépasse 6, supprime la plus ancienne
      if (notifications.length > 6) {
        // Supprime la plus ancienne notification, qui est maintenant le dernier enfant dans la liste
        listElement.removeChild(listElement.lastChild);
      }
    }, 875);
  }, 25);
}

function removeNotification(notification, callback) {
  notification.classList.add(baseClass + "--Optimize");
  notification.classList.add(baseClass + "--Close");

  setTimeout(() => {
    notification.remove();

    if (typeof callback === "function") callback();
  }, 875);
}

function removeLastItem() {
  let notification, tmp;

  tmp = document.getElementsByClassName(baseClass);

  for (let i = 0; i < tmp.length; i++) {
    if (!tmp[i].classList.contains(baseClass + "--Close")) {
      notification = tmp[i];
      break;
    }
  }

  removeNotification(notification, () => {
    if (!listElement.children.length) {
      listElement.innerHTML = "";
    }
  });
}

addBtn.addEventListener("click", () => {
  // Créer une nouvelle notification
  const newNotification = Notification(notificationsList[rnd(notificationsList.length)]);

  // Vérifie le nombre de notifications actuelles
  const notifications = document.querySelectorAll(".Notification");
  if (notifications.length >= 10) {
    // Si on a déjà 10 notifications, supprime la plus ancienne (la première enfant de la liste)
    notifications[notifications.length - 1].remove();
  }

  // Ajoute la nouvelle notification au début de la liste
  addNotification(newNotification);
});

removeBtn.addEventListener("click", removeLastItem);

{
  let c = 1,
    end = 20,
    operation = "add";

  setInterval(() => {
    return;

    if (operation === "add") {
      addNotification(Notification(notificationsList[rnd(notificationsList.length)]));
    } else if (operation === "remove") {
      removeLastItem();
    }

    if (c === 0) {
      operation = "add";
    } else if (c === end) {
      operation = "remove";
    }

    if (operation === "add") {
      c++;
    } else if (operation === "remove") {
      c--;
    }
  }, 875 / 6);
}

function getCurrentTime() {
  var now = new Date();
  return now.getHours() + ":" + (now.getMinutes() < 10 ? "0" : "") + now.getMinutes();
}

function generateRandomOrder() {
  var items = rnd(3) + 1; // Génère un nombre aléatoire d'articles entre 1 et 3
  var amount = (Math.random() * (400.99 - 20.0) + 20.0).toFixed(2); // Génère un montant aléatoire entre $20,00 et $400,99
  return (
    "You have a new order for " + items + " item" + (items > 1 ? "s" : "") + " totaling $" + amount
  );
}

// Modifier la fonction addRandomNotification pour utiliser les nouvelles fonctions
function addRandomNotification() {
  var randomIndex = rnd(notificationsList.length);
  var notification = notificationsList[randomIndex];

  // Met à jour le temps et le contenu de la notification
  notification.time = getCurrentTime(); // Utilise l'heure actuelle
  notification.content = generateRandomOrder(); // Génère un contenu de commande aléatoire

  var newNotification = Notification(notification);
  addNotification(newNotification);
}

function resizeChildDiv() {
  var parentWidth = $(".parent").width(); // Largeur du parent
  var childHeight = parentWidth * (95 / 440); // Calcul de la hauteur basée sur le ratio
  $(".child").css("height", childHeight + "px"); // Appliquer la hauteur calculée à l'enfant
}

setTimeout(function () {
  var element = document.querySelector(".Notifications__List");
  if (element) {
    element.classList.add("visible");
  }
}, 5000); // 1000 millisecondes = 1 seconde

addBtn.addEventListener("click", () => {
  // Créer une nouvelle notification
  const newNotification = Notification(notificationsList[rnd(notificationsList.length)]);

  // Vérifie le nombre de notifications actuelles
  const notifications = document.querySelectorAll(".Notification");
  if (notifications.length >= 10) {
    // Si on a déjà 10 notifications, supprime la plus ancienne (la première enfant de la liste)
    notifications[0].remove();
  }

  // Ajoute la nouvelle notification au début de la liste
  addNotification(newNotification);
});
