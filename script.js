/* ============================================================
   THE INDIAN NUMISMATIC — Global JavaScript
   ============================================================ */

'use strict';

// ── Sample coin data (replace with your real data) ──────────
const COINS_DB = [
  {
    id: "IN-001",
    name: "Proof Coin Set",
    ruler: "Republic of Austria",
    kingdom: "Republic of Austria",
    era: "World",
    period: "1978 A.D.",
    mint: "Vienna Mint",
    grade: "Proof",
    denomination: "Mixed Set",
    metal: "Mixed",
    rarity: "Uncommon",
    country: "Austria",
    description: "Complete proof coin set of Austria from 1978, including Schilling and Groschen denominations. All coins exhibit mirror-like fields and sharp frosted reliefs characteristic of proof striking. Features national symbols including the edelweiss, Lipizzaner horse, and Austrian eagle.",
    obverse: "Various national symbols: edelweiss, horse, eagle, shields",
    reverse: "Denomination and date within wreaths and shields",
    weight: "Various",
    diameter: "Various",
    tags: ["Austria", "Proof Set", "Modern", "World"],
    image: "images/406.jpg",
    images: ["images/406.jpg", "images/406 (2).jpg"],
    featured: true,
  },
  {
    id: "IN-002",
    name: "20 Cash",
    ruler: "Krishna Raja Wodeyar",
    kingdom: "Princely State of Mysore",
    era: "Princely States",
    period: "1811–1833 A.D.",
    mint: "Mysore Mint",
    grade: "Very Fine",
    denomination: "20 Cash",
    metal: "Copper",
    rarity: "Scarce",
    country: "India",
    description: "Krishna Raja Wodeyar issued copper coin featuring a decorated elephant facing left. A classic example of Mysore princely state coinage with the distinctive elephant motif that symbolised royal power.",
    obverse: "Decorated elephant facing left",
    reverse: "Kannada and Persian legends",
    weight: "",
    diameter: "",
    tags: ["Mysore", "Krishna Raja Wodeyar", "Copper", "Cash", "Elephant"],
    image: "images/408.jpg",
    images: ["images/408.jpg"],
    featured: false,
  },
  {
    id: "IN-003",
    name: "25 Cash",
    ruler: "Dewan Purniah",
    kingdom: "Princely State of Mysore",
    era: "Princely States",
    period: "c. 1810–1830 A.D.",
    mint: "Mysore Mint",
    grade: "Fine",
    denomination: "25 Cash",
    metal: "Copper",
    rarity: "Scarce",
    country: "India",
    description: "Dewan Purniah issued copper coin depicting the Gardula (mythical lion) motif. Legend 'Shree Chamundi' in Kannada script. A notable example of Mysore administrative coinage during the regency period.",
    obverse: "Gardula (mythical lion)",
    reverse: "Legend 'Shree Chamundi' in Kannada",
    weight: "",
    diameter: "",
    tags: ["Mysore", "Dewan Purniah", "Copper", "Cash", "Gardula"],
    image: "images/409.jpg",
    images: ["images/409.jpg"],
    featured: false,
  },
  {
    id: "IN-004",
    name: "25 Cash",
    ruler: "Dewan Purniah",
    kingdom: "Princely State of Mysore",
    era: "Princely States",
    period: "c. 1810–1830 A.D.",
    mint: "Mysore Mint",
    grade: "Fine+",
    denomination: "25 Cash",
    metal: "Copper",
    rarity: "Scarce",
    country: "India",
    description: "Dewan Purniah issued copper coin with Gardula (mythical lion) design. Features the legend 'Shree Chamundi' in Kannada script on reverse. Well-preserved example of Mysore regency coinage.",
    obverse: "Gardula (mythical lion)",
    reverse: "Legend 'Shree Chamundi' in Kannada",
    weight: "",
    diameter: "",
    tags: ["Mysore", "Dewan Purniah", "Copper", "Cash", "Gardula"],
    image: "images/410.jpg",
    images: ["images/410.jpg"],
    featured: false,
  },
  {
    id: "IN-005",
    name: "One Rupee",
    ruler: "George V",
    kingdom: "British India",
    era: "Colonial Era",
    period: "1918 A.D.",
    mint: "Bombay Mint",
    grade: "Gem Uncirculated",
    denomination: "1 Rupee",
    metal: "Silver",
    rarity: "Uncommon",
    country: "India",
    description: "George V silver rupee from 1918 in Gem grade. Composed of .917 fine silver, weighing 11.66 grams. Features the classic floral wreath reverse design considered among the most elegant of British India issues.",
    obverse: "George V crowned portrait left",
    reverse: "ONE RUPEE INDIA 1918 within floral wreath",
    weight: "11.66g",
    diameter: "30.5mm",
    tags: ["British India", "George V", "Silver", "Rupee", "1918"],
    image: "images/411.jpg",
    images: ["images/411.jpg"],
    featured: true,
  },
  {
    id: "IN-006",
    name: "One Rupee",
    ruler: "George V",
    kingdom: "British India",
    era: "Colonial Era",
    period: "1919 A.D.",
    mint: "Bombay Mint",
    grade: "Gem Uncirculated",
    denomination: "1 Rupee",
    metal: "Silver",
    rarity: "Uncommon",
    country: "India",
    description: "George V silver rupee from 1919 in Gem grade. Struck in .917 fine silver, 11.66 grams. The floral wreath reverse is among the most elegant of British India coin designs, with exceptional lustre on this specimen.",
    obverse: "George V crowned portrait left",
    reverse: "ONE RUPEE INDIA 1919 within floral wreath",
    weight: "11.66g",
    diameter: "30.5mm",
    tags: ["British India", "George V", "Silver", "Rupee", "1919"],
    image: "images/412.jpg",
    images: ["images/412.jpg"],
    featured: true,
  },
  {
    id: "IN-007",
    name: "One Rupee",
    ruler: "George V",
    kingdom: "British India",
    era: "Colonial Era",
    period: "1920 A.D.",
    mint: "Bombay Mint",
    grade: "Gem Uncirculated",
    denomination: "1 Rupee",
    metal: "Silver",
    rarity: "Uncommon",
    country: "India",
    description: "George V silver rupee from 1920 in Gem grade. .917 fine silver, 11.66 grams. The last years of the full silver rupee before debasement, making these Gem examples particularly desirable.",
    obverse: "George V crowned portrait left",
    reverse: "ONE RUPEE INDIA 1920 within floral wreath",
    weight: "11.66g",
    diameter: "30.5mm",
    tags: ["British India", "George V", "Silver", "Rupee", "1920"],
    image: "images/413.jpg",
    images: ["images/413.jpg"],
    featured: true,
  },
  {
    id: "IN-008",
    name: "Copper Cash",
    ruler: "Krishna Raja Wodeyar",
    kingdom: "Kingdom of Mysore",
    era: "South Indian Kingdoms",
    period: "19th Century A.D.",
    mint: "Mysore Mint",
    grade: "Fine",
    denomination: "Cash",
    metal: "Copper",
    rarity: "Rare",
    country: "India",
    description: "Seated Lord Ganesh ji type copper coin from the Kingdom of Mysore. Features a distinctive chequered reverse pattern. A collector's specimen of South Indian temple coinage with religious iconography.",
    obverse: "Seated Lord Ganesh ji",
    reverse: "Chequered pattern",
    weight: "",
    diameter: "",
    tags: ["Mysore", "Ganesh", "Copper", "Cash", "Temple"],
    image: "images/414.jpg",
    images: ["images/414.jpg"],
    featured: false,
  },
  {
    id: "IN-009",
    name: "¼ Cash",
    ruler: "Dewan Purniah",
    kingdom: "Princely State of Mysore",
    era: "Princely States",
    period: "c. 1810–1830 A.D.",
    mint: "Mysore Mint",
    grade: "Fine",
    denomination: "¼ Cash",
    metal: "Copper",
    rarity: "Scarce",
    country: "India",
    description: "Dewan Purniah issued fractional copper quarter Cash coin. Features the Gardula (mythical lion) with 'Shree Chamundi' legend in Kannada. Small denomination coins of this type are difficult to obtain.",
    obverse: "Gardula (mythical lion)",
    reverse: "Legend 'Shree Chamundi' in Kannada",
    weight: "",
    diameter: "",
    tags: ["Mysore", "Dewan Purniah", "Copper", "Cash", "Gardula"],
    image: "images/416.jpg",
    images: ["images/416.jpg"],
    featured: false,
  },
  {
    id: "IN-010",
    name: "Copper Cash",
    ruler: "Krishna Raja Wodeyar",
    kingdom: "Kingdom of Mysore",
    era: "South Indian Kingdoms",
    period: "19th Century A.D.",
    mint: "Mysore Mint",
    grade: "Extremely Fine",
    denomination: "Cash",
    metal: "Copper",
    rarity: "Rare",
    country: "India",
    description: "Hanuman to the right type copper coin from the Kingdom of Mysore. Extremely fine grade with clear details of the deity. A prized example of South Indian religious iconography on coinage.",
    obverse: "Hanuman facing right",
    reverse: "Kannada legends",
    weight: "",
    diameter: "",
    tags: ["Mysore", "Hanuman", "Copper", "Cash", "EF"],
    image: "images/417.jpg",
    images: ["images/417.jpg"],
    featured: true,
  },
  {
    id: "IN-011",
    name: "Rupee",
    ruler: "Ahilyabai Holkar",
    kingdom: "Princely State of Indore",
    era: "Princely States",
    period: "1766–1767 A.D.",
    mint: "Indore Mint",
    grade: "Very Fine",
    denomination: "1 Rupee",
    metal: "Silver",
    rarity: "Very Rare",
    country: "India",
    description: "Silver rupee of Ahilyabai Holkar of Indore (1766-1767). Legend describing Emperor Shah Alam and date. Features the distinctive sun mark mint mark. One of the most celebrated female rulers in Indian history, known for her just rule and public works.",
    obverse: "Sun face with crescent and star",
    reverse: "Persian legends with date and emperor's name",
    weight: "",
    diameter: "",
    tags: ["Indore", "Ahilyabai Holkar", "Silver", "Rupee", "Sun Mark"],
    image: "images/418.jpg",
    images: ["images/418.jpg"],
    featured: true,
  },
  {
    id: "IN-012",
    name: "Rupee",
    ruler: "Jahangir",
    kingdom: "Mughal Empire",
    era: "Mughal & Sultanate",
    period: "1605–1627 A.D.",
    mint: "Patna Mint",
    grade: "Fine",
    denomination: "1 Rupee",
    metal: "Silver",
    rarity: "Rare",
    country: "India",
    description: "Silver rupee of Jahangir struck at the Patna mint. Features elegant Nastaliq calligraphy typical of Jahangir's reign. The Patna mint was an important provincial mint during the Mughal era, producing coins of consistent quality.",
    obverse: "Kalima with Jahangir's name and titles",
    reverse: "Mint name Patna and regnal year",
    weight: "",
    diameter: "",
    tags: ["Mughal", "Jahangir", "Silver", "Rupee", "Patna"],
    image: "images/419.jpg",
    images: ["images/419.jpg"],
    featured: false,
  },
  {
    id: "IN-013",
    name: "Rupee",
    ruler: "Aziz-ud-din Alamgir II",
    kingdom: "Maratha Empire",
    era: "Mughal & Sultanate",
    period: "18th Century A.D.",
    mint: "Unknown",
    grade: "Fine",
    denomination: "1 Rupee",
    metal: "Silver",
    rarity: "Scarce",
    country: "India",
    description: "Silver rupee issued in the name of Mughal emperor Aziz-ud-din Alamgir II under Maratha authority. Features Trishul and Flag mark as Maratha control symbols. A fascinating example of transitional coinage during the decline of Mughal power.",
    obverse: "Persian legends in emperor's name",
    reverse: "Trishul and Flag mark",
    weight: "",
    diameter: "",
    tags: ["Maratha", "Alamgir II", "Silver", "Rupee", "Trishul"],
    image: "images/420.jpg",
    images: ["images/420.jpg"],
    featured: false,
  },
  {
    id: "IN-014",
    name: "Massa",
    ruler: "Various",
    kingdom: "Kingdom of Polonnaruwa",
    era: "Ancient India",
    period: "11th–13th Century A.D.",
    mint: "Polonnaruwa Mint",
    grade: "Fine",
    denomination: "Massa",
    metal: "Copper",
    rarity: "Very Rare",
    country: "Sri Lanka",
    description: "Copper massa from the Kingdom of Polonnaruwa, Sri Lanka. Obverse shows a crowned Lankan king wearing dhoti, standing on lotus stalk, holding jasmine flower to right, hanging lamp to left, with five pellets. Reverse depicts seated crowned king holding conch shell with Nagari legend and rim of beads.",
    obverse: "Crowned king on lotus stalk holding jasmine flower",
    reverse: "Seated king with conch shell, Nagari legend",
    weight: "",
    diameter: "",
    tags: ["Sri Lanka", "Polonnaruwa", "Copper", "Massa", "Ancient"],
    image: "images/421.jpg",
    images: ["images/421.jpg"],
    featured: true,
  },
  {
    id: "IN-015",
    name: "Paisa",
    ruler: "Tipu Sultan",
    kingdom: "Kingdom of Mysore",
    era: "Mughal & Sultanate",
    period: "1791–1799 A.D.",
    mint: "Pattan Mint",
    grade: "Fine",
    denomination: "1 Paisa",
    metal: "Copper",
    rarity: "Scarce",
    country: "India",
    description: "Copper paisa of Tipu Sultan (1791-1799 A.D.), struck at the Zarb Pattan mint. Features an elephant facing left within a dotted border. Tipu Sultan's coinage is famous for its innovative designs and calligraphy, distinct from Mughal conventions.",
    obverse: "Elephant facing left in dotted border",
    reverse: "Persian legends with mint name",
    weight: "",
    diameter: "",
    tags: ["Mysore", "Tipu Sultan", "Copper", "Paisa", "Pattan"],
    image: "images/422.jpg",
    images: ["images/422.jpg"],
    featured: true,
  },
  {
    id: "IN-016",
    name: "Mahmudi",
    ruler: "Akbar",
    kingdom: "Mughal Empire",
    era: "Mughal & Sultanate",
    period: "1605 A.D.",
    mint: "Mulher Mint",
    grade: "Very Fine",
    denomination: "Mahmudi",
    metal: "Silver",
    rarity: "Extremely Rare",
    country: "India",
    description: "Silver Mahmudi of Akbar the Great, struck at Mulher Mint (off flan). Dated 55 (1605 A.D.), weighing 5.52 grams and 11.50 mm. Mahmudi coinage was struck at Mulher by the Rajah of Baglana in the name of Jalal al-Din Muhammad Akbar the Great.",
    obverse: "Persian legends in Akbar's name",
    reverse: "Mint name and date",
    weight: "5.52g",
    diameter: "11.50mm",
    tags: ["Mughal", "Akbar", "Silver", "Mahmudi", "Mulher"],
    image: "images/423.jpg",
    images: ["images/423.jpg"],
    featured: true,
  },
  {
    id: "IN-017",
    name: "5 Cash",
    ruler: "Krishna Raja Wodeyar",
    kingdom: "Princely State of Mysore",
    era: "Princely States",
    period: "1839 A.D.",
    mint: "Mysore Mint",
    grade: "Fine",
    denomination: "5 Cash",
    metal: "Copper",
    rarity: "Scarce",
    country: "India",
    description: "Krishna Raja Wodeyar issued copper Five Cash coin from 1839. Features the Lion type design, a powerful symbol of Mysore royalty. The coin shows clear details despite its age, with the lion motif well-struck.",
    obverse: "Lion motif",
    reverse: "Kannada legends with date",
    weight: "",
    diameter: "",
    tags: ["Mysore", "Krishna Raja Wodeyar", "Copper", "Cash", "Lion"],
    image: "images/424.jpg",
    images: ["images/424.jpg"],
    featured: false,
  },
  {
    id: "IN-018",
    name: "5 Cash",
    ruler: "Krishna Raja Wodeyar",
    kingdom: "Princely State of Mysore",
    era: "Princely States",
    period: "1811–1833 A.D.",
    mint: "Mysore Mint",
    grade: "Fine",
    denomination: "5 Cash",
    metal: "Copper",
    rarity: "Scarce",
    country: "India",
    description: "Krishna Raja Wodeyar issued copper Five Cash coin featuring an elephant facing left. Struck during the early 19th century, this coin represents the stable monetary system of princely Mysore under Wodeyar rule.",
    obverse: "Elephant facing left",
    reverse: "Kannada legends",
    weight: "",
    diameter: "",
    tags: ["Mysore", "Krishna Raja Wodeyar", "Copper", "Cash", "Elephant"],
    image: "images/425.jpg",
    images: ["images/425.jpg"],
    featured: false,
  },
  {
    id: "IN-019",
    name: "¼ Cash",
    ruler: "Dewan Purniah",
    kingdom: "Princely State of Mysore",
    era: "Princely States",
    period: "c. 1810–1830 A.D.",
    mint: "Mysore Mint",
    grade: "Fine",
    denomination: "¼ Cash",
    metal: "Copper",
    rarity: "Scarce",
    country: "India",
    description: "Dewan Purniah issued fractional copper quarter Cash coin. Features the Gardula (mythical lion) with 'Shree Chamundi' legend in Kannada script. Small denomination coins from this period are difficult to obtain in any condition.",
    obverse: "Gardula (mythical lion)",
    reverse: "Legend 'Shree Chamundi' in Kannada",
    weight: "",
    diameter: "",
    tags: ["Mysore", "Dewan Purniah", "Copper", "Cash", "Gardula"],
    image: "images/426.jpg",
    images: ["images/426.jpg"],
    featured: false,
  },
  {
    id: "IN-020",
    name: "25 Cash",
    ruler: "Krishna Raja Wodeyar",
    kingdom: "Princely State of Mysore",
    era: "Princely States",
    period: "1836 A.D.",
    mint: "Mysore Mint",
    grade: "Fine",
    denomination: "25 Cash",
    metal: "Copper",
    rarity: "Scarce",
    country: "India",
    description: "Krishna Raja Wodeyar issued 25 Cash copper coin from 1836. Features the Lion type design. Higher denomination copper coins of Mysore are particularly sought after by collectors of princely state coinage.",
    obverse: "Lion motif",
    reverse: "Kannada legends with date",
    weight: "",
    diameter: "",
    tags: ["Mysore", "Krishna Raja Wodeyar", "Copper", "Cash", "Lion"],
    image: "images/427.jpg",
    images: ["images/427.jpg"],
    featured: false,
  },
  {
    id: "IN-021",
    name: "¼ Cash",
    ruler: "Dewan Purniah",
    kingdom: "Princely State of Mysore",
    era: "Princely States",
    period: "c. 1810–1830 A.D.",
    mint: "Mysore Mint",
    grade: "Fine",
    denomination: "¼ Cash",
    metal: "Copper",
    rarity: "Scarce",
    country: "India",
    description: "Dewan Purniah issued quarter Cash copper coin with Gardula (mythical lion) design. Legend 'Shree Chamundi' in Kannada on reverse. A charming small denomination from the Mysore princely state, well-preserved for its size.",
    obverse: "Gardula (mythical lion)",
    reverse: "Legend 'Shree Chamundi' in Kannada",
    weight: "",
    diameter: "",
    tags: ["Mysore", "Dewan Purniah", "Copper", "Cash", "Gardula"],
    image: "images/428.jpg",
    images: ["images/428.jpg"],
    featured: false,
  },
  {
    id: "IN-022",
    name: "Copper Cash",
    ruler: "Krishna Raja Wodeyar",
    kingdom: "Kingdom of Mysore",
    era: "South Indian Kingdoms",
    period: "19th Century A.D.",
    mint: "Mysore Mint",
    grade: "Extremely Fine",
    denomination: "Cash",
    metal: "Copper",
    rarity: "Rare",
    country: "India",
    description: "Extremely fine copper coin from the Kingdom of Mysore featuring a deer facing left with the sun and moon above. Exceptional preservation for a copper coin of this period, with all details clearly visible.",
    obverse: "Deer facing left with sun and moon above",
    reverse: "Kannada legends",
    weight: "",
    diameter: "",
    tags: ["Mysore", "Deer", "Copper", "Cash", "EF"],
    image: "images/429.jpg",
    images: ["images/429.jpg"],
    featured: true,
  },
  {
    id: "IN-023",
    name: "Copper Cash",
    ruler: "Various",
    kingdom: "Vijayanagara Empire",
    era: "South Indian Kingdoms",
    period: "14th–16th Century A.D.",
    mint: "Unknown",
    grade: "Fine",
    denomination: "Cash",
    metal: "Copper",
    rarity: "Scarce",
    country: "India",
    description: "Copper coin of the Vijayanagara Empire depicting a lion with a paw raised. A collector's specimen showing the powerful emblem of this great South Indian empire that ruled over much of the Deccan.",
    obverse: "Lion with paw raised",
    reverse: "Kannada/Telugu legends",
    weight: "",
    diameter: "",
    tags: ["Vijayanagara", "Lion", "Copper", "Cash", "South India"],
    image: "images/430.jpg",
    images: ["images/430.jpg"],
    featured: false,
  },
  {
    id: "IN-024",
    name: "Copper Cash",
    ruler: "Muthu Virappa Nayaka",
    kingdom: "Madurai Nayakas",
    era: "South Indian Kingdoms",
    period: "1609–1623 A.D.",
    mint: "Madurai Mint",
    grade: "Fine",
    denomination: "Cash",
    metal: "Copper",
    rarity: "Rare",
    country: "India",
    description: "Copper coin of Muthu Virappa Nayaka of the Madurai Nayakas (1609-1623). Depicts Shiva and Parvathi seated facing each other. Legend 'Sri Vira' in Telugu script. A beautiful example of Nayaka religious coinage from the temple city of Madurai.",
    obverse: "Shiva and Parvathi seated facing",
    reverse: "Legend 'Sri Vira' in Telugu",
    weight: "",
    diameter: "",
    tags: ["Madurai", "Nayakas", "Shiva", "Copper", "Cash"],
    image: "images/431.jpg",
    images: ["images/431.jpg"],
    featured: true,
  },
  {
    id: "IN-025",
    name: "Copper Cash",
    ruler: "Various",
    kingdom: "Madurai Nayakas",
    era: "South Indian Kingdoms",
    period: "16th–17th Century A.D.",
    mint: "Madurai Mint",
    grade: "Fine",
    denomination: "Cash",
    metal: "Copper",
    rarity: "Scarce",
    country: "India",
    description: "Copper coin from the Madurai Nayakas/Vijayanagara Feudatory period. Features a seated Nandi bull facing right with script on the reverse. The Nandi is the sacred vehicle of Lord Shiva, a common motif in South Indian temple coinage.",
    obverse: "Seated Nandi bull facing right",
    reverse: "Script legends",
    weight: "",
    diameter: "",
    tags: ["Madurai", "Nayakas", "Nandi", "Copper", "Cash"],
    image: "images/432.jpg",
    images: ["images/432.jpg"],
    featured: false,
  },
  {
    id: "IN-026",
    name: "Copper Cash",
    ruler: "Various",
    kingdom: "Madurai Nayakas",
    era: "South Indian Kingdoms",
    period: "16th–17th Century A.D.",
    mint: "Madurai Mint",
    grade: "Fine",
    denomination: "Cash",
    metal: "Copper",
    rarity: "Scarce",
    country: "India",
    description: "Copper coin of the Madurai Nayakas depicting Goddess Meenakshi standing with a conch shell on the reverse. A wonderful example of South Indian temple city coinage from the famous Meenakshi temple complex.",
    obverse: "Goddess Meenakshi standing",
    reverse: "Conch shell",
    weight: "",
    diameter: "",
    tags: ["Madurai", "Nayakas", "Meenakshi", "Copper", "Cash"],
    image: "images/434.jpg",
    images: ["images/434.jpg"],
    featured: false,
  },
  {
    id: "IN-027",
    name: "Rupee",
    ruler: "Krishna Raja Wodeyar III",
    kingdom: "Princely State of Mysore",
    era: "Princely States",
    period: "1799–1868 A.D.",
    mint: "Mysore Mint",
    grade: "Very Fine",
    denomination: "1 Rupee",
    metal: "Silver",
    rarity: "Rare",
    country: "India",
    description: "Silver rupee of Krishna Raja Wadiyar III of Mysore (1799-1868). This coin was struck under the posthumous authority of the Mughal emperor Shah Alam II, who died in 1806. A fascinating example of transitional authority in princely coinage.",
    obverse: "Persian legends in Shah Alam II's name",
    reverse: "Mysore mint marks and date",
    weight: "",
    diameter: "",
    tags: ["Mysore", "Krishna Raja Wodeyar", "Silver", "Rupee", "Shah Alam"],
    image: "images/437.jpg",
    images: ["images/437.jpg"],
    featured: true,
  },
  {
    id: "IN-028",
    name: "Drachm",
    ruler: "Khusro I",
    kingdom: "Indo-Sassanian Empire",
    era: "Ancient India",
    period: "539–579 A.D.",
    mint: "Unknown",
    grade: "Very Fine",
    denomination: "Drachm",
    metal: "Silver",
    rarity: "Very Rare",
    country: "India / Pakistan",
    description: "Silver drachm of the Indo-Sassanian Empire under King Khusro I (539-579 A.D.). Features a right-facing bust with distinctive winged crown, stars, crescents, and Pahlavi-derived legends. Reverse shows a fire altar flanked by attendants, reflecting Zoroastrian iconography adapted locally.",
    obverse: "Bust of Khusro I with winged crown, stars and crescents",
    reverse: "Fire altar with attendants, Pahlavi legends",
    weight: "",
    diameter: "",
    tags: ["Indo-Sassanian", "Khusro I", "Silver", "Drachm", "Ancient"],
    image: "images/438.jpg",
    images: ["images/438.jpg"],
    featured: true,
  },
  {
    id: "IN-029",
    name: "25 Cash",
    ruler: "Dewan Purniah",
    kingdom: "Princely State of Mysore",
    era: "Princely States",
    period: "c. 1810–1830 A.D.",
    mint: "Mysore Mint",
    grade: "Fine",
    denomination: "25 Cash",
    metal: "Copper",
    rarity: "Scarce",
    country: "India",
    description: "Dewan Purniah issued 25 Cash copper coin featuring the Gardula (mythical lion). Legend 'Shree Chamundi' in Kannada script. Higher denomination copper issues from Mysore are collectible and show the sophistication of princely minting.",
    obverse: "Gardula (mythical lion)",
    reverse: "Legend 'Shree Chamundi' in Kannada",
    weight: "",
    diameter: "",
    tags: ["Mysore", "Dewan Purniah", "Copper", "Cash", "Gardula"],
    image: "images/440.jpg",
    images: ["images/440.jpg"],
    featured: false,
  },
  {
    id: "IN-030",
    name: "Tanka",
    ruler: "Mohammad bin Tughlaq",
    kingdom: "Delhi Sultanate",
    era: "Mughal & Sultanate",
    period: "1324–1351 A.D.",
    mint: "Delhi Mint",
    grade: "Fine",
    denomination: "1 Tanka",
    metal: "Silver",
    rarity: "Very Rare",
    country: "India",
    description: "Silver tanka of Mohammad bin Tughlaq (1324-1351 A.D.). He was a visionary who introduced a token system where coins made of copper, brass and billion would replace gold and silver for transactions. A landmark in Indian monetary history and one of the earliest token currency experiments in the world.",
    obverse: "Sultan's name and titles in Arabic",
    reverse: "Kalima and date",
    weight: "",
    diameter: "",
    tags: ["Delhi Sultanate", "Tughlaq", "Silver", "Tanka", "Token"],
    image: "images/441.jpg",
    images: ["images/441.jpg"],
    featured: true,
  },
  {
    id: "IN-031",
    name: "Tanka",
    ruler: "Mohammad bin Tughlaq",
    kingdom: "Delhi Sultanate",
    era: "Mughal & Sultanate",
    period: "1324–1351 A.D.",
    mint: "Delhi Mint",
    grade: "Fine",
    denomination: "1 Tanka",
    metal: "Silver",
    rarity: "Very Rare",
    country: "India",
    description: "Silver tanka of Mohammad bin Tughlaq from the Delhi Sultanate. This coin represents the ambitious token currency experiment of the 14th century. Struck in silver before the famous copper token reform that ultimately failed.",
    obverse: "Sultan's name and titles in Arabic",
    reverse: "Kalima and date",
    weight: "",
    diameter: "",
    tags: ["Delhi Sultanate", "Tughlaq", "Silver", "Tanka", "Token"],
    image: "images/442.jpg",
    images: ["images/442.jpg"],
    featured: false,
  },
  {
    id: "IN-032",
    name: "Paisa",
    ruler: "Various",
    kingdom: "Princely State of Gwalior",
    era: "Princely States",
    period: "1899–1901 A.D.",
    mint: "Gwalior Mint",
    grade: "Gem Uncirculated",
    denomination: "1 Paisa",
    metal: "Copper",
    rarity: "Scarce",
    country: "India",
    description: "Copper paisa from the Princely State of Gwalior, dated Vikram Samvat 1899-1901. Features a cobra above crossed spear and trident with Devanagari script. Gem grade specimen with sharp details and original lustre.",
    obverse: "Cobra above crossed spear and trident",
    reverse: "Devanagari legends with date",
    weight: "",
    diameter: "",
    tags: ["Gwalior", "Copper", "Paisa", "Vikram Samvat", "Gem"],
    image: "images/443.jpg",
    images: ["images/443.jpg"],
    featured: true,
  },
  {
    id: "IN-033",
    name: "Paisa",
    ruler: "Various",
    kingdom: "Princely State of Gwalior",
    era: "Princely States",
    period: "1899–1901 A.D.",
    mint: "Gwalior Mint",
    grade: "Gem Uncirculated",
    denomination: "1 Paisa",
    metal: "Copper",
    rarity: "Scarce",
    country: "India",
    description: "Gem grade copper paisa from Gwalior State, Vikram Samvat 1899-1901. Depicts a cobra above crossed spear and trident. The Devanagari script is exceptionally clear on this specimen, with full original mint lustre.",
    obverse: "Cobra above crossed spear and trident",
    reverse: "Devanagari legends with date",
    weight: "",
    diameter: "",
    tags: ["Gwalior", "Copper", "Paisa", "Vikram Samvat", "Gem"],
    image: "images/444.jpg",
    images: ["images/444.jpg"],
    featured: true,
  },
  {
    id: "IN-034",
    name: "5 Schilling",
    ruler: "Republic of Austria",
    kingdom: "Republic of Austria",
    era: "World",
    period: "1952 A.D.",
    mint: "Vienna Mint",
    grade: "Extremely Fine",
    denomination: "5 Schilling",
    metal: "Silver",
    rarity: "Common",
    country: "Austria",
    description: "Austrian 5 Schilling coin from 1952. Features the Austrian coat of arms — an eagle carrying the Austrian escutcheon. The country name around the top, the value in centre and the denomination around the bottom. A classic mid-century European coin.",
    obverse: "Austrian eagle with escutcheon",
    reverse: "Value 5 SCHILLING with date",
    weight: "",
    diameter: "",
    tags: ["Austria", "Schilling", "Silver", "Modern", "World"],
    image: "images/446.jpg",
    images: ["images/446.jpg"],
    featured: false,
  },
  {
    id: "IN-035",
    name: "20 Cash",
    ruler: "Krishna Raja Wodeyar",
    kingdom: "Princely State of Mysore",
    era: "Princely States",
    period: "1811–1833 A.D.",
    mint: "Mysore Mint",
    grade: "Fine",
    denomination: "20 Cash",
    metal: "Copper",
    rarity: "Scarce",
    country: "India",
    description: "Krishna Raja Wodeyar issued 20 Cash copper coin featuring a decorated elephant facing left. Struck during the early 19th century, this coin showcases the traditional elephant motif that was central to Mysore's royal iconography.",
    obverse: "Decorated elephant facing left",
    reverse: "Kannada legends",
    weight: "",
    diameter: "",
    tags: ["Mysore", "Krishna Raja Wodeyar", "Copper", "Cash", "Elephant"],
    image: "images/447.jpg",
    images: ["images/447.jpg"],
    featured: false,
  },
  // ── NEW COINS ADDED BELOW ─────────────────────────────────
  {
    id: "IN-036",
    name: "½ Paisa",
    ruler: "Tipu Sultan",
    kingdom: "Kingdom of Mysore",
    era: "Mughal & Sultanate",
    period: "1782–1799 A.D.",
    mint: "Pattan Mint",
    grade: "Extremely Fine",
    denomination: "½ Paisa",
    metal: "Copper",
    rarity: "Scarce",
    country: "India",
    description: "Half paisa copper coin of Tipu Sultan from the Kingdom of Mysore (1782-1799 A.D.), struck at the Pattan mint. Features an elephant facing left within a dotted border on the obverse. Extremely fine grade, scarce. Tipu Sultan's coinage is renowned for its innovative designs distinct from Mughal conventions.",
    obverse: "Elephant facing left within dotted border",
    reverse: "Persian legends with mint name",
    weight: "",
    diameter: "",
    tags: ["Mysore", "Tipu Sultan", "Copper", "Paisa", "Pattan", "Elephant"],
    image: "images/451.jpg",
    images: ["images/451.jpg"],
    featured: true,
  },
  {
    id: "IN-037",
    name: "¼ Paisa",
    ruler: "Tipu Sultan",
    kingdom: "Kingdom of Mysore",
    era: "Mughal & Sultanate",
    period: "1782–1799 A.D.",
    mint: "Pattan Mint",
    grade: "Extremely Fine",
    denomination: "¼ Paisa",
    metal: "Copper",
    rarity: "Scarce",
    country: "India",
    description: "Quarter paisa copper coin of Tipu Sultan from the Kingdom of Mysore (1782-1799 A.D.), struck at the Pattan mint. Extremely fine grade, scarce. A small denomination from the famous 'Tiger of Mysore' whose coinage broke from traditional Mughal designs.",
    obverse: "Decorated design within dotted border",
    reverse: "Persian legends",
    weight: "",
    diameter: "",
    tags: ["Mysore", "Tipu Sultan", "Copper", "Paisa", "Pattan"],
    image: "images/452.jpg",
    images: ["images/452.jpg"],
    featured: false,
  },
  {
    id: "IN-038",
    name: "¼ Paisa",
    ruler: "Tipu Sultan",
    kingdom: "Kingdom of Mysore",
    era: "Mughal & Sultanate",
    period: "1782–1799 A.D.",
    mint: "Dindigul Mint",
    grade: "Extremely Fine",
    denomination: "¼ Paisa",
    metal: "Copper",
    rarity: "Scarce",
    country: "India",
    description: "Quarter paisa copper coin of Tipu Sultan (1782-1799 A.D.), struck at the Dindigul mint. Extremely fine grade, scarce. The Dindigul mint produced distinctive issues during Tipu Sultan's reign, featuring unique calligraphic styles.",
    obverse: "Decorated design with Persian legends",
    reverse: "Calligraphic legends within dotted border",
    weight: "",
    diameter: "",
    tags: ["Mysore", "Tipu Sultan", "Copper", "Paisa", "Dindigul"],
    image: "images/453.jpg",
    images: ["images/453.jpg"],
    featured: false,
  },
  {
    id: "IN-039",
    name: "¼ Paisa",
    ruler: "Tipu Sultan",
    kingdom: "Kingdom of Mysore",
    era: "Mughal & Sultanate",
    period: "1782–1799 A.D.",
    mint: "Pattan Mint",
    grade: "Extremely Fine",
    denomination: "¼ Paisa",
    metal: "Copper",
    rarity: "Scarce",
    country: "India",
    description: "Quarter paisa copper coin of Tipu Sultan from the Kingdom of Mysore (1782-1799 A.D.), struck at the Pattan mint. Extremely fine grade, scarce. Features the characteristic design elements of Tipu's revolutionary coinage system.",
    obverse: "Decorated design within dotted border",
    reverse: "Persian legends",
    weight: "",
    diameter: "",
    tags: ["Mysore", "Tipu Sultan", "Copper", "Paisa", "Pattan"],
    image: "images/455.jpg",
    images: ["images/455.jpg"],
    featured: false,
  },
  {
    id: "IN-040",
    name: "25 Cash",
    ruler: "Dewan Purniah",
    kingdom: "Princely State of Mysore",
    era: "Princely States",
    period: "c. 1810–1830 A.D.",
    mint: "Mysore Mint",
    grade: "Fine",
    denomination: "25 Cash",
    metal: "Copper",
    rarity: "Scarce",
    country: "India",
    description: "Dewan Purniah issued 25 Cash copper coin from the Princely State of Mysore. Features the Gardula (mythical lion) motif. Legend 'Shree Chamundi' in Kannada script. A notable example of Mysore administrative coinage during the regency period.",
    obverse: "Gardula (mythical lion)",
    reverse: "Legend 'Shree Chamundi' in Kannada",
    weight: "",
    diameter: "",
    tags: ["Mysore", "Dewan Purniah", "Copper", "Cash", "Gardula"],
    image: "images/456.jpg",
    images: ["images/456.jpg"],
    featured: false,
  },
  {
    id: "IN-041",
    name: "6¼ Cash",
    ruler: "Dewan Purniah",
    kingdom: "Princely State of Mysore",
    era: "Princely States",
    period: "c. 1810–1830 A.D.",
    mint: "Mysore Mint",
    grade: "Fine",
    denomination: "6¼ Cash",
    metal: "Copper",
    rarity: "Scarce",
    country: "India",
    description: "Dewan Purniah issued 6¼ Cash copper coin from the Princely State of Mysore. Features the Gardula (mythical lion) with 'Shree Chamundi' legend in Kannada. An unusual fractional denomination from the Mysore regency period.",
    obverse: "Gardula (mythical lion)",
    reverse: "Legend 'Shree Chamundi' in Kannada",
    weight: "",
    diameter: "",
    tags: ["Mysore", "Dewan Purniah", "Copper", "Cash", "Gardula"],
    image: "images/457.jpg",
    images: ["images/457.jpg"],
    featured: false,
  },
  {
    id: "IN-042",
    name: "6¼ Cash",
    ruler: "Dewan Purniah",
    kingdom: "Princely State of Mysore",
    era: "Princely States",
    period: "c. 1810–1830 A.D.",
    mint: "Mysore Mint",
    grade: "Fine",
    denomination: "6¼ Cash",
    metal: "Copper",
    rarity: "Scarce",
    country: "India",
    description: "Dewan Purniah issued 6¼ Cash copper coin featuring the Gardula (mythical lion). Legend 'Shree Chamundi' in Kannada script. Another example of the unusual fractional denominations from Mysore's regency period.",
    obverse: "Gardula (mythical lion)",
    reverse: "Legend 'Shree Chamundi' in Kannada",
    weight: "",
    diameter: "",
    tags: ["Mysore", "Dewan Purniah", "Copper", "Cash", "Gardula"],
    image: "images/458.jpg",
    images: ["images/458.jpg"],
    featured: false,
  },
  {
    id: "IN-043",
    name: "Ten Cash",
    ruler: "Krishna Raja Wodeyar",
    kingdom: "Princely State of Mysore",
    era: "Princely States",
    period: "1838 A.D.",
    mint: "Mysore Mint",
    grade: "Fine",
    denomination: "10 Cash",
    metal: "Copper",
    rarity: "Scarce",
    country: "India",
    description: "Krishna Raja Wodeyar issued Ten Cash copper coin from 1838. Features the Lion type design, a powerful symbol of Mysore royalty. The coin shows clear details with the lion motif well-struck and Kannada legends visible.",
    obverse: "Lion motif",
    reverse: "Kannada legends with date",
    weight: "",
    diameter: "",
    tags: ["Mysore", "Krishna Raja Wodeyar", "Copper", "Cash", "Lion", "1838"],
    image: "images/459.jpg",
    images: ["images/459.jpg"],
    featured: true,
  },
  {
    id: "IN-044",
    name: "Ten Cash",
    ruler: "Krishna Raja Wodeyar",
    kingdom: "Princely State of Mysore",
    era: "Princely States",
    period: "1842 A.D.",
    mint: "Mysore Mint",
    grade: "Fine",
    denomination: "10 Cash",
    metal: "Copper",
    rarity: "Scarce",
    country: "India",
    description: "Krishna Raja Wodeyar issued Ten Cash copper coin from 1842. Features the Lion type design with clear Kannada legends. A well-preserved example of mid-19th century Mysore princely state coinage.",
    obverse: "Lion motif",
    reverse: "Kannada legends with date",
    weight: "",
    diameter: "",
    tags: ["Mysore", "Krishna Raja Wodeyar", "Copper", "Cash", "Lion", "1842"],
    image: "images/460.jpg",
    images: ["images/460.jpg"],
    featured: true,
  },
  {
    id: "IN-045",
    name: "12½ Cash",
    ruler: "Dewan Purniah",
    kingdom: "Princely State of Mysore",
    era: "Princely States",
    period: "c. 1810–1830 A.D.",
    mint: "Mysore Mint",
    grade: "Fine",
    denomination: "12½ Cash",
    metal: "Copper",
    rarity: "Scarce",
    country: "India",
    description: "Dewan Purniah issued 12½ Cash copper coin from the Princely State of Mysore. Features the Gardula (mythical lion) with 'Shree Chamundi' legend in Kannada. An unusual fractional denomination, well-preserved for its age.",
    obverse: "Gardula (mythical lion)",
    reverse: "Legend 'Shree Chamundi' in Kannada",
    weight: "",
    diameter: "",
    tags: ["Mysore", "Dewan Purniah", "Copper", "Cash", "Gardula"],
    image: "images/415.jpg",
    images: ["images/415.jpg"],
    featured: false,
  },
  {
    id: "IN-046",
    name: "Copper Cash",
    ruler: "Various",
    kingdom: "Madurai Nayakas",
    era: "South Indian Kingdoms",
    period: "16th–18th Century A.D.",
    mint: "Madurai Mint",
    grade: "Fine",
    denomination: "Cash",
    metal: "Copper",
    rarity: "Scarce",
    country: "India",
    description: "Copper coin from the Madurai Nayakas (16th-18th Century). Features Garuda facing right within a dotted border. Centrally struck, a collector's specimen. The Garuda is the mythical eagle and vehicle of Lord Vishnu, a significant motif in South Indian coinage.",
    obverse: "Garuda facing right in dotted border",
    reverse: "Script legends",
    weight: "",
    diameter: "",
    tags: ["Madurai", "Nayakas", "Garuda", "Copper", "Cash"],
    image: "images/433.jpg",
    images: ["images/433.jpg"],
    featured: true,
  },
  {
    id: "IN-047",
    name: "Copper Cash",
    ruler: "Various",
    kingdom: "Late Madurai Nayakas",
    era: "South Indian Kingdoms",
    period: "1700–1736 A.D.",
    mint: "Madurai Mint",
    grade: "Fine",
    denomination: "Cash",
    metal: "Copper",
    rarity: "Scarce",
    country: "India",
    description: "Copper coin from the Late Madurai Nayakas (1700-1736 A.D.). Obverse depicts Hanuman facing right in a dotted circle. Reverse contains the word 'Sri' in Tamil (ஸ்ரீ). A beautiful example of South Indian religious iconography combining Hindu deity depictions with regional scripts.",
    obverse: "Hanuman facing right in dotted circle",
    reverse: "Word 'Sri' in Tamil script",
    weight: "",
    diameter: "",
    tags: ["Madurai", "Nayakas", "Hanuman", "Copper", "Cash", "Tamil"],
    image: "images/435.jpg",
    images: ["images/435.jpg"],
    featured: true,
  },
  {
    id: "IN-048",
    name: "Copper Cash",
    ruler: "Various",
    kingdom: "Maratha Confederacy",
    era: "Mughal & Sultanate",
    period: "1740–1780 A.D.",
    mint: "Arani",
    grade: "Fine",
    denomination: "Cash",
    metal: "Copper",
    rarity: "Rare",
    country: "India",
    description: "Arani Type copper coin from the Maratha Confederacy (1740-1780 A.D.). Features Hanuman in veera (heroic) type on the obverse with a distinctive checkered pattern on the reverse. A collector's specimen showcasing the unique regional styles of Maratha coinage.",
    obverse: "Hanuman, veera type",
    reverse: "Checkered pattern",
    weight: "",
    diameter: "",
    tags: ["Maratha", "Arani", "Hanuman", "Copper", "Cash", "Checkered"],
    image: "images/436.jpg",
    images: ["images/436.jpg"],
    featured: true,
  },
  {
    id: "IN-049",
    name: "5 Schilling",
    ruler: "Republic of Austria",
    kingdom: "Republic of Austria",
    era: "World",
    period: "1952 A.D.",
    mint: "Vienna Mint",
    grade: "Extremely Fine",
    denomination: "5 Schilling",
    metal: "Silver",
    rarity: "Common",
    country: "Austria",
    description: "Austrian 5 Schilling coin from 1952. Features the Austria coat of arms — an eagle carries the Austrian escutcheon. The country name around the top, the value in centre and the denomination around the bottom. A classic mid-century European coin in extremely fine grade.",
    obverse: "Austrian eagle with escutcheon",
    reverse: "Value 5 SCHILLING with date",
    weight: "",
    diameter: "",
    tags: ["Austria", "Schilling", "Silver", "Modern", "World"],
    image: "images/439.jpg",
    images: ["images/439.jpg"],
    featured: false,
  },
  {
    id: "IN-050",
    name: "Ten Cash",
    ruler: "Krishna Raja Wodeyar",
    kingdom: "Princely State of Mysore",
    era: "Princely States",
    period: "1830s A.D.",
    mint: "Mysore Mint",
    grade: "Fine",
    denomination: "10 Cash",
    metal: "Copper",
    rarity: "Scarce",
    country: "India",
    description: "Krishna Raja Wodeyar issued Ten Cash copper coin from the 1830s. Features the Lion type design with clear Kannada legends. The date shows '183X' indicating the third digit is unclear. A characteristic example of Mysore princely state coinage.",
    obverse: "Lion motif",
    reverse: "Kannada legends with date",
    weight: "",
    diameter: "",
    tags: ["Mysore", "Krishna Raja Wodeyar", "Copper", "Cash", "Lion"],
    image: "images/461.jpg",
    images: ["images/461.jpg"],
    featured: false,
  },
    {
    id: "IN-051",
    name: "AE3/4",
    ruler: "Valens",
    kingdom: "Roman Empire",
    era: "World",
    period: "364–375 A.D.",
    mint: "Unknown",
    grade: "Fine",
    denomination: "AE3/4",
    metal: "Bronze",
    rarity: "Common",
    country: "Roman Empire",
    description: "Bronze coin of Valens (364-375 A.D.) from the Roman Empire. Obverse shows bust of Valens facing right, pearl-diademed, draped, and cuirassed. Reverse depicts Victory advancing left, holding wreath in right hand and palm with left hand. Mintmark and officina in exergue. A classic late Roman bronze with the iconic Victory reverse type.",
    obverse: "Bust of Valens right, pearl-diademed, draped, cuirassed",
    reverse: "Victory advancing left, holding wreath and palm",
    weight: "",
    diameter: "",
    tags: ["Roman", "Valens", "Bronze", "Victory", "World"],
    image: "images/400.png",
    images: ["images/400.png"],
    featured: true,
  },
  {
    id: "IN-052",
    name: "Follis",
    ruler: "Constantine I (the Great)",
    kingdom: "Roman Empire",
    era: "World",
    period: "306–337 A.D.",
    mint: "Unknown",
    grade: "Fine",
    denomination: "Follis",
    metal: "Bronze",
    rarity: "Common",
    country: "Roman Empire",
    description: "Bronze follis of Constantine I the Great (306-337 A.D.). Obverse features a diademed, draped and cuirassed bust right with laurel and rosette diadem. Reverse shows two soldiers standing facing each other, holding spears and shields, with two standards between them and dot on banners. The 'Glory of the Army' reverse type symbolizes Constantine's military reforms.",
    obverse: "Diademed, draped and cuirassed bust right; laurel and rosette diadem",
    reverse: "Two soldiers standing facing, holding spears and shields, two standards between them",
    weight: "",
    diameter: "",
    tags: ["Roman", "Constantine", "Bronze", "Follis", "World", "Military"],
    image: "images/401.png",
    images: ["images/401.png"],
    featured: true,
  },
  {
    id: "IN-053",
    name: "Follis",
    ruler: "Constantine I (the Great)",
    kingdom: "Roman Empire",
    era: "World",
    period: "306–337 A.D.",
    mint: "Unknown",
    grade: "Fine",
    denomination: "Follis",
    metal: "Bronze",
    rarity: "Common",
    country: "Roman Empire",
    description: "Bronze follis of Constantine I the Great (306-337 A.D.). Obverse shows the head of the Roman emperor Constantine I. Reverse depicts Victory walking right, holding trophy and palm branch. Mintmark in exergue. The Victory type was one of the most popular reverse designs of the Constantinian era.",
    obverse: "Head of Roman emperor Constantine I right",
    reverse: "Victory walking right, holding trophy and palm branch",
    weight: "",
    diameter: "",
    tags: ["Roman", "Constantine", "Bronze", "Follis", "World", "Victory"],
    image: "images/402.png",
    images: ["images/402.png"],
    featured: false,
  },
  {
    id: "IN-054",
    name: "Follis",
    ruler: "Constantine I (the Great)",
    kingdom: "Roman Empire",
    era: "World",
    period: "306–337 A.D.",
    mint: "Unknown",
    grade: "Fine",
    denomination: "Follis",
    metal: "Bronze",
    rarity: "Common",
    country: "Roman Empire",
    description: "Bronze follis of Constantine I the Great (306-337 A.D.). Obverse features the head of Constantine I, laureate, facing right. Reverse shows inscription within laurel wreath, closed at the top by a star. Mintmark, officina and value mark in exergue. Commemorates vows for twenty years of reign.",
    obverse: "Head of Constantine I, laureate, right",
    reverse: "Inscription within laurel wreath, closed by star at top",
    weight: "",
    diameter: "",
    tags: ["Roman", "Constantine", "Bronze", "Follis", "World", "Vows"],
    image: "images/403.png",
    images: ["images/403.png"],
    featured: false,
  },
  {
    id: "IN-055",
    name: "Follis",
    ruler: "Constantine I (the Great)",
    kingdom: "Roman Empire",
    era: "World",
    period: "306–337 A.D.",
    mint: "Rome Mint",
    grade: "Fine",
    denomination: "Follis",
    metal: "Bronze",
    rarity: "Common",
    country: "Roman Empire",
    description: "Bronze follis of Constantine I the Great (306-337 A.D.), struck at Rome. Obverse shows helmeted head of Roma left, in imperial mantle and ornamental necklace. Reverse depicts the she-wolf suckling Romulus and Remus, with circle of dots on wolf's shoulder and two stars above. Mintmark and officina in exergue. The iconic founding myth of Rome rendered in bronze.",
    obverse: "Helmeted head of Roma left, in imperial mantle and ornamental necklace",
    reverse: "She-wolf suckling Romulus and Remus, two stars above",
    weight: "",
    diameter: "",
    tags: ["Roman", "Constantine", "Bronze", "Follis", "World", "Rome", "She-wolf"],
    image: "images/404.png",
    images: ["images/404.png"],
    featured: true,
  },
  {
    id: "IN-056",
    name: "Follis",
    ruler: "Constantine I (the Great)",
    kingdom: "Roman Empire",
    era: "World",
    period: "306–337 A.D.",
    mint: "Rome Mint",
    grade: "Fine",
    denomination: "Follis",
    metal: "Bronze",
    rarity: "Common",
    country: "Roman Empire",
    description: "Bronze follis of Constantine I the Great (306-337 A.D.), struck at Rome. Obverse features helmeted head of Roma left, in imperial mantle and ornamental necklace. Reverse shows the she-wolf suckling Romulus and Remus, circle of dots on wolf's shoulder, two stars above. Mintmark and officina in exergue. Another example of the famous Romulus and Remus type.",
    obverse: "Helmeted head of Roma left, in imperial mantle and ornamental necklace",
    reverse: "She-wolf suckling Romulus and Remus, two stars above",
    weight: "",
    diameter: "",
    tags: ["Roman", "Constantine", "Bronze", "Follis", "World", "Rome", "She-wolf"],
    image: "images/405.png",
    images: ["images/405.png"],
    featured: false,
  },
  {
    id: "IN-057",
    name: "1 Paisa",
    ruler: "Haider Ali",
    kingdom: "Kingdom of Mysore",
    era: "Mughal & Sultanate",
    period: "1761–1782 A.D.",
    mint: "Haidarnagar Mint",
    grade: "Fine",
    denomination: "1 Paisa",
    metal: "Copper",
    rarity: "Extremely Rare",
    country: "India",
    description: "Copper 1 Paisa of Haider Ali from the Kingdom of Mysore (1761-1782 A.D.), struck at the Haidarnagar Mint. Extremely rare coin. Haider Ali was the father of Tipu Sultan and founder of the Mysore Sultanate. His coinage is exceedingly difficult to obtain, making this a major numismatic rarity.",
    obverse: "Decorated design with Persian legends",
    reverse: "Calligraphic legends",
    weight: "",
    diameter: "",
    tags: ["Mysore", "Haider Ali", "Copper", "Paisa", "Haidarnagar", "Extremely Rare"],
    image: "images/445.jpg",
    images: ["images/445.jpg"],
    featured: true,
  },
  {
    id: "IN-058",
    name: "Rupee",
    ruler: "Rafi Ud Darjat",
    kingdom: "Mughal Empire",
    era: "Mughal & Sultanate",
    period: "1719 A.D.",
    mint: "Gwalior Mint",
    grade: "Very Fine",
    denomination: "1 Rupee",
    metal: "Silver",
    rarity: "Very Rare",
    country: "India",
    description: "Silver rupee of Rafi Ud Darjat of the Mughal Empire, AH 1131, struck at the Gwalior mint. Rafi Ud Darjat ruled for only three months in 1719, making his coinage among the rarest of Mughal issues. This coin features elegant Nastaliq calligraphy typical of the period.",
    obverse: "Persian legends in emperor's name and titles",
    reverse: "Mint name Gwalior and date AH 1131",
    weight: "",
    diameter: "",
    tags: ["Mughal", "Rafi Ud Darjat", "Silver", "Rupee", "Gwalior", "Short Reign"],
    image: "images/448.jpg",
    images: ["images/448.jpg"],
    featured: true,
  },
  {
    id: "IN-059",
    name: "Nazarana Rupee",
    ruler: "Wajid Ali Shah",
    kingdom: "Princely State of Awadh",
    era: "Princely States",
    period: "1847–1856 A.D.",
    mint: "Awadh Mint",
    grade: "Gem Uncirculated",
    denomination: "Nazarana Rupee",
    metal: "Silver",
    rarity: "Rare",
    country: "India",
    description: "Silver Nazarana Rupee of Wajid Ali Shah from the Princely State of Awadh (1847-1856 A.D.). Gem grade, centrally struck. Wajid Ali Shah was the last Nawab of Awadh before British annexation. Nazarana coins were special presentation issues, struck to exceptional standards for ceremonial purposes.",
    obverse: "Crown and floral motifs with Persian legends",
    reverse: "Persian legends with date and titles",
    weight: "",
    diameter: "",
    tags: ["Awadh", "Wajid Ali Shah", "Silver", "Rupee", "Nazarana", "Gem"],
    image: "images/449.jpg",
    images: ["images/449.jpg"],
    featured: true,
  },
  {
    id: "IN-060",
    name: "½ Paisa",
    ruler: "Tipu Sultan",
    kingdom: "Kingdom of Mysore",
    era: "Mughal & Sultanate",
    period: "1782–1799 A.D.",
    mint: "Bangalore Mint",
    grade: "Extremely Fine",
    denomination: "½ Paisa",
    metal: "Copper",
    rarity: "Scarce",
    country: "India",
    description: "Half paisa copper coin of Tipu Sultan from the Kingdom of Mysore (1782-1799 A.D.), struck at the Bangalore mint. Extremely fine grade, scarce. Features an elephant motif. The Bangalore mint was one of several mints established by Tipu Sultan for his revolutionary coinage system.",
    obverse: "Elephant motif within dotted border",
    reverse: "Persian legends with mint name",
    weight: "",
    diameter: "",
    tags: ["Mysore", "Tipu Sultan", "Copper", "Paisa", "Bangalore", "Elephant"],
    image: "images/450.jpg",
    images: ["450.jpg"],
    featured: false,
  },
  {
    id: "IN-061",
    name: "¼ Paisa",
    ruler: "Tipu Sultan",
    kingdom: "Kingdom of Mysore",
    era: "Mughal & Sultanate",
    period: "1782–1799 A.D.",
    mint: "Bangalore Mint",
    grade: "Extremely Fine",
    denomination: "¼ Paisa",
    metal: "Copper",
    rarity: "Scarce",
    country: "India",
    description: "Quarter paisa copper coin of Tipu Sultan (1782-1799 A.D.), struck at the Bangalore mint. Extremely fine grade, scarce. Features the characteristic design elements of Tipu's innovative coinage, distinct from traditional Mughal conventions.",
    obverse: "Decorated design within dotted border",
    reverse: "Persian legends with mint name",
    weight: "",
    diameter: "",
    tags: ["Mysore", "Tipu Sultan", "Copper", "Paisa", "Bangalore"],
    image: "images/454.jpg",
    images: ["454.jpg"],
    featured: false,
  },
];

