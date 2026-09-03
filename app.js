/**
 * MAAN MANDIR MOBILE DEVOTEE PORTAL - APPLICATION LOGIC
 * Dynamic Gateway Architecture: Dedicated NRI & International Devotees PayPal Gateway (PayPal, Credit & Debit Cards for USD/Global), In-App Native Donation Page with BharatQR Standee (SHRI MATAJI GAUVANSH SEWA), Merchant Details, One-Tap Copy, Curated Side Menu Sections, Live YouTube CDN Avatars, PDF Catalog, Updates Drawer, Font Resizer (A-/A/A+), Bilingual Switcher (EN/HI), & Instant Search
 * Version: 41
 */

// Bilingual Translation Dictionary (English 🇬🇧 & Hindi 🇮🇳)
const TRANSLATIONS = {
  en: {
    appTitle: "Maan Mandir",
    appSubtitle: "Gahvarvan Barsana",
    liveBanner: "🔴 LIVE NOW: Ramesh Baba Ji Pravachan",
    watchLive: "Watch Live",
    searchPlaceholder: "Search Pravachans, Kirtan, Books, Magazines...",
    heroTitle: "Shri Maan Mandir Seva Sansthan Trust",
    heroSubtitle: "Maan Mandir Seva Sansthan Trust • Shri Ramesh Baba Ji Maharaj",
    heroTag: "Barsana Dham",
    sectionResources: "Devotee Resources",
    tileLive: "Live & YouTube",
    tileLiveDesc: "Pravachans & Streams",
    tileAudio: "Kirtan & Audio",
    tileAudioDesc: "SoundCloud & Maanini",
    tileBooks: "Publications",
    tileBooksDesc: "Books & Magazines",
    tileSeva: "Gauseva & Info",
    tileSevaDesc: "Braj Yatra & Seva",
    latestUpdates: "⚡ Latest Updates for Devotees",
    tabHome: "Home",
    tabLive: "Live",
    tabAudio: "Audio",
    tabBooks: "Publications",
    tabSeva: "Seva",
    tabDonate: "Donate",
    subtabBooks: "Books (ग्रंथ)",
    subtabMagazines: "Monthly Magazine (पत्रिका)",
    downloadBtn: "Download / Open PDF",
    notificationsTitle: "Devotee Updates",
    scTitle: "Maan Mandir SoundCloud Channel",
    scDesc: "Listen to official daily Pravachans, divine Satsang, Braj Kirtan, and Bhajans by Maan Mandir Sangeet Mandal on SoundCloud.",
    scBtn: "Launch SoundCloud Channel ↗",
    maaniniTitle: "Maanini.app Portal",
    maaniniDesc: "Access divine Satsang, daily Pravachans, Kirtan, and the dedicated Maanini.app digital experience directly on your mobile device.",
    maaniniBtn: "Launch Maanini.app Portal ↗",
    pwaTitle: "Add Maan Mandir to Home Screen",
    pwaSubtitle: "Access Live Webcasts, Kirtan & Books instantly from your phone!",
    pwaBtn: "Add to Home Screen",
    qrModalTitle: "📱 Scan & Share App QR Codes",
    qrModalSubtitle: "Scan with any mobile camera to open or install the app!",
    zipTitle: "Bulk Satsang Downloads (ZIP Format)",
    zipDesc: "Download complete albums, daily Pravachans, and Raag Seva Kirtans in ZIP archives for offline listening on any device.",
    zipBtn: "Open Bulk Satsang Downloads ↗",
    gaushalaTileTitle: "Shri Mataji Gaushala Barsana",
    gaushalaTileDesc: "Home to tens of thousands of indigenous cows under the divine blessings of Shri Ramesh Baba Ji Maharaj. Visit the official website for Gau Seva, Gaushala Darshan & News.",
    gaushalaTileBtn: "Open Website ↗",
    donateHeader: "💖 Gauseva & Mandir Donation",
    mmCardInfo: "🌸 Shri Maan Mandir Seva Sansthan: Scan QR code using Google Pay, PhonePe, Paytm, BHIM UPI or any bank app to contribute directly to Maan Mandir Seva.",
    renovCardInfo: "🌸 Maan Mandir Renovation Seva: Shri Maan Mandir is the supreme divine pastime site of Shri Radha Krishna. Participate in the renovation and restoration of this holy site to receive the rare blessings of Dham Seva.",
    nriTag: "🌎 NRI & INTERNATIONAL DEVOTEES",
    nriTitle: "PayPal, Credit & Debit Cards (USD / Global)",
    nriDesc: "Dedicated International Seva Portal for NRI Devotees outside India. Supports all major Credit Cards, Debit Cards, and PayPal accounts globally.",
    nriBtn: "Donate via PayPal / Cards (NRI Seva) ↗",
    mmCardTitle: "SHRI MAAN MANDIR SEVA SANSTHAN",
    mmCardSub: "IDFC FIRST Bank • BHIM UPI / GPay / PhonePe / Paytm",
    lblMerchantName: "MERCHANT NAME",
    lblUpiVpa: "UPI ID / VPA (GPay / PhonePe ID)",
    lblBankName: "BANK NAME",
    lblSupportedPayments: "SUPPORTED PAYMENTS",
    valSupportedPayments: "GPay, PhonePe, Paytm, BHIM UPI & 100+ Apps",
    renovCardTitle: "MAAN MANDIR RENOVATION SEVA",
    renovCardSub: "Leela Sthal Puruddhar & Dham Seva • HDFC Bank / UPI",
    lblAccountName: "ACCOUNT NAME",
    lblBranch: "BRANCH",
    lblHelpline: "SEVA HELPLINE (संपर्क)",
    lblWebsite: "OFFICIAL WEBSITE",
    gauCardTitle: "SHRI MATAJI GAUVANSH SEWA",
    gauCardSub: "Axis Bank BharatQR • BHIM UPI / RuPay / Cards",
    lblBeneficiary: "BENEFICIARY",
    lblMid: "MERCHANT ID (MID)",
    lblTid: "TERMINAL ID (TID)",
    lblBhimRef: "BHIM / RUPAY REF",
    lblMastercardRef: "MASTERCARD REF",
    lblVisaRef: "VISA REF",
    lblHelpdesk: "HELPDESK CONTACT",
    gatewaysHeader: "🌐 Web Gateways & Bank Transfers",
    gw1Title: "Maan Mandir Sansthan Website Gateway",
    gw1Desc: "For online netbanking, debit/credit cards, and international donations via MaanMandir.org.",
    gw1Btn: "Launch MaanMandir.org Donate Page ↗",
    gw2Title: "Mataji Gaushala Website Gateway",
    gw2Desc: "For direct fodder sponsorship and cow adoption donations via MatajiGaushala.org.",
    gw2Btn: "Launch MatajiGaushala.org Donate Page ↗",
    yatraCardTitle: "Shri Radha Rani Braj Yatra 2026 Registration",
    yatraCardDesc: "Join the divine 40-day foot pilgrimage across 84 Kos Braj Dham under the guidance of Shri Ramesh Baba Ji Maharaj. Register online for Yatra 2026.",
    yatraCardBtn: "🚩 Register for Braj Yatra 2026 ↗"
  },
  hi: {
    appTitle: "मान मंदिर",
    appSubtitle: "गह्वरवन बरसाना",
    liveBanner: "🔴 लाइव: श्री रमेश बाबा जी महाराज प्रवचन",
    watchLive: "लाइव देखें",
    searchPlaceholder: "प्रवचन, कीर्तन, पुस्तकें, पत्रिका खोजें...",
    heroTitle: "श्री मान मंदिर सेवा संस्थान ट्रस्ट",
    heroSubtitle: "मान मंदिर सेवा संस्थान ट्रस्ट • श्री रमेश बाबा जी महाराज",
    heroTag: "बरसाना धाम",
    sectionResources: "भक्त सेवा एवं साधन",
    tileLive: "लाइव व यूट्यूब",
    tileLiveDesc: "प्रवचन व कथाएं",
    tileAudio: "कीर्तन व ऑडियो",
    tileAudioDesc: "साउंडक्लाउड व मानिनी",
    tileBooks: "प्रकाशन",
    tileBooksDesc: "ग्रंथ एवं मासिक पत्रिकाएं",
    tileSeva: "गौसेवा व जानकारी",
    tileSevaDesc: "ब्रज यात्रा व गौशाला",
    latestUpdates: "⚡ भक्तों हेतु नवीनतम समाचार",
    tabHome: "मुख्य",
    tabLive: "लाइव",
    tabAudio: "ऑडियो",
    tabBooks: "प्रकाशन",
    tabSeva: "सेवा",
    tabDonate: "दान व सेवा",
    subtabBooks: "ग्रंथ व पुस्तकें",
    subtabMagazines: "मासिक पत्रिका (Patrika)",
    downloadBtn: "डाउनलोड / खोलें",
    notificationsTitle: "भक्त अपडेट्स",
    scTitle: "मान मंदिर आधिकारिक साउंडक्लाउड",
    scDesc: "साउंडक्लाउड पर मान मंदिर संगीत मंडल द्वारा नित्य सत्संग, ब्रज संकीर्तन, भजन व श्री बाबा जी के दिव्य प्रवचन सुनें।",
    scBtn: "साउंडक्लाउड चैनल खोलें ↗",
    maaniniTitle: "मानिनी ऐप पोर्टल",
    maaniniDesc: "श्री बाबा जी के दिव्य सत्संग, नित्य प्रवचन, संकीर्तन व मानिनी डिजिटल अनुभव का आनंद सीधे अपने मोबाइल में लें।",
    maaniniBtn: "मानिनी पोर्टल खोलें ↗",
    pwaTitle: "मान मंदिर ऐप होम स्क्रीन पर जोड़ें",
    pwaSubtitle: "लाइव प्रसारण, कथा, कीर्तन व ग्रंथों का आनंद सीधे मोबाइल होम स्क्रीन से लें!",
    pwaBtn: "होम स्क्रीन पर ऐप जोड़ें",
    qrModalTitle: "📱 ऐप क्यूआर कोड (स्कैन व शेयर करें)",
    qrModalSubtitle: "किसी भी मोबाइल कैमरे से स्कैन करके ऐप खोलें या इंस्टॉल करें!",
    zipTitle: "बल्क सत्संग डाउनलोड (ZIP फॉर्मेट)",
    zipDesc: "ऑफलाइन सुनने हेतु सभी प्रवचन, ब्रज संकीर्तन व एल्बम की ZIP फाइलें सीधे डाउनलोड करें।",
    zipBtn: "बल्क सत्संग डाउनलोड खोलें ↗",
    gaushalaTileTitle: "श्री माताजी गौशाला बरसाना",
    gaushalaTileDesc: "श्री रमेश बाबा जी महाराज के पावन सानिध्य में 60,000+ गोवंश की नि:स्वार्थ सेवा। गौ सेवा, दर्शन एवं जानकारी हेतु माताजी गौशाला वेबसाइट देखें।",
    gaushalaTileBtn: "वेबसाइट खोलें ↗",
    donateHeader: "💖 गौसेवा एवं मंदिर दान",
    mmCardInfo: "🌸 श्री मान मंदिर सेवा संस्थान: गूगल पे, फोनपे, पेटीएम, भीम UPI अथवा किसी भी बैंक ऐप से क्यूआर कोड स्कैन करके सीधे मान मंदिर सेवा में योगदान दें।",
    renovCardInfo: "🌸 मान मंदिर जीर्णोद्धार सेवा: श्रीराधाकृष्ण लीला स्थलियों में मान मंदिर सबसे प्रमुख है। इस अति विलक्षण लीला स्थली के जीर्णोद्धार में जुड़कर धाम सेवा का दुर्लभ लाभ प्राप्त करें।",
    nriTag: "🌎 NRI व विदेशी भक्त सेवा",
    nriTitle: "PayPal, क्रेडिट व डेबिट कार्ड्स (USD / वैश्विक)",
    nriDesc: "भारत के बाहर रहने वाले सभी अंतरराष्ट्रीय एवं NRI भक्तों हेतु समर्पित सेवा पोर्टल। सभी क्रेडिट/डेबिट कार्ड्स एवं PayPal समर्थित।",
    nriBtn: "PayPal व कार्ड्स से दान करें (NRI सेवा) ↗",
    mmCardTitle: "श्री मान मंदिर सेवा संस्थान",
    mmCardSub: "IDFC फर्स्ट बैंक • भीम UPI / गूगल पे / फोनपे / पेटीएम",
    lblMerchantName: "व्यापारी / ट्रस्ट नाम",
    lblUpiVpa: "UPI आईडी (गूगल पे / फोनपे ID)",
    lblBankName: "बैंक का नाम",
    lblSupportedPayments: "समर्थित भुगतान माध्यम",
    valSupportedPayments: "गूगल पे, फोनपे, पेटीएम, भीम UPI व 100+ ऐप्स",
    renovCardTitle: "मान मंदिर जीर्णोद्धार सेवा",
    renovCardSub: "लीला स्थल जीर्णोद्धार व धाम सेवा • HDFC बैंक",
    lblAccountName: "खाता नाम",
    lblBranch: "बैंक शाखा",
    lblHelpline: "सेवा हेल्पलाइन (संपर्क)",
    lblWebsite: "आधिकारिक वेबसाइट",
    gauCardTitle: "श्री माताजी गोवंश सेवा",
    gauCardSub: "एक्सिस बैंक भारतक्यूआर • भीम UPI / रुपे / कार्ड्स",
    lblBeneficiary: "लाभार्थी (ट्रस्ट नाम)",
    lblMid: "मर्चेंट आईडी (MID)",
    lblTid: "टर्मिनल आईडी (TID)",
    lblBhimRef: "भीम / रुपे संदर्भ संख्या",
    lblMastercardRef: "मास्टरकार्ड संदर्भ संख्या",
    lblVisaRef: "वीजा संदर्भ संख्या",
    lblHelpdesk: "हेल्पडेस्क संपर्क",
    gatewaysHeader: "🌐 वेब गेटवे एवं बैंक ट्रांसफर",
    gw1Title: "मान मंदिर संस्थान वेबसाइट गेटवे",
    gw1Desc: "ऑनलाइन नेटबैंकिंग, डेबिट/क्रेडिट कार्ड व ऑनलाइन दान हेतु मान मंदिर वेबसाइट खोलें।",
    gw1Btn: "MaanMandir.org दान पेज खोलें ↗",
    gw2Title: "माताजी गौशाला वेबसाइट गेटवे",
    gw2Desc: "गौ ग्रास, हरा चारा सेवा व गौ गोद सेवा हेतु माताजी गौशाला वेबसाइट खोलें।",
    gw2Btn: "MatajiGaushala.org दान पेज खोलें ↗",
    yatraCardTitle: "श्री राधारानी ब्रज यात्रा २०२६ पंजीकरण",
    yatraCardDesc: "श्री रमेश बाबा जी महाराज के पावन सानिध्य में ८४ कोस ब्रज यात्रा हेतु ऑनलाइन पंजीकरण कराएं। नि:शुल्क भोजन, आवास व सुरक्षा व्यवस्था।",
    yatraCardBtn: "🚩 ब्रज यात्रा २०२६ पंजीकरण करें ↗"
  }
};

