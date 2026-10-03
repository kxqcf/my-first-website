function initCounter() {
  const btn = document.getElementById("hiBtn");
  const text = document.getElementById("hiText");

  if (!btn || !text) {
    return;
  }

  let count = 0;

  btn.addEventListener("click", function () {
    count = count + 1;

    text.textContent = "你已经点了 " + count + " 次，恭喜你，你刚刚写下了第一行会跑的代码。";
  });
}
