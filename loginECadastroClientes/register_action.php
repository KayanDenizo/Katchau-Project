<?php
include 'db.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $full_name = $_POST['full_name'];
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT);

    // Gerenciar o upload da foto de perfil
    $profile_picture = null;
    if (isset($_FILES['profile_picture']) && $_FILES['profile_picture']['error'] == 0) {
        $target_dir = "uploads/";
        $target_file = $target_dir . basename($_FILES["profile_picture"]["name"]);
        if (move_uploaded_file($_FILES["profile_picture"]["tmp_name"], $target_file)) {
            $profile_picture = $target_file;
        }
    }

    $sql = "INSERT INTO users (full_name, username, email, password, profile_picture) VALUES (?, ?, ?, ?, ?)";
    $stmt = $pdo->prepare($sql);
    if ($stmt->execute([$full_name, $username, $email, $password, $profile_picture])) {
        echo "Cadastro realizado com sucesso!";
    } else {
        echo "Erro no cadastro!";
    }
}
?>
