<?php

session_start();
require_once 'app/helpers.php';
if(isset($_GET['id'])){
$id = $_GET['id'];
} else {
    $id = $_SESSION['user_id'];
}
$link = mysqli_connect(MYSQL_HOST, MYSQL_USER, MYSQL_PWD, MYSQL_DB);
$sql = "SELECT * FROM users WHERE id='$id'";
$result = mysqli_query($link, $sql);
$users = mysqli_fetch_assoc($result);

$page_title = $users['name'] . ' Profile Page';

include 'tpl/header.php';

?>

<main class="min-h-900">
    <div class="container">
        <div class="row">
            <div class="col-12 mt-5">
                <div class="card mt-5">
                    <div class="card-header bg-dark text-danger">
                        <img src="images/<?= $users['profile_image']; ?>" width="50" />
                        <span><?= $users['name']; ?></span>
                    </div>
                    <div class="card-body">
                        <p class="card-test"><b>User Name: </b><?= $users['name']; ?></p>
                        <p class="card-test"><b>User ID: </b><?= $users['id'] ?></p>
                        <?php if($_GET['id'] == $_SESSION['user_id']): ?>
                        <p class="card-test"><b>User Email: </b><?= $users['email']; ?></p>
                        <?php endif; ?>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>

<?php include 'tpl/footer.php'; ?>