// Derive filter options from data
const ALL_ERAS = [...new Set(COINS_DB.map(c => c.era))].sort();
const ALL_METALS = [...new Set(COINS_DB.map(c => c.metal))].sort();
const ALL_KINGDOMS = [...new Set(COINS_DB.map(c => c.kingdom))].sort();

// ── Nav mobile toggle ────────────────────────────────────────
function initNav() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks  = document.querySelector('.nav-links');
  if (!hamburger || !navLinks) return;

  // Inject backdrop element once
  let backdrop = document.querySelector('.nav-backdrop');
  if (!backdrop) {
    backdrop = document.createElement('div');
    backdrop.className = 'nav-backdrop';
    document.body.appendChild(backdrop);
  }

  // Move nav-links to body on mobile to escape sticky header stacking context
  function ensureMobilePlacement() {
    if (window.innerWidth <= 768 && navLinks.parentElement !== document.body) {
      document.body.appendChild(navLinks);
    } else if (window.innerWidth > 768 && navLinks.parentElement === document.body) {
      const navWrapper = document.querySelector('.nav-wrapper');
      if (navWrapper) navWrapper.insertBefore(navLinks, hamburger);
    }
  }
  ensureMobilePlacement();
  window.addEventListener('resize', ensureMobilePlacement);

  function openDrawer() {
    navLinks.classList.add('open');
    hamburger.classList.add('open');
    backdrop.classList.add('open');
    document.body.classList.add('nav-open');
    hamburger.setAttribute('aria-expanded', 'true');
    hamburger.setAttribute('aria-label', 'Close menu');
  }

  function closeDrawer() {
    navLinks.classList.remove('open');
    hamburger.classList.remove('open');
    backdrop.classList.remove('open');
    document.body.classList.remove('nav-open');
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.setAttribute('aria-label', 'Menu');
  }

  function toggleDrawer() {
    navLinks.classList.contains('open') ? closeDrawer() : openDrawer();
  }

  hamburger.addEventListener('click', toggleDrawer);
  backdrop.addEventListener('click', closeDrawer);

  // Close on link click — let navigation happen first
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      setTimeout(closeDrawer, 50);
    });
  });

  // Close on Escape key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeDrawer();
  });

  // Close drawer if window is resized to desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) closeDrawer();
  });

  // Swipe right to close
  let touchStartX = 0;
  navLinks.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });
  navLinks.addEventListener('touchend', e => {
    const touchEndX = e.changedTouches[0].screenX;
    if (touchStartX - touchEndX < -50) closeDrawer();
  }, { passive: true });

  // Highlight active page
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
}