// Current App State
let currentLang = localStorage.getItem('mm_lang') || 'en';
let fontScaleStep = parseInt(localStorage.getItem('mm_font_step') || '1');
let currentPlayingAudio = null;
let isAudioPlaying = false;
let currentSubTab = 'books'; // 'books' or 'magazines'
let fetchedBooksList = [];
let fetchedMagazinesList = [];

// Side Navigation Drawer Categories Structured as Requested
const MAANMANDIR_ORG_MENU_CATEGORIES = [
  {
    catId: "maanmandir",
    titleEn: "Maan Mandir",
    titleHi: "मान मंदिर",
    icon: "🛕",
    links: [
      { textEn: "App QR Codes (Scan & Share)", textHi: "ऐप क्यूआर कोड (स्कैन व शेयर)", isAction: "openQrModal" },
      { textEn: "Maan Mandir About", textHi: "मान मंदिर परिचय", url: "https://maanmandir.org/about-us/", isExternal: true },
      { textEn: "A Typical Day at Temple", textHi: "मंदिर की नित्य दिनचर्या", url: "https://maanmandir.org/a-typical-day-of-temple/", isExternal: true },
      { textEn: "Plan Your Visit To Maan Mandir", textHi: "मान मंदिर दर्शन यात्रा योजना", url: "https://maanmandir.org/plan-your-visit-to-maan-mandir/", isExternal: true }
    ]
  },
  {
    catId: "gaushala",
    titleEn: "Mataji Gaushala",
    titleHi: "माताजी गौशाला",
    icon: "🐄",
    links: [
      { textEn: "Mataji Gaushala Home", textHi: "माताजी गौशाला मुख्य पृष्ठ", url: "https://www.matajigaushala.org/", isExternal: true },
      { textEn: "Free Hospital for Cows", textHi: "निःशुल्क गौ चिकित्सालय", url: "https://www.matajigaushala.org/services-4", isExternal: true },
      { textEn: "Rescue & Save Gaumata", textHi: "गौ संरक्षण व पुनर्वास", url: "https://www.matajigaushala.org/save-cow", isExternal: true },
      { textEn: "Gau Aarti & Darshan", textHi: "नित्य गौ आरती व दर्शन", url: "https://www.matajigaushala.org/gau-aarti", isExternal: true }
    ]
  },
  {
    catId: "yatra",
    titleEn: "Radha Rani Braj Yatra",
    titleHi: "राधारानी ब्रज यात्रा",
    icon: "🚩",
    links: [
      { textEn: "Yatra Registration 2026", textHi: "यात्रा पंजीकरण २०२६", url: "https://vrajayatra.in/", isExternal: true },
      { textEn: "Map of Braj Dham (ब्रज मानचित्र)", textHi: "ब्रज धाम मानचित्र", url: "https://maanmandir.org/braj-map/", isExternal: true },
      { textEn: "Radha Rani Braj Yatra Overview", textHi: "राधारानी ब्रज यात्रा विवरण", url: "https://maanmandir.org/radha-rani-braj-yatra/", isExternal: true },
      { textEn: "Rasili Braj Yatra (Encyclopedia)", textHi: "रसीली ब्रज यात्रा (ग्रंथ)", url: "https://maanmandir.org/rasili-braj-yatra-encyclopedia-of-braj/", isExternal: true }
    ]
  },
  {
    catId: "donate",
    titleEn: "Donate",
    titleHi: "दान एवं सेवा",
    icon: "💖",
    links: [
      { textEn: "Shri Maan Mandir Seva Sansthan (IDFC UPI)", textHi: "श्री मान मंदिर सेवा संस्थान (IDFC UPI)", isTab: "donate" },
      { textEn: "Maan Mandir Renovation Seva (HDFC Bank)", textHi: "मान मंदिर जीर्णोद्धार सेवा (HDFC बैंक)", isTab: "donate" },
      { textEn: "Shri Mataji Gauseva BharatQR Donation", textHi: "श्री माताजी गौसेवा भारतक्यूआर दान", isTab: "donate" },
      { textEn: "NRI & International Devotees (PayPal / Cards)", textHi: "NRI व विदेशी भक्त सेवा (PayPal / कार्ड्स)", url: "https://www.paypal.com/biz/fund?id=4FVN2ALUJ5GJ8", isExternal: true },
      { textEn: "Maan Mandir Online Netbanking", textHi: "मान मंदिर ऑनलाइन नेटबैंकिंग", url: "https://maanmandir.org/donate/", isExternal: true },
      { textEn: "Mataji Gaushala Cow Adoption", textHi: "माताजी गौशाला गौ गोद सेवा", url: "https://www.matajigaushala.org/donation", isExternal: true }
    ]
  },
  {
    catId: "social",
    titleEn: "Social & Community",
    titleHi: "सोशल मीडिया व कम्युनिटी",
    icon: "🌐",
    links: [
      { textEn: "Official WhatsApp Channel", textHi: "आधिकारिक व्हाट्सएप चैनल", url: "https://whatsapp.com/channel/0029Va4x7nK29759H6O6R92N", isExternal: true },
      { textEn: "Instagram (@maanmandir.barsana)", textHi: "इन्स्टाग्राम (@maanmandir.barsana)", url: "https://www.instagram.com/maanmandir.barsana/", isExternal: true },
      { textEn: "Facebook (Maan Mandir Barsana)", textHi: "फ़ेसबुक (मान मंदिर बरसाना)", url: "https://www.facebook.com/MaanMandirBarsana/", isExternal: true },
      { textEn: "YouTube (@MaanMandir)", textHi: "यूट्यूब (@MaanMandir)", url: "https://www.youtube.com/MaanMandir", isExternal: true }
    ]
  },
  {
    catId: "contact",
    titleEn: "Contact Us",
    titleHi: "संपर्क करें",
    icon: "📞",
    links: [
      { textEn: "Contact Maan Mandir Barsana", textHi: "मान मंदिर बरसाना संपर्क", url: "https://maanmandir.org/contact-us/", isExternal: true },
      { textEn: "Contact Mataji Gaushala", textHi: "माताजी गौशाला संपर्क", url: "https://www.matajigaushala.org/contact-us", isExternal: true }
    ]
  }
];

