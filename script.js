async function main() {
    let addevent = () => {
        document.querySelectorAll('.list, .task').forEach(task => {
            task.addEventListener("click", e => {
                const listIcon = task.closest('.ulbody').querySelector('.list');
                const taskItem = task.closest('.ulbody').querySelector('.task');

                listIcon.src = listIcon.src.includes("list.svg") ? "mark.svg" : "list.svg";
                if (taskItem.style.textDecoration === "line-through") {
                    taskItem.style.textDecoration = "none";
                } else {
                    taskItem.style.textDecoration = "line-through";
                }
            });
        });

        document.querySelectorAll('.cross').forEach(cross => {
            cross.addEventListener("click", e => {
                let ulElement = cross.closest(".ulbody");
                ulElement.remove();
            });
        });
        document.querySelector(".input input").focus()
    }

    document.querySelector(".btn").addEventListener("click", e => {
        let task = document.querySelector(".main")
        if (document.querySelector(".input input").value == []) { }
        else {
            task.innerHTML += `<ul class="ulbody">
                <img src="list.svg" alt="" class="list">
                <li class="task">${document.querySelector(".input input").value}</li>
                <img src="cross.svg" alt="" class="cross">
                </ul>`
        }
        document.querySelector(".input input").value = []
        document.querySelector(".input input").focus()
        addevent()
    })
    addevent()
}

main()