// ── Modal / Lightbox ─────────────────────────────────────────
let currentModal = null;

function openModal(coinId) {
  const coin = COINS_DB.find(c => c.id === coinId);
  if (!coin) return;

  const overlay = document.getElementById('coin-modal');
  if (!overlay) return;

  // Populate modal
  overlay.querySelector('.modal-kingdom').textContent = `${coin.kingdom} · ${coin.period}`;
  overlay.querySelector('.modal-title').textContent = `${coin.denomination} — ${coin.ruler}`;

  const specs = overlay.querySelector('.coin-specs');
  specs.innerHTML = [
    ['Mint', coin.mint],
    ['Metal', coin.metal],
    ['Grade', coin.grade],
    ['Weight', coin.weight],
    ['Diameter', coin.diameter],
    ['Rarity', coin.rarity],
    ['Obverse', coin.obverse],
    ['Reverse', coin.reverse],
  ].map(([l, v]) => `
    <div class="spec-item">
      <span class="spec-label">${l}</span>
      <span class="spec-value">${v}</span>
    </div>
  `).join('');

  overlay.querySelector('.modal-desc').textContent = coin.description;

  // Images
  const mainImg = overlay.querySelector('.modal-main-image');
  const thumbsEl = overlay.querySelector('.modal-thumbs');

  const imgs = coin.images && coin.images.length ? coin.images : [coin.image];

  mainImg.src = imgs[0];
  mainImg.alt = coin.name;
  mainImg.onerror = () => { mainImg.src = 'images/placeholder.jpg'; };

  thumbsEl.innerHTML = imgs.map((src, i) => `
    <img src="${src}" alt="${coin.name} ${i+1}" class="modal-thumb ${i===0?'active':''}"
         onerror="this.src='images/placeholder.jpg'"
         onclick="switchModalImage(this, '${src}')">
  `).join('');

  // Catalog ID
  const idEl = overlay.querySelector('.modal-catalog-id');
  if (idEl) idEl.textContent = `#${coin.id}`;

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  currentModal = overlay;
}

