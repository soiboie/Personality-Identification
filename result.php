

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Check if the selected personality type is set in the POST data
    if (isset($_POST['finalScore'])) {
        // Retrieve the selected personality type from POST data
        $finalScore = $_POST['finalScore'];

        // Define the paths to the 16 personality type HTML pages
        $personalityPages = [
            "ISTP" => "Personality Types\Html\ISTP.html",
            "ISTJ" => "Personality Types\Html\ISTJ.html",
            "ISFP" => "Personality Types\Html\ISFP.html",
            "ISFJ" => "Personality Types\Html\ISFJ.html",
            "INTP" => "Personality Types\Html\INTP.html",
            "INTJ" => "Personality Types\Html\INTJ.html",
            "INFP" => "Personality Types\Html\INFP.html",
            "INFJ" => "Personality Types\Html\INFJ.html",
            "ESTP" => "Personality Types\Html\ESTP.html",
            "ESTJ" => "Personality Types\Html\ESTJ.html",
            "ESFP" => "Personality Types\Html\ESFP.html",
            "ESFJ" => "Personality Types\Html\ESFJ.html",
            "ENTP" => "Personality Types\Html\ENTP.html",
            "ENTJ" => "Personality Types\Html\ENTJ.html",
            "ENFP" => "Personality Types\Html\ENFP.html",
            "ENFJ" => "Personality Types\Html\ENFJ.html"
        ];

        // Check if the selected personality type corresponds to a valid personality type
        if (array_key_exists($finalScore, $personalityPages)) {
            // Redirect to the HTML page corresponding to the selected personality type
            header("Location: " . $personalityPages[$finalScore]);
            exit;
        } else {
            // Handle the case where the selected personality type is invalid
            echo "Error: Invalid personality type.";
        }
    } else {
        // Handle the case where the selected personality type is not provided
        echo "Error: Personality type not provided.";
    }
} else {
    // Handle the case where the form is not submitted via POST method
    echo "Error: Form submission method not allowed.";
}
?>
