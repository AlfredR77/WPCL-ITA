import React, { useState } from "react";

const attivitaBase = [
  // 9-12 MESI PRIMA
  {
    giorni: 365,
    attivita: "Iniziare a raccogliere idee. Sfogliare riviste di nozze, blog e social media per definire la visione del matrimonio"
  },
  { giorni: 360, attivita: "Stabilire il budget del matrimonio" },
  { giorni: 355, attivita: "Decidere la data del matrimonio" },
  { giorni: 350, attivita: "Prenotare le location per la cerimonia e il ricevimento" },
  { giorni: 345, attivita: "Valutare se assumere un wedding planner" },
  { giorni: 340, attivita: "Compilare la lista degli invitati e raccogliere gli indirizzi" },
  { giorni: 335, attivita: "Scegliere il corteo nuziale" },
  { giorni: 330, attivita: "Iniziare a cercare l'abito da sposa/lo smoking e gli accessori" },
  { giorni: 325, attivita: "Selezionare e prenotare il catering" },
  { giorni: 320, attivita: "Ingaggiare il fotografo e il videografo" },
  { giorni: 315, attivita: "Scegliere e prenotare il fiorista" },
  { giorni: 310, attivita: "Contattare il pasticcere per la torta nuziale" },
  { giorni: 305, attivita: "Organizzare le foto di fidanzamento" },
  { giorni: 300, attivita: "Riservare camere d'albergo per gli ospiti fuori città" },

  // 6-8 MESI PRIMA
  { giorni: 240, attivita: "Ordinare e inviare i 'save the date'" },
  { giorni: 235, attivita: "Richiedere campioni di partecipazioni" },
  { giorni: 230, attivita: "Prenotare l'officiante per la cerimonia" },
  { giorni: 225, attivita: "Organizzare la musica per la cerimonia e il ricevimento" },
  { giorni: 220, attivita: "Prenotare truccatore e parrucchiere" },
  { giorni: 215, attivita: "Contattare aziende per l'illuminazione" },
  { giorni: 210, attivita: "Prenotare l'attrezzatura necessaria (tavoli, sedie, tende, ecc.)" },
  { giorni: 205, attivita: "Scegliere l'abbigliamento per il corteo nuziale" },
  { giorni: 200, attivita: "Creare la lista nozze" },
  { giorni: 195, attivita: "Pianificare la luna di miele" },

  // 3-5 MESI PRIMA
  { giorni: 150, attivita: "Ordinare le partecipazioni di nozze" },
  { giorni: 145, attivita: "Procurarsi i biglietti di ringraziamento" },
  { giorni: 140, attivita: "Fornire la lista degli invitati per l'addio al nubilato/celibato" },
  { giorni: 135, attivita: "Prenotare il ristorante per la cena prematrimoniale" },
  { giorni: 130, attivita: "Organizzare i trasporti per il giorno del matrimonio" },
  { giorni: 125, attivita: "Prenotare la suite nuziale" },
  { giorni: 120, attivita: "Effettuare la degustazione e finalizzare il menu del ricevimento" },
  { giorni: 115, attivita: "Scegliere e ordinare la torta nuziale" },
  { giorni: 110, attivita: "Selezionare la musica per la cerimonia e il ricevimento" },
  { giorni: 105, attivita: "Acquistare le fedi nuziali" },

  // 2 MESI PRIMA
  { giorni: 60, attivita: "Spedire gli inviti al matrimonio" },
  { giorni: 56, attivita: "Programmare le prove della cerimonia e la cena prematrimoniale" },
  { giorni: 54, attivita: "Inviare gli inviti per la cena prematrimoniale" },
  { giorni: 52, attivita: "Discutere i dettagli della cerimonia con l'officiante" },
  { giorni: 50, attivita: "Ordinare i libretti della cerimonia, i menu e la cartellonistica" },
  { giorni: 46, attivita: "Provare trucco e acconciatura" },
  { giorni: 44, attivita: "Scegliere i regali per il corteo nuziale e i genitori" },
  { giorni: 42, attivita: "Ordinare le bomboniere" },
  { giorni: 40, attivita: "Verificare che tutti i membri del corteo nuziale abbiano l'abbigliamento pronto" },

  // 1 MESE PRIMA
  { giorni: 30, attivita: "Saldare i pagamenti finali ai fornitori" },
  { giorni: 28, attivita: "Ordinare i numeri dei tavoli e i segnaposto" },
  { giorni: 26, attivita: "Ordinare le etichette per le bomboniere" },
  { giorni: 24, attivita: "Ottenere la licenza di matrimonio" },
  { giorni: 22, attivita: "Creare il programma del giorno del matrimonio e condividerlo con il corteo nuziale e i fornitori" },
  { giorni: 20, attivita: "Preparare il piano dei tavoli per il ricevimento" },
  { giorni: 18, attivita: "Indossare le scarpe da cerimonia per abituarsi" },

  // 2 SETTIMANE PRIMA
  { giorni: 14, attivita: "Effettuare l'ultima prova dell'abito con tutti gli accessori" },
  { giorni: 13, attivita: "Contattare gli invitati che non hanno ancora risposto" },
  { giorni: 12, attivita: "Fornire il conteggio finale degli ospiti al catering" },
  { giorni: 11, attivita: "Preparare i discorsi per la cena prematrimoniale e il ricevimento" },
  { giorni: 10, attivita: "Assemblare i kit di benvenuto per gli ospiti fuori città, se previsti" },

  // 1 SETTIMANA PRIMA
  { giorni: 7, attivita: "Finalizzare la disposizione dei posti a sedere" },
  { giorni: 6, attivita: "Confermare il numero finale di pasti al catering, inclusi quelli per i fornitori" },
  { giorni: 5, attivita: "Assegnare compiti specifici ai membri del corteo nuziale" },
  { giorni: 4, attivita: "Riconfermare gli orari con i fornitori e il servizio di trasporto" },
  { giorni: 3, attivita: "Fare le prove dei discorsi" },
  { giorni: 2, attivita: "Preparare i bagagli per la luna di miele" },

  // 1 GIORNO PRIMA
  { giorni: 1, attivita: "Dedicarsi alla cura personale (manicure, pedicure, ecc.)" },
  { giorni: 1, attivita: "Preparare tutto il necessario per il giorno del matrimonio" },
  { giorni: 1, attivita: "Preparare le buste con i pagamenti finali e le mance per i fornitori" },
  { giorni: 1, attivita: "Svolgere le prove della cerimonia" },
  { giorni: 1, attivita: "Partecipare alla cena prematrimoniale e consegnare i regali al corteo nuziale e ai genitori" },

  // GIORNO DEL MATRIMONIO
  { giorni: 0, attivita: "Rilassarsi, godersi ogni momento e creare ricordi indimenticabili!" }
];

