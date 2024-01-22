let slotData = [
    { timeSlot: "9:00 AM - 11:00 AM", lab: "Lab A", availability: "Full"},
    { timeSlot: "9:00 AM - 11:00 AM", lab: "Lab C", availability: "Available" },
    { timeSlot: "1:00 PM - 3:00 PM", lab: "Lab B", availability: "Full" },
    { timeSlot: "3:30 PM - 5:30 PM", lab: "Lab C", availability: "Available"},
    { timeSlot: "6:00 PM - 8:00 PM", lab: "Lab A", availability: "Available"}
];

function populateTable() {
    const tbody = document.querySelector("#slotTable tbody");

    tbody.innerHTML = "";

    slotData.forEach(slot => {
        const row = tbody.insertRow();
        row.insertCell(0).textContent = slot.timeSlot;
        row.insertCell(1).textContent = slot.lab;
        row.insertCell(2).textContent = slot.availability;
    });

}

populateTable();