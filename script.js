function setReminder() {
    const taskInput = document.getElementById("task").value;
    const timeInput = document.getElementById("time").value;

    if (!taskInput || !timeInput) {
        alert("Please enter a task and select a reminder time.");
        return;
    }
    const reminderTime = new Date(timeInput).getTime();
    const currentTime = new Date().getTime();
    const timeDifference = reminderTime - currentTime;

    if (timeDifference <= 0) {
        alert("Please select a future time for the reminder.");
        return;
    }

    const reminderList = document.getElementById("reminderList");
    const reminderElement = document.createElement("div");
    reminderElement.innerText = `Reminder set for "${taskInput}" at ${new Date(timeInput).toLocaleString()}`;
    reminderList.appendChild(reminderElement);

    setTimeout(() => {
        alert(`Reminder: ${taskInput}`);
        reminderList.removeChild(reminderElement);
    }, timeDifference);
    document.getElementById("task").value = "";
    document.getElementById("time").value = "";
}
