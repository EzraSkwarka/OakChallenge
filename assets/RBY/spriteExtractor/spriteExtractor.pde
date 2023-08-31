size(56,56);

var scale = 1;
PImage img;
img = loadImage("Color.png");
String prefix = "C_";
int startX = 66 * scale;
int startY = 30 * scale;
int XWidth = 56 * scale;
int YWidth = 56 * scale;
int XJump = 114 * scale;
int YJump = 78 * scale;
int XLimit = 1727 * scale;
int YLimit = 917 * scale;
int shouldMove = 0; // 1 is true, 0 is false
img.resize(XLimit, YLimit);
String[] nameArray = {"Bulbasaur", "Ivysaur", "Venusaur", "Charmander", "Charmeleon", "Charizard", "Squirtle", "Wartortle", "Blastoise", "Caterpie", "Metapod", "Butterfree", "Weedle", "Kakuna", "Beedrill", "Pidgey", "Pidgeotto", "Pidgeot", "Rattata", 
  "Raticate", "Spearow", "Fearow", "Ekans", "Arbok", "Pikachu", "Raichu", "Sandshrew", "Sandslash", "Nidoran_F", "Nidorina", "Nidoqueen", "Nidoran_M", "Nidorino", "Nidoking", "Clefairy", "Clefable", "Vulpix", "Ninetales", "Jigglypuff", "Wigglytuff", 
  "Zubat", "Golbat", "Oddish", "Gloom", "Vileplume", "Paras", "Parasect", "Venonat", "Venomoth", "Diglett", "Dugtrio", "Meowth", "Persian", "Psyduck", "Golduck", "Mankey", "Primeape", "Growlithe", "Arcanine", "Poliwag", "Poliwhirl", "Poliwrath", 
  "Abra", "Kadabra", "Alakazam", "Machop", "Machoke", "Machamp", "Bellsprout", "Weepinbell", "Victreebel", "Tentacool", "Tentacruel", "Geodude", "Graveler", "Golem", "Ponyta", "Rapidash", "Slowpoke", "Slowbro", "Magnemite", "Magneton", "Farfetch'd", 
  "Doduo", "Dodrio", "Seel", "Dewgong", "Grimer", "Muk", "Shellder", "Cloyster", "Gastly", "Haunter", "Gengar", "Onix", "Drowzee", "Hypno", "Krabby", "Kingler", "Voltorb", "Electrode", "Exeggcute", "Exeggutor", "Cubone", "Marowak", "Hitmonlee", 
  "Hitmonchan", "Lickitung", "Koffing", "Weezing", "Rhyhorn", "Rhydon", "Chansey", "Tangela", "Kangaskhan", "Horsea", "Seadra", "Goldeen", "Seaking", "Staryu", "Starmie", "Mr_Mime", "Scyther", "Jynx", "Electabuzz", "Magmar", "Pinsir", "Tauros", 
  "Magikarp", "Gyarados", "Lapras", "Ditto", "Eevee", "Vaporeon", "Jolteon", "Flareon", "Porygon", "Omanyte", "Omastar", "Kabuto", "Kabutops", "Aerodactyl", "Snorlax", "Articuno", "Zapdos", "Moltres", "Dratini", "Dragonair", "Dragonite", 
  "Mewtwo", "Mew"};
int tracker = 0;

for (int n = 0; n < floor(YLimit/YJump); n = n+1) {
  for (int i = 0; i < floor(XLimit/XJump); i = i+1) {
    image( img.get(startX + i * XJump,startY+ n * YJump,XWidth,YWidth), i * XJump * shouldMove, n * YJump * shouldMove); 
    //save(str(i)+str(n)+".png");
    if (tracker < 151) {
    save("C:\\Github\\OakChallange\\assets\\RBY\\spriteExtractor\\Output\\"+ prefix + nameArray[tracker] + ".png");
    }
    tracker = tracker + 1;
  };
};
