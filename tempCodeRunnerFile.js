async function main() {
    const addEventListeners = () => {
        document.querySelectorAll('.list, .task').forEach(task => {
            task.removeEventListener("click", toggleTask); // Remove existing listeners to avoid duplication
            task.addEventListener("click", toggleTask);
        });

        document.querySelectorAll('.cross').forEach(cross => {
            cross.removeEventListener("click", removeTask); // Remove existing listeners to avoid duplication
            cross.addEventListener("click", removeTask);
        });
    };

    const toggleTask = (e) => {
        const task = e.currentTarget;
        const listIcon = task.closest('.ulbody').querySelector('.list');
        listIcon.src = listIcon.src.includes("list.svg") ? "mark.svg" : "list.svg";
    };

    const removeTask = (e) => {
        const cross = e.currentTarget;
        let ulElement = cross.closest(".ulbody");
        ulElement.remove();
    };

    document.querySelector(".btn").addEventListener("click", e => {
        let task = document.querySelector(".main");
        task.innerHTML += `<ul class="ulbody">
                <img src="list.svg" alt="" class="list">
                <li class="task">${document.querySelector(".input input").value}</li>
                <img src="cross.svg" alt="" class="cross">
        </ul>`;
        document.querySelector(".input input").value = "";

        // Re-attach event listeners after adding a new task
        addEventListeners();
    });

    // Initial attachment of event listeners
    addEventListeners();
}

main();
