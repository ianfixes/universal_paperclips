const PHI = 1.0/2.0 + Math.sqrt(5)/2.0;
const NUMBER_NAMES_LIST = [[1E3, "thousand"],
  [1E6, "million"],
  [1E9, "billion"],
  [1E12, "trillion"],
  [1E15, "quadrillion"],
  [1E18, "quintillion"],
  [1E21, "sextillion"],
  [1E24, "septillion"],
  [1E27, "octillion"],
  [1E30, "nonillion"],
  [1E33, "decillion"],
  [1E36, "undecillion"],
  [1E39, "duodecillion"],
  [1E42, "tredecillion"],
  [1E45, "quattuordecillion"],
  [1E48, "quindecillion"],
  [1E51, "sedecillion"],
  [1E54, "septendecillion"],
  [1E57, "octodecillion"],
  [1E60, "novendecillion"],
  [1E63, "vigintillion"],
  [1E66, "unvigintillion"],
  [1E69, "duovigintillion"],
  [1E72, "tresvigintillion"],
  [1E75, "quattuorvigintillion"],
  [1E78, "quinvigintillion"],
  [1E81, "sesvigintillion"],
  [1E84, "septemvigintillion"],
  [1E87, "octovigintillion"],
  [1E90, "novemvigintillion"],
  [1E93, "trigintillion"],
  [1E96, "untrigintillion"],
  [1E99, "duotrigintillion"],
  [1E102, "trestrigintillion"],
  [1E105, "quattuortrigintillion"],
  [1E108, "quintrigintillion"],
  [1E111, "sestrigintillion"],
  [1E114, "septentrigintillion"],
  [1E117, "octotrigintillion"],
  [1E120, "noventrigintillion"],
  [1E123, "quadragintillion"],
  [1E126, "unquadragintillion"],
  [1E129, "duoquadragintillion"],
  [1E132, "trequadragintillion"],
  [1E135, "quattuorquadragintillion"],
  [1E138, "quinquadragintillion"],
  [1E141, "sexquadragintillion"],
  [1E144, "septenquadragintillion"],
  [1E147, "octoquadragintillion"],
  [1E150, "novemquadragintillion"],
  [1E153, "quinquagintillion"],
  [1E156, "unquinquagintillion"],
  [1E159, "duoquinquagintillion"],
  [1E162, "trequinquagintillion"],
  [1E165, "quattuorquinquagintillion"],
  [1E168, "quinquinquagintillion"],
  [1E171, "sexquinquagintillion"],
  [1E174, "septenquinquagintillion"],
  [1E177, "octoquinquagintillion"],
  [1E180, "novemquinquagintillion"],
  [1E183, "sexagintillion"],
  [1E186, "unsexagintillion"],
  [1E189, "duosexagintillion"],
  [1E192, "tresexagintillion"],
  [1E195, "quattuorsexagintillion"],
  [1E198, "quinsexagintillion"],
  [1E201, "sexsexagintillion"],
  [1E204, "septensexagintillion"],
  [1E207, "octosexagintillion"],
  [1E210, "novemsexagintillion"],
  [1E213, "septuagintillion"],
  [1E216, "unseptuagintillion"],
  [1E219, "duoseptuagintillion"],
  [1E222, "treseptuagintillion"],
  [1E225, "quattuorseptuagintillion"],
  [1E228, "quinseptuagintillion"],
  [1E231, "sexseptuagintillion"],
  [1E234, "septenseptuagintillion"],
  [1E237, "octoseptuagintillion"],
  [1E240, "novemseptuagintillion"],
  [1E243, "octogintillion"],
  [1E246, "unoctogintillion"],
  [1E249, "duooctogintillion"],
  [1E252, "treoctogintillion"],
  [1E255, "quattuoroctogintillion"],
  [1E258, "quinoctogintillion"],
  [1E261, "sexoctogintillion"],
  [1E264, "septenoctogintillion"],
  [1E267, "octooctogintillion"],
  [1E270, "novemoctogintillion"],
  [1E273, "nonagintillion"],
  [1E276, "unnonagintillion"],
  [1E279, "duononagintillion"],
  [1E282, "trenonagintillion"],
  [1E285, "quattuornonagintillion"],
  [1E288, "quinnonagintillion"],
  [1E291, "sexnonagintillion"],
  [1E294, "septennonagintillion"],
  [1E297, "octononagintillion"],
  [1E300, "novemnonagintillion"],
  [1E303, "centillion"],
  [1E306, "uncentillion"]/*,*/
  /* JavaScript does not support integers greater than the previous value. */
  /*
  [1E333, "decicentillion"],
  [1E336, "undecicentillion"],
  [1E363, "viginticentillion"],
  [1E366, "unviginticentillion"],
  [1E393, "trigintacentillion"],
  [1E423, "quadragintacentillion"],
  [1E453, "quinquagintacentillion"],
  [1E483, "sexagintacentillion"],
  [1E513, "septuagintacentillion"],
  [1E543, "octogintacentillion"],
  [1E573, "nonagintacentillion"],
  [1E603, "ducentillion"],
  [1E903, "trecentillion"],
  [1E1203, "quadringentillion"],
  [1E1503, "quingentillion"],
  [1E1803, "sescentillion"],
  [1E2103, "septingentillion"],
  [1E2403, "octingentillion"],
  [1E2703, "nongentillion"],
  [1E3003, "millinillion"]*/];

