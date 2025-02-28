/* naming schema:
pIndexDescription

p = page
c = component
l = lib

Index = Page name
Description = identifier

*/

const translations = {
  pIndexDescription:
    "Dwarfium stelt u in staat om de Dwarf II te bedienen met behulp van de Dwarf API",
  pIndexFeature: "Kenmerken",
  pIndexFeature1: "1. Objectenlijst met meer dan 850 objecten.",
  pIndexFeature2: "2. Importeer objectenlijsten van Telescopius.",
  pIndexFeature3: "3. Importeer mozaïeklijsten van Telescopius.",
  pIndexFeature4:
    "4. Verbind met de Stellarium planetarium app om doelen te selecteren.",
  pIndexFeature5: "5. Maak astrofoto's.",
  pIndexFeature6: "6. 1x1 binning voor astrofoto's.",
  pIndexClaimer:
    "Dwarfium en de Dwarf API bevinden zich in de bètafase. Nog niet alle functionaliteiten van de mobiele app zijn aanwezig. Gebruik deze app alleen als u vertrouwd bent met het testen van bètasoftware.",
  pIndexBugsHeader: "Bugs:",
  pIndexBug1: "Hier kunt u uw bevindingen versturen: ",
  pIndexBug2: "",
  pIndexBug3: "",
  pIndexLinkBug: `<a href="https://discord.gg/5vFWbsXDfv"> Op onze Discord-server </a>`,
  pCalendarTitle: "Astronomische kalender van hemelse gebeurtenissen",
  pCalendarYear: "Kalenderjaar",
  pAbout: "Over",
  pAboutInfo:
    "Het project is gestart door Wai-Yin Kwan met hulp van JC LESAINT. Deze website is een nevenproject om hun interesse in codering, astronomie en de Dwarf II API te combineren. Om bugs te melden of de originele code te bekijken, bezoek zijn ",
  pAboutDataCredit: "Gegevenscredits",
  pAboutDataCreditInfo:
    "De gegevens voor de objectenlijsten komen uit verschillende bronnen.",
  pAboutDataCreditDSO: "De gegevens over de DSO komen van ",
  pAboutDataCreditDSOAuth:
    "Dr. Michael Camilleri, Auckland Astronomical Society, Nieuw-Zeeland, heeft objectnamen en -maten verstrekt voor de DSO die 15 boogminuten of groter zijn.",
  pAboutDataCreditDSOStars: "De gegevens over de sterren komen van ",
  pAboutDataCreditVisual:
    "De gegevens over de visuele magnitude van planeten en de Maan komen van ",
  pAboutDataCreditConstellationData:
    "De gegevens over de sterrenbeelden komen van ",
  pAboutDataCreditJuypterThe: "De ",
  pAboutDataCreditJuypterText:
    "in het Github-repository toont de stappen die ik heb genomen om de ruwe gegevens om te zetten in de objectenlijsten.",
  pAboutDataCreditCode: "Deze site maakt gebruik van code van ",
  pAboutDataCreditCodeAnd: "en",
  pAboutDataCreditCodeAndText: "om astronomische berekeningen uit te voeren.",
  pAboutUserData: "Gebruikersgegevens",
  pAboutUserDataDesc:
    "De door gebruikers ingevoerde informatie wordt opgeslagen in de database van de browser (localStorage). Omdat de gegevens in uw browser zijn opgeslagen, kunnen andere gebruikers van de site uw gegevens niet openen. Dit betekent ook dat als een gebruiker meerdere browsers of apparaten gebruikt, de gegevens niet kunnen worden gesynchroniseerd tussen verschillende browsers of apparaten.",
  pAboutAdditional: "Extra Gegevensbronnen",
  pAboutAdditionalWeatherData: "Weergegevens worden opgehaald van ",
  pAboutAdditionalRSSData:
    "De RSS-feed voor deep sky-objecten wordt aangeleverd door ",
  pAboutAdditionalWitmotion: "Witmotion Sensor integratie gebaseerd op ",
  cWitmotionCamera: "Camera",
  cWitmotionAltitude: "Hoogte",
  cWitmotionPolaris1:
    "Richt de Dwarf II naar Polaris en pas de hoek aan om overeen te komen met je hoogte.",
  cWitmotionPolaris2: "Je zou Polaris in het midden van de camera moeten zien.",
  pFirstSteps: "Eerste Stap",
  pFirstStepsContent:
    "Gebruik de DwarfII mobiele app van Dwarf Labs om donkere frames te maken, de focus scherp te stellen en Goto te kalibreren.",
  pSetLocation: "Locatie instellen",
  pSetLocationContent:
    "Om Goto te laten werken, heeft deze site uw breedtegraad, lengtegraad en tijdzone nodig. De lengtegraad is negatief ten westen van Greenwich",
  pLatitude: "Breedtegraad",
  pLongitude: "Lengtegraad",
  pTimezone: "Tijdzone",
  pUseCurrentLocation: "Huidige Locatie",
  pEnableSTA: "Schakel STA-modus in op Dwarf II",
  pEnableSTAContent:
    "Om deze site verbinding te laten maken met de Dwarf II, moet de STA-modus op de Dwarf II zijn geconfigureerd en ingeschakeld.",
  pEnableSTAContent1:
    "Wanneer u de Dwarf voor het eerst gebruikt, heeft u de mobiele DwarfLab-app nodig om de verbinding tot stand te brengen. Vervolgens kunt u, zonder de Dwarf opnieuw op te starten, verbinding maken via de knop Bluetooth verbinden. De configuratie wordt vervolgens opgeslagen.",
  pEnableSTAContent2:
    "Vervolgens kunt u voor de volgende start van de Dwarf er rechtstreeks verbinding mee maken via Bluetooth, zonder de mobiele applicatie te gebruiken.",
  pEnableSTAContent3:
    "Klik op Verbinden. Deze site probeert via Bluetooth verbinding te maken met Dwarf II.",
  pBluetoothPWD: "Bluetooth PASWOORD",
  pConnect: "Verbinden",
  pConnectDwarfII: "Connecteer met de Dwarf II",
  pConnectDwarfIIContent:
    "Om deze site verbinding te laten maken met de Dwarf II, moeten zowel de Dwarf II als de website hetzelfde wifi-netwerk gebruiken.",
  pConnectDwarfIIContent1:
    "Na het opnieuw opstarten moet u eerst via Bluetooth verbinding maken met de DwarfII.",
  pConnectDwarfIIContent2:
    "Maak er vervolgens verbinding mee met de wifi-verbindingsknop. Dan hoeft u de app niet te gebruiken om te kalibreren, Goto te maken en een beeldsessie vanaf deze website te maken.",
  pConnectDwarfIIContent3:
    "Bezoek deze site op een apparaat dat is verbonden met hetzelfde wifi-netwerk als de Dwarf II.",
  pConnectDwarfIIContent4:
    "Voer het IP-adres in voor de Dwarf II. Als je Dwarf wifi gebruikt, is het IP-adres 192.168.88.1. Als u de STA-modus gebruikt, gebruik dan het IP-adres van uw wifi-netwerk.",
  pConnectDwarfIIContent5:
    "Klik op Verbinden. Deze site zal proberen verbinding te maken met Dwarf II.",
  pConnectDwarfIIContent6:
    "Als u het bericht ziet: => Go Live, heeft u een beeldsessie voltooid, ga naar de Camerapagina en klik op de Live-knop.",
  pConnectStellarium: "Maak verbinding met Stellarium",
  pConnectStellariumContent:
    "Om Stellarium te kunnen gebruiken, moeten we de Remote Control-plug-in instellen.",
  pConnectStellariumContent1: "Start Stellarium desktop app.",
  pConnectStellariumContent2: "Het begin van deze",
  pConnectStellariumContent2_1:
    " demonstreert het instellen van Stellarium's Remote Control-plug-in (0 tot 1:40); sla het gedeelte over NINA over. Klik op ' CORS inschakelen voor de volgende herkomst ' en typ ' * '.",
  pConnectStellariumContent3:
    "Voer het IP-adres en de poort in voor de Remote Control-plug-in en klik op ' Verbinden '. Deze site zal proberen verbinding te maken met Stellarium.",
  pIPAdress: "Ip-Adres",
  pPort: "Poort",
  cUnlockHost: "Ontgrendel de hostmodus",
  cLockHost: "Hostmodus vergrendelen",
  pConnectionSuccessFull: "Verbinding succesvol.",
  pConnecting: "Verbinden...",
  pConnectingFailed: "Verbinding mislukt!",
  cAstroSettingsInfoGain: "Gain",
  cAstroSettingsInfoGainDesc:
    "Gain is een digitale camerasetting die de versterking van het signaal van de camerasensor regelt. Het moet worden opgemerkt dat dit het hele signaal versterkt, inclusief eventueel bijbehorend achtergrondgeluid.",
  cAstroSettingsInfoExposure: "Belichting",
  cAstroSettingsInfoExposureDesc:
    "Tijd waarin de sensor aan licht wordt blootgesteld en informatie (energie) vastlegt",
  cAstroSettingsInfoIRPass: "IR (infrarood) - Doorgang",
  cAstroSettingsInfoIRPassDesc:
    "Hiermee kan de infraroodgolflengte de sensor bereiken. Verschillende astronomische objecten zenden in deze golflengte uit.",
  cAstroSettingsInfoIRCut: "IR (infrarood) - Uitschakelen",
  cAstroSettingsInfoIRCutDesc:
    "Blokkeert infraroodgolflengte. Nuttig voor maan- en planeetopnamen.",
  cAstroSettingsInfoBin1x1: "Binning - 1x1",
  cAstroSettingsInfoBin1x1Desc:
    "Camera legt licht vast op elk individueel fysiek pixel.",
  cAstroSettingsInfoBin2x2: "Binning - 2x2",
  cAstroSettingsInfoBin2x2Desc:
    "Camera combineert fysieke pixels in groepen van 2x2 (4 pixels) en beschouwt al het licht dat in de groep is vastgelegd als een enkel pixel. Kan worden beschouwd als een 'virtueel' pixel. Dit maakt de pixels groter en vermindert de resolutie met een factor gelijk aan de binning.",
  cAstroSettingsInfoFormatFITS: "Formaat - FITS",
  cAstroSettingsInfoFormatFITSDesc:
    "Astronomisch verliesloos numeriek bestandsformaat. Kan metadata van de afbeelding bevatten (coördinaten, camera, pixelgrootte binning, filter, enz.) die door verwerkingssoftware kunnen worden gebruikt.",
  cAstroSettingsInfoFormatTIFF: "Formaat - TIFF",
  cAstroSettingsInfoFormatTIFFDesc:
    "Een verliesloos bestandsformaat, maar niet specifiek gericht op astronomie.",
  cAstroSettingsInfoCount: "Tellen",
  cAstroSettingsInfoCountDesc: "Aantal afbeeldingen om te nemen",
  cAstroSettingsInfoBack: "Terug",
  cCameraAddOnPhoto: "Foto",
  cCameraAddOnVideo: "Video",
  cCameraAddOnPanorama: "Panorama",
  cCameraAddonTimeLapse: "Tijdsverloop",
  cCameraBurstSettingsCount: "Tellen",
  cCameraBurstSettingsinterval: "Interval",
  cCameraTitle: "Astro Photos",
  cCameraConnection: "Je moet verbinding maken met Dwarf II.",
  cCameraLocation: "Je moet je locatie instellen.",
  cCalibrationDwarfLights: "Lichten",
  cCalibrationDwarfRingOn: "Ring Aan",
  cCalibrationDwarfRingOff: "Ring Uit",
  cCalibrationDwarfPowerOn: "Stroom Aan",
  cCalibrationDwarfPowerOff: "Stroom Uit",
  cCalibrationDwarfTitle: "Kalibreer de Dwarf II",
  cCalibrationDwarfTitleDesc:
    "Om de Astro-functie te gebruiken, moet u eerst de Dwarf II kalibreren.",
  cCalibrationDwarfWarning: "WAARSCHUWING:",
  cCalibrationDwarfWarningDesc: "Plaats op dit moment niets op de lens.",
  CCalibrationDwarfCalibrate: "Kalibreren",
  cCalibrationDwarfStopGoto: "Stop Goto",
  cCalibrationDwarfSavePosition: "Positie opslaan",
  cCalibrationDwarfResetPosition: "Positie resetten",
  cCalibrationDwarfGoToPosition: "Ga naar positie",
  cCalibrationDwarfShutdown: "Uitschakelen!",
  cCalibrationDwarfReboot: "Herstarten!",
  cNavHome: "Home",
  cNavSetup: "Instellingen",
  cNavObjects: "Objecten",
  cNavCamera: "Camera",
  cNavSessionData: "Sessiegegevens",
  cNavWeather: "Weer",
  cNavClouds: "Wolken",
  cNavMoonphases: "Maanfasen",
  cNavAstronomyCalendar: "Astronomische kalender",
  cNavPolarAlignment: "Pooluitlijning",
  cNavAbout: "Over",
  cStatusBarExposure: "Belichting",
  cStatusBarIRFilter: "IR-filter",
  cStatusBarBinning: "Binning",
  cStatusBarCounter: "Teller",
  cStatusBarQuality: "Kwaliteit",
  cStatusBarTaken: "Genomen:",
  cStatusBarStacked: "Gestapeld:",
  cStatusBarTime: "Tijd:",
  cStatusBarCurTarget: "Huidige Doel:",
  cThemeSettingsTitle: "Thema-instellingen",
  cThemeSettingsFontSize: "Lettergrootte",
  cThemeSettingsColorTheme: "Kleurthema",
  cThemeSettingsLightTheme: "Licht Thema",
  cThemeSettingsDarkTheme: "Donker Thema",
  cThemeSettingsAstroTheme: "Astro Thema",
  cThemeSettingsUnderconstruction: "onder constructie",
  cThemeSettingsLanguage: "Taal",
  cThemeSettingsApply: "Toepassen",
  cWeatherInfoLastUpdate: "Laatst bijgewerkt:",
  cWeatherInfoMinTemp: "Min. Temperatuur:",
  cWeatherInfoMaxTemp: "Max. Temperatuur:",
  cWeatherInfoFeelsLike: "Voelt als:",
  cWeatherInfoHumidity: "Vochtigheid:",
  cWeatherInfoWind: "Wind:",
  cGoToListConnectStellarium:
    "U moet verbinding maken met Stellarium om het midden te laten werken.",
  cGoToListConnectDwarf:
    "U moet verbinding maken met Dwarf II om Goto te laten werken.",
  cGoToListdefault: "Selecteer objectlijsten",
  cGotoListplanets: "Planeten, Maan en Zon",
  cGotoListSelectObject: "Selecteer een objectlijst.",
  cGotoListDSOList: "De DSO-lijst bevat objecten die:",
  cGotoListDSOList1:
    "Groot (> 15 boogminuten) en relatief helder (minder dan 10 magnitude) zijn. 119 objecten.",
  cGotoListDSOList2:
    "Groot (> 15 boogminuten) en onbekende helderheid hebben. 84 objecten.",
  cGotoListDSOList3:
    "Klein (< 15 boogminuten), relatief helder (minder dan 10 magnitude), met gebruikelijke namen. 234 objecten.",
  cGotoListDSOList4:
    "118 van de helderste sterren met gebruikelijke namen, minstens één per sterrenbeeld.",
  cGotoListDSOList5:
    "De lijst met planeten, maan en zon bevat de planeten in ons zonnestelsel met de maan en de zon. Let op, Dwarf II is niet geschikt voor het maken van afbeeldingen van de planeten.",
  cGotoListinfo:
    "'Center' toont het geselecteerde object in Stellarium. 'Goto' verplaatst Dwarf II naar het geselecteerde object.",
  cGoToStellariumConnectStellarium:
    "U moet verbinding maken met Stellarium om gegevens te importeren.",
  cGoToStellariumPickObject:
    "U kunt Stellarium gebruiken om objecten te selecteren.",
  cGoToStellariumListTitle: "Selecteer een object in Stellarium.",
  cGoToStellariumList1:
    "Importeer rechte klimming en declinatie vanuit Stellarium door op 'Gegevens importeren' te klikken.",
  cGoToStellariumList2: "Start goto door op 'Goto' te klikken.",
  cGoToStellariumImportData: "Gegevens importeren",
  cGoToStellariumImportManualData: "Handmatige gegevens importeren",
  cGoToStellariumObject: "Object",
  cGoToStellariumRightAscension: "Rechte klimming",
  cGoToStellariumDeclination: "Deklinatie",
  cGoToStellariumCenter: "Centreren",
  cGoToStellariumMoveCenter: " U kunt het midden voorzichtig verplaatsen:",
  cGoToStellariumMoveCenterli1:
    "Klik op knoppen om het midden te verplaatsen naar",
  cGoToStellariumMoveCenterli2:
    "+/- 1 min voor rechte klimming, +/- 0.1° voor declinatie",
  cGoToStellariumMoveCenterli3: "De coördinaten worden bijgewerkt",
  cGoToStellariumMoveCenterli4:
    "Hercentreren in Stellarium door op 'Centreren' te klikken",
  cGoToStellariumMoveCenterli5: "Start dan goto door op 'Goto' te klikken",
  cGoToUserListNewList: "Nieuwe lijst toevoegen",
  cGoToUserListDeleteList: "Lijst verwijderen",
  cGoToUserListCustomObjectsListInstruction1: `
    Om aangepaste objectenlijsten toe te voegen, maak een objectenlijst aan op 
    <a href="https://telescopius.com">Telescopius</a>, download 
    de CSV en klik op "Nieuwe lijst toevoegen".
  `,
  cGoToUserListCustomObjectsListInstruction2:
    "De lijsten worden opgeslagen in de browser-database (localStorage). Omdat de gegevens in uw browser zijn opgeslagen, kunnen andere gebruikers van de site uw lijsten niet openen.",
  cGoToUserListCustomObjectsListInstruction3:
    "Als u uw lijst met andere mensen wilt delen, kunt u andere mensen de CSV van Telescopius sturen.",
  cImportManualModalTitle: "Voer handmatige gegevens in",
  cImportManualModalObjecTName: "Objectnaam",
  cImportObservationListModalTitle: "Objectlijst toevoegen",
  cImportObservationListfromTelescopius:
    "Importeer objectenlijst van Telescopius.",
  cImportObservationListListName: "Lijstnaam",
  cImportObservationImportList: "Lijst importeren",
  cDeleteObservationListModalTitle: "Objectenlijst Verwijderen",
  cDeleteObservationListConfirm: "Weet u zeker dat u wilt verwijderen",
  cDeleteObservationListButton: "Lijst Verwijderen",
  cMoonphaseCalculatorNewMoon: "Nieuwe Maan",
  cMoonphaseCalculatorWaxingCrescent: "Wassende Sikkelsikkel",
  cMoonphaseCalculatorFirstQuarter: "Eerste Kwartier",
  cMoonphaseCalculatorWaxingGibbous: "Wassende Maan",
  cMoonphaseCalculatorFullMoon: "Volle Maan",
  cMoonphaseCalculatorWaningGibbous: "Afnemende Maan",
  cMoonphaseCalculatorLastQuarter: "Laatste Kwartier",
  cMoonphaseCalculatorWaningCrescent: "Afnemende Sikkelsikkel",
  cMoonphaseCalculatorUnknown: "Onbekend",
  pImageSessionShotsStacked: "Gestapelde opnames",
  pImageSessionShotsTaken: "Opnames gemaakt",
  pImageSessionNoShootingInfo: "Geen opnamegegevens beschikbaar",
  pImageSessionNoAdditionalInfo: "Geen extra informatie beschikbaar",
  pImageSessionData: "Sessiegegevens",
  pImageSessionSortTable:
    "U kunt de tabel sorteren door op Doel of Datum te klikken",
  pImageSessionPreview: "Voorbeeld",
  pImageSessionTarget: "Doel",
  pImageSessionDate: "Datum",
  pImageSessionShootingInfo: "Opnamegegevens",
  pImageSessionAdditionalInfo: "Extra informatie",
  pImageSessionAction: "Actie",
  pImageSessionLoading: "Laden...",
  pImageSessionDownload: "Downloaden",
  pMoonphaseSelectMonth: "Selecteer maand:",
  pObjectsList: "Lists",
  pObjectsCustomsList: "Custom Lists",
  cObjectsIn: " in ",
  "always above horizon": "always above horizon",
  "always below horizon": "always below horizon",
  cObjectsSize: "Size",
  cObjectsMagnitude: "Magnitude",
  cObjectsRises: "Rises",
  cObjectsSets: "Sets",
  cObjectsCenter: "Centrer",
  cObjectsGoto: "Goto",
  cObjectsSearch: "Search",
  cVisibleSkyLimit: "Sky View Limit",
  cSkyLimitHelp1: "Enter the sky view limit values.",
  cSkyLimitHelp2:
    "The format is a comma separated list of fields, each field is the altitude angle value (can be 0) followed by one or more directions separated by a hyphen.",
  cSkyLimitHelp3:
    "Objects will be included if their altitude is greater than or equal to this number for the given list of directions.",
  cSkyLimitHelp4:
    "The list of possible values for the directions is: N-NE-E-SE-S-SW-W-NW.",
  cSkyLimitHelp5:
    "If a direction is missing then we consider that there is no limit for it.",
  cSkyLimitHelp6: "Here is an example of possible values: 20 N-NE, 35 S-SW",
  cSkyLimitHelp7:
    "Use the Visible Tag, to see only the matching objects to your sky view",
  All: "All",
  Favorites: "Favorites",
  Visible: "Visible",
  Clusters: "Clusters",
  Galaxies: "Galaxies",
  Nebulae: "Nebulae",
  Stars: "Stars",
  "Large Dso": "Large Dso",
  "Small Dso": "Small Dso",
  "Tiny Dso": "Tiny Dso",
  Mosaic: "Mosaic",
  Object: "Object",
  Objects: "Objects",
  Star: "Star",
  Galaxy: "Galaxy",
  Cluster: "Cluster",
  Nebula: "Nebula",
  "Dark Nebula": "Dark Nebula",
  "Reflection Nebula": "Reflection Nebula",
  "Planetary Nebula": "Planetary Nebula",
  "Supernova remnant": "Supernova remnant",
  "Association of stars": "Association of stars",
  "Open Cluster": "Open Cluster",
  "Globular Cluster": "Globular Cluster",
  "Star cluster + Nebula": "Star cluster + Nebula",
  "HII Ionized region": "HII Ionized region",
  "Other classification (see object notes)": "Other classification",
  cCloudsChartCloudCover: "Wolkenbedekking (%)",
  cCloudsChartHumidity: "Vochtigheid (%)",
  cCloudsChartWindSpeed: "Windsnelheid (km/u)",
  cCloudsChartForecast: "Wolkenvoorspelling",
  cCloudsCityInput: "Voer een stad in...",
  cCloudsApiKeyInput: "Voer API-sleutel in",
  cCloudsSearch: "Zoeken",
  cCloudsSaveAPIKey: "API-sleutel opslaan",
  pWeatherLoading: "Bezig met laden...",
};

export default translations;