function switchModalImage(thumb, src) {
  const modal = thumb.closest('.modal-overlay');
  modal.querySelector('.modal-main-image').src = src;
  modal.querySelectorAll('.modal-thumb').forEach(t => t.classList.remove('active'));
  thumb.classList.add('active');
}

function closeModal() {
  if (!currentModal) return;
  currentModal.classList.remove('open');
  document.body.style.overflow = '';
  currentModal = null;
}

function initModal() {
  const overlay = document.getElementById('coin-modal');
  if (!overlay) return;

  overlay.querySelector('.modal-close').addEventListener('click', closeModal);
  overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
}

// ── Coin Grid Renderer ───────────────────────────────────────
function renderCoinCards(coins, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  if (!coins.length) {
    container.innerHTML = `
      <div style="grid-column:1/-1;text-align:center;padding:4rem 2rem;color:var(--text-dim);">
        <p style="font-family:'Cinzel',serif;font-size:0.8rem;letter-spacing:0.15em;text-transform:uppercase;">
          No coins match your search
        </p>
      </div>`;
    return;
  }

  container.innerHTML = coins.map((coin, i) => `
    <div class="coin-card animate-in animate-delay-${Math.min(i%4+1,4)}"
         onclick="openModal('${coin.id}')" tabindex="0" role="button"
         aria-label="View ${coin.name} from ${coin.kingdom}">
      <div class="coin-card-image">
        <img src="${coin.image}" alt="${coin.name} — ${coin.kingdom}"
             loading="lazy"
             onerror="this.src='images/placeholder.jpg'">
        <span class="coin-card-badge">${coin.metal}</span>
        <span class="coin-card-id">${coin.id}</span>
      </div>
      <div class="coin-card-body">
        <span class="coin-card-kingdom">${coin.kingdom}</span>
        <p class="coin-card-name">${coin.denomination} · ${coin.ruler}</p>
        <div class="coin-card-meta">
          <span class="meta-tag">${coin.period}</span>
          <span class="meta-tag">${coin.grade}</span>
          ${coin.rarity !== 'Common' ? `<span class="meta-tag">${coin.rarity}</span>` : ''}
        </div>
        <p class="coin-card-desc">${coin.description}</p>
      </div>
    </div>
  `).join('');

  // Keyboard accessibility
  container.querySelectorAll('.coin-card').forEach(card => {
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        card.click();
      }
    });
  });
}

