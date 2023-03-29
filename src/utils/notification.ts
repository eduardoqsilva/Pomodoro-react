export function CreateNotification(titulo:string, opcoes:NotificationOptions) {
  if (!("Notification" in window)) {
    alert("Este navegador não suporta notificações na área de trabalho");
  } else if (Notification.permission === "granted") {
    new Notification(titulo, opcoes);
  } else if (Notification.permission !== "denied") {
    Notification.requestPermission().then(function (permission) {
      if (permission === "granted") {
        new Notification(titulo, opcoes);
      }
    });
  }
}