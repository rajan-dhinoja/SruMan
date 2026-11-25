export interface TranslationDict {
  welcome: {
    shreenathjiMantra: string;
    ganeshMantra: string;
    kuldeviMantra: string;
    ringCeremony: string;
    shreefalVidhi: string;
    scrollExplore: string;
  };
  couple: {
    familyBlessingIntro: string;
    shreenathjiGrace: string;
    brideGrandparents: string;
    brideParents: string;
    brideName: string;
    brideRole: string;
    brideTagline: string;
    brideDesc: string;
    groomGrandparents: string;
    groomParents: string;
    groomName: string;
    groomRole: string;
    groomTagline: string;
    groomDesc: string;
    eventAnnouncement: string;
    invitationGreeting: string;
    foreverBeginning: string;
    gettingEngagedDate: string;
    meetCoupleTitle: string;
    scrollNext: string;
    meetCoupleScrollNext: string;
  };
  nimantrak: {
    title: string;
    grandparents: string;
    parents: string;
    uncleAunt: string;
    relativesList: {
      riki: string;
      rajan: string;
      ruchi: string;
      vansh: string;
    };
    endingGreeting: string;
    shubhSthalTitle: string;
    shubhSthalName: string;
    shubhSthalAddress: string;
    shubhSthalMobile: string;
    shubhSthalMobile2: string;
    scrollNext: string;
  };
  eventDetails: {
    joinCelebration: string;
    mainTitle: string;
    countdownAwaiting: string;
    countdown: {
      months: string;
      days: string;
      hours: string;
      minutes: string;
      seconds: string;
    };
    ongoingTitle: string;
    dateTimeCard: {
      title: string;
      date: string;
      time: string;
      button: string;
    };
    venueCard: {
      title: string;
      name: string;
      address: string;
      button: string;
    };
    dressCodeCard: {
      title: string;
      style: string;
      colors: string;
      button: string;
    };
  };
  venue: {
    addressLabel: string;
    mainTitle: string;
    venueName: string;
    address: string;
    button: string;
    celebrationHall: string;
  };
  blessings: {
    blessingsLove: string;
    mainTitle: string;
    writeWishTitle: string;
    inputNamePlaceholder: string;
    inputTextPlaceholder: string;
    selectCardStyle: string;
    cardStyles: {
      gold: string;
      purple: string;
      champagne: string;
    };
    submitButton: string;
    defaultWishes: {
      wish1: string;
      wish2: string;
      wish3: string;
    };
    justNow: string;
    hoursAgo: string;
    daysAgo: string;
    blessingSentTitle: string;
    blessingSentMsg: string;
    yourBlessing: string;
    viewAllWishes: string;
    cardsCount: string;
    backToLoopView: string;
  };
  gateEntry: {
    openGateBtn: string;
  };
  global: {
    navDots: {
      welcome: string;
      couple: string;
      meetCouple: string;
      nimantrak: string;
      events: string;
      venue: string;
      blessings: string;
      credits: string;
    };
    footer: {
      madeWithLove: string;
      thankYouForVisiting: string;
      craftedBy: string;
      nickname: string;
      dateAndPlace: string;
    };
    audio: {
      mute: string;
      play: string;
    };
  };
  preloader: {
    defaultText: string;
    defaultSubtitle: string;
    hubText: string;
    hubSubtitle: string;
    gateText: string;
    gateSubtitle: string;
    weddingText: string;
    weddingSubtitle: string;
  };
  hub: {
    tapCrestTitle: string;
    tapCrestBadge: string;
    welcomePrefix: string;
    brideFirstName: string;
    groomFirstName: string;
    quote: string;
    subtitlePart1: string;
    subtitleHighlight1: string;
    subtitlePart2: string;
    subtitleHighlight2: string;
    subtitlePart3: string;
    subtitleHighlight3: string;
    subtitlePart4: string;
    showerRoyalBlessings: string;
    weddingCard: {
      primaryBadge: string;
      comingSoonBadge: string;
      title: string;
      tagline: string;
      desc: string;
      launchingTitle: string;
      stayTunedBadge: string;
      launchingDesc: string;
    };
    timelineTitle: string;
    engagementCard: {
      foreverBadge: string;
      reliveBadge: string;
      title: string;
      tagline: string;
      dateLabel: string;
      dateValue: string;
      muhuratLabel: string;
      venueLabel: string;
      venueValue: string;
      countdownOngoing: string;
      countdownPast: string;
      countdownUpcoming: string;
      months: string;
      days: string;
      hours: string;
      mins: string;
      secs: string;
      exploreHighlights: string;
      features: {
        gate: { title: string; subtitle: string; desc: string; badge: string };
        blessings: { title: string; subtitle: string; desc: string; badge: string };
        nimantrak: { title: string; subtitle: string; desc: string; badge: string };
        trilingual: { title: string; subtitle: string; desc: string; badge: string };
      };
      enterPortalBtn: string;
      showerBlessingsBtn: string;
      showerBlessingsTitle: string;
    };
    dotr: {
      craftedBadge: string;
      companyName: string;
      tagline: string;
      pillar1Title: string;
      pillar1Desc: string;
      pillar2Title: string;
      pillar2Desc: string;
      pillar3Title: string;
      pillar3Desc: string;
      visitWebsite: string;
      copyInfo: string;
      copied: string;
      copyTitle: string;
      designedWithLove: string;
      copyright: string;
    };
  };
}

