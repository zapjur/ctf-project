<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_FILES['file'])) {
    $upload_dir = 'uploads/';
    $file_name = $_FILES['file']['name'];
    $file_tmp = $_FILES['file']['tmp_name'];

    $allowed_ext = ['jpg', 'png', 'txt', 'php'];
    $ext = pathinfo($file_name, PATHINFO_EXTENSION);

    if (in_array($ext, $allowed_ext)) {
        move_uploaded_file($file_tmp, $upload_dir . $file_name);
        echo "Plik przesłany: <a href='$upload_dir$file_name'>$file_name</a>";
    } else {
        echo "Niedozwolone rozszerzenie pliku.";
    }
}

$hints = [
    "Wskazówka 1: Możesz przesłać plik z rozszerzeniem <code>.php</code> i zobaczyć, co się stanie.",
    "Wskazówka 2: Flaga znajduje się w pliku <code>flag.txt</code>.",
    "Wskazówka 3: Pliki są przesyłane do katalogu <code>uploads/</code>.",
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
    <h1>Przesyłanie plików</h1>
    <p>Prześlij plik, aby odkryć flagę!</p>
    <form action="" method="POST" enctype="multipart/form-data">
        <input type="file" name="file">
        <button type="submit">Prześlij</button>
    </form>
    
    <h2>Potrzebujesz wskazówki?</h2>
    <form action="" method="POST">
        <button type="submit" name="hint1">Wskazówka 1</button>
        <button type="submit" name="hint2">Wskazówka 2</button>
        <button type="submit" name="hint3">Wskazówka 3</button>
    </form>
    
    <?php if (!empty($hint_message)): ?>
        <p><strong>Wskazówka:</strong> <?php echo $hint_message; ?></p>
    <?php endif; ?>
</body>
</html>