// ── Filter Engine ────────────────────────────────────────────
function filterCoins({ search = '', era = '', metal = '', rarity = '' } = {}) {
  return COINS_DB.filter(c => {
    const q = search.toLowerCase();
    const matchSearch = !q || (
      c.name.toLowerCase().includes(q) ||
      c.kingdom.toLowerCase().includes(q) ||
      c.ruler.toLowerCase().includes(q) ||
      c.description.toLowerCase().includes(q) ||
      c.tags.some(t => t.toLowerCase().includes(q))
    );
    const matchEra = !era || c.era === era;
    const matchMetal = !metal || c.metal.toLowerCase() === metal.toLowerCase();
    const matchRarity = !rarity || c.rarity.toLowerCase() === rarity.toLowerCase();
    return matchSearch && matchEra && matchMetal && matchRarity;
  });
}

// ── Collection page filter init ──────────────────────────────
function initCollectionFilters() {
  const searchEl = document.getElementById('coin-search');
  const eraEl = document.getElementById('filter-era');
  const metalEl = document.getElementById('filter-metal');
  const rarityEl = document.getElementById('filter-rarity');
  const countEl = document.getElementById('results-count');

  if (!searchEl) return;

  function update() {
    const filtered = filterCoins({
      search: searchEl.value,
      era: eraEl ? eraEl.value : '',
      metal: metalEl ? metalEl.value : '',
      rarity: rarityEl ? rarityEl.value : ''
    });
    renderCoinCards(filtered, 'coins-grid');
    if (countEl) countEl.textContent = `${filtered.length} coin${filtered.length !== 1 ? 's' : ''}`;
  }

  [searchEl, eraEl, metalEl, rarityEl].filter(Boolean).forEach(el => {
    el.addEventListener('input', update);
    el.addEventListener('change', update);
  });

  // Era pill filters
  document.querySelectorAll('.filter-pill[data-era]').forEach(pill => {
    pill.addEventListener('click', () => {
      const era = pill.dataset.era;
      if (eraEl) eraEl.value = era;
      document.querySelectorAll('.filter-pill[data-era]').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      update();
    });
  });

  // Populate selects
  if (eraEl) {
    eraEl.innerHTML = '<option value="">All Eras</option>' +
      ALL_ERAS.map(e => `<option value="${e}">${e}</option>`).join('');
  }
  if (metalEl) {
    metalEl.innerHTML = '<option value="">All Metals</option>' +
      ALL_METALS.map(m => `<option value="${m}">${m}</option>`).join('');
  }

  // Initial render
  update();
}

