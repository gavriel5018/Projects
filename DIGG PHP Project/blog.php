<?php
session_start();
include 'app/helpers.php';
$page_title = 'Blog Page';
$link = mysqli_connect(MYSQL_HOST, MYSQL_USER, MYSQL_PWD, MYSQL_DB);
$sql = "SELECT u.name,u.profile_image, p.* FROM posts p
        JOIN users u ON u.id = p.user_id
        ORDER BY p.date DESC";

$result = mysqli_query($link, $sql);
?>


<?php
 include ('./tpl/header.php');
  ?>


<main class="min-h-900">
    <div class="container mt-3">
        <div class="row">
            <div class="col-12 text-center">
                <h1 class="display-4">DIGG Blog Page</h1>
                <p>We digg and digg and digg...</p>
            </div>
        </div>
        <div class="row">
            <div class="col-12 text-center">
                <?php if(isset($_SESSION['user_id'])): ?>
                <a href="add_post.php" class="btn btn-dark text-danger">+ Add New Post</a>
                <?php else: ?>
                <a href="signup.php" class="btn btn-dark text-danger">Want to start digging? signup now!</a>
                <?php endif; ?>
            </div>
        </div>
        <?php if( mysqli_num_rows($result) > 0): ?>
        <div class="row mt-3">
            <?php while($post = mysqli_fetch_assoc($result)): ?>
            <div class="col-12 mt-3">
                <div class="card">
                    <div class="card-header bg-dark text-danger">
                        <img class="rounded-circle mr-3" width="30" src="images/<?= $post['profile_image'] ?>" />
                        <span class="ml-2"><?= htmlentities($post['name']); ?></span>
                        <span class="float-end"><?= date('d/m/Y H:i:s', strtotime($post['date'])); ?>
                    </div>
                    <div class="card-body">
                        <h4 class="card-title"><?= htmlentities($post['title']); ?></h4>
                        <p class="card-text"><?= str_replace("\n", '<br>', htmlentities($post['article'])); ?></p>

                        <?php if(isset($_SESSION['user_id']) && $_SESSION['user_id'] == $post['user_id'] ): ?>
                        <div class="dropdown float-end">
                            <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Post Options
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <li><a class="dropdown-item" href="edit_post.php?pid=<?= $post['id']; ?>">Edit</a></li>
                                <li><a class="dropdown-item" id="delete-post-btn"
                                        href="delete_post.php?pid=<?= $post['id']; ?>">Delete</a></li>
                            </ul>
                        </div>
                        <?php endif; ?>

                    </div>
                </div>
            </div>
            <?php endwhile; ?>
        </div>
        <?php endif; ?>
    </div>
</main>

<?php
include ('./tpl/footer.php');
?>