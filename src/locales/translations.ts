export type Language = 'en' | 'te';

export interface TranslationDictionary {
  navbar: {
    brandTitle: string;
    brandSubtitle: string;
    callNow: string;
    enquireNow: string;
  };
  hero: {
    badge: string;
    titleStart: string;
    titleHighlight: string;
    subtitle: string;
    pillOpenPlots: string;
    pillResidentialPlots: string;
    pillIndependentHouses: string;
    btnViewProperties: string;
    btnWhatsApp: string;
    trustGuidance: string;
    trustNoMediator: string;
    consultantTag: string;
  };
  propertyTypes: {
    badge: string;
    heading: string;
    subheading: string;
    openPlots: {
      title: string;
      tagline: string;
      description: string;
      highlights: string[];
      badge: string;
    };
    residentialPlots: {
      title: string;
      tagline: string;
      description: string;
      highlights: string[];
      badge: string;
    };
    independentHouses: {
      title: string;
      tagline: string;
      description: string;
      highlights: string[];
      badge: string;
    };
    btnEnquire: string;
    btnWhatsApp: string;
    highlightsLabel: string;
  };
  whyUs: {
    badge: string;
    heading: string;
    subheading: string;
    items: {
      title: string;
      description: string;
    }[];
  };
  aboutOwner: {
    badge: string;
    title: string;
    role: string;
    bio: string;
    focusAreasLabel: string;
    coreOfferingsLabel: string;
    coreOfferingsValue: string;
    btnCall: string;
    btnWhatsApp: string;
  };
  form: {
    badge: string;
    heading: string;
    subheading: string;
    perk1: string;
    perk2: string;
    perk3: string;
    labelName: string;
    placeholderName: string;
    labelPhone: string;
    placeholderPhone: string;
    labelProperty: string;
    labelCallTime: string;
    labelAddress: string;
    placeholderAddress: string;
    optional: string;
    required: string;
    btnSubmit: string;
    btnSubmitting: string;
    privacyNote: string;
    successTitle: string;
    errorTitle: string;
    validationName: string;
    validationPhone: string;
    propertyOptions: {
      openPlot: string;
      residentialPlot: string;
      house: string;
      notSure: string;
    };
  };
  contact: {
    badge: string;
    heading: string;
    subheading: string;
    phoneCard: {
      title: string;
      text: string;
      btn: string;
    };
    whatsappCard: {
      badge: string;
      title: string;
      text: string;
      btn: string;
    };
    addressCard: {
      title: string;
      hours: string;
      btn: string;
    };
    serviceAreasHeading: string;
  };
  footer: {
    description: string;
    consultantPrefix: string;
    headingProperties: string;
    headingQuickLinks: string;
    headingContact: string;
    copyright: string;
    backToTop: string;
    navHome: string;
    navProperties: string;
    navWhyUs: string;
    navAbout: string;
    navEnquire: string;
    navContact: string;
  };
  mobileBar: {
    call: string;
    whatsapp: string;
  };
}

