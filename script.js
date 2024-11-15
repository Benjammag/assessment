const users = [
    {
        id: 1,
        name: "John Doe",
        email: " ",
        age: "28 years old",
        info: " A passionate wildlife enthusiast and photographer, often found and exploring nature.",
        image: "./1.jpg",
    },
    {
        id: 2,
        name: "Jane Smith",
        email: "janesmith@example.com",
        age: " ",
        info: "An avid reader and aspiring novelist, jane loves spending her weekends at local cafes.",
        image: "./download.jpg",
    },
    {
        id: 3,
        name: " ",
        email: "mikebrown@example.com",
        age: "45 years old",
        info: "Tech-savvy and innovative, Sarah is known for her cutting-edge software solutions.",
        image: "",
    },
    {
        id: 4,
        name: "Sarah Johnson",
        email: "sarahjohnson@example.com",
        age: "30 years old",
        info: "A fitness enthusiast, Alex enjoys hiking and participating in marathons around the country",
        image: "./2.jpg",
    },
    {
        id: 5,
        name: "Alex Martinez",
        email: " ",
        age: "27 years old",
        info: " ",
        image: "",
    },
];

// Selecting the users container and the template
const usersContainer = document.querySelector(".users-container");
const userTemplate = document.querySelector("#user-template");

// Function to render users
function renderUsers(users) {
    users.forEach((user) => {
        const userClone = userTemplate.content.cloneNode(true);

        // Generate a unique class name for each user card
        const uniqueClass = `user-card-${user.id || index}`; // Use user.id if available, else use index
        const userCard = userClone.querySelector('.user-container');
        userCard.classList.add(uniqueClass); // Add the unique class to the user card

        // Populate user details
        userClone.querySelector(".user-image").src = user.image;
        userClone.querySelector(".user-age").textContent = `${user.age}`;
        userClone.querySelector(".user-name").textContent = user.name;
        userClone.querySelector(".user-email").textContent = `${user.email}`;
        userClone.querySelector(".user-info").textContent = user.info;


        // Add close button functionality
        const closeButton = userClone.querySelector(".btn-close");
        closeButton.addEventListener("click", (e) => {
            e.target.closest(".user-container").remove();
        });

        // Append the user card to the container
        usersContainer.appendChild(userClone);
    });
}

// Render users on page load
document.addEventListener("DOMContentLoaded", () => {
    renderUsers(users);
});
