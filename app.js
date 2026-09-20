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
let booksCurrentPage = 1;
let magazinesCurrentPage = 1;
const PUBLICATIONS_PER_PAGE = 8;

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
      { textEn: "Official Website (maanmandir.org)", textHi: "आधिकारिक वेबसाइट (maanmandir.org)", url: "https://maanmandir.org", isExternal: true },
      { textEn: "Official WhatsApp Channel", textHi: "आधिकारिक व्हाट्सएप चैनल", url: "https://whatsapp.com/channel/0029VbD91RUIt5rmh4DA6P1p", isExternal: true },
      { textEn: "Instagram (@shrimaanmandir)", textHi: "इन्स्टाग्राम (@shrimaanmandir)", url: "https://www.instagram.com/shrimaanmandir?igsh=MW4yaTB0dGc5OXN1Mg==", isExternal: true },
      { textEn: "Facebook (ShriMaanMandir)", textHi: "फ़ेसबुक (ShriMaanMandir)", url: "https://www.facebook.com/ShriMaanMandir", isExternal: true },
      { textEn: "Audio Satsang & Bhajan (YouTube)", textHi: "ऑडियो सत्संग व भजन (यूट्यूब)", url: "https://www.youtube.com/@MaanMandirSatsang/playlists", isExternal: true },
      { textEn: "Maanini App (Google Play)", textHi: "मानिनी ऐप (गूगल प्ले)", url: "https://play.google.com/store/apps/details?id=com.maan.mandir", isExternal: true },
      { textEn: "Maanmandir Photo Albums (Flickr)", textHi: "मान मंदिर फोटो एलबम (फ़्लिकर)", url: "https://www.flickr.com/photos/maanmandir/albums/", isExternal: true }
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
  },
  {
    id: "yt-kala-akadami",
    nameEn: "Maan Mandir Kala Akadami",
    nameHi: "मान मंदिर कला अकादमी",
    handle: "@MaanMandirKalaAkadami",
    url: "https://www.youtube.com/@MaanMandirKalaAkadami",
    badgeEn: "KALA & SANGEET",
    badgeHi: "कला व संगीत",
    cdnAvatar: "",
    descEn: "Devotional music, cultural Raag Seva, and classical arts by Maan Mandir Kala Akadami.",
    descHi: "मान मंदिर कला अकादमी द्वारा प्रस्तुत पावन भक्ति संगीत, सांस्कृतिक प्रस्तुतियां एवं राग सेवा।"
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
  { id: "b-post-12681", titleEn: "Rasili Braj Yatra - Gujarati", titleHi: "Rasili Braj Yatra - Gujarati", coverImg: "https://maanmandir.org/wp-content/uploads/2026/06/Rasili-Braj-Yatra-English-Cover-for-website-pdf.jpg", pdfUrl: "https://maanmandir.org/download/rasili-braj-yatra-gujarati-3/", isNew: true, downloads: "568 downloads" },
  { id: "b-post-12671", titleEn: "Rasili Braj Yatra - English", titleHi: "Rasili Braj Yatra - English", coverImg: "https://maanmandir.org/wp-content/uploads/2026/06/Rasili-Braj-Yatra-English-Cover-for-website-1-pdf.jpg", pdfUrl: "https://maanmandir.org/download/rasili-braj-yatra-english/", isNew: true, downloads: "548 downloads" },
  { id: "b-post-12607", titleEn: "Radha Sudha Nidhi - Gutka with large font size", titleHi: "Radha Sudha Nidhi - Gutka with large font size", coverImg: "https://maanmandir.org/wp-content/uploads/2025/10/Radha-sudha-5-5x8-5.jpg", pdfUrl: "https://maanmandir.org/download/radha-sudha-nidhi-gutka/", isNew: true, downloads: "2484 downloads" },
  { id: "b-post-12317", titleEn: "Bhagvatamritam - Part 02", titleHi: "Bhagvatamritam - Part 02", coverImg: "https://maanmandir.org/wp-content/uploads/2023/09/bhagwatam-cover-part-02-1-pdf.jpg", pdfUrl: "https://maanmandir.org/download/bhagvatamritam-part-02/", isNew: false, downloads: "10542 downloads" },
  { id: "b-post-12311", titleEn: "Bhagvatamritam - Part 01", titleHi: "Bhagvatamritam - Part 01", coverImg: "https://maanmandir.org/wp-content/uploads/2023/09/bhagwatam-cover-part-01-pdf.jpg", pdfUrl: "https://maanmandir.org/download/bhagvatamritam-part-01/", isNew: false, downloads: "10645 downloads" },
  { id: "b-post-12304", titleEn: "Gahvar Pradeep -  Gahvarvan Ke Diptimaan Sant", titleHi: "Gahvar Pradeep -  Gahvarvan Ke Diptimaan Sant", coverImg: "https://maanmandir.org/wp-content/uploads/2023/09/Gahvar-Pradeep-Cover.jpg", pdfUrl: "https://maanmandir.org/download/gahvar-pradeep-gahvarvan-ke-jyotimaan-sant/", isNew: false, downloads: "9669 downloads" },
  { id: "b-post-12103", titleEn: "Mandir Nirman Se Bhagwat Prapti", titleHi: "Mandir Nirman Se Bhagwat Prapti", coverImg: "https://maanmandir.org/wp-content/uploads/2023/03/Mandir-Nirman-Se-Bhagwat-Prapti-front-page-pdf.jpg", pdfUrl: "https://maanmandir.org/download/mandir-nirman-se-bhagwat-prapti/", isNew: false, downloads: "10295 downloads" },
  { id: "b-post-12097", titleEn: "Shri Chandra Sakhi Ji Rachit Pad", titleHi: "Shri Chandra Sakhi Ji Rachit Pad", coverImg: "https://maanmandir.org/wp-content/uploads/2023/03/Shri-Chandra-Sakhi-Ji-Rachit-Pad-front-page-pdf.jpg", pdfUrl: "https://maanmandir.org/download/shri-chandra-sakhi-ji-rachit-pad/", isNew: false, downloads: "10791 downloads" },
  { id: "b-post-12091", titleEn: "Shri Radha Ras", titleHi: "Shri Radha Ras", coverImg: "https://maanmandir.org/wp-content/uploads/2023/03/Shri-Radha-Ras-front-page-pdf.jpg", pdfUrl: "https://maanmandir.org/download/shri-radha-ras/", isNew: false, downloads: "11187 downloads" },
  { id: "b-post-12085", titleEn: "Shri Radha Sudha Shatak", titleHi: "Shri Radha Sudha Shatak", coverImg: "https://maanmandir.org/wp-content/uploads/2023/03/Shri-Radha-Sudha-Shatak-front-page-pdf.jpg", pdfUrl: "https://maanmandir.org/download/shri-radha-sudha-shatak/", isNew: false, downloads: "10640 downloads" },
  { id: "b-post-12017", titleEn: "Shri Radha Naam Mahatmya", titleHi: "Shri Radha Naam Mahatmya", coverImg: "https://maanmandir.org/wp-content/uploads/2022/11/Shri-Radha-Naam-Mahatma-front-page.jpeg", pdfUrl: "https://maanmandir.org/download/shri-radha-naam-mahatma/", isNew: false, downloads: "11494 downloads" },
  { id: "b-post-12010", titleEn: "Prabhat Pheri Mahima - Naam Mahima", titleHi: "Prabhat Pheri Mahima - Naam Mahima", coverImg: "https://maanmandir.org/wp-content/uploads/2016/09/prabhat_feri.png", pdfUrl: "https://maanmandir.org/download/prabhat-pheri-bhagwan-naam-mahima/", isNew: false, downloads: "15695 downloads" },
  { id: "b-post-11235", titleEn: "Bhagwat Ratna Manjusha (Sanskrit) - Collection of Very Important Shalokas From Shrimad Bhagwat Mahapuran", titleHi: "Bhagwat Ratna Manjusha (Sanskrit) - Collection of Very Important Shalokas From Shrimad Bhagwat Mahapuran", coverImg: "https://maanmandir.org/wp-content/uploads/2021/07/BHAGWAT-RATNA-MANJUSHA-SANSKRIT-FrongPage-2.jpg", pdfUrl: "https://maanmandir.org/download/bhagwat-ratna-manjusha-sanskrit/", isNew: false, downloads: "10919 downloads" },
  { id: "b-post-10846", titleEn: "Shri Radha Sudha Nidhi -  Hindi Translation By Pujya Ramesh Baba Ji Maharaj", titleHi: "Shri Radha Sudha Nidhi -  Hindi Translation By Pujya Ramesh Baba Ji Maharaj", coverImg: "https://maanmandir.org/wp-content/uploads/2021/03/front-cover.jpg", pdfUrl: "https://maanmandir.org/download/shri-radha-sudha-nidhi/", isNew: false, downloads: "18193 downloads" },
  { id: "b-post-10840", titleEn: "Holi Sagar - Collection of Rare Rasia of Rangili Holi", titleHi: "Holi Sagar - Collection of Rare Rasia of Rangili Holi", coverImg: "https://maanmandir.org/wp-content/uploads/2021/03/Hori-sagar-with-Spine_RGB-scaled-e1616517280321.jpg", pdfUrl: "https://maanmandir.org/download/holi-sagar-collection-of-rare-rasia-of-rangili-holi/", isNew: false, downloads: "11727 downloads" },
  { id: "b-post-10806", titleEn: "Swar Vanshi Ke Shabda Nupoor Ke  (2nd Edition) - Collection of Yugal Kirtans", titleHi: "Swar Vanshi Ke Shabda Nupoor Ke  (2nd Edition) - Collection of Yugal Kirtans", coverImg: "https://maanmandir.org/wp-content/uploads/2021/03/Swar-Vanshi-Ke-Shabda-Nupoor-Ke-Cover-Page-e1615413840735.jpg", pdfUrl: "https://maanmandir.org/download/swar-vanshi-ke-shabda-nupoor-ke-2nd-edition/", isNew: false, downloads: "10952 downloads" },
  { id: "b-post-10804", titleEn: "Vrishbhanupur Shatakam By Shri Vanshi Ali Ji", titleHi: "Vrishbhanupur Shatakam By Shri Vanshi Ali Ji", coverImg: "https://maanmandir.org/wp-content/uploads/2021/01/Shri-Vrishbhanu-Shatak-Cover.png", pdfUrl: "https://maanmandir.org/download/vrishbhanupur-shatakam-vanshi-ali-ji/", isNew: false, downloads: "13583 downloads" },
  { id: "b-post-10795", titleEn: "Rasili Braj Yatra Volume  02 -  Encyclopedia of Braj", titleHi: "Rasili Braj Yatra Volume  02 -  Encyclopedia of Braj", coverImg: "https://maanmandir.org/wp-content/uploads/2013/12/Image-8-e1389975435509.jpg", pdfUrl: "https://maanmandir.org/download/rasili-braj-yatra-vol-2/", isNew: false, downloads: "16424 downloads" },
  { id: "b-post-10792", titleEn: "Maan Mandir Ki Rangili Holi – Collection of Braj Ke Holi Rasiya", titleHi: "Maan Mandir Ki Rangili Holi – Collection of Braj Ke Holi Rasiya", coverImg: "https://maanmandir.org/wp-content/uploads/2018/03/holi-book-cover-page-e1520104752213.png", pdfUrl: "https://maanmandir.org/download/maan-mandir-ki-rangili-holi-collection-of-holi-rasiya/", isNew: false, downloads: "11797 downloads" },
  { id: "b-post-10790", titleEn: "Bhav Sagar Ki Yatra (Ek Bhayaavah Drashya)", titleHi: "Bhav Sagar Ki Yatra (Ek Bhayaavah Drashya)", coverImg: "https://maanmandir.org/wp-content/uploads/2017/07/bhav-sagar-ki-yatra.jpg", pdfUrl: "https://maanmandir.org/download/bhav-sagar-ki-yatra-ek-bhayaavah-drashya/", isNew: false, downloads: "32938 downloads" },
  { id: "b-post-10788", titleEn: "Satsang Saramrit (सत्संग सारामृत) - Collection of Satsang Snippets", titleHi: "Satsang Saramrit (सत्संग सारामृत) - Collection of Satsang Snippets", coverImg: "https://maanmandir.org/wp-content/uploads/2015/12/img_0763.jpeg", pdfUrl: "https://maanmandir.org/download/satsang-saramrit-%e0%a4%b8%e0%a4%a4%e0%a5%8d%e0%a4%b8%e0%a4%82%e0%a4%97-%e0%a4%b8%e0%a4%be%e0%a4%b0%e0%a4%be%e0%a4%ae%e0%a5%83%e0%a4%a4/", isNew: false, downloads: "28849 downloads" },
  { id: "b-post-10786", titleEn: "Saar Grahita Part 02 – Collection of Lectures of Shri Ramesh Baba Ji Maharaj", titleHi: "Saar Grahita Part 02 – Collection of Lectures of Shri Ramesh Baba Ji Maharaj", coverImg: "https://maanmandir.org/wp-content/uploads/2016/09/saar-grahita-2-e1615598360159.jpg", pdfUrl: "https://maanmandir.org/download/saar-grahita-part-02-collection-of-lectures-of-shri-ramesh-baba-ji-maharaj/", isNew: false, downloads: "12183 downloads" },
  { id: "b-post-10784", titleEn: "Saar Grahita Part 01 – Collection of Lectures of Shri Ramesh Baba Ji Maharaj", titleHi: "Saar Grahita Part 01 – Collection of Lectures of Shri Ramesh Baba Ji Maharaj", coverImg: "https://maanmandir.org/wp-content/uploads/2016/09/saar-grahita-1-e1615598268519.jpg", pdfUrl: "https://maanmandir.org/download/saar-grahita-part-01-collection-of-lectures-of-shri-ramesh-baba-ji-maharaj/", isNew: false, downloads: "12746 downloads" },
  { id: "b-post-10782", titleEn: "Rasia Raseshwari – Collection of Braj Ke Rasias", titleHi: "Rasia Raseshwari – Collection of Braj Ke Rasias", coverImg: "https://maanmandir.org/wp-content/uploads/2016/09/rasiya-raseshwari.jpg", pdfUrl: "https://maanmandir.org/download/rasia-raseshwari-collection-of-braj-ke-rasias/", isNew: false, downloads: "26337 downloads" },
  { id: "b-post-10778", titleEn: "Prahlad Sabha – Collection of Poetries (Songs) For Children", titleHi: "Prahlad Sabha – Collection of Poetries (Songs) For Children", coverImg: "https://maanmandir.org/wp-content/uploads/2016/09/prahalad-sabha.jpg", pdfUrl: "https://maanmandir.org/download/prahlad-sabha/", isNew: false, downloads: "31845 downloads" },
  { id: "b-post-10774", titleEn: "Meera Ke Prabhu Giridhar Nagar - Life Story of Meera Bai", titleHi: "Meera Ke Prabhu Giridhar Nagar - Life Story of Meera Bai", coverImg: "https://maanmandir.org/wp-content/uploads/2016/09/meera-ke-prabhu-giridhar-nagar.jpg", pdfUrl: "https://maanmandir.org/download/meera-ke-prabhu-giridhar-nagar/", isNew: false, downloads: "16608 downloads" },
  { id: "b-post-10761", titleEn: "Manini Yash Muktamala Part 02 - Collection of Satsang Snippets", titleHi: "Manini Yash Muktamala Part 02 - Collection of Satsang Snippets", coverImg: "https://maanmandir.org/wp-content/uploads/2016/09/manini-yash-muktamala-2.jpg", pdfUrl: "https://maanmandir.org/download/manini-yash-muktamala-part-02/", isNew: false, downloads: "15238 downloads" },
  { id: "b-post-10693", titleEn: "Rasili Braj Yatra Volume 01 - Encyclopedia of Braj", titleHi: "Rasili Braj Yatra Volume 01 - Encyclopedia of Braj", coverImg: "https://maanmandir.org/wp-content/uploads/2013/12/Rasili-Braj-Yatra-Banner.jpg", pdfUrl: "https://maanmandir.org/download/rasili-braj-yatra-pdf-version-2/", isNew: false, downloads: "51799 downloads" },
  { id: "b-post-10758", titleEn: "Manini Yash Muktamala Part 01 - Collection of Satsang Snippets", titleHi: "Manini Yash Muktamala Part 01 - Collection of Satsang Snippets", coverImg: "https://maanmandir.org/wp-content/uploads/2016/09/manini-yash-muktamala-1.jpg", pdfUrl: "https://maanmandir.org/download/manini-yash-muktamala-part-01/", isNew: false, downloads: "13303 downloads" },
  { id: "b-post-10748", titleEn: "Gahvarvan Tarangini - Collection of Satsang Snippets", titleHi: "Gahvarvan Tarangini - Collection of Satsang Snippets", coverImg: "https://maanmandir.org/wp-content/uploads/2016/09/gahvarvan-tarangini.jpg", pdfUrl: "https://maanmandir.org/download/gahvarvan-tarangini/", isNew: false, downloads: "19005 downloads" },
  { id: "b-post-10743", titleEn: "Barsana – Collection of Gazals", titleHi: "Barsana – Collection of Gazals", coverImg: "https://maanmandir.org/wp-content/uploads/2016/09/barsanacover.jpg", pdfUrl: "https://maanmandir.org/download/barsana-collection-of-gazals/", isNew: false, downloads: "16649 downloads" },
  { id: "b-post-10699", titleEn: "Saar Grahita - Collection of Satsang Snippets  Part 02", titleHi: "Saar Grahita - Collection of Satsang Snippets  Part 02", coverImg: "https://maanmandir.org/wp-content/uploads/2016/09/saar-grahita-2-e1615598360159.jpg", pdfUrl: "https://maanmandir.org/download/saar-grahita-part-02/", isNew: false, downloads: "8853 downloads" },
  { id: "b-post-10695", titleEn: "Melodious Yugal Mantra With Notations", titleHi: "Melodious Yugal Mantra With Notations", coverImg: "https://maanmandir.org/wp-content/uploads/2015/01/yugal-mantra-full-pdf-cover-e1615775613254.jpg", pdfUrl: "https://maanmandir.org/download/yugal-mantra-notation/", isNew: false, downloads: "11603 downloads" },
  { id: "b-dlm-12602", titleEn: "Radha Sudha Nidhi - Gutka", titleHi: "Radha Sudha Nidhi - Gutka", coverImg: "https://maanmandir.org/wp-content/uploads/2025/10/Radha-sudha-5-5x8-5.jpg", pdfUrl: "https://maanmandir.org/download/radha-sudha-nidhi-gutka/", isNew: true, downloads: "Direct Download" },
  { id: "b-dlm-12013", titleEn: "Shri Radha Naam Mahatma", titleHi: "Shri Radha Naam Mahatma", coverImg: "https://maanmandir.org/wp-content/uploads/2022/11/Shri-Radha-Naam-Mahatma-front-page.jpeg", pdfUrl: "https://maanmandir.org/download/shri-radha-naam-mahatma/", isNew: false, downloads: "Direct Download" },
  { id: "b-dlm-11230", titleEn: "Bhagwat Ratna Manjusha (Sanskrit)", titleHi: "Bhagwat Ratna Manjusha (Sanskrit)", coverImg: "https://maanmandir.org/wp-content/uploads/2021/07/BHAGWAT-RATNA-MANJUSHA-SANSKRIT-FrongPage-2.jpg", pdfUrl: "https://maanmandir.org/download/bhagwat-ratna-manjusha-sanskrit/", isNew: false, downloads: "510 Downloads" },
  { id: "b-dlm-10842", titleEn: "Shri Radha Sudha Nidhi", titleHi: "Shri Radha Sudha Nidhi", coverImg: "https://maanmandir.org/wp-content/uploads/2021/03/front-cover.jpg", pdfUrl: "https://maanmandir.org/download/shri-radha-sudha-nidhi/", isNew: false, downloads: "1570 Downloads" },
  { id: "b-dlm-10681", titleEn: "Swar Vanshi Ke Shabda Nupoor Ke - 2nd Edition", titleHi: "Swar Vanshi Ke Shabda Nupoor Ke - 2nd Edition", coverImg: "https://maanmandir.org/wp-content/uploads/2021/03/Swar-Vanshi-Ke-Shabda-Nupoor-Ke-Cover-Page-e1615413840735.jpg", pdfUrl: "https://maanmandir.org/download/swar-vanshi-ke-shabda-nupoor-ke-2nd-edition/", isNew: false, downloads: "568 Downloads" },
  { id: "b-dlm-10562", titleEn: "Vrishbhanupur Shatakam - Shri Vanshi Ali Ji", titleHi: "Vrishbhanupur Shatakam - Shri Vanshi Ali Ji", coverImg: "https://maanmandir.org/wp-content/uploads/2021/01/Shri-Vrishbhanu-Shatak-Cover.png", pdfUrl: "https://maanmandir.org/download/vrishbhanupur-shatakam-vanshi-ali-ji/", isNew: false, downloads: "1310 Downloads" },
  { id: "b-dlm-9766", titleEn: "Rasili Braj Yatra Vol 2", titleHi: "Rasili Braj Yatra Vol 2", coverImg: "https://maanmandir.org/wp-content/uploads/2013/12/Image-8-e1389975435509.jpg", pdfUrl: "https://maanmandir.org/download/rasili-braj-yatra-vol-2/", isNew: false, downloads: "3439 Downloads" },
  { id: "b-dlm-9756", titleEn: "Maan Mandir Ki Rangili Holi - Collection of Holi Rasiya", titleHi: "Maan Mandir Ki Rangili Holi - Collection of Holi Rasiya", coverImg: "https://maanmandir.org/wp-content/uploads/2018/03/holi-book-cover-page-e1520104752213.png", pdfUrl: "https://maanmandir.org/download/maan-mandir-ki-rangili-holi-collection-of-holi-rasiya/", isNew: false, downloads: "1218 Downloads" },
  { id: "b-dlm-9575", titleEn: "Satsang Saramrit (सत्संग सारामृत)", titleHi: "Satsang Saramrit (सत्संग सारामृत)", coverImg: "https://maanmandir.org/wp-content/uploads/2015/12/img_0763.jpeg", pdfUrl: "https://maanmandir.org/download/satsang-saramrit-%e0%a4%b8%e0%a4%a4%e0%a5%8d%e0%a4%b8%e0%a4%82%e0%a4%97-%e0%a4%b8%e0%a4%be%e0%a4%b0%e0%a4%be%e0%a4%ae%e0%a5%83%e0%a4%a4/", isNew: false, downloads: "614 Downloads" },
  { id: "b-dlm-9405", titleEn: "Swar Vanshi Ke Shabda Nupoor Ke - Kirtan Raseshwari (Hindi)", titleHi: "Swar Vanshi Ke Shabda Nupoor Ke - Kirtan Raseshwari (Hindi)", coverImg: "https://maanmandir.org/wp-content/uploads/2016/09/SVSN.jpg", pdfUrl: "https://maanmandir.org/download/swar-vanshi-ke-shabda-nupoor-ke-kirtan-raseshwari-hindi/", isNew: false, downloads: "2225 Downloads" },
  { id: "b-dlm-9386", titleEn: "Prahlad Sabha - Collection of Pads For Children", titleHi: "Prahlad Sabha - Collection of Pads For Children", coverImg: "https://maanmandir.org/wp-content/uploads/2016/09/prahalad-sabha.jpg", pdfUrl: "https://maanmandir.org/download/prahlad-sabha/", isNew: false, downloads: "19391 Downloads" },
  { id: "b-dlm-9375", titleEn: "Prabhat Pheri - Bhagwan Naam Mahima", titleHi: "Prabhat Pheri - Bhagwan Naam Mahima", coverImg: "https://maanmandir.org/wp-content/uploads/2016/09/prabhat_feri.png", pdfUrl: "https://maanmandir.org/download/prabhat-pheri-bhagwan-naam-mahima/", isNew: false, downloads: "2401 Downloads" },
  { id: "b-dlm-9370", titleEn: "Meera Ke Prabhu Giridhar Nagar", titleHi: "Meera Ke Prabhu Giridhar Nagar", coverImg: "https://maanmandir.org/wp-content/uploads/2016/09/meera-ke-prabhu-giridhar-nagar.jpg", pdfUrl: "https://maanmandir.org/download/meera-ke-prabhu-giridhar-nagar/", isNew: false, downloads: "3320 Downloads" },
  { id: "b-dlm-9365", titleEn: "Manini Yash Muktamala Part 02", titleHi: "Manini Yash Muktamala Part 02", coverImg: "https://maanmandir.org/wp-content/uploads/2016/09/manini-yash-muktamala-2.jpg", pdfUrl: "https://maanmandir.org/download/manini-yash-muktamala-part-02/", isNew: false, downloads: "3023 Downloads" },
  { id: "b-dlm-9357", titleEn: "Manini Yash Muktamala Part 01", titleHi: "Manini Yash Muktamala Part 01", coverImg: "https://maanmandir.org/wp-content/uploads/2016/09/manini-yash-muktamala-1.jpg", pdfUrl: "https://maanmandir.org/download/manini-yash-muktamala-part-01/", isNew: false, downloads: "2509 Downloads" },
  { id: "b-dlm-9347", titleEn: "Gahvarvan Tarangini", titleHi: "Gahvarvan Tarangini", coverImg: "https://maanmandir.org/wp-content/uploads/2016/09/gahvarvan-tarangini.jpg", pdfUrl: "https://maanmandir.org/download/gahvarvan-tarangini/", isNew: false, downloads: "5674 Downloads" },
  { id: "b-dlm-9237", titleEn: "Saar Grahita Part 02", titleHi: "Saar Grahita Part 02", coverImg: "https://maanmandir.org/wp-content/uploads/2016/09/saar-grahita-2-e1615598360159.jpg", pdfUrl: "https://maanmandir.org/download/saar-grahita-part-02/", isNew: false, downloads: "336 Downloads" },
  { id: "b-dlm-2124", titleEn: "Swar Vanshi Ke Shabda Noopur Ke - English", titleHi: "Swar Vanshi Ke Shabda Noopur Ke - English", coverImg: "https://maanmandir.org/wp-content/uploads/2016/09/SVSN.jpg", pdfUrl: "https://maanmandir.org/download/swar-vanshi-ke-shabda-noopur-ke-english/", isNew: false, downloads: "1573 Downloads" },
  { id: "b-dlm-2121", titleEn: "Melodious Yugal Mantra with Notation", titleHi: "Melodious Yugal Mantra with Notation", coverImg: "https://maanmandir.org/wp-content/uploads/2015/01/yugal-mantra-full-pdf-cover-e1615775613254.jpg", pdfUrl: "https://maanmandir.org/download/yugal-mantra-notation/", isNew: false, downloads: "1959 Downloads" },
  { id: "b-dlm-2113", titleEn: "Rasili Braj Yatra Vol 1", titleHi: "Rasili Braj Yatra Vol 1", coverImg: "https://maanmandir.org/wp-content/uploads/2013/12/Rasili-Braj-Yatra-Banner.jpg", pdfUrl: "https://maanmandir.org/download/rasili-braj-yatra-pdf-version-2/", isNew: false, downloads: "21279 Downloads" }
];

