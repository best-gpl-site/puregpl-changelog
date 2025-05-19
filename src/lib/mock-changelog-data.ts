import type { ChangelogEntry } from "@/types";

export interface RawMockChangelogItem {
  id: number;
  title: string;
  productVersion: string;
  isNew: number; // 0 or 1
}

export interface RawMockDateGroup {
  name: string; // Date string e.g., "May 17th, 2025"
  rows: RawMockChangelogItem[];
}

export interface RawMockApiResponse {
  message: string;
  error: boolean;
  data: RawMockDateGroup[];
}

export const mockApiResponse: RawMockApiResponse = {
    "message": "Success",
    "error": false,
    "data": [
        {
            "name": "May 17th, 2025",
            "rows": [
                {
                    "id": 30346,
                    "title": "Ativo – Pilates Yoga WordPress Theme",
                    "productVersion": "18",
                    "isNew": 0
                },
                {
                    "id": 30347,
                    "title": "Organics – Agriculture & Food Farm WordPress Theme",
                    "productVersion": "1.0.1",
                    "isNew": 1
                },
                {
                    "id": 30348,
                    "title": "Attorney Press – Lawyer WordPress Theme",
                    "productVersion": "2.2.1",
                    "isNew": 0
                },
                {
                    "id": 30349,
                    "title": "Logitic – Transportation & Logistics WordPress Theme",
                    "productVersion": "1.1.0",
                    "isNew": 0
                },
                {
                    "id": 30350,
                    "title": "Fiore – Flower Shop & Florist Elementor Pro WordPress Theme",
                    "productVersion": "12",
                    "isNew": 0
                },
                {
                    "id": 30351,
                    "title": "DYAT – eSports and Gaming NFT WordPress Theme",
                    "productVersion": "1.0.2",
                    "isNew": 0
                },
                {
                    "id": 30352,
                    "title": "Themeforest | X | The Theme",
                    "productVersion": "10.6.6",
                    "isNew": 0
                },
                {
                    "id": 30353,
                    "title": "JupiterX – Website Builder For WordPress & WooCommerce",
                    "productVersion": "4.9.1",
                    "isNew": 0
                },
                {
                    "id": 30354,
                    "title": "Ekko – Multi-Purpose WordPress Theme with Page Builder",
                    "productVersion": "5.0",
                    "isNew": 0
                },
                {
                    "id": 30355,
                    "title": "Avas – Elementor WordPress Theme",
                    "productVersion": "6.8.1",
                    "isNew": 0
                },
                {
                    "id": 30356,
                    "title": "XStore – Multipurpose WooCommerce Theme",
                    "productVersion": "9.4.13",
                    "isNew": 0
                },
                {
                    "id": 30357,
                    "title": "Styler – Elementor Fashion Store eCommerce Theme",
                    "productVersion": "1.5.1",
                    "isNew": 0
                },
                {
                    "id": 30358,
                    "title": "Cena Store – Multipurpose WooCommerce WordPress Theme",
                    "productVersion": "2.11.27",
                    "isNew": 0
                },
                {
                    "id": 30359,
                    "title": "Canabiz – Weed Medical Marijuana, Cannabis Shop Theme",
                    "productVersion": "1.0.8",
                    "isNew": 0
                },
                {
                    "id": 30360,
                    "title": "CityScape – Real Estate WordPress Theme",
                    "productVersion": "1.0.2",
                    "isNew": 0
                },
                {
                    "id": 30361,
                    "title": "Charity Hub – Charity / Nonprofit / Fundraising WP",
                    "productVersion": "1.5.1",
                    "isNew": 0
                },
                {
                    "id": 30362,
                    "title": "Skole – Children Kindergarten WordPress Theme",
                    "productVersion": "21",
                    "isNew": 0
                },
                {
                    "id": 30363,
                    "title": "Themeforest | LMS WordPress Theme",
                    "productVersion": "9.1",
                    "isNew": 0
                },
                {
                    "id": 30364,
                    "title": "Edubin – Education WordPress Theme",
                    "productVersion": "9.4.7",
                    "isNew": 0
                },
                {
                    "id": 30365,
                    "title": "Workreap – Freelance Marketplace and Directory WordPress Theme",
                    "productVersion": "3.3.1",
                    "isNew": 0
                },
                {
                    "id": 30366,
                    "title": "PointFinder | Directory & Listing WordPress Theme",
                    "productVersion": "2.3.1",
                    "isNew": 0
                },
                {
                    "id": 30367,
                    "title": "Fixturbo – Car Service & Auto Repair Elementor WordPress Theme MultiPurpose",
                    "productVersion": "1.0.3",
                    "isNew": 0
                },
                {
                    "id": 30368,
                    "title": "Eskimo – Minimal Personal WordPress Blog & Shop Theme",
                    "productVersion": "1.8.5",
                    "isNew": 1
                },
                {
                    "id": 30369,
                    "title": "Themeforest | Wilmër – Construction Theme",
                    "productVersion": "3.4.3",
                    "isNew": 0
                },
                {
                    "id": 30370,
                    "title": "Sierra – SaaS & Tech Startup Elementor WordPress Theme",
                    "productVersion": "1.7",
                    "isNew": 0
                },
                {
                    "id": 30371,
                    "title": "Themeforest | Ippsum – Business Consulting",
                    "productVersion": "1.2.0",
                    "isNew": 0
                },
                {
                    "id": 30372,
                    "title": "XTRA WordPress Theme – The Most Powerful Website Builder",
                    "productVersion": "4.9.16",
                    "isNew": 0
                },
                {
                    "id": 30373,
                    "title": "Thrive themes | Theme Builder + Templates",
                    "productVersion": "10.6.2",
                    "isNew": 0
                },
                {
                    "id": 30374,
                    "title": "Coiffure – Hair Salon & Barber WordPress Theme",
                    "productVersion": "9",
                    "isNew": 0
                },
                {
                    "id": 30375,
                    "title": "Caverta – Restaurant WordPress Theme",
                    "productVersion": "2.1.2",
                    "isNew": 1
                },
                {
                    "id": 30376,
                    "title": "Boucherie – Steakhouse Restaurant and Café WordPress Theme",
                    "productVersion": "9",
                    "isNew": 0
                },
                {
                    "id": 30377,
                    "title": "EGovt – City Government WordPress Theme",
                    "productVersion": "1.5.7",
                    "isNew": 0
                },
                {
                    "id": 30378,
                    "title": "Avvocato – Lawyer & Attorney WordPress Theme",
                    "productVersion": "11",
                    "isNew": 0
                },
                {
                    "id": 30379,
                    "title": "Beratung – Consulting & Finance WordPress Theme",
                    "productVersion": "8",
                    "isNew": 0
                },
                {
                    "id": 30380,
                    "title": "Porto | Multipurpose & WooCommerce Theme",
                    "productVersion": "7.5.1",
                    "isNew": 0
                },
                {
                    "id": 30381,
                    "title": "iBid – Multi Vendor Auctions WooCommerce Theme",
                    "productVersion": "4.4.1",
                    "isNew": 0
                },
                {
                    "id": 30382,
                    "title": "Toro – Clean, minimal WooCommerce Theme",
                    "productVersion": "1.8.0",
                    "isNew": 0
                },
                {
                    "id": 30383,
                    "title": "Themeforest | Lagar – Winery Wine Shop",
                    "productVersion": "19",
                    "isNew": 0
                },
                {
                    "id": 30384,
                    "title": "Handy – Handmade Items Marketplace Theme",
                    "productVersion": "5.2.1",
                    "isNew": 1
                },
                {
                    "id": 30385,
                    "title": "Bacola – Grocery Store and Food eCommerce Theme",
                    "productVersion": "1.5.1.5",
                    "isNew": 0
                },
                {
                    "id": 30386,
                    "title": "Yacht Rental – Boat Services WordPress Theme",
                    "productVersion": "2.1.0",
                    "isNew": 0
                },
                {
                    "id": 30387,
                    "title": "Salute – Health Medical WordPress",
                    "productVersion": "50",
                    "isNew": 0
                },
                {
                    "id": 30388,
                    "title": "Estudiar – College University WordPress Theme",
                    "productVersion": "17",
                    "isNew": 0
                },
                {
                    "id": 30389,
                    "title": "Classiera – Classified Ads WordPress Theme",
                    "productVersion": "4.0.34",
                    "isNew": 0
                },
                {
                    "id": 30390,
                    "title": "Motors – Car Dealer, Rental & Listing WordPress theme",
                    "productVersion": "5.6.68",
                    "isNew": 0
                },
                {
                    "id": 30391,
                    "title": "Macchina – Auto Repair WordPress",
                    "productVersion": "17",
                    "isNew": 0
                },
                {
                    "id": 30392,
                    "title": "PRESSO – Modern Magazine / Newspaper / Viral Theme",
                    "productVersion": "4.0.9",
                    "isNew": 0
                },
                {
                    "id": 30393,
                    "title": "Onfleek – AMP Ready and Responsive Magazine Theme",
                    "productVersion": "3.7",
                    "isNew": 1
                },
                {
                    "id": 30394,
                    "title": "Foxiz – WordPress Newspaper News and Magazine",
                    "productVersion": "2.6.2",
                    "isNew": 0
                },
                {
                    "id": 30395,
                    "title": "Konstruktion – Construction and Architecture",
                    "productVersion": "10",
                    "isNew": 0
                },
                {
                    "id": 30396,
                    "title": "Tecnologia – IT Services & App Development WordPress Theme",
                    "productVersion": "11",
                    "isNew": 0
                },
                {
                    "id": 30397,
                    "title": "SOHO – Photography WordPress Theme",
                    "productVersion": "3.0.3",
                    "isNew": 1
                },
                {
                    "id": 30398,
                    "title": "PixelPierNYC – Creative Agency and Portolio WordPress Theme",
                    "productVersion": "7",
                    "isNew": 0
                },
                {
                    "id": 30399,
                    "title": "Pisces – Multi Concept Creative Theme",
                    "productVersion": "2.7.0",
                    "isNew": 1
                },
                {
                    "id": 30400,
                    "title": "Julia – Talent Management WordPress Theme",
                    "productVersion": "2.1.8",
                    "isNew": 1
                },
                {
                    "id": 30401,
                    "title": "Yoast SEO Premium",
                    "productVersion": "25.1 (pro) + 25.1 (free)",
                    "isNew": 0
                },
                {
                    "id": 30402,
                    "title": "Themify Builder Pro",
                    "productVersion": "3.7.4",
                    "isNew": 0
                },
                {
                    "id": 30403,
                    "title": "Wpmet | GutenKit Blocks Pro",
                    "productVersion": "2.3.0",
                    "isNew": 0
                },
                {
                    "id": 30404,
                    "title": "WPManageNinja | FluentCommunity Pro",
                    "productVersion": "1.6.0",
                    "isNew": 0
                },
                {
                    "id": 30405,
                    "title": "WPDeveloper | Better Payment Pro",
                    "productVersion": "1.2.0",
                    "isNew": 0
                },
                {
                    "id": 30406,
                    "title": "weDevs | WP User Frontend Pro",
                    "productVersion": "4.1.3",
                    "isNew": 0
                },
                {
                    "id": 30407,
                    "title": "Seraphinite Accelerator Extended",
                    "productVersion": "2.27.26",
                    "isNew": 0
                },
                {
                    "id": 30408,
                    "title": "QuadLayers | WooCommerce Direct Checkout PRO",
                    "productVersion": "3.3.0",
                    "isNew": 0
                },
                {
                    "id": 30409,
                    "title": "Pimwick | PW WooCommerce Gift Cards Pro",
                    "productVersion": "3.31",
                    "isNew": 0
                },
                {
                    "id": 30410,
                    "title": "Max Addons Pro for Bricks",
                    "productVersion": "1.14.3",
                    "isNew": 0
                },
                {
                    "id": 30411,
                    "title": "MailPoet 3 Premium",
                    "productVersion": "5.12 (pro) + 5.12.2 (free)",
                    "isNew": 0
                },
                {
                    "id": 30412,
                    "title": "External Importer Pro – Import Affiliate Products Into WooCommerce",
                    "productVersion": "2.14.1",
                    "isNew": 0
                },
                {
                    "id": 30413,
                    "title": "Droip | No-Code Website Builder for WordPress",
                    "productVersion": "2.1.3",
                    "isNew": 0
                },
                {
                    "id": 30414,
                    "title": "Divi Extended | Divi Plus",
                    "productVersion": "1.14.0",
                    "isNew": 0
                },
                {
                    "id": 30415,
                    "title": "Complianz Premium – Privacy Suite GDPR/CCPA",
                    "productVersion": "7.5.2",
                    "isNew": 0
                },
                {
                    "id": 30416,
                    "title": "Client Portal – Your Project Assets In One Place",
                    "productVersion": "5.4.1",
                    "isNew": 0
                },
                {
                    "id": 30417,
                    "title": "Brizy Pro",
                    "productVersion": "2.6.12",
                    "isNew": 0
                },
                {
                    "id": 30418,
                    "title": "ACPT – Custom Post Types Plugin for WordPress",
                    "productVersion": "2.0.28",
                    "isNew": 0
                },
                {
                    "id": 30419,
                    "title": "ACF Frontend Admin Premium",
                    "productVersion": "3.28.2",
                    "isNew": 0
                },
                {
                    "id": 30420,
                    "title": "Newsletter – The Newsletter Plugin For WordPress",
                    "productVersion": "8.8.5",
                    "isNew": 0
                },
                {
                    "id": 30421,
                    "title": "Modern Tribe Event Tickets Plus WordPress Plugin",
                    "productVersion": "6.4.0",
                    "isNew": 0
                },
                {
                    "id": 30422,
                    "title": "LearnPress – myCRED Integration",
                    "productVersion": "4.0.2",
                    "isNew": 0
                },
                {
                    "id": 30423,
                    "title": "GamiPress WooCommerce Discounts",
                    "productVersion": "1.1.8",
                    "isNew": 0
                },
                {
                    "id": 30424,
                    "title": "GamiPress Points Exchanges",
                    "productVersion": "1.1.4",
                    "isNew": 0
                },
                {
                    "id": 30425,
                    "title": "Everest Forms Pro",
                    "productVersion": "1.9.3",
                    "isNew": 0
                },
                {
                    "id": 30426,
                    "title": "Crocoblock | JetFormBuilder",
                    "productVersion": "3.5.0",
                    "isNew": 0
                },
                {
                    "id": 30427,
                    "title": "WooCommerce Multi Locations Inventory Management",
                    "productVersion": "4.2.2",
                    "isNew": 0
                },
                {
                    "id": 30428,
                    "title": "WPBookit Pro – Appointment Booking WordPress Plugin",
                    "productVersion": "1.6.15",
                    "isNew": 0
                },
                {
                    "id": 30429,
                    "title": "Subscribe to Download – Download after Email Subscription WordPress Plugin",
                    "productVersion": "2.0.9",
                    "isNew": 0
                },
                {
                    "id": 30430,
                    "title": "KiviCare Pro – Clinic & Patient Management System EHR Add-on",
                    "productVersion": "2.5.8",
                    "isNew": 0
                },
                {
                    "id": 30431,
                    "title": "Cornerstone | The WordPress Page Builder",
                    "productVersion": "7.6.6",
                    "isNew": 0
                },
                {
                    "id": 30432,
                    "title": "BWL Advanced FAQ Manager + Addons",
                    "productVersion": "2.2.2",
                    "isNew": 0
                },
                {
                    "id": 30433,
                    "title": "AIomatic – Automatic AI Content Writer & Editor, ChatBot & AI Toolkit",
                    "productVersion": "2.4.7",
                    "isNew": 0
                },
                {
                    "id": 30434,
                    "title": "Astra Premium Starter Templates",
                    "productVersion": "4.4.20",
                    "isNew": 0
                },
                {
                    "id": 30435,
                    "title": "BrainStorm Force | WP Schema Pro",
                    "productVersion": "2.9.0",
                    "isNew": 0
                },
                {
                    "id": 30436,
                    "title": "Barn2 | WooCommerce Wholesale Pro",
                    "productVersion": "2.3.3",
                    "isNew": 0
                },
                {
                    "id": 30437,
                    "title": "EU VAT for Easy Digital Downloads",
                    "productVersion": "1.6.1",
                    "isNew": 0
                },
                {
                    "id": 30438,
                    "title": "AutomatorWP Pro",
                    "productVersion": "4.5.4",
                    "isNew": 0
                },
                {
                    "id": 30439,
                    "title": "WooCommerce Custom Thank You Page",
                    "productVersion": "3.21.0",
                    "isNew": 0
                },
                {
                    "id": 30440,
                    "title": "wpDiscuz – Widgets",
                    "productVersion": "7.3.1",
                    "isNew": 0
                },
                {
                    "id": 30441,
                    "title": "wpDiscuz User & Comment Mentioning",
                    "productVersion": "7.2.1",
                    "isNew": 0
                },
                {
                    "id": 30442,
                    "title": "wpDiscuz – Syntax Highlighter",
                    "productVersion": "1.0.8",
                    "isNew": 0
                },
                {
                    "id": 30443,
                    "title": "wpDiscuz – Subscription Manager",
                    "productVersion": "7.0.9",
                    "isNew": 0
                },
                {
                    "id": 30444,
                    "title": "wpDiscuz – Report and Flagging",
                    "productVersion": "7.1.0",
                    "isNew": 0
                },
                {
                    "id": 30445,
                    "title": "wpDiscuz – Private Comments",
                    "productVersion": "7.1.0",
                    "isNew": 0
                },
                {
                    "id": 30446,
                    "title": "wpDiscuz – Online Users",
                    "productVersion": "7.1.0",
                    "isNew": 0
                },
                {
                    "id": 30447,
                    "title": "wpDiscuz – Media Uploader",
                    "productVersion": "7.1.6",
                    "isNew": 0
                },
                {
                    "id": 30448,
                    "title": "wpDiscuz – Google reCAPTCHA",
                    "productVersion": "7.0.8",
                    "isNew": 0
                },
                {
                    "id": 30449,
                    "title": "Wpdiscuz | Front-end Moderation",
                    "productVersion": "7.1.4",
                    "isNew": 0
                },
                {
                    "id": 30450,
                    "title": "wpDiscuz – Comment Search",
                    "productVersion": "7.1.5",
                    "isNew": 0
                },
                {
                    "id": 30451,
                    "title": "wpDiscuz – Comment Author Info",
                    "productVersion": "7.1.1",
                    "isNew": 0
                },
                {
                    "id": 30452,
                    "title": "wpDiscuz – Advanced Likers",
                    "productVersion": "7.1.1",
                    "isNew": 0
                },
                {
                    "id": 30453,
                    "title": "wpDiscuz – Ads Manager",
                    "productVersion": "7.1.1",
                    "isNew": 0
                },
                {
                    "id": 30454,
                    "title": "Woocommerce | Stripe Gateway",
                    "productVersion": "9.5.0",
                    "isNew": 0
                },
                {
                    "id": 30455,
                    "title": "Woocommerce | Product Vendors",
                    "productVersion": "2.4.3",
                    "isNew": 0
                },
                {
                    "id": 30456,
                    "title": "Publishpress | Capabilities Pro",
                    "productVersion": "2.19.2",
                    "isNew": 0
                },
                {
                    "id": 30457,
                    "title": "WPCode – The Best WordPress Code Snippets Plugin",
                    "productVersion": "2.2.8",
                    "isNew": 0
                },
                {
                    "id": 30458,
                    "title": "WP Desk | Google Merchant Center XML WooCommerce",
                    "productVersion": "1.11.1",
                    "isNew": 0
                },
                {
                    "id": 30459,
                    "title": "WP Desk | Flexible Wishlist PRO – Analytics & Emails",
                    "productVersion": "1.1.16",
                    "isNew": 0
                },
                {
                    "id": 30460,
                    "title": "WP Desk | Flexible PDF Coupons PRO – Event Ticket QR Scanner",
                    "productVersion": "1.2.3",
                    "isNew": 0
                },
                {
                    "id": 30461,
                    "title": "WP Desk | Flexible Coupons PRO – Custom Shortcodes",
                    "productVersion": "1.0.24",
                    "isNew": 0
                },
                {
                    "id": 30462,
                    "title": "WP Desk | Flexible Checkout Fields PRO WooCommerce",
                    "productVersion": "4.0.15",
                    "isNew": 0
                },
                {
                    "id": 30463,
                    "title": "WP Desk | Dropshipping XML Import Products for WooCommerce",
                    "productVersion": "2.11.3",
                    "isNew": 0
                },
                {
                    "id": 30464,
                    "title": "WP Desk | Dropshipping FTP Import Products for WooCommerce",
                    "productVersion": "1.0.23",
                    "isNew": 0
                },
                {
                    "id": 30465,
                    "title": "WP Desk | Custom Price for WooCommerce PRO",
                    "productVersion": "1.2.14",
                    "isNew": 0
                },
                {
                    "id": 30466,
                    "title": "WP Desk | Automatic Payment Status WooCommerce",
                    "productVersion": "2.0.9",
                    "isNew": 0
                },
                {
                    "id": 30467,
                    "title": "WP Desk | Active Payments WooCommerce",
                    "productVersion": "3.9.14",
                    "isNew": 0
                },
                {
                    "id": 30468,
                    "title": "Uncanny Owl | Uncanny Toolkit Pro for LearnDash",
                    "productVersion": "4.3.2",
                    "isNew": 0
                },
                {
                    "id": 30469,
                    "title": "Uncanny Owl | Uncanny Groups for LearnDash",
                    "productVersion": "6.1.3",
                    "isNew": 0
                },
                {
                    "id": 30470,
                    "title": "Smart Slider 3 Pro + Demos",
                    "productVersion": "3.5.1.28",
                    "isNew": 0
                },
                {
                    "id": 30471,
                    "title": "s2Member Pro – A Powerful Membership Plugin for WordPress",
                    "productVersion": "250511",
                    "isNew": 0
                },
                {
                    "id": 30472,
                    "title": "QuadLayers | QuadMenu PRO",
                    "productVersion": "3.1.8",
                    "isNew": 0
                },
                {
                    "id": 30473,
                    "title": "MasterStudy LMS Learning Management System PRO",
                    "productVersion": "4.6.22",
                    "isNew": 0
                },
                {
                    "id": 30474,
                    "title": "Independent Analytics Pro – Google Analytics Alternative for WP",
                    "productVersion": "2.11.3",
                    "isNew": 0
                },
                {
                    "id": 30475,
                    "title": "FluentCRM Pro",
                    "productVersion": "2.9.60",
                    "isNew": 0
                },
                {
                    "id": 30476,
                    "title": "DraftPress | Author Stats Pro",
                    "productVersion": "2.2.5",
                    "isNew": 0
                },
                {
                    "id": 30477,
                    "title": "Cost Calculator Builder PRO",
                    "productVersion": "3.5.3",
                    "isNew": 0
                },
                {
                    "id": 30478,
                    "title": "BuddyBoss Platform Pro",
                    "productVersion": "2.7.20",
                    "isNew": 0
                },
                {
                    "id": 30479,
                    "title": "BuddyBoss | Platform",
                    "productVersion": "2.8.60",
                    "isNew": 0
                },
                {
                    "id": 30480,
                    "title": "BerqWP – Automatic All-In-One PageSpeed Optimization Plugin",
                    "productVersion": "2.2.38",
                    "isNew": 0
                },
                {
                    "id": 30481,
                    "title": "All in One WP Migration Google Drive Extension",
                    "productVersion": "2.99",
                    "isNew": 0
                },
                {
                    "id": 30482,
                    "title": "WooCommerce Show Single Variations",
                    "productVersion": "1.25",
                    "isNew": 0
                },
                {
                    "id": 30483,
                    "title": "Gravity perks | Word Count",
                    "productVersion": "1.6.7",
                    "isNew": 0
                },
                {
                    "id": 30484,
                    "title": "Gravity perks | Unique ID",
                    "productVersion": "1.5.18",
                    "isNew": 0
                },
                {
                    "id": 30485,
                    "title": "Gravity perks | Terms of Service",
                    "productVersion": "1.4.9",
                    "isNew": 0
                },
                {
                    "id": 30486,
                    "title": "Gravity perks | Read Only",
                    "productVersion": "1.9.29",
                    "isNew": 0
                },
                {
                    "id": 30487,
                    "title": "Gravity perks | Randomizer",
                    "productVersion": "2.0.8",
                    "isNew": 0
                },
                {
                    "id": 30488,
                    "title": "Gravity perks | Preview Submission",
                    "productVersion": "1.3.24",
                    "isNew": 0
                },
                {
                    "id": 30489,
                    "title": "Gravity perks | Post Content Merge Tags",
                    "productVersion": "1.3.21",
                    "isNew": 0
                },
                {
                    "id": 30490,
                    "title": "Gravity perks | Populate Anything",
                    "productVersion": "2.1.32",
                    "isNew": 0
                },
                {
                    "id": 30491,
                    "title": "Gravity perks | Pay Per Word",
                    "productVersion": "1.2.5",
                    "isNew": 0
                },
                {
                    "id": 30492,
                    "title": "Gravity perks | Nested Forms",
                    "productVersion": "1.2.8",
                    "isNew": 0
                },
                {
                    "id": 30493,
                    "title": "Gravity perks | Multi Page Form Navigation",
                    "productVersion": "1.3",
                    "isNew": 0
                },
                {
                    "id": 30494,
                    "title": "Gravity perks | Live Preview",
                    "productVersion": "1.6.13",
                    "isNew": 0
                }
            ]
        },
        {
            "name": "May 13th, 2025",
            "rows": [
                {
                    "id": 30265,
                    "title": "WooCommerce PDF Invoices & Packing Slips Premium",
                    "productVersion": "4.29.0",
                    "isNew": 0
                },
                {
                    "id": 30266,
                    "title": "wpDiscuz – Widgets",
                    "productVersion": "7.2.8",
                    "isNew": 0
                },
                {
                    "id": 30267,
                    "title": "wpDiscuz User & Comment Mentioning",
                    "productVersion": "7.1.9",
                    "isNew": 0
                },
                {
                    "id": 30268,
                    "title": "wpDiscuz – Syntax Highlighter",
                    "productVersion": "1.0.6",
                    "isNew": 0
                },
                {
                    "id": 30269,
                    "title": "wpDiscuz – Subscription Manager",
                    "productVersion": "7.0.7",
                    "isNew": 0
                },
                {
                    "id": 30270,
                    "title": "wpDiscuz – Report and Flagging",
                    "productVersion": "7.0.13",
                    "isNew": 0
                },
                {
                    "id": 30271,
                    "title": "wpDiscuz – Private Comments",
                    "productVersion": "7.0.11",
                    "isNew": 0
                },
                {
                    "id": 30272,
                    "title": "wpDiscuz – Online Users",
                    "productVersion": "7.0.8",
                    "isNew": 0
                },
                {
                    "id": 30273,
                    "title": "wpDiscuz – Media Uploader",
                    "productVersion": "7.1.4",
                    "isNew": 0
                },
                {
                    "id": 30274,
                    "title": "wpDiscuz – Google reCAPTCHA",
                    "productVersion": "7.0.6",
                    "isNew": 0
                },
                {
                    "id": 30275,
                    "title": "Wpdiscuz | Front-end Moderation",
                    "productVersion": "7.1.2",
                    "isNew": 0
                },
                {
                    "id": 30276,
                    "title": "wpDiscuz – Emoticons",
                    "productVersion": "7.0.17",
                    "isNew": 0
                },
                {
                    "id": 30277,
                    "title": "wpDiscuz – Embeds",
                    "productVersion": "1.1.5",
                    "isNew": 0
                },
                {
                    "id": 30278,
                    "title": "wpDiscuz – Comment Author Info",
                    "productVersion": "7.0.15",
                    "isNew": 0
                },
                {
                    "id": 30279,
                    "title": "wpDiscuz – Advanced Likers",
                    "productVersion": "7.0.9",
                    "isNew": 0
                },
                {
                    "id": 30280,
                    "title": "wpDiscuz – Ads Manager",
                    "productVersion": "7.0.9",
                    "isNew": 0
                },
                {
                    "id": 30281,
                    "title": "wpDiscuz",
                    "productVersion": "7.6.30",
                    "isNew": 0
                },
                {
                    "id": 30282,
                    "title": "Woocommerce | Zapier Integration",
                    "productVersion": "2.14.0",
                    "isNew": 0
                },
                {
                    "id": 30283,
                    "title": "Woocommerce | Smart Refunder",
                    "productVersion": "2.3.1",
                    "isNew": 0
                },
                {
                    "id": 30284,
                    "title": "Woocommerce | RedSys Gateway",
                    "productVersion": "25.9.1",
                    "isNew": 0
                },
                {
                    "id": 30285,
                    "title": "Woocommerce | Product Video",
                    "productVersion": "1.7.0",
                    "isNew": 0
                },
                {
                    "id": 30286,
                    "title": "Woocommerce | Product Variation Table",
                    "productVersion": "1.2.8",
                    "isNew": 0
                },
                {
                    "id": 30287,
                    "title": "WooCommerce Product Bundles",
                    "productVersion": "8.3.6",
                    "isNew": 0
                },
                {
                    "id": 30288,
                    "title": "Woocommerce | Elavon Converge Gateway",
                    "productVersion": "2.14.5",
                    "isNew": 0
                },
                {
                    "id": 30289,
                    "title": "WooCommerce Dropshipping",
                    "productVersion": "5.1.8",
                    "isNew": 0
                },
                {
                    "id": 30290,
                    "title": "WooCommerce Distance Rate Shipping",
                    "productVersion": "1.7.1",
                    "isNew": 0
                },
                {
                    "id": 30291,
                    "title": "Woocommerce | CyberSource Payment Gateway",
                    "productVersion": "2.9.3",
                    "isNew": 0
                },
                {
                    "id": 30292,
                    "title": "Custom Start Date for WooCommerce Subscriptions",
                    "productVersion": "1.5",
                    "isNew": 0
                },
                {
                    "id": 30293,
                    "title": "WooCommerce Composite Products",
                    "productVersion": "10.5.0",
                    "isNew": 0
                },
                {
                    "id": 30294,
                    "title": "Woocommerce | Back In Stock Notifications",
                    "productVersion": "3.2.1",
                    "isNew": 0
                },
                {
                    "id": 30295,
                    "title": "Woocommerce | Authorize.net CIM Gateway",
                    "productVersion": "3.10.12",
                    "isNew": 0
                },
                {
                    "id": 30296,
                    "title": "Wpmet | ElementsKit Pro",
                    "productVersion": "3.8.6",
                    "isNew": 0
                },
                {
                    "id": 30297,
                    "title": "WPC Product Options for WooCommerce Premium",
                    "productVersion": "1.8.2",
                    "isNew": 0
                },
                {
                    "id": 30298,
                    "title": "Ultimate Addons for Contact Form 7 Pro",
                    "productVersion": "1.8.11",
                    "isNew": 0
                },
                {
                    "id": 30299,
                    "title": "Sky Addons – for Elementor Page Builder WordPress Plugin",
                    "productVersion": "3.0.0",
                    "isNew": 0
                },
                {
                    "id": 30300,
                    "title": "SeedProd Pro | Coming Soon Page Creator",
                    "productVersion": "6.18.16",
                    "isNew": 0
                },
                {
                    "id": 30301,
                    "title": "Relevanssi Premium",
                    "productVersion": "2.27.6",
                    "isNew": 0
                },
                {
                    "id": 30302,
                    "title": "QuadLayers | WooCommerce Direct Checkout PRO",
                    "productVersion": "3.2.9",
                    "isNew": 0
                },
                {
                    "id": 30303,
                    "title": "QuadLayers | Instagram Feed Gallery PRO",
                    "productVersion": "4.3.6",
                    "isNew": 0
                },
                {
                    "id": 30304,
                    "title": "LatePoint – Appointment Scheduling Plugin for WordPress + Addons",
                    "productVersion": "5.1.93",
                    "isNew": 0
                },
                {
                    "id": 30305,
                    "title": "JoomUnited | WP Media Folder",
                    "productVersion": "6.0.6",
                    "isNew": 0
                },
                {
                    "id": 30306,
                    "title": "Content Views Pro – The Best Filter & Grid Plugin For WordPress",
                    "productVersion": "7.2.2",
                    "isNew": 0
                },
                {
                    "id": 30307,
                    "title": "Booster Plus for WooCommerce",
                    "productVersion": "7.2.6",
                    "isNew": 0
                },
                {
                    "id": 30308,
                    "title": "Bit Form Pro",
                    "productVersion": "2.12.8",
                    "isNew": 0
                },
                {
                    "id": 30309,
                    "title": "Admin and Site Enhancements (ASE) Pro",
                    "productVersion": "7.8.10",
                    "isNew": 0
                },
                {
                    "id": 30310,
                    "title": "Newsletter – The Newsletter Plugin For WordPress",
                    "productVersion": "8.8.4",
                    "isNew": 0
                },
                {
                    "id": 30311,
                    "title": "Newsletter | Google Analytics",
                    "productVersion": "1.2.9",
                    "isNew": 0
                },
                {
                    "id": 30312,
                    "title": "Automated Newsletters",
                    "productVersion": "4.8.3",
                    "isNew": 0
                },
                {
                    "id": 30313,
                    "title": "Eventon | Speakers & Schedule",
                    "productVersion": "2.1.2",
                    "isNew": 0
                },
                {
                    "id": 30314,
                    "title": "Eventon | RSVP Events Waitlist",
                    "productVersion": "1.1.3",
                    "isNew": 0
                },
                {
                    "id": 30315,
                    "title": "EventOn RSVP Events",
                    "productVersion": "3.0.8",
                    "isNew": 0
                },
                {
                    "id": 30316,
                    "title": "Eventon | Reviewer",
                    "productVersion": "1.2.1",
                    "isNew": 0
                },
                {
                    "id": 30317,
                    "title": "EventOn QR Code",
                    "productVersion": "2.1",
                    "isNew": 0
                },
                {
                    "id": 30318,
                    "title": "Crocoblock JetSearch",
                    "productVersion": "3.5.9",
                    "isNew": 0
                },
                {
                    "id": 30319,
                    "title": "WooCommerce Extra Product Options",
                    "productVersion": "7.3.0.1",
                    "isNew": 0
                },
                {
                    "id": 30320,
                    "title": "Elementor Addons For WooCommerce Product",
                    "productVersion": "1.0.3",
                    "isNew": 0
                },
                {
                    "id": 30321,
                    "title": "BWD WooCommerce Product Accordion Addon For Elementor",
                    "productVersion": "2.6",
                    "isNew": 1
                },
                {
                    "id": 30322,
                    "title": "Codecanyon | WordPress Automatic Plugin",
                    "productVersion": "3.114.0",
                    "isNew": 0
                },
                {
                    "id": 30323,
                    "title": "WhatsApp Chat Support Pro WordPress Plugin",
                    "productVersion": "2.0.14",
                    "isNew": 0
                },
                {
                    "id": 30324,
                    "title": "Telegram Chat Support Pro WordPress Plugin",
                    "productVersion": "1.0.5",
                    "isNew": 1
                },
                {
                    "id": 30325,
                    "title": "Skype Chat Support Pro WordPress Plugin",
                    "productVersion": "1.1.2",
                    "isNew": 1
                },
                {
                    "id": 30326,
                    "title": "Messenger Chat Support WordPress Plugin",
                    "productVersion": "1.1.10",
                    "isNew": 0
                },
                {
                    "id": 30327,
                    "title": "Global Gallery – WordPress Responsive Gallery",
                    "productVersion": "9.2.2",
                    "isNew": 0
                },
                {
                    "id": 30328,
                    "title": "Essential Grid Gallery WordPress Plugin",
                    "productVersion": "3.1.9.1",
                    "isNew": 0
                },
                {
                    "id": 30329,
                    "title": "Creative Blog Designer Bundle for WordPress",
                    "productVersion": "1.0.4",
                    "isNew": 0
                },
                {
                    "id": 30330,
                    "title": "BWD Image Hotspot Addon For Elementor",
                    "productVersion": "1.4",
                    "isNew": 1
                },
                {
                    "id": 30331,
                    "title": "BWD Flip Carousel Addon For Elementor",
                    "productVersion": "1.4",
                    "isNew": 1
                },
                {
                    "id": 30332,
                    "title": "BWD Blog Post Image Accordion Addon For Elementor",
                    "productVersion": "2.7",
                    "isNew": 0
                },
                {
                    "id": 30333,
                    "title": "BWD Blog Post Accordion Addon For Elementor",
                    "productVersion": "2.7",
                    "isNew": 0
                },
                {
                    "id": 30334,
                    "title": "Sailon – Spa & Beauty Salon WordPress Theme",
                    "productVersion": "1.0.0",
                    "isNew": 1
                },
                {
                    "id": 30335,
                    "title": "uDesign – Responsive WordPress Theme",
                    "productVersion": "4.13.5",
                    "isNew": 0
                },
                {
                    "id": 30336,
                    "title": "REHub – Price Comparison, Multi Vendor Marketplace WordPress Theme",
                    "productVersion": "19.9.5",
                    "isNew": 0
                },
                {
                    "id": 30337,
                    "title": "Loobek – Elementor Multipurpose WooCommerce Theme",
                    "productVersion": "1.3.6",
                    "isNew": 0
                },
                {
                    "id": 30338,
                    "title": "Xevsoft – Digital & It Solutions WordPress Theme",
                    "productVersion": "1.0.0",
                    "isNew": 1
                },
                {
                    "id": 30339,
                    "title": "Zwing – Electric Scooter Website Elementor Template Kits",
                    "productVersion": "1.0.0",
                    "isNew": 1
                },
                {
                    "id": 30340,
                    "title": "SiteWarden – Web Hosting Elementor Template Kit",
                    "productVersion": "1.0.0",
                    "isNew": 1
                },
                {
                    "id": 30341,
                    "title": "Oasive – Luxury Hotel & Resort Elementor Template Kit",
                    "productVersion": "1.0.0",
                    "isNew": 1
                },
                {
                    "id": 30342,
                    "title": "Gadam – Fire Department Elementor Template Kit",
                    "productVersion": "1.0.1",
                    "isNew": 1
                },
                {
                    "id": 30343,
                    "title": "Formwork – Construction Elementor Template Kit",
                    "productVersion": "1.0.0",
                    "isNew": 1
                },
                {
                    "id": 30344,
                    "title": "Fincoist – Financial Investment Advisor Elementor Template Kit",
                    "productVersion": "1.0.0",
                    "isNew": 1
                },
                {
                    "id": 30345,
                    "title": "Barokah – Hajj & Umrah Tour Travel Elementor Template Kit",
                    "productVersion": "1.0.0",
                    "isNew": 1
                }
            ]
        },
        {
            "name": "May 12th, 2025",
            "rows": [
                {
                    "id": 30252,
                    "title": "Efast – Transport, Logistic & Warehouse WordPress Theme",
                    "productVersion": "1.0.0",
                    "isNew": 1
                },
                {
                    "id": 30253,
                    "title": "Orologio – Luxury Watch Store WordPress Theme",
                    "productVersion": "1.0",
                    "isNew": 1
                },
                {
                    "id": 30254,
                    "title": "Edrio – Education & Online Course WordPress Theme",
                    "productVersion": "1.0",
                    "isNew": 1
                },
                {
                    "id": 30255,
                    "title": "Hubsteel – Industrial & Factory WordPress Theme",
                    "productVersion": "1.0.1",
                    "isNew": 1
                },
                {
                    "id": 30256,
                    "title": "Barsi – Architecture & Interior Design WordPress Theme",
                    "productVersion": "1.0.0",
                    "isNew": 1
                },
                {
                    "id": 30257,
                    "title": "Safebyte – Technology & IT Solutions WordPress Theme",
                    "productVersion": "1.0.0",
                    "isNew": 1
                },
                {
                    "id": 30258,
                    "title": "Mouno – Creative Digital Agency WordPress Theme",
                    "productVersion": "1.0.0",
                    "isNew": 1
                },
                {
                    "id": 30259,
                    "title": "Jolie – Beauty & Cosmetics Shop",
                    "productVersion": "17",
                    "isNew": 0
                },
                {
                    "id": 30260,
                    "title": "Bijoux – Jewellery Ecommerce WordPress Theme",
                    "productVersion": "20",
                    "isNew": 0
                },
                {
                    "id": 30261,
                    "title": "Themeforest | Caridad – Charity WordPress",
                    "productVersion": "18",
                    "isNew": 0
                },
                {
                    "id": 30262,
                    "title": "Neder – WordPress News Magazine and Blog Theme",
                    "productVersion": "2.0",
                    "isNew": 1
                },
                {
                    "id": 30263,
                    "title": "Fabrik – Manufacturing & Factory WordPress Theme",
                    "productVersion": "7",
                    "isNew": 0
                },
                {
                    "id": 30264,
                    "title": "Engitech – IT Solutions & Services WordPress Theme",
                    "productVersion": "1.8.12",
                    "isNew": 0
                }
            ]
        },
        {
            "name": "May 11th, 2025",
            "rows": [
                {
                    "id": 30207,
                    "title": "WPForms – Stripe",
                    "productVersion": "3.5.0",
                    "isNew": 0
                },
                {
                    "id": 30208,
                    "title": "Wpforms | Square",
                    "productVersion": "2.0.0",
                    "isNew": 0
                },
                {
                    "id": 30209,
                    "title": "WPForms – Mailchimp",
                    "productVersion": "2.5.0",
                    "isNew": 0
                },
                {
                    "id": 30210,
                    "title": "Wpforms | Google Sheets",
                    "productVersion": "2.4.0",
                    "isNew": 0
                },
                {
                    "id": 30211,
                    "title": "Wpforms | MailPoet",
                    "productVersion": "1.0.0",
                    "isNew": 1
                },
                {
                    "id": 30212,
                    "title": "Publishpress | Revisions Pro",
                    "productVersion": "3.6.8",
                    "isNew": 0
                },
                {
                    "id": 30213,
                    "title": "Publishpress | Permissions Pro",
                    "productVersion": "4.2.2",
                    "isNew": 0
                },
                {
                    "id": 30214,
                    "title": "Publishpress | Future Pro",
                    "productVersion": "4.6.0",
                    "isNew": 0
                },
                {
                    "id": 30215,
                    "title": "Publishpress | Blocks Pro",
                    "productVersion": "3.2.6",
                    "isNew": 0
                },
                {
                    "id": 30216,
                    "title": "WP Staging Pro – Best WordPress Backup Plugin",
                    "productVersion": "6.1.4",
                    "isNew": 0
                },
                {
                    "id": 30217,
                    "title": "StoreApps | Smart Manager For WooCommerce",
                    "productVersion": "8.61.0",
                    "isNew": 0
                },
                {
                    "id": 30218,
                    "title": "Seraphinite Accelerator Extended",
                    "productVersion": "2.27.25",
                    "isNew": 0
                },
                {
                    "id": 30219,
                    "title": "SB | Custom Instagram Feed Pro",
                    "productVersion": "6.8.0",
                    "isNew": 0
                },
                {
                    "id": 30220,
                    "title": "Pretty Links Pro | Custom Link Shortener, Branded Link Management",
                    "productVersion": "3.6.16",
                    "isNew": 0
                },
                {
                    "id": 30221,
                    "title": "Polylang Pro – Making WordPress multilingual",
                    "productVersion": "3.7.1",
                    "isNew": 0
                },
                {
                    "id": 30222,
                    "title": "Pimwick | PW WooCommerce Bulk Edit Pro",
                    "productVersion": "3.16",
                    "isNew": 1
                },
                {
                    "id": 30223,
                    "title": "Pimwick | PW WooCommerce BOGO Pro",
                    "productVersion": "4.9",
                    "isNew": 1
                },
                {
                    "id": 30224,
                    "title": "MotoPress | Hotel Booking Multi-Currency",
                    "productVersion": "1.2.7",
                    "isNew": 0
                },
                {
                    "id": 30225,
                    "title": "MotoPress | Hotel Booking Checkout Fields",
                    "productVersion": "1.2.2",
                    "isNew": 1
                },
                {
                    "id": 30226,
                    "title": "External Importer Pro – Import Affiliate Products Into WooCommerce",
                    "productVersion": "2.14.0",
                    "isNew": 0
                },
                {
                    "id": 30227,
                    "title": "DPlugins | DevKit Pro",
                    "productVersion": "1.7.1",
                    "isNew": 0
                },
                {
                    "id": 30228,
                    "title": "ACPT – Custom Post Types Plugin for WordPress",
                    "productVersion": "2.0.26",
                    "isNew": 1
                },
                {
                    "id": 30229,
                    "title": "Paid memberships pro | CCBill Gateway",
                    "productVersion": "1.0.1",
                    "isNew": 0
                },
                {
                    "id": 30230,
                    "title": "Modula | Slider",
                    "productVersion": "1.1.16",
                    "isNew": 0
                },
                {
                    "id": 30231,
                    "title": "Learnpress | Students List",
                    "productVersion": "4.0.3",
                    "isNew": 0
                },
                {
                    "id": 30232,
                    "title": "Learnpress | bbPress",
                    "productVersion": "4.0.7",
                    "isNew": 0
                },
                {
                    "id": 30233,
                    "title": "Gravity Flow WordPress Plugin",
                    "productVersion": "2.9.14",
                    "isNew": 0
                },
                {
                    "id": 30234,
                    "title": "Gamipress | Birthdays",
                    "productVersion": "1.0.8",
                    "isNew": 0
                },
                {
                    "id": 30235,
                    "title": "Formidable forms | Stripe",
                    "productVersion": "3.1.7",
                    "isNew": 0
                },
                {
                    "id": 30236,
                    "title": "Echo RSS Feed Post Generator Plugin for WordPress",
                    "productVersion": "5.4.8.2",
                    "isNew": 0
                },
                {
                    "id": 30237,
                    "title": "Crawlomatic Multisite Scraper Post Generator Plugin for WordPress",
                    "productVersion": "2.6.8.2",
                    "isNew": 0
                },
                {
                    "id": 30238,
                    "title": "Booknetic – WordPress Booking Plugin for Appointment Scheduling",
                    "productVersion": "4.5.0",
                    "isNew": 0
                },
                {
                    "id": 30239,
                    "title": "AutomatorWP Pro",
                    "productVersion": "4.5.3",
                    "isNew": 0
                },
                {
                    "id": 30240,
                    "title": "Themeforest | Kriya – Yoga Theme",
                    "productVersion": "4.0",
                    "isNew": 0
                },
                {
                    "id": 30241,
                    "title": "Instive – Insurance WordPress Theme",
                    "productVersion": "1.2.6",
                    "isNew": 0
                },
                {
                    "id": 30242,
                    "title": "SocialV – Social Network & Community BuddyPress Theme",
                    "productVersion": "2.1.0",
                    "isNew": 0
                },
                {
                    "id": 30243,
                    "title": "Sway – Multi-Purpose WordPress Theme",
                    "productVersion": "4.2",
                    "isNew": 0
                },
                {
                    "id": 30244,
                    "title": "XStore – Multipurpose WooCommerce Theme",
                    "productVersion": "9.4.12",
                    "isNew": 0
                },
                {
                    "id": 30245,
                    "title": "The Hanger – eCommerce WordPress Theme for WooCommerce",
                    "productVersion": "5.2",
                    "isNew": 0
                },
                {
                    "id": 30246,
                    "title": "Puca – Optimized Mobile WooCommerce Theme",
                    "productVersion": "2.6.32",
                    "isNew": 0
                },
                {
                    "id": 30247,
                    "title": "Mr. Tailor – eCommerce WordPress Theme for WooCommerce",
                    "productVersion": "7.2",
                    "isNew": 0
                },
                {
                    "id": 30248,
                    "title": "Merto – Multipurpose WooCommerce WordPress Theme",
                    "productVersion": "1.1.4",
                    "isNew": 0
                },
                {
                    "id": 30249,
                    "title": "Hongo – Modern & Multipurpose WooCommerce WordPress Theme",
                    "productVersion": "3.6",
                    "isNew": 1
                },
                {
                    "id": 30250,
                    "title": "Elessi – WooCommerce AJAX WordPress Theme – RTL support",
                    "productVersion": "6.3.8",
                    "isNew": 0
                },
                {
                    "id": 30251,
                    "title": "Doctreat – Doctors Directory WordPress Theme",
                    "productVersion": "1.6.7",
                    "isNew": 0
                }
            ]
        },
        {
            "name": "May 10th, 2025",
            "rows": [
                {
                    "id": 30103,
                    "title": "Earin – Headphone & Audio Store Shopify 2.0 Theme",
                    "productVersion": "1.0",
                    "isNew": 1
                },
                {
                    "id": 30104,
                    "title": "Tead – Opencart MultiPurpose Responsive Theme",
                    "productVersion": "1.0.0",
                    "isNew": 1
                },
                {
                    "id": 30105,
                    "title": "Vevent – Event Planner & Organizer Elementor Template Kit",
                    "productVersion": "1.0.0",
                    "isNew": 1
                },
                {
                    "id": 30106,
                    "title": "Tolkio – AI Virtual Assistance App Elementor Template Kit",
                    "productVersion": "1.0.0",
                    "isNew": 1
                },
                {
                    "id": 30107,
                    "title": "Sellbiz – Startup and Business Marketplace Elementor Template Kit",
                    "productVersion": "1.0.0",
                    "isNew": 1
                },
                {
                    "id": 30108,
                    "title": "Orizon – Architecture & Interior Design Elementor Template Kit",
                    "productVersion": "1.0.0",
                    "isNew": 1
                },
                {
                    "id": 30109,
                    "title": "Ludora – Game Developer & Studio Elementor Pro Template Kit",
                    "productVersion": "1.0.0",
                    "isNew": 1
                },
                {
                    "id": 30110,
                    "title": "Gorden – Lawn & Gardening Service Elementor Template Kit",
                    "productVersion": "1.0.0",
                    "isNew": 1
                },
                {
                    "id": 30111,
                    "title": "Zorion – Mining & Industry Elementor Template Kit",
                    "productVersion": "1.0.0",
                    "isNew": 1
                },
                {
                    "id": 30112,
                    "title": "Voyavue – Yacht Club & Boat Rental Elementor Template Kit",
                    "productVersion": "1.0.0",
                    "isNew": 1
                },
                {
                    "id": 30113,
                    "title": "Sunara – Solar & Renewable Energy Elementor Pro Template Kit",
                    "productVersion": "1.0.0",
                    "isNew": 1
                },
                {
                    "id": 30114,
                    "title": "Pitcho – Creative Agency Elementor Template Kit",
                    "productVersion": "1.0.0",
                    "isNew": 1
                },
                {
                    "id": 30115,
                    "title": "Omio – Modern Personal Portfolio Elementor Template Kit",
                    "productVersion": "1.0.0",
                    "isNew": 1
                },
                {
                    "id": 30116,
                    "title": "Meciy – Psychology & Counseling Elementor Template Kit",
                    "productVersion": "1.0.0",
                    "isNew": 1
                },
                {
                    "id": 30117,
                    "title": "McMahone – Real Estate Agent Elementor Template Kit",
                    "productVersion": "1.0.0",
                    "isNew": 1
                },
                {
                    "id": 30118,
                    "title": "Intelion – Artificial Intelligence Service Elementor Template Kits",
                    "productVersion": "1.0.0",
                    "isNew": 1
                },
                {
                    "id": 30119,
                    "title": "Figgus – Finance & Investment Elementor Template Kit",
                    "productVersion": "1.0.0",
                    "isNew": 1
                },
                {
                    "id": 30120,
                    "title": "Dizayn – Digital Design Agency Elementor Pro Template Kit",
                    "productVersion": "1.0.0",
                    "isNew": 1
                },
                {
                    "id": 30121,
                    "title": "Bricko – Construction & Building Service Elementor Template Kit",
                    "productVersion": "1.0.0",
                    "isNew": 1
                },
                {
                    "id": 30122,
                    "title": "Aroviya – Beauty & Spa Salon Elementor Template Kit",
                    "productVersion": "1.0.0",
                    "isNew": 1
                },
                {
                    "id": 30123,
                    "title": "Wallox – Painting & Wallpapering Template Kit",
                    "productVersion": "1.0.0",
                    "isNew": 1
                },
                {
                    "id": 30124,
                    "title": "Vibecast – Podcast Studio Elementor Pro Template Kit",
                    "productVersion": "1.0.0",
                    "isNew": 1
                },
                {
                    "id": 30125,
                    "title": "Trustnetic – Cyber Security Services Elementor Pro Template Kit",
                    "productVersion": "1.0.0",
                    "isNew": 1
                },
                {
                    "id": 30126,
                    "title": "Tocool – Digital Marketing Agency Elementor Template Kit",
                    "productVersion": "1.0.0",
                    "isNew": 1
                },
                {
                    "id": 30127,
                    "title": "Solarix – Solar & Renewable Energy Elementor Template Kit",
                    "productVersion": "1.0.0",
                    "isNew": 1
                },
                {
                    "id": 30128,
                    "title": "Smarto – Smart Home Solutions Elementor Pro Template Kit",
                    "productVersion": "1.0.0",
                    "isNew": 1
                },
                {
                    "id": 30129,
                    "title": "Serenity – Wedding Organizer Elementor Template Kit",
                    "productVersion": "1.0.0",
                    "isNew": 1
                },
                {
                    "id": 30130,
                    "title": "Nexi – AI & Cyber Security Event Conference Elementor Pro Template Kit",
                    "productVersion": "1.0.0",
                    "isNew": 1
                },
                {
                    "id": 30131,
                    "title": "KlipSeni – Personal CV Video Editor Elementor Template Kit",
                    "productVersion": "1.0.1",
                    "isNew": 1
                },
                {
                    "id": 30132,
                    "title": "Kharya – Personal CV Freelancer Elementor Template Kit",
                    "productVersion": "1.0.1",
                    "isNew": 1
                },
                {
                    "id": 30133,
                    "title": "Elarisse – Wedding Photography Elementor Template Kit",
                    "productVersion": "1.0.0",
                    "isNew": 1
                },
                {
                    "id": 30134,
                    "title": "DriveSkill – Driving School Elementor Template Kit",
                    "productVersion": "1.0.0",
                    "isNew": 1
                },
                {
                    "id": 30135,
                    "title": "Dorone – Drone Aerial Videography and Photography Elementor Template Kit",
                    "productVersion": "1.0.0",
                    "isNew": 1
                },
                {
                    "id": 30136,
                    "title": "Boxora – Storage Service Elementor Template Kit",
                    "productVersion": "1.0.0",
                    "isNew": 1
                },
                {
                    "id": 30137,
                    "title": "Modins – Insurance & Finance Drupal 11 Theme",
                    "productVersion": "3.5.0",
                    "isNew": 1
                },
                {
                    "id": 30138,
                    "title": "Lestin – Directory & Listing Drupal Theme",
                    "productVersion": "3.5.3",
                    "isNew": 1
                },
                {
                    "id": 30139,
                    "title": "Honee – Honey Single Product Shopify 2.0 Theme",
                    "productVersion": "1.0.0",
                    "isNew": 1
                },
                {
                    "id": 30140,
                    "title": "Zephyvia – Travel Tour Agency Elementor Template Kit",
                    "productVersion": "1.0.0",
                    "isNew": 1
                },
                {
                    "id": 30141,
                    "title": "Tehno – IT Solution & Service Elementor template Kit",
                    "productVersion": "1.0.0",
                    "isNew": 1
                },
                {
                    "id": 30142,
                    "title": "Playerz – Football Team & Sports Club Elementor Template Kit",
                    "productVersion": "1.0.0",
                    "isNew": 1
                },
                {
                    "id": 30143,
                    "title": "Paynix – SaaS & Finance Services Elementor Template Kit",
                    "productVersion": "1.0.1",
                    "isNew": 1
                },
                {
                    "id": 30144,
                    "title": "Invie – Invoicing Platform & SaaS Elementor Template Kit",
                    "productVersion": "1.0.0",
                    "isNew": 1
                },
                {
                    "id": 30145,
                    "title": "Gourca – Healthy & Clean Food Catering Elementor Template Kit",
                    "productVersion": "1.0.0",
                    "isNew": 1
                },
                {
                    "id": 30146,
                    "title": "Cinemaze – Film & Video Production Elementor Template Kit",
                    "productVersion": "1.0.1",
                    "isNew": 1
                },
                {
                    "id": 30147,
                    "title": "CapWise – Trading & Investment Elementor Pro Template Kit",
                    "productVersion": "1.0.0",
                    "isNew": 1
                },
                {
                    "id": 30148,
                    "title": "CallMeca – Home Visit Medical Service Elementor Template Kit",
                    "productVersion": "1.0.0",
                    "isNew": 1
                },
                {
                    "id": 30149,
                    "title": "Branix – Handyman Services Elementor Template Kit",
                    "productVersion": "1.0.0",
                    "isNew": 1
                },
                {
                    "id": 30150,
                    "title": "66biolinks – Bio Links, URL Shortener, QR Codes & Web Tools (SAAS)",
                    "productVersion": "56.0.0",
                    "isNew": 0
                },
                {
                    "id": 30151,
                    "title": "Veloria – Hotel & Resort Elementor Pro Template Kit",
                    "productVersion": "1.0.0",
                    "isNew": 1
                },
                {
                    "id": 30152,
                    "title": "Storeca – Storage Service Elementor Template Kit",
                    "productVersion": "1.0.0",
                    "isNew": 1
                },
                {
                    "id": 30153,
                    "title": "Optivexa – SEO Digital Agency Elementor Template Kit",
                    "productVersion": "1.0.0",
                    "isNew": 1
                },
                {
                    "id": 30154,
                    "title": "Digityze – Digital Marketing Agency Elementor Template Kit",
                    "productVersion": "1.0.0",
                    "isNew": 1
                },
                {
                    "id": 30155,
                    "title": "Binzan – Business Consulting Elementor Template",
                    "productVersion": "1.0.0",
                    "isNew": 1
                },
                {
                    "id": 30156,
                    "title": "Anteng – Elderly House Service Elementor Kit Template",
                    "productVersion": "1.0.0",
                    "isNew": 1
                },
                {
                    "id": 30157,
                    "title": "Dhora – Movie Production & Film Studio WordPress Theme",
                    "productVersion": "1.0.5",
                    "isNew": 1
                },
                {
                    "id": 30158,
                    "title": "Printx – Printing Services WordPress Theme",
                    "productVersion": "1.0.7",
                    "isNew": 0
                },
                {
                    "id": 30159,
                    "title": "Kester – Soccer Club & Sports News WordPress Theme",
                    "productVersion": "1.2.2",
                    "isNew": 0
                },
                {
                    "id": 30160,
                    "title": "Vault – Multi-Purpose Elementor WordPress Theme",
                    "productVersion": "3.1.2",
                    "isNew": 0
                },
                {
                    "id": 30161,
                    "title": "Outgrid – Multi-Purpose Elementor WordPress Theme",
                    "productVersion": "2.1.2",
                    "isNew": 0
                },
                {
                    "id": 30162,
                    "title": "ShoppyStore – Multipurpose Elementor WooCommerce WordPress Theme",
                    "productVersion": "3.7.19",
                    "isNew": 0
                },
                {
                    "id": 30163,
                    "title": "Shopkeeper • Multi-Purpose WooCommerce Theme",
                    "productVersion": "7.5",
                    "isNew": 1
                },
                {
                    "id": 30164,
                    "title": "MaxShop | Multi-Purpose Responsive WooCommerce Theme",
                    "productVersion": "3.6.20",
                    "isNew": 0
                },
                {
                    "id": 30165,
                    "title": "Bookory – Book Store WooCommerce Theme",
                    "productVersion": "2.2.4",
                    "isNew": 0
                },
                {
                    "id": 30166,
                    "title": "UniTravel | Travel Agency & Tourism Bureau WordPress Theme",
                    "productVersion": "1.4.3",
                    "isNew": 0
                },
                {
                    "id": 30167,
                    "title": "TravelWP | Travel Tour Booking WordPress Theme",
                    "productVersion": "2.1.4",
                    "isNew": 0
                },
                {
                    "id": 30168,
                    "title": "PartyMaker | Event Planner & Wedding Agency WordPress Theme",
                    "productVersion": "1.1.15",
                    "isNew": 0
                },
                {
                    "id": 30169,
                    "title": "Masterstudy – Education WordPress Theme",
                    "productVersion": "4.8.103",
                    "isNew": 0
                },
                {
                    "id": 30170,
                    "title": "Themeforest | Kids Life | Children School",
                    "productVersion": "4.9",
                    "isNew": 0
                },
                {
                    "id": 30171,
                    "title": "Eduma | Education WordPress Theme",
                    "productVersion": "5.6.9",
                    "isNew": 0
                },
                {
                    "id": 30172,
                    "title": "Classima – Classified Ads WordPress Theme",
                    "productVersion": "2.10.2",
                    "isNew": 0
                },
                {
                    "id": 30173,
                    "title": "Newsmag – News Magazine Newspaper",
                    "productVersion": "5.4.3.3",
                    "isNew": 0
                },
                {
                    "id": 30174,
                    "title": "Rasalina – Personal Portfolio WordPress Theme",
                    "productVersion": "1.0.4",
                    "isNew": 1
                },
                {
                    "id": 30175,
                    "title": "Braintech – Technology & IT Solutions WordPress Theme",
                    "productVersion": "2.6.9",
                    "isNew": 0
                },
                {
                    "id": 30176,
                    "title": "Affirm – Marketing & Digital Agency WordPress Theme",
                    "productVersion": "4.1.2",
                    "isNew": 0
                },
                {
                    "id": 30177,
                    "title": "Morz – Transportation WordPress Theme",
                    "productVersion": "22",
                    "isNew": 0
                },
                {
                    "id": 30178,
                    "title": "Sandbox – Modern & Multipurpose WordPress Theme",
                    "productVersion": "1.1.16",
                    "isNew": 0
                },
                {
                    "id": 30179,
                    "title": "REHub – Price Comparison, Multi Vendor Marketplace WordPress Theme",
                    "productVersion": "19.9.4",
                    "isNew": 0
                },
                {
                    "id": 30180,
                    "title": "Uomo – Multipurpose WooCommerce WordPress Theme",
                    "productVersion": "2.0.29",
                    "isNew": 0
                },
                {
                    "id": 30181,
                    "title": "Negan – Clean, Minimal WooCommerce Theme",
                    "productVersion": "1.8.0",
                    "isNew": 0
                },
                {
                    "id": 30182,
                    "title": "Salute – Health Medical WordPress",
                    "productVersion": "47",
                    "isNew": 0
                },
                {
                    "id": 30183,
                    "title": "Tanda – IT Solutions WordPress",
                    "productVersion": "1.4",
                    "isNew": 0
                },
                {
                    "id": 30184,
                    "title": "Rise – Business & Consulting WordPress Theme",
                    "productVersion": "4.1.2",
                    "isNew": 0
                },
                {
                    "id": 30185,
                    "title": "Numérique – SEO Digital Marketing WordPress Theme",
                    "productVersion": "8",
                    "isNew": 0
                },
                {
                    "id": 30186,
                    "title": "Diego – Creative Personal Portfolio & Resume WordPress Theme + RTL",
                    "productVersion": "1.1.2",
                    "isNew": 1
                },
                {
                    "id": 30187,
                    "title": "Brisk – Multi-Purpose Elementor WordPress Theme",
                    "productVersion": "6.1.2",
                    "isNew": 0
                },
                {
                    "id": 30188,
                    "title": "WP Desk | Flexible Product Fields PRO WooCommerce",
                    "productVersion": "2.6.4",
                    "isNew": 0
                },
                {
                    "id": 30189,
                    "title": "Perfmatters",
                    "productVersion": "2.4.4",
                    "isNew": 0
                },
                {
                    "id": 30190,
                    "title": "GutenBricks – Next-Level Gutenberg Blocks with Bricks Builder",
                    "productVersion": "1.1.20.7",
                    "isNew": 0
                },
                {
                    "id": 30191,
                    "title": "Dokan Pro – eCommerce Marketplace Plugin",
                    "productVersion": "4.0.1",
                    "isNew": 0
                },
                {
                    "id": 30192,
                    "title": "CheckoutWC",
                    "productVersion": "10.1.7",
                    "isNew": 0
                },
                {
                    "id": 30193,
                    "title": "AnalyticsWP #1 WordPress Analytics Plugin",
                    "productVersion": "2.2.0",
                    "isNew": 0
                },
                {
                    "id": 30194,
                    "title": "LearnPress – Co-Instructors",
                    "productVersion": "4.0.7",
                    "isNew": 0
                },
                {
                    "id": 30195,
                    "title": "Learnpress | Announcements",
                    "productVersion": "4.0.8.1",
                    "isNew": 0
                },
                {
                    "id": 30196,
                    "title": "Gravity Forms",
                    "productVersion": "2.9.8",
                    "isNew": 0
                },
                {
                    "id": 30197,
                    "title": "Gravity Flow WordPress Plugin",
                    "productVersion": "2.9.13",
                    "isNew": 0
                },
                {
                    "id": 30198,
                    "title": "Formidable forms | AI",
                    "productVersion": "2.0.2",
                    "isNew": 0
                },
                {
                    "id": 30199,
                    "title": "Crocoblock | JetBooking",
                    "productVersion": "3.7.3",
                    "isNew": 0
                },
                {
                    "id": 30200,
                    "title": "Codecanyon | WooCommerce Upload Files",
                    "productVersion": "87.2",
                    "isNew": 0
                },
                {
                    "id": 30201,
                    "title": "WordPress Real Category Management: Content Management in Category Folders",
                    "productVersion": "4.2.39",
                    "isNew": 0
                },
                {
                    "id": 30202,
                    "title": "WooCommerce Product Variations Swatches",
                    "productVersion": "1.1.7",
                    "isNew": 0
                },
                {
                    "id": 30203,
                    "title": "Real3D FlipBook WordPress Plugin",
                    "productVersion": "4.9.8",
                    "isNew": 0
                },
                {
                    "id": 30204,
                    "title": "Directories Pro plugin for WordPress",
                    "productVersion": "1.14.35",
                    "isNew": 0
                },
                {
                    "id": 30205,
                    "title": "Automatorwp | WooCommerce",
                    "productVersion": "1.5.2",
                    "isNew": 0
                },
                {
                    "id": 30206,
                    "title": "AutomatorWP",
                    "productVersion": "5.2.2",
                    "isNew": 0
                }
            ]
        },
        {
            "name": "May 9th, 2025",
            "rows": [
                {
                    "id": 29954,
                    "title": "WooCommerce Ultimate Points And Rewards – Referral Points & Coupon Generation",
                    "productVersion": "2.10.0",
                    "isNew": 0
                },
                {
                    "id": 29955,
                    "title": "SUMO Affiliates Pro – WordPress Affiliate Plugin",
                    "productVersion": "10.8.0",
                    "isNew": 0
                },
                {
                    "id": 29956,
                    "title": "BRW – Booking Rental Plugin WooCommerce",
                    "productVersion": "1.7.9",
                    "isNew": 0
                },
                {
                    "id": 29957,
                    "title": "AliExpress Dropshipping Business plugin for WooCommerce",
                    "productVersion": "3.5.7",
                    "isNew": 0
                },
                {
                    "id": 29958,
                    "title": "Codecanyon | WordPress WhatsApp Support",
                    "productVersion": "2.5.1",
                    "isNew": 0
                },
                {
                    "id": 29959,
                    "title": "Readabler – WordPress Accessibility Plugin",
                    "productVersion": "2.0.1",
                    "isNew": 0
                },
                {
                    "id": 29960,
                    "title": "AIomatic – Automatic AI Content Writer & Editor, ChatBot & AI Toolkit",
                    "productVersion": "2.4.6",
                    "isNew": 0
                },
                {
                    "id": 29961,
                    "title": "Affiliate Egg – Niche Affiliate Marketing WordPress Plugin",
                    "productVersion": "10.9.23",
                    "isNew": 0
                },
                {
                    "id": 29962,
                    "title": "BookingPress Pro – Appointment Booking plugin",
                    "productVersion": "4.3.2",
                    "isNew": 0
                },
                {
                    "id": 29963,
                    "title": "WooCommerce Request A Quote Premium",
                    "productVersion": "4.33.0",
                    "isNew": 0
                },
                {
                    "id": 29964,
                    "title": "WooCommerce Stamps.com API",
                    "productVersion": "2.1.2",
                    "isNew": 0
                },
                {
                    "id": 29965,
                    "title": "Role Based Payment Shipping Methods",
                    "productVersion": "2.6.1",
                    "isNew": 0
                },
                {
                    "id": 29966,
                    "title": "Woocommerce | RedSys Gateway",
                    "productVersion": "25.9.0",
                    "isNew": 0
                },
                {
                    "id": 29967,
                    "title": "Woocommerce | reCaptcha",
                    "productVersion": "2.62",
                    "isNew": 0
                },
                {
                    "id": 29968,
                    "title": "Woocommerce | Product Vendors",
                    "productVersion": "2.4.2",
                    "isNew": 0
                },
                {
                    "id": 29969,
                    "title": "WooCommerce Order Barcodes",
                    "productVersion": "1.9.0",
                    "isNew": 0
                },
                {
                    "id": 29970,
                    "title": "Woocommerce | Gift Cards",
                    "productVersion": "2.5.0",
                    "isNew": 0
                },
                {
                    "id": 29971,
                    "title": "WooCommerce EU VAT Number",
                    "productVersion": "2.9.15",
                    "isNew": 0
                },
                {
                    "id": 29972,
                    "title": "Woocommerce | CyberSource Payment Gateway",
                    "productVersion": "2.9.2",
                    "isNew": 0
                },
                {
                    "id": 29973,
                    "title": "WooCommerce Anti-Fraud",
                    "productVersion": "7.0.1",
                    "isNew": 0
                },
                {
                    "id": 29974,
                    "title": "WooCommerce Account Funds",
                    "productVersion": "3.2.0",
                    "isNew": 0
                },
                {
                    "id": 29975,
                    "title": "Zynith SEO Plugin",
                    "productVersion": "10.5.3",
                    "isNew": 0
                },
                {
                    "id": 29976,
                    "title": "WPSmartPay | Paddle for WooCommerce",
                    "productVersion": "2.4.0",
                    "isNew": 0
                },
                {
                    "id": 29977,
                    "title": "WPLab | WP-Lister Pro for Amazon",
                    "productVersion": "2.7.1",
                    "isNew": 0
                },
                {
                    "id": 29978,
                    "title": "WPC Estimated Delivery Date for WooCommerce Premium",
                    "productVersion": "2.5.5",
                    "isNew": 0
                },
                {
                    "id": 29979,
                    "title": "WP Social Ninja Pro",
                    "productVersion": "3.17.0",
                    "isNew": 0
                },
                {
                    "id": 29980,
                    "title": "WP-Optimize Premium",
                    "productVersion": "4.2.1",
                    "isNew": 0
                },
                {
                    "id": 29981,
                    "title": "WP Adminify Pro + Addons",
                    "productVersion": "4.0.4.8",
                    "isNew": 0
                },
                {
                    "id": 29982,
                    "title": "WooCommerce Price Based on Country Pro Add-on",
                    "productVersion": "3.6.3",
                    "isNew": 0
                },
                {
                    "id": 29983,
                    "title": "Really Simple SSL pro",
                    "productVersion": "9.3.6",
                    "isNew": 0
                },
                {
                    "id": 29984,
                    "title": "QuadLayers | WooCommerce Direct Checkout PRO",
                    "productVersion": "3.2.8",
                    "isNew": 0
                },
                {
                    "id": 29985,
                    "title": "QuadLayers | WooCommerce Checkout Manager PRO",
                    "productVersion": "7.5.2",
                    "isNew": 0
                },
                {
                    "id": 29986,
                    "title": "Octolize | Flexible Shipping PRO WooCommerce",
                    "productVersion": "4.0.0",
                    "isNew": 0
                },
                {
                    "id": 29987,
                    "title": "Nextend Social Login Pro Addon",
                    "productVersion": "3.1.18",
                    "isNew": 0
                },
                {
                    "id": 29988,
                    "title": "Meow Apps | Gallery Pro",
                    "productVersion": "5.3.1",
                    "isNew": 0
                },
                {
                    "id": 29989,
                    "title": "MailPoet 3 Premium",
                    "productVersion": "5.12 (pro) + 5.12.1 (free)",
                    "isNew": 0
                },
                {
                    "id": 29990,
                    "title": "LearnDash Design Upgrade Pro",
                    "productVersion": "2.26",
                    "isNew": 0
                },
                {
                    "id": 29991,
                    "title": "Greenshift | Query and Meta Addon",
                    "productVersion": "5.6.1",
                    "isNew": 0
                },
                {
                    "id": 29992,
                    "title": "GenerateBlocks Pro",
                    "productVersion": "2.1.0",
                    "isNew": 0
                },
                {
                    "id": 29993,
                    "title": "BuddyBoss | Platform",
                    "productVersion": "2.8.51",
                    "isNew": 0
                },
                {
                    "id": 29994,
                    "title": "Bit Integrations Pro",
                    "productVersion": "2.4.12",
                    "isNew": 0
                },
                {
                    "id": 29995,
                    "title": "Bit Form Pro",
                    "productVersion": "2.12.7",
                    "isNew": 0
                },
                {
                    "id": 29996,
                    "title": "Bit Flows Pro",
                    "productVersion": "0.9.1",
                    "isNew": 0
                },
                {
                    "id": 29997,
                    "title": "Asset CleanUp Pro – Performance WordPress Plugin",
                    "productVersion": "1.2.6.8",
                    "isNew": 0
                },
                {
                    "id": 29998,
                    "title": "Paid Member Subscriptions Pro",
                    "productVersion": "1.7.8",
                    "isNew": 0
                },
                {
                    "id": 29999,
                    "title": "Newsletter | Events Manager Integration",
                    "productVersion": "1.5.2",
                    "isNew": 0
                },
                {
                    "id": 30000,
                    "title": "Mainwp | Clone Extension",
                    "productVersion": "5.0.1",
                    "isNew": 0
                },
                {
                    "id": 30001,
                    "title": "Kadence wp | Kadence Blocks",
                    "productVersion": "3.5.7",
                    "isNew": 0
                },
                {
                    "id": 30002,
                    "title": "Givewp | Peer-to-Peer",
                    "productVersion": "2.7.0",
                    "isNew": 0
                },
                {
                    "id": 30003,
                    "title": "GamiPress",
                    "productVersion": "7.3.9",
                    "isNew": 0
                },
                {
                    "id": 30004,
                    "title": "Event Espresso",
                    "productVersion": "5.0.39.p",
                    "isNew": 0
                },
                {
                    "id": 30005,
                    "title": "Crocoblock | JetSmartFilters",
                    "productVersion": "3.6.6",
                    "isNew": 0
                },
                {
                    "id": 30006,
                    "title": "Crocoblock | JetEngine",
                    "productVersion": "3.6.8",
                    "isNew": 0
                },
                {
                    "id": 30007,
                    "title": "Codecanyon | WooCommerce Upload Files",
                    "productVersion": "87.1",
                    "isNew": 0
                },
                {
                    "id": 30008,
                    "title": "Codecanyon | WooCommerce Order Tracker",
                    "productVersion": "2.3.2",
                    "isNew": 0
                },
                {
                    "id": 30009,
                    "title": "WooCommerce Food – Restaurant Menu & Food ordering",
                    "productVersion": "3.4.1",
                    "isNew": 0
                },
                {
                    "id": 30010,
                    "title": "Multistep Product Configurator for WooCommerce",
                    "productVersion": "1.2.8",
                    "isNew": 1
                },
                {
                    "id": 30011,
                    "title": "Codecanyon | FooEvents for WooCommerce",
                    "productVersion": "1.20.4",
                    "isNew": 0
                },
                {
                    "id": 30012,
                    "title": "BEAR – WooCommerce Bulk Editor and Products Manager Professional",
                    "productVersion": "2.1.4.7",
                    "isNew": 0
                },
                {
                    "id": 30013,
                    "title": "WP Eventin – Events Manager & Tickets Selling Plugin for WooCommerce + Addons",
                    "productVersion": "4.0.23",
                    "isNew": 0
                },
                {
                    "id": 30014,
                    "title": "WordPress Real Thumbnail Generator – Efficiently force regenerate thumbnails in bulk (or single)",
                    "productVersion": "2.6.106",
                    "isNew": 0
                },
                {
                    "id": 30015,
                    "title": "Real Physical Media – Physical Media Folders & SEO Rewrites in WordPress",
                    "productVersion": "1.5.106",
                    "isNew": 0
                },
                {
                    "id": 30016,
                    "title": "NEX-Forms – The Ultimate WordPress Form Builder",
                    "productVersion": "8.9.2",
                    "isNew": 0
                },
                {
                    "id": 30017,
                    "title": "MotoPress Hotel Booking – Hotel Booking WordPress Plugin",
                    "productVersion": "5.2.2",
                    "isNew": 0
                },
                {
                    "id": 30018,
                    "title": "JobSearch WP Job Board WordPress Plugin",
                    "productVersion": "2.9.0",
                    "isNew": 0
                },
                {
                    "id": 30019,
                    "title": "Codecanyon | Interlinks Manager",
                    "productVersion": "1.41",
                    "isNew": 0
                },
                {
                    "id": 30020,
                    "title": "HBook – Hotel booking system – WordPress Plugin",
                    "productVersion": "2.1",
                    "isNew": 0
                },
                {
                    "id": 30021,
                    "title": "Digits : WordPress Mobile Phone Number OTP Signup and Login Form",
                    "productVersion": "8.5",
                    "isNew": 0
                },
                {
                    "id": 30022,
                    "title": "Ultimate Addons for Beaver Builder",
                    "productVersion": "1.36.7",
                    "isNew": 0
                },
                {
                    "id": 30023,
                    "title": "Beaver Builder Pro",
                    "productVersion": "2.9.0.4",
                    "isNew": 0
                },
                {
                    "id": 30024,
                    "title": "WooCommerce Multiple Email Recipients",
                    "productVersion": "1.2.13",
                    "isNew": 0
                },
                {
                    "id": 30025,
                    "title": "WPForm Drag & Drop WordPress Form Builder",
                    "productVersion": "1.9.5.2",
                    "isNew": 0
                },
                {
                    "id": 30026,
                    "title": "WooCommerce Smart Coupons",
                    "productVersion": "9.36.0",
                    "isNew": 0
                },
                {
                    "id": 30027,
                    "title": "Restrict Content Pro WooCommerce Member Discounts",
                    "productVersion": "1.0.7",
                    "isNew": 0
                },
                {
                    "id": 30028,
                    "title": "Restrict content pro | Ultimate Member",
                    "productVersion": "1.2.4",
                    "isNew": 0
                },
                {
                    "id": 30029,
                    "title": "WPDeveloper | NotificationX Pro",
                    "productVersion": "3.0.3",
                    "isNew": 0
                },
                {
                    "id": 30030,
                    "title": "WPC Price by Quantity for WooCommerce Premium",
                    "productVersion": "5.2.2",
                    "isNew": 0
                },
                {
                    "id": 30031,
                    "title": "WishList Member X – The Most Trusted Membership Site Plugin",
                    "productVersion": "3.28.0",
                    "isNew": 0
                },
                {
                    "id": 30032,
                    "title": "Ultimate Addons for Contact Form 7 Pro",
                    "productVersion": "1.8.10",
                    "isNew": 0
                },
                {
                    "id": 30033,
                    "title": "TranslatePress Addons",
                    "productVersion": "1.5.9",
                    "isNew": 0
                },
                {
                    "id": 30034,
                    "title": "Seraphinite Accelerator Extended",
                    "productVersion": "2.27.24",
                    "isNew": 0
                },
                {
                    "id": 30035,
                    "title": "Sellkit Pro – Funnel Builder & Checkout Optimizer",
                    "productVersion": "1.9.5",
                    "isNew": 0
                },
                {
                    "id": 30036,
                    "title": "Royal Elementor Addons Pro",
                    "productVersion": "1.5.9",
                    "isNew": 0
                },
                {
                    "id": 30037,
                    "title": "MasterStudy LMS Learning Management System PRO",
                    "productVersion": "4.6.21",
                    "isNew": 0
                },
                {
                    "id": 30038,
                    "title": "JoomUnited | WP Media folder Gallery Addon",
                    "productVersion": "2.6.10",
                    "isNew": 0
                },
                {
                    "id": 30039,
                    "title": "JoomUnited | WP Media Folder Addon",
                    "productVersion": "3.8.2",
                    "isNew": 0
                },
                {
                    "id": 30040,
                    "title": "JoomUnited | WP Media Folder",
                    "productVersion": "6.0.5",
                    "isNew": 0
                },
                {
                    "id": 30041,
                    "title": "Independent Analytics Pro – Google Analytics Alternative for WP",
                    "productVersion": "2.11.1",
                    "isNew": 0
                },
                {
                    "id": 30042,
                    "title": "Gravity Extra | GF Star Rating Field Add-on",
                    "productVersion": "1.2.5",
                    "isNew": 0
                },
                {
                    "id": 30043,
                    "title": "Dokan Pro – eCommerce Marketplace Plugin",
                    "productVersion": "4.0.0",
                    "isNew": 0
                },
                {
                    "id": 30044,
                    "title": "CommerceGurus CommerceKit",
                    "productVersion": "2.4.2",
                    "isNew": 0
                },
                {
                    "id": 30045,
                    "title": "ACF Frontend Admin Premium",
                    "productVersion": "3.28.0",
                    "isNew": 0
                },
                {
                    "id": 30046,
                    "title": "Pixelyoursite | Social Connect",
                    "productVersion": "2.0.1",
                    "isNew": 1
                },
                {
                    "id": 30047,
                    "title": "Pixelyoursite | Microsoft UET Bing",
                    "productVersion": "3.5.4",
                    "isNew": 0
                },
                {
                    "id": 30048,
                    "title": "Newsletter – The Newsletter Plugin For WordPress",
                    "productVersion": "8.8.2",
                    "isNew": 0
                },
                {
                    "id": 30049,
                    "title": "Modula Pro",
                    "productVersion": "2.8.12",
                    "isNew": 0
                },
                {
                    "id": 30050,
                    "title": "Gravity forms | Agile CRM",
                    "productVersion": "1.6.0",
                    "isNew": 0
                },
                {
                    "id": 30051,
                    "title": "Gravity forms | 2Checkout",
                    "productVersion": "2.4.0",
                    "isNew": 0
                },
                {
                    "id": 30052,
                    "title": "Crocoblock | JetWooBuilder",
                    "productVersion": "2.1.20",
                    "isNew": 0
                },
                {
                    "id": 30053,
                    "title": "Slider Revolution – Responsive WordPress Plugin",
                    "productVersion": "6.7.34",
                    "isNew": 0
                },
                {
                    "id": 30054,
                    "title": "MapSVG – All Kinds of Maps and Store Locator for WordPress",
                    "productVersion": "8.5.40",
                    "isNew": 0
                },
                {
                    "id": 30055,
                    "title": "Echo RSS Feed Post Generator Plugin for WordPress",
                    "productVersion": "5.4.8.1",
                    "isNew": 0
                },
                {
                    "id": 30056,
                    "title": "BrainStorm Force | Astra Pro Addon",
                    "productVersion": "4.11.0",
                    "isNew": 0
                },
                {
                    "id": 30057,
                    "title": "Barn2 | WooCommerce Quantity Manager",
                    "productVersion": "2.4.2",
                    "isNew": 0
                },
                {
                    "id": 30058,
                    "title": "Barn2 | Document Library Pro",
                    "productVersion": "2.0.0",
                    "isNew": 0
                },
                {
                    "id": 30059,
                    "title": "WS Form Pro",
                    "productVersion": "1.10.41",
                    "isNew": 0
                },
                {
                    "id": 30060,
                    "title": "Woocommerce | Square",
                    "productVersion": "4.9.1",
                    "isNew": 0
                },
                {
                    "id": 30061,
                    "title": "WooCommerce Product Add-Ons",
                    "productVersion": "7.8.2",
                    "isNew": 0
                },
                {
                    "id": 30062,
                    "title": "WooCommerce Memberships",
                    "productVersion": "1.27.1",
                    "isNew": 0
                },
                {
                    "id": 30063,
                    "title": "Woocommerce | Authorize.net CIM Gateway",
                    "productVersion": "3.10.11",
                    "isNew": 0
                },
                {
                    "id": 30064,
                    "title": "User Registration Pro",
                    "productVersion": "5.2.2",
                    "isNew": 0
                },
                {
                    "id": 30065,
                    "title": "Themify | PTB Submissions Addon",
                    "productVersion": "2.2.0",
                    "isNew": 0
                },
                {
                    "id": 30066,
                    "title": "Themify | Post Type Builder (PTB)",
                    "productVersion": "2.2.3",
                    "isNew": 0
                },
                {
                    "id": 30067,
                    "title": "Themify Builder Pro",
                    "productVersion": "3.7.3",
                    "isNew": 0
                },
                {
                    "id": 30068,
                    "title": "XplodedThemes | XT Woo Quick View Pro",
                    "productVersion": "2.1.6",
                    "isNew": 0
                },
                {
                    "id": 30069,
                    "title": "WPSEMPlugins | WP SEO Structured Data Schema Pro",
                    "productVersion": "1.4.12",
                    "isNew": 0
                },
                {
                    "id": 30070,
                    "title": "WPDeveloper | BetterDocs Pro",
                    "productVersion": "3.5.6",
                    "isNew": 0
                },
                {
                    "id": 30071,
                    "title": "WPC Admin Columns Premium",
                    "productVersion": "2.1.3",
                    "isNew": 0
                },
                {
                    "id": 30072,
                    "title": "Rank Math SEO Pro",
                    "productVersion": "3.0.87",
                    "isNew": 0
                },
                {
                    "id": 30073,
                    "title": "Rank Math SEO",
                    "productVersion": "1.0.244",
                    "isNew": 0
                },
                {
                    "id": 30074,
                    "title": "MotoPress | Hotel Booking Payment Request",
                    "productVersion": "2.0.1",
                    "isNew": 0
                },
                {
                    "id": 30075,
                    "title": "GutenBricks – Next-Level Gutenberg Blocks with Bricks Builder",
                    "productVersion": "1.1.19.7",
                    "isNew": 0
                },
                {
                    "id": 30076,
                    "title": "Dynamic Content for Elementor",
                    "productVersion": "3.3.5",
                    "isNew": 0
                },
                {
                    "id": 30077,
                    "title": "Newsletter | Reports and Retargeting",
                    "productVersion": "4.6.8",
                    "isNew": 0
                },
                {
                    "id": 30078,
                    "title": "Newsletter | Ninja Forms",
                    "productVersion": "1.2.6",
                    "isNew": 0
                },
                {
                    "id": 30079,
                    "title": "Newsletter | Gravity Forms",
                    "productVersion": "1.1.9",
                    "isNew": 0
                },
                {
                    "id": 30080,
                    "title": "Newsletter | Forminator",
                    "productVersion": "1.1.6",
                    "isNew": 0
                },
                {
                    "id": 30081,
                    "title": "Automated Newsletters",
                    "productVersion": "4.8.2",
                    "isNew": 0
                },
                {
                    "id": 30082,
                    "title": "Modern events calendar | Advanced Reports",
                    "productVersion": "1.2.0",
                    "isNew": 0
                },
                {
                    "id": 30083,
                    "title": "Modern events calendar | Advanced Map",
                    "productVersion": "1.1.0",
                    "isNew": 0
                },
                {
                    "id": 30084,
                    "title": "Modern Events Calendar",
                    "productVersion": "7.22.0",
                    "isNew": 0
                },
                {
                    "id": 30085,
                    "title": "Meta box | AIO",
                    "productVersion": "2.2.0",
                    "isNew": 0
                },
                {
                    "id": 30086,
                    "title": "Learndash | Elementor",
                    "productVersion": "1.0.10",
                    "isNew": 0
                },
                {
                    "id": 30087,
                    "title": "Gravity perks | Populate Anything",
                    "productVersion": "2.1.31",
                    "isNew": 0
                },
                {
                    "id": 30088,
                    "title": "Gravity perks | Pay Per Word",
                    "productVersion": "1.2.4",
                    "isNew": 0
                },
                {
                    "id": 30089,
                    "title": "Gravity perks | Inventory",
                    "productVersion": "1.0.2",
                    "isNew": 0
                },
                {
                    "id": 30090,
                    "title": "Gravity perks | Gravity Connect Google Sheets",
                    "productVersion": "1.3.25",
                    "isNew": 0
                },
                {
                    "id": 30091,
                    "title": "Gravity perks | Copy Cat",
                    "productVersion": "1.4.92",
                    "isNew": 0
                },
                {
                    "id": 30092,
                    "title": "Gravity perks | Auto List Field",
                    "productVersion": "1.0.5",
                    "isNew": 0
                },
                {
                    "id": 30093,
                    "title": "GiveWP – Give Donation Plugin",
                    "productVersion": "4.2.1",
                    "isNew": 0
                },
                {
                    "id": 30094,
                    "title": "Directorist | Search Alert",
                    "productVersion": "1.0.2",
                    "isNew": 1
                },
                {
                    "id": 30095,
                    "title": "Crocoblock | JetTricks",
                    "productVersion": "1.5.3",
                    "isNew": 0
                },
                {
                    "id": 30096,
                    "title": "Mailster – Email Newsletter Plugin for WordPress + Templates",
                    "productVersion": "4.1.12",
                    "isNew": 0
                },
                {
                    "id": 30097,
                    "title": "Bookly Pro – Appointment Booking and Scheduling Software System",
                    "productVersion": "8.9",
                    "isNew": 0
                },
                {
                    "id": 30098,
                    "title": "Codecanyon | Bookly Customer Information",
                    "productVersion": "3.7",
                    "isNew": 0
                },
                {
                    "id": 30099,
                    "title": "Codecanyon | Bookly Customer Groups",
                    "productVersion": "4.0",
                    "isNew": 0
                },
                {
                    "id": 30100,
                    "title": "Codecanyon | Bookly Custom Fields",
                    "productVersion": "4.8",
                    "isNew": 0
                },
                {
                    "id": 30101,
                    "title": "Codecanyon | Bookly Cart",
                    "productVersion": "3.3",
                    "isNew": 0
                },
                {
                    "id": 30102,
                    "title": "Advanced Custom Fields PRO / ACF",
                    "productVersion": "6.4.1",
                    "isNew": 0
                }
            ]
        },
        {
            "name": "May 8th, 2025",
            "rows": [
                {
                    "id": 29805,
                    "title": "Printx – Printing Services WordPress Theme",
                    "productVersion": "1.0.6",
                    "isNew": 1
                },
                {
                    "id": 29806,
                    "title": "Elementra – 100% Elementor WordPress Theme",
                    "productVersion": "1.0.4",
                    "isNew": 1
                },
                {
                    "id": 29807,
                    "title": "Avas – Elementor WordPress Theme",
                    "productVersion": "6.8",
                    "isNew": 0
                },
                {
                    "id": 29808,
                    "title": "Shopkeeper – Premium WordPress Theme for eCommerce",
                    "productVersion": "7.4",
                    "isNew": 0
                },
                {
                    "id": 29809,
                    "title": "Savoy – Minimalist AJAX WooCommerce Theme",
                    "productVersion": "3.0.5",
                    "isNew": 0
                },
                {
                    "id": 29810,
                    "title": "Printpress – Book Publishing WordPress Theme",
                    "productVersion": "1.2.1",
                    "isNew": 0
                },
                {
                    "id": 29811,
                    "title": "Partdo – Auto Parts and Tools Shop WooCommerce Theme",
                    "productVersion": "1.3.6",
                    "isNew": 0
                },
                {
                    "id": 29812,
                    "title": "Machic – Electronics Store WooCommerce Theme",
                    "productVersion": "1.5.2",
                    "isNew": 0
                },
                {
                    "id": 29813,
                    "title": "Ecomus – Multipurpose WooCommerce Theme",
                    "productVersion": "1.9.0",
                    "isNew": 0
                },
                {
                    "id": 29814,
                    "title": "Blonwe – Multipurpose WooCommerce Theme",
                    "productVersion": "1.2.4",
                    "isNew": 0
                },
                {
                    "id": 29815,
                    "title": "Asting – Charity & Donation WordPress Theme",
                    "productVersion": "1.2.5",
                    "isNew": 0
                },
                {
                    "id": 29816,
                    "title": "Masterstudy – Education WordPress Theme",
                    "productVersion": "4.8.102",
                    "isNew": 0
                },
                {
                    "id": 29817,
                    "title": "Kidearn – Kindergarten & Baby Care WordPress Theme",
                    "productVersion": "1.1.0",
                    "isNew": 1
                },
                {
                    "id": 29818,
                    "title": "Listbnb – Classified Ads WordPress Theme",
                    "productVersion": "1.0.5",
                    "isNew": 1
                },
                {
                    "id": 29819,
                    "title": "Motors – Car Dealer, Rental & Listing WordPress theme",
                    "productVersion": "5.6.67",
                    "isNew": 0
                },
                {
                    "id": 29820,
                    "title": "Rhye – AJAX Portfolio WordPress Theme",
                    "productVersion": "4.0.4",
                    "isNew": 0
                },
                {
                    "id": 29821,
                    "title": "Yena – Beauty & Cosmetic WooCommerce Theme",
                    "productVersion": "1.2.8",
                    "isNew": 0
                },
                {
                    "id": 29822,
                    "title": "Businext – Business, Finance & Crypto Currency WordPress Theme",
                    "productVersion": "2.3.2",
                    "isNew": 1
                },
                {
                    "id": 29823,
                    "title": "Harry – Creative Agency & Portfolio WordPress Theme + RTL",
                    "productVersion": "1.2.7",
                    "isNew": 1
                },
                {
                    "id": 29824,
                    "title": "Clotya – Fashion Store Ecommerce WordPress Theme",
                    "productVersion": "1.4.0",
                    "isNew": 0
                },
                {
                    "id": 29825,
                    "title": "Quitox – Software & IT Solutions WordPress Theme",
                    "productVersion": "1.0.4",
                    "isNew": 1
                },
                {
                    "id": 29826,
                    "title": "DK – For Photography Creative Portfolio",
                    "productVersion": "3.2.1",
                    "isNew": 1
                },
                {
                    "id": 29827,
                    "title": "Darkyn – Creative Agency WordPress Theme",
                    "productVersion": "1.0",
                    "isNew": 1
                },
                {
                    "id": 29828,
                    "title": "Restfolio – Elementor Restaurants & Cafes WordPress Theme",
                    "productVersion": "1.0.2",
                    "isNew": 1
                },
                {
                    "id": 29829,
                    "title": "Kleaso – Cleaning Services WordPress Theme",
                    "productVersion": "1.0.6",
                    "isNew": 1
                },
                {
                    "id": 29830,
                    "title": "Cleener – Cleaning Services WordPress Theme",
                    "productVersion": "1.0.6",
                    "isNew": 0
                },
                {
                    "id": 29831,
                    "title": "MinimogWP – The High Converting eCommerce WordPress Theme",
                    "productVersion": "3.8.6",
                    "isNew": 0
                },
                {
                    "id": 29832,
                    "title": "GreenMart – Organic & Food WooCommerce WordPress Theme",
                    "productVersion": "4.2.2",
                    "isNew": 0
                },
                {
                    "id": 29833,
                    "title": "Goya – Modern WooCommerce Theme",
                    "productVersion": "1.0.8.29",
                    "isNew": 0
                },
                {
                    "id": 29834,
                    "title": "Poorex – Nonprofit Charity WordPress Theme",
                    "productVersion": "1.0.4",
                    "isNew": 1
                },
                {
                    "id": 29835,
                    "title": "Green Planet – Ecology & Environment WordPress Theme",
                    "productVersion": "1.2.5",
                    "isNew": 0
                },
                {
                    "id": 29836,
                    "title": "Charius – Nonprofit Charity WordPress Theme",
                    "productVersion": "1.0.7",
                    "isNew": 0
                },
                {
                    "id": 29837,
                    "title": "Event Management WordPress Theme",
                    "productVersion": "1.9.7",
                    "isNew": 0
                },
                {
                    "id": 29838,
                    "title": "Skole – Children Kindergarten WordPress Theme",
                    "productVersion": "18",
                    "isNew": 0
                },
                {
                    "id": 29839,
                    "title": "Editoria – Newspaper & Magazine WordPress Theme",
                    "productVersion": "1.2.0",
                    "isNew": 0
                },
                {
                    "id": 29840,
                    "title": "Digiqole – News Magazine WordPress Theme",
                    "productVersion": "2.2.5",
                    "isNew": 0
                },
                {
                    "id": 29841,
                    "title": "Softec – Software & Technology WordPress Theme + RTL",
                    "productVersion": "1.1.8",
                    "isNew": 1
                },
                {
                    "id": 29842,
                    "title": "Seomy – Digital Marketing & SEO Agency WordPress Theme",
                    "productVersion": "1.1.6",
                    "isNew": 1
                },
                {
                    "id": 29843,
                    "title": "Execor – Accounting and Management Consulting WordPress Theme",
                    "productVersion": "2",
                    "isNew": 1
                },
                {
                    "id": 29844,
                    "title": "Consultar – Consulting Business WordPress Theme",
                    "productVersion": "1.0.7",
                    "isNew": 0
                },
                {
                    "id": 29845,
                    "title": "StreamTube – Video WordPress Theme",
                    "productVersion": "4.13",
                    "isNew": 0
                },
                {
                    "id": 29846,
                    "title": "Insurai – Insurance Company WordPress Theme",
                    "productVersion": "1.1.2",
                    "isNew": 1
                },
                {
                    "id": 29847,
                    "title": "EagleElite  – Sports Club WordPress Theme",
                    "productVersion": "4",
                    "isNew": 1
                },
                {
                    "id": 29848,
                    "title": "Biddut – Electricity Services WordPress Theme",
                    "productVersion": "1.0.4",
                    "isNew": 1
                },
                {
                    "id": 29849,
                    "title": "TheGem – Creative Multi-Purpose & WooCommerce WordPress Theme",
                    "productVersion": "5.10.3.1",
                    "isNew": 0
                },
                {
                    "id": 29850,
                    "title": "Sway – Multi-Purpose WordPress Theme",
                    "productVersion": "4.1",
                    "isNew": 0
                },
                {
                    "id": 29851,
                    "title": "Avada | Website Builder For WordPress & WooCommerce",
                    "productVersion": "7.12.1",
                    "isNew": 0
                },
                {
                    "id": 29852,
                    "title": "Sports Store – WooCommerce WordPress Theme",
                    "productVersion": "1.2.8",
                    "isNew": 0
                },
                {
                    "id": 29853,
                    "title": "Gon | Responsive Multi-Purpose WordPress Theme",
                    "productVersion": "2.4.4",
                    "isNew": 0
                },
                {
                    "id": 29854,
                    "title": "Custom Made | Jewelry Manufacturer and Store WordPress Theme",
                    "productVersion": "1.1.18",
                    "isNew": 0
                },
                {
                    "id": 29855,
                    "title": "Bhume – Real Estate WordPress Theme",
                    "productVersion": "1.0.7",
                    "isNew": 1
                },
                {
                    "id": 29856,
                    "title": "Blessing | Responsive WordPress Theme for Church Websites",
                    "productVersion": "1.7.9",
                    "isNew": 0
                },
                {
                    "id": 29857,
                    "title": "SmilePure – Dental & Medical Care WordPress Theme",
                    "productVersion": "1.7.2",
                    "isNew": 0
                },
                {
                    "id": 29858,
                    "title": "Bambini – Pre-School and Kindergarten Theme",
                    "productVersion": "1.2.4",
                    "isNew": 0
                },
                {
                    "id": 29859,
                    "title": "Careerfy – Job Board WordPress Theme",
                    "productVersion": "9.9.8",
                    "isNew": 0
                },
                {
                    "id": 29860,
                    "title": "Classiads – Classified Ads WordPress Theme",
                    "productVersion": "6.1.10",
                    "isNew": 0
                },
                {
                    "id": 29861,
                    "title": "PenNews – Multi-Purpose AMP WordPress Theme",
                    "productVersion": "6.7.1",
                    "isNew": 0
                },
                {
                    "id": 29862,
                    "title": "Newsy – Viral News & Magazine WordPress Theme",
                    "productVersion": "2.6.0",
                    "isNew": 0
                },
                {
                    "id": 29863,
                    "title": "Theratio – Architecture & Interior Design Elementor WordPress Theme",
                    "productVersion": "1.3.8.3",
                    "isNew": 0
                },
                {
                    "id": 29864,
                    "title": "Ishpat – Construction WordPress Theme",
                    "productVersion": "1.0.5",
                    "isNew": 1
                },
                {
                    "id": 29865,
                    "title": "Interno – Architecture And Interior WordPress Theme",
                    "productVersion": "1.0.9",
                    "isNew": 1
                },
                {
                    "id": 29866,
                    "title": "Quiety – Software & IT Solutions WordPress Theme",
                    "productVersion": "6.2.0",
                    "isNew": 0
                },
                {
                    "id": 29867,
                    "title": "Onum – SEO & Marketing Elementor WordPress Theme",
                    "productVersion": "1.2.16.13",
                    "isNew": 0
                },
                {
                    "id": 29868,
                    "title": "Finanix – Business WordPress Theme",
                    "productVersion": "1.1.1",
                    "isNew": 0
                },
                {
                    "id": 29869,
                    "title": "Creative Lab – Studio Portfolio & Design Agency WordPress Theme",
                    "productVersion": "1.2.7",
                    "isNew": 0
                },
                {
                    "id": 29870,
                    "title": "Consulting – Business Finance WordPress Theme",
                    "productVersion": "6.6.8",
                    "isNew": 0
                },
                {
                    "id": 29871,
                    "title": "Auto – Car Mechanics and Auto Repair WordPress Theme",
                    "productVersion": "2.2.2",
                    "isNew": 0
                },
                {
                    "id": 29872,
                    "title": "Pur – Wellness & Spa WordPress Theme",
                    "productVersion": "23",
                    "isNew": 0
                },
                {
                    "id": 29873,
                    "title": "Iva – Beauty Cosmetics Shop WordPress Theme",
                    "productVersion": "3.4",
                    "isNew": 0
                },
                {
                    "id": 29874,
                    "title": "SpoClub – Sports Club WordPress Theme",
                    "productVersion": "1.1.3",
                    "isNew": 0
                },
                {
                    "id": 29875,
                    "title": "Petcafy – Pet Care & Veterinary WordPress Theme",
                    "productVersion": "1.0.0",
                    "isNew": 1
                },
                {
                    "id": 29876,
                    "title": "Logitic – Transportation & Logistics WordPress Theme",
                    "productVersion": "1.0.9",
                    "isNew": 0
                },
                {
                    "id": 29877,
                    "title": "Clany | Cleaning Services WordPress Theme",
                    "productVersion": "21",
                    "isNew": 1
                },
                {
                    "id": 29878,
                    "title": "Vault – Multi-Purpose Elementor WordPress Theme",
                    "productVersion": "3.1.1",
                    "isNew": 0
                },
                {
                    "id": 29879,
                    "title": "Outgrid – Multi-Purpose Elementor WordPress Theme",
                    "productVersion": "2.1.1",
                    "isNew": 0
                },
                {
                    "id": 29880,
                    "title": "Optima – Multipurpose WordPress Theme",
                    "productVersion": "1.8.0",
                    "isNew": 0
                },
                {
                    "id": 29881,
                    "title": "LeadEngine – Multi-Purpose WordPress Theme with Page Builder",
                    "productVersion": "5.2",
                    "isNew": 0
                },
                {
                    "id": 29882,
                    "title": "Donakion – Fundraising & Charity Foundation WordPress Theme + RTL",
                    "productVersion": "1.2.1",
                    "isNew": 1
                },
                {
                    "id": 29883,
                    "title": "Educavo – Education WordPress Theme",
                    "productVersion": "3.2.7",
                    "isNew": 0
                },
                {
                    "id": 29884,
                    "title": "Themeforest | Educash WordPress LMS theme",
                    "productVersion": "1.0.4",
                    "isNew": 1
                },
                {
                    "id": 29885,
                    "title": "Findup – Directory & Listing WordPress Theme + RTL",
                    "productVersion": "1.1.4",
                    "isNew": 1
                },
                {
                    "id": 29886,
                    "title": "Macchina – Auto Repair WordPress",
                    "productVersion": "14",
                    "isNew": 0
                },
                {
                    "id": 29887,
                    "title": "Carepair – Car Service & Auto Repair WordPress Theme",
                    "productVersion": "1.0.0",
                    "isNew": 1
                },
                {
                    "id": 29888,
                    "title": "Reobiz – Consulting Business WordPress Theme",
                    "productVersion": "5.2.5",
                    "isNew": 0
                },
                {
                    "id": 29889,
                    "title": "Microx – Personal Portfolio WordPress Theme + RTL",
                    "productVersion": "1.0.8",
                    "isNew": 1
                },
                {
                    "id": 29890,
                    "title": "Civi – Job Board, Freelance Marketplace WordPress Theme",
                    "productVersion": "2.1.6",
                    "isNew": 0
                },
                {
                    "id": 29891,
                    "title": "Binifox – Digital Agency Services WordPress Theme + RTL",
                    "productVersion": "1.1.5",
                    "isNew": 1
                },
                {
                    "id": 29892,
                    "title": "Asli – AJAX Portfolio Elementor WordPress Theme",
                    "productVersion": "1.8.5",
                    "isNew": 1
                },
                {
                    "id": 29893,
                    "title": "Affirm – Marketing & Digital Agency WordPress Theme",
                    "productVersion": "4.1.1",
                    "isNew": 0
                },
                {
                    "id": 29894,
                    "title": "X-Gym – Fitness & Sports WordPress Theme",
                    "productVersion": "1.9",
                    "isNew": 0
                },
                {
                    "id": 29895,
                    "title": "Shoptimizer – The Fastest WooCommerce Theme",
                    "productVersion": "2.8.11",
                    "isNew": 0
                },
                {
                    "id": 29896,
                    "title": "BuddyBoss Theme",
                    "productVersion": "2.8.41",
                    "isNew": 0
                },
                {
                    "id": 29897,
                    "title": "Astra WordPress Theme",
                    "productVersion": "4.11.0",
                    "isNew": 0
                },
                {
                    "id": 29898,
                    "title": "Themify Ultra – The most Powerful & Flexible WordPress Theme",
                    "productVersion": "7.9.5",
                    "isNew": 0
                },
                {
                    "id": 29899,
                    "title": "Themify Shoppe – A Multi-Purpose WooCommerce Theme",
                    "productVersion": "7.9.1",
                    "isNew": 0
                },
                {
                    "id": 29900,
                    "title": "Themify Parallax – Animated Theme for Business and Portfolios",
                    "productVersion": "7.8.9",
                    "isNew": 0
                },
                {
                    "id": 29901,
                    "title": "Themify Music – Responsive Theme for Artists & Events",
                    "productVersion": "7.8.7",
                    "isNew": 0
                },
                {
                    "id": 29902,
                    "title": "Themify Fullpane – Responsive & Retina Ready WordPress Theme",
                    "productVersion": "7.8.7",
                    "isNew": 0
                },
                {
                    "id": 29903,
                    "title": "Archi – Interior Design WordPress Theme",
                    "productVersion": "5.0.5",
                    "isNew": 0
                },
                {
                    "id": 29904,
                    "title": "Rise – Business & Consulting WordPress Theme",
                    "productVersion": "4.1.1",
                    "isNew": 0
                },
                {
                    "id": 29905,
                    "title": "Woocommerce | AutomateWoo Refer A Friend",
                    "productVersion": "2.8.6",
                    "isNew": 0
                },
                {
                    "id": 29906,
                    "title": "WPFunnels Pro – Drag & Drop Sales Funnel Builder for WordPress",
                    "productVersion": "2.5.9",
                    "isNew": 0
                },
                {
                    "id": 29907,
                    "title": "WPC Smart Quick View for WooCommerce Premium",
                    "productVersion": "4.1.7",
                    "isNew": 0
                },
                {
                    "id": 29908,
                    "title": "WPC Product Options for WooCommerce Premium",
                    "productVersion": "1.8.1",
                    "isNew": 0
                },
                {
                    "id": 29909,
                    "title": "Rank Math SEO Pro",
                    "productVersion": "3.0.86",
                    "isNew": 0
                },
                {
                    "id": 29910,
                    "title": "GutenBricks – Next-Level Gutenberg Blocks with Bricks Builder",
                    "productVersion": "1.1.19.4",
                    "isNew": 0
                },
                {
                    "id": 29911,
                    "title": "Cost Calculator Builder PRO",
                    "productVersion": "3.2.27",
                    "isNew": 0
                },
                {
                    "id": 29912,
                    "title": "Blocksy Companion Premium",
                    "productVersion": "2.0.98",
                    "isNew": 0
                },
                {
                    "id": 29913,
                    "title": "PixelYourSite PRO",
                    "productVersion": "11.3.0.3",
                    "isNew": 0
                },
                {
                    "id": 29914,
                    "title": "Kadence wp | Kadence Blocks Pro",
                    "productVersion": "2.7.5",
                    "isNew": 0
                },
                {
                    "id": 29915,
                    "title": "Kadence wp | Cloud",
                    "productVersion": "1.1.1",
                    "isNew": 0
                },
                {
                    "id": 29916,
                    "title": "Gravity forms | Square",
                    "productVersion": "2.4.0",
                    "isNew": 0
                },
                {
                    "id": 29917,
                    "title": "Givewp | PDF Receipts",
                    "productVersion": "3.2.2",
                    "isNew": 0
                },
                {
                    "id": 29918,
                    "title": "Givewp | Mollie Gateway",
                    "productVersion": "2.0.1",
                    "isNew": 0
                },
                {
                    "id": 29919,
                    "title": "Givewp | Currency Switcher",
                    "productVersion": "2.2.0",
                    "isNew": 0
                },
                {
                    "id": 29920,
                    "title": "Givewp | Authorize.net Gateway",
                    "productVersion": "3.0.2",
                    "isNew": 0
                },
                {
                    "id": 29921,
                    "title": "GeoDirectory List Manager",
                    "productVersion": "2.3.7",
                    "isNew": 0
                },
                {
                    "id": 29922,
                    "title": "Codecanyon | WordPress Automatic Plugin",
                    "productVersion": "3.113.0",
                    "isNew": 0
                },
                {
                    "id": 29923,
                    "title": "Real3D FlipBook WordPress Plugin",
                    "productVersion": "4.9.5",
                    "isNew": 0
                },
                {
                    "id": 29924,
                    "title": "Media Grid – WordPress Responsive Portfolio",
                    "productVersion": "8.3.0",
                    "isNew": 0
                },
                {
                    "id": 29925,
                    "title": "Mailster – Email Newsletter Plugin for WordPress + Templates",
                    "productVersion": "4.1.11",
                    "isNew": 0
                },
                {
                    "id": 29926,
                    "title": "Codecanyon | Bookly Mollie",
                    "productVersion": "3.6",
                    "isNew": 1
                },
                {
                    "id": 29927,
                    "title": "BrainStorm Force | Convert Pro",
                    "productVersion": "1.8.3",
                    "isNew": 0
                },
                {
                    "id": 29928,
                    "title": "BrainStorm Force | WP Schema Pro",
                    "productVersion": "2.8.3",
                    "isNew": 0
                },
                {
                    "id": 29929,
                    "title": "WooCommerce Dynamic Pricing and Discounts Premium",
                    "productVersion": "4.20.0",
                    "isNew": 0
                },
                {
                    "id": 29930,
                    "title": "WooCommerce Account Funds Premium",
                    "productVersion": "2.6.0",
                    "isNew": 0
                },
                {
                    "id": 29931,
                    "title": "s2Member Pro – A Powerful Membership Plugin for WordPress",
                    "productVersion": "250502",
                    "isNew": 0
                },
                {
                    "id": 29932,
                    "title": "Next Bricks / Brickscore – Smart Elements and Features plugin for Bricks",
                    "productVersion": "1.10.6",
                    "isNew": 0
                },
                {
                    "id": 29933,
                    "title": "Meow Apps | AI Engine",
                    "productVersion": "2.8.0",
                    "isNew": 0
                },
                {
                    "id": 29934,
                    "title": "DiviNext | Divi Essential",
                    "productVersion": "4.10.0",
                    "isNew": 0
                },
                {
                    "id": 29935,
                    "title": "BuddyBoss Platform Pro",
                    "productVersion": "2.7.10",
                    "isNew": 0
                },
                {
                    "id": 29936,
                    "title": "Kadence wp | Kadence Theme Pro Addon",
                    "productVersion": "1.1.10",
                    "isNew": 0
                },
                {
                    "id": 29937,
                    "title": "Salon Booking WordPress Plugin",
                    "productVersion": "10.16",
                    "isNew": 0
                },
                {
                    "id": 29938,
                    "title": "Embed Any Document Plus – WordPress Plugin",
                    "productVersion": "2.8.6",
                    "isNew": 0
                },
                {
                    "id": 29939,
                    "title": "Analytify Pro",
                    "productVersion": "6.1.0",
                    "isNew": 0
                },
                {
                    "id": 29940,
                    "title": "WPLab | WP-Lister Pro for eBay",
                    "productVersion": "3.8",
                    "isNew": 0
                },
                {
                    "id": 29941,
                    "title": "PowerPack for Beaver Builder",
                    "productVersion": "2.40.1.5",
                    "isNew": 0
                },
                {
                    "id": 29942,
                    "title": "Meow Apps | Media Cleaner Pro",
                    "productVersion": "6.8.9",
                    "isNew": 0
                },
                {
                    "id": 29943,
                    "title": "Meow Apps | Database Cleaner & Optimizer Pro",
                    "productVersion": "1.2.2",
                    "isNew": 0
                },
                {
                    "id": 29944,
                    "title": "Masteriyo PRO – LMS for WordPress – Create & Sell Online Courses",
                    "productVersion": "2.18.3",
                    "isNew": 0
                },
                {
                    "id": 29945,
                    "title": "Happy Elementor Addons Pro",
                    "productVersion": "2.18.0 (pro) + 3.16.4 (free)",
                    "isNew": 0
                },
                {
                    "id": 29946,
                    "title": "Elementor Pro – WordPress Page Builder + Translation + Kit Library",
                    "productVersion": "3.28.4 (pro) + 3.28.4 (free)",
                    "isNew": 0
                },
                {
                    "id": 29947,
                    "title": "Depicter – WordPress Slider Plugin",
                    "productVersion": "3.6.2",
                    "isNew": 0
                },
                {
                    "id": 29948,
                    "title": "Admin and Site Enhancements (ASE) Pro",
                    "productVersion": "7.8.9",
                    "isNew": 0
                },
                {
                    "id": 29949,
                    "title": "Pixelyoursite | ConsentMagic Pro",
                    "productVersion": "4.2.2",
                    "isNew": 0
                },
                {
                    "id": 29950,
                    "title": "EventON Ticket Variations & Options",
                    "productVersion": "1.1.10",
                    "isNew": 0
                },
                {
                    "id": 29951,
                    "title": "Eventon | PDFer",
                    "productVersion": "1.0",
                    "isNew": 0
                },
                {
                    "id": 29952,
                    "title": "Eventon | Event Slider",
                    "productVersion": "2.1.3",
                    "isNew": 0
                },
                {
                    "id": 29953,
                    "title": "Crocoblock | JetElements",
                    "productVersion": "2.7.6",
                    "isNew": 0
                }
            ]
        }
    ]
};

    