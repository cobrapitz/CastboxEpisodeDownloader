var playbackRate = document.getElementsByClassName("playbackRate")[0];

var title = document.getElementsByClassName("trackinfo-title")[0].getAttribute("title");
var image = browser.runtime.getURL("images/download_button.png");
var downloadURL = document.getElementsByTagName("source")[0].getAttribute("src");

fetch(browser.runtime.getURL("content/button.html"))
  .then(response => response.text())
  .then((button_html) => {
    var button_output = button_html.replace("{image}", image)
        .replace("{downloadURL}", downloadURL)
        .replace("{title}", title);
    playbackRate.insertAdjacentHTML("afterend", button_output);

  });