// Official MaanMandir.org Monthly Magazines Catalog
const FALLBACK_WEBSITE_MAGAZINES = [
  { id: "m-post-12712", titleEn: "Maan Mandir Patrika June 2026", titleHi: "मान मंदिर मासिक पत्रिका June 2026", coverImg: "https://maanmandir.org/wp-content/uploads/2026/07/2026-06-Patrika-front-page-pdf.jpg", pdfUrl: "https://maanmandir.org/download/patrika-june-2026/", isNew: true, downloads: "616 downloads" },
  { id: "m-post-12706", titleEn: "Maan Mandir Patrika May 2026", titleHi: "मान मंदिर मासिक पत्रिका May 2026", coverImg: "https://maanmandir.org/wp-content/uploads/2026/07/2026-05-Patrika-front-page-pdf.jpg", pdfUrl: "https://maanmandir.org/download/patrika-may-2026/", isNew: true, downloads: "548 downloads" },
  { id: "m-post-12700", titleEn: "Maan Mandir Patrika April 2026", titleHi: "मान मंदिर मासिक पत्रिका April 2026", coverImg: "https://maanmandir.org/wp-content/uploads/2026/07/2026-04-Patrika-frong-page-pdf.jpg", pdfUrl: "https://maanmandir.org/download/patrika-april-2026/", isNew: true, downloads: "539 downloads" },
  { id: "m-post-12694", titleEn: "Maan Mandir Patrika Mar 2026", titleHi: "मान मंदिर मासिक पत्रिका Mar 2026", coverImg: "https://maanmandir.org/wp-content/uploads/2026/07/2026-03-Patrika-front-page-pdf.jpg", pdfUrl: "https://maanmandir.org/download/patrika-mar-2026/", isNew: false, downloads: "264 downloads" },
  { id: "m-post-12651", titleEn: "Maan Mandir Patrika Feb 2026", titleHi: "मान मंदिर मासिक पत्रिका Feb 2026", coverImg: "https://maanmandir.org/wp-content/uploads/2026/02/2026-02-Patrika-front-page-pdf.jpg", pdfUrl: "https://maanmandir.org/download/patrika-feb-2026/", isNew: false, downloads: "3042 downloads" },
  { id: "m-post-12643", titleEn: "Maan Mandir Patrika Jan 2026", titleHi: "मान मंदिर मासिक पत्रिका Jan 2026", coverImg: "https://maanmandir.org/wp-content/uploads/2026/02/2026-01-Patrika-front-page-pdf.jpg", pdfUrl: "https://maanmandir.org/download/patrika-jan-2026/", isNew: false, downloads: "3082 downloads" },
  { id: "m-post-12637", titleEn: "Maan Mandir Patrika Dec 2025", titleHi: "मान मंदिर मासिक पत्रिका Dec 2025", coverImg: "https://maanmandir.org/wp-content/uploads/2026/02/2025-12-Patrika-front-page-pdf.jpg", pdfUrl: "https://maanmandir.org/download/patrika-dec-2025/", isNew: false, downloads: "2945 downloads" },
  { id: "m-post-12631", titleEn: "Maan Mandir Patrika Nov 2025", titleHi: "मान मंदिर मासिक पत्रिका Nov 2025", coverImg: "https://maanmandir.org/wp-content/uploads/2026/02/2025-11-Patrika-front-page-pdf.jpg", pdfUrl: "https://maanmandir.org/download/patrika-nov-2025/", isNew: false, downloads: "2077 downloads" },
  { id: "m-post-12625", titleEn: "Maan Mandir Patrika Oct 2025", titleHi: "मान मंदिर मासिक पत्रिका Oct 2025", coverImg: "https://maanmandir.org/wp-content/uploads/2026/02/2025-10-Patrika-front-page-pdf.jpg", pdfUrl: "https://maanmandir.org/download/patrika-oct-2025/", isNew: false, downloads: "2063 downloads" },
  { id: "m-post-12617", titleEn: "Maan Mandir Patrika Sep 2025", titleHi: "मान मंदिर मासिक पत्रिका Sep 2025", coverImg: "https://maanmandir.org/wp-content/uploads/2026/02/2025-09-Patrika-front-page-pdf.jpg", pdfUrl: "https://maanmandir.org/download/patrika-sep-2025/", isNew: false, downloads: "1970 downloads" },
  { id: "m-post-12585", titleEn: "Maan Mandir Patrika August 2025", titleHi: "मान मंदिर मासिक पत्रिका August 2025", coverImg: "https://maanmandir.org/wp-content/uploads/2025/08/2025-08-Patrika-front-page.jpg", pdfUrl: "https://maanmandir.org/download/patrika-aug-2025/", isNew: false, downloads: "5066 downloads" },
  { id: "m-post-12579", titleEn: "Maan Mandir Patrika July 2025", titleHi: "मान मंदिर मासिक पत्रिका July 2025", coverImg: "https://maanmandir.org/wp-content/uploads/2025/08/2025-07-Patrika-frong-page.jpg", pdfUrl: "https://maanmandir.org/download/patrika-july-2025/", isNew: false, downloads: "5028 downloads" },
  { id: "m-post-12566", titleEn: "Maan Mandir Patrika - June 2025", titleHi: "मान मंदिर मासिक पत्रिका - June 2025", coverImg: "https://maanmandir.org/wp-content/uploads/2025/06/2025-06-Patrika-front-page.jpg", pdfUrl: "https://maanmandir.org/download/patrika-june-2025/", isNew: false, downloads: "6801 downloads" },
  { id: "m-post-12560", titleEn: "Maan Mandir Patrika - May 2025", titleHi: "मान मंदिर मासिक पत्रिका - May 2025", coverImg: "https://maanmandir.org/wp-content/uploads/2025/06/2025-05-Patrika-front-page.jpg", pdfUrl: "https://maanmandir.org/download/patrika-may-2025/", isNew: false, downloads: "5521 downloads" },
  { id: "m-post-12553", titleEn: "Maan Mandir Patrika - April 2025", titleHi: "मान मंदिर मासिक पत्रिका - April 2025", coverImg: "https://maanmandir.org/wp-content/uploads/2025/06/2025-04-Patrika-front-page.jpg", pdfUrl: "https://maanmandir.org/download/patrika-april-2025/", isNew: false, downloads: "5636 downloads" },
  { id: "m-post-12546", titleEn: "Maan Mandir Patrika - Mar 2025", titleHi: "मान मंदिर मासिक पत्रिका - Mar 2025", coverImg: "https://maanmandir.org/wp-content/uploads/2025/06/2025-03-Patrika-frpnt-page.jpg", pdfUrl: "https://maanmandir.org/download/patrika-march-2025/", isNew: false, downloads: "5109 downloads" },
  { id: "m-post-12520", titleEn: "Maan Mandir Patrika - Feb 2025", titleHi: "मान मंदिर मासिक पत्रिका - Feb 2025", coverImg: "https://maanmandir.org/wp-content/uploads/2025/02/2025-02-Patrika-front-page-pdf.jpg", pdfUrl: "https://maanmandir.org/download/patrika-feburary-2025/", isNew: false, downloads: "7342 downloads" },
  { id: "m-post-12514", titleEn: "Maan Mandir Patrika - Jan 2025", titleHi: "मान मंदिर मासिक पत्रिका - Jan 2025", coverImg: "https://maanmandir.org/wp-content/uploads/2025/02/2025-01-Patrika-front-page-pdf.jpg", pdfUrl: "https://maanmandir.org/download/patika-januray-2025/", isNew: false, downloads: "6946 downloads" },
  { id: "m-post-12507", titleEn: "Maan Mandir Patrika – Dec 2024", titleHi: "मान मंदिर मासिक पत्रिका – Dec 2024", coverImg: "https://maanmandir.org/wp-content/uploads/2025/01/2024-12-Patrika-front-page-pdf.jpg", pdfUrl: "https://maanmandir.org/download/patika-december-2024/", isNew: false, downloads: "6928 downloads" },
  { id: "m-post-12486", titleEn: "Maan Mandir Patrika - Nov 2024", titleHi: "मान मंदिर मासिक पत्रिका - Nov 2024", coverImg: "https://maanmandir.org/wp-content/uploads/2024/10/2024-11-patrika-cover-page-pdf.jpg", pdfUrl: "https://maanmandir.org/download/patika-november-2024/", isNew: false, downloads: "4074 downloads" },
  { id: "m-post-12480", titleEn: "Maan Mandir Patrika - Oct 2024", titleHi: "मान मंदिर मासिक पत्रिका - Oct 2024", coverImg: "https://maanmandir.org/wp-content/uploads/2024/10/2024-10-patrika-cover-page-pdf.jpg", pdfUrl: "https://maanmandir.org/download/patrika-october-2024/", isNew: false, downloads: "4377 downloads" },
  { id: "m-post-12473", titleEn: "Maan Mandir Patrika - Sep 2024", titleHi: "मान मंदिर मासिक पत्रिका - Sep 2024", coverImg: "https://maanmandir.org/wp-content/uploads/2024/10/2024-09-patrika-cover-page-pdf.jpg", pdfUrl: "https://maanmandir.org/download/patrika-september-2024/", isNew: false, downloads: "3730 downloads" },
  { id: "m-post-12411", titleEn: "Maan Mandir Patrika - August 2024", titleHi: "मान मंदिर मासिक पत्रिका - August 2024", coverImg: "https://maanmandir.org/wp-content/uploads/2024/08/2024-08-patrika-cover-page-pdf.jpg", pdfUrl: "https://maanmandir.org/download/patrika-august-2024/", isNew: false, downloads: "9705 downloads" },
  { id: "m-post-12404", titleEn: "Maan Mandir Patrika - June 2024", titleHi: "मान मंदिर मासिक पत्रिका - June 2024", coverImg: "https://maanmandir.org/wp-content/uploads/2024/08/2024-06-patrika-cover-page-pdf.jpg", pdfUrl: "https://maanmandir.org/download/patrika-june-2024/", isNew: false, downloads: "9096 downloads" },
  { id: "m-post-12396", titleEn: "Maan Mandir Patrika - May 2024", titleHi: "मान मंदिर मासिक पत्रिका - May 2024", coverImg: "https://maanmandir.org/wp-content/uploads/2024/05/2024-05-patrika-cover-page-pdf.jpg", pdfUrl: "https://maanmandir.org/download/patrika-may-2024/", isNew: false, downloads: "11717 downloads" },
  { id: "m-post-12390", titleEn: "Maan Mandir Patrika - April 2024", titleHi: "मान मंदिर मासिक पत्रिका - April 2024", coverImg: "https://maanmandir.org/wp-content/uploads/2024/05/2024-04-patrika-Cover-page-pdf.jpg", pdfUrl: "https://maanmandir.org/download/patrika-april-2024/", isNew: false, downloads: "11590 downloads" },
  { id: "m-post-12384", titleEn: "Maan Mandir Patrika - Mar 2024", titleHi: "मान मंदिर मासिक पत्रिका - Mar 2024", coverImg: "https://maanmandir.org/wp-content/uploads/2024/05/2024-03-patrika-cover-page-pdf.jpg", pdfUrl: "https://maanmandir.org/download/patrika-mar-2024/", isNew: false, downloads: "10918 downloads" },
  { id: "m-post-12377", titleEn: "Maan Mandir Patrika - Feb 2024", titleHi: "मान मंदिर मासिक पत्रिका - Feb 2024", coverImg: "https://maanmandir.org/wp-content/uploads/2024/05/2024-02-patrika-cover-page-pdf.jpg", pdfUrl: "https://maanmandir.org/download/patrika-feb-2024/", isNew: false, downloads: "10239 downloads" },
  { id: "m-post-12368", titleEn: "Maan Mandir Patika - Dec 2023", titleHi: "Maan Mandir Patika - Dec 2023", coverImg: "https://maanmandir.org/wp-content/uploads/2023/11/2023-12-patrika-cover-pdf.jpg", pdfUrl: "https://maanmandir.org/download/patrika-december-2023/", isNew: false, downloads: "7143 downloads" },
  { id: "m-post-12361", titleEn: "Maan Mandir Patrika - Nov 2023", titleHi: "मान मंदिर मासिक पत्रिका - Nov 2023", coverImg: "https://maanmandir.org/wp-content/uploads/2023/11/2023-11-patrika-cover-pdf.jpg", pdfUrl: "https://maanmandir.org/download/patrika-november-2023/", isNew: false, downloads: "7209 downloads" },
  { id: "m-post-12355", titleEn: "Maan Mandir Patrika - Oct 2023", titleHi: "मान मंदिर मासिक पत्रिका - Oct 2023", coverImg: "https://maanmandir.org/wp-content/uploads/2023/11/2023-10-patrika-cover-pdf.jpg", pdfUrl: "https://maanmandir.org/download/patrika-october-2023/", isNew: false, downloads: "8628 downloads" },
  { id: "m-post-12348", titleEn: "Maan Mandir Patrika - Sep 2023", titleHi: "मान मंदिर मासिक पत्रिका - Sep 2023", coverImg: "https://maanmandir.org/wp-content/uploads/2023/11/2023-09-patrika-cover-pdf.jpg", pdfUrl: "https://maanmandir.org/download/patrika-sep-2023/", isNew: false, downloads: "5699 downloads" },
  { id: "m-post-12263", titleEn: "Maan Mandir Patrika - Aug 2023", titleHi: "मान मंदिर मासिक पत्रिका - Aug 2023", coverImg: "https://maanmandir.org/wp-content/uploads/2023/08/2023-08-patrika-cover-pdf.jpg", pdfUrl: "https://maanmandir.org/download/patrika-august-2023/", isNew: false, downloads: "13863 downloads" },
  { id: "m-post-12250", titleEn: "Maan Mandir Patrika - June 2023", titleHi: "मान मंदिर मासिक पत्रिका - June 2023", coverImg: "https://maanmandir.org/wp-content/uploads/2023/08/2023-06-patrika-cover-pdf.jpg", pdfUrl: "https://maanmandir.org/download/patrika-june-2023/", isNew: false, downloads: "13415 downloads" },
  { id: "m-post-12179", titleEn: "Maan Mandir Patrika - April 2023", titleHi: "मान मंदिर मासिक पत्रिका - April 2023", coverImg: "https://maanmandir.org/wp-content/uploads/2023/06/2023-04-patrika-front-page.jpg", pdfUrl: "https://maanmandir.org/download/patrika-april-2023/", isNew: false, downloads: "6285 downloads" },
  { id: "m-post-12171", titleEn: "Maan Mandir Patrika - May 2023", titleHi: "मान मंदिर मासिक पत्रिका - May 2023", coverImg: "https://maanmandir.org/wp-content/uploads/2023/05/2023-05-patrika-cover.jpg", pdfUrl: "https://maanmandir.org/download/patrika-may-2023/", isNew: false, downloads: "13547 downloads" },
  { id: "m-post-12074", titleEn: "Maan Mandir Patrika - Mar 2023", titleHi: "मान मंदिर मासिक पत्रिका - Mar 2023", coverImg: "https://maanmandir.org/wp-content/uploads/2023/02/2023-03-Mar-front-page-pdf.jpg", pdfUrl: "https://maanmandir.org/download/patrika-mar-2023/", isNew: false, downloads: "13982 downloads" },
  { id: "m-post-12068", titleEn: "Maan Mandir Patrika - Jan 2023", titleHi: "मान मंदिर मासिक पत्रिका - Jan 2023", coverImg: "https://maanmandir.org/wp-content/uploads/2023/02/2023-01-Jan-front-page-pdf.jpg", pdfUrl: "https://maanmandir.org/download/patrika-jan-2023/", isNew: false, downloads: "14348 downloads" },
  { id: "m-post-12061", titleEn: "Maan Mandir Patrika - Dec 2022", titleHi: "मान मंदिर मासिक पत्रिका - Dec 2022", coverImg: "https://maanmandir.org/wp-content/uploads/2023/02/2022-Dec-pdf.jpg", pdfUrl: "https://maanmandir.org/download/patrika-dec-2022/", isNew: false, downloads: "6102 downloads" },
  { id: "m-post-12053", titleEn: "Maan Mandir Patrika - Nov 2022", titleHi: "मान मंदिर मासिक पत्रिका - Nov 2022", coverImg: "https://maanmandir.org/wp-content/uploads/2023/02/2022-11-Nov-front-page-pdf.jpg", pdfUrl: "https://maanmandir.org/download/patrika-nov-2022/", isNew: false, downloads: "13733 downloads" },
  { id: "m-post-11885", titleEn: "Maan Mandir Patrika - Aug 2022", titleHi: "मान मंदिर मासिक पत्रिका - Aug 2022", coverImg: "https://maanmandir.org/wp-content/uploads/2022/07/August-2022_Maan-Mandir-Patrika-Front-Page.jpg", pdfUrl: "https://maanmandir.org/download/patrika-aug-2022/", isNew: false, downloads: "14843 downloads" },
  { id: "m-post-11871", titleEn: "Maan Mandir Patrika - July 2022", titleHi: "मान मंदिर मासिक पत्रिका - July 2022", coverImg: "https://maanmandir.org/wp-content/uploads/2022/06/July_2022_Maan-Mandir-Patrika_Cover.jpg", pdfUrl: "https://maanmandir.org/download/patrika-july-2022/", isNew: false, downloads: "14450 downloads" },
  { id: "m-post-11863", titleEn: "Maan Mandir Patrika - June 2022", titleHi: "मान मंदिर मासिक पत्रिका - June 2022", coverImg: "https://maanmandir.org/wp-content/uploads/2022/06/June_2022_Maan-Mandir-Patrika_Cover.jpg", pdfUrl: "https://maanmandir.org/download/patrika-june-2022/", isNew: false, downloads: "14492 downloads" },
  { id: "m-post-11841", titleEn: "Maan Mandir Patrika - May 2022", titleHi: "मान मंदिर मासिक पत्रिका - May 2022", coverImg: "https://maanmandir.org/wp-content/uploads/2022/05/May-2022_Maan-Mandir-Patrika-coverpage.jpg", pdfUrl: "https://maanmandir.org/download/patrika-may-2022/", isNew: false, downloads: "14423 downloads" },
  { id: "m-post-11835", titleEn: "Maan Mandir Patrika - April 2022", titleHi: "मान मंदिर मासिक पत्रिका - April 2022", coverImg: "https://maanmandir.org/wp-content/uploads/2022/05/April_2022_Maan-Mandir-Patrika-coverpage.jpg", pdfUrl: "https://maanmandir.org/download/patrika-april-2022/", isNew: false, downloads: "14131 downloads" },
  { id: "m-post-11818", titleEn: "Maan Mandir Patrika - March 2022", titleHi: "मान मंदिर मासिक पत्रिका - March 2022", coverImg: "https://maanmandir.org/wp-content/uploads/2022/04/2022-March-MaanMandirPatrika-cover.jpg", pdfUrl: "https://maanmandir.org/download/patrika-march-2022/", isNew: false, downloads: "5662 downloads" },
  { id: "m-post-11800", titleEn: "Maan Mandir Patrika - February 2022", titleHi: "मान मंदिर मासिक पत्रिका - February 2022", coverImg: "https://maanmandir.org/wp-content/uploads/2022/02/Maan-Mandir-PatrikaFebruary-2022-pdf.jpg", pdfUrl: "https://maanmandir.org/download/patrika-february-2022/", isNew: false, downloads: "5330 downloads" },
  { id: "m-post-11789", titleEn: "Maan Mandir Patrika - January 2022", titleHi: "मान मंदिर मासिक पत्रिका - January 2022", coverImg: "https://maanmandir.org/wp-content/uploads/dlm_uploads/2022/02/Maan-Mandir-Patrika-January-2022-front-page.jpg", pdfUrl: "https://maanmandir.org/download/patrika-january-2022/", isNew: false, downloads: "13862 downloads" },
  { id: "m-post-11780", titleEn: "Maan Mandir Patrika - December 2021", titleHi: "मान मंदिर मासिक पत्रिका - December 2021", coverImg: "https://maanmandir.org/wp-content/uploads/dlm_uploads/2022/02/Maan_Mandir_Patrika_December_2021_front-page.jpg", pdfUrl: "https://maanmandir.org/download/patrika-december-2021/", isNew: false, downloads: "13493 downloads" },
  { id: "m-post-11771", titleEn: "Maan Mandir Patrika - November 2021", titleHi: "मान मंदिर मासिक पत्रिका - November 2021", coverImg: "https://maanmandir.org/wp-content/uploads/2022/02/Maan_Mandir_Patrika_November_2021_frontpage.jpg", pdfUrl: "https://maanmandir.org/download/patrika-november-2021/", isNew: false, downloads: "12922 downloads" },
  { id: "m-post-11764", titleEn: "Maan Mandir Patrika - October 2021", titleHi: "मान मंदिर मासिक पत्रिका - October 2021", coverImg: "https://maanmandir.org/wp-content/uploads/dlm_uploads/2022/02/Maan_Mandir_Patrika_October_2021_frontpage.jpg", pdfUrl: "https://maanmandir.org/download/patrika-october-2021/", isNew: false, downloads: "14067 downloads" },
  { id: "m-post-11757", titleEn: "Maan Mandir Patrika - September 2021", titleHi: "मान मंदिर मासिक पत्रिका - September 2021", coverImg: "https://maanmandir.org/wp-content/uploads/dlm_uploads/2022/02/Maan_Mandir_Patrika_September_2021_frontPage.jpg", pdfUrl: "https://maanmandir.org/download/patrika-september-2021/", isNew: false, downloads: "12945 downloads" },
  { id: "m-post-11250", titleEn: "Maan Mandir Patrika - August 2021", titleHi: "मान मंदिर मासिक पत्रिका - August 2021", coverImg: "https://maanmandir.org/wp-content/uploads/2021/07/2021-08-cover-page-e1627608718725.jpg", pdfUrl: "https://maanmandir.org/download/patrika-august-2021/", isNew: false, downloads: "14234 downloads" },
  { id: "m-post-11241", titleEn: "Maan Mandir Patrika - July 2021", titleHi: "मान मंदिर मासिक पत्रिका - July 2021", coverImg: "https://maanmandir.org/wp-content/uploads/2021/07/2021-07-cover-page-scaled-e1627608169800.jpg", pdfUrl: "https://maanmandir.org/download/patrika-july-2021/", isNew: false, downloads: "13640 downloads" },
  { id: "m-post-10475", titleEn: "Maan Mandir Patrika – April 2020", titleHi: "मान मंदिर मासिक पत्रिका – April 2020", coverImg: "https://maanmandir.org/wp-content/uploads/2020/04/2020-04-Cover-Page-e1587267244618.jpg", pdfUrl: "https://maanmandir.org/download/patrika-april-2020/", isNew: false, downloads: "13932 downloads" },
  { id: "m-post-10469", titleEn: "Maan Mandir Patrika – March 2020", titleHi: "मान मंदिर मासिक पत्रिका – March 2020", coverImg: "https://maanmandir.org/wp-content/uploads/2020/04/2020-03-Patrika-Cover-e1587266133257.jpg", pdfUrl: "https://maanmandir.org/download/patrika-march-2020/", isNew: false, downloads: "11290 downloads" },
  { id: "m-post-10463", titleEn: "Maan Mandir Patrika – February 2020", titleHi: "मान मंदिर मासिक पत्रिका – February 2020", coverImg: "https://maanmandir.org/wp-content/uploads/2020/04/2020-02-cover-page.jpg", pdfUrl: "https://maanmandir.org/download/patrika-february-2020/", isNew: false, downloads: "11250 downloads" },
  { id: "m-post-10457", titleEn: "Maan Mandir Patrika – January 2020", titleHi: "मान मंदिर मासिक पत्रिका – January 2020", coverImg: "https://maanmandir.org/wp-content/uploads/2020/04/2020-01-cover-page.jpg", pdfUrl: "https://maanmandir.org/download/patrika-january-2020/", isNew: false, downloads: "10964 downloads" },
  { id: "m-post-10447", titleEn: "Maan Mandir Patrika - December 2019", titleHi: "मान मंदिर मासिक पत्रिका - December 2019", coverImg: "https://maanmandir.org/wp-content/uploads/2020/03/871D7B00-757D-4C37-B44D-8CCC9DB79607-e1584229235438.jpeg", pdfUrl: "https://maanmandir.org/download/patrika-december-2019/", isNew: false, downloads: "10146 downloads" },
  { id: "m-post-10440", titleEn: "Maan Mandir Patrika - November 2019", titleHi: "मान मंदिर मासिक पत्रिका - November 2019", coverImg: "https://maanmandir.org/wp-content/uploads/2020/01/2019-11-cover-page-e1578281976351.jpeg", pdfUrl: "https://maanmandir.org/download/patrika-november-2019/", isNew: false, downloads: "10151 downloads" },
  { id: "m-post-10410", titleEn: "Maan Mandir Patrika - October 2019", titleHi: "मान मंदिर मासिक पत्रिका - October 2019", coverImg: "https://maanmandir.org/wp-content/uploads/2019/10/2019-10-cover-page.jpeg", pdfUrl: "https://maanmandir.org/download/patrika-october-2019/", isNew: false, downloads: "12206 downloads" },
  { id: "m-post-10403", titleEn: "Maan Mandir Patrika - September 2019", titleHi: "मान मंदिर मासिक पत्रिका - September 2019", coverImg: "https://maanmandir.org/wp-content/uploads/2019/10/2019-09-cover-page.jpeg", pdfUrl: "https://maanmandir.org/download/patrika-september-2019/", isNew: false, downloads: "10505 downloads" },
  { id: "m-post-10391", titleEn: "Maan Mandir Patrika - August 2019", titleHi: "मान मंदिर मासिक पत्रिका - August 2019", coverImg: "https://maanmandir.org/wp-content/uploads/2019/10/2019-08-cover-page.jpeg", pdfUrl: "https://maanmandir.org/download/patrika-august-2019/", isNew: false, downloads: "10462 downloads" },
  { id: "m-post-10378", titleEn: "Maan Mandir Patrika - July 2019", titleHi: "मान मंदिर मासिक पत्रिका - July 2019", coverImg: "https://maanmandir.org/wp-content/uploads/2019/07/patrika-july-2019-cover-page.jpg", pdfUrl: "https://maanmandir.org/download/patrika-july-2019/", isNew: false, downloads: "13212 downloads" },
  { id: "m-post-10371", titleEn: "Maan Mandir Patrika - June 2019", titleHi: "मान मंदिर मासिक पत्रिका - June 2019", coverImg: "https://maanmandir.org/wp-content/uploads/2019/07/patrika-june-2019-cover-page.jpg", pdfUrl: "https://maanmandir.org/download/patrika-june-2019/", isNew: false, downloads: "11207 downloads" },
  { id: "m-post-10363", titleEn: "Maan Mandir Patrika - May 2019", titleHi: "मान मंदिर मासिक पत्रिका - May 2019", coverImg: "https://maanmandir.org/wp-content/uploads/2019/07/2019-05-cover-page-1.png", pdfUrl: "https://maanmandir.org/download/patrika-may-2019/", isNew: false, downloads: "3890 downloads" },
  { id: "m-post-10356", titleEn: "Maan Mandir Patrika – April 2019", titleHi: "मान मंदिर मासिक पत्रिका – April 2019", coverImg: "https://maanmandir.org/wp-content/uploads/2019/07/2019-04-cover-page.jpeg", pdfUrl: "https://maanmandir.org/download/patrika-april-2019/", isNew: false, downloads: "11417 downloads" },
  { id: "m-post-10292", titleEn: "Maan Mandir Patrika – Mar 2019", titleHi: "मान मंदिर मासिक पत्रिका – Mar 2019", coverImg: "https://maanmandir.org/wp-content/uploads/2019/02/2019-03-cover-page-1-1.jpg", pdfUrl: "https://maanmandir.org/download/patrika-mar-2019/", isNew: false, downloads: "12885 downloads" },
  { id: "m-post-10280", titleEn: "Maan Mandir Patrika - Feb 2019", titleHi: "मान मंदिर मासिक पत्रिका - Feb 2019", coverImg: "https://maanmandir.org/wp-content/uploads/2019/01/2019-02-patrika-cover-1-320px.jpg", pdfUrl: "https://maanmandir.org/download/patrika-feb-2019/", isNew: false, downloads: "12135 downloads" },
  { id: "m-post-10235", titleEn: "Maan Mandir Patrika - Jan 2019", titleHi: "मान मंदिर मासिक पत्रिका - Jan 2019", coverImg: "https://maanmandir.org/wp-content/uploads/2019/01/2019-01-patrika-cover-page-e1546728795957.jpg", pdfUrl: "https://maanmandir.org/download/patrika-jan-2019/", isNew: false, downloads: "11355 downloads" },
  { id: "m-post-10233", titleEn: "Maan Mandir Patrika - Dec 2018", titleHi: "मान मंदिर मासिक पत्रिका - Dec 2018", coverImg: "https://maanmandir.org/wp-content/uploads/2019/01/2018-12-patrika-cover.jpg", pdfUrl: "https://maanmandir.org/download/patrika-dec-2018/", isNew: false, downloads: "10950 downloads" },
  { id: "m-post-10231", titleEn: "Maan Mandir Patrika - Nov 2018", titleHi: "मान मंदिर मासिक पत्रिका - Nov 2018", coverImg: "https://maanmandir.org/wp-content/uploads/2019/01/2018-11-patrika-cover.jpg", pdfUrl: "https://maanmandir.org/download/patrika-nov-2018/", isNew: false, downloads: "11420 downloads" },
  { id: "m-post-10160", titleEn: "Maan Mandir  Patrika - Oct 2018", titleHi: "Maan Mandir  Patrika - Oct 2018", coverImg: "https://maanmandir.org/wp-content/uploads/2018/09/2018-10-patrika-cover-e1537667660313.jpg", pdfUrl: "https://maanmandir.org/download/patrika-oct-2018/", isNew: false, downloads: "12017 downloads" },
  { id: "m-post-10153", titleEn: "Maan Mandir Patrika - Sep 2018", titleHi: "मान मंदिर मासिक पत्रिका - Sep 2018", coverImg: "https://maanmandir.org/wp-content/uploads/2018/09/2018-09-patrika-cover-e1537667029389.jpg", pdfUrl: "https://maanmandir.org/download/patrika-sep-2018/", isNew: false, downloads: "11633 downloads" },
  { id: "m-post-10111", titleEn: "Maan Mandir Patrika – August 2018", titleHi: "मान मंदिर मासिक पत्रिका – August 2018", coverImg: "https://maanmandir.org/wp-content/uploads/2018/08/2018-08-patrika-cover-e1535414121330.jpg", pdfUrl: "https://maanmandir.org/download/patrika-august-2018/", isNew: false, downloads: "11282 downloads" },
  { id: "m-post-10103", titleEn: "Maan Mandir Patrika – July 2018", titleHi: "मान मंदिर मासिक पत्रिका – July 2018", coverImg: "https://maanmandir.org/wp-content/uploads/2018/08/2018-07-patrika-cover-page-e1535413424114.jpg", pdfUrl: "https://maanmandir.org/download/patrika-july-2018/", isNew: false, downloads: "10634 downloads" },
  { id: "m-post-10097", titleEn: "Maan Mandir Patrika – June 2018", titleHi: "मान मंदिर मासिक पत्रिका – June 2018", coverImg: "https://maanmandir.org/wp-content/uploads/2018/08/2018-06-patrika-cover-page-e1535412954277.jpg", pdfUrl: "https://maanmandir.org/download/patrika-june-2016/", isNew: false, downloads: "10532 downloads" },
  { id: "m-post-10088", titleEn: "Maan Mandir Patrika – May 2018", titleHi: "मान मंदिर मासिक पत्रिका – May 2018", coverImg: "https://maanmandir.org/wp-content/uploads/2018/08/2018-05-patrika-cover-page-e1535406405576.jpg", pdfUrl: "https://maanmandir.org/download/patrika-may-2018/", isNew: false, downloads: "10909 downloads" },
  { id: "m-post-10086", titleEn: "Maan Mandir Patrika – April 2018", titleHi: "मान मंदिर मासिक पत्रिका – April 2018", coverImg: "https://maanmandir.org/wp-content/uploads/2018/08/2018-04-patrika-cover-e1535405580743.jpg", pdfUrl: "https://maanmandir.org/download/patrika-april-2018/", isNew: false, downloads: "3199 downloads" },
  { id: "m-post-9977", titleEn: "Maan Mandir Patrika – March 2018", titleHi: "मान मंदिर मासिक पत्रिका – March 2018", coverImg: "https://maanmandir.org/wp-content/uploads/2018/08/2018-03-Patrika-cover-page-e1534214889235.jpg", pdfUrl: "https://maanmandir.org/download/patrika-mar-2018/", isNew: false, downloads: "10637 downloads" },
  { id: "m-post-9935", titleEn: "Maan Mandir Patrika - Feburary 2018", titleHi: "मान मंदिर मासिक पत्रिका - Feburary 2018", coverImg: "https://maanmandir.org/wp-content/uploads/2018/06/2018-02-patrika-cover-page-e1529349397763.jpg", pdfUrl: "https://maanmandir.org/download/patrika-feb-2018/", isNew: false, downloads: "3317 downloads" },
  { id: "m-post-9943", titleEn: "Maan Mandir Patrika – Jan 2018", titleHi: "मान मंदिर मासिक पत्रिका – Jan 2018", coverImg: "https://maanmandir.org/wp-content/uploads/2018/05/D7A3747E-8118-4A7A-B0A4-F5F4421DD3D1-e1526644804472.jpeg", pdfUrl: "https://maanmandir.org/download/maan-mandir-patrika-2018-january/", isNew: false, downloads: "10931 downloads" },
  { id: "m-dlm-12708", titleEn: "Patrika June 2026", titleHi: "Patrika June 2026", coverImg: "https://maanmandir.org/wp-content/uploads/2026/07/2026-06-Patrika-front-page-pdf.jpg", pdfUrl: "https://maanmandir.org/download/patrika-june-2026/", isNew: true, downloads: "Direct Download" },
  { id: "m-dlm-12702", titleEn: "Patrika May 2026", titleHi: "Patrika May 2026", coverImg: "https://maanmandir.org/wp-content/uploads/2026/07/2026-05-Patrika-front-page-pdf.jpg", pdfUrl: "https://maanmandir.org/download/patrika-may-2026/", isNew: true, downloads: "Direct Download" },
  { id: "m-dlm-12696", titleEn: "Patrika April 2026", titleHi: "Patrika April 2026", coverImg: "https://maanmandir.org/wp-content/uploads/2026/07/2026-04-Patrika-frong-page-pdf.jpg", pdfUrl: "https://maanmandir.org/download/patrika-april-2026/", isNew: true, downloads: "Direct Download" },
  { id: "m-dlm-12690", titleEn: "Patrika Mar 2026", titleHi: "Patrika Mar 2026", coverImg: "https://maanmandir.org/wp-content/uploads/2026/07/2026-03-Patrika-front-page-pdf.jpg", pdfUrl: "https://maanmandir.org/download/patrika-mar-2026/", isNew: false, downloads: "Direct Download" },
  { id: "m-dlm-12645", titleEn: "Patrika Feb 2026", titleHi: "Patrika Feb 2026", coverImg: "https://maanmandir.org/wp-content/uploads/2026/02/2026-02-Patrika-front-page-pdf.jpg", pdfUrl: "https://maanmandir.org/download/patrika-feb-2026/", isNew: false, downloads: "Direct Download" },
  { id: "m-dlm-12639", titleEn: "Patrika Jan 2026", titleHi: "Patrika Jan 2026", coverImg: "https://maanmandir.org/wp-content/uploads/2026/02/2026-01-Patrika-front-page-pdf.jpg", pdfUrl: "https://maanmandir.org/download/patrika-jan-2026/", isNew: false, downloads: "Direct Download" },
  { id: "m-dlm-12633", titleEn: "Patrika Dec 2025", titleHi: "Patrika Dec 2025", coverImg: "https://maanmandir.org/wp-content/uploads/2026/02/2025-12-Patrika-front-page-pdf.jpg", pdfUrl: "https://maanmandir.org/download/patrika-dec-2025/", isNew: false, downloads: "Direct Download" },
  { id: "m-dlm-12627", titleEn: "Patrika Nov 2025", titleHi: "Patrika Nov 2025", coverImg: "https://maanmandir.org/wp-content/uploads/2026/02/2025-11-Patrika-front-page-pdf.jpg", pdfUrl: "https://maanmandir.org/download/patrika-nov-2025/", isNew: false, downloads: "Direct Download" },
  { id: "m-dlm-12621", titleEn: "Patrika Oct 2025", titleHi: "Patrika Oct 2025", coverImg: "https://maanmandir.org/wp-content/uploads/2026/02/2025-10-Patrika-front-page-pdf.jpg", pdfUrl: "https://maanmandir.org/download/patrika-oct-2025/", isNew: false, downloads: "Direct Download" },
  { id: "m-dlm-12613", titleEn: "Patrika Sep 2025", titleHi: "Patrika Sep 2025", coverImg: "https://maanmandir.org/wp-content/uploads/2026/02/2025-09-Patrika-front-page-pdf.jpg", pdfUrl: "https://maanmandir.org/download/patrika-sep-2025/", isNew: false, downloads: "Direct Download" },
  { id: "m-dlm-12581", titleEn: "Patrika Aug 2025", titleHi: "Patrika Aug 2025", coverImg: "https://maanmandir.org/wp-content/uploads/2025/08/2025-08-Patrika-front-page.jpg", pdfUrl: "https://maanmandir.org/download/patrika-aug-2025/", isNew: false, downloads: "Direct Download" },
  { id: "m-dlm-12575", titleEn: "Patrika July 2025", titleHi: "Patrika July 2025", coverImg: "https://maanmandir.org/wp-content/uploads/2025/08/2025-07-Patrika-frong-page.jpg", pdfUrl: "https://maanmandir.org/download/patrika-july-2025/", isNew: false, downloads: "Direct Download" },
  { id: "m-dlm-12562", titleEn: "Patrika June 2025", titleHi: "Patrika June 2025", coverImg: "https://maanmandir.org/wp-content/uploads/2025/06/2025-06-Patrika-front-page.jpg", pdfUrl: "https://maanmandir.org/download/patrika-june-2025/", isNew: false, downloads: "Direct Download" },
  { id: "m-dlm-12556", titleEn: "Patrika May 2025", titleHi: "Patrika May 2025", coverImg: "https://maanmandir.org/wp-content/uploads/2025/06/2025-05-Patrika-front-page.jpg", pdfUrl: "https://maanmandir.org/download/patrika-may-2025/", isNew: false, downloads: "Direct Download" },
  { id: "m-dlm-12549", titleEn: "Patrika April 2025", titleHi: "Patrika April 2025", coverImg: "https://maanmandir.org/wp-content/uploads/2025/06/2025-04-Patrika-front-page.jpg", pdfUrl: "https://maanmandir.org/download/patrika-april-2025/", isNew: false, downloads: "Direct Download" },
  { id: "m-dlm-12540", titleEn: "Patrika March 2025", titleHi: "Patrika March 2025", coverImg: "https://maanmandir.org/wp-content/uploads/2025/06/2025-03-Patrika-frpnt-page.jpg", pdfUrl: "https://maanmandir.org/download/patrika-march-2025/", isNew: false, downloads: "Direct Download" },
  { id: "m-dlm-12516", titleEn: "Patrika Feburary 2025", titleHi: "Patrika Feburary 2025", coverImg: "https://maanmandir.org/wp-content/uploads/2025/02/2025-02-Patrika-front-page-pdf.jpg", pdfUrl: "https://maanmandir.org/download/patrika-feburary-2025/", isNew: false, downloads: "Direct Download" },
  { id: "m-dlm-12510", titleEn: "Patika Januray - 2025", titleHi: "Patika Januray - 2025", coverImg: "https://maanmandir.org/wp-content/uploads/2025/02/2025-01-Patrika-front-page-pdf.jpg", pdfUrl: "https://maanmandir.org/download/patika-januray-2025/", isNew: false, downloads: "Direct Download" },
  { id: "m-dlm-12504", titleEn: "Patika December - 2024", titleHi: "Patika December - 2024", coverImg: "https://maanmandir.org/wp-content/uploads/2025/01/2024-12-Patrika-front-page-pdf.jpg", pdfUrl: "https://maanmandir.org/download/patika-december-2024/", isNew: false, downloads: "Direct Download" },
  { id: "m-dlm-12407", titleEn: "Patrika August 2024", titleHi: "Patrika August 2024", coverImg: "https://maanmandir.org/wp-content/uploads/2024/08/2024-08-patrika-cover-page-pdf.jpg", pdfUrl: "https://maanmandir.org/download/patrika-august-2024/", isNew: false, downloads: "Direct Download" },
  { id: "m-dlm-12400", titleEn: "Patrika June 2024", titleHi: "Patrika June 2024", coverImg: "https://maanmandir.org/wp-content/uploads/2024/08/2024-06-patrika-cover-page-pdf.jpg", pdfUrl: "https://maanmandir.org/download/patrika-june-2024/", isNew: false, downloads: "Direct Download" },
  { id: "m-dlm-12392", titleEn: "Patrika May 2024", titleHi: "Patrika May 2024", coverImg: "https://maanmandir.org/wp-content/uploads/2024/05/2024-05-patrika-cover-page-pdf.jpg", pdfUrl: "https://maanmandir.org/download/patrika-may-2024/", isNew: false, downloads: "Direct Download" },
  { id: "m-dlm-12386", titleEn: "Patrika April 2024", titleHi: "Patrika April 2024", coverImg: "https://maanmandir.org/wp-content/uploads/2024/05/2024-04-patrika-Cover-page-pdf.jpg", pdfUrl: "https://maanmandir.org/download/patrika-april-2024/", isNew: false, downloads: "Direct Download" },
  { id: "m-dlm-12380", titleEn: "Patrika Mar 2024", titleHi: "Patrika Mar 2024", coverImg: "https://maanmandir.org/wp-content/uploads/2024/05/2024-03-patrika-cover-page-pdf.jpg", pdfUrl: "https://maanmandir.org/download/patrika-mar-2024/", isNew: false, downloads: "Direct Download" },
  { id: "m-dlm-12373", titleEn: "Patrika Feb 2024", titleHi: "Patrika Feb 2024", coverImg: "https://maanmandir.org/wp-content/uploads/2024/05/2024-02-patrika-cover-page-pdf.jpg", pdfUrl: "https://maanmandir.org/download/patrika-feb-2024/", isNew: false, downloads: "Direct Download" },
  { id: "m-dlm-12259", titleEn: "Patrika August 2023", titleHi: "Patrika August 2023", coverImg: "https://maanmandir.org/wp-content/uploads/2023/08/2023-08-patrika-cover-pdf.jpg", pdfUrl: "https://maanmandir.org/download/patrika-august-2023/", isNew: false, downloads: "Direct Download" },
  { id: "m-dlm-12253", titleEn: "Patrika July 2023", titleHi: "Patrika July 2023", coverImg: "https://maanmandir.org/wp-content/uploads/2023/08/2023-07-patrika-cover-pdf.jpg", pdfUrl: "https://maanmandir.org/download/patrika-july-2023/", isNew: false, downloads: "Direct Download" },
  { id: "m-dlm-12246", titleEn: "Patrika June 2023", titleHi: "Patrika June 2023", coverImg: "https://maanmandir.org/wp-content/uploads/2023/08/2023-06-patrika-cover-pdf.jpg", pdfUrl: "https://maanmandir.org/download/patrika-june-2023/", isNew: false, downloads: "Direct Download" },
  { id: "m-dlm-12160", titleEn: "Patrika May 2023", titleHi: "Patrika May 2023", coverImg: "https://maanmandir.org/wp-content/uploads/2023/05/2023-05-patrika-cover.jpg", pdfUrl: "https://maanmandir.org/download/patrika-may-2023/", isNew: false, downloads: "Direct Download" },
  { id: "m-dlm-12070", titleEn: "Patrika Mar 2023", titleHi: "Patrika Mar 2023", coverImg: "https://maanmandir.org/wp-content/uploads/2023/02/2023-03-Mar-front-page-pdf.jpg", pdfUrl: "https://maanmandir.org/download/patrika-mar-2023/", isNew: false, downloads: "Direct Download" },
  { id: "m-dlm-12063", titleEn: "Patrika Jan 2023", titleHi: "Patrika Jan 2023", coverImg: "https://maanmandir.org/wp-content/uploads/2023/02/2023-01-Jan-front-page-pdf.jpg", pdfUrl: "https://maanmandir.org/download/patrika-jan-2023/", isNew: false, downloads: "Direct Download" },
  { id: "m-dlm-12047", titleEn: "Patrika Nov 2022", titleHi: "Patrika Nov 2022", coverImg: "https://maanmandir.org/wp-content/uploads/2023/02/2022-11-Nov-front-page-pdf.jpg", pdfUrl: "https://maanmandir.org/download/patrika-nov-2022/", isNew: false, downloads: "Direct Download" },
  { id: "m-dlm-11881", titleEn: "Patrika Aug 2022", titleHi: "Patrika Aug 2022", coverImg: "https://maanmandir.org/wp-content/uploads/2022/07/August-2022_Maan-Mandir-Patrika-Front-Page.jpg", pdfUrl: "https://maanmandir.org/download/patrika-aug-2022/", isNew: false, downloads: "287 Downloads" },
  { id: "m-dlm-11867", titleEn: "Patrika July 2022", titleHi: "Patrika July 2022", coverImg: "https://maanmandir.org/wp-content/uploads/2022/06/July_2022_Maan-Mandir-Patrika_Cover.jpg", pdfUrl: "https://maanmandir.org/download/patrika-july-2022/", isNew: false, downloads: "230 Downloads" },
  { id: "m-dlm-11857", titleEn: "Patrika June 2022", titleHi: "Patrika June 2022", coverImg: "https://maanmandir.org/wp-content/uploads/2022/06/June_2022_Maan-Mandir-Patrika_Cover.jpg", pdfUrl: "https://maanmandir.org/download/patrika-june-2022/", isNew: false, downloads: "157 Downloads" },
  { id: "m-dlm-11837", titleEn: "Patrika May 2022", titleHi: "Patrika May 2022", coverImg: "https://maanmandir.org/wp-content/uploads/2022/05/May-2022_Maan-Mandir-Patrika-coverpage.jpg", pdfUrl: "https://maanmandir.org/download/patrika-may-2022/", isNew: false, downloads: "307 Downloads" },
  { id: "m-dlm-11831", titleEn: "Patrika April 2022", titleHi: "Patrika April 2022", coverImg: "https://maanmandir.org/wp-content/uploads/2022/05/April_2022_Maan-Mandir-Patrika-coverpage.jpg", pdfUrl: "https://maanmandir.org/download/patrika-april-2022/", isNew: false, downloads: "81 Downloads" },
  { id: "m-dlm-11785", titleEn: "Patrika January 2022", titleHi: "Patrika January 2022", coverImg: "https://maanmandir.org/wp-content/uploads/dlm_uploads/2022/02/Maan-Mandir-Patrika-January-2022-front-page.jpg", pdfUrl: "https://maanmandir.org/download/patrika-january-2022/", isNew: false, downloads: "132 Downloads" },
  { id: "m-dlm-11774", titleEn: "Patrika December 2021", titleHi: "Patrika December 2021", coverImg: "https://maanmandir.org/wp-content/uploads/dlm_uploads/2022/02/Maan_Mandir_Patrika_December_2021_front-page.jpg", pdfUrl: "https://maanmandir.org/download/patrika-december-2021/", isNew: false, downloads: "79 Downloads" },
  { id: "m-dlm-11766", titleEn: "Patrika November 2021", titleHi: "Patrika November 2021", coverImg: "https://maanmandir.org/wp-content/uploads/2022/02/Maan_Mandir_Patrika_November_2021_frontpage.jpg", pdfUrl: "https://maanmandir.org/download/patrika-november-2021/", isNew: false, downloads: "77 Downloads" },
  { id: "m-dlm-11759", titleEn: "Patrika October 2021", titleHi: "Patrika October 2021", coverImg: "https://maanmandir.org/wp-content/uploads/dlm_uploads/2022/02/Maan_Mandir_Patrika_October_2021_frontpage.jpg", pdfUrl: "https://maanmandir.org/download/patrika-october-2021/", isNew: false, downloads: "65 Downloads" },
  { id: "m-dlm-11749", titleEn: "Patrika September 2021", titleHi: "Patrika September 2021", coverImg: "https://maanmandir.org/wp-content/uploads/dlm_uploads/2022/02/Maan_Mandir_Patrika_September_2021_frontPage.jpg", pdfUrl: "https://maanmandir.org/download/patrika-september-2021/", isNew: false, downloads: "56 Downloads" },
  { id: "m-dlm-11246", titleEn: "Patrika August 2021", titleHi: "Patrika August 2021", coverImg: "https://maanmandir.org/wp-content/uploads/2021/07/2021-08-cover-page-e1627608718725.jpg", pdfUrl: "https://maanmandir.org/download/patrika-august-2021/", isNew: false, downloads: "320 Downloads" },
  { id: "m-dlm-11237", titleEn: "Patrika July 2021", titleHi: "Patrika July 2021", coverImg: "https://maanmandir.org/wp-content/uploads/2021/07/2021-07-cover-page-scaled-e1627608169800.jpg", pdfUrl: "https://maanmandir.org/download/patrika-july-2021/", isNew: false, downloads: "167 Downloads" },
  { id: "m-dlm-10471", titleEn: "Patrika April 2020", titleHi: "Patrika April 2020", coverImg: "https://maanmandir.org/wp-content/uploads/2020/04/2020-04-Cover-Page-e1587267244618.jpg", pdfUrl: "https://maanmandir.org/download/patrika-april-2020/", isNew: false, downloads: "1707 Downloads" },
  { id: "m-dlm-10465", titleEn: "Patrika March 2020", titleHi: "Patrika March 2020", coverImg: "https://maanmandir.org/wp-content/uploads/2020/04/2020-03-Patrika-Cover-e1587266133257.jpg", pdfUrl: "https://maanmandir.org/download/patrika-march-2020/", isNew: false, downloads: "461 Downloads" },
  { id: "m-dlm-10459", titleEn: "Patrika February 2020", titleHi: "Patrika February 2020", coverImg: "https://maanmandir.org/wp-content/uploads/2020/04/2020-02-cover-page.jpg", pdfUrl: "https://maanmandir.org/download/patrika-february-2020/", isNew: false, downloads: "404 Downloads" },
  { id: "m-dlm-10450", titleEn: "Patrika January 2020", titleHi: "Patrika January 2020", coverImg: "https://maanmandir.org/wp-content/uploads/2020/04/2020-01-cover-page.jpg", pdfUrl: "https://maanmandir.org/download/patrika-january-2020/", isNew: false, downloads: "361 Downloads" },
  { id: "m-dlm-10442", titleEn: "Patrika  December 2019", titleHi: "Patrika  December 2019", coverImg: "https://maanmandir.org/wp-content/uploads/2020/03/871D7B00-757D-4C37-B44D-8CCC9DB79607-e1584229235438.jpeg", pdfUrl: "https://maanmandir.org/download/patrika-december-2019/", isNew: false, downloads: "456 Downloads" },
  { id: "m-dlm-10420", titleEn: "Patrika  November 2019", titleHi: "Patrika  November 2019", coverImg: "https://maanmandir.org/wp-content/uploads/2020/01/2019-11-cover-page-e1578281976351.jpeg", pdfUrl: "https://maanmandir.org/download/patrika-november-2019/", isNew: false, downloads: "387 Downloads" },
  { id: "m-dlm-10405", titleEn: "Patrika October 2019", titleHi: "Patrika October 2019", coverImg: "https://maanmandir.org/wp-content/uploads/2019/10/2019-10-cover-page.jpeg", pdfUrl: "https://maanmandir.org/download/patrika-october-2019/", isNew: false, downloads: "1073 Downloads" },
  { id: "m-dlm-10399", titleEn: "Patrika September 2019", titleHi: "Patrika September 2019", coverImg: "https://maanmandir.org/wp-content/uploads/2019/10/2019-09-cover-page.jpeg", pdfUrl: "https://maanmandir.org/download/patrika-september-2019/", isNew: false, downloads: "444 Downloads" },
  { id: "m-dlm-10385", titleEn: "Patrika August 2019", titleHi: "Patrika August 2019", coverImg: "https://maanmandir.org/wp-content/uploads/2019/10/2019-08-cover-page.jpeg", pdfUrl: "https://maanmandir.org/download/patrika-august-2019/", isNew: false, downloads: "528 Downloads" },
  { id: "m-dlm-10376", titleEn: "Patrika July 2019", titleHi: "Patrika July 2019", coverImg: "https://maanmandir.org/wp-content/uploads/2019/07/patrika-july-2019-cover-page.jpg", pdfUrl: "https://maanmandir.org/download/patrika-july-2019/", isNew: false, downloads: "1132 Downloads" },
  { id: "m-dlm-10367", titleEn: "Patrika June 2019", titleHi: "Patrika June 2019", coverImg: "https://maanmandir.org/wp-content/uploads/2019/07/patrika-june-2019-cover-page.jpg", pdfUrl: "https://maanmandir.org/download/patrika-june-2019/", isNew: false, downloads: "510 Downloads" },
  { id: "m-dlm-10351", titleEn: "Patrika April 2019", titleHi: "Patrika April 2019", coverImg: "https://maanmandir.org/wp-content/uploads/2019/07/2019-04-cover-page.jpeg", pdfUrl: "https://maanmandir.org/download/patrika-april-2019/", isNew: false, downloads: "373 Downloads" },
  { id: "m-dlm-10287", titleEn: "Patrika Mar 2019", titleHi: "Patrika Mar 2019", coverImg: "https://maanmandir.org/wp-content/uploads/2019/02/2019-03-cover-page-1-1.jpg", pdfUrl: "https://maanmandir.org/download/patrika-mar-2019/", isNew: false, downloads: "1007 Downloads" },
  { id: "m-dlm-10275", titleEn: "Patrika Feb 2019", titleHi: "Patrika Feb 2019", coverImg: "https://maanmandir.org/wp-content/uploads/2019/01/2019-02-patrika-cover-1-320px.jpg", pdfUrl: "https://maanmandir.org/download/patrika-feb-2019/", isNew: false, downloads: "816 Downloads" },
  { id: "m-dlm-10237", titleEn: "Patrika Jan 2019", titleHi: "Patrika Jan 2019", coverImg: "https://maanmandir.org/wp-content/uploads/2019/01/2019-01-patrika-cover-page-e1546728795957.jpg", pdfUrl: "https://maanmandir.org/download/patrika-jan-2019/", isNew: false, downloads: "579 Downloads" },
  { id: "m-dlm-10224", titleEn: "Patrika Dec 2018", titleHi: "Patrika Dec 2018", coverImg: "https://maanmandir.org/wp-content/uploads/2019/01/2018-12-patrika-cover.jpg", pdfUrl: "https://maanmandir.org/download/patrika-dec-2018/", isNew: false, downloads: "463 Downloads" },
  { id: "m-dlm-10218", titleEn: "Patrika Nov 2018", titleHi: "Patrika Nov 2018", coverImg: "https://maanmandir.org/wp-content/uploads/2019/01/2018-11-patrika-cover.jpg", pdfUrl: "https://maanmandir.org/download/patrika-nov-2018/", isNew: false, downloads: "544 Downloads" },
  { id: "m-dlm-10156", titleEn: "Patrika Oct 2018", titleHi: "Patrika Oct 2018", coverImg: "https://maanmandir.org/wp-content/uploads/2018/09/2018-10-patrika-cover-e1537667660313.jpg", pdfUrl: "https://maanmandir.org/download/patrika-oct-2018/", isNew: false, downloads: "840 Downloads" },
  { id: "m-dlm-10148", titleEn: "Patrika Sep 2018", titleHi: "Patrika Sep 2018", coverImg: "https://maanmandir.org/wp-content/uploads/2018/09/2018-09-patrika-cover-e1537667029389.jpg", pdfUrl: "https://maanmandir.org/download/patrika-sep-2018/", isNew: false, downloads: "689 Downloads" },
  { id: "m-dlm-10112", titleEn: "Patrika August 2018", titleHi: "Patrika August 2018", coverImg: "https://maanmandir.org/wp-content/uploads/2018/08/2018-08-patrika-cover-e1535414121330.jpg", pdfUrl: "https://maanmandir.org/download/patrika-august-2018/", isNew: false, downloads: "562 Downloads" },
  { id: "m-dlm-10104", titleEn: "Patrika July 2018", titleHi: "Patrika July 2018", coverImg: "https://maanmandir.org/wp-content/uploads/2018/08/2018-07-patrika-cover-page-e1535413424114.jpg", pdfUrl: "https://maanmandir.org/download/patrika-july-2018/", isNew: false, downloads: "406 Downloads" },
  { id: "m-dlm-10096", titleEn: "Patrika June 2016", titleHi: "Patrika June 2016", coverImg: "https://maanmandir.org/wp-content/uploads/2018/08/2018-06-patrika-cover-page-e1535412954277.jpg", pdfUrl: "https://maanmandir.org/download/patrika-june-2016/", isNew: false, downloads: "399 Downloads" },
  { id: "m-dlm-10079", titleEn: "Patrika April 2018", titleHi: "Patrika April 2018", coverImg: "https://maanmandir.org/wp-content/uploads/2018/08/2018-04-patrika-cover-e1535405580743.jpg", pdfUrl: "https://maanmandir.org/download/patrika-april-2018-2/", isNew: false, downloads: "207 Downloads" },
  { id: "m-dlm-10089", titleEn: "Patrika May 2018", titleHi: "Patrika May 2018", coverImg: "https://maanmandir.org/wp-content/uploads/2018/08/2018-05-patrika-cover-page-e1535406405576.jpg", pdfUrl: "https://maanmandir.org/download/patrika-may-2018/", isNew: false, downloads: "385 Downloads" },
  { id: "m-dlm-9973", titleEn: "Patrika Mar 2018", titleHi: "Patrika Mar 2018", coverImg: "https://maanmandir.org/wp-content/uploads/2018/08/2018-03-Patrika-cover-page-e1534214889235.jpg", pdfUrl: "https://maanmandir.org/download/patrika-mar-2018/", isNew: false, downloads: "351 Downloads" },
  { id: "m-dlm-9846", titleEn: "Patrika Jan 2018", titleHi: "Patrika Jan 2018", coverImg: "https://maanmandir.org/wp-content/uploads/2018/05/D7A3747E-8118-4A7A-B0A4-F5F4421DD3D1-e1526644804472.jpeg", pdfUrl: "https://maanmandir.org/download/maan-mandir-patrika-2018-january/", isNew: false, downloads: "844 Downloads" },
  { id: "m-dlm-9828", titleEn: "Maan Mandir Patrika - 2017 Dec", titleHi: "मान मंदिर मासिक पत्रिका - 2017 Dec", coverImg: "https://maanmandir.org/wp-content/uploads/2018/05/043E4FAC-EDDC-4876-BDA9-BEB2ED65765E-e1526585926814.jpeg", pdfUrl: "https://maanmandir.org/download/maan-mandir-patrika-2017-dec/", isNew: false, downloads: "301 Downloads" },
  { id: "m-dlm-9697", titleEn: "Maan Mandir Patrika 2017 November", titleHi: "मान मंदिर मासिक पत्रिका 2017 November", coverImg: "https://maanmandir.org/wp-content/uploads/2017/10/nov.2017-patrika-title-e1509248623826.jpg", pdfUrl: "https://maanmandir.org/download/maan-mandir-patrika-2017-november/", isNew: false, downloads: "536 Downloads" },
  { id: "m-dlm-9687", titleEn: "Maan Mandir Patrika 2017 October", titleHi: "मान मंदिर मासिक पत्रिका 2017 October", coverImg: "https://maanmandir.org/wp-content/uploads/2017/10/oct-2017-front-e1509248468917.jpg", pdfUrl: "https://maanmandir.org/download/maan-mandir-patrika-2017-october/", isNew: false, downloads: "442 Downloads" },
  { id: "m-dlm-9676", titleEn: "Maan Mandir Patrika 2017 September", titleHi: "मान मंदिर मासिक पत्रिका 2017 September", coverImg: "https://maanmandir.org/wp-content/uploads/2017/10/september-patrika-2017-final-page-1-e1509247529964.jpg", pdfUrl: "https://maanmandir.org/download/maan-mandir-patrika-2017-september/", isNew: false, downloads: "679 Downloads" },
  { id: "m-dlm-9600", titleEn: "Maan Mandir Patrika 2017 August", titleHi: "मान मंदिर मासिक पत्रिका 2017 August", coverImg: "https://maanmandir.org/wp-content/uploads/2017/07/Mand-Mandir-Patrika-2017-August-Front-e1500849305172.jpg", pdfUrl: "https://maanmandir.org/download/maan-mandir-patrika-2017-august/", isNew: false, downloads: "584 Downloads" },
  { id: "m-dlm-9593", titleEn: "Maan Mandir Patrika May 2017", titleHi: "मान मंदिर मासिक पत्रिका May 2017", coverImg: "https://maanmandir.org/wp-content/uploads/2017/07/Maan-Mandir-May-2017-Front-Page-e1500573289575.jpg", pdfUrl: "https://maanmandir.org/download/maan-mandir-patrika-may-2017-2/", isNew: false, downloads: "416 Downloads" },
  { id: "m-dlm-9589", titleEn: "Maan Mandir Patrika April 2017", titleHi: "मान मंदिर मासिक पत्रिका April 2017", coverImg: "https://maanmandir.org/wp-content/uploads/2017/07/patrika-april-2017-fron-page-e1500573063758.jpg", pdfUrl: "https://maanmandir.org/download/maan-mandir-patrika-may-2017/", isNew: false, downloads: "553 Downloads" },
  { id: "m-dlm-9564", titleEn: "Maan Mandir Patrika 2017 July", titleHi: "मान मंदिर मासिक पत्रिका 2017 July", coverImg: "https://maanmandir.org/wp-content/uploads/2017/07/maan-mandir-2-e1499304771922.jpg", pdfUrl: "https://maanmandir.org/download/maan-mandir-patrika-2017-july/", isNew: false, downloads: "796 Downloads" },
  { id: "m-dlm-9551", titleEn: "Maan Mandir Patrika 2017 June", titleHi: "मान मंदिर मासिक पत्रिका 2017 June", coverImg: "https://maanmandir.org/wp-content/uploads/2017/06/maan-mandir-1-e1498508604526.jpg", pdfUrl: "https://maanmandir.org/download/maan-mandir-patrika-2017-june/", isNew: false, downloads: "499 Downloads" },
  { id: "m-dlm-9523", titleEn: "Maan Mandir Patrika 2017 March", titleHi: "मान मंदिर मासिक पत्रिका 2017 March", coverImg: "https://maanmandir.org/wp-content/uploads/2017/03/patrika-march-2017-e1500573658955.jpg", pdfUrl: "https://maanmandir.org/download/maan-mandir-patrika-2017-march/", isNew: false, downloads: "689 Downloads" },
  { id: "m-dlm-9519", titleEn: "Maan Mandir Patrika 2017 Feb", titleHi: "मान मंदिर मासिक पत्रिका 2017 Feb", coverImg: "https://maanmandir.org/wp-content/uploads/2017/03/patrika-feb-2017-e1500573552790.jpg", pdfUrl: "https://maanmandir.org/download/maan-mandir-patrika-2017-feb/", isNew: false, downloads: "1142 Downloads" },
  { id: "m-dlm-9478", titleEn: "Maan Mandir Patrika 2016 October", titleHi: "मान मंदिर मासिक पत्रिका 2016 October", coverImg: "https://maanmandir.org/wp-content/uploads/2016/10/Maan-Mandir-Patrika-October-2016-Cover-Page-e1476934907807.jpg", pdfUrl: "https://maanmandir.org/download/maan-mandir-patrika-2016-october/", isNew: false, downloads: "604 Downloads" },
  { id: "m-dlm-9425", titleEn: "Maan Mandir Patrika 2016 September", titleHi: "मान मंदिर मासिक पत्रिका 2016 September", coverImg: "https://maanmandir.org/wp-content/uploads/2016/09/Maan-Mandir-Patrika-2016-Sep-Cover.jpg", pdfUrl: "https://maanmandir.org/download/maan-mandir-patrika-2016-september/", isNew: false, downloads: "760 Downloads" },
  { id: "m-dlm-9420", titleEn: "Maan Mandir Patrika 2016 July", titleHi: "मान मंदिर मासिक पत्रिका 2016 July", coverImg: "https://maanmandir.org/wp-content/uploads/2016/08/Maan-Mandir-2016-08-Aug.jpg", pdfUrl: "https://maanmandir.org/download/maan-mandir-patrika-2016-july/", isNew: false, downloads: "1490 Downloads" }
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
window.openSideDrawer = function() {
  renderSideDrawerMenu();
  const sideOverlay = document.getElementById('side-drawer-overlay');
  const sidePanel = document.getElementById('side-drawer-panel');
  if (sideOverlay) sideOverlay.classList.add('active');
  if (sidePanel) {
    sidePanel.classList.add('active');
    void sidePanel.offsetHeight; // Force GPU compositor reflow
  }
  document.body.style.overflow = 'hidden';
};

window.closeSideDrawer = function() {
  const sideOverlay = document.getElementById('side-drawer-overlay');
  const sidePanel = document.getElementById('side-drawer-panel');
  if (sideOverlay) sideOverlay.classList.remove('active');
  if (sidePanel) sidePanel.classList.remove('active');
  document.body.style.overflow = '';
};

function initSideNavigationDrawer() {
  const menuBtn = document.getElementById('menu-drawer-btn');
  const sideOverlay = document.getElementById('side-drawer-overlay');
  const sidePanel = document.getElementById('side-drawer-panel');
  const sideCloseBtn = document.getElementById('side-drawer-close-btn');

  if (menuBtn) menuBtn.addEventListener('click', window.openSideDrawer);
  if (sideCloseBtn) sideCloseBtn.addEventListener('click', window.closeSideDrawer);
  if (sideOverlay) sideOverlay.addEventListener('click', window.closeSideDrawer);

  renderSideDrawerMenu();
}

window.handleSideMenuLinkClick = function(isTab, targetTab, subTab, url, isAction) {
  window.closeSideDrawer();

  if (isAction === 'openQrModal') {
    openQrModal('mm');
  } else if (isTab) {
    switchTab(targetTab);
    if (subTab) switchPublicationSubTab(subTab);
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

// Fetch Live Books with Real WordPress Titles & Cover Artworks (DLM Category 207 & Post Category 208)
async function fetchLiveWebsiteBooks() {
  fetchedBooksList = FALLBACK_WEBSITE_BOOKS; // Start with verified catalog of 60 books immediately

  try {
    const booksMap = new Map();
    FALLBACK_WEBSITE_BOOKS.forEach(b => booksMap.set(b.titleEn.toLowerCase(), b));

    // 1. Fetch DLM Download Category 207
    const dlmRes = await fetch('https://maanmandir.org/wp-json/wp/v2/dlm_download?dlm_download_category=207&per_page=100&_embed');
    if (dlmRes.ok) {
      const dlmBooks = await dlmRes.json();
      if (Array.isArray(dlmBooks)) {
        dlmBooks.forEach((item, idx) => {
          let title = item.title && item.title.rendered ? item.title.rendered.replace(/&#8211;/g, '-').replace(/&#8217;/g, "'").replace(/&amp;/g, '&').trim() : '';
          let pdfUrl = item.link ? item.link.split('?')[0] : '';
          let coverImg = '';
          if (item._embedded && item._embedded['wp:featuredmedia'] && item._embedded['wp:featuredmedia'][0]) {
            coverImg = item._embedded['wp:featuredmedia'][0].source_url || '';
          }
          if (title && pdfUrl) {
            booksMap.set(title.toLowerCase(), {
              id: `b-dlm-${item.id}`,
              titleEn: title,
              titleHi: title,
              coverImg: coverImg,
              pdfUrl: pdfUrl,
              isNew: idx < 3,
              downloads: item.download_count ? `${item.download_count} Downloads` : 'Direct Download'
            });
          }
        });
      }
    }

    // 2. Fetch Posts Category 208
    const postRes = await fetch('https://maanmandir.org/wp-json/wp/v2/posts?categories=208&per_page=100&_embed');
    if (postRes.ok) {
      const postBooks = await postRes.json();
      if (Array.isArray(postBooks)) {
        postBooks.forEach((post, idx) => {
          let title = post.title && post.title.rendered ? post.title.rendered.replace(/&#8211;/g, '-').replace(/&#8217;/g, "'").replace(/&amp;/g, '&').trim() : '';
          let coverImg = '';
          let pdfUrl = '';
          let downloads = 'Direct Download';

          if (post.content && post.content.rendered) {
            const parser = new DOMParser();
            const doc = parser.parseFromString(post.content.rendered, 'text/html');
            const img = doc.querySelector('img');
            if (img) coverImg = img.getAttribute('src');
            const link = doc.querySelector('a.dlm-download-link');
            if (link) pdfUrl = link.getAttribute('href');
            const count = doc.querySelector('.dlm-download-count');
            if (count) downloads = count.textContent.trim();
          }

          if (title && pdfUrl) {
            const key = title.toLowerCase();
            if (!booksMap.has(key)) {
              booksMap.set(key, {
                id: `b-post-${post.id}`,
                titleEn: title,
                titleHi: title,
                coverImg: coverImg,
                pdfUrl: pdfUrl,
                isNew: idx < 3,
                downloads: downloads
              });
            }
          }
        });
      }
    }

    const mergedList = Array.from(booksMap.values());
    if (mergedList.length > 0) {
      fetchedBooksList = mergedList;
      const searchInput = document.getElementById('global-search-input');
      const query = searchInput ? searchInput.value.trim() : '';
      if (currentSubTab === 'books') renderBooksTab(query);
    }
  } catch(err) {
    console.log('Website Live Fetch Sync (Books): Using verified catalog', err);
  }
}

// Fetch Live Magazine Posts with Real WordPress Titles & Front-Page Cover Artworks (DLM Category 174 & Post Category 175)
async function fetchLiveWebsiteMagazines() {
  fetchedMagazinesList = FALLBACK_WEBSITE_MAGAZINES; // Start with verified catalog of 166 magazines immediately

  try {
    const patrikaMap = new Map();
    FALLBACK_WEBSITE_MAGAZINES.forEach(m => patrikaMap.set(m.titleEn.toLowerCase(), m));

    // 1. Fetch DLM Category 174
    const dlmRes = await fetch('https://maanmandir.org/wp-json/wp/v2/dlm_download?dlm_download_category=174&per_page=100&_embed');
    if (dlmRes.ok) {
      const dlmPatrika = await dlmRes.json();
      if (Array.isArray(dlmPatrika)) {
        dlmPatrika.forEach((item, idx) => {
          let title = item.title && item.title.rendered ? item.title.rendered.replace(/&#8211;/g, '-').replace(/&#8217;/g, "'").replace(/&amp;/g, '&').trim() : '';
          let pdfUrl = item.link ? item.link.split('?')[0] : '';
          let coverImg = '';
          if (item._embedded && item._embedded['wp:featuredmedia'] && item._embedded['wp:featuredmedia'][0]) {
            coverImg = item._embedded['wp:featuredmedia'][0].source_url || '';
          }
          if (title && pdfUrl) {
            patrikaMap.set(title.toLowerCase(), {
              id: `m-dlm-${item.id}`,
              titleEn: title,
              titleHi: title.replace('Maan Mandir Patrika', 'मान मंदिर मासिक पत्रिका'),
              coverImg: coverImg,
              pdfUrl: pdfUrl,
              isNew: idx < 3,
              downloads: item.download_count ? `${item.download_count} Downloads` : 'Direct Download'
            });
          }
        });
      }
    }

    // 2. Fetch Posts Category 175
    const postRes = await fetch('https://maanmandir.org/wp-json/wp/v2/posts?categories=175&per_page=100&_embed');
    if (postRes.ok) {
      const postPatrika = await postRes.json();
      if (Array.isArray(postPatrika)) {
        postPatrika.forEach((post, idx) => {
          let title = post.title && post.title.rendered ? post.title.rendered.replace(/&#8211;/g, '-').replace(/&#8217;/g, "'").replace(/&amp;/g, '&').trim() : '';
          let coverImg = '';
          let pdfUrl = '';
          let downloads = 'Direct Download';

          if (post.content && post.content.rendered) {
            const parser = new DOMParser();
            const doc = parser.parseFromString(post.content.rendered, 'text/html');
            const img = doc.querySelector('img');
            if (img) coverImg = img.getAttribute('src');
            const link = doc.querySelector('a.dlm-download-link');
            if (link) pdfUrl = link.getAttribute('href');
            const count = doc.querySelector('.dlm-download-count');
            if (count) downloads = count.textContent.trim();
          }

          if (title && pdfUrl) {
            const key = title.toLowerCase();
            if (!patrikaMap.has(key)) {
              patrikaMap.set(key, {
                id: `m-post-${post.id}`,
                titleEn: title,
                titleHi: title.replace('Maan Mandir Patrika', 'मान मंदिर मासिक पत्रिका'),
                coverImg: coverImg,
                pdfUrl: pdfUrl,
                isNew: idx < 3,
                downloads: downloads
              });
            }
          }
        });
      }
    }

    const mergedList = Array.from(patrikaMap.values());
    if (mergedList.length > 0) {
      fetchedMagazinesList = mergedList;
      const searchInput = document.getElementById('global-search-input');
      const query = searchInput ? searchInput.value.trim() : '';
      if (currentSubTab === 'magazines') renderMagazinesTab(query);
    }
  } catch(err) {
    console.log('Website Live Fetch Sync (Magazines): Using verified magazine catalog', err);
  }
}

// Switch Sub Tab (Books vs Magazines)
window.switchPublicationSubTab = function(subTab) {
  currentSubTab = subTab;
  booksCurrentPage = 1;
  magazinesCurrentPage = 1;

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
window.openNotificationDrawer = function() {
  const drawerOverlay = document.getElementById('drawer-overlay');
  const drawerPanel = document.getElementById('drawer-panel');
  if (drawerOverlay) drawerOverlay.classList.add('active');
  if (drawerPanel) drawerPanel.classList.add('active');
  document.body.style.overflow = 'hidden';
};

window.closeNotificationDrawer = function() {
  const drawerOverlay = document.getElementById('drawer-overlay');
  const drawerPanel = document.getElementById('drawer-panel');
  if (drawerOverlay) drawerOverlay.classList.remove('active');
  if (drawerPanel) drawerPanel.classList.remove('active');
  document.body.style.overflow = '';
};

function initNotificationDrawer() {
  const bellBtn = document.getElementById('bell-notification-btn');
  const drawerOverlay = document.getElementById('drawer-overlay');
  const drawerPanel = document.getElementById('drawer-panel');
  const drawerCloseBtn = document.getElementById('drawer-close-btn');

  if (bellBtn) bellBtn.addEventListener('click', window.openNotificationDrawer);
  if (drawerCloseBtn) drawerCloseBtn.addEventListener('click', window.closeNotificationDrawer);
  if (drawerOverlay) drawerOverlay.addEventListener('click', window.closeNotificationDrawer);

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
    id: "soc-website",
    nameEn: "Official Website Portal",
    nameHi: "आधिकारिक वेबसाइट पोर्टल",
    handle: "www.maanmandir.org",
    url: "https://maanmandir.org",
    icon: "🌐",
    brandColor: "#d97706",
    badgeEn: "MAIN PORTAL",
    badgeHi: "मुख्य पोर्टल",
    descEn: "Visit the official Shri Maan Mandir Seva Sansthan website for articles, news & info.",
    descHi: "श्री मान मंदिर सेवा संस्थान की आधिकारिक वेबसाइट पर जाएँ।"
  },
  {
    id: "soc-whatsapp",
    nameEn: "Official WhatsApp Channel",
    nameHi: "आधिकारिक व्हाट्सएप चैनल",
    handle: "Maan Mandir Devotee Broadcast",
    url: "https://whatsapp.com/channel/0029VbD91RUIt5rmh4DA6P1p",
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
    handle: "@shrimaanmandir",
    url: "https://www.instagram.com/shrimaanmandir?igsh=MW4yaTB0dGc5OXN1Mg==",
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
    handle: "ShriMaanMandir",
    url: "https://www.facebook.com/ShriMaanMandir",
    icon: "📘",
    brandColor: "#1877F2",
    badgeEn: "COMMUNITY PAGE",
    badgeHi: "आधिकारिक पेज",
    descEn: "Live event streams, detailed Seva news, articles, and community announcements for devotees worldwide.",
    descHi: "लाइव कार्यक्रम, सेवा समाचार, धार्मिक लेख एवं वैश्विक भक्त समुदाय समाचार।"
  },
  {
    id: "soc-satsang",
    nameEn: "Audio Satsang & Bhajan Playlists",
    nameHi: "ऑडियो सत्संग व भजन प्लेलिस्ट",
    handle: "@MaanMandirSatsang",
    url: "https://www.youtube.com/@MaanMandirSatsang/playlists",
    icon: "🎵",
    brandColor: "#FF0000",
    badgeEn: "PLAYLISTS",
    badgeHi: "प्लेलिस्ट",
    descEn: "Listen to complete Pravachan series, daily Satsang albums, and Braj Kirtan playlists on YouTube.",
    descHi: "यूट्यूब पर संपूर्ण प्रवचन श्रृंखला, नित्य सत्संग एलबम एवं ब्रज कीर्तन प्लेलिस्ट सुनें।"
  },
  {
    id: "soc-playstore",
    nameEn: "Maanini App (Google Play)",
    nameHi: "मानिनी ऐप (गूगल प्ले स्टोर)",
    handle: "com.maan.mandir",
    url: "https://play.google.com/store/apps/details?id=com.maan.mandir",
    icon: "📲",
    brandColor: "#0284c7",
    badgeEn: "ANDROID APP",
    badgeHi: "एंड्रॉइड ऐप",
    descEn: "Download the official Android App for Maan Mandir Devotee Mobile Experience.",
    descHi: "गूगल प्ले स्टोर से मानिनी / मान मंदिर का आधिकारिक एंड्रॉइड ऐप डाउनलोड करें।"
  },
  {
    id: "soc-flickr",
    nameEn: "Maanmandir Photos (Flickr)",
    nameHi: "मान मंदिर फोटो एलबम (फ़्लिकर)",
    handle: "flickr.com/photos/maanmandir",
    url: "https://www.flickr.com/photos/maanmandir/albums/",
    icon: "🖼️",
    brandColor: "#ff0084",
    badgeEn: "PHOTO ALBUMS",
    badgeHi: "फोटो एलबम",
    descEn: "Browse high-resolution photo archives of Dham Leela, Festivals, and Darshan.",
    descHi: "बरसाना धाम उत्सवों, नित्य दर्शन एवं लीला स्थलों की हाई-डेफिनिशन फोटो एलबम देखें।"
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

// Global Image Fallback Handler for YouTube CDN Avatars
window.handleAvatarError = function(imgEl) {
  if (!imgEl) return;
  imgEl.style.display = 'none';
  if (imgEl.parentElement) {
    const fallback = imgEl.parentElement.querySelector('.youtube-gateway-icon-fallback');
    if (fallback) fallback.style.display = 'flex';
  }
};

// Render YouTube Live & Official Channels Gateway Cards
function renderYouTubeTab() {
  const container = document.getElementById('youtube-videos-list');
  if (!container) return;

  const isHi = currentLang === 'hi';
  container.innerHTML = MAAN_MANDIR_YOUTUBE_CHANNELS.map(ch => `
    <div class="youtube-gateway-card ${ch.isLive ? 'is-live-channel' : ''}">
      <div class="youtube-gateway-header">
        <div class="youtube-gateway-brand">
          <div style="position: relative; display: inline-flex;">
            ${ch.cdnAvatar ? `
              <img class="youtube-gateway-avatar" src="${ch.cdnAvatar}" alt="${isHi ? ch.nameHi : ch.nameEn}" onerror="handleAvatarError(this)" />
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

// Change Publication Page Global Handler
window.changePublicationPage = function(subTab, newPage) {
  const searchInput = document.getElementById('global-search-input');
  const query = searchInput ? searchInput.value.trim() : '';

  if (subTab === 'books') {
    booksCurrentPage = newPage;
    renderBooksTab(query, newPage);
  } else {
    magazinesCurrentPage = newPage;
    renderMagazinesTab(query, newPage);
  }

  const container = document.getElementById('tab-books');
  if (container) {
    container.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

// Render Pagination Controls HTML
function renderPaginationHtml(subTab, currentPage, totalPages, totalItems, startIndex, endIndex) {
  if (totalItems <= PUBLICATIONS_PER_PAGE) return '';

  const isHi = currentLang === 'hi';
  const actualEnd = Math.min(endIndex, totalItems);
  const fromNum = startIndex + 1;

  const infoText = isHi 
    ? `कुल ${totalItems} में से ${fromNum}–${actualEnd} (पृष्ठ ${currentPage} / ${totalPages})`
    : `Showing ${fromNum}–${actualEnd} of ${totalItems} (Page ${currentPage} of ${totalPages})`;

  let pagesHtml = '';
  for (let i = 1; i <= totalPages; i++) {
    if (totalPages > 6 && Math.abs(i - currentPage) > 2 && i !== 1 && i !== totalPages) {
      if (i === 2 && currentPage > 4) pagesHtml += `<span style="padding: 0 4px; color: var(--text-muted); align-self: center;">...</span>`;
      if (i === totalPages - 1 && currentPage < totalPages - 3) pagesHtml += `<span style="padding: 0 4px; color: var(--text-muted); align-self: center;">...</span>`;
      continue;
    }
    pagesHtml += `
      <button class="pagination-btn ${i === currentPage ? 'active' : ''}" onclick="window.changePublicationPage('${subTab}', ${i})">
        ${i}
      </button>
    `;
  }

  return `
    <div class="pagination-wrapper">
      <div class="pagination-info">${infoText}</div>
      <div class="pagination-controls">
        <button class="pagination-btn" ${currentPage === 1 ? 'disabled' : ''} onclick="window.changePublicationPage('${subTab}', ${currentPage - 1})">
          ${isHi ? '‹ पिछला' : '‹ Prev'}
        </button>
        ${pagesHtml}
        <button class="pagination-btn" ${currentPage === totalPages ? 'disabled' : ''} onclick="window.changePublicationPage('${subTab}', ${currentPage + 1})">
          ${isHi ? 'अगला ›' : 'Next ›'}
        </button>
      </div>
    </div>
  `;
}

// Render Books Section with Pagination & Search Filter
function renderBooksTab(searchQuery = '', page = null) {
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

  if (page !== null) {
    booksCurrentPage = page;
  }

  const totalItems = booksToRender.length;
  if (totalItems === 0) {
    container.innerHTML = `
      <div style="text-align:center; padding:35px 15px; color:var(--text-muted);">
        <div style="font-size:2rem; margin-bottom:8px;">🔍</div>
        <p style="font-size:1.05rem; font-weight:700;">${isHi ? 'कोई पुस्तक नहीं मिली' : 'No books found matching search'}</p>
        <p style="font-size:0.82rem; margin-top:4px;">${isHi ? 'कृपया अन्य शब्द का प्रयोग करें' : 'Try searching for another title or author'}</p>
      </div>
    `;
    return;
  }

  const totalPages = Math.ceil(totalItems / PUBLICATIONS_PER_PAGE) || 1;
  if (booksCurrentPage > totalPages) booksCurrentPage = totalPages;
  if (booksCurrentPage < 1) booksCurrentPage = 1;

  const startIndex = (booksCurrentPage - 1) * PUBLICATIONS_PER_PAGE;
  const endIndex = startIndex + PUBLICATIONS_PER_PAGE;
  const pageItems = booksToRender.slice(startIndex, endIndex);

  const cardsHtml = pageItems.map(book => `
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

  const paginationHtml = renderPaginationHtml('books', booksCurrentPage, totalPages, totalItems, startIndex, endIndex);
  container.innerHTML = cardsHtml + paginationHtml;
}

// Render Monthly Magazine Section with Pagination & Search Filter
function renderMagazinesTab(searchQuery = '', page = null) {
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

  if (page !== null) {
    magazinesCurrentPage = page;
  }

  const totalItems = magsToRender.length;
  if (totalItems === 0) {
    container.innerHTML = `
      <div style="text-align:center; padding:35px 15px; color:var(--text-muted);">
        <div style="font-size:2rem; margin-bottom:8px;">🔍</div>
        <p style="font-size:1.05rem; font-weight:700;">${isHi ? 'कोई मासिक पत्रिका नहीं मिली' : 'No magazine issues found matching search'}</p>
        <p style="font-size:0.82rem; margin-top:4px;">${isHi ? 'कृपया अन्य वर्ष या माह खोजें' : 'Try searching for another month or year'}</p>
      </div>
    `;
    return;
  }

  const totalPages = Math.ceil(totalItems / PUBLICATIONS_PER_PAGE) || 1;
  if (magazinesCurrentPage > totalPages) magazinesCurrentPage = totalPages;
  if (magazinesCurrentPage < 1) magazinesCurrentPage = 1;

  const startIndex = (magazinesCurrentPage - 1) * PUBLICATIONS_PER_PAGE;
  const endIndex = startIndex + PUBLICATIONS_PER_PAGE;
  const pageItems = magsToRender.slice(startIndex, endIndex);

  const cardsHtml = pageItems.map(mag => `
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

  const paginationHtml = renderPaginationHtml('magazines', magazinesCurrentPage, totalPages, totalItems, startIndex, endIndex);
  container.innerHTML = cardsHtml + paginationHtml;
}

// Switch Tab Programmatically
window.switchTab = function(tabName) {
  const navItems = document.querySelectorAll('.nav-item');
  const tabPanes = document.querySelectorAll('.tab-pane');

  navItems.forEach(nav => {
    if (nav.getAttribute('data-tab') === tabName) {
      nav.classList.add('active');
    } else {
      nav.classList.remove('active');
    }
  });

  tabPanes.forEach(pane => {
    if (pane.id === `tab-${tabName}`) {
      pane.classList.add('active');
    } else {
      pane.classList.remove('active');
    }
  });

  if (tabName === 'youtube') {
    renderYouTubeTab();
    renderSocialPlatforms();
  } else if (tabName === 'books') {
    renderBooksTab();
    renderMagazinesTab();
  } else if (tabName === 'home') {
    renderHomeRecentUpdates();
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
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

// Live Full-Text Search Engine: Scans through full-text contents & published literature
let searchDebounceTimer = null;

function fetchFullTextSearchResults(query) {
  const container = document.getElementById('fulltext-search-results');
  if (!container) return;

  if (!query || query.trim().length < 2) {
    container.innerHTML = '';
    container.style.display = 'none';
    return;
  }

  const cleanQuery = query.trim();
  const isHi = currentLang === 'hi';
  container.style.display = 'block';
  container.innerHTML = `
    <div style="padding:10px; background:var(--bg-tertiary); border-radius:var(--radius-sm); text-align:center; color:var(--text-muted); font-size:0.82rem; font-weight:700;">
      <span class="live-red-dot-animated" style="display:inline-block; vertical-align:middle; margin-right:6px;"></span>
      ${isHi ? `"${cleanQuery}" के लिए ग्रंथों व ग्रंथों के पाठ में खोज जारी है...` : `Scanning full text in publications for "${cleanQuery}"...`}
    </div>
  `;

  if (searchDebounceTimer) clearTimeout(searchDebounceTimer);

  searchDebounceTimer = setTimeout(() => {
    fetch(`https://maanmandir.org/wp-json/wp/v2/posts?search=${encodeURIComponent(cleanQuery)}&per_page=10`)
      .then(res => res.json())
      .then(posts => {
        if (!posts || posts.length === 0) {
          container.innerHTML = `
            <div style="background:var(--bg-tertiary); border:1px solid var(--border-light); border-radius:var(--radius-sm); padding:10px 12px; font-size:0.82rem; color:var(--text-muted); margin-bottom:14px;">
              ℹ️ ${isHi ? `"${cleanQuery}" के लिए कोई पाठ मैच नहीं मिला।` : `No full-text paragraph matches found for "${cleanQuery}".`}
            </div>
          `;
          return;
        }

        container.innerHTML = `
          <div style="font-size:0.88rem; font-weight:800; color:var(--primary-blue); margin-bottom:8px; display:flex; align-items:center; gap:6px;">
            <span>📖</span>
            <span>${isHi ? `"${cleanQuery}" शब्द के पावन संदर्भ व मैच (${posts.length}):` : `Full-Text Keyword Matches for "${cleanQuery}" (${posts.length}):`}</span>
          </div>
          <div style="display:flex; flex-direction:column; gap:8px; margin-bottom:16px;">
            ${posts.map(post => {
              const title = post.title && post.title.rendered 
                ? post.title.rendered.replace(/&#8211;/g, '-').replace(/&#8217;/g, "'").replace(/&amp;/g, '&').replace(/<[^>]+>/g, '') 
                : 'Maan Mandir Publication';
              
              let excerpt = post.excerpt && post.excerpt.rendered 
                ? post.excerpt.rendered.replace(/<[^>]+>/g, '').replace(/&#8211;/g, '-').replace(/&#8217;/g, "'").replace(/&amp;/g, '&').trim() 
                : '';
              if (excerpt.length > 150) excerpt = excerpt.substring(0, 150) + '...';

              return `
                <div style="background:var(--bg-primary); border:1px solid var(--border-blue); border-left:4px solid var(--primary-blue); border-radius:var(--radius-sm); padding:10px 12px; box-shadow:var(--shadow-sm);">
                  <div style="font-weight:800; font-size:0.88rem; color:var(--primary-blue); margin-bottom:3px;">${title}</div>
                  <div style="font-size:0.78rem; color:var(--text-medium); line-height:1.4; margin-bottom:8px;">${excerpt}</div>
                  <a href="${post.link}" target="_blank" class="btn-outline" style="display:inline-flex; align-items:center; gap:4px; padding:4px 10px; font-size:0.75rem; text-decoration:none; font-weight:800;">
                    📖 ${isHi ? 'पूरा पाठ / संदर्भ पढ़ें ↗' : 'Read Full Passage ↗'}
                  </a>
                </div>
              `;
            }).join('')}
          </div>
        `;
      })
      .catch(err => {
        container.style.display = 'none';
      });
  }, 350);
}

// Global Instant Perform Search Function
window.performSearch = function() {
  const searchInput = document.getElementById('global-search-input');
  if (!searchInput) return;

  const query = searchInput.value.trim();

  // Reset page to page 1 whenever search query changes
  booksCurrentPage = 1;
  magazinesCurrentPage = 1;

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
    renderBooksTab(query, 1);
  } else {
    renderMagazinesTab(query, 1);
  }

  // Trigger Live Full-Text Keyword Scanning across all books & publications
  fetchFullTextSearchResults(query);
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

// Service Worker Cache Invalidation & Registration
function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistrations().then(registrations => {
      registrations.forEach(registration => registration.unregister());
    });
    caches.keys().then(keys => {
      keys.forEach(key => caches.delete(key));
    });
    navigator.serviceWorker.register('./sw.js?v=80')
      .catch(err => console.error('Service Worker Registration Failed', err));
  }
}
