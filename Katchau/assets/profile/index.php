<?php
session_start();
if (!isset($_SESSION['user_id'])) {
    header('Location: login.php');
    exit;
}

include '../../../loginECadastroClientes/db.php';
$user_id = $_SESSION['user_id'];

$sql = "SELECT * FROM users WHERE id = ?";
$stmt = $pdo->prepare($sql);
$stmt->execute([$user_id]);
$user = $stmt->fetch();
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Profile | Katchau</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="../../css/navbar.css">
    <link rel="stylesheet" href="../../css/footer.css">
    <link rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=settings" />
    <link rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
</head>

<body>



    <!-- Navbar -->

    <header>
        <nav class="navbar">
            <div class="logomarca">
                <a href="../../index-atual.html">
                    <img src="../../img/logo-katchau-removebg-preview.png" alt="Logo" class="logo-marca" />
                </a>
            </div>

            <div class="div-search">
                <input class="searchBar" type="search" placeholder="Pesquisar produtos..." name="search"><i
                    class="material-symbols-outlined">search</i>
            </div>

            <nav class="navbar-menu">
                <button>
                    <a href="../profile/index.html" class="icon material-symbols-outlined">person</a>
                </button>
                <button>
                    <a href="../Favoritos/favoritos.html" class="icon material-symbols-outlined">favorite</a>
                </button>
                <button>
                    <a href="../carrinho/carrinho.html" class="icon material-symbols-outlined"
                        id="cart">shopping_cart</a>
                </button>
                <button>
                    <a href="../contato/index.html" class="icon material-symbols-outlined">contact_support</a>
                </button>
            </nav>
        </nav>
    </header>
    <!-- Fim NavBar -->

    <!-- Main Content -->
    <main>
        <div class="voltar">
            <span class="voltarIcon">&lsaquo;</span>
            <a href="../../index-account.html" class="voltarText">Voltar</a>
        </div>

        <div class="container">
            <div class="profile-card">

                <div class="containerPic">
                    <div class="profile-pic" id="profile-pic">
                        <div class="profile-placeholder"></div>
                        <img src="#" id="profile-image">
                        <input type="file" id="upload" accept="image/*" style="display: none;">
                    </div>
                </div>

                <div class="username">
                    <h2 id="profile-name" class="editable"><?php echo htmlspecialchars($user['full_name']); ?></h2>
                </div>

                <div class="buttons">

                    <div class="link" id="settings">
                        <i class="material-symbols-outlined icon-input iconsProfile">settings</i>
                        <span>Configurações</span>
                    </div>
                    <div class="link" id="orders">
                        <i class="material-symbols-outlined icon-input iconsProfile">shopping_bag</i>
                        <span><a href="../meus-pedidos - Thayna/index.html">Meus Pedidos</a></span>
                    </div>
                    <div class="link" id="contact">
                        <i class="material-symbols-outlined icon-input iconsProfile">call</i>
                        <span><a href="../contato/index.html">Contato</a></span>
                    </div>
                    <div class="link" id="help">
                        <i class="material-symbols-outlined icon-input iconsProfile">help</i>
                        <span>Ajuda</span>
                    </div>
                </div>
            </div>
        </div>
    </main>


    <!-- Footer -->
    <footer>
        <div class="footer-container">
            <div class="footer-content">
                <div class="exclusive">
                    <h2>Exclusivo</h2>
                    <h3>Se inscreva!</h3>
                    <span>Garanta 10% de desconto no primeiro pedido</span>
                    <div class="input-container">
                        <input class="footer-input" type="email" placeholder="Insira seu e-mail" required>
                        <!-- <i class="material-symbols-outlined">send</i> -->
                        <button type="button" class="btn">ENVIAR</button>
                    </div>
                </div>
                <div class="support">
                    <h2>Suporte</h2>
                    <span><i class="material-symbols-outlined icon-footer-support">phone_in_talk</i>(11)
                        98996-9652</span>
                    <span><i
                            class="material-symbols-outlined icon-footer-support">alternate_email</i>katchau.support@gmail.com</span>
                </div>
                <div class="account">
                    <h2>Sua Conta</h2>
                    <span><a href="assets/profile/index.html">Minha conta</a></span>
                    <span><a href="assets/SignUp/entrar-kayan.html">Entrar / Cadastrar</a></span>
                    <span><a href="../carrinho/carrinho.html">Carrinho</a></span>
                    <span><a href="assets/Favoritos/favoritos.html">Favoritos</a></span>
                    <span><a href="index2.html" class="hover-simple">Início</a></span>
                </div>
                <div class="quick-links">
                    <h2>Links Rápidos</h2>
                    <span><a href="../politica-de-privacidade/politica-de-privacidade.html">Política de
                            privacidade</a></span>
                    <span><a href="../termos-de-uso/termos-de-uso.html">Termos de uso</a></span>
                    <span><a href="../faq/faq.html">FAQ</a></span>
                    <span><a href="assets/contato/index.html">Contato</a></span>
                </div>
            </div>
        </div>
    </footer>
    <div class="copyright-container">
        <span>&copy Copyright Katchau 2024 Todos os direitos reservados</span>
    </div>
    <!--Fim Footer  -->
    <script src="script.js"></script>
</body>

</html>