export function stringToHexCode(str: string) {
  let hexCode = "";

  for (let i = 0; i < str.length; i++) {
    const charCode = str.charCodeAt(i).toString(16);
    hexCode += charCode.padStart(2, "0");
  }

  return hexCode;
}

export function hexCodeToColor(hexCode: string) {
  // Remove any leading "#" symbol from the hex code
  if (hexCode.startsWith("#")) {
    hexCode = hexCode.substring(1);
  }

  // Split the hex code into RGB component pairs
  const red = hexCode.substring(0, 2);
  const green = hexCode.substring(2, 4);
  const blue = hexCode.substring(4, 6);

  // Construct the color hex code
  const colorHexCode = `#${red}${green}${blue}`;

  return colorHexCode;
}
