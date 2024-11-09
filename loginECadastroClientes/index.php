<?php
session_start();
if (!isset($_SESSION['user_id'])) {
    header('Location: login.php');
    exit;
}

include 'db.php';
$user_id = $_SESSION['user_id'];

$sql = "SELECT * FROM users WHERE id = ?";
$stmt = $pdo->prepare($sql);
$stmt->execute([$user_id]);
$user = $stmt->fetch();
?>
<!DOCTYPE html>
<html>
<head>
    <title>Página Principal</title>
</head>
<body>
    <h2>Bem-vindo, <?php echo htmlspecialchars($user['full_name']); ?>!</h2>
    <?php if ($user['profile_picture']): ?>
        <img src="<?php echo htmlspecialchars($user['profile_picture']); ?>" alt="Foto de Perfil" style="width:100px;height:100px;"><br>
    <?php endif; ?>
    <p>Você está logado.</p>
    <a href="logout.php">Logout</a>
</body>
</html>
