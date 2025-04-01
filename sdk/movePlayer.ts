export const movePlayer = (container: string) => {
  const $container = document.querySelector(container) as HTMLDivElement;
  if (!$container) return;

  const $circleElement = $container.querySelector("#player") as HTMLDivElement;
  if (!$circleElement) return;

  const mouse = { x: 0, y: 0 };
  const circle = { x: 0, y: 0 };
  let isMouseInside = false;
  let returnToCenter = false;

  const speed = 0.1;

  const resetCssProperties = () => {
    $circleElement.style.left = "0";
    $circleElement.style.top = "0";
  };

  const getCenterCoordinates = () => {
    const containerRect = $container.getBoundingClientRect();
    const centerX = (containerRect.width - $circleElement.offsetWidth) / 2;
    const centerY = (containerRect.height - $circleElement.offsetHeight) / 2;
    return { centerX, centerY };
  };

  const centerCircleInContainer = () => {
    const { centerX, centerY } = getCenterCoordinates();
    resetCssProperties();
    circle.x = centerX;
    circle.y = centerY;
    $circleElement.style.transform =
      `translate3d(${circle.x}px, ${circle.y}px, 0)`;
  };

  centerCircleInContainer();

  $container.addEventListener("mousemove", (e) => {
    isMouseInside = true;
    returnToCenter = false;

    const containerRect = $container.getBoundingClientRect();
    const mouseX = e.clientX - containerRect.left;
    const mouseY = e.clientY - containerRect.top;

    mouse.x = mouseX - $circleElement.offsetWidth / 2;
    mouse.y = mouseY - $circleElement.offsetHeight / 2;
  });

  $container.addEventListener("mouseleave", () => {
    isMouseInside = false;
    returnToCenter = true;

    const { centerX, centerY } = {
      centerX: ($container.offsetWidth - $circleElement.offsetWidth) / 2,
      centerY: ($container.offsetHeight - $circleElement.offsetHeight) / 2,
    };

    mouse.x = centerX;
    mouse.y = centerY;
  });

  const tick = () => {
    if (isMouseInside || returnToCenter) {
      circle.x += (mouse.x - circle.x) * speed;
      circle.y += (mouse.y - circle.y) * speed;
    }

    $circleElement.style.transform =
      `translate3d(${circle.x}px, ${circle.y}px, 0)`;

    requestAnimationFrame(tick);
  };

  tick();
};
