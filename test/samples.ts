export const SAMPLES: ReadonlyArray<[string, string]> = [
    ["Iлｔèｒnåｔïｏnɑｌíƶａｔï߀ԉ", "Internationalizati0n"], // Reference sample
    ["𝐀 ｔｏ 𝑧", "𝐀 to 𝑧"], // With unhandled non-ASCII (& width 2)
    ["à la carte", "a la carte"], // French
    ["Crème brûlée", "Creme brulee"], // French
    ["façade", "facade"], // French
    ["cliché", "cliche"], // French
    ["élève", "eleve"], // French
    ["Beyoncé", "Beyonce"], // French
    ["Renée", "Renee"], // French
    ["André", "Andre"], // French
    ["François", "Francois"], // French
    ["Île-de-France", "Ile-de-France"], // French
    ["Légion d'honneur", "Legion d'honneur"], // French
    ["cœur", "coeur"], // French
    ["soupçon", "soupcon"], // French
    ["maître d'hôtel", "maitre d'hotel"], // French
    ["Café au lait", "Cafe au lait"], // French
    ["Noël", "Noel"], // French
    ["piñata", "pinata"], // Spanish
    ["jalapeño", "jalapeno"], // Spanish
    ["mañana", "manana"], // Spanish
    ["niño", "nino"], // Spanish
    ["corazón", "corazon"], // Spanish
    ["Señorita", "Senorita"], // Spanish
    ["Bogotá", "Bogota"], // Colombian Spanish
    ["Medellín", "Medellin"], // Colombian Spanish
    ["Cádiz", "Cadiz"], // Spanish
    ["Querétaro", "Queretaro"], // Mexican Spanish
    ["San José", "San Jose"], // Costa Rican Spanish
    ["Potosí", "Potosi"], // Bolivian Spanish
    ["Cancún", "Cancun"], // Mexican Spanish
    ["María-José", "Maria-Jose"], // Spanish
    ["Año nuevo", "Ano nuevo"], // Spanish
    ["São Paulo", "Sao Paulo"], // Brazilian Portuguese
    ["João Pessoa", "Joao Pessoa"], // Brazilian Portuguese
    ["Belém do Pará", "Belem do Para"], // Brazilian Portuguese
    ["Vitória", "Vitoria"], // Brazilian Portuguese
    ["Florianópolis", "Florianopolis"], // Brazilian Portuguese
    ["Espírito Santo", "Espirito Santo"], // Brazilian Portuguese
    ["açaí", "acai"], // Portuguese
    ["cachaça", "cachaca"], // Portuguese
    ["São Tomé e Príncipe", "Sao Tome e Principe"], // Portuguese
    ["Óbidos", "Obidos"], // European Portuguese
    ["Ílhavo", "Ilhavo"], // European Portuguese
    ["São Luís do Maranhão", "Sao Luis do Maranhao"], // Brazilian Portuguese
    ["Uberlândia", "Uberlandia"], // Brazilian Portuguese
    ["Goiânia", "Goiania"], // Brazilian Portuguese
    ["São Cristóvão", "Sao Cristovao"], // Brazilian Portuguese
    ["São Vicente", "Sao Vicente"], // Brazilian Portuguese
    ["Iguaçu", "Iguacu"], // Brazilian Portuguese
    ["Poços de Caldas", "Pocos de Caldas"], // Brazilian Portuguese
    ["Maceió", "Maceio"], // Brazilian Portuguese
    ["naïve", "naive"], // English
    ["coöperate", "cooperate"], // English
    ["résumé", "resume"], // English
    ["faërie", "faerie"], // English
    ["latté", "latte"], // English
    ["touché", "touche"], // English
    ["Æther", "AEther"], // English
    ["übermäßig", "ubermassig"], // German
    ["Schönbrunn", "Schonbrunn"], // German
    ["straße", "strasse"], // German
    ["Frühstück", "Fruhstuck"], // German
    ["Fußgänger", "Fussganger"], // German
    ["München", "Munchen"], // German
    ["Zürich", "Zurich"], // Swiss German
    ["Görlitz", "Gorlitz"], // German
    ["Bärlauch", "Barlauch"], // German
    ["Großzügig", "Grosszugig"], // German
    ["Bösewicht", "Bosewicht"], // German
    ["smörgåsbord", "smorgasbord"], // Swedish
    ["Göteborg", "Goteborg"], // Swedish
    ["Ångström", "Angstrom"], // Swedish
    ["självständighet", "sjalvstandighet"], // Swedish
    ["Örebro", "Orebro"], // Swedish
    ["Älmhult", "Almhult"], // Swedish
    ["Åmål", "Amal"], // Swedish
    ["Småland", "Smaland"], // Swedish
    ["Tromsø", "Tromso"], // Norwegian
    ["Håkon", "Hakon"], // Norwegian
    ["Ålesund", "Alesund"], // Norwegian
    ["Bjørn", "Bjorn"], // Norwegian
    ["Øystein", "Oystein"], // Norwegian
    ["København", "Kobenhavn"], // Danish
    ["smørrebrød", "smorrebrod"], // Danish
    ["Århus", "Arhus"], // Danish
    ["Sønderborg", "Sonderborg"], // Danish
    ["jäätelö", "jaatelo"], // Finnish
    ["Jyväskylä", "Jyvaskyla"], // Finnish
    ["Hämeenlinna", "Hameenlinna"], // Finnish
    ["Seinäjoki", "Seinajoki"], // Finnish
    ["Þingvellir", "Thingvellir"], // Icelandic
    ["Sólheimasandur", "Solheimasandur"], // Icelandic
    ["Eyjafjallajökull", "Eyjafjallajokull"], // Icelandic
    ["Árni", "Arni"], // Icelandic
    ["Hjörleifur", "Hjorleifur"], // Icelandic
    ["Ísafjörður", "Isafjordhur"], // Icelandic
    ["Reykjavík", "Reykjavik"], // Icelandic
    ["Dvořák", "Dvorak"], // Czech
    ["Příliš žluťoučký kůň úpěl ďábelské ódy", "Prilis zlutoucky kun upel dabelske ody"], // Czech
    ["České Budějovice", "Ceske Budejovice"], // Czech
    ["Říčany", "Ricany"], // Czech
    ["Třebíč", "Trebic"], // Czech
    ["Žižkov", "Zizkov"], // Czech
    ["Mělník", "Melnik"], // Czech
    ["Ústí nad Labem", "Usti nad Labem"], // Czech
    ["Žďár nad Sázavou", "Zdar nad Sazavou"], // Czech
    ["Ružomberok", "Ruzomberok"], // Slovak
    ["Košice", "Kosice"], // Slovak
    ["Žilina", "Zilina"], // Slovak
    ["Štrbské Pleso", "Strbske Pleso"], // Slovak
    ["Ľuboš", "Lubos"], // Slovak
    ["Nové Zámky", "Nove Zamky"], // Slovak
    ["Šaľa", "Sala"], // Slovak
    ["Països Catalans", "Paisos Catalans"], // Catalan
    ["Feliç any nou", "Felic any nou"], // Catalan
    ["Occitània", "Occitania"], // Occitan
    ["A Coruña", "A Coruna"], // Galician
    ["Galiza é fermosa", "Galiza e fermosa"], // Galician
    ["Euskal Herría", "Euskal Herria"], // Basque
    ["Donostía", "Donostia"], // Basque
    ["Cèilidh", "Ceilidh"], // Scottish Gaelic
    ["Còmhla", "Comhla"], // Scottish Gaelic
    ["Sláinte", "Slainte"], // Irish
    ["Bréanainn", "Breanainn"], // Irish
    ["Cymru â Lloegr", "Cymru a Lloegr"], // Welsh
    ["Dŵr Cymru", "Dwr Cymru"], // Welsh
    ["Llŷn", "Llyn"], // Welsh
    ["Paweł", "Pawel"], // Polish
    ["Żółć", "Zolc"], // Polish
    ["Zażółć gęślą jaźń", "Zazolc gesla jazn"], // Polish
    ["Łódź", "Lodz"], // Polish
    ["Gdańsk", "Gdansk"], // Polish
    ["Białystok", "Bialystok"], // Polish
    ["Święтоchłowice", "Swietochlowice"], // Polish
    ["Łęczyca", "Leczyca"], // Polish
    ["Żywiec", "Zywiec"], // Polish
    ["Międzybórz", "Miedzyborz"], // Polish
    ["Przemyśl", "Przemysl"], // Polish
    ["Wałbrzych", "Walbrzych"], // Polish
    ["Świnoujście", "Swinoujscie"], // Polish
    ["Łazienki Królewskie", "Lazienki Krolewskie"], // Polish
    ["Nowy Sącz", "Nowy Sacz"], // Polish
    ["Żubrówka", "Zubrowka"], // Polish
    ["Łomża", "Lomza"], // Polish
    ["Łódź Voivodeship", "Lodz Voivodeship"], // Polish
    ["Żagań", "Zagan"], // Polish
    ["Kraków", "Krakow"], // Polish
    ["Łąka", "Laka"], // Polish
    ["Śródmieście", "Srodmiescie"], // Polish
    ["Grudziądz", "Grudziadz"], // Polish
    ["Łuków", "Lukow"], // Polish
    ["Śląsk", "Slask"], // Polish
    ["Łeba", "Leba"], // Polish
    ["Szczęście", "Szczescie"], // Polish
    ["Żółw", "Zolw"], // Polish
    ["București", "Bucuresti"], // Romanian
    ["Timișoara", "Timisoara"], // Romanian
    ["Iași", "Iasi"], // Romanian
    ["Brașov", "Brasov"], // Romanian
    ["Sighișoara", "Sighisoara"], // Romanian
    ["Reșița", "Resita"], // Romanian
    ["Călărași", "Calarasi"], // Romanian
    ["Râmnicu Vâlcea", "Ramnicu Valcea"], // Romanian
    ["Târgu Mureș", "Targu Mures"], // Romanian
    ["Chișinău", "Chisinau"], // Romanian
    ["Țăndărei", "Tandarei"], // Romanian
    ["Orșova", "Orsova"], // Romanian
    ["Ștefan cel Mare", "Stefan cel Mare"], // Romanian
    ["árvíztűrő tükörfúrógép", "arvizturo tukorfurogep"], // Hungarian
    ["Székesfehérvár", "Szekesfehervar"], // Hungarian
    ["Nyíregyháza", "Nyiregyhaza"], // Hungarian
    ["Győr", "Gyor"], // Hungarian
    ["Pécs", "Pecs"], // Hungarian
    ["Kecskemét", "Kecskemet"], // Hungarian
    ["Sátoraljaújhely", "Satoraljaujhely"], // Hungarian
    ["Csákvár", "Csakvar"], // Hungarian
    ["Őrség", "Orseg"], // Hungarian
    ["Őrbottyán", "Orbottyan"], // Hungarian
    ["Diósd", "Diosd"], // Hungarian
    ["Balatonfüred", "Balatonfured"], // Hungarian
    ["Törökszentmiklós", "Torokszentmiklos"], // Hungarian
    ["Vilnių", "Vilniu"], // Lithuanian
    ["Klaipėda", "Klaipeda"], // Lithuanian
    ["Šiauliai", "Siauliai"], // Lithuanian
    ["Žemaitija", "Zemaitija"], // Lithuanian
    ["Ąžuolas", "Azuolas"], // Lithuanian
    ["Rīga", "Riga"], // Latvian
    ["Jūrmala", "Jurmala"], // Latvian
    ["Ģimene", "Gimene"], // Latvian
    ["Liepāja", "Liepaja"], // Latvian
    ["Cēsis", "Cesis"], // Latvian
    ["Tõrvandi", "Torvandi"], // Estonian
    ["Pärnu", "Parnu"], // Estonian
    ["Sõpruse", "Sopruse"], // Estonian
    ["Kääpa", "Kaapa"], // Estonian
    ["Jõgeva", "Jogeva"], // Estonian
    ["İstanbul", "Istanbul"], // Turkish
    ["Çağrı", "Cagri"], // Turkish
    ["Şişli", "Sisli"], // Turkish
    ["Çanakkale", "Canakkale"], // Turkish
    ["Niğde", "Nigde"], // Turkish
    ["Şanlıurfa", "Sanliurfa"], // Turkish
    ["Aydın", "Aydin"], // Turkish
    ["İskenderun", "Iskenderun"], // Turkish
    ["Kırıkkale", "Kirikkale"], // Turkish
    ["Çorum", "Corum"], // Turkish
    ["Eskişehir", "Eskisehir"], // Turkish
    ["Kütahya", "Kutahya"], // Turkish
    ["Balıkesir", "Balikesir"], // Turkish
    ["Iğdır", "Igdir"], // Turkish
    ["Gümüşhane", "Gumushane"], // Turkish
    ["Düzce", "Duzce"], // Turkish
    ["Söke", "Soke"], // Turkish
    ["Büyükçekmece", "Buyukcekmece"], // Turkish
    ["Doğubayazıt", "Dogubayazit"], // Turkish
    ["Gökçeada", "Gokceada"], // Turkish
    ["Kuşadası", "Kusadasi"], // Turkish
    ["Đakovo", "Dakovo"], // Croatian
    ["Ćevapi", "Cevapi"], // Bosnian
    ["Čačak", "Cacak"], // Serbian
    ["Šabac", "Sabac"], // Serbian
    ["Niš", "Nis"], // Serbian
    ["Čapljina", "Capljina"], // Bosnian
    ["Županja", "Zupanja"], // Croatian
    ["Đurđevo", "Durdevo"], // Serbian
    ["Čili", "Cili"], // Croatian
    ["Črnomelj", "Crnomelj"], // Slovenian
    ["Škofja Loka", "Skofja Loka"], // Slovenian
    ["Žužemberk", "Zuzemberk"], // Slovenian
    ["Āyurveda", "Ayurveda"], // Sanskrit
    ["Śrī Lanka", "Sri Lanka"], // Sinhala
    ["Ṛṣi", "Rsi"], // Sanskrit
    ["Gaṇeśa", "Ganesa"], // Sanskrit
    ["Pokémon", "Pokemon"], // Japanese
    ["Tōkyō", "Tokyo"], // Japanese
    ["Kyōto", "Kyoto"], // Japanese
    ["Ōsaka", "Osaka"], // Japanese
    ["Shōgun", "Shogun"], // Japanese
    ["Ōita", "Oita"], // Japanese
    ["Ṣọlá", "Sola"], // Yoruba
    ["Ọmọlúwàbí", "Omoluwabi"], // Yoruba
    ["Ṣàngó", "Sango"], // Yoruba
    ["Trường Đại học Quốc gia Hà Nội", "Truong Dai hoc Quoc gia Ha Noi"], // Vietnamese
    ["Tôi yêu tiếng Việt", "Toi yeu tieng Viet"], // Vietnamese
    ["Thành phố Hồ Chí Minh", "Thanh pho Ho Chi Minh"], // Vietnamese
    ["Đà Nẵng", "Da Nang"], // Vietnamese
    ["Cần Thơ", "Can Tho"], // Vietnamese
    ["Quảng Ninh", "Quang Ninh"], // Vietnamese
    ["Phú Quốc", "Phu Quoc"], // Vietnamese
    ["Huế", "Hue"], // Vietnamese
    ["Đắk Lắk", "Dak Lak"], // Vietnamese
    ["Sơn La", "Son La"], // Vietnamese
    ["Ốc đảo", "Oc dao"], // Vietnamese
    ["Guaraní", "Guarani"], // Guarani
];
