// Get the channel select element
const channelSelect = document.getElementById("channel-selector");

// Get the chat iframe element
const chatFrame = document.getElementById("chat");

// Set the chat iframe source to the value of the first option
chatFrame.src = `https://www.twitch.tv/embed/forsen/chat?parent=www.google.fr`;

// Add an event listener to the channel select element
channelSelect.addEventListener("change", (event) => {
    // Update the chat iframe source when a new channel is selected
    chatFrame.src = `https://www.twitch.tv/embed/${event.target.value}/chat?parent=www.google.fr`;
});
