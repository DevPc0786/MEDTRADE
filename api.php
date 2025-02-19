<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

// Database connection
$host = "localhost";
$user = "atul_01";
$pass = "Atul_admin_011@";
$db_name = "medtrade_db";

$conn = new mysqli($host, $user, $pass, $db_name);

// Check connection
if ($conn->connect_error) {
    die(json_encode(["success" => false, "message" => "Database Connection Failed: " . $conn->connect_error]));
}

// Handle OPTIONS request for CORS
if ($_SERVER["REQUEST_METHOD"] == "OPTIONS") {
    http_response_code(200);
    exit();
}

// Handle GET request
if ($_SERVER["REQUEST_METHOD"] == "GET") {
    $sql = "SELECT * FROM product";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $products = $result->fetch_all(MYSQLI_ASSOC);
        echo json_encode(["success" => true, "products" => $products]);
    } else {
        echo json_encode(["success" => false, "message" => "No data found"]);
    }
}

// Handle POST request
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Validate required fields
    if (!isset($_POST["name"], $_POST["price"], $_POST["dis_price"], $_POST["option"], $_POST["features"], $_POST["description"], $_POST["rating"], $_FILES["images"])) {
        echo json_encode(["success" => false, "message" => "Missing required fields"]);
        exit();
    }

    // Escape input for security
    $name = $conn->real_escape_string($_POST["name"]);
    $price = $conn->real_escape_string($_POST["price"]);
    $dis_price = $conn->real_escape_string($_POST["dis_price"]);
    $option = $conn->real_escape_string($_POST["option"]);
    $features = $conn->real_escape_string(json_encode($_POST["features"])); // Store as JSON string
    $description = $conn->real_escape_string($_POST["description"]);
    $rating = $conn->real_escape_string($_POST["rating"]);

    // File handling
    $uploadDir = "uploads/";
    if (!is_dir($uploadDir)) {
        mkdir($uploadDir, 0755, true);
    }

    $fileName = basename($_FILES["images"]["name"]);
    $fileExt = strtolower(pathinfo($fileName, PATHINFO_EXTENSION));
    $newFileName = uniqid("img_", true) . "." . $fileExt;
    $filePath = $uploadDir . $newFileName;

    if (move_uploaded_file($_FILES["images"]["tmp_name"], $filePath)) {
        $fileDestination = "http://medtrade.in/" . $filePath;

        // Insert into database
        $sql = "INSERT INTO product (name, price, dis_price, option, features, description, images, rating) 
                VALUES ('$name', '$price', '$dis_price', '$option', '$features', '$description', '$fileDestination', '$rating')";

        if ($conn->query($sql) === TRUE) {
            echo json_encode(["success" => true, "message" => "Product added successfully", "image" => $fileDestination]);
        } else {
            echo json_encode(["success" => false, "message" => "Error: " . $conn->error]);
        }
    } else {
        echo json_encode(["success" => false, "message" => "File upload failed"]);
    }
}

// Close connection
$conn->close();
