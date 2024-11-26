function tanulokAdatai() {
    const adatSzam = parseInt(document.getElementById("adatSzam").value);
    if (isNaN(adatSzam) || adatSzam <= 0) {
        alert("Kérlek, adj meg egy érvényes számot!");
        return;
    }

    const tanulok = [];
    for (let i = 0; i < adatSzam; i++) {
        const nev = prompt("Név:");
        const email = prompt("E-mail:");
        if (!nev || !email) {
            alert("Mindkét adatot meg kell adni!");
            i--; 
            continue;
        }
        tanulok.push({ nev, email });
    }

    let eredmeny = "<h3>A tanulók adatai:</h3>";
    tanulok.forEach(tanulo => {
        eredmeny += `Név: ${tanulo.nev} - E-mail: ${tanulo.email}<br>`;
    });

    document.getElementById("eredmeny").innerHTML = eredmeny;
}

const hetiOrarend = [
    { nap: "Hétfő", tantargyak: ["Matematika", "Fizika", "Irodalom"] },
    { nap: "Kedd", tantargyak: ["Történelem", "Angol", "Biológia"] },
    { nap: "Szerda", tantargyak: ["Kémia", "Földrajz", "Testnevelés"] },
    { nap: "Csütörtök", tantargyak: ["Informatika", "Rajz", "Osztályfőnöki óra"] },
    { nap: "Péntek", tantargyak: ["Matematika", "Történelem", "Angol"] }
];

function irasOrarend() {
    let eredmeny = "<h3>Heti órarend:</h3>";
    hetiOrarend.forEach(nap => {
        eredmeny += `<strong>${nap.nap}:</strong> `;
        eredmeny += nap.tantargyak.join(", ");
        eredmeny += "<br>";
    });

    document.getElementById("orarend").innerHTML = eredmeny;
}