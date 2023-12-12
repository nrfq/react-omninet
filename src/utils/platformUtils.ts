type Platform = "Windows 10"
  | "Windows 8.1"
  | "Windows 8"
  | "Windows 7"
  | "Windows Vista"
  | "Windows XP"
  | "Windows 2000"
  | "Mac/iOS"
  | "UNIX"
  | "Linux"
  | "Unknown";

const getPlatform = ():Platform => {
  if (window.navigator.userAgent.indexOf("Windows NT 10.0")!= -1) return "Windows 10";
  else if (window.navigator.userAgent.indexOf("Windows NT 6.3") != -1) return "Windows 8.1";
  else if (window.navigator.userAgent.indexOf("Windows NT 6.2") != -1) return "Windows 8";
  else if (window.navigator.userAgent.indexOf("Windows NT 6.1") != -1) return "Windows 7";
  else if (window.navigator.userAgent.indexOf("Windows NT 6.0") != -1) return "Windows Vista";
  else if (window.navigator.userAgent.indexOf("Windows NT 5.1") != -1) return "Windows XP";
  else if (window.navigator.userAgent.indexOf("Windows NT 5.0") != -1) return "Windows 2000";
  else if (window.navigator.userAgent.indexOf("Mac") != -1) return "Mac/iOS";
  else if (window.navigator.userAgent.indexOf("X11") != -1) return "UNIX";
  else if (window.navigator.userAgent.indexOf("Linux") != -1) return "Linux";
  return "Unknown";
}

export {
  getPlatform,
}
