<?php
session_start();
$page_title = 'Home Page';
include 'tpl/header.php';
?>

<main class="min-h-900">
    <div class="container mt-3">
        <div class="row">
            <div class="col-12 text-center">
                <h1 class="display-4">Welcome To DIGG Site!</h1>
                <p>this is the best site you'll ever see in your entire life.</p>
                <a class="btn btn-dark text-danger mt-3" href="signup.php">Start Your DIGG Now!</a>
            </div>
        </div>
    </div>
</main>

<?php include 'tpl/footer.php'; ?>