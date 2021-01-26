<?php
session_start();
if(isset($_SESSION['user_id'])){
    header('location: blog.php');
}

require_once 'app/helpers.php';
$page_title = 'Signin Page';
$errors = ['email' => '', 'password' => '',];

if( isset($_POST['submit'] ) ){
    $email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);
    $email = trim($email);
    $password = filter_input(INPUT_POST, 'password', FILTER_SANITIZE_STRING);
    $password = trim($password);
    $form_valid = true;

    if(! $email){
        $errors['email'] = 'A valid email is required.';
        $form_valid = false;
    }
    if(! $password || strlen($password) < 6 || strlen($password) > 20){
        $errors['password'] = 'Your password is either too short, too long or you have entered a wrong password.';
        $form_valid = false;
    }
    if ($form_valid) {
        $link = mysqli_connect(MYSQL_HOST, MYSQL_USER, MYSQL_PWD, MYSQL_DB);
        $email = mysqli_real_escape_string($link, $email);
        $password = mysqli_real_escape_string($link, $password);
        $sql = "SELECT * FROM users WHERE email = '$email'";
        $result = mysqli_query($link, $sql);
        if($result && mysqli_num_rows($result) == 1){
            $user = mysqli_fetch_assoc($result);
            if( password_verify($password, $user['password']) ){
                $_SESSION['user_id'] = $user['id'];
                $_SESSION['user_email'] = $user['email'];
                $_SESSION['user_name'] = $user['name'];
                header('location: blog.php');
            } else {
                $errors['password'] = 'Wrong email or password.';
            }
        } else {
            $errors['password'] = 'Wrong email or password.';
        }
    }
}

include 'tpl/header.php';
?>
<main class="min-h-900">
    <div class="container mt-3">
        <div class="row">
            <div class="col-12 text-center">
                <h1 class="display-4">Sign In To Your DIGG Account</h1>
                <p>fill your details below to sign in.</p>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-lg-6">
                <form action="" method="POST" autocomplete="off" novalidate="novalidate">
                    <div class="mb-3">
                        <label for="email">* Email:</label>
                        <input value="<?= old('email'); ?>" type="email" name="email" id="email" class="form-control">
                        <span class="text-danger"><?= $errors['email']; ?></span>
                    </div>
                    <div class="mb-3">
                        <label for="password">* Password:</label>
                        <input type="password" name="password" id="password" class="form-control">
                        <span class="text-danger"><?= $errors['password']; ?></span>
                    </div>
                    <button type="submit" name="submit" class="btn btn-dark text-danger w-100">Signin</button>
                </form>
            </div>
        </div>
    </div>
</main>

<?php include '../tpl/footer.php'; ?>