function showProgramDetails() {
    const programSelect = document.getElementById("programSelect");
    const selectedProgram = programSelect.value;

    // Show program details based on the selected program
    if (selectedProgram) {
        displayProgramDetails(selectedProgram); // Call the function to display program details
    } else {
        alert("Please select a valid program.");
    }
}

const programDetails = {
    elementary: '<p>Details about the Elementary program.</p>',
    highschool: '<p>Details about the High School program.</p>',
    seniorHighschool: '<p>Details about the Senior High School program.</p>',
    college: '<p>Details about the College program.</p>',
};

function displayProgramDetails(program) {
    const detailsContent = document.getElementById('detailsContent');
    const programDetailsSection = document.getElementById('programDetails');

    detailsContent.innerHTML = programDetails[program] || '<p>Please select a program.</p>';
    programDetailsSection.classList.remove('hidden'); // Show the program details section
}

function sendMessage() {
    const userInput = document.getElementById("userInput");
    const messages = document.getElementById("messages");

    // Get the user's input
    const userMessage = userInput.value;
    if (userMessage.trim() === "") return; // Prevent sending empty messages

    // Display the user's message
    messages.innerHTML += `<div class="message user">You: ${userMessage}</div>`;
    
    // Clear the input
    userInput.value = "";

    // Simulate AI response
    setTimeout(() => {
        const aiResponse = getAIResponse(userMessage);
        messages.innerHTML += `<div class="message ai">AI: ${aiResponse}</div>`;
        
        // Limit the number of messages displayed to the last 10
        const messageElements = messages.getElementsByClassName('message');
        if (messageElements.length > 10) {
            messages.removeChild(messageElements[0]); // Remove the oldest message
        }
        
        messages.scrollTop = messages.scrollHeight; // Scroll to the bottom
    }, 500);
}

// Simple AI response simulation
function getAIResponse(input) {
    const responses = {
        "hello": "Hello! How can I assist you today?",
        "what programs do you offer?": "We offer Elementary, High School, Senior High School, and College programs.",
        "how can I contact you?": "You can contact us via email at studentaffairs@example.com.",
        "help": "Sure! What do you need help with?",
        "thank you": "You're Welcome, feel free to message me anytime if you have more inquiries!"
    };

    // Return a response based on the input or a default message
    return responses[input.toLowerCase()] || "I'm sorry, I didn't understand that.";
}

// Event listeners for the send button and program selection
document.getElementById("sendButton").addEventListener("click", sendMessage);
document.getElementById("programSelect").addEventListener("change", showProgramDetails);