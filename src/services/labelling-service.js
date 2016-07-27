import React from 'react';
import { readCookie, createCookie } from '../utils/cookies';

export function getDefaultLanguage() {
  return Promise.resolve(
    readCookie('language')
  );
}

export function setDefaultLanguage(lang) {
  return Promise.resolve(
    createCookie('language', lang, 1000)
  );
}

export function loadLabelsData() {
  return Promise.resolve(
    {
      pl: {
        'about.watraMeansFire': 'Watra znaczy ogień',
        'about.description': <p>A dokładniej ognisko, przy którym zasiadały kiedyś pokolenia Łemków, śpiewając i
          rozmawiając w swoim
          ojczystym języku, snując marzenia o swojej przyszłości, w poczuciu wspólnoty szukając ukojenia po
          przykrych losach historii.<br/><br/>Dziś Watra ma zupełnie inny wymiar i znaczenie.<br/><br/>To ogień
          energii jaką emanuje młode pokolenie Łemków, będąc dumnym ze swojej kultury i chcąc pochwalić się nią
          przed innymi.<br/><br/>To ogień nadziei, jaka rodzi się w sercach starszych, że tożsamość, język i
          tradycja nie zaginie.<br/><br/>To ogień niosący ciepło w poczuciu więzi i jedności wśród malutkiego
          narodu, rozsianego po całym świecie.<br/><br/>To w końcu ogień folku w nowoczesnym i tradycyjnym ujęciu -
          muzyki, dzięki której wszyscy mówią wspólnym głosem.<br/><br/>Watra w Michałowie to 36-letni cykl imprez
          poświęconych tradycji i muzyce łemkowskiej, dających szansę na autoprezentację mniejszości, komunikację i
          wzmacnianie jej poczucia tożsamości kulturowej.<br/><br/>Ale Watra to nie jedynie manifest
          łemkowskości.<br/><br/>Kolejne edycje festiwalu przyjęły idee prezentacji nie tylko metamorfozy i
          kultywowania kultury łemkowskiej, ale szerzej kultury Rusińskiej z całej Europy i Świata.Ogromną
          popularnością cieszą się również koncerty zespołów prezentujących muzykę zupełnie innych obszarów
          etnicznych, takich jak serbski etno-punk czy muzykę klezmerską.A wszystko to w najnowocześniejszych
          aranżacjach wykonywanych na wysokim poziomie artystycznym.<br/><br/>Co roku w program Watry w Michałowie
          wpisują się też inne wydarzenia o zupełnie współczesnym charakterze.Tegorocznej edycji towarzyszyć będą warsztaty dla najmłodszych połączone z zabawą oraz uroczystość wręczenia
          statuetki Nikifora (Epifana Drowniaka) za zasługi dla kultury łemkowskiej.<br/><br/>Zapraszamy Was na Watrę w Michałowie, w podróż w poszukiwaniu ginącej w globalnym
          świecie etnicznej różnorodności!</p>,
        'artist.lemkobluegrassband.name': 'Lemko bluegrass band',
        'artist.lemkobluegrassband.description': 'Twórczość lwowskiego projektu Lemko Bluegrass Band to połączenie ukraińskiego i ' +
        'amerykańskiego folku i muzyki popularnej. Karpackie boogie, łemkowski bluegrass, huculski blues i ' +
        'kowbojskie przyśpiewki – wszystko to gwarantuje LBB w niepowtarzalnym akustycznym wykonaniu.Muzycy ' +
        'LBB na scenie folkowej i rockowej występują nie od dziś; to członkowie lwowskich zespołów, takich ' +
        'jak: Burdon, Ludy dobri oraz Hycz Orkestra. Mimo młodego wieku, koncertowali na scenach europejskich i ' +
        'amerykańskich, a swoje zagraniczne podróże wykorzystują jako inspirację, wplatając nowe dźwięki i ' +
        'tradycje w muzykę karpacką.',
        'artist.lemkobluegrassband.location': 'Lwów / Ukraina',
        'artist.hrdza.name': 'Hrdza',
        'artist.hrdza.description': 'Hrdza została założona w 1999 roku z inicjatywy Sławomira Gibartiego i Jarosławy Sysakowej w Priaszowie na Słowacji. Hrdza przetwarza środkowo-europejski folklor do nowoczesnego stylu grania, który można sklasyfikować jak folk, ethnic fusion, world fusion, albo – bardzo ogólnikowo – world music. Ciekawe wokale i efektywne melodię, wyłołują zaciekawienie każdej publiki. Na Łemkowskiej Watrze w Michałowie grupa zaprezentuje nowy program ze znaną łemkowskiemu środowisku śpiewaczką - Susanna Jarą. Nowy projekt to ich własne aranżacje, jak też pare tradycyjnych po słowacku, rusińsku, polsku, ukraińsku czy rosyjsku. Zespół planuje wydać specjalny album tylko w rusińskim języku. Na ich tegorocznej płycie ”Hrdzava osemnástka”, znajdziecie 18 utworów, które zostały nagrane z muzykami, biorącymi gościnnie udział w projekcie. Na płycie znajduje się nawet jeden utwór po rusińsku.',
        'artist.hrdza.location': 'Hendrichovce / Słowacja',
        'artist.krambabula.name': 'Krambabula',
        'artist.krambabula.description': 'KRAMBABULA to folk-rockowy zespół z Poznania, który powstał w 2014r z inicjatywy Piotra ' +
        'Czuchty, akordeonisty oraz lidera grupy.Zestawienie kulturowej różnorodności członków zespołu, ' +
        'stworzyło energetyczną mieszankę słowiańskiej muzyki ludowej, z domieszką rocka, ska, reggae i funky. ' +
        'Teksty wykonywanych utworów prezentowane są w języku łemkowskim, ukraińskim oraz polskim. Każdy ' +
        'członek grupy wnosząc swoją osobowość kształtuje muzykę zespołu KRAMBABULA :)',
        'artist.krambabula.location': 'Poznań / Polska',
        'artist.teroczka.name': 'Teroczka',
        'artist.teroczka.description': 'Łemkowski zespół muzyczny TEROCZKA działa przy Stowarzyszeniu Ruska Bursa w Gorlicach. ' +
        'Założony w 2010 roku przez Andrzeja i Halinę Małeckich. Na początku były to dzieci i młodzież, które ' +
        'razem z zespołem dorastały (i niektórzy już dorośli) ucząc się łemkowskich pieśni (ludowych i autorskich), ' +
        'języka i kultury. Prowadzone zajęcia zawierają elementy nauki śpiewu, rytmiki, tańca, plastyki, rozwijają ' +
        'kreatywność oraz wyobraźnię, spotkania te służą również integracji. Zespół koncertował m.in. na Łemkowskiej ' +
        'Watrze w Michałowie (woj. Dolnośląskie), „Od Rusal do Jana" w Zyndranowej, Biennele Kultury ' +
        'Łemkowskiej/Rusińskiej w Krynicy, Teatrze Słowackiego w Krakowie, Katowicach, Svidniku; przede ' +
        'wszystkim uświetnia imprezy Ruskiej Bursy w Gorlicach. Kierownik artystyczny: 2010- wrzesień ' +
        '2011 - Andrzej Małecki, wrzesień 2011-2012 - Susanna Jara, 2013 - Sławomir Trochanowski, 2014 do ' +
        'teraz - Andrzej Trochanowski.',
        'artist.teroczka.location': 'Gorlice / Polska',
        'artist.zoria.name': 'Zoria',
        'artist.zoria.description': 'Zoria jest mieszanym chórem czterogłosowym działającym w Ujściu Gorlickim od 2004 ' +
        'roku pod kierownictwem Anny Dubec. Chór składa się z młodych pasjonatów śpiewu z powiatów gorlickiego i ' +
        'nowosądeckiego. Poprzez swoją działalność Zoria kultywuje regionalne tradycje wykonując pieśni ' +
        'łemkowskie i pogórzańskie. Chór ten bierze udział w wielu festiwalach na terenie województwa ' +
        'małopolskiego Polski i Słowacji. Chór w swoim dorobku może pochwalić się albumem nagranym w 2007 ' +
        'roku pt. Tradycyjne pieśni Łemków i Pogórzan.',
        'artist.zoria.location': 'Uście Gorlickie / Polska',
        'artist.lastiwoczka.name': 'Lastiwoczka',
        'artist.lastiwoczka.description': 'Lastiwoczka została założona w roku 2000 przez członków Koła ' +
        'Stowarzyszenia Łemków w Przemkowie. Na początku do zespołu należało zaledwie kilka osób i w repertuarze ' +
        'znajdowały się tylko pieśni łemkowskie. Przywiązanie Łemków do swojej kultury i chęć obcowania z nią ' +
        'sprawiły, że zespół ten liczy obecnie ponad czterdziestu członków w różnym wieku, zaczynając od szkoły ' +
        'podstawowej, a kończąc na studentach. Najważniejszym zadaniem Lastiwoczki jest kultywowanie i ' +
        'rozpowszechnianie kultury łemkowskiej. Zespół ma za sobą udział w wielu festiwalach folklorystycznych w ' +
        'Europie. ZPiT Lastiwoczka dzieli się na grupę wokalną, taneczną i kapelę. Poza wyjazdami na festiwale ' +
        'Lastiwoczka jest gospodarzem corocznego wydarzenia organizowanego przez Stowarzyszenie Łemkowów Spotkanie ' +
        'Trzech Pokoleń. Patronat nad Zespołem sprawuje nadal Koło Stowarzyszenia Łemków w Przemkowie.',
        'artist.lastiwoczka.location': 'Przemków / Polska',
        'artist.kyczerka.name': 'Kyczerka',
        'artist.kyczerka.description': 'Kyczerka jest dziecięcą grupą ŁZPiT Kyczera utworzoną w 2004 roku. ' +
        'W ramach działalności Kyczerki dzieci uczą się tradycyjnych pieśni, tańców i zabaw dziecięcych z ' +
        'Łemkowyny. Swój dorobek Kyczerka miała okazję prezentować na łemkowskich watrach i festiwalach w ' +
        'Polsce i na Słowacji. Obecnie do zespołu należy ponad 30 dzieci.',
        'artist.kyczerka.location': 'Legnica / Polska',
        'artist.rekarpaty.name': 'RE-Karpaty Project',
        'artist.rekarpaty.description': 'RЕ-Karpaty to nowy projekt powstały w marcu tego roku w Nysie, w ' +
        'środowisku studentów Instytutu Jazzu. Inspiracjami muzyków są piękne, tradycyjne melodie z ' +
        'rejonu Karpatów, które w połączeniu z alternatywnymi harmoniami i rytmem dają w efekcie świeżą, ' +
        'ethno-jazzową mieszankę. Zespół ma już na swoim koncie sukces: I miejsce w konkursie ATA 2016 ' +
        '(Aneks Twórczości Artystycznej) w Namysłowie.',
        'artist.rekarpaty.location': 'Gorzów / Polska',
        'artist.romba.name': 'Romba',
        'artist.romba.description': 'Poprzez przypadkowe spotkanie klezmerskich i bałkańskich muzyków na praskiej ' +
        'ulicy w 2011 powstała kapela „Romba”. Po romsko-bałkańskich początkach, przez muzykę Moraw i Słowacji ' +
        'repertuar zespołu powiększał się coraz bardziej o muzykę słowiańską. W wykonaniu „Rombu” usłyszeć można ' +
        'piosenki polskie, rosyjskie, ukraińskie czy Rusińskie. Z czasem repertuar kapeli się zmieniał i coraz ' +
        'więcej można usłyszeć czardaszy i tanga, które członkowie zespołu uwielbiają. ',
        'artist.romba.location': 'Praga / Czechy',
        'artist.kyczera.name': 'Kyczera',
        'artist.kyczera.description': 'ŁZPiT Kyczera założony został w 1991 roku przez Jerzego Starzyńskiego w Legnicy. Członkami zespołu jest młodzież łemkowska głównie z Dolnego Śląska. Jako jedyny zespół mniejszości etnicznej w Polsce Kyczera jest członkiem CIOFF. W ramach programu prezentowanego przez Zespół znajdują się tańce i pieśni ze wszystkich obszarów Łemkowyny, Preszowszczyzny i Zakarpacia. W repertuarze Kyczery znaleźć można tańce stylizowane jak i obrzędy łemkowskie. Ogromy wkład i wysoki poziom realizowanych przez Kyczerę zadań potwierdzają liczne nagrody otrzymane przez Zespół na przestrzeni lat.',
        'artist.kyczera.location': 'Legnica / Polska',
        'artist.demaj.name': 'Demaj',
        'artist.demaj.description': 'Demaj - pierwotnie Axel – jeden z wiodących zespołów łemkowskich, założony przez ' +
        'Henryka Demaja w 1990 roku. Członkowie zespołu niezmiennie od 25 lat tworzą nowe aranże dla ' +
        'tradycyjnych pieśni łemkowskich',
        'artist.demaj.location': 'Gromadka / Polska',
        'artist.soneczka.name': 'Soneczka',
        'artist.soneczka.description': 'Soneczka to dziecięcy zespół folklorystyczny działający od 2011 roku. Członkami zespołu ' +
        'są dzieci w wieku 4-16 lat z parafii greckokatolickiej pw. Narodzenia Św. Jana Chrzciciela w Zamienicach ' +
        '(gm. Chojnów).',
        'artist.soneczka.location': 'Zamienice / Polska',
        'artist.roztoka.name': 'Roztoka',
        'artist.roztoka.description': 'Zespół powstał w styczniu 2008 r. z inicjatywy społeczności łemkowskiej zamieszkującej ' +
        'gminę Rudna. Patronat nad zespołem sprawuje od początku istnienia centrum kultury w Rudnej',
        'artist.roztoka.location': 'Rudna / Polska',
        'artist.latajacydywan.name': 'Latający dywan',
        'artist.latajacydywan.description': 'Sami o sobie mówią: ”Żeglujemy baśniowym statkiem poezji ponad burzliwym oceanem ' +
        'dzisiejszego świata. Chcielibyśmy zabrać Was w podróż, oderwać na chwilę od codzienności. ' +
        'Na Latającym Dywanie znajdzie się miejsce dla każdego, kto jest w stanie uwierzyć w baśnie, ' +
        'dostrzec bogactwa na pierwszy rzut oka niedostrzegalne, odnaleźć cele i idee na pozór nieosiągalne.' +
        'Starsi i młodsi, panie i panowie, wszyscy pochłonięci  wspólną pasją grania i śpiewania.' +
        'Różnorodność – to właśnie jest ich siłą!',
        'artist.latajacydywan.location': 'Milanówek / Polska',
        'artist.barvinok.name': 'Barvinok',
        'artist.barvinok.description': 'Zespół Pieśni i Tańca Barvinok powstał w 1952 roku w Kamionce na Słowacji. ' +
        'Zespół liczy 52 osoby, a w jego skład wchodzi grupa wokalna: żeńska i męska, grupa taneczna i ' +
        'kapela. Celem działania zespołu jest promocja i kultywowanie kultury rusińskiej poprzez śpiew i ' +
        'taniec. Artyści to młodzi ludzie, najczęściej z Kamionki lub okolic, dla których przekazywanie ' +
        'tradycji ich przodków jest ważną częścią ich życia.',
        'artist.barvinok.location': 'Kamionka / Słowacja',
        'artist.wodohraj.name': 'Wodohraj',
        'artist.wodohraj.description': 'Zespół Wodohraj powstał w 1975 roku w Lubinie.W ciągu 40 lat swojej ' +
        'działalności poprzez muzykę pielęgnował tradycje i kulturę  Łemków. Zespół wykonuje muzykę rozrywkową ' +
        'opartą o folklor łemkowski i ukraiński w aranżacjach nadających im nowoczesnego  brzmienia. Muzyka jest ' +
        'łatwa w odbiorze, rytmiczna , melodyjna doskonała do słuchania i zabawy.',
        'artist.wodohraj.location': 'Przemków / Polska',
        'artist.fajnaferajna.name': 'Fajna Ferajna',
        'artist.fajnaferajna.description': 'Fajna Ferajna to kilkunastoosobowa grupa młodych ludzi z Wiechlic, ' +
        'grających muzykę folkową. W poszukiwaniu twórczych inspiracji zespół sięga do  polskiej i łemkowskiej  ' +
        'muzyki ludowej. Fajna Ferajna ma na swoim koncie  sukcesy na szczeblu ogólnopolskim i międzynarodowym, m. ' +
        'in. dwukrotnie zwycięstwo na Międzynarodowym Festiwalu Kolęd i Pastorałek w Będzinie, I miejsce na ' +
        'Ogólnopolskim Festiwalu Piosenki Ekologicznej w Legnicy,  Ogólnopolskich Spotkaniach z Piosenką Żeglarską ' +
        'i Turystyczną w Żaganiu. Zespół reprezentował kraj na Polsko-Niemieckich Targach Młodzieży JUNG LIVE we ' +
        'Frankfurcie nad Odrą a także brał udział w obchodach 60 rocznicy akcji „Wisła” w Kijowie.',
        'artist.fajnaferajna.location': '',
        'contact.form': 'Formularz',
        'contact.email': 'Email',
        'contact.message': 'Wiadomość',
        'contact.messageSent': 'Wiadomość wysłana',
        'contact.send': 'Wyślij',
        'contact.error.mandatoryField': 'To pole jest obowiązkowe',
        'contact.error.incorrectEmail': 'Niepoprawny email',
        'day.friday': 'Pątek',
        'day.saturday': 'Sobota',
        'home.childsStage.title': 'Scena dziecięca',
        'home.childsStage.description': 'W tym roku wszystkie dzieci zapraszamy na SWOJĄ scenę.W programie sceny:- lepienie garnuszków z gliny- malowanie- nauka łemkowskich liter "na wesoło"- i wszystko inne czego dzieci zapragną ;) Startujemy w sobotę o godz. 14.00. Szukajcie nas na watrowisku pod gruszą.',
        'info.location.description': 'Łemkowska Watra na Obczyźnie co roku odbywa się w miejscowości Michałów – ' +
        'wieś w Polsce położona w województwie dolnośląskim, w powiecie polkowickim, w gminie Chocianów.',
        'info.terms.description': '',
        'info.pricing.description': <p>
          I. NORMALNE
          <br/>
          <br/>
          - zakupiony w kasie w dniu Watry - 35 zł.
          <br/>
          - zakupiony w przedsprzedaży - 30 zł.
          <br/>
          <br/>
          II. ULGOWE (młodzież szkolna powyżej 13 lat, studenci studiów dziennych)
          <br/>
          <br/>
          - zakupiony w kasie w dniu Watry - 25 zł.
          <br/>
          - zakupiony w przedsprzedaży - 20 zł .
          <br/>
          <br/>
          III. BEZPŁATNIE
          <br/>
          <br/>
          - Dzieci do lat 13-tu oraz dorośli powyżej lat 70-ciu ( po okazaniu stosownego dokumentu ze zdjęciem )
          <br/>
          <br/>
          IV. OPŁATA ZA NAMIOT
          <br/>
          <br/>
          - w tym roku nie pobieramy opłaty za namiot - 0zł.
          <br/>
          <br/>
          Bilety można zakupić w kasach przed watrowiskiem.
        </p>,
        'info.parking.description': 'Zakup miejsca parkingowego jest możliwy tylko w kasie Watry w dniu Watry - 10 zł (za jeden samochód osobowy)',
        'info.accommodation.description': <p>
          Na chwilę obecną każdy uczestnik Watry ma możliwość do skorzystania z darmowego monitorowanego przez
          ochronę pola namiotowego na terenie imprezy z dostępem do wody i toalet.
          <br/>
          Jednocześnie zachęcamy wszystkich chętnych na udzielenie schronienia dla watrowiczów na czas trwania
          Watry do zgłoszenia się do organizatorów imprezy pisząc na e-mail <a href="mailto:info@watramichalow.pl">info @watramichalow.pl</a>
          i podając swoje warunki uczestnictwa w tym projekcie.
          <br/>
          Zapraszamy do kontaktu zarówno osoby prywatne jak i właścicieli gospodarstw agroturystycznych czy
          schronisk, akademików i moteli lub hoteli.
        </p>,
        'info.financialSettlement.description': '',
        'info.cooperation.description': '',
        'info.takePart.description': <p>
          Jeśli masz pomysł i możliwości na czynny udział w Łemkowskiej Watrze na Obczyźnie w Michałowie, promocję
          kultury łemkowskiej i rusinskiej oraz urozmaicenie programu Łemkowskiej Watry to zgłoś się do organizatorów
          pisząc e-mail <a href="mailto:info@watramichalow.pl">info @watramichalow.pl</a>.
          <br/>
          Niniejsza propozycja jest skierowana do osób indywidualnych oraz grup zorganizaowanych czy też do osób
          prywatnych oraz firm, instytucji i stowarzyszeń.
          <br/>
          np.: zespoły piesni i tańca, grupy taneczne lub wokalne, solisci, kabarety, akrobaci i inni artysci gotowi do
          występu w plenerze pod zadaszoną sceną o dowolnej porze dnia i nocy przed kilkutysięczną publicznością.
          <br/>
          np.: wystawcy i sprzedawcy rękodzieła, sprzedawcy książek, płyt, kaset, gadżetów o tematyce
          łemkowsko-rusinskiej, malarze, rysownicy, rzeźbiarze,
          <br/>
          np.: firmy zajmujące się obsługą imprez masowych tj.catering, mobilne place zabaw, ochrona fizyczna,
          noclegownie, transport.
          <br/>
          Oraz wszyscy inni którzy mają ciekawy pomysł.
        </p>,
        'mainMenu.home': 'Strona główna',
        'mainMenu.about': 'O watrze',
        'mainMenu.artists': 'Wykonawcy',
        'mainMenu.programme': 'Program',
        'mainMenu.info': 'Informacje',
        'mainMenu.info.location': 'Lokalizacja',
        'mainMenu.info.terms': 'Regulamin',
        'mainMenu.info.pricing': 'Cennik biletów',
        'mainMenu.info.parking': 'Parking',
        'mainMenu.info.accommodation': 'Baza noclegowa',
        'mainMenu.info.financialSettlement': 'Rozliczenia finansowe',
        'mainMenu.info.cooperation': 'Oferta współpracy',
        'mainMenu.info.takePart': 'Zgłoś swój udział',
        'mainMenu.gallery': 'Galeria',
        'mainMenu.contact': 'Kontakt',
        'more': 'Więcej',
        'hour': 'godz.',
        'programme.kids.title': 'Występy dzieci',
        'programme.kids.description': 'Śpiew i recytacja',
        'programme.floralTribute.title': 'Złożenie kwiatów',
        'programme.floralTribute.description': 'Złożenie kwiatów pod tablicą upamiętniającą przesiedlenie Łemków w 1947 roku',
        'programme.starting.title': 'Rozpoczęcie XXXVI Watry',
        'programme.starting.description': 'Oficjalne powitanie gości, przez organizatorów i rozpoczęcie XXXVI Łemkowskiej Watry na Obczyźnie - Michałów 2016.',
        'programme.nikifor.title': 'Gala wręczenia statuetki Nikifora',
        'programme.nikifor.description': 'Wręczenie nagrody Nikifora.',
        'programme.break.title': 'Przerwa',
        'programme.break.description': 'Przerwa w programie sceny głównej',
        'lemkoWatra': 'Łemkowska Watra',
        'year': 'Rok'
      },
      lem: {
        'about.watraMeansFire': 'ВАТРА ЗНАЧЫТ ОГЕН',
        'about.description': <p>А в дрібницях огниско, при котрым засідали колиси поколиня Лемків, співаючы і бесідуючы
          всвоім
          рідным языку, мріючы про свою будучніст, в почутю спільноти глядаючы вытишыня поприкрі долі
          істориі.<br/><br/>Гнеска Ватра ма чысто інчый вымір і сымволіку.<br/><br/>То оген енерґіі, котром еманує
          молоде поколіня Лемків, котре гордит ся свойом культуром іхоче похвалити ся ньом пред інчыма.<br/><br/>То
          оген надіі, котра родит ся в серцях старшых, на тото же достоменніст, язык, традиция ікультура не
          загыне.<br/><br/>То оген, котрий несе тепло в почутю звязку і єдности серед маціцького народу, розсіяного
          посвіті.<br/><br/>То в кінци оген фольку в модерным і традицийным унятю – музыкы, дякуючы котрі
          вшыткыбесідуют єдным голосом.<br/><br/>Ватра в Михалові то 36-літній цикль імпрез посвяченых традициі і
          лемківскій музыці, котрыдают шансу на автопрезнтацию меншыны, комунікацию і зміцніня єй почутя
          культуровойдостоменности.<br/><br/>Але Ватра, то не лем маніфест лемківскости.<br/><br/>Наступуючы по собі
          едициі фестівалю приняли ідею презентациі не лем метаморфозы ікультивуваня лемківской традициі, але шырше
          русиньской культуры з цілой Європы і Світа.Великом популярністю тішат ся тіж концерти ансамблів
          презентуючых музыку чысто іншыхетнічных груп, такых як сербскій етно-панк, ци клезмерску музыку.А вшытко
          тото в найбаржемодерных аранжациях выконаных на барз высокым артистычным рівни.<br/><br/>Запрашаме Вас на
          Ватру до Михалова, в подорож в часі котрой найдете гынучу в ґльобальнымсвіті етнічну ріжнородніст.</p>,
        'artist.lemkobluegrassband.name': 'Lemko bluegrass band',
        'artist.lemkobluegrassband.description': 'Ансамбль Lemko Bluegrass Band то група, яка одкликує ся до істориі ' +
        'еміґрантів з Галичыны, котры в минулим столітю плынули за велику млаку глядати ліпшого жытя. Серед ' +
        'галицкых вандрівників находили ся тіж Русины з Лемковины, што переложыло ся на репертуар групы. ' +
        'ЛББ презентує выміну – варияцию карпатской музыкы з музыком Америкы – кантри. В своім проґрамі мают ' +
        'пару лемківскых пісен, котры переробили во власных ориґінальных аранжациях.',
        'artist.lemkobluegrassband.location': 'Львів / Україна',
        'artist.hrdza.name': 'Hrdza',
        'artist.hrdza.description': 'Ансамбль Грдза был оснований в 1999 році з ініциятывы Славомира Ґібарті і Ярославы Сисаковой в центрі Пряшівской Руси - Пряшові. «Грдза» перетворює середньоевропейскій фольклор до модерного виду, котрий мож называти як фольк, worldbeat, ethnic fusion, world fusion, або – барз загальні – world music. Файны вокалі і ефектовны мелодиі выкликуют захопліня каждой публикы. На Лемківскій Ватрі в Михалові ґрупа запрезентує новий проґрам з шумном співачком Сусанном Яром, котрий находит в собі іх властны аранжациі, як тіж пару традицийных в словацкым, русиньскым, польскым, украіньскым та росийскым языках. Ансамбль рыхтує печатати специяльний альбом лем по русиньскы. На іх тогорічным кружку «Hrdzava osemnástka», найдете 18 співанок, заграных вєдно з інчыма музыками, котрий взяли участ гостинні в проєкті. На самій платни находит ся і єден твір по русиньскы.',
        'artist.hrdza.location': <p>&nbsp; </p>,
        'artist.krambabula.name': 'Крамбабула',
        'artist.krambabula.description': 'Крамбабула то фольково-роковий ансамбль з Познаня, котрий был ' +
        'онсований в 2014 році з ініциятывы Петра Чухты, акордеоністы та лідера групы. Сопоставліня ' +
        'культуровой ріжнородности членів ансамблю, створило енерґентичну мішанку славяньской музыкы, з ' +
        'мішанком рока, реґе і фанки. Тексты співаных творів сут презентуваны в лемківскым, украіньскым та ' +
        'польскым языках.',
        'artist.krambabula.location': <p>&nbsp; </p>,
        'artist.teroczka.name': 'ТЕРОЧКА',
        'artist.teroczka.description': 'Дітячий ансамбль ТЕРОЧКА діє при Стоваришыню Руска Бурса в Ґорлицях. ' +
        'Oснований в 2010 р. през Андрия і Галіну Малецкых. Діти і молодіж приходят до Руской Бурсы, ' +
        'вчат ся лемківскых пісні (народных і авторскых), языка, культуры. Ведены занятя мают елементы ' +
        'наукы співу, рытмікы, танця, плястыкы, розвивают креатывніст і выображыня. Тоты стрічы служат ' +
        'тіж інтеґрациі. Aнсамбль концертувал м.ін. на Лемківскій Ватрі в Михалові, на імпрезі „Од Русаль до Яна” ' +
        'в Зындранові, на Бєналях в Креници, Катовицях, Театрі Словацкого в Кракові і інчых. Головні єднак украшат ' +
        'імпрезы Руской Бурсы, котра по вельох роках перервы зас звучыт лемківскых діти.' +
        'Керівник артистичний 2010-2011 вересень Андрій Маелцкій Керівник артистичний 2011 вересень - 2012 ' +
        'Сусанна Яра Керівник артистичний 2013 Славомир Трохановскій',
        'artist.teroczka.location': <p>&nbsp; </p>,
        'artist.zoria.name': 'ЗОРЯ',
        'artist.zoria.description': 'Зоря то мішаний штырйоголосовий хір якій під кєровництвом Анны Дильонґ діє в ' +
        'Усьцю Ґорлицкым од 2004 рока. Хір творят молоды любителі сьпіву з повітів ґорлицкого і новосанчівского. ' +
        'Выконуючы пісьні лемківскы і поґужаньскы Зоря культивує реґіональны традициі. Хір каждого рока бере ' +
        'участ в фестівалях на терені Польщы і Словациі, в 2007 році Зоря награла платню під наголовком ' +
        '„Зоря не лем на небі”.',
        'artist.zoria.location': 'УСЬЦЯ ҐОРЛИЦКЄ/ПОЛЬЩА',
        'artist.lastiwoczka.name': 'ЛАСТІВОЧКА',
        'artist.lastiwoczka.description': 'Ластівочка была основана в 2000 році членами Кружка Стоваришыня ' +
        'Лемків в Пшемкові. На початку до ансамблю належало лем пару осіб, а в репертуарі находили ся лем ' +
        'лемківскы співанкы. Привязаня Лемків до свойой культуры і потреба єй підтримуваня, довели до того, ' +
        'же днес членами ансамблю є понад сорок люди в ріжных віковых групах- од основной школы по студентів. ' +
        'Головном задачом Ластівочкы є культивуваня і розповсюджаня лемківской культуры. Ансамбль має уж за ' +
        'собом участ во вельох фолькльористичных фестівалях в Европі. Ластівочка ділит ся на групы: вокальну, ' +
        'танцювальну і капелю. Окрем выіздів на фестівалі, Ластівочка є тіж ґаздом орґанізуваных рік-по-рік ' +
        'Стоваришыньом Лемків «Стріч Трьох Поколінь». Опіку над ансамбльом справує далі Кружок Стоваришыня ' +
        'Лемків в Пшемкові. Того рока ансамбль отримал цертифікат ЦІОФФ.',
        'artist.lastiwoczka.location': 'ПШЕМКIВ/ПОЛЬЩА',
        'artist.kyczerka.name': 'КЫЧЕРКА',
        'artist.kyczerka.description': 'Лемківскій Ансамбль Пісьні і Танця Кычера был оснований в 1991 році в ' +
        'Ліґници через Юрия Стариньского. Члены ансамблю то молодіж головні з Нижнього Шлезка. Кычера через ' +
        'пару каденций была членом ЦІОФФ. В рамках проґраму презентуваного ансамбльом находят ся танці і ' +
        'співанкы з цілой обшыри Лемковины, Пряшівской Руси та Підкарпатской Руси. В репертуарі Кычеры мож ' +
        'найти стилізуваны лемківскы танці і обряды. Великій труд вложений в опрацуваня репертуару і высокій ' +
        'рівен реалізуваных Кычером задач потверджают чысленны нагороды якыма ансамбль был гоноруваний на ' +
        'просторі вшыткых років свойой діяльности.',
        'artist.kyczerka.location': 'ЛІҐНИЦЯ/ПОЛЬЩА',
        'artist.rekarpaty.name': 'RE-Karpaty Project',
        'artist.rekarpaty.description': 'RЕ-Karpaty то новий проєкт оснований в марци того рока в Нисі на ' +
        'Чужыні, в середовиску студентів Інституту Джезу. Інсірациями музыків, сут красны, традицийны мелодиі з ' +
        'обшыри Карпат, котры в получыню з альтернативныма гармоніями та рытмом дают в ефекті свіжу, етно-джазову ' +
        'мішанку/ Ансамбль має уж на єден успіх: І місце в конкурсі ATA 2016 (Анекс Артистычной Творчости) в ' +
        'Намислові.',
        'artist.rekarpaty.location': <p>&nbsp; </p>,
        'artist.romba.name': 'Romba',
        'artist.romba.description': 'Перез припадкову стрічу кльезмерскыx і балканьскыx музыкантів на празкій ульиці в вересни 2011 рока оснувана остала капела "Ромба". По ромско-балканьскыx початкаx перез музыку Морав і Словациі репертуар капелі повекшал ся штораз барже о словяньску музыку. В виконаню "Ромбы" прозвучат тіж польскы, росийскы, украіньскы, ци русиньскы співанкы. З часом репертуар капелі ся кус мінял і штораз веце мож было почути чардашовыx ритмів і танґа, котры сут винятково любены членами ансамблю.',
        'artist.romba.location': 'Praga / Czechy',
        'artist.kyczera.name': 'КЫЧЕРА',
        'artist.kyczera.description': 'Лемківскій Ансамбль Пісьні і Танця „Кычера” был оснований в 1991році в ' +
        'Ліґници перез Юрка Стариньского. Члены ансамблю то молодіж головні з Дольного Шлезка. Кычера то єдиний ' +
        'ансамбль посеред тых, котры репрезентуют етнічны меншыны в Польщи, якій є членом CIOFF. В рамках програмы ' +
        'презентуваной перез ансамбль находят ся танці і сьпіванкы з цілой обшыри Лемковины, Пряшівской Руси і ' +
        'Закарпатя. В репертуарі Кычеры мож найти стилізуваны лемківскы танці і обряды. Великій труд вложений в ' +
        'опрацуваня репертуару і высокій рівен реалізуваных перез Кычеру задач потверджают чысленны нагороды ' +
        'якыма ансамбль был гоноруваний на просторі вшыткых років свойой діяльности.',
        'artist.kyczera.location': 'ЛІҐНИЦЯ / ПОЛЬЩА',
        'artist.demaj.name': 'ДЕМАЙ',
        'artist.demaj.description': 'Демай - давнійше Аксель - єден з першых лемківскых весільных і ' +
        'забавовых ансамблів. Был оснований через Генрика Демая в 1990 році. Члены групы незмінні од ' +
        '25 років творят новы аранжациі для традицийных лемківскых піснен. В аснамблю од шестьох років ' +
        'выступуют: Генрик Демай: спів, акордеон, Катерина Демай: спів, Гриц Соколовскій: спів, ґітара.',
        'artist.demaj.location': <p>&nbsp; </p>,
        'artist.soneczka.name': 'Сонечка',
        'artist.soneczka.description': 'Сонечка то дітячий ансамбль діючий од 2011 рока. Членами групы сут ' +
        'діти в віку од 4 до 16 років з грекокатолицкой парохіi покровы Народжыня св. Йоана ' +
        'Крестителя в Заменицях.',
        'artist.soneczka.location': <p>&nbsp; </p>,
        'artist.roztoka.name': 'Roztoka',
        'artist.roztoka.description': 'Є то ґрупа, кота являт ся єдином днес фунґуючом на териториі ' +
        'любіньского повіту, котра презентує фольклор з рідной Лемковины. Ансамбль чыслит 22 співаків ' +
        '(головні жены) та 4-особову капелю. Артисты, окрем знаных лемківскых пісен, мают в репертуарі творы з ' +
        'украіньского, словацкого і польского фольклору. Стараньом Центру Культуры в Рудній, ансамбль купил в ' +
        '2011 році традицийны лемківскы кроі, в котрых презентує ся не лем на лемківскых подіях. Ведучым ' +
        'Розтокы є Владимір Зорило.',
        'artist.roztoka.location': <p>&nbsp; </p>,
        'artist.latajacydywan.name': 'Літаючий диван',
        'artist.latajacydywan.description': 'Самы про себе бесідуют: «Жеґлюєме басньовым шыфом поезиі понад ' +
        'захмареным океаном днешнього світа. Маме дяку взяти Вас на прогульку, одорвати на момент од штоденности. ' +
        'На літаючым дивані найде ся місце для каждого, xто єст в силі повірити в басні, достеречы одраз тото, што одраз достеречы не мож». Стары і молоды, xлопы і бабы, вшыткы захоплены спільном пасийом граня і співаня.Ріжнорідніст - то іx сила.',
        'artist.latajacydywan.location': <p>&nbsp; </p>,
        'artist.barvinok.name': 'Барвінок',
        'artist.barvinok.description': 'Ансамбль Пісні і Танця Барвінок был оснований в 1952 році в селі ' +
        'Камюнка на Пряшівскій Руси. Група рахує 52 особы, в котрой склад входят групы вокальна: жіноча і ' +
        'мужска; танцювальна, та капеля. Головном цілю діяня Ансамблю є промоция і культивуваня русиньской ' +
        'культуры через спів і танці. Члены то люде молоды, головні зо села Камюнка, але і околиц, для котрых ' +
        'переказуваня традициі іх предків є важном частином іх жытя.',
        'artist.barvinok.location': <p>&nbsp; </p>,
        'artist.wodohraj.name': 'Wodohraj',
        'artist.wodohraj.description': 'Ансамбль Водограй был оснований в 1975 році в Любіні. Протягом 40 років ' +
        'через музыку плекал традицию та культуры Лемків. Ансамбль выконує розрывкову музыку, котра є оперта ' +
        'на лемківскым та украіньскым фольклорах, в аранжациях надаючых ім модерного стилю. Музыка є рытмічна, ' +
        'мельодийна, в сам раз ґу доброму гуляню.',
        'artist.wodohraj.location': <p>&nbsp; </p>,
        'artist.fajnaferajna.name': 'Fajna Ferajna',
        'artist.fajnaferajna.description': 'Файна Ферайна то парунадцет особова група молодыx люди з Вєxліц ' +
        'граючыx фолькову музыку. Глядаючы музычныx інспіраций ансамбль користат з польской і лемківской ' +
        'народной музыкы. Файна Ферайна успішні презентувала ся на загальнопольскым і медженародным рівни м.ін. ' +
        'двараз перемогла на Медженародным Фестівалю Коляд і Пасторалок в Бендзіні, І місце на Загальнополскым ' +
        'Фестівалю Еколоґічной Співанкы в Ліґніци і на Загальнополскым Фестівалю зо Співанком Жеґларском і ' +
        'Туристычном в Жаґаню. Ансамбль репрезентувал державу на Польско-Німецкыx Торгаx Молодіжниx ЮНҐ ЛІВЕ в ' +
        'Франкфурті над Одром і брал участ в обоxодаx 60 річниці Акциі «Вісла» в Кыйові. Ансамбль є тіж ' +
        'помислодавцьом і орґанізатором соспільно-культурныx подій в реґіоні',
        'artist.fajnaferajna.location': <p>&nbsp; </p>,
        'contact.form': 'Формуляр',
        'contact.email': 'Емайль',
        'contact.message': 'Відоміст',
        'contact.messageSent': 'Відоміст wysłana',
        'contact.send': 'Вышлий',
        'contact.error.mandatoryField': 'Тото поле є обовязкове',
        'contact.error.incorrectEmail': 'Недобрий мейль',
        'day.friday': 'Пятниця',
        'day.saturday': 'Cубота',
        'home.childsStage.title': 'ДІТЯЧА СЦЕНА',
        'home.childsStage.description': 'В тым році вшыткы діти запрашаме на СВОЮ сцену. В програмі сцены: - ліпіня горців з глины - малюваня - ' +
        'наука лемківскых букв "на вeceлo" - і вшытко інче што діти cхотят ;)Стартуєме в суботу о 14.00. Глядайте нас на ватряным полю під грушком.',
        'info.location.description': 'Лемківска Ватра на Чужыні што рока проходит в Михалові – селі, котре находит ' +
        'ся в дольношлескым воєвідстві, в польковицкым повіті, в ґміні Хоцянів.',
        'info.terms.description': '',
        'info.pricing.description': <p>
          I. НОРМАЛЬНЫ
          <br/>
          <br/>
          - куплены в касі в ден Ватры – 35 зл.
          <br/>
          - куплены в предпродажы/скорше – 30 зл.
          <br/>
          <br/>
          II. ЗНИЖКОВЫ (шкільна молодеж выже 13 років, студенты стаціонарны)
          <br/>
          <br/>
          - куплены в касі в ден Ватры – 25 зл.
          <br/>
          - куплены в предпродажы/скорше – 20 зл.
          <br/>
          <br/>
          III. ДАРМО
          <br/>
          <br/>
          - Діти, котры не мают іщы 13 років і дорослы, котры мают веце як 70 років (по вказаню документу зо знимком).
          <br/>
          <br/>
          IV. ШАТРО 
          <br/>
          <br/>
          - В тым році не берене оплаты за шатро – 0 зл.
          <br/>
          <br/>
          Білеты вступу можна купити в касаx перед ватровиском.
        </p>,
        'info.parking.description': 'Купно паркінґового містя єст можливе лем в касі в ден Ватры – 10 зл. (за єдно особове авто)',
        'info.accommodation.description': <p>
          На гнешній ден каждий участник Ватры ма можливіст скористати з дармового моніторуваного през охорону
          шатрового поля, котре находит ся в рейоні імпрезы з доступом до воды і тоалет.
          <br/>
          Рівночасно заохочаме вшыткых, котры хотіли бы уділити Ватрянам схороніня на час тырваня імпрезы,
          жебы зголошали ся до орґанізаторів імпрезы.Пиште на мейля <a href="mailto:info@watramichalow.pl">info @watramichalow.pl</a>
          і подайте своі вымогы участництва в тым проєкті.
          <br/>
          До контакту запрашаме так прыватны особы як і властителів аґроґаздівок, схрониск, гуртожытків, мотелів і
          готелів.
        </p>,
        'info.financialSettlement.description': '',
        'info.cooperation.description': '',
        'info.takePart.description': <p>
          Коли маш думку і можніст брати чынну участ в Лемківскій Ватрі на Чужыні в Михалові, промоцию лемківской і
          русиньской культуры, як і збогатити і зріжницювати проґрам Лемківской Ватры зголос ся до орґанізаторів, напиш
          на меіля <a href="mailto:info@watramichalow.pl">info @watramichalow.pl</a>
          <br/>
          Тота пропозиция єст скєрувана до індывідуальных люди як і зорґанізуваных груп (до приватных осіб, фірм,
          інституций і стоваришынь).
        </p>,
        'mainMenu.home': 'ХЫЖА',
        'mainMenu.about': 'О ВАТРІ',
        'mainMenu.artists': 'ВЫКОНАВЦІ',
        'mainMenu.programme': 'ПРОҐРАМ',
        'mainMenu.info': 'ІНФОРМАЦИІ',
        'mainMenu.info.location': 'ЛЬОКАЛІЗАЦИЯ',
        'mainMenu.info.terms': 'РЕҐУЛЯМІН',
        'mainMenu.info.pricing': 'ЦІНЫ БІЛЕТІВ',
        'mainMenu.info.parking': 'ПАРКІНҐ',
        'mainMenu.info.accommodation': 'НІЧЛІГОВА БАЗА',
        'mainMenu.info.financialSettlement': 'ФІНАНСОВЕ РОЗЧЫСЛИНЯ',
        'mainMenu.info.cooperation': 'ОФЕРТA СПIВПРАЦЫ',
        'mainMenu.info.takePart': 'ЗГОЛОС СВOЮ УЧАСТ',
        'mainMenu.gallery': 'ҐАЛЕРИЯ',
        'mainMenu.contact': 'Контакт',
        'more': 'Bеце',
        'hour': 'г.',
        'programme.floralTribute.title': 'Зложыня квітя',
        'programme.floralTribute.description': 'Зложыня квітя під таблицьом, котра є упамятніньом злочыну выгнаня 1947 рока',
        'programme.kids.title': 'Występy dzieci',
        'programme.kids.description': 'Śpiew i recytacja',
        'programme.starting.title': 'Розпочатя XXXVI Ватры',
        'programme.starting.description': 'Розпочатя XXXVI Ватры. Офіцийне привитаня гостів през орґанізаторів і розпочатя XXXVI Лемківской Ватры на Чужыні – Михалів 2016.',
        'programme.nikifor.title': 'Вручыня нагороды Никыфора',
        'programme.nikifor.description': 'Вручыня нагороды Никыфора',
        'programme.break.title': 'Перерва',
        'programme.break.description': 'Перерва в проґрамі головной сцены',
        'lemkoWatra': 'Лемківска Ватра',
        'year': 'Рік'
      }
    }
  );
}
