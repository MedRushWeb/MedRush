let ResetBtn = document.querySelector(".resetbtn");
document.getElementById("resetbtn").addEventListener("click", function () {
  var result = confirm('Are you sure you want to reset all data?');
  if (result) {
    async function setTriggerFlag() {
      await saveOrUpdateDoc("triggerFunction", "true");
      console.log("✅ triggerFunction set to true");
    }
    setTriggerFlag();
    window.location.href = "connect.html";
  }
});






document.getElementById("autoresetbtn").addEventListener("click", function () {
  console.log("⚙️ Auto reset triggered silently");

  async function setTriggerFlag() {
    await saveOrUpdateDoc("triggerFunction", "true");
    console.log("✅ triggerFunction auto-set to true");
  }

  setTriggerFlag();
});