// Official Maan Mandir YouTube Channels Gateway Catalog
const MAAN_MANDIR_YOUTUBE_CHANNELS = [
  {
    id: "yt-main",
    nameEn: "Maan Mandir Official Channel",
    nameHi: "मान मंदिर आधिकारिक यूट्यूब चैनल",
    handle: "@MaanMandir",
    url: "https://www.youtube.com/MaanMandir",
    badgeEn: "MAIN LIVE STREAM",
    badgeHi: "मुख्य लाइव चैनल",
    isLive: true,
    cdnAvatar: "https://yt3.googleusercontent.com/ytc/AIdro_m2zyl6egAY2Ab0KU2xq_0TCT8wgoJt9yvIdAXYXscIzy8=s176-c-k-c0x00ffffff-no-rj",
    descEn: "Official webcast of Shri Ramesh Baba Ji Maharaj Pravachan & Barsana Dham Live Darshan.",
    descHi: "श्री रमेश बाबा जी महाराज के पावन प्रवचन एवं बरसाना धाम सत्संग का लाइव प्रसारण।"
  },
  {
    id: "yt-murlika",
    nameEn: "Shri Murlika Ji Maharaj",
    nameHi: "श्री मुरलिका जी महाराज",
    handle: "@ShriMurlikaji",
    url: "https://www.youtube.com/@ShriMurlikaji",
    badgeEn: "KATHA & SATSANG",
    badgeHi: "कथा व सत्संग",
    cdnAvatar: "https://yt3.googleusercontent.com/ytc/AIdro_kX4J9R9X8w=s176-c-k-c0x00ffffff-no-rj",
    descEn: "Official channel of Shri Murlika Ji Maharaj: Srimad Bhagavat Katha & Braj Ras Satsang.",
    descHi: "श्री मुरलिका जी महाराज के पावन मुखारविंद से श्रीमद्भागवत कथा एवं ब्रज रस सत्संग का दिव्य प्रसारण।"
  },
  {
    id: "yt-ramjilal",
    nameEn: "RamJi Lal Shastri Ji Maharaj",
    nameHi: "रामजीलाल शास्त्री जी महाराज",
    handle: "@ramjilalshastrijimaharajba7619",
    url: "https://www.youtube.com/@ramjilalshastrijimaharajba7619",
    badgeEn: "PRAVACHAN",
    badgeHi: "प्रवचन",
    cdnAvatar: "https://yt3.googleusercontent.com/ytc/AIdro_kcmwbpDOPd7yT5p1-zcfcSP8YWxNRpcepFQCfYVx7nuQ=s176-c-k-c0x00ffffff-no-rj",
    descEn: "Shrimad Bhagawat Katha & Shastra Satsang by Ram Ji Lal Shastri Ji Maharaj.",
    descHi: "रामजीलाल शास्त्री जी महाराज के पावन मुखारविंद से श्रीमद्भागवत कथा व शास्त्र चर्चा।"
  },
  {
    id: "yt-shrijididi",
    nameEn: "Pujyaa Shriji Didi",
    nameHi: "पूज्या श्रीजी दीदी",
    handle: "@PujyaaShrijididi",
    url: "https://www.youtube.com/@PujyaaShrijididi",
    badgeEn: "SATSANG & BHAJAN",
    badgeHi: "सत्संग व भजन",
    cdnAvatar: "https://yt3.googleusercontent.com/TFvkukeeV0ZLazaVOern9bDzO8n_Dn0FRk0S84eLF9B2Zn1KR638wSNFcdns9_NZo59KAY62vg=s176-c-k-c0x00ffffff-no-rj",
    descEn: "Braj Baalika Sadhvi Shri Ji Maan Mandir Barsana: Devotional Satsang & Bhajans.",
    descHi: "ब्रज बालिका साध्वी श्री जी मान मंदिर बरसाना द्वारा भक्तिमय सत्संग, उपदेश एवं मधुर भजन।"
  },
  {
    id: "yt-divyapath",
    nameEn: "Divya Path",
    nameHi: "दिव्य पथ",
    handle: "@Divya-Path",
    url: "https://www.youtube.com/@Divya-Path",
    badgeEn: "DIVYA PATH",
    badgeHi: "दिव्य पथ",
    cdnAvatar: "https://yt3.googleusercontent.com/B2K6S3wzj26DtRRrBRHwz2SrlIX6jzK8Kb9wFmvYk65qK-dpcK9v354Frdtz5pke96QX2FkN0_Y=s176-c-k-c0x00ffffff-no-rj",
    descEn: "Official Divya Path channel for spiritual discourses and Sanatan Dharma teachings.",
    descHi: "दिव्य पथ आध्यात्मिक प्रवचन एवं सनातन धर्म ज्ञान प्रसारण।"
  },
  {
    id: "yt-brajyatra",
    nameEn: "Radharani Braj Yatra",
    nameHi: "राधारानी ब्रज यात्रा",
    handle: "@radharanibrajyatra7821",
    url: "https://www.youtube.com/@radharanibrajyatra7821",
    badgeEn: "84 KOS YATRA",
    badgeHi: "८४ कोस यात्रा",
    cdnAvatar: "https://yt3.googleusercontent.com/ytc/AIdro_mEd9J7aWk5BCjzLpgiA9iIcIPmjwK9661h_e3DEpdPZw=s176-c-k-c0x00ffffff-no-rj",
    descEn: "Video webcasts of the annual 84 Kos Braj Yatra & Leela Sthal Pravachans.",
    descHi: "वार्षिक ८४ कोस ब्रज यात्रा एवं लीला स्थल प्रवचनों का पावन वीडियो संग्रह।"
  },
  {
    id: "yt-gaushala",
    nameEn: "Shri Mataji Gaushala Barsana",
    nameHi: "श्री माताजी गौशाला बरसाना",
    handle: "@ShriMatajiGaushala",
    url: "https://www.youtube.com/@ShriMatajiGaushala",
    badgeEn: "GAUSEVA",
    badgeHi: "गौसेवा",
    cdnAvatar: "",
    descEn: "Live updates and Gauseva webcasts from Shri Mataji Gaushala Barsana.",
    descHi: "श्री माताजी गौशाला बरसाना से नित्य गौसेवा, दर्शन व पर्यावरण संरक्षण।"
  },
  {
    id: "yt-cowvet",
    nameEn: "Cow Vet Hospital Barsana",
    nameHi: "गौ चिकित्सालय बरसाना",
    handle: "@cowvethospital",
    url: "https://www.youtube.com/@cowvethospital",
    badgeEn: "GAU CHIKITSA",
    badgeHi: "गौ चिकित्सा",
    cdnAvatar: "https://yt3.googleusercontent.com/fiTWUeXBJbI6J5JqGlByubdX-3FMTjTGxciGGlWccMurCcYl2sgrnUYsHaqR_Pw_pv-UySibaw=s176-c-k-c0x00ffffff-no-rj",
    descEn: "Medical care, emergency treatment, and rehabilitation webcasts from Cow Vet Hospital.",
    descHi: "गौ चिकित्सालय बरसाना से बीमार व घायल गौवंश की चिकित्सीय सेवा व अपडेट्स।"
  }
];

// Sample Notifications Data
const APP_DATA = {
  notifications: [
    { id: 1, titleEn: "🔴 Live Webcast Started", titleHi: "🔴 लाइव सत्संग प्रारंभ", descEn: "Shri Ramesh Baba Ji Maharaj Pravachan live from Barsana Dham.", descHi: "बरसाना धाम से श्री रमेश बाबा जी महाराज का लाइव प्रवचन।", time: "10m ago", unread: true },
    { id: 2, titleEn: "🌸 Maanini.app Brand Icon Synced", titleHi: "🌸 मानिनी ऐप लोगो अद्यतन", descEn: "Official Maanini.app logo set as the app icon across all views.", descHi: "सभी व्यूज में मानिनी ऐप का आधिकारिक लोगो सेट हो गया।", time: "Just now", unread: true },
    { id: 3, titleEn: "💳 NRI & Global PayPal Seva Live", titleHi: "💳 NRI व विदेशी भक्तों हेतु PayPal सेवा उपलब्ध", descEn: "PayPal, Credit & Debit Card donations live for NRI devotees.", descHi: "विदेशी भक्तों हेतु PayPal व कार्ड सेवा लिंक उपलब्ध।", time: "1h ago", unread: false }
  ]
};

