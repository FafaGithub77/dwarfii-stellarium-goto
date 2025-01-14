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
    "Dwarfium allows you to control the Dwarf II using the Dwarf API.",
  pIndexFeature: "Features",
  pIndexFeature1: "1. Object list with over 850 objects.",
  pIndexFeature2: "2. Import objects lists from Telescopius.",
  pIndexFeature3: "3. Import Mosaic lists from Telescopius.",
  pIndexFeature4:
    "4. Connect to Stellarium planeterium app to help select targets.",
  pIndexFeature5: "5. Take Astro photos.",
  pIndexFeature6: "6. 1x1 binning for astro photos.",
  pIndexClaimer:
    "Dwarfium and the Dwarf API are in beta phase. Not all features of the mobile app are present yet. Use this app only if you are comfortable as a beta software tester.",
  pIndexBugsHeader: "Bugs:",
  pIndexBug1: "You can send your findings here: ",
  pIndexBug2: "",
  pIndexBug3: "",
  pIndexLinkBug: `<a href="https://discord.gg/5vFWbsXDfv"> On our Discord Server </a>`,
  pCalendarTitle: "Astronomy Calendar of Celestial Events",
  pCalendarYear: "Calendar Year",
  pAbout: "About",
  pAboutInfo:
    "The project was started by Wai-Yin Kwan with the help of JC LESAINT. Dwarfium is a side project to combine their interest in coding, astronomy, and the Dwarf II API. To report bugs or view the original code, visit his ",
  pAboutDataCredit: "Data Credits",
  pAboutDataCreditInfo:
    "The data for the objects lists comes from several sources.",
  pAboutDataCreditDSO: "The data about the DSO comes from ",
  pAboutDataCreditDSOAuth:
    "Dr. Michael Camilleri, Auckland Astronomical Society, New Zealand, provided object names and sizes for the DSO that are 15 arc minutes or larger.",
  pAboutDataCreditDSOStars: "The data about the stars comes from ",
  pAboutDataCreditVisual:
    "The data about the visual magnitude of planets and Moon comes from ",
  pAboutDataCreditConstellationData: "The constellation data comes from ",
  pAboutDataCreditJuypterThe: "The ",
  pAboutDataCreditJuypterText:
    "in the Github repo show the steps I took to transform the raw data into the objects lists.",
  pAboutDataCreditCode: "This site uses code from ",
  pAboutDataCreditCodeAnd: "and ",
  pAboutDataCreditCodeAndText: "to perform astronomical calculations.",
  pAboutUserData: "User Data",
  pAboutUserDataDesc:
    "The information entered by users is stored in the browser's database (localStorage). Since the data is stored in your browser, other users of the site will not be able to access your data. This also means if a user uses multiple browsers or devices, the data cannot be synced between different browsers or devices.",
  pAboutAdditional: "Additional Data Sources",
  pAboutAdditionalWeatherData: "Weather data is pulled from ",
  pAboutAdditionalRSSData: "RSS feed for deep sky objects is provided by ",
  pAboutAdditionalWitmotion: "Witmotion Sensor integration based on ",
  cWitmotionCamera: "Camera",
  cWitmotionAltitude: "Altitude",
  cWitmotionPolaris1:
    "Point the Dwarf II towards Polaris and adjust the angle to match your altitude.",
  cWitmotionPolaris2: "You should see Polaris in the Center of the Camera.",
  pFirstSteps: "First Steps",
  pFirstStepsContent:
    "Use the Dwarf II mobile app from Dwarf Labs to take dark frames, focus the scope, and calibrate goto",
  pSetLocation: "Set Location",
  pSetLocationContent:
    "In order for goto to work, this site needs your latitude, longitude and time zone. The longitude is negative west of Greenwich",
  pLatitude: "Latitude",
  pLongitude: "Longitude",
  pTimezone: "Timezone",
  pUseCurrentLocation: "Use Current Location",
  pEnableSTA: "Enable STA Mode on Dwarf II",
  pEnableSTAContent:
    "In order for this site to connect to the Dwarf II, the Dwarf II must have the STA mode configured and on.",
  pEnableSTAContent1:
    "When using for the first time, you need the DwarfLab mobile app to establish the connection, then without restarting the dwarf, connect to it via the Connect Bluetooth button. The configuration will then be saved.",
  pEnableSTAContent2:
    "Then, for the next starts of the Dwarf, you can connect directly to it via Bluetooth, without using the mobile application.",
  pEnableSTAContent3:
    "Click Connect. This site will try to connect via Bluetooth to Dwarf II.",
  pBluetoothPWD: "Bluetooth PASSWORD",
  pConnect: "Connect",
  pConnectDwarfII: "Connect to Dwarf II",
  pConnectDwarfIIContent:
    "In order for this site to connect to the Dwarf II, both the Dwarf II and the website must use the same wifi network.",
  pConnectDwarfIIContent1:
    "After rebooting, you must first connect to the DwarfII via Bluetooth.",
  pConnectDwarfIIContent2:
    "Then connect to it with the wifi connect button. Then no need to use the app to Calibrate, make Goto and Imaging Session from this website.",
  pConnectDwarfIIContent3:
    "Visit this site on a device that is connected to the same wifi network as the Dwarf II.",
  pConnectDwarfIIContent4:
    "Enter in IP for the Dwarf II. If you are using Dwarf wifi, the IP is 192.168.88.1. If you are using STA mode, use the IP for your wifi network.",
  pConnectDwarfIIContent5:
    "Click Connect. This site will try to connect to Dwarf II.",
  pConnectDwarfIIContent6:
    "If you see the message: => Go Live, you have an Imaging Session completed, go to the Camera Page and Click on Live button.",
  pConnectStellarium: "Connect to Stellarium",
  pConnectStellariumContent:
    "In order to use Stellarium, we need to setup up the Remote Control plugin.",
  pConnectStellariumContent1: "Start Stellarium desktop app.",
  pConnectStellariumContent2: "The beginning of this",
  pConnectStellariumContent2_1:
    " demonstrates setting up Stellarium's Remote Control plugin (0 to 1:40); skip the part about NINA. Click 'Enable CORS for the following origin' and enter in ' * '.",
  pConnectStellariumContent3:
    "Enter in IP and port for the Remote Control plugin, and click ' Connect '. This site will try to connect to Stellarium.",
  pIPAdress: "Ip-Adress",
  pPort: "Port",
  cUnlockHost: "Unlock Host Mode",
  cLockHost: "Lock Host Mode",
  pConnectionSuccessFull: "Connection successfull.",
  pConnecting: "Connecting...",
  pConnectingFailed: "Connection failed!",
  cAstroSettingsInfoGain: "Gain",
  cAstroSettingsInfoGainDesc:
    "Gain is a digital camera setting that controls the amplification of the signal from the camera sensor. It should be noted that this amplifies the whole signal, including any associated background noise.",
  cAstroSettingsInfoExposure: "Exposure",
  cAstroSettingsInfoExposureDesc:
    "Time during which the sensor will be exposed to light and capturing information (energy)",
  cAstroSettingsInfoIRPass: "IR (infrared) - Pass",
  cAstroSettingsInfoIRPassDesc:
    "Allows the infrared wavelength to reach the sensor. Several astronomical objects emit in this wavelength.",
  cAstroSettingsInfoIRCut: "IR (infrared) - Cut",
  cAstroSettingsInfoIRCutDesc:
    "Blocks infrared wavelength. Useful for lunar and planetary.",
  cAstroSettingsInfoBin1x1: "Binning - 1x1",
  cAstroSettingsInfoBin1x1Desc:
    "Camera captures light on each individual physical pixel.",
  cAstroSettingsInfoBin2x2: "Binning - 2x2",
  cAstroSettingsInfoBin2x2Desc:
    "Camera combines physical pixels in groups of 2x2 (4 pixels) and considers all light captured in the group as a single pixel. Can be considered a 'virtual' pixel. This makes pixel size larger and reduces resolution by a factor equal to the binning.",
  cAstroSettingsInfoFormatFITS: "Format - FITS",
  cAstroSettingsInfoFormatFITSDesc:
    "Astronomy lossless numerical file format. Can include meta data of the image (coordinates, camera, pixel size binning, filter, etc) that can be used by processing software.",
  cAstroSettingsInfoFormatTIFF: "Format - TIFF",
  cAstroSettingsInfoFormatTIFFDesc:
    "A lossless file format, but not especifically oriented towards astronomy.",
  cAstroSettingsInfoCount: "Count",
  cAstroSettingsInfoCountDesc: "Number of images to take",
  cAstroSettingsInfoBack: "Back",
  cCameraAddOnPhoto: "Photo",
  cCameraAddOnVideo: "Video",
  cCameraAddOnPanorama: "Panorama",
  cCameraAddOnTimeLapse: "Time Lapse",
  cCameraBurstSettingsCount: "Count",
  cCameraBurstSettingsinterval: "Interval",
  cCameraTitle: "Astro Photos",
  cCameraConnection: "You must connect to Dwarf II.",
  cCameraLocation: "You must set your location.",
  cCalibrationDwarfLights: "Lights",
  cCalibrationDwarfRingOn: "Ring On",
  cCalibrationDwarfRingOff: "Ring Off",
  cCalibrationDwarfPowerOn: "Power On",
  cCalibrationDwarfPowerOff: "Power Off",
  cCalibrationDwarfTitle: "Calibrate the Dwarf II",
  cCalibrationDwarfTitleDesc:
    "In order to use Astro function, you must calibrate the dwarf II first.",
  cCalibrationDwarfWarning: "WARNING:",
  cCalibrationDwarfWarningDesc:
    "don't put anything on the lens at this moment.",
  CCalibrationDwarfCalibrate: "Calibrate",
  cCalibrationDwarfStopGoto: "Stop Goto",
  cCalibrationDwarfSavePosition: "Save Position",
  cCalibrationDwarfResetPosition: "Reset Position",
  cCalibrationDwarfGoToPosition: "Goto Position",
  cCalibrationDwarfShutdown: "Shutdown!",
  cCalibrationDwarfReboot: "Reboot!",
  cNavHome: "Home",
  cNavSetup: "Setup",
  cNavObjects: "Objects",
  cNavCamera: "Camera",
  cNavSessionData: "Session-Data",
  cNavWeather: "Weather",
  cNavClouds: "Clouds",
  cNavMoonphases: "Moonphases",
  cNavAstronomyCalendar: "Astronomy calendar",
  cNavPolarAlignment: "Polar Alignment",
  cNavAbout: "About",
  cStatusBarExposure: "Exposure",
  cStatusBarIRFilter: "IR-Filter",
  cStatusBarBinning: "Binning",
  cStatusBarCounter: "Counter",
  cStatusBarQuality: "Quality",
  cStatusBarTaken: "Taken:",
  cStatusBarStacked: "Stacked:",
  cStatusBarTime: "Time:",
  cStatusBarCurTarget: "Current Target:",
  cThemeSettingsTitle: "Theme Settings",
  cThemeSettingsFontSize: "Font Size",
  cThemeSettingsColorTheme: "Color Theme",
  cThemeSettingsLightTheme: "Light Theme",
  cThemeSettingsDarkTheme: "Dark Theme",
  cThemeSettingsAstroTheme: "Astro Theme",
  cThemeSettingsUnderconstruction: "under construction",
  cThemeSettingsLanguage: "Language",
  cThemeSettingsApply: "Apply",
  cWeatherInfoLastUpdate: "Last updated:",
  cWeatherInfoMinTemp: "Min Temp:",
  cWeatherInfoMaxTemp: "Max Temp:",
  cWeatherInfoFeelsLike: "Feels like:",
  cWeatherInfoHumidity: "Humidity:",
  cWeatherInfoWind: "Wind:",
  cGoToListConnectStellarium:
    "You must connect to Stellarium for Center to work.",
  cGoToListConnectDwarf: "You must connect to Dwarf II for Goto to work.",
  cGoToListdefault: "Select object lists",
  cGotoListplanets: "Planets, Moon and Sun",
  cGotoListSelectObject: "Please select an objects list.",
  cGotoListDSOList: "The DSO list has objects that are:",
  cGotoListDSOList1:
    "Large (> 15 arcminutes) and relatively bright (under 10 magnitude). 119 objects.",
  cGotoListDSOList2:
    "Large (> 15 arcminutes) and unknown brightness. 84 objects.",
  cGotoListDSOList3:
    "Small (< 15 arcminutes), relatively bright (under 10 magnitude), with common names. 234 objects.",
  cGotoListDSOList4:
    "118 of the brightest stars with common names, with at least one per constellation.",
  cGotoListDSOList5:
    "The Planets, Moon and Sun list has the planets in our solar system with the Moon and The Sun. Be aware, Dwarf II is not good for taking images of the planets.",
  cGotoListinfo:
    "'Center' will show the selected object in Stellarium. 'Goto' will move Dwarf II to the selected object",
  cGoToStellariumConnectStellarium:
    "You must connect to Stellarium for Import Data to work.",
  cGoToStellariumPickObject: "You can use Stellarium to help pick objects.",
  cGoToStellariumListTitle: "Select an object in Stellarium.",
  cGoToStellariumList1:
    "Import right ascension and declination from Stellarium by clicking 'Import Data'.",
  cGoToStellariumList2: "Start goto by clicking 'Goto'",
  cGoToStellariumImportData: "Import Data",
  cGoToStellariumImportManualData: "Import Manual Data",
  cGoToStellariumObject: "Object",
  cGoToStellariumRightAscension: "Right Ascension",
  cGoToStellariumDeclination: "Declination",
  cGoToStellariumCenter: "Center",
  cGoToStellariumMoveCenter: " You can gently move the Center:",
  cGoToStellariumMoveCenterli1: "Click on buttons to move the center to",
  cGoToStellariumMoveCenterli2:
    "+/- 1 min for right ascension, +/- 0.1° for declination",
  cGoToStellariumMoveCenterli3: "The coordinates will be updated",
  cGoToStellariumMoveCenterli4: "Re-Center in Stellarium by clicking 'Center'",
  cGoToStellariumMoveCenterli5: "Then Start goto by clicking 'Goto'",
  cGoToUserListNewList: "Add new list",
  cGoToUserListDeleteList: "Delete list",
  cGoToUserListCustomObjectsListInstruction1: `
  To add custom objects lists, create an objects list at 
  <a href="https://telescopius.com">Telescopius</a>, download 
  the CSV, and click "Add new list".
`,
  cGoToUserListCustomObjectsListInstruction2:
    "The lists are stored in the browser&apos;s database (localStorage). Since the data is stored in your browser, other users of the site will not be able to access your lists.",
  cGoToUserListCustomObjectsListInstruction3:
    "If you want to share your list with other people, you can send other people the csv from Telescopius.",
  cImportManualModalTitle: "Enter Manual Data",
  cImportManualModalObjecTName: "Object Name",
  cImportObservationListModalTitle: "Add Object List",
  cImportObservationListfromTelescopius:
    "Import objects list from Telescopius.",
  cImportObservationListListName: "List Name",
  cImportObservationImportList: "Import List",
  cDeleteObservationListModalTitle: "Delete Object List",
  cDeleteObservationListConfirm: "Are you sure you want to delete",
  cDeleteObservationListButton: "Delete List",
  cMoonphaseCalculatorNewMoon: "New Moon",
  cMoonphaseCalculatorWaxingCrescent: "Waxing Crescent",
  cMoonphaseCalculatorFirstQuarter: "First Quarter",
  cMoonphaseCalculatorWaxingGibbous: "Waxing Gibbous",
  cMoonphaseCalculatorFullMoon: "Full Moon",
  cMoonphaseCalculatorWaningGibbous: "Waning Gibbous",
  cMoonphaseCalculatorLastQuarter: "Last Quarter",
  cMoonphaseCalculatorWaningCrescent: "Waning Crescent",
  cMoonphaseCalculatorUnknown: "Unknown",
  pImageSessionShotsStacked: "Shots Stacked",
  pImageSessionShotsTaken: "Shots Taken",
  pImageSessionNoShootingInfo: "No shooting info available",
  pImageSessionNoAdditionalInfo: "No additional info available",
  pImageSessionData: "Session Data",
  pImageSessionSortTable:
    "You can sort the table by clicking on Target or Date",
  pImageSessionPreview: "Preview",
  pImageSessionTarget: "Target",
  pImageSessionDate: "Date",
  pImageSessionShootingInfo: "Shooting Info",
  pImageSessionAdditionalInfo: "Additional Info",
  pImageSessionAction: "Action",
  pImageSessionLoading: "Loading...",
  pImageSessionDownload: "Download",
  pMoonphaseSelectMonth: "Select Month:",
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
  cCloudsChartCloudCover: "Cloud coverage (%)",
  cCloudsChartHumidity: "Humidity (%)",
  cCloudsChartWindSpeed: "Wind speed (km/hr)",
  cCloudsChartForecast: "Clouds Forecast",
  cCloudsCityInput: "Enter a city...",
  cCloudsApiKeyInput: "Enter API-key",
  cCloudsSearch: "Search",
  cCloudsSaveAPIKey: "Save API Key",
  pWeatherLoading: "Loading...",
};

export default translations;