export const TRANSLATIONS: Record<Language, TranslationDictionary> = {
  en: {
    navbar: {
      brandTitle: 'B. Satyanarayana',
      brandSubtitle: 'Real Estate Consultant',
      callNow: 'Call',
      enquireNow: 'Enquire Now',
    },
    hero: {
      badge: 'Direct & Trusted Local Property Consultant',
      titleStart: 'Find the Right Property for ',
      titleHighlight: 'Your Future',
      subtitle: 'Open plots, residential plots, and independent houses available across Visakhapatnam, Madhurawada, Bhogapuram Highway, Anandapuram & surrounding regions. Direct assistance, transparent dealings, and personalized site visits.',
      pillOpenPlots: 'Open Plots',
      pillResidentialPlots: 'Residential Plots',
      pillIndependentHouses: 'Independent Houses',
      btnViewProperties: 'View Properties',
      btnWhatsApp: 'WhatsApp Us',
      trustGuidance: 'Direct Property Guidance in Visakhapatnam',
      trustNoMediator: 'No Mediators • Direct Communication',
      consultantTag: 'Real Estate Consultant & Property Advisor',
    },
    propertyTypes: {
      badge: 'Property Categories',
      heading: 'What We Specialize In',
      subheading: 'Whether you are looking to invest in high-potential land or build your dream home, explore our property categories below and enquire directly.',
      openPlots: {
        title: 'Open Plots',
        tagline: 'High Growth Investment',
        description: 'Explore verified open plots suitable for long-term investment, future appreciation, and commercial or residential development.',
        highlights: [
          'Strategic growth corridors & road access',
          'Clear title & transparent documentation',
          'High capital appreciation potential',
          'Personal guidance & guided site inspections'
        ],
        badge: 'Investment Ready',
      },
      residentialPlots: {
        title: 'Residential Plots',
        tagline: 'Build Your Dream Home',
        description: 'Find well-planned residential plots in peaceful, developing neighbourhoods ready for immediate or planned home construction.',
        highlights: [
          'Gated layout & residential community zones',
          'Essential utilities & road connectivity',
          'Direct consultation on layout feasibility',
          'Assistance in site verification & dimensions'
        ],
        badge: 'Popular Choice',
      },
      independentHouses: {
        title: 'Independent Houses',
        tagline: 'Private & Spacious Living',
        description: 'Explore standalone individual houses offering privacy, custom living spaces, private compound areas, and excellent connectivity.',
        highlights: [
          'Independent standalone residential properties',
          'Private parking & spacious floor plans',
          'Peaceful residential localities',
          'End-to-end direct seller coordination'
        ],
        badge: 'Ready Living',
      },
      btnEnquire: 'Enquire Now',
      btnWhatsApp: 'Ask on WhatsApp',
      highlightsLabel: 'Key Highlights:',
    },
    whyUs: {
      badge: 'Trust & Reliability',
      heading: 'Why Consult With Us',
      subheading: 'Real estate decisions are significant milestones. Here is why buyers and investors choose to work with Bheemarasetty Satyanarayana directly.',
      items: [
        {
          title: 'Local Knowledge',
          description: 'Deep understanding of local property trends, developing growth sectors, road connectivity, and upcoming residential zones in Visakhapatnam.',
        },
        {
          title: 'Genuine Properties',
          description: 'We help customers explore genuine property options directly, providing clear information on land dimensions and layout features.',
        },
        {
          title: 'Direct Assistance',
          description: 'Communicate directly with the consultant handling your property requirement without dealing with multiple middlemen.',
        },
        {
          title: 'Site Visit Support',
          description: 'Personalized coordination and accompanied site visits so you can inspect properties firsthand before making any decision.',
        },
      ],
    },
    aboutOwner: {
      badge: 'Direct Consultant Profile',
      title: 'Meet Bheemarasetty Satyanarayana',
      role: 'Real Estate Consultant & Property Advisor',
      bio: '"I help customers find suitable plots and independent houses based on their exact requirements, preferred locations, and budget. Whether you are looking for long-term land investments or a plot for your dream house, I ensure direct communication, clear guidance, and genuine assistance at every step."',
      focusAreasLabel: 'Focus Locations:',
      coreOfferingsLabel: 'Core Offerings:',
      coreOfferingsValue: 'Open Plots • Residential Plots • Independent Houses',
      btnCall: 'Call 8897582265',
      btnWhatsApp: 'WhatsApp Directly',
    },
    form: {
      badge: 'Direct Property Enquiry',
      heading: 'Get in Touch with Satyanarayana',
      subheading: 'Fill out this quick form with your property requirement. Satyanarayana will review your details and call you directly at your preferred time.',
      perk1: 'Direct 1-on-1 discussion with Satyanarayana',
      perk2: 'Call scheduled at your convenient time',
      perk3: 'Honest location advice & site visit coordination',
      labelName: 'Your Full Name',
      placeholderName: 'e.g. Ramesh Kumar',
      labelPhone: 'Mobile Number',
      placeholderPhone: '10-digit mobile number (e.g. 8897582265)',
      labelProperty: 'Interested Property Type',
      labelCallTime: 'Preferred Time to Call',
      labelAddress: 'Your Location / Preferred Area',
      placeholderAddress: 'e.g. Thatichetlapalem / Madhurawada',
      optional: '(Optional)',
      required: '*',
      btnSubmit: 'Submit Enquiry',
      btnSubmitting: 'Submitting Enquiry...',
      privacyNote: '🔒 Your contact details are kept strictly private and used only for direct property consultation.',
      successTitle: 'Enquiry Received!',
      errorTitle: 'Submission Issue',
      validationName: 'Please enter your full name',
      validationPhone: 'Please enter a valid 10-digit Indian phone number',
      propertyOptions: {
        openPlot: 'Open Plot',
        residentialPlot: 'Residential Plot',
        house: 'Independent House',
        notSure: 'Not Sure',
      },
    },
    contact: {
      badge: 'Direct Communication',
      heading: 'Contact Us Directly',
      subheading: 'Have questions about a plot or want to schedule a site inspection? Reach out to Bheemarasetty Satyanarayana directly.',
      phoneCard: {
        title: 'Direct Phone Call',
        text: 'Speak directly with Satyanarayana regarding property inquiries, site visits, or consultation.',
        btn: 'Call Now',
      },
      whatsappCard: {
        badge: 'Instant Response',
        title: 'WhatsApp Chat',
        text: 'Send a quick message on WhatsApp to receive available plot locations, brochures, and layout plans.',
        btn: 'Message on WhatsApp',
      },
      addressCard: {
        title: 'Office Location',
        hours: 'Mon - Sun: 8:00 AM - 8:30 PM',
        btn: 'Get Directions',
      },
      serviceAreasHeading: 'Key Areas Covered & Site Visit Locations:',
    },
    footer: {
      description: 'Dedicated property guidance for open plots, residential layouts, and independent homes in Visakhapatnam. Direct communication and transparent site visits.',
      consultantPrefix: 'Direct Consultant:',
      headingProperties: 'Property Types',
      headingQuickLinks: 'Quick Navigation',
      headingContact: 'Get In Touch',
      copyright: 'All rights reserved.',
      backToTop: 'Back to top',
      navHome: 'Home',
      navProperties: 'Property Categories',
      navWhyUs: 'Why Choose Us',
      navAbout: 'About Satyanarayana',
      navEnquire: 'Enquiry Form',
      navContact: 'Contact & Location',
    },
    mobileBar: {
      call: 'Call Now',
      whatsapp: 'WhatsApp',
    },
  },

  te: {
    navbar: {
      brandTitle: 'బి. సత్యనారాయణ',
      brandSubtitle: 'రియల్ ఎస్టేట్ కన్సల్టెంట్',
      callNow: 'కాల్ చేయండి',
      enquireNow: 'వివరాలు అడగండి',
    },
    hero: {
      badge: 'ప్రత్యక్ష & నమ్మకమైన స్థానిక రియల్ ఎస్టేట్ సలహాదారు',
      titleStart: 'మీ భవిష్యత్తు కోసం సరైన ',
      titleHighlight: 'ప్రాపర్టీని ఎంచుకోండి',
      subtitle: 'విశాఖపట్నం, మధురవాడ, భోగాపురం హైవే, ఆనందపురం మరియు పరిసర ప్రాంతాలలో ఓపెన్ ప్లాట్లు, రెసిడెన్షియల్ ప్లాట్లు మరియు ఇండిపెండెంట్ ఇళ్ళు లభించును. ప్రత్యక్ష సంప్రదింపులు, స్పష్టమైన సమాచారం మరియు సైట్ విజిట్ సదుపాయం.',
      pillOpenPlots: 'ఓపెన్ ప్లాట్లు',
      pillResidentialPlots: 'రెసిడెన్షియల్ ప్లాట్లు',
      pillIndependentHouses: 'ఇండిపెండెంట్ ఇళ్ళు',
      btnViewProperties: 'ప్రాపర్టీల వివరాలు',
      btnWhatsApp: 'వాట్సాప్‌లో మాట్లాడండి',
      trustGuidance: 'విశాఖపట్నంలో ప్రత్యక్ష ప్రాపర్టీ గైడెన్స్',
      trustNoMediator: 'ఎలాంటి మధ్యవర్తులు లేకుండా • నేరుగా మాట్లాడండి',
      consultantTag: 'రియల్ ఎస్టేట్ సలహాదారు & ప్రాపర్టీ అడ్వైజర్',
    },
    propertyTypes: {
      badge: 'ప్రాపర్టీ రకాలు',
      heading: 'మేము అందించే ప్రాపర్టీలు',
      subheading: 'పెట్టుబడి కోసం భూమి కావాలన్నా లేదా మీ సొంతింటి కల నెరవేర్చుకోవాలన్నా, మా వద్ద ఉన్న ప్రాపర్టీ రకాలను చూసి నేరుగా సంప్రదించండి.',
      openPlots: {
        title: 'ఓపెన్ ప్లాట్లు (Open Plots)',
        tagline: 'అద్భుతమైన పెట్టుబడి అవకాశం',
        description: 'భవిష్యత్తులో మంచి విలువ పెరిగే అభివృద్ధి చెందుతున్న ప్రాంతాలలో పెట్టుబడికి అనువైన ఓపెన్ ప్లాట్లు.',
        highlights: [
          'రోడ్డు కనెక్టివిటీ & వేగంగా అభివృద్ధి చెందుతున్న ప్రాంతాలు',
          'స్పష్టమైన టైటిల్ & సరైన డాక్యుమెంటేషన్',
          'భవిష్యత్తులో అధిక లాభాలు పొందే అవకాశం',
          'నేరుగా సైట్ చూపించే (Site Visit) సదుపాయం'
        ],
        badge: 'పెట్టుబడికి అనుకూలం',
      },
      residentialPlots: {
        title: 'రెసిడెన్షియల్ ప్లాట్లు (Residential Plots)',
        tagline: 'మీ సొంతింటి నిర్మాణానికి అనువైనవి',
        description: 'తక్షణమే లేదా సమీప భవిష్యత్తులో ఇల్లు కట్టుకోవడానికి అనువైన గేటెడ్ లేఅవుట్‌లలో నివాస ప్లాట్లు.',
        highlights: [
          'ప్రశాంతమైన నివాస ప్రాంతాలు & లేఅవుట్లు',
          'నీరు, విద్యుత్ మరియు రోడ్డు సదుపాయాలు',
          'లేఅవుట్ అనుమతులపై స్పష్టమైన వివరాలు',
          'ప్లాట్ కొలతలు సరిచూసుకోవడంలో పూర్తి సహాయం'
        ],
        badge: 'నివాసానికి శ్రేష్టం',
      },
      independentHouses: {
        title: 'ఇండిపెండెంట్ ఇళ్ళు (Independent Houses)',
        tagline: 'సొంత స్థలంలో ప్రశాంత జీవనం',
        description: 'సొంత పార్కింగ్, ప్రశాంతమైన వాతావరణం మరియు విశాలమైన స్థలంతో కూడిన వ్యక్తిగత నివాస గృహాలు.',
        highlights: [
          'వ్యక్తిగత సొంత ఇళ్ళు (Standalone Houses)',
          'సొంత పార్కింగ్ & విశాలమైన రూములు',
          'మంచి నివాస ప్రాంతాలలో లభ్యత',
          'నేరుగా సంప్రదింపులు & సులభమైన రిజిస్ట్రేషన్'
        ],
        badge: 'సిద్ధంగా ఉన్న ఇళ్ళు',
      },
      btnEnquire: 'వివరాలు అడగండి',
      btnWhatsApp: 'వాట్సాప్‌లో అడగండి',
      highlightsLabel: 'ముఖ్య ముఖ్యాంశాలు:',
    },
    whyUs: {
      badge: 'నమ్మకం & అనుభవం',
      heading: 'మమ్మల్ని ఎందుకు సంప్రదించాలి?',
      subheading: 'రియల్ ఎస్టేట్ నిర్ణయాలు జీవితంలో ఎంతో ముఖ్యం. భీమరశెట్టి సత్యనారాయణ గారిని నేరుగా సంప్రదించడానికి ప్రధాన కారణాలు:',
      items: [
        {
          title: 'స్థానిక సమగ్ర అవగాహన',
          description: 'విశాఖపట్నం మరియు పరిసర ప్రాంతాలలో ప్రాపర్టీ విలువలు, భవిష్యత్ అభివృద్ధిపై సమగ్ర అవగాహన.',
        },
        {
          title: 'నిజమైన ప్రాపర్టీలు',
          description: 'ఎలాంటి తప్పుడు వాగ్దానాలు లేకుండా, సరైన కొలతలు మరియు వాస్తవ సమాచారంతో కూడిన స్థలాలు.',
        },
        {
          title: 'ప్రత్యక్ష సంప్రదింపులు',
          description: 'కాల్ సెంటర్లు లేదా మధ్యవర్తులు లేకుండా నేరుగా సత్యనారాయణ గారితోనే మాట్లాడే అవకాశం.',
        },
        {
          title: 'సైట్ విజిట్ సదుపాయం',
          description: 'ప్లాట్ లేదా ఇంటిని స్వయంగా చూసి నిర్ణయం తీసుకోవడానికి స్వయంగా తీసుకెళ్లి చూపించే సహాయం.',
        },
      ],
    },
    aboutOwner: {
      badge: 'కన్సల్టెంట్ పరిచయం',
      title: 'భీమరశెట్టి సత్యనారాయణ గారి గురించి',
      role: 'రియల్ ఎస్టేట్ కన్సల్టెంట్ & ప్రాపర్టీ అడ్వైజర్',
      bio: '"కస్టమర్ల బడ్జెట్ మరియు అవసరాలకు తగినట్లుగా సరైన ఓపెన్ ప్లాట్లు, నివాస స్థలాలు మరియు ఇండిపెండెంట్ ఇళ్ళను ఎంచుకోవడంలో నేను స్వయంగా మార్గదర్శకత్వం చేస్తాను. నిజాయితీ, స్పష్టమైన సమాచారం మరియు నమ్మకమే నా ప్రాధాన్యత."',
      focusAreasLabel: 'సేవలు అందించే ప్రాంతాలు:',
      coreOfferingsLabel: 'ప్రధాన ప్రాపర్టీలు:',
      coreOfferingsValue: 'ఓపెన్ ప్లాట్లు • రెసిడెన్షియల్ ప్లాట్లు • ఇండిపెండెంట్ ఇళ్ళు',
      btnCall: 'కాల్ చేయండి: 8897582265',
      btnWhatsApp: 'వాట్సాప్‌లో సంప్రదించండి',
    },
    form: {
      badge: 'డైరెక్ట్ ఎంక్వైరీ ఫారం',
      heading: 'సత్యనారాయణ గారితో నేరుగా మాట్లాడండి',
      subheading: 'మీ ప్రాపర్టీ అవసరాన్ని క్రింది ఫారంలో నమోదు చేయండి. సత్యనారాయణ గారు మీకు అనుకూలమైన సమయంలో నేరుగా కాల్ చేస్తారు.',
      perk1: 'సత్యనారాయణ గారితో ప్రత్యక్ష ఫోన్ సంభాషణ',
      perk2: 'మీకు అనుకూలమైన సమయంలో కాల్ షెడ్యూల్',
      perk3: 'స్పష్టమైన ప్రాంతాల వివరాలు & సైట్ విజిట్',
      labelName: 'మీ పూర్తి పేరు',
      placeholderName: 'ఉదా: రమేష్ కుమార్',
      labelPhone: 'మొబైల్ నంబర్',
      placeholderPhone: '10 అంకెల మొబైల్ నంబర్ (ఉదా: 8897582265)',
      labelProperty: 'మీకు కావలసిన ప్రాపర్టీ రకం',
      labelCallTime: 'మాట్లాడటానికి అనువైన సమయం',
      labelAddress: 'మీ నివాస ప్రాంతం / ప్రాధాన్యత ప్రాంతం',
      placeholderAddress: 'ఉదా: తాటిచెట్లపాలెం / మధురవాడ',
      optional: '(ఐచ్ఛికం)',
      required: '*',
      btnSubmit: 'వివరాలు పంపండి',
      btnSubmitting: 'పంపుతున్నాము...',
      privacyNote: '🔒 మీ సంప్రదింపు వివరాలు పూర్తిగా గోప్యంగా ఉంచబడతాయి.',
      successTitle: 'వివరాలు అందాయి!',
      errorTitle: 'సమస్య ఎదురైంది',
      validationName: 'దయచేసి మీ పూర్తి పేరు నమోదు చేయండి',
      validationPhone: 'దయచేసి సరైన 10 అంకెల మొబైల్ నంబర్ నమోదు చేయండి',
      propertyOptions: {
        openPlot: 'ఓపెన్ ప్లాట్ (Open Plot)',
        residentialPlot: 'రెసిడెన్షియల్ ప్లాట్ (Residential Plot)',
        house: 'ఇండిపెండెంట్ ఇల్లు (Independent House)',
        notSure: 'నిర్ణయించుకోలేదు (Not Sure)',
      },
    },
    contact: {
      badge: 'ప్రత్యక్ష సంప్రదింపులు',
      heading: 'మమ్మల్ని సంప్రదించండి',
      subheading: 'ఏదైనా ప్రాపర్టీ గురించి సమాచారం కావాలన్నా లేదా సైట్ విజిట్ బుక్ చేయాలన్నా భీమరశెట్టి సత్యనారాయణ గారికి కాల్ లేదా వాట్సాప్ చేయండి.',
      phoneCard: {
        title: 'ప్రత్యక్ష ఫోన్ కాల్',
        text: 'ప్రాపర్టీ వివరాలు మరియు సైట్ సందర్శన కోసం నేరుగా మాట్లాడండి.',
        btn: 'ఇప్పుడే కాల్ చేయండి',
      },
      whatsappCard: {
        badge: 'తక్షణ స్పందన',
        title: 'వాట్సాప్ సందేశం',
        text: 'లభ్యమయ్యే ప్లాట్ల వివరాలు, లేఅవుట్ మ్యాప్‌లు వాట్సాప్‌లో పొందండి.',
        btn: 'వాట్సాప్‌లో మెసేజ్ చేయండి',
      },
      addressCard: {
        title: 'చిరునామా / లొకేషన్',
        hours: 'సోమ - ఆది: ఉదయం 8:00 నుండి రాత్రి 8:30 వరకు',
        btn: 'గూగుల్ మ్యాప్ డైరెక్షన్లు',
      },
      serviceAreasHeading: 'సేవలు అందించే ప్రధాన ప్రాంతాలు:',
    },
    footer: {
      description: 'విశాఖపట్నం మరియు పరిసర ప్రాంతాలలో ఓపెన్ ప్లాట్లు, రెసిడెన్షియల్ లేఅవుట్లు మరియు ఇళ్ళ కొనుగోలుకు నమ్మకమైన కన్సల్టెంట్.',
      consultantPrefix: 'ప్రత్యక్ష కన్సల్టెంట్:',
      headingProperties: 'ప్రాపర్టీ రకాలు',
      headingQuickLinks: 'లింకులు',
      headingContact: 'సంప్రదించండి',
      copyright: 'సర్వహక్కులు ప్రత్యేకించబడ్డాయి.',
      backToTop: 'పైకి వెళ్ళండి',
      navHome: 'హోమ్',
      navProperties: 'ప్రాపర్టీలు',
      navWhyUs: 'ఎందుకు మేము?',
      navAbout: 'సత్యనారాయణ గారి గురించి',
      navEnquire: 'ఎంక్వైరీ ఫారం',
      navContact: 'సంప్రదించండి',
    },
    mobileBar: {
      call: 'కాల్ చేయండి',
      whatsapp: 'వాట్సాప్',
    },
  },
};
