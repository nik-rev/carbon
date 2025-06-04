//! Adds "Copy to Clipboard" button to all code blocks

const copyIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18">' +
  '<path d="M5.00242 8 L5.00019 20 H14.9998 V8 H5.00242 Z" fill="var(--background)" />' +
  '<path d="M8.9998 4 H18.9998 V16 H8.9998 V4 Z" fill="var(--background)" />' +
  '<path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z" fill="currentColor"/>' +
  "</svg>";
const checkIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path d="M10.0007 15.1709L19.1931 5.97852L20.6073 7.39273L10.0007 17.9993L3.63672 11.6354L5.05093 10.2212L10.0007 15.1709Z" fill="currentColor"></path></svg>';

document.querySelectorAll("pre").forEach((codeBlock) => {
  const wrapper = document.createElement("div");
  wrapper.className = "codeblock";
  wrapper.setAttribute("data-name", codeBlock.getAttribute("data-name"));
  const copyButton = document.createElement("button");
  copyButton.className = "copy";
  copyButton.title = "copy";
  copyButton.ariaLabel = "copy";
  copyButton.innerHTML = copyIcon;
  const copyToClipboard = () => {
    navigator.clipboard.writeText(codeBlock.textContent).then(() => {
      copyButton.innerHTML = checkIcon;
      copyButton.classList.add("copied");
      copyButton.removeEventListener("click", copyToClipboard);
      setTimeout(() => {
        copyButton.innerHTML = copyIcon;
        copyButton.classList.remove("copied");
        copyButton.addEventListener("click", copyToClipboard);
      }, 1500);
    });
  };
  copyButton.addEventListener("click", copyToClipboard);
  wrapper.appendChild(codeBlock.cloneNode(true));
  wrapper.appendChild(copyButton);
  codeBlock.replaceWith(wrapper);
});
