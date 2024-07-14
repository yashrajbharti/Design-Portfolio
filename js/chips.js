const dialog = document.getElementById("cookie-warning");
dialog.show();

document.getElementById("accept").addEventListener("click", function () {
  dialog.close();
  document.getElementById("video-container").style.display = "block";

  if ("partitionedCookies" in document) {
    document.partitionedCookies
      .set({
        name: "youtube-embed-consent",
        value: "accepted",
        domain: "youtube.com",
        path: "/",
        partitioned: true,
        secure: true,
        sameSite: "Lax",
      })
      .then(() => {
        document.getElementById("video-container").innerHTML = `
              <iframe width="860" height="315" src="https://www.youtube-nocookie.com/embed/NYFIiC_oPcA?si=UxZOGY8jsFsozacI"
              title="YouTube video player" frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
              referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            `;
      })
      .catch((error) => {
        console.error("Error setting partitioned cookie:", error);
      });
  } else {
    console.warn("CHIPS not supported in this browser.");
    document.getElementById("video-container").innerHTML = `
          <iframe width="860" height="315" src="https://www.youtube-nocookie.com/embed/NYFIiC_oPcA?si=UxZOGY8jsFsozacI"
          title="YouTube video player" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
          referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `;
  }
});

document.getElementById("decline").addEventListener("click", function () {
  dialog.close();
  document.getElementById(
    "video-container"
  ).innerHTML = `<a href="https://www.youtube.com/watch?v=NYFIiC_oPcA" target="_blank" class="substitute">
        <img loading="lazy" src="../images/Hero/Youtube Figma Play.png" alt="Figma play watch youtube video">
    </a>`;
});
