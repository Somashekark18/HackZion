<?php
// Establish connection to the database
$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "your_database_name";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Retrieve person ID from the query string
$personID = $_GET['personID'];

// Prepare SQL query and execute to fetch data for the given person ID
$stmt = $conn->prepare("SELECT * FROM person_table WHERE id = ?");
$stmt->bind_param("i", $personID);
$stmt->execute();
$result = $stmt->get_result();

// Fetch data and return as JSON response
$data = $result->fetch_assoc();
echo json_encode($data);

$stmt->close();
$conn->close();
?>
