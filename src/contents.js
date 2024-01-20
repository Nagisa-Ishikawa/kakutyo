window.alert("クリックされたで");
console.log("🤔");

chrome.contextMenus.create({
  title: "KakutyoSamole",
  type: "normal",
  contexts: ["all"],
  id: "parent_id",
  onclick: () => alert("クリックされたで"),
});
