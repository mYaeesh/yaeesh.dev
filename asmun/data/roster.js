// ASMUN — data/roster.js
// REAL ROSTER — confirmed against the official 51-country roll call (2026-08-08).
// 51 roll call = 48 active + 3 withdrawn. Thailand is a 52nd entry, sign-in sheet only.
//
// status: 'confirmed'  — on the official roll call, delegate named
//         'withdrawn'  — on the roll call, country withdrew, NO delegate, does NOT vote
//         'unconfirmed'— NOT on the official roll call; verify with chair before relying on it
// unresolved: true     — a data conflict to resolve with the chair. See unresolvedNote.
//
// Country labels below are the ROLL-CALL labels (what the dais will actually say).
// These are the join keys for allies.js / blocs.js / questions.js — change here, change there.

/**
 * @typedef {Object} RosterEntry
 * @property {string} country
 * @property {string} flag
 * @property {string} spelling
 * @property {string} pronunciation
 * @property {string} delegateName
 * @property {string} placardNumber
 * @property {'confirmed'|'withdrawn'|'unconfirmed'} status
 * @property {boolean} [isHome]
 * @property {boolean} [unresolved]
 * @property {string}  [unresolvedNote]
 */

/** @type {RosterEntry[]} */
export const roster = [
  { country: 'Afghanistan', flag: '🇦🇫', spelling: 'The Islamic Republic of Afghanistan', pronunciation: 'af-GAN-ih-stan', delegateName: 'Ismail Fauzan Hassan', placardNumber: '', status: 'confirmed' },
  { country: 'Belarus', flag: '🇧🇾', spelling: 'The Republic of Belarus', pronunciation: 'bell-uh-ROOS', delegateName: 'Mariyam Usha Binth Ahmed', placardNumber: '', status: 'confirmed' },
  { country: 'Belgium', flag: '🇧🇪', spelling: 'The Kingdom of Belgium', pronunciation: 'BEL-jum', delegateName: 'Aminath Aini Adnan', placardNumber: '', status: 'confirmed' },
  { country: 'Brazil', flag: '🇧🇷', spelling: 'The Federative Republic of Brazil', pronunciation: 'bruh-ZIL', delegateName: 'Zainab', placardNumber: '', status: 'confirmed' },
  { country: 'Canada', flag: '🇨🇦', spelling: 'Canada', pronunciation: 'KAN-uh-duh', delegateName: 'Mohamed Yaeesh Nasih', placardNumber: '', status: 'confirmed', isHome: true },
  { country: 'Chile', flag: '🇨🇱', spelling: 'The Republic of Chile', pronunciation: 'CHIL-ee', delegateName: 'Ahyan Bin Ibrahim Umar', placardNumber: '', status: 'confirmed' },
  { country: 'China', flag: '🇨🇳', spelling: "The People's Republic of China", pronunciation: 'CHY-nuh', delegateName: 'Aishath Jeen Mohamed Thaufeeq', placardNumber: '', status: 'confirmed' },
  { country: 'DR Congo', flag: '🇨🇩', spelling: 'The Democratic Republic of the Congo', pronunciation: 'KONG-goh — say the full name; distinct from Republic of the Congo', delegateName: 'Aishath Aalaa Mohamed Sami', placardNumber: '', status: 'confirmed' },
  { country: 'Egypt', flag: '🇪🇬', spelling: 'The Arab Republic of Egypt', pronunciation: 'EE-jipt', delegateName: 'Aishath Aimal Rinaz', placardNumber: '', status: 'confirmed' },
  { country: 'Eritrea', flag: '🇪🇷', spelling: 'The State of Eritrea', pronunciation: 'err-ih-TREE-uh', delegateName: 'Aishath Ibhaau Ibrahim', placardNumber: '', status: 'confirmed' },
  { country: 'Ethiopia', flag: '🇪🇹', spelling: 'The Federal Democratic Republic of Ethiopia', pronunciation: 'ee-thee-OH-pee-uh', delegateName: 'Mohamed Iyaas Shaheen', placardNumber: '', status: 'confirmed' },
  { country: 'Finland', flag: '🇫🇮', spelling: 'The Republic of Finland', pronunciation: 'FIN-lund', delegateName: 'Azaan', placardNumber: '', status: 'confirmed' },
  { country: 'France', flag: '🇫🇷', spelling: 'The French Republic', pronunciation: 'FRANSS', delegateName: 'Aminath Nafha Nihaad', placardNumber: '', status: 'confirmed' },
  { country: 'Germany', flag: '🇩🇪', spelling: 'The Federal Republic of Germany', pronunciation: 'JUR-muh-nee', delegateName: 'Aylin Mausoom Saleem', placardNumber: '', status: 'confirmed' },
  { country: 'Ghana', flag: '🇬🇭', spelling: 'The Republic of Ghana', pronunciation: 'GAH-nuh', delegateName: 'Aishath Maira Ahmed', placardNumber: '', status: 'confirmed' },
  { country: 'India', flag: '🇮🇳', spelling: 'The Republic of India', pronunciation: 'IN-dee-uh', delegateName: 'Ashaa Aiman Ali', placardNumber: '', status: 'confirmed' },
  { country: 'Indonesia', flag: '🇮🇩', spelling: 'The Republic of Indonesia', pronunciation: 'in-doh-NEE-zhuh', delegateName: 'Ayra Binthi Shahudhu', placardNumber: '', status: 'confirmed' },
  { country: 'Iran', flag: '🇮🇷', spelling: 'The Islamic Republic of Iran', pronunciation: 'ih-RAHN — not "eye-RAN"', delegateName: 'Aym Ahmed Hameed', placardNumber: '', status: 'confirmed' },
  { country: 'Iraq', flag: '🇮🇶', spelling: 'The Republic of Iraq', pronunciation: 'ih-RAHK — not "eye-RACK"', delegateName: 'Aishath Leesa Ahmed', placardNumber: '', status: 'confirmed' },
  { country: 'Ireland', flag: '🇮🇪', spelling: 'Ireland', pronunciation: 'EYER-lund', delegateName: 'Shibaal Ibn Mohamed Zubair', placardNumber: '', status: 'confirmed' },
  { country: 'Italy', flag: '🇮🇹', spelling: 'The Italian Republic', pronunciation: 'IT-uh-lee', delegateName: 'Aanaa Adil Jameel', placardNumber: '', status: 'confirmed' },
  { country: 'Jordan', flag: '🇯🇴', spelling: 'The Hashemite Kingdom of Jordan', pronunciation: 'JOR-dun — HASH-uh-mite Kingdom', delegateName: 'Maahil Mamdhooh Ibrahim', placardNumber: '', status: 'confirmed' },
  { country: 'Kenya', flag: '🇰🇪', spelling: 'The Republic of Kenya', pronunciation: 'KEN-yuh', delegateName: 'Mariyam Aaya Binth Shujau Ahmed', placardNumber: '', status: 'confirmed' },
  { country: 'Libya', flag: '🇱🇾', spelling: 'The State of Libya', pronunciation: 'LIB-ee-uh', delegateName: 'Mohamed Maayiz Musthaq', placardNumber: '', status: 'confirmed' },
  { country: 'Mexico', flag: '🇲🇽', spelling: 'The United Mexican States', pronunciation: 'MEK-sih-koh', delegateName: 'Fathimath Maisha Imthiyaz', placardNumber: '', status: 'confirmed' },
  { country: 'Morocco', flag: '🇲🇦', spelling: 'The Kingdom of Morocco', pronunciation: 'muh-ROCK-oh', delegateName: "Ibrahim Yash'al Hussain", placardNumber: '', status: 'confirmed' },
  { country: 'Myanmar', flag: '🇲🇲', spelling: 'The Republic of the Union of Myanmar', pronunciation: 'MYAN-mar — roughly "mee-AN-mar"', delegateName: 'Hawwa Lagaafath Majeed', placardNumber: '', status: 'confirmed' },
  { country: 'New Zealand', flag: '🇳🇿', spelling: 'New Zealand', pronunciation: 'noo ZEE-lund', delegateName: 'Aishath Dheema Adam Naseer', placardNumber: '', status: 'confirmed' },
  { country: 'North Korea', flag: '🇰🇵', spelling: "The Democratic People's Republic of Korea", pronunciation: 'dem-uh-KRAT-ik PEEP-ulz ri-PUB-lik of kuh-REE-uh — the dais may call "DPRK"', delegateName: 'Luyoona Mohamed', placardNumber: '', status: 'confirmed' },
  { country: 'Norway', flag: '🇳🇴', spelling: 'The Kingdom of Norway', pronunciation: 'NOR-way', delegateName: "Ash'ham", placardNumber: '', status: 'confirmed', unresolved: true,
    unresolvedNote: "NAME CONFLICT — UNRESOLVED. Sign-in sheet row 26 lists \"Ash'ham\" / GSK for Norway. Sudan (roll call row 53) is seated as \"Mohamed Ash'ham Ibrahim\". These may be two different people or one transcription error. NOT merged, NOT guessed. Confirm with the chair before roll call." },
  { country: 'Pakistan', flag: '🇵🇰', spelling: 'The Islamic Republic of Pakistan', pronunciation: 'PAK-ih-stahn', delegateName: 'Fathimath Ayra Adam', placardNumber: '', status: 'confirmed' },
  { country: 'Palestine', flag: '🇵🇸', spelling: 'The State of Palestine', pronunciation: 'PAL-uh-stine', delegateName: 'Daniya Abdul Qadir', placardNumber: '', status: 'confirmed' },
  { country: 'Poland', flag: '🇵🇱', spelling: 'The Republic of Poland', pronunciation: 'POH-lund', delegateName: 'Leem Binth Ismail', placardNumber: '', status: 'confirmed' },
  { country: 'Russia', flag: '🇷🇺', spelling: 'The Russian Federation', pronunciation: 'RUSH-un fed-uh-RAY-shun', delegateName: 'Ahadh Afsheen Shareef', placardNumber: '', status: 'confirmed' },
  { country: 'Rwanda', flag: '🇷🇼', spelling: 'The Republic of Rwanda', pronunciation: 'roo-AHN-duh', delegateName: 'Dhruv Sinu', placardNumber: '', status: 'confirmed' },
  { country: 'Saudi Arabia', flag: '🇸🇦', spelling: 'The Kingdom of Saudi Arabia', pronunciation: 'SOW-dee uh-RAY-bee-uh', delegateName: 'Mohamed Mishaal Rifaan', placardNumber: '', status: 'confirmed' },
  { country: 'Somalia', flag: '🇸🇴', spelling: 'The Federal Republic of Somalia', pronunciation: 'soh-MAH-lee-uh', delegateName: 'Yafi Hassan Manik', placardNumber: '', status: 'confirmed' },
  { country: 'South Africa', flag: '🇿🇦', spelling: 'The Republic of South Africa', pronunciation: 'sowth AF-rih-kuh', delegateName: 'Jiya Junah', placardNumber: '', status: 'confirmed' },
  { country: 'South Korea', flag: '🇰🇷', spelling: 'The Republic of Korea', pronunciation: 'kuh-REE-uh — formal address is "Republic of Korea"', delegateName: 'Mariyam Shaihaa Ahmed', placardNumber: '', status: 'confirmed' },
  { country: 'Sudan', flag: '🇸🇩', spelling: 'The Republic of the Sudan', pronunciation: 'soo-DAN', delegateName: "Mohamed Ash'ham Ibrahim", placardNumber: '', status: 'confirmed', unresolved: true,
    unresolvedNote: "NAME CONFLICT — UNRESOLVED. See Norway. \"Ash'ham\" appears on both entries. NOT merged, NOT guessed. Confirm with the chair before roll call." },
  { country: 'Switzerland', flag: '🇨🇭', spelling: 'The Swiss Confederation', pronunciation: 'SWIT-zer-lund', delegateName: 'Ali Imjadh Hashim', placardNumber: '', status: 'confirmed' },
  { country: 'Syria', flag: '🇸🇾', spelling: 'The Syrian Arab Republic', pronunciation: 'SEER-ee-uh', delegateName: 'Yoosuf Alaan Arif', placardNumber: '', status: 'confirmed' },
  { country: 'Uganda', flag: '🇺🇬', spelling: 'The Republic of Uganda', pronunciation: 'yoo-GAN-duh', delegateName: 'Abdulla Naish Naif', placardNumber: '', status: 'confirmed' },
  { country: 'UK', flag: '🇬🇧', spelling: 'The United Kingdom of Great Britain and Northern Ireland', pronunciation: 'yoo-NY-ted KING-dum — full name on first mention', delegateName: 'Aishath Asha Fathih', placardNumber: '', status: 'confirmed' },
  { country: 'Ukraine', flag: '🇺🇦', spelling: 'Ukraine', pronunciation: 'yoo-KRAYN — no "the"', delegateName: 'Ahmed Alaan Hazmath', placardNumber: '', status: 'confirmed' },
  { country: 'Uruguay', flag: '🇺🇾', spelling: 'The Oriental Republic of Uruguay', pronunciation: 'OOR-uh-gwye', delegateName: 'Ibrahim Rayaan Ageel', placardNumber: '', status: 'confirmed' },
  { country: 'US', flag: '🇺🇸', spelling: 'The United States of America', pronunciation: 'yoo-NY-ted STAYTS', delegateName: 'Aishath Amna Adnan', placardNumber: '', status: 'confirmed' },
  { country: 'Yemen', flag: '🇾🇪', spelling: 'The Republic of Yemen', pronunciation: 'YEM-un', delegateName: 'Fathimath Laara Farish', placardNumber: '', status: 'confirmed' },

  // --- WITHDRAWN — on the roll call, no delegate, DOES NOT VOTE ---
  { country: 'Sweden', flag: '🇸🇪', spelling: 'The Kingdom of Sweden', pronunciation: 'SWEE-dun', delegateName: '', placardNumber: '', status: 'withdrawn' },
  { country: 'Denmark', flag: '🇩🇰', spelling: 'The Kingdom of Denmark', pronunciation: 'DEN-mark', delegateName: '', placardNumber: '', status: 'withdrawn' },
  { country: 'Hungary', flag: '🇭🇺', spelling: 'Hungary', pronunciation: 'HUNG-guh-ree', delegateName: '', placardNumber: '', status: 'withdrawn' },

  // --- UNCONFIRMED — sign-in sheet only, NOT on the official 51-country roll call ---
  { country: 'Thailand', flag: '🇹🇭', spelling: 'The Kingdom of Thailand', pronunciation: 'TIE-land', delegateName: 'Aayan Ahmed Shareef', placardNumber: '', status: 'unconfirmed' },
];

export const rosterCounts = {
  confirmed:   roster.filter((r) => r.status === 'confirmed').length,    // 48
  withdrawn:   roster.filter((r) => r.status === 'withdrawn').length,    // 3
  unconfirmed: roster.filter((r) => r.status === 'unconfirmed').length,  // 1
  unresolved:  roster.filter((r) => r.unresolved).length,                // 2
};

export default roster;