// ── Home page featured coins ─────────────────────────────────
function initHomeFeatured() {
  const featured = COINS_DB.filter(c => c.featured).slice(0, 6);
  renderCoinCards(featured, 'featured-grid');
}

// ── Stats ────────────────────────────────────────────────────
function initStats() {
  const stats = {
    total: COINS_DB.length,
    kingdoms: new Set(COINS_DB.map(c => c.kingdom)).size,
    metals: new Set(COINS_DB.map(c => c.metal)).size,
    eras: new Set(COINS_DB.map(c => c.era)).size
  };

  Object.entries(stats).forEach(([key, val]) => {
    const el = document.getElementById(`stat-${key}`);
    if (el) animateNumber(el, val);
  });
}

function animateNumber(el, target) {
  let current = 0;
  const step = Math.ceil(target / 40);
  const timer = setInterval(() => {
    current = Math.min(current + step, target);
    el.textContent = current + (target > 99 ? '+' : '');
    if (current >= target) clearInterval(timer);
  }, 30);
}

// ── Intersection Observer for animations ─────────────────────
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.animate-in').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
}

// ── Contact form ─────────────────────────────────────────────
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('[type="submit"]');
    btn.textContent = 'Message Sent ✓';
    btn.disabled = true;
    btn.style.background = 'rgba(200,168,75,0.15)';
    btn.style.color = 'var(--gold)';
    btn.style.borderColor = 'var(--gold-dark)';
    setTimeout(() => {
      btn.textContent = 'Send Message';
      btn.disabled = false;
      btn.style = '';
      form.reset();
    }, 3000);
  });
}