// Official MaanMandir.org Books Catalog with Real Website Covers
const FALLBACK_WEBSITE_BOOKS = [
  { 
    id: "b1", 
    titleEn: "Rasili Braj Yatra - Gujarati", 
    titleHi: "रसीली ब्रज यात्रा - गुजराती", 
    coverImg: "https://maanmandir.org/wp-content/uploads/2026/06/Rasili-Braj-Yatra-English-Cover-for-website-pdf.jpg", 
    pdfUrl: "https://maanmandir.org/download/rasili-braj-yatra-gujarati-3/", 
    isNew: true, 
    downloads: "382 Downloads" 
  },
  { 
    id: "b2", 
    titleEn: "Rasili Braj Yatra - English", 
    titleHi: "रसीली ब्रज यात्रा - अंग्रेजी", 
    coverImg: "https://maanmandir.org/wp-content/uploads/2026/06/Rasili-Braj-Yatra-English-Cover-for-website-1-pdf.jpg", 
    pdfUrl: "https://maanmandir.org/download/rasili-braj-yatra-english/", 
    isNew: true, 
    downloads: "379 Downloads" 
  },
  { 
    id: "b3", 
    titleEn: "Radha Sudha Nidhi - Short Gutka", 
    titleHi: "श्री राधा सुधा निधि - लघुकथा गुटका", 
    coverImg: "https://maanmandir.org/wp-content/uploads/2025/10/Radha-sudha-5-5x8-5.jpg", 
    pdfUrl: "https://maanmandir.org/download/radha-sudha-nidhi-gutka/", 
    isNew: true, 
    downloads: "2.3K Downloads" 
  },
  { 
    id: "b4", 
    titleEn: "Bhagvatamritam - Part 02", 
    titleHi: "भगवदामृतम् - द्वितीय भाग", 
    coverImg: "https://maanmandir.org/wp-content/uploads/2023/09/bhagwatam-cover-part-02-1-pdf.jpg", 
    pdfUrl: "https://maanmandir.org/download/bhagwatamritam-part-02/", 
    isNew: false, 
    downloads: "10.3K Downloads" 
  },
  { 
    id: "b5", 
    titleEn: "Bhagvatamritam - Part 01", 
    titleHi: "भगवदामृतम् - प्रथम भाग", 
    coverImg: "https://maanmandir.org/wp-content/uploads/2023/09/bhagwatam-cover-part-01-pdf.jpg", 
    pdfUrl: "https://maanmandir.org/download/bhagwatamritam-part-01/", 
    isNew: false, 
    downloads: "10.4K Downloads" 
  },
  { 
    id: "b6", 
    titleEn: "Gahvar Pradeep - Gahvarvan Ke Diptimaan Sant", 
    titleHi: "गह्वर प्रदीप - गह्वरवन के दीप्तिमान संत", 
    coverImg: "https://maanmandir.org/wp-content/uploads/2023/09/Gahvar-Pradeep-Cover.jpg", 
    pdfUrl: "https://maanmandir.org/download/gahvar-pradeep-gahvarvan-ke-jyotimaan-sant/", 
    isNew: false, 
    downloads: "9.4K Downloads" 
  },
  { 
    id: "b7", 
    titleEn: "Mandir Nirman Se Bhagwat Prapti", 
    titleHi: "मंदिर निर्माण से भगवत प्राप्ति", 
    coverImg: "https://maanmandir.org/wp-content/uploads/2023/03/Mandir-Nirman-Se-Bhagwat-Prapti-front-page-pdf.jpg", 
    pdfUrl: "https://maanmandir.org/download/mandir-nirman-se-bhagwat-prapti/", 
    isNew: false, 
    downloads: "10.1K Downloads" 
  },
  { 
    id: "b8", 
    titleEn: "Shri Chandra Sakhi Ji Rachit Pad", 
    titleHi: "श्री चंद्रसखी जी रचित पद", 
    coverImg: "https://maanmandir.org/wp-content/uploads/2023/03/Shri-Chandra-Sakhi-Ji-Rachit-Pad-front-page-pdf.jpg", 
    pdfUrl: "https://maanmandir.org/download/shri-chandra-sakhi-ji-rachit-pad/", 
    isNew: false, 
    downloads: "10.5K Downloads" 
  },
  { 
    id: "b9", 
    titleEn: "Shri Radha Ras", 
    titleHi: "श्री राधा रस", 
    coverImg: "https://maanmandir.org/wp-content/uploads/2023/03/Shri-Radha-Ras-front-page-pdf.jpg", 
    pdfUrl: "https://maanmandir.org/download/shri-radha-ras/", 
    isNew: false, 
    downloads: "10.8K Downloads" 
  },
  { 
    id: "b10", 
    titleEn: "Shri Radha Sudha Shatak", 
    titleHi: "श्री राधा सुधा शतक", 
    coverImg: "https://maanmandir.org/wp-content/uploads/2023/03/Shri-Radha-Sudha-Shatak-front-page-pdf.jpg", 
    pdfUrl: "https://maanmandir.org/download/shri-radha-sudha-shatak/", 
    isNew: false, 
    downloads: "10.4K Downloads" 
  }
];

// Official MaanMandir.org Monthly Magazines Catalog
const FALLBACK_WEBSITE_MAGAZINES = [
  { 
    id: "m1", 
    titleEn: "Maan Mandir Patrika June 2026", 
    titleHi: "मान मंदिर मासिक पत्रिका - जून २०२६ अंक", 
    coverImg: "https://maanmandir.org/wp-content/uploads/2026/07/2026-06-Patrika-front-page-pdf.jpg", 
    pdfUrl: "https://maanmandir.org/download/patrika-june-2026/", 
    isNew: true, 
    downloads: "271 Downloads" 
  },
  { 
    id: "m2", 
    titleEn: "Maan Mandir Patrika May 2026", 
    titleHi: "मान मंदिर मासिक पत्रिका - मई २०२६ अंक", 
    coverImg: "https://maanmandir.org/wp-content/uploads/2026/07/2026-05-Patrika-front-page-pdf.jpg", 
    pdfUrl: "https://maanmandir.org/download/patrika-may-2026/", 
    isNew: true, 
    downloads: "235 Downloads" 
  },
  { 
    id: "m3", 
    titleEn: "Maan Mandir Patrika April 2026", 
    titleHi: "मान मंदिर मासिक पत्रिका - अप्रैल २०२६ अंक", 
    coverImg: "https://maanmandir.org/wp-content/uploads/2026/07/2026-04-Patrika-frong-page-pdf.jpg", 
    pdfUrl: "https://maanmandir.org/download/patrika-april-2026/", 
    isNew: true, 
    downloads: "213 Downloads" 
  },
  { 
    id: "m4", 
    titleEn: "Maan Mandir Patrika March 2026", 
    titleHi: "मान मंदिर मासिक पत्रिका - मार्च २०२६ अंक", 
    coverImg: "https://maanmandir.org/wp-content/uploads/2026/07/2026-03-Patrika-front-page-pdf.jpg", 
    pdfUrl: "https://maanmandir.org/download/patrika-mar-2026/", 
    isNew: false, 
    downloads: "122 Downloads" 
  },
  { 
    id: "m5", 
    titleEn: "Maan Mandir Patrika February 2026", 
    titleHi: "मान मंदिर मासिक पत्रिका - फरवरी २०२६ अंक", 
    coverImg: "https://maanmandir.org/wp-content/uploads/2026/02/2026-02-Patrika-front-page-pdf.jpg", 
    pdfUrl: "https://maanmandir.org/download/patrika-feb-2026/", 
    isNew: false, 
    downloads: "2.7K Downloads" 
  },
  { 
    id: "m6", 
    titleEn: "Maan Mandir Patrika January 2026", 
    titleHi: "मान मंदिर मासिक पत्रिका - जनवरी २०२६ अंक", 
    coverImg: "https://maanmandir.org/wp-content/uploads/2026/02/2026-01-Patrika-front-page-pdf.jpg", 
    pdfUrl: "https://maanmandir.org/download/patrika-jan-2026/", 
    isNew: false, 
    downloads: "2.7K Downloads" 
  },
  { 
    id: "m7", 
    titleEn: "Maan Mandir Patrika December 2025", 
    titleHi: "मान मंदिर मासिक पत्रिका - दिसंबर २०२५ अंक", 
    coverImg: "https://maanmandir.org/wp-content/uploads/2026/02/2025-12-Patrika-front-page-pdf.jpg", 
    pdfUrl: "https://maanmandir.org/download/patrika-dec-2025/", 
    isNew: false, 
    downloads: "2.6K Downloads" 
  },
  { 
    id: "m8", 
    titleEn: "Maan Mandir Patrika November 2025", 
    titleHi: "मान मंदिर मासिक पत्रिका - नवंबर २०२५ अंक", 
    coverImg: "https://maanmandir.org/wp-content/uploads/2026/02/2025-11-Patrika-front-page-pdf.jpg", 
    pdfUrl: "https://maanmandir.org/download/patrika-nov-2025/", 
    isNew: false, 
    downloads: "1.8K Downloads" 
  },
  { 
    id: "m9", 
    titleEn: "Maan Mandir Patrika October 2025", 
    titleHi: "मान मंदिर मासिक पत्रिका - अक्टूबर २०२५ अंक", 
    coverImg: "https://maanmandir.org/wp-content/uploads/2026/02/2025-10-Patrika-front-page-pdf.jpg", 
    pdfUrl: "https://maanmandir.org/download/patrika-oct-2025/", 
    isNew: false, 
    downloads: "1.8K Downloads" 
  },
  { 
    id: "m10", 
    titleEn: "Maan Mandir Patrika September 2025", 
    titleHi: "मान मंदिर मासिक पत्रिका - सितंबर २०२५ अंक", 
    coverImg: "https://maanmandir.org/wp-content/uploads/2026/02/2025-09-Patrika-front-page-pdf.jpg", 
    pdfUrl: "https://maanmandir.org/download/patrika-sep-2025/", 
    isNew: false, 
    downloads: "1.7K Downloads" 
  },
  { 
    id: "m11", 
    titleEn: "Maan Mandir Patrika August 2025", 
    titleHi: "मान मंदिर मासिक पत्रिका - अगस्त २०२५ अंक", 
    coverImg: "https://maanmandir.org/wp-content/uploads/2025/08/2025-08-Patrika-front-page.jpg", 
    pdfUrl: "https://maanmandir.org/download/patrika-aug-2025/", 
    isNew: false, 
    downloads: "4.8K Downloads" 
  }
];

// DOM Initialization
document.addEventListener('DOMContentLoaded', () => {
  initLanguage();
  initFontResizer();
  initNavigation();
  initNotificationDrawer();
  initSideNavigationDrawer();
  initPwaInstallPrompt();
  renderContent();
  fetchLiveWebsiteBooks();
  fetchLiveWebsiteMagazines();
  initAudioPlayer();
  initSearch();
  registerServiceWorker();
});

// One-Tap Clipboard Copy Helper
window.copyToClipboard = function(text, successMsg) {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(successMsg || 'Copied to clipboard!');
    }).catch(err => {
      fallbackCopyText(text, successMsg);
    });
  } else {
    fallbackCopyText(text, successMsg);
  }
};

function fallbackCopyText(text, successMsg) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.style.position = "fixed";
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    document.execCommand('copy');
    showToast(successMsg || 'Copied!');
  } catch (err) {
    alert('Copy failed: ' + text);
  }
  document.body.removeChild(textArea);
}

