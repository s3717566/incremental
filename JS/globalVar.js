var ShounenAmount = 0;
var RomanceAmount = 0;
var SliceOfLifeAmount = 0;
var IsekaiAmount = 0;
var TotalAnimeAmount = 0;
var MoneyAmount = 0;

var ShounenAmountIncrement = 0;
var RomanceAmountIncrement = 0;
var SliceOfLifeAmountIncrement = 0;
var IsekaiAmountIncrement = 0;

var intro1 = true;
var intro2 = true;
var intro3 = true;
var intro4 = true;
var intro5 = true;

var animeArray = [
["name", "amount", "increment", "total req for unlock"],
["Shounen", 0, 0, 0],
["Romance", 0, 0, 10],
["SliceOfLife", 0, 0, 20],
["Isekai", 0, 0, 30]
]

var jobArray = [ //first array accesses which job. [1]=boolean if unlocked, [2]=Amount it increments by, [3]=Description, [4]=Skill requirements
["name", "unlocked", "effect", "desc", "1,2", "image"], //skills use , as breaks
["Government Allowance", false, 0.001, "Why even bother getting a job when the government gives out free money?", "1,2", "degenerate.png"],
["Avid Fan", false, 0.002, "6 episodes of anime before breakfast? Maybe my priorities are a bit wonky.", "2", "avid_fan.png"],
["Fan Subber", false, 0.006, "I wonder if I can put this on my resume?", "3", "fan_subber.png"],
["Anime Reviewer", false, 0.012, "Your taste is objectively trash, the counsil has decided.", "3,4", "anime_reviewer.png"],
["McGronalds Employee", false, 0.02, "The first step into taking over the world.", "4,5", "mcgronalds_employee.png"],
["McGronalds Manager", false, 0.5, '"haha, this doesnt mean im going to work the rest of my life in fastfood, right?"', "4,6", "mcgronalds_manager.png"],
["Anime Youtuber", false, 1.5, "My literal entire income comes from patreon as youtube keeps demonotising me.", "5", "anime_youtuber.png"],
["Dub Voice Actor",  false, 4, "Dubs not subs.", "5", "dub_voice_actor.png"],
["Manga Artist", false, 10, "meme3", "6", "manga_artist.png"],
["Professional Animator", false, 35, "meme3", "6", "professional_animator.png"],
["Nihon Overlord", false, 100, "meme3", "7", "nihon_overlord.png"],
]

var skillArray = [ //jobs have skill requirements which will be checked per tick. First array accesses which skill. [1]=Requirement, [2]=boolean if unlocked, [3]=description, [4]=image, [5]=unlocked
["name", "animeReq", "unlocked", "desc", "image", "unlocked"],
["Free Time", "10-Total", false, "The start of the descent into madness...", "some_free_time.png", false], //For test purposes! 10 Shounen required.
["Learning Jap", "10-Shounen,10-Romance,10-SliceOfLife,10-Isekai", false, "WATASHI GA KITA!", "learning_japanese_from_subs.png", false],
["Man of Culture", "0-Shounen,20-Romance,20-SliceOfLife,0-Isekai", false, "Ah, I see you understand this meme too.", "man_of_culture.png", false],
["Tons of Free Time", "50-Shounen,0-Romance,50-SliceOfLife,0-Isekai", false, "You can't go back. 19 years of your life, gone like that.", "tons_of_free_time.png", false],
["200 IQ", "100-Shounen,255-Romance,300-SliceOfLife,295-Isekai", false, "You can feel your head physically growing in size for your big brain.", "200IQ.png", false],
["Weeb Status", "500-Shounen,501-Romance,502-SliceOfLife,503-Isekai", false, "Embrace it; you're one of us now.", "weeb_status.png", false],
["Political Power", "1000-Shounen, 1000-Romance, 1000-SliceOfLife, 1000-Isekai", false, "You don't know anything about politics, but you know enough about anime to become the ruler of Japan.", "political_power.png", false],
]

var merchArray = [ //first array accesses which job. [1]=Initial, [2]=CurrentPrice, [3]=Job Qty, [4]=Amount job increments by per tick
["name", "initialPrice", "currentPrice", "qty", "effect", "desc"], //todo: add skill requirements
["Key Chain", .5, 0, 0, 0.03, "meme", "Shounen" ],
["Body Pillow", .5, 0, 0, 0.03, "meme", "Romance"],
["Taiga Aisaka Figurine", .5, 0, 0, 0.03, "meme", "SliceOfLife"],
["Katana", .5, 0, 0, 0.03, "meme", "Isekai"],
["Wall Scroll", 25, 0, 0, 0.2, "meme2", "Romance"],
["Megumin Figurine", 60, 0, 0, 0.7, "meme3", "SliceOfLife"],
["Love-Live Cardboard Cutout", 200, 0, 0, 1.5, "meme4", "Isekai"],
["1:1 Scale Shiro", 800, 0, 0, 5, "meme5", "Shounen"],
]
