chrome.runtime.onInstalled.addListener(function (details) {
  chrome.contextMenus.create({
    id: "slackOpen",
    title: "slack開きまくり",
    contexts: ["all"],
  });

  const parent = chrome.contextMenus.create({
    id: "oya",
    title: "親",
    contexts: ["all"],
  });

  const child = chrome.contextMenus.create({
    parentId: parent,
    id: "child",
    title: "子",
    contexts: ["all"],
  });

  // URLをコピーするためのメニューアイテムを作成
  chrome.contextMenus.create({
    parentId: child,
    id: "g-child",
    title: "孫",
    contexts: ["all"],
  });
});

/* コンテキストメニューがクリックされた時の処理 */
chrome.contextMenus.onClicked.addListener((info, tab) => {
  switch (info.menuItemId) {
    case "slackOpen":
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: slack,
      });
      break;

    case "title":
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: title,
      });
      break;

    case "URL":
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: URL,
      });
      break;

    case "both":
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: both,
      });
      break;
  }
});

function slack() {
  console.log("🤔");
  // https://qiita.com/FrogApp/items/cd64894721a0e4723047

  // c-search__expand_ellipsis クラスを持つ全ての要素を取得
  const elements = document.querySelectorAll(".c-search__expand_ellipsis");

  // 取得した各要素に対してクリックイベントを実行
  elements.forEach((element) => {
    element.click();
  });
}
