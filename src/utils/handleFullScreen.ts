export const handleFullScreen = () => {
  const elem = document.documentElement;

  if (
    !document.fullscreenElement &&
    !(document as any).webkitFullscreenElement &&
    !(document as any).msFullscreenElement
  ) {
    elem.requestFullscreen?.() ||
      (elem as any).webkitRequestFullscreen?.() || // Safari
      (elem as any).msRequestFullscreen?.(); // IE/Edge
  } else {
    document.exitFullscreen?.() ||
      (document as any).webkitExitFullscreen?.() || // Safari
      (document as any).msExitFullscreen?.(); // IE/Edge
  }
};
