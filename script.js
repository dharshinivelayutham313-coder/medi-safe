let medicines = [];

function addMedicine() {

    let name = document.getElementById("medicineName").value;
    let time = document.getElementById("medicineTime").value;

    if (name === "" || time === "") {
        alert("Please enter medicine name and time");
        return;
    }

    let medicine = {
        name: name,
        time: time,
        taken: false
    };

    medicines.push(medicine);

    displayMedicines();

    document.getElementById("medicineName").value = "";
    document.getElementById("medicineTime").value = "";
}


function displayMedicines() {

    let list = document.getElementById("medicineList");

    list.innerHTML = "";

    for (let i = 0; i < medicines.length; i++) {

        let medicine = medicines[i];

        let div = document.createElement("div");

        div.className = "medicine";

        div.innerHTML =
            "<div>" +
            "<b>💊 " + medicine.name + "</b><br>" +
            "⏰ " + medicine.time +
            "</div>" +

            "<button onclick='markTaken(" + i + ")'>" +
            (medicine.taken ? "Taken ✅" : "Mark Taken") +
            "</button>";

        if (medicine.taken) {
            div.classList.add("taken");
        }

        list.appendChild(div);
    }
}


function markTaken(index) {

    medicines[index].taken = true;

    displayMedicines();

    alert("Medicine marked as taken ✅");
}