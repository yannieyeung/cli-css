console.log("COOOOLLOOOUUURSSS")

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

console.log("user entered " + process.argv[3]);

// hexColor = (process.argv[3]);

console.log(hexToRgb(process.argv[3]));