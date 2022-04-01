let ytVids = [];

function resetYTVids() {
    ytVids = [
        {
            "title": "Intro",
            "id": "1",
            "date": "",
            "thumbnail": "images/Zwangerschapsverlofv3.jpeg",
            "views": "50"
        },
        {
            "title": "Bxl Finest",
            "id": "2",
            "date": "",
            "thumbnail": "images/Zwangerschapsverlofv3.jpeg",
            "views": "100"
        },
        {
            "title": "Jij Niet Zien",
            "id": "3",
            "date": "",
            "thumbnail": "images/Zwangerschapsverlofv3.jpeg",
            "views": "150"
        },
        {
            "title": "Wrap Remix",
            "id": "4",
            "date": "",
            "thumbnail": "images/Zwangerschapsverlofv3.jpeg",
            "views": "200"
        },
        {
            "title": "Dandy",
            "id": "5",
            "date": "",
            "thumbnail": "images/Zwangerschapsverlofv3.jpeg",
            "views": "250"
        },
        {
            "title": "ZG is zo haai",
            "id": "6",
            "date": "",
            "thumbnail": "images/Zwangerschapsverlofv3.jpeg",
            "views": "300"
        },
        {
            "title": "Outfit Van Me Daddy",
            "id": "7",
            "date": "",
            "thumbnail": "images/Zwangerschapsverlofv3.jpeg",
            "views": "350"
        },
        {
            "title": "Tijdelijk",
            "id": "8",
            "date": "",
            "thumbnail": "images/Zwangerschapsverlofv3.jpeg",
            "views": "400"
        },
        {
            "title": "Low & Logisch",
            "id": "9",
            "date": "",
            "thumbnail": "images/Zwangerschapsverlofv3.jpeg",
            "views": "450"
        },
        {
            "title": "Tourette",
            "id": "10",
            "date": "",
            "thumbnail": "images/Zwangerschapsverlofv3.jpeg",
            "views": "500"
        },
        {
            "title": "Tyler Durden",
            "id": "11",
            "date": "",
            "thumbnail": "images/Zwangerschapsverlofv3.jpeg",
            "views": "550"
        },
        {
            "title": "Dokter Guy",
            "id": "12",
            "date": "",
            "thumbnail": "images/Zwangerschapsverlofv3.jpeg",
            "views": "600"
        },
        {
            "title": "Outro",
            "id": "13",
            "date": "",
            "thumbnail": "images/Zwangerschapsverlofv3.jpeg",
            "views": "650"
        },
        {
            "title": "Automatisse Antwoordapparaat",
            "id": "14",
            "date": "",
            "thumbnail": "images/WieIsGuy.jpeg",
            "views": "700"
        },
        {
            "title": "Wie Is Guy ?",
            "id": "15",
            "date": "",
            "thumbnail": "images/WieIsGuy.jpeg",
            "views": "750"
        },
        {
            "title": "Demain J'arrête",
            "id": "16",
            "date": "",
            "thumbnail": "images/WieIsGuy.jpeg",
            "views": "800"
        },
        {
            "title": "Brussels State of Mind",
            "id": "17",
            "date": "",
            "thumbnail": "images/WieIsGuy.jpeg",
            "views": "850"
        },
        {
            "title": "Probleem",
            "id": "18",
            "date": "",
            "thumbnail": "images/WieIsGuy.jpeg",
            "views": "900"
        },
        {
            "title": "Gorik Pt. 1",
            "id": "19",
            "date": "",
            "thumbnail": "images/WieIsGuy.jpeg",
            "views": "950"
        },
        {
            "title": "Beter Leven",
            "id": "20",
            "date": "",
            "thumbnail": "images/WieIsGuy.jpeg",
            "views": "1000"
        },
        {
            "title": "Mec Man Bro",
            "id": "21",
            "date": "",
            "thumbnail": "images/WieIsGuy.jpeg",
            "views": "1050"
        },
        {
            "title": "OG'z",
            "id": "22",
            "date": "",
            "thumbnail": "images/WieIsGuy.jpeg",
            "views": "1100"
        },
        {
            "title": "BX By Night",
            "id": "23",
            "date": "",
            "thumbnail": "images/WieIsGuy.jpeg",
            "views": "1150"
        },
        {
            "title": "Shit Is So Goed",
            "id": "24",
            "date": "",
            "thumbnail": "images/WieIsGuy.jpeg",
            "views": "1200"
        },
        {
            "title": "Guy-Funk",
            "id": "25",
            "date": "",
            "thumbnail": "images/WieIsGuy.jpeg",
            "views": "1250"
        },
        {
            "title": "Kérosène",
            "id": "26",
            "date": "",
            "thumbnail": "images/WieIsGuy.jpeg",
            "views": "1300"
        },
        {
            "title": "Energuy",
            "id": "27",
            "date": "",
            "thumbnail": "images/WieIsGuy.jpeg",
            "views": "1350"
        },
        {
            "title": "Mershedeïz",
            "id": "28",
            "date": "",
            "thumbnail": "images/WieIsGuy.jpeg",
            "views": "1400"
        },
        {
            "title": "Foutu",
            "id": "29",
            "date": "",
            "thumbnail": "images/WieIsGuy.jpeg",
            "views": "1450"
        },
        {
            "title": "Brede Jongens",
            "id": "30",
            "date": "",
            "thumbnail": "images/WieIsGuy.jpeg",
            "views": "1500"
        },
        {
            "title": "R.A.F. (Rien à foutre)",
            "id": "31",
            "date": "",
            "thumbnail": "images/WieIsGuy.jpeg",
            "views": "1550"
        },
        {
            "title": "U Ma Is U Pa",
            "id": "32",
            "date": "",
            "thumbnail": "images/WieIsGuy.jpeg",
            "views": "1600"
        },
        {
            "title": "GRIJZE ZONE",
            "id": "33",
            "date": "",
            "thumbnail": "images/Brutaal.jpeg",
            "views": "1650"
        },
        {
            "title": "WAAROM",
            "id": "34",
            "date": "",
            "thumbnail": "images/Brutaal.jpeg",
            "views": "1700"
        },
        {
            "title": "DAAROM",
            "id": "35",
            "date": "",
            "thumbnail": "images/Brutaal.jpeg",
            "views": "1750"
        },
        {
            "title": "GUTTERLIJFSTIJL",
            "id": "36",
            "date": "",
            "thumbnail": "images/Brutaal.jpeg",
            "views": "1800"
        },
        {
            "title": "ZG ALL DAY",
            "id": "37",
            "date": "",
            "thumbnail": "images/Brutaal.jpeg",
            "views": "1850"
        },
        {
            "title": "GUTTERGANG",
            "id": "38",
            "date": "",
            "thumbnail": "images/Brutaal.jpeg",
            "views": "1900"
        },
        {
            "title": "SPEKGLAD",
            "id": "39",
            "date": "",
            "thumbnail": "images/Brutaal.jpeg",
            "views": "1950"
        },
        {
            "title": "ELLEBOGENWERK",
            "id": "40",
            "date": "",
            "thumbnail": "images/Brutaal.jpeg",
            "views": "2000"
        },
        {
            "title": "BRUTAAL",
            "id": "41",
            "date": "",
            "thumbnail": "images/Brutaal.jpeg",
            "views": "2050"
        },
        {
            "title": "SIDESHOW BOB",
            "id": "42",
            "date": "",
            "thumbnail": "images/Brutaal.jpeg",
            "views": "2100"
        },
        {
            "title": "NIEMAND",
            "id": "43",
            "date": "",
            "thumbnail": "images/Brutaal.jpeg",
            "views": "2150"
        },
        {
            "title": "DOORBIJTER",
            "id": "44",
            "date": "",
            "thumbnail": "images/Brutxxl.webp",
            "views": "2200"
        },
        {
            "title": "1 UIT DE 1000",
            "id": "45",
            "date": "",
            "thumbnail": "images/Brutxxl.webp",
            "views": "2250"
        },
        {
            "title": "FALLY IPUPA",
            "id": "46",
            "date": "",
            "thumbnail": "images/Brutxxl.webp",
            "views": "2300"
        },
        {
            "title": "KUTJAAR",
            "id": "47",
            "date": "",
            "thumbnail": "images/Brutxxl.webp",
            "views": "2350"
        },
        {
            "title": "GUTTERGANG 2",
            "id": "48",
            "date": "",
            "thumbnail": "images/Brutxxl.webp",
            "views": "2400"
        },
        {
            "title": "PAPA ZG",
            "id": "49",
            "date": "",
            "thumbnail": "images/Brutxxl.webp",
            "views": "2450"
        },
        {
            "title": "ROTJOCH",
            "id": "50",
            "date": "",
            "thumbnail": "images/Brutxxl.webp",
            "views": "2500"
        },
        {
            "title": "KENNY",
            "id": "51",
            "date": "",
            "thumbnail": "images/Brutxxl.webp",
            "views": "2550"
        },
        {
            "title": "Suave G",
            "id": "52",
            "date": "",
            "thumbnail": "images/SuaveG.jpg",
            "views": "2600"
        },
        {
            "title": "180 (Remix)",
            "id": "53",
            "date": "",
            "thumbnail": "images/180Remix.webp",
            "views": "2650"
        },
        {
            "title": "CORNFLAKES",
            "id": "54",
            "date": "",
            "thumbnail": "images/BABAGUY.jpeg",
            "views": "2700"
        },
        {
            "title": "... ZONDER ONDERWIJS",
            "id": "55",
            "date": "",
            "thumbnail": "images/BABAGUY.jpeg",
            "views": "2750"
        },
        {
            "title": "NIETS IS PERFECT",
            "id": "56",
            "date": "",
            "thumbnail": "images/BABAGUY.jpeg",
            "views": "2800"
        },
        {
            "title": "Niet Voor De Views",
            "id": "57",
            "date": "",
            "thumbnail": "images/NietVoorDeViews.jpeg",
            "views": "2850"
        },
        


    ]
}