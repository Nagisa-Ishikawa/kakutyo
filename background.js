chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    title: "slackのデイリーを全部開く",
    type: "normal",
    contexts: ["all"],
    id: "slack_open",
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  console.log("🤔 ", info.menuItemId);
  if (info.menuItemId === "slack_open") {
    window.alert("クリックされたで");
  }
});
