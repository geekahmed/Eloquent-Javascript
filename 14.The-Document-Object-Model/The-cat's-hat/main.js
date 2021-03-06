 let cat = document.querySelector("#cat");
  let hat = document.querySelector("#hat");

  let angle = 0;
  let lastTime = null;
  function animate(time) {
    if (lastTime != null) angle += (time - lastTime) * 0.001;
    lastTime = time;
    cat.style.top = (Math.sin(angle) * 40 + 200) + "px";
    cat.style.left = (Math.cos(angle) * 200 + 333) + "px";
    hat.style.top = (Math.sin(angle + Math.PI) * 40 + 200) + "px";
    hat.style.left = (Math.cos(angle + Math.PI) * 200 + 333) + "px";

    requestAnimationFrame(animate);
  }
  requestAnimationFrame(animate);