function showToast(msg) {
  let toast = document.getElementById('toast-notification');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast-notification';
    toast.style.cssText = 'position:fixed; bottom:80px; left:50%; transform:translateX(-50%); background:#032a61; color:#FFF; padding:10px 18px; border-radius:30px; font-weight:800; font-size:0.84rem; box-shadow:0 4px 14px rgba(0,0,0,0.3); z-index:999; transition:opacity 0.3s ease; opacity:0; pointer-events:none;';
    document.body.appendChild(toast);
  }
  toast.textContent = '✅ ' + msg;
  toast.style.opacity = '1';
  setTimeout(() => {
    toast.style.opacity = '0';
  }, 2200);
}

// Bilingual Language Switcher Logic
function initLanguage() {
  setLanguage(currentLang);
}

window.setLanguage = function(lang) {
  currentLang = lang;
  localStorage.setItem('mm_lang', lang);

  const enBtn = document.getElementById('btn-lang-en');
  const hiBtn = document.getElementById('btn-lang-hi');
  if (enBtn) enBtn.classList.toggle('active', lang === 'en');
  if (hiBtn) hiBtn.classList.toggle('active', lang === 'hi');

  const t = TRANSLATIONS[lang];

  setElementText('txt-app-title', t.appTitle);
  setElementText('txt-app-subtitle', t.appSubtitle);
  setElementText('txt-live-banner', t.liveBanner);
  setElementText('txt-watch-live', t.watchLive);
  setElementText('txt-hero-tag', t.heroTag);
  setElementText('txt-hero-title', t.heroTitle);
  setElementText('txt-hero-subtitle', t.heroSubtitle);
  setElementText('txt-section-resources', t.sectionResources);
  setElementText('txt-tile-live', t.tileLive);
  setElementText('txt-tile-live-desc', t.tileLiveDesc);
  setElementText('txt-tile-audio', t.tileAudio);
  setElementText('txt-tile-audio-desc', t.tileAudioDesc);
  setElementText('txt-tile-books', t.tileBooks);
  setElementText('txt-tile-books-desc', t.tileBooksDesc);
  setElementText('txt-tile-seva', t.tileSeva);
  setElementText('txt-tile-seva-desc', t.tileSevaDesc);
  setElementText('txt-latest-updates', t.latestUpdates);
  setElementText('txt-tab-home', t.tabHome);
  setElementText('txt-tab-live', t.tabLive);
  setElementText('txt-tab-audio', t.tabAudio);
  setElementText('txt-tab-books', t.tabBooks);
  setElementText('txt-tab-seva', t.tabSeva);
  setElementText('txt-tab-donate', t.tabDonate);
  setElementText('txt-subtab-books', t.subtabBooks);
  setElementText('txt-subtab-magazines', t.subtabMagazines);
  setElementText('txt-notifications-title', t.notificationsTitle);
  
  // SoundCloud & Maanini Banner Text
  setElementText('txt-sc-title', t.scTitle);
  setElementText('txt-sc-desc', t.scDesc);
  setElementText('txt-sc-btn', t.scBtn);
  setElementText('txt-maanini-title', t.maaniniTitle);
  setElementText('txt-maanini-desc', t.maaniniDesc);
  setElementText('txt-maanini-btn', t.maaniniBtn);
  
  // PWA Install Prompt Text
  setElementText('txt-pwa-title', t.pwaTitle);
  setElementText('txt-pwa-subtitle', t.pwaSubtitle);
  setElementText('txt-pwa-btn', t.pwaBtn);

  // Bulk ZIP Downloads Text
  setElementText('txt-zip-title', t.zipTitle);
  setElementText('txt-zip-desc', t.zipDesc);
  setElementText('txt-zip-btn', t.zipBtn);

  // Front Page Gaushala Tile & Braj Yatra Registration Card Text
  setElementText('txt-gaushala-tile-title', t.gaushalaTileTitle);
  setElementText('txt-gaushala-tile-desc', t.gaushalaTileDesc);
  setElementText('txt-gaushala-tile-btn', t.gaushalaTileBtn);
  setElementText('txt-yatra-card-title', t.yatraCardTitle);
  setElementText('txt-yatra-card-desc', t.yatraCardDesc);
  setElementText('txt-yatra-card-btn', t.yatraCardBtn);

  // Donation Section Dynamic Texts
  setElementText('txt-donate-header', t.donateHeader);
  setElementText('txt-mm-card-info', t.mmCardInfo);
  setElementText('txt-renov-card-info', t.renovCardInfo);
  setElementText('txt-nri-tag', t.nriTag);
  setElementText('txt-nri-title', t.nriTitle);
  setElementText('txt-nri-desc', t.nriDesc);
  setElementText('txt-nri-btn', t.nriBtn);

  setElementText('txt-mm-card-title', t.mmCardTitle);
  setElementText('txt-mm-card-sub', t.mmCardSub);
  setElementText('txt-lbl-merchant-name', t.lblMerchantName);
  setElementText('txt-lbl-upi-vpa', t.lblUpiVpa);
  setElementText('txt-lbl-bank-name', t.lblBankName);
  setElementText('txt-lbl-supported-payments', t.lblSupportedPayments);
  setElementText('txt-val-supported-payments', t.valSupportedPayments);

  setElementText('txt-renov-card-title', t.renovCardTitle);
  setElementText('txt-renov-card-sub', t.renovCardSub);
  setElementText('txt-lbl-account-name', t.lblAccountName);
  setElementText('txt-lbl-bank-name2', t.lblBankName);
  setElementText('txt-lbl-branch', t.lblBranch);
  setElementText('txt-lbl-helpline', t.lblHelpline);
  setElementText('txt-lbl-website', t.lblWebsite);

  setElementText('txt-gau-card-title', t.gauCardTitle);
  setElementText('txt-gau-card-sub', t.gauCardSub);
  setElementText('txt-lbl-beneficiary', t.lblBeneficiary);
  setElementText('txt-lbl-mid', t.lblMid);
  setElementText('txt-lbl-tid', t.lblTid);
  setElementText('txt-lbl-bhim-ref', t.lblBhimRef);
  setElementText('txt-lbl-mastercard-ref', t.lblMastercardRef);
  setElementText('txt-lbl-visa-ref', t.lblVisaRef);
  setElementText('txt-lbl-helpdesk', t.lblHelpdesk);

  setElementText('txt-gateways-header', t.gatewaysHeader);
  setElementText('txt-gw1-title', t.gw1Title);
  setElementText('txt-gw1-desc', t.gw1Desc);
  setElementText('txt-gw1-btn', t.gw1Btn);
  setElementText('txt-gw2-title', t.gw2Title);
  setElementText('txt-gw2-desc', t.gw2Desc);
  setElementText('txt-gw2-btn', t.gw2Btn);
  setElementText('txt-social-header', isHi ? '🌐 आधिकारिक सोशल मीडिया एवं भक्त कम्युनिटी' : '🌐 Official Social Media & Devotee Communities');

  const searchInput = document.getElementById('global-search-input');
  if (searchInput) searchInput.placeholder = t.searchPlaceholder;

  renderContent();
  renderNotificationsList();
  renderSideDrawerMenu();
};