export const translations: Record<"gu" | "en" | "hi", TranslationDict> = {
  gu: {
    welcome: {
      shreenathjiMantra: "|| શ્રીનાથજી બાવા સદા બિરાજમાન છે. ||",
      ganeshMantra: "|| શ્રી ગણેશાય નમઃ ||",
      kuldeviMantra: "|| શ્રી કુળદેવીમાં સત્ય છે. ||",
      ringCeremony: "Ring Ceremony",
      shreefalVidhi: "(શ્રી શ્રીફળ વિધિ)",
      scrollExplore: "આમંત્રણ પત્રિકા જોવા સ્ક્રોલ કરો",
    },
    couple: {
      familyBlessingIntro: "પરિવારના આશીર્વાદ સાથે",
      shreenathjiGrace: "પરમ કૃપાળુ શ્રીનાથજી બાવાની અસીમ કૃપાથી",
      brideGrandparents: "ગૌ.વા. શરદચંદ્ર ઘેલાભાઈ ધીણોજા તથા ગૌ.વા. પુષ્પાબેન શરદચંદ્ર ધીણોજા ની સુપૌત્રી",
      brideParents: "તથા શ્રી અજયભાઈ શરદચંદ્ર ધીણોજા તથા અ.સૌ. રીનાબેન અજયભાઈ ધીણોજા ની સુપુત્રી",
      brideName: "ચિ. સૃષ્ટિ",
      brideRole: "કન્યા",
      brideTagline: "લાવણ્ય અને હેતની સરવાણી",
      brideDesc: "સુંદર સપનાઓથી ભરેલું હૃદય. તે અમનની દુનિયામાં ખુશીઓ અને શાલીનતા લાવે છે, રોજિંદી પળોને યાદગાર વાર્તાઓમાં ફેરવે છે.",
      groomGrandparents: "(જયપુર નિવાસી) ગૌ.વા. જગદીશપ્રસાદ કન્હૈયાલાલ નાટાણી તથા શ્રી ચંદ્રભાગાબેન જગદીશપ્રસાદ નાટાણી ના સુપૌત્ર",
      groomParents: "તથા શ્રી મુરારીભાઈ જગદીશપ્રસાદ નાટાણી તથા અ.સૌ. સુધાલતાબેન મુરારીભાઈ નાટાણી ના સુપુત્ર",
      groomName: "ચિ. અમન",
      groomRole: "વરરાજા",
      groomTagline: "ધૈર્ય અને સમર્પણનો પથદર્શક",
      groomDesc: "એક સ્વપ્નદ્રષ્ટા અને શક્તિનો સ્તંભ, જે માયાળુ અને હૂંફાળો છે. અમન સૃષ્ટિને એક નિશ્ચિત, અતૂટ અને આદરપૂર્વકનો પ્રેમ આપે છે.",
      eventAnnouncement: "સાથે 'શ્રી શ્રીફળ વિધિ (સગાઈ અને ચુંદડી)' શ્રાવણ સુદ-૬ ને મંગળવાર તા. ૧૮-૦૮-૨૦૨૬ ના શુભ દિવસે નિરધારેલ છે.",
      invitationGreeting: "આ સુંદર પ્રસંગે આપની હાજરી અને આશીર્વાદ અમારા હૃદયને આનંદથી ભરી દેશે — આપ સહપરિવાર પધારી આ માનભરી પળને વધુ ભવ્ય બનાવશો. 🙏",
      foreverBeginning: "અનંતકાળની શરૂઆત",
      gettingEngagedDate: "સગાઈના બંધનમાં બંધાવા જઈ રહ્યા છે • ૧૮ ઓગસ્ટ ૨૦૨૬",
      meetCoupleTitle: "વર-વધૂ પરિચય",
      scrollNext: "નિમંત્રક જોવા સ્ક્રોલ કરો",
      meetCoupleScrollNext: "પ્રસંગો જોવા સ્ક્રોલ કરો",
    },
    nimantrak: {
      title: ":: નિમંત્રક ::",
      grandparents: "ગૌ.વા. શરદચંદ્ર ઘેલાભાઈ ધીણોજા • ગૌ.વા. પુષ્પાબેન શરદચંદ્ર ધીણોજા",
      parents: "અજયભાઈ શરદચંદ્ર ધીણોજા • અ.સૌ. રીનાબેન અજયભાઈ ધીણોજા",
      uncleAunt: "અમિતભાઈ શરદચંદ્ર ધીણોજા • અ.સૌ. જ્યોતિબેન અમિતભાઈ ધીણોજા",
      relativesList: {
        riki: "કુ. રીકી અજયભાઈ ધીણોજા",
        rajan: "રાજન અજયભાઈ ધીણોજા",
        ruchi: "કુ. રુચિ અમિતભાઈ ધીણોજા",
        vansh: "વંશ અમિતભાઈ ધીણોજા",
      },
      endingGreeting: "તથા ધીણોજા પરિવારના જય શ્રી કૃષ્ણ",
      shubhSthalTitle: ":: નિવાસ સ્થાન ::",
      shubhSthalName: '"ગિરિકંદરા"',
      shubhSthalAddress: "ચોરડી દરવાજો, ઉદ્યોગ ભારતી ચોક, ગોંડલ.",
      shubhSthalMobile: "મો. ૯૧૦૬૬૭૫૧૫૬",
      shubhSthalMobile2: "મો. ૯૧૦૬૬૭૫૩૨૦",
      scrollNext: "પરિચય જોવા સ્ક્રોલ કરો",
    },
    eventDetails: {
      joinCelebration: "ઉજવણીમાં સામેલ થાઓ",
      mainTitle: "સમારોહની વિગત",
      countdownAwaiting: "શુભ ઘડીની રાહ",
      ongoingTitle: "શુભ પ્રસંગ ચાલી રહ્યો છે",
      countdown: {
        months: "મહિના",
        days: "દિવસ",
        hours: "કલાક",
        minutes: "મિનિટ",
        seconds: "સેકન્ડ",
      },
      dateTimeCard: {
        title: "તારીખ અને સમય",
        date: "૧૮ ઓગસ્ટ, ૨૦૨૬ {મંગળવાર}",
        time: "સવારે ૯:૦૦ વાગ્યાથી શરૂ",
        button: "કેલેન્ડરમાં ઉમેરો",
      },
      venueCard: {
        title: "સ્થળ",
        name: "પરિશ્રમ ધ લોન્સ",
        address: "મોવીયા રોડ, ગોંડલ, ગુજરાત",
        button: "નકશામાં જુઓ",
      },
      dressCodeCard: {
        title: "પહેરવેશ",
        style: "રાજવી ભારતીય પરંપરાગત / ઇન્ડો-વેસ્ટર્ન",
        colors: "જાંબલી, લેવેન્ડર અને સોનેરી રંગો",
        button: "શુભેચ્છા પાઠવો",
      },
    },
    venue: {
      addressLabel: "સરનામું",
      mainTitle: "સ્થળ અને દિશા નિર્દેશ",
      venueName: "પરિશ્રમ પાર્ટીપ્લોટ",
      address: "મોવીયા રોડ, ગોંડલ, ગુજરાત - ૩૬૦૩૧૧",
      button: "રસ્તો મેળવો",
      celebrationHall: "સમારોહ હોલ",
    },
    blessings: {
      blessingsLove: "આશીર્વાદ અને પ્રેમ",
      mainTitle: "શુભેચ્છા બોર્ડ",
      writeWishTitle: "શુભેચ્છા લખો",
      inputNamePlaceholder: "આપનું નામ",
      inputTextPlaceholder: "અહીં તમારા શુભાશિષ લખો...",
      selectCardStyle: "કાર્ડની શૈલી પસંદ કરો",
      cardStyles: {
        gold: "સોનેરી",
        purple: "જાંબલી",
        champagne: "શેમ્પેઈન",
      },
      submitButton: "શુભેચ્છા મોકલો",
      defaultWishes: {
        wish1: "સૌથી સુંદર જોડીને, તમારી રિંગ સેરેમની તમારા જીવનની નવી અને પ્રેમભરી શરૂઆત બને તેવી શુભકામનાઓ!",
        wish2: "સૃષ્ટિ અને અમન, અમને તમારા આ સુંદર સોપાનની ઉજવણી તમારી સાથે કરતાં ખૂબ જ આનંદ થાય છે! ખુબ ખુબ અભિનંદન!",
        wish3: "તમારા બંનેને મારા હાર્દિક આશીર્વાદ અને પ્રાર્થના. આ સુંદર પ્રેમ ઉત્સવની ઉજવણી જોવા આતુર છું!",
      },
      justNow: "હમણાં જ",
      hoursAgo: "કલાક પહેલા",
      daysAgo: "દિવસ પહેલા",
      blessingSentTitle: "શુભેચ્છા મોકલાઈ ગઈ!",
      blessingSentMsg: "તમારી સુંદર શુભેચ્છા માટે આભાર! તમે બોર્ડ પર તમારી મોકલેલી શુભેચ્છા જોઈ કે કાઢી શકો છો.",
      yourBlessing: "તમારી શુભેચ્છા ✨",
      viewAllWishes: "તમામ શુભેચ્છાઓ જુઓ",
      cardsCount: "કાર્ડ્સ",
      backToLoopView: "લૂપ વ્યૂ પર પાછા ફરો",
    },
    gateEntry: {
      openGateBtn: "મહેલના દ્વાર ખોલો",
    },
    global: {
      navDots: {
        welcome: "શ્રી ગણેશ",
        couple: "વર-વધૂ",
        meetCouple: "પરિચય",
        nimantrak: "નિમંત્રક",
        events: "પ્રસંગો",
        venue: "સ્થળ",
        blessings: "આશીર્વાદ",
        credits: "ડોટર",
      },
      footer: {
        madeWithLove: "પ્રેમપૂર્વક બનાવેલ • ઓગસ્ટ ૨૦૨૬",
        thankYouForVisiting: "આ કંકોત્રી વેબસાઇટ જોવા બદલ આભાર ❤️",
        craftedBy: "✨ પ્રેમ અને આસ્થા સાથે સજાવેલું, નિર્મિત દ્વારા 👇",
        nickname: "ટૂંકું નામ (ઉપનામ):",
        dateAndPlace: "૧૮.૦૮.૨૦૨૬ • ગોંડલ, ગુજરાત",
      },
      audio: {
        mute: "મ્યૂટ કરો",
        play: "મ્યુઝિક ચાલુ કરો",
      },
    },
    preloader: {
      defaultText: "ઉજવણી લોડ થઈ રહી છે...",
      defaultSubtitle: "સૃષ્ટિ અને અમન • શુભ પ્રસંગો",
      hubText: "શ્રુમન હબ લોડ થઈ રહ્યું છે...",
      hubSubtitle: "ઉજવણીમાં આપનું સ્વાગત છે",
      gateText: "રાજમહેલના દ્વાર લોડ થઈ રહ્યા છે...",
      gateSubtitle: "મંગલમય શાહી ઉજવણી",
      weddingText: "શાહી લગ્ન સમારોહ...",
      weddingSubtitle: "ટૂંક સમયમાં આવી રહ્યું છે",
    },
    hub: {
      tapCrestTitle: "શાહી આશીર્વાદ માટે ક્લિક કરો",
      tapCrestBadge: "શાહી આશીર્વાદ માટે મુદ્રા પર ટૅપ કરો",
      welcomePrefix: "ઉજવણીમાં આપનું સ્વાગત છે",
      brideFirstName: "સૃષ્ટિ",
      groomFirstName: "અમન",
      quote: "“બે હૃદય, બે આત્માઓ, પ્રેમની એક અનંત સફર”",
      subtitlePart1: "અમારા ",
      subtitleHighlight1: "શુભ પ્રસંગો",
      subtitlePart2: " નિહાળો, ",
      subtitleHighlight2: "સગાઈની મધુર યાદો",
      subtitlePart3: " તાજી કરો, અને ",
      subtitleHighlight3: "શાહી લગ્ન સમારોહ",
      subtitlePart4: " માટે જોડાયેલા રહો.",
      showerRoyalBlessings: "શાહી આશીર્વાદ વરસાવો (પુષ્પવૃષ્ટિ)",
      weddingCard: {
        primaryBadge: "મુખ્ય ઉજવણી",
        comingSoonBadge: "ટૂંક સમયમાં",
        title: "શાહી લગ્ન સમારોહ",
        tagline: "પવિત્ર ફેરા અને અનંત પ્રેમનો ભવ્ય ઉત્સવ",
        desc: "અમારા ભવ્ય લગ્ન સમારોહની પવિત્ર યાત્રા શરૂ થઈ ચૂકી છે. મંડપ મુહૂર્ત, હલ્દી, મહેંદી, સંગીત, જાન, ફેરા અને રિસેપ્શન સહિતના વિવિધ પ્રસંગોની તૈયારીઓ ચાલી રહી છે.",
        launchingTitle: "વેડિંગ પોર્ટલ ટૂંક સમયમાં શરૂ થશે",
        stayTunedBadge: "જોડાયેલા રહો",
        launchingDesc: "પ્રસંગોની રૂપરેખા, શુભ મુહૂર્ત, સ્થળનું માર્ગદર્શન અને લાઇવ અપડેટ્સ સાથેનો ભવ્ય ડિજિટલ લગ્ન અનુભવ ટૂંક સમયમાં રજૂ કરવામાં આવશે.",
      },
      timelineTitle: "ઉજવણીના ફૂલડાં માટે ક્લિક કરો!",
      engagementCard: {
        foreverBadge: "જ્યાંથી અનંત સફરની શરૂઆત થઈ",
        reliveBadge: "યાદો તાજી કરો",
        title: "સગાઈ સમારોહ",
        tagline: "ભવ્ય રિંગ સેરેમની, રાજમહેલના દ્વાર અને પવિત્ર વચનો",
        dateLabel: "તારીખ:",
        dateValue: "૧૮ ઓગસ્ટ ૨૦૨૬ (શ્રાવણ સુદ-૬)",
        muhuratLabel: "મુહૂર્ત:",
        venueLabel: "સ્થળ:",
        venueValue: "પરિશ્રમ ધ લોન્સ, ગોંડલ",
        countdownOngoing: "શુભ સગાઈ પ્રસંગ હાલમાં ચાલી રહ્યો છે",
        countdownPast: "શુભ પ્રસંગની અવિસ્મરણીય પળોને વીતેલો સમય",
        countdownUpcoming: "શુભ રિંગ સેરેમનીની કાઉન્ટડાઉન ગણતરી",
        months: "મહિના",
        days: "દિવસ",
        hours: "કલાક",
        mins: "મિનિટ",
        secs: "સેકન્ડ",
        exploreHighlights: "✦ પોર્ટલની ખાસ વિશેષતાઓ જુઓ:",
        features: {
          gate: {
            title: "રાજમહેલ દ્વાર પ્રવેશ",
            subtitle: "સિનેમેટિક 3D ઓપનિંગ",
            desc: "શરણાઈ અને નગારાના મધુર સૂર સાથે મહેમાનોનું શાહી ઉજવણીમાં સ્વાગત કરતી ભવ્ય રાજમહેલના દ્વારની ઝાંખી.",
            badge: "સિનેમેટિક 3D",
          },
          blessings: {
            title: "ડિજિટલ આશીર્વાદ પુસ્તિકા",
            subtitle: "હૃદયસ્પર્શી શુભેચ્છાઓ",
            desc: "તાત્કાલિક લાઇવ પ્રિવ્યુ અને યાદગાર સંદેશાઓ સાથે આપની શુભેચ્છાઓ, પ્રાર્થના અને પરિવારના આશીર્વાદ મોકલો.",
            badge: "લાઇવ શુભેચ્છા",
          },
          nimantrak: {
            title: "પરંપરાગત નિમંત્રક પત્રિકા",
            subtitle: "પવિત્ર શાહી આમંત્રણ",
            desc: "પરિવારની વંશાવળી, શુભ મુહૂર્ત અને પવિત્ર વૈદિક શ્લોકો રજૂ કરતી ભવ્ય ડિજિટલ કંકોત્રી / પત્રિકા.",
            badge: "પવિત્ર પત્રિકા",
          },
          trilingual: {
            title: "ત્રિભાષી અનુભવ",
            subtitle: "ગુજરાતી • હિન્દી • અંગ્રેજી",
            desc: "ગુજરાતી (માતૃભાષા), હિન્દી અને અંગ્રેજી વચ્ચે સરળ અને તાત્કાલિક બદલાવ જેથી પરિવારના દરેક સભ્યને પોતાપણું લાગે.",
            badge: "બહુભાષી",
          },
        },
        enterPortalBtn: "સગાઈ પોર્ટલમાં પ્રવેશ કરો અને યાદો તાજી કરો",
        showerBlessingsBtn: "આશીર્વાદ વરસાવો",
        showerBlessingsTitle: "ઉજવણીના ફૂલડાંથી શુભેચ્છા આપો",
      },
      dotr: {
        craftedBadge: "પ્રેમ અને નવીનતા સાથે નિર્મિત",
        companyName: "DHINOJA OmniTech Resolutions",
        tagline: "ઉચ્ચ-ગુણવત્તાવાળા ડિજિટલ અનુભવો અને રોયલ વેડિંગ સ્યુટ્સના નિર્માતા",
        pillar1Title: "કસ્ટમ વેબ પ્લેટફોર્મ્સ",
        pillar1Desc: "Next.js, React અને આધુનિક વેબ એન્જિનિયરિંગ",
        pillar2Title: "લક્ઝરી મોશન અને 3D",
        pillar2Desc: "60fps એનિમેશન, વેબ ઓડિયો અને ઇન્ટરેક્ટિવ UI",
        pillar3Title: "એન્ટરપ્રાઇઝ સોલ્યુશન્સ",
        pillar3Desc: "ક્લાઉડ આર્કિટેક્ચર અને સ્કેલેબલ ડિજિટલ સિસ્ટમ્સ",
        visitWebsite: "dotr.in ની મુલાકાત લો",
        copyInfo: "માહિતી કોપી કરો",
        copied: "કોપી થઈ ગયું!",
        copyTitle: "સંપર્કની તમામ વિગતો કોપી કરો",
        designedWithLove: "સૃષ્ટિ અને અમન માટે ♥ થી ડિઝાઇન અને નિર્મિત",
        copyright: "© ૨૦૨૬ DHINOJA OmniTech Resolutions (DOTR) • સર્વ હક અબાધિત",
      },
    },
  },
  en: {
    welcome: {
      shreenathjiMantra: "|| श्रीनाथजी बावा सदा विराजमान हैं। ||",
      ganeshMantra: "|| श्री गणेशाय नमः ||",
      kuldeviMantra: "|| श्री कुलदेवी माँ सत्य है। ||",
      ringCeremony: "Ring Ceremony",
      shreefalVidhi: "(Shree Shrifal Vidhi)",
      scrollExplore: "Explore Invites",
    },
    couple: {
      familyBlessingIntro: "With Family Blessings",
      shreenathjiGrace: "By the Grace of Lord Shreenathji",
      brideGrandparents: "Granddaughter of Late Sharadchandra Ghelabhai Dhinoja & Late Pushpaben Sharadchandra Dhinoja",
      brideParents: "and Daughter of Mr. Ajaybhai Sharadchandra Dhinoja & Mrs. Rinaben Ajaybhai Dhinoja",
      brideName: "Chi. Srushti",
      brideRole: "Bride-to-be",
      brideTagline: "A Symphony of Grace & Love",
      brideDesc: "A heart filled with beautiful dreams. She brings joy and elegance to Aman's world, making everyday moments beautiful memories.",
      groomGrandparents: "Grandson of Late Jagdishprasad Kanhaiyalal Natani & Mrs. Chandrabhagaben Jagdishprasad Natani (Residents of Jaipur)",
      groomParents: "and Son of Mr. Muraribhai Jagdishprasad Natani & Mrs. Sudhalataben Muraribhai Natani",
      groomName: "Chi. Aman",
      groomRole: "Groom-to-be",
      groomTagline: "A Pillar of Strength & Devotion",
      groomDesc: "A visionary and pillar of strength, kind and warm. Aman gives Srushti a steady, unwavering, and respectful love.",
      eventAnnouncement: "The auspicious 'Shree Shrifal Vidhi (Engagement & Chundadi)' is fixed on Shravan Sud-6, Tuesday, August 18, 2026.",
      invitationGreeting: "Your presence and blessings on this beautiful occasion would fill our hearts with immense joy — we warmly invite you and your beloved family to celebrate this cherished moment with us. 🙏",
      foreverBeginning: "The Beginning of Forever",
      gettingEngagedDate: "Getting Engaged • August 18, 2026",
      meetCoupleTitle: "Meet the Couple",
      scrollNext: "Scroll to Inviters",
      meetCoupleScrollNext: "Scroll to Event Details",
    },
    nimantrak: {
      title: ":: Inviters ::",
      grandparents: "Late Sharadchandra Ghelabhai Dhinoja • Late Pushpaben Sharadchandra Dhinoja",
      parents: "Ajaybhai Sharadchandra Dhinoja • Mrs. Rinaben Ajaybhai Dhinoja",
      uncleAunt: "Amitbhai Sharadchandra Dhinoja • Mrs. Jyotiben Amitbhai Dhinoja",
      relativesList: {
        riki: "Riki Ajaybhai Dhinoja",
        rajan: "Rajan Ajaybhai Dhinoja",
        ruchi: "Ruchi Amitbhai Dhinoja",
        vansh: "Vansh Amitbhai Dhinoja",
      },
      endingGreeting: "and the entire Dhinoja Family's warm regards",
      shubhSthalTitle: ":: Residence ::",
      shubhSthalName: '"Girikandra"',
      shubhSthalAddress: "Chordi Darwajo, Udhyog Bharti Chok, Gondal.",
      shubhSthalMobile: "Mo. 9106675156",
      shubhSthalMobile2: "Mo. 9106675320",
      scrollNext: "Scroll to Meet Couple",
    },
    eventDetails: {
      joinCelebration: "Join the Celebration",
      mainTitle: "Event Details",
      countdownAwaiting: "Awaiting the Auspicious Hour",
      ongoingTitle: "The Auspicious Event is Ongoing",
      countdown: {
        months: "Months",
        days: "Days",
        hours: "Hours",
        minutes: "Mins",
        seconds: "Secs",
      },
      dateTimeCard: {
        title: "Date & Time",
        date: "August 18, 2026 {Tuesday}",
        time: "Starting from 9:00 AM",
        button: "Add to Calendar",
      },
      venueCard: {
        title: "Venue",
        name: "Parishram The Lawns",
        address: "Moviya Road, Gondal, Gujarat",
        button: "View on Map",
      },
      dressCodeCard: {
        title: "Dress Code",
        style: "Royal Indian Traditional / Indo-Western",
        colors: "Purple, Lavender & Gold Colors",
        button: "Send Wishes",
      },
    },
    venue: {
      addressLabel: "Address",
      mainTitle: "Venue & Directions",
      venueName: "Parishram Partyplot",
      address: "Moviya Road, Gondal, Gujarat 360311",
      button: "Get Directions",
      celebrationHall: "Celebration Hall",
    },
    blessings: {
      blessingsLove: "Blessings & Love",
      mainTitle: "Wishes Wall",
      writeWishTitle: "Write a Wish",
      inputNamePlaceholder: "Your Name",
      inputTextPlaceholder: "Write your blessings here...",
      selectCardStyle: "Select Card Theme",
      cardStyles: {
        gold: "Gold",
        purple: "Purple",
        champagne: "Champagne",
      },
      submitButton: "Send Wishes",
      defaultWishes: {
        wish1: "Wishing the most beautiful couple a wonderful engagement and a beautiful beginning to your life together!",
        wish2: "Srushti and Aman, we are so delighted to celebrate this beautiful milestone with you! Congratulations!",
        wish3: "Sending my heartfelt blessings and prayers to both of you. Can't wait to see this beautiful celebration of love!",
      },
      justNow: "Just Now",
      hoursAgo: "hours ago",
      daysAgo: "days ago",
      blessingSentTitle: "Blessing Sent!",
      blessingSentMsg: "Thank you for your beautiful wish! You can view or delete your sent blessing on the board.",
      yourBlessing: "Your Blessing ✨",
      viewAllWishes: "View All Wishes List",
      cardsCount: "cards",
      backToLoopView: "Back to Loop View",
    },
    gateEntry: {
      openGateBtn: "Open Palace Gates",
    },
    global: {
      navDots: {
        welcome: "Shree Ganesh",
        couple: "Couple",
        meetCouple: "Meet Couple",
        nimantrak: "Inviters",
        events: "Events",
        venue: "Venue",
        blessings: "Blessings",
        credits: "DOTR",
      },
      footer: {
        madeWithLove: "Made with Love • August 2026",
        thankYouForVisiting: "Thank You for Visiting This Kankotri Website ❤️",
        craftedBy: "✨ Lovingly Crafted & Passionately Built, by 👇",
        nickname: "INSHORT (NICKNAME):",
        dateAndPlace: "18.08.2026 • GONDAL, GUJARAT",
      },
      audio: {
        mute: "Mute Music",
        play: "Play Music",
      },
    },
    preloader: {
      defaultText: "Loading Celebrations...",
      defaultSubtitle: "Srushti & Aman • Auspicious Festivities",
      hubText: "Loading SruMan Hub...",
      hubSubtitle: "Welcome To The Celebrations",
      gateText: "Loading Palace Gates...",
      gateSubtitle: "Auspicious Royal Celebration",
      weddingText: "The Royal Wedding...",
      weddingSubtitle: "Coming Soon",
    },
    hub: {
      tapCrestTitle: "Click for Royal Blessings",
      tapCrestBadge: "Tap Crest For Royal Blessings",
      welcomePrefix: "Welcome To The Celebrations of",
      brideFirstName: "Srushti",
      groomFirstName: "Aman",
      quote: "“Two hearts, two souls, one eternal journey of love”",
      subtitlePart1: "Discover our ",
      subtitleHighlight1: "auspicious celebrations",
      subtitlePart2: ", relive the ",
      subtitleHighlight2: "joyous engagement memories",
      subtitlePart3: ", and stay tuned for the ",
      subtitleHighlight3: "royal wedding",
      subtitlePart4: ".",
      showerRoyalBlessings: "Shower Royal Blessings (પુષ્પવૃષ્ટિ)",
      weddingCard: {
        primaryBadge: "Primary Celebration",
        comingSoonBadge: "Coming Soon",
        title: "The Royal Wedding",
        tagline: "A grand celebration of sacred vows & forever love",
        desc: "The sacred journey toward our grand wedding celebration is underway. Multi-day festivities including Mandap Muhurat, Haldi, Mehendi, Sangeet, Baarat, Pheras, and Reception are in preparation.",
        launchingTitle: "Launching Wedding Portal Soon",
        stayTunedBadge: "Stay Tuned",
        launchingDesc: "The grand digital wedding experience featuring ceremony itineraries, auspicious muhurats, venue navigation, and live updates will be unveiled soon.",
      },
      timelineTitle: "Click for celebration sparkles!",
      engagementCard: {
        foreverBadge: "Where Forever Began",
        reliveBadge: "Relive The Memories",
        title: "The Engagement Ceremony",
        tagline: "The grand ring ceremony, palace gates & sacred promises",
        dateLabel: "Date:",
        dateValue: "18 Aug 2026 (શ્રાવણ સુદ-૬)",
        muhuratLabel: "Muhurat:",
        venueLabel: "Venue:",
        venueValue: "Parishram The Lawns, Gondal",
        countdownOngoing: "The Auspicious Ceremony is Ongoing",
        countdownPast: "Cherished Moments Since The Auspicious Ceremony",
        countdownUpcoming: "Countdown To The Auspicious Ring Ceremony",
        months: "MONTHS",
        days: "DAYS",
        hours: "HOURS",
        mins: "MINS",
        secs: "SECS",
        exploreHighlights: "✦ Explore Portal Highlights Inside:",
        features: {
          gate: {
            title: "Royal Palace Gate Entrance",
            subtitle: "Cinematic 3D Opening",
            desc: "An enchanting royal palace gate sequence with authentic trumpets and shehnai tunes welcoming guests into the royal celebration.",
            badge: "Cinematic 3D",
          },
          blessings: {
            title: "Digital Blessings Guestbook",
            subtitle: "Personal Heartfelt Wishes",
            desc: "Send custom prayers, congratulations, and family blessings with instant live preview and heartfelt keepsake messages.",
            badge: "Interactive Wishes",
          },
          nimantrak: {
            title: "Traditional Nimantrak Patrika",
            subtitle: "Sacred Royal Invitation",
            desc: "A timeless ceremonial digital kankotri / patrika presenting the family lineage, auspicious muhurats, and sacred Vedic verses.",
            badge: "Sacred Patrika",
          },
          trilingual: {
            title: "Trilingual Experience",
            subtitle: "Gujarati • Hindi • English",
            desc: "Seamless live toggle between Gujarati (માતૃભાષા), Hindi, and English so every family member feels at home.",
            badge: "Multilingual",
          },
        },
        enterPortalBtn: "Enter Engagement Portal & Relive Memories",
        showerBlessingsBtn: "Shower Blessings",
        showerBlessingsTitle: "Celebrate with festive sparkles",
      },
      dotr: {
        craftedBadge: "Crafted With Passion & Innovation By",
        companyName: "DHINOJA OmniTech Resolutions",
        tagline: "Architecting High-Performance Digital Experiences & Royal Wedding Suites",
        pillar1Title: "Custom Web Platforms",
        pillar1Desc: "Next.js, React & modern web engineering",
        pillar2Title: "Luxury Motion & 3D",
        pillar2Desc: "60fps animations, Web Audio & interactive UI",
        pillar3Title: "Enterprise Solutions",
        pillar3Desc: "Cloud architecture & scalable digital systems",
        visitWebsite: "Visit dotr.in",
        copyInfo: "Copy Info",
        copied: "Copied!",
        copyTitle: "Copy all contact details",
        designedWithLove: "Designed & Developed with ♥ for Srushti & Aman",
        copyright: "© 2026 DHINOJA OmniTech Resolutions (DOTR) • All Rights Reserved",
      },
    },
  },
  hi: {
    welcome: {
      shreenathjiMantra: "|| श्रीनाथजी बावा सदा विराजमान हैं। ||",
      ganeshMantra: "|| श्री गणेशाय नमः ||",
      kuldeviMantra: "|| श्री कुलदेवी माँ सत्य है। ||",
      ringCeremony: "Ring Ceremony",
      shreefalVidhi: "(श्री श्रीफल विधि)",
      scrollExplore: "आमंत्रण पत्र देखने के लिए स्क्रॉल करें",
    },
    couple: {
      familyBlessingIntro: "परिवार के आशीर्वाद के साथ",
      shreenathjiGrace: "परम कृपालु श्रीनाथजी बावा की असीम कृपा से",
      brideGrandparents: "स्व. शरदचंद्र घेलाभाई धीणोजा एवं स्व. पुष्पाबेन शरदचंद्र धीणोजा की सुपौत्री",
      brideParents: "तथा श्री अजयभाई शरदचंद्र धीणोजा एवं अ.सौ. रीनाबेन अजयभाई धीणोजा की सुपुत्री",
      brideName: "चि. सृष्टि",
      brideRole: "कन्या",
      brideTagline: "सच्चे प्रेम और शालीनता की मूरत",
      brideDesc: "सुंदर सपनों से भरा दिल। वह अमन की दुनिया में खुशियाँ और गरिमा लाती हैं, रोज़मर्रा के पलों को यादगार कहानियों में बदल देती हैं।",
      groomGrandparents: "(जयपुर निवासी) स्व. जगदीशप्रसाद कन्हैयालाल नाटाणी तथा श्रीमती चंद्रभागाबेन जगदीशप्रसाद नाटाणी के सुपौत्र",
      groomParents: "तथा श्री मुरारीभाई जगदीशप्रसाद नाटाणी एवं अ.सौ. सुधालताबेन मुरारीभाई नाटाणी के सुपुत्र",
      groomName: "चि. अमन",
      groomRole: "वरराजा",
      groomTagline: "धैर्य और सच्चे समर्पण की पहचान",
      groomDesc: "एक दूरदर्शी और शक्ति के स्तंभ, दयालु और स्नेही। अमन सृष्टि को एक स्थिर, अटूट और सम्मानजनक प्रेम देते हैं।",
      eventAnnouncement: "के साथ 'श्री श्रीफल विधि (सगाई और चुनरी)' श्रावण सुद-६, मंगलवार दिनांक १८-૦८-२०२६ के शुभ दिन तय हुई है।",
      invitationGreeting: "इस खूबसूरत अवसर पर आपकी उपस्थिति और आशीर्वाद हमारे हृदय को अपार खुशी से भर देगी — हम आपको सपरिवार सहर्दय आमंत्रित करते हैं इस यादगार पल का हिस्सा बनने के लिए. 🙏",
      foreverBeginning: "अनंत काल की शुरुआत",
      gettingEngagedDate: "सगाई के बंधन में बंधन जा रहे हैं • १८ अगस्त २०२६",
      meetCoupleTitle: "वर-वधू परिचय",
      scrollNext: "निमंत्रक देखने के लिए स्क्रॉल करें",
      meetCoupleScrollNext: "समारोह विवरण देखने के लिए स्क्रॉल करें",
    },
    nimantrak: {
      title: ":: निमंत्रक ::",
      grandparents: "स्व. शरदचंद्र घेलाभाई धीणोजा • स्व. पुष्पाबेन शरदचंद्र धीणोजा",
      parents: "अजयभाई शरदचंद्र धीणोजा • अ.सौ. रीनाबेन अजयभाई धीणोजा",
      uncleAunt: "अमितभाई शरदचंद्र धीणोजा • अ.सौ. ज्योतिबेन अमितभाई धीणोजा",
      relativesList: {
        riki: "कु. रिकी अजयभाई धीणोजा",
        rajan: "राजन अजयभाई धीणोजा",
        ruchi: "कु. रुचि अमितभाई धीणोजा",
        vansh: "वंश अमितभाई धीणोजा",
      },
      endingGreeting: "तथा धीणोजा परिवार के जय श्री कृष्ण",
      shubhSthalTitle: ":: निवास स्थान ::",
      shubhSthalName: '"गिरिकंदरा"',
      shubhSthalAddress: "चोरडी दरवाजा, उद्योग भारती चौक, गोंडल।",
      shubhSthalMobile: "मो. ९१०६६७५१५६",
      shubhSthalMobile2: "मो. ९१०६६७५३२०",
      scrollNext: "परिचय देखने के लिए स्क्रॉल करें",
    },
    eventDetails: {
      joinCelebration: "उत्सव में शामिल हों",
      mainTitle: "समारोह विवरण",
      countdownAwaiting: "शुभ घड़ी की प्रतीक्षा",
      ongoingTitle: "शुभ समारोह चल रहा है",
      countdown: {
        months: "महीने",
        days: "दिन",
        hours: "घंटे",
        minutes: "मिनट",
        seconds: "सेकंड",
      },
      dateTimeCard: {
        title: "तारीख और समय",
        date: "१८ अगस्त २०२६ {मंगलवार}",
        time: "सुबह ९:०० बजे से शुरू",
        button: "कैलेंडर में जोड़ें",
      },
      venueCard: {
        title: "स्थान",
        name: "परिश्रम द लॉन्स",
        address: "मोवीया रोड, गोंडल, गुजरात",
        button: "नकशे पर देखें",
      },
      dressCodeCard: {
        title: "परिधान (ड्रेस कोड)",
        style: "शाही भारतीय पारंपरिक / इंडो-वेस्टर्न",
        colors: "बैंगनी, लैवेंडर और सुनहरे रंग",
        button: "शुभकामनाएं भेजें",
      },
    },
    venue: {
      addressLabel: "पता",
      mainTitle: "स्थान और मार्ग दर्शन",
      venueName: "परिश्रम पार्टीप्लॉट",
      address: "मोवीया रोड, गोंडल, गुजरात ३६०३११",
      button: "मार्ग प्राप्त करें",
      celebrationHall: "समारोह हॉल",
    },
    blessings: {
      blessingsLove: "आशीर्वाद और स्नेह",
      mainTitle: "शुभकामना बोर्ड",
      writeWishTitle: "शुभकामनाएं लिखें",
      inputNamePlaceholder: "आपका नाम",
      inputTextPlaceholder: "यहां अपने मंगल वचन लिखें...",
      selectCardStyle: "कार्ड की शैली चुनें",
      cardStyles: {
        gold: "सुनहरा",
        purple: "बैंगनी",
        champagne: "शैम्पेन",
      },
      submitButton: "शुभकामनाएं भेजें",
      defaultWishes: {
        wish1: "सबसे खूबसूरत जोड़ी को सगाई की हार्दिक बधाई! आपका नया जीवन खुशियों और अपार प्रेम से भरा हो।",
        wish2: "सृष्टि और अमन, हमें आप दोनों के इस खूबसूरत सफर का हिस्सा बनने की बेहद खुशी है! बहुत-बहुत बधाई!",
        wish3: "आप दोनों को मेरा हार्दिक आशीर्वाद। इस सुंदर प्रेम उत्सव को देखने के लिए हम उत्सुक हैं!",
      },
      justNow: "अभी-अभी",
      hoursAgo: "घंटे पहले",
      daysAgo: "दिन पहले",
      blessingSentTitle: "आशीर्वाद भेजा गया!",
      blessingSentMsg: "आपकी सुंदर शुभकामना के लिए धन्यवाद! आप बोर्ड पर अपने भेजे गए आशीर्वाद को देख या हटा सकते हैं।",
      yourBlessing: "आपका आशीर्वाद ✨",
      viewAllWishes: "सभी शुभकामनाएँ देखें",
      cardsCount: "कार्ड",
      backToLoopView: "लूप व्यू पर वापस जाएं",
    },
    gateEntry: {
      openGateBtn: "महल के द्वार खोलें",
    },
    global: {
      navDots: {
        welcome: "श्री गणेश",
        couple: "वर-वधू",
        meetCouple: "परिचय",
        nimantrak: "निमंत्रक",
        events: "समारोह",
        venue: "स्थान",
        blessings: "आशीर्वाद",
        credits: "डोटर",
      },
      footer: {
        madeWithLove: "प्रेमपूर्वक निर्मित • अगस्त २०२६",
        thankYouForVisiting: "इस कंकोत्री वेबसाइट पर आने के लिए धन्यवाद ❤️",
        craftedBy: "✨ प्यार और ज़ज़्बे से सजाया, निर्मित द्वारा 👇",
        nickname: "छोटा नाम (उपनाम):",
        dateAndPlace: "१८.०८.२०२६ • गोंडल, गुजरात",
      },
      audio: {
        mute: "म्यूट करें",
        play: "म्यूजिक चलाएं",
      },
    },
    preloader: {
      defaultText: "उत्सव लोड हो रहा है...",
      defaultSubtitle: "सृष्टि और अमन • शुभ समारोह",
      hubText: "श्रुमन हब लोड हो रहा है...",
      hubSubtitle: "उत्सव में आपका स्वागत है",
      gateText: "राजमहल के द्वार लोड हो रहे हैं...",
      gateSubtitle: "मंगलमय शाही उत्सव",
      weddingText: "शाही विवाह समारोह...",
      weddingSubtitle: "जल्द आ रहा है",
    },
    hub: {
      tapCrestTitle: "शाही आशीर्वाद के लिए क्लिक करें",
      tapCrestBadge: "शाही आशीर्वाद के लिए मुकुट चिह्न पर टैप करें",
      welcomePrefix: "उत्सव में आपका हार्दिक स्वागत है",
      brideFirstName: "सृष्टि",
      groomFirstName: "अमन",
      quote: "“दो हृदय, दो आत्माएँ, प्रेम की एक अनंत यात्रा”",
      subtitlePart1: "हमारे ",
      subtitleHighlight1: "मंगलमय उत्सवों",
      subtitlePart2: " को जानें, ",
      subtitleHighlight2: "सगाई की मधुर यादें",
      subtitlePart3: " ताज़ा करें, और ",
      subtitleHighlight3: "शाही विवाह समारोह",
      subtitlePart4: " के लिए जुड़े रहें।",
      showerRoyalBlessings: "शाही आशीर्वाद बरसाएं (पुष्पवर्षा)",
      weddingCard: {
        primaryBadge: "मुख्य समारोह",
        comingSoonBadge: "जल्द आ रहा है",
        title: "शाही विवाह समारोह",
        tagline: "पवित्र फेरों और अनंत प्रेम का भव्य उत्सव",
        desc: "हमारे भव्य विवाह समारोह की पावन यात्रा शुरू हो चुकी है। मंडप मुहूर्त, हल्दी, मेहंदी, संगीत, बारात, फेरे और रिसेप्शन सहित बहु-दिवसीय उत्सवों की तैयारियाँ चल रही हैं।",
        launchingTitle: "वेडिंग पोर्टल जल्द लॉन्च हो रहा है",
        stayTunedBadge: "जुड़े रहें",
        launchingDesc: "समारोह की रूपरेखा, शुभ मुहूर्त, स्थल मार्गदर्शन और लाइव अपडेट्स के साथ भव्य डिजिटल विवाह अनुभव जल्द ही प्रस्तुत किया जाएगा।",
      },
      timelineTitle: "उत्सव की चमक के लिए क्लिक करें!",
      engagementCard: {
        foreverBadge: "जहाँ से अनंत सफर शुरू हुआ",
        reliveBadge: "यादें ताज़ा करें",
        title: "सगाई समारोह",
        tagline: "भव्य रिंग सेरेमनी, राजमहल के द्वार और पवित्र वचन",
        dateLabel: "दिनांक:",
        dateValue: "१८ अगस्त २०२६ (श्रावण शुक्ल-६)",
        muhuratLabel: "मुहूर्त:",
        venueLabel: "स्थान:",
        venueValue: "परिश्रम द लॉन्स, गोंडल",
        countdownOngoing: "शुभ सगाई समारोह अभी चल रहा है",
        countdownPast: "शुभ समारोह की मधुर यादों को बीता समय",
        countdownUpcoming: "शुभ रिंग सेरेमनी की उल्टी गिनती",
        months: "महीने",
        days: "दिन",
        hours: "घंटे",
        mins: "मिनट",
        secs: "सेकंड",
        exploreHighlights: "✦ पोर्टल की मुख्य विशेषताएँ देखें:",
        features: {
          gate: {
            title: "राजमहल द्वार प्रवेश",
            subtitle: "सिनेमैटिक 3D ओपनिंग",
            desc: "शहनाई और नगाड़ों की मधुर ध्वनि के साथ मेहमानों का शाही उत्सव में स्वागत करता हुआ भव्य राजमहल द्वार।",
            badge: "सिनेमैटिक 3D",
          },
          blessings: {
            title: "डिजिटल आशीर्वाद पुस्तिका",
            subtitle: "हृदयस्पर्शी शुभकामनाएँ",
            desc: "त्वरित लाइव प्रीव्यू और यादगार संदेशों के साथ अपनी प्रार्थनाएँ, बधाई और पारिवारिक आशीर्वाद भेजें।",
            badge: "लाइव शुभकामनाएँ",
          },
          nimantrak: {
            title: "पारंपरिक निमंत्रक पत्रिका",
            subtitle: "पवित्र शाही आमंत्रण",
            desc: "परिवार की वंशावली, शुभ मुहूर्त और पवित्र वैदिक श्लोकों को प्रस्तुत करती हुई भव्य डिजिटल कंकौत्री / पत्रिका।",
            badge: "पवित्र पत्रिका",
          },
          trilingual: {
            title: "त्रिभाषी अनुभव",
            subtitle: "गुजराती • हिन्दी • अंग्रेज़ी",
            desc: "गुजराती, हिन्दी और अंग्रेज़ी के बीच सहज लाइव स्विच ताकि परिवार का हर सदस्य जुड़ा हुआ महसूस करे।",
            badge: "बहुभाषी",
          },
        },
        enterPortalBtn: "सगाई पोर्टल में प्रवेश करें और यादें ताज़ा करें",
        showerBlessingsBtn: "आशीर्वाद बरसाएं",
        showerBlessingsTitle: "उत्सव की चमक के साथ बधाई दें",
      },
      dotr: {
        craftedBadge: "प्रेम और नवाचार के साथ निर्मित",
        companyName: "DHINOJA OmniTech Resolutions",
        tagline: "उच्च-प्रदर्शन डिजिटल अनुभवों और रॉयल वेडिंग सुइट्स के निर्माता",
        pillar1Title: "कस्टम वेब प्लेटफ़ॉर्म",
        pillar1Desc: "Next.js, React और आधुनिक वेब इंजीनियरिंग",
        pillar2Title: "लक्ज़री मोशन और 3D",
        pillar2Desc: "60fps एनीमेशन, वेब ऑडियो और इंटरैक्टिव UI",
        pillar3Title: "एंटरप्राइज़ सॉल्यूशंस",
        pillar3Desc: "क्लाउड आर्किटेक्चर और स्केलेबल डिजिटल सिस्टम",
        visitWebsite: "dotr.in पर जाएं",
        copyInfo: "जानकारी कॉपी करें",
        copied: "कॉपी हो गया!",
        copyTitle: "संपर्क के सभी विवरण कॉपी करें",
        designedWithLove: "सृष्टि और अमन के लिए ♥ से डिज़ाइन और विकसित",
        copyright: "© २०२६ DHINOJA OmniTech Resolutions (DOTR) • सर्वाधिकार सुरक्षित",
      },
    },
  },
};
