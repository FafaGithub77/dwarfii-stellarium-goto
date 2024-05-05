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
    "This website allows you to control parts of the Dwarf II using the Dwarf API.",
  pIndexFeature: "Features",
  pIndexFeature1: "1. Object list with over 850 objects.",
  pIndexFeature2: "2. Import objects lists from Telescopius.",
  pIndexFeature3: "3. Import Mosaic lists from Telescopius.",
  pIndexFeature4:
    "4. Connect to Stellarium planeterium app to help select targets.",
  pIndexFeature5: "5. Take Astro photos.",
  pIndexFeature6: "6. 1x1 binning for astro photos.",
  pIndexClaimer:
    "This website and the Dwarf API are in beta phase. The API hasn't been officially released, and the API doesn't have all the features of the mobile app, therefore this app has a very limited list of features. Only use this app if you are comfortable with being testers for beta software.",
  pIndexBugsHeader: "Bugs:",
  pIndexBug1:
    "Dwarf II's internal date url does not work in the browser because of CORS (http://DWARF_IP:8092/date?date=).",
  pIndexBug2:
    "To get it working, you need CORS: Access-Control-Allow-Origin Plugin on Chrome",
  pIndexBug3:
    "Restriction : as this website use only http mode to communicate with the dwarf, it can not detect your location.",
  pCalendarTitle: "Astronomy Calendar of Celestial Events",
  pCalendarYear: "Calendar Year",
  pAbout: "About",
  pAboutInfo:
    "The project was started by Wai-Yin Kwan with the help of JC LESAINT. This website is a side project to combine their interest in coding, astronomy, and the Dwarf II API. To report bugs or view the original code, visit his ",
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
  pFirstStepsContent: "Use the Dwarf II mobile app from Dwarf Labs to take dark frames, focus the scope, and calibrate goto",
  pSetLocation: "Set Location",
  pSetLocationContent: "In order for goto to work, this site needs your latitude, longitude and time zone. The longitude is negative west of Greenwich",
  pLatitude: "Latitude",
  pLongitude: "Longitude",
  pTimezone: "Timezone",
  pUseCurrentLocation: "Use Current Location",
  pEnableSTA: "Enable STA Mode on Dwarf II",
  pEnableSTAContent: "In order for this site to connect to the Dwarf II, the Dwarf II must have the STA mode configured and on.",
  pEnableSTAContent1: "When using for the first time, you need the DwarfLab mobile app to establish the connection, then without restarting the dwarf, connect to it via the Connect Bluetooth button. The configuration will then be saved.",
  pEnableSTAContent2: "Then, for the next starts of the Dwarf, you can connect directly to it via Bluetooth, without using the mobile application.",
  pEnableSTAContent3: "Click Connect. This site will try to connect via Bluetooth to Dwarf II.",
  pBluetoothPWD: "Bluetooth PASSWORD",
  pConnect: "Connect",
  pConnectDwarfII: "Connect to Dwarf II",
  pConnectDwarfIIContent:"In order for this site to connect to the Dwarf II, both the Dwarf II and the website must use the same wifi network.",
  pConnectDwarfIIContent1: "After rebooting, you must first connect to the DwarfII via Bluetooth.",
  pConnectDwarfIIContent2: "Then connect to it with the wifi connect button. Then no need to use the app to Calibrate, make Goto and Imaging Session from this website.",
  pConnectDwarfIIContent3: "Visit this site on a device that is connected to the same wifi network as the Dwarf II.",
  pConnectDwarfIIContent4: "Enter in IP for the Dwarf II. If you are using Dwarf wifi, the IP is 192.168.88.1. If you are using STA mode, use the IP for your wifi network.",
  pConnectDwarfIIContent5: "Click Connect. This site will try to connect to Dwarf II.",
  pConnectDwarfIIContent6: "If you see the message: => Go Live, you have an Imaging Session completed, go to the Camera Page and Click on Live button.",
  pConnectStellarium: "Connect to Stellarium",
  pConnectStellariumContent: "In order to use Stellarium, we need to setup up the Remote Control plugin.",
  pConnectStellariumContent1: "Start Stellarium desktop app.",
  pConnectStellariumContent2: "The beginning of this",
  pConnectStellariumContent2_1: " demonstrates setting up Stellarium's Remote Control plugin (0 to 1:40); skip the part about NINA. Click 'Enable CORS for the following origin' and enter in ' * '.",
  pConnectStellariumContent3: "Enter in IP and port for the Remote Control plugin, and click ' Connect '. This site will try to connect to Stellarium.",
  pIPAdress: "Ip-Adress",
  pPort: "Port",
  pUnlockHost: "Unlock Host Mode",
  pLockHost: "Lock Host Mode",
  pConnectionSuccessFull: "Connection successfull.",
  pConnecting: "Connecting...",
  pConnectingFailed: "Connection failed!",
};

export default translations;