function setElementText(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

// Side Navigation Drawer Menu Logic (Maanmandir.org Website Gateway)
function initSideNavigationDrawer() {
  const menuBtn = document.getElementById('menu-drawer-btn');
  const sideOverlay = document.getElementById('side-drawer-overlay');
  const sidePanel = document.getElementById('side-drawer-panel');
  const sideCloseBtn = document.getElementById('side-drawer-close-btn');

  function openSideDrawer() {
    sideOverlay.classList.add('active');
    sidePanel.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeSideDrawer() {
    sideOverlay.classList.remove('active');
    sidePanel.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (menuBtn) menuBtn.addEventListener('click', openSideDrawer);
  if (sideCloseBtn) sideCloseBtn.addEventListener('click', closeSideDrawer);
  if (sideOverlay) sideOverlay.addEventListener('click', closeSideDrawer);

  renderSideDrawerMenu();
}

window.handleSideMenuLinkClick = function(isTab, targetTab, subTab, url, isAction) {
  const sideOverlay = document.getElementById('side-drawer-overlay');
  const sidePanel = document.getElementById('side-drawer-panel');
  if (sideOverlay) sideOverlay.classList.remove('active');
  if (sidePanel) sidePanel.classList.remove('active');
  document.body.style.overflow = '';

  if (isAction === 'openQrModal') {
    openQrModal('mm');
  } else if (isTab) {
    switchTab(targetTab);
    if (subTab) switchPublicationSubTab(subTab);
  } else if (url) {
    window.open(url, '_blank');
  }
};

function renderSideDrawerMenu() {
  const container = document.getElementById('side-menu-categories-list');
  if (!container) return;

  const isHi = currentLang === 'hi';

  container.innerHTML = MAANMANDIR_ORG_MENU_CATEGORIES.map(cat => `
    <div class="menu-cat-group">
      <div class="menu-cat-title">
        <span>${cat.icon}</span>
        <span>${isHi ? cat.titleHi : cat.titleEn}</span>
      </div>
      <div class="menu-links-list">
        ${cat.links.map(l => {
          if (l.isAction) {
            return `
              <a href="#" onclick="handleSideMenuLinkClick(false, '', '', '', '${l.isAction}'); return false;" class="menu-link-item">
                <span>${isHi ? l.textHi : l.textEn}</span>
                <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 4v1m6 11h2m-6 0h-2v4m0-6v-4m6 10v-2m-6 0h-2m10-8V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v4a2 2 0 002 2h4a2 2 0 002-2zM6 20H4a2 2 0 01-2-2v-4a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2zM6 10H4a2 2 0 01-2-2V4a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2z"></path></svg>
              </a>
            `;
          } else if (l.isTab) {
            return `
              <a href="#" onclick="handleSideMenuLinkClick(true, '${l.isTab}', '${l.subTab || ''}', ''); return false;" class="menu-link-item">
                <span>${isHi ? l.textHi : l.textEn}</span>
                <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"></path></svg>
              </a>
            `;
          } else {
            return `
              <a href="${l.url}" target="_blank" onclick="handleSideMenuLinkClick(false, '', '', '${l.url}');" class="menu-link-item">
                <span>${isHi ? l.textHi : l.textEn}</span>
                <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
              </a>
            `;
          }
        }).join('')}
      </div>
    </div>
  `).join('');
}

// Fetch Live Books with Real WordPress Titles & Cover Artworks (Category 208)
function fetchLiveWebsiteBooks() {
  fetchedBooksList = FALLBACK_WEBSITE_BOOKS; // Start with verified catalog immediately

  fetch('https://maanmandir.org/wp-json/wp/v2/posts?categories=208&per_page=50')
    .then(res => res.json())
    .then(posts => {
      if (posts && posts.length > 0) {
        const parsedBooks = [];
        posts.forEach((post, idx) => {
          let cleanTitle = post.title && post.title.rendered 
            ? post.title.rendered.replace(/&#8211;/g, '-').replace(/&#8217;/g, "'").replace(/&amp;/g, '&').trim()
            : 'Maan Mandir Book';

          let coverImgUrl = '';
          let pdfDownloadUrl = '';
          let downloadCount = 'Synced';

          if (post.content && post.content.rendered) {
            const parser = new DOMParser();
            const doc = parser.parseFromString(post.content.rendered, 'text/html');
            
            const imgEl = doc.querySelector('img');
            if (imgEl) coverImgUrl = imgEl.getAttribute('src');

            const linkEl = doc.querySelector('a.dlm-download-link');
            if (linkEl) pdfDownloadUrl = linkEl.getAttribute('href');

            const countEl = doc.querySelector('.dlm-download-count');
            if (countEl) downloadCount = countEl.textContent.trim();
          }

          if (cleanTitle && pdfDownloadUrl) {
            parsedBooks.push({
              id: `wp-post-${post.id}`,
              titleEn: cleanTitle,
              titleHi: cleanTitle,
              coverImg: coverImgUrl || FALLBACK_WEBSITE_BOOKS[idx % FALLBACK_WEBSITE_BOOKS.length].coverImg,
              pdfUrl: pdfDownloadUrl,
              isNew: idx < 3,
              downloads: downloadCount
            });
          }
        });

        if (parsedBooks.length > 0) {
          fetchedBooksList = parsedBooks;
          const searchInput = document.getElementById('global-search-input');
          const query = searchInput ? searchInput.value.trim() : '';
          if (currentSubTab === 'books') renderBooksTab(query);
        }
      }
    })
    .catch(err => {
      console.log('Website Live Fetch Sync (Books): Using pre-cached catalog', err);
    });
}

// Fetch Live Magazine Posts with Real WordPress Titles & Front-Page Cover Artworks (Category 175)
function fetchLiveWebsiteMagazines() {
  fetchedMagazinesList = FALLBACK_WEBSITE_MAGAZINES; // Start with verified catalog immediately

  fetch('https://maanmandir.org/wp-json/wp/v2/posts?categories=175&per_page=50')
    .then(res => res.json())
    .then(posts => {
      if (posts && posts.length > 0) {
        const parsedMagazines = [];
        posts.forEach((post, idx) => {
          let cleanTitle = post.title && post.title.rendered 
            ? post.title.rendered.replace(/&#8211;/g, '-').replace(/&#8217;/g, "'").replace(/&amp;/g, '&').trim()
            : 'Maan Mandir Patrika';

          let coverImgUrl = '';
          let pdfDownloadUrl = '';
          let downloadCount = 'Synced';

          if (post.content && post.content.rendered) {
            const parser = new DOMParser();
            const doc = parser.parseFromString(post.content.rendered, 'text/html');
            
            const imgEl = doc.querySelector('img');
            if (imgEl) coverImgUrl = imgEl.getAttribute('src');

            const linkEl = doc.querySelector('a.dlm-download-link');
            if (linkEl) pdfDownloadUrl = linkEl.getAttribute('href');

            const countEl = doc.querySelector('.dlm-download-count');
            if (countEl) downloadCount = countEl.textContent.trim();
          }

          if (cleanTitle && pdfDownloadUrl) {
            parsedMagazines.push({
              id: `wp-mag-${post.id}`,
              titleEn: cleanTitle,
              titleHi: cleanTitle.replace('Maan Mandir Patrika', 'मान मंदिर मासिक पत्रिका'),
              coverImg: coverImgUrl || FALLBACK_WEBSITE_MAGAZINES[idx % FALLBACK_WEBSITE_MAGAZINES.length].coverImg,
              pdfUrl: pdfDownloadUrl,
              isNew: idx < 3,
              downloads: downloadCount
            });
          }
        });

        if (parsedMagazines.length > 0) {
          fetchedMagazinesList = parsedMagazines;
          const searchInput = document.getElementById('global-search-input');
          const query = searchInput ? searchInput.value.trim() : '';
          if (currentSubTab === 'magazines') renderMagazinesTab(query);
        }
      }
    })
    .catch(err => {
      console.log('Website Live Fetch Sync (Magazines): Using pre-cached magazine catalog', err);
    });
}

// Switch Sub Tab (Books vs Magazines)
window.switchPublicationSubTab = function(subTab) {
  currentSubTab = subTab;

  const booksBtn = document.getElementById('btn-subtab-books');
  const magBtn = document.getElementById('btn-subtab-magazines');

  if (booksBtn) booksBtn.classList.toggle('active', subTab === 'books');
  if (magBtn) magBtn.classList.toggle('active', subTab === 'magazines');

  const searchInput = document.getElementById('global-search-input');
  const query = searchInput ? searchInput.value.trim() : '';

  if (subTab === 'books') renderBooksTab(query);
  else renderMagazinesTab(query);
};

// Interactive Font Size Controls (A- / A / A+)
function initFontResizer() {
  applyFontStep(fontScaleStep);
}

window.changeFontSize = function(delta) {
  if (delta === 0) fontScaleStep = 1;
  else fontScaleStep = Math.max(0, Math.min(3, fontScaleStep + delta));
  applyFontStep(fontScaleStep);
};

function applyFontStep(step) {
  fontScaleStep = step;
  localStorage.setItem('mm_font_step', fontScaleStep);

  const fontScales = [95, 112, 128, 145];
  document.documentElement.style.fontSize = fontScales[fontScaleStep] + '%';

  const decBtn = document.getElementById('btn-font-dec');
  const resetBtn = document.getElementById('btn-font-reset');
  const incBtn = document.getElementById('btn-font-inc');

  if (decBtn) decBtn.classList.toggle('active', step === 0);
  if (resetBtn) resetBtn.classList.toggle('active', step === 1);
  if (incBtn) incBtn.classList.toggle('active', step >= 2);
}

// Navigation Tabs
function initNavigation() {
  const navItems = document.querySelectorAll('.nav-item');
  const tabPanes = document.querySelectorAll('.tab-pane');

  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const targetTab = item.getAttribute('data-tab');

      navItems.forEach(nav => nav.classList.remove('active'));
      tabPanes.forEach(pane => pane.classList.remove('active'));

      item.classList.add('active');
      const activePane = document.getElementById(`tab-${targetTab}`);
      if (activePane) activePane.classList.add('active');

      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
}

// Devotee Notifications Drawer
function initNotificationDrawer() {
  const bellBtn = document.getElementById('bell-notification-btn');
  const drawerOverlay = document.getElementById('drawer-overlay');
  const drawerPanel = document.getElementById('drawer-panel');
  const drawerCloseBtn = document.getElementById('drawer-close-btn');

  function openDrawer() {
    drawerOverlay.classList.add('active');
    drawerPanel.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    drawerOverlay.classList.remove('active');
    drawerPanel.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (bellBtn) bellBtn.addEventListener('click', openDrawer);
  if (drawerCloseBtn) drawerCloseBtn.addEventListener('click', closeDrawer);
  if (drawerOverlay) drawerOverlay.addEventListener('click', closeDrawer);

  renderNotificationsList();
}

function renderNotificationsList() {
  const container = document.getElementById('notifications-container');
  if (!container) return;

  const isHi = currentLang === 'hi';
  container.innerHTML = APP_DATA.notifications.map(notif => `
    <div class="notification-item ${notif.unread ? 'unread' : ''}">
      <div style="font-weight: 800; font-size: 0.92rem; color: var(--text-dark); margin-bottom: 2px;">
        ${isHi ? notif.titleHi : notif.titleEn}
      </div>
      <div style="font-size: 0.82rem; color: var(--text-medium);">
        ${isHi ? notif.descHi : notif.descEn}
      </div>
      <div class="notification-time">${notif.time}</div>
    </div>
  `).join('');
}

// Render Main Content
function renderContent() {
  renderHomeRecentUpdates();
  renderYouTubeTab();
  renderSocialPlatforms();
  const searchInput = document.getElementById('global-search-input');
  const query = searchInput ? searchInput.value.trim() : '';

  if (currentSubTab === 'books') renderBooksTab(query);
  else renderMagazinesTab(query);
}

function renderHomeRecentUpdates() {
  const container = document.getElementById('home-updates-list');
  if (!container) return;

  const isHi = currentLang === 'hi';
  const recentItems = [
    { title: isHi ? "🔴 लाइव: सांध्य प्रवचन श्री रमेश बाबा जी" : "🔴 Live: Evening Pravachan by Ramesh Baba Ji", type: isHi ? "लाइव प्रसारण" : "Live Webcast", time: "Active Now" },
    { title: isHi ? "💳 NRI व विदेशी भक्त सेवा (PayPal & Cards)" : "💳 NRI & Global Devotee Seva (PayPal & Cards)", type: "PayPal NRI", time: "Official" },
    { title: isHi ? "💖 भारतक्यूआर एवं यूपीआई गौसेवा दान" : "💖 BharatQR & UPI Gauseva Donation", type: "Donate", time: "Official" }
  ];

  container.innerHTML = recentItems.map(item => `
    <div class="content-card">
      <div class="card-thumb">
        <span>${item.type.includes('Live') || item.type.includes('प्रसारण') ? '🔴' : item.type.includes('Donate') || item.type.includes('PayPal') ? '💳' : '🎵'}</span>
      </div>
      <div class="card-body">
        <div class="card-title">${item.title}</div>
        <div class="card-meta">
          <span>${item.type}</span> • <span>${item.time}</span>
        </div>
      </div>
      <button class="card-action-btn" onclick="switchTab('${item.type.includes('Live') || item.type.includes('प्रसारण') ? 'youtube' : item.type.includes('Donate') || item.type.includes('PayPal') ? 'donate' : 'audio'}')">
        <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"></path></svg>
      </button>
    </div>
  `).join('');
}

// Official Maan Mandir Social Media & Devotee Community Catalog
const MAAN_MANDIR_SOCIAL_PLATFORMS = [
  {
    id: "soc-whatsapp",
    nameEn: "Official WhatsApp Channel",
    nameHi: "आधिकारिक व्हाट्सएप चैनल",
    handle: "Maan Mandir Devotee Broadcast",
    url: "https://whatsapp.com/channel/0029Va4x7nK29759H6O6R92N",
    icon: "💬",
    brandColor: "#25D366",
    badgeEn: "DAILY UPDATES",
    badgeHi: "दैनिक अपडेट्स",
    descEn: "Get daily Pravachan clips, Braj Darshan photos, festival notices & Yatra updates directly on WhatsApp.",
    descHi: "दैनिक प्रवचन, श्रीजी दर्शन, उत्सव सूचनाएं एवं यात्रा अपडेट्स सीधे अपने व्हाट्सएप पर प्राप्त करें।"
  },
  {
    id: "soc-instagram",
    nameEn: "Instagram Official Page",
    nameHi: "इन्स्टाग्राम आधिकारिक पेज",
    handle: "@maanmandir.barsana",
    url: "https://www.instagram.com/maanmandir.barsana/",
    icon: "📸",
    brandColor: "#E1306C",
    badgeEn: "REELS & DARSHAN",
    badgeHi: "रील्स व दर्शन",
    descEn: "Daily HD Darshan photos, divine Kirtan reels, and short Pravachan clips of Shri Ramesh Baba Ji Maharaj.",
    descHi: "श्रीजी नित्य श्रृंगार दर्शन, ब्रज कीर्तन रील्स एवं श्री बाबा जी महाराज के प्रेरणादायक विचार।"
  },
  {
    id: "soc-facebook",
    nameEn: "Facebook Official Page",
    nameHi: "फ़ेसबुक आधिकारिक पेज",
    handle: "Maan Mandir Seva Sansthan",
    url: "https://www.facebook.com/MaanMandirBarsana/",
    icon: "📘",
    brandColor: "#1877F2",
    badgeEn: "COMMUNITY PAGE",
    badgeHi: "आधिकारिक पेज",
    descEn: "Live event streams, detailed Seva news, articles, and community announcements for devotees worldwide.",
    descHi: "लाइव कार्यक्रम, सेवा समाचार, धार्मिक लेख एवं वैश्विक भक्त समुदाय समाचार।"
  },
  {
    id: "soc-youtube",
    nameEn: "YouTube Main Channel",
    nameHi: "यूट्यूब मुख्य चैनल",
    handle: "@MaanMandir",
    url: "https://www.youtube.com/MaanMandir",
    icon: "▶",
    brandColor: "#FF0000",
    badgeEn: "LIVE WEBCASTS",
    badgeHi: "लाइव प्रसारण",
    descEn: "Watch daily Live Pravachans, Srimad Bhagavat Kathas, and Gauseva webcasts in high definition.",
    descHi: "नित्य लाइव प्रवचन, श्रीमद्भागवत कथाएं एवं गौसेवा कार्यक्रमों का सीधा प्रसारण।"
  }
];

// Render Official Social Media & Community Platforms Catalog
function renderSocialPlatforms() {
  const container = document.getElementById('social-platforms-list');
  if (!container) return;

  const isHi = currentLang === 'hi';
  container.innerHTML = MAAN_MANDIR_SOCIAL_PLATFORMS.map(sp => `
    <div class="content-card" onclick="window.open('${sp.url}', '_blank')" style="cursor: pointer; flex-direction: column; align-items: stretch; gap: 10px; border-left: 4px solid ${sp.brandColor}; box-shadow: var(--shadow-sm); padding: 14px; background: var(--bg-primary);">
      <div style="display: flex; align-items: center; justify-content: space-between;">
        <div style="display: flex; align-items: center; gap: 10px;">
          <div style="width: 38px; height: 38px; border-radius: var(--radius-full); background: ${sp.brandColor}15; color: ${sp.brandColor}; display: flex; align-items: center; justify-content: center; font-size: 1.2rem; font-weight: 800;">
            ${sp.icon}
          </div>
          <div>
            <h4 style="font-size: 1rem; font-weight: 800; color: var(--text-dark); margin: 0;">${isHi ? sp.nameHi : sp.nameEn}</h4>
            <div style="font-size: 0.78rem; color: var(--text-muted); font-weight: 600;">${sp.handle}</div>
          </div>
        </div>
        <span style="background: ${sp.brandColor}18; color: ${sp.brandColor}; font-size: 0.65rem; font-weight: 800; padding: 3px 8px; border-radius: var(--radius-full); text-transform: uppercase;">
          ${isHi ? sp.badgeHi : sp.badgeEn}
        </span>
      </div>
      <p style="font-size: 0.83rem; color: var(--text-medium); line-height: 1.45; margin: 0;">
        ${isHi ? sp.descHi : sp.descEn}
      </p>
      <a href="${sp.url}" target="_blank" onclick="event.stopPropagation();" class="btn-primary" style="background: ${sp.brandColor}; color: #FFF; border: none; width: 100%; justify-content: center; text-decoration: none; font-size: 0.82rem; font-weight: 800; margin-top: 4px;">
        ${sp.icon} <span>${isHi ? 'पेज / चैनल खोलें ↗' : 'Open Platform ↗'}</span>
      </a>
    </div>
  `).join('');
}
  const container = document.getElementById('youtube-videos-list');
  if (!container) return;

  const isHi = currentLang === 'hi';
  container.innerHTML = MAAN_MANDIR_YOUTUBE_CHANNELS.map(ch => `
    <div class="youtube-gateway-card ${ch.isLive ? 'is-live-channel' : ''}">
      <div class="youtube-gateway-header">
        <div class="youtube-gateway-brand">
          <div style="position: relative; display: inline-flex;">
            ${ch.cdnAvatar ? `
              <img class="youtube-gateway-avatar" src="${ch.cdnAvatar}" alt="${isHi ? ch.nameHi : ch.nameEn}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
              <div class="youtube-gateway-icon-fallback" style="display:none;">
                <svg width="24" height="24" fill="#FF0000" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </div>
            ` : `
              <div class="youtube-gateway-icon-fallback">
                <svg width="24" height="24" fill="#FF0000" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </div>
            `}
            ${ch.isLive ? '<span class="avatar-live-indicator-dot"></span>' : ''}
          </div>
          <div class="youtube-gateway-titles">
            <div class="youtube-gateway-name">${isHi ? ch.nameHi : ch.nameEn}</div>
            <div class="youtube-gateway-handle">${ch.handle}</div>
          </div>
        </div>
        <div style="display: flex; flex-direction: column; align-items: flex-end; gap: 4px;">
          ${ch.isLive ? `
            <span class="live-red-dot-container">
              <span class="live-red-dot-animated"></span> LIVE
            </span>
          ` : `
            <span class="youtube-gateway-badge">${isHi ? ch.badgeHi : ch.badgeEn}</span>
          `}
        </div>
      </div>
      <p class="youtube-gateway-desc">${isHi ? ch.descHi : ch.descEn}</p>
      <a href="${ch.url}" target="_blank" class="youtube-gateway-btn ${ch.isLive ? 'btn-live-red' : ''}">
        <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
        <span>${ch.isLive ? (isHi ? '🔴 लाइव देखें ↗' : '🔴 Watch Live Stream ↗') : (isHi ? 'यूट्यूब पर देखें ↗' : 'Open Channel in YouTube ↗')}</span>
      </a>
    </div>
  `).join('');
}

// Render Books Section with Single Direct Download / Open Button & Search Filter
function renderBooksTab(searchQuery = '') {
  const container = document.getElementById('books-catalog-list');
  if (!container) return;

  const isHi = currentLang === 'hi';
  let booksToRender = fetchedBooksList.length > 0 ? fetchedBooksList : FALLBACK_WEBSITE_BOOKS;

  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    booksToRender = booksToRender.filter(b => 
      (b.titleEn && b.titleEn.toLowerCase().includes(q)) ||
      (b.titleHi && b.titleHi.toLowerCase().includes(q))
    );
  }

  if (booksToRender.length === 0) {
    container.innerHTML = `
      <div style="text-align:center; padding:35px 15px; color:var(--text-muted);">
        <div style="font-size:2rem; margin-bottom:8px;">🔍</div>
        <p style="font-size:1.05rem; font-weight:700;">${isHi ? 'कोई पुस्तक नहीं मिली' : 'No books found matching search'}</p>
        <p style="font-size:0.82rem; margin-top:4px;">${isHi ? 'कृपया अन्य शब्द का प्रयोग करें' : 'Try searching for another title or author'}</p>
      </div>
    `;
    return;
  }

  container.innerHTML = booksToRender.map(book => `
    <div class="book-card">
      <div class="book-cover" style="${book.coverImg ? `background: url('${book.coverImg}') center/cover no-repeat;` : ''}">
        ${!book.coverImg ? `
          <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
          <div class="book-cover-title" style="margin-top: 6px;">${(isHi ? book.titleHi : book.titleEn).substring(0, 14)}...</div>
        ` : ''}
      </div>
      <div class="book-info">
        <div>
          <div class="book-title">${isHi ? book.titleHi : book.titleEn} ${book.isNew ? `<span class="badge-new" style="position:static; display:inline-block; vertical-align:middle; margin-left:6px;">${isHi ? 'नया' : 'NEW'}</span>` : ''}</div>
          <div class="book-desc">${isHi ? 'मान मंदिर सेवा संस्थान ट्रस्ट' : 'Maan Mandir Seva Sansthan Trust'}</div>
          <div style="font-size: 0.78rem; color: var(--text-muted);">PDF Document • ${book.downloads || 'Direct Download'}</div>
        </div>
        <div class="book-buttons" style="margin-top:8px;">
          <a href="${book.pdfUrl}" target="_blank" class="btn-primary" style="text-decoration:none; display:inline-flex; align-items:center; gap:6px; width:100%; justify-content:center;">
            <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
            ${isHi ? 'डाउनलोड / PDF खोलें' : 'Download / Open PDF'}
          </a>
        </div>
      </div>
    </div>
  `).join('');
}

// Render Monthly Magazine Section with Single Direct Download / Open Button & Search Filter
function renderMagazinesTab(searchQuery = '') {
  const container = document.getElementById('books-catalog-list');
  if (!container) return;

  const isHi = currentLang === 'hi';
  let magsToRender = fetchedMagazinesList.length > 0 ? fetchedMagazinesList : FALLBACK_WEBSITE_MAGAZINES;

  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    magsToRender = magsToRender.filter(m => 
      (m.titleEn && m.titleEn.toLowerCase().includes(q)) ||
      (m.titleHi && m.titleHi.toLowerCase().includes(q))
    );
  }

  if (magsToRender.length === 0) {
    container.innerHTML = `
      <div style="text-align:center; padding:35px 15px; color:var(--text-muted);">
        <div style="font-size:2rem; margin-bottom:8px;">🔍</div>
        <p style="font-size:1.05rem; font-weight:700;">${isHi ? 'कोई मासिक पत्रिका नहीं मिली' : 'No magazine issues found matching search'}</p>
        <p style="font-size:0.82rem; margin-top:4px;">${isHi ? 'कृपया अन्य वर्ष या माह खोजें' : 'Try searching for another month or year'}</p>
      </div>
    `;
    return;
  }

  container.innerHTML = magsToRender.map(mag => `
    <div class="book-card">
      <div class="book-cover" style="${mag.coverImg ? `background: url('${mag.coverImg}') center/cover no-repeat;` : 'background: linear-gradient(135deg, var(--primary-blue), #0f52ba);'}">
        ${!mag.coverImg ? `
          <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M19 20H5a2 2 0 01-2-2V6a2 2 0 01-2-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path></svg>
          <div class="book-cover-title" style="margin-top: 6px;">Patrika</div>
        ` : ''}
      </div>
      <div class="book-info">
        <div>
          <div class="book-title">${isHi ? mag.titleHi : mag.titleEn} ${mag.isNew ? `<span class="badge-new" style="position:static; display:inline-block; vertical-align:middle; margin-left:6px;">${isHi ? 'नया' : 'NEW'}</span>` : ''}</div>
          <div class="book-desc">${isHi ? 'मान मंदिर मासिक पत्रिका • बरसाना' : 'Maan Mandir Monthly Magazine • Barsana'}</div>
          <div style="font-size: 0.78rem; color: var(--text-muted);">PDF Edition • ${mag.downloads || 'Direct Download'}</div>
        </div>
        <div class="book-buttons" style="margin-top:8px;">
          <a href="${mag.pdfUrl}" target="_blank" class="btn-primary" style="text-decoration:none; display:inline-flex; align-items:center; gap:6px; width:100%; justify-content:center;">
            <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
            ${isHi ? 'डाउनलोड / PDF खोलें' : 'Download / Open PDF'}
          </a>
        </div>
      </div>
    </div>
  `).join('');
}

// Switch Tab Programmatically
window.switchTab = function(tabName) {
  const targetNav = document.querySelector(`.nav-item[data-tab="${tabName}"]`);
  if (targetNav) {
    targetNav.click();
  } else {
    // If not in bottom bar, handle tab pane switching directly
    const navItems = document.querySelectorAll('.nav-item');
    const tabPanes = document.querySelectorAll('.tab-pane');
    navItems.forEach(nav => nav.classList.remove('active'));
    tabPanes.forEach(pane => pane.classList.remove('active'));

    const activePane = document.getElementById(`tab-${tabName}`);
    if (activePane) activePane.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
};

// Modals Handler
window.openVideoModal = function(title) {
  const modal = document.getElementById('app-modal');
  const modalBody = document.getElementById('modal-body-content');
  if (!modal || !modalBody) return;

  modalBody.innerHTML = `
    <h3 style="font-size: 1.1rem; font-weight:800; color: var(--primary-blue); margin-bottom: 12px;">${title}</h3>
    <div style="width:100%; height:210px; background:#000; border-radius: var(--radius-md); display:flex; align-items:center; justify-content:center; color:#fff; flex-direction:column; gap:10px;">
      <svg width="48" height="48" fill="red" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
      <span style="font-size: 0.9rem;">YouTube Video Player Embed</span>
    </div>
    <div style="margin-top: 14px; text-align:right;">
      <button class="btn-primary" onclick="closeModal()">Close Player</button>
    </div>
  `;
  modal.classList.add('active');
};

window.closeModal = function() {
  const modal = document.getElementById('app-modal');
  if (modal) modal.classList.remove('active');
};

// Global Instant Perform Search Function
window.performSearch = function() {
  const searchInput = document.getElementById('global-search-input');
  if (!searchInput) return;

  const query = searchInput.value.trim();

  // Only switch active tab pane if user is NOT already on Publications tab
  const booksPane = document.getElementById('tab-books');
  if (booksPane && !booksPane.classList.contains('active')) {
    const navItems = document.querySelectorAll('.nav-item');
    const tabPanes = document.querySelectorAll('.tab-pane');
    navItems.forEach(nav => nav.classList.remove('active'));
    tabPanes.forEach(pane => pane.classList.remove('active'));

    const publicationsNav = document.querySelector('.nav-item[data-tab="books"]');
    if (publicationsNav) publicationsNav.classList.add('active');
    booksPane.classList.add('active');
  }

  if (currentSubTab === 'books') {
    renderBooksTab(query);
  } else {
    renderMagazinesTab(query);
  }
};

// Instant Realtime Search Filter Logic
function initSearch() {
  const searchInput = document.getElementById('global-search-input');
  if (!searchInput) return;

  // Bind to input, keyup, change, search, paste events for instant responsiveness
  ['input', 'keyup', 'change', 'search', 'paste'].forEach(evt => {
    searchInput.addEventListener(evt, window.performSearch);
  });

  // Handle Enter key on mobile soft keyboards
  searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.keyCode === 13) {
      e.preventDefault();
      window.performSearch();
      searchInput.blur();
    }
  });
}

// App QR Codes Modal Window Logic
window.openQrModal = function(initialTab = 'mm') {
  const modal = document.getElementById('qr-modal');
  if (modal) {
    switchQrTab(initialTab);
    modal.classList.add('active');
  }
};

window.closeQrModal = function() {
  const modal = document.getElementById('qr-modal');
  if (modal) modal.classList.remove('active');
};

window.switchQrTab = function(tabKey) {
  const mmBtn = document.getElementById('btn-qr-tab-mm');
  const maaniniBtn = document.getElementById('btn-qr-tab-maanini');
  const mmPane = document.getElementById('qr-pane-mm');
  const maaniniPane = document.getElementById('qr-pane-maanini');

  if (tabKey === 'mm') {
    if (mmBtn) mmBtn.classList.add('active');
    if (maaniniBtn) maaniniBtn.classList.remove('active');
    if (mmPane) mmPane.style.display = 'block';
    if (maaniniPane) maaniniPane.style.display = 'none';
  } else {
    if (maaniniBtn) maaniniBtn.classList.add('active');
    if (mmBtn) mmBtn.classList.remove('active');
    if (maaniniPane) maaniniPane.style.display = 'block';
    if (mmPane) mmPane.style.display = 'none';
  }
};

// PWA Installation & Add to Home Screen Popup Logic
let deferredPrompt = null;

function initPwaInstallPrompt() {
  const banner = document.getElementById('pwa-install-banner');

  // Check if app is already running in standalone PWA mode (saved on home screen)
  const isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
  if (isStandalone) {
    if (banner) {
      banner.classList.remove('active');
      banner.style.display = 'none';
      banner.remove(); // Safely remove from DOM in installed PWA mode!
    }
    return;
  }

  const dismissedTime = localStorage.getItem('mm_install_dismissed');
  if (dismissedTime && (Date.now() - parseInt(dismissedTime)) < 7 * 24 * 60 * 60 * 1000) {
    if (banner) banner.style.display = 'none';
    return; // User dismissed within last 7 days
  }

  const androidControls = document.getElementById('pwa-android-controls');
  const iosInstructions = document.getElementById('pwa-ios-instructions');
  const installBtn = document.getElementById('pwa-install-btn');

  const isIos = /iPhone|iPad|iPod/.test(navigator.userAgent) && !window.MSStream;

  // Android & Chrome beforeinstallprompt event listener
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    if (androidControls) androidControls.style.display = 'block';
    if (iosInstructions) iosInstructions.style.display = 'none';
    if (banner) {
      banner.style.display = 'flex';
      setTimeout(() => banner.classList.add('active'), 1000);
    }
  });

  if (installBtn) {
    installBtn.addEventListener('click', async () => {
      if (deferredPrompt) {
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        if (outcome === 'accepted') {
          dismissPwaInstall();
        }
        deferredPrompt = null;
      } else {
        // Fallback for Android Chrome browser menu
        alert(currentLang === 'hi' 
          ? 'होम स्क्रीन पर ऐप जोड़ने के लिए ब्राउज़र मेनू (⋮) पर टैप करें और "Add to Home screen" चुनें।' 
          : 'To add to home screen, tap the browser menu (⋮) and select "Add to Home screen".');
        dismissPwaInstall();
      }
    });
  }

  // Show banner on mobile devices (Android or iOS) if not running as standalone PWA
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  if (isMobile && !isStandalone) {
    if (isIos) {
      if (iosInstructions) iosInstructions.style.display = 'block';
      if (androidControls) androidControls.style.display = 'none';
    } else {
      if (androidControls) androidControls.style.display = 'block';
      if (iosInstructions) iosInstructions.style.display = 'none';
    }

    if (banner) {
      banner.style.display = 'flex';
      setTimeout(() => banner.classList.add('active'), 1500);
    }
  }

  window.addEventListener('appinstalled', () => {
    dismissPwaInstall();
  });
}

window.dismissPwaInstall = function() {
  const banner = document.getElementById('pwa-install-banner');
  if (banner) {
    banner.classList.remove('active');
    banner.style.display = 'none';
  }
  localStorage.setItem('mm_install_dismissed', Date.now().toString());
};

// Service Worker Registration for PWA Installation & Auto-Bypass
function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistrations().then(registrations => {
      registrations.forEach(registration => registration.update());
    });
    navigator.serviceWorker.register('./sw.js?v=68')
      .then(reg => {
        reg.onupdatefound = () => {
          const installingWorker = reg.installing;
          if (installingWorker) {
            installingWorker.onstatechange = () => {
              if (installingWorker.state === 'installed' && navigator.serviceWorker.controller) {
                window.location.reload();
              }
            };
          }
        };
      })
      .catch(err => console.error('Service Worker Registration Failed', err));
  }
}
