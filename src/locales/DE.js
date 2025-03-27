export default {
  All: 'All',
  Rented: 'Rented',
  Idle: 'Idle',
  meau: {
    back: 'Zurück zur offiziellen Website',
    nav1: 'Orion-Wettbewerb',
    nav2: 'Langzeitmietmodus',
    nav3: 'Kurzzeitmietmodus',
    nav4: 'Geräteliste',
  },
  footer: {
    link: 'Mehr erfahren',
    community: 'Folge der Gemeinschaft',
    tip: 'Hinweis: Die Community umfasst Twitter, Telegram, Reddit, Medium, Discord, TikTok, YouTube',
  },

  home: {
    title1: 'Orion',
    title2: 'GPU-Rechenleistung Wettbewerb',
    text: 'Der Orion GPU-Rechenwettbewerb des DeepLink-Protokolls ist ein bedeutender Anreizwettbewerb, der darauf abzielt, Miner zur aktiven Teilnahme an der DeepLink-Netzwerk-Testphase zu motivieren. Dieser Wettbewerb stellt einen wichtigen Vorbereitungsschritt vor dem offiziellen Start von DeepLink, der weltweit größten Cloud-Gaming-Protokollplattform, dar und bietet eine solide technische Grundlage und effiziente Rechenleistung für zukünftige Nutzer weltweit.',
    text1: 'Die aktuelle Gesamtzahl der GPUs im DeepLink-Netzwerk beträgt {gpu_num}',
    text2:
      'Der Wettbewerb hat begonnen, und die Belohnungen starten, sobald die Anzahl der GPUs den Standard erreicht!',
    btn_text1: 'Wettbewerb im Langzeitmietmodus - Hat begonnen',
    btn_title1: 'Aktuell {long_term} GPU',
    btn_text2: 'Wettbewerb im Kurzzeitmietmodus - Hat begonnen',
    btn_title2: 'Aktuell {short_term} GPU',
    cont2_text1:
      'Die Gesamtanzahl der Token-Belohnungen für den Orion-Rechenwettbewerb beträgt 3 Milliarden, davon 2 Milliarden DLC für den Langzeitmietmodus und 1 Milliarde DLC für den Kurzzeitmietmodus. Der Wettbewerb dauert 180 Tage und ist in drei Runden unterteilt, die jeweils 60 Tage dauern und Pausen von 5 bis 10 Tagen haben.',
    cont2_btn1: 'Langzeitmietmodus',
    cont2_btn2: 'Kurzzeitmietmodus',
    cont3: {
      text1: 'Gesamtwert der \n Rechenleistung',
      text2: 'Gesamtanzahl \n der GPUs',
      text3: 'Gesamtzahl der \n Berechnungspools',
      text4: 'GPU-Mietrate',
      text5: 'Anzahl der \n DLC-Mieten',
      text6: 'Anzahl der \n zerstörten DLC',
      text7: 'Anzahl der für \n Miner verpfändeten DLC',
    },
    cont4: {
      li1: 'Wettbewerbsrang',
      li2: 'Name des Miners',
      li3: 'Rechenleistung',
      li4: 'Anzahl der GPUs',
      li5: 'Mietrate',
      li6: 'Anzahl der Mieten',
      li7: 'Freigeschaltete Belohnungen',
      li8: 'Gesamtbelohnungen',
    },
  },
  long_rule: {
    title: 'Wettbewerbsregeln für den Langzeitmietmodus',
    text1: 'Die aktuelle Gesamtzahl der GPUs im Langzeitmietmodus im DeepLink-Netzwerk beträgt {long_num}',
    text2:
      'Während des Wettbewerbs können Miner eine Gesamtbelohnung von 2 Milliarden DLC erhalten, und 100 % der von den Nutzern gezahlten DLC-Mietgebühren werden verbrannt',
    cont2: {
      title: '1. Teilnahmebedingungen',
      text1_1:
        'Miner, die am Orion-Wettbewerb für Rechenleistung teilnehmen, müssen ein Node-NFT besitzen (jedes Node enthält ein Airdrop von 30.000 DLC im Wert von 90 USD, mehr über das Node erfahren: ',
      text1_2:
        '). Während des Wettbewerbs kann eine einzelne GPU-Maschine mehrere Nodes besitzen, und die Anzahl der Belohnungstoken wird mit der Anzahl der Nodes multipliziert. Die maximale Anzahl an Node-NFTs pro Maschine beträgt 20.',
      text2_1:
        'Mindestanforderungen für GPU-Serverparameter: \n Der Rechenleistungsserver muss die Mindestanforderungen erfüllen, \n um die Überprüfung durch den Prüfer zu bestehen und online zu gehen, andernfalls kann er keine Einnahmen erzielen.',
      text3_1: 'GPU',
      text3_2: 'Muss eine Nvidia-Grafikkarte sein; Modelle der 20-, 30-, 40- oder 50-Serie',
      text4_1: 'Speicher',
      text4_2: 'Mindestanforderung ist 16G pro Karte, 32G empfohlen',
      text5_1: 'CPU',
      text5_2:
        'Muss den Anforderungen des Cloud-Gamings entsprechen: Intel/AMD, Hauptfrequenz 3,0 GHz oder Turbofrequenz über 3,5 GHz; jede GPU benötigt eine separate CPU und muss in der Lage sein, Black Myth: Wukong reibungslos auszuführen, z.B. Intel 10. Generation oder höher, AMD 5600 oder höher',
      text6_1: 'Festplatte',
      text6_2:
        'Das Systemlaufwerk sollte über 100G SSD sein, das Datenlaufwerk über 3T SSD, oder ein systemloses System verwenden',
      text7_1: 'Standort',
      text7_2:
        'Es wird empfohlen, die Maschine in einem IDC-Rechenzentrum zu platzieren, um Strafen aufgrund von instabilen Netzwerken und Strom zu vermeiden',
      text8_1: 'Netzwerkbandbreite',
      text8_2: 'Es wird empfohlen, dass jede GPU-Maschine mindestens 10M Upstream-Bandbreite hat',
    },
    cont3: {
      title: '2. Regeln zur Berechnung der Rechenleistung',
      text: 'Die Mietgebühren für Benutzerterminals im gesamten Ökosystem basieren einheitlich auf der Preisgestaltung des Rechenleistungssystems. Die Einnahmen aus DLC-Mieten betragen 0,6 USD/C/Monat. Das Berechnungsmodell lautet wie folgt: Rechenleistung der gesamten Maschine = (25 * Anzahl der Karten + Speicher/3,5 + (√(Anzahl der CUDA-Kerne) * √(Speicher/10)) * Anzahl der GPUs), wenn der lokale Gebietsfaktor 1 beträgt, ist der Rechenwert wie folgt:',
      li1: 'GPU-Typ',
      li2: 'CUDA-Kerne',
      li3: 'Speicher',
      li4: 'Anzahl der GPUs',
      li5: 'Speicher (G)',
      li6: 'Rechenleistung der gesamten Maschine (C)',
      li7: 'Miete der gesamten Maschine (USD)',
      li8: 'Mietrate pro Karte und Monat (USD)',
    },
    cont4: {
      title: '3. Regionale Koeffizienten',
      li1: 'Region',
      li2: 'Koeffizient',
      li_text1: 'Festlandchina',
      li_text2: 'Nordamerika',
      li_text3: 'Südamerika',
      li_text4: 'Europa',
      li_text5: 'Naher Osten',
      li_text6: 'Südkorea',
      li_text7: 'Japan',
      li_text8: 'Taiwan, China',
      li_text9: 'Hongkong und Macau, China',
      li_text10: 'Malaysia',
      li_text11: 'Indonesien',
      li_text12: 'Singapur',
      li_text13: 'Vietnam',
      text1:
        'Formel zur Berechnung der Rechenleistung der Maschine: (25 * Anzahl der Karten + Speicher/3,5 + (√(Anzahl der CUDA-Kerne) * √(Speicher/10)) * Anzahl der GPUs) * regionaler Koeffizient * großer Modellkoeffizient',
      text2: 'Maschinenmodell:',
      text3: 'Anzahl der GPUs:',
      text4: 'Speichergröße:',
      text5: 'Region:',
      text6: 'Bitte auswählen',
      text7: 'Der aktuelle Rechenwert der Maschine beträgt: {total}',
    },
    cont5: {
      title:
        '4. Belohnungsmechanismus (Basierend auf dem EVM-kompatiblen DLC auf der DBC AI Public Chain, Browser-Adresse: https://test.dbcscan.io/)',
      text1:
        'Die Gesamtsumme der Token-Belohnungen für die GPU-Maschinen im IDC-Langzeitmietmodus beim Orion-Wettbewerb für Rechenleistung beträgt 2 Milliarden und dauert 180 Tage. Der Wettbewerb ist in 3 Runden unterteilt, mit einem Intervall von 5-10 Tagen zwischen jeder Runde.',
      text2: 'Wettbewerb 1: Der Wettbewerb beginnt offiziell, wenn die Anzahl der GPUs jedes Typs {n_gpu1} erreicht.',
      text3:
        '60 Tage, 6 Millionen Token pro Tag, 10 % sofort erhalten, 90 % über 180 Tage freigeschaltet, mit einer täglichen Freischaltung von 0,5 %.',
      text4: 'Wettbewerb 2: Der Wettbewerb beginnt offiziell, wenn die Anzahl der GPUs jedes Typs {n_gpu2} erreicht.',
      text5:
        '60 Tage, 8 Millionen Token pro Tag, 10 % sofort erhalten, 90 % über 180 Tage freigeschaltet, mit einer täglichen Freischaltung von 0,5 %.',
      text6: 'Wettbewerb 3: Der Wettbewerb beginnt offiziell, wenn die Anzahl der GPUs jedes Typs {n_gpu3} erreicht.',
      text7:
        '60 Tage, 19,33 Millionen Token pro Tag, 10 % sofort erhalten, 90 % über 180 Tage freigeschaltet, mit einer täglichen Freischaltung von 0,5 %.',
      text8: 'Nach dem Listing an der Börse können Test-Token im Verhältnis 1:1 gegen Mainnet-Token getauscht werden.',
      text9: 'DeepLink verwendet einen nicht-linearen Belohnungsalgorithmus.',

      text10:
        'Die Gesamtzahl der täglich ausgeschütteten Tokens in diesem System ist festgelegt. Die Belohnung, die eine Maschine erhält, hängt von der Rechenleistung X der Maschine, der effektiven Mining-Zeit Y und der Anzahl der gestakten Tokens ab. Je mehr Tokens gestakt werden, desto höher die Belohnung, allerdings ohne lineare Wachstumsbeziehung. Die Belohnungsbasis für 0–10.000 Tokens ist gleich, aber bei über 10.000 Tokens wird die Belohnung gemäß einer Funktion berechnet. Befindet sich die Maschine im Vermietungszustand, erhöht sich die Rechenleistung um 30 %.',
      text11: 'Belohnungsberechnungsformel:',
      text12: 'R: Die tägliche Gesamtmenge der Belohnungstoken (fester Wert)',
      text13: 'Die Anzahl der gestakten Token der Maschine i',
      text14: 'Die Rechenleistung der Maschine i',
      text15: 'Die effektive Mining-Zeit der Maschine i',
      text16: '',
      title1: 'Gestakte Menge:',
      text1_1: '1) Sie können die Anzahl der gestakten Tokens beliebig wählen oder auch keine Tokens staken.',
      text1_2:
        '2) Die Belohnungsmenge für 0-10.000 Tokens ist gleich; ab mehr als 10.000 Tokens wächst sie nicht linear.',
      text1_3:
        '3) Wenn weniger als 10.000 Tokens gestakt werden, wird jede Belohnung zuerst in das Staking investiert, bis 10.000 erreicht sind.',
      text1_4:
        '4) Der Bonus für 100.000 Tokens ist 1,23026 mal so hoch wie für 10.000 gestakte Tokens, was eine Steigerung von etwa 23,03 % bedeutet. Der Bonus für 1.000.000 Tokens ist 1,46052 mal so hoch, was eine Steigerung von etwa 46,05 % bedeutet. Der Bonus für 10.000.000 Tokens ist 1,69078 mal so hoch, was eine Steigerung von etwa 69,08 % bedeutet, und der Bonus für 100.000.000 Tokens ist 1,92103 mal so hoch, was eine Steigerung von etwa 92,10 % bedeutet.',
      title2: 'Belohnungsausschüttung:',
      text2_1:
        'Jede 24 Stunden kann eine Auszahlung erfolgen. Bei jeder Auszahlung kann 10 % der neu generierten Belohnung sofort ausgezahlt werden, und 90 % wird für 180 Tage gesperrt. Der gesperrte Betrag kann bei jeder Auszahlung 0,5 % entnommen werden. Nach 180 Tagen kann der gesperrte Betrag vollständig ausgezahlt werden.',

      block_title1: 'Besondere Aufmerksamkeit:',
      block_text1_1:
        'Der Langzeitmietmodus erfordert, dass die GPU-Maschine zuerst zum DBC-Netzwerk hinzugefügt wird. Referenzdokument:',
      block_text1_2:
        '. Danach müssen die Miner die Maschine selbst mieten, bevor sie dem DLC-Netzwerk beitreten kann, um sowohl DBC- als auch DLC-Einnahmen zu erzielen. Die DBC-Einnahmen nach dem Beitritt zum DBC-Netzwerk = DBC-Belohnungen - 30 % Mietgebühr.',
      block_title2: 'Formel zur Berechnung der täglichen DBC-Einnahmen der Maschine:',
      block_text2:
        'Gesamtleistung der Maschine / Gesamtleistung des Netzwerks * 547.945 * DBC-Preis * Regionalkoeffizient * 1,3 (die Rechenleistung erhöht sich um 30 %, wenn sie vermietet wird) - Gesamtleistung der Maschine * Regionalkoeffizient * 0,01693 * 30 % (die täglichen Einnahmen pro Leistungseinheit betragen 0,01693 USD).',
      text3_13:
        'Die aktuellen täglichen Einnahmen betragen: {usdt1} USD, entsprechend DBC = On-Chain-Belohnungen: {dbc} DBC (entspricht {usdt2} USD beim aktuellen DBC-Preis von {dbc_price} USD) - 30 % Mietgebühr: {usdt3} USD entsprechend DBC.',
      title4:
        'Formel zur Berechnung der täglichen DLC-Einnahmen der Maschine: DLC wird mit 0,003 USD pro Einheit berechnet.',
      text4_1: 'GPU-Modell:',
      text4_2: 'Speichergröße:',
      text4_3: 'Anzahl der Node-NFTs:',
      text4_4: 'Region:',
      text4_5: 'Anzahl der gestakten DLC:',
      text4_6: 'Wettbewerbsphase:',
      text4_6_1: 'Phase 1: 6 Millionen DLC pro Tag.',
      text4_6_2: 'Phase 2: 8 Millionen DLC pro Tag.',
      text4_6_3: 'Phase 3: 19,33 Millionen DLC pro Tag.',
      text4_7: 'Gesamtzahl der teilnehmenden GPUs:',
      text4_8:
        '(Die Gesamtzahl der GPUs wird einheitlich auf der Grundlage des 4060-Modells, 32 GB, mit durchschnittlich 10 NFTs und einem durchschnittlichen Einsatz von 100.000 Tokens berechnet)',
      title5:
        'On-Chain-Belohnungen: {dlc_num} DLC (entspricht {usdt_num} USD beim aktuellen DLC-Preis von {price} USD).',
      req_title1:
        '5. Melde- und Überprüfungsmechanismus (Basierend auf EVM-kompatiblen DLC in der DBC AI Public Chain)',
      req_text1:
        'Nutzer, die DLC-Maschinen mieten, können jederzeit eine Meldung einreichen. Für die Einleitung einer Meldung ist eine Einzahlung von 10.000 DLC erforderlich. Bei der Meldung werden die Informationen in den Validierungsprozess des DBC-Verifiers aufgenommen.',
      req_title2: '6. Strafmechanismus (Basierend auf EVM-kompatiblen DLC in der DBC AI Public Chain)',
      req_text2:
        'Nach der Überprüfung der DLC-Meldung werden bei Problemen mit der Validierung gemäß den Regeln DBC-Staketokens abgezogen. Maximal werden 10.000 DLC-Token abgezogen. Diese Staketokens werden dem meldenden Benutzer gutgeschrieben.',
      req_title3:
        '7. Zahlungs- und Verbrennungsmechanismus (Basierend auf EVM-kompatiblen DLC in der DBC AI Public Chain)',
      req_text3:
        'Nutzer zahlen DLC (die GPU-Preise im DLC-Netzwerk sind um 20 % höher als im DBC-Netzwerk), um die Mietrechte an der Maschine zu erhalten. Das von den Nutzern gezahlte DLC wird zu 100 % im Smart Contract verbrannt, wobei jede Zahlung und Verbrennung nachverfolgt werden kann.',
    },
  },
  short_rule: {
    title: 'Wettbewerbsregeln im Kurzzeitmietmodus',
    text1: 'Die aktuelle Anzahl der GPUs im Kurzzeitmietmodus im DeepLink-Netzwerk beträgt {short_num}.',
    text2:
      'Während des Wettbewerbs können Miner eine Gesamtbelohnung von 1 Milliarde DLC erhalten, und die von den Nutzern gezahlten DLC-Mietgebühren werden zu 100 % verbrannt.',
    cont2: {
      title: '1. Teilnahmebedingungen',
      text1_1:
        'Miner, die am Orion-Wettbewerb für Rechenleistung teilnehmen, müssen ein Node-NFT besitzen (jedes Node enthält einen Airdrop von 30.000 DLC im Wert von 90 USD. Weitere Informationen zu Nodes:',
      text1_2:
        '). Während des Wettbewerbs kann eine einzelne GPU-Maschine mehrere Nodes halten, und die Anzahl der Belohnungs-Token ist proportional zur Anzahl der Nodes. Die maximale Anzahl an Node-NFTs, die eine einzelne Maschine halten kann, beträgt 20.',
      text2_1:
        'Mindestanforderungen für GPU-Serverparameter: \n Die Parameter des Rechenservers müssen die Mindestanforderungen erfüllen.',
      text3_1: 'GPU',
      text3_2: 'Muss eine Nvidia-Grafikkarte sein; Modelle umfassen die Serien 20, 30, 40 und 50.',
      text4_1: 'Speicher',
      text4_2: 'Mindestanforderung an den Speicher ist 16G pro Karte, empfohlen werden 32G.',
      text5_1: 'CPU',
      text5_2:
        'Muss die Anforderungen für Cloud-Gaming erfüllen: Intel/AMD mit einer Grundfrequenz von 3,0 GHz oder einer Boost-Frequenz von mindestens 3,5 GHz; jeder GPU benötigt eine separate CPU, die in der Lage ist, Black Myth: Wukong reibungslos auszuführen. Zum Beispiel: Intel-CPUs ab der 10. Generation, AMD 5600 oder höher.',
      text6_1: 'Festplatte',
      text6_2: 'Systemfestplatte 2T SSD oder mehr, Datenfestplatte 1T oder mehr',
      text7_1: 'Standort',
      text7_2: 'Die Maschine kann zu Hause aufgestellt werden.',
      text8_1: 'Netzwerkbandbreite:',
      text8_2: 'Jede GPU-Maschine sollte mindestens 10M Upload-Bandbreite haben.',
    },
    cont3: {
      title: '2. Regeln zur Berechnung der Rechenleistung',
      text: 'Im gesamten Ökosystem basieren die Mietgebühren für Benutzer einheitlich auf dem Preissystem für Rechenleistung. Das Mieteinkommen für DLC beträgt 0,508 USD/C/Monat. Das Berechnungsmodell lautet wie folgt: Rechenwert der gesamten Maschine = (25 * Anzahl der Karten + Speicher/3,5 + (√(Anzahl der CUDA-Kerne) * √(Videospeicher/10)) * Anzahl der Grafikkarten). ',
    },
    cont4: {
      title: '3. Regionale Koeffizienten',
      li1: 'Region',
      li2: 'Koeffizient',
      li_text1: 'Festlandchina',
      li_text2: 'Nordamerika',
      li_text3: 'Südamerika',
      li_text4: 'Europa',
      li_text5: 'Naher Osten',
      li_text6: 'Südkorea',
      li_text7: 'Japan',
      li_text8: 'Taiwan, China',
      li_text9: 'Hongkong und Macau, China',
      li_text10: 'Malaysia',
      li_text11: 'Indonesien',
      li_text12: 'Singapur',
      li_text13: 'Vietnam',
      text1:
        'Formel zur Berechnung der Rechenleistung der Maschine: (25 * Anzahl der Karten + Speicher/3,5 + (√(Anzahl der CUDA-Kerne) * √(Speicher/10)) * Anzahl der GPUs) * großer Modellkoeffizient',
      text2: 'Maschinenmodell:',
      text3: 'Anzahl der GPUs:',
      text4: 'Speichergröße:',
      text5: 'Region:',
      text6: 'Bitte auswählen',
      text7: 'Der aktuelle Rechenwert der Maschine beträgt: {total}',
    },
    cont5: {
      title:
        '4. Belohnungsmechanismus (Basierend auf dem EVM-kompatiblen DLC der DBC AI Public Chain, Browser-Adresse: https://test.dbcscan.io/)',
      text1:
        'Die Gesamtbelohnung in Tokens für einzelne kurzzeitig gemietete GPU-Maschinen im Orion-Wettbewerb beträgt 1 Milliarde und läuft über 180 Tage. Der Wettbewerb ist in 3 Phasen unterteilt, mit einem Intervall von 5-10 Tagen zwischen jeder Phase.',
      text2:
        'Wettbewerbsphase 1: Der Wettbewerb startet offiziell erst, wenn die Anzahl der GPUs jeder Art {n_gpu1} erreicht.',
      text3:
        '60 Tage, 3 Millionen Tokens pro Tag, 10 % sofort freigeschaltet, 90 % freigeschaltet über 180 Tage, mit täglicher Freischaltung von 0,5 %.',
      text4:
        'Wettbewerbsphase 2: Der Wettbewerb startet offiziell erst, wenn die Anzahl der GPUs jeder Art {n_gpu2} erreicht.',
      text5:
        '60 Tage, 4 Millionen Tokens pro Tag, 10 % sofort freigeschaltet, 90 % freigeschaltet über 180 Tage, mit täglicher Freischaltung von 0,5 %.',
      text6:
        'Wettbewerbsphase 3: Der Wettbewerb startet offiziell erst, wenn die Anzahl der GPUs jeder Art {n_gpu3} erreicht.',
      text7:
        '60 Tage, 9,665 Millionen Tokens pro Tag, 10 % sofort freigeschaltet, 90 % freigeschaltet über 180 Tage, mit täglicher Freischaltung von 0,5 %.',
      text8: 'Nach dem Listing an der Börse können Test-Token im Verhältnis 1:1 gegen Mainnet-Token getauscht werden.',
      text9: 'DeepLink verwendet einen nicht-linearen Belohnungsalgorithmus.',
      text10:
        'Die Gesamtzahl der täglich ausgeschütteten Tokens in diesem System ist festgelegt. Die Belohnung, die eine Maschine erhält, hängt von der Rechenleistung X der Maschine, der effektiven Mining-Zeit Y und der Anzahl der gestakten Tokens ab. Je mehr Tokens gestakt werden, desto höher die Belohnung, allerdings ohne lineare Wachstumsbeziehung. Die Belohnungsbasis für 0–1.000 Tokens ist gleich, aber bei über 1.000 Tokens wird die Belohnung gemäß einer Funktion berechnet. Befindet sich die Maschine im Vermietungszustand, erhöht sich die Rechenleistung um 30 %. ',
      text11: 'Belohnungsberechnungsformel:',
      text12: 'R: Die tägliche Gesamtmenge der Belohnungstoken (fester Wert)',
      text13: 'Die Anzahl der gestakten Token der Maschine i',
      text14: 'Die Rechenleistung der Maschine i',
      text15: 'Die effektive Mining-Zeit der Maschine i',
      text16: '',
      title1: 'Gestakte Menge:',
      text1_1: '1) Sie können die Anzahl der gestakten Tokens beliebig wählen oder auch keine Tokens staken.',
      text1_2:
        '2) Die Belohnungsmenge für 0-1.000 Tokens ist gleich; ab mehr als 1.000 Tokens wächst sie nicht linear.',
      text1_3:
        '3) Wenn weniger als 1.000 Tokens gestakt werden, wird jede Belohnung zuerst in das Staking investiert, bis 1.000 erreicht sind.',
      text1_4:
        '4) Der Bonus für 10.000 Tokens ist 1,23026 mal so hoch wie für 1.000 gestakte Tokens, was eine Steigerung von etwa 23,03 % bedeutet. Der Bonus für 100.000 Tokens ist 1,46052 mal so hoch, was eine Steigerung von etwa 46,05 % bedeutet. Der Bonus für 1.000.000 Tokens ist 1,69078 mal so hoch, was eine Steigerung von etwa 69,08 % bedeutet, und der Bonus für 10.000.000 Tokens ist 1,92103 mal so hoch, was eine Steigerung von etwa 92,10 % bedeutet.',
      title2: 'Belohnungsausschüttung:',
      text2_1:
        'Jede 24 Stunden kann eine Auszahlung erfolgen. Bei jeder Auszahlung kann 10 % der neu generierten Belohnung sofort ausgezahlt werden, und 90 % wird für 180 Tage gesperrt. Der gesperrte Betrag kann bei jeder Auszahlung 0,5 % entnommen werden. Nach 180 Tagen kann der gesperrte Betrag vollständig ausgezahlt werden.',

      title4: 'Berechnungsformel für den täglichen DLC-Ertrag: DLC wird zum Preis von {price} USD berechnet.',
      text4_8:
        '(Die Gesamtanzahl der GPUs wird einheitlich basierend auf 4060 32G berechnet, mit einem Durchschnitt von 10 NFTs und einer durchschnittlichen Stake-Menge von 10.000 Token)',
      title5:
        'Belohnungen auf der Kette: {dlc_num} DLC (entspricht {usdt_num} USD zum aktuellen DLC-Preis von {price} USD).',

      req_title1: '5. Online-Erkennungsmechanismus',
      req_text1_1:
        'Die Maschine unterliegt dem Erkennungsmechanismus der DBC AI Public Chain, die Informationen an den verteilten Erkennungscluster von DBC meldet, um festzustellen, ob die Maschine online ist. Wenn sie nicht online ist, werden die Online-Belohnungen abgezogen. Wenn während der Nutzung durch den Benutzer Unterbrechungen auftreten, werden DLC vom Benutzer abgezogen. Strafbegrenzungen:',
      req_text1_2:
        '1) Wenn keine Münzen eingesetzt sind, wird nur der aktuelle Mietertrag in DLC bestraft, bis zu maximal 2 Stunden Mietgebühren.',
      req_text1_3: '2) Wenn DLC eingesetzt ist, wird eine Strafe von 1.000 DLC verhängt.',
      req_title2: '6. Maschinen-Melderegeln',
      req_text2:
        'Wenn ein Benutzer den Verdacht hat, dass die Maschinenkonfiguration betrügerisch ist, kann er eine Meldung einreichen. Wenn erfolgreich, werden alle eingesetzten Münzen von der Maschine abgezogen, und alle Belohnungen werden gestoppt.',
      req_title3: '10.000 DLC einsetzen und die Meldeinformationen in die Kette senden',
      req_text3:
        'Von DeepLink autorisierte Prüfer können an der Überprüfung teilnehmen, mit 5 Prüfern bei jeder Überprüfung, die einer Mehrheitsregel folgen.',

      text4_6_1: 'Phase 1: 3 Millionen DLC pro Tag.',
      text4_6_2: 'Phase 2: 4 Millionen DLC pro Tag.',
      text4_6_3: 'Phase 3: 9,665 Millionen DLC pro Tag.',
    },
  },
  country: {
    country1: 'China',
    country2: 'Nordamerika',
    country3: 'Südamerika',
    country4: 'Europa',
    country5: 'Naher Osten',
    country6: 'Südkorea',
    country7: 'Japan',
    country8: 'Taiwan, China',
    country9: 'Hongkong und Macau, China',
    country10: 'Malaysia',
    country11: 'Indonesien',
    country12: 'Singapur',
    country13: 'Vietnam',
  },
  device: {
    title: 'Globale Geräteliste',
    title1:
      'Anzeigen der Anzahl der Maschinen, des Maschinenstatus und detaillierter Informationen für verschiedene GPU-Modelle.',
    table: {
      text1: 'Maschinennutzungsstatus:',
      text2: 'Anzahl der GPUs:',
      text3: 'Gesamtzahl der Maschinen:',
      text4: 'Anzahl der Leerlaufmaschinen:',
    },
  },
  machine_id: 'Maschinen-ID',
  machine_is_rented: 'Ist sie vermietet',
  machine_rented: 'Vermietet',
  machine_idle: 'Leer',
  machine_is_online: 'Ist sie online',
  machine_yes: 'Ja',
  machine_no: 'Nein',
  machine_no_data: 'Keine Daten verfügbar',

  deviceUniqueId: 'Maschinen-ID',
  minerLocation: 'Miner-Adresse',
  gpuCount: 'GPU-Anzahl',
  computeCapacity: 'Gesamtrechenleistung',
  isActive: 'Online-Status',
  isPledged: 'Staking-Status',
  pledgeTotal: 'Gesamtbetrag des Stakings',
  pledgeExpiration: 'Staking-Endzeit',

  yesOption: 'Ja',
  noOption: 'Nein',
  gpuType: 'GPU-Typ',
};