// ── Image placeholder fallback ───────────────────────────────
function initImageFallbacks() {
  // Create a canvas-based placeholder
  const canvas = document.createElement('canvas');
  canvas.width = 400;
  canvas.height = 400;
  const ctx = canvas.getContext('2d');

  // Dark background
  ctx.fillStyle = '#0d0b08';
  ctx.fillRect(0, 0, 400, 400);

  // Gold circle
  ctx.strokeStyle = '#c8a84b44';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(200, 200, 150, 0, Math.PI * 2);
  ctx.stroke();

  // Inner circle
  ctx.beginPath();
  ctx.arc(200, 200, 100, 0, Math.PI * 2);
  ctx.stroke();

  // Coin symbol
  ctx.fillStyle = '#3a3020';
  ctx.font = '80px serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('🪙', 200, 200);

  window.PLACEHOLDER_IMG = canvas.toDataURL();

  document.querySelectorAll('img[onerror]').forEach(img => {
    if (!img.getAttribute('onerror').includes('placeholder')) return;
    img.addEventListener('error', function() {
      if (!this.dataset.errored) {
        this.dataset.errored = '1';
        this.src = window.PLACEHOLDER_IMG;
      }
    });
  });
}

// ── Boot ─────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initModal();
  initScrollAnimations();
  initContactForm();

  // Page-specific inits
  if (document.getElementById('featured-grid')) initHomeFeatured();
  if (document.getElementById('coins-grid')) initCollectionFilters();
  if (document.getElementById('stat-total')) initStats();

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    });
  });
});