

const change_toPlayMode = () => {
  document.getElementById("interpreter_container").style.width = "50%";
  document.getElementById("sidebar_container").style.width = "4%";
  document.getElementById("setting_mode_sidebar_container").style.width = "0%";
  document.getElementById("play_mode_sidebar").style.width = "100%";

  setTimeout(() => {
    document.getElementById("memory_view").style.display = "inline";
  }, 500);

  consoleLog.clear();
  inputBuffer.clear();
}

const change_toSettingMode = () => {
  document.getElementById("memory_view").style.display = "none";
  document.getElementById("interpreter_container").style.width = "0%";
  document.getElementById("sidebar_container").style.width = "var(--test_sidebarw)";
  document.getElementById("setting_mode_sidebar_container").style.width = "100%";
  document.getElementById("play_mode_sidebar").style.width = "0%";
}