
//qr code generator

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>QR Code Generator</title>
</head>
<body>
  <img id="qrcode" src="" alt="QR Code">

  <script>
    // Sample data
    var data = "Hello, Worldhuhuhbhuv!";
    
    // Generate QR code URL
    var qrCodeUrl = "https://chart.googleapis.com/chart?chs=200x200&cht=qr&chl=" + encodeURIComponent(data);
    
    // Set the src attribute of the img element to the QR code URL
    document.getElementById("qrcode").src = qrCodeUrl;
  </script>
</body>
</html>