function WeddingPlannerApp() {
  const [dataMatrimonio, setDataMatrimonio] = useState("");
  const [accessori, setAccessori] = useState([]);
  const [nuovoNomeAccessorio, setNuovoNomeAccessorio] = useState("");
  const [nuovoTempoAccessorio, setNuovoTempoAccessorio] = useState("");

  const handleCambioData = (e) => {
    setDataMatrimonio(e.target.value);
  };

  const handleAggiungiAccessorio = () => {
    if (nuovoNomeAccessorio && nuovoTempoAccessorio) {
      setAccessori([
        ...accessori,
        { nome: nuovoNomeAccessorio, tempoLavorazione: nuovoTempoAccessorio }
      ]);
      setNuovoNomeAccessorio("");
      setNuovoTempoAccessorio("");
    }
  };

  const handleRimuoviAccessorio = (index) => {
    setAccessori(accessori.filter((_, i) => i !== index));
  };

  const calcolaRoadmap = () => {
    if (!dataMatrimonio) return [];

    const matrimonio = new Date(dataMatrimonio);
    const oggi = new Date();
    const giorniAlMatrimonio = Math.ceil(
      (matrimonio - oggi) / (1000 * 60 * 60 * 24)
    );

    let attivita = [...attivitaBase];

    accessori.forEach((accessorio) => {
      attivita.push({
        giorni: parseInt(accessorio.tempoLavorazione) + 14,
        attivita: `Ordina l'accessorio ${accessorio.nome} da JONIDA RIPANI `
      });
    });

    return attivita
      .filter((attivita) => attivita.giorni <= giorniAlMatrimonio)
      .sort((a, b) => b.giorni - a.giorni)
      .map((attivita) => {
        const scadenza = new Date(matrimonio);
        scadenza.setDate(scadenza.getDate() - attivita.giorni);
        return { ...attivita, scadenza: scadenza.toLocaleDateString() };
      });
  };

  const roadmap = calcolaRoadmap();

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        maxWidth: "600px",
        margin: "0 auto",
        padding: "20px"
      }}
    >
      <div style={{ marginBottom: "20px" }}>
        <h2>Aggiungi Accessori</h2>
        <input
          type="text"
          value={nuovoNomeAccessorio}
          onChange={(e) => setNuovoNomeAccessorio(e.target.value)}
          placeholder="Nome accessorio"
          style={{ marginRight: "10px" }}
        />
        <input
          type="number"
          value={nuovoTempoAccessorio}
          onChange={(e) => setNuovoTempoAccessorio(e.target.value)}
          placeholder="Tempo di lavorazione (giorni)"
          style={{ marginRight: "10px" }}
        />
        <button onClick={handleAggiungiAccessorio}>Aggiungi</button>
      </div>

      <div>
        {accessori.map((accessorio, index) => (
          <div key={index} style={{ marginBottom: "5px" }}>
            {accessorio.nome} (Tempo di lavorazione: {accessorio.tempoLavorazione} giorni)
            <button
              onClick={() => handleRimuoviAccessorio(index)}
              style={{ marginLeft: "10px" }}
            >
              Rimuovi
            </button>
          </div>
        ))}
      </div>

      <div style={{ marginTop: "20px" }}>
        <h2>Seleziona la Data del Matrimonio</h2>
        <input type="date" value={dataMatrimonio} onChange={handleCambioData} />
      </div>

      {roadmap.length > 0 && (
        <div style={{ marginTop: "20px" }}>
          <h2>Roadmap della Pianificazione del Matrimonio</h2>
          <ul>
            {roadmap.map((item, index) => (
              <li key={index}>
                {item.attivita} (entro il {item.scadenza})
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default WeddingPlannerApp;
