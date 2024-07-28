const countries = [
    {country: "Afghanistan",capital: "Kabul", population: 1430000000, flag: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg","languages": ["Pashto","Uzbek","Turkmen"]},
    {country: "Åland Islands",capital: "Mariehamn",languages: ["Swedish"],population: 28875,flag: "https://flagcdn.com/ax.svg"},
    {country: "Albania",capital: "Tirana",languages: ["Albanian"],"population": 2837743,"flag": "https://flagcdn.com/al.svg"},
    {country: "Algeria",capital: "Algiers",languages: ["Arabic"],"population": 43851043,"flag": "https://flagcdn.com/dz.svg"},
    {country: "American Samoa",capital: "Pago Pago",languages: ["English","Samoan"],"population": 55197,"flag": "https://flagcdn.com/as.svg"},
    {country: "Andorra",capital: "Andorra la Vella",languages: ["Catalan"],population: 77265,flag: "https://flagcdn.com/ad.svg"},
    {country: "Angola",capital: "Luanda",languages: ["Portuguese"],population: 32866268,flag: "https://flagcdn.com/ao.svg"},
    {country: "Anguilla",capital: "The Valley",languages: ["English"],population: 13452,flag: "https://flagcdn.com/ai.svg"},
    {country: "Antarctica", languages: ["English", "Russian"], population: 1000, flag: "https://flagcdn.com/aq.svg"},
    {country: "Antigua and Barbuda", capital: "Saint John's", languages: ["English"], population: 97928, flag: "https://flagcdn.com/ag.svg"},
    {country: "Argentina", capital: "Buenos Aires", languages: ["Spanish", "Guaraní"], population: 45376763, flag: "https://flagcdn.com/ar.svg"},
    {country: "Armenia", capital: "Yerevan", languages: ["Armenian"], population: 2963234, flag: "https://flagcdn.com/am.svg"},
    {country: "Aruba", capital: "Oranjestad", languages: ["Dutch", "(Eastern) Punjabi"], population: 106766, flag: "https://flagcdn.com/aw.svg"},
    {country: "Australia", capital: "Canberra", languages: ["English"], population: 25687041, flag: "https://flagcdn.com/au.svg"},
    {country: "Austria", capital: "Vienna", languages: ["German"], population: 8917205, flag: "https://flagcdn.com/at.svg"},
    {country: "Azerbaijan", capital: "Baku", languages: ["Azerbaijani"], population: 10110116, flag: "https://flagcdn.com/az.svg"},
    {country: "Bahamas", capital: "Nassau", languages: ["English"], population: 393248, flag: "https://flagcdn.com/bs.svg" },
    {country: "Bahrain", capital: "Manama", languages: ["Arabic"], population: 1701583, flag: "https://flagcdn.com/bh.svg" },
    {country: "Bangladesh", capital: "Dhaka", languages: ["Bengali"], population: 164689383, flag: "https://flagcdn.com/bd.svg" },
    {country: "Barbados", capital: "Bridgetown", languages: ["English"], population: 287371, flag: "https://flagcdn.com/bb.svg" },
    {country: "Belarus", capital: "Minsk", languages: ["Belarusian", "Russian"], population: 9398861, flag: "https://flagcdn.com/by.svg" },
    {country: "Belgium", capital: "Brussels", languages: ["Dutch", "French", "German"], population: 11555997, flag: "https://flagcdn.com/be.svg" },
    {country: "Belize", capital: "Belmopan", languages: ["English", "Spanish"], population: 397621, flag: "https://flagcdn.com/bz.svg" },
    {country: "Benin", capital: "Porto-Novo", languages: ["French"], population: 12123198, flag: "https://flagcdn.com/bj.svg" },
    {country: "Bermuda", capital: "Hamilton", languages: ["English"], population: 63903, flag: "https://flagcdn.com/bm.svg" },
    {country: "Bhutan", capital: "Thimphu", languages: ["Dzongkha"], population: 771612, flag: "https://flagcdn.com/bt.svg" },
    {country: "Bolivia (Plurinational State of)", capital: "Sucre", languages: ["Spanish", "Aymara", "Quechua"], population: 11673029, flag: "https://flagcdn.com/bo.svg" },
    {country: "Bonaire, Sint Eustatius and Saba", capital: "Kralendijk", languages: ["Dutch"], population: 17408, flag: "https://flagcdn.com/bq.svg" },
    {country: "Bosnia and Herzegovina", capital: "Sarajevo", languages: ["Bosnian", "Croatian", "Serbian"], population: 3280815, flag: "https://flagcdn.com/ba.svg" },
    {country: "Botswana", capital: "Gaborone", languages: ["English", "Tswana"], population: 2351625, flag: "https://flagcdn.com/bw.svg" },
    {country: "Bouvet Island", languages: ["Norwegian", "Norwegian Bokmål", "Norwegian Nynorsk"], population: 0, flag: "https://flagcdn.com/bv.svg" },
    {country: "Brazil", capital: "Brasília", languages: ["Portuguese"], population: 212559409, flag: "https://flagcdn.com/br.svg" },
    {country: "British Indian Ocean Territory", capital: "Diego Garcia", languages: ["English"], population: 3000, flag: "https://flagcdn.com/io.svg" },
    { country: "United States Minor Outlying Islands", languages: ["English"], population: 300, flag: "https://flagcdn.com/um.svg" },
    { country: "Virgin Islands (British)", capital: "Road Town", languages: ["English"], population: 30237, flag: "https://flagcdn.com/vg.svg" },
    { country: "Virgin Islands (U.S.)", capital: "Charlotte Amalie", languages: ["English"], population: 106290, flag: "https://flagcdn.com/vi.svg" },
    { country: "Brunei Darussalam", capital: "Bandar Seri Begawan", languages: ["Malay"], population: 437483, flag: "https://flagcdn.com/bn.svg" },
    { country: "Bulgaria", capital: "Sofia", languages: ["Bulgarian"], population: 6927288, flag: "https://flagcdn.com/bg.svg" },
    { country: "Burkina Faso", capital: "Ouagadougou", languages: ["French", "Fula"], population: 20903278, flag: "https://flagcdn.com/bf.svg" },
    { country: "Burundi", capital: "Gitega", languages: ["French", "Kirundi"], population: 11890781, flag: "https://flagcdn.com/bi.svg" },
    { country: "Cambodia", capital: "Phnom Penh", languages: ["Khmer"], population: 16718971, flag: "https://flagcdn.com/kh.svg" },
    { country: "Cameroon", capital: "Yaoundé", languages: ["English", "French"], population: 26545864, flag: "https://flagcdn.com/cm.svg" },
    { country: "Canada", capital: "Ottawa", languages: ["English", "French"], population: 38005238, flag: "https://flagcdn.com/ca.svg" },
    { country: "Cabo Verde", capital: "Praia", languages: ["Portuguese"], population: 555988, flag: "https://flagcdn.com/cv.svg" },
    { country: "Cayman Islands", capital: "George Town", languages: ["English"], population: 65720, flag: "https://flagcdn.com/ky.svg" },
    { country: "Central African Republic", capital: "Bangui", languages: ["French", "Sango"], population: 4829764, flag: "https://flagcdn.com/cf.svg" },
    { country: "Chad", capital: "N'Djamena", languages: ["French", "Arabic"], population: 16425859, flag: "https://flagcdn.com/td.svg" },
    { country: "Chile", capital: "Santiago", languages: ["Spanish"], population: 19116209, flag: "https://flagcdn.com/cl.svg" },
    { country: "China", capital: "Beijing", languages: ["Chinese"], population: 1402112000, flag: "https://flagcdn.com/cn.svg" },
    { country: "Christmas Island", capital: "Flying Fish Cove", languages: ["English"], population: 2072, flag: "https://flagcdn.com/cx.svg" },
    { country: "Cocos (Keeling) Islands", capital: "West Island", languages: ["English"], population: 550, flag: "https://flagcdn.com/cc.svg" },
    { country: "Colombia", capital: "Bogotá", languages: ["Spanish"], population: 50882884, flag: "https://flagcdn.com/co.svg" },
    { country: "Comoros", capital: "Moroni", languages: ["Arabic", "French"], population: 869595, flag: "https://flagcdn.com/km.svg" },
    { country: "Congo", capital: "Brazzaville", languages: ["French", "Lingala"], population: 5518092, flag: "https://flagcdn.com/cg.svg" },
    { country: "Congo (Democratic Republic of the)", capital: "Kinshasa", languages: ["French", "Lingala", "Kongo", "Swahili", "Luba-Katanga"], population: 89561404, flag: "https://flagcdn.com/cd.svg" },
    { country: "Cook Islands", capital: "Avarua", languages: ["English", "Cook Islands Māori"], population: 18100, flag: "https://flagcdn.com/ck.svg" },
    { country: "Costa Rica", capital: "San José", languages: ["Spanish"], population: 5094114, flag: "https://flagcdn.com/cr.svg" },
    { country: "Croatia", capital: "Zagreb", languages: ["Croatian"], population: 4047200, flag: "https://flagcdn.com/hr.svg" },
    { country: "Cuba", capital: "Havana", languages: ["Spanish"], population: 11326616, flag: "https://flagcdn.com/cu.svg" },
    { country: "Curaçao", capital: "Willemstad", languages: ["Dutch", "(Eastern) Punjabi", "English"], population: 155014, flag: "https://flagcdn.com/cw.svg" },
    { country: "Cyprus", capital: "Nicosia", languages: ["Greek (modern)", "Turkish", "Armenian"], population: 1207361, flag: "https://flagcdn.com/cy.svg" },
    { country: "Czech Republic", capital: "Prague", languages: ["Czech", "Slovak"], population: 10698896, flag: "https://flagcdn.com/cz.svg" },
    { country: "Denmark", capital: "Copenhagen", languages: ["Danish"], population: 5831404, flag: "https://flagcdn.com/dk.svg" },
    { country: "Djibouti", capital: "Djibouti", languages: ["French", "Arabic"], population: 988002, flag: "https://flagcdn.com/dj.svg" },
    { country: "Dominica", capital: "Roseau", languages: ["English"], population: 71991, flag: "https://flagcdn.com/dm.svg" },
    { country: "Dominican Republic", capital: "Santo Domingo", languages: ["Spanish"], population: 10847904, flag: "https://flagcdn.com/do.svg" },
    { country: "Ecuador", capital: "Quito", languages: ["Spanish"], population: 17643060, flag: "https://flagcdn.com/ec.svg" },
    { country: "Egypt", capital: "Cairo", languages: ["Arabic"], population: 102334403, flag: "https://flagcdn.com/eg.svg" },
    { country: "El Salvador", capital: "San Salvador", languages: ["Spanish"], population: 6486201, flag: "https://flagcdn.com/sv.svg" },
    { country: "Equatorial Guinea", capital: "Malabo", languages: ["Spanish", "French", "Portuguese", "Fang"], population: 1402985, flag: "https://flagcdn.com/gq.svg" },
    { country: "Eritrea", capital: "Asmara", languages: ["Tigrinya", "Arabic", "English", "Tigre", "Kunama", "Saho", "Bilen", "Nara", "Afar"], population: 5352000, flag: "https://flagcdn.com/er.svg" },
    { country: "Estonia", capital: "Tallinn", languages: ["Estonian"], population: 1331057, flag: "https://flagcdn.com/ee.svg" },
    { country: "Ethiopia", capital: "Addis Ababa", languages: ["Amharic"], population: 114963583, flag: "https://flagcdn.com/et.svg" },
    { country: "Falkland Islands (Malvinas)", capital: "Stanley", languages: ["English"], population: 2563, flag: "https://flagcdn.com/fk.svg" },
    { country: "Faroe Islands", capital: "Tórshavn", languages: ["Faroese"], population: 48865, flag: "https://flagcdn.com/fo.svg" },
    { country: "Fiji", capital: "Suva", languages: ["English", "Fijian", "Fiji Hindi", "Rotuman"], population: 896444, flag: "https://flagcdn.com/fj.svg" },
    { country: "Finland", capital: "Helsinki", languages: ["Finnish", "Swedish"], population: 5530719, flag: "https://flagcdn.com/fi.svg" },
    { country: "France", capital: "Paris", languages: ["French"], population: 67391582, flag: "https://flagcdn.com/fr.svg" },
    { country: "French Guiana", capital: "Cayenne", languages: ["French"], population: 254541, flag: "https://flagcdn.com/gf.svg" },
    { country: "French Southern Territories", capital: "Port-aux-Français", languages: ["French"], population: 140, flag: "https://flagcdn.com/tf.svg" },
    { country: "Gabon", capital: "Libreville", languages: ["French"], population: 2225728, flag: "https://flagcdn.com/ga.svg" },
    { country: "Gambia", capital: "Banjul", languages: ["English"], population: 2416664, flag: "https://flagcdn.com/gm.svg" },
    { country: "Georgia", capital: "Tbilisi", languages: ["Georgian"], population: 3714000, flag: "https://flagcdn.com/ge.svg" },
    { country: "Germany", capital: "Berlin", languages: ["German"], population: 83240525, flag: "https://flagcdn.com/de.svg" },
    { country: "Ghana", capital: "Accra", languages: ["English"], population: 31072945, flag: "https://flagcdn.com/gh.svg" },
    { country: "Gibraltar", capital: "Gibraltar", languages: ["English"], population: 33691, flag: "https://flagcdn.com/gi.svg" },
    { country: "Greece", capital: "Athens", languages: ["Greek (modern)"], population: 10715549, flag: "https://flagcdn.com/gr.svg" },
    { country: "Greenland", capital: "Nuuk", population: 56367, flag: "https://flagcdn.com/gl.svg", languages: ["Kalaallisut"] },
    { country: "Grenada", capital: "St. George's", population: 112519, flag: "https://flagcdn.com/gd.svg", languages: ["English"] },
    { country: "Guadeloupe", capital: "Basse-Terre", population: 400132, flag: "https://flagcdn.com/gp.svg", languages: ["French"] },
    { country: "Guam", capital: "Hagåtña", population: 168783, flag: "https://flagcdn.com/gu.svg", languages: ["English", "Chamorro", "Spanish"] },
    { country: "Guatemala", capital: "Guatemala City", population: 16858333, flag: "https://flagcdn.com/gt.svg", languages: ["Spanish"] },
    { country: "Guernsey", capital: "St. Peter Port", population: 62999, flag: "https://flagcdn.com/gg.svg", languages: ["English", "French"] },
    { country: "Guinea", capital: "Conakry", population: 13132792, flag: "https://flagcdn.com/gn.svg", languages: ["French", "Fula"] },
    { country: "Guinea-Bissau", capital: "Bissau", population: 1967998, flag: "https://flagcdn.com/gw.svg", languages: ["Portuguese"] },
    { country: "Guyana", capital: "Georgetown", population: 786559, flag: "https://flagcdn.com/gy.svg", languages: ["English"] },
    { country: "Haiti", capital: "Port-au-Prince", population: 11402533, flag: "https://flagcdn.com/ht.svg", languages: ["French", "Haitian"] },
    { country: "Heard Island and McDonald Islands", population: 0, flag: "https://flagcdn.com/hm.svg", languages: ["English"] },
    { country: "Vatican City", capital: "Vatican City", population: 451, flag: "https://flagcdn.com/va.svg", languages: ["Latin", "Italian", "French", "German"] },
    { country: "Honduras", capital: "Tegucigalpa", population: 9904608, flag: "https://flagcdn.com/hn.svg", languages: ["Spanish"] },
    { country: "Hungary", capital: "Budapest", population: 9749763, flag: "https://flagcdn.com/hu.svg", languages: ["Hungarian"] },
    { country: "Hong Kong", capital: "City of Victoria", population: 7481800, flag: "https://flagcdn.com/hk.svg", languages: ["English", "Chinese"] },
    { country: "Iceland", capital: "Reykjavík", population: 366425, flag: "https://flagcdn.com/is.svg", languages: ["Icelandic"] },
    { country: "India", capital: "New Delhi", population: 1380004385, flag: "https://flagcdn.com/in.svg", languages: ["Hindi", "English"] },
    { country: "Indonesia", capital: "Jakarta", population: 273523621, flag: "https://flagcdn.com/id.svg", languages: ["Indonesian"] },
    { country: "Ivory Coast", capital: "Yamoussoukro", population: 26378275, flag: "https://flagcdn.com/ci.svg", languages: ["French"] },
    { country: "Iran", capital: "Tehran", population: 83992953, flag: "https://flagcdn.com/ir.svg", languages: ["Persian (Farsi)"] },
    { country: "Iraq", capital: "Baghdad", population: 40222503, flag: "https://flagcdn.com/iq.svg", languages: ["Arabic", "Kurdish"] },
    { country: "Ireland", capital: "Dublin", population: 4994724, flag: "https://flagcdn.com/ie.svg", languages: ["Irish", "English"] },
    { country: "Isle of Man", capital: "Douglas", population: 85032, flag: "https://flagcdn.com/im.svg", languages: ["English", "Manx"] },
    { country: "Israel", capital: "Jerusalem", population: 9216900, flag: "https://flagcdn.com/il.svg", languages: ["Hebrew (modern)", "Arabic"] },
    { country: "Italy", capital: "Rome", population: 59554023, flag: "https://flagcdn.com/it.svg", languages: ["Italian"] },
    { country: "Jamaica", capital: "Kingston", population: 2961161, flag: "https://flagcdn.com/jm.svg", languages: ["English"] },
    { country: "Japan", capital: "Tokyo", population: 125836021, flag: "https://flagcdn.com/jp.svg", languages: ["Japanese"] },
    { country: "Jersey", capital: "Saint Helier", population: 100800, flag: "https://flagcdn.com/je.svg", languages: ["English", "French"] },
    { country: "Jordan", capital: "Amman", population: 10203140, flag: "https://flagcdn.com/jo.svg", languages: ["Arabic"] },
    { country: "Kazakhstan", capital: "Nur-Sultan", population: 18754440, flag: "https://flagcdn.com/kz.svg", languages: ["Kazakh", "Russian"] },
    { country: "Kenya", capital: "Nairobi", population: 53771300, flag: "https://flagcdn.com/ke.svg", languages: ["English", "Swahili"] },
    { country: "Kiribati", capital: "South Tarawa", population: 119446, flag: "https://flagcdn.com/ki.svg", languages: ["English"] },
    { country: "Kuwait", capital: "Kuwait City", population: 4270563, flag: "https://flagcdn.com/kw.svg", languages: ["Arabic"] },
    { country: "Kyrgyzstan", capital: "Bishkek", population: 6591600, flag: "https://flagcdn.com/kg.svg", languages: ["Kyrgyz", "Russian"] },
    { country: "Laos", capital: "Vientiane", population: 7275556, flag: "https://flagcdn.com/la.svg", languages: ["Lao"] },
    { country: "Latvia", capital: "Riga", population: 1901548, flag: "https://flagcdn.com/lv.svg", languages: ["Latvian"] },
    { country: "Lebanon", capital: "Beirut", population: 6825442, flag: "https://flagcdn.com/lb.svg", languages: ["Arabic", "French"] },
    { country: "Lesotho", capital: "Maseru", population: 2142252, flag: "https://flagcdn.com/ls.svg", languages: ["English", "Southern Sotho"] },
    { country: "Liberia", capital: "Monrovia", population: 5057677, flag: "https://flagcdn.com/lr.svg", languages: ["English"] },
    { country: "Libya", capital: "Tripoli", population: 6871287, flag: "https://flagcdn.com/ly.svg", languages: ["Arabic"] },
    { country: "Liechtenstein", capital: "Vaduz", population: 38137, flag: "https://flagcdn.com/li.svg", languages: ["German"] },
    { country: "Lithuania", capital: "Vilnius", population: 2794700, flag: "https://flagcdn.com/lt.svg", languages: ["Lithuanian"] },
    { country: "Luxembourg", capital: "Luxembourg", population: 632275, flag: "https://flagcdn.com/lu.svg", languages: ["French", "German", "Luxembourgish"] },
    { country: "Macao", population: 649342, flag: "https://flagcdn.com/mo.svg", languages: ["Chinese", "Portuguese"] },
    { country: "North Macedonia", capital: "Skopje", population: 2083380, flag: "https://flagcdn.com/mk.svg", languages: ["Macedonian"] },
    { country: "Madagascar", capital: "Antananarivo", population: 27691019, flag: "https://flagcdn.com/mg.svg", languages: ["French", "Malagasy"] },
    { country: "Malawi", capital: "Lilongwe", population: 19129955, flag: "https://flagcdn.com/mw.svg", languages: ["English", "Chichewa"] },
    { country: "Malaysia", capital: "Kuala Lumpur", population: 32365998, flag: "https://flagcdn.com/my.svg", languages: ["Malaysian"] },
    { country: "Maldives", capital: "Malé", population: 540542, flag: "https://flagcdn.com/mv.svg", languages: ["Divehi"] },
    { country: "Mali", capital: "Bamako", population: 20250834, flag: "https://flagcdn.com/ml.svg", languages: ["French"] },
    { country: "Malta", capital: "Valletta", population: 525285, flag: "https://flagcdn.com/mt.svg", languages: ["Maltese", "English"] },
    { country: "Marshall Islands", capital: "Majuro", population: 59194, flag: "https://flagcdn.com/mh.svg", languages: ["English", "Marshallese"] },
    { country: "Martinique", capital: "Fort-de-France", population: 378243, flag: "https://flagcdn.com/mq.svg", languages: ["French"] },
    { country: "Mauritania", capital: "Nouakchott", population: 4649660, flag: "https://flagcdn.com/mr.svg", languages: ["Arabic"] },
    { country: "Mauritius", capital: "Port Louis", population: 1265740, flag: "https://flagcdn.com/mu.svg", languages: ["English"] },
    { country: "Mayotte", capital: "Mamoudzou", population: 226915, flag: "https://flagcdn.com/yt.svg", languages: ["French"] },
    { country: "Mexico", capital: "Mexico City", population: 128932753, flag: "https://flagcdn.com/mx.svg", languages: ["Spanish"] },
    { country: "Micronesia (Federated States of)", capital: "Palikir", population: 115021, flag: "https://flagcdn.com/fm.svg", languages: ["English"] },
    { country: "Moldova (Republic of)", capital: "Chișinău", population: 2617820, flag: "https://flagcdn.com/md.svg", languages: ["Romanian"] },
    { country: "Monaco", capital: "Monaco", population: 39244, flag: "https://flagcdn.com/mc.svg", languages: ["French"] },
    { country: "Mongolia", capital: "Ulan Bator", population: 3278292, flag: "https://flagcdn.com/mn.svg", languages: ["Mongolian"] },
    { country: "Montenegro", capital: "Podgorica", population: 621718, flag: "https://flagcdn.com/me.svg", languages: ["Serbian", "Bosnian", "Albanian", "Croatian"] },
    { country: "Montserrat", capital: "Plymouth", population: 4922, flag: "https://flagcdn.com/ms.svg", languages: ["English"] },
    { country: "Morocco", capital: "Rabat", population: 36910558, flag: "https://flagcdn.com/ma.svg", languages: ["Arabic"] },
    { country: "Mozambique", capital: "Maputo", population: 31255435, flag: "https://flagcdn.com/mz.svg", languages: ["Portuguese"] },
    { country: "Myanmar", capital: "Naypyidaw", population: 54409794, flag: "https://flagcdn.com/mm.svg", languages: ["Burmese"] },
    { country: "Namibia", capital: "Windhoek", population: 2540916, flag: "https://flagcdn.com/na.svg", languages: ["English", "Afrikaans"] },
    { country: "Nauru", capital: "Yaren", population: 10834, flag: "https://flagcdn.com/nr.svg", languages: ["English", "Nauruan"] },
    { country: "Nepal", capital: "Kathmandu", population: 29136808, flag: "https://flagcdn.com/np.svg", languages: ["Nepali"] },
    { country: "Netherlands", capital: "Amsterdam", population: 17441139, flag: "https://flagcdn.com/nl.svg", languages: ["Dutch"] },
    { country: "New Caledonia", capital: "Nouméa", population: 271960, flag: "https://flagcdn.com/nc.svg", languages: ["French"] },
    { country: "New Zealand", capital: "Wellington", population: 5084300, flag: "https://flagcdn.com/nz.svg", languages: ["English", "Māori"] },
    { country: "Nicaragua", capital: "Managua", population: 6624554, flag: "https://flagcdn.com/ni.svg", languages: ["Spanish"] },
    { country: "Niger", capital: "Niamey", population: 24206636, flag: "https://flagcdn.com/ne.svg", languages: ["French"] },
    { country: "Nigeria", capital: "Abuja", population: 206139587, flag: "https://flagcdn.com/ng.svg", languages: ["English"] },
    { country: "Niue", capital: "Alofi", population: 1470, flag: "https://flagcdn.com/nu.svg", languages: ["English"] },
    { country: "Norfolk Island", capital: "Kingston", population: 2302, flag: "https://flagcdn.com/nf.svg", languages: ["English"] },
    { country: "Korea (Democratic People's Republic of)", capital: "Pyongyang", population: 25778815, flag: "https://flagcdn.com/kp.svg", languages: ["Korean"] },
    { country: "Northern Mariana Islands", capital: "Saipan", population: 57557, flag: "https://flagcdn.com/mp.svg", languages: ["English", "Chamorro"] },
    { country: "Norway", capital: "Oslo", population: 5379475, flag: "https://flagcdn.com/no.svg", languages: ["Norwegian", "Norwegian Bokmål", "Norwegian Nynorsk"] },
    { country: "Oman", capital: "Muscat", population: 5106622, flag: "https://flagcdn.com/om.svg", languages: ["Arabic"] },
    { country: "Pakistan", capital: "Islamabad", population: 220892331, flag: "https://flagcdn.com/pk.svg", languages: ["Urdu", "English"] },
    { country: "Palau", capital: "Ngerulmud", population: 18092, flag: "https://flagcdn.com/pw.svg", languages: ["English"] },
    { country: "Palestine, State of", capital: "Ramallah", population: 4803269, flag: "https://flagcdn.com/ps.svg", languages: ["Arabic"] },
    { country: "Panama", capital: "Panama City", population: 4314768, flag: "https://flagcdn.com/pa.svg", languages: ["Spanish"] },
    { country: "Papua New Guinea", capital: "Port Moresby", population: 8947027, flag: "https://flagcdn.com/pg.svg", languages: ["English", "Hiri Motu", "Tok Pisin"] },
    { country: "Paraguay", capital: "Asunción", population: 7132538, flag: "https://flagcdn.com/py.svg", languages: ["Spanish", "Guarani"] },
    { country: "Peru", capital: "Lima", population: 32971846, flag: "https://flagcdn.com/pe.svg", languages: ["Spanish"] },
    { country: "Philippines", capital: "Manila", population: 109581085, flag: "https://flagcdn.com/ph.svg", languages: ["Filipino", "English"] },
    { country: "Pitcairn", capital: "Adamstown", population: 56, flag: "https://flagcdn.com/pn.svg", languages: ["English"] },
    {country: "Poland", capital: "Warsaw", languages: ["Polish"], population: 37950802, flag: "https://flagcdn.com/pl.svg"},
	{country: "Portugal", capital: "Lisbon", languages: ["Portuguese"], population: 10305564, flag: "https://flagcdn.com/pt.svg"},
	{country: "PuertoRico", capital: "SanJuan", languages: ["Spanish","English"], population: 3194034, flag: "https://flagcdn.com/pr.svg"},
	{country: "Qatar", capital: "Doha", languages: ["Arabic"], population: 2881060, flag: "https://flagcdn.com/qa.svg"},
	{country: "RepublicofKosovo", capital: "Pristina", languages: ["Albanian","Serbian"], population: 1775378, flag: "https://flagcdn.com/xk.svg"},
	{country: "Réunion", capital: "Saint-Denis", languages: ["French"], population: 840974, flag: "https://flagcdn.com/re.svg"},
	{country: "Romania", capital: "Bucharest", languages: ["Romanian"], population: 19286123, flag: "https://flagcdn.com/ro.svg"},
	{country: "RussianFederation", capital: "Moscow", languages: ["Russian"], population: 144104080, flag: "https://flagcdn.com/ru.svg"},
	{country: "Rwanda", capital: "Kigali", languages: ["Kinyarwanda","English","French"], population: 12952209, flag: "https://flagcdn.com/rw.svg"},
	{country: "SaintBarthélemy", capital: "Gustavia", languages: ["French"], population: 9417, flag: "https://flagcdn.com/bl.svg"},
	{country: ["SaintHelena","AscensionandTristandaCunha"], capital: "Jamestown", languages: ["English"], population: 4255, flag: "https://flagcdn.com/sh.svg"},
	{country: "SaintKittsandNevis", capital: "Basseterre", languages: ["English"], population: 53192, flag: "https://flagcdn.com/kn.svg"},
	{country: "SaintLucia", capital: "Castries", languages: ["English"], population: 183629, flag: "https://flagcdn.com/lc.svg"},
	{country: "SaintMartin(Frenchpart)", capital: "Marigot", languages: ["English","French","Dutch"], population: 38659, flag: "https://flagcdn.com/mf.svg"},
	{country: "SaintPierreandMiquelon", capital: "Saint-Pierre", languages: ["French"], population: 6069, flag: "https://flagcdn.com/pm.svg"},
	{country: "SaintVincentandtheGrenadines", capital: "Kingstown", languages: ["English"], population: 110947, flag: "https://flagcdn.com/vc.svg"},
	{country: "Samoa", capital: "Apia", languages: ["Samoan","English"], population: 198410, flag: "https://flagcdn.com/ws.svg"},
	{country: "SanMarino", capital: "CityofSanMarino", languages: ["Italian"], population: 33938, flag: "https://flagcdn.com/sm.svg"},
	{country: "SaoTomeandPrincipe", capital: "SãoTomé", languages: ["Portuguese"], population: 219161, flag: "https://flagcdn.com/st.svg"},
    {country: "SaudiArabia", capital: "Riyadh", languages: ["Arabic"], population: 34813867, flag: "https://flagcdn.com/sa.svg"},
	{country: "Senegal", capital: "Dakar", languages: ["French"], population: 16743930, flag: "https://flagcdn.com/sn.svg"},
	{country: "Serbia", capital: "Belgrade", languages: ["Serbian"], population: 6908224, flag: "https://flagcdn.com/rs.svg"},
	{country: "Seychelles", capital: "Victoria", languages: ["French","English"], population: 98462, flag: "https://flagcdn.com/sc.svg"},
	{country: "SierraLeone", capital: "Freetown", languages: ["English"], population: 7976985, flag: "https://flagcdn.com/sl.svg"},
    { country: "Singapore", capital: "Singapore", languages: ["English", "Malay", "Tamil", "Chinese"], population: 5685807, flag: "https://flagcdn.com/sg.svg" },
    { country: "SintMaarten (Dutch part)", capital: "Philipsburg", languages: ["Dutch", "English"], population: 40812, flag: "https://flagcdn.com/sx.svg" },
    { country: "Slovakia", capital: "Bratislava", languages: ["Slovak"], population: 5458827, flag: "https://flagcdn.com/sk.svg" },
    { country: "Slovenia", capital: "Ljubljana", languages: ["Slovene"], population: 2100126, flag: "https://flagcdn.com/si.svg" },
    { country: "Solomon Islands", capital: "Honiara", languages: ["English"], population: 686878, flag: "https://flagcdn.com/sb.svg" },
    { country: "Somalia", capital: "Mogadishu", languages: ["Somali", "Arabic"], population: 15893219, flag: "https://flagcdn.com/so.svg" },
    { country: "South Africa", capital: "Pretoria", languages: ["Afrikaans", "English", "Southern Ndebele", "Southern Sotho", "Swati", "Tswana", "Tsonga", "Venda", "Xhosa", "Zulu"], population: 59308690, flag: "https://flagcdn.com/za.svg" },
    { country: "South Georgia and the South Sandwich Islands", capital: "King Edward Point", languages: ["English"], population: 30, flag: "https://flagcdn.com/gs.svg" },
    { country: "Korea (Republic of)", capital: "Seoul", languages: ["Korean"], population: 51780579, flag: "https://flagcdn.com/kr.svg" },
    { country: "Spain", capital: "Madrid", languages: ["Spanish"], population: 47351567, flag: "https://flagcdn.com/es.svg" },
    { country: "Sri Lanka", capital: "Sri Jayawardenepura Kotte", languages: ["Sinhalese", "Tamil"], population: 21919000, flag: "https://flagcdn.com/lk.svg" },
    { country: "Sudan", capital: "Khartoum", languages: ["Arabic", "English"], population: 43849269, flag: "https://flagcdn.com/sd.svg" },
    { country: "South Sudan", capital: "Juba", languages: ["English"], population: 11193729, flag: "https://flagcdn.com/ss.svg" },
    { country: "Suriname", capital: "Paramaribo", languages: ["Dutch"], population: 586634, flag: "https://flagcdn.com/sr.svg" },
    { country: "Svalbard and Jan Mayen", capital: "Longyearbyen", languages: ["Norwegian"], population: 2562, flag: "https://flagcdn.com/sj.svg" },
    { country: "Swaziland", capital: "Mbabane", languages: ["English", "Swati"], population: 1160164, flag: "https://flagcdn.com/sz.svg" },
    { country: "Sweden", capital: "Stockholm", languages: ["Swedish"], population: 10353442, flag: "https://flagcdn.com/se.svg" },
    { country: "Switzerland", capital: "Bern", languages: ["German", "French", "Italian", "Romansh"], population: 8636896, flag: "https://flagcdn.com/ch.svg" },
    { country: "Syrian Arab Republic", capital: "Damascus", languages: ["Arabic"], population: 17500657, flag: "https://flagcdn.com/sy.svg" },
    { country: "Taiwan", capital: "Taipei", languages: ["Chinese"], population: 23824388, flag: "https://flagcdn.com/tw.svg" },
    { country: "Tajikistan", capital: "Dushanbe", languages: ["Tajik"], population: 9537642, flag: "https://flagcdn.com/tj.svg" },
    { country: "United Republic of Tanzania", capital: "Dodoma", languages: ["Swahili", "English"], population: 59734218, flag: "https://flagcdn.com/tz.svg" },
    { country: "Thailand", capital: "Bangkok", languages: ["Thai"], population: 69799978, flag: "https://flagcdn.com/th.svg" },
    { country: "Timor-Leste", capital: "Dili", languages: ["Portuguese", "Tetum"], population: 1267972, flag: "https://flagcdn.com/tl.svg" },
    { country: "Togo", capital: "Lomé", languages: ["French"], population: 8278724, flag: "https://flagcdn.com/tg.svg" },
    { country: "Tokelau", capital: "Atafu", languages: ["English"], population: 1357, flag: "https://flagcdn.com/tk.svg" },
    { country: "Tonga", capital: "Nuku'alofa", languages: ["English", "Tongan"], population: 105695, flag: "https://flagcdn.com/to.svg" },
    { country: "Trinidad and Tobago", capital: "Port of Spain", languages: ["English"], population: 1399488, flag: "https://flagcdn.com/tt.svg" },
    { country: "Tunisia", capital: "Tunis", languages: ["Arabic"], population: 11935144, flag: "https://flagcdn.com/tn.svg" },
    { country: "Turkey", capital: "Ankara", languages: ["Turkish"], population: 84339067, flag: "https://flagcdn.com/tr.svg" },
    { country: "Turkmenistan", capital: "Ashgabat", languages: ["Turkmen"], population: 6031187, flag: "https://flagcdn.com/tm.svg" },
    { country: "Turks and Caicos Islands", capital: "Cockburn Town", languages: ["English"], population: 43000, flag: "https://flagcdn.com/tc.svg" },
    { country: "Tuvalu", capital: "Funafuti", languages: ["English"], population: 11508, flag: "https://flagcdn.com/tv.svg" },
    { country: "Uganda", capital: "Kampala", languages: ["English", "Swahili"], population: 47176500, flag: "https://flagcdn.com/ug.svg" },
    { country: "Ukraine", capital: "Kiev", languages: ["Ukrainian"], population: 43733762, flag: "https://flagcdn.com/ua.svg" },
    { country: "United Arab Emirates", capital: "Abu Dhabi", languages: ["Arabic"], population: 9890402, flag: "https://flagcdn.com/ae.svg" },
    { country: "United Kingdom", capital: "London", languages: ["English"], population: 68207116, flag: "https://flagcdn.com/gb.svg" },
    { country: "United States of America", capital: "Washington, D.C.", languages: ["English"], population: 331002651, flag: "https://flagcdn.com/us.svg" },
    { country: "Uruguay", capital: "Montevideo", languages: ["Spanish"], population: 3473730, flag: "https://flagcdn.com/uy.svg" },
    { country: "Uzbekistan", capital: "Tashkent", languages: ["Uzbek", "Russian"], population: 33469203, flag: "https://flagcdn.com/uz.svg" },
    { country: "Vanuatu", capital: "Port-Vila", languages: ["Bislama", "English", "French"], population: 307145, flag: "https://flagcdn.com/vu.svg" },
    { country: "Venezuela (Bolivarian Republic of)", capital: "Caracas", languages: ["Spanish"], population: 28435940, flag: "https://flagcdn.com/ve.svg" },
    { country: "Viet Nam", capital: "Hanoi", languages: ["Vietnamese"], population: 97338579, flag: "https://flagcdn.com/vn.svg" },
    { country: "Wallis and Futuna", capital: "Mata-Utu", languages: ["French"], population: 15079, flag: "https://flagcdn.com/wf.svg" },
    { country: "Western Sahara", capital: "El Aaiún", languages: ["Arabic"], population: 597330, flag: "https://flagcdn.com/eh.svg" },
    { country: "Yemen", capital: "Sana'a", languages: ["Arabic"], population: 29825964, flag: "https://flagcdn.com/ye.svg" },
    { country: "Zambia", capital: "Lusaka", languages: ["English"], population: 18383955, flag: "https://flagcdn.com/zm.svg" },
    { country: "Zimbabwe", capital: "Harare", languages: ["English", "Shona", "Northern Ndebele"], population: 14862924, flag: "https://flagcdn.com/zw.svg" }
	
];

const countriesData = [
    { country: "India", population: 1430000000 },
    { country: "China", population: 1410000000 },
    { country: "United States", population: 334000000 },
    { country: "Indonesia", population: 273523615 },
    { country: "Pakistan", population: 216565318 },
    { country: "Brazil", population: 212559417 },
    { country: "Nigeria", population: 202915907 },
    { country: "Bangladesh", population: 166303498 },
    { country: "Russia", population: 145934027 },
    { country: "Japan", population: 127817277 }
];

const languagesData = [
    { language: "Mandarin Chinese", speakers: 1090000000 },
    { language: "Spanish", speakers: 460000000 },
    { language: "English", speakers: 379000000 },
    { language: "Hindi", speakers: 341000000 },
    { language: "Arabic", speakers: 315000000 },
    { language: "Bengali", speakers: 228000000 },
    { language: "Portuguese", speakers: 221000000 },
    { language: "Russian", speakers: 154000000 },
    { language: "Japanese", speakers: 128000000 },
    { language: "Punjabi", speakers: 102000000 }
];


function searchCountries(query) {
    const filteredCountries = countries.filter(country =>
        country.country.toLowerCase().includes(query.toLowerCase()) ||
        country.capital.toLowerCase().includes(query.toLowerCase()) ||
        country.population.toString().includes(query) ||
        country.languages.some(language => language.toLowerCase().includes(query.toLowerCase()))
    );

    const tableBody = document.querySelector('#country-table tbody');
    tableBody.innerHTML = filteredCountries.map(country => `
        <div>
            <div>${country.country}</div>
            <div>${country.capital}</div>
            <div>${country.population.toLocaleString()}</div>
            <div>${country.languages.join(', ')}</div>
            <div><img src="${country.flag}" alt="${country.country} flag" style="width: 50px; height: auto;"></div>
        </div>
    `).join('');
}

function displayDetails(type) {
    const container = document.getElementById('country-container');
    container.innerHTML = ''; 

    countries.forEach(country => {
        const element = document.createElement('div');
        if (type === 'name') {
            element.innerHTML = `<img src="${country.flag}" alt="${country.country} flag" style="width: 50px; height: auto; "> ${country.country}`;
        } else if (type === 'capital') {
            element.innerHTML = `<img src="${country.flag}" alt="${country.capital} flag" style="width: 50px; height: auto;"> ${country.capital}`;
        } else if (type === 'population') {
            element.innerHTML = `<img src="${country.flag}" alt="${country.country} flag" style="width: 50px; height: auto; "> ${country.population.toLocaleString()}`;
        }
        container.appendChild(element);
    });
}


function createBarGraph(data, graphId, title) {
    const graph = document.getElementById(graphId);
    const titleElement = document.getElementById('graph-title');
    graph.innerHTML = ''; 
    titleElement.textContent = title; 
    
    const maxVal = Math.max(...data.map(item => item.population || item.speakers));
    data.forEach((item) => {
        const bar = document.createElement("div");
        bar.className = "bar";
        bar.style.width = `${(item.population || item.speakers) / maxVal * 100}%`;
        bar.innerHTML = `<span>${item.country || item.language}</span>${item.population || item.speakers}`;
        graph.appendChild(bar);
    });
}

document.getElementById('population-btn').addEventListener('click', () => {
    createBarGraph(countriesData, 'graph-container', '10 Most Populated Countries in the World');
});

document.getElementById('languages-btn').addEventListener('click', () => {
    createBarGraph(languagesData, 'graph-container', '10 Most Spoken Languages in the World');
});


document.getElementById('name-btn').addEventListener('click', () => displayDetails('name'));
document.getElementById('capital-btn').addEventListener('click', () => displayDetails('capital'));
document.getElementById('population1-btn').addEventListener('click', () => displayDetails('population'));


document.getElementById('search').addEventListener('input', (event) => {
    searchCountries(event.target.value);
});