# Upload file

jQuery

```php title="upload.php"
<?php
if (isset($_FILES['data'])) {
    $file = $_FILES['data'];
    if ($file['error'] !== UPLOAD_ERR_OK) {
        http_response_code(400);
        exit("Upload error: " . $file['error']);
    }

    // Not safe, need check file name length, extension
    // $uploadFile = basename($file['name']);

    // Use hash as file name
    $filename = hash_file(
        "sha1", // md5, sha1, sha256, ...
        $file['tmp_name']
    );

    if ($filename === false) {
        http_response_code(500);
        exit("Cannot hash file");
    }

    if (!move_uploaded_file($file['tmp_name'], $filename)) {
        http_response_code(400);
        exit("Upload failed");
    }

    exit("Upload success [${filename}]");

    // Debug info
    print_r($_FILES);
}
?>
<html>

<body>
    <pre id="message"></pre>

    <form action="" method="post" enctype="multipart/form-data">
        <input type="file" name="data" id="user-file">
        <input type="button" value="Upload" id="upload">
    </form>

    <script src="https://code.jquery.com/jquery-3.6.1.min.js" crossorigin="anonymous"></script>
    <script>
        $("#upload").on('click', function() {
            var fd = new FormData();
            var file = $('#user-file')[0].files[0];
            fd.append('data', file);

            $.ajax({
                // url: 'upload.php',
                url: '',
                type: 'post',
                data: fd,
                contentType: false,
                processData: false
            }).done(function(msg) {
                $("#message").text(msg);
            }).fail(function(xhr) {
                $("#message").text("Fail: " + xhr.responseText);
            });
        });
    </script>
</body>

</html>
```
