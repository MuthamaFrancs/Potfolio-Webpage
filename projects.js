document.addEventListener("DOMContentLoaded", function () {
    const projectsContainer = document.getElementById("projects-container");

    // GitHub username
    const username = "your_username";
    // GitHub API endpoint for user's repositories
    const apiUrl = `https://api.github.com/users/${username}/repos`;

    // Fetch repositories from GitHub API
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Display each repository
            data.forEach(repo => {
                const projectDiv = document.createElement("div");
                projectDiv.classList.add("project");

                const title = document.createElement("h2");
                title.textContent = repo.name;

                const description = document.createElement("p");
                description.textContent = repo.description || "No description provided.";

                const link = document.createElement("p");
                link.innerHTML = `<strong>GitHub Link:</strong> <a href="${repo.html_url}" target="_blank">${repo.html_url}</a>`;

                projectDiv.appendChild(title);
                projectDiv.appendChild(description);
                projectDiv.appendChild(link);

                projectsContainer.appendChild(projectDiv);
            });
        })
        .catch(error => {
            console.error("Error fetching GitHub repositories:", error);
            projectsContainer.innerHTML = "<p class='error'>Error fetching GitHub repositories.</p>";
        });
});
