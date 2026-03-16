export default function handler(req, res) {
    // Generiert eine Zufallszahl zwischen 1 und 100
    const count = Math.floor(Math.random() * 100) + 1;
    const user = req.query.user || 'Der User';
    
    let message = "";

    // Logik für die Sprüche basierend auf deinen Vorgaben
    if (count <= 10) {
        const jokes = [
            "Bist wohl nicht so gefragt.",
            "Da warst du wohl die letzte Wahl.",
            "Vielleicht mal duschen gehen?",
            "Dachte echt, da geht mehr. Liegt bestimmt am Gesicht."
        ];
        message = jokes[Math.floor(Math.random() * jokes.length)];
    } 
    else if (count <= 30) {
        const jokes = [
            "Ganz schön aktiv unterwegs.",
            "Einer hat Tinder Premium wohl durchgespielt.",
            "Ordentliche Leistung für das Dorf.",
            "Einer hat 'All you can eat' zu ernst genommen."
        ];
        message = jokes[Math.floor(Math.random() * jokes.length)];
    } 
    else if (count <= 50) {
        const jokes = [
            "Einer sammelt wohl Treuepunkte.",
            "Nickname: Schwarzes Loch oder so?",
            "Einer ist über den Ex wohl nicht hinweggekommen.",
            "Da scheinen wohl Daddy oder Mommy Issues vorzuliegen."
        ];
        message = jokes[Math.floor(Math.random() * jokes.length)];
    } 
    else if (count <= 70) {
        const jokes = [
            "Das Schlafzimmer ist wohl zum Hotel geworden.",
            "Eigener Betrieb zuhause oder was?",
            "Beworben auf die Stelle 'Dorfmatratze des Jahres'.",
            "Mach gleich einen Kanal auf und sei Papas ganzer Stolz."
        ];
        message = jokes[Math.floor(Math.random() * jokes.length)];
    } 
    else {
        const jokes = [
            "Wohl eher der Bodycount von nur einer Woche.",
            "Wie ein gebrauchter Wagen mit 400k km und Unfallschaden.",
            "Vielleicht solltest du ein eigenes Unternehmen gründen.",
            "Wie willst du das später mal deinen Kindern erzählen?"
        ];
        message = jokes[Math.floor(Math.random() * jokes.length)];
    }

    // Die finale Antwort für den Chat
    res.status(200).send(`${user} hat einen Bodycount von ${count}. ${message}`);
}
