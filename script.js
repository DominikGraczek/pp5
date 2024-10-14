function handleSubmit(event) {
    event.preventDefault(); // Zatrzymuje domyślne działanie formularza (odświeżanie strony)

    // Pobieranie wartości z pól formularza

    // Tworzenie obiektu z danymi formularza
    const formData = {
        firma: document.getElementById('firma').value,
        nip: document.getElementById('nip').value,
        miasto: document.getElementById('miasto').value,
        ulica: document.getElementById('ulica').value,
        nrdomu: document.getElementById('nrdomu').value,
        nrmieszkania: document.getElementById('nrmieszkania').value,
        kodpocztowy: document.getElementById('kodpocztowy').value,
        uwagi: document.getElementById('uwagi').value,
        branza: document.getElementById('branza').value,
        aktywny:document.getElementById('aktywny').checked,
    };

    // Wyświetlanie obiektu w konsoli
    console.log(formData);
};
function fillAndLockForm() {
    // Automatyczne wypełnianie pól formularza
    document.getElementById('firma').value = "Firma1";
    document.getElementById('nip').value = "123";
    document.getElementById('miasto').value = "miasto1";
    document.getElementById('ulica').value = "ulica2";
    document.getElementById('nrdomu').value = "15";
    document.getElementById('kodpocztowy').value = "12-345";
    document.getElementById('uwagi').value = "brak";
    document.getElementById('branza').value = "1";
    document.getElementById('aktywny').checked = true;

    // Zablokowanie edytowalności pól
    document.getElementById('firma').setAttribute('readonly', true);
    document.getElementById('miasto').setAttribute('readonly', true);
    document.getElementById('ulica').setAttribute('readonly', true);
    document.getElementById('nrdomu').setAttribute('readonly', true);
    document.getElementById('nrmieszkania').setAttribute('readonly', true);
    document.getElementById('kodpocztowy').setAttribute('readonly', true);
    document.getElementById('uwagi').setAttribute('readonly', true);
    document.getElementById('nip').setAttribute('readonly', true);
    document.getElementById('branza').setAttribute('disabled', true); // Blokada select
    document.getElementById('aktywny').setAttribute('disabled', true); // Blokada checkboxa
}