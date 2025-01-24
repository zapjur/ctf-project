<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_FILES['file'])) {
    $upload_dir = 'uploads/';
    $file_name = $_FILES['file']['name'];
    $file_tmp = $_FILES['file']['tmp_name'];

    $allowed_ext = ['jpg', 'png', 'txt', 'php'];
    $ext = pathinfo($file_name, PATHINFO_EXTENSION);

    if (in_array($ext, $allowed_ext)) {
        move_uploaded_file($file_tmp, $upload_dir . $file_name);
        echo "File uploaded: <a href='$upload_dir$file_name'>$file_name</a>";
    } else {
        echo "Invalid file extension.";
    }
}

$hints = [
    "Hint 1: You can upload a file with the extension <code>.php</code> and see what happens.",
    "Hint 2: The flag is located in the file <code>flag.txt</code>.",
    "Hint 3: Files are uploaded to the <code>uploads/</code> directory.",
];

$hint_message = "";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['hint1'])) {
        $hint_message = $hints[0];
    } elseif (isset($_POST['hint2'])) {
        $hint_message = $hints[1];
    } elseif (isset($_POST['hint3'])) {
        $hint_message = $hints[2];
    }
}
?>
<!DOCTYPE html>
<html>
<body>
    <h1>File Upload</h1>
    <p>Upload a file to discover the flag!</p>
    <form action="" method="POST" enctype="multipart/form-data">
        <input type="file" name="file">
        <button type="submit">Upload</button>
    </form>
    
    <h2>Need a hint?</h2>
    <form action="" method="POST">
        <button type="submit" name="hint1">Hint 1</button>
        <button type="submit" name="hint2">Hint 2</button>
        <button type="submit" name="hint3">Hint 3</button>
    </form>
    
    <?php if (!empty($hint_message)): ?>
        <p><strong>Hint:</strong> <?php echo $hint_message; ?></p>
    <?php endif; ?>
</body>
</html>