var clips = 0;
var unusedClips = 0;
var clipRate = 0;
var clipRateTemp = 0;
var prevClips = 0;
var clipRateTracker = 0;
var clipmakerRate = 0;
var clipmakerLevel = 0;
var clipmakerLevel2 = 0;
var clipperCost = 5;
var unsoldClips = 0;
var funds = 0;
var margin = 0.25;
var wire = 1000;
var wireCost = 20;
var adCost = 100;
var demand = 5;
var clipsSold = 0;
var avgRev = 0;
var income = 0;
var incomeTracker = [0];
var ticks = 0;
var marketing = 1;
var marketingLvl = 1;
var x = 0;
var processors = 1;
var memory = 1;
var operations = 0;
var trust = 2;
var nextTrust = 3000;
var transaction = 1;
var clipperBoost = 1;
var blinkCounter = 0;
var creativity = 0;
var creativityOn = false;
var safetyProjectOn = false;
var boostLvl = 0;
var wirePurchase = 0;
var wireSupply = 1000;
var marketingEffectiveness = 1;
var marketingEffectiveness = 1;
var milestoneFlag = 0;
var bankroll = 0;
var fib1 = 2;
var fib2 = 3;
var strategyEngineFlag = 0;
var investmentEngineFlag = 0;
var revPerSecFlag = 0;
var compFlag = 0;
var projectsFlag = 0;
var autoClipperFlag = 0;
var megaClipperFlag = 0;
var megaClipperCost = 500;
var megaClipperLevel = 0;
var megaClipperBoost = 1;
var creativitySpeed = 1;
var creativityCounter = 0;
var wireBuyerFlag = 0;
var demandBoost = 1;
var humanFlag = 1;
var trustFlag = 1;
var nanoWire = 0;
var creationFlag = 0;
var wireProductionFlag = 0;
var spaceFlag = 0;
var factoryFlag = 0;
var harvesterFlag = 0;
var wireDroneFlag = 0;
var factoryLevel = 0;
var factoryBoost = 1;
var droneBoost = 1;
var availableMatter = Math.pow(10, 24)*6000;
var acquiredMatter = 0;
var processedMatter = 0;
var harvesterLevel = 0;
var wireDroneLevel = 0;
var factoryCost = 100000000;
var harvesterCost = 1000000;
var wireDroneCost = 1000000;
var factoryRate = 1000000000;
var harvesterRate = 26180337;
var wireDroneRate = 16180339;
var harvesterBill = 0;
var wireDroneBill = 0;
var factoryBill = 0;
var probeCount = 0;
var totalMatter = Math.pow(10, 54)*30;
var foundMatter = availableMatter;
var qFlag = 0;
var qClock = 0;
var qChipCost = 10000;
var nextQchip = 0;
var bribe = 1000000;
var battleFlag = 0;

var prestigeU = 0;
var prestigeS = 0;

var autoTourneyFlag = 0;
var egoFlag = 0;
var tothFlag = 0;

var wirePriceCounter = 0;
var wireBasePrice = 20;

var farmRate = 50;
var batterySize = 10000;
var factoryPowerRate = 200;
var dronePowerRate = 1;
var farmLevel = 0;
var batteryLevel = 0;
var farmCost = 10000000;
var batteryCost = 1000000;
var storedPower = 0;
var powMod = 0;
var farmBill = 0;
var batteryBill = 0;
var momentum = 0;

var swarmFlag = 0;
var swarmStatus = 7;
var swarmGifts = 0;
var nextGift = 0;
var giftPeriod = 125000;
var giftCountdown = giftPeriod;
var elapsedTime = 0;

var honor = 0;
var maxTrust = 20;
var maxTrustCost = 91117.99;
var disorgCounter = 0;
var disorgFlag = 0;
var synchCost = 5000;
var disorgMsg = 0;
var threnodyCost = 50000;

var entertainCost = 10000;
var boredomLevel = 0;
var boredomFlag = 0;
var boredomMsg = 0;

var wireBuyerStatus = 1;
var wirePriceTimer = 0;
var qFade = 1;
var autoTourneyStatus = 1;
var driftKingMessageCost = 1;
var sliderPos = 0;
var tempOps = 0;
var standardOps = 0;
var opFade = 0;

var opFadeTimer = 0;
var opFadeDelay = 800;

var dismantle = 0;
var endTimer1 = 0;
var endTimer2 = 0;
var endTimer3 = 0;
var endTimer4 = 0;
var endTimer5 = 0;
var endTimer6 = 0;

var testFlag = 0;
var finalClips = 0;

var resetFlag = 2;

// Added by @g-liu

var isHarvesterWireDroneCountLocked = false;
var isSolarLocked = false;