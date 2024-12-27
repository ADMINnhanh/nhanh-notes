function GetFocusedTextarea(): HTMLTextAreaElement | null {
  return document.activeElement instanceof HTMLTextAreaElement
    ? document.activeElement
    : null;
}

requestAnimationFrame(() => {
  const h = [1, 2, 3, 4];
  const hClass: string[] = [];
  h.forEach((v) => {
    hClass.push("h" + v);
    window.key("alt+" + v, (event) => {
      const textarea = GetFocusedTextarea();
      if (textarea) {
        const nowH = "h" + v;
        const classList = Array.from(textarea.classList);
        if (classList.find((v) => v == nowH)) {
          textarea.classList.remove(nowH);
        } else {
          hClass.forEach((v) => textarea.classList.remove(v));
          textarea.classList.add(nowH);
        }

        const inputEvent = new Event("input", {
          bubbles: false, // 事件是否可以冒泡
          cancelable: false, // 事件是否可以取消
        });
        // 触发 textarea 的 input 事件
        textarea.dispatchEvent(inputEvent);
      }
    });
  });

  window.key("alt+[", (event) => {
    const textarea = GetFocusedTextarea();
    if (textarea) textarea.classList.toggle("ol");
  });
  window.key("alt+]", (event) => {
    const textarea = GetFocusedTextarea();
    if (textarea) textarea.classList.toggle("ul");
  });
});
