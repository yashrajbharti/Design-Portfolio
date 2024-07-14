// function from https://stackoverflow.com/a/5624139/3695983
function hexToRgb(hex) {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

// function from https://stackoverflow.com/a/9733420/3695983
function luminance(r, g, b) {
  const a = [r, g, b].map(function (v) {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}

function calculateRatio(color1, color2) {
  // read the colors and transform them into rgb format

  const color1rgb = hexToRgb(color1);
  const color2rgb = hexToRgb(color2);

  // calculate the relative luminance
  const color1luminance = luminance(color1rgb.r, color1rgb.g, color1rgb.b);
  const color2luminance = luminance(color2rgb.r, color2rgb.g, color2rgb.b);

  // calculate the color contrast ratio
  const ratio =
    color1luminance > color2luminance
      ? (color2luminance + 0.05) / (color1luminance + 0.05)
      : (color1luminance + 0.05) / (color2luminance + 0.05);

  return ratio;
}

document
  .querySelectorAll("input")
  .forEach((input) => input.addEventListener("change", checkConstrast));

function checkConstrast() {
  const color1 = document.querySelector("#color-1").value;
  const color2 = document.querySelector("#color-2").value;
  const ratio = calculateRatio(color1, color2);
  // show results depending on WCAG requirements
  const label = document.querySelectorAll("label");
  label[0].textContent = color1;
  label[1].textContent = color2;
  const result = `
AA-level large text: ${
    ratio < 1 / 3
      ? `<div style="background-color:lightgreen; color:#000; display:inline-block">
PASS
</div>`
      : `<div style="background-color:tomato; color:#000; display:inline-block">
FAIL
</div>`
  }<br>
AA-level small text: ${
    ratio < 1 / 4.5
      ? `<div style="background-color:lightgreen; color:#000; display:inline-block">
PASS
</div>`
      : `<div style="background-color:tomato; color:#000; display:inline-block">
FAIL
</div>`
  }<br>
AAA-level large text: ${
    ratio < 1 / 4.5
      ? `<div style="background-color:lightgreen; color:#000; display:inline-block">
PASS
</div>`
      : `<div style="background-color:tomato; color:#000; display:inline-block">
FAIL
</div>`
  }<br>
AAA-level small text: ${
    ratio < 1 / 7
      ? `<div style="background-color:lightgreen; color:#000; display:inline-block">
PASS
</div>`
      : `<div style="background-color:tomato; color:#000; display:inline-block">
FAIL
</div>`
  }<br>
<br>
Color ratio: ${Math.round((1 / ratio) * 10) / 10}
`;
  document.querySelector("#a11y-info").innerHTML = result;
}

checkConstrast();
