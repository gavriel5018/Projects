var deletePostBtn = document.getElementById('delete-post-btn');

if( deletePostBtn ){    
    document.getElementById('delete-post-btn').addEventListener('click', function(e){
        if(confirm('Are You Sure You Want To Delete This Card?')){
            return true
        } else {
            e.preventDefault();
        }
    } )
}