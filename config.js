// config.js
// Paste your Beacons links + Google Form LINKS here (NO iframe embeds).
// If a button shows “Link not set yet”, it means the link still contains PASTE_ or is blank.

window.CHB_CONFIG = {
  affiliate: {
    pin: "1234",          // change this
    commissionRate: 0.15  // estimates only
  },

  // PUBLIC PAGES (customers can see these)
  publicPages: {
    becomeAffiliate: "https://forms.gle/kEnkb17hcweuXHDU9",
    support: "https://forms.gle/viMohYwTT213oRXA9",
    shippingReturns: "https://beacons.ai/PASTE_SHIPPING_RETURNS",
    faqs: "https://beacons.ai/PASTE_FAQS",
    contact: "https://forms.gle/PASTE_CONTACT_FORM"
  },

  // MENU LINKS
  menuLinks: {
    shop: {
      apparel: "https://beacons.ai/PASTE_APPAREL_PAGE",
      walkEssentials: "https://beacons.ai/PASTE_WALK_PAGE",
      accessories: "https://beacons.ai/PASTE_ACCESSORIES_PAGE",
      bundles: "https://beacons.ai/PASTE_BUNDLES_PAGE",
      petParentMerch: "https://beacons.ai/PASTE_PET_PARENT_MERCH_PAGE"
    },
    about: {
      ourStory: "https://beacons.ai/PASTE_OUR_STORY",
      community: "https://instagram.com/PASTE_INSTAGRAM"
    },
    workWithUs: {
      // This is your PUBLIC "Share & Earn" page or Google Form link
      shareEarn: "https://docs.google.com/document/d/1W9T4ZZzuZ-Xj9RYquc69b4G3oYGSmsGrdv78cEFKa18/edit?usp=sharing"
    }
  },

  // AFFILIATE BACK OFFICE (hidden unless unlocked)
  affiliateBackOffice: {
    startHere: "https://beacons.ai/PASTE_START_HERE",
    training: "https://beacons.ai/PASTE_TRAINING",
    fourCorners: "https://beacons.ai/PASTE_FOUR_CORNERS",
    teamBuilder: "https://forms.gle/PASTE_TEAM_BUILDER",
    payouts: "https://forms.gle/PASTE_PAYOUTS",
    stats: "https://docs.google.com/spreadsheets/d/PASTE_STATS_SHEET"
  }
};
