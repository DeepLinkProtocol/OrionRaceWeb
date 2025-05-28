// 法语
export default {
  All: 'All',
  Rented: 'Rented',
  Idle: 'Idle',
  meau: {
    back: 'Retour au site officiel',
    nav1: 'Compétition Orion',
    nav2: 'Mode de location longue durée',
    nav3: 'Mode de location courte durée',
    nav4: 'Liste des appareils',
  },
  footer: {
    link: 'En savoir plus',
    community: 'Suivre la communauté',
    tip: 'Remarque : La communauté comprend Twitter, Telegram, Reddit, Medium, Discord, TikTok, YouTube',
  },

  home: {
    title1: 'Orion',
    title2: 'Compétition de puissance de calcul GPU',
    text: "La compétition de puissance de calcul GPU Orion sous le protocole DeepLink est une compétition d'incitation importante visant à encourager les mineurs à participer activement aux tests du réseau DeepLink. Cette compétition est une étape préparatoire essentielle avant le lancement officiel de DeepLink, la plus grande plateforme de protocole de cloud gaming au monde, fournissant une base technique solide et un support de calcul efficace pour les futurs utilisateurs mondiaux",
    text1: 'Le nombre total actuel de GPU dans le réseau DeepLink est de {gpu_num}',
    text2: 'La compétition a commencé, et les récompenses débuteront dès que le nombre de GPU atteindra le standard !',
    btn_text1: 'Compétition en mode location longue durée - A commencé',
    btn_title1: 'GPUs {long_term} actuel',
    btn_text2: 'Compétition en mode location courte durée - A commencé',
    btn_title2: 'Actuel {short_term} GPUs',
    cont2_text1:
      'La récompense totale en tokens pour la compétition de puissance de calcul Orion est de 3 milliards, avec 2 milliards de DLC pour le mode location longue durée et 1 milliard de DLC pour le mode location courte durée, sur une durée de 180 jours. La compétition est divisée en trois manches, chacune durant 60 jours, avec des intervalles de 5 à 10 jours.',
    cont2_btn1: 'Mode location longue durée',
    cont2_btn2: 'Mode location courte durée',
    cont3: {
      text1: 'Puissance de \n calcul totale',
      text2: 'Nombre total de GPU',
      text3: 'Nombre total de \n pools de calcul',
      text4: 'Taux de \n location des GPU',
      text5: 'Total des récompenses DLC',
      text6: 'Nombre de \n DLC détruits',
      text7: 'Nombre de DLC mis \n en gage pour les mineurs',
    },
    cont4: {
      li1: 'Classement de la compétition',
      li2: 'Nom du mineur',
      li3: 'Puissance de calcul',
      li4: 'Nombre de GPU',
      li5: 'Taux de location',
      li6: 'Nombre de locations',
      li7: 'Récompenses déverrouillées',
      li8: 'Récompenses totales',
    },
  },
  long_rule: {
    title: 'Règles de la compétition en mode location longue durée',
    text1: 'Le nombre total actuel de GPU en mode location longue durée dans le réseau DeepLink est de {long_num}',
    text2:
      'Pendant la compétition, les mineurs peuvent recevoir un total de 2 milliards de DLC en récompense, et 100 % des frais de location en DLC payés par les utilisateurs seront brûlés',
    competition_phase_two_in_progress: 'La deuxième phase de la compétition est en cours',
    cont2: {
      title: '1. Règles de participation',
      text1_1:
        'Les mineurs participant à la compétition de puissance de calcul Orion doivent détenir un NFT de nœud ( en savoir plus sur le nœud : ',
      text1_2:
        '). Pendant la compétition, une machine GPU peut détenir plusieurs nœuds, et le nombre de jetons de récompense est multiplié par le nombre de nœuds. Le nombre maximum de NFT de nœuds par machine est de 20.',
      text2_1:
        "Exigences minimales pour les paramètres du serveur GPU : \n Le serveur de puissance de calcul doit répondre aux exigences minimales \n pour passer l'examen du vérificateur et être mis en ligne, sinon, il ne pourra pas générer de revenus.",
      text3_1: 'GPU',
      text3_2: 'Doit être une carte graphique de la série Nvidia ; modèles des séries 20, 30, 40 ou 50',
      text4_1: 'Mémoire',
      text4_2: 'Exigence minimale de 16G par carte, 32G recommandé',
      text5_1: 'CPU',
      text5_2:
        "Doit répondre aux exigences des jeux en nuage : Intel/AMD, fréquence principale de 3,0 GHz ou fréquence turbo supérieure à 3,5 GHz ; chaque GPU nécessite un CPU séparé et doit être capable d'exécuter Black Myth: Wukong sans problème, par exemple Intel 10ème génération ou plus, AMD 5600 ou plus",
      text6_1: 'Disque dur',
      text6_2:
        'Le disque système doit être supérieur à 100G SSD, le disque de données supérieur à 3T SSD, ou utiliser un système sans disque',
      text7_1: 'Emplacement',
      text7_2:
        'Il est recommandé de placer la machine dans un centre de données IDC pour éviter les pénalités dues à des réseaux et à une alimentation instables',
      text8_1: 'Bande passante réseau',
      text8_2: "Il est recommandé que chaque machine GPU dispose d'au moins 10M de bande passante en amont",
    },
    cont3: {
      title: '2. Règles de calcul de la puissance de calcul',
      text: "Les frais de location des terminaux utilisateur dans l'ensemble de l'écosystème sont uniformément basés sur le système de tarification de la valeur de la puissance de calcul. Les revenus de location de DLC sont de 0,6 USD/C/mois. Le modèle de calcul est le suivant : Puissance de calcul de la machine entière = (25 * nombre de cartes + mémoire/3,5 + (√(nombre de cœurs CUDA) * √(mémoire/10)) * nombre de GPU), lorsque le coefficient de la zone locale est de 1, la valeur de la puissance de calcul est la suivante :",
      li1: 'Type de GPU',
      li2: 'Cœurs CUDA',
      li3: 'Mémoire',
      li4: 'Nombre de GPU',
      li5: 'Mémoire (G)',
      li6: 'Puissance de calcul de la machine entière (C)',
      li7: 'Location de la machine entière (USD)',
      li8: 'Tarif de location par carte par mois (USD)',
    },
    cont4: {
      title: '3. Coefficients régionaux',
      li1: 'Région',
      li2: 'Coefficient',
      li_text1: 'Chine continentale',
      li_text2: 'Amérique du Nord',
      li_text3: 'Amérique du Sud',
      li_text4: 'Europe',
      li_text5: 'Moyen-Orient',
      li_text6: 'Corée du Sud',
      li_text7: 'Japon',
      li_text8: 'Taïwan, Chine',
      li_text9: 'Hong Kong et Macao, Chine',
      li_text10: 'Malaisie',
      li_text11: 'Indonésie',
      li_text12: 'Singapour',
      li_text13: 'Vietnam',
      text1:
        'Formule de calcul de la puissance de calcul de la machine : (25 * nombre de cartes + mémoire/3,5 + (√(nombre de cœurs CUDA) * √(mémoire/10)) * nombre de GPU) * coefficient régional * coefficient de grand modèle',
      text2: 'Modèle de la machine :',
      text3: 'Nombre de GPU :',
      text4: 'Taille de la mémoire :',
      text5: 'Région :',
      text6: 'Veuillez sélectionner',
      text7: 'La valeur de puissance de calcul actuelle de la machine est : {total}',
    },
    cont5: {
      title:
        '4. Mécanisme de Récompense (Basé sur le DLC compatible EVM sur la chaîne publique DBC AI, Adresse du Navigateur : https://test.dbcscan.io/)',
      text1:
        'La récompense totale en jetons pour les machines GPU en mode location longue durée IDC dans la compétition de puissance de calcul Orion est de 2 milliards, sur une durée de 180 jours. La compétition est divisée en 3 tours, avec un intervalle de 5 à 10 jours entre chaque tour.',
      text2:
        'Compétition 1 : La compétition commencera officiellement lorsque le nombre de GPU de chaque type atteindra {n_gpu1}.',
      text3:
        '60 jours, 6 millions de jetons par jour, 10 % reçus immédiatement, 90 % débloqués sur 180 jours, avec un déblocage quotidien de 0,5 %.',
      text4:
        'Compétition 2 : La compétition commencera officiellement lorsque le nombre de GPU de chaque type atteindra {n_gpu2}.',
      text5:
        '60 jours, 8 millions de jetons par jour, 10 % reçus immédiatement, 90 % débloqués sur 180 jours, avec un déblocage quotidien de 0,5 %.',
      text6:
        'Compétition 3 : La compétition commencera officiellement lorsque le nombre de GPU de chaque type atteindra {n_gpu3}.',
      text7:
        '60 jours, 19,33 millions de jetons par jour, 10 % reçus immédiatement, 90 % débloqués sur 180 jours, avec un déblocage quotidien de 0,5 %.',
      text8:
        "Après l'inscription sur l'échange, les jetons de test peuvent être échangés à un ratio de 1:1 contre les jetons du réseau principal.",
      text9: 'DeepLink utilise un algorithme de récompense non linéaire.',
      text10:
        "Le nombre total de tokens récompensés par ce système est fixe quotidiennement. Les récompenses qu'une machine reçoit sont liées à la puissance de calcul X de la machine, au temps de minage effectif Y, et au nombre de tokens mis en jeu. Plus il y a de tokens mis en jeu, plus la récompense est grande; cependant, cela ne suit pas une relation de croissance linéaire. La base de récompense pour 0-10 000 tokens est la même, mais pour des montants supérieurs à 10 000 tokens, la récompense est calculée sur la base d'une fonction. Si la machine est en location, sa puissance de calcul augmente de 30 %.",
      text11: 'Formule de calcul des récompenses :',
      text12: 'R : Nombre total de tokens de récompense quotidien (valeur fixe)',
      text13: 'Montant de tokens mis en jeu pour la machine i',
      text14: 'La puissance de calcul de la machine i',
      text15: 'Le temps de minage effectif de la machine i',
      text16: '',
      title1: 'Montant mis en jeu :',
      text1_1:
        "1) Vous pouvez choisir n'importe quel montant de tokens à mettre en jeu ou choisir de ne pas en mettre en jeu.",
      text1_2:
        '2) Pour les montants mis en jeu entre 0 et 10 000, le montant de la récompense est le même; pour les montants supérieurs à 10 000, les récompenses augmentent de manière non linéaire.',
      text1_3:
        "3) Lorsque le montant mis en jeu est inférieur à 10 000, chaque extraction de récompense contribue d'abord au staking jusqu'à ce que 10 000 soient atteints.",
      text1_4:
        "4) La récompense pour 100 000 tokens est de 1,23026 fois celle pour 10 000 tokens mis en jeu, soit une augmentation d'environ 23,03 %. Pour 1 000 000 de tokens, la récompense est de 1,46052 fois, soit une augmentation d'environ 46,05 %. Pour 10 000 000 de tokens, la récompense est de 1,69078 fois, soit une augmentation d'environ 69,08 %, et pour 100 000 000 de tokens, la récompense est de 1,92103 fois, soit une augmentation d'environ 92,10 %.",
      title2: 'Extraction des récompenses :',
      text2_1:
        'Vous pouvez extraire les récompenses toutes les 24 heures. Pour chaque extraction, 10 % des nouvelles récompenses générées sont immédiatement disponibles, tandis que 90 % sont bloqués pendant 180 jours. La portion bloquée est libérée à hauteur de 0,5 % à chaque extraction, avec une libération totale après 180 jours.',
      block_title1: 'Attention Particulière :',
      block_text1_1:
        "Le mode de location longue durée nécessite d'abord d'ajouter la machine GPU au réseau DBC. Document de référence :",
      block_text1_2:
        ". Ensuite, les mineurs doivent louer eux-mêmes la machine avant qu'elle puisse rejoindre le réseau DLC, obtenant ainsi des revenus à la fois en DBC et en DLC. Les revenus en DBC après l'intégration au réseau DBC = Récompenses en DBC - 30 % de frais de location.",
      block_title2: 'Formule de Calcul des Revenus Quotidiens en DBC de la Machine :',
      block_text2:
        "Puissance de calcul totale de la machine / puissance de calcul totale du réseau * 547 945 * prix du DBC * coefficient régional * 1,3 (la puissance de calcul augmente de 30 % lorsqu'elle est louée) - puissance de calcul totale de la machine * coefficient régional * 0,01693 * 30 % (les revenus quotidiens par unité de puissance de calcul sont de 0,01693 USD).",
      text3_13:
        'Les revenus quotidiens actuels sont : {usdt1} USD équivalents en DBC = Récompenses sur la chaîne : {dbc} DBC (équivalents à {usdt2} USD au prix actuel du DBC de {dbc_price} USD) - 30 % de frais de location : {usdt3} USD équivalents en DBC.',
      title4: 'Formule de Calcul des Revenus Quotidiens en DLC de la Machine : DLC calculé à {price} USD par unité.',
      text4_1: 'Modèle de GPU :',
      text4_2: 'Taille de la mémoire :',
      text4_3: 'Nombre de NFTs de nœuds :',
      text4_4: 'Région :',
      text4_5: 'Montant du DLC mis en jeu :',
      text4_6: 'Phase de la compétition :',
      text4_6_1: 'Phase 1 : 6 millions de DLC par jour.',
      text4_6_2: 'Phase 2 : 8 millions de DLC par jour.',
      text4_6_3: 'Phase 3 : 19,33 millions de DLC par jour.',
      text4_7: 'Nombre total de GPUs participants :',
      text4_8:
        '(Le nombre total de GPU est uniformément calculé sur la base du modèle 4060, 32 Go, avec une moyenne de 10 NFTs et une mise moyenne de 100 000 tokens)',
      title5:
        'Récompenses sur la chaîne : {dlc_num} DLC (équivalents à {usdt_num} USD au prix actuel du DLC de {price} USD).',
      req_title1:
        '5. Mécanisme de Signalement et de Vérification (Basé sur le DLC compatible EVM sur la chaîne publique DBC AI)',
      req_text1:
        'Les utilisateurs louant des machines DLC peuvent signaler à tout moment. Un dépôt de 10 000 DLC est requis pour initier un signalement. Lors du signalement, les informations de ce dernier entreront dans le processus de validation du vérificateur DBC.',
      req_title2: '6. Mécanisme de Pénalité (Basé sur le DLC compatible EVM sur la chaîne publique DBC AI)',
      req_text2:
        "Après vérification du signalement DLC, s'il y a un problème avec la vérification, les jetons DBC mis en jeu seront déduits conformément aux règles, et un maximum de 10 000 jetons DLC sera déduit. Ces jetons mis en jeu seront récompensés à l'utilisateur ayant effectué le signalement.",
      req_title3:
        '7. Mécanisme de Paiement et de Brûlage (Basé sur le DLC compatible EVM sur la chaîne publique DBC AI)',
      req_text3:
        'Les utilisateurs paient le DLC (les prix des GPU dans le réseau DLC sont 20 % plus élevés que dans le réseau DBC) pour obtenir les droits de location de la machine. Le DLC payé par les utilisateurs sera brûlé à 100 % dans le contrat intelligent, qui peut être consulté pour chaque paiement et enregistrement de brûlage.',
    },
  },
  short_rule: {
    title: 'Règles de la Compétition en Mode Location à Court Terme',
    text1: 'Le nombre actuel de GPU en mode location à court terme sur le réseau DeepLink est de {short_num}.',
    text2:
      'Pendant la compétition, les mineurs peuvent recevoir un total de 1 milliard de DLC en récompenses, et les frais de location de DLC payés par les utilisateurs seront entièrement brûlés.',
    competition_phase_two_in_progress: 'La deuxième phase de la compétition est en cours',
    cont2: {
      title: '1. Règles de Participation',
      text1_1:
        "Les mineurs participant au concours de puissance de calcul Orion doivent détenir un NFT de nœud (Pour plus d'informations sur les nœuds :",
      text1_2:
        "). Pendant la compétition, une machine GPU unique peut détenir plusieurs nœuds, et le nombre de tokens de récompense est proportionnel au nombre de nœuds. Le nombre maximum de NFTs de nœud qu'une seule machine peut détenir est de 20.",
      text2_1:
        'Exigences minimales pour les paramètres du serveur GPU : \n Les paramètres du serveur de puissance de calcul doivent respecter les exigences minimales.',
      text3_1: 'GPU',
      text3_2: 'Doit être une carte graphique de la série Nvidia ; modèles inclus : séries 20, 30, 40 et 50.',
      text4_1: 'Mémoire',
      text4_2: 'La mémoire minimale requise est de 16G par carte, 32G est recommandé.',
      text5_1: 'CPU',
      text5_2:
        "Doit répondre aux exigences de cloud gaming : Intel/AMD avec une fréquence de base de 3,0 GHz ou une fréquence de boost d'au moins 3,5 GHz ; chaque GPU nécessite un CPU séparé, capable d'exécuter sans problème Black Myth : Wukong. Par exemple : Intel 10e génération ou plus, AMD 5600 ou plus.",
      text6_1: 'Disque Dur',
      text6_2: 'Disque système SSD 2 To ou plus, disque de données 1 To ou plus',
      text7_1: 'Emplacement',
      text7_2: 'La machine peut être placée à domicile.',
      text8_1: 'Bande Passante Réseau :',
      text8_2: "Chaque machine GPU doit avoir une bande passante d'upload d'au moins 10M.",
    },
    cont3: {
      title: '2. Règles de Calcul de la Puissance de Calcul',
      text: "Dans tout l'écosystème, les frais de location pour les utilisateurs sont uniformément basés sur le système de tarification de la valeur de puissance de calcul. Les revenus de location de DLC sont de 0,508 USD/C/mois. Le modèle de calcul est le suivant : Valeur de la puissance de calcul de la machine entière = (25 * nombre de cartes + mémoire/3,5 + (√(nombre de cœurs CUDA) * √(mémoire vidéo/10)) * nombre de cartes graphiques).",
    },
    cont4: {
      title: '3. Coefficients régionaux',
      li1: 'Région',
      li2: 'Coefficient',
      li_text1: 'Chine continentale',
      li_text2: 'Amérique du Nord',
      li_text3: 'Amérique du Sud',
      li_text4: 'Europe',
      li_text5: 'Moyen-Orient',
      li_text6: 'Corée du Sud',
      li_text7: 'Japon',
      li_text8: 'Taïwan, Chine',
      li_text9: 'Hong Kong et Macao, Chine',
      li_text10: 'Malaisie',
      li_text11: 'Indonésie',
      li_text12: 'Singapour',
      li_text13: 'Vietnam',
      text1:
        'Formule de calcul de la puissance de calcul de la machine : (25 * nombre de cartes + mémoire/3,5 + (√(nombre de cœurs CUDA) * √(mémoire/10)) * nombre de GPU) * coefficient de grand modèle',
      text2: 'Modèle de la machine :',
      text3: 'Nombre de GPU :',
      text4: 'Taille de la mémoire :',
      text5: 'Région :',
      text6: 'Veuillez sélectionner',
      text7: 'La valeur de puissance de calcul actuelle de la machine est : {total}',
    },
    cont5: {
      title:
        '4. Mécanisme de Récompense (Basé sur le DLC compatible EVM de la chaîne publique DBC AI, adresse du navigateur : https://test.dbcscan.io/)',
      text1:
        'La récompense totale en tokens pour les machines GPU individuelles en location courte durée dans le concours de puissance de calcul Orion est de 1 milliard, pendant 180 jours. Le concours est divisé en 3 phases, avec un intervalle de 5 à 10 jours entre chaque.',
      text2:
        'Phase 1 du Concours : Le concours démarre officiellement uniquement lorsque le nombre de chaque type de GPU atteint {n_gpu1}.',
      text3:
        '60 jours, 3 millions de tokens par jour, 10 % débloqué immédiatement, 90 % débloqué sur 180 jours, avec 0,5 % débloqué quotidiennement.',
      text4:
        'Phase 2 du Concours : Le concours démarre officiellement uniquement lorsque le nombre de chaque type de GPU atteint {n_gpu2}.',
      text5:
        '60 jours, 4 millions de tokens par jour, 10 % débloqué immédiatement, 90 % débloqué sur 180 jours, avec 0,5 % débloqué quotidiennement.',
      text6:
        'Phase 3 du Concours : Le concours démarre officiellement uniquement lorsque le nombre de chaque type de GPU atteint {n_gpu3}.',
      text7:
        '60 jours, 9,665 millions de tokens par jour, 10 % débloqué immédiatement, 90 % débloqué sur 180 jours, avec 0,5 % débloqué quotidiennement.',
      text8:
        "Après l'inscription sur l'échange, les jetons de test peuvent être échangés à un ratio de 1:1 contre les jetons du réseau principal.",
      text9: 'DeepLink utilise un algorithme de récompense non linéaire.',
      text10:
        "Le nombre total de tokens récompensés par ce système est fixe quotidiennement. Les récompenses qu'une machine reçoit sont liées à la puissance de calcul X de la machine, au temps de minage effectif Y, et au nombre de tokens mis en jeu. Plus il y a de tokens mis en jeu, plus la récompense est grande; cependant, cela ne suit pas une relation de croissance linéaire. La base de récompense pour 0-10 000 tokens est la même, mais pour des montants supérieurs à 10 000 tokens, la récompense est calculée sur la base d'une fonction. Si la machine est en location, sa puissance de calcul augmente de 30 %.",
      text11: 'Formule de calcul des récompenses :',
      text12: 'R : Nombre total de tokens de récompense quotidien (valeur fixe)',
      text13: 'Montant de tokens mis en jeu pour la machine i',
      text14: 'La puissance de calcul de la machine i',
      text15: 'Le temps de minage effectif de la machine i',
      text16: '',
      title1: 'Montant mis en jeu :',
      text1_1:
        "1) Vous pouvez choisir n'importe quel montant de tokens à mettre en jeu ou choisir de ne pas en mettre en jeu.",
      text1_2:
        '2) Pour les montants mis en jeu entre 0 et 10 000, le montant de la récompense est le même; pour les montants supérieurs à 10 000, les récompenses augmentent de manière non linéaire.',
      text1_3:
        "3) Lorsque le montant mis en jeu est inférieur à 10 000, chaque extraction de récompense contribue d'abord au staking jusqu'à ce que 10 000 soient atteints.",
      text1_4:
        "4) La récompense pour 100 000 tokens est de 1,23026 fois celle pour 10 000 tokens mis en jeu, soit une augmentation d'environ 23,03 %. Pour 1 000 000 de tokens, la récompense est de 1,46052 fois, soit une augmentation d'environ 46,05 %. Pour 10 000 000 de tokens, la récompense est de 1,69078 fois, soit une augmentation d'environ 69,08 %, et pour 100 000 000 de tokens, la récompense est de 1,92103 fois, soit une augmentation d'environ 92,10 %.",
      title2: 'Extraction des récompenses :',
      text2_1:
        'Les récompenses peuvent être retirées à tout moment. Si vous n’avez pas misé de DLC au départ ou si la quantité mise en jeu est inférieure à 10,000, les bénéfices des récompenses s’accumuleront sous forme de DLC mis en jeu jusqu’à atteindre 10,000 DLC.<br>1) Le loyer s’accumulera sous forme de fonds mis en jeu jusqu’à atteindre 10,000 DLC.<br>2) La durée minimale de location est de 2 heures, sans limite maximale. Lorsque le temps disponible restant est inférieur à 1 heure, la machine ne pourra pas être louée et ne sera pas comptabilisée dans les récompenses en ligne. Les mineurs peuvent prolonger la durée à tout moment, mais chaque prolongation doit être d’au moins 2 heures.',

      title4: 'Formule de Calcul des Revenus Journaliers en DLC : Le DLC est calculé à un prix de 0,003 USD.',
      text4_8:
        '(Le total des GPU est calculé de manière uniforme sur la base de 4060 32G, avec une moyenne de 10 NFT et une mise moyenne de 10 000 tokens)',
      title5:
        'Gains de Récompense sur la Chaîne : {dlc_num} DLC (équivalent à {usdt_num} USD au prix actuel du DLC de {price} USD).',

      req_title1: '5. Mécanisme de Détection en Ligne',
      req_text1_1:
        "La machine est soumise au mécanisme de détection de la chaîne publique DBC AI, qui rapporte les informations au cluster de détection distribué DBC pour déterminer si la machine est en ligne. Si elle n'est pas en ligne, les récompenses en ligne seront déduites. Si des interruptions surviennent pendant l'utilisation par l'utilisateur, des DLC seront déduits de l'utilisateur. Limites de pénalité :",
      req_text1_2:
        "1) Si aucune pièce n'est stakée, seuls les gains actuels de location de DLC seront pénalisés, jusqu'à un maximum de 2 heures de frais de location.",
      req_text1_3: '2) Si des DLC sont stakés, une pénalité de 1 000 DLC sera imposée.',
      req_text1_4:
        "La machine dispose d'un mécanisme de détection permanent de la blockchain DBC AI, transmettant des informations au cluster de détection distribué DBC pour déterminer si la machine est en ligne. Si elle n'est pas en ligne, les récompenses en ligne seront déduites. En cas d'interruption pendant l'utilisation, des DLC seront déduits à l'utilisateur. Actuellement, chaque interruption entraîne une pénalité de 1000 DLC, qui sera ensuite ajustée dynamiquement en fonction du prix du DLC",
      req_title2: '6. Règles de Signalement des Machines',
      req_text2:
        'Si un utilisateur soupçonne que la configuration de la machine est frauduleuse, il peut initier un signalement. En cas de succès, toutes les pièces stakées seront déduites de la machine, et les récompenses seront arrêtées.',
      req_title3: 'Staker 10 000 DLC et envoyer les informations de signalement sur la chaîne',
      req_text3:
        'Les validateurs autorisés par DeepLink peuvent participer à la vérification, avec 5 validateurs impliqués dans chaque vérification, suivant une règle de majorité.',

      text4_6_1: 'Phase 1 : 3 millions de DLC par jour.',
      text4_6_2: 'Phase 2 : 4 millions de DLC par jour.',
      text4_6_3: 'Phase 3 : 9,665 millions de DLC par jour.',
    },
  },
  country: {
    country1: 'Chine',
    country2: 'Amérique du Nord',
    country3: 'Amérique du Sud',
    country4: 'Europe',
    country5: 'Moyen-Orient',
    country6: 'Corée du Sud',
    country7: 'Japon',
    country8: 'Taïwan, Chine',
    country9: 'Hong Kong et Macao, Chine',
    country10: 'Malaisie',
    country11: 'Indonésie',
    country12: 'Singapour',
    country13: 'Vietnam',
  },
  device: {
    title: 'Liste des Dispositifs Globaux',
    title1:
      "Consultez le nombre de machines, l'état des machines et les informations détaillées pour différents modèles de GPU.",
    table: {
      text1: "État d'Utilisation des Machines :",
      text2: 'Nombre de GPU :',
      text3: 'Nombre Total de Machines :',
      text4: 'Nombre de Machines Inactives :',
    },
  },
  machine_id: 'ID de la machine',
  machine_is_rented: 'Est-elle louée',
  machine_rented: 'Louée',
  machine_idle: 'Inactif',
  machine_is_online: 'Est-elle en ligne',
  machine_yes: 'Oui',
  machine_no: 'Non',
  machine_no_data: 'Aucune donnée disponible',
  deviceUniqueId: 'Identifiant de la machine',
  minerLocation: 'Adresse du mineur',
  gpuCount: 'Quantité de GPU',
  computeCapacity: 'Puissance de calcul totale',
  isActive: 'État en ligne',
  isPledged: 'État de mise',
  pledgeTotal: 'Montant total misé',
  pledgeExpiration: 'Date de fin de mise',

  yesOption: 'Oui',
  noOption: 'Non',
  gpuType: 'Type de GPU',
};
