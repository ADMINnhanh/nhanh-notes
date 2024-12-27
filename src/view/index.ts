window.addEventListener("click", (event) => {
  const clickX = event.clientX;
  const clickY = event.clientY;

  // 获取所有 textarea 元素
  const textareas = document.querySelectorAll("textarea");

  if (textareas.length === 0) return; // 没有 textarea，直接返回

  let closestTextarea: HTMLTextAreaElement | undefined;
  let minDistance = Infinity;

  textareas.forEach((textarea) => {
    const rect = textarea.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // 计算距离
    const distance = Math.sqrt(
      Math.pow(centerX - clickX, 2) + Math.pow(centerY - clickY, 2)
    );

    // 更新最小距离和最近的 textarea
    if (distance < minDistance) {
      minDistance = distance;
      closestTextarea = textarea;
    }
  });

  // 如果找到最近的 textarea，聚焦它
  if (closestTextarea) closestTextarea.focus();
});
