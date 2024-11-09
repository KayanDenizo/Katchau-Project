<!DOCTYPE html>
<html>
<head>
    <title>Cadastro</title>
</head>
<body>
    <h2>Cadastro de Usuário</h2>
    <form action="register_action.php" method="post" enctype="multipart/form-data">
        <label>Nome Completo:</label><br>
        <input type="text" name="full_name" required><br>
        <label>Username:</label><br>
        <input type="text" name="username" required><br>
        <label>Email:</label><br>
        <input type="email" name="email" required><br>
        <label>Password:</label><br>
        <input type="password" name="password" required><br>
        <label>Foto de Perfil:</label><br>
        <input type="file" name="profile_picture"><br><br>
        <input type="submit" value="Cadastrar">
    </form>
</body>
</html>
