/* ================================================================
   THE LEARNING DECK · CLOSE READING — TEXT DATA
   All reading passages and their questions live here. This file is
   loaded by practice.html (via <script src="js/texts.js">) BEFORE the
   engine, so `const TEXTS` is defined and every text is pushed before
   the app runs.
   TO ADD A TEXT: copy one { ... } block below, edit TEXT, ANNOTATE,
   QUESTIONS, EVIDENCE and EXPLAIN, then the TEXTS.push line. See the
   notes at the top of practice.html for the paragraph/phrase rules.
   ================================================================ */

const TEXTS = [];

/* ================================================================
   TEXT 1 · Fiction · Creative · Short story
   ================================================================ */
{
const TEXT = {
  title: "The Last Ferry",
  paras: [
    "The ferry terminal emptied the way a lung empties: slowly, then all at once. By nine o’clock only Mei was left on the bench by Gate 4, her school bag clamped between her ankles as if someone might steal it.",
    "Her grandfather had promised. Six-thirty, he had said, tapping his watch twice, the way he did when he meant it.",
    "Above her, the departures board flickered and gave up on its letters one by one. CANCELLED. CANCELLED. C NCE LED. A cleaner pushed a grey mop across the floor in long, patient strokes and did not look at her. Outside, the sea chewed at the pilings.",
    "Mei checked her phone. No messages. She checked it again, in case the first time had not counted.",
    "She told herself the traffic was bad on the causeway. She told herself his phone had died, because his phone was always dying, because he refused to charge it until the battery icon was red and shouting. She told herself three more reasons and believed none of them.",
    "At 9:14 the automatic doors sighed open. A man in a creased raincoat stood there, soaked, holding two paper cups of teh tarik as though they were an apology.",
    "“The bus,” he said. “The bus broke. I walked.”",
    "Mei did not stand up. She did not run to him. She only moved her bag so there was room on the bench."
  ]
};

/* STAGE 1: find the passage. target = phrase(s) that count as correct.
   decoys = tempting wrong phrases with their own explanation.
   miss = what to say for any other wrong click. */
const ANNOTATE = [
  {
    skill: "Simile",
    prompt: "Find the simile that makes the <em>building seem alive</em>, as if it were breathing.",
    target: ["the way a lung empties"],
    decoys: [{ phrase: "as if someone might steal it", why: "That is a simile too, but it describes Mei’s bag and her nerves, not the building. Look for the comparison that gives the terminal a body." }],
    miss: "Look at the very first sentence. Which comparison turns the terminal into something with lungs?",
    explain: "“The way a lung empties” compares the terminal to breathing out: slowly, then all at once. It makes the building feel alive and tired, and the emptying makes Mei’s loneliness feel physical."
  },
  {
    skill: "Personification",
    prompt: "Find where the writer gives the sea a <em>hungry, threatening</em> action.",
    target: ["the sea chewed at the pilings"],
    decoys: [{ phrase: "the automatic doors sighed open", why: "Good eye: that is personification. But a sigh is tired or relieved, not hungry. The question asks about the sea." }],
    miss: "Find the sentence that begins with “Outside”. What is the sea doing?",
    explain: "“Chewed” gives the sea teeth and an appetite. The personification makes the world outside feel dangerous and restless, which feeds Mei’s growing fear about her grandfather."
  },
  {
    skill: "Imagery / pathetic fallacy",
    prompt: "Find the detail where an <em>object seems to lose hope</em>, just like Mei.",
    target: ["gave up on its letters one by one"],
    decoys: [
      { phrase: "CANCELLED. CANCELLED. C NCE LED.", why: "Close. The broken word shows the result, but the technique is in the phrase before it, where the board is described as if it could give up." },
      { phrase: "the departures board flickered", why: "Nearly there. Flickering is just what the lights do. Keep reading: what does the board do with its letters?" }
    ],
    miss: "Look at the departures board in the third paragraph. What human action does the writer give it?",
    explain: "“Gave up on its letters one by one” describes the board as if it were losing hope. The setting mirrors Mei’s feelings: her hope is failing piece by piece, just like the letters."
  },
  {
    skill: "Repetition",
    prompt: "Find the <em>repeated phrase</em> that shows Mei is trying to convince herself.",
    target: ["She told herself"],
    all: true,
    decoys: [{ phrase: "because his phone was always dying, because", why: "“Because” is repeated here, but it explains the phone, not Mei’s effort to calm herself. Look for the phrase that starts three sentences." }],
    miss: "Find the paragraph where three sentences start the same way.",
    explain: "“She told herself” opens three sentences in a row. The repetition sounds like someone repeating reassurances to stay calm, and it sets up the twist: she “believed none of them.”"
  }
];

/* STAGE 2: multiple choice. ok = correct. why = explanation shown when chosen. */
const QUESTIONS = [
  {
    skill: "Mood",
    q: "What mood does the first paragraph create?",
    opts: [
      { t: "Lonely and tense", ok: true, why: "Right. The terminal empties until “only Mei was left” (lonely), and her bag is “clamped” as if someone might steal it (tense). Both feelings are there at once." },
      { t: "Calm and peaceful", why: "An empty building could feel calm, but the details say otherwise. “Clamped” and “as if someone might steal it” show Mei is on edge, not relaxed." },
      { t: "Exciting and adventurous", why: "Nothing new or thrilling is happening. Mei is waiting and worrying. Mood comes from the details, and these details are about being left behind." },
      { t: "Angry and resentful", why: "Mei may later have reason to be upset, but the opening shows no anger. It shows her alone and anxious. Don’t read ahead of the text." }
    ]
  },
  {
    skill: "Point of view",
    q: "From what point of view is the story told?",
    opts: [
      { t: "Third person, closely following Mei", ok: true, why: "Right. The narrator uses “she”, but we only know Mei’s thoughts (“She told herself…”). We find out why the grandfather is late only when he tells her." },
      { t: "First person, narrated by Mei", why: "First person would use “I”: “I checked my phone.” The narrator says “Mei checked her phone”, so it is third person." },
      { t: "Third person omniscient (all-knowing)", why: "An all-knowing narrator could tell us where the grandfather is or what he thinks. This narrator never does. We are stuck in Mei’s head and just as worried as she is." },
      { t: "Second person, addressing the reader", why: "Second person uses “you”: “You check your phone.” This story never speaks to the reader directly." }
    ]
  },
  
  {
    skill: "Inference",
    q: "Mei gives herself many reasons and “believed none of them.” What does this suggest?",
    opts: [
      { t: "Her fear that something serious has happened is growing", ok: true, why: "Right. The reasons are sensible (traffic, a dead phone), yet they no longer comfort her. The short final clause shows her fear overpowering her logic." },
      { t: "She thinks her grandfather is lying to her about why he is late", why: "He hasn’t told her anything yet. These are her own explanations. She doubts the comforting reasons, not him." },
      { t: "The reasons she thinks of are silly and not believable at all", why: "Actually they are very believable, and one turns out almost right. The point is not that the reasons are bad but that fear won’t let her accept them." },
      { t: "She has calmed down", why: "The opposite. Believing none of her reassurances means she is more worried, not less." }
    ]
  },
  {
    skill: "Structure / ending",
    q: "Why does the writer end with Mei moving her bag, instead of a hug or a speech?",
    opts: [
      { t: "A quiet action shows her feelings more powerfully than words", ok: true, why: "Right. This is show, don’t tell. Making room is an invitation and a forgiveness. It also echoes the bag she “clamped” in the first paragraph, so the story comes full circle." },
      { t: "It shows Mei is still angry with him and is choosing to ignore him", why: "She doesn’t run to him, but she does make room. Ignoring someone wouldn’t include inviting them to sit. The action is small but warm." },
      { t: "It creates a cliffhanger", why: "A cliffhanger leaves the main question open. Here it is answered: he is safe and she accepts him. The ending is quiet, but it is resolved." },
      { t: "It shows the bench is too small for both of them to sit down on", why: "That is the literal action, not its purpose. Ask what moving the bag means between these two people." }
    ]
  },
  {
    skill: "Summary",
    q: "Which sentence best sums up what happens in this text?",
    opts: [
      { t: "A girl waits anxiously at a ferry terminal for her late grandfather, and when he finally arrives soaked because his bus broke down, she quietly forgives him without saying a word about it.", ok: true, why: "Right. It covers the whole shape of the text, not just one part of it." },
      { t: "A girl sits alone on a bench at a ferry terminal while the departures board flickers through cancelled messages and a cleaner slowly mops the empty floor nearby. Other parts of the story focus on different details.", why: "True, but too narrow. It only covers part of the text and misses the main point." },
      { t: "A girl gets stranded overnight at the terminal because the last ferry of the night leaves without her while she is still waiting there. This is one part of a longer sequence of events in the story.", why: "Too broad. This adds a claim the text does not actually make or support." },
      { t: "A man buys two cups of hot tea from a stall before he walks through the rain to meet a girl who has been waiting for him. This point is raised without being the central focus of the whole piece. Further events unfold elsewhere in the passage that this does not cover.", why: "A real detail, but a minor one. It is not what the text is mainly about." }
    ]
  }
];

/* STAGE 3: evidence vs claim. quote = exact words from the text (highlighted in the passage). */
const EVIDENCE = [
  {
    quote: "A cleaner pushed a grey mop across the floor in long, patient strokes and did not look at her",
    opts: [
      { t: "Mei is alone, and no one is looking out for her", ok: true, why: "Right. The only other person there “did not look at her”. The detail shows Mei is invisible and unprotected, which deepens her isolation." },
      { t: "The cleaner is rude and deliberately ignores Mei", why: "That claim is about the cleaner, who is just doing his job “patiently”. The quote is really evidence about Mei’s situation: nobody notices her." },
      { t: "The terminal is dirty", why: "Mopping is routine at night. This is a weak claim: it uses the least important part of the quote and ignores “did not look at her”." },
      { t: "The cleaner is tired and just wants to finish and go home", why: "We’re never told what the cleaner thinks or wants. “Patient strokes” actually suggests the opposite of hurrying." }
    ]
  },
  {
    quote: "holding two paper cups of teh tarik as though they were an apology",
    opts: [
      { t: "He feels guilty and was thinking of Mei, even while struggling", ok: true, why: "Right. “Two” cups means one is for Mei, and “as though they were an apology” shows he knows he let her down. He is soaked, yet still brought her something." },
      { t: "He stopped to buy drinks for them both instead of hurrying to Mei", why: "This misreads the evidence. He walked in the rain because the bus broke. The drinks are a gesture of care, not the reason he’s late." },
      { t: "He is thirsty", why: "Then why two cups? The number and the word “apology” show the drinks are for Mei, not for himself." },
      { t: "He isn’t really sorry for being late and doesn’t think it matters", why: "The simile says the opposite. The cups are “as though they were an apology”. The claim contradicts the evidence." }
    ]
  },
  {
    quote: "The bus broke. I walked.",
    opts: [
      { t: "He made a real effort to keep his promise", ok: true, why: "Right. He walked all the way and arrived “soaked”. The short sentences sound breathless and plain: he doesn’t make excuses, he just explains." },
      { t: "Public transport in the city is unreliable", why: "That may be true in real life, but it is a claim about the world, not about the story. Close reading claims should explain character, mood or meaning." },
      { t: "He is making up an excuse about why he was late", why: "Nothing supports this. He is “soaked” and wearing a “creased raincoat”, which backs up his story. Don’t invent a claim the text works against." },
      { t: "He is angry with Mei", why: "Short sentences can sound angry, but here they sound exhausted. Nothing he does is aimed at Mei. He brings her a drink." }
    ]
  }
];



/* STAGE 4: best explanation. A claim and a quote are given; one option explains
   HOW the words prove the claim. Wrong options are the classic weak answers:
   retelling, naming a technique with no effect, overclaiming, personal response. */
const EXPLAIN = [
  {
    claim: "The setting reflects Mei’s fear.",
    quote: "the sea chewed at the pilings",
    opts: [
      { t: "“Chewed” gives the sea teeth, as if it is slowly eating the terminal. The threat outside mirrors Mei’s worry inside.", ok: true, why: "Strong. It zooms in on one word (“chewed”), says what that word suggests (teeth, slow destruction), and links it back to the claim about Mei’s fear. Word, meaning, link: that is an explanation." },
      { t: "Outside the ferry terminal, the sea is moving against the wooden pilings while Mei sits inside on her own and waits for her grandfather to arrive.", why: "This retells what happens. It is accurate, but it never explains how the words show fear. If your answer could be a summary of the plot, it is not yet analysis." },
      { t: "The writer uses personification here, because the sea is given a human action that it cannot really do, which is a language technique.", why: "The technique is named correctly, then the answer stops. Naming the technique earns little on its own. Always add what the technique makes the reader see or feel." },
      { t: "This shows the sea is going to destroy the ferry terminal very soon, so Mei is in real physical danger and needs to leave the building as quickly as she can.", why: "Overclaiming. Nothing in the story says the terminal is destroyed. The image suggests a feeling of threat, not a literal event. Stay inside what the text supports." }
    ]
  },
  {
    claim: "Mei’s hope is fading.",
    quote: "gave up on its letters one by one",
    opts: [
      { t: "This is pathetic fallacy, because the writer uses the setting and the objects in the terminal to show something about the main character.", why: "The technique label fits, but the answer never says what the board shows about Mei, or which words do it. Technique plus effect, not technique alone." },
      { t: "The departures board in the terminal is old and broken, so some of the letters on the screen have stopped working and are disappearing one after another.", why: "A literal reading. It explains the object, not the claim. The question is about Mei’s hope, so the explanation has to get back to Mei." },
      { t: "“Gave up” is what people do when they lose hope. As the board loses letters “one by one”, Mei’s hope fades the same slow way.", ok: true, why: "Strong. It explains the human meaning of “gave up”, uses “one by one” to describe how the hope fades, and connects the object to Mei’s feelings." },
      { t: "This proves that every ferry has been cancelled for the night and that Mei is now completely stranded at the terminal with no way of getting home at all.", why: "Overclaiming. The board shows cancellations, but the story never says Mei is stranded. And it still does not explain the claim about hope." }
    ]
  },
  {
    claim: "Mei does not believe her own reassurances.",
    quote: "She told herself three more reasons and believed none of them.",
    opts: [
      { t: "I would also be very worried if my grandfather was this late at night, so I can really understand how Mei feels while she sits and waits alone on the bench.", why: "A personal response, not analysis. Empathy is good for discussion, but an explanation must be about the writer’s words, not your own experience." },
      { t: "After a list of sensible reasons, “believed none of them” cancels them all at once. The self-talk of “told herself” has failed.", ok: true, why: "Strong. It explains two choices (the repeated “told herself” and the final clause) and shows how together they prove the reassurances are not working." },
      { t: "Mei thinks of three more reasons why her grandfather could be late, such as traffic or his phone dying, but she is still waiting for him.", why: "Retelling, with an extra detail from the paragraph. It never explains what “believed none of them” tells us." },
      { t: "This shows Mei thinks her grandfather is lying to her about the reasons he is late, so she does not trust anything he says to her, even when he finally arrives.", why: "A misreading. The reasons are Mei’s own ideas: he has not said anything yet. An explanation built on a misreading cannot prove the claim." }
    ]
  },
  {
    claim: "Mei forgives her grandfather.",
    quote: "She only moved her bag so there was room on the bench.",
    opts: [
      { t: "The writer uses the technique of show, don’t tell in the final sentence of the story, instead of telling the reader directly.", why: "Correct label, no explanation. What is being shown, and how does moving a bag show it? Without that, the claim is not proven." },
      { t: "This shows that Mei will never be angry with her grandfather again and that their relationship is now completely perfect after everything that happened this night.", why: "Overclaiming. The ending shows forgiveness in this moment. “Never again” and “perfect” go far beyond what the last line can prove." },
      { t: "Mei moves her school bag off the bench next to her so that her grandfather, who is soaking wet and tired from walking, has a place where he can sit down beside her.", why: "Retelling. It says what she does, but not what the action means. Ask: why would a writer end on a bag being moved?" },
      { t: "Moving the bag invites him to sit. It is the bag she “clamped” in fear at the start, so fear becomes acceptance, quietly (“only”).", ok: true, why: "Strong. It explains what the action means, links it to the opening (“clamped”) to show change, and even picks out the small word “only”. Detailed, precise, and it proves the claim." }
    ]
  }
];

const COLLECT = [
  {
    claim: "Mei is anxious and on edge as she waits.",
    opts: [
      { t: "her school bag clamped between her ankles", ok: true, why: "Right. “Clamped” shows how tense she is, gripping her bag as if it might be snatched." },
      { t: "By nine o’clock only Mei was left on the bench", why: "This shows she is alone, but not directly how nervous she feels." },
      { t: "the departures board flickered", why: "This is a setting detail, not a sign of Mei’s anxiety." },
      { t: "Her grandfather had promised", why: "This is the backstory of why she waits, not how she feels while waiting." }
    ]
  },
  {
    claim: "We can tell the grandfather arrived in a bad state after struggling to get there.",
    opts: [
      { t: "A man in a creased raincoat stood there, soaked", ok: true, why: "Right. “Soaked” and “creased” show he came through the rain, worn out by the journey." },
      { t: "tapping his watch twice", why: "This is from the earlier promise, not the state he arrived in." },
      { t: "At 9:14 the automatic doors sighed open", why: "This gives the time he arrived, not his condition." },
      { t: "the way he did when he meant it", why: "This describes his earlier promise, not his arrival." }
    ]
  },
  {
    claim: "Mei’s worry is so strong it makes her act without logic.",
    target: ["She checked it again, in case the first time had not counted"],
    decoys: [{ phrase: "Mei checked her phone. No messages.", why: "This is the first, sensible check; the claim is about the illogical second one. Look for ‘in case the first time had not counted’." }],
    miss: "Look for the moment she checks her phone a second time.",
    explain: "Checking again ‘in case the first time had not counted’ makes no sense: a phone check always counts. Worry has beaten logic, which shows how anxious she is."
  },
  {
    claim: "The final action shows Mei forgives her grandfather without a word.",
    target: ["moved her bag so there was room on the bench"],
    decoys: [{ phrase: "She did not run to him", why: "This shows her holding back, not forgiveness. Look for the one warm thing she actually does." }],
    miss: "Read the last paragraph. What is the one thing Mei does?",
    explain: "She never says ‘I forgive you’. Moving her bag makes room for him: the same bag she ‘clamped’ in fear at the start. The quiet action is the forgiveness."
  }
];
TEXTS.push({ id: "last-ferry", type: "Fiction", mode: "Creative", form: "Short story", level: "6ème",
  hook: "A girl waits alone at a ferry terminal for a grandfather who promised he would come.",
  TEXT, ANNOTATE, QUESTIONS, EVIDENCE, EXPLAIN, COLLECT });
}

/* ================================================================
   TEXT 2 · Non-fiction · Informative · Feature article
   ================================================================ */
{
const TEXT = {
  title: "Roots in Two Worlds",
  paras: [
    "Walk along the boardwalk at Sungei Buloh at low tide and you will see something strange: a forest standing in the sea. Its trees rise on arching roots like stilts, and the mud beneath them clicks and pops with hidden life. This is a mangrove, and it may be one of the hardest-working habitats on Earth.",
    "Mangroves grow where almost nothing else can survive. Twice a day, salt water floods their roots and then drains away. Most plants would die in these conditions, but mangroves have adapted. Some species push up breathing roots, called pneumatophores, through the mud like rows of pencils. Others filter salt out of the water before it reaches their leaves. Among the roots, young fish and crabs shelter from predators, which is why mangroves are often called nurseries of the sea.",
    "Why should we care about a muddy forest? The answer begins at the coastline. Mangrove roots act as a natural sea wall, slowing waves and holding soil in place. After the 2004 Indian Ocean tsunami, some studies suggested that villages sheltered behind healthy mangroves suffered less damage than those left exposed.",
    "They are also climate heroes. Mangroves store huge amounts of carbon, not only in their trunks and leaves but deep in the waterlogged soil, where it can stay locked away for centuries. Scientists estimate that, area for area, they can hold several times more carbon than many tropical forests.",
    "Yet this remarkable habitat is disappearing. Across the world, mangroves have been cleared for fish farms, farmland and coastal buildings. Singapore itself has lost most of its original mangrove forests since the nineteenth century.",
    "The good news is that mangroves can recover. Volunteers now plant seedlings along damaged shores, and protected areas give young trees time to grow. As one volunteer put it, “You don’t plant a mangrove for yourself. You plant it for the people who will stand here in fifty years.”",
    "So next time you see a tangle of roots in grey mud, look again. You are looking at a coastline’s bodyguard, a carbon vault and a nursery for young fish, all disguised as a swamp."
  ]
};

const ANNOTATE = [
  {
    skill: "Simile",
    prompt: "Find the simile that shows how the trees <em>stand above the water</em>.",
    target: ["rise on arching roots like stilts"],
    decoys: [{ phrase: "like rows of pencils", why: "That is a simile about roots too, but it describes small breathing roots poking up through the mud. The question asks how the trees themselves stand. Look in the first paragraph." }],
    miss: "Look at the first paragraph. How are the trees held up out of the sea?",
    explain: "“Like stilts” helps a reader who has never seen a mangrove picture it at once: tall trees lifted above the water on long, thin legs. Informative writers use similes to make the unfamiliar easy to imagine."
  },
  {
    skill: "Rhetorical question",
    prompt: "Find the question the writer asks, then answers, to <em>move into the argument</em>.",
    target: ["Why should we care about a muddy forest?"],
    decoys: [{ phrase: "So next time you see a tangle of roots in grey mud, look again.", why: "That speaks directly to the reader, but it is an instruction, not a question. Look for a sentence ending in a question mark." }],
    miss: "Look for the only sentence in the article that ends with a question mark.",
    explain: "The question voices a doubt the reader might have (“why care about mud?”) and then the article answers it. It turns description into argument and makes the reader feel involved. Calling it a “muddy forest” also admits the habitat does not look impressive, which makes the answer more surprising."
  },
  {
    skill: "Technical vocabulary",
    prompt: "Find where the writer introduces a <em>scientific term</em> and explains it for the reader.",
    target: ["breathing roots, called pneumatophores"],
    decoys: [{ phrase: "filter salt out of the water before it reaches their leaves", why: "This explains an adaptation, but it uses everyday words. There is no scientific term here. Look for a word most readers would not know." }],
    miss: "Look in the second paragraph for the longest, most scientific word in the article.",
    explain: "The writer gives the simple idea first (“breathing roots”) and then the scientific name. Readers understand the idea before they meet the difficult word, so the article teaches without losing anyone."
  },
  {
    skill: "Cautious language",
    prompt: "Find <em>one phrase</em> where the writer is careful not to overstate the evidence.",
    target: ["some studies suggested", "Scientists estimate", "may be one of"],
    decoys: [{ phrase: "They are also climate heroes", why: "The opposite: this is a bold, confident claim with no softening at all. Look for words like “some”, “may” or “estimate”." }],
    miss: "Look for small words that soften a claim, such as “may”, “some” or “estimate”.",
    explain: "Phrases like “some studies suggested”, “scientists estimate” and “may be one of” show the writer is being honest about how certain the evidence is. Careful language makes an informative text more trustworthy, not less."
  }
];

const QUESTIONS = [
  {
    skill: "Purpose",
    q: "What is the main purpose of this article?",
    opts: [
      { t: "To inform readers about mangroves and show why they are worth protecting", ok: true, why: "Right. Most of the article explains facts (adaptations, coastal protection, carbon), and the later paragraphs show the habitat is threatened but can recover. It informs, with a gentle push to care." },
      { t: "To entertain readers with the story of a long walk along the boardwalk at Sungei Buloh", why: "The walk is only the opening hook. After the first paragraph there is no story at all, just information. Judge purpose by the whole text, not its first lines." },
      { t: "To advertise Sungei Buloh as a place for tourists to visit", why: "Sungei Buloh is named once, as an example. The article is about mangroves everywhere (“across the world”), not about selling a destination." },
      { t: "To demand that all building near coastlines is stopped immediately by the government", why: "The article mentions that mangroves have been cleared, but it never makes this demand. Don’t invent an argument stronger than the one the writer makes." }
    ]
  },
  
  {
    skill: "Structure",
    q: "Why does the writer open with a walk along the boardwalk?",
    opts: [
      { t: "To hook the reader with a vivid scene before the facts begin", ok: true, why: "Right. “You will see something strange: a forest standing in the sea” puts the reader in the scene and creates curiosity. The facts arrive once the reader is interested." },
      { t: "Because the whole article describes one trip to a nature reserve", why: "The walk lasts one paragraph. The rest of the article moves to general facts about mangroves around the world." },
      { t: "To prove that mangroves are found only in Singapore", why: "The article says mangroves have been cleared “across the world”. Singapore is a local example, not the only place." },
      { t: "To give the reader the most important statistic first", why: "There are no numbers in the opening at all. It works through description and surprise, not data." }
    ]
  },
  {
    skill: "Fact and opinion",
    q: "Which of these is an opinion rather than a fact?",
    opts: [
      { t: "Mangroves may be one of the hardest-working habitats on Earth.", ok: true, why: "Right. “Hardest-working” is a judgement, and there is no way to measure it exactly. The word “may” also shows the writer knows it is a view, not a proven fact." },
      { t: "Twice a day, salt water floods the roots of mangrove trees on the coast.", why: "This can be observed and checked by watching the tides. It is a fact." },
      { t: "Mangroves have been cleared for fish farms and farmland.", why: "This can be checked with records and photographs. It is a fact, even if it is a sad one." },
      { t: "Singapore has lost most of its original mangrove forests since the 1800s.", why: "This could be checked by comparing old maps with today. Something you don’t personally know can still be a fact." }
    ]
  },
  {
    skill: "Effect of a quotation",
    q: "Why does the writer include the volunteer’s words near the end?",
    opts: [
      { t: "To add a human voice and make the long-term hope feel personal", ok: true, why: "Right. “You plant it for the people who will stand here in fifty years” turns facts into a feeling about the future. A real voice makes the good news more moving than a statistic would." },
      { t: "To prove to readers that the scientific facts in the article are accurate", why: "A volunteer’s opinion is not scientific evidence. The quotation adds feeling and perspective, not proof." },
      { t: "To show that volunteers and scientists disagree about mangroves", why: "Nothing in the quotation disagrees with anything. It supports the idea that mangroves can recover over time." },
      { t: "To add some humour before the conclusion", why: "The words are thoughtful and hopeful, not funny. Look at what “fifty years” suggests: patience and care." }
    ]
  },
  {
    skill: "Summary",
    q: "Which sentence best sums up what happens in this text?",
    opts: [
      { t: "The article explains how mangrove forests survive salty, flooding conditions, why they matter for coastlines and climate, and why more of them now need protecting.", ok: true, why: "Right. It covers the whole shape of the text, not just one part of it." },
      { t: "The article describes how some mangrove roots, called pneumatophores, poke up through the mud like rows of pencils so the tree can breathe. Other parts of the story focus on different details.", why: "True, but too narrow. It only covers part of the text and misses the main point." },
      { t: "The article argues that mangroves are the single most important habitat on the whole planet and should be protected everywhere by international law. The rest of the text develops in a different direction.", why: "Too broad. This adds a claim the text does not actually make or support." },
      { t: "The article describes a boardwalk at Sungei Buloh where visitors can walk out at low tide and see the mangrove trees up close. The story continues well beyond this particular moment.", why: "A real detail, but a minor one. It is not what the text is mainly about." }
    ]
  }
];

const EVIDENCE = [
  {
    quote: "villages sheltered behind healthy mangroves suffered less damage than those left exposed",
    opts: [
      { t: "Mangroves can help to protect coastal communities", ok: true, why: "Right. The comparison between sheltered and exposed villages supports the idea that mangroves offer protection. “Help” matches the careful wording “less damage”." },
      { t: "Mangroves can stop a tsunami completely before it reaches land", why: "Overclaiming. The villages suffered “less damage”, not no damage. A good claim matches the strength of the evidence." },
      { t: "The tsunami happened in 2004", why: "That is a detail from the same sentence, but it is a date, not what this evidence proves. Ask what the comparison between villages shows." },
      { t: "All coastal villages should be built behind mangroves", why: "That is a recommendation, and the article never makes it. Evidence of protection does not automatically prove what people should do." }
    ]
  },
  {
    quote: "mangroves have been cleared for fish farms, farmland and coastal buildings",
    opts: [
      { t: "Human activity is a major cause of mangrove loss", ok: true, why: "Right. Every item in the list is something people build or farm. The quote shows the threat comes from human decisions." },
      { t: "Fish farms are harmful to the fish that live in them", why: "The quote says nothing about the fish in the farms. It is about what was cleared to make room for them." },
      { t: "Mangroves grow back very quickly on their own after being cut", why: "This quote is about loss, not recovery. And the article says young trees need “time to grow” and protection." },
      { t: "Singapore has no mangroves left at all", why: "The quote is about the whole world, and elsewhere the article says Singapore lost “most”, not all. Sungei Buloh still has them." }
    ]
  },
  {
    quote: "Volunteers now plant seedlings along damaged shores",
    opts: [
      { t: "The situation is not hopeless, because people are taking action", ok: true, why: "Right. The quote begins the “good news” paragraph. Planting shows active effort to repair damage." },
      { t: "The damage to mangroves around the world has now been fully repaired", why: "Overclaiming. Planting seedlings is a start. “Damaged shores” shows the harm is still there." },
      { t: "Planting mangroves is quick and easy", why: "Nothing in the quote says it is easy. The volunteer’s “fifty years” suggests it is slow, patient work." },
      { t: "Only volunteers really care about protecting mangroves", why: "The same paragraph mentions “protected areas” too. The quote shows volunteers help, not that they are the only ones." }
    ]
  }
];

const EXPLAIN = [
  {
    claim: "The writer makes mangroves sound impressive from the start.",
    quote: "one of the hardest-working habitats on Earth",
    opts: [
      { t: "“Hardest-working” pictures a tireless worker, and “on Earth” compares it with everywhere else. Admiration builds before any facts.", ok: true, why: "Strong. It explains two word choices, what each suggests, and how they create the impression the claim describes." },
      { t: "The writer uses a superlative in this sentence, which is a type of adjective that usually ends in -est, to describe the mangrove habitat to the readers of the article.", why: "Accurate label, no effect. What does the superlative make the reader think about mangroves? That is the part that proves the claim." },
      { t: "The writer tells us that mangroves are a kind of habitat that can be found in different places on Earth and that they do a lot of work.", why: "Retelling in other words. It repeats the quote instead of explaining how it makes mangroves sound impressive." },
      { t: "This proves that mangroves are definitely the single most important habitat in the whole world and that every other habitat on the planet matters far less than they do.", why: "Overclaiming. The writer says “may be one of”, which is far more careful than “definitely the most important”." }
    ]
  },
  {
    claim: "The article is written so that anyone can understand it.",
    quote: "breathing roots, called pneumatophores",
    opts: [
      { t: "The writer uses a very long scientific word here, which shows that the article is really written for experts and university scientists who already study plants.", why: "A misreading. The difficult word is explained straight away, which is what you do for non-experts." },
      { t: "Plain “breathing roots” comes first, so readers grasp the idea before the scientific word. Nobody is lost, yet all learn the term.", ok: true, why: "Strong. It notices the order of the words and explains why that order helps a general reader. That proves the claim." },
      { t: "This is an example of technical vocabulary, which is a feature that you often find in non-fiction and in informative texts like articles, reports and textbooks.", why: "The label is correct, but it explains nothing about this sentence or how it helps readers understand." },
      { t: "I had never heard the word pneumatophores before I read this, so I found this part of the article especially interesting to read.", why: "A personal response. Your reaction matters in discussion, but analysis must explain the writer’s choices, not your experience." }
    ]
  },
  {
    claim: "The writer presents mangroves as protectors.",
    quote: "act as a natural sea wall",
    opts: [
      { t: "Mangrove roots grow along the coastline, and when big waves come in from the sea the roots slow them down and help to keep the soil and sand in place.", why: "Retelling. It repeats the information but never explains what the words “sea wall” add." },
      { t: "This quote makes the reader think about mangroves in a different way and creates an effect of protection in the article.", why: "Vague. “Creates an effect” names nothing precise, and no individual word is explained." },
      { t: "A sea wall is built to defend a coast. A “natural” sea wall makes the roots sound like free, living defences already guarding people.", ok: true, why: "Strong. It explains what a sea wall is, what “natural” adds, and how that makes mangroves protectors." },
      { t: "This shows that mangroves are stronger than any wall that human beings could ever build, so there is no longer any need for people to build real sea walls at all.", why: "Overclaiming. A comparison with a sea wall does not prove mangroves are stronger than every wall." }
    ]
  },
  {
    claim: "The ending gives the reader a new way of seeing mangroves.",
    quote: "all disguised as a swamp",
    opts: [
      { t: "The writer reminds the reader that mangroves look like muddy swamps full of grey mud and tangled roots, which is exactly what you see if you go and visit one.", why: "Retelling. It describes how mangroves look but ignores the key word, “disguised”." },
      { t: "The final sentence of the article uses a metaphor and a list of three things in order to finish the article in a strong way.", why: "Techniques named, but “in a strong way” explains nothing. How does the ending change how we see mangroves?" },
      { t: "“Disguised” makes the swamp a costume hiding something valuable. After the list of jobs, the “muddy forest” looks completely different.", ok: true, why: "Strong. It explains the key word and links the ending back to the article’s earlier description, which proves the new way of seeing." },
      { t: "I used to think that swamps were ugly and smelly places, but after reading this article I think I would really like to go and visit a mangrove one day myself.", why: "A personal response. It may show the article worked on you, but it does not analyse the writer’s words." }
    ]
  }
];

const COLLECT = [
  {
    claim: "Mangroves survive conditions that would kill most other plants.",
    opts: [
      { t: "Most plants would die in these conditions, but mangroves have adapted.", ok: true, why: "Right. The contrast between what most plants can't do and what mangroves can proves they survive where others fail." },
      { t: "filter salt out of the water before it reaches their leaves", why: "This is one clever adaptation, but the claim asks for the quote showing they live where other plants can't." },
      { t: "Twice a day, salt water floods their roots and then drains away", why: "This describes the harsh condition, not the fact that mangroves survive it." },
      { t: "young fish and crabs shelter from predators", why: "This is the nursery role, not about surviving salt and flooding." }
    ]
  },
  {
    claim: "The final sentence sums up every job that mangroves do.",
    opts: [
      { t: "a coastline’s bodyguard, a carbon vault and a nursery for young fish", ok: true, why: "Right. Three metaphors in a row gather protection, carbon storage and wildlife into one memorable summary." },
      { t: "climate heroes", why: "This is a metaphor too, but it names only one job (carbon). The final sentence covers all three." },
      { t: "nurseries of the sea", why: "This names only one job (shelter for young fish), not the whole summary." },
      { t: "protected areas give young trees time to grow", why: "This is about recovery, not a summary of the jobs mangroves do." }
    ]
  },
  {
    claim: "Mangroves store carbon for a very long time.",
    target: ["where it can stay locked away for centuries"],
    decoys: [{ phrase: "several times more carbon than many tropical forests", why: "This shows how much carbon they store, not how long it stays locked away. Look for the word 'centuries'." }],
    miss: "Look in the paragraph that calls mangroves 'climate heroes'.",
    explain: "Carbon in the waterlogged soil can 'stay locked away for centuries'. Storing it for so long is what makes mangroves matter for the climate."
  },
  {
    claim: "The writer warns that mangroves are now in danger of vanishing.",
    target: ["Yet this remarkable habitat is disappearing"],
    decoys: [{ phrase: "The good news is that mangroves can recover", why: "This is the hopeful turn that comes after the problem, not the warning that they are being lost. Look for the sentence beginning 'Yet'." }],
    miss: "Look for the paragraph that turns from praise to a problem.",
    explain: "The word 'Yet' flips the mood: after all the praise, 'this remarkable habitat is disappearing' warns that mangroves are being lost."
  }
];
TEXTS.push({ id: "mangroves", type: "Non-fiction", mode: "Informative", form: "Feature article", level: "6ème",
  hook: "A forest that stands in the sea, and why it matters more than it looks.",
  TEXT, ANNOTATE, QUESTIONS, EVIDENCE, EXPLAIN, COLLECT });
}

/* ================================================================
   TEXT 3 · Fiction · Creative · Dystopian short story
   ================================================================ */
{
const TEXT = {
  title: "Quiet Hours",
  paras: [
    "In our city, sound is rationed. Every citizen gets forty decibels after sunset, measured by the grey badge pinned above the heart. Mine blinks green when I whisper and amber when I forget myself. Red means a visit.",
    "Nobody explains what a visit is. Mr Okafor from the fourth floor had one last winter. The next morning his door was painted white, the colour of fresh starts, and a new family moved in who never, ever dropped their spoons.",
    "So we have learned to live softly. My mother cooks without letting the pan kiss the stove. My little brother, Tobi, laughs into a pillow, his whole body shaking like a kettle that is not allowed to boil. We talk with our hands at dinner. We have become very good at it.",
    "Tonight, though, something is wrong with the pipes. A drip has started somewhere inside the wall: tock, tock, tock. It is not ours. It is not anyone’s. But the badges do not care whose sound it is.",
    "I watch mine. Green. Green. Amber.",
    "Tobi is asleep. Mother is at the window, pretending to look at the stars. I take the biggest towel from the cupboard, press my ear to the cold wall, and follow the sound the way you follow a secret.",
    "Behind the bathroom tiles, the drip grows louder, as if it knows it has been found."
  ]
};

const ANNOTATE = [
  {
    skill: "Short sentence",
    prompt: "Find the short sentence that creates <em>threat</em> without explaining anything.",
    target: ["Red means a visit."],
    decoys: [{ phrase: "Mine blinks green when I whisper", why: "This explains how the badge works, calmly. There is no threat yet. Look for the sentence that stops suddenly on something we don’t understand." }],
    miss: "Look at the end of the first paragraph. Which sentence is shortest, and most worrying?",
    explain: "Four words, and the story stops dead. “A visit” sounds harmless, but pairing it with “red” (danger) makes it frightening. Because nothing is explained, the reader imagines something worse."
  },
  {
    skill: "Personification",
    prompt: "Find the personification that shows how <em>gently</em> the family must live.",
    target: ["without letting the pan kiss the stove"],
    decoys: [{ phrase: "laughs into a pillow", why: "That is a real action by a real person, so it is not personification. Look for an object doing something human." }],
    miss: "Look at how the mother cooks. What does the pan almost do?",
    explain: "A kiss is the softest touch there is. Even that would be too loud, so the mother keeps the pan from touching the stove at all. The personification shows how extreme the quiet has become."
  },
  {
    skill: "Simile",
    prompt: "Find the simile that shows Tobi <em>holding in his joy</em>.",
    target: ["like a kettle that is not allowed to boil"],
    decoys: [{ phrase: "as if it knows it has been found", why: "That is a comparison too, but it describes the drip at the end, not Tobi." }],
    miss: "Find Tobi in the third paragraph. What is his shaking body compared to?",
    explain: "A kettle builds pressure until it whistles. Tobi is full of laughter but “not allowed” to let it out, so even happiness becomes a strain. The simile shows the rules reach into feelings, not just noise."
  },
  {
    skill: "Onomatopoeia",
    prompt: "Find the words that <em>imitate the sound</em> threatening the family.",
    target: ["tock, tock, tock"],
    decoys: [{ phrase: "Green. Green. Amber.", why: "Good instinct: this repetition also counts up the danger. But these are colours, not sounds. Look for words that sound like the drip." }],
    miss: "Look for the moment the drip starts. What does it sound like?",
    explain: "“Tock, tock, tock” lets the reader hear the drip. Repeated three times, it sounds steady and unstoppable, like a clock counting down, which builds tension."
  }
];

const QUESTIONS = [
  {
    skill: "Point of view",
    q: "From what point of view is the story told?",
    opts: [
      { t: "First person, by a young member of the family", ok: true, why: "Right. The narrator uses “I” and “mine” and speaks of “my mother” and “my little brother”. We only know what this one character sees and feels, which keeps the danger mysterious." },
      { t: "Third person omniscient, by an all-knowing narrator", why: "An all-knowing narrator could explain what a visit is. This narrator says “Nobody explains”, so we are trapped in one character’s limited view." },
      { t: "First person, narrated by Tobi, the younger brother", why: "Tobi is described as “my little brother” and is asleep while the narrator acts. The narrator is someone else in the family." },
      { t: "Second person, addressing the reader", why: "The story does use “you” once (“the way you follow a secret”), but that is a general “you”, like “one”. The narrator is clearly “I”." }
    ]
  },
  
  {
    skill: "Inference",
    q: "What most likely happened to Mr Okafor?",
    opts: [
      { t: "He was taken away as punishment, and signs of him were erased", ok: true, why: "Right. He had “a visit”, by the next morning his door was painted over and a new family moved in. Nobody explains, which suggests something people are afraid to say." },
      { t: "He moved away to a bigger, nicer flat on another floor of the building", why: "Nothing suggests a happy move. The speed (“the next morning”) and the silence around it point to something sinister." },
      { t: "He chose to paint his own door white because he wanted a fresh start", why: "The sentence says “his door was painted”, not that he painted it. Someone else did it, after he was gone." },
      { t: "He became close friends with the new family", why: "The new family moved in after he left. There is no sign he was still there to meet them." }
    ]
  },
  {
    skill: "Character",
    q: "“Mother is at the window, pretending to look at the stars.” What does this suggest?",
    opts: [
      { t: "She is frightened and hiding it, perhaps watching for someone coming", ok: true, why: "Right. “Pretending” tells us the stars are not the real reason. Standing at the window while the badge turns amber suggests she is watching the street in fear." },
      { t: "She is very interested in astronomy and likes to study the stars at night", why: "The word “pretending” rules this out. She is not really looking at the stars." },
      { t: "She has not noticed the drip at all", why: "If she hadn’t noticed, she would not need to pretend. Her pretence suggests she knows exactly what is happening." },
      { t: "She is angry with the narrator for being noisy and doesn’t want to talk", why: "The drip is not the narrator’s fault, and nothing she does is aimed at them. Her behaviour shows fear, not anger." }
    ]
  },
  {
    skill: "Ending",
    q: "Why does the story end with the drip growing “louder, as if it knows it has been found”?",
    opts: [
      { t: "It leaves a cliffhanger: the threat grows just when we hope for a solution", ok: true, why: "Right. The narrator finds the drip, but instead of stopping, it gets louder. The story ends at the most dangerous moment and leaves the reader anxious." },
      { t: "It solves the problem at last, so the reader can finally relax", why: "Nothing is solved. The drip is louder than ever and the badge is already amber." },
      { t: "It proves that the pipe is really a magical creature that is alive and aware", why: "“As if” means it only seems that way. The comparison creates an eerie feeling. It does not make the drip literally alive." },
      { t: "It shows the narrator has fixed the pipe with the towel", why: "The towel is taken, but the story ends before anything is fixed. The drip is growing louder, not stopping." }
    ]
  },
  {
    skill: "Summary",
    q: "Which sentence best sums up what happens in this text?",
    opts: [
      { t: "In a world where a badge punishes any noise after dark, a family that has learned to live silently is unsettled when an unexplained dripping sound threatens to get them into trouble.", ok: true, why: "Right. It covers the whole shape of the text, not just one part of it." },
      { t: "A family's badge blinks green whenever they whisper quietly and amber whenever somebody in the flat forgets themselves for a moment. It is mentioned only briefly, and is not the main focus. Elsewhere in the text, different events take centre stage.", why: "True, but too narrow. It only covers part of the text and misses the main point." },
      { t: "Soldiers arrive at the family's door to arrest them the moment their badge turns red for the very first time that year. Other characters and events are also part of what happens in the text.", why: "Too broad. This adds a claim the text does not actually make or support." },
      { t: "Tobi laughs quietly into a pillow so that his whole body shakes instead of making any noise at the dinner table. This point is raised without being the central focus of the whole piece. Further events unfold elsewhere in the passage that this does not cover.", why: "A real detail, but a minor one. It is not what the text is mainly about." }
    ]
  }
];

const EVIDENCE = [
  {
    quote: "a new family moved in who never, ever dropped their spoons",
    opts: [
      { t: "People live in fear of making any noise", ok: true, why: "Right. “Never, ever” shows extreme care over a tiny sound. After what happened to Mr Okafor, the new family is clearly afraid." },
      { t: "The new family is very tidy and careful", why: "Close, but it misses why. In this city, carefulness comes from fear, not tidiness. Read the quote in context." },
      { t: "Spoons are banned in the city", why: "The family has spoons; they just never drop them. The rule is about sound, not objects." },
      { t: "The new family is rude to their neighbours", why: "Nothing in the quote is about how they treat others. It is about how quietly they live." }
    ]
  },
  {
    quote: "But the badges do not care whose sound it is.",
    opts: [
      { t: "The system is unfair: people can be punished for sounds they did not make", ok: true, why: "Right. The drip is “not ours” and “not anyone’s”, yet the badges will still react. The quote shows the rules are blind and cruel." },
      { t: "The badges are broken and need to be repaired before anyone is punished", why: "The badges work exactly as designed. The problem is that the design ignores who is responsible." },
      { t: "The drip in the wall really belongs to the narrator’s own family", why: "The previous sentences say “It is not ours”. The quote matters precisely because the sound is not theirs." },
      { t: "The narrator does not care about the rules", why: "The badges are the ones that “do not care”. The narrator cares very much, which is why they go looking for the drip." }
    ]
  },
  {
    quote: "follow the sound the way you follow a secret",
    opts: [
      { t: "The narrator is determined and curious enough to face the danger", ok: true, why: "Right. Instead of hiding, the narrator moves towards the sound, carefully and quietly, like someone uncovering a secret. That shows courage and determination." },
      { t: "The narrator wants to report the neighbours to the authorities for noise", why: "Nothing suggests reporting anyone. The narrator is trying to find and stop the sound to protect the family." },
      { t: "The narrator is sleepwalking and doesn’t know what they are doing", why: "The narrator is clearly awake: watching the badge, choosing a towel, pressing an ear to the wall. These are deliberate actions." },
      { t: "The narrator already knows exactly what is behind the wall", why: "You follow a secret because you don’t know it yet. The quote shows searching, not knowing." }
    ]
  }
];

const EXPLAIN = [
  {
    claim: "The rules control people’s most private lives.",
    quote: "the grey badge pinned above the heart",
    opts: [
      { t: "Every person living in the city has to wear a grey badge on their clothes, and the badge measures exactly how much sound they make each night after sunset.", why: "Retelling. It describes the badge but never explains the detail that proves the claim: “above the heart”." },
      { t: "The badge sits “above the heart”, the most personal place on the body. The rules reach into feelings, not only voices.", ok: true, why: "Strong. It picks out the exact detail, explains what the heart symbolises, and links it to control over private life." },
      { t: "The writer uses description of an object in this sentence to help the reader to picture the setting of the dystopian story.", why: "Too general. Which part of the description matters, and how does it show control? Name the words and their effect." },
      { t: "This proves the badge can read every single thought in a person’s mind and punish them straight away for thinking anything at all that is against the rules.", why: "Overclaiming. The badge measures sound. The heart position is symbolic; it does not prove the badge reads thoughts." }
    ]
  },
  {
    claim: "The authorities cover up what they do.",
    quote: "the colour of fresh starts",
    opts: [
      { t: "The new family is happy to be moving into their new flat on the fourth floor, so they paint the door white because it is the colour of a fresh start for them.", why: "A misreading. The door is painted after Mr Okafor disappears, and nothing suggests the new family painted it." },
      { t: "White suggests clean and new, so “fresh starts” sounds positive. But a man has vanished, so the cheerful phrase hides something sinister.", ok: true, why: "Strong. It explains the usual meaning, then shows how the context turns it dark, which is exactly what a cover-up does." },
      { t: "This quote creates a mysterious effect in the story and makes the reader want to keep on reading to find out more.", why: "Vague. Almost any quote could “create a mysterious effect”. Explain which words, and how they show a cover-up." },
      { t: "This is irony, because what the writer says in this part of the story is the opposite of what the reader expects to happen, which is a very common technique.", why: "The label is close, but the definition stops before the effect. What is being hidden, and how do the words hide it?" }
    ]
  },
  {
    claim: "Even happiness is dangerous in this city.",
    quote: "like a kettle that is not allowed to boil",
    opts: [
      { t: "Tobi finds something very funny just before going to bed, so he laughs into his pillow as quietly as he can and his whole body starts to shake with laughter.", why: "Retelling. It never explains the kettle, which is the part that shows happiness is dangerous." },
      { t: "The writer uses a simile here, comparing Tobi to a kettle by using the word like, which makes the description more vivid.", why: "“More vivid” is an empty effect. What does a kettle that can’t boil suggest about Tobi’s laughter?" },
      { t: "A kettle builds pressure until it whistles. Tobi is full of laughter but “not allowed” to release it, so joy becomes a strain.", ok: true, why: "Strong. It explains what the kettle suggests (pressure), uses “not allowed”, and links it to happiness being dangerous." },
      { t: "I laugh with my brother all the time at home, so this part of the story made me feel really sad for Tobi and for his whole family living under these rules.", why: "A personal response. Empathy is valuable, but analysis explains the writer’s words, not your own life." }
    ]
  },
  {
    claim: "The tension rises quickly.",
    quote: "Green. Green. Amber.",
    opts: [
      { t: "The narrator’s badge changes colour from green to amber because the drip inside the bathroom wall has started to make more and more noise as the night goes on.", why: "Retelling. It explains what happens to the badge, not how the writing builds tension." },
      { t: "Three one-word sentences slow the reader to the pace of watching. The repeated “Green” feels safe, so “Amber” lands like a jolt.", ok: true, why: "Strong. It explains the sentence length, the repetition and the final change, and shows how each builds tension." },
      { t: "The writer uses very short sentences and some repetition in this paragraph, and these are both techniques that writers use.", why: "Two techniques named, zero effects explained. Techniques only matter because of what they do." },
      { t: "This shows that the narrator will definitely get a visit from the authorities tonight and will be taken away from their family, just like Mr Okafor was last winter.", why: "Overclaiming. Amber is a warning, not red. The story never shows a visit to the narrator." }
    ]
  }
];

const COLLECT = [
  {
    claim: "The family has learned to live in almost complete silence out of fear.",
    opts: [
      { t: "talk with our hands at dinner", ok: true, why: "Right. Signing instead of speaking at meals shows how completely fear has trained the family into silence." },
      { t: "So we have learned to live softly", why: "This states it in general; the claim asks for the clearest proof of how silent they’ve become. Look for the dinner detail." },
      { t: "Mine blinks green when I whisper", why: "This describes how the badge works, not how the family lives." },
      { t: "Tobi is asleep", why: "This is a plot detail, not evidence of their silent way of living." }
    ]
  },
  {
    claim: "The badge system is cruel because it can punish sounds people did not make.",
    opts: [
      { t: "It is not ours. It is not anyone’s.", ok: true, why: "Right. The drip belongs to no one, yet the badges will still react, which shows how blind and unfair the rules are." },
      { t: "A drip has started somewhere inside the wall", why: "This is the source of the sound, not why the system is unfair." },
      { t: "forty decibels after sunset", why: "This is the noise rule, not the unfairness of punishing the wrong person." },
      { t: "something is wrong with the pipes", why: "This is the problem in the flat, not why the badges are cruel." }
    ]
  },
  {
    claim: "A cheerful phrase is used to cover up something sinister.",
    target: ["the colour of fresh starts"],
    decoys: [{ phrase: "his door was painted white", why: "This states the door’s colour plainly; the claim asks for the cheerful phrase that hides the dark event. Look for ‘fresh starts’." }],
    miss: "Look at how Mr Okafor’s door is described the next morning.",
    explain: "A man has vanished, yet his door is ‘the colour of fresh starts’. The pleasant phrase, in the authorities’ own cheerful language, hides something sinister."
  },
  {
    claim: "The narrator moves towards the danger instead of hiding from it.",
    target: ["press my ear to the cold wall"],
    decoys: [{ phrase: "Mother is at the window, pretending to look at the stars", why: "This is the mother’s frightened stillness, not the narrator’s bold move towards the sound. Look for what the narrator does with the wall." }],
    miss: "Look for what the narrator does to find the drip.",
    explain: "Instead of hiding, the narrator takes a towel and presses an ear ‘to the cold wall’ to track the sound. Moving towards the danger shows real courage."
  }
];
TEXTS.push({ id: "quiet-hours", type: "Fiction", mode: "Creative", form: "Dystopian short story", level: "5ème",
  hook: "In a city where sound is rationed, a drip in the wall could cost a family everything.",
  TEXT, ANNOTATE, QUESTIONS, EVIDENCE, EXPLAIN, COLLECT });
}

/* ================================================================
   TEXT 4 · Non-fiction · Creative · Memoir
   ================================================================ */
{
const TEXT = {
  title: "Six A.M. at the Hawker Centre",
  paras: [
    "The hawker centre wakes up before the city does. At six in the morning the shutters rattle upwards one after another, like eyelids that have not had enough sleep, and the first kettles begin to mutter.",
    "My grandmother has come here every morning for forty years. She walks straight past the empty tables to Uncle Lim’s stall, where the kaya toast is made the old way: bread charred over charcoal, butter cut in slabs as thick as a finger. She does not order. Uncle Lim does not ask.",
    "I used to find this boring. When I was younger I wanted pancakes from a café with fairy lights, not the same toast at the same table under the same flickering tube light. I spent those mornings staring at my phone and sighing loudly enough to be noticed.",
    "Now I notice other things. The auntie at the drinks stall pours teh from a great height, the brown ribbon stretching and folding without spilling a drop. The old men at the corner table argue about football in three languages. A pigeon patrols the floor like a tiny security guard, inspecting every crumb.",
    "Last year the stall next to Uncle Lim’s closed down. Its owner retired, and nobody wanted to wake at four to boil stock. Now its shutter stays down all day, a grey square in a row of bright ones, like a missing tooth.",
    "My grandmother still eats slowly. She tears her toast into careful strips and dips each one into soft-boiled egg. Sometimes she catches me watching and pushes the plate an inch towards me, saying nothing.",
    "I take a strip. It tastes of smoke and sugar and forty years of mornings."
  ]
};

const ANNOTATE = [
  {
    skill: "Personification",
    prompt: "Find where an <em>object</em> is given a human voice.",
    target: ["the first kettles begin to mutter"],
    decoys: [{ phrase: "argue about football in three languages", why: "Those are real people talking, so this is not personification. Look for a thing that talks like a person." }],
    miss: "Look at the end of the first paragraph. What do the kettles do?",
    explain: "People mutter when they are half awake or grumbling. Giving the kettles this voice adds sound to the scene and continues the idea of the centre slowly waking up."
  },
  {
    skill: "Contrast",
    prompt: "Find the detail showing what the younger writer <em>wanted instead</em>.",
    target: ["pancakes from a café with fairy lights"],
    decoys: [{ phrase: "the same toast at the same table", why: "That is the routine she found boring. The question asks what she wished for instead." }],
    miss: "Look at the third paragraph. What did the writer want when she was younger?",
    explain: "Pancakes and fairy lights are modern, pretty and exciting. Setting them against charcoal toast and a flickering tube light shows the gap between what the young writer wanted and what she had."
  },
  {
    skill: "Repetition",
    prompt: "Find the repetition that shows how <em>dull</em> the routine felt back then.",
    target: ["the same toast at the same table under the same flickering tube light"],
    decoys: [{ phrase: "every morning for forty years", why: "This tells us the routine is long, but it does not repeat any words. Look for a word used three times in one line." }],
    miss: "Look for a word repeated three times in the third paragraph.",
    explain: "“The same… the same… the same” makes the sentence itself feel monotonous. The reader feels the boredom through the rhythm, not just by being told about it."
  },
  {
    skill: "Sensory language",
    prompt: "Find where a <em>taste carries memories</em>, not just flavour.",
    target: ["forty years of mornings"],
    decoys: [{ phrase: "smoke and sugar", why: "Those are real flavours you can taste. Look for the “ingredient” in the list that no one could actually taste." }],
    miss: "Read the final sentence. Which part of the list is not really a flavour?",
    explain: "Smoke and sugar are real tastes, then “forty years of mornings” sneaks into the same list. The toast now tastes of the grandmother’s whole history, showing the writer has understood what the routine means."
  }
];

const QUESTIONS = [
  
  {
    skill: "Structure",
    q: "How does the writer’s attitude change across the text?",
    opts: [
      { t: "From finding the mornings boring to valuing them", ok: true, why: "Right. “I used to find this boring” is followed by “Now I notice other things”. By the end, she shares the toast. The text is built around this change." },
      { t: "From loving the mornings to hating them", why: "The reverse. She was bored when younger and appreciates the mornings now." },
      { t: "Her attitude stays the same throughout", why: "“Used to” and “Now” are signposts of change. The writer tells us directly that she sees things differently." },
      { t: "From wanting pancakes to wanting to open her own stall", why: "She comes to value the tradition, but she never says she wants to become a hawker. Stay inside the text." }
    ]
  },
  {
    skill: "Mood",
    q: "What mood does the paragraph beginning “Now I notice other things” create?",
    opts: [
      { t: "Lively, warm and gently humorous", ok: true, why: "Right. Skilful tea-pouring, men arguing “in three languages” and a pigeon acting “like a tiny security guard” make the place feel busy, affectionate and a little funny." },
      { t: "Tense, threatening and dangerous", why: "The “security guard” is a pigeon inspecting crumbs. It is a playful image, not a threat." },
      { t: "Sad, quiet and lonely", why: "The paragraph is full of people and activity. The sadness comes later, with the closed stall." },
      { t: "Bored and dull", why: "That was her old attitude. “Now I notice” shows she finds these details interesting." }
    ]
  },
  {
    skill: "Purpose of a detail",
    q: "Why does the writer include the stall that “closed down”?",
    opts: [
      { t: "To show traditions can disappear, making the routine feel precious", ok: true, why: "Right. Nobody wanted to take over the hard work, so the stall vanished. That loss makes the grandmother’s surviving routine feel more valuable and fragile." },
      { t: "To warn readers that the food at that stall was bad and unsafe to eat", why: "The stall closed because the owner retired and no one took over, not because of the food." },
      { t: "To criticise the owner for retiring", why: "The writer is not blaming anyone. The tone is sad, not critical." },
      { t: "To explain why the hawker centre is always empty in the mornings", why: "The centre is busy with stalls, customers and arguing men. Only one stall has closed." }
    ]
  },
  {
    skill: "Inference",
    q: "“Pushes the plate an inch towards me, saying nothing.” What does this suggest?",
    opts: [
      { t: "The grandmother quietly invites the writer to share her tradition", ok: true, why: "Right. The gesture is small (“an inch”) and silent, like her order with Uncle Lim. It is an offer of love and belonging without words." },
      { t: "The grandmother is full and wants somebody else to finish her food", why: "She “still eats slowly” and carefully. The push happens when she “catches me watching”, so it is about the writer, not her appetite." },
      { t: "The grandmother is annoyed that her granddaughter keeps watching her", why: "An annoyed person would not offer food. Sharing the plate is a warm response." },
      { t: "The grandmother wants the writer to leave", why: "Pushing the plate closer draws the writer in, the opposite of sending her away." }
    ]
  },
  {
    skill: "Summary",
    q: "Which sentence best sums up what happens in this text?",
    opts: [
      { t: "A narrator who once found their grandmother's daily visits to a hawker stall boring has slowly come to notice and appreciate the small rituals of those early mornings.", ok: true, why: "Right. It covers the whole shape of the text, not just one part of it." },
      { t: "A grandmother walks straight past the empty tables to eat kaya toast at Uncle Lim's stall every single morning of the week. Other parts of the story focus on different details.", why: "True, but too narrow. It only covers part of the text and misses the main point." },
      { t: "The narrator decides to leave school and take over running Uncle Lim's stall once he finally retires from working there. The rest of the text develops in a different direction.", why: "Too broad. This adds a claim the text does not actually make or support." },
      { t: "A pigeon patrols the floor of the hawker centre like a tiny security guard, inspecting every crumb that it can find. Elsewhere in the text, different events take centre stage.", why: "A real detail, but a minor one. It is not what the text is mainly about." }
    ]
  }
];

const EVIDENCE = [
  {
    quote: "sighing loudly enough to be noticed",
    opts: [
      { t: "The younger writer wanted others to see she was bored", ok: true, why: "Right. The sigh was “loudly enough to be noticed”, so it was a performance, meant to show her grandmother how she felt." },
      { t: "The writer was feeling ill most mornings at the hawker centre", why: "Sighing here is about boredom, as the same paragraph makes clear. Nothing suggests illness." },
      { t: "The grandmother completely ignored her granddaughter", why: "The quote tells us what the writer did, not how the grandmother reacted. You can’t prove something the quote doesn’t show." },
      { t: "The writer’s phone was not working properly that morning", why: "She was “staring at my phone”, which suggests it worked fine. The sighing is about the mornings." }
    ]
  },
  {
    quote: "nobody wanted to wake at four to boil stock",
    opts: [
      { t: "Hawker work is demanding, and fewer people are willing to do it", ok: true, why: "Right. Waking at four shows how hard the work is, and “nobody wanted” shows no one would take it on. That is why the stall closed." },
      { t: "People do not like eating soup made with stock any more", why: "The quote is about the work of making it, not whether people like eating it." },
      { t: "The stall’s owner was lazy", why: "The owner “retired” after running the stall. The quote is about nobody taking over, not the owner’s effort." },
      { t: "Every hawker centre in Singapore will close down very soon", why: "Overclaiming. One stall closing does not prove every hawker centre will close." }
    ]
  },
  {
    quote: "It tastes of smoke and sugar and forty years of mornings.",
    opts: [
      { t: "The writer now feels connected to her grandmother’s tradition", ok: true, why: "Right. The toast tastes of “forty years of mornings”, her grandmother’s whole routine. By tasting it, the writer shares in that history." },
      { t: "The toast has been burnt on the charcoal and tastes of smoke", why: "“Smoke” comes from charcoal toasting, the traditional method. The sentence is warm, not a complaint." },
      { t: "The toast is forty years old", why: "A literal misreading. “Forty years of mornings” is about the memories and routine, not the age of the bread." },
      { t: "The writer still dislikes the toast but eats it to be polite", why: "The whole ending shows the opposite: she takes a strip and describes its taste with affection." }
    ]
  }
];

const EXPLAIN = [
  {
    claim: "The hawker centre feels alive.",
    quote: "the first kettles begin to mutter",
    opts: [
      { t: "The writer uses personification in this sentence by giving the kettles a human action that they cannot really do, which is a common language technique.", why: "Correct label, no effect. How does a muttering kettle make the centre feel alive?" },
      { t: "“Mutter” is how people talk when half awake or grumbling. Kettles with this voice make the centre sound like a person waking.", ok: true, why: "Strong. It explains the human meaning of “mutter” and shows how that makes the whole place feel alive." },
      { t: "At six o’clock in the morning, the stalls in the hawker centre start boiling water in their kettles to get ready for the day.", why: "Retelling. It tells us what happens but not how the word choice makes the place feel alive." },
      { t: "This shows the kettles at the hawker centre are old and broken, because they are making strange muttering noises in the morning when they start to boil.", why: "A misreading. The muttering is a playful comparison, not a sign of faulty kettles." }
    ]
  },
  {
    claim: "The younger writer did not value these mornings.",
    quote: "I spent those mornings staring at my phone",
    opts: [
      { t: "I always look at my phone during breakfast too, so I think this part of the text is very relatable for readers my age who also use their phones a lot.", why: "A personal response. It connects to you, but it does not explain the writer’s words." },
      { t: "“Staring” suggests a blank, fixed look, not attention. The writer was there in body but elsewhere in mind, missing the life around her.", ok: true, why: "Strong. It explains the precise verb and connects it to not valuing the mornings." },
      { t: "The writer uses a verb in this sentence to describe what she was doing with her phone during the mornings.", why: "Every sentence has verbs. Which verb matters, and what does it suggest?" },
      { t: "This proves that phones are very bad for young people and that they should be completely banned at every meal time in every family and every school.", why: "Overclaiming, and off the text. The memoir is about one writer’s experience, not a rule for everyone." }
    ]
  },
  {
    claim: "Losing a stall is painful.",
    quote: "like a missing tooth",
    opts: [
      { t: "The stall next to Uncle Lim’s closed down last year when its owner retired, and now its grey shutter stays down for the whole day, every day of the week.", why: "Retelling. It restates the event but ignores the simile, which is where the pain is." },
      { t: "A missing tooth leaves a gap you keep noticing, and losing one hurts. The simile makes the closed stall feel like damage.", ok: true, why: "Strong. It explains two things a missing tooth suggests and links both to the pain of loss." },
      { t: "This is a simile, because the writer uses the word like to compare the closed stall to something else, which helps to make the description more vivid.", why: "Definition only. The comparison matters because of what it makes us feel." },
      { t: "The writer uses an image in this sentence in order to create a sad effect on the reader.", why: "Vague. Why does this image feel sad? Explain the tooth." }
    ]
  },
  {
    claim: "The writer has come to value the tradition.",
    quote: "I take a strip.",
    opts: [
      { t: "The writer reaches over and takes a strip of toast from her grandmother’s plate after her grandmother pushes it towards her, and then she eats it.", why: "Retelling. It says what she does but not why this simple action matters." },
      { t: "This shows the writer will now come to the hawker centre with her grandmother every single morning for the next forty years, just as her grandmother did.", why: "Overclaiming. Taking one strip shows a change in attitude, not a promise about the next forty years." },
      { t: "Once she wanted pancakes; now she takes the offered toast. The short, plain sentence makes it a quiet sign she has joined the tradition.", ok: true, why: "Strong. It links back to the earlier contrast, explains the sentence’s simplicity, and shows how that proves she values the tradition." },
      { t: "The writer uses a short sentence here, at the start of the final paragraph of the memoir.", why: "Correct observation, no effect. What does the shortness do?" }
    ]
  }
];

const COLLECT = [
  {
    claim: "The writer’s feelings about these mornings change over the memoir.",
    opts: [
      { t: "Now I notice other things.", ok: true, why: "Right. “Now” marks the turn: she has stopped being bored and started paying attention." },
      { t: "I used to find this boring.", why: "This is how she felt before. The claim asks for the quote where her attitude turns." },
      { t: "My grandmother has come here every morning for forty years.", why: "This tells us how long the routine is, not that the writer’s feelings change." },
      { t: "She walks straight past the empty tables to Uncle Lim’s stall", why: "This is a detail of the routine, not the writer’s change of heart." }
    ]
  },
  {
    claim: "The grandmother and Uncle Lim share a routine so familiar it needs no words.",
    opts: [
      { t: "She does not order. Uncle Lim does not ask.", ok: true, why: "Right. The two matching sentences show that after forty years each already knows what the other will do." },
      { t: "where the kaya toast is made the old way", why: "This is about how the food is made, not the wordless bond between them." },
      { t: "My grandmother still eats slowly.", why: "This describes how she eats, not the silent understanding with Uncle Lim." },
      { t: "bread charred over charcoal, butter cut in slabs as thick as a finger", why: "This describes the toast itself, not the routine they share." }
    ]
  },
  {
    claim: "The writer now admires the skill in ordinary tasks around the centre.",
    target: ["the brown ribbon stretching and folding without spilling a drop"],
    decoys: [{ phrase: "The old men at the corner table argue about football in three languages", why: "This is a lively detail she notices too, but it is not about someone’s skill. Look for the graceful way the tea is poured." }],
    miss: "Look in the paragraph beginning “Now I notice other things.”",
    explain: "Pouring teh from a height so the “ribbon” never spills takes real skill. Describing it so carefully shows the admiration she did not feel when she was younger."
  },
  {
    claim: "The writer makes the waking hawker centre feel like a sleepy person.",
    target: ["like eyelids that have not had enough sleep"],
    decoys: [{ phrase: "the shutters rattle upwards one after another", why: "This describes the shutters moving, but not the sleepy-person comparison itself. Look for the words just after “like”." }],
    miss: "Look at the shutters in the first sentence. What are they compared to?",
    explain: "Shutters rolling up become “eyelids” opening slowly, “not enough sleep”. The whole building feels like a tired person waking, which makes the place feel alive."
  }
];
TEXTS.push({ id: "hawker-centre", type: "Non-fiction", mode: "Creative", form: "Memoir", level: "6ème",
  hook: "Forty years of the same breakfast, and the morning a granddaughter finally notices.",
  TEXT, ANNOTATE, QUESTIONS, EVIDENCE, EXPLAIN, COLLECT });
}

/* ================================================================
   TEXT 5 · Non-fiction · Informative · Information report · CM2
   ================================================================ */
{
const TEXT = {
  title: "New Zealand Fur Seals",
  paras: [
    "## Baby fur seals",
    "Seals are mammals. So, like all mammals, baby fur seals (also called pups) drink milk from their mothers.",
    "The pups learn to swim in rock pools. Later they swim out in the sea. The pups stay with their mothers for about a year. The pups are then able to leave their mothers and catch fish.",
    "## Where do they live?",
    "New Zealand fur seals are found in the waters of New Zealand as well as in the waters south of Australia (see map).",
    "Fur seals were hunted until they were almost totally gone. The good news is that there are now around 100 000 fur seals in Australian and New Zealand waters.",
    "## Fur seal or sea lion?",
    "Sometimes fur seals are mistaken for sea lions. But if you look carefully, it is easy to tell them apart. Fur seals have a pointed nose and a thick coat of fur. Sea lions, on the other hand, have a more rounded nose and a thinner coat of fur.",
    "Another big difference is where you find them on land. Fur seals like rocky places, while sea lions like to be on sandy beaches.",
    "## Key facts",
    "Location: New Zealand and southern Australian waters. Colour: grey/brown. Length: 1.2–2.5 metres. Weight: 30–180 kilograms. Life span: 15–20 years.",
    "[Map: the coloured areas show where New Zealand fur seals are found: along the south coast of Australia, around Tasmania and around New Zealand.]"
  ]
};

const ANNOTATE = [
  {
    skill: "Definition in brackets",
    prompt: "Find where the writer explains a <em>new word</em> in brackets.",
    target: ["(also called pups)"],
    decoys: [{ phrase: "(see map)", why: "These are brackets too, but they tell you where to look. They don’t explain what a word means." }],
    miss: "Look in the first section, “Baby fur seals”, for words inside brackets.",
    explain: "The brackets tell us that baby fur seals have a special name: pups. The writer teaches a new word without stopping the sentence, and the sentence still makes sense if you skip the brackets."
  },
  {
    skill: "Text feature",
    prompt: "Find where the writer <em>sends you to another part of the page</em>.",
    target: ["(see map)"],
    decoys: [{ phrase: "(also called pups)", why: "These brackets explain a word. Look for brackets that point you to a picture." }],
    miss: "Look in the section “Where do they live?”.",
    explain: "“(See map)” tells the reader to look at the map for more detail. Information texts often use pictures, maps and boxes as well as words, and the writer links them together."
  },
  {
    skill: "Signal phrase",
    prompt: "Find the words that tell the reader <em>something hopeful</em> is coming.",
    target: ["The good news is"],
    decoys: [{ phrase: "Fur seals were hunted until they were almost totally gone.", why: "That is the bad news. Look for the words that change to good news straight after." }],
    miss: "Read the sentence after fur seals were hunted.",
    explain: "“The good news is” is a signal. It tells the reader the sad part is over and a hopeful fact is coming: there are now around 100 000 fur seals."
  },
  {
    skill: "Comparing words",
    prompt: "Find <em>one</em> word or phrase the writer uses to show two animals are different.",
    target: ["on the other hand", "while"],
    decoys: [{ phrase: "Another big difference is", why: "This tells you a difference is coming, but it doesn’t compare the two animals itself. Look for the words that join a fur seal fact to a sea lion fact." }],
    miss: "Look in the section “Fur seal or sea lion?” for words that link fur seals and sea lions.",
    explain: "“On the other hand” and “while” are comparing words. They join a fact about fur seals to a different fact about sea lions, so the reader can see the difference clearly."
  }
];

const QUESTIONS = [
  {
    skill: "Purpose",
    q: "What is the main purpose of this text?",
    opts: [
      { t: "To give facts about New Zealand fur seals", ok: true, why: "Right. The text tells us what fur seals eat as babies, where they live, how to tell them apart from sea lions, and gives key facts. It informs." },
      { t: "To tell a story about one seal’s adventure", why: "There is no main character and no story. It gives facts about all fur seals." },
      { t: "To convince people to buy fur seal coats", why: "The text never tries to sell anything. It says fur seals were nearly hunted out, so it is not in favour of hunting." },
      { t: "To explain how to look after a pet seal", why: "There are no instructions, and fur seals are wild animals." }
    ]
  },
  {
    skill: "Inference",
    q: "“Fur seals were hunted until they were almost totally gone.” What can we work out?",
    opts: [
      { t: "The number of fur seals has grown again since then", ok: true, why: "Right. They were “almost totally gone”, and now there are “around 100 000”. So the number must have grown." },
      { t: "Fur seals are still being hunted in large numbers today", why: "The text uses the past (“were hunted”) and then gives “good news”. Nothing says hunting continues." },
      { t: "There are no fur seals left anywhere in the world now", why: "“Almost” totally gone means some were left, and there are now 100 000." },
      { t: "Fur seals hunt people", why: "People hunted the seals, not the other way round. Read who is doing the action." }
    ]
  },
  {
    skill: "Text features",
    q: "What is the “Key facts” section for?",
    opts: [
      { t: "It gives the most important details in a short, quick form", ok: true, why: "Right. Short labels like “Length:” and “Weight:” let you find a fact in seconds, without reading full sentences." },
      { t: "It tells a new story about one fur seal and its family", why: "It is a list of facts with labels, not a story." },
      { t: "It repeats every sentence from the text", why: "Most key facts (length, weight, life span) are not in the main text at all. It adds new information." },
      { t: "It gives the writer’s own opinions about seals and sea lions", why: "Colour, length and weight can be measured. These are facts, not opinions." }
    ]
  },
  {
    skill: "Vocabulary",
    q: "“Sometimes fur seals are mistaken for sea lions.” What does “mistaken for” mean?",
    opts: [
      { t: "People think they are sea lions when they are not", ok: true, why: "Right. To mistake one thing for another means to confuse them. That is why the writer then explains how to tell them apart." },
      { t: "Fur seals are really just a type of sea lion", why: "The whole section explains they are different animals." },
      { t: "Sea lions attack fur seals by mistake when they meet", why: "Nothing in the text mentions attacks. “Mistaken for” is about people confusing them." },
      { t: "Fur seals and sea lions live together", why: "The text says they like different places on land: rocks and sandy beaches." }
    ]
  },
  {
    skill: "Summary",
    q: "Which sentence best sums up what happens in this text?",
    opts: [
      { t: "The report gives key facts about New Zealand fur seals, including where they live, how the pups grow up, and how to tell them apart from sea lions nearby.", ok: true, why: "Right. It covers the whole shape of the text, not just one part of it." },
      { t: "Fur seals have a pointed nose and a thick coat of fur, while sea lions have a more rounded nose and a much thinner coat. Other parts of the story focus on different details.", why: "True, but too narrow. It only covers part of the text and misses the main point." },
      { t: "New Zealand fur seals are now the single most common seal species found anywhere in the whole world's oceans today. The rest of the text develops in a different direction.", why: "Too broad. This adds a claim the text does not actually make or support." },
      { t: "Fur seal pups stay close to their mothers for about a year before they are able to leave and catch their own fish. The story continues well beyond this particular moment.", why: "A real detail, but a minor one. It is not what the text is mainly about." }
    ]
  }
];

const EVIDENCE = [
  {
    quote: "baby fur seals (also called pups) drink milk from their mothers",
    opts: [
      { t: "Fur seals are mammals", ok: true, why: "Right. The sentence begins “So, like all mammals”. Drinking milk from their mothers is what mammals do." },
      { t: "Fur seal pups eat fish as soon as they are born", why: "The quote says they drink milk. They catch fish later, after about a year." },
      { t: "All sea animals drink milk when they are young", why: "The quote is about fur seals only. Fish, for example, don’t drink milk." },
      { t: "Pups live all alone in the sea", why: "They drink milk from their mothers, so they must stay with them." }
    ]
  },
  {
    quote: "The good news is that there are now around 100 000 fur seals",
    opts: [
      { t: "The number of fur seals has recovered", ok: true, why: "Right. After being “almost totally gone”, there are now 100 000. “Good news” shows this is a recovery." },
      { t: "There are now too many fur seals", why: "The writer calls it “good news”, so it is not presented as a problem." },
      { t: "100 000 fur seals are hunted every year", why: "The number is how many live today, not how many are hunted." },
      { t: "Fur seals only live in New Zealand", why: "The sentence says “Australian and New Zealand waters”." }
    ]
  },
  {
    quote: "Fur seals like rocky places, while sea lions like to be on sandy beaches.",
    opts: [
      { t: "Where you find them on land can help you tell them apart", ok: true, why: "Right. The sentence before says, “Another big difference is where you find them on land.” Rocks or sand is a clue." },
      { t: "Sandy beaches are dangerous places for fur seals to go", why: "The quote says what they like, not what is dangerous." },
      { t: "Fur seals and sea lions never meet", why: "Liking different places doesn’t prove they never meet." },
      { t: "Fur seals are better animals than sea lions in every way", why: "The text compares them without saying one is better." }
    ]
  }
];

const EXPLAIN = [
  {
    claim: "The writer makes new words easy to learn.",
    quote: "(also called pups)",
    opts: [
      { t: "The brackets add the word “pups” straight after “baby fur seals”, so readers learn it without stopping.", ok: true, why: "Strong. It explains what the brackets do and why that helps a reader learn." },
      { t: "Baby fur seals are also called pups, and they drink milk from their mothers because seals are mammals, just like all other mammals.", why: "Retelling. It repeats the facts but doesn’t explain how the writer helps readers learn the word." },
      { t: "The writer uses brackets in this sentence, around the words “also called pups”, in the first part of the text about baby fur seals.", why: "True, but it stops there. What do the brackets do for the reader?" },
      { t: "I think pups is a really cute name for baby seals.", why: "Your opinion is fine for a chat, but it doesn’t explain the writer’s choice." }
    ]
  },
  {
    claim: "The writer wants readers to feel hopeful.",
    quote: "The good news is",
    opts: [
      { t: "This shows that fur seals are not in any danger at all any more, and that people will never need to worry about them or protect them again.", why: "Overclaiming. Good news is hopeful, but the text doesn’t say all danger has gone." },
      { t: "“The good news is” comes right after seals were “almost totally gone”. It moves from sad to happy, so readers feel relief.", ok: true, why: "Strong. It uses the sentence before to show how the phrase changes the reader’s feeling." },
      { t: "This phrase makes the reader feel something while they are reading.", why: "Too vague. Feel what? And why?" },
      { t: "There are now around 100 000 fur seals living in the sea around Australia and New Zealand, which is a lot more than there used to be.", why: "Retelling the fact that follows. Explain what the words “The good news is” do." }
    ]
  },
  {
    claim: "The writer compares fur seals and sea lions clearly.",
    quote: "on the other hand",
    opts: [
      { t: "This means that sea lions use their other hand, the one they are not swimming with, to catch the fish that they want to eat.", why: "A literal misreading! Sea lions don’t have hands. “On the other hand” is a phrase for comparing." },
      { t: "Sea lions have a more rounded nose and a thinner coat of fur.", why: "Retelling. Explain what the linking phrase does." },
      { t: "“On the other hand” signals the second side of a comparison: the next facts are about sea lions, and they are different.", ok: true, why: "Strong. It explains the job the phrase does for the reader." },
      { t: "This is a connective, which is a type of joining word or phrase that writers use to link one sentence or idea to another one.", why: "Correct name, but what does it show the reader here?" }
    ]
  },
  {
    claim: "The writer speaks directly to the reader.",
    quote: "if you look carefully, it is easy to tell them apart",
    opts: [
      { t: "“You” talks straight to the reader, and “if you look carefully” invites them to spot the difference themselves.", ok: true, why: "Strong. It picks out “you” and explains the effect of the invitation." },
      { t: "It is easy to tell fur seals and sea lions apart if you look at them carefully, because they have different noses and different coats of fur.", why: "Retelling. How does the writer speak to the reader?" },
      { t: "This proves that anyone at all can always tell the two animals apart in just one second, even if they have never seen a seal or a sea lion before.", why: "Overclaiming. “If you look carefully” means it takes attention." },
      { t: "The writer uses second person in this sentence.", why: "The right term, but no effect. Why use “you” here?" }
    ]
  }
];

const COLLECT = [
  {
    claim: "The text tells you how to spot the difference between the two animals by their bodies.",
    opts: [
      { t: "Fur seals have a pointed nose and a thick coat of fur", ok: true, why: "Right. The shape of the nose and the thickness of the fur are body features you can look at to tell them apart." },
      { t: "Fur seals like rocky places, while sea lions like to be on sandy beaches", why: "This is a real difference, but it is about where they live, not what their body looks like." },
      { t: "Sometimes fur seals are mistaken for sea lions", why: "This tells us people confuse the two, not how to tell them apart." },
      { t: "Seals are mammals.", why: "This is true of sea lions too, so it cannot help you tell the two apart." }
    ]
  },
  {
    claim: "Baby fur seals need their mothers for a long time before they can look after themselves.",
    opts: [
      { t: "The pups stay with their mothers for about a year.", ok: true, why: "Right. A whole year shows how long the pups depend on their mothers before they can leave." },
      { t: "baby fur seals (also called pups) drink milk from their mothers", why: "This shows they rely on their mother for food, but not for how long. The claim is about the length of time." },
      { t: "The pups learn to swim in rock pools.", why: "This is something they learn to do, not how long they stay with their mothers." },
      { t: "Life span: 15–20 years.", why: "This is how long a fur seal lives, not how long a pup stays with its mother." }
    ]
  },
  {
    claim: "Fur seal numbers have recovered after they were almost wiped out.",
    target: ["there are now around 100 000 fur seals"],
    decoys: [{ phrase: "Fur seals were hunted until they were almost totally gone.", why: "This is the sad part, when they were nearly gone. The claim is about their recovery. Look at the next sentence." }],
    miss: "Look in the section “Where do they live?”.",
    explain: "After being “almost totally gone”, there are “now around 100 000”. The big, exact number is proof that the fur seals have come back."
  },
  {
    claim: "The writer sets facts out as short labels so a reader can find one quickly.",
    target: ["Length: 1.2–2.5 metres."],
    decoys: [{ phrase: "New Zealand fur seals are found in the waters of New Zealand", why: "This is a full sentence from the main text, not a quick-reference label. Look in the “Key facts” section." }],
    miss: "Look in the “Key facts” section at the bottom.",
    explain: "A short label like “Length:” followed by a figure lets a reader find one fact in seconds, without reading a full sentence."
  }
];
TEXTS.push({ id: "fur-seals", type: "Non-fiction", mode: "Informative", form: "Information report", level: "CM2",
  hook: "Pups, rock pools and a clever way to tell a fur seal from a sea lion.",
  TEXT, ANNOTATE, QUESTIONS, EVIDENCE, EXPLAIN, COLLECT });
}

/* ================================================================
   TEXT 6 · Fiction · Creative · Traditional tale · CM2
   ================================================================ */
{
const TEXT = {
  title: "The First Moccasins",
  intro: "A Native American story",
  paras: [
    "Once there was a brave chief who had very tender feet. Every hunting trip was torture for him because his feet were so soft that they would end up bruised and cut by rocks and thorns. One day, in terrible pain, he called a wise man and asked for help.",
    "The wise man wove two strong mats out of reeds and as the chief walked, servants put one of the mats ahead of him so he always had something to walk on. At the end of the day the servants were exhausted and the chief was embarrassed by their hard work.",
    "He asked the wise man for another solution. This time the wise man called for all the tribe’s animal hides (skins). The women of the tribe worked long into the night preparing and softening the hides. The wise man took the hides and cut them into strips and used them to make many pathways leading in different directions. The chief was overjoyed.",
    "One day, as he was walking along one of his paths, he saw a beautiful maiden ahead of him. He wished to meet her and hurried after her. The path, however, ran out and the maiden disappeared across a rocky creek bed.",
    "The chief was very disheartened. It was impossible to cover the whole earth with hides! Then the wise man had one last idea. He came to the chief with a small bundle containing two small shapes like leather boats. The chief put his feet into them and a huge smile grew across his face. ‘Now I will have hide under my feet wherever I walk.’"
  ]
};

const ANNOTATE = [
  {
    skill: "Exaggeration",
    prompt: "Find the <em>exaggeration</em> that shows how much the chief’s feet hurt.",
    target: ["Every hunting trip was torture for him"],
    decoys: [{ phrase: "in terrible pain", why: "Strong words, but they are not an exaggeration: he really was in pain. Look for a word that makes it sound even worse than it was." }],
    miss: "Look in the first paragraph for a very strong word about hunting trips.",
    explain: "Hunting trips were not really torture, but the word “torture” shows the pain felt unbearable. Exaggerating helps the reader understand how big the chief’s problem is."
  },
  {
    skill: "Definition in brackets",
    prompt: "Find where a harder word is <em>explained in brackets</em>.",
    target: ["animal hides (skins)"],
    decoys: [{ phrase: "like leather boats", why: "That compares the moccasins to something. It doesn’t explain a word." }],
    miss: "Look in the third paragraph for a word inside brackets.",
    explain: "“Hides” might be a new word, so the writer adds “(skins)”. It also helps later: when the chief says “hide under my feet”, we know he means animal skin, not hiding."
  },
  {
    skill: "Exclamation",
    prompt: "Find the sentence showing the chief realises the paths can <em>never</em> work.",
    target: ["It was impossible to cover the whole earth with hides!"],
    decoys: [{ phrase: "The chief was very disheartened.", why: "This shows his feeling. The next sentence explains why he feels that way." }],
    miss: "Look for an exclamation mark in the last paragraph.",
    explain: "“Impossible” and “the whole earth” show the chief finally understands that paths can never go everywhere. The exclamation mark shows his frustration."
  },
  {
    skill: "Simile",
    prompt: "Find the <em>simile</em> that helps us picture the first moccasins.",
    target: ["like leather boats"],
    decoys: [{ phrase: "a small bundle", why: "That tells us how they were carried, not what they looked like." }],
    miss: "Look for the word “like” in the last paragraph.",
    explain: "Moccasins look a little like small boats: long, curved and open at the top. The simile helps readers picture them, even if they have never seen moccasins."
  }
];

const QUESTIONS = [
  
  {
    skill: "Character",
    q: "Why was the chief embarrassed?",
    opts: [
      { t: "His servants had to work very hard all day just for him", ok: true, why: "Right. The servants “were exhausted” and the chief was “embarrassed by their hard work”. He didn’t like making others suffer." },
      { t: "The mats the wise man made looked ugly and badly woven", why: "The text never describes how the mats looked." },
      { t: "He fell over in front of everyone", why: "Nothing in the story says he fell." },
      { t: "The servants laughed at his soft feet in front of the tribe", why: "The servants were tired, not laughing." }
    ]
  },
  {
    skill: "Structure",
    q: "Why does the story include two ideas that don’t work before the moccasins?",
    opts: [
      { t: "To build up to the clever last idea, so the ending is more satisfying", ok: true, why: "Right. Traditional tales often use three tries. The first two fail, which makes the simple final solution feel clever." },
      { t: "To show that the wise man is not really wise and keeps making mistakes", why: "His last idea solves everything, so he is wise. He just needed more tries." },
      { t: "To make the story as short as possible", why: "The failed ideas make the story longer, not shorter." },
      { t: "Because the mats and the paths both worked perfectly for the chief", why: "The mats exhausted the servants and the paths ran out. Neither worked perfectly." }
    ]
  },
  {
    skill: "Vocabulary",
    q: "“The chief was very disheartened.” What does “disheartened” mean?",
    opts: [
      { t: "Sad and losing hope", ok: true, why: "Right. “Dis-” means “not”, so he lost heart. He had just lost the maiden and realised the paths could never go everywhere." },
      { t: "Angry and shouting", why: "Nothing shows shouting. The word is about sadness." },
      { t: "Tired from walking far", why: "He had hurried, but “disheartened” is about feelings, not tiredness." },
      { t: "Excited and happy", why: "He had just lost sight of the maiden. It means the opposite of happy." }
    ]
  },
  {
    skill: "Finding information",
    q: "What stopped the chief from meeting the maiden?",
    opts: [
      { t: "The path of hides ran out at rocky ground", ok: true, why: "Right. “The path, however, ran out” and she crossed “a rocky creek bed”, where his soft feet could not follow." },
      { t: "The maiden ran away because she was scared of him", why: "The story doesn’t say why she disappeared or that she was scared." },
      { t: "His servants told him to stop", why: "The servants are not in this part of the story." },
      { t: "It became too dark to see her", why: "The story doesn’t mention darkness here." }
    ]
  },
  {
    skill: "Summary",
    q: "Which sentence best sums up what happens in this text?",
    opts: [
      { t: "A traditional tale in which a wise man tries several solutions for a chief's tender feet, each one failing in a new way, until he finally invents the first moccasins.", ok: true, why: "Right. It covers the whole shape of the text, not just one part of it." },
      { t: "Servants carry woven mats and place them on the ground just ahead of the chief so that he always has something soft to walk on. Other parts of the story focus on different details.", why: "True, but too narrow. It only covers part of the text and misses the main point." },
      { t: "The chief becomes the tribe's most skilled hunter of all time once he finally has his new pair of leather moccasins. It is mentioned only briefly, and is not the main focus. Elsewhere in the text, different events take centre stage.", why: "Too broad. This adds a claim the text does not actually make or support." },
      { t: "The chief catches sight of a beautiful maiden while he is out walking along one of his new leather paths one day. This is one part of a longer sequence of events in the story.", why: "A real detail, but a minor one. It is not what the text is mainly about." }
    ]
  }
];

const EVIDENCE = [
  {
    quote: "The women of the tribe worked long into the night",
    opts: [
      { t: "The second solution also needed a lot of work from others", ok: true, why: "Right. Like the mats, the paths needed other people to work very hard." },
      { t: "The women of the tribe didn’t like the chief very much", why: "They did the work. Nothing shows how they felt about him." },
      { t: "The women only worked at night because it was cooler", why: "The quote doesn’t give a reason like that. Don’t add details." },
      { t: "The women of the tribe made the first pair of moccasins", why: "They prepared hides for the paths. The wise man brought the moccasins later." }
    ]
  },
  {
    quote: "The chief was overjoyed.",
    opts: [
      { t: "At first, the chief believed the paths had solved his problem", ok: true, why: "Right. He is overjoyed when the paths are made, but in the next paragraph the path runs out." },
      { t: "The paths of hides solved the chief’s problem forever", why: "The next paragraph shows a path running out. “At first” is the key." },
      { t: "The chief is always happy", why: "He is also embarrassed and disheartened in the story." },
      { t: "The chief had already met the maiden and was in love", why: "He meets her later, and she disappears." }
    ]
  },
  {
    quote: "a huge smile grew across his face",
    opts: [
      { t: "The chief was delighted with the moccasins", ok: true, why: "Right. The smile comes the moment he puts his feet into them. A “huge” smile shows great happiness." },
      { t: "The chief thought the moccasins looked funny", why: "He speaks happily about walking anywhere, not about them being funny." },
      { t: "His smile really got bigger and bigger like magic", why: "“Grew” describes the smile spreading slowly, not magic." },
      { t: "He had just met the maiden again", why: "The maiden is not in this moment of the story." }
    ]
  }
];

const EXPLAIN = [
  {
    claim: "The chief’s problem is serious.",
    quote: "Every hunting trip was torture for him",
    opts: [
      { t: "The chief went on lots of hunting trips with his tribe, and every time he went his soft feet hurt because of the rocks and thorns.", why: "Retelling. Which word shows it was serious, and how?" },
      { t: "Somebody in the tribe was torturing the chief every time he went hunting, which is why the story says the trips were torture for him.", why: "A literal misreading. “Torture” exaggerates how painful it felt." },
      { t: "“Torture” is far stronger than “sore”, so the pain felt unbearable. “Every” shows it happened each time.", ok: true, why: "Strong. It explains two words and how they make the problem serious." },
      { t: "The writer uses a strong word in this sentence.", why: "Which word, and what does it show? Say more." }
    ]
  },
  {
    claim: "The chief is a kind person.",
    quote: "the chief was embarrassed by their hard work",
    opts: [
      { t: "A selfish leader wouldn’t care about tired servants. Feeling “embarrassed” shows he notices their effort and feels bad.", ok: true, why: "Strong. It explains what “embarrassed” shows about his character." },
      { t: "The servants were embarrassed because they had to carry the heavy mats in front of the chief all day while everyone was watching them.", why: "A misreading. It is the chief who is embarrassed." },
      { t: "The servants worked very hard all day putting mats down, and then at the end of the day the chief felt embarrassed about it.", why: "Retelling. Why does this show kindness?" },
      { t: "This sentence tells us about the chief’s feelings.", why: "Too vague. Which feeling, and what does it show?" }
    ]
  },
  {
    claim: "The paths are not a perfect solution.",
    quote: "The path, however, ran out",
    opts: [
      { t: "The chief was walking happily along one of his paths after the maiden, and then the path suddenly ended at the rocky creek bed.", why: "Retelling. Explain the word that shows a problem." },
      { t: "This proves that the paths of hides were completely useless from the very start and that the chief should never have asked for them.", why: "Overclaiming. The chief was “overjoyed” with them at first." },
      { t: "“However” is a joining word.", why: "Correct, but what does it tell the reader here?" },
      { t: "“However” warns a problem is coming after the chief’s joy. The path “ran out”: paths can’t go everywhere.", ok: true, why: "Strong. It explains “however” and “ran out” and connects them to the claim." }
    ]
  },
  {
    claim: "The chief realises the paths can never work.",
    quote: "It was impossible to cover the whole earth with hides!",
    opts: [
      { t: "I would also be very sad and disappointed if my path ran out when I was trying to follow somebody I wanted to meet.", why: "A personal response. Explain the writer’s words instead." },
      { t: "“The whole earth” shows how enormous the task is, and “impossible” shows he finally understands. The “!” shows frustration.", ok: true, why: "Strong. Three parts of the sentence explained, each linked to the realisation." },
      { t: "The chief thinks about covering all of the ground in the whole world with animal skins so that he could walk everywhere he wanted to.", why: "Retelling. Why does this sentence show he realises it can never work?" },
      { t: "This sentence has an exclamation mark at the end.", why: "True, but what does the exclamation mark show?" }
    ]
  }
];

const COLLECT = [
  {
    claim: "The mats failed as a solution because they wore the servants out.",
    opts: [
      { t: "At the end of the day the servants were exhausted", ok: true, why: "Right. If carrying the mats leaves the servants exhausted after one day, it cannot be done every day." },
      { t: "The women of the tribe worked long into the night", why: "This is the hard work behind the second solution, the paths, not the mats." },
      { t: "servants put one of the mats ahead of him so he always had something to walk on", why: "This is how the mats worked, not why they failed." },
      { t: "in terrible pain, he called a wise man and asked for help", why: "This is the chief seeking help at the start, not the reason the mats failed." }
    ]
  },
  {
    claim: "The story’s lesson is that the simplest solution can be the best one.",
    opts: [
      { t: "Now I will have hide under my feet wherever I walk.", ok: true, why: "Right. Covering just his feet is tiny and simple, yet it does what mats and paths could not." },
      { t: "used them to make many pathways leading in different directions", why: "This is a bigger, more complicated solution, the opposite of the simple one." },
      { t: "This time the wise man called for all the tribe’s animal hides", why: "This sets up the paths, not the simple fix that finally works." },
      { t: "he saw a beautiful maiden ahead of him", why: "This is a plot detail, not the lesson of the story." }
    ]
  },
  {
    claim: "The story explains exactly why the chief’s feet get hurt.",
    target: ["his feet were so soft that they would end up bruised and cut by rocks and thorns"],
    decoys: [{ phrase: "he called a wise man and asked for help", why: "This is what the chief does about the problem, not the cause of it. Look for why his feet got hurt." }],
    miss: "Look in the first paragraph for what happens to his feet.",
    explain: "His feet are “so soft” that rocks and thorns “bruised and cut” them. Soft feet in a hard, sharp world is the problem the whole tale sets out to solve."
  },
  {
    claim: "The path of hides fails the chief at the worst moment.",
    target: ["the maiden disappeared across a rocky creek bed"],
    decoys: [{ phrase: "he saw a beautiful maiden ahead of him", why: "This is when he first spots her, full of hope, not the moment the path lets him down. Look for where she gets away." }],
    miss: "Look at the paragraph where he follows the maiden.",
    explain: "The path runs out at a “rocky creek bed”, exactly where his soft feet cannot follow, so the maiden crosses and vanishes. The paths fail him just when it matters."
  }
];
TEXTS.push({ id: "first-moccasins", type: "Fiction", mode: "Creative", form: "Traditional tale", level: "CM2",
  hook: "A brave chief with tender feet, and a wise man with three ideas.",
  TEXT, ANNOTATE, QUESTIONS, EVIDENCE, EXPLAIN, COLLECT });
}

/* ================================================================
   TEXT 7 · Fiction · Creative · Short story · 5ème
   ================================================================ */
{
const TEXT = {
  title: "The Mission",
  paras: [
    "I knew there had been a mistake. Although Bella had assured me that the house was empty, a dog bark, followed swiftly by unwelcome lights glimpsed between twitching curtains, suggested otherwise. I signalled to indicate it was time to abandon the operation.",
    "We melted soundlessly into the shadows of the garden, gathering at the meeting point to consider our options. Ty was angry. ‘You have to face it, Sam. She didn’t analyse the intelligence properly,’ he seethed. ‘How could anyone make such a fundamental error again?’",
    "‘Let’s not waste our energy blaming Bella,’ I said, asserting my authority. Ty’s negative feelings towards Bella had already threatened to disrupt the mission. I’d been in Bella’s position myself and knew: sometimes there simply wasn’t enough time to recheck intelligence. You hoped it was accurate, but sometimes hope wasn’t enough. ‘Let’s concentrate on what to do next,’ I said to the whole team while looking directly at Ty.",
    "Organising another ‘visit’ was out of the question. We were here, the file had to be retrieved, and it was our task to do so. We needed to abandon our existing strategy and come up with something new.",
    "Ty looked doubtful when I mentioned the idea of improvising. He was still a novice and floundered for a minute or two when operations varied from the expected. Strange, considering nothing had really gone to plan for days now. He’d learn.",
    "I quickly outlined my idea. Ty’s expression changed from doubt to intrigue, ‘I can’t believe I’m saying this, but it might just work. It’s better than doing nothing.’",
    "As the suburban street came alive with morning activity, we shed our night-time black, put on the uniforms, and marched boldly up to the front door to finish the job."
  ]
};

const ANNOTATE = [
  {
    skill: "Metaphor",
    prompt: "Find the metaphor that shows how <em>skilfully</em> the team disappears.",
    target: ["We melted soundlessly into the shadows"],
    decoys: [{ phrase: "gathering at the meeting point", why: "This is where they go, not how skilfully they vanish. Look at the verb just before." }],
    miss: "Look at the start of the second paragraph.",
    explain: "People cannot really melt. The metaphor suggests the team blends into the darkness so smoothly they seem to dissolve, and “soundlessly” adds silence. It tells us they are practised professionals."
  },
  {
    skill: "Inference clue",
    prompt: "Find the detail suggesting someone inside the house is <em>watching</em>.",
    target: ["twitching curtains"],
    decoys: [{ phrase: "a dog bark", why: "The bark shows the house isn’t empty, but a dog isn’t watching them. Look for a sign of a person looking out." }],
    miss: "Look in the first paragraph at the windows of the house.",
    explain: "Curtains twitch when someone moves them slightly to peek out. The detail implies a person is looking, without saying so, which is why Sam knows the plan is ruined."
  },
  {
    skill: "Specialist vocabulary",
    prompt: "Find <em>one</em> piece of vocabulary that makes the team sound like professional agents.",
    target: ["abandon the operation", "analyse the intelligence", "our existing strategy"],
    decoys: [{ phrase: "the suburban street came alive", why: "This describes the setting in the morning. Look for the formal language of spies or the military." }],
    miss: "Look for words you might hear in a spy film, like “operation” or “intelligence”.",
    explain: "Words like “operation”, “intelligence” and “strategy” belong to spies and soldiers. They make the team sound organised and serious, and they make an ordinary garden feel like a secret mission."
  },
  {
    skill: "Inverted commas",
    prompt: "Find the word in inverted commas that <em>hides</em> what the team really does.",
    target: ["another ‘visit’"],
    decoys: [{ phrase: "‘Let’s concentrate on what to do next,’", why: "Those are speech marks around what Sam says. Look for a single word in inverted commas that isn’t speech." }],
    miss: "Look at the start of the fourth paragraph.",
    explain: "The inverted commas show “visit” doesn’t mean a friendly visit. It is a code word, a polite way of describing secretly entering a house. The reader has to work out what it really means."
  },
  {
    skill: "Short sentence",
    prompt: "Find the short sentence showing Sam’s <em>confident judgement</em> of Ty.",
    target: ["He’d learn."],
    decoys: [{ phrase: "Ty was angry.", why: "Short, but it describes Ty’s feeling. Look for Sam’s own verdict about Ty." }],
    miss: "Look at the end of the paragraph about Ty being a novice.",
    explain: "Two words close the paragraph. Sam doesn’t worry or complain: Ty will simply improve. The short sentence sounds experienced and a little superior, like a leader who has seen this before."
  }
];

const QUESTIONS = [
  {
    skill: "Point of view",
    q: "Who narrates this story?",
    opts: [
      { t: "Sam, the leader of the team", ok: true, why: "Right. Ty calls the narrator “Sam”, and the narrator is “asserting my authority” and giving the team orders." },
      { t: "Ty, the angry team member", why: "Ty speaks to the narrator (“You have to face it, Sam”), so Ty is someone else." },
      { t: "Bella, who made the mistake", why: "The narrator talks about Bella as another person and defends her." },
      { t: "An all-knowing narrator outside the story", why: "The story uses “I” and “we”, so the narrator is part of the team." }
    ]
  },
  {
    skill: "Inference",
    q: "What does the writer leave the reader unsure about?",
    opts: [
      { t: "Whether the team are spies, criminals or something else", ok: true, why: "Right. We learn a file must be “retrieved”, but never who they work for or whether the job is legal. The writer lets us guess." },
      { t: "The name of the narrator who is telling the story", why: "Ty names the narrator: Sam." },
      { t: "Where the story takes place", why: "We know it is a house with a garden on a “suburban street”." },
      { t: "Whether the team decides to change its plan in the end", why: "Sam clearly says they must “abandon our existing strategy” and outlines a new idea." }
    ]
  },
  
  {
    skill: "Character",
    q: "“He was still a novice and floundered for a minute or two.” What does this tell us about Ty?",
    opts: [
      { t: "He is inexperienced and struggles when plans change", ok: true, why: "Right. A novice is a beginner, and “floundered” shows he struggles when “operations varied from the expected”." },
      { t: "He is the most experienced member of the whole team", why: "“Novice” means beginner, the opposite." },
      { t: "He is lazy and doesn’t really care about the mission", why: "Ty is angry the mission failed, which shows he cares. He struggles, but not from laziness." },
      { t: "He is secretly the team leader", why: "Sam is “asserting my authority” and giving the orders." }
    ]
  },
  {
    skill: "Inference",
    q: "What is Sam’s new plan, judging by the final paragraph?",
    opts: [
      { t: "To disguise themselves and walk in openly in daylight", ok: true, why: "Right. They change out of “night-time black” into “uniforms” and go “up to the front door” as the street wakes up. They will pretend to belong there." },
      { t: "To break into the house again the next night instead", why: "Sam says another ‘visit’ is “out of the question”, and the action happens in the morning." },
      { t: "To give up and go home", why: "They march up “to finish the job”." },
      { t: "To wait for Bella to check the intelligence again first", why: "Sam says they must “come up with something new”, not wait." }
    ]
  },
  {
    skill: "Structure",
    q: "Why does the story open with “I knew there had been a mistake.”?",
    opts: [
      { t: "It starts in the middle of the action with a problem, hooking the reader", ok: true, why: "Right. There is no introduction. We are dropped into a failing mission and want to know what went wrong and what happens next." },
      { t: "It introduces all of the characters and explains who they are", why: "The sentence names no characters. We meet them later." },
      { t: "It tells us how the story ends", why: "The ending is the new plan at the front door, not the mistake." },
      { t: "It shows the narrator was the one who made the mistake", why: "Bella gave the wrong information. Sam just recognises it." }
    ]
  },
  {
    skill: "Summary",
    q: "Which sentence best sums up what happens in this text?",
    opts: [
      { t: "A team's covert mission is interrupted when the target house turns out not to be empty, and the leader calms an argument before improvising a bold new plan.", ok: true, why: "Right. It covers the whole shape of the text, not just one part of it." },
      { t: "Ty is angry with Bella because he believes that she checked the intelligence about the house carefully enough before the mission began. Other parts of the story focus on different details.", why: "True, but too narrow. It only covers part of the text and misses the main point." },
      { t: "The team abandons the whole mission completely and quietly returns home that night, having failed to retrieve the file. The rest of the text develops in a different direction.", why: "Too broad. This adds a claim the text does not actually make or support." },
      { t: "The team gathers together at a meeting point among the shadows of the garden to consider what they should do next. The story continues well beyond this particular moment.", why: "A real detail, but a minor one. It is not what the text is mainly about." }
    ]
  }
];

const EVIDENCE = [
  {
    quote: "Ty’s negative feelings towards Bella had already threatened to disrupt the mission",
    opts: [
      { t: "Conflict inside the team is a problem Sam must manage", ok: true, why: "Right. “Already threatened” shows Ty’s attitude has caused trouble before, so Sam must stop it growing." },
      { t: "Ty and Bella are close friends who work well together", why: "“Negative feelings” shows the opposite." },
      { t: "The mission has already completely failed because of Ty", why: "“Threatened to disrupt” means it could have, not that it did. The team goes on to finish the job." },
      { t: "Ty wants to leave the team", why: "The quote is about his feelings towards Bella, not about leaving." }
    ]
  },
  {
    quote: "I’d been in Bella’s position myself",
    opts: [
      { t: "Sam understands Bella’s mistake from experience", ok: true, why: "Right. Sam has made similar errors under time pressure, which explains why Sam defends her." },
      { t: "Sam made the mistake about the house this time", why: "Bella gave the information. Sam is remembering the past." },
      { t: "Sam and Bella are the same person", why: "“Been in her position” means being in a similar situation, not being her." },
      { t: "Sam secretly dislikes Bella and doesn’t trust her", why: "Sam defends her. The quote shows sympathy." }
    ]
  },
  {
    quote: "Strange, considering nothing had really gone to plan for days now.",
    opts: [
      { t: "The mission has faced problems for a while, not just tonight", ok: true, why: "Right. “For days now” shows a pattern of things going wrong, which makes Ty’s surprise seem odd to Sam." },
      { t: "The mission has gone perfectly to plan until tonight", why: "“Nothing had really gone to plan” says the opposite." },
      { t: "Ty was the one who made all the plans that went wrong", why: "The quote doesn’t say who made the plans." },
      { t: "Something supernatural is happening", why: "“Strange” means surprising here, about Ty’s reaction, not magic." }
    ]
  },
  {
    quote: "Ty’s expression changed from doubt to intrigue",
    opts: [
      { t: "Sam’s idea is clever enough to win over a doubter", ok: true, why: "Right. Ty was the most negative member of the team, yet the plan makes him curious and willing. That shows it is a good idea." },
      { t: "Ty still refuses to go along with Sam’s new plan", why: "He says “it might just work”. He is persuaded." },
      { t: "Ty was really the one who came up with the new plan", why: "“I quickly outlined my idea”: the plan is Sam’s." },
      { t: "Ty is confused by the plan", why: "“Intrigue” means interested and curious, not confused." }
    ]
  }
];

const EXPLAIN = [
  {
    claim: "The team are skilled at not being seen.",
    quote: "We melted soundlessly into the shadows",
    opts: [
      { t: "“Melted” suggests blending into the dark so smoothly they vanish, and “soundlessly” adds silence: practised stealth.", ok: true, why: "Strong. Two words explained and combined to prove skill." },
      { t: "The team went and hid in the dark shadows at the back of the garden straight after the dog barked and the lights came on inside the house.", why: "Retelling. How do the words show skill?" },
      { t: "The writer uses a metaphor to describe how the team moves, which is effective.", why: "“Effective” how? Name the effect." },
      { t: "This proves that the team members have special powers and can literally melt and turn invisible whenever they want to get away from danger.", why: "Overclaiming a metaphor. They blend in; they don’t become invisible." }
    ]
  },
  {
    claim: "Sam is a strong leader.",
    quote: "I said, asserting my authority",
    opts: [
      { t: "Sam tells the team that they should not blame Bella for making a mistake about the house being empty, and then looks directly at Ty.", why: "Retelling. What do the words “asserting my authority” show?" },
      { t: "“Asserting my authority” shows Sam deliberately takes control. Turning from blame to “what to do next” keeps the team focused.", ok: true, why: "Strong. It explains the phrase and links it to Sam’s actions." },
      { t: "This shows Sam is bossy and doesn’t listen to anybody else in the team, because Sam always wants to be in charge and give the orders.", why: "A misreading. Sam listens to Ty, understands Bella and explains the plan." },
      { t: "The narrator describes how they speak in this sentence.", why: "Vague. What does the description reveal?" }
    ]
  },
  {
    claim: "The writer keeps the team’s real purpose mysterious.",
    quote: "Organising another ‘visit’",
    opts: [
      { t: "The team wants to organise another friendly visit to the people who live in the house, so that they can meet them properly in the daytime.", why: "A misreading. The inverted commas show it isn’t a friendly visit." },
      { t: "The writer uses inverted commas around one of the words in this sentence.", why: "An observation. Why are they there?" },
      { t: "The inverted commas show “visit” is a code word for something secret, possibly illegal, so the reader must infer the truth.", ok: true, why: "Strong. It explains the punctuation and how it creates mystery." },
      { t: "I think the team are definitely burglars, because they go into other people’s houses at night wearing black clothes so nobody can see them.", why: "A guess stated as certain, and a personal view. The text keeps this unclear on purpose." }
    ]
  },
  {
    claim: "Ty is inexperienced.",
    quote: "He was still a novice and floundered",
    opts: [
      { t: "Ty is a new member of the team, so he doesn’t always know what to do, especially when things on the mission don’t go the way they planned.", why: "Retelling. Explain the words “novice” and “floundered”." },
      { t: "This proves that Ty will never become a good agent and that he should leave the team straight away before he ruins another mission.", why: "Overclaiming. Sam says “He’d learn”." },
      { t: "“Novice” means beginner, and “floundered” suggests struggling out of your depth in water: Ty panics when plans change.", ok: true, why: "Strong. Both words explained, with the image in “floundered”." },
      { t: "The writer uses difficult vocabulary to describe Ty.", why: "True, but what does it show about him?" }
    ]
  },
  {
    claim: "The final plan is daring.",
    quote: "marched boldly up to the front door",
    opts: [
      { t: "“Marched” is confident and “boldly” adds courage. The front door in daylight is the opposite of hiding in shadows: daring.", ok: true, why: "Strong. It explains two words and contrasts the ending with the earlier stealth." },
      { t: "The team take off their night-time black clothes, put on their uniforms and then walk straight up to the front door of the house in the morning.", why: "Retelling. How do the words show daring?" },
      { t: "The team are really soldiers in an army, because the writer says they marched up to the house, and marching is what soldiers do.", why: "A literal misreading of “marched”. It shows confidence, not proof they are soldiers." },
      { t: "The writer ends the story with an action to make it exciting.", why: "Vague. Which words create the excitement, and how?" }
    ]
  }
];
TEXTS.push({ id: "the-mission", type: "Fiction", mode: "Creative", form: "Short story", level: "5ème",
  hook: "The house was supposed to be empty. Time for a new plan.",
  TEXT, ANNOTATE, QUESTIONS, EVIDENCE, EXPLAIN });
}

/* ================================================================
   TEXT 8 · Non-fiction · Informative · Explanation · 6ème
   ================================================================ */
{
const TEXT = {
  title: "The Honey Bee Mystery",
  paras: [
    "Having an entire bee colony disappear overnight is not unknown. There are written records of cases in North America and Europe from as long ago as the 1800s. At that time, unusual weather conditions were blamed.",
    "But in 2006, after a huge and sudden increase in the disappearance of bee colonies in North America, the worrying phenomenon was given a name: Colony Collapse Disorder (CCD). That year, and in many of the years since, North American and European apiarists (beekeepers) have recorded losses of up to half of their bee colonies. No-one knows exactly why, or why so far, Australia has been spared.",
    "CCD is blamed for the death of a colony only when the following characteristics occur simultaneously:",
    "• a complete absence of adult worker bees",
    "• few or no dead bees evident in or near the hive",
    "• the queen bee is present",
    "• there is plenty of food",
    "• there are unhatched eggs.",
    "While you may think the absence of bees is no more than a mild inconvenience for honey-lovers, the reality is that bees are a vital link in the production of our food. Bees are responsible for pollinating about a third of the fresh produce that we eat. The shortage of bees in the USA has caused significant problems for farmers, with many having to hire honey bees from all over the country and as far away as Australia to guarantee pollination of crops. Bee-hire and transportation have become huge expenses for food growers, which in turn result in higher prices for consumers.",
    "Scientists and beekeepers are racing against time to discover both the cause of and a cure for CCD before it is too late. Theories about climate change, pesticides, parasites and bacteria have all found favour at various times and current thinking suggests that it is a combination of all these factors that has created a ‘perfect storm’ of environmental stresses for bees.",
    "Colony collapse has put bees firmly in the scientific spotlight, and it is a problem we cannot afford to ignore."
  ]
};

const ANNOTATE = [
  {
    skill: "Definition in brackets",
    prompt: "Find where a <em>technical term</em> is explained in brackets.",
    target: ["apiarists (beekeepers)"],
    decoys: [{ phrase: "Colony Collapse Disorder (CCD)", why: "These brackets give a short form (an abbreviation), not an explanation of what a word means." }],
    miss: "Look in the second paragraph for a word most readers wouldn’t know.",
    explain: "“Apiarists” is the scientific word, and “(beekeepers)” gives the everyday word. The writer uses the correct term but makes sure no reader is lost."
  },
  {
    skill: "Counter-argument",
    prompt: "Find where the writer <em>predicts what the reader might think</em>, before arguing against it.",
    target: ["While you may think the absence of bees is no more than a mild inconvenience"],
    decoys: [{ phrase: "the reality is that bees are a vital link", why: "This is the writer’s answer. Look just before it for the view the writer is arguing against." }],
    miss: "Look for the word “you” at the start of a paragraph.",
    explain: "The writer puts a possible reader’s view into words (“mild inconvenience”) and then knocks it down with “the reality is”. It makes the argument feel like a response to the reader, and makes the real consequences seem more serious."
  },
  {
    skill: "Metaphor",
    prompt: "Find the metaphor that creates a sense of <em>urgency</em>.",
    target: ["racing against time"],
    decoys: [{ phrase: "before it is too late", why: "Urgent, yes, but it is said directly, with no image. Look for the comparison just before it." }],
    miss: "Look at the start of the paragraph about scientists and beekeepers.",
    explain: "Scientists are not really running a race, but the image makes time their opponent. It suggests that if they are too slow, they lose: the bees could be gone."
  },
  {
    skill: "Statistic",
    prompt: "Find the statistic that shows <em>how important bees are to our food</em>.",
    target: ["about a third of the fresh produce that we eat"],
    decoys: [{ phrase: "up to half of their bee colonies", why: "That statistic shows how many colonies were lost, not how important bees are for food." }],
    miss: "Look in the paragraph about food and farmers.",
    explain: "“A third” of our fresh food is a big, easy-to-picture fraction. It turns a problem about insects into a problem about what is on everyone’s plate."
  }
];

const QUESTIONS = [
  {
    skill: "Purpose",
    q: "What is the main purpose of this text?",
    opts: [
      { t: "To explain what Colony Collapse Disorder is and why it matters", ok: true, why: "Right. It defines CCD, lists its signs, explains the effects on food and prices, and describes scientists’ theories." },
      { t: "To persuade readers to buy more honey to help beekeepers", why: "Honey is barely mentioned. The text is about bees disappearing and food production." },
      { t: "To tell the story of one beekeeper", why: "No single person is followed. It gives information about many beekeepers and countries." },
      { t: "To give readers instructions for keeping bees at home", why: "There are no steps or commands. The list shows the signs of CCD, not instructions." }
    ]
  },
  {
    skill: "Structure",
    q: "Why does the writer begin with cases from the 1800s?",
    opts: [
      { t: "To show disappearances are not new, which makes the 2006 increase stand out", ok: true, why: "Right. The first paragraph gives background, then “But in 2006” signals something changed: a “huge and sudden increase”." },
      { t: "Because the text is mainly about the long history of beekeeping in Europe", why: "The 1800s get only three sentences. Most of the text is about CCD today." },
      { t: "To prove that unusual weather is what causes Colony Collapse Disorder", why: "The text says weather “was blamed” then. Today scientists think many factors combine." },
      { t: "Because older facts are the most important ones", why: "The order shows change over time, not importance." }
    ]
  },
  
  {
    skill: "Cause and effect",
    q: "How can CCD affect people who buy food?",
    opts: [
      { t: "Hiring and transporting bees costs farmers more, so food prices rise", ok: true, why: "Right. The text follows a chain: bee shortage → hiring bees → “huge expenses” → “higher prices for consumers”." },
      { t: "Honey starts to taste different", why: "The text never mentions the taste of honey." },
      { t: "Shops completely run out of all fruit and vegetables", why: "Overclaiming. The text mentions higher prices, not empty shops." },
      { t: "Everyone must start keeping their own bees at home to grow food", why: "Farmers hire bees. Nothing says consumers must keep them." }
    ]
  },
  {
    skill: "Conclusion",
    q: "What is the effect of ending with “a problem we cannot afford to ignore”?",
    opts: [
      { t: "It urges readers to take the problem seriously, and “we” includes them", ok: true, why: "Right. “We” makes it everyone’s problem, and “cannot afford” warns of a cost. The ending moves from information to a call for attention." },
      { t: "It shows the problem of disappearing bees is only about money", why: "“Cannot afford to ignore” is an expression meaning it would be too dangerous to ignore. The text is also about food and nature." },
      { t: "It adds humour to end on a lighter note", why: "The tone is serious, not humorous." },
      { t: "It tells readers the problem has been solved and they can relax", why: "“Cannot afford to ignore” means it is ongoing and still needs attention." }
    ]
  },
  {
    skill: "Summary",
    q: "Which sentence best sums up what happens in this text?",
    opts: [
      { t: "The article explains what Colony Collapse Disorder is, how it is identified, why disappearing bees threaten our food supply, and why the cause is still unclear.", ok: true, why: "Right. It covers the whole shape of the text, not just one part of it." },
      { t: "Colony Collapse Disorder is partly identified by there being very few or no dead bees found anywhere near the hive itself. Other parts of the story focus on different details.", why: "True, but too narrow. It only covers part of the text and misses the main point." },
      { t: "Scientists have now finally found and completely solved the exact cause of Colony Collapse Disorder around the world. The rest of the text develops in a different direction.", why: "Too broad. This adds a claim the text does not actually make or support." },
      { t: "American farmers now have to hire honey bees from other states, and sometimes from as far away as Australia, each year. The story continues well beyond this particular moment.", why: "A real detail, but a minor one. It is not what the text is mainly about." }
    ]
  }
];

const EVIDENCE = [
  {
    quote: "there is plenty of food",
    opts: [
      { t: "The bees are not leaving because they are hungry, which makes CCD puzzling", ok: true, why: "Right. If food were missing, hunger would explain it. With plenty of food, the disappearance is harder to explain." },
      { t: "Every beehive in the world always has plenty of food stored inside", why: "The bullet describes hives with CCD, not every hive." },
      { t: "The bees died from eating too much", why: "The list also says “few or no dead bees”. Nothing suggests overeating." },
      { t: "Having too much food in the hive is what causes CCD", why: "The list shows signs, not causes. Plenty of food is a clue, not the reason." }
    ]
  },
  {
    quote: "many having to hire honey bees from all over the country and as far away as Australia",
    opts: [
      { t: "The shortage is so serious that farmers go to great lengths to find bees", ok: true, why: "Right. Bringing bees from “as far away as Australia” shows how desperate farmers are." },
      { t: "Australian honey bees are better than American honey bees", why: "The quote shows where bees come from, not which are better." },
      { t: "Farmers enjoy hiring bees from other countries", why: "The next sentence calls it a “huge expense”, not something enjoyable." },
      { t: "There are no honey bees left anywhere in the USA", why: "Overclaiming. There is a “shortage”, and farmers also hire from “all over the country”." }
    ]
  },
  {
    quote: "Theories about climate change, pesticides, parasites and bacteria have all found favour at various times",
    opts: [
      { t: "Scientists’ ideas about the cause have changed as research continues", ok: true, why: "Right. Different theories were popular “at various times”, showing understanding is still developing." },
      { t: "One single cause of CCD has now been proven by scientists", why: "Four theories are listed, and current thinking suggests a combination." },
      { t: "Scientists do not believe CCD is real", why: "They are trying to find its cause and cure, so they clearly think it is real." },
      { t: "Bacteria are definitely the main cause of colony collapse", why: "Bacteria are one theory among four. Nothing says it is the main one." }
    ]
  }
];

const EXPLAIN = [
  {
    claim: "CCD is strange and alarming.",
    quote: "disappear overnight",
    opts: [
      { t: "Bee colonies can go missing very quickly, which has happened many times in North America and Europe since as long ago as the 1800s.", why: "Retelling. Which words make it strange and alarming, and how?" },
      { t: "“Overnight” shows how sudden it is: a colony gone in hours. “Disappear”, not “die”, adds mystery: the bees just vanish.", ok: true, why: "Strong. Two words explained, one for “alarming” and one for “strange”." },
      { t: "The writer uses the word overnight in the first sentence of the text.", why: "An observation. What effect does it have?" },
      { t: "This shows that bees always leave their hives at night-time, because the writer says the colonies disappear overnight while beekeepers sleep.", why: "“Overnight” means very quickly here. It doesn’t prove when bees leave." }
    ]
  },
  {
    claim: "Giving CCD a name shows it is being taken seriously.",
    quote: "was given a name: Colony Collapse Disorder (CCD)",
    opts: [
      { t: "In 2006, after many bee colonies disappeared in North America, people decided to give the problem a name: Colony Collapse Disorder, or CCD.", why: "Retelling. Why does naming it show it is taken seriously?" },
      { t: "This is an abbreviation, which is a shorter way of writing something long.", why: "Correct definition, but no link to the claim." },
      { t: "Naming it turns scattered cases into a recognised problem. “Collapse” and “Disorder” sound medical and serious.", ok: true, why: "Strong. It explains the act of naming, the word choices and the abbreviation." },
      { t: "This proves that scientists now fully understand the problem, because once something has a proper scientific name it has been solved.", why: "Overclaiming. It has a name, but “No-one knows exactly why” it happens." }
    ]
  },
  {
    claim: "Scientists are under pressure.",
    quote: "racing against time",
    opts: [
      { t: "Scientists are having a running race against each other to see which one of them can find the cure for the bees first and win.", why: "A literal misreading of a metaphor." },
      { t: "The writer uses a metaphor here to make the text more interesting.", why: "“More interesting” is not an effect. What does the image suggest?" },
      { t: "Scientists and beekeepers are trying hard to find out the cause of Colony Collapse Disorder and a cure for it before it is too late.", why: "Retelling. How do the words show pressure?" },
      { t: "A race has a winner and a loser, and “against time” makes time the opponent: scientists must find answers fast or lose.", ok: true, why: "Strong. It unpacks the metaphor and links it to pressure." }
    ]
  },
  {
    claim: "CCD probably has more than one cause.",
    quote: "a ‘perfect storm’ of environmental stresses",
    opts: [
      { t: "A perfect storm is when several weather events combine into something worse. Many stresses together overwhelm the bees.", ok: true, why: "Strong. It explains the expression and applies it to the claim." },
      { t: "This shows that storms and bad weather are what really kill the bees, which is what people believed back in the 1800s as well.", why: "A literal misreading. The storm is a metaphor, and the 1800s weather theory was replaced." },
      { t: "The writer puts inverted commas around perfect storm in this sentence.", why: "An observation. What does the phrase mean here?" },
      { t: "There are lots of different problems that bees have in the environment, like climate change, pesticides, parasites and bacteria.", why: "Retelling. Explain what the image adds." }
    ]
  }
];

const COLLECT = [
  {
    claim: "The writer stresses that bees matter to everyone, not just honey-lovers.",
    opts: [
      { t: "bees are a vital link in the production of our food", ok: true, why: "Right. “Vital” means essential, and “our food” includes every reader, not only people who like honey." },
      { t: "up to half of their bee colonies", why: "This is how many colonies are lost, not why bees matter to everyone." },
      { t: "unusual weather conditions were blamed", why: "This is an old idea about the cause, not a reason bees are important to us." },
      { t: "higher prices for consumers", why: "This is one knock-on effect for shoppers, but the claim asks for the quote saying bees themselves are essential to our food." }
    ]
  },
  {
    claim: "Scientists still do not know for certain what causes CCD.",
    opts: [
      { t: "No-one knows exactly why", ok: true, why: "Right. This states plainly that there is no clear answer yet, which is why the title calls it a mystery." },
      { t: "current thinking suggests that it is a combination of all these factors", why: "This is the tentative best theory so far, not the plain statement that no-one knows." },
      { t: "There are written records of cases in North America and Europe", why: "This is evidence the problem is old, not that its cause is unknown." },
      { t: "unusual weather conditions were blamed", why: "This is an old explanation that was later abandoned, not proof the cause is still unknown." }
    ]
  },
  {
    claim: "The writer uses a careful, indirect phrase to say this has happened before.",
    target: ["is not unknown"],
    decoys: [{ phrase: "from as long ago as the 1800s", why: "This is the evidence that it has happened before, not the careful, indirect way of saying so. Look at the end of the first sentence." }],
    miss: "Look at the end of the very first sentence.",
    explain: "“Not unknown” uses two negatives to mean “known”: it has happened. The calm, indirect phrasing suits the careful, scientific tone."
  },
  {
    claim: "The writer ends by insisting the problem is too serious to ignore.",
    target: ["a problem we cannot afford to ignore"],
    decoys: [{ phrase: "put bees firmly in the scientific spotlight", why: "This says bees are now being studied, not that we must not ignore the problem. Look for the final warning." }],
    miss: "Read the last sentence of the text.",
    explain: "“Cannot afford to ignore” warns of a cost, and “we” includes the reader. The ending turns information into a call to take the problem seriously."
  }
];
TEXTS.push({ id: "honey-bee-mystery", type: "Non-fiction", mode: "Informative", form: "Explanation", level: "6ème",
  hook: "Whole colonies vanish overnight, and no-one knows exactly why.",
  TEXT, ANNOTATE, QUESTIONS, EVIDENCE, EXPLAIN, COLLECT });
}

/* ================================================================
   TEXT 9 · Non-fiction · Informative · Information report · 6ème
   ================================================================ */
{
const TEXT = {
  title: "The Pygmy Marmoset",
  paras: [
    "Pygmy marmosets, sometimes called pocket monkeys, are the smallest monkeys in the world. They live by the edges of rivers in tropical forests in the north-west of South America.",
    "Fully grown pygmy marmosets can comfortably fit in a human hand. Their tiny bodies measure about 14–16 centimetres long, not including the tail which can add another 20 centimetres to the length. They only weigh around 120 grams—that’s less than an apple. In spite of their small size, these tiny animals can jump more than four metres, or over 30 times their own body length. That’s quite a distance for such small creatures!",
    "Because these monkeys are so small and light, they can move along slender branches higher into the trees than other monkeys. There they feed on their favourite food, the sap of the trees. They also eat fruit and insects such as grasshoppers.",
    "Pygmy marmosets have to watch out for birds of prey and other creatures like snakes and cats that think they are a tasty meal. They dash about quickly from one safe place to the next. Their necks are very flexible and they can rotate their heads backwards to check for danger.",
    "The female pygmy marmoset usually gives birth to twins, each about the size of a human thumb. The male helps in the birth and then takes over caring for the babies, carrying them around on his back for the first two weeks and bringing them back to the mother to feed.",
    "[Map: a map of South America shows where pygmy marmosets live, in the north-west of the continent.]"
  ]
};

const ANNOTATE = [
  {
    skill: "Nickname",
    prompt: "Find the <em>nickname</em> that tells you how small these monkeys are.",
    target: ["sometimes called pocket monkeys"],
    decoys: [{ phrase: "the smallest monkeys in the world", why: "That states their size directly. Look for the other name people use for them." }],
    miss: "Look in the very first sentence for another name for pygmy marmosets.",
    explain: "A “pocket monkey” is small enough to fit in a pocket. The nickname creates a quick, memorable picture of their size before any numbers are given."
  },
  {
    skill: "Exclamation",
    prompt: "Find where the writer shows <em>amazement</em> at a fact.",
    target: ["That’s quite a distance for such small creatures!"],
    decoys: [{ phrase: "In spite of their small size", why: "This sets up a surprising fact, but it doesn’t react to it. Look for the writer’s comment afterwards." }],
    miss: "Look for an exclamation mark in the second paragraph.",
    explain: "Most of the report is calm and factual. This exclamation is the writer reacting like a person, sharing surprise with the reader and making the jumping fact stand out."
  },
  {
    skill: "Cause and effect",
    prompt: "Find the words that explain <em>why</em> marmosets can climb higher than other monkeys.",
    target: ["Because these monkeys are so small and light"],
    decoys: [{ phrase: "higher into the trees than other monkeys", why: "That is the result. The question asks for the cause, which comes first in the sentence." }],
    miss: "Look for the word “because” in the third paragraph.",
    explain: "“Because” signals a cause. Being small and light (cause) lets them use slender branches high up (effect). Information texts often explain how an animal’s body helps it survive."
  },
  {
    skill: "Surprising fact",
    prompt: "Find the fact about <em>fathers</em> that might surprise readers.",
    target: ["The male helps in the birth and then takes over caring for the babies"],
    decoys: [{ phrase: "usually gives birth to twins", why: "That is about the mother. Look for what the male does." }],
    miss: "Read the final paragraph about the babies.",
    explain: "In many animals, the mother does most of the caring. Here the father “takes over”, which is unexpected and makes the ending of the report memorable."
  }
];

const QUESTIONS = [
  {
    skill: "Purpose",
    q: "What is the main purpose of this text?",
    opts: [
      { t: "To inform readers about the features and life of the pygmy marmoset", ok: true, why: "Right. The text covers where they live, their size, food, dangers and babies. Each fact informs." },
      { t: "To persuade readers to keep a pygmy marmoset as a pet at home", why: "They fit in a hand, but the text never suggests keeping one. They are described living wild in forests." },
      { t: "To tell a story about one monkey’s adventure", why: "There is no character or plot. The text describes pygmy marmosets in general." },
      { t: "To compare all the different monkeys that live in South America", why: "Other monkeys are mentioned once, as a comparison. The focus stays on pygmy marmosets." }
    ]
  },
  {
    skill: "Structure",
    q: "How is the information organised?",
    opts: [
      { t: "Each paragraph covers one topic: home, size, food, danger, babies", ok: true, why: "Right. Grouping facts by topic helps readers find information and understand one idea at a time." },
      { t: "It follows one monkey through its day, in the order things happen", why: "There is no single monkey and no timeline. The paragraphs are organised by topic." },
      { t: "It describes a problem the monkeys have and then its solution", why: "Danger is mentioned, but the text as a whole isn’t built around a problem and solution." },
      { t: "The facts are in no particular order", why: "Look again: each paragraph has a clear focus, which is a deliberate structure." }
    ]
  },
  {
    skill: "Inference",
    q: "Why do marmosets “dash about quickly from one safe place to the next”?",
    opts: [
      { t: "To avoid being caught by predators in the open", ok: true, why: "Right. The sentence before lists birds of prey, snakes and cats. Moving fast between safe places reduces the time they are exposed." },
      { t: "Because they are searching for water", why: "Water is not mentioned in this paragraph. The context is predators." },
      { t: "Because they are playing games with each other", why: "The paragraph is about danger, so the dashing is for safety, not play." },
      { t: "Because they are chasing grasshoppers", why: "They eat insects, but that is in a different paragraph. Here the dashing is linked to predators." }
    ]
  },
  {
    skill: "Vocabulary",
    q: "“They can move along slender branches.” What does “slender” mean?",
    opts: [
      { t: "Thin", ok: true, why: "Right. Only small, light animals can use thin branches, which is why marmosets reach places other monkeys can’t." },
      { t: "Thick and strong", why: "If the branches were thick, heavier monkeys could use them too. The point is that they are thin." },
      { t: "Very high", why: "“Higher into the trees” tells us the height. “Slender” describes the branches’ width." },
      { t: "Slippery", why: "Nothing in the sentence is about grip. Use the clue “so small and light”." }
    ]
  },
  
  {
    skill: "Summary",
    q: "Which sentence best sums up what happens in this text?",
    opts: [
      { t: "The article describes the pygmy marmoset, the world's smallest monkey, covering its tiny size, its diet, the dangers it faces, and how its young are raised.", ok: true, why: "Right. It covers the whole shape of the text, not just one part of it." },
      { t: "Pygmy marmosets can jump more than four metres through the trees despite being small enough to fit into a human hand. Other parts of the story focus on different details.", why: "True, but too narrow. It only covers part of the text and misses the main point." },
      { t: "Pygmy marmosets have now become an endangered species because so many of them have been hunted by humans for their fur. The rest of the text develops in a different direction.", why: "Too broad. This adds a claim the text does not actually make or support." },
      { t: "The male pygmy marmoset carries the newborn twins around on his back for the first two weeks of their lives. The story continues well beyond this particular moment.", why: "A real detail, but a minor one. It is not what the text is mainly about." }
    ]
  }
];

const EVIDENCE = [
  {
    quote: "They live by the edges of rivers in tropical forests",
    opts: [
      { t: "Pygmy marmosets live in warm, wet forest habitats", ok: true, why: "Right. “Tropical forests” and “edges of rivers” both point to warm, wet places." },
      { t: "Pygmy marmosets are good swimmers that like rivers", why: "Living near rivers doesn’t mean swimming. The text says they live in trees." },
      { t: "Pygmy marmosets live all over the continent of South America", why: "The same sentence says “north-west”, not everywhere." },
      { t: "Pygmy marmosets build nests on riverbanks", why: "The quote doesn’t mention nests. Don’t add details." }
    ]
  },
  {
    quote: "they can rotate their heads backwards to check for danger",
    opts: [
      { t: "Their bodies are adapted to help them stay safe", ok: true, why: "Right. A very flexible neck is a physical feature that helps them spot predators behind them." },
      { t: "Pygmy marmosets attack other animals from behind", why: "They turn their heads to check for danger, not to attack." },
      { t: "Turning their heads that far hurts their necks", why: "The text says their necks are “very flexible”. Nothing suggests pain." },
      { t: "Pygmy marmosets can see in the dark", why: "The quote is about head movement, not eyesight." }
    ]
  },
  {
    quote: "carrying them around on his back for the first two weeks",
    opts: [
      { t: "Fathers play an important part in raising the babies", ok: true, why: "Right. Carrying them for two weeks shows the male does much of the early care." },
      { t: "Mothers do not really care about their babies at all", why: "The male brings the babies “back to the mother to feed”. Both parents care for them." },
      { t: "The babies can walk as soon as they are born", why: "If they could, they wouldn’t need carrying." },
      { t: "The babies stay on their father’s back for their whole life", why: "The quote says “for the first two weeks”." }
    ]
  }
];

const EXPLAIN = [
  {
    claim: "The writer helps readers picture how tiny marmosets are.",
    quote: "can comfortably fit in a human hand",
    opts: [
      { t: "Everyone knows the size of a hand, so it is easy to picture. “Comfortably” adds room to spare: even smaller.", ok: true, why: "Strong. It explains why the comparison works and what “comfortably” adds." },
      { t: "A grown-up pygmy marmoset is small enough that a person could hold one in their hand, and its tiny body is only about 14 to 16 centimetres long.", why: "Retelling. How do the words help readers picture it?" },
      { t: "The writer uses a comparison to describe the size of the monkeys.", why: "Accurate, but it doesn’t explain what the comparison does." },
      { t: "This proves that pygmy marmosets really like being held by people, because they fit comfortably and feel safe in a person’s hand.", why: "A misreading. Fitting in a hand describes size, not what the monkeys like." }
    ]
  },
  {
    claim: "Marmosets are surprisingly athletic.",
    quote: "over 30 times their own body length",
    opts: [
      { t: "Pygmy marmosets can jump a very long way for such tiny animals, more than four metres, which is quite a distance for such small creatures.", why: "Retelling. Explain how the comparison makes the jump impressive." },
      { t: "Measuring the jump against body length makes it impressive: thirty times their length is power beyond their size.", ok: true, why: "Strong. It explains the choice of comparison and links it to athletic ability." },
      { t: "This shows that pygmy marmosets are definitely the best jumpers of any animal on Earth, better than kangaroos, frogs and every other animal.", why: "Overclaiming. No other animals are compared." },
      { t: "The writer uses numbers in this sentence to give information.", why: "Vague. Which numbers, and what effect do they have?" }
    ]
  },
  {
    claim: "Marmosets are always at risk.",
    quote: "that think they are a tasty meal",
    opts: [
      { t: "Birds of prey, snakes and cats all like to eat pygmy marmosets, so the monkeys have to be very careful and watch out for them all the time.", why: "Retelling. What does the phrasing add?" },
      { t: "“A tasty meal” is the predators’ point of view. The light-hearted phrase still reminds readers many animals hunt them.", ok: true, why: "Strong. It explains the viewpoint and tone and connects them to danger." },
      { t: "I think it is really sad that such small and cute animals are eaten by other animals, and I wish the predators would leave them alone.", why: "A personal response. Explain the writer’s words instead." },
      { t: "The writer uses informal language here.", why: "True, but what does it show about the danger?" }
    ]
  },
  {
    claim: "Being small helps marmosets survive.",
    quote: "Because these monkeys are so small and light",
    opts: [
      { t: "“Because” links size to an advantage: being light lets them use slender branches other monkeys can’t reach.", ok: true, why: "Strong. It explains the connective and follows the cause through to its effect." },
      { t: "Pygmy marmosets are very small and light monkeys, so they can move along thin branches and eat sap, fruit and insects like grasshoppers.", why: "Retelling. Explain how the sentence shows size helps survival." },
      { t: "This is a cause and effect sentence.", why: "Correct label, but what is the cause, and what is the effect?" },
      { t: "This shows that being small is never a problem for pygmy marmosets in any way, and that their size only ever helps them to survive.", why: "Overclaiming. The next paragraph shows they are hunted by many predators." }
    ]
  }
];

const COLLECT = [
  {
    claim: "The writer uses an everyday object to help readers picture the marmoset’s tiny size.",
    opts: [
      { t: "less than an apple", ok: true, why: "Right. Everyone has held an apple, so comparing the weight to one makes the size easy to imagine." },
      { t: "about the size of a human thumb", why: "This is an everyday comparison, but for the babies, not the weight of a grown-up marmoset." },
      { t: "about 14–16 centimetres long", why: "This is a plain measurement, with no everyday object to picture it against." },
      { t: "not including the tail which can add another 20 centimetres", why: "This is another measurement of length, not an everyday-object comparison." }
    ]
  },
  {
    claim: "Being small is an advantage that helps the marmoset survive.",
    opts: [
      { t: "they can move along slender branches higher into the trees than other monkeys", ok: true, why: "Right. Being tiny lets them reach thin, high branches, and food, that bigger monkeys cannot." },
      { t: "They dash about quickly from one safe place to the next", why: "This is a survival behaviour, but it is not linked to being small." },
      { t: "birds of prey and other creatures like snakes and cats", why: "This lists the dangers they face, not the advantage their size gives them." },
      { t: "the sap of the trees", why: "This is their favourite food, not a survival advantage of being small." }
    ]
  },
  {
    claim: "The marmoset’s body has a feature for spotting danger behind it.",
    target: ["Their necks are very flexible"],
    decoys: [{ phrase: "They dash about quickly from one safe place to the next", why: "This is a behaviour that keeps them safe, not a body feature. Look for the bendy part of the body." }],
    miss: "Look in the paragraph about predators, at the marmoset’s neck.",
    explain: "“Their necks are very flexible”, so they “can rotate their heads backwards to check for danger”. A bendy neck is a body feature that helps them survive."
  },
  {
    claim: "The report is amazed at how far such a small animal can jump.",
    target: ["these tiny animals can jump more than four metres"],
    decoys: [{ phrase: "higher into the trees than other monkeys", why: "This is about climbing height, not the length of their jump. Look for how far they can leap." }],
    miss: "Look in the paragraph about their size, at how far they jump.",
    explain: "Jumping “more than four metres” is astonishing for an animal that fits in a hand, which is why the writer adds “That’s quite a distance for such small creatures!”"
  }
];
TEXTS.push({ id: "pygmy-marmoset", type: "Non-fiction", mode: "Informative", form: "Information report", level: "6ème",
  hook: "The world’s smallest monkey: lighter than an apple, and it jumps four metres.",
  TEXT, ANNOTATE, QUESTIONS, EVIDENCE, EXPLAIN, COLLECT });
}

/* ================================================================
   TEXT 10 · Fiction · Creative · Myth retelling · 6ème
   ================================================================ */
{
const TEXT = {
  title: "The Minotaur",
  intro: "In ancient Greek mythology, Ariadne was the guardian of the labyrinth (maze). At its centre was the monster named the Minotaur.",
  paras: [
    "A cry went up as the ship from Athens was sighted. Waiting on the docks, Ariadne and her father, Minos, the powerful King of Crete, were curious about the ship’s human cargo. Minos was weary of war with Athens and had proposed a terrible bargain in exchange for peace. If Athens would send seven of its finest young men and seven of its finest young women to be sacrificed to the Minotaur, then Minos would spare the rest of Athens. The Athenians had been shocked by the cruelty of the proposal, but for the sake of peace they reluctantly accepted it.",
    "As the young Athenians stumbled from the ship, trembling and with eyes downcast, Minos observed them without pity. Ariadne gazed intently at each of them until her eyes fell on one of the youths, the handsome Prince Theseus. He had volunteered to take the place of one of his young countrymen and to attempt to kill the Minotaur. Ariadne sensed he was the leader of the group, and she wondered if he could help her escape from her island home.",
    "That night she went to where Theseus and the others were being held. ‘If you agree to take me with you when you leave, I will help you to defeat the Minotaur.’",
    "Theseus was astounded. He had come with no plan, only a burning desire to save his fellow Athenians. Suddenly he was being offered a way to succeed. ‘I will meet you inside the entrance to the labyrinth tomorrow,’ she whispered, ‘and give you a sword to kill the Minotaur and some string to guide you back to the entrance when you have slain the beast. When you have done that, we must flee immediately.’",
    "And so the hero, Theseus, defeated the Minotaur and escaped with the Athenians and Ariadne."
  ]
};

const ANNOTATE = [
  {
    skill: "Word choice",
    prompt: "Find the phrase that describes the Athenians <em>as if they were goods</em>.",
    target: ["the ship’s human cargo"],
    decoys: [{ phrase: "the ship from Athens", why: "That names the ship, but doesn’t describe the people on it. Look for a word usually used for things a ship carries." }],
    miss: "Look at what Ariadne and Minos are curious about in the first paragraph.",
    explain: "Cargo is what ships carry: boxes, grain, goods. Calling the young people “human cargo” shows they are being delivered like objects, which makes the bargain feel even crueller."
  },
  {
    skill: "Characterisation",
    prompt: "Find the phrase that shows Minos is <em>cruel</em>.",
    target: ["observed them without pity"],
    decoys: [{ phrase: "weary of war with Athens", why: "This shows he is tired of war, which could even seem reasonable. Look for how he reacts to the frightened young people." }],
    miss: "Look at how Minos watches the young Athenians arrive.",
    explain: "Young people are trembling in front of him, yet he watches “without pity”. Placing his coldness right next to their fear makes his cruelty clear."
  },
  {
    skill: "Metaphor",
    prompt: "Find the metaphor that shows Theseus’ <em>determination</em>.",
    target: ["a burning desire"],
    decoys: [{ phrase: "He had come with no plan", why: "That shows he is unprepared. The metaphor about his feelings comes right after." }],
    miss: "Look at the paragraph that begins “Theseus was astounded.”",
    explain: "A desire cannot really burn. The fire image shows his wish to save the Athenians is intense and powerful, strong enough to drive him even without a plan."
  },
  {
    skill: "Motive",
    prompt: "Find the clue that Ariadne has <em>her own reason</em> for helping Theseus.",
    target: ["she wondered if he could help her escape from her island home"],
    decoys: [{ phrase: "Ariadne gazed intently at each of them", why: "This shows her watching closely, but not why. Look at the end of the same paragraph." }],
    miss: "Look at the last sentence of the second paragraph.",
    explain: "Ariadne isn’t only helping out of kindness: she wants to escape Crete. This motive explains her bargain with Theseus and makes her a character with her own goals."
  }
];

const QUESTIONS = [
  {
    skill: "Character",
    q: "What does “He had volunteered to take the place of one of his young countrymen” show about Theseus?",
    opts: [
      { t: "He is brave and puts others first", ok: true, why: "Right. As a prince he didn’t have to go, yet he chose danger to save someone else." },
      { t: "He was chosen at random from all the young men of Athens", why: "“Volunteered” means he chose to go." },
      { t: "He went to Crete to meet Ariadne", why: "He had never met her. His aim was “to attempt to kill the Minotaur”." },
      { t: "He is cruel like Minos and wants to fight", why: "Taking someone else’s place in danger is the opposite of cruel." }
    ]
  },
  {
    skill: "Inference",
    q: "Why does Ariadne offer to help Theseus?",
    opts: [
      { t: "She wants to escape Crete and sees him as her way out", ok: true, why: "Right. She “wondered if he could help her escape”, and her offer depends on him agreeing to “take me with you”." },
      { t: "Her father, King Minos, secretly ordered her to help him", why: "She goes secretly at night, and they must “flee immediately”. Her father would not approve." },
      { t: "She wants to kill the Minotaur herself", why: "She gives Theseus the sword. She doesn’t plan to fight." },
      { t: "Only because she thinks he is the most handsome of the youths", why: "He is described as handsome, but the text gives a clearer reason: her wish to escape her island." }
    ]
  },
  {
    skill: "Structure",
    q: "Why is the final paragraph so short?",
    opts: [
      { t: "The focus is Ariadne’s plan, so the famous ending is summed up quickly", ok: true, why: "Right. Most of the text builds the bargain and the plan. “And so” wraps up the well-known outcome, the way myths are often retold." },
      { t: "Because the battle with the Minotaur didn’t really matter to the story", why: "It matters to the story, but this version chooses to focus on how Theseus got the help he needed." },
      { t: "Because it is a cliffhanger", why: "A cliffhanger leaves things unresolved. This ending tells us exactly what happened." },
      { t: "Because the writer didn’t know how the old myth was supposed to end", why: "The ending is complete: Theseus wins and escapes with Ariadne." }
    ]
  },
  {
    skill: "Vocabulary",
    q: "“Theseus was astounded.” What does “astounded” mean?",
    opts: [
      { t: "Extremely surprised", ok: true, why: "Right. He had “no plan”, then “suddenly” he was offered help. His reaction is great surprise." },
      { t: "Angry and insulted", why: "He is being offered help, not insulted. Nothing suggests anger." },
      { t: "Frightened", why: "The offer gives him hope. The word describes surprise, not fear." },
      { t: "Disappointed and let down", why: "He is offered a way to succeed, which is good news." }
    ]
  },
  {
    skill: "Summary",
    q: "Which sentence best sums up what happens in this text?",
    opts: [
      { t: "In this myth, Ariadne secretly helps Theseus defeat the Minotaur in exchange for escaping her island home, giving him a sword and thread to find his way back.", ok: true, why: "Right. It covers the whole shape of the text, not just one part of it." },
      { t: "King Minos demands that the city of Athens send fourteen of its finest young men and women to be sacrificed each year. Other parts of the story focus on different details.", why: "True, but too narrow. It only covers part of the text and misses the main point." },
      { t: "Theseus falls deeply in love with Ariadne the very moment that he first steps off the ship that has carried him from Athens. The rest of the text develops in a different direction.", why: "Too broad. This adds a claim the text does not actually make or support." },
      { t: "Ariadne watches closely as the young Athenians stumble off the ship, trembling and with their eyes cast down to the ground. The story continues well beyond this particular moment.", why: "A real detail, but a minor one. It is not what the text is mainly about." }
    ]
  }
];

const EVIDENCE = [
  {
    quote: "Ariadne sensed he was the leader of the group",
    opts: [
      { t: "Ariadne is observant and chooses her helper carefully", ok: true, why: "Right. She “gazed intently at each of them” before deciding. She picks the person most likely to succeed." },
      { t: "Theseus told everyone on the ship that he was the leader", why: "“Sensed” means she worked it out herself. No one told her." },
      { t: "Ariadne already knew Theseus", why: "She is watching the Athenians arrive for the first time." },
      { t: "Theseus is the son of the King of Crete", why: "Minos is the King of Crete. Theseus is a prince from Athens." }
    ]
  },
  {
    quote: "some string to guide you back to the entrance",
    opts: [
      { t: "The labyrinth is so complicated that finding the way out would be very hard", ok: true, why: "Right. If the maze were simple, Theseus wouldn’t need string to find his way back." },
      { t: "Theseus is forgetful and often loses his way", why: "The string is needed because of the maze, not because of Theseus." },
      { t: "The string is a secret weapon to trap and tie up the Minotaur", why: "The sword is the weapon. The string is for finding the way out." },
      { t: "The labyrinth is very small", why: "A small maze wouldn’t need string to guide someone out." }
    ]
  },
  {
    quote: "When you have done that, we must flee immediately.",
    opts: [
      { t: "Ariadne knows she will be in danger once she betrays her father", ok: true, why: "Right. Helping Theseus goes against Minos, the powerful king. “Immediately” shows she knows they cannot wait." },
      { t: "Ariadne is scared the Minotaur will come back to life after it is slain", why: "Nothing suggests this. The danger is being caught after helping the Athenians." },
      { t: "The ship is about to sink", why: "The quote gives no reason like this. The urgency comes from escaping Minos." },
      { t: "Ariadne is only joking with Theseus to make him feel braver", why: "She is “whispering” a secret plan. The tone is serious." }
    ]
  }
];

const EXPLAIN = [
  {
    claim: "The young Athenians are treated as objects.",
    quote: "the ship’s human cargo",
    opts: [
      { t: "The ship from Athens has fourteen young men and women on board who are being brought to Crete to be sacrificed to the Minotaur in the labyrinth.", why: "Retelling. What does the word “cargo” add?" },
      { t: "“Cargo” is used for goods on a ship, not people. “Human cargo” makes them a delivery for the Minotaur, not human beings.", ok: true, why: "Strong. It explains the usual meaning of “cargo” and why using it for people shows they are treated as objects." },
      { t: "The writer uses interesting vocabulary to describe the ship.", why: "Vague. Which word, and what does it suggest?" },
      { t: "This shows the ship from Athens was also carrying food, boxes and other goods for the King of Crete as well as the young people on board.", why: "A misreading. “Human cargo” means the people themselves." }
    ]
  },
  {
    claim: "Minos is cold and cruel.",
    quote: "Minos observed them without pity",
    opts: [
      { t: "“Observed” is detached, like watching from a distance, and “without pity” shows no feeling. Beside their trembling, he seems colder.", ok: true, why: "Strong. It explains two word choices and uses the contrast with the Athenians." },
      { t: "Minos stands on the docks with his daughter Ariadne and looks at the young Athenians one by one as they get off the ship from Athens.", why: "Retelling. How do the words show cruelty?" },
      { t: "This shows that Minos did not notice the Athenians were scared, because he was too busy thinking about the war with Athens and the bargain.", why: "A misreading. He “observed” them closely; he simply felt no pity." },
      { t: "The writer describes Minos in this sentence to show his character.", why: "Too vague. What character trait, and how?" }
    ]
  },
  {
    claim: "Theseus relies on courage more than planning.",
    quote: "no plan, only a burning desire",
    opts: [
      { t: "Theseus arrives in Crete without any plan for killing the Minotaur, but he really wants to save the other young Athenians from being sacrificed.", why: "Retelling. Explain how the words contrast courage and planning." },
      { t: "This proves that Theseus is foolish and would definitely have failed and been killed by the Minotaur if Ariadne had not decided to help him.", why: "Overclaiming. The text shows he needed help, but “definitely foolish” goes beyond it." },
      { t: "The writer uses a metaphor to describe how Theseus feels.", why: "Correct label, but what does the metaphor show?" },
      { t: "“No plan” admits he is unprepared, while “burning desire” is passion as strong as fire. Courage is “only” what he brings.", ok: true, why: "Strong. It explains three parts of the quote and how they balance courage against planning." }
    ]
  },
  {
    claim: "Ariadne is the real reason Theseus succeeds.",
    quote: "a sword to kill the Minotaur and some string to guide you back",
    opts: [
      { t: "Ariadne gives Theseus two things to take with him into the labyrinth when he meets her at the entrance the next day: a sword and some string.", why: "Retelling. Why do those two things matter?" },
      { t: "Ariadne gives both the weapon and the way out. Without the sword Theseus can’t win; without the string he can’t escape.", ok: true, why: "Strong. It explains the role of each object and why together they make Ariadne essential." },
      { t: "This shows that Ariadne is a better fighter than Theseus, because she is the one who knows how to kill the Minotaur and find the way out.", why: "A misreading. She gives him the tools; he does the fighting." },
      { t: "The writer lists two objects in this sentence.", why: "An observation, not an explanation." }
    ]
  }
];

const COLLECT = [
  {
    claim: "The Athenians agreed to the terrible bargain only to avoid something worse.",
    opts: [
      { t: "for the sake of peace they reluctantly accepted it", ok: true, why: "Right. “Reluctantly” shows they did not want to, and “for the sake of peace” shows they gave in to avoid war." },
      { t: "The Athenians had been shocked by the cruelty of the proposal", why: "This shows how much they hated the offer, not the reason they still said yes." },
      { t: "seven of its finest young men and seven of its finest young women to be sacrificed", why: "This is the price they had to pay, not the reason they accepted it." },
      { t: "Minos was weary of war with Athens", why: "This is why Minos made the offer, not why the Athenians agreed to it." }
    ]
  },
  {
    claim: "The young Athenians are shown to be terrified, without the word “afraid” being used.",
    opts: [
      { t: "trembling and with eyes downcast", ok: true, why: "Right. Shaking bodies and lowered eyes show their fear and hopelessness without naming the feeling." },
      { t: "Ariadne gazed intently at each of them", why: "This is Ariadne watching them, not the Athenians’ fear." },
      { t: "the powerful King of Crete", why: "This describes Minos, not how the young Athenians feel." },
      { t: "the handsome Prince Theseus", why: "This describes how Theseus looks, not the fear of the group." }
    ]
  },
  {
    claim: "Theseus is brave and puts others before himself.",
    target: ["He had volunteered to take the place of one of his young countrymen"],
    decoys: [{ phrase: "Theseus was astounded", why: "This is his surprise when Ariadne offers help, not the brave choice he made. Look in the second paragraph for what he volunteered to do." }],
    miss: "Look in the second paragraph, at what Theseus chose to do.",
    explain: "As a prince he did not have to go, yet he “volunteered to take the place” of another young Athenian. Choosing danger to save someone else is what makes him brave."
  },
  {
    claim: "Ariadne fixes exactly where and when she will help Theseus.",
    target: ["I will meet you inside the entrance to the labyrinth tomorrow"],
    decoys: [{ phrase: "That night she went to where Theseus and the others were being held", why: "This is when she first comes to make her offer, not the meeting she arranges for the next day. Look for where and when she promises to meet him." }],
    miss: "Look at Ariadne’s longer speech to Theseus.",
    explain: "She sets the place (“inside the entrance to the labyrinth”) and the time (“tomorrow”). Her help is a concrete plan, not a vague promise."
  }
];
TEXTS.push({ id: "the-minotaur", type: "Fiction", mode: "Creative", form: "Greek myth", level: "6ème",
  hook: "Fourteen young Athenians, a monster in a maze, and a princess with a plan.",
  TEXT, ANNOTATE, QUESTIONS, EVIDENCE, EXPLAIN, COLLECT });
}

/* ================================================================
   TEXT 11 · Non-fiction · Informative · Feature article · 5ème
   ================================================================ */
{
const TEXT = {
  title: "Gliding Through the Deep",
  paras: [
    "Deep in the ocean 200 kilometres off the coast of Western Australia, a sleek shape glides through the water, its half-metre-long fins steering it through the current. For more than 100 days it has roamed the ocean alone, breaking the surface every four to five hours before diving again into the unknown deep.",
    "This oceanic spectre, though, is not a natural part of the marine environment. Instead, it is one of the most potent research tools in Australia’s Integrated Marine Observing System (IMOS) arsenal—an autonomous underwater glider. It utilises a highly energy-efficient form of buoyancy-based propulsion. The glider moves by pumping in and then expelling sea water. Water going in causes the glider to descend and its expulsion propels the glider up again and forward. More than 15 gliders in the IMOS fleet gather data on water temperature, salinity, depth, chlorophyll and dissolved oxygen, transmitting the findings electronically to IMOS during their regular surface stops.",
    "Initially this might sound like something of a novelty, but the practical value of these autonomous underwater vehicles (AUVs) is hard to overestimate. Whereas previously getting accurate readings would have entailed expensive and time-consuming ship-based oceanic observations, today, IMOS is able to dispatch its fleet of AUVs to remote locations in the Coral Sea or Southern Ocean for a fraction of the cost. With no engine to fuel or maintain, they are able to operate for extended periods. Zigzagging up and down utilising ocean currents, they gather information according to pre-programmed instructions which can be changed remotely when the AUV surfaces to transmit data.",
    "With an operational life span of around six months between maintenance stops, the gliders can be launched and recovered cheaply and quickly from small two-person boats, avoiding costly support and logistics procedures. Already they’ve proved very useful in measuring the complex boundary currents off Australia, which are a main link between open-ocean and coastal systems. The data collected makes a valuable contribution to the world weather communications network. Although they are only about two metres long, these little craft are surprisingly robust, with the capacity to dive to around 1000 metres and travel great distances.",
    "One AUV, similar to those in the IMOS fleet, has demonstrated just how economical underwater gliders really are. The glider nicknamed the ‘Scarlet Knight’ crossed the Atlantic Ocean (7409 km) using the same amount of energy it takes for the average car to travel just 10 km—a more than 700-fold difference in efficiency.",
    "[Picture: an example of an autonomous underwater vehicle, a long yellow torpedo shape with wings and a tail fin.]"
  ]
};

const ANNOTATE = [
  {
    skill: "Mystery opening",
    prompt: "Find the vague description that <em>hides what the object is</em> at first.",
    target: ["a sleek shape glides through the water"],
    decoys: [{ phrase: "the unknown deep", why: "That describes the ocean, not the object. Look for how the writer first refers to the glider." }],
    miss: "Look in the first sentence. What does the writer call the glider before naming it?",
    explain: "Calling it only “a sleek shape” keeps the reader guessing. It could be a shark or a dolphin. The mystery hooks the reader before the article reveals it is a machine."
  },
  {
    skill: "Personification",
    prompt: "Find where the glider is described like a <em>lonely living creature</em>.",
    target: ["it has roamed the ocean alone"],
    decoys: [{ phrase: "its half-metre-long fins steering it through the current", why: "This describes how it moves, mechanically. Look for a phrase that gives it feelings or a way of life." }],
    miss: "Look at the second sentence of the article.",
    explain: "“Roamed” suggests wandering freely like an animal, and “alone” adds a sense of loneliness. The machine is made to seem alive, which builds interest before the facts arrive."
  },
  {
    skill: "Anticipating doubt",
    prompt: "Find where the writer admits the idea might seem <em>unimportant</em>, before arguing the opposite.",
    target: ["Initially this might sound like something of a novelty"],
    decoys: [{ phrase: "is hard to overestimate", why: "That is the writer’s argument. Look just before it for the doubt being raised." }],
    miss: "Look at the start of the third paragraph.",
    explain: "The writer voices what a reader might think (just a clever toy) and then uses “but” to reject it. Raising a doubt first makes the argument that follows more convincing."
  },
  {
    skill: "Statistic",
    prompt: "Find the statistic that proves <em>how efficient</em> gliders are.",
    target: ["more than 700-fold difference in efficiency"],
    decoys: [{ phrase: "More than 15 gliders", why: "That tells us the size of the fleet, not how efficient gliders are." }],
    miss: "Look at the final sentence about the ‘Scarlet Knight’.",
    explain: "“700-fold” means 700 times more efficient than a car. It turns the Atlantic crossing into one dramatic number that readers will remember."
  }
];

const QUESTIONS = [
  {
    skill: "Purpose",
    q: "What is the main purpose of this article?",
    opts: [
      { t: "To inform readers about underwater gliders and show their value to research", ok: true, why: "Right. It explains how gliders work and then gives reasons and evidence that they are cheap, tough and useful." },
      { t: "To sell underwater gliders to people who own their own boats", why: "There are no prices or offers. The article is about research, not sales." },
      { t: "To argue that ship-based research is useless", why: "It says ship-based research is “expensive and time-consuming”, not useless." },
      { t: "To tell the story of one glider’s long journey around Australia", why: "The opening follows one glider briefly, but the article covers the whole fleet and gliders in general." }
    ]
  },
  
  {
    skill: "Vocabulary",
    q: "The article calls the glider an “autonomous underwater glider”. What does “autonomous” mean?",
    opts: [
      { t: "Able to work on its own without being directly controlled", ok: true, why: "Right. The glider “roamed the ocean alone” and follows “pre-programmed instructions”." },
      { t: "Extremely fast, faster than most boats", why: "Nothing suggests speed. Gliders move slowly and efficiently." },
      { t: "Made of strong metal", why: "The text calls them “robust”, but “autonomous” is about control, not materials." },
      { t: "Controlled by a diver swimming alongside it", why: "It has been “alone” for more than 100 days. No diver controls it." }
    ]
  },
  {
    skill: "Comparison",
    q: "What does the sentence beginning “Whereas previously” do?",
    opts: [
      { t: "It contrasts the old, expensive ship method with cheaper gliders", ok: true, why: "Right. “Whereas previously” sets the past (costly ships) against “today” (gliders for “a fraction of the cost”)." },
      { t: "It explains that gliders were first invented a very long time ago", why: "“Previously” refers to how research used to be done, before gliders." },
      { t: "It shows that ships are better and more accurate than gliders", why: "The sentence shows gliders do the job for much less cost." },
      { t: "It describes a glider’s day in time order", why: "It compares two methods of research, not the events of a day." }
    ]
  },
  {
    skill: "Tone",
    q: "What is the writer’s attitude towards underwater gliders?",
    opts: [
      { t: "Enthusiastic and admiring", ok: true, why: "Right. Phrases like “hard to overestimate”, “surprisingly robust” and “just how economical” show clear admiration." },
      { t: "Doubtful and critical", why: "The only doubt (“might sound like something of a novelty”) is raised to be rejected." },
      { t: "Completely neutral with no opinion", why: "Words like “potent”, “valuable” and “surprisingly” show the writer’s positive opinion." },
      { t: "Worried about the dangers of gliders", why: "No dangers are mentioned. The article focuses on benefits." }
    ]
  },
  {
    skill: "Summary",
    q: "Which sentence best sums up what happens in this text?",
    opts: [
      { t: "The article explains what autonomous underwater gliders are, how they work, and why they collect ocean data more cheaply than traditional research ships.", ok: true, why: "Right. It covers the whole shape of the text, not just one part of it." },
      { t: "The gliders move through the water by pumping sea water in and then expelling it again to control their own buoyancy. Other parts of the story focus on different details.", why: "True, but too narrow. It only covers part of the text and misses the main point." },
      { t: "Underwater gliders have now completely replaced every single research ship used in ocean science around the world. The rest of the text develops in a different direction.", why: "Too broad. This adds a claim the text does not actually make or support." },
      { t: "A glider nicknamed the 'Scarlet Knight' once crossed the whole width of the Atlantic Ocean using very little energy. The story continues well beyond this particular moment.", why: "A real detail, but a minor one. It is not what the text is mainly about." }
    ]
  }
];

const EVIDENCE = [
  {
    quote: "breaking the surface every four to five hours",
    opts: [
      { t: "The glider must surface regularly as part of its work", ok: true, why: "Right. The article later explains it transmits findings “during their regular surface stops”." },
      { t: "The glider is broken and keeps floating up", why: "“Breaking the surface” means coming up through the water, not being broken." },
      { t: "The glider is a living creature that needs to come up for air", why: "It is a machine. Surfacing is for sending data." },
      { t: "The glider cannot go very deep", why: "Gliders can dive “to around 1000 metres”." }
    ]
  },
  {
    quote: "can be launched and recovered cheaply and quickly from small two-person boats",
    opts: [
      { t: "Gliders are simple and practical to use", ok: true, why: "Right. Needing only small boats and two people shows how little support gliders require." },
      { t: "Only two people know how to use gliders", why: "“Two-person boats” describes the size of the boats, not the number of experts." },
      { t: "Gliders are as big as boats", why: "Gliders are “only about two metres long”." },
      { t: "Large ships cannot carry gliders", why: "The quote says small boats are enough, not that large ships can’t." }
    ]
  },
  {
    quote: "these little craft are surprisingly robust",
    opts: [
      { t: "Despite their size, gliders are strong enough for tough ocean conditions", ok: true, why: "Right. “Surprisingly” sets their small size against their strength, shown by diving to 1000 metres." },
      { t: "Gliders are delicate machines that break very easily at sea", why: "“Robust” means strong and tough, the opposite." },
      { t: "Gliders are much larger than people expect them to be", why: "They are called “little craft”. The surprise is their strength, not their size." },
      { t: "Gliders never need maintenance", why: "They need maintenance stops “around six months” apart." }
    ]
  }
];

const EXPLAIN = [
  {
    claim: "The opening makes the glider mysterious.",
    quote: "a sleek shape glides through the water",
    opts: [
      { t: "A glider moves smoothly through the ocean 200 kilometres off the coast of Western Australia, steering through the current with its fins.", why: "Retelling. Explain how the words create mystery." },
      { t: "“A shape” won’t say what it is, so readers guess. “Sleek” and “glides” suggest a sea creature, later revealed as a machine.", ok: true, why: "Strong. It explains the vague noun and the animal-like words, and links them to the later reveal." },
      { t: "The writer uses description at the start of the article to hook the reader.", why: "Too general. Which words hook the reader, and how?" },
      { t: "This proves the writer did not actually know what the object in the water was when they started writing the first paragraph of the article.", why: "A misreading. The writer hides it on purpose to create suspense." }
    ]
  },
  {
    claim: "Gliders are good value.",
    quote: "With no engine to fuel or maintain",
    opts: [
      { t: "Gliders do not have engines inside them.", why: "Retelling. Why does having no engine make them good value?" },
      { t: "This shows that gliders don’t need any energy at all to move through the water, because they have no engine and never need fuel.", why: "A misreading. They use “buoyancy-based propulsion”, which still takes some energy." },
      { t: "No engine means two costs disappear: fuel and repairs. That is why gliders can “operate for extended periods” cheaply.", ok: true, why: "Strong. It identifies the two savings and links them to the following claim in the text." },
      { t: "I think it is really clever that gliders can move through the ocean without an engine, and I would like to see one in real life.", why: "A personal response. Explain the writer’s point." }
    ]
  },
  {
    claim: "The writer anticipates readers’ doubts.",
    quote: "Initially this might sound like something of a novelty",
    opts: [
      { t: "“Initially” and “might sound” admit a first reaction: a gimmick. Raising that doubt lets “but” overturn it convincingly.", ok: true, why: "Strong. It explains the hedging words and how the structure strengthens the argument." },
      { t: "The writer honestly thinks underwater gliders are just a novelty, a fun gadget with no real practical value for scientists or research.", why: "A misreading. The writer raises this view in order to reject it." },
      { t: "The writer says that at first gliders might sound like something new and unusual, before going on to talk about how useful they are.", why: "Retelling. What is the purpose of saying it?" },
      { t: "This is a counter-argument.", why: "Close to the right term, but there is no explanation of its effect." }
    ]
  },
  {
    claim: "The final example is persuasive.",
    quote: "more than 700-fold difference in efficiency",
    opts: [
      { t: "The Scarlet Knight glider crossed the whole Atlantic Ocean using the same amount of energy it takes for a car to travel just 10 km.", why: "Retelling. How does the number persuade?" },
      { t: "The writer uses a statistic at the end of the article.", why: "An observation. What makes this statistic persuasive?" },
      { t: "This proves that underwater gliders should replace all of the cars on the road, because they are more than 700 times more efficient.", why: "Off the text. The comparison shows efficiency; it is not about replacing cars." },
      { t: "An ocean crossing compared with 10 km of driving uses something familiar; “700-fold” makes it a number readers remember.", ok: true, why: "Strong. It explains both the familiar comparison and the impact of the number." }
    ]
  }
];

const COLLECT = [
  {
    claim: "The writer stresses that gliders are far cheaper than the old way of doing research.",
    opts: [
      { t: "for a fraction of the cost", ok: true, why: "Right. A fraction is a small part of the old price, so this states the saving directly." },
      { t: "expensive and time-consuming ship-based oceanic observations", why: "This is the costly old method the gliders replace, not the saving itself." },
      { t: "gather data on water temperature, salinity, depth, chlorophyll and dissolved oxygen", why: "This is what gliders measure, not what they cost." },
      { t: "operate for extended periods", why: "This is how long they can work, which helps explain the saving but is not the comparison of cost." }
    ]
  },
  {
    claim: "The glider is introduced as something mysterious before we learn it is a machine.",
    opts: [
      { t: "This oceanic spectre", ok: true, why: "Right. A “spectre” is a ghost, so the glider is still eerie and unexplained at this point." },
      { t: "one of the most potent research tools", why: "This is the moment the mystery is solved and it is called a tool, the opposite of mysterious." },
      { t: "an autonomous underwater glider", why: "This is its plain, scientific name, not a mysterious description." },
      { t: "its half-metre-long fins steering it through the current", why: "This is a concrete, mechanical detail, not part of the mystery." }
    ]
  },
  {
    claim: "The writer explains how the glider moves without an engine.",
    target: ["The glider moves by pumping in and then expelling sea water."],
    decoys: [{ phrase: "Zigzagging up and down utilising ocean currents", why: "This describes the path it follows, not the mechanism that drives it. Look for the sentence about pumping sea water." }],
    miss: "Look in the second paragraph, at how the glider is powered.",
    explain: "It moves “by pumping in and then expelling sea water”: taking water in to sink and pushing it out to rise. That buoyancy trick replaces an engine."
  },
  {
    claim: "One striking comparison shows how little energy the glider uses.",
    target: ["the same amount of energy it takes for the average car to travel just 10 km"],
    decoys: [{ phrase: "crossed the Atlantic Ocean (7409 km)", why: "This is the huge distance it travelled, which is impressive, but not the point about energy. Look for what it is compared to a car." }],
    miss: "Look at the final paragraph about the ‘Scarlet Knight’.",
    explain: "Crossing the whole Atlantic (7409 km) on the energy a car uses in just 10 km turns the glider’s efficiency into a vivid, familiar comparison."
  }
];
TEXTS.push({ id: "gliding-deep", type: "Non-fiction", mode: "Informative", form: "Feature article", level: "5ème",
  hook: "A silent shape roams the ocean for 100 days. It isn’t alive.",
  TEXT, ANNOTATE, QUESTIONS, EVIDENCE, EXPLAIN, COLLECT });
}

/* ================================================================
   TEXT 12 · Non-fiction · Persuasive · Opinion article · 5ème
   ================================================================ */
{
const TEXT = {
  title: "Peer Pressure: A Positive Perspective",
  paras: [
    "Like the scientific concept of gravity, the negative nature of peer pressure is often presented without question. Scientific investigations of peer pressure which go beyond investigating negative impacts are typically overlooked in favour of emotionally charged anecdotes about the harmful consequences that peer pressure can have for adolescents. The undesirable effect of peer pressure cannot be denied, but is it also possible that peer pressure might not entirely deserve its bad reputation? Could peer pressure also have positive effects on the personal development and behaviour of young people?",
    "A scroll through the scientific literature reveals exactly that: peer pressure is not always a force for the dark side. Humans, after all, are highly social beings with complex social systems that have developed over extremely long periods of time. The innate human desire to conform—which drives our susceptibility to peer pressure—is actually an advantageous response to our highly socialised environment. Peer pressure and the desire to conform, these studies suggest, are simply a part of being human.",
    "If humans are hard-wired to respond to peer pressure, then it makes sense to examine how it can be used to change behaviour in a positive way. Consider a hypothetical situation: student X has always enjoyed playing the guitar but is lazy and unmotivated. Although initially reluctant, she is persuaded to join a school band. The group of students is rehearsing for a performance and the existing members are enthusiastic, focused and hardworking. Gradually, student X is caught up in the spirit of the band and before long she is willingly making the same commitment of time and effort so they can all achieve a common goal.",
    "So how does it work? Peer pressure—both positive and negative—follows a recognisable psychological process. If student X does not conform to the established ethos of the band, she risks rejection. To eliminate this tension, student X alters her habits and increases the amount of time and energy she devotes to practice (this may cause other tensions in her life but she decides that the benefits outweigh the disadvantages). Some psychologists describe this realignment of personal goals or standards to achieve harmony as part of a group as an ‘identity shift’.",
    "The key to understanding the concept of peer pressure and its power over humans is to closely examine the science of the process, rather than dwell on its pathological aspects. Providing a one-dimensional view of the concept encourages the biased presumption that peer pressure is a strictly undesirable feature of human society. Instead we should be exploring ways to harness its power for good."
  ]
};

const ANNOTATE = [
  {
    skill: "Comparison",
    prompt: "Find the comparison suggesting people accept that peer pressure is bad <em>without thinking</em>.",
    target: ["Like the scientific concept of gravity"],
    decoys: [{ phrase: "emotionally charged anecdotes", why: "This criticises the kind of evidence people use, but it isn’t a comparison. Look at the very first words." }],
    miss: "Read the opening words of the article.",
    explain: "Nobody questions gravity. Comparing the negative view of peer pressure to gravity suggests people treat it as an unquestionable fact, which is exactly what the writer is about to challenge."
  },
  {
    skill: "Rhetorical question",
    prompt: "Find a question in the <em>first paragraph</em> that introduces the writer’s argument.",
    target: ["Could peer pressure also have positive effects", "is it also possible that peer pressure might not entirely deserve its bad reputation?"],
    decoys: [{ phrase: "So how does it work?", why: "That question comes later, to introduce an explanation. Look in the first paragraph for the questions that set up the argument." }],
    miss: "Look at the last two sentences of the first paragraph.",
    explain: "The questions invite readers to reconsider what they believe. They signal the article’s argument (peer pressure can be positive) without stating it bluntly, so readers feel they are thinking it through together."
  },
  {
    skill: "Metaphor",
    prompt: "Find the metaphor borrowed from <em>stories about good and evil</em>.",
    target: ["a force for the dark side"],
    decoys: [{ phrase: "hard-wired to respond", why: "A metaphor, but it comes from machines and electronics, not good and evil." }],
    miss: "Look in the first sentence of the second paragraph.",
    explain: "“The dark side” echoes famous films where a “force” can be good or evil. The playful reference makes a formal argument more accessible: peer pressure, like the Force, can be used either way."
  },
  {
    skill: "Hypothetical example",
    prompt: "Find where the writer introduces an <em>imagined example</em> to support the argument.",
    target: ["Consider a hypothetical situation"],
    decoys: [{ phrase: "A scroll through the scientific literature", why: "This refers to real research, not an imagined example." }],
    miss: "Look in the third paragraph for the word “hypothetical”.",
    explain: "“Hypothetical” means imagined. The writer creates student X to show how positive peer pressure could work in everyday life, turning abstract science into a relatable scenario."
  }
];

const QUESTIONS = [
  {
    skill: "Inference",
    q: "Why is the student called “student X” instead of being given a name?",
    opts: [
      { t: "She is an imagined example who could represent any student", ok: true, why: "Right. The writer calls it a “hypothetical situation”. “X” works like an unknown in maths: anyone could be student X." },
      { t: "Her real identity is being protected as part of a research study", why: "The situation is described as hypothetical, so she isn’t a real participant." },
      { t: "Student X is the writer of the article", why: "Nothing suggests this. She is used as an example." },
      { t: "X is the grade she received in her music exam", why: "“X” is a label for an imagined person, not a grade." }
    ]
  },
  {
    skill: "Vocabulary",
    q: "The writer mentions the “innate human desire” to conform. What does “conform” mean?",
    opts: [
      { t: "To behave in the same way as the group", ok: true, why: "Right. Student X changes her habits to match the band’s “established ethos”. That is conforming." },
      { t: "To rebel against the group and do things differently", why: "That is the opposite. Not conforming, the text says, “risks rejection”." },
      { t: "To perform in front of an audience", why: "The band is rehearsing for a performance, but “conform” is about fitting in." },
      { t: "To complain about rules", why: "Conforming means following the group, not complaining." }
    ]
  },
  {
    skill: "Evaluating evidence",
    q: "How strong is the student X example as evidence?",
    opts: [
      { t: "It illustrates the idea clearly, but because it is imagined it can’t prove it", ok: true, why: "Right. A hypothetical example helps readers understand how positive peer pressure could work, but it is not data. That is why the writer also refers to “scientific literature”." },
      { t: "It proves that peer pressure is always positive for every student", why: "One imagined example can’t prove anything “always” happens, and the writer admits other tensions." },
      { t: "It is scientific data collected from a real study of students", why: "The writer calls it a “hypothetical situation”." },
      { t: "It has nothing to do with the argument", why: "It shows exactly the positive change the writer is arguing for." }
    ]
  },
  {
    skill: "Language and tone",
    q: "What effect do words like “susceptibility”, “ethos” and “pathological” have?",
    opts: [
      { t: "The formal, scientific vocabulary makes the writer sound expert and authoritative", ok: true, why: "Right. Academic language suggests the argument is based on science, not just opinion, which supports the writer’s criticism of “emotionally charged anecdotes”." },
      { t: "They make the article sound chatty, casual and friendly to read", why: "These are formal, technical words, not casual ones." },
      { t: "They show that the writer is angry and frustrated with readers", why: "The tone is calm and reasoned. Formal words don’t signal anger." },
      { t: "They make the article funny", why: "These words are serious and academic." }
    ]
  },
  {
    skill: "Summary",
    q: "Which sentence best sums up what happens in this text?",
    opts: [
      { t: "The article argues that peer pressure, usually seen only as harmful, can also push people toward positive change, and explains the psychology behind it.", ok: true, why: "Right. It covers the whole shape of the text, not just one part of it." },
      { t: "A student who has always been lazy about practising the guitar is persuaded, somewhat reluctantly, to join a school band. Other parts of the story focus on different details.", why: "True, but too narrow. It only covers part of the text and misses the main point." },
      { t: "The article proves beyond doubt that peer pressure is always a good and entirely healthy thing for every single teenager. The rest of the text develops in a different direction.", why: "Too broad. This adds a claim the text does not actually make or support." },
      { t: "Psychologists describe the process of adjusting your own personal goals to fit a group's standards as an 'identity shift'. The story continues well beyond this particular moment.", why: "A real detail, but a minor one. It is not what the text is mainly about." }
    ]
  }
];

const EVIDENCE = [
  {
    quote: "emotionally charged anecdotes about the harmful consequences",
    opts: [
      { t: "The writer thinks the negative view relies on emotional stories rather than science", ok: true, why: "Right. Anecdotes are personal stories, and the writer contrasts them with “scientific investigations” that are “overlooked”." },
      { t: "The writer believes peer pressure never causes any harm to young people", why: "The writer says harm “cannot be denied”. The complaint is about how it is discussed." },
      { t: "Anecdotes are a type of scientific study used by psychologists", why: "Anecdotes are individual stories. The writer sets them against scientific investigations." },
      { t: "Teenagers enjoy reading emotional stories", why: "The quote says nothing about what teenagers enjoy." }
    ]
  },
  {
    quote: "she is willingly making the same commitment of time and effort",
    opts: [
      { t: "Positive peer pressure can change behaviour without force", ok: true, why: "Right. “Willingly” shows she chooses to work harder. The group’s example motivates her, rather than forcing her." },
      { t: "The rest of the band forced her to practise more", why: "“Willingly” means she wants to. Nothing shows force." },
      { t: "Student X dislikes playing the guitar", why: "She “has always enjoyed playing the guitar”. She was just unmotivated." },
      { t: "Every lazy student at school should be made to join a band", why: "Overclaiming. One hypothetical example doesn’t support a rule for every student." }
    ]
  },
  {
    quote: "this may cause other tensions in her life but she decides that the benefits outweigh the disadvantages",
    opts: [
      { t: "The writer admits positive peer pressure can have costs", ok: true, why: "Right. By acknowledging “other tensions”, the writer shows balance: even positive change involves trade-offs." },
      { t: "Positive peer pressure has no downsides for anyone involved", why: "The quote directly mentions “other tensions” and “disadvantages”." },
      { t: "Student X eventually quits the band", why: "She decides “the benefits outweigh the disadvantages”, so she stays." },
      { t: "Student X’s family is angry with her for practising so much", why: "The quote doesn’t say who or what causes the tensions." }
    ]
  }
];

const EXPLAIN = [
  {
    claim: "People accept the negative view of peer pressure without thinking.",
    quote: "often presented without question",
    opts: [
      { t: "“Without question” suggests people repeat the negative view like an unchallenged fact, as certain as gravity.", ok: true, why: "Strong. It explains the phrase and connects it to the gravity comparison in the same sentence." },
      { t: "People usually talk about peer pressure as something negative, and scientists often write about the harm it can do to teenagers.", why: "Retelling. How do the words show people don’t think about it?" },
      { t: "This proves that everybody in the whole world believes peer pressure is bad, and that nobody has ever thought it could be positive.", why: "Overclaiming. “Often” is not “everybody”." },
      { t: "The writer uses formal language in the opening sentence.", why: "An observation about style, not an explanation of the claim." }
    ]
  },
  {
    claim: "The writer is critical of how peer pressure is usually discussed.",
    quote: "emotionally charged anecdotes",
    opts: [
      { t: "People often tell stories about bad things that happened to them or their friends because of peer pressure when they were teenagers.", why: "Retelling. How do the words show criticism?" },
      { t: "The writer uses sophisticated vocabulary here.", why: "True, but what does the vocabulary suggest?" },
      { t: "“Anecdotes” are personal stories, not evidence, and “emotionally charged” means they play on feelings: unscientific.", ok: true, why: "Strong. Two word choices explained, both linked to the writer’s criticism." },
      { t: "The writer thinks emotions are bad and that people should never feel upset or worried about anything to do with peer pressure.", why: "A misreading. The criticism is about using emotion instead of evidence, not about emotions themselves." }
    ]
  },
  {
    claim: "The writer presents responding to peer pressure as natural.",
    quote: "hard-wired to respond to peer pressure",
    opts: [
      { t: "“Hard-wired” compares humans to machines with fixed circuits: responding to peers is built in, not a weakness we choose.", ok: true, why: "Strong. It explains the source of the metaphor and what it suggests about human nature." },
      { t: "This shows that humans are really robots with electrical wires inside their brains that make them do what other people do.", why: "A literal misreading of a metaphor." },
      { t: "Humans respond to peer pressure because of how they are made.", why: "Retelling. Explain how “hard-wired” shows it is natural." },
      { t: "I agree with the writer, because I often do what my friends are doing without really thinking about it, and so do most people I know.", why: "A personal response. Explain the writer’s words." }
    ]
  },
  {
    claim: "The student X example shows change happening gradually.",
    quote: "Gradually, student X is caught up in the spirit of the band",
    opts: [
      { t: "Student X starts to enjoy being in the school band after a while, because the other members are enthusiastic, focused and hardworking.", why: "Retelling. Which words show the change is gradual, and how?" },
      { t: "“Gradually” shows slow change, and “caught up” suggests being carried along: the pressure works through enthusiasm.", ok: true, why: "Strong. It explains two word choices and what they reveal about how peer pressure works." },
      { t: "This proves that student X eventually becomes the best guitar player in the whole band and practises more than anyone else in it.", why: "Overclaiming. She matches the others’ commitment; nothing says she becomes the best." },
      { t: "The writer uses an adverb at the start of this sentence.", why: "Correct observation, but what does the adverb show?" }
    ]
  }
];

const COLLECT = [
  {
    claim: "Before making his own case, the writer admits the other side has a point.",
    opts: [
      { t: "The undesirable effect of peer pressure cannot be denied", ok: true, why: "Right. This is the concession: he grants the harm first, which makes the positive argument that follows sound fair." },
      { t: "Scientific investigations of peer pressure which go beyond investigating negative impacts are typically overlooked", why: "This complains that positive research is ignored. It attacks the other side rather than conceding to it." },
      { t: "Providing a one-dimensional view of the concept", why: "This criticises how others discuss peer pressure. It is not the writer admitting they are partly right." },
      { t: "Some psychologists describe this realignment of personal goals or standards", why: "This is a detail about how the process works, not a concession to the opposing view." }
    ]
  },
  {
    claim: "The writer presents the urge to conform as natural, not a weakness.",
    opts: [
      { t: "an advantageous response to our highly socialised environment", ok: true, why: "Right. Calling it “advantageous” frames conforming as a useful, built-in trait rather than a flaw." },
      { t: "the biased presumption that peer pressure is a strictly undesirable feature", why: "This is the negative view the writer argues against, the opposite of the claim." },
      { t: "she risks rejection", why: "This is a consequence inside the example, not evidence that conforming is natural." },
      { t: "Peer pressure—both positive and negative—follows a recognisable psychological process", why: "This says the process is predictable, not that the urge to conform is natural." }
    ]
  },
  {
    claim: "Peer pressure works by creating discomfort that a person then acts to remove.",
    target: ["To eliminate this tension, student X alters her habits and increases the amount of time and energy she devotes to practice"],
    decoys: [{ phrase: "she risks rejection", why: "This names the discomfort, but the claim is about the action she takes to escape it. Look at the next sentence." }],
    miss: "Look in the paragraph that begins “So how does it work?”.",
    explain: "Not conforming “risks rejection”, and to remove that tension she “alters her habits”. The sentence shows the whole mechanism: discomfort in, changed behaviour out."
  },
  {
    claim: "The writer ends by recommending what people should actually do.",
    target: ["Instead we should be exploring ways to harness its power for good."],
    decoys: [{ phrase: "Providing a one-dimensional view of the concept", why: "This names the mistake he wants us to stop making, not what we should do instead. Look at the final sentence." }],
    miss: "Read the last sentence of the article.",
    explain: "“We should be exploring” is a direct recommendation, and “harness … for good” turns the argument into a plan of action. It leaves the reader with something to do."
  }
];
TEXTS.push({ id: "peer-pressure", type: "Non-fiction", mode: "Persuasive", form: "Opinion article", level: "5ème",
  hook: "Everyone says peer pressure is bad. This writer disagrees.",
  TEXT, ANNOTATE, QUESTIONS, EVIDENCE, EXPLAIN, COLLECT });
}

/* ================================================================
   TEXT 13 · Fiction · Creative · Short story (extract) · 5ème
   Frank R. Stockton, The Lady, or the Tiger? (1882)
   ================================================================ */
{
const TEXT = {
  title: "The Lady, or the Tiger?",
  intro: "Frank R. Stockton, 1882 (extract). In an ancient kingdom, a semi-barbaric king judges the accused in a public arena. The accused must open one of two identical doors: behind one waits a hungry tiger, behind the other a lady he must marry at once. The king has discovered that a young courtier loves his daughter, the princess.",
  paras: [
    "The appointed day arrived. From far and near the people gathered, and thronged the great galleries of the arena, and crowds, unable to gain admittance, massed themselves against its outside walls. The king and his court were in their places, opposite the twin doors, those fateful portals, so terrible in their similarity.",
    "All was ready. The signal was given. A door beneath the royal party opened, and the lover of the princess walked into the arena. Tall, beautiful, fair, his appearance was greeted with a low hum of admiration and anxiety. Half the audience had not known so grand a youth had lived among them. No wonder the princess loved him! What a terrible thing for him to be there!",
    "As the youth advanced into the arena he turned, as the custom was, to bow to the king, but he did not think at all of that royal personage. His eyes were fixed upon the princess, who sat to the right of her father. Had it not been for the moiety of barbarism in her nature it is probable that lady would not have been there, but her intense and fervid soul would not allow her to be absent on an occasion in which she was so terribly interested. From the moment that the decree had gone forth that her lover should decide his fate in the king’s arena, she had thought of nothing, night or day, but this great event and the various subjects connected with it. Possessed of more power, influence, and force of character than any one who had ever before been interested in such a case, she had done what no other person had done – she had possessed herself of the secret of the doors. She knew in which of the two rooms, that lay behind those doors, stood the cage of the tiger, with its open front, and in which waited the lady. Through these thick doors, heavily curtained with skins on the inside, it was impossible that any noise or suggestion should come from within to the person who should approach to raise the latch of one of them. But gold, and the power of a woman’s will, had brought the secret to the princess.",
    "And not only did she know in which room stood the lady ready to emerge, all blushing and radiant, should her door be opened, but she knew who the lady was. It was one of the fairest and loveliest of the damsels of the court who had been selected as the reward of the accused youth, should he be proved innocent of the crime of aspiring to one so far above him; and the princess hated her. Often had she seen, or imagined that she had seen, this fair creature throwing glances of admiration upon the person of her lover, and sometimes she thought these glances were perceived, and even returned. Now and then she had seen them talking together; it was but for a moment or two, but much can be said in a brief space; it may have been on most unimportant topics, but how could she know that? The girl was lovely, but she had dared to raise her eyes to the loved one of the princess; and, with all the intensity of the savage blood transmitted to her through long lines of wholly barbaric ancestors, she hated the woman who blushed and trembled behind that silent door.",
    "When her lover turned and looked at her, and his eye met hers as she sat there, paler and whiter than anyone in the vast ocean of anxious faces about her, he saw, by that power of quick perception which is given to those whose souls are one, that she knew behind which door crouched the tiger, and behind which stood the lady. He had expected her to know it. He understood her nature, and his soul was assured that she would never rest until she had made plain to herself this thing, hidden to all other lookers-on, even to the king. The only hope for the youth in which there was any element of certainty was based upon the success of the princess in discovering this mystery; and the moment he looked upon her, he saw she had succeeded, as in his soul he knew she would succeed.",
    "Then it was that his quick and anxious glance asked the question: “Which?” It was as plain to her as if he shouted it from where he stood. There was not an instant to be lost. The question was asked in a flash; it must be answered in another.",
    "Her right arm lay on the cushioned parapet before her. She raised her hand, and made a slight, quick movement toward the right. No one but her lover saw her. Every eye but his was fixed on the man in the arena.",
    "He turned, and with a firm and rapid step he walked across the empty space. Every heart stopped beating, every breath was held, every eye was fixed immovably upon that man. Without the slightest hesitation, he went to the door on the right, and opened it.",
    "Now, the point of the story is this: Did the tiger come out of that door, or did the lady?",
    "The more we reflect upon this question, the harder it is to answer. It involves a study of the human heart which leads us through devious mazes of passion, out of which it is difficult to find our way. Think of it, fair reader, not as if the decision of the question depended upon yourself, but upon that hot-blooded, semi-barbaric princess, her soul at a white heat beneath the combined fires of despair and jealousy. She had lost him, but who should have him?",
    "How often, in her waking hours and in her dreams, had she started in wild horror, and covered her face with her hands as she thought of her lover opening the door on the other side of which waited the cruel fangs of the tiger! But how much oftener had she seen him at the other door! How in her grievous reveries had she gnashed her teeth, and torn her hair, when she saw his start of rapturous delight as he opened the door of the lady! How her soul had burned in agony when she had seen him rush to meet that woman, with her flushing cheek and sparkling eye of triumph; when she had seen him lead her forth, his whole frame kindled with the joy of recovered life; when she had heard the glad shouts from the multitude, and the wild ringing of the happy bells; when she had seen the priest, with his joyous followers, advance to the couple, and make them man and wife before her very eyes; and when she had seen them walk away together upon their path of flowers, followed by the tremendous shouts of the hilarious multitude, in which her one despairing shriek was lost and drowned!",
    "Would it not be better for him to die at once, and go to wait for her in the blessed regions of semi-barbaric futurity? And yet, that awful tiger, those shrieks, that blood!",
    "Her decision had been indicated in an instant, but it had been made after days and nights of anguished deliberation. She had known she would be asked, she had decided what she would answer, and, without the slightest hesitation, she had moved her hand to the right.",
    "The question of her decision is one not to be lightly considered, and it is not for me to presume to set myself up as the one person able to answer it. And so I leave it with all of you: Which came out of the opened door – the lady, or the tiger?"
  ]
};

const ANNOTATE = [
  {
    skill: "Word choice",
    prompt: "Find the phrase that makes two <em>identical doors</em> sound frightening.",
    target: ["those fateful portals, so terrible in their similarity"],
    decoys: [{ phrase: "the twin doors", why: "This names the doors plainly. The frightening description comes straight after it." }],
    miss: "Look at the end of the first paragraph.",
    explain: "“Fateful” means they decide a man’s fate, and “portals” sounds grander and more ominous than “doors”. The strangest part is “terrible in their similarity”: what makes them frightening is that nothing tells them apart."
  },
  {
    skill: "Direct address",
    prompt: "Find <em>one</em> place where the narrator speaks directly to the reader.",
    target: ["Think of it, fair reader", "And so I leave it with all of you"],
    decoys: [{ phrase: "Now, the point of the story is this", why: "The narrator is commenting on the story here, but not speaking to the reader as “you”. Look a little further on." }],
    miss: "Look for the words “reader” or “you” near the end of the story.",
    explain: "The narrator steps out of the story and talks to us. This pulls the reader into the princess’s dilemma and prepares us for the ending, where we must make the decision ourselves."
  },
  {
    skill: "Metaphor",
    prompt: "Find the metaphor that shows the princess’s emotions <em>burning</em> inside her.",
    target: ["the combined fires of despair and jealousy"],
    decoys: [{ phrase: "the vast ocean of anxious faces", why: "A metaphor, but it describes the crowd, not the princess’s feelings." }],
    miss: "Look in the paragraph that begins “The more we reflect upon this question”.",
    explain: "Despair and jealousy become two fires heating her soul “at a white heat”. The image suggests emotions so intense they could lead her to something destructive."
  },
  {
    skill: "Key moment",
    prompt: "Find the <em>tiny action</em> on which the whole story turns.",
    target: ["made a slight, quick movement toward the right"],
    decoys: [{ phrase: "he went to the door on the right, and opened it", why: "That is the youth’s action. The question asks for the princess’s signal that decides it." }],
    miss: "Look at the princess’s hand on the parapet.",
    explain: "After pages of build-up, everything depends on one small gesture that only the lover sees. “Slight” and “quick” contrast with the huge consequences, which makes the moment gripping."
  }
];

const QUESTIONS = [
  {
    skill: "Narrator",
    q: "What kind of narrator tells this story?",
    opts: [
      { t: "A third-person narrator who comments and talks to the reader", ok: true, why: "Right. The narrator describes all the characters from outside, adds opinions and even speaks to the “fair reader”." },
      { t: "The princess, telling the story of her own terrible choice", why: "The princess is called “she”. She never narrates in the first person." },
      { t: "The youth, remembering the day he walked into the arena", why: "The youth is described as “he”, and the story reaches into the princess’s private thoughts, which he couldn’t know." },
      { t: "A neutral narrator who reports events and never gives opinions", why: "The narrator gives plenty of opinions, from “No wonder the princess loved him!” to refusing to judge the ending." }
    ]
  },
  {
    skill: "Inference",
    q: "Why does the youth trust the princess to guide him?",
    opts: [
      { t: "He knows she would never rest until she discovered the secret", ok: true, why: "Right. “He understood her nature” and “had expected her to know it”. His hope rests on her determination." },
      { t: "She told him the answer the night before the trial began", why: "There is no meeting before the trial. The question “Which?” is asked with a glance in the arena." },
      { t: "The king gave him a secret hint about the doors earlier", why: "The king takes “aesthetic pleasure” in the trial. He would never help the youth." },
      { t: "He has no reason to trust her and simply guesses a door", why: "He walks “without the slightest hesitation”, which shows he trusts her signal completely." }
    ]
  },
  
  {
    skill: "Effect of structure",
    q: "What is the effect of the long sentence beginning “How her soul had burned in agony”?",
    opts: [
      { t: "It piles up images of the wedding until her jealousy feels overwhelming", ok: true, why: "Right. Clause after clause adds the lady’s triumph, the bells, the priest, the flowers. The reader feels the pain building, which pushes us to suspect the tiger." },
      { t: "It describes a real wedding that happened before the trial began", why: "These are scenes she has imagined “in her grievous reveries”. None of it has happened." },
      { t: "It slows the story down so that the reader can relax for a moment", why: "It is full of agony and despair. It increases tension rather than letting the reader relax." },
      { t: "It shows how happy the princess feels about her lover’s future", why: "Her “despairing shriek” shows the opposite. The images torture her." }
    ]
  },
  {
    skill: "Characterisation",
    q: "Why does the narrator keep calling the princess “semi-barbaric”?",
    opts: [
      { t: "She is half civilised, half wild, so we can’t predict her choice", ok: true, why: "Right. A civilised side might save him; a “barbaric” side might choose jealousy and blood. The label keeps both possibilities open." },
      { t: "It shows she is completely savage and would always choose the tiger", why: "“Semi” means half. The narrator deliberately leaves her partly civilised." },
      { t: "It describes the unusual clothes and jewellery that she wears", why: "The word describes her nature and emotions, not her appearance." },
      { t: "It is simply a compliment about her beauty and her royal status", why: "It describes her “intense and fervid soul”, which is anything but a simple compliment." }
    ]
  },
  {
    skill: "Summary",
    q: "Which sentence best sums up what happens in this text?",
    opts: [
      { t: "The extract ends on the story's famous unanswered question, as the princess signals which door to open, leaving the reader to decide what came out.", ok: true, why: "Right. It covers the whole shape of the text, not just one part of it." },
      { t: "A huge crowd gathers inside the great arena to watch the accused man walk forward and open one of two identical doors. Other parts of the story focus on different details.", why: "True, but too narrow. It only covers part of the text and misses the main point." },
      { t: "The princess secretly saves her lover's life by revealing to him exactly which door the hungry tiger is hidden behind. The rest of the text develops in a different direction.", why: "Too broad. This adds a claim the text does not actually make or support." },
      { t: "The princess hates the lady behind one of the two doors because she is bitterly jealous of how the girl looks at her lover. The story continues well beyond this particular moment.", why: "A real detail, but a minor one. It is not what the text is mainly about." }
    ]
  }
];

const EVIDENCE = [
  {
    quote: "No wonder the princess loved him!",
    opts: [
      { t: "The narrator shares the crowd’s admiration for the youth", ok: true, why: "Right. The exclamation echoes what the audience is thinking as they see him for the first time." },
      { t: "The princess announced her love to the crowd", why: "Nobody announces anything. The exclamation is the narrator’s comment." },
      { t: "Everyone in the arena is in love with the youth", why: "Overclaiming. The crowd admires him; it doesn’t prove they all love him." },
      { t: "The youth is the son of the king himself", why: "He is “of that fineness of blood and lowness of station”. He is a courtier, not a prince." }
    ]
  },
  {
    quote: "But gold, and the power of a woman’s will, had brought the secret to the princess.",
    opts: [
      { t: "The princess used bribery and sheer determination to learn the secret", ok: true, why: "Right. “Gold” suggests she paid someone, and “the power of a woman’s will” shows her refusal to give up." },
      { t: "The lady behind the door told the princess the secret", why: "The lady is the princess’s rival. Nothing suggests she told her anything." },
      { t: "The secret of the doors was known to everyone in the kingdom", why: "The secret was “hidden to all other lookers-on, even to the king”." },
      { t: "The king gave his daughter the secret because he loved her", why: "The king wants the trial to be decided by “chance”. He wouldn’t reveal it." }
    ]
  },
  {
    quote: "but it had been made after days and nights of anguished deliberation",
    opts: [
      { t: "Her quick signal was planned carefully, not decided on impulse", ok: true, why: "Right. The gesture took “an instant”, but the decision behind it took “days and nights”. It was not a snap judgement." },
      { t: "She chose the door randomly in the moment he looked at her", why: "The quote says the decision came from long deliberation, the opposite of random." },
      { t: "The decision was easy for her, and she hardly thought about it", why: "“Anguished” means painful. It was agonising, not easy." },
      { t: "She only started thinking about it when she saw him in the arena", why: "She “had known she would be asked” and decided long before." }
    ]
  }
];

const EXPLAIN = [
  {
    claim: "The crowd has mixed feelings about the youth.",
    quote: "a low hum of admiration and anxiety",
    opts: [
      { t: "“Admiration” and “anxiety” pull in opposite directions: they admire him yet fear for him. “Low hum” spreads the feeling quietly through the crowd.", ok: true, why: "Strong. It explains both nouns and the sound image, and links them to mixed feelings." },
      { t: "When the youth walks out into the arena, the people in the crowd make a quiet noise because they are all surprised to see such a handsome young man.", why: "Retelling. It never explains how “admiration and anxiety” show mixed feelings." },
      { t: "The writer uses alliteration in the phrase “admiration and anxiety”, repeating the letter a, which is a sound technique that makes the description stand out.", why: "It names a sound effect but ignores what the two words mean together." },
      { t: "This proves that everyone in the crowd secretly wants the youth to be eaten by the tiger, because they are anxious to see a bloody show in the arena.", why: "A misreading. Their anxiety is fear for him, alongside admiration." }
    ]
  },
  {
    claim: "The princess is torn between two unbearable outcomes.",
    quote: "And yet, that awful tiger, those shrieks, that blood!",
    opts: [
      { t: "I would never let someone I love be eaten by a tiger, so I think the princess must have chosen the lady, even if she was jealous.", why: "A personal answer to the question, not an explanation of how the words show she is torn." },
      { t: "The tiger comes out of the door and attacks the youth, and there is a lot of screaming and blood in the arena in front of the whole crowd.", why: "A misreading. This is what she imagines; the story never shows it happening." },
      { t: "“And yet” swings back just after she imagines him dead. Three short phrases list horrors one by one, showing she can’t bear either outcome.", ok: true, why: "Strong. It explains the turn in “And yet” and the effect of the list." },
      { t: "The writer uses an exclamation mark at the end of this sentence to show the reader that the princess is feeling strong emotions about the tiger.", why: "Vague. Which emotions, and how does the sentence show she is torn?" }
    ]
  },
  {
    claim: "The narrator refuses to take responsibility for the ending.",
    quote: "it is not for me to presume to set myself up as the one person able to answer it",
    opts: [
      { t: "The narrator does not know how the story ends because he forgot to find out what came out of the door before he started writing it down.", why: "A misreading. The refusal is deliberate, not forgetfulness." },
      { t: "The narrator claims it would be arrogant (“presume”) to answer. This polite refusal hands the decision to the reader, who must judge the princess.", ok: true, why: "Strong. It explains “presume” and the effect of handing over the choice." },
      { t: "The narrator says that he is not going to answer the question about which door the youth opened, and that the readers will have to do it.", why: "Retelling. It doesn’t explain how the language shows him avoiding responsibility." },
      { t: "The writer uses formal and old-fashioned language in the final paragraph of the story, which makes the ending sound serious and important.", why: "Style noted, but it doesn’t explain the claim." }
    ]
  },
  {
    claim: "The narrator makes the moment feel unbearably tense.",
    quote: "Every heart stopped beating, every breath was held",
    opts: [
      { t: "Repeating “every” spreads the tension across the whole crowd. Hearts stopping is an exaggeration that freezes time just as the door is opened.", ok: true, why: "Strong. It explains the repetition and the exaggeration, and links both to tension." },
      { t: "The people in the crowd are so shocked that their hearts really stop beating and some of them faint in the galleries while the youth walks to the door.", why: "A literal misreading of an exaggeration." },
      { t: "Everyone in the arena watches the youth closely and waits nervously to see which of the two doors he is going to open in front of them all.", why: "Retelling. How do the words create tension?" },
      { t: "The writer uses repetition in this sentence to make the writing more interesting and exciting for the people who are reading the story.", why: "“More interesting” is not an effect. Explain what the repetition does." }
    ]
  }
];

const COLLECT = [
  {
    claim: "The story ends without ever telling us what came out of the door.",
    opts: [
      { t: "Which came out of the opened door – the lady, or the tiger?", ok: true, why: "Right. The story stops on this unanswered question and leaves the reader to decide." },
      { t: "he went to the door on the right, and opened it", why: "This is the moment he opens the door, but the story stops here without showing the result." },
      { t: "she had moved her hand to the right", why: "This is the princess’s secret signal, not the withheld outcome." },
      { t: "it was impossible that any noise or suggestion should come from within", why: "This describes the silent, sealed doors, not the ending the narrator refuses to give." }
    ]
  },
  {
    claim: "The narrator hints the princess’s jealousy may not even be justified.",
    opts: [
      { t: "Often had she seen, or imagined that she had seen", ok: true, why: "Right. Correcting “seen” to “imagined that she had seen” plants doubt about whether the lady is really guilty." },
      { t: "the princess hated her", why: "This states the hatred plainly, but not the narrator’s hint that it may be unfounded." },
      { t: "she had dared to raise her eyes to the loved one of the princess", why: "This gives the supposed offence as if it were certain fact, not as doubtful." },
      { t: "with all the intensity of the savage blood transmitted to her", why: "This describes her fierce nature, not any doubt about her jealousy." }
    ]
  },
  {
    claim: "The youth trusts the princess completely to guide his choice.",
    target: ["he saw she had succeeded, as in his soul he knew she would succeed"],
    decoys: [{ phrase: "No one but her lover saw her", why: "This tells us only he saw her signal, not that he trusts her judgement. Look for where he is certain she has succeeded." }],
    miss: "Look at the paragraph where their eyes meet in the arena.",
    explain: "Even before he looks, “in his soul he knew she would succeed”. His only hope rests entirely on her determination to uncover the secret."
  },
  {
    claim: "The whole crowd is frozen with tension as he walks to the door.",
    target: ["every eye was fixed immovably upon that man"],
    decoys: [{ phrase: "walked across the empty space", why: "This describes him crossing to the door, not the crowd frozen in tension. Look for what every eye is doing." }],
    miss: "Look at the paragraph where he walks to the door.",
    explain: "“Every eye … fixed immovably” freezes the whole crowd on one man. Nobody moves, which makes the moment before the door opens feel unbearably tense."
  }
];
TEXTS.push({ id: "lady-or-tiger", type: "Fiction", mode: "Creative", form: "Short story (extract)", level: "5ème",
  hook: "Two doors. A tiger or a bride. And a princess who knows which is which.",
  TEXT, ANNOTATE, QUESTIONS, EVIDENCE, EXPLAIN, COLLECT });
}

/* ================================================================
   TEXT 14 · Fiction · Creative · Horror short story (extract) · 5ème
   W. W. Jacobs, The Monkey's Paw (1902), Part III
   ================================================================ */
{
const TEXT = {
  title: "The Monkey’s Paw",
  intro: "W. W. Jacobs, 1902 (Part III). Mr and Mrs White were given a magic monkey’s paw that grants three wishes, with a warning that it brings disaster. Mr White wished for two hundred pounds. The next day their son, Herbert, was killed in an accident at work, and the company paid them two hundred pounds.",
  paras: [
    "In the huge new cemetery, some two miles distant, the old people buried their dead, and came back to a house steeped in shadow and silence. It was all over so quickly that at first they could hardly realize it, and remained in a state of expectation as though of something else to happen – something else which was to lighten this load, too heavy for old hearts to bear. But the days passed, and expectation gave place to resignation – the hopeless resignation of the old, sometimes miscalled, apathy. Sometimes they hardly exchanged a word, for now they had nothing to talk about, and their days were long to weariness.",
    "It was about a week after that that the old man, waking suddenly in the night, stretched out his hand and found himself alone. The room was in darkness, and the sound of subdued weeping came from the window. He raised himself in bed and listened.",
    "“Come back,” he said tenderly. “You will be cold.”",
    "“It is colder for my son,” said the old woman, and wept afresh.",
    "The sound of her sobs died away on his ears. The bed was warm, and his eyes heavy with sleep. He dozed fitfully, and then slept until a sudden wild cry from his wife awoke him with a start.",
    "“The paw!” she cried wildly. “The monkey’s paw!”",
    "He started up in alarm. “Where? Where is it? What’s the matter?”",
    "She came stumbling across the room toward him. “I want it,” she said quietly. “You’ve not destroyed it?”",
    "“It’s in the parlour, on the bracket,” he replied, marvelling. “Why?”",
    "She cried and laughed together, and bending over, kissed his cheek. “I only just thought of it,” she said hysterically. “Why didn’t I think of it before? Why didn’t you think of it?”",
    "“Think of what?” he questioned.",
    "“The other two wishes,” she replied rapidly. “We’ve only had one.”",
    "“Was not that enough?” he demanded fiercely.",
    "“No,” she cried, triumphantly; “we’ll have one more. Go down and get it quickly, and wish our boy alive again.”",
    "The man sat up in bed and flung the bedclothes from his quaking limbs. “Good God, you are mad!” he cried aghast.",
    "“Get it,” she panted; “get it quickly, and wish – Oh, my boy, my boy!”",
    "Her husband struck a match and lit the candle. “Get back to bed,” he said, unsteadily. “You don’t know what you are saying.”",
    "“We had the first wish granted,” said the old woman, feverishly; “why not the second.”",
    "“A coincidence,” stammered the old man.",
    "“Go and get it and wish,” cried the old woman, quivering with excitement.",
    "The old man turned and regarded her, and his voice shook. “He has been dead ten days, and besides he – I would not tell you else, but – I could only recognize him by his clothing. If he was too terrible for you to see then, how now?”",
    "“Bring him back,” cried the old woman, and dragged him toward the door. “Do you think I fear the child I have nursed?”",
    "He went down in the darkness, and felt his way to the parlour, and then to the mantelpiece. The talisman was in its place, and a horrible fear that the unspoken wish might bring his mutilated son before him ere he could escape from the room seized upon him, and he caught his breath as he found that he had lost the direction of the door. His brow cold with sweat, he felt his way round the table, and groped along the wall until he found himself in the small passage with the unwholesome thing in his hand.",
    "Even his wife’s face seemed changed as he entered the room. It was white and expectant, and to his fears seemed to have an unnatural look upon it. He was afraid of her.",
    "“Wish!” she cried, in a strong voice.",
    "“It is foolish and wicked,” he faltered.",
    "“Wish!” repeated his wife.",
    "He raised his hand. “I wish my son alive again.”",
    "The talisman fell to the floor, and he regarded it fearfully. Then he sank trembling into a chair as the old woman, with burning eyes, walked to the window and raised the blind.",
    "He sat until he was chilled with the cold, glancing occasionally at the figure of the old woman peering through the window. The candle end, which had burnt below the rim of the china candlestick, was throwing pulsating shadows on the ceiling and walls, until, with a flicker larger than the rest, it expired. The old man, with an unspeakable sense of relief at the failure of the talisman, crept back to his bed, and a minute or two afterward the old woman came silently and apathetically beside him.",
    "Neither spoke, but both lay silently listening to the ticking of the clock. A stair creaked, and a squeaky mouse scurried noisily through the wall. The darkness was oppressive, and after lying for some time screwing up his courage, the husband took the box of matches, and striking one, went downstairs for a candle.",
    "At the foot of the stairs the match went out, and he paused to strike another, and at the same moment a knock, so quiet and stealthy as to be scarcely audible, sounded on the front door.",
    "The matches fell from his hand. He stood motionless, his breath suspended until the knock was repeated. Then he turned and fled swiftly back to his room, and closed the door behind him. A third knock sounded through the house.",
    "“What’s that?” cried the old woman, starting up.",
    "“A rat,” said the old man, in shaking tones – “a rat. It passed me on the stairs.”",
    "His wife sat up in bed listening. A loud knock resounded through the house.",
    "“It’s Herbert!” she screamed. “It’s Herbert!”",
    "She ran to the door, but her husband was before her, and catching her by the arm, held her tightly.",
    "“What are you going to do?” he whispered hoarsely.",
    "“It’s my boy; it’s Herbert!” she cried, struggling mechanically. “I forgot it was two miles away. What are you holding me for? Let go. I must open the door.”",
    "“For God’s sake, don’t let it in,” cried the old man trembling.",
    "“You’re afraid of your own son,” she cried, struggling. “Let me go. I’m coming, Herbert; I’m coming.”",
    "There was another knock, and another. The old woman with a sudden wrench broke free and ran from the room. Her husband followed to the landing, and called after her appealingly as she hurried downstairs. He heard the chain rattle back and the bottom bolt drawn slowly and stiffly from the socket. Then the old woman’s voice, strained and panting.",
    "“The bolt,” she cried loudly. “Come down. I can’t reach it.”",
    "But her husband was on his hands and knees groping wildly on the floor in search of the paw. If he could only find it before the thing outside got in. A perfect fusillade of knocks reverberated through the house, and he heard the scraping of a chair as his wife put it down in the passage against the door. He heard the creaking of the bolt as it came slowly back, and at the same moment he found the monkey’s paw, and frantically breathed his third and last wish.",
    "The knocking ceased suddenly, although the echoes of it were still in the house. He heard the chair drawn back and the door opened. A cold wind rushed up the staircase, and a long loud wail of disappointment and misery from his wife gave him courage to run down to her side, and then to the gate beyond. The street lamp flickering opposite shone on a quiet and deserted road."
  ]
};

const ANNOTATE = [
  {
    skill: "Dialogue",
    prompt: "Find the reply showing the mother <em>cannot stop thinking about Herbert’s grave</em>.",
    target: ["It is colder for my son"],
    decoys: [{ phrase: "“Come back,” he said tenderly.", why: "That is Mr White’s gentle request. Look at how his wife answers." }],
    miss: "Find what Mrs White says when her husband tells her she will be cold.",
    explain: "Her husband worries she will be cold at the window; she thinks of Herbert lying in the cold ground. Six words reveal that her grief is constant and physical, and they set up her desperate wish."
  },
  {
    skill: "Word choice",
    prompt: "Find the phrase showing Mr White now sees the paw as <em>something evil</em>.",
    target: ["the unwholesome thing"],
    decoys: [{ phrase: "The talisman was in its place", why: "“Talisman” is a neutral name for a magic object. Look for how he describes it once it is in his hand." }],
    miss: "Look at the end of the paragraph where he fetches the paw in the dark.",
    explain: "“Unwholesome” suggests something unhealthy and corrupt, and “thing” refuses to give it a proper name. The paw has become something disgusting he doesn’t want to touch."
  },
  {
    skill: "Suspense",
    prompt: "Find the <em>first sound</em> suggesting something has come to the house.",
    target: ["a knock, so quiet and stealthy as to be scarcely audible"],
    decoys: [{ phrase: "A stair creaked, and a squeaky mouse scurried noisily", why: "These are ordinary night sounds. Look for the sound that stops Mr White in his tracks." }],
    miss: "Look at what happens when his match goes out at the foot of the stairs.",
    explain: "The knock is so quiet it is “scarcely audible”, and “stealthy” suggests something sneaking. Starting quietly lets the knocking grow louder and louder, building dread."
  },
  {
    skill: "Ending image",
    prompt: "Find the final image suggesting the <em>last wish</em> has worked.",
    target: ["a quiet and deserted road"],
    decoys: [{ phrase: "A cold wind rushed up the staircase", why: "This happens as the door opens, but it doesn’t show what is (or isn’t) outside. Look at the very last words." }],
    miss: "Read the last sentence of the story.",
    explain: "After all the knocking, the road is empty. Nothing is shown, so the reader must work out what Mr White wished for, and imagine what stood there a moment before."
  }
];

const QUESTIONS = [
  {
    skill: "Character",
    q: "How does Mrs White change in this part of the story?",
    opts: [
      { t: "From hopeless grief to wild, desperate hope", ok: true, why: "Right. She begins weeping in the dark, then suddenly cries “The paw!” and speaks “feverishly”, “triumphantly”, “quivering with excitement”." },
      { t: "From calm acceptance to anger at her husband", why: "She was never calm: she weeps at the window. Her main change is towards hope, not anger." },
      { t: "She stays exactly the same from beginning to end", why: "Her wild cry and the words “triumphantly” and “feverishly” show a dramatic change." },
      { t: "From joy about the money to boredom at home", why: "She is grieving, not joyful, and nothing suggests boredom." }
    ]
  },
  {
    skill: "Inference",
    q: "Why is Mr White so afraid of wishing Herbert alive?",
    opts: [
      { t: "Herbert was badly injured and has been dead ten days", ok: true, why: "Right. He “could only recognize him by his clothing”. Whatever comes back after ten days in the grave could be horrifying." },
      { t: "He is afraid his wife will be angry if the wish fails", why: "His fear is of the wish working, not failing. He feels “relief at the failure of the talisman”." },
      { t: "He is worried the paw will be lost or broken", why: "He wants rid of the paw. His fear is what it might bring." },
      { t: "He believes Herbert was a bad son", why: "Nothing suggests this. His fear is about Herbert’s body." }
    ]
  },
  {
    skill: "Technique",
    q: "What does the story never show the reader?",
    opts: [
      { t: "What was knocking on the other side of the door", ok: true, why: "Right. Jacobs never describes it. Leaving it unseen forces readers to imagine something worse than any description." },
      { t: "The monkey’s paw that grants the wishes", why: "The paw appears several times: on the bracket, in his hand, on the floor." },
      { t: "Mrs White’s reaction at the end of the story", why: "We hear her “long loud wail of disappointment and misery”." },
      { t: "The cemetery where Herbert has been buried", why: "The very first sentence mentions “the huge new cemetery”." }
    ]
  },
  {
    skill: "Theme",
    q: "What message does the story suggest?",
    opts: [
      { t: "Trying to change fate brings terrible consequences", ok: true, why: "Right. Each wish granted leads to disaster. The paw shows that interfering with fate is dangerous." },
      { t: "Having more money always makes a family happier", why: "The money arrives with Herbert’s death. The story shows the opposite." },
      { t: "You should always do what your mother tells you", why: "Following Mrs White’s wish leads to horror. The story doesn’t support this." },
      { t: "Magic objects are fun and completely harmless", why: "The paw causes death and terror. It is anything but harmless." }
    ]
  },
  {
    skill: "Summary",
    q: "Which sentence best sums up what happens in this text?",
    opts: [
      { t: "Grief-stricken over their son's death, the mother insists on using the paw's second wish to bring him back, and the story builds toward what they may have summoned.", ok: true, why: "Right. It covers the whole shape of the text, not just one part of it." },
      { t: "The mother wakes her husband suddenly in the middle of the night, insisting that the two of them use the paw again. It is mentioned only briefly, and is not the main focus.", why: "True, but too narrow. It only covers part of the text and misses the main point." },
      { t: "Their son returns home again completely unharmed, and the old couple live happily together for many more years. This is one part of a longer sequence of events in the story.", why: "Too broad. This adds a claim the text does not actually make or support." },
      { t: "The husband gently tells his wife that she will catch a chill if she keeps standing by the open window like that. Elsewhere in the text, different events take centre stage.", why: "A real detail, but a minor one. It is not what the text is mainly about." }
    ]
  }
];

const EVIDENCE = [
  {
    quote: "“Was not that enough?” he demanded fiercely.",
    opts: [
      { t: "Mr White blames the first wish for Herbert’s death", ok: true, why: "Right. “Enough” refers to the first wish, which brought money through Herbert’s death. His fierceness shows he connects the two." },
      { t: "Mr White wishes he had asked for more money", why: "He is horrified by the idea of another wish. “Fiercely” shows anger, not greed." },
      { t: "Mr White is angry his wife woke him up", why: "His anger is about the wishes, not being woken." },
      { t: "Mr White has forgotten about the first wish", why: "“Was not that enough?” shows he remembers it all too well." }
    ]
  },
  {
    quote: "with an unspeakable sense of relief at the failure of the talisman",
    opts: [
      { t: "Mr White never wanted the wish to work", ok: true, why: "Right. “Relief” shows he was dreading success. He only wished because his wife insisted." },
      { t: "Mr White is disappointed the wish didn’t work", why: "Relief is the opposite of disappointment." },
      { t: "The paw is now broken and can never work again", why: "The paw does work: the knocking comes later, and he uses the third wish." },
      { t: "Mrs White is relieved that nothing has happened", why: "The relief belongs to Mr White. She is at the window, hoping." }
    ]
  },
  {
    quote: "a long loud wail of disappointment and misery from his wife",
    opts: [
      { t: "Mrs White has opened the door to find no one there", ok: true, why: "Right. “Disappointment” shows the return she hoped for didn’t happen. The road outside is empty." },
      { t: "Mrs White has just seen a terrible monster at the door", why: "A monster would cause terror, not “disappointment”. And the road is deserted." },
      { t: "Mrs White has hurt herself on the chair in the passage", why: "Pain would not explain “disappointment”. The wail is about the empty doorway." },
      { t: "Mrs White is angry about the cold wind blowing in", why: "The wind is a detail of the door opening. Her wail is grief." }
    ]
  }
];

const EXPLAIN = [
  {
    claim: "Grief has left the couple without hope.",
    quote: "the hopeless resignation of the old, sometimes miscalled, apathy",
    opts: [
      { t: "The old couple are very sad after the funeral, and they sit in their quiet house day after day without talking much to each other.", why: "Retelling. It doesn’t explain “resignation” or “miscalled”." },
      { t: "“Resignation” means giving up, and “hopeless” deepens it. People wrongly call this “apathy”: the couple still care, but no longer have any hope.", ok: true, why: "Strong. It explains the key words and the narrator’s correction." },
      { t: "This shows the old couple do not care about Herbert any more, because the narrator uses the word apathy, which means not caring about anything.", why: "A misreading. The narrator says “apathy” is the wrong word for it." },
      { t: "The writer uses complicated vocabulary in this sentence, which makes the story sound old-fashioned and serious for readers today.", why: "An observation about style, not an explanation of the claim." }
    ]
  },
  {
    claim: "Mrs White’s hope borders on madness.",
    quote: "She cried and laughed together",
    opts: [
      { t: "Mrs White is happy because she has remembered the paw, and she is also crying because she misses Herbert, so she has two feelings at once.", why: "Partly right, but it stops before explaining what this reveals about her state of mind." },
      { t: "Crying and laughing at once are opposite emotions colliding. With “hysterically” soon after, it shows grief tipping into frantic, unstable hope.", ok: true, why: "Strong. It explains the contradiction and links it to other evidence." },
      { t: "The writer uses a contrast between crying and laughing, which is a technique that writers often use to make the reader think about a character.", why: "Too general. What does this contrast show about Mrs White?" },
      { t: "This proves that Mrs White has completely lost her mind and will never be able to think clearly or behave normally again for the rest of her life.", why: "Overclaiming. It shows extreme emotion now, not permanent madness." }
    ]
  },
  {
    claim: "Mr White is terrified as he fetches the paw.",
    quote: "His brow cold with sweat, he felt his way round the table",
    opts: [
      { t: "It is very cold in the house at night, so Mr White is shivering as he walks around the dark parlour looking for the monkey’s paw on the mantelpiece.", why: "A misreading. Cold sweat is caused by fear, not the temperature." },
      { t: "I would be scared walking around a dark room on my own at night too, especially if I thought my dead son might suddenly appear in front of me.", why: "A personal response. Explain Jacobs’ words instead." },
      { t: "Mr White goes downstairs in the dark to find the paw and has to feel his way around the furniture because he has not brought a candle with him.", why: "Retelling. It doesn’t explain how the words show terror." },
      { t: "Cold sweat is a physical sign of fear, and “felt his way” shows he is blind in the dark. The reader shares his terror of touching something unseen.", ok: true, why: "Strong. It explains two details and their effect on the reader." }
    ]
  },
  {
    claim: "The ending is chilling because of what it doesn’t show.",
    quote: "shone on a quiet and deserted road",
    opts: [
      { t: "The street lamp is on outside the house and there are no people walking along the road because it is the middle of the night and everyone is asleep.", why: "Retelling. It misses why the emptiness is chilling." },
      { t: "After all the knocking, the road is empty. The calm image is unsettling because the reader must imagine what was there moments before.", ok: true, why: "Strong. It contrasts the quiet with the knocking and explains the effect on the reader." },
      { t: "This proves that nobody was ever knocking at the door, and that Mrs White imagined the whole thing because she was so upset about her son.", why: "Overclaiming. Both of them heard the knocks; the story leaves it open." },
      { t: "The writer ends the story with a description of the setting, which is a common way to finish a short story and create an atmosphere.", why: "Too general. What atmosphere, and how?" }
    ]
  }
];

const COLLECT = [
  {
    claim: "Mr White is terrified of what might come back if he wishes his son alive.",
    opts: [
      { t: "I could only recognize him by his clothing.", ok: true, why: "Right. If his own father could not recognise his face, the injuries must have been horrific: that is what he dreads returning." },
      { t: "He has been dead ten days", why: "This tells us how long he has been dead, not how terrible he would be to see. Read the rest of the sentence." },
      { t: "Good God, you are mad!", why: "This is his shock at her plan, not the reason his son would be terrible to see." },
      { t: "It is foolish and wicked", why: "This is his moral objection to the wish, not his fear of the body coming back." }
    ]
  },
  {
    claim: "The knocking grows from almost nothing into an overwhelming assault.",
    opts: [
      { t: "A perfect fusillade of knocks reverberated through the house", ok: true, why: "Right. A “fusillade” is a burst of gunfire, so the knocking has built to a violent, overwhelming peak." },
      { t: "A loud knock resounded through the house", why: "This is a single loud knock partway through, not the overwhelming burst at the peak." },
      { t: "A stair creaked, and a squeaky mouse scurried noisily", why: "These are ordinary night sounds, not the knocking at all." },
      { t: "after lying for some time screwing up his courage, the husband took the box of matches", why: "This is Mr White nerving himself to go downstairs, not the knocking." }
    ]
  },
  {
    claim: "The house feels soaked in grief when the couple return from the funeral.",
    target: ["a house steeped in shadow and silence"],
    decoys: [{ phrase: "their days were long to weariness", why: "This shows their empty grief in the days that follow, but the claim is about the house as they come home. Look at the end of the first sentence." }],
    miss: "Look at the end of the first sentence, as they come home.",
    explain: "“Steeped” means soaked through, like tea in water. The house is soaked in “shadow and silence”, so grief seems to fill every room. The soft “s” sounds add to the hush."
  },
  {
    claim: "Mr White is desperate to stop the door from being opened.",
    target: ["For God’s sake, don’t let it in"],
    decoys: [{ phrase: "It’s my boy; it’s Herbert!", why: "This is Mrs White’s certainty that their son has returned, the opposite of wanting the door shut. Look for what the old man cries." }],
    miss: "Look at the struggle at the door, near the end.",
    explain: "While his wife cries out for Herbert, the old man begs “don’t let it in”. His terror of what may be outside makes him fight to keep the door shut."
  }
];
TEXTS.push({ id: "monkeys-paw", type: "Fiction", mode: "Creative", form: "Horror story (extract)", level: "5ème",
  hook: "Three wishes. One dead son. And a knock at the door in the middle of the night.",
  TEXT, ANNOTATE, QUESTIONS, EVIDENCE, EXPLAIN, COLLECT });
}

/* ================================================================
   TEXT 15 · Fiction · Creative · Short story (extract) · 5ème
   Katherine Mansfield, Miss Brill (1920), ending
   ================================================================ */
{
const TEXT = {
  title: "Miss Brill",
  intro: "Katherine Mansfield, 1920 (final part). Every Sunday, Miss Brill, a lonely woman who teaches English, sits in the Jardins Publiques (public gardens) of a French town. She wears her old fur necklet and watches the people around her while the band plays.",
  paras: [
    "Oh, how fascinating it was! How she enjoyed it! How she loved sitting here, watching it all! It was like a play. It was exactly like a play. Who could believe the sky at the back wasn’t painted? But it wasn’t till a little brown dog trotted on solemn and then slowly trotted off, like a little “theatre” dog, a little dog that had been drugged, that Miss Brill discovered what it was that made it so exciting. They were all on the stage. They weren’t only the audience, not only looking on; they were acting. Even she had a part and came every Sunday. No doubt somebody would have noticed if she hadn’t been there; she was part of the performance after all. How strange she’d never thought of it like that before! And yet it explained why she made such a point of starting from home at just the same time each week – so as not to be late for the performance – and it also explained why she had quite a queer, shy feeling at telling her English pupils how she spent her Sunday afternoons. No wonder! Miss Brill nearly laughed out loud. She was on the stage.",
    "She thought of the old invalid gentleman to whom she read the newspaper four afternoons a week while he slept in the garden. She had got quite used to the frail head on the cotton pillow, the hollowed eyes, the open mouth and the high pinched nose. If he’d been dead she mightn’t have noticed for weeks; she wouldn’t have minded. But suddenly he knew he was having the paper read to him by an actress! “An actress!” The old head lifted; two points of light quivered in the old eyes. “An actress – are ye?” And Miss Brill smoothed the newspaper as though it were the manuscript of her part and said gently: “Yes, I have been an actress for a long time.”",
    "The band had been having a rest. Now they started again. And what they played was warm, sunny, yet there was just a faint chill – a something, what was it? – not sadness – no, not sadness – a something that made you want to sing. The tune lifted, lifted, the light shone; and it seemed to Miss Brill that in another moment all of them, all the whole company, would begin singing. The young ones, the laughing ones who were moving together, they would begin, and the men’s voices, very resolute and brave, would join them. And then she too, she too, and the others on the benches – they would come in with a kind of accompaniment – something low, that scarcely rose or fell, something so beautiful – moving… And Miss Brill’s eyes filled with tears and she looked smiling at all the other members of the company. Yes, we understand, we understand, she thought – though what they understood she didn’t know.",
    "Just at that moment a boy and girl came and sat down where the old couple had been. They were beautifully dressed; they were in love. The hero and heroine, of course, just arrived from his father’s yacht. And still soundlessly singing, still with that trembling smile, Miss Brill prepared to listen.",
    "“No, not now,” said the girl. “Not here, I can’t.”",
    "“But why? Because of that stupid old thing at the end there?” asked the boy. “Why does she come here at all – who wants her? Why doesn’t she keep her silly old mug at home?”",
    "“It’s her fu-ur which is so funny,” giggled the girl. “It’s exactly like a fried whiting.”",
    "“Ah, be off with you!” said the boy in an angry whisper. Then: “Tell me, ma petite chère –”",
    "“No, not here,” said the girl. “Not yet.”",
    "On her way home she usually bought a slice of honey-cake at the baker’s. It was her Sunday treat. Sometimes there was an almond in her slice, sometimes not. It made a great difference. If there was an almond it was like carrying home a tiny present – a surprise – something that might very well not have been there. She hurried on the almond Sundays and struck the match for the kettle in quite a dashing way.",
    "But to-day she passed the baker’s by, climbed the stairs, went into the little dark room – her room like a cupboard – and sat down on the red eiderdown. She sat there for a long time. The box that the fur came out of was on the bed. She unclasped the necklet quickly; quickly, without looking, laid it inside. But when she put the lid on she thought she heard something crying."
  ]
};

const ANNOTATE = [
  {
    skill: "Short sentences",
    prompt: "Find the short sentence where Miss Brill decides the park is a <em>performance</em>.",
    target: ["It was exactly like a play.", "It was like a play."],
    decoys: [{ phrase: "Who could believe the sky at the back wasn’t painted?", why: "This builds the theatre idea, but it is a question about the scenery. Look for the short sentence where she states it outright." }],
    miss: "Look near the start of the first paragraph.",
    explain: "“It was like a play” is repeated and strengthened to “exactly like a play”. The short, excited sentences show her delight as the idea takes hold, an idea the story will later destroy."
  },
  {
    skill: "Simile",
    prompt: "Find the <em>cruel simile</em> the girl uses about Miss Brill’s fur.",
    target: ["exactly like a fried whiting"],
    decoys: [{ phrase: "like a little “theatre” dog", why: "That simile is Miss Brill’s own, from her happy imagining. Look for the girl’s insult." }],
    miss: "Find what the girl says, giggling, about the fur.",
    explain: "A fried whiting is a cheap fish, brown and scaly. The girl turns Miss Brill’s treasured fur into something ridiculous and a bit disgusting, and the phrase “exactly like” echoes Miss Brill’s own “exactly like a play”, which makes it crueller."
  },
  {
    skill: "Simile",
    prompt: "Find the simile showing how <em>small and dark</em> Miss Brill’s real life is.",
    target: ["her room like a cupboard"],
    decoys: [{ phrase: "went into the little dark room", why: "This describes the room directly. The comparison comes straight after." }],
    miss: "Look at the last paragraph, when she gets home.",
    explain: "A cupboard is cramped, dark and used for storing things out of sight. The simile suggests Miss Brill herself has been put away, far from the bright “stage” of the park."
  },
  {
    skill: "Ending",
    prompt: "Find the final phrase where Miss Brill’s sadness seems to <em>belong to something else</em>.",
    target: ["she thought she heard something crying"],
    decoys: [{ phrase: "She sat there for a long time.", why: "This shows her shock, but not the displaced sadness. Look at the very last words." }],
    miss: "Read the last sentence of the story.",
    explain: "Mansfield never says Miss Brill cries. Instead, “something” is crying, as if the sadness belongs to the fur in its box. It suggests she cannot admit her own pain, even to herself."
  }
];

const QUESTIONS = [
  {
    skill: "Point of view",
    q: "How is this story narrated?",
    opts: [
      { t: "In the third person, closely following Miss Brill’s thoughts", ok: true, why: "Right. The narrator uses “she”, but we hear her excited thoughts directly: “Oh, how fascinating it was!” We see the world as she sees it." },
      { t: "In the first person, by Miss Brill herself", why: "The story uses “she” and “Miss Brill”, not “I”." },
      { t: "By an all-knowing narrator who explains what every single character in the park thinks", why: "We only enter Miss Brill’s mind. We never learn what the couple or others think." },
      { t: "By the young boy who insults Miss Brill while sitting on the bench beside her", why: "The boy is a minor character described from outside." }
    ]
  },
  {
    skill: "Irony",
    q: "Miss Brill thinks the young couple are “The hero and heroine, of course”. Why is this ironic?",
    opts: [
      { t: "She casts them as heroes, but they turn out to be cruel to her", ok: true, why: "Right. She expects the “hero and heroine” of her play; instead they mock her and destroy her dream. The reader sees the gap between her hopes and reality." },
      { t: "They really are professional actors performing in the gardens", why: "They are an ordinary couple. The “play” exists only in Miss Brill’s imagination." },
      { t: "She already knows them well from her English lessons at school", why: "Nothing suggests she knows them. She invents a story about them on the spot." },
      { t: "The narrator is making fun of the boy for owning a yacht", why: "The yacht is Miss Brill’s invention (“of course”), part of her imagined story." }
    ]
  },
  
  {
    skill: "Mood",
    q: "How does the mood change across the extract?",
    opts: [
      { t: "From joyful, almost magical, to hurt and silent", ok: true, why: "Right. She is “fascinating” and nearly singing, then after the insult she sits alone in her dark room without a word." },
      { t: "From angry and bitter at the start to calm and peaceful by the end of the day", why: "She begins delighted, not angry, and ends in sorrow, not peace." },
      { t: "From bored and lonely to excited and hopeful about the future", why: "The reverse. Her excitement comes first; the loneliness is revealed at the end." },
      { t: "The mood stays cheerful from beginning to end", why: "The last paragraph, with the dark room and crying, is anything but cheerful." }
    ]
  },
  {
    skill: "Purpose of a detail",
    q: "Why does Mansfield describe the almond in the honey-cake?",
    opts: [
      { t: "It shows how tiny pleasures fill her life, so losing them hurts", ok: true, why: "Right. An almond “made a great difference” and felt like “a tiny present”. Such small joys make her empty evening more painful." },
      { t: "It explains that Miss Brill secretly works as a baker in the town during the rest of the week", why: "She teaches English and reads to an invalid. She buys the cake." },
      { t: "It warns readers that Miss Brill is allergic to nuts", why: "The almond is a delight to her, not a danger." },
      { t: "It gives the reader a traditional recipe for making honey-cake at home", why: "No ingredients or method are given. The detail is about her feelings." }
    ]
  },
  {
    skill: "Summary",
    q: "Which sentence best sums up what happens in this text?",
    opts: [
      { t: "Miss Brill delights in feeling part of the performance of Sunday life in the gardens, but her happiness collapses when a young couple mock her fur.", ok: true, why: "Right. It covers the whole shape of the text, not just one part of it." },
      { t: "Miss Brill imagines happily that everyone sitting quietly in the public gardens around her is really an actor in a play. Other parts of the story focus on different details.", why: "True, but too narrow. It only covers part of the text and misses the main point." },
      { t: "Miss Brill decides there and then that she will never set foot in the public gardens again after this one difficult Sunday. The rest of the text develops in a different direction.", why: "Too broad. This adds a claim the text does not actually make or support." },
      { t: "Miss Brill reads the newspaper aloud to an old invalid gentleman for four afternoons every single week of the year. The story continues well beyond this particular moment.", why: "A real detail, but a minor one. It is not what the text is mainly about." }
    ]
  }
];

const EVIDENCE = [
  {
    quote: "Miss Brill’s eyes filled with tears and she looked smiling at all the other members of the company",
    opts: [
      { t: "In this moment she feels a deep sense of belonging", ok: true, why: "Right. Tears and a smile together show she is moved, imagining herself part of “the company”." },
      { t: "She is crying because she feels lonely and sad", why: "She is smiling and feels they “understand”. These are tears of emotion and happiness." },
      { t: "Someone in the gardens has just been unkind to her", why: "The insult comes after this moment. Here she is still happy." },
      { t: "The cold wind is making her eyes water", why: "The context is the music and her feelings, not the weather." }
    ]
  },
  {
    quote: "Why doesn’t she keep her silly old mug at home?",
    opts: [
      { t: "The couple see Miss Brill as unwanted and ridiculous", ok: true, why: "Right. “Mug” is slang for face, and “silly old” adds contempt. They want her gone." },
      { t: "The young couple don’t notice Miss Brill sitting at the end of the bench at all", why: "They are talking directly about her. They notice her and mock her." },
      { t: "The boy is joking kindly about Miss Brill to make the girl laugh", why: "“Stupid old thing” and “who wants her?” are cruel, not kind." },
      { t: "Miss Brill has brought a cup to the gardens", why: "“Mug” is slang for face here, not a cup." }
    ]
  },
  {
    quote: "She unclasped the necklet quickly; quickly, without looking, laid it inside.",
    opts: [
      { t: "She can’t bear to look at the fur now that it has been mocked", ok: true, why: "Right. The repeated “quickly” and “without looking” show she wants it out of sight, the opposite of how she lovingly brushed it before." },
      { t: "She is in a hurry because she wants to go straight back out again for her Sunday treat", why: "She “sat there for a long time”. She isn’t going anywhere." },
      { t: "The fur is dirty and needs to be cleaned before she wears it next Sunday", why: "Nothing suggests dirt. Her haste is about the insult." },
      { t: "She is proud of her fur and wants to keep it safe", why: "Not looking at it suggests shame, not pride." }
    ]
  }
];

const EXPLAIN = [
  {
    claim: "Miss Brill imagines herself as important.",
    quote: "she was part of the performance after all",
    opts: [
      { t: "Miss Brill thinks that everyone in the park is an actor in a play, including herself, because she comes to the gardens every single Sunday afternoon.", why: "Retelling. It doesn’t explain what the words reveal about her need to feel important." },
      { t: "This proves that Miss Brill is the most important person in the whole park, and that the band would stop playing if she didn’t turn up on a Sunday.", why: "Overclaiming. The quote shows what she believes, not what is true." },
      { t: "“Part of the performance” gives her a role, not just a seat. “After all” sounds like she is reassuring herself, hinting how much she needs to belong.", ok: true, why: "Strong. It explains both phrases and what they reveal." },
      { t: "The writer uses the idea of a performance in this part of the story to create an effect on the reader and to make the park sound more interesting.", why: "Vague. What effect, and what does it show about Miss Brill?" }
    ]
  },
  {
    claim: "Miss Brill’s happiness is fragile.",
    quote: "not sadness – no, not sadness",
    opts: [
      { t: "Miss Brill feels happy while she listens to the music, and she tells herself that she is definitely not feeling sad at all during this part of the afternoon.", why: "Retelling. It takes her denial at face value instead of analysing it." },
      { t: "She rejects “sadness” twice, which only draws attention to it. The repetition hints sadness is already there, beneath her happiness.", ok: true, why: "Strong. It explains the effect of repeating a denial." },
      { t: "The writer uses repetition here, which is a language technique that writers use to emphasise words and make them stand out for the reader.", why: "Technique named, but what does repeating “not sadness” suggest?" },
      { t: "This shows Miss Brill is the saddest person in the story and has been crying all afternoon while she listens to the band playing in the gardens.", why: "A misreading. She is happy here; the sadness is hidden." }
    ]
  },
  {
    claim: "Miss Brill’s home life is bleak.",
    quote: "her room like a cupboard",
    opts: [
      { t: "Miss Brill lives in a very small room at the top of some stairs, and it is dark inside because it doesn’t have many windows to let the light in.", why: "Retelling. It doesn’t explain what the simile suggests." },
      { t: "This proves that Miss Brill actually lives inside a cupboard because she is too poor to afford a proper room of her own in the town.", why: "A literal misreading of a simile." },
      { t: "The writer uses a simile to describe Miss Brill’s room, which is a comparison using the word like to help the reader picture where she lives.", why: "A definition, not an explanation of the effect." },
      { t: "A cupboard is cramped and dark, and things are stored there out of sight. Miss Brill seems put away, far from the bright “stage”.", ok: true, why: "Strong. It explains the simile and contrasts home with the park." }
    ]
  },
  {
    claim: "Miss Brill cannot admit her own pain.",
    quote: "she thought she heard something crying",
    opts: [
      { t: "Miss Brill hears a sound coming from the box when she puts the lid on it, and she thinks that maybe the fur necklet inside it is crying.", why: "Retelling. It misses what the vague “something” suggests." },
      { t: "“Something” avoids saying who is crying, and “thought she heard” adds distance. Miss Brill is crying but puts the grief onto the fur.", ok: true, why: "Strong. It explains two word choices and the displaced emotion." },
      { t: "This shows that the fur is magic and has come to life at the end of the story, which is why Miss Brill can hear it crying inside its box.", why: "A literal misreading. The crying is suggestive, not magical." },
      { t: "The writer ends the story with a sad sentence about crying because she wants the reader to feel sad about Miss Brill as well.", why: "Too vague. How do these particular words create that sadness?" }
    ]
  }
];

const COLLECT = [
  {
    claim: "Miss Brill badly wants to believe that she matters to other people.",
    opts: [
      { t: "No doubt somebody would have noticed if she hadn’t been there", ok: true, why: "Right. “No doubt” sounds sure, but nothing shows anyone would notice. It reveals her wish to be important." },
      { t: "The hero and heroine, of course", why: "This is how she casts the young couple in her imagined play, not about herself mattering." },
      { t: "She had got quite used to the frail head on the cotton pillow", why: "This is her routine with the invalid she reads to, not about being noticed." },
      { t: "made a great difference", why: "This is about the almond in her cake, not about mattering to people." }
    ]
  },
  {
    claim: "The young couple are deliberately cruel to Miss Brill.",
    opts: [
      { t: "that stupid old thing at the end there", ok: true, why: "Right. “Thing” strips her of being a person and “stupid old” adds contempt, said where she can hear." },
      { t: "The hero and heroine, of course", why: "This is how she imagined the couple, before they turned on her, not their cruelty." },
      { t: "like a little “theatre” dog", why: "This is her own fond image of her fur, not an insult from the couple." },
      { t: "She had got quite used to the frail head on the cotton pillow", why: "This is a detail about the invalid she reads to, not the couple’s words." }
    ]
  },
  {
    claim: "Miss Brill’s weekday life is almost completely empty of real company.",
    target: ["If he’d been dead she mightn’t have noticed for weeks"],
    decoys: [{ phrase: "She had got quite used to the frail head on the cotton pillow", why: "This shows the routine, but the shocking emptiness comes in the next sentence. Look for the line about not noticing for weeks." }],
    miss: "Look at the paragraph about the old invalid gentleman she reads to.",
    explain: "Her weekday company is a man so absent he “might have been dead” without her noticing “for weeks”. The detail shows how little real human contact she has."
  },
  {
    claim: "At the end, Miss Brill cannot face her own sadness directly.",
    target: ["she thought she heard something crying"],
    decoys: [{ phrase: "She sat there for a long time.", why: "This shows her shock and stillness, but not the displaced sadness of the final line. Look at the very end." }],
    miss: "Read the last sentence of the story.",
    explain: "Mansfield never says Miss Brill cries. Instead “something” is crying, as if the grief belongs to the fur. She cannot admit her own pain, even to herself."
  }
];
TEXTS.push({ id: "miss-brill", type: "Fiction", mode: "Creative", form: "Short story (extract)", level: "5ème",
  hook: "A lonely woman decides the park is a play, until two strangers take her part away.",
  TEXT, ANNOTATE, QUESTIONS, EVIDENCE, EXPLAIN, COLLECT });
}

/* ================================================================
   TEXTS 16–19: stages written, TEXT TO BE PASTED BY THE TEACHER.
   Paste the passage between the two backticks after raw: `  `
   Leave a blank line between paragraphs. Nothing else needs changing.
   Until text is pasted, the card shows “Text needed” and cannot be opened.
   ================================================================ */

/* ---------- TEXT 16 · The Butterfly Lion (opening) · CM2 ---------- */
{
const TEXT = {
  title: "The Butterfly Lion",
  intro: "Michael Morpurgo, The Butterfly Lion (1996), opening chapter: “Chilblains and Semolina Pudding”. The narrator remembers being ten years old at boarding school.",
  raw: `
Butterflies live only short lives. They flower and flutter for just a few glorious weeks, and then they die. To see them, you have to be in the right place at the right time. And that’s how it was when I saw the butterfly lion - I happened to be in just the right place, at just the right time. I didn’t dream him. I didn’t dream any of it. I saw him, blue and shimmering in the sun, one afternoon in June when I was young. A long time ago. But I don’t forget. I mustn’t forget. I promised them I wouldn’t.

I was ten, and away at boarding school in deepest Wiltshire. I was far from home and I didn’t want to be. It was a diet of Latin and stew and rugby and detentions and cross-country runs and chilblains and marks and squeaky beds and semolina pudding. And then there was Basher Beaumont who terrorised and tormented me, so that I lived every waking moment of my life in dread of him. I had often thought of running away, but only once ever plucked up the courage to do it.

I was homesick after a letter from my mother. Basher Beaumont had cornered me in the bootroom and smeared black shoe-polish in my hair. I had done badly in a spelling test, and Mr Carter had stood me in the corner with a book on my head all through the lesson - his favourite torture. I was more miserable than I had ever been before. I picked at the plaster in the wall, and determined there and then that I would run away.

I took off the next Sunday afternoon. With any luck I wouldn’t be missed till supper, and by that time I’d be home, home and free. I climbed the fence at the bottom of the school park, behind the trees where I couldn’t be seen. Then I ran for it. I ran as if bloodhounds were after me, not stopping till I was through Innocents Breach and out onto the road beyond. I had my escape all planned. I would walk to the station - it was only five miles or so - and catch the train to London. Then I’d take the underground home. I’d just walk in and tell them that I was never, ever going back.

There wasn’t much traffic, but all the same I turned up the collar of my raincoat so that no one could catch a glimpse of my uniform. It was beginning to rain now, those heavy hard drops that mean there’s more of the same on the way. I crossed the road, and ran along the wide grass verge under the shelter of the trees.

Beyond the grass verge was a high brick wall, much of it covered in ivy. It stretched away into the distance, continuous as far as the eye could see, except for a massive arched gateway at the bend of the road. A great stone lion bestrode the gateway. As I came closer I could see he was roaring in the rain, his lip curled, his teeth bared.

I stopped and stared up at him for a moment. That was when I heard a car slowing down behind me. I did not think twice. I pushed open the iron gate, darted through, and flattened myself behind the stone pillar. I watched the car until it disappeared round the bend.

To be caught would mean a caning, four strokes, maybe six, across the back of the knees. Worse, I would be back at school, back to detentions, back to Basher Beaumont. To go along the road was dangerous, too dangerous. I would try to cut across country to the station. It would be longer that way, but far safer.
`
};

const ANNOTATE = [
  {
    skill: "Short sentences",
    prompt: "Find a short sentence showing this memory is <em>very important</em> to the narrator.",
    target: ["I mustn’t forget.", "But I don’t forget."],
    decoys: [{ phrase: "A long time ago.", why: "This tells us when it happened, not how important the memory is. Look at the sentences right after it." }],
    miss: "Look near the end of the first paragraph.",
    explain: "The sentences get shorter and stronger: “I don’t forget. I mustn’t forget.” The narrator sounds as if he is making a serious promise, which makes us curious about what he saw."
  },
  {
    skill: "Simile",
    prompt: "Find the simile that shows how <em>fast and scared</em> the narrator runs.",
    target: ["as if bloodhounds were after me"],
    decoys: [{ phrase: "I had my escape all planned.", why: "This shows he planned his escape, but it isn’t a comparison. Look for how he describes his running." }],
    miss: "Look at the start of the second page, when he runs through the trees.",
    explain: "Bloodhounds are dogs used to track and hunt people. The simile makes the narrator feel like an escaped prisoner being chased, so we feel his fear and speed."
  },
  {
    skill: "Word choice",
    prompt: "Find the <em>two strong verbs</em> that show how cruel Basher Beaumont is.",
    target: ["terrorised and tormented"],
    decoys: [{ phrase: "smeared black shoe-polish in my hair", why: "That is one cruel thing Basher did. The question asks for the two verbs that describe how he treats the narrator all the time." }],
    miss: "Find the sentence that introduces Basher Beaumont.",
    explain: "“Terrorised” means filled with terror, and “tormented” means hurt again and again. Both start with “t”, so they hit hard together and show Basher is a real bully, not just unkind."
  },
  {
    skill: "Repetition",
    prompt: "Find the repeated word that shows how much the narrator <em>wants to be home</em>.",
    target: ["home, home and free"],
    decoys: [{ phrase: "never, ever going back", why: "That is repetition too (“never, ever”), but it is about school, not home. Look for the word “home” used twice." }],
    miss: "Look for where he imagines being missed at supper.",
    explain: "Saying “home” twice sounds like a wish he is repeating to himself. Adding “free” shows school feels like a prison and home means freedom."
  }
];

const QUESTIONS = [
  {
    skill: "Point of view",
    q: "Who is telling this story?",
    opts: [
      { t: "The narrator, remembering when he was ten", ok: true, why: "Right. He uses “I” and says “when I was young. A long time ago.” He is an adult looking back." },
      { t: "An outside narrator describing a boy", why: "The story uses “I”, so the narrator is the boy himself, now grown up." },
      { t: "Basher Beaumont, the school bully", why: "Basher is described by the narrator: “who terrorised and tormented me”." },
      { t: "The narrator’s mother, writing a letter", why: "The mother only sends a letter. The narrator is her son." }
    ]
  },
  {
    skill: "Opening",
    q: "Why does the story begin by talking about butterflies?",
    opts: [
      { t: "It hints the story is about something rare that he saw only briefly", ok: true, why: "Right. Butterflies live “short lives” and you must be “in the right place at the right time”, just like when he saw the butterfly lion." },
      { t: "Because the story is really a science text about butterflies", why: "It quickly becomes a story about a boy at school. The butterflies introduce an idea." },
      { t: "Because the narrator collects butterflies at his school", why: "Nothing mentions collecting. Butterflies are used to explain how rare his experience was." },
      { t: "To describe the flowers in the school garden in June", why: "The school park is only mentioned later. The butterflies are about timing and rarity." }
    ]
  },
  {
    skill: "Inference",
    q: "Why does the narrator finally decide to run away?",
    opts: [
      { t: "Several bad things happened on the same day", ok: true, why: "Right. He was homesick after a letter, bullied by Basher, and punished by Mr Carter. It all added up until he was “more miserable than I had ever been”." },
      { t: "He wanted an exciting adventure at the weekend", why: "He runs because he is miserable, not for fun." },
      { t: "He had been told to leave by the headteacher", why: "He escapes secretly and hopes not to be “missed till supper”." },
      { t: "His mother wrote asking him to come home", why: "The letter made him homesick, but nothing says she asked him to come home." }
    ]
  },
  {
    skill: "Mood",
    q: "What mood does the rain create at the end of the extract?",
    opts: [
      { t: "Gloomy and uncertain, as if trouble lies ahead", ok: true, why: "Right. “Heavy hard drops” that mean “more of the same on the way” suggest things are about to get worse for him." },
      { t: "Cheerful and bright, like a sunny holiday", why: "Heavy rain is not cheerful. The weather matches his difficult situation." },
      { t: "Funny and silly, like a comedy show", why: "Nothing in the description is played for laughs." },
      { t: "Calm and safe, as if he is already home", why: "He is still on the road, alone, in growing rain. He is far from safe." }
    ]
  },
  {
    skill: "Summary",
    q: "Which sentence best sums up what happens in this text?",
    opts: [
      { t: "A miserable boy at boarding school runs away one rainy Sunday, and as he passes a grand gateway topped with a stone lion, a car slows down behind him.", ok: true, why: "Right. It covers the whole shape of the text, not just one part of it." },
      { t: "Basher Beaumont corners the narrator in the bootroom and smears black shoe polish into his hair earlier that same week. Other parts of the story focus on different details.", why: "True, but too narrow. It only covers part of the text and misses the main point." },
      { t: "The narrator successfully makes it all the way home to London by train before anybody at the school even notices he is gone. The rest of the text develops in a different direction.", why: "Too broad. This adds a claim the text does not actually make or support." },
      { t: "The narrator picks nervously at a loose piece of plaster in the wall while he is standing in the corner of the classroom. The story continues well beyond this particular moment.", why: "A real detail, but a minor one. It is not what the text is mainly about." }
    ]
  }
];

const EVIDENCE = [
  {
    quote: "I didn’t dream him. I didn’t dream any of it.",
    opts: [
      { t: "He wants readers to believe something amazing really happened", ok: true, why: "Right. He insists it wasn’t a dream, because what he saw (a blue butterfly lion) sounds unbelievable." },
      { t: "The narrator often has bad dreams at night", why: "He is saying the opposite: this was not a dream." },
      { t: "The narrator has forgotten what happened", why: "He says “I don’t forget.” He remembers clearly." },
      { t: "The whole story is only a dream", why: "The quote denies exactly that." }
    ]
  },
  {
    quote: "stood me in the corner with a book on my head all through the lesson",
    opts: [
      { t: "Teachers at the school could be harsh", ok: true, why: "Right. Standing in the corner for a whole lesson is a cruel, embarrassing punishment, and the narrator calls it “his favourite torture”." },
      { t: "The narrator loves reading books in class", why: "The book is part of a punishment, not reading for pleasure." },
      { t: "Mr Carter was a kind, patient teacher", why: "He calls it Mr Carter’s “favourite torture”. That is not kind." },
      { t: "The lesson was about learning to balance", why: "It was a spelling lesson; the book was a punishment." }
    ]
  },
  {
    quote: "I had my escape all planned.",
    opts: [
      { t: "He had thought carefully about how to get home", ok: true, why: "Right. The next sentences give his plan: walk to the station, train to London, underground home." },
      { t: "He had escaped from the school many times before", why: "He says he “only once ever plucked up the courage to do it”." },
      { t: "His friends helped him plan the escape", why: "He goes alone, and no friends are mentioned." },
      { t: "The teachers knew about his plan", why: "He hopes not to be “missed till supper”, so it is secret." }
    ]
  }
];

const EXPLAIN = [
  {
    claim: "School life is miserable for the narrator.",
    quote: "a diet of Latin and stew and rugby and detentions",
    opts: [
      { t: "Calling school “a diet” suggests he is fed these things every day, like it or not. Repeating “and” piles them up so school feels endless.", ok: true, why: "Strong. It explains the metaphor and the repeated “and”." },
      { t: "At the boarding school the children have to study Latin, eat stew for dinner, play rugby and sometimes get detentions when they behave badly.", why: "Retelling. How do the words show misery?" },
      { t: "The writer uses a list in this sentence to tell the reader about all of the different things that happen at the boarding school every week.", why: "It names the list but doesn’t explain its effect." },
      { t: "This shows the narrator is on a special diet at school and is only allowed to eat stew and semolina pudding because of the school rules.", why: "A literal misreading. “Diet” is a metaphor for everyday school life." }
    ]
  },
  {
    claim: "Basher Beaumont makes the narrator’s life frightening.",
    quote: "I lived every waking moment of my life in dread of him",
    opts: [
      { t: "Basher Beaumont was a bully at the boarding school, and he was mean to the narrator and did horrible things like putting shoe-polish in his hair.", why: "Retelling, with a detail from later. Explain these words." },
      { t: "“Every waking moment” means there is no break from fear, and “dread” is stronger than being scared. Basher controls the narrator’s whole life.", ok: true, why: "Strong. Two phrases explained and linked to the claim." },
      { t: "I think bullying is very bad, and if I were the narrator I would tell a teacher straight away so that Basher Beaumont got into trouble.", why: "A personal response. Explain the writer’s words." },
      { t: "This proves that the narrator never slept at all while he was at school, because he was awake and worrying about Basher every single night.", why: "A misreading. “Waking moment” means all the time he is awake." }
    ]
  },
  {
    claim: "The memory matters deeply to the narrator.",
    quote: "But I don’t forget. I mustn’t forget. I promised them I wouldn’t.",
    opts: [
      { t: "The writer uses short sentences here, which is a technique that makes writing more dramatic and interesting for the person reading it.", why: "Too general. What do these particular sentences show?" },
      { t: "The narrator remembers everything that happened to him when he was ten, even though it was a long time ago and he is now an adult.", why: "Retelling. How do the words show the memory matters?" },
      { t: "Three short sentences grow stronger: “don’t”, then “mustn’t”, then a promise. He feels he owes it to someone to remember.", ok: true, why: "Strong. It traces how the sentences build and what the promise suggests." },
      { t: "This shows the narrator is worried he has a bad memory and might forget things, so he has promised his teachers he will try harder.", why: "A misreading. The promise is to “them”, the people in his story." }
    ]
  },
  {
    claim: "Home means safety and freedom to the narrator.",
    quote: "home, home and free",
    opts: [
      { t: "The narrator hopes that by supper time he will already be back at his house with his family, and nobody will be able to stop him.", why: "Retelling. Explain the repetition and “free”." },
      { t: "The writer repeats the word “home” in this part of the story.", why: "An observation. What does the repetition show?" },
      { t: "This proves the narrator’s family will be happy to see him and will let him stay at home forever without sending him back to school.", why: "Overclaiming. We don’t know how his family reacts." },
      { t: "Repeating “home” sounds like a longing chant, and “free” shows school feels like a prison. Home means freedom.", ok: true, why: "Strong. It explains the repetition and the word “free”." }
    ]
  }
];

const COLLECT = [
  {
    claim: "The narrator knows exactly what punishment he faces if he is caught.",
    opts: [
      { t: "a caning, four strokes, maybe six, across the back of the knees", ok: true, why: "Right. He spells out the exact punishment, right down to the number of strokes." },
      { t: "I turned up the collar of my raincoat so that no one could catch a glimpse of my uniform", why: "This shows him hiding so he won’t be spotted, not the punishment waiting for him." },
      { t: "back to detentions, back to Basher Beaumont", why: "This is the miserable life he would return to, not the punishment for being caught." },
      { t: "I had often thought of running away", why: "This is about his old wish to escape, not what happens if he is caught." }
    ]
  },
  {
    claim: "The narrator makes the stone lion sound fierce and alive.",
    opts: [
      { t: "roaring in the rain, his lip curled, his teeth bared", ok: true, why: "Right. “Roaring”, “lip curled” and “teeth bared” give a carved stone lion the actions of a living, angry animal." },
      { t: "A great stone lion bestrode the gateway", why: "This tells us the lion is there and where it stands, but not that it seems fierce or alive." },
      { t: "a high brick wall, much of it covered in ivy", why: "This describes the wall, not the lion." },
      { t: "I stopped and stared up at him for a moment", why: "This is the narrator’s reaction, not a description that brings the lion to life." }
    ]
  },
  {
    claim: "The narrator hides the instant he realises a car is coming.",
    target: ["I pushed open the iron gate, darted through, and flattened myself behind the stone pillar"],
    decoys: [{ phrase: "That was when I heard a car slowing down behind me", why: "This is what makes him hide, but the claim asks for the hiding itself. Look at the next sentence." }],
    miss: "Look for the moment just after he hears the car.",
    explain: "The car makes him hide: he darts through the gate and flattens himself behind the pillar. Three quick actions in a row show how fast fear moves him."
  },
  {
    claim: "One bad thing after another finally pushes the narrator to run.",
    target: ["I was more miserable than I had ever been before."],
    decoys: [{ phrase: "I had often thought of running away", why: "He had thought about it before, but this is not the moment that finally decided him. Look for where his misery peaks." }],
    miss: "Look at the end of the third paragraph, after the spelling test and the shoe-polish.",
    explain: "The homesick letter, Basher’s bullying and Mr Carter’s punishment stack up until he is “more miserable than I had ever been”. That peak is what makes him decide “there and then” to run."
  }
];
TEXTS.push({ id: "butterfly-lion", type: "Fiction", mode: "Creative", form: "Novel opening", level: "CM2",
  hook: "A miserable ten-year-old runs away from boarding school in the rain.",
  TEXT, ANNOTATE, QUESTIONS, EVIDENCE, EXPLAIN, COLLECT });
}

/* ---------- TEXT 17 · Seventh Grade · 6ème ---------- */
{
const TEXT = {
  title: "Seventh Grade",
  intro: "Gary Soto, “Seventh Grade”, from Baseball in April and Other Stories (1990). Victor starts seventh grade in Fresno, California, determined that Teresa will be his girl this year.",
  raw: `
On the first day of school, Victor stood in line half an hour before he came to a wobbly card table. He was handed a packet of papers and a computer card on which he listed his one elective, French. He already spoke Spanish and English, but he thought some day he might travel to France, where it was cool; not like Fresno, where summer days reached 110 degrees in the shade. There were rivers in France, and huge churches, and fair-skinned people everywhere, the way there were brown people all around Victor

Besides, Teresa, a girl he had liked since they were in catechism classes at Saint Theresa’s, was taking French, too. With any luck they would be in the same class. Teresa is going to be my girl this year, he promised himself as he left the gym full of students in their new fall clothes. She was cute. And good in math, too, Victor thought as he walked down the hall to his homeroom. He ran into his friend, Michael Torres, by the water fountain that never turned off.

They shook hands, raza-style, and jerked their heads at one another in a saludo de vato. “How come you’re making a face?” asked Victor.

“I ain’t making a face, ese. This is my face.” Michael said his face had changed during the summer. He had read a GQ magazine that his older brother had borrowed from the Book Mobile and noticed that the male models all had the same look on their faces. They would stand, one arm around a beautiful woman, and scowl. They would sit at the pool, their rippled stomachs dark with shadow, and scowl. They would sit at dinner tables, cool drinks in their hands, and scowl,

“I think it works,” Michael said. He scowled and let his upper lip quiver. His teeth showed along with the ferocity of his soul. “Belinda Reyes walked by a while ago and looked at me,” he said.

Victor didn’t say anything, though he thought his friend looked pretty strange. They talked about recent movies, baseball, their parents, and the horrors of picking grapes in order to buy their fall clothes. Picking grapes was like living in Siberia, except hot and more boring.

“What classes are you taking?” Michael said, scowling.

“French. How ‘bout you?”

“Spanish. I ain’t so good at it, even if I’m Mexican."

“I’m not either, but I’m better at it than math, that’s for sure.”

A tiny, three-beat bell propelled students to their homerooms. The two friends socked each other in the arm and went their ways, Victor thinking, man, that’s weird. Michael thinks making a face makes him handsome.

On the way to his homeroom, Victor tried a scowl. He felt foolish, until out of the corner of his eye he saw a girl looking at hint Umm, he thought, maybe it does work. He scowled with greater conviction.

In the homeroom, roll was taken, emergency cards were passed out, and they were given a bulletin to take home to their parents. The principal, Mr. Belton, spoke over the crackling loudspeaker, welcoming the students to a new year, new experiences, and new friendships. The students squirmed in their chairs and ignored him, they were anxious to go to first period. Victor sat calmly, thinking of Teresa, who sat two rows away, reading a paperback novel. This would be his lucky year. She was in his homeroom, and would probably be in his English and math classes. And, of course, French.

The bell rang for first period, and the students herded noisily through the door. Only Teresa lingered, talking with the homeroom teacher.

“So you think I should talk to Mrs. Gaines?” she asked the teacher. “She would know about ballet?”

“She would be a good bet,” the teacher said. Then added, “Or the gym teacher, Mrs. Garza."

Victor lingered, keeping his head down and staring at his desk. He wanted to leave when she did so he could bump into her and say something clever.

He watched her on the sly. As she turned to leave, he stood up and hurried to the door, where he managed to catch her eye. She smiled and said, “Hi, Victor."

He smiled back and said, “Yeah, that's me.” His brown face blushed. Why hadn’t he said, “Hi, Teresa,” or "How was your summer?” or something nice.

As Teresa walked down the hall, Victor walked the other way, looking back, admiring how gracefully she walked, one foot in front of the other. So much for being in the same class, he thought. As he trudged to English, he practiced scowling.

In English they reviewed the parts of speech. Mr. Lucas, a portly man, waddled down the aisle, asking, “What is a noun?”

“A person, place, or thing,” said the class in unison.

Yes, now somebody give me an example of a person--you, Victor Rodriguez.”

"Teresa,” Victor said automatically. Some of the girls giggled. They knew he had a crush on Teresa. He felt himself blushing again.

“Correct,” Mr. Lucas said. “Now provide me with a place.”

Mr. Lucas called on a freckled kid who answered, “Teresa’s house with a kitchen full of big brothers.”

After English, Victor had math, his weakest subject. He sat in the back by the window, hoping that he would not be called on. Victor understood most of the problems, but some of the stuff looked like the teacher made it up as she went along. It was confusing, like the inside of a watch.

After math he had a fifteen-minute break, then social studies, and finally lunch. He bought a tuna casserole with buttered rolls, some fruit cocktail, and milk. He sat with Michael, who practiced scowling between bites,

Girls walked by and looked at him, “See what I mean, Vic?” Michael scowled. "They love it.”

“Yeah, I guess so.”

They ate slowly, Victor scanning the horizon for a glimpse of Teresa. He didn’t see her. She must have brought lunch, he thought, and is eating outside. Victor scraped his plate and left Michael, who was busy scowling at a girl two tables away.

The small, triangle-shaped campus bustled with students talking about their new classes. Everyone was in a sunny mood. Victor hurried to the bag lunch area, where he sat down and opened his math book. He moved his lips as if he were reading, but his mind was somewhere else. He raised his eyes slowly and looked around. No Teresa.

He lowered his eyes, pretending to study, then looked slowly to the left. No Teresa. He turned a page in the book and stared at some math problems that scared him because he knew he would have to do them eventually. He looked at the right. Still no sign of her. He stretched out lazily in an attempt to disguise his snooping.

Then he saw her. She was sitting with a girlfriend under a plum tree. Victor moved to a table near her and daydreamed about taking her to a movie. When the bell sounded, Teresa looked up, and their eyes met. She smiled sweetly and gathered her books. Her next class was French, same as Victor’s.

They were among the last students to arrive in class, so all the good desks in the back had already been taken. Victor was forced to sit near the front, a few desks away from Teresa, while Mr. Bueller wrote French words on the chalkboard. The bell rang, and Mr. Bueller wiped his hands, turned to the class, and said, “Bonjour.”

“Bonjour,” braved a few students. What obstacles are getting in the way of Victor making Teresa “his girl”?

“Bonjour” Victor whispered. He wondered if Teresa heard him.

Mr. Bueller said that if the students studied hard, at the end of the year they could go to France and be understood by the populace.

One kid raised his hand and asked, “‘What’s ‘populace’?”

"The people, the people of France.”

Mr. Bueller asked if anyone knew French. Victor raised his hand, wanting to impress Teresa. The teacher beamed and said, “Tres bien. Parlez-vous francais?”

Victor didn’t know what to say. The teacher wet his lips and asked something else in French. The room grew silent. Victor felt all eyes staring at him. He tried to bluff his way out by making noises that sounded French.

“La me vave me con le grandma,” he said uncertainly.

Mr. Bueller, wrinkling his face in curiosity, asked him to speak up.

Great rosebushes of red bloomed on Victor’s cheeks. A river of nervous sweat ran down his palms. He felt awful. Teresa sat a few desks away, no doubt thinking he was a fool. Without looking at Mr. Bueller, Victor mumbled, ‘Frenchie oh wewe gee in September.”

Mr. Bueller asked Victor to repeat what he said.

“Frenchie oh wewe gee in September," Victor repeated.

Mr. Bueller understood that the boy didn’t know French and turned away. He walked to the blackboard and pointed to the words on the board with his steel-edged ruler.

"Le bateau,” he sang.

“Le bateau,” the students repeated.

"Le bateau est sur l’eau,” he sang.

“Le bateau est sur l’eau.”

Victor was too weak from failure to join the class. He stared at the board and wished he had taken Spanish, not French. Better yet, he wished he could start his life over. He had never been so embarrassed. He bit his thumb until he tore off a sliver of skin.

The bell sounded for fifth period, and Victor shot out of the room, avoiding the stares of the other kids, but had to return for his math book. He looked sheepishly at the teacher, who was erasing the board, then widened his eyes in terror at Teresa who stood in front of him. “I didn’t know you knew French,”she said. “That was good.”

Mr. Bueller looked at Victor, and Victor looked back. Oh please, don’t say anything, Victor pleaded with his eyes. I’ll wash your car, mow your lawn, walk your dog--anything! I'll be your best student, and I’ll clean your erasers after school.

Mr. Bueller shuffled through the papers on his desk, He smiled and hummed as he sat down to work. He remembered his college years when he dated a girlfriend in borrowed cars. She thought he was rich because each time he picked her up he had a different car. It was fun until he had spent all his money on her and had to write home to his parents because he was broke.

Victor couldn’t stand to look at Teresa. He was sweaty with shame. “Yeah, well, I picked up a few things from movies and books and stuff like that.” They left the class together. Teresa asked him if he would help her with her French.

"Sure, anytime,” Victor said.

“I won’t be bothering you, will I?”

"Oh no, I like being bothered.”

“Bonjour,” Teresa said, leaving him outside her next class. She smiled and pushed wisps of hair from her face.

"Yeah, right, bonjour,” Victor said. He turned and headed to his class. The rosebuds of shame on his face became bouquets of love. Teresa is a great girl, he thought. And Mr. Bueller is a good guy.

He raced to metal shop. After metal shop there was biology, and after biology a long sprint to the public library, where he checked out three French textbooks.

He was going to like seventh grade.
`
};

const ANNOTATE = [
  {
    skill: "Simile",
    prompt: "Find the <em>funny simile</em> describing picking grapes.",
    target: ["like living in Siberia, except hot and more boring"],
    decoys: [{ phrase: "like the inside of a watch", why: "That is a simile too, but it describes maths class, not picking grapes." }],
    miss: "Look for what Victor and Michael talk about by the water fountain.",
    explain: "Siberia is known as a freezing, lonely place of hardship. Soto compares grape-picking to it, then twists the comparison (“except hot and more boring”), which makes the misery funny."
  },
  {
    skill: "Exaggeration",
    prompt: "Find the exaggeration showing how <em>nervous</em> Victor is.",
    target: ["A river of nervous sweat ran down his palms"],
    decoys: [{ phrase: "Victor felt all eyes staring at him", why: "This shows the pressure on him, but it isn’t exaggerated. Look for a physical detail made enormous." }],
    miss: "Look right after the rosebushes of red.",
    explain: "Nobody’s hands produce a river. The exaggeration turns sweaty palms into something dramatic, showing panic from the inside."
  },
  {
    skill: "Characterisation",
    prompt: "Find <em>one piece of nonsense</em> Victor says to pretend he speaks French.",
    target: ["La me vave me con le grandma", "Frenchie oh wewe gee in September"],
    decoys: [{ phrase: "Le bateau est sur l’eau", why: "That is real French, sung by the teacher. Look for Victor’s made-up sounds." }],
    miss: "Look for what Victor says when he tries to “bluff his way out”.",
    explain: "Victor mixes French-sounding noises with English words like “grandma” and “September”. The nonsense is funny, and it shows how far he will go to avoid looking foolish in front of Teresa."
  },
  {
    skill: "Metaphor",
    prompt: "Find where Victor’s embarrassment <em>turns into happiness</em>.",
    target: ["The rosebuds of shame on his face became bouquets of love"],
    decoys: [{ phrase: "Great rosebushes of red bloomed on Victor’s cheeks", why: "That is the earlier blush of embarrassment. Look for the moment the flower image changes." }],
    miss: "Look near the end, after Teresa says “Bonjour” to Victor.",
    explain: "The flower image from French class comes back, but it changes: “rosebuds of shame” become “bouquets of love”. The same red face now means joy, showing how quickly his day has turned around."
  }
];

const QUESTIONS = [
  {
    skill: "Character",
    q: "What is the main reason Victor chooses French?",
    opts: [
      { t: "Teresa, the girl he likes, is taking French", ok: true, why: "Right. He mentions France, but “Besides, Teresa… was taking French, too” reveals the real reason." },
      { t: "He already speaks French at home with family", why: "He speaks Spanish and English. His lack of French is the whole problem." },
      { t: "His parents told him that he had to take it", why: "Nothing mentions his parents choosing. It is his own decision." },
      { t: "His best friend Michael is taking French", why: "Michael is taking Spanish." }
    ]
  },
  
  {
    skill: "Inference",
    q: "Why does Victor raise his hand and claim he knows French?",
    opts: [
      { t: "He wants to impress Teresa", ok: true, why: "Right. The text says he raised his hand “wanting to impress Teresa”." },
      { t: "He wants to annoy the teacher on purpose", why: "He isn’t trying to cause trouble. He wants Teresa to notice him." },
      { t: "He honestly believes he can speak French well", why: "He has never learned French; he has to “bluff his way out”." },
      { t: "Michael dared him to do it before class", why: "Michael isn’t in French class and never dares him." }
    ]
  },
  {
    skill: "Irony",
    q: "Teresa says, “I didn’t know you knew French. That was good.” Why is this ironic?",
    opts: [
      { t: "She is impressed by the moment Victor felt most humiliated", ok: true, why: "Right. Victor was “too weak from failure” and wanted to start his life over, yet Teresa thinks he was brilliant." },
      { t: "She is joking with him because she knows perfectly well he can’t speak French", why: "She asks him to help her with French, so she sincerely believes him." },
      { t: "She speaks French fluently herself and is secretly testing him", why: "She wants his help with French, so she isn’t fluent." },
      { t: "She is angry that he showed off in class", why: "She smiles and asks for his help. She isn’t angry." }
    ]
  },
  {
    skill: "Ending",
    q: "Why does Victor check out three French textbooks at the end?",
    opts: [
      { t: "To learn French so that his pretence becomes true", ok: true, why: "Right. Teresa wants his help, so now he must actually learn. The ending shows new motivation." },
      { t: "To return the maths book he accidentally left behind in French class", why: "He had already collected his maths book. The library visit is about French." },
      { t: "To hide from Teresa in the quiet library", why: "He is happy about Teresa now. He isn’t hiding." },
      { t: "Because French has always been his favourite subject at school", why: "He knew no French that morning. His interest comes from Teresa." }
    ]
  },
  {
    skill: "Summary",
    q: "Which sentence best sums up what happens in this text?",
    opts: [
      { t: "On the first day of seventh grade, Victor signs up for French hoping to be near Teresa, and after his friend's new scowl impresses a girl, he tries it too.", ok: true, why: "Right. It covers the whole shape of the text, not just one part of it." },
      { t: "Michael explains to Victor that he has completely changed the whole look on his face over the summer holidays. Other parts of the story focus on different details.", why: "True, but too narrow. It only covers part of the text and misses the main point." },
      { t: "Victor and Teresa officially become a couple by the very end of their first day back at school together that September. The rest of the text develops in a different direction.", why: "Too broad. This adds a claim the text does not actually make or support." },
      { t: "Victor and Michael talk together about the horrors of picking grapes all summer in order to buy new clothes for school. The story continues well beyond this particular moment.", why: "A real detail, but a minor one. It is not what the text is mainly about." }
    ]
  }
];

const EVIDENCE = [
  {
    quote: "Teresa is going to be my girl this year, he promised himself",
    opts: [
      { t: "Victor is hopeful and determined about Teresa", ok: true, why: "Right. “Promised himself” shows determination, though Teresa hasn’t agreed to anything." },
      { t: "Teresa has already agreed to be his girlfriend", why: "He promised himself. Teresa knows nothing about it." },
      { t: "Victor doesn’t really care about Teresa", why: "Making a promise about her shows he cares a lot." },
      { t: "Victor told Teresa his plan that morning", why: "The promise is silent, to himself." }
    ]
  },
  {
    quote: "Oh please, don’t say anything, Victor pleaded with his eyes.",
    opts: [
      { t: "Victor is terrified of being exposed in front of Teresa", ok: true, why: "Right. He silently begs Mr. Bueller not to reveal the truth, even offering to wash his car." },
      { t: "Victor wants Mr. Bueller to praise his French in front of Teresa", why: "He wants the teacher to say nothing at all." },
      { t: "Victor is angry with Mr. Bueller", why: "“Pleaded” shows begging, not anger." },
      { t: "Victor says these words out loud to the teacher so that Teresa can hear", why: "He pleads “with his eyes”, silently." }
    ]
  },
  {
    quote: "where he checked out three French textbooks",
    opts: [
      { t: "Victor plans to make his lie come true by learning French", ok: true, why: "Right. After promising to help Teresa, he races to get the books he needs." },
      { t: "Victor is already fluent in French and wants some harder books to read", why: "He needs textbooks because he knows no French." },
      { t: "The books are a present for Teresa to help her with her French", why: "He checks them out for himself, to learn." },
      { t: "Victor has decided to give up French", why: "Borrowing three textbooks shows the opposite." }
    ]
  }
];

const EXPLAIN = [
  {
    claim: "Victor becomes tongue-tied around Teresa.",
    quote: "Yeah, that’s me.",
    opts: [
      { t: "Teresa says “Hi, Victor” and he replies by confirming his own name. The awkward answer shows his nerves in a funny way.", ok: true, why: "Strong. It explains why the reply is awkward and its effect." },
      { t: "Victor says hello back to Teresa when she smiles at him at the door of the homeroom, before she walks away down the hall to her next class.", why: "Retelling. What does this reply reveal?" },
      { t: "This shows Victor is rude and doesn’t want to talk to Teresa, so he gives her a short answer and walks off the other way.", why: "A misreading. He wishes he’d said something nicer." },
      { t: "I would also be nervous talking to someone I liked, so I understand why Victor didn’t know what to say to her.", why: "A personal response. Explain Soto’s words." }
    ]
  },
  {
    claim: "Soto uses humour to show Victor’s struggles.",
    quote: "like the inside of a watch",
    opts: [
      { t: "The writer uses a simile, comparing maths to the inside of a watch using the word “like”, to describe the lesson.", why: "A definition, not an explanation of the humour." },
      { t: "A watch’s insides are full of tiny moving parts few people understand. The simile makes maths confusing in a way readers can picture.", ok: true, why: "Strong. It explains what the image suggests and why it works." },
      { t: "Victor finds maths class confusing because some of the problems look as if the teacher is making them up as she goes along.", why: "Retelling. What does the simile add?" },
      { t: "This shows Victor’s maths teacher is teaching the class how to fix watches and clocks instead of teaching them proper maths problems.", why: "A literal misreading of a simile." }
    ]
  },
  {
    claim: "Victor’s embarrassment feels overwhelming.",
    quote: "Victor was too weak from failure to join the class",
    opts: [
      { t: "Victor doesn’t sing along with the other students in French class because he is feeling ill and very tired after eating his lunch in the cafeteria.", why: "A misreading. He is weak from embarrassment, not illness." },
      { t: "This proves Victor has completely failed French and will never pass the class at the end of the year.", why: "Overclaiming. One moment isn’t failing the course." },
      { t: "“Too weak” describes embarrassment like an illness, and “failure” is a harsh word for one mistake. The moment feels huge to him.", ok: true, why: "Strong. Two word choices explained and linked to the claim." },
      { t: "After Victor pretends to speak French, the rest of the class repeats the French words that Mr. Bueller sings, but Victor stays quiet.", why: "Retelling. How do the words show overwhelming embarrassment?" }
    ]
  },
  {
    claim: "The ending shows Victor’s mood transformed.",
    quote: "The rosebuds of shame on his face became bouquets of love",
    opts: [
      { t: "Victor’s face is still red at the end of the school day, even though French class finished a long time ago and he has already left the room.", why: "Retelling. How does the image show a change?" },
      { t: "The writer uses a metaphor about flowers to describe Victor’s face.", why: "An observation. What does the change in the metaphor show?" },
      { t: "The flower image returns from French class but grows from “rosebuds” to “bouquets”. The blush now means love, not shame.", ok: true, why: "Strong. It links back to the earlier image and explains the change." },
      { t: "This shows that Victor is going to buy Teresa a bouquet of roses after school to tell her that he loves her.", why: "A literal misreading of a metaphor." }
    ]
  }
];

const COLLECT = [
  {
    claim: "Victor is easily influenced by other people.",
    opts: [
      { t: "He scowled with greater conviction.", ok: true, why: "Right. He thought scowling was weird, yet one girl's glance makes him do it harder. One look changes his mind." },
      { t: "Victor didn’t say anything, though he thought his friend looked pretty strange", why: "Here he thinks scowling is strange; the claim needs the moment he copies it anyway." },
      { t: "man, that’s weird. Michael thinks making a face makes him handsome", why: "This is his private opinion that scowling is weird, not the moment he is influenced." },
      { t: "They talked about recent movies, baseball, their parents", why: "This is just a neutral detail of their chat, not about being influenced." }
    ]
  },
  {
    claim: "Victor keeps pretending to be something he is not.",
    opts: [
      { t: "He moved his lips as if he were reading, but his mind was somewhere else.", ok: true, why: "Right. He fakes reading to hide that he is really searching the yard for Teresa." },
      { t: "Victor raised his hand, wanting to impress Teresa", why: "This gives the reason he pretends, but the claim asks for a moment of the pretending itself." },
      { t: "math, his weakest subject", why: "This is a fact about maths, not a moment of Victor pretending." },
      { t: "He felt himself blushing again", why: "This shows his embarrassment, not an act of pretence." }
    ]
  },
  {
    claim: "Soto pictures Victor’s embarrassment as flowers blooming on his face.",
    target: ["Great rosebushes of red bloomed on Victor’s cheeks"],
    decoys: [{ phrase: "His brown face blushed", why: "This describes an earlier, plainer blush; the claim asks for the flower image in French class." }],
    miss: "Look at the moment Mr. Bueller asks Victor to speak up.",
    explain: "His blush is not just pink: whole 'rosebushes' of red 'bloom' on his cheeks. The flower image makes the embarrassment feel hot and enormous."
  },
  {
    claim: "Mr. Bueller quietly chooses not to expose Victor’s lie.",
    target: ["Mr. Bueller understood that the boy didn’t know French and turned away"],
    decoys: [{ phrase: "He walked to the blackboard and pointed to the words on the board", why: "This is just what he does next in the lesson, not his choice to protect Victor. Look for where he 'understood' and 'turned away'." }],
    miss: "Look for the moment Mr. Bueller realises Victor cannot speak French.",
    explain: "Mr. Bueller 'understood that the boy didn’t know French' and simply 'turned away', saying nothing. He spares Victor in front of Teresa instead of exposing him."
  }
];
TEXTS.push({ id: "seventh-grade", type: "Fiction", mode: "Creative", form: "Short story", level: "6ème",
  hook: "First day of seventh grade, one crush, and a very bad idea in French class.",
  TEXT, ANNOTATE, QUESTIONS, EVIDENCE, EXPLAIN, COLLECT });
}

/* ---------- TEXT 19 · 10 Facts about Albert Einstein (National Geographic Kids) · 6ème ----------
   Source: https://www.natgeokids.com/uk/discover/science/general-science/albert-einstein-facts/ */
{
const TEXT = {
  title: "10 Facts about Albert Einstein",
  intro: "National Geographic Kids (UK), “10 facts about Albert Einstein”. A fact file about the life of the famous physicist.",
  raw: `
Find out about this extraordinary physicist…

Discover the scientist whose ideas and theories about time and space changed the world and what we think about the universe in our 10 facts about Albert Einstein…

Albert Einstein Facts


Full name: Albert Einstein

Born: 14 March 1879

Occupation: Scientist specialising in physics, also known as a theoretical physicist*

Died: 18 April 1955

Best known for: His theory of relativity*

1. Albert Einstein was born in Germany, but lived in Italy, Switzerland and Czechia (which was then part of the Austro-Hungarian Empire), until he eventually moved to the United States in 1933.
Albert never went back to Germany after moving to the USA. He didn’t feel safe in Germany because of the events that led to World War 2, and instead settled down to life in the American town of Princeton, New Jersey.

2. When Albert was a boy, he fell in love with physics when his father gifted him a compass.
He was fascinated by the way the magnets moved inside of the compass, and thought about this when he was older and coming up with his theories around relativity.

3. Albert hated the strict discipline of the grammar school he attended as a teenager, and left aged 15…
While at school, he excelled at maths, physics, and philosophy, but struggled with other subjects like languages.

4. …but he still managed to write his first scholarly paper at just 16 years old!
The paper was inspired by his compass, and discussed the force of magnetism.

5. Rather than becoming a physicist straight away, Albert first trained as a teacher.
In 1896, he was accepted into the Swiss Federal Polytechnic School in Zürich, Switzerland. He originally failed the entrance exam, but was let in anyway due to his exceptional maths results! However, this was on the condition that Albert also went to high school and finished his formal schooling.

6. After failing to find work as a maths and physics teacher, Albert decided to obtain a Ph.D. in physics.
He obtained this degree in 1905 – a year that came to be known as Albert’s “year of miracles“, because he published four groundbreaking papers in just 12 months!

7. One of the discoveries Albert announced in 1905 was his famous formula: E=mc2
Albert figured out that matter – the tiny particles that make up everything in the world – can be turned into energy. The equation, E=mc2 , describes how this conversion can be achieved. This amazing breakthrough made the 26-year-old Albert Einstein a star!

8. The formula formed part of Albert’s ‘general theory of relativity’, which he worked on over the next ten years.
Other scientists, for example Dutch physicist Hendrik Lorentz, had already been forming pieces of the theory. However, Albert was the first one to put the whole thing together. He published the complete theory in 1915, where it wowed the world!

9. Albert’s theory of relativity helped scientists understand how the universe works.
Albert’s theory showed that the effects of gravity result from the ways that objects affect space and time. These interactions can only be seen on enormous objects like the planets. As a result, Albert’s general theory of relativity describes the way that amazing phenomena like the movement of planets, the birth and death of stars, black holes, and evolution of the universe, are possible.

10. He went on to win The Nobel Prize in Physics in 1921.
The Nobel Prize is an award for major scientific accomplishments – and by the time Albert won it, he and his discoveries were famous around the world. He continued working on theories until his death in 1955, aged 76.

*A theoretical physicist is a scientist who tries to figure out how the world and universe work.


`
};

const ANNOTATE = [
  {
    skill: "Metaphor",
    prompt: "Find the phrase showing how much <em>young Einstein loved science</em>.",
    target: ["fell in love with physics"],
    decoys: [{ phrase: "struggled with other subjects like languages", why: "That shows what he found hard, not what he loved." }],
    miss: "Look at the fact about the compass.",
    explain: "People fall in love with people, not subjects. The metaphor shows physics was a passion that excited him, not just something he was good at."
  },
  {
    skill: "Detail",
    prompt: "Find the detail showing even Einstein had <em>setbacks</em>.",
    target: ["originally failed the entrance exam"],
    decoys: [{ phrase: "excelled at maths, physics, and philosophy", why: "That shows his strengths. Look for something that went wrong." }],
    miss: "Look at the fact about going to university in Zürich.",
    explain: "Readers might expect a genius never to fail. Including this setback makes Einstein more human and shows success can come after failure."
  },
  {
    skill: "Nickname",
    prompt: "Find the nickname given to <em>one amazing year</em> in Einstein’s life.",
    target: ["year of miracles"],
    decoys: [{ phrase: "published four groundbreaking papers", why: "That explains what happened that year, not what the year was called." }],
    miss: "Look at the fact about 1905.",
    explain: "A miracle is something amazing that seems impossible. Calling 1905 a “year of miracles” shows how unbelievable it was to make so many discoveries in twelve months."
  },
  {
    skill: "Informal language",
    prompt: "Find <em>one</em> informal phrase showing Einstein became famous.",
    target: ["a star", "wowed the world"],
    decoys: [{ phrase: "groundbreaking papers", why: "“Groundbreaking” shows the work was important, but it isn’t about Einstein becoming famous. Look for chatty, exciting words." }],
    miss: "Look at the facts about E=mc² and his theory of relativity.",
    explain: "Words like “a star” and “wowed” are chatty, everyday language. They make a scientist sound as exciting as a celebrity, which suits young readers."
  }
];

const QUESTIONS = [
  {
    skill: "Structure",
    q: "Why is the article organised as ten numbered facts?",
    opts: [
      { t: "It breaks a whole life into short, easy-to-find chunks", ok: true, why: "Right. Numbered facts let readers read one idea at a time or jump to the part they want." },
      { t: "The facts are carefully ranked from the least important to the most important", why: "The facts mostly follow the order of his life, not a ranking." },
      { t: "Einstein himself wrote these ten facts about his life before he died", why: "The article is written by National Geographic Kids about Einstein." },
      { t: "It is a quiz that readers have to answer", why: "The facts give information; they don’t ask questions." }
    ]
  },
  {
    skill: "Purpose",
    q: "What is the main purpose of the article?",
    opts: [
      { t: "To inform young readers about Einstein’s life and achievements", ok: true, why: "Right. It gives facts about his childhood, school, discoveries and prizes in an engaging way." },
      { t: "To persuade readers that they should all become physicists when they grow up", why: "It celebrates Einstein but doesn’t tell readers what career to choose." },
      { t: "To criticise Einstein for leaving school early", why: "The tone is admiring throughout, not critical." },
      { t: "To explain the whole theory of relativity in full scientific detail", why: "Relativity is mentioned briefly. The focus is his life." }
    ]
  },
  
  {
    skill: "Inference",
    q: "What does Einstein leaving school at 15 suggest?",
    opts: [
      { t: "Being brilliant doesn’t mean enjoying every kind of school", ok: true, why: "Right. He disliked strict discipline, yet he still excelled at maths and physics." },
      { t: "He was lazy and never really wanted to learn anything at school", why: "He wrote a scholarly paper at 16. He loved learning, just not strict rules." },
      { t: "He failed every single subject he studied at his grammar school", why: "He excelled at maths, physics and philosophy." },
      { t: "He became a teacher when he was 15", why: "He trained later; at 15 he left grammar school." }
    ]
  },
  {
    skill: "Finding information",
    q: "Why did Einstein never return to Germany?",
    opts: [
      { t: "He didn’t feel safe there because of events leading to World War 2", ok: true, why: "Right. The article explains he moved to the USA in 1933 and felt unsafe in Germany." },
      { t: "He preferred the warmer weather and the way of life in the United States", why: "The article gives safety as the reason, not weather." },
      { t: "He had been expelled from his grammar school in Germany as a teenager", why: "He left school himself, and that isn’t why he stayed away." },
      { t: "He did not speak German", why: "He was born in Germany. The reason was safety." }
    ]
  },
  {
    skill: "Summary",
    q: "Which sentence best sums up what happens in this text?",
    opts: [
      { t: "The fact file lists key moments in Einstein's life, from his early struggles at school to his groundbreaking discoveries and lasting worldwide fame.", ok: true, why: "Right. It covers the whole shape of the text, not just one part of it." },
      { t: "Einstein originally failed the entrance exam for the Swiss Federal Polytechnic School in Zürich when he first sat it. Other parts of the story focus on different details.", why: "True, but too narrow. It only covers part of the text and misses the main point." },
      { t: "Einstein himself invented the compass that first made him become interested in science when he was still a young boy. The rest of the text develops in a different direction.", why: "Too broad. This adds a claim the text does not actually make or support." },
      { t: "Einstein managed to write his very first scholarly paper about the force of magnetism at just sixteen years old. The story continues well beyond this particular moment.", why: "A real detail, but a minor one. It is not what the text is mainly about." }
    ]
  }
];

const EVIDENCE = [
  {
    quote: "published four groundbreaking papers",
    opts: [
      { t: "1905 was an incredibly productive year for him", ok: true, why: "Right. Four major discoveries in one year is why it’s called his “year of miracles”." },
      { t: "Einstein wrote several children’s books during 1905", why: "Scientific papers are research, not children’s books." },
      { t: "Nobody paid attention to his papers", why: "“Groundbreaking” and becoming famous at 26 show they had huge impact." },
      { t: "Einstein only ever wrote one paper in his whole life", why: "The quote mentions four papers in one year alone." }
    ]
  },
  {
    quote: "excelled at maths, physics, and philosophy",
    opts: [
      { t: "His strengths were subjects involving logic and big ideas", ok: true, why: "Right. Maths, physics and philosophy all involve deep thinking and reasoning." },
      { t: "Einstein was excellent at every single school subject he studied", why: "The article also says he struggled with languages." },
      { t: "Einstein worked as a philosophy teacher", why: "The quote is about his school strengths, not a job." },
      { t: "Einstein hated maths at school", why: "“Excelled” means he was very good at it." }
    ]
  },
  {
    quote: "a star",
    opts: [
      { t: "He became famous young because of his work", ok: true, why: "Right. His 1905 discoveries made him famous at just 26." },
      { t: "Einstein became a famous film star in Hollywood", why: "“A star” means famous, not an actor." },
      { t: "Einstein studied stars through a telescope", why: "In this context, “star” means a famous person." },
      { t: "Einstein only became famous many years after he died", why: "He became a star at 26, decades before his death." }
    ]
  }
];

const EXPLAIN = [
  {
    claim: "The writer presents Einstein as special from the start.",
    quote: "extraordinary physicist",
    opts: [
      { t: "“Extraordinary” means far beyond ordinary. In the introduction, it tells readers at once that Einstein was no ordinary scientist.", ok: true, why: "Strong. It explains the word and why its position matters." },
      { t: "Albert Einstein was a physicist, which is a type of scientist who studies how things like energy, light, gravity, space and time work in the universe.", why: "A definition of “physicist”, not an explanation of the claim." },
      { t: "The writer uses an adjective in the introduction of the article to describe the person the article is about.", why: "Which adjective, and what does it show?" },
      { t: "This proves Einstein was the cleverest person who has ever lived on Earth and that no other scientist in history was as intelligent as he was.", why: "Overclaiming. “Extraordinary” is admiring, not a ranking of everyone." }
    ]
  },
  {
    claim: "The article makes Einstein relatable to young readers.",
    quote: "originally failed the entrance exam",
    opts: [
      { t: "Readers expect a genius never to fail. Showing he failed an exam makes him human and encourages readers who struggle.", ok: true, why: "Strong. It explains the surprise and the effect on readers." },
      { t: "Einstein had to take an entrance exam to get into the Swiss Federal Polytechnic School in Zürich, and he did not pass it the first time he tried.", why: "Retelling. Why does this make him relatable?" },
      { t: "This shows that exams are not really important and that students don’t actually need to pass any of their tests to be successful in life.", why: "Overclaiming. One example doesn’t prove exams don’t matter." },
      { t: "I have failed tests before, so I like knowing that Einstein did too.", why: "A personal response. Explain how the article creates this effect." }
    ]
  },
  {
    claim: "1905 was an astonishing year for Einstein.",
    quote: "year of miracles",
    opts: [
      { t: "In 1905, Einstein got his PhD in physics and published some important scientific papers, including the one about his famous formula, E=mc².", why: "Retelling. What does the nickname add?" },
      { t: "A miracle seems amazing and impossible. Calling a whole year “miracles” shows how unusual it was to discover so much at once.", ok: true, why: "Strong. It explains the word and applies it to the claim." },
      { t: "This shows that Einstein’s discoveries were a kind of magic and could not be explained by science, which is why people called them miracles.", why: "A literal misreading. “Miracles” is used for amazement." },
      { t: "The writer uses a nickname for the year.", why: "An observation, not an explanation." }
    ]
  },
  {
    claim: "Informal language makes science exciting for young readers.",
    quote: "wowed the world",
    opts: [
      { t: "Einstein’s theory of relativity became famous all over the world, and lots of people in different countries learned about it and talked about it.", why: "Retelling. How does the language create excitement?" },
      { t: "The writer uses alliteration.", why: "A technique named with no effect." },
      { t: "This proves that every single person in the world understood Einstein’s theory of relativity as soon as he published it in 1915.", why: "Overclaiming. Being wowed isn’t the same as understanding." },
      { t: "“Wowed” is a chatty, exciting word, and the alliteration with “world” makes it catchy, so a science achievement sounds thrilling.", ok: true, why: "Strong. It explains word choice and sound, and links both to excitement." }
    ]
  }
];

const COLLECT = [
  {
    claim: "The writer uses an admiring word to make Einstein sound remarkable from the start.",
    opts: [
      { t: "extraordinary physicist", ok: true, why: "Right. ‘Extraordinary’ means far beyond ordinary, an admiring word placed in the very first line." },
      { t: "Albert Einstein was born in Germany", why: "This is a plain fact, not an admiring word." },
      { t: "first trained as a teacher", why: "This is a plain fact about his career, with no opinion in it." },
      { t: "struggled with other subjects like languages", why: "This points out a weakness, the opposite of an admiring word." }
    ]
  },
  {
    claim: "The article shows that even a future genius failed at first.",
    opts: [
      { t: "originally failed the entrance exam", ok: true, why: "Right. He failed the exam at first, which shows even Einstein had setbacks." },
      { t: "let in anyway due to his exceptional maths results", why: "This shows how he recovered, not the failure itself. Look for where he ‘failed’." },
      { t: "left aged 15", why: "This is that he left school, a choice, not a failure." },
      { t: "hated the strict discipline of the grammar school", why: "This is his dislike of school, not a failure." }
    ]
  },
  {
    claim: "The writer shows young Einstein’s love of science was a real passion.",
    target: ["fell in love with physics"],
    decoys: [{ phrase: "struggled with other subjects like languages", why: "This shows what he found hard, not what he loved. Look for the phrase about falling in love." }],
    miss: "Look at the fact about his childhood compass.",
    explain: "‘Fell in love with physics’ compares his interest to romance: excitement and devotion. Physics was a passion he adored, not just a subject he was good at."
  },
  {
    claim: "Chatty, informal words make Einstein sound as exciting as a celebrity.",
    target: ["wowed the world"],
    decoys: [{ phrase: "groundbreaking papers", why: "This shows his work was important, but it is not the chatty, exciting language. Look for the informal phrase like ‘wowed’." }],
    miss: "Look at the facts about his theory of relativity.",
    explain: "‘Wowed the world’ is chatty, exciting language, more like a celebrity than a scientist. It makes his achievement sound thrilling to young readers."
  }
];
TEXTS.push({ id: "einstein-facts", type: "Non-fiction", mode: "Informative", form: "Fact file", level: "6ème",
  hook: "A compass, a failed exam and a year of miracles: the life of a genius.",
  TEXT, ANNOTATE, QUESTIONS, EVIDENCE, EXPLAIN, COLLECT });
}



/* ---------- TEXT 20 · The Selfish Giant · CM2 ---------- */
{
const TEXT = {
  "title": "The Selfish Giant",
  "intro": "Oscar Wilde, from The Happy Prince and Other Tales (1888). A public-domain literary fairy tale about selfishness, kindness and change.",
  "paras": [
    "EVERY afternoon, as they were coming from school, the children used to go and play in the Giant’s garden.",
    "It was a large lovely garden, with soft green grass. Here and there over the grass stood beautiful flowers like stars, and there were twelve peach-trees that in the spring-time broke out into delicate blossoms of pink and pearl, and in the autumn bore rich fruit. The birds sat on the trees and sang so sweetly that the children used to stop their games in order to listen to them. “How happy we are here!” they cried to each other.",
    "One day the Giant came back. He had been to visit his friend the Cornish ogre, and had stayed with him for seven years. After the seven years were over he had said all that he had to say, for his conversation was limited, and he determined to return to his own castle. When he arrived he saw the children playing in the garden.",
    "“What are you doing here?” he cried in a very gruff voice, and the children ran away.",
    "“My own garden is my own garden,” said the Giant; “any one can understand that, and I will allow nobody to play in it but myself.” So he built a high wall all round it, and put up a notice-board.",
    "TRESPASSERS",
    "WILL BE",
    "PROSECUTED",
    "He was a very selfish Giant.",
    "The poor children had now nowhere to play. They tried to play on the road, but the road was very dusty and full of hard stones, and they did not like it. They used to wander round the high wall when their lessons were over, and talk about the beautiful garden inside. “How happy we were there,” they said to each other.",
    "Then the Spring came, and all over the country there were little blossoms and little birds. Only in the garden of the Selfish Giant it was still winter. The birds did not care to sing in it as there were no children, and the trees forgot to blossom. Once a beautiful flower put its head out from the grass, but when it saw the notice-board it was so sorry for the children that it slipped back into the ground again, and went off to sleep. The only people who were pleased were the Snow and the Frost. “Spring has forgotten this garden,” they cried, “so we will live here all the year round.” The Snow covered up the grass with her great white cloak, and the Frost painted all the trees silver. Then they invited the North Wind to stay with them, and he came. He was wrapped in furs, and he roared all day about the garden, and blew the chimney-pots down. “This is a delightful spot,” he said, “we must ask the Hail on a visit.” So the Hail came. Every day for three hours he rattled on the roof of the castle till he broke most of the slates, and then he ran round and round the garden as fast as he could go. He was dressed in grey, and his breath was like ice.",
    "“I cannot understand why the Spring is so late in coming,” said the Selfish Giant, as he sat at the window and looked out at his cold white garden; “I hope there will be a change in the weather.”",
    "But the Spring never came, nor the Summer. The Autumn gave golden fruit to every garden, but to the Giant’s garden she gave none. “He is too selfish,” she said. So it was always Winter there, and the North Wind, and the Hail, and the Frost, and the Snow danced about through the trees.",
    "One morning the Giant was lying awake in bed when he heard some lovely music. It sounded so sweet to his ears that he thought it must be the King’s musicians passing by. It was really only a little linnet singing outside his window, but it was so long since he had heard a bird sing in his garden that it seemed to him to be the most beautiful music in the world. Then the Hail stopped dancing over his head, and the North Wind ceased roaring, and a delicious perfume came to him through the open casement. “I believe the Spring has come at last,” said the Giant; and he jumped out of bed and looked out.",
    "What did he see?",
    "He saw a most wonderful sight. Through a little hole in the wall the children had crept in, and they were sitting in the branches of the trees. In every tree that he could see there was a little child. And the trees were so glad to have the children back again that they had covered themselves with blossoms, and were waving their arms gently above the children’s heads. The birds were flying about and twittering with delight, and the flowers were looking up through the green grass and laughing. It was a lovely scene, only in one corner it was still winter. It was the farthest corner of the garden, and in it was standing a little boy. He was so small that he could not reach up to the branches of the tree, and he was wandering all round it, crying bitterly. The poor tree was still quite covered with frost and snow, and the North Wind was blowing and roaring above it. “Climb up! little boy,” said the Tree, and it bent its branches down as low as it could; but the boy was too tiny.",
    "And the Giant’s heart melted as he looked out. “How selfish I have been!” he said; “now I know why the Spring would not come here. I will put that poor little boy on the top of the tree, and then I will knock down the wall, and my garden shall be the children’s playground for ever and ever.” He was really very sorry for what he had done.",
    "So he crept downstairs and opened the front door quite softly, and went out into the garden. But when the children saw him they were so frightened that they all ran away, and the garden became winter again. Only the little boy did not run, for his eyes were so full of tears that he did not see the Giant coming. And the Giant stole up behind him and took him gently in his hand, and put him up into the tree. And the tree broke at once into blossom, and the birds came and sang on it, and the little boy stretched out his two arms and flung them round the Giant’s neck, and kissed him. And the other children, when they saw that the Giant was not wicked any longer, came running back, and with them came the Spring. “It is your garden now, little children,” said the Giant, and he took a great axe and knocked down the wall. And when the people were going to market at twelve o’clock they found the Giant playing with the children in the most beautiful garden they had ever seen.",
    "All day long they played, and in the evening they came to the Giant to bid him good-bye.",
    "“But where is your little companion?” he said: “the boy I put into the tree.” The Giant loved him the best because he had kissed him.",
    "“We don’t know,” answered the children; “he has gone away.”",
    "“You must tell him to be sure and come here to-morrow,” said the Giant. But the children said that they did not know where he lived, and had never seen him before; and the Giant felt very sad.",
    "Every afternoon, when school was over, the children came and played with the Giant. But the little boy whom the Giant loved was never seen again. The Giant was very kind to all the children, yet he longed for his first little friend, and often spoke of him. “How I would like to see him!” he used to say.",
    "Years went over, and the Giant grew very old and feeble. He could not play about any more, so he sat in a huge armchair, and watched the children at their games, and admired his garden. “I have many beautiful flowers,” he said; “but the children are the most beautiful flowers of all.”",
    "One winter morning he looked out of his window as he was dressing. He did not hate the Winter now, for he knew that it was merely the Spring asleep, and that the flowers were resting.",
    "Suddenly he rubbed his eyes in wonder, and looked and looked. It certainly was a marvellous sight. In the farthest corner of the garden was a tree quite covered with lovely white blossoms. Its branches were all golden, and silver fruit hung down from them, and underneath it stood the little boy he had loved.",
    "Downstairs ran the Giant in great joy, and out into the garden. He hastened across the grass, and came near to the child. And when he came quite close his face grew red with anger, and he said, “Who hath dared to wound thee?” For on the palms of the child’s hands were the prints of two nails, and the prints of two nails were on the little feet.",
    "“Who hath dared to wound thee?” cried the Giant; “tell me, that I may take my big sword and slay him.”",
    "“Nay!” answered the child; “but these are the wounds of Love.”",
    "“Who art thou?” said the Giant, and a strange awe fell on him, and he knelt before the little child.",
    "And the child smiled on the Giant, and said to him, “You let me play once in your garden, to-day you shall come with me to my garden, which is Paradise.”",
    "And when the children ran in that afternoon, they found the Giant lying dead under the tree, all covered with white blossoms."
  ]
};

const ANNOTATE = [
  {
    skill: "Simile",
    prompt: "Find the simile that makes the garden’s flowers seem <em>magical</em>.",
    target: ["beautiful flowers like stars"],
    decoys: [{ phrase: "delicate blossoms of pink and pearl", why: "A lovely description, but there is no comparison with “like” or “as”. Look a little earlier in the paragraph." }],
    miss: "Look in the second paragraph, where the garden is first described.",
    explain: "Stars shine and sparkle in the dark. Comparing flowers to stars makes the garden feel bright, special and almost magical, which makes losing it later feel sadder."
  },
  {
    skill: "Personification",
    prompt: "Find where winter weather is described like a <em>person decorating</em> the garden.",
    target: ["the Frost painted all the trees silver", "The Snow covered up the grass with her great white cloak"],
    decoys: [{ phrase: "Only in the garden of the Selfish Giant it was still winter", why: "This tells us it is winter, but the weather isn’t doing anything human. Look for Snow or Frost acting like people." }],
    miss: "Look for the Snow and the Frost in the long paragraph about Spring.",
    explain: "Snow wears a “cloak” and Frost “paints” the trees, as if they are people moving in. Wilde turns the weather into characters who are happy to take over the empty garden."
  },
  {
    skill: "Narrator’s judgement",
    prompt: "Find the short sentence where the narrator <em>judges</em> the Giant.",
    target: ["He was a very selfish Giant."],
    decoys: [{ phrase: "My own garden is my own garden", why: "Those are the Giant’s own words. Look for the narrator’s short comment about him." }],
    miss: "Look just after the notice-board.",
    explain: "After the long description of the wall and sign, this sentence is short and direct. The narrator tells us exactly what to think of the Giant, the way fairy tales often do."
  },
  {
    skill: "Metaphor",
    prompt: "Find the metaphor showing the Giant’s <em>feelings changing</em>.",
    target: ["the Giant’s heart melted"],
    decoys: [{ phrase: "How selfish I have been!", why: "That is what he says once he has changed. Look for the image that shows the change happening, just before it." }],
    miss: "Look at the moment the Giant sees the little boy crying.",
    explain: "A heart can’t really melt. The image links his feelings to the frozen garden: as his cold selfishness thaws, the winter in his garden can end too."
  },
  {
    skill: "Metaphor",
    prompt: "Find the metaphor showing what the old Giant <em>treasures most</em>.",
    target: ["the children are the most beautiful flowers of all"],
    decoys: [{ phrase: "I have many beautiful flowers", why: "Those are real flowers. Look at the rest of what he says." }],
    miss: "Look at what the Giant says when he is old and sits in his armchair.",
    explain: "The Giant once cared only about his garden. Now he calls the children his most beautiful flowers, showing that people matter more to him than anything he owns."
  }
];

const QUESTIONS = [
  {
    skill: "Cause and effect",
    q: "Why does it stay winter in the Giant’s garden?",
    opts: [
      { t: "Spring won’t come where the children are shut out", ok: true, why: "Right. The birds won’t sing “as there were no children”, and Autumn says “He is too selfish”. The weather matches the Giant’s selfishness." },
      { t: "The garden faces north, so it never gets any warm sunshine at all", why: "Nothing in the story mentions the direction of the garden. The reason is the Giant’s selfishness." },
      { t: "The Snow and the Frost locked Spring outside the high wall", why: "Snow and Frost are pleased Spring has forgotten the garden, but they didn’t lock it out. Spring stays away because of the Giant." },
      { t: "The Giant ordered winter to stay so no children would come back", why: "The Giant doesn’t understand why Spring is late: “I hope there will be a change in the weather.” He didn’t choose winter." }
    ]
  },
  
  {
    skill: "Inference",
    q: "When the kind Giant first comes outside, why do the children run away?",
    opts: [
      { t: "They still think he is cruel and frightening", ok: true, why: "Right. The last time they saw him he shouted “in a very gruff voice”. They don’t know he has changed yet." },
      { t: "They are starting a chasing game and want him to follow them", why: "They are “so frightened”. This is fear, not a game." },
      { t: "It is time for them to go home from school and have their tea", why: "They come back almost straight away, so they weren’t leaving for tea." },
      { t: "The little boy in the tree told them all to run", why: "The little boy doesn’t even see the Giant coming, because his eyes are full of tears." }
    ]
  },
  {
    skill: "Personification",
    q: "The Autumn says, “He is too selfish.” What is the effect of giving Autumn a voice?",
    opts: [
      { t: "Nature itself judges the Giant", ok: true, why: "Right. Even the seasons disapprove of him. It shows how wrong his selfishness is." },
      { t: "It shows Autumn is a real woman who lives next door to the Giant", why: "Autumn is a season given human words, not a real neighbour." },
      { t: "It shows Autumn wants to keep all of the golden fruit for herself", why: "Autumn gives fruit to every other garden, so she isn’t being greedy." },
      { t: "It shows Autumn is angry with the children for leaving", why: "Autumn’s comment is about the Giant, not the children." }
    ]
  },
  {
    skill: "Vocabulary",
    q: "“The Giant grew very old and feeble.” What does “feeble” mean?",
    opts: [
      { t: "Weak", ok: true, why: "Right. He “could not play about any more”, so he sits in an armchair. Feeble means weak." },
      { t: "Angry and bad-tempered", why: "He is kind and happy watching the children. Nothing suggests anger." },
      { t: "Very tall and strong", why: "He can no longer play, which shows he is weak, not strong." },
      { t: "Cheerful", why: "He may be cheerful, but the clue “could not play about any more” shows the word means weak." }
    ]
  },
  {
    skill: "Ending",
    q: "At the end, the Giant is found “all covered with white blossoms”. What does this suggest?",
    opts: [
      { t: "His death is peaceful, like a reward", ok: true, why: "Right. Blossoms mean new life and beauty. After being told he will go to “Paradise”, the flowers make his death gentle, not frightening." },
      { t: "It has snowed in the night and the snow has covered him", why: "The story says blossoms, not snow. It was a tree covered with “lovely white blossoms”." },
      { t: "The children covered him with flowers as a joke while he slept", why: "The children find him when they run in. They didn’t put the blossoms there." },
      { t: "The garden is dying and all the flowers are falling off", why: "The tree is covered in beautiful blossoms. The garden is full of life." }
    ]
  },
  {
    skill: "Summary",
    q: "Which sentence best sums up what happens in this text?",
    opts: [
      { t: "After building a wall to keep children out, the Giant's garden stays locked in winter until a small boy's kindness melts his selfishness, and years later he dies peacefully under the same tree.", ok: true, why: "Right. It covers the whole shape of the text, not just one part of it." },
      { t: "The Giant builds a tall wall all the way around his garden and puts up a large sign forbidding any trespassers from entering. This point is raised without being the central focus of the whole piece. Further events unfold elsewhere in the passage that this does not cover.", why: "True, but too narrow. It only covers part of the text and misses the main point." },
      { t: "The Giant goes on chasing every single child out of his garden for the whole of the rest of his very long life. Other characters and events are also part of what happens in the text. This is a smaller part of a much longer sequence of events overall.", why: "Too broad. This adds a claim the text does not actually make or support." },
      { t: "The North Wind and the Hail both come to visit the Giant's garden and stay there for the whole of that long winter. This detail appears alongside several others as the story unfolds. The wider text covers considerably more ground than this alone.", why: "A real detail, but a minor one. It is not what the text is mainly about." }
    ]
  }
];

const EVIDENCE = [
  {
    quote: "the children used to stop their games in order to listen to them",
    opts: [
      { t: "The garden was a joyful place", ok: true, why: "Right. The birds sang so sweetly that the children stopped playing just to listen. Everything about the garden was delightful." },
      { t: "The children were bored of playing their games every afternoon", why: "They stop because the birdsong is beautiful, not because they are bored." },
      { t: "The birds were so noisy the children couldn’t hear each other", why: "The birds sang “so sweetly”. It was lovely, not too loud." },
      { t: "The children did not enjoy playing in the garden", why: "They cry “How happy we are here!” They loved it." }
    ]
  },
  {
    quote: "He was dressed in grey, and his breath was like ice.",
    opts: [
      { t: "The winter visitors make the garden harsh and cold", ok: true, why: "Right. The Hail is grey and icy. Wilde makes the weather feel like an unwelcome, cold guest." },
      { t: "The Hail is a kind and friendly guest who helps the Giant", why: "The Hail breaks the slates on the roof. He isn’t helpful or friendly." },
      { t: "The Hail is the Giant’s brother, visiting from far away", why: "The Hail is the weather, invited by the North Wind, not the Giant’s family." },
      { t: "Spring has finally arrived in the garden", why: "Grey clothes and icy breath show winter, not spring." }
    ]
  },
  {
    quote: "he took a great axe and knocked down the wall",
    opts: [
      { t: "The Giant’s change is real, because he acts on it", ok: true, why: "Right. He doesn’t just say sorry. He destroys the wall that kept the children out." },
      { t: "The Giant is still angry and wants to destroy things", why: "He says “It is your garden now, little children.” This is kindness, not anger." },
      { t: "The wall was old and falling down, so it wasn’t safe any more", why: "Nothing says the wall was old. He knocks it down to share his garden." },
      { t: "The Giant is about to build a bigger and stronger wall", why: "He gives the garden to the children as their “playground for ever and ever”." }
    ]
  },
  {
    quote: "He did not hate the Winter now, for he knew that it was merely the Spring asleep",
    opts: [
      { t: "The Giant has grown patient and peaceful", ok: true, why: "Right. Once he hated winter; now he knows it will pass. He has become calm and wise." },
      { t: "Winter never comes to the Giant’s garden again", why: "It is “one winter morning”, so winter still comes. He just doesn’t hate it." },
      { t: "The Giant now hates Spring more than he hates Winter", why: "He sees Winter as Spring resting. He doesn’t hate either season." },
      { t: "The Giant is asleep and dreaming about Spring", why: "He is awake, “dressing” by the window." }
    ]
  }
];

const EXPLAIN = [
  {
    claim: "The garden reflects the Giant’s selfishness.",
    quote: "Only in the garden of the Selfish Giant it was still winter",
    opts: [
      { t: "“Only” sets his garden apart from the whole country. Winter stays where the children are shut out, matching his cold heart.", ok: true, why: "Strong. It explains “Only” and links the weather to the Giant’s character." },
      { t: "Spring arrived in all of the other gardens across the country, but the Giant’s garden stayed covered in snow and frost for the whole year.", why: "Retelling. How does this show selfishness?" },
      { t: "The writer describes the weather in the Giant’s garden in this sentence to tell the reader which season it is at this point in the story.", why: "Too general. What does the winter represent?" },
      { t: "This shows the Giant’s garden is high up on a mountain, where it is always much colder than the other gardens in the rest of the country.", why: "A misreading. The winter is caused by selfishness, not height." }
    ]
  },
  {
    claim: "Nature is on the children’s side.",
    quote: "it was so sorry for the children that it slipped back into the ground",
    opts: [
      { t: "A flower that pokes out of the grass sees the notice-board on the wall, and then it goes back down into the ground and falls asleep again.", why: "Retelling. What does the flower’s reaction show?" },
      { t: "A flower feeling “sorry” is given human feelings. By hiding again, it refuses to bloom anywhere the children aren’t allowed.", ok: true, why: "Strong. It explains the personification and what the flower’s choice shows." },
      { t: "This proves that flowers can read notice-boards and understand what the words on them mean, just like people can.", why: "A literal misreading of personification." },
      { t: "I think the flower is very kind, and I would feel sorry for the children too if they couldn’t play in their favourite garden.", why: "A personal response. Explain Wilde’s words." }
    ]
  },
  {
    claim: "The Giant changes completely.",
    quote: "the Giant’s heart melted",
    opts: [
      { t: "The Giant feels very sad when he looks out of the window and sees the little boy crying in the corner of the garden, under the frozen tree.", why: "Retelling. How does the image show change?" },
      { t: "The writer uses a metaphor about the Giant’s heart in this sentence to describe his emotions at this important moment in the story.", why: "Which emotions, and what does “melted” add?" },
      { t: "A frozen heart melting links his feelings to the winter garden. As his cold selfishness thaws, Spring can finally return.", ok: true, why: "Strong. It connects the metaphor to the winter setting and to his change." },
      { t: "This shows the Giant is ill, because his heart has stopped working properly and it is too warm inside his castle.", why: "A literal misreading of a metaphor." }
    ]
  },
  {
    claim: "Sharing the garden brings it back to life.",
    quote: "with them came the Spring",
    opts: [
      { t: "The children come running back into the garden through the hole in the wall, and at the same time the season changes from winter into spring.", why: "Retelling. Why does it matter that Spring comes “with them”?" },
      { t: "This proves that spring always starts on the exact day that children come back to school after the winter holidays.", why: "Overclaiming, and off the text. This is about the Giant’s garden." },
      { t: "Spring arrives with the children, not with the calendar. The phrase links the Giant’s kindness directly to new life.", ok: true, why: "Strong. It explains the timing and connects it to the story’s message." },
      { t: "The writer puts the word “Spring” with a capital letter in this part of the story, which is interesting and makes it stand out for the reader.", why: "An observation. What does it show?" }
    ]
  },
  {
    claim: "The ending is peaceful rather than tragic.",
    quote: "all covered with white blossoms",
    opts: [
      { t: "The Giant has died under the tree in the far corner of his garden, and the children find him lying there when they run in to play that afternoon.", why: "Retelling. Why do the blossoms matter?" },
      { t: "White blossoms suggest purity and new life. Covering the Giant with them makes his death gentle, like a reward for his kindness.", ok: true, why: "Strong. It explains what the blossoms suggest and their effect on the ending." },
      { t: "This shows the children were upset with the Giant for being old and covered him in flowers so that nobody else could find him.", why: "A misreading. The children find him already covered." },
      { t: "The story ends with a description of flowers, which makes it sad.", why: "Vague, and it misses that the image is peaceful." }
    ]
  }
];
TEXTS.push({ id: "selfish-giant", type: "Fiction", mode: "Creative", form: "Literary fairy tale", level: "CM2", hook: "A wall keeps the children out, and traps the Giant’s garden in winter.", TEXT, ANNOTATE, QUESTIONS, EVIDENCE, EXPLAIN });
}

/* ---------- TEXT 21 · The Open Window · 6ème ---------- */
{
const TEXT = {
  "title": "The Open Window",
  "intro": "Saki (H. H. Munro), first published in 1911 and collected in Beasts and Super-Beasts (1914). A public-domain short story about deception and appearances.",
  "paras": [
    "“My aunt will be down presently, Mr. Nuttel,” said a very self-possessed young lady of fifteen; “in the meantime you must try and put up with me.”",
    "Framton Nuttel endeavoured to say the correct something which should duly flatter the niece of the moment without unduly discounting the aunt that was to come. Privately he doubted more than ever whether these formal visits on a succession of total strangers would do much towards helping the nerve cure which he was supposed to be undergoing.",
    "“I know how it will be,” his sister had said when he was preparing to migrate to this rural retreat; “you will bury yourself down there and not speak to a living soul, and your nerves will be worse than ever from moping. I shall just give you letters of introduction to all the people I know there. Some of them, as far as I can remember, were quite nice.”",
    "Framton wondered whether Mrs. Sappleton, the lady to whom he was presenting one of the letters of introduction, came into the nice division.",
    "“Do you know many of the people round here?” asked the niece, when she judged that they had had sufficient silent communion.",
    "“Hardly a soul,” said Framton. “My sister was staying here, at the rectory, you know, some four years ago, and she gave me letters of introduction to some of the people here.”",
    "He made the last statement in a tone of distinct regret.",
    "“Then you know practically nothing about my aunt?” pursued the self-possessed young lady.",
    "“Only her name and address,” admitted the caller. He was wondering whether Mrs. Sappleton was in the married or widowed state. An undefinable something about the room seemed to suggest masculine habitation.",
    "“Her great tragedy happened just three years ago,” said the child; “that would be since your sister’s time.”",
    "“Her tragedy?” asked Framton; somehow in this restful country spot tragedies seemed out of place.",
    "“You may wonder why we keep that window wide open on an October afternoon,” said the niece, indicating a large French window that opened on to a lawn.",
    "“It is quite warm for the time of the year,” said Framton; “but has that window got anything to do with the tragedy?”",
    "“Out through that window, three years ago to a day, her husband and her two young brothers went off for their day’s shooting. They never came back. In crossing the moor to their favourite snipe-shooting ground they were all three engulfed in a treacherous piece of bog. It had been that dreadful wet summer, you know, and places that were safe in other years gave way suddenly without warning. Their bodies were never recovered. That was the dreadful part of it.” Here the child’s voice lost its self-possessed note and became falteringly human. “Poor aunt always thinks that they will come back some day, they and the little brown spaniel that was lost with them, and walk in at that window just as they used to do. That is why the window is kept open every evening till it is quite dusk. Poor dear aunt, she has often told me how they went out, her husband with his white waterproof coat over his arm, and Ronnie, her youngest brother, singing ‘Bertie, why do you bound?’ as he always did to tease her, because she said it got on her nerves. Do you know, sometimes on still, quiet evenings like this, I almost get a creepy feeling that they will all walk in through that window—”",
    "She broke off with a little shudder. It was a relief to Framton when the aunt bustled into the room with a whirl of apologies for being late in making her appearance.",
    "“I hope Vera has been amusing you?” she said.",
    "“She has been very interesting,” said Framton.",
    "“I hope you don’t mind the open window,” said Mrs. Sappleton briskly; “my husband and brothers will be home directly from shooting, and they always come in this way. They’ve been out for snipe in the marshes to-day, so they’ll make a fine mess over my poor carpets. So like you men-folk, isn’t it?”",
    "She rattled on cheerfully about the shooting and the scarcity of birds, and the prospects for duck in the winter. To Framton it was all purely horrible. He made a desperate but only partially successful effort to turn the talk on to a less ghastly topic; he was conscious that his hostess was giving him only a fragment of her attention, and her eyes were constantly straying past him to the open window and the lawn beyond. It was certainly an unfortunate coincidence that he should have paid his visit on this tragic anniversary.",
    "“The doctors agree in ordering me complete rest, an absence of mental excitement, and avoidance of anything in the nature of violent physical exercise,” announced Framton, who laboured under the tolerably widespread delusion that total strangers and chance acquaintances are hungry for the least detail of one’s ailments and infirmities, their cause and cure. “On the matter of diet they are not so much in agreement,” he continued.",
    "“No?” said Mrs. Sappleton, in a voice which only replaced a yawn at the last moment. Then she suddenly brightened into alert attention—but not to what Framton was saying.",
    "“Here they are at last!” she cried. “Just in time for tea, and don’t they look as if they were muddy up to the eyes!”",
    "Framton shivered slightly and turned towards the niece with a look intended to convey sympathetic comprehension. The child was staring out through the open window with dazed horror in her eyes. In a chill shock of nameless fear Framton swung round in his seat and looked in the same direction.",
    "In the deepening twilight three figures were walking across the lawn towards the window; they all carried guns under their arms, and one of them was additionally burdened with a white coat hung over his shoulders. A tired brown spaniel kept close at their heels. Noiselessly they neared the house, and then a hoarse young voice chanted out of the dusk: “I said, Bertie, why do you bound?”",
    "Framton grabbed wildly at his stick and hat; the hall-door, the gravel-drive, and the front gate were dimly-noted stages in his headlong retreat. A cyclist coming along the road had to run into the hedge to avoid an imminent collision.",
    "“Here we are, my dear,” said the bearer of the white mackintosh, coming in through the window; “fairly muddy, but most of it’s dry. Who was that who bolted out as we came up?”",
    "“A most extraordinary man, a Mr. Nuttel,” said Mrs. Sappleton; “could only talk about his illnesses, and dashed off without a word of good-bye or apology when you arrived. One would think he had seen a ghost.”",
    "“I expect it was the spaniel,” said the niece calmly; “he told me he had a horror of dogs. He was once hunted into a cemetery somewhere on the banks of the Ganges by a pack of pariah dogs, and had to spend the night in a newly dug grave with the creatures snarling and grinning and foaming just above him. Enough to make anyone lose their nerve.”",
    "Romance at short notice was her speciality."
  ]
};

const ANNOTATE = [
  {
    skill: "Characterisation",
    prompt: "Find the phrase showing the niece is <em>unusually calm and in control</em>.",
    target: ["a very self-possessed young lady of fifteen"],
    decoys: [{ phrase: "the niece of the moment", why: "This just refers to her. Look for the description in the very first sentence." }],
    miss: "Look at how the niece is described in the first line.",
    explain: "“Self-possessed” means calm and completely in charge of herself, which is unusual at fifteen. Saki signals from the first line that she will control the conversation."
  },
  {
    skill: "Background detail",
    prompt: "Find the detail explaining <em>why Framton is in the countryside</em>.",
    target: ["the nerve cure which he was supposed to be undergoing"],
    decoys: [{ phrase: "letters of introduction", why: "These explain why he is visiting strangers, not why he came to the countryside. Look for what is wrong with him." }],
    miss: "Look at the second paragraph, where we learn about Framton.",
    explain: "Framton is having a “nerve cure”: he is a nervous, anxious man sent to rest. That makes him the perfect victim for a frightening story."
  },
  {
    skill: "Performance",
    prompt: "Find the niece’s <em>acting</em> that makes Framton turn round in fear.",
    target: ["staring out through the open window with dazed horror in her eyes"],
    decoys: [{ phrase: "a look intended to convey sympathetic comprehension", why: "That is Framton’s expression, not the niece’s." }],
    miss: "Framton turns to the niece. What is she doing?",
    explain: "The niece knows the men are alive, so her “dazed horror” is pure acting. It confirms her story at the perfect moment and makes Framton spin round."
  },
  {
    skill: "Twist ending",
    prompt: "Find the final sentence that <em>reveals the truth</em> about the niece.",
    target: ["Romance at short notice was her speciality."],
    decoys: [{ phrase: "I expect it was the spaniel", why: "This is another invented story, not the narrator’s reveal. Look at the very last line." }],
    miss: "Read the last line of the story.",
    explain: "The narrator explains everything in one dry sentence: the niece invents exciting stories (“romance”) instantly (“at short notice”), and she is expert at it."
  }
];

const QUESTIONS = [
  {
    skill: "Dramatic irony",
    q: "Why does Mrs. Sappleton’s cheerful talk about shooting horrify Framton?",
    opts: [
      { t: "He believes the men she expects are dead", ok: true, why: "Right. Thanks to the niece, he thinks Mrs. Sappleton is waiting for ghosts, so her chatter seems like grief-stricken madness." },
      { t: "He strongly disapproves of people who shoot birds for sport", why: "The story never mentions his views on shooting. His horror comes from the niece’s story." },
      { t: "He is bored because she talks for so long about the weather", why: "The narrator says it was “purely horrible” to him, not boring." },
      { t: "He is jealous of her husband", why: "Framton has never met her husband. Jealousy has nothing to do with it." }
    ]
  },
  
  {
    skill: "Narrator’s tone",
    q: "What does the narrator suggest about Framton when he talks about his illnesses?",
    opts: [
      { t: "He wrongly thinks strangers want to hear about his health", ok: true, why: "Right. He “laboured under the tolerably widespread delusion” that strangers are “hungry” for details of his ailments. The narrator gently mocks him." },
      { t: "He is a doctor who likes to give people advice about their health", why: "He is the patient: “The doctors agree in ordering me complete rest.”" },
      { t: "He is modest and never likes to talk about himself", why: "He talks about his diet and illnesses to a near stranger. That isn’t modest." },
      { t: "He is dangerously ill and may not survive", why: "He is resting his nerves. Nothing suggests serious danger." }
    ]
  },
  {
    skill: "Inference",
    q: "Why does the niece break off her story “with a little shudder”?",
    opts: [
      { t: "It makes her story feel real, just as her aunt arrives", ok: true, why: "Right. The shudder adds a final touch of fear to her performance and leaves Framton ready to believe what comes next." },
      { t: "She is genuinely terrified of ghosts coming in through the window", why: "She invented the ghosts. Her calm at the end shows she is never really frightened." },
      { t: "She is shivering because the window is open on an October afternoon", why: "Framton says “It is quite warm for the time of the year.” The shudder is part of her act." },
      { t: "She has seen the men walking across the lawn", why: "The men appear much later, after the aunt has talked for a while." }
    ]
  },
  {
    skill: "Vocabulary in context",
    q: "In the last line, what does “romance” mean?",
    opts: [
      { t: "Inventing exciting stories", ok: true, why: "Right. An older meaning of “romance” is a fanciful, adventurous tale. The niece makes them up instantly." },
      { t: "Falling in love with somebody", why: "There is no love story here. Use the context: she has just invented two tales." },
      { t: "Speaking a Romance language, such as French", why: "The niece speaks English throughout. Context shows the word is about storytelling." },
      { t: "Being polite to visitors", why: "She is polite, but she uses it to fool the visitor. The word refers to her stories." }
    ]
  },
  {
    skill: "Summary",
    q: "Which sentence best sums up what happens in this text?",
    opts: [
      { t: "A visitor is told an invented tragic story about an open window by a self-possessed niece, and when the supposedly dead men calmly walk in, he flees in terror.", ok: true, why: "Right. It covers the whole shape of the text, not just one part of it." },
      { t: "The niece calmly explains to Framton that her aunt's husband and two young brothers disappeared into a bog three years ago. Other parts of the story focus on different details.", why: "True, but too narrow. It only covers part of the text and misses the main point." },
      { t: "The aunt reveals to Framton at the very end that she made up the whole tragic story herself in order to frighten him. The rest of the text develops in a different direction.", why: "Too broad. This adds a claim the text does not actually make or support." },
      { t: "Framton mentions early on that his own sister gave him several letters of introduction to people living nearby. The story continues well beyond this particular moment.", why: "A real detail, but a minor one. It is not what the text is mainly about." }
    ]
  }
];

const EVIDENCE = [
  {
    quote: "Then you know practically nothing about my aunt?",
    opts: [
      { t: "The niece is checking her lie can’t be exposed", ok: true, why: "Right. She confirms he knows nothing before she tells a single word of her story." },
      { t: "The niece wants to tell Framton her aunt’s life story", why: "She tells an invented tragedy, not a true life story." },
      { t: "The niece thinks Framton is lying about who he is", why: "She believes him completely, which is exactly why she can trick him." },
      { t: "The aunt has a dark secret that nobody is allowed to know", why: "The aunt has no secret. The niece makes one up." }
    ]
  },
  {
    quote: "her eyes were constantly straying past him to the open window",
    opts: [
      { t: "She is watching for her husband, but Framton misreads it", ok: true, why: "Right. She is simply waiting for the men to come home. After the niece’s story, Framton thinks she is waiting for ghosts." },
      { t: "She is looking for a ghost she believes will come through the window", why: "She expects her real husband and brothers, “home directly from shooting”." },
      { t: "She is being rude to Framton on purpose because she dislikes him", why: "She is distracted, not deliberately rude." },
      { t: "She is frightened of the open window", why: "She asks him not to mind the open window. She isn’t afraid of it." }
    ]
  },
  {
    quote: "said the niece calmly",
    opts: [
      { t: "The niece feels no guilt about her trick", ok: true, why: "Right. Framton has just fled in terror, yet she calmly invents another story to explain it." },
      { t: "The niece is upset that Framton ran away without saying goodbye", why: "“Calmly” shows the opposite of being upset." },
      { t: "The niece did not notice that Framton had left the house", why: "She explains his exit immediately, so she clearly noticed." },
      { t: "The niece is worried about Framton’s health", why: "She uses his exit for a new tale, not out of concern." }
    ]
  }
];

const EXPLAIN = [
  {
    claim: "Framton is easy to fool.",
    quote: "the nerve cure which he was supposed to be undergoing",
    opts: [
      { t: "A “nerve cure” shows Framton is anxious and fragile. A nervous man among strangers is the perfect audience for a ghost story.", ok: true, why: "Strong. It explains the phrase and links it to why the trick works." },
      { t: "Framton has come to stay in the countryside because his doctors told him to rest, and his sister has given him letters to strangers.", why: "Retelling. Why does this make him easy to fool?" },
      { t: "This proves Framton is seriously ill in hospital and needs to have an operation very soon, so he can’t think clearly about anything.", why: "Overclaiming. He is resting his nerves, not in hospital." },
      { t: "I think Framton should have stayed at home instead of visiting people he didn’t know, because it made him more nervous.", why: "A personal opinion. Explain Saki’s words." }
    ]
  },
  {
    claim: "The niece’s lie is convincing.",
    quote: "three years ago to a day",
    opts: [
      { t: "The niece tells Framton that her aunt’s husband and brothers went out shooting exactly three years before this afternoon.", why: "Retelling. Why is the detail convincing?" },
      { t: "This shows that something terrible really did happen to the family exactly three years ago, which is why the window is open.", why: "A misreading. The tragedy is invented." },
      { t: "The writer uses a time phrase here, which is a way of telling the reader when something happened in the past.", why: "What does this particular time phrase do?" },
      { t: "“To a day” is precise, as if remembered exactly. Exact details make an invented tragedy sound like fact.", ok: true, why: "Strong. It explains the effect of precision on the lie." }
    ]
  },
  {
    claim: "The narrator hints that the niece is acting.",
    quote: "became falteringly human",
    opts: [
      { t: "The niece becomes very sad while she tells the story, because she misses her uncle and her aunt’s young brothers so much.", why: "A misreading. The men are alive; the sadness is performed." },
      { t: "Her voice only “became” human, as if switched on. “Falteringly” sounds like a practised tremble, a clue on second reading.", ok: true, why: "Strong. Both words explained and linked to the hint." },
      { t: "The writer describes the niece’s voice in this part of the story, using an adverb to show the reader how she is speaking.", why: "Word class named, no effect explained." },
      { t: "This proves the niece is a robot pretending to be a person, because the narrator says her voice “became” human only at this point.", why: "A literal misreading." }
    ]
  },
  {
    claim: "The ending is dryly humorous.",
    quote: "Romance at short notice was her speciality",
    opts: [
      { t: "The niece is very good at romance and falls in love quickly with the young men she meets in the countryside.", why: "A misreading of “romance”." },
      { t: "The last sentence of the story tells the reader something important about the niece’s character and what she is especially good at doing.", why: "Vague. What is funny about it?" },
      { t: "The flat, formal line explains both lies at once. Calling lying a “speciality” treats it like a skill, which makes the twist funny.", ok: true, why: "Strong. It explains the tone and the word “speciality”." },
      { t: "This shows the niece will get into serious trouble with her aunt and uncle when they find out about all of the lies she told Framton.", why: "Off the text. The story ends before any consequences." }
    ]
  }
];
const COLLECT = [
  {
    claim: "Vera begins by finding out how little Framton actually knows about her aunt’s household.",
    opts: [
      { t: "Do you know many of the people round here?", ok: true, why: "Right. This is Vera’s opening probe. Once she learns he knows almost no one, she is free to invent a story he cannot check." },
      { t: "Only her name and address", why: "This is Framton’s own answer. It shows his ignorance, but the claim is about Vera finding it out, which is her question, not his reply." },
      { t: "Her great tragedy happened just three years ago", why: "Here Vera is already beginning her invented story, which comes after she has checked what he knows, not the checking itself." },
      { t: "Romance at short notice was her speciality", why: "True of Vera in general, but this is the narrator’s closing verdict, not the moment she checks his knowledge." }
    ]
  },
  {
    claim: "The story’s final line names what Vera is really good at.",
    opts: [
      { t: "Romance at short notice was her speciality", ok: true, why: "Right. The last line names her gift: inventing a convincing story on the spot, ‘at short notice’." },
      { t: "I expect it was the spaniel", why: "This shows Vera inventing again, but it is a fresh example of her talent, not the line that names it." },
      { t: "The child was staring out through the open window with dazed horror in her eyes", why: "This is her performance earlier, selling the ghost story with her face, not the line that names her talent." },
      { t: "could only talk about his illnesses", why: "This is the aunt describing Framton. It is not about Vera’s talent at all." }
    ]
  },
  {
    claim: "Vera plants a detail about what one of the men is wearing, which the reader later sees on the figures walking back.",
    target: ["his white waterproof coat over his arm"],
    decoys: [
      { phrase: "engulfed in a treacherous piece of bog", why: "A vivid part of the tragedy, but nothing about the bog is seen again. Look for a detail you later see on the figures." },
      { phrase: "the window is kept open every evening", why: "This explains the open window, the setting for the return, not a detail worn by the men that comes back into view." }
    ],
    miss: "Find the specific thing one man is described wearing, which you later see on the figures crossing the lawn.",
    explain: "Vera says the husband carried ‘his white waterproof coat over his arm’. When the figures appear, one wears ‘a white coat’, so her invented detail seems to come true."
  },
  {
    claim: "The aunt, who knows nothing of Vera’s ghost story, says something that makes Framton believe the dead men are returning.",
    target: ["they always come in this way"],
    decoys: [
      { phrase: "Here they are at last", why: "She says this when the figures appear, but by then Framton already believes. Look for the earlier line that plants the belief." },
      { phrase: "don’t they look as if they were muddy up to the eyes", why: "This describes the figures after they appear, once the fright has already taken hold." }
    ],
    miss: "Find the aunt’s calm remark, made before anyone appears, that matches Vera’s story about the men walking back in.",
    explain: "The aunt says her husband and brothers ‘always come in this way’, innocently echoing Vera’s ghost story and convincing Framton the dead are returning."
  }
];
TEXTS.push({ id: "open-window", type: "Fiction", mode: "Creative", form: "Short story", level: "6ème", hook: "An open window, a tragic story and a visitor who believes every word.", TEXT, ANNOTATE, QUESTIONS, EVIDENCE, EXPLAIN, COLLECT });
}
{
const TEXT = {
  title: "Marley Was Dead",
  intro: "Charles Dickens, the opening of A Christmas Carol (1843). Extract.",
  paras: [
    "Marley was dead: to begin with. There is no doubt whatever about that. The register of his burial was signed by the clergyman, the clerk, the undertaker, and the chief mourner. Scrooge signed it: and Scrooge’s name was good upon ’Change, for anything he chose to put his hand to. Old Marley was as dead as a door-nail.",
    "Mind! I don’t mean to say that I know, of my own knowledge, what there is particularly dead about a door-nail. I might have been inclined, myself, to regard a coffin-nail as the deadest piece of ironmongery in the trade. But the wisdom of our ancestors is in the simile; and my unhallowed hands shall not disturb it, or the Country’s done for. You will therefore permit me to repeat, emphatically, that Marley was as dead as a door-nail.",
    "Oh! But he was a tight-fisted hand at the grindstone, Scrooge! a squeezing, wrenching, grasping, scraping, clutching, covetous old sinner! Hard and sharp as flint, from which no steel had ever struck out generous fire; secret, and self-contained, and solitary as an oyster.",
    "The cold within him froze his old features, nipped his pointed nose, shrivelled his cheek, stiffened his gait; made his eyes red, his thin lips blue; and spoke out shrewdly in his grating voice. A frosty rime was on his head, and on his eyebrows, and his wiry chin. He carried his own low temperature always about with him; he iced his office in the dog-days; and didn’t thaw it one degree at Christmas.",
    "External heat and cold had little influence on Scrooge. No warmth could warm, no wintry weather chill him. No wind that blew was bitterer than he, no falling snow was more intent upon its purpose, no pelting rain less open to entreaty. Foul weather didn’t know where to have him. The heaviest rain, and snow, and hail, and sleet, could boast of the advantage over him in only one respect. They often came down handsomely, and Scrooge never did.",
    "Nobody ever stopped him in the street to say, with gladsome looks, “My dear Scrooge, how are you? When will you come to see me?” No beggars implored him to bestow a trifle, no children asked him what it was o’clock, no man or woman ever once in all his life inquired the way to such and such a place, of Scrooge. Even the blind men’s dogs appeared to know him; and when they saw him coming on, would tug their owners into doorways and up courts; and then would wag their tails as though they said, “No eye at all is better than an evil eye, dark master!”",
    "Once upon a time — of all the good days in the year, on Christmas Eve — old Scrooge sat busy in his counting-house. It was cold, bleak, biting weather: foggy withal: and he could hear the people in the court outside go wheezing up and down, beating their hands upon their breasts, and stamping their feet upon the pavement stones to warm them.",
    "The city clocks had only just gone three, but it was quite dark already: it had not been light all day: and candles were flaring in the windows of the neighbouring offices, like ruddy smears upon the palpable brown air. The fog came pouring in at every chink and keyhole, and was so dense without, that although the court was of the narrowest, the houses opposite were mere phantoms.",
    "The door of Scrooge’s counting-house was open that he might keep his eye upon his clerk, who in a dismal little cell beyond, a sort of tank, was copying letters. Scrooge had a very small fire, but the clerk’s fire was so very much smaller that it looked like one coal. But he couldn’t replenish it, for Scrooge kept the coal-box in his own room; and so surely as the clerk came in with the shovel, the master predicted that it would be necessary for them to part. Wherefore the clerk put on his white comforter, and tried to warm himself at the candle; in which effort, not being a man of a strong imagination, he failed."
  ]
};

const ANNOTATE = [
  {
    skill: "Direct address",
    prompt: "Find the moment the narrator speaks <em>straight to you</em>, the reader.",
    target: ["You will therefore permit me to repeat"],
    decoys: [{ phrase: "There is no doubt whatever about that", why: "The narrator is insisting here, but he is talking about Marley, not to you. Look for the word “you”." }],
    miss: "Look at the last sentence of the second paragraph.",
    explain: "The narrator turns and asks the reader’s permission, as if we were sitting with him. It makes the storyteller feel like a person in the room before the ghosts arrive."
  },
  {
    skill: "Mood",
    prompt: "Find the <em>three describing words</em> that set the weather of Christmas Eve.",
    target: ["cold, bleak, biting weather"],
    decoys: [{ phrase: "Once upon a time", why: "That is how the paragraph opens, and it sounds like a fairy tale, but it does not describe the weather." }],
    miss: "Look at the sentence just after Scrooge sits down in his counting-house.",
    explain: "Three harsh words in a row, ending on “biting”, make the cold feel like something that attacks you. The weather outside matches the man inside."
  },
  {
    skill: "Atmosphere",
    prompt: "Find where the fog turns ordinary buildings into something <em>ghostly</em>.",
    target: ["the houses opposite were mere phantoms"],
    decoys: [{ phrase: "candles were flaring in the windows", why: "A good detail for the gloom, but candles are still ordinary. Look for a word that belongs in a ghost story." }],
    miss: "Look at the end of the paragraph about the fog.",
    explain: "“Phantoms” means ghosts. Dickens makes the real street look haunted before any ghost appears, so the reader is ready to believe one."
  },
  {
    skill: "Word choice",
    prompt: "Find the <em>list of grabbing words</em> used to describe Scrooge.",
    target: ["squeezing, wrenching, grasping, scraping, clutching"],
    decoys: [{ phrase: "Hard and sharp as flint", why: "That is a comparison, and a good one, but it is not a list of actions. Look for several words ending in “-ing”." }],
    miss: "Look at the paragraph that begins with “Oh!”",
    explain: "Five verbs of holding on tight pile up one after another. We can almost feel Scrooge’s hands, so his meanness becomes physical rather than an idea."
  }
];

const QUESTIONS = [
  {
    skill: "Point of view",
    q: "Who is telling this part of the story?",
    opts: [
      { t: "A narrator outside the story who knows Scrooge and comments on him", ok: true, why: "Right. The narrator sees Scrooge from outside, judges him, and even speaks to the reader." },
      { t: "Scrooge himself, looking back on the day from later in his life", why: "Scrooge is called “he” throughout. A narrator, not Scrooge, is describing him." },
      { t: "The clerk in the cold little cell beyond the open door", why: "The clerk is described from outside too, and he never speaks in this extract." },
      { t: "Marley himself, telling the story of his old partner from beyond the grave", why: "Marley is dead before the story starts, and nothing here is in his voice." }
    ]
  },
  {
    skill: "Narrator’s tone",
    q: "What does the joke about the door-nail add to the opening?",
    opts: [
      { t: "A chatty, joking voice that makes the storyteller feel real", ok: true, why: "Right. He argues with himself about coffin-nails for fun. The warmth of the voice makes the ghost story easier to accept later." },
      { t: "A serious warning that the reader should not trust the story", why: "He is playing, not warning. He then repeats the phrase “emphatically”." },
      { t: "Proof that the narrator stood beside Marley’s coffin himself", why: "He says the opposite: he does not know “of my own knowledge”." },
      { t: "A hint that Marley might not really be dead after all", why: "The whole point is to insist that Marley is dead, so that his ghost will matter." }
    ]
  },
  {
    skill: "Mood",
    q: "What mood do the last three paragraphs create?",
    opts: [
      { t: "Shut in and gloomy, with the city closed off by fog", ok: true, why: "Right. Dark at three, fog through every keyhole, houses like phantoms. The world feels sealed and unfriendly." },
      { t: "Peaceful and still, because the fog makes everything quiet", why: "People wheeze, beat their hands and stamp their feet. It is uncomfortable, not peaceful." },
      { t: "Warm and busy, with neighbours calling in on each other", why: "Nobody calls on Scrooge at all. That is the point of the paragraph before." },
      { t: "Exciting and hopeful, because Christmas is on its way", why: "Christmas is mentioned, but everything around it is cold and dark." }
    ]
  },
  {
    skill: "Inference",
    q: "What does the clerk’s fire tell us about Scrooge?",
    opts: [
      { t: "He counts even a shovel of coal against his own clerk", ok: true, why: "Right. The clerk’s fire looks like “one coal”, the coal-box lives in Scrooge’s room, and asking for more risks his job." },
      { t: "He cannot afford enough coal for two fires in the office at once", why: "Scrooge has money. His name is “good upon ’Change” for anything he signs." },
      { t: "He has forgotten that the clerk is working next door", why: "He keeps the door open on purpose so he can watch him." },
      { t: "He thinks the clerk works better in the cold weather", why: "Nothing suggests a reason like that. He simply guards the coal." }
    ]
  },
  
  {
    skill: "Summary",
    q: "Which sentence best sums up what happens in this text?",
    opts: [
      { t: "The opening insists that Marley is definitely dead, then paints Scrooge as a coldhearted miser on a foggy Christmas Eve, guarding even his clerk's single coal.", ok: true, why: "Right. It covers the whole shape of the text, not just one part of it." },
      { t: "The narrator insists more than once, quite emphatically, that Marley really was as dead as an old door-nail. Elsewhere in the text, different events take centre stage.", why: "True, but too narrow. It only covers part of the text and misses the main point." },
      { t: "Scrooge travels across the city on Christmas Eve to visit his clerk's home and apologise for his own harsh behaviour. Other parts of the story focus on different details.", why: "Too broad. This adds a claim the text does not actually make or support." },
      { t: "Dogs belonging to blind men pull their owners into doorways and up side streets whenever they see Scrooge coming near. The rest of the text develops in a different direction.", why: "A real detail, but a minor one. It is not what the text is mainly about." }
    ]
  }
];

const EVIDENCE = [
  {
    quote: "solitary as an oyster",
    opts: [
      { t: "Scrooge shuts himself away from other people", ok: true, why: "Right. An oyster is sealed shut and hard to open, which is how Scrooge lives." },
      { t: "Scrooge is slippery and difficult to catch hold of", why: "That is not what an oyster suggests. Think about the closed shell." },
      { t: "Scrooge lives near the sea and eats simple food", why: "The oyster is a comparison, not a fact about where he lives." },
      { t: "Scrooge is rough on the outside but soft underneath", why: "That reading would make him secretly kind, which nothing here supports." }
    ]
  },
  {
    quote: "would tug their owners into doorways and up courts",
    opts: [
      { t: "Even animals keep out of Scrooge’s way", ok: true, why: "Right. The dogs pull their owners aside. Dickens makes his coldness so strong that animals feel it too." },
      { t: "The streets are too narrow for people to pass", why: "The dogs move for Scrooge in particular, not for lack of room." },
      { t: "The dogs are badly trained and pull wherever they like", why: "They pull for a reason, and the story gives it in the next line." },
      { t: "Scrooge is kind to animals but not to people", why: "The dogs avoid him. That is the opposite of kindness." }
    ]
  },
  {
    quote: "he iced his office in the dog-days",
    opts: [
      { t: "His coldness has nothing to do with the season", ok: true, why: "Right. The dog-days are the hottest of the year, yet his office still freezes." },
      { t: "He saves money by never lighting a fire in summer", why: "Money is not mentioned here. The point is his effect on a room." },
      { t: "He keeps ice in the office to cool it down in summer", why: "A literal reading. Dickens means the chill he brings with him." },
      { t: "His office faces away from the sun all year round", why: "The cause is Scrooge, not the direction the building faces." }
    ]
  }
];

const EXPLAIN = [
  {
    claim: "The narrator wants us to enjoy his company.",
    quote: "You will therefore permit me to repeat",
    opts: [
      { t: "The narrator says this line after his little argument about what is dead about a door-nail and about coffin-nails.", why: "Retelling. What does speaking to the reader do?" },
      { t: "The narrator asks the reader for permission before he repeats himself, which is the polite way to say something twice.", why: "True but flat. Why does Dickens want that politeness here?" },
      { t: "Turning to the reader makes him a storyteller in the room, not a book. We are more willing to follow him into a ghost story.", ok: true, why: "Strong. It explains the effect of direct address and links it to what comes next." },
      { t: "The narrator uses the word “you” here, which is called direct address, a technique writers use when they speak to the reader of a book.", why: "Naming the technique is a start. Say what it does." }
    ]
  },
  {
    claim: "Scrooge’s coldness is a fact about the man, not the weather.",
    quote: "He carried his own low temperature always about with him",
    opts: [
      { t: "Scrooge feels the cold more than other people do, so he is always chilly wherever he happens to go in the city.", why: "A misreading. He makes the cold, he does not suffer it." },
      { t: "A temperature cannot be carried. The metaphor makes the chill part of Scrooge, so every room he enters cools down.", ok: true, why: "Strong. It names the impossibility and explains what it shows." },
      { t: "Scrooge walks about the streets of London in winter, and the narrator tells us he always has a low temperature.", why: "Retelling. Which word is impossible, and why?" },
      { t: "This sentence is an example of a metaphor, which is a comparison that says one thing is another thing rather than saying it is like it.", why: "An observation. What does the metaphor achieve?" }
    ]
  },
  {
    claim: "Dickens shows Scrooge’s meanness instead of stating it.",
    quote: "Scrooge kept the coal-box in his own room",
    opts: [
      { t: "The clerk has a very small fire and cannot make it bigger, because his employer keeps the coal in a different room.", why: "Retelling. What does the arrangement show about Scrooge?" },
      { t: "One small detail does the work of a whole speech. Guarding the coal lets the reader judge Scrooge without being told to.", ok: true, why: "Strong. It explains why a detail is stronger than a statement." },
      { t: "Scrooge is worried that the clerk will steal the coal-box and sell it, so he keeps it locked away where he can see it.", why: "A guess. Nothing says he suspects theft." },
      { t: "The coal-box is mentioned in the last paragraph of the extract, where Dickens describes the clerk in his cell and his fire of one coal.", why: "An observation. What does it tell us?" }
    ]
  },
  {
    claim: "The list of verbs makes Scrooge’s greed physical.",
    quote: "squeezing, wrenching, grasping, scraping, clutching",
    opts: [
      { t: "Dickens uses five words in a row here to describe Scrooge, one after the other, in the paragraph that begins with “Oh!”", why: "Retelling. What do the five words have in common?" },
      { t: "Every verb is a way of holding on tight. Piled up, they turn greed into a pair of hands the reader can almost see.", ok: true, why: "Strong. It finds the pattern and explains its effect." },
      { t: "The words show that Scrooge worked with his hands all day and was tired out by the end of each working day.", why: "A misreading. The verbs describe his character." },
      { t: "The writer uses a list of five verbs in this sentence.", why: "An observation. Say what the list does." }
    ]
  }
];

const COLLECT = [
  {
    claim: "The narrator gives solid proof that Marley is really dead.",
    opts: [
      { t: "signed by the clergyman, the clerk, the undertaker, and the chief mourner", ok: true, why: "Right. A burial register witnessed by four people is real proof, not just an assertion." },
      { t: "and my unhallowed hands shall not disturb it, or the Country’s done for", why: "This is part of the narrator’s playful door-nail joke, not evidence that Marley is dead." },
      { t: "Scrooge’s name was good upon ’Change", why: "This tells us Scrooge’s signature was trusted in business, not that Marley is dead." },
      { t: "as dead as a door-nail", why: "This asserts he is dead with a simile, but it offers no proof. The signed register does." }
    ]
  },
  {
    claim: "Scrooge’s coldness comes from inside him, not from the weather.",
    opts: [
      { t: "No warmth could warm, no wintry weather chill him.", ok: true, why: "Right. Neither warmth nor cold weather can change him: the chill is his own, not the air’s." },
      { t: "candles were flaring in the windows of the neighbouring offices", why: "This describes the gloom outside, not where Scrooge’s coldness comes from." },
      { t: "The fog came pouring in at every chink and keyhole", why: "This is the weather in the street, not proof that his coldness is his own." },
      { t: "it was quite dark already", why: "This sets the dark afternoon, but says nothing about Scrooge himself." }
    ]
  },
  {
    claim: "Dickens jokes that Scrooge is less generous even than the weather.",
    target: ["They often came down handsomely, and Scrooge never did."],
    decoys: [{ phrase: "No wind that blew was bitterer than he", why: "This compares his temper to the wind, but the claim is about generosity. Look for the sentence about rain and snow coming down." }],
    miss: "Look at the end of the paragraph that begins “External heat and cold”.",
    explain: "Rain and snow “came down handsomely” (generously), “and Scrooge never did”. The pun on “came down” turns the weather into a joke about how he never gives anything away."
  },
  {
    claim: "Scrooge is described as so hard that no kindness can be struck out of him.",
    target: ["Hard and sharp as flint, from which no steel had ever struck out generous fire"],
    decoys: [{ phrase: "The cold within him froze his old features", why: "This describes the cold in his face, not his hardness. Look for the comparison to flint and steel." }],
    miss: "Look in the short paragraph that begins “Oh!”.",
    explain: "Scrooge is “hard and sharp as flint”, and “no steel had ever struck out generous fire” from him. The image says nobody has ever managed to strike a spark of kindness out of him."
  }
];
TEXTS.push({ id: "marley-was-dead", type: "Fiction", mode: "Creative", form: "Novel opening", level: "6ème",
  hook: "Fog, darkness at three in the afternoon, and a man who carries his own cold with him.",
  TEXT, ANNOTATE, QUESTIONS, EVIDENCE, EXPLAIN, COLLECT });
}
{
const TEXT = {
  title: "The Story-Teller",
  intro: "Saki (H. H. Munro), 1914. Abridged.",
  paras: [
    "It was a hot afternoon, and the railway carriage was correspondingly sultry, and the next stop was at Templecombe, nearly an hour ahead. The occupants of the carriage were a small girl, and a smaller girl, and a small boy. An aunt belonging to the children occupied one corner seat, and the further corner seat on the opposite side was occupied by a bachelor who was a stranger to their party, but the small girls and the small boy emphatically occupied the compartment.",
    "Both the aunt and the children were conversational in a limited, persistent way, reminding one of the attentions of a housefly that refuses to be discouraged. Most of the aunt’s remarks seemed to begin with “Don’t”, and nearly all of the children’s remarks began with “Why?” The bachelor said nothing out loud.",
    "“Don’t, Cyril, don’t,” exclaimed the aunt, as the small boy began smacking the cushions of the seat, producing a cloud of dust at each blow. “Come and look out of the window,” she added.",
    "The child moved reluctantly to the window. “Why is that man taking those sheep out of that field?” he asked.",
    "“I expect he is taking them to another field where there is more grass,” said the aunt weakly.",
    "“But there is lots of grass in that field,” protested the boy; “there’s nothing else but grass there. Aunt, there’s lots of grass in that field.”",
    "“Perhaps the grass in the other field is better,” suggested the aunt fatuously.",
    "“Why is it better?” came the swift, inevitable question.",
    "The smaller girl created a diversion by beginning to recite a poem. She only knew the first line, but she put her limited knowledge to the fullest possible use. She repeated the line over and over again in a dreamy but resolute and very audible voice.",
    "“Come over here and listen to a story,” said the aunt, when the bachelor had looked twice at her and once at the communication cord.",
    "The children moved listlessly towards the aunt’s end of the carriage. Evidently her reputation as a story-teller did not rank high in their estimation.",
    "In a low, confidential voice, interrupted at frequent intervals by loud, petulant questions from her listeners, she began an unenterprising and deplorably uninteresting story about a little girl who was good, and made friends with everyone on account of her goodness, and was finally saved from a mad bull by a number of rescuers who admired her moral character.",
    "“Wouldn’t they have saved her if she hadn’t been good?” demanded the bigger of the small girls. It was exactly the question that the bachelor had wanted to ask.",
    "“Well, yes,” admitted the aunt lamely, “but I don’t think they would have run quite so fast to her help if they had not liked her so much.”",
    "“It’s the stupidest story I’ve ever heard,” said the bigger of the small girls, with immense conviction.",
    "“I didn’t listen after the first bit, it was so stupid,” said Cyril.",
    "The smaller girl made no actual comment on the story, but she had long ago recommenced a murmured repetition of her favourite line.",
    "“You don’t seem to be a success as a story-teller,” said the bachelor suddenly from his corner.",
    "The aunt bristled in instant defence at this unexpected attack. “It’s a very difficult thing to tell stories that children can both understand and appreciate,” she said stiffly.",
    "“I don’t agree with you,” said the bachelor.",
    "“Perhaps you would like to tell them a story,” was the aunt’s retort.",
    "“Tell us a story,” demanded the bigger of the small girls.",
    "“Once upon a time,” began the bachelor, “there was a little girl called Bertha, who was extraordinarily good.”",
    "The children’s momentarily aroused interest began at once to flicker; all stories seemed dreadfully alike, no matter who told them.",
    "“She did all that she was told, she was always truthful, she kept her clothes clean, ate milk puddings as though they were jam tarts, learned her lessons perfectly, and was polite in her manners.”",
    "“Was she pretty?” asked the bigger of the small girls.",
    "“Not as pretty as any of you,” said the bachelor, “but she was horribly good.”",
    "There was a wave of reaction in favour of the story; the word horrible in connection with goodness was a novelty that commended itself. It seemed to introduce a ring of truth that was absent from the aunt’s tales of infant life.",
    "“She was so good,” continued the bachelor, “that she won several medals for goodness, which she always wore, pinned on to her dress. There was a medal for obedience, another medal for punctuality, and a third for good behaviour. They were large metal medals and they clicked against one another as she walked.”",
    "“Everybody talked about her goodness, and the Prince of the country got to hear about it, and he said that as she was so very good she might be allowed once a week to walk in his park, which was just outside the town. It was a beautiful park, and no children were ever allowed in it, so it was a great honour for Bertha to be allowed to go there.”",
    "“Were there any sheep in the park?” demanded Cyril.",
    "“No,” said the bachelor, “there were no sheep.”",
    "“Why weren’t there any sheep?” came the inevitable question arising out of that answer.",
    "The aunt permitted herself a smile, which might almost have been described as a grin.",
    "“There were no sheep in the park,” said the bachelor, “because the Prince’s mother had once had a dream that her son would either be killed by a sheep or else by a clock falling on him. For that reason the Prince never kept a sheep in his park or a clock in his palace.”",
    "The aunt suppressed a gasp of admiration.",
    "“In the park there were ponds with gold and blue and green fish in them, and trees with beautiful parrots that said clever things at a moment’s notice, and humming birds that hummed all the popular tunes of the day. Bertha walked up and down and enjoyed herself immensely, and thought to herself: if I were not so extraordinarily good I should not have been allowed to come into this beautiful park. Her three medals clinked against one another as she walked and helped to remind her how very good she really was.”",
    "“Just then an enormous wolf came prowling into the park to see if it could catch a fat little pig for its supper.”",
    "“What colour was it?” asked the children, amid an immediate quickening of interest.",
    "“Mud-colour all over, with a black tongue and pale grey eyes that gleamed with unspeakable ferocity. The first thing that it saw in the park was Bertha; her pinafore was so spotlessly white and clean that it could be seen from a great distance.”",
    "“Bertha ran as hard as she could, and the wolf came after her with huge leaps and bounds. She managed to reach a shrubbery of myrtle bushes and she hid herself in one of the thickest of the bushes. The wolf came sniffing among the branches, its black tongue lolling out of its mouth and its pale grey eyes glaring with rage. Bertha was terribly frightened, and thought to herself: if I had not been so extraordinarily good I should have been safe in the town at this moment.”",
    "“The scent of the myrtle was so strong that the wolf could not sniff out where Bertha was hiding, and the bushes were so thick that he might have hunted about in them for a long time without catching sight of her, so he thought he might as well go off and catch a little pig instead. Bertha was trembling very much at having the wolf prowling and sniffing so near her, and as she trembled the medal for obedience clinked against the medals for good conduct and punctuality.”",
    "“The wolf was just moving away when he heard the sound of the medals clinking and stopped to listen; they clinked again in a bush quite near him. He dashed into the bush, his pale grey eyes gleaming with ferocity and triumph, and dragged Bertha out and devoured her to the last morsel. All that was left of her were her shoes, bits of clothing, and the three medals for goodness.”",
    "“Were any of the little pigs killed?”",
    "“No, they all escaped.”",
    "“The story began badly,” said the smaller of the small girls, “but it had a beautiful ending.”",
    "“It is the most beautiful story that I ever heard,” said the bigger of the small girls, with immense decision.",
    "“It is the only beautiful story I have ever heard,” said Cyril.",
    "A dissentient opinion came from the aunt. “A most improper story to tell to young children! You have undermined the effect of years of careful teaching.”",
    "“At any rate,” said the bachelor, collecting his belongings preparatory to leaving the carriage, “I kept them quiet for ten minutes, which was more than you were able to do.”",
    "“Unhappy woman!” he observed to himself as he walked down the platform of Templecombe station; “for the next six months or so those children will assail her in public with demands for an improper story!”"
  ]
};

const ANNOTATE = [
  {
    skill: "Narrator’s judgement",
    prompt: "Find the <em>comparison</em> the narrator uses to describe how the aunt and children talk.",
    target: ["the attentions of a housefly that refuses to be discouraged"],
    decoys: [{ phrase: "conversational in a limited, persistent way", why: "That is the narrator’s description, but it is not the comparison. Look a little further along the same sentence." }],
    miss: "Look in the second paragraph for the word “housefly”.",
    explain: "Comparing their talk to a fly you cannot swat away tells us the narrator finds them irritating, long before the bachelor says anything out loud."
  },
  {
    skill: "Narrator’s tone",
    prompt: "Find the <em>one word</em> the narrator uses to judge how the aunt answers about the grass.",
    target: ["fatuously"],
    decoys: [{ phrase: "said the aunt weakly", why: "Also a judgement on the aunt, and a good spot, but not the word asked for. Look at her next answer." }],
    miss: "Look at the short line about the grass in the other field being better.",
    explain: "“Fatuously” means in a silly, empty way. One adverb lets the narrator mock the aunt without ever stopping the story to explain."
  },
  {
    skill: "Point of view",
    prompt: "Find the sentence that tells us the bachelor and the child <em>think alike</em>.",
    target: ["It was exactly the question that the bachelor had wanted to ask"],
    decoys: [{ phrase: "The bachelor said nothing out loud", why: "That shows he is holding back, but it does not tell us he agrees with a child." }],
    miss: "Look just after the girl asks whether the rescuers would have saved her anyway.",
    explain: "The narrator lets us inside the bachelor’s head for one sentence. It puts him on the children’s side against the aunt before the argument even starts."
  },
  {
    skill: "Irony",
    prompt: "Find the <em>two words</em> that the children find new and true about Bertha.",
    target: ["horribly good"],
    decoys: [{ phrase: "extraordinarily good", why: "Close, and it opens the tale, but the children do not react to that phrase. Look for the word that should not fit with goodness." }],
    miss: "Look for the bachelor’s answer to “Was she pretty?”",
    explain: "“Horribly” normally goes with something awful. Joining it to “good” makes goodness sound like a fault, which is exactly why the children start listening."
  },
  {
    skill: "Suspense",
    prompt: "Find the <em>small sound</em> that gives Bertha away to the wolf.",
    target: ["the medal for obedience clinked against the medals for good conduct and punctuality"],
    decoys: [{ phrase: "her pinafore was so spotlessly white and clean", why: "Her cleanliness is what the wolf sees first, but the wolf is leaving by then. Look for what he hears." }],
    miss: "Look for the moment Bertha trembles in the bush.",
    explain: "The medals she won for being good are the thing that kills her. Saki plants them early so the ending feels earned rather than random."
  }
];

const QUESTIONS = [
  {
    skill: "Point of view",
    q: "Whose thoughts does the narrator let us hear?",
    opts: [
      { t: "The bachelor’s, and only for a moment at a time", ok: true, why: "Right. We learn what he wanted to ask, and we hear his last remark to himself. The others are shown from outside." },
      { t: "The aunt’s, since the story follows her attempts to cope", why: "We see what the aunt does and how stiffly she speaks, but never inside her head." },
      { t: "Cyril’s, because the questions come mostly from him", why: "His questions are out loud. The narrator never enters his thoughts." },
      { t: "Everybody’s in the carriage, one after the other", why: "Only one character’s thoughts are opened, which is what makes the ending land." }
    ]
  },
  
  {
    skill: "Irony",
    q: "Why is the ending of the bachelor’s tale ironic?",
    opts: [
      { t: "The rewards for being good are what get Bertha caught", ok: true, why: "Right. The medals clink, the wolf turns back. Her goodness causes the disaster instead of saving her." },
      { t: "The wolf turns out to be less dangerous than it looked", why: "It eats her to the last morsel. It is exactly as dangerous as it looked." },
      { t: "Bertha is saved by the pigs she had been kind to earlier", why: "The pigs escape. They never help her." },
      { t: "The Prince arrives in his park at the last moment", why: "The Prince never appears in person in the tale." }
    ]
  },
  {
    skill: "Contrast",
    q: "How do the two stories in the carriage differ?",
    opts: [
      { t: "One rewards goodness, and one lets goodness cause the ending", ok: true, why: "Right. The aunt’s girl is saved because people like her. Bertha is eaten because her medals rattle." },
      { t: "One is set in a park, and the other is set on a train", why: "Both are told on the train. Only their contents differ." },
      { t: "One is much longer than the other and has more characters", why: "Length is not the difference the children react to." },
      { t: "One of them is true, and the other one has been completely invented", why: "Both are invented. The children call one of them truthful in feeling." }
    ]
  },
  {
    skill: "Inference",
    q: "Why do the children prefer the bachelor’s story?",
    opts: [
      { t: "It surprises them and does not try to improve them", ok: true, why: "Right. “Horribly good” rings true to them, and nothing in the tale tells them how to behave." },
      { t: "It is about animals, and children always prefer animals", why: "The aunt’s story has a bull in it and they call it stupid." },
      { t: "It is shorter, so it holds their attention more easily", why: "It is much longer. They still listen." },
      { t: "The bachelor promises them sweets if they stay quiet", why: "He promises nothing. He simply tells the story." }
    ]
  },
  {
    skill: "Ending",
    q: "What does the bachelor’s last line add?",
    opts: [
      { t: "A final joke at the aunt’s expense, for the reader alone", ok: true, why: "Right. He says it to himself on the platform, so only we hear it. The aunt’s punishment is still to come." },
      { t: "A warning that he regrets telling such a violent story", why: "He sounds delighted, not sorry." },
      { t: "A promise that he will meet the children and their aunt again", why: "He is leaving the train for good." },
      { t: "An apology to the reader for upsetting the children", why: "The children are not upset. They loved it." }
    ]
  },
  {
    skill: "Summary",
    q: "Which sentence best sums up what happens in this text?",
    opts: [
      { t: "When the aunt's story about a good girl fails to hold the children's attention, a bachelor tells them a darker tale in which a girl's own medals for goodness lead a wolf straight to her.", ok: true, why: "Right. It covers the whole shape of the text, not just one part of it." },
      { t: "The aunt tells the children a gentle story about a good little girl who is eventually saved by a group of rescuers. This point is raised without being the central focus of the whole piece. Further events unfold elsewhere in the passage that this does not cover.", why: "True, but too narrow. It only covers part of the text and misses the main point." },
      { t: "The bachelor is scolded severely by the train guard for frightening the three young children with his strange story. Other characters and events are also part of what happens in the text. This is a smaller part of a much longer sequence of events overall.", why: "Too broad. This adds a claim the text does not actually make or support." },
      { t: "The smaller of the two girls sits quietly repeating the very same single line of a poem over and over again. This detail appears alongside several others as the story unfolds. The wider text covers considerably more ground than this alone.", why: "A real detail, but a minor one. It is not what the text is mainly about." }
    ]
  }
];

const EVIDENCE = [
  {
    quote: "The bachelor said nothing out loud.",
    opts: [
      { t: "He is judging the carriage silently from his corner", ok: true, why: "Right. “Out loud” hints that plenty is being said inside his head, which the narrator later confirms." },
      { t: "He is asleep and has not noticed the children at all", why: "He is watching closely enough to look twice at the aunt." },
      { t: "He is too shy to speak to strangers on a train", why: "He speaks bluntly to the aunt a few minutes later." },
      { t: "He agrees with everything the aunt has been saying", why: "He tells her she is not a success as a story-teller." }
    ]
  },
  {
    quote: "Evidently her reputation as a story-teller did not rank high in their estimation.",
    opts: [
      { t: "The children have heard her stories before and expect little", ok: true, why: "Right. “Reputation” means she has form. They drag themselves over before she has even begun." },
      { t: "The children have never travelled with this aunt before today", why: "A reputation takes time to build. They know her well." },
      { t: "The children are too tired from the heat to listen", why: "They find plenty of energy for the bachelor’s tale." },
      { t: "The aunt has told them she is bad at telling stories", why: "She defends herself later, so she does not think that." }
    ]
  },
  {
    quote: "The aunt permitted herself a smile, which might almost have been described as a grin.",
    opts: [
      { t: "She enjoys seeing the bachelor trapped by a child’s question", ok: true, why: "Right. She has just been beaten by the same kind of question, so she expects him to fail too." },
      { t: "She has begun to find the bachelor and his story rather charming", why: "Her admiration comes later, and she keeps that quiet." },
      { t: "She is trying to encourage Cyril to ask more questions", why: "Her aim all afternoon has been fewer questions." },
      { t: "She is signalling to the bachelor that he should stop", why: "She invited him to tell a story herself." }
    ]
  },
  {
    quote: "A most improper story to tell to young children!",
    opts: [
      { t: "The aunt judges a story by its lesson, not by its effect", ok: true, why: "Right. The children are quiet and delighted, yet she measures the tale only against the teaching she wants." },
      { t: "The aunt is frightened by the wolf in the story", why: "Her worry is about the children, not about herself." },
      { t: "The aunt thinks the story was too long for young children", why: "Her objection is “improper”, which is about content." },
      { t: "The aunt believes the children did not understand it", why: "They understood it well enough to praise it." }
    ]
  }
];

const EXPLAIN = [
  {
    claim: "The narrator takes sides before the characters argue.",
    quote: "the attentions of a housefly that refuses to be discouraged",
    opts: [
      { t: "The aunt and the children keep talking to each other in the carriage for most of the journey towards Templecombe.", why: "Retelling. What does the comparison do?" },
      { t: "A fly you cannot wave away is annoying and pointless. The image makes us share the bachelor’s irritation before he speaks.", ok: true, why: "Strong. It explains the comparison and its effect on the reader." },
      { t: "Saki means that there were flies in the railway carriage because the afternoon was hot and the windows were open.", why: "A literal misreading. It is a comparison." },
      { t: "The narrator uses a simile in this part of the story, which is a comparison using the word like or as to help the reader picture something.", why: "An observation. What is the effect of it?" }
    ]
  },
  {
    claim: "One word can carry the narrator’s opinion.",
    quote: "fatuously",
    opts: [
      { t: "The aunt answers Cyril’s question about the grass in the other field, and the narrator tells us how she said it.", why: "Retelling. What does the chosen word add?" },
      { t: "“Fatuously” means silly and empty. The narrator judges her answer in one word, so the mockery never slows the scene down.", ok: true, why: "Strong. It defines the word and explains why it is efficient." },
      { t: "The word shows the aunt is speaking very quietly, so the children at the window cannot quite hear what she says.", why: "A misreading of the word." },
      { t: "The writer uses an adverb here to describe the way she speaks, and adverbs are the words that tell a reader how an action is carried out.", why: "An observation. Which adverb, and what does it show?" }
    ]
  },
  {
    claim: "The children judge stories by truth, not by morals.",
    quote: "horribly good",
    opts: [
      { t: "The bachelor tells the children that Bertha was not as pretty as they are, and then describes how good she was.", why: "Retelling. Why do those two words work?" },
      { t: "Putting a nasty word next to goodness matches what children suspect about being good. It sounds honest, so they listen.", ok: true, why: "Strong. It explains the clash of words and the reaction it causes." },
      { t: "The words mean that Bertha behaved very badly indeed, which is why the wolf was able to catch her in the park.", why: "A misreading. She really is good." },
      { t: "The bachelor puts two words together that do not normally go together, which is something writers often do to make a phrase stand out.", why: "An observation. Say what the pairing achieves." }
    ]
  },
  {
    claim: "The tale punishes the very thing the aunt would praise.",
    quote: "All that was left of her were her shoes, bits of clothing, and the three medals for goodness.",
    opts: [
      { t: "The wolf eats Bertha in the park, and only a few of her things are left behind when the story comes to its end.", why: "Retelling. Why those particular things?" },
      { t: "The medals survive her. Ending on them makes the reward for goodness the last image, and the cause of her death.", ok: true, why: "Strong. It explains the choice of final detail and its double meaning." },
      { t: "Saki wants to show that metal lasts longer than cloth does, which is why the medals are still there at the end.", why: "A literal reading. The medals matter for what they stand for." },
      { t: "The bachelor lists three things at the end of his story, and lists of three are used by writers because they sound complete to a reader.", why: "An observation. Why end on the medals?" }
    ]
  },
  {
    claim: "The last line is aimed at the reader, not the aunt.",
    quote: "for the next six months or so those children will assail her in public with demands for an improper story",
    opts: [
      { t: "The bachelor leaves the train at Templecombe station and walks away along the platform, thinking about the children.", why: "Retelling. Who hears this, and why does that matter?" },
      { t: "He says it to himself, so only we hear it. We are handed the aunt’s future punishment as a private joke he has won.", ok: true, why: "Strong. It explains who the audience is and what the closing joke does." },
      { t: "The bachelor is worried that the children will get into trouble with their aunt for asking too many questions.", why: "He is delighted, not worried." },
      { t: "The story finishes with the bachelor speaking to himself.", why: "An observation. What is the effect of ending this way?" }
    ]
  }
];
TEXTS.push({ id: "the-story-teller", type: "Fiction", mode: "Creative", form: "Short story", level: "5ème",
  hook: "A hot train, three restless children, and a stranger who tells a better story than the aunt.",
  TEXT, ANNOTATE, QUESTIONS, EVIDENCE, EXPLAIN });
}
{
const TEXT = {
  title: "The Red Room",
  intro: "H. G. Wells, 1896. Shortened extract.",
  paras: [
    "“I can assure you,” said I, “that it will take a very tangible ghost to frighten me.” And I stood up before the fire with my glass of wine in my hand.",
    "“It is your own choosing,” said the man with the withered arm, and glanced at me askance.",
    "“Eight-and-twenty years,” said I, “I have lived, and never a ghost have I seen as yet.”",
    "The old woman sat staring hard into the fire, her pale eyes wide open. “Ay,” she broke in; “and eight-and-twenty years you have lived and never seen the likes of this house, I reckon. There’s a many things to see, when one’s still but eight-and-twenty.” She swayed her head slowly from side to side. “A many things to see and sorrow for.”",
    "The door opened, and a second old man came shuffling in, more bent, more wrinkled, more aged even than the first. He supported himself by a single crutch, his eyes were covered by a shade, and his lower lip hung pale and pink from his decaying yellow teeth. He made straight for an arm-chair on the opposite side of the table, sat down, and began to cough.",
    "“This night of all nights!” said the old woman.",
    "“It is my own choosing,” I answered. “If you will show me to this haunted room of yours, I will make myself comfortable there.”",
    "“You go alone,” said the man with the withered arm.",
    "“Very well,” I answered, “and which way do I go?”",
    "“You go along the passage for a bit,” said he, “until you come to a door, and through that is a spiral staircase, and halfway up that is a landing and another door covered with baize. Go through that and down the long corridor to the end, and the red room is on your left up the steps.”",
    "The long, draughty subterranean passage was chilly and dusty, and my candle flared and made the shadows cower and quiver. The echoes rang up and down the spiral staircase, and a shadow came sweeping up after me, and one fled before me into the darkness overhead.",
    "I came to the landing and stopped there for a moment, listening to a rustling that I fancied I heard; then, satisfied of the absolute silence, I pushed open the baize-covered door and stood in the corridor.",
    "The moonlight, coming in by the great window on the grand staircase, picked out everything in vivid black shadow or silvery illumination. Everything was in its place: the house might have been deserted on the yesterday instead of eighteen months ago. There were candles in the sockets of the sconces, and whatever dust had gathered on the carpets or upon the polished flooring was distributed so evenly as to be invisible in the moonlight.",
    "I was about to advance, and stopped abruptly. A bronze group stood upon the landing, hidden from me by a corner of the wall; but its shadow fell with marvellous distinctness upon the white panelling, and gave me the impression of someone crouching to waylay me. I stood rigid for half a minute perhaps. Then, with my hand in the pocket that held the revolver, I advanced, only to discover a statue of Ganymede and the eagle, glistening in the moonlight.",
    "I entered the red room, closed the door behind me, and stood with the candle held aloft, surveying the scene of my vigil, the great red room in which the young duke had died. My candle was a little tongue of light in its vastness, that failed to pierce the opposite end of the room, and left an ocean of mystery and suggestion beyond its island of light.",
    "I began to walk about the room, peering round each article of furniture, tucking up the valances of the bed, and opening its curtains wide. I pulled back the blinds and examined the fastenings of the several windows before closing the shutters. Then, satisfied, I stirred the fire, lit the candles in the sconces, and set them about the room, so that not a corner of it was without its light.",
    "I must confess that the oddness of these three old pensioners in whose charge the place was, and the deep-toned, old-fashioned furniture of the room in which they foregathered, had affected me curiously in spite of my efforts to keep myself at a matter-of-fact phase. To keep my mind steady I began to string some rough rhymes together, repeating them aloud, until the echoes made me stop.",
    "It was after midnight that the candle in the alcove went out, and the black shadow sprang back to its place there. I did not see the candle go out; I simply turned and saw that the darkness was there, as one might start and find a stranger watching one’s face.",
    "“By Jove,” said I aloud, “that draught is a strong one!” and taking the matches from the table, I walked across the room in a leisurely manner to relight the corner again. My first match would not strike, and as I succeeded with the second, something seemed to blink on the wall before me. I turned my head involuntarily, and saw that the two candles on the little table by the fireplace were extinguished.",
    "I rose at once to my feet. “Odd,” I said. “Did I do that myself in a flash of absent-mindedness?” I walked back, relighted one, and as I did so, I saw the candle in the right sconce of one of the mirrors wink and go right out, and almost immediately its companion followed it.",
    "There was no mistake about it now. The flame vanished, as if the wicks had been suddenly nipped between a finger and a thumb, leaving the wick neither glowing nor smoking, but black. While I stood gaping, the candle at the foot of the bed went out, and the shadows seemed to take another step towards me.",
    "“This won’t do!” said I, and first one and then another candle on the mantelshelf followed. “What’s up?” I cried, with a queer high note getting into my voice somehow. At that the candle on the wardrobe went out, and the one I had relit in the alcove followed.",
    "“Steady on!” I said. “These candles are wanted,” speaking with a half-hysterical facetiousness, and scratching away at a match the while for the mantel candlesticks. My hands trembled so much that twice I missed the rough paper of the matchbox. As the mantel emerged from darkness again, two candles in the remoter end of the window were eclipsed. But with the same match I also relit the larger mirror candles, and those on the floor near the doorway, so that for the moment I seemed to gain on the extinctions.",
    "But then in a volley there vanished four lights at once in different corners of the room, and I struck another match in quivering haste, and stood hesitating whither to take it. As I hesitated, an invisible hand seemed to sweep out the two candles on the table. With a cry of terror I dashed at the alcove, then into the corner and then into the window, relighting three as two more vanished by the fireplace, and then, perceiving a better way, I dropped the matches on the iron-bound deed-box in the corner, and caught up the bedroom candlestick. With this I avoided the delay of striking matches; but for all that the steady process of extinction went on, and the shadows I feared and fought against returned, and crept in upon me.",
    "And then the fight became a battle with darkness. I heard the last candle go, and I flung the candlestick from me. The darkness closed upon me like the shutting of an eye, and I flung out my arms and staggered forward, striking my head, I think, against the corner of the bed, and I fell headlong, and knew no more.",
    "I opened my eyes in daylight. My head was bandaged, and the man with the withered arm was watching my face. “You believe now,” said he, “that the room is haunted?”",
    "“Yes,” said I, “the room is haunted. But it is not a ghost that haunts it. It is fear. Fear that will not have light nor sound, that will not bear with reason, that deafens and darkens and overwhelms. It followed me through the corridor, it fought against me in the room.”"
  ]
};

const ANNOTATE = [
  {
    skill: "Atmosphere",
    prompt: "Find where the narrator’s own candle makes the <em>shadows move</em> in the passage.",
    target: ["my candle flared and made the shadows cower and quiver"],
    decoys: [{ phrase: "chilly and dusty", why: "A good detail for the cold and neglect, but it does not describe the shadows moving." }],
    miss: "Look in the paragraph about the long passage under the house.",
    explain: "The light he carries for safety is what sets the shadows moving. “Cower” and “quiver” make them behave like frightened living things."
  },
  {
    skill: "Metaphor",
    prompt: "Find the <em>sea image</em> that describes the darkness beyond his candle.",
    target: ["an ocean of mystery and suggestion beyond its island of light"],
    decoys: [{ phrase: "a little tongue of light in its vastness", why: "Also an image for the candle, and a strong one, but it is not the sea. Read on to the end of the sentence." }],
    miss: "Look at the end of the paragraph where he first enters the red room.",
    explain: "One small island in a whole ocean shows how little of the room he can see. The word “suggestion” admits that the rest is filled in by his own mind."
  },
  {
    skill: "Sensory language",
    prompt: "Find the comparison that describes how the <em>flames die</em>.",
    target: ["as if the wicks had been suddenly nipped between a finger and a thumb"],
    decoys: [{ phrase: "the shadows seemed to take another step towards me", why: "That is the effect on the shadows. Look for how the flames themselves go out." }],
    miss: "Look for the paragraph that begins “There was no mistake about it now.”",
    explain: "Pinched wicks suggest fingers in the room. The image hints at a presence without ever showing one, which is worse than a ghost."
  },
  {
    skill: "Narrator",
    prompt: "Find the moment the narrator’s <em>voice gives him away</em>.",
    target: ["with a queer high note getting into my voice"],
    decoys: [{ phrase: "My hands trembled so much that twice I missed", why: "His hands betray him too, but the question asks about his voice." }],
    miss: "Look for the line where he cries “What’s up?”",
    explain: "He keeps talking as though he is calm, but the pitch of his own voice tells us otherwise. The first-person narrator reports the fear he is trying to deny."
  }
];

const QUESTIONS = [
  {
    skill: "Point of view",
    q: "What does first-person narration add to this story?",
    opts: [
      { t: "We only know what he knows, so the dark hides as much from us", ok: true, why: "Right. We never see the room from outside. His candle is our only light, and his fear becomes ours." },
      { t: "It proves that everything described in the story really happened", why: "A narrator can be wrong. His own ending redefines what happened." },
      { t: "It lets us watch the three old people while he is upstairs", why: "Once he leaves the room below, we lose sight of them." },
      { t: "It keeps us at a safe distance from the narrator’s feelings", why: "It does the opposite: we are inside them." }
    ]
  },
  {
    skill: "Mood",
    q: "How does the mood change when he reaches the corridor?",
    opts: [
      { t: "It lifts briefly, because moonlight makes everything ordinary", ok: true, why: "Right. Everything is “in its place”, and the effect is “scarcely what I expected”. Wells lets the tension drop before raising it." },
      { t: "It darkens at once, because the corridor is pitch black", why: "The great window lets in enough moonlight to see clearly." },
      { t: "It stays exactly the same as it was down in the underground passage", why: "The passage was chilly and full of moving shadows. The corridor is still and silver." },
      { t: "It turns comic, because he laughs at his own nerves", why: "His laughter comes much later, and it is forced." }
    ]
  },
  {
    skill: "Setting",
    q: "What part does the house itself play?",
    opts: [
      { t: "Its size and silence give the darkness room to work", ok: true, why: "Right. A vast room his candle cannot cross, echoes that stop his rhymes, corners he cannot watch at once." },
      { t: "It is a small, cramped cottage that makes him feel trapped", why: "The red room is “vast”, with a grand staircase outside it." },
      { t: "It is full of noises made by the three old people", why: "He notes “absolute silence” once he leaves them." },
      { t: "It has been left in ruins for eighteen months", why: "Everything is in place, as if deserted yesterday." }
    ]
  },
  
  {
    skill: "Ending",
    q: "What does the last paragraph change?",
    opts: [
      { t: "The haunting turns out to be fear itself, not a spirit", ok: true, why: "Right. He agrees the room is haunted, then names the thing that haunts it. The threat was inside him all along." },
      { t: "The narrator admits that he imagined the whole of that night", why: "The candles really went out. He does not take that back." },
      { t: "The old people confess that they blew out the candles", why: "They say nothing of the sort." },
      { t: "The narrator promises never to enter the house again", why: "He makes no such promise in this extract." }
    ]
  },
  {
    skill: "Summary",
    q: "Which sentence best sums up what happens in this text?",
    opts: [
      { t: "A confident young man spends the night alone in a supposedly haunted room, and as the candles mysteriously go out one by one he is consumed by pure terror.", ok: true, why: "Right. It covers the whole shape of the text, not just one part of it." },
      { t: "Three old people warn the narrator more than once that he really should not go into the red room all alone at night. Other parts of the story focus on different details.", why: "True, but too narrow. It only covers part of the text and misses the main point." },
      { t: "The narrator eventually discovers a genuine ghost hiding somewhere inside the ancient walls of the red room itself. The rest of the text develops in a different direction.", why: "Too broad. This adds a claim the text does not actually make or support." },
      { t: "The narrator briefly mistakes the shadow of a bronze statue for a figure crouching low on the landing outside. The story continues well beyond this particular moment.", why: "A real detail, but a minor one. It is not what the text is mainly about." }
    ]
  }
];

const EVIDENCE = [
  {
    quote: "a shadow came sweeping up after me, and one fled before me",
    opts: [
      { t: "The darkness behaves as if it were chasing him", ok: true, why: "Right. “After me” and “before me” surround him, so the shadows act like pursuers rather than effects of light." },
      { t: "Somebody else is climbing the staircase behind him", why: "The shadows are made by his own candle. No one follows him." },
      { t: "The staircase is too narrow for him to pass easily", why: "The quote is about shadows, not about space." },
      { t: "He is walking faster than he means to admit", why: "His speed is not what the quote describes." }
    ]
  },
  {
    quote: "so that not a corner of it was without its light",
    opts: [
      { t: "He prepares carefully, which makes the later losses worse", ok: true, why: "Right. He fills every corner on purpose, so each candle that dies takes back ground he had won." },
      { t: "He is frightened of the dark before anything happens", why: "He calls himself matter-of-fact here and searches the room calmly." },
      { t: "The room is too bright for him to see the shadows", why: "The point of the light is that he can see everything." },
      { t: "He plans to stay awake and read there until the morning comes", why: "Reading is never mentioned." }
    ]
  },
  {
    quote: "The darkness closed upon me like the shutting of an eye",
    opts: [
      { t: "The dark arrives suddenly and completely, like a decision", ok: true, why: "Right. An eye shuts in an instant, and the image suggests something choosing to close on him." },
      { t: "He closes his own eyes because he is exhausted by the night", why: "He is running and striking matches, not resting." },
      { t: "The room slowly grows dimmer over several hours", why: "“Shutting” is instant, and the final candle has just gone." },
      { t: "He is knocked unconscious before the candles go out", why: "The order is the other way round." }
    ]
  }
];

const EXPLAIN = [
  {
    claim: "The narrator sees less than he thinks he does.",
    quote: "an ocean of mystery and suggestion beyond its island of light",
    opts: [
      { t: "The candle he is holding up is not strong enough to light the whole of the great red room from one end to the other.", why: "Retelling. What do “ocean” and “suggestion” add?" },
      { t: "An island in an ocean is tiny and surrounded. “Suggestion” admits the dark is filled in by his mind, not by what is there.", ok: true, why: "Strong. It explains both halves of the image and what they reveal." },
      { t: "Wells means that the red room is so large that it would take a boat to cross from one side of it to the other side.", why: "A literal misreading of the comparison." },
      { t: "This sentence contains a metaphor about the sea, and a metaphor is a comparison in which one thing is described as though it were another.", why: "An observation. Say what it shows about him." }
    ]
  },
  {
    claim: "Small failures reveal the fear he denies.",
    quote: "with a queer high note getting into my voice",
    opts: [
      { t: "The narrator calls out “What’s up?” when another of the candles in the room goes out without any warning at all.", why: "Retelling. What does his voice give away?" },
      { t: "His words stay casual while his pitch rises. The body reports the fear that the first-person narrator will not admit yet.", ok: true, why: "Strong. It sets what he says against how he says it." },
      { t: "The narrator is singing a song to himself in a high voice to try to keep himself company in the empty room.", why: "A misreading. He is calling out in alarm." },
      { t: "The writer describes the sound of the narrator’s voice at this point, telling the reader how it sounded as he called out into the room.", why: "An observation. Why describe it at that moment?" }
    ]
  },
  {
    claim: "The ending re-reads everything that came before.",
    quote: "It is fear. Fear that will not have light nor sound",
    opts: [
      { t: "The narrator wakes up the next morning with a bandage on his head and talks to the man with the withered arm.", why: "Retelling. What does his answer change?" },
      { t: "He agrees the room is haunted, then names fear as the haunter. Every shadow we believed in becomes his own mind at work.", ok: true, why: "Strong. It explains the twist and how it changes the earlier scenes." },
      { t: "The narrator explains that a real ghost appeared and that it was made of fear rather than of anything solid.", why: "He rules out a ghost entirely." },
      { t: "The story ends with the narrator speaking about fear, which is the last thing he says to the old man with the withered arm in the morning.", why: "An observation. What does that ending do?" }
    ]
  },
  {
    claim: "Wells trains the reader to be frightened by nothing.",
    quote: "the impression of someone crouching to waylay me",
    opts: [
      { t: "The narrator stops on the landing because he sees a shadow on the white panelling before he reaches the corridor.", why: "Retelling. Why include a scare that comes to nothing?" },
      { t: "The crouching figure is only a statue’s shadow. After being fooled once, we distrust every shape the candle throws.", ok: true, why: "Strong. It explains the purpose of a false alarm." },
      { t: "Somebody really is waiting on the landing to attack the narrator, and he escapes by drawing his revolver quickly.", why: "It is a statue of Ganymede." },
      { t: "The narrator is nervous on the landing in this part, standing rigid for half a minute before he walks on with his hand on the revolver.", why: "An observation. Why does Wells put this here?" }
    ]
  }
];

const COLLECT = [
  {
    claim: "The narrator’s own candlelight is what makes the shadows seem alive.",
    opts: [
      { t: "made the shadows cower and quiver", ok: true, why: "Right. His own candle sets the shadows moving, and 'cower' and 'quiver' make them behave like frightened creatures." },
      { t: "The long, draughty subterranean passage was chilly and dusty", why: "This describes the cold, neglected passage, not the shadows coming to life." },
      { t: "The echoes rang up and down the spiral staircase", why: "This is about sound in the stairwell, not the moving shadows." },
      { t: "listening to a rustling that I fancied I heard", why: "This is a sound he half-imagines, not the shadows his candle makes." }
    ]
  },
  {
    claim: "Wells describes the darkness as if it were a living presence.",
    opts: [
      { t: "as one might start and find a stranger watching one’s face", ok: true, why: "Right. The comparison gives the dark eyes and attention, so an absence of light becomes a watcher." },
      { t: "the candle in the alcove went out", why: "This states plainly that a candle failed, without giving the darkness any life." },
      { t: "My first match would not strike", why: "This is his own fumbling with the matches, not the darkness as a presence." },
      { t: "a little tongue of light in its vastness", why: "This describes his small candle, not the darkness around it." }
    ]
  },
  {
    claim: "A frightening shape on the landing turns out to be only a statue.",
    target: ["the impression of someone crouching to waylay me"],
    decoys: [{ phrase: "a statue of Ganymede and the eagle", why: "This is what the shape really is, the answer to the scare, not the frightening impression itself. Look for what he thinks he sees first." }],
    miss: "Look for the bronze shadow on the white panelling.",
    explain: "The crouching figure is only a statue’s shadow. Once a shadow has fooled us, every later shape the candle throws feels dangerous."
  },
  {
    claim: "The candles going out one by one is what builds the terror.",
    target: ["the candle at the foot of the bed went out, and the shadows seemed to take another step towards me"],
    decoys: [{ phrase: "something seemed to blink on the wall before me", why: "This is one small movement early on, not the steady loss that builds the dread. Look for the shadows taking 'another step'." }],
    miss: "Look for the paragraph where several candles have gone out and the shadows advance.",
    explain: "Losing candles 'one and then another' lets the fear grow: each one gone is a step the shadows 'take towards' him, so dread builds instead of arriving all at once."
  }
];
TEXTS.push({ id: "the-red-room", type: "Fiction", mode: "Creative", form: "Ghost story", level: "5ème",
  hook: "A young man spends a night in a haunted room, armed with a candle and his own confidence.",
  TEXT, ANNOTATE, QUESTIONS, EVIDENCE, EXPLAIN, COLLECT });
}
{
const TEXT = {
  title: "The Boarded Window",
  intro: "Ambrose Bierce, 1891. Abridged.",
  paras: [
    "In 1830, only a few miles away from what is now the great city of Cincinnati, lay an immense and almost unbroken forest. The whole region was sparsely settled by people of the frontier, restless souls who no sooner had hewn fairly habitable homes out of the wilderness than they abandoned all and pushed farther westward, to encounter new perils in the effort to regain the meagre comforts which they had voluntarily renounced.",
    "Many of them had already forsaken that region for the remoter settlements, but among those who remained was one who had been of those first arrived. He lived alone in a house of logs surrounded on all sides by the great forest, of whose gloom and silence he seemed a part, for no one had ever known him to smile nor speak a needless word.",
    "The man was Murlock. He was apparently seventy years old, actually about fifty. Something besides years had had a hand in his ageing. His hair and long, full beard were white, his grey, lustreless eyes sunken, his face singularly seamed with wrinkles which appeared to belong to two intersecting systems.",
    "The little log house, with its chimney of sticks and its roof of warping clapboards, had a single door and, directly opposite, a window. The window, however, was boarded up. Nobody could remember a time when it was not. And none knew why it was so closed; certainly not because of the occupant’s dislike of light and air, for on those rare occasions when a hunter had passed that lonely spot the recluse had commonly been seen sunning himself on his doorstep.",
    "I fancy there are few persons living today who ever knew the secret of that window, but I am one, as you shall see.",
    "The man’s name was said to have been Murlock. He was evidently of the frontier type, and he had come into the forest with a young wife, whom he loved with the fierce, uncomplaining love of a man who has little else. He had built the cabin with his own hands, and had been, in his rough way, happy.",
    "One day his wife fell ill. He was many miles from any help, and there was no help to be had. He did what he could, and when she died he was taken with a great dull amazement. He had no experience in grief; his heart could not hold it all, and his imagination could not comprehend it.",
    "He was a woodman, and he knew what was to be done. He washed the body, combed the hair, dressed it in such clothing as he had, and laid it upon a table, binding a handkerchief about the chin to close the jaw. There were no neighbours to come; there was to be no burial until the morning.",
    "Night came, and he sat by the table in the darkness, a candle burning at the dead woman’s head. He was not sorrowful now, only bewildered. Sometimes he was barely conscious of what was about him, and sometimes he felt a quiet, dull surprise that he was not weeping. Now and then he put out his hand and touched the cold cheek, then drew it back.",
    "Then, without any sense of the passage of time, he fell asleep with his face in his hands upon the table.",
    "He was awakened by what seemed, in the stillness, to be a cry. He raised his head and listened, not knowing whether he had dreamed it. Everything was in darkness; the candle had burned itself out. The night was black, and there was no wind in the trees outside.",
    "He was intensely conscious of his own heart. Presently the table shook beneath his arms, and at the same moment he heard, or fancied that he heard, a light, soft step, and then another. The sounds seemed to come from the direction of the table itself.",
    "He was terrified, and he could not have told what he feared. He half rose to his feet, his hands upon the edge of the table, and he listened with all his soul. Then came a sound as of the shuffling of a heavy body, and afterwards a sound that he could not explain: a sound of something dragging.",
    "He was a hunter, and his rifle lay across his knees. Without knowing why, he lifted it, and, pointing into the darkness towards the table, he fired.",
    "By the flash which lit up the room with a vivid illumination, he saw an enormous panther dragging the dead woman towards the window, its teeth fixed in her throat. Then all was darkness again, and silence; and when he recovered from the shock of the report he heard nothing but the beating of his own heart.",
    "It was long before he found a match and lit it. The table had been moved from its place. In the corner of the room the body lay upon the floor, the clothing disordered, the hair in disarray, and the throat terribly torn.",
    "Murlock did not weep. He looked, and set the candle down, and looked again.",
    "Between the woman’s teeth was a fragment of the animal’s ear."
  ]
};

const ANNOTATE = [
  {
    skill: "Narrator",
    prompt: "Find where the narrator promises the reader a <em>secret</em>.",
    target: ["I fancy there are few persons living today who ever knew the secret of that window"],
    decoys: [{ phrase: "And none knew why it was so closed", why: "That tells us nobody knew. Look for the line where the narrator claims that he does." }],
    miss: "Look for the short paragraph that uses the word “I”.",
    explain: "The narrator steps out of the background to say that he knows something we do not. The whole story then works as the answer to that promise."
  },
  {
    skill: "Setting",
    prompt: "Find where Murlock is described as <em>part of the forest</em>.",
    target: ["of whose gloom and silence he seemed a part"],
    decoys: [{ phrase: "surrounded on all sides by the great forest", why: "That places him inside the forest, but it does not say he seems part of it." }],
    miss: "Look in the second paragraph, just before the line about smiling.",
    explain: "The forest is gloomy and silent, and so is he. Bierce blurs the man into his setting, so that the place seems to have shaped him."
  },
  {
    skill: "Suspense",
    prompt: "Find the sound Murlock <em>cannot explain</em>.",
    target: ["a sound of something dragging"],
    decoys: [{ phrase: "a light, soft step, and then another", why: "A frightening sound, but he can name that one. Look for the sound he has no name for." }],
    miss: "Look just before he lifts the rifle.",
    explain: "Bierce gives us only what Murlock can hear in the dark. Naming the sound would end the fear, so the sentence refuses to name it."
  },
  {
    skill: "Ending image",
    prompt: "Find the <em>final detail</em> that changes the whole story.",
    target: ["Between the woman’s teeth was a fragment of the animal’s ear"],
    decoys: [{ phrase: "the throat terribly torn", why: "Horrible, and true, but the panther could do that to a dead woman. Look for the detail only a living woman could leave." }],
    miss: "Look at the last line of the story.",
    explain: "A dead woman cannot bite. The last line tells us she was alive when the panther came, and Bierce stops there rather than spelling it out."
  }
];

const QUESTIONS = [
  {
    skill: "Point of view",
    q: "How does the narrator know about Murlock?",
    opts: [
      { t: "He knows the secret and is passing on a story from years before", ok: true, why: "Right. He writes about 1830 from long afterwards, and claims to be one of the few who know the truth." },
      { t: "He was in the cabin on the night the panther came", why: "Nothing places him there. He tells the night from outside." },
      { t: "He is Murlock himself, telling the story of his own life in old age", why: "Murlock is “he” throughout, and the narrator outlives him." },
      { t: "He is guessing, and admits he invented the details", why: "He claims knowledge, not invention." }
    ]
  },
  
  {
    skill: "Mood",
    q: "What mood do the paragraphs before the panther create?",
    opts: [
      { t: "Numb and still, with grief that has not arrived yet", ok: true, why: "Right. He is “bewildered”, not sorrowful, and surprised he is not weeping. The stillness makes the noise later far louder." },
      { t: "Frantic and busy, as he searches the cabin for help", why: "He is many miles from help and has stopped looking for it." },
      { t: "Peaceful and warm, with the candle burning steadily", why: "One candle in a black forest is not warmth. He feels only dull surprise." },
      { t: "Angry, because he blames himself for his wife’s death", why: "Blame is never mentioned in the extract." }
    ]
  },
  {
    skill: "Word choice",
    q: "Murlock feels “a great dull amazement”. Why those words?",
    opts: [
      { t: "They show grief that is too big to feel properly yet", ok: true, why: "Right. “Amazement” is shock rather than sadness, and “dull” drains it of sharpness. The next line says his heart could not hold it all." },
      { t: "They show he is secretly pleased that she has died", why: "Nothing suggests that. He loved her fiercely." },
      { t: "They show he is confused about who she was", why: "He knows exactly who she is as he prepares the body." },
      { t: "They show he had been expecting her death for months", why: "She fell ill suddenly, with no help nearby." }
    ]
  },
  {
    skill: "Ending",
    q: "Why does Bierce stop at the fragment of ear?",
    opts: [
      { t: "The reader does the last step, which makes it land harder", ok: true, why: "Right. He never writes that she was alive. We assemble it, and the horror belongs to us." },
      { t: "The story has simply run out of any more events to describe", why: "He could have described the burial, or the boarding of the window." },
      { t: "It shows that the panther was badly hurt by the rifle", why: "The ear was bitten off, not shot off." },
      { t: "It proves Murlock’s aim with the rifle was accurate", why: "The shot is not what the last line is about." }
    ]
  },
  {
    skill: "Summary",
    q: "Which sentence best sums up what happens in this text?",
    opts: [
      { t: "A grieving frontier settler keeps watch over his wife's body through the night, and after a panther attacks in the darkness, a final chilling detail suggests she was still alive.", ok: true, why: "Right. It covers the whole shape of the text, not just one part of it." },
      { t: "Murlock builds a small log cabin deep in the forest with his own hands and boards up its single window for good. This point is raised without being the central focus of the whole piece. Further events unfold elsewhere in the passage that this does not cover.", why: "True, but too narrow. It only covers part of the text and misses the main point." },
      { t: "Murlock himself is dragged away and killed by the panther that breaks into his lonely cabin later that same night. Other characters and events are also part of what happens in the text. This is a smaller part of a much longer sequence of events overall.", why: "Too broad. This adds a claim the text does not actually make or support." },
      { t: "Murlock hears a strange, unexplained sound somewhere in the pitch darkness of the cabin that he cannot identify. This detail appears alongside several others as the story unfolds. The wider text covers considerably more ground than this alone.", why: "A real detail, but a minor one. It is not what the text is mainly about." }
    ]
  }
];

const EVIDENCE = [
  {
    quote: "no one had ever known him to smile nor speak a needless word",
    opts: [
      { t: "Murlock has been closed off for a very long time", ok: true, why: "Right. “Ever” covers his whole life in that place, so the change in him is old and permanent." },
      { t: "Murlock cannot speak properly because of an old illness", why: "He speaks, but never more than he needs to." },
      { t: "Murlock is angry with the other settlers nearby", why: "They have mostly gone, and no quarrel is mentioned." },
      { t: "Murlock is a cheerful man who lives quietly", why: "A man who never smiles is not described as cheerful." }
    ]
  },
  {
    quote: "there was to be no burial until the morning",
    opts: [
      { t: "The body must stay in the cabin all night with him", ok: true, why: "Right. One sentence sets up the whole night: a body, a candle, a man, and hours of darkness." },
      { t: "Murlock is too tired to dig a grave that evening", why: "The reason given is time of day, not his strength." },
      { t: "He is waiting for a priest to arrive from the town", why: "There are no neighbours and no one is coming." },
      { t: "The ground outside is too hard to dig in the dark", why: "The ground is never mentioned." }
    ]
  },
  {
    quote: "The table had been moved from its place.",
    opts: [
      { t: "Something heavy struggled in the room while it was dark", ok: true, why: "Right. A table does not move by itself, so the plain sentence proves the fight was real." },
      { t: "Murlock pushed the table when he fired the rifle", why: "He was seated behind it, with the rifle on his knees." },
      { t: "The floor of the cabin slopes towards the corner", why: "Nothing about the floor is described." },
      { t: "The shot from the rifle knocked the heavy table sideways", why: "The table is moved, not knocked over, and a bullet would not do it." }
    ]
  }
];

const EXPLAIN = [
  {
    claim: "The opening makes the reader wait for an answer.",
    quote: "I fancy there are few persons living today who ever knew the secret of that window",
    opts: [
      { t: "The narrator tells us that the window of the log cabin was boarded up and that nobody in the district knew the reason.", why: "Retelling. What does his claim do to the reader?" },
      { t: "He claims to hold a secret, so the story becomes a promise. We read on to be told the one thing he says almost nobody knows.", ok: true, why: "Strong. It explains what the claim sets up and why we keep reading." },
      { t: "The narrator means that the people who lived near the cabin in 1830 have all died and cannot tell the story now.", why: "Partly true, but it misses the promise being made." },
      { t: "The narrator uses the word “secret” in this sentence, a word writers choose when they want something in a story to sound hidden or private.", why: "An observation. What effect does the word have?" }
    ]
  },
  {
    claim: "Bierce hides the key fact in a small, ordinary action.",
    quote: "binding a handkerchief about the chin to close the jaw",
    opts: [
      { t: "Murlock gets the body ready for burial in the way a woodman would, washing it and dressing it and laying it out.", why: "Retelling. Why does this one action matter?" },
      { t: "It reads as simple care, but it is the fact the ending needs: a bound jaw that later closes on a panther’s ear.", ok: true, why: "Strong. It shows the detail doing two jobs at once." },
      { t: "The handkerchief shows how poor Murlock was, because he had nothing better to use on his wife’s body.", why: "A guess about his poverty, not about the detail’s purpose." },
      { t: "The writer describes what Murlock did to the body.", why: "An observation. Say why this detail is chosen." }
    ]
  },
  {
    claim: "The darkness is the reason the scene is frightening.",
    quote: "a sound that he could not explain: a sound of something dragging",
    opts: [
      { t: "Murlock hears noises in the cabin after he wakes up, and he cannot tell what is making them because the candle is out.", why: "Retelling. Why keep the cause hidden?" },
      { t: "We are held to what one man can hear. An unexplained sound stays a threat, while a named animal would become a problem to solve.", ok: true, why: "Strong. It explains the limit on the reader’s knowledge and its effect." },
      { t: "The sound is made by the panther pulling the dead woman across the floor towards the window of the cabin.", why: "True later, but it explains away the moment instead of the technique." },
      { t: "The writer describes a sound in the dark here, and describing sounds is one of the ways writers help a reader imagine a scene they cannot see.", why: "An observation. Why is it left unexplained?" }
    ]
  },
  {
    claim: "Murlock is described as belonging to the forest.",
    quote: "of whose gloom and silence he seemed a part",
    opts: [
      { t: "Murlock lives by himself in a cabin made of logs, with the great forest growing on every side of the clearing.", why: "Retelling. What does the wording suggest about him?" },
      { t: "The forest’s two qualities are given to the man. He is not just surrounded by gloom and silence, he is made of them.", ok: true, why: "Strong. It links setting and character through one phrase." },
      { t: "Bierce means that Murlock spent most of his working days out among the trees, hunting animals for their skins.", why: "A literal reading. The phrase is about what he seems, not where he works." },
      { t: "The writer describes the forest around the cabin here, telling the reader about the gloom and the silence of the trees on every side of it.", why: "An observation. What is the effect on our view of Murlock?" }
    ]
  }
];

const COLLECT = [
  {
    claim: "The story plants an early detail that the shocking ending depends on.",
    opts: [
      { t: "binding a handkerchief about the chin to close the jaw", ok: true, why: "Right. A jaw bound shut sets up the last line: the reader remembers it once the ear is found in her teeth." },
      { t: "He washed the body, combed the hair", why: "This is part of the same careful preparation, but not the detail the ending turns on." },
      { t: "laid it upon a table", why: "This is part of laying out the body, not the crucial detail." },
      { t: "There were no neighbours to come", why: "This is a fact about being alone, not the jaw detail the ending needs." }
    ]
  },
  {
    claim: "The final line reveals that the wife was alive when the panther attacked.",
    opts: [
      { t: "a fragment of the animal’s ear", ok: true, why: "Right. Only living teeth could have bitten off the ear, so she must have been alive when it came." },
      { t: "the throat terribly torn", why: "This is horrific, but a panther could tear a body whether alive or dead. It does not prove she was alive." },
      { t: "the body lay upon the floor", why: "This shows where the body ended up, not that she was alive." },
      { t: "an enormous panther dragging the dead woman towards the window", why: "This describes the attack and even calls her ‘dead’; it is not the proof she was alive." }
    ]
  },
  {
    claim: "Grief has aged Murlock far beyond his real years.",
    target: ["Something besides years had had a hand in his ageing"],
    decoys: [{ phrase: "He was apparently seventy years old, actually about fifty", why: "This gives the gap between how old he looks and is, but the claim asks for the hint at the cause. Look for what ‘besides years’ aged him." }],
    miss: "Look at the paragraph describing Murlock’s face and age.",
    explain: "Looking seventy at fifty, ‘something besides years’ aged him. The narrator hints, without saying it yet, that grief did this."
  },
  {
    claim: "The first solid sign that something is in the dark room is the table.",
    target: ["Presently the table shook beneath his arms"],
    decoys: [{ phrase: "he heard, or fancied that he heard, a light, soft step", why: "This is a sound he half-imagines; the claim asks for the first physical sign of something present. Look for the table." }],
    miss: "Look for the moment just after he wakes in the dark.",
    explain: "The ‘table shook beneath his arms’ is the first solid sign something is there, before the steps and the dragging. A shaking table cannot be imagined away."
  }
];
TEXTS.push({ id: "the-boarded-window", type: "Fiction", mode: "Creative", form: "Gothic tale", level: "5ème",
  hook: "A cabin in the forest, a window nailed shut, and one detail at the end that explains everything.",
  TEXT, ANNOTATE, QUESTIONS, EVIDENCE, EXPLAIN, COLLECT });
}
{
const TEXT = {
  title: "The Gift of the Magi",
  intro: "O. Henry, 1905. Abridged.",
  paras: [
    "One dollar and eighty-seven cents. That was all. And sixty cents of it was in pennies. Pennies saved one and two at a time by bulldozing the grocer and the vegetable man and the butcher until one’s cheeks burned with the silent imputation of parsimony that such close dealing implied. Three times Della counted it. One dollar and eighty-seven cents. And the next day would be Christmas.",
    "There was clearly nothing to do but flop down on the shabby little couch and howl. So Della did it. Which instigates the moral reflection that life is made up of sobs, sniffles, and smiles, with sniffles predominating.",
    "While the mistress of the home is gradually subsiding from the first stage to the second, take a look at the home. A furnished flat at eight dollars per week. In the vestibule below was a letter-box into which no letter would go, and an electric button from which no mortal finger could coax a ring. Also appertaining thereunto was a card bearing the name “Mr. James Dillingham Young”.",
    "Whenever Mr. James Dillingham Young came home and reached his flat above he was called “Jim” and greatly hugged by Mrs. James Dillingham Young, already introduced to you as Della. Which is all very good.",
    "Della finished her cry and attended to her cheeks with the powder rag. She stood by the window and looked out dully at a grey cat walking a grey fence in a grey backyard. Tomorrow would be Christmas Day, and she had only one dollar and eighty-seven cents with which to buy Jim a present. She had been saving every penny she could for months, with this result. Expenses had been greater than she had calculated. They always are.",
    "Now, there were two possessions of the James Dillingham Youngs in which they both took a mighty pride. One was Jim’s gold watch that had been his father’s and his grandfather’s. The other was Della’s hair.",
    "So now Della’s beautiful hair fell about her, rippling and shining like a cascade of brown waters. It reached below her knee and made itself almost a garment for her. And then she did it up again nervously and quickly. Once she faltered for a minute and stood still while a tear or two splashed on the worn red carpet.",
    "On went her old brown jacket; on went her old brown hat. With a whirl of skirts and with the brilliant sparkle still in her eyes, she fluttered out the door and down the stairs to the street.",
    "Where she stopped the sign read: “Mme. Sofronie. Hair Goods of All Kinds.” Della ran up the stairs, and collected herself, panting.",
    "“Will you buy my hair?” asked Della.",
    "“I buy hair,” said Madame. “Take yer hat off and let’s have a sight at the looks of it.”",
    "Down rippled the brown cascade.",
    "“Twenty dollars,” said Madame, lifting the mass with a practised hand.",
    "“Give it to me quick,” said Della.",
    "The next two hours tripped by on rosy wings. She was ransacking the stores for Jim’s present. She found it at last. It surely had been made for Jim and no one else. It was a platinum fob chain, simple and chaste in design, proclaiming its value by substance alone and not by showy ornament. As soon as she saw it she knew that it must be Jim’s. Quietness and value: the description applied to both. Twenty-one dollars they took from her for it, and she hurried home with the eighty-seven cents.",
    "When Della reached home her intoxication gave way a little to prudence and reason. She got out her curling irons and went to work repairing the ravages made by generosity added to love. Which is always a tremendous task, dear friends, a mammoth task.",
    "Within forty minutes her head was covered with tiny, close-lying curls that made her look wonderfully like a truant schoolboy. She looked at her reflection in the mirror long, carefully, and critically. “If Jim doesn’t kill me,” she said to herself, “before he takes a second look at me, he’ll say I look like a chorus girl. But what could I do? Oh! what could I do with a dollar and eighty-seven cents?”",
    "Della doubled the fob chain in her hand and sat on the corner of the table near the door that he always entered. Then she heard his step on the stair away down on the first flight, and she turned white for just a moment. She had a habit of saying a little silent prayer about the simplest everyday things, and now she whispered: “Please God, make him think I am still pretty.”",
    "The door opened and Jim stepped in and closed it. He looked thin and very serious. Poor fellow, he was only twenty-two, and to be burdened with a family! He needed a new overcoat and he was without gloves.",
    "Jim stopped inside the door, as immovable as a setter at the scent of quail. His eyes were fixed upon Della, and there was an expression in them that she could not read, and it terrified her. It was not anger, nor surprise, nor disapproval, nor horror, nor any of the sentiments that she had been prepared for. He simply stared at her fixedly with that peculiar expression on his face.",
    "Della wriggled off the table and went for him. “Jim, darling,” she cried, “don’t look at me that way. I had my hair cut off and sold because I couldn’t have lived through Christmas without giving you a present. It’ll grow out again. You won’t mind, will you? Say Merry Christmas, Jim, and let’s be happy. You don’t know what a nice, what a beautiful, nice gift I’ve got for you.”",
    "“You’ve cut off your hair?” asked Jim, laboriously, as if he had not arrived at that patent fact yet even after the hardest mental labour.",
    "“Cut it off and sold it,” said Della. “Don’t you like me just as well, anyhow? I’m me without my hair, ain’t I?”",
    "Jim looked about the room curiously. “You say your hair is gone?” he said, with an air almost of idiocy.",
    "“You needn’t look for it,” said Della. “It’s sold, I tell you, sold and gone, too. It’s Christmas Eve, boy. Be good to me, for it went for you.”",
    "Out of his trance Jim seemed quickly to wake. He enfolded his Della. Then he drew a package from his overcoat pocket and threw it upon the table.",
    "“Don’t make any mistake, Dell,” he said, “about me. I don’t think there’s anything in the way of a haircut or a shave or a shampoo that could make me like my girl any less. But if you’ll unwrap that package you may see why you had me going a while at first.”",
    "White fingers and nimble tore at the string and paper. And then an ecstatic scream of joy; and then, alas! a quick feminine change to hysterical tears and wails, necessitating the immediate employment of all the comforting powers of the lord of the flat.",
    "For there lay The Combs, the set of combs, side and back, that Della had worshipped long in a shop window. Beautiful combs, pure tortoise shell, with jewelled rims, just the shade to wear in the beautiful vanished hair. They were expensive combs, she knew, and her heart had simply craved and yearned over them without the least hope of possession. And now they were hers, but the tresses that should have adorned the coveted adornments were gone.",
    "But she hugged them to her bosom, and at length she was able to look up with dim eyes and a smile and say: “My hair grows so fast, Jim!”",
    "And then Della leaped up like a little singed cat and cried, “Oh, oh!”",
    "Jim had not yet seen his beautiful present. She held it out to him eagerly upon her open palm. The dull precious metal seemed to flash with a reflection of her bright and ardent spirit.",
    "“Isn’t it a dandy, Jim? I hunted all over town to find it. You’ll have to look at the time a hundred times a day now. Give me your watch. I want to see how it looks on it.”",
    "Instead of obeying, Jim tumbled down on the couch and put his hands under the back of his head and smiled.",
    "“Dell,” said he, “let’s put our Christmas presents away and keep them a while. They’re too nice to use just at present. I sold the watch to get the money to buy your combs. And now suppose you put the chops on.”",
    "The magi, as you know, were wise men, wonderfully wise men, who brought gifts to the Babe in the manger. They invented the art of giving Christmas presents. Being wise, their gifts were no doubt wise ones. And here I have lamely related to you the uneventful chronicle of two foolish children in a flat who most unwisely sacrificed for each other the greatest treasures of their house. But in a last word to the wise of these days let it be said that of all who give gifts these two were the wisest. They are the magi."
  ]
};

const ANNOTATE = [
  {
    skill: "Direct address",
    prompt: "Find where the narrator invites the reader to <em>look around the flat</em>.",
    target: ["take a look at the home"],
    decoys: [{ phrase: "A furnished flat at eight dollars per week", why: "That is the description of the home, which comes next. Look for the words that invite you to look." }],
    miss: "Look in the third paragraph, just after Della flops on the couch.",
    explain: "The narrator pauses the action and turns to us, as a guide would. It makes the story feel told aloud, which matters when he judges the couple at the end."
  },
  {
    skill: "Narrator’s tone",
    prompt: "Find the narrator’s <em>joke about crying</em> in the second paragraph.",
    target: ["life is made up of sobs, sniffles, and smiles, with sniffles predominating"],
    decoys: [{ phrase: "flop down on the shabby little couch and howl", why: "That is what Della does. Look for the narrator’s comment about life in general." }],
    miss: "Look at the sentence that begins with “Which instigates”.",
    explain: "He treats Della’s misery as an excuse for a neat little saying. The lightness keeps the story from becoming sentimental, even when it is sad."
  },
  {
    skill: "Mood",
    prompt: "Find the <em>grey detail</em> outside the window.",
    target: ["a grey cat walking a grey fence in a grey backyard"],
    decoys: [{ phrase: "the worn red carpet", why: "A good detail for their poverty, but it is inside the flat and it is not grey." }],
    miss: "Look for the moment Della finishes crying and stands at the window.",
    explain: "The same word three times drains the colour out of the view. The world outside matches her mood without the narrator having to name the feeling."
  },
  {
    skill: "Characterisation",
    prompt: "Find the <em>comparison</em> that describes Jim frozen in the doorway.",
    target: ["as immovable as a setter at the scent of quail"],
    decoys: [{ phrase: "He looked thin and very serious", why: "That describes him as he comes in, but it is not a comparison." }],
    miss: "Look for the moment Jim stops just inside the door.",
    explain: "A setter is a hunting dog that freezes when it senses a bird. The comparison holds Jim still for a long moment, so we feel Della waiting to be judged."
  }
];

const QUESTIONS = [
  
  {
    skill: "Irony",
    q: "What makes the ending ironic?",
    opts: [
      { t: "Each gift is made useless by the sacrifice that paid for the other", ok: true, why: "Right. Combs for sold hair, a chain for a sold watch. Their love causes the uselessness." },
      { t: "Neither of them really wanted a Christmas present at all", why: "Both wanted to give one badly enough to sell a treasure." },
      { t: "Jim turns out to be much richer than Della had thought", why: "He needs an overcoat and has no gloves." },
      { t: "The shop refuses to take either of the two presents back afterwards", why: "No return is ever attempted." }
    ]
  },
  {
    skill: "Narrator’s judgement",
    q: "The narrator calls them “two foolish children”, then “the wisest”. Why both?",
    opts: [
      { t: "Foolish about money, wise about what they were willing to lose", ok: true, why: "Right. The word changes meaning between the two halves of the last paragraph, which is the point he wants to make." },
      { t: "He changes his mind because he feels sorry for them", why: "The turn is planned. He builds it on the magi comparison." },
      { t: "He is being sarcastic in both halves of the sentence", why: "The final judgement is sincere, which is why it closes the story." },
      { t: "He thinks that the two of them will be wiser when they are older", why: "He calls them wisest now, not later." }
    ]
  },
  {
    skill: "Structure",
    q: "Why does O. Henry keep Jim’s secret from the reader?",
    opts: [
      { t: "So we share Della’s confusion at his strange stare", ok: true, why: "Right. We cannot read his face either. When the truth lands, it lands on us at the same moment." },
      { t: "Because the narrator does not know about it himself", why: "He knows everything else, including Della’s prayer." },
      { t: "Because Jim only decides to sell the watch later that night", why: "The combs are already in his pocket when he walks in." },
      { t: "To hide that Jim is disappointed by his wife’s haircut", why: "Jim says plainly that nothing could make him like her less." }
    ]
  },
  {
    skill: "Vocabulary",
    q: "The fob chain is “simple and chaste in design”. Why does that matter to Della?",
    opts: [
      { t: "Because plain and valuable is how she thinks of Jim", ok: true, why: "Right. The text says “Quietness and value: the description applied to both”. The chain suits the man." },
      { t: "Because a plain chain was the cheapest one in the shop", why: "It costs twenty-one dollars of her twenty-one dollars and eighty-seven." },
      { t: "Because Jim had asked her for something plain", why: "He knows nothing about it until she holds it out." },
      { t: "Because a plain chain would be easier to sell again", why: "Selling it is never in her mind." }
    ]
  },
  {
    skill: "Summary",
    q: "Which sentence best sums up what happens in this text?",
    opts: [
      { t: "Della sells her hair to buy her husband a gift for his prized watch, only to learn he has sold that very watch to buy the combs she wanted.", ok: true, why: "Right. It covers the whole shape of the text, not just one part of it." },
      { t: "Della sells her long, beautiful hair to a wig shop nearby in exchange for exactly twenty dollars in cash. Other parts of the story focus on different details.", why: "True, but too narrow. It only covers part of the text and misses the main point." },
      { t: "Jim becomes absolutely furious with Della for cutting off all of her hair without asking his permission first. The rest of the text develops in a different direction.", why: "Too broad. This adds a claim the text does not actually make or support." },
      { t: "Della buys her husband a plain platinum watch chain that she is convinced will suit him absolutely perfectly. The story continues well beyond this particular moment.", why: "A real detail, but a minor one. It is not what the text is mainly about." }
    ]
  }
];

const EVIDENCE = [
  {
    quote: "Pennies saved one and two at a time by bulldozing the grocer",
    opts: [
      { t: "The money was gathered slowly and with some embarrassment", ok: true, why: "Right. “One and two at a time” shows how long it took, and haggling made her cheeks burn." },
      { t: "Della had stolen small amounts from the shopkeepers", why: "Bulldozing here means arguing over prices, not taking money." },
      { t: "Della earns her living by working for the grocer downstairs", why: "No job of hers is mentioned in the story." },
      { t: "The shops in the neighbourhood were unusually cheap", why: "She has to push hard for every penny off." }
    ]
  },
  {
    quote: "there was an expression in them that she could not read, and it terrified her",
    opts: [
      { t: "The story keeps Jim’s feelings hidden at its most tense moment", ok: true, why: "Right. We are held to Della’s view, so his unreadable face is all we get until he speaks." },
      { t: "Jim is furious with Della for cutting off her hair", why: "The text rules out anger in the very next sentence." },
      { t: "Della is frightened of her husband’s temper in general", why: "She prays that he will still find her pretty, not that he will be calm." },
      { t: "Jim has completely forgotten that it is Christmas Eve this evening", why: "He walks in with her present in his pocket." }
    ]
  },
  {
    quote: "My hair grows so fast, Jim!",
    opts: [
      { t: "She protects the moment rather than her own feelings", ok: true, why: "Right. She has just cried over the combs, then finds a cheerful line so that Jim’s gift is not spoiled." },
      { t: "She is annoyed that she cannot use any of the combs yet", why: "She hugs them and smiles through wet eyes." },
      { t: "She expects her hair to be long again within a week", why: "The line is comfort, not a real estimate." },
      { t: "She is hinting that Jim should buy her more combs", why: "Nothing in the scene asks for more." }
    ]
  }
];

const EXPLAIN = [
  {
    claim: "The narrator keeps the story light while it hurts.",
    quote: "life is made up of sobs, sniffles, and smiles, with sniffles predominating",
    opts: [
      { t: "Della lies down on the couch in the little flat and cries because she has not saved enough money for a present.", why: "Retelling. What does the narrator’s comment do?" },
      { t: "He turns her crying into a tidy saying. The joke keeps the poverty from becoming pitiful, so we like the couple instead of pitying them.", ok: true, why: "Strong. It explains the tone and its effect on the reader." },
      { t: "The narrator is explaining that most people spend more of their lives crying than they do smiling or laughing.", why: "A literal reading of a joke." },
      { t: "The writer makes a comment about life in this sentence, stepping away from Della for a moment in order to say something general about people.", why: "An observation. What does the comment achieve?" }
    ]
  },
  {
    claim: "Setting carries Della’s mood without naming it.",
    quote: "a grey cat walking a grey fence in a grey backyard",
    opts: [
      { t: "Della stands at the window of the flat after she has finished crying and looks down into the yard below her.", why: "Retelling. Why is one word repeated?" },
      { t: "“Grey” three times drains the colour from everything she sees. The view reports her flatness without the narrator naming a feeling.", ok: true, why: "Strong. It explains the repetition and links it to her state." },
      { t: "O. Henry is showing that the couple live in a dirty part of the city where nothing is ever cleaned properly.", why: "The greyness is mood, not dirt." },
      { t: "The writer repeats the same word three times here, and repetition is a technique that writers use when they want a reader to notice something.", why: "An observation. What is the effect of the repetition?" }
    ]
  },
  {
    claim: "The last paragraph asks the reader to change their mind.",
    quote: "two foolish children in a flat who most unwisely sacrificed for each other",
    opts: [
      { t: "The narrator says at the end that Della and Jim each gave up their best possession to buy the other one a present.", why: "Retelling. Why call them foolish just before calling them wisest?" },
      { t: "He grants the obvious judgement first, then overturns it. “Foolish” about money becomes “wisest” about love within the same paragraph.", ok: true, why: "Strong. It tracks the turn and what the two words each mean." },
      { t: "The narrator is annoyed with the couple for wasting their money on presents they could not afford to buy.", why: "He ends by calling them the wisest of all givers." },
      { t: "The narrator calls Della and Jim children in this sentence, and calling grown-ups children is a way of describing how they have behaved.", why: "An observation. What is he setting up?" }
    ]
  },
  {
    claim: "O. Henry hides the second sacrifice in plain sight.",
    quote: "as immovable as a setter at the scent of quail",
    opts: [
      { t: "Jim comes home from work and stops just inside the door of the flat when he sees that Della has cut off her hair.", why: "Retelling. What is he actually reacting to?" },
      { t: "We read his stillness as shock at her hair. On a second reading it is a man who has just sold his watch for combs she cannot use.", ok: true, why: "Strong. It shows how the same detail reads two ways." },
      { t: "The comparison with a hunting dog suggests that Jim is dangerous and that Della is right to be afraid of him.", why: "The dog image is about stillness, not threat." },
      { t: "The writer compares Jim to a dog at this point in the story, using a comparison with an animal to describe the way a person is standing.", why: "An observation. What does the comparison hide?" }
    ]
  }
];

const COLLECT = [
  {
    claim: "The couple’s poverty is shown through small, everyday details rather than stated outright.",
    opts: [
      { t: "a letter-box into which no letter would go", ok: true, why: "Right. A dead letter-box and a broken bell quietly show their poverty without the narrator naming it." },
      { t: "there were two possessions of the James Dillingham Youngs in which they both took a mighty pride", why: "This introduces their two treasures, not the everyday poverty of the flat." },
      { t: "Twenty-one dollars they took from her for it", why: "This is the price of the chain, not a detail of the flat’s poverty." },
      { t: "With a whirl of skirts and with the brilliant sparkle still in her eyes", why: "This describes Della leaving the flat, not how poor it is." }
    ]
  },
  {
    claim: "Della is afraid Jim will stop loving her once her hair is gone.",
    opts: [
      { t: "Please God, make him think I am still pretty.", ok: true, why: "Right. Her whispered prayer shows she fears the haircut will change how Jim sees her." },
      { t: "She had a habit of saying a little silent prayer about the simplest everyday things", why: "This tells us she often prays, but not what she is afraid of here." },
      { t: "she turned white for just a moment", why: "This shows she is nervous, but not that she fears losing Jim’s love." },
      { t: "Then she heard his step on the stair away down on the first flight", why: "This is just Jim arriving home, not Della’s fear." }
    ]
  },
  {
    claim: "Della gives up her most treasured possession to buy Jim’s gift.",
    target: ["“Will you buy my hair?” asked Della."],
    decoys: [{ phrase: "Della’s beautiful hair fell about her, rippling and shining like a cascade of brown waters", why: "This shows how beautiful her hair is, which makes the sacrifice bigger, but the claim asks for the moment she gives it up. Look for what she says in the shop." }],
    miss: "Look at the scene inside Madame Sofronie’s shop.",
    explain: "The thing she prizes most is her hair, and she walks into the shop and offers it: “Will you buy my hair?” Selling her treasure to afford Jim’s gift is her sacrifice."
  },
  {
    claim: "Both gifts are made useless by the very sacrifices that paid for them.",
    target: ["I sold the watch to get the money to buy your combs."],
    decoys: [{ phrase: "the tresses that should have adorned the coveted adornments were gone", why: "This shows the combs are useless now her hair is gone, but the claim needs the line that reveals both sacrifices at once. Look at Jim’s last speech." }],
    miss: "Look at Jim’s final speech, near the end.",
    explain: "Della sold her hair for a watch chain; Jim “sold the watch” to buy her combs. Each gift is now useless, and it is the love behind each sacrifice that ruined the other."
  }
];
TEXTS.push({ id: "gift-of-the-magi", type: "Fiction", mode: "Creative", form: "Short story", level: "5ème",
  hook: "One dollar and eighty-seven cents, and two people determined to buy a Christmas present.",
  TEXT, ANNOTATE, QUESTIONS, EVIDENCE, EXPLAIN, COLLECT });
}
{
const TEXT = {
  title: "The Elephant’s Child",
  intro: "Rudyard Kipling, Just So Stories, 1902. Abridged.",
  paras: [
    "In the High and Far-Off Times the Elephant, O Best Beloved, had no trunk. He had only a blackish, bulgy nose, as big as a boot, that he could wriggle about from side to side; but he couldn’t pick up things with it.",
    "But there was one Elephant, a new Elephant, an Elephant’s Child, who was full of ’satiable curtiosity, and that means he asked ever so many questions. And he lived in Africa, and he filled all Africa with his ’satiable curtiosities.",
    "He asked his tall aunt, the Ostrich, why her tail-feathers grew just so, and his tall aunt the Ostrich spanked him with her hard, hard claw. He asked his tall uncle, the Giraffe, what made his skin spotty, and his tall uncle the Giraffe spanked him with his hard, hard hoof. And still he was full of ’satiable curtiosity!",
    "He asked his broad aunt, the Hippopotamus, why her eyes were red, and his broad aunt the Hippopotamus spanked him with her broad, broad hoof; and he asked his hairy uncle, the Baboon, why melons tasted just so, and his hairy uncle the Baboon spanked him with his hairy, hairy paw. And still he was full of ’satiable curtiosity!",
    "One fine morning this ’satiable Elephant’s Child asked a new fine question that he had never asked before. He asked, “What does the Crocodile have for dinner?” Then everybody said, “Hush!” in a loud and dretful tone, and they spanked him immediately and directly, without stopping, for a long time.",
    "By and by, when that was finished, he came upon Kolokolo Bird sitting in the middle of a wait-a-bit thorn-bush, and he said, “My father has spanked me, and my mother has spanked me; all my aunts and uncles have spanked me for my ’satiable curtiosity; and still I want to know what the Crocodile has for dinner!”",
    "Then Kolokolo Bird said, with a mournful cry, “Go to the banks of the great grey-green, greasy Limpopo River, all set about with fever-trees, and find out.”",
    "That very next morning the Elephant’s Child took a hundred pounds of bananas, and a hundred pounds of sugar-cane, and seventeen melons, and said to all his dear families, “Goodbye. I am going to the great grey-green, greasy Limpopo River, all set about with fever-trees, to find out what the Crocodile has for dinner.” And they all spanked him once more for luck, though he asked them most politely to stop.",
    "Then he went away, eating melons all the time, till at last he came to the banks of the great grey-green, greasy Limpopo River, all set about with fever-trees, precisely as Kolokolo Bird had said.",
    "Now you must know and understand, O Best Beloved, that till that very week, and day, and hour, and minute, this ’satiable Elephant’s Child had never seen a Crocodile, and did not know what one was like. It was all his ’satiable curtiosity.",
    "The first thing that he found was a Bi-Coloured-Python-Rock-Snake curled round a rock.",
    "“’Scuse me,” said the Elephant’s Child most politely, “but have you seen such a thing as a Crocodile in these parts?”",
    "“Have I seen a Crocodile?” said the Bi-Coloured-Python-Rock-Snake, in a voice of dretful scorn. “What will you ask me next?”",
    "“’Scuse me,” said the Elephant’s Child, “but could you kindly tell me what he has for dinner?” Then the Bi-Coloured-Python-Rock-Snake uncoiled himself very quickly from the rock, and spanked the Elephant’s Child with his scalesome, flailsome tail.",
    "Then the Elephant’s Child stepped on what he thought was a log of wood at the very edge of the great grey-green, greasy Limpopo River. But it was really the Crocodile, O Best Beloved, and the Crocodile winked one eye, like this.",
    "“’Scuse me,” said the Elephant’s Child most politely, “but do you happen to have seen a Crocodile in these parts?”",
    "Then the Crocodile winked the other eye, and lifted half his tail out of the mud; and the Elephant’s Child stepped back most politely, because he did not wish to be spanked again.",
    "“Come hither, Little One,” said the Crocodile, “for I am the Crocodile,” and he wept crocodile-tears to show it was quite true.",
    "Then the Elephant’s Child grew all breathless, and panted, and kneeled down on the bank and said, “You are the very person I have been looking for all these long days. Will you please tell me what you have for dinner?”",
    "“Come hither, Little One,” said the Crocodile, “and I’ll whisper.”",
    "Then the Elephant’s Child put his head down close to the Crocodile’s musky, tusky mouth, and the Crocodile caught him by his little nose, which up to that very week, day, hour, and minute, had been no bigger than a boot, though much more useful.",
    "“I think,” said the Crocodile, and he said it between his teeth, like this, “I think today I will begin with Elephant’s Child!”",
    "At this, O Best Beloved, the Elephant’s Child was much annoyed, and he said, speaking through his nose, like this, “Led go! You are hurtig be!”",
    "Then the Bi-Coloured-Python-Rock-Snake scuffled down from the bank and said, “My young friend, if you do not now, immediately and instantly, pull as hard as ever you can, it is my opinion that your acquaintance in the large-pattern leather ulster will jerk you into yonder limpid stream before you can say Jack Robinson.” And by that he meant the Crocodile.",
    "Then the Elephant’s Child sat back on his little haunches, and pulled, and pulled, and pulled, and his nose began to stretch. And the Crocodile floundered into the water, making it all creamy with great sweeps of his tail, and he pulled, and pulled, and pulled.",
    "And the Elephant’s Child’s nose kept on stretching; and the Elephant’s Child spread all his little four legs and pulled, and pulled, and pulled, and his nose kept on stretching; and the Crocodile threshed his tail like an oar, and he pulled, and pulled, and pulled, and at each pull the Elephant’s Child’s nose grew longer and longer, and it hurt him hijjus!",
    "Then the Elephant’s Child felt his legs slipping, and he said through his nose, which was now nearly five feet long, “This is too butch for be!”",
    "Then the Bi-Coloured-Python-Rock-Snake came down from the bank, and knotted himself in a double-clove-hitch round the Elephant’s Child’s hind legs, and said, “Rash and inexperienced traveller, we will now seriously devote ourselves to a little high tension, because if we do not, it is my impression that yonder self-propelling man-of-war with the armour-plated upper deck will permanently vitiate your future career.”",
    "So the snake pulled, and the Elephant’s Child pulled, and the Crocodile pulled; but the Elephant’s Child and the Bi-Coloured-Python-Rock-Snake pulled hardest; and at last the Crocodile let go of the Elephant’s Child’s nose with a plop that you could hear all up and down the Limpopo.",
    "Then the Elephant’s Child sat down most hard and sudden; but first he was careful to say “Thank you” to the Bi-Coloured-Python-Rock-Snake; and next he was kind to his poor pulled nose, and wrapped it all up in cool banana leaves, and hung it in the great grey-green, greasy Limpopo to cool.",
    "“What are you doing that for?” said the Bi-Coloured-Python-Rock-Snake.",
    "“’Scuse me,” said the Elephant’s Child, “but my nose is badly out of shape, and I am waiting for it to shrink.”",
    "“Then you will have to wait a long time,” said the Bi-Coloured-Python-Rock-Snake. “Some people do not know what is good for them.”",
    "The Elephant’s Child sat there for three days waiting for his nose to shrink. But it never grew any shorter, and, besides, it made him squint. For, O Best Beloved, you will see and understand that the Crocodile had pulled it out into a really truly trunk, same as all Elephants have today."
  ]
};

const ANNOTATE = [
  {
    skill: "Direct address",
    prompt: "Find the <em>name</em> the storyteller gives the person he is telling the story to.",
    target: ["O Best Beloved"],
    decoys: [{ phrase: "In the High and Far-Off Times", why: "That tells us when the story happens. Look for the words that speak to the listener." }],
    miss: "Look in the very first sentence of the story.",
    explain: "Kipling wrote these tales to be read aloud to a child. Calling the listener “Best Beloved” turns the reader into that child, sitting and listening."
  },
  {
    skill: "Repetition",
    prompt: "Find the <em>sentence that keeps coming back</em> after each spanking.",
    target: ["And still he was full of ’satiable curtiosity!"],
    decoys: [{ phrase: "he asked ever so many questions", why: "That explains what curtiosity means, but it does not repeat after each spanking." }],
    miss: "Look at the end of the paragraphs about his aunts and uncles.",
    explain: "The same line after every spanking makes the pattern funny, and it makes the Elephant’s Child brave: nothing they do stops him wanting to know."
  },
  {
    skill: "Sensory language",
    prompt: "Find the <em>three describing words</em> that always go with the river.",
    target: ["great grey-green, greasy Limpopo"],
    decoys: [{ phrase: "all set about with fever-trees", why: "That always comes with the river too, but it names the trees rather than describing the water." }],
    miss: "Look at what Kolokolo Bird tells him to go and find.",
    explain: "The sounds are sticky and heavy, and they repeat every time the river is named, so the place feels far away and slightly dangerous before we get there."
  },
  {
    skill: "Word choice",
    prompt: "Find the moment the Elephant’s Child’s speech <em>changes</em> because his nose is held.",
    target: ["Led go! You are hurtig be!"],
    decoys: [{ phrase: "You are the very person I have been looking for", why: "He speaks politely there, and his nose is still free. Look for the line where the words go wrong." }],
    miss: "Look just after the Crocodile says what he will begin with.",
    explain: "The spelling changes so that we hear him talking through a pinched nose. The joke lets us laugh in the middle of a frightening moment."
  }
];

const QUESTIONS = [
  
  {
    skill: "Point of view",
    q: "What does “you will see and understand” do at the end?",
    opts: [
      { t: "It lets the listener discover the point rather than be told", ok: true, why: "Right. He hands us the moment of understanding, which is more satisfying than simply announcing that the nose is now a trunk." },
      { t: "It warns the listener that the story has not quite finished yet", why: "It arrives as the explanation lands." },
      { t: "It shows the storyteller is unsure what happened next", why: "He knows exactly, and has been leading us here." },
      { t: "It tells the listener to go and look at real elephants", why: "The seeing he means is understanding the story." }
    ]
  },
  {
    skill: "Structure",
    q: "Why are there so many spankings at the start?",
    opts: [
      { t: "They build a pattern that the journey then breaks", ok: true, why: "Right. Question, spanking, question, spanking. When he finally leaves for the Limpopo, we already know nothing will stop him." },
      { t: "They show that the Elephant’s Child was a badly behaved child", why: "His only offence is asking questions, which the story treats as a virtue." },
      { t: "They explain why elephants have thick skin today", why: "The story explains the trunk, not the skin." },
      { t: "They fill space before the real story begins", why: "They set up the curiosity that drives everything after." }
    ]
  },
  {
    skill: "Vocabulary",
    q: "Kipling invents words like “’satiable” and “hijjus”. Why?",
    opts: [
      { t: "They sound like a child trying out grown-up words", ok: true, why: "Right. They are near-misses for insatiable and hideous, the way a young child would say them, so the tale sounds spoken rather than written." },
      { t: "They are old English words that nobody uses today", why: "They are inventions, not old words." },
      { t: "They are words from the language spoken in Africa", why: "They are English words, twisted." },
      { t: "They are printing mistakes left in by accident", why: "They repeat too neatly to be mistakes." }
    ]
  },
  {
    skill: "Message",
    q: "What does the story suggest about asking questions?",
    opts: [
      { t: "Curiosity gets you into trouble, and gets you somewhere", ok: true, why: "Right. The questions earn him spankings and nearly cost him his life, and they also win him the trunk that every elephant now has." },
      { t: "Children should stop asking questions that annoy adults", why: "The tale is on the child’s side throughout." },
      { t: "Adults always know the answers and should be believed", why: "The adults answer nothing. They only spank." },
      { t: "Crocodiles are the only creatures worth asking about", why: "He asks about feathers, spots, eyes and melons too." }
    ]
  },
  {
    skill: "Summary",
    q: "Which sentence best sums up what happens in this text?",
    opts: [
      { t: "An endlessly curious young elephant is spanked by his whole family for asking questions, and a crocodile's tug of war finally stretches his nose into the first trunk.", ok: true, why: "Right. It covers the whole shape of the text, not just one part of it." },
      { t: "The Elephant's Child is spanked in turn by each of his aunts and uncles for asking far too many questions. This is a smaller part of a much longer sequence of events overall.", why: "True, but too narrow. It only covers part of the text and misses the main point." },
      { t: "The Crocodile becomes the Elephant's Child's very best friend for life by the happy ending of the whole story. The wider text covers considerably more ground than this alone.", why: "Too broad. This adds a claim the text does not actually make or support." },
      { t: "The Bi-Coloured-Python-Rock-Snake speaks throughout the whole story in very long and rather grand sentences. This detail appears alongside several others as the story unfolds.", why: "A real detail, but a minor one. It is not what the text is mainly about." }
    ]
  }
];

const EVIDENCE = [
  {
    quote: "he filled all Africa with his ’satiable curtiosities",
    opts: [
      { t: "His questions are endless, and the story enjoys that", ok: true, why: "Right. Filling a whole continent with questions is a cheerful exaggeration, not a complaint." },
      { t: "He travelled across the whole of Africa as a baby", why: "His travels start later, when he goes to the Limpopo." },
      { t: "The other animals in Africa enjoyed answering his questions", why: "They spank him instead of answering." },
      { t: "He was the only young elephant living in Africa", why: "The line is about questions, not about numbers." }
    ]
  },
  {
    quote: "And they all spanked him once more for luck",
    opts: [
      { t: "The spankings have become a family habit, not a punishment", ok: true, why: "Right. There is nothing to punish as he leaves. “For luck” turns it into the way this family says goodbye." },
      { t: "The family is angry that he is leaving his home without them", why: "They spank him for luck, which is a send-off, not anger." },
      { t: "The family believes spanking will keep him safe", why: "Luck here is a joke about their habit." },
      { t: "The family has forgotten why they spank him", why: "The joke is that they need no reason at all." }
    ]
  },
  {
    quote: "Some people do not know what is good for them.",
    opts: [
      { t: "The snake can see the trunk is a gift before its owner can", ok: true, why: "Right. The Elephant’s Child is waiting for his nose to shrink. The snake already knows what it will be worth." },
      { t: "The snake is annoyed at having to help a complete stranger", why: "He helps willingly, and stays to advise him." },
      { t: "The snake thinks the Elephant’s Child should go home", why: "He says nothing about going home." },
      { t: "The snake is talking about the Crocodile, not the child", why: "The Crocodile has gone by this point." }
    ]
  }
];

const EXPLAIN = [
  {
    claim: "Kipling writes as though he were speaking to a child in the room.",
    quote: "O Best Beloved",
    opts: [
      { t: "The storyteller uses this phrase several times while he is telling the story about how the elephant got its trunk.", why: "Retelling. What does the phrase do to the reader?" },
      { t: "It names a listener, so the reader becomes the child being told the tale. The story feels spoken, and the storyteller feels fond of us.", ok: true, why: "Strong. It explains direct address and the warmth it creates." },
      { t: "The words show that the elephant in the story was loved very much by his aunts and his uncles at home.", why: "A misreading. It is the listener who is addressed." },
      { t: "Kipling uses direct address in this story, which is when a writer speaks to the reader instead of only describing what happens to characters.", why: "Naming the technique is a start. What is the effect?" }
    ]
  },
  {
    claim: "Repetition makes the opening funny.",
    quote: "And still he was full of ’satiable curtiosity!",
    opts: [
      { t: "The Elephant’s Child asks his aunts and uncles lots of questions and is spanked by each one of them in turn.", why: "Retelling. Why repeat the same line?" },
      { t: "The line returns after every spanking, so we start expecting it. The joke grows, and it shows nothing can put him off asking.", ok: true, why: "Strong. It explains the pattern and what it tells us about him." },
      { t: "Kipling repeats the sentence because young children forget what has happened earlier in a long story.", why: "A guess about readers, not about effect." },
      { t: "The same sentence appears more than once in the story, and writers repeat sentences when they want a reader to remember them clearly.", why: "An observation. What does the repetition achieve?" }
    ]
  },
  {
    claim: "The sound of the river description does half the work.",
    quote: "great grey-green, greasy Limpopo River, all set about with fever-trees",
    opts: [
      { t: "Kolokolo Bird tells the Elephant’s Child to go to this river, and the same words are used each time it is named.", why: "Retelling. What do the words sound like?" },
      { t: "Grey, green and greasy stick together in the mouth, and fever-trees sound unhealthy. The river feels far away and unsafe before we arrive.", ok: true, why: "Strong. It explains sound and word choice together." },
      { t: "The words tell us that the water of the Limpopo River is dirty because animals wash themselves in it every day.", why: "A literal reading. The words are chosen for effect." },
      { t: "This phrase is repeated several times in the story, each time the river is mentioned, from Kolokolo Bird’s advice to the end of the adventure.", why: "An observation. Why these words?" }
    ]
  },
  {
    claim: "The snake’s way of speaking is a joke in itself.",
    quote: "yonder self-propelling man-of-war with the armour-plated upper deck",
    opts: [
      { t: "The Bi-Coloured-Python-Rock-Snake is talking about the Crocodile while the two of them pull against each other.", why: "Retelling. Why say it in such a long way?" },
      { t: "He describes a crocodile as a warship, in the longest words available, while a child is being eaten. The calm makes the panic funnier.", ok: true, why: "Strong. It explains the comparison and the comic timing." },
      { t: "The snake is confused and believes that a real warship has come up the Limpopo River towards them.", why: "He knows exactly what he means." },
      { t: "The snake uses very long words in this speech, and they are much longer than the words the other animals in the story use when they speak.", why: "An observation. What is the effect of the long words here?" }
    ]
  }
];

const COLLECT = [
  {
    claim: "The Crocodile is only pretending to be friendly.",
    opts: [
      { t: "he wept crocodile-tears to show it was quite true", ok: true, why: "Right. Crocodile-tears are famously false, so weeping them proves the friendliness is an act." },
      { t: "Come hither, Little One", why: "This is the gentle-sounding invitation; the claim asks for the detail that shows the kindness is fake." },
      { t: "I will begin with Elephant’s Child", why: "This is his real, hungry intention, the threat itself, not the pretended kindness." },
      { t: "the Crocodile caught him by his little nose", why: "This is the moment he grabs the child, an action, not the pretending." }
    ]
  },
  {
    claim: "The snake speaks in grand, over-long language even in an emergency.",
    opts: [
      { t: "yonder self-propelling man-of-war with the armour-plated upper deck", ok: true, why: "Right. He calls a crocodile a warship in the longest words he can find, while a child is being pulled into the river." },
      { t: "knotted himself in a double-clove-hitch round the Elephant’s Child’s hind legs", why: "This is what the snake does, not the grand way he speaks." },
      { t: "Some people do not know what is good for them.", why: "This is the snake speaking, but plainly and simply, not in grand language." },
      { t: "scuffled down from the bank", why: "This is the snake's movement, not his speech." }
    ]
  },
  {
    claim: "The pinched-nose spelling lets us hear the danger, not just see it.",
    target: ["Led go! You are hurtig be!"],
    decoys: [{ phrase: "You are the very person I have been looking for", why: "Here he speaks politely, with his nose still free; the claim needs the words that go wrong once it is caught. Look for the pinched-nose line." }],
    miss: "Look just after the Crocodile says what he will begin with.",
    explain: "The spelling squashes his consonants ('Led go' for 'Let go'), so we hear him speak through a pinched nose. The joke and the danger arrive together."
  },
  {
    claim: "The Elephant’s Child stays polite even in the middle of danger.",
    target: ["first he was careful to say “Thank you” to the Bi-Coloured-Python-Rock-Snake"],
    decoys: [{ phrase: "he was kind to his poor pulled nose", why: "This is him caring for his sore nose, not thanking the snake who saved him. Look for his 'Thank you'." }],
    miss: "Look right after the Crocodile lets go.",
    explain: "Even sitting down 'most hard and sudden', he 'was careful to say Thank you'. His good manners in a crisis are part of the comedy and show his good nature."
  }
];
TEXTS.push({ id: "elephants-child", type: "Fiction", mode: "Creative", form: "Just So story", level: "CM2",
  hook: "A young elephant with too many questions goes to find out what the Crocodile has for dinner.",
  TEXT, ANNOTATE, QUESTIONS, EVIDENCE, EXPLAIN, COLLECT });
}
{
const TEXT = {
  title: "The Night the Lights Went Out",
  intro: "An original story for The Learning Deck.",
  paras: [
    "The storm arrived before dinner. First came the wind, pushing at the windows of the flat like someone who wanted to be let in. Then came the rain, so hard that the balcony turned into a drum.",
    "Amira was setting the table when the lights went out. The kitchen, the corridor, the television, the humming fridge: all of it stopped at once. For a second the flat was so quiet that she could hear the rain hitting the washing line.",
    "Her little brother, Danish, shouted from the living room. Not words, just a shout.",
    "“It is only the power,” said their mother, in the calm voice she used for cut knees and lost shoes. “Stay where you are.”",
    "Amira did not move. The flat she knew by heart had changed shape. The corridor, which took nine steps to cross, now seemed to have no end at all. The coat hooks made a row of shoulders against the wall. Somewhere in the dark, the tap dripped into the sink like a clock that had learned to count wrong.",
    "Then a light swung round the corner, small and yellow, and her mother came in holding a torch under her chin so that her face looked like a mask. Danish screamed, and then laughed so hard that he fell off the sofa.",
    "They found the candles in the drawer with the batteries and the birthday cards. Their mother stood them in saucers along the coffee table, and the room grew a new ceiling, low and gold, that moved whenever anybody breathed.",
    "Outside, the block had turned into a cliff of black windows. Across the car park, torches were moving behind other people’s curtains, small and warm, like fish in a dark aquarium. Uncle Rafiq on the ninth floor was playing his radio through the rain. Somebody’s baby was crying, and somebody’s father was laughing at something they could not hear.",
    "They ate dinner on the floor with the candles between them. The rice tasted exactly the same as always, which seemed strange to Amira, as though the food had not noticed the storm.",
    "“Tell the one about the ferry,” said Danish, with his mouth full.",
    "Their mother told it badly, on purpose, getting the ending wrong so that they had to correct her. The rain thinned. The wind stopped pushing. The candles made a small warm cave with three people inside it and nothing else.",
    "When the lights came back an hour later, everything jumped: the fridge, the television, the bright white kitchen, the corridor that was only nine steps after all. Danish cheered.",
    "Amira got up and blew the candles out, one by one, and was a little sorry to see them go."
  ]
};

const ANNOTATE = [
  {
    skill: "Mood",
    prompt: "Find the comparison that makes the <em>wind</em> sound like a person.",
    target: ["like someone who wanted to be let in"],
    decoys: [{ phrase: "the balcony turned into a drum", why: "A strong image for the rain, and a good spot, but it compares the balcony to an object, not to a person." }],
    miss: "Look at the first sentence about the wind.",
    explain: "A visitor who wants to come in is harmless or frightening, depending on who it is. The comparison makes the storm feel like something with a will of its own."
  },
  {
    skill: "Setting",
    prompt: "Find where the familiar <em>corridor changes</em> in the dark.",
    target: ["now seemed to have no end at all"],
    decoys: [{ phrase: "The flat she knew by heart had changed shape", why: "That is the general idea. Look for the detail about the corridor itself." }],
    miss: "Look for the sentence about nine steps.",
    explain: "Nothing about the corridor has actually changed. The dark removes the ends of things, so a short corridor becomes endless, which is how fear works on a place you know."
  },
  {
    skill: "Sensory language",
    prompt: "Find the <em>sound</em> that is compared to a clock.",
    target: ["like a clock that had learned to count wrong"],
    decoys: [{ phrase: "she could hear the rain hitting the washing line", why: "A good use of sound, but that one is not compared to anything." }],
    miss: "Look at the end of the paragraph about the dark flat.",
    explain: "A dripping tap is ordinary. Turning it into a clock that counts wrongly makes time itself feel unreliable, which keeps the unease going without adding anything frightening."
  },
  {
    skill: "Imagery",
    prompt: "Find the comparison used for the <em>torches in other flats</em>.",
    target: ["like fish in a dark aquarium"],
    decoys: [{ phrase: "the block had turned into a cliff of black windows", why: "Also a comparison, and a good one, but it describes the whole building rather than the moving lights." }],
    miss: "Look across the car park.",
    explain: "Fish in a tank are calm and quiet and watched from outside. The image turns the blacked-out block into something to look at rather than something to fear."
  }
];

const QUESTIONS = [
  {
    skill: "Mood",
    q: "How does the mood change during the story?",
    opts: [
      { t: "From uneasy to warm, once the candles are lit", ok: true, why: "Right. The corridor with no end gives way to a low gold ceiling and three people eating on the floor." },
      { t: "From calm to frightening, as the storm gets worse", why: "The storm thins out near the end, and nobody is frightened by then." },
      { t: "From excited to disappointed when the power returns", why: "Danish cheers when it returns, and Amira’s feeling is gentler than disappointment." },
      { t: "It stays frightened the whole way through the evening", why: "The laughter starts early, when the torch turns their mother into a mask." }
    ]
  },
  {
    skill: "Setting",
    q: "Why does the writer tell us the corridor takes nine steps?",
    opts: [
      { t: "So we can measure how much the dark changes it", ok: true, why: "Right. Nine steps is small and exact. The story gives us the number so that “no end at all” feels like a real change." },
      { t: "To show that the flat is bigger than most flats", why: "Nine steps is short. The number is there to be small." },
      { t: "To explain why Amira cannot reach the kitchen", why: "She stays still by choice, not because of distance." },
      { t: "To tell the reader how old the building is", why: "Nothing about the age of the block is given." }
    ]
  },
  {
    skill: "Atmosphere",
    q: "What effect do the sounds from other flats have?",
    opts: [
      { t: "They make the blackout feel shared rather than lonely", ok: true, why: "Right. A radio, a baby, somebody laughing. The dark is full of neighbours, so the flat stops feeling cut off." },
      { t: "They make the block sound dangerous after dark", why: "The sounds are ordinary and homely, not threatening." },
      { t: "They show that the family is the only one without power", why: "Every window in the block is black." },
      { t: "They prove that the storm is about to get worse", why: "The rain is thinning by then." }
    ]
  },
  
  {
    skill: "Point of view",
    q: "Whose eyes do we see the evening through?",
    opts: [
      { t: "Amira’s, though she does not tell the story herself", ok: true, why: "Right. We get her thoughts about the corridor and the rice, but she is always called “she”." },
      { t: "Danish’s, because he reacts the most loudly", why: "We see him from outside and never enter his thoughts." },
      { t: "The mother’s, since she stays calm and in charge", why: "Her calm is described from outside, in the voice she uses." },
      { t: "A neighbour’s, watching the block from across the way", why: "The story is inside the flat the whole time." }
    ]
  },
  {
    skill: "Summary",
    q: "Which sentence best sums up what happens in this text?",
    opts: [
      { t: "During a storm-caused blackout, an anxious flat slowly becomes a warm, candlelit shelter for a family, and Amira is a little sorry when the lights return.", ok: true, why: "Right. It covers the whole shape of the text, not just one part of it." },
      { t: "A sudden storm with heavy wind and rain knocks out all of the electricity in Amira's flat early one evening. Other parts of the story focus on different details. The rest of the text develops in a different direction.", why: "True, but too narrow. It only covers part of the text and misses the main point." },
      { t: "The whole family loses power for several days in a row and has to go and stay with a neighbour until it returns. The story continues well beyond this particular moment.", why: "Too broad. This adds a claim the text does not actually make or support." },
      { t: "Amira's mother tells the story about the ferry badly on purpose, getting the ending wrong so the children can correct her. It is mentioned only briefly, and is not the main focus.", why: "A real detail, but a minor one. It is not what the text is mainly about." }
    ]
  }
];

const EVIDENCE = [
  {
    quote: "The coat hooks made a row of shoulders against the wall",
    opts: [
      { t: "The dark turns ordinary objects into figures", ok: true, why: "Right. Hooks become shoulders, which is how a familiar hallway starts to feel occupied." },
      { t: "There are people standing in the corridor of the flat", why: "They are coat hooks. The image is what the dark makes of them." },
      { t: "The family keeps too many coats in the flat", why: "The number of coats is not the point of the image." },
      { t: "Amira cannot remember where the hooks are", why: "She can see their shape, which is what unsettles her." }
    ]
  },
  {
    quote: "as though the food had not noticed the storm",
    opts: [
      { t: "Ordinary things carry on, which is part of the comfort", ok: true, why: "Right. The rice is unchanged while everything else is strange, and that steadiness is reassuring." },
      { t: "The family cooked the rice before the storm began", why: "True, but the sentence is about how it tastes, not when it was cooked." },
      { t: "Amira has lost her appetite because she is afraid", why: "She notices the taste, so she is eating." },
      { t: "The storm was not really as bad as it had seemed at first", why: "The storm is real. The rice simply has nothing to do with it." }
    ]
  },
  {
    quote: "everything jumped: the fridge, the television, the bright white kitchen",
    opts: [
      { t: "The return of the power is sudden and unwelcoming", ok: true, why: "Right. “Jumped” and “bright white” are sharp after an hour of low gold light." },
      { t: "The appliances were damaged by the power cut", why: "Nothing is broken. They simply come back on." },
      { t: "The family is relieved that the evening is over", why: "Danish cheers, but Amira is sorry, so it is not that simple." },
      { t: "The storm has finally reached the inside of the flat", why: "The storm has already passed by this point." }
    ]
  }
];

const EXPLAIN = [
  {
    claim: "The opening makes the storm feel deliberate.",
    quote: "pushing at the windows of the flat like someone who wanted to be let in",
    opts: [
      { t: "The wind blows very hard against the windows of the family’s flat before the rain starts falling on the balcony.", why: "Retelling. What does the comparison add?" },
      { t: "Wind cannot want anything. Comparing it to a visitor gives the storm a purpose, so the evening starts with something trying to get in.", ok: true, why: "Strong. It explains the comparison and the unease it creates." },
      { t: "Somebody was outside the flat during the storm and was knocking on the window to be let inside quickly.", why: "A literal misreading. It is the wind." },
      { t: "The writer uses a comparison in the first paragraph here, and comparisons are used by writers to help a reader picture something clearly.", why: "An observation. Say what it does to the mood." }
    ]
  },
  {
    claim: "The dark changes a place Amira knows well.",
    quote: "The corridor, which took nine steps to cross, now seemed to have no end at all",
    opts: [
      { t: "Amira stands still in the flat because the lights have gone out and she cannot see down the corridor towards the kitchen.", why: "Retelling. Why give the number of steps?" },
      { t: "The exact number makes the corridor small, then “no end at all” stretches it. Fear changes the size of a place without changing the place.", ok: true, why: "Strong. It uses both halves of the sentence." },
      { t: "The corridor of the flat is actually a great deal longer than nine steps, and Amira had counted the steps wrongly when she measured it before.", why: "A literal misreading. Nine steps is confirmed at the end." },
      { t: "The writer gives a number in this sentence about the corridor, and numbers make a description feel exact rather than vague to the reader.", why: "An observation. What is the number for?" }
    ]
  },
  {
    claim: "Candlelight turns the room into a shelter.",
    quote: "the room grew a new ceiling, low and gold, that moved whenever anybody breathed",
    opts: [
      { t: "The mother puts the lit candles into saucers and stands them in a row along the top of the coffee table.", why: "Retelling. What do the candles do to the room?" },
      { t: "The dark becomes a lower ceiling, so the room shrinks to the size of the light. Small and gold and moving is a shelter, not a threat.", ok: true, why: "Strong. It explains the image and the change in mood." },
      { t: "The ceiling of the living room is painted gold and it moves slightly whenever there is a draught in the flat.", why: "A literal reading of an image." },
      { t: "The writer describes the candlelight in the living room here, telling the reader what the room looked like once the candles had been lit.", why: "An observation. What does the description achieve?" }
    ]
  },
  {
    claim: "The ending is quiet rather than happy or sad.",
    quote: "was a little sorry to see them go",
    opts: [
      { t: "Amira stands up at the end of the evening and blows out all of the candles on the coffee table one after another.", why: "Retelling. What do the words “a little” do?" },
      { t: "“A little” keeps the feeling small and honest. She is glad of the light and sorry about the cave, and the story lets both be true.", ok: true, why: "Strong. It reads the size of the feeling, not just its direction." },
      { t: "Amira is upset that the electricity has come back on, because she had wanted the blackout to last all night.", why: "Too strong. “A little sorry” is not upset." },
      { t: "The story ends with Amira blowing out the candles one by one, which is the last thing that anybody does in the whole of the story.", why: "An observation. What is the effect of ending there?" }
    ]
  }
];

const COLLECT = [
  {
    claim: "The moment the candles are lit, the frightening room is transformed into something cosy.",
    opts: [
      { t: "the room grew a new ceiling, low and gold", ok: true, why: "Right. The dark becomes a lower, golden ceiling, so the room shrinks to the size of the light and feels warm." },
      { t: "The candles made a small warm cave with three people inside it", why: "This is a later cosy image, not the exact moment the candlelight changes the room." },
      { t: "They found the candles in the drawer with the batteries", why: "This is where the candles came from, not what they do to the room." },
      { t: "the corridor that was only nine steps after all", why: "This describes the power returning, not the candlelight." }
    ]
  },
  {
    claim: "The mother treats the blackout as a small, everyday problem.",
    opts: [
      { t: "the calm voice she used for cut knees and lost shoes", ok: true, why: "Right. Using the same voice as for scraped knees puts the power cut among small, fixable things." },
      { t: "Danish screamed, and then laughed so hard that he fell off the sofa", why: "This is the child’s reaction, not the mother’s calm attitude." },
      { t: "the block had turned into a cliff of black windows", why: "This is the eerie view outside, not the mother staying calm." },
      { t: "Somebody’s baby was crying", why: "This is a neighbour’s sound, not the mother’s response to the blackout." }
    ]
  },
  {
    claim: "The dark turns ordinary objects into figures.",
    target: ["The coat hooks made a row of shoulders against the wall"],
    decoys: [{ phrase: "the balcony turned into a drum", why: "This likens the balcony to an object, not a person or figure. Look for the coat hooks becoming shoulders." }],
    miss: "Look for the coat hooks in the dark hallway.",
    explain: "Coat hooks become “a row of shoulders”, so a familiar hallway starts to feel occupied. In the dark, everyday things take on the shapes of people."
  },
  {
    claim: "Amira is quietly reluctant to let the special evening end.",
    target: ["Amira got up and blew the candles out, one by one"],
    decoys: [{ phrase: "Danish cheered", why: "Danish is simply glad the power is back; the claim is about Amira’s gentler, reluctant feeling. Look for what she does with the candles." }],
    miss: "Look at the very end, when the lights come back.",
    explain: "While Danish “cheered”, Amira “blew the candles out, one by one” and was “a little sorry to see them go”. She is reluctant to lose the cosy cave the blackout made."
  }
];
TEXTS.push({ id: "lights-went-out", type: "Fiction", mode: "Creative", form: "Short story", level: "CM2",
  hook: "A storm, a blackout, and a flat that changes shape when the lights go off.",
  TEXT, ANNOTATE, QUESTIONS, EVIDENCE, EXPLAIN, COLLECT });
}
{
const TEXT = {
  title: "Low Tide",
  intro: "An original story for The Learning Deck.",
  paras: [
    "The tide goes out a long way here, and it goes out fast. By six o’clock the sea had folded itself back almost to the horizon, and what it left behind was not sand but mud: grey, shining, and stitched all over with the small holes of crabs.",
    "Farid had been told not to walk on it. He walked on it anyway, because the sandbar out there looked solid, and because the light was going, and because at thirteen a warning can sound a lot like a dare.",
    "The first steps were easy. The mud held him the way a new mattress holds you, pushing back a little. Behind him, the shore lights came on one by one, orange and small. Ahead, the sandbar lay like the back of a whale, pale against the darkening water.",
    "He had crossed half of it when the ground began to change. The mud grew softer, and colder, and his shoes came up with a sound like a kiss. A crab stopped in front of him, raised one claw, and vanished sideways into a hole. The wind, which had been at his back, now came off the sea and smelled of engine oil and salt.",
    "He turned to look at the shore. It had moved. That was impossible, of course, but that was what it looked like: the orange lights were further off than they should have been, and between him and them lay a long grey field with the sky lying flat on it.",
    "Then he heard it. Not a sound, exactly. A change in the sound. The mudflat, which had been ticking and popping all around him with a thousand small mouths, had gone quiet.",
    "The water was coming back.",
    "It came in low and quick, filling the crab holes first, running along the channels it had left behind like a hand finding its own glove. There was no wave. That was the worst part. The sea did not rush at him. It simply arrived, in the flat calm way that water has, and rose.",
    "Farid ran. The mud held his shoes, and then it took one of them. He ran with one shoe, and the cold came up through his sock, and the shore lights shook in front of him the way lights do when you are looking at them through a run.",
    "Ten metres out, the water was at his ankles. Five metres out, it was at his shins. When his hands finally hit the concrete of the seawall he hauled himself up on to it and lay on his back, breathing, with the whole black sky above him and the sea below going about its business, unhurried, indifferent, exactly as it had done twice a day for longer than anyone had been alive to watch it.",
    "His mother asked him, later, why he had come home with one shoe.",
    "He told her that it had come off in the mud, which was true, and said nothing about the rest."
  ]
};

const ANNOTATE = [
  {
    skill: "Setting",
    prompt: "Find the description of what the sea <em>leaves behind</em>.",
    target: ["grey, shining, and stitched all over with the small holes of crabs"],
    decoys: [{ phrase: "the sea had folded itself back almost to the horizon", why: "That describes the sea going out. Look for what is left on the ground once it has gone." }],
    miss: "Look at the end of the first paragraph.",
    explain: "Three details in a row, and the last one is alive. A surface full of holes is an unsteady place to walk, so the setting is already a warning."
  },
  {
    skill: "Mood",
    prompt: "Find the comparison that makes the <em>sandbar</em> look like an animal.",
    target: ["lay like the back of a whale"],
    decoys: [{ phrase: "the shore lights came on one by one", why: "A good detail for the failing light, but the shore is behind him and no animal is mentioned." }],
    miss: "Look at the end of the paragraph about the first steps.",
    explain: "A whale is huge, alive and mostly hidden under water. The comparison makes his target look solid and safe while quietly reminding us what is underneath."
  },
  {
    skill: "Suspense",
    prompt: "Find the moment the mudflat <em>goes silent</em>.",
    target: ["had gone quiet"],
    decoys: [{ phrase: "ticking and popping all around him with a thousand small mouths", why: "That is the sound before the change. Look for what happens to it." }],
    miss: "Look just before the short one-line paragraph.",
    explain: "Silence is the signal, and the writer makes us notice it before Farid understands it. For one moment the reader knows more than the character does."
  },
  {
    skill: "Atmosphere",
    prompt: "Find the comparison used for the <em>returning water</em>.",
    target: ["like a hand finding its own glove"],
    decoys: [{ phrase: "filling the crab holes first", why: "True, and frightening, but that is a detail rather than a comparison." }],
    miss: "Look after the line about the water coming back.",
    explain: "A hand into a glove is easy, familiar, exact. The sea is not attacking, it is returning to a shape it already knows, which is far worse for anybody standing in it."
  },
  {
    skill: "Ending image",
    prompt: "Find the <em>three words</em> that describe the sea at the seawall.",
    target: ["unhurried, indifferent"],
    decoys: [{ phrase: "the whole black sky above him", why: "Part of the same sentence, and a strong image, but it describes the sky rather than the sea." }],
    miss: "Look near the end of the paragraph at the seawall.",
    explain: "The sea is given no anger and no intention. Indifference is the point: the danger was never personal, and that is what makes it frightening."
  }
];

const QUESTIONS = [
  {
    skill: "Mood",
    q: "How does the mood build through the story?",
    opts: [
      { t: "Slowly, through small changes in the ground and the air", ok: true, why: "Right. Softer mud, colder mud, a turned wind, a crab that vanishes. Nothing dramatic happens for a long time." },
      { t: "Suddenly, when a large wave appears out at the sandbar", why: "The story says clearly that there was no wave." },
      { t: "Through Farid’s thoughts about how frightened he feels", why: "He barely reflects. The tension is in the place, not in his commentary." },
      { t: "Through a series of warnings that are shouted from the shore", why: "He is alone. The only warning came before he set out." }
    ]
  },
  {
    skill: "Setting",
    q: "How does the setting work against Farid?",
    opts: [
      { t: "The ground he walks on is also the thing that traps him", ok: true, why: "Right. The mud holds him up at first, then holds him back, then takes a shoe at the worst moment." },
      { t: "The rocks along the shore are too sharp for him to climb over", why: "He climbs a concrete seawall, and it is not described as sharp." },
      { t: "The weather turns stormy while he is out on the mud", why: "There is no storm. The danger is the tide." },
      { t: "The darkness makes it impossible for him to see at all", why: "He can see the shore lights and the water arriving." }
    ]
  },
  {
    skill: "Structure",
    q: "Why is “The water was coming back” its own paragraph?",
    opts: [
      { t: "It lands as the moment everything before it was leading to", ok: true, why: "Right. A short line surrounded by space reads slowly, which is how the story marks the turn." },
      { t: "It shows that Farid shouted the words out loud", why: "Nothing indicates speech. The line is the narrator’s." },
      { t: "It separates the two halves of a conversation on the shore", why: "There is no conversation on the mudflat." },
      { t: "It marks the point in the story where a new day begins", why: "The whole story happens in one evening." }
    ]
  },
  {
    skill: "Tone",
    q: "What is the effect of “That was the worst part”?",
    opts: [
      { t: "The calm way it arrives is more frightening than a wave", ok: true, why: "Right. We expect danger to look dangerous. The narrator points out that this one does not, which is what unsettles us." },
      { t: "It tells us that Farid has given up trying to escape", why: "He runs immediately afterwards." },
      { t: "It shows that the narrator is exaggerating things for effect", why: "The line is plain and is backed up by what follows." },
      { t: "It means the water is moving faster than he can run", why: "He reaches the wall, so he is fast enough." }
    ]
  },
  
  {
    skill: "Ending",
    q: "Why does Farid say nothing about the rest?",
    opts: [
      { t: "Telling it would mean admitting what he ignored", ok: true, why: "Right. The shoe has an innocent explanation. The tide does not, and he chooses the half that costs him nothing." },
      { t: "He has already forgotten most of what happened", why: "The account we have just read is full of detail." },
      { t: "His mother would not have believed the story", why: "The story never suggests she would doubt him." },
      { t: "He is protecting a friend who was out there too", why: "There is nobody else on the mud." }
    ]
  },
  {
    skill: "Summary",
    q: "Which sentence best sums up what happens in this text?",
    opts: [
      { t: "Ignoring a warning, a boy walks out onto a mudflat at low tide and has to run for his life when the sea calmly returns, later telling his mother only half the truth.", ok: true, why: "Right. It covers the whole shape of the text, not just one part of it." },
      { t: "Farid watches a crab stop right in front of him, raise one claw, and then vanish sideways down into a hole. This detail appears alongside several others as the story unfolds.", why: "True, but too narrow. It only covers part of the text and misses the main point." },
      { t: "Farid is spotted and rescued by a passing fishing boat after being swept far out to sea by the returning tide. The full story includes more than this single moment suggests.", why: "Too broad. This adds a claim the text does not actually make or support." },
      { t: "Farid ends up losing one of his shoes to the mud while he is running back as fast as he can toward the shore. The wider text covers considerably more ground than this alone.", why: "A real detail, but a minor one. It is not what the text is mainly about." }
    ]
  }
];

const EVIDENCE = [
  {
    quote: "his shoes came up with a sound like a kiss",
    opts: [
      { t: "The mud is beginning to hold on to him", ok: true, why: "Right. A sucking sound means the ground is gripping, and it is the first sign that the surface has changed." },
      { t: "Farid is walking more quietly than before", why: "A new sound has appeared, so he is louder, not quieter." },
      { t: "The water has already reached his feet", why: "The tide arrives later. This is still wet mud." },
      { t: "The sandbar is closer than he had expected", why: "The quote is about the ground under him." }
    ]
  },
  {
    quote: "the orange lights were further off than they should have been",
    opts: [
      { t: "He has gone much further out than he realised", ok: true, why: "Right. The shore has not moved, so the distance is his own doing, and he only sees it when he turns." },
      { t: "Some of the shore lights have been switched off", why: "They are further away, not fewer." },
      { t: "The tide has carried him out from the beach", why: "The water has not arrived yet. He walked." },
      { t: "Fog has come in and blurred the lights", why: "No fog is mentioned, and he sees them clearly." }
    ]
  },
  {
    quote: "There was no wave.",
    opts: [
      { t: "The danger does not look like danger", ok: true, why: "Right. Three flat words remove the thing we were braced for, and the flatness is the threat." },
      { t: "The sea is calm, so Farid is safe for now", why: "The water is already filling the crab holes around him." },
      { t: "The tide has not started to come in yet", why: "It is coming in as this is said." },
      { t: "Farid is too far out to see the waves breaking", why: "The sentence states a fact about the water, not his view." }
    ]
  },
  {
    quote: "exactly as it had done twice a day for longer than anyone had been alive to watch it",
    opts: [
      { t: "The tide was never about him at all", ok: true, why: "Right. The sea has done this for ever, so his near miss counts for nothing in the sea’s account of the evening." },
      { t: "The sea has become more dangerous in recent years", why: "The line stresses how unchanged it is." },
      { t: "People have been drowning here for many years", why: "No other person is mentioned at any point." },
      { t: "Farid has watched the tide here many times before", why: "The sentence is about the sea, not his habits." }
    ]
  }
];

const EXPLAIN = [
  {
    claim: "The setting is dangerous before anything happens.",
    quote: "grey, shining, and stitched all over with the small holes of crabs",
    opts: [
      { t: "The tide has gone out a very long way at this beach, and what it has left behind it is a wide area of soft grey mud instead of clean sand.", why: "Retelling. What do the three details suggest?" },
      { t: "Grey and shining is wet and soft, and a surface full of holes is not solid. The ground is described as untrustworthy from the first paragraph.", ok: true, why: "Strong. It reads the description as a warning rather than scenery." },
      { t: "The crabs that live down in the mud have made many thousands of small holes in it, and they hide inside these holes whenever somebody walks past them.", why: "True of crabs, but it explains the wildlife rather than the effect." },
      { t: "The writer describes the mudflat at the start of the story, telling the reader what the ground looked like once the sea had gone out.", why: "An observation. What does the description do?" }
    ]
  },
  {
    claim: "Silence is used to raise the tension.",
    quote: "had gone quiet",
    opts: [
      { t: "The mudflat had been making a ticking and popping noise around Farid, and then that noise stopped while he was standing on it.", why: "Retelling. Why is the silence frightening?" },
      { t: "We have been taught what the mud sounds like, so its absence reads as an alarm. The reader understands it a beat before Farid does.", ok: true, why: "Strong. It explains why silence works and who knows what when." },
      { t: "The crabs on the mudflat have gone into their holes, and this is why the sound of the mud has completely stopped.", why: "A guess at the cause. The effect is what matters." },
      { t: "The writer describes a change in the sound here, and writers often use sound in a story to help a reader imagine being in the place.", why: "An observation. What does the change signal?" }
    ]
  },
  {
    claim: "The water is described as ordinary, and that is the threat.",
    quote: "like a hand finding its own glove",
    opts: [
      { t: "The sea comes back in across the mudflat and fills the channels and the holes that it had left behind when it went out.", why: "Retelling. Why compare it to a hand and a glove?" },
      { t: "A hand slides into a glove easily, because the shape is already there. The sea is not attacking, it is returning, and it cannot be talked out of it.", ok: true, why: "Strong. It explains the comparison and why calm is worse than violence here." },
      { t: "The water is shaped like a hand as it moves along the channels in the mud towards the place where Farid is standing.", why: "A literal reading of the comparison." },
      { t: "The writer uses a comparison to describe the water coming back in, joining two different things together so that the reader can picture one of them.", why: "An observation. What does it suggest?" }
    ]
  },
  {
    claim: "The ending refuses to make the sea a villain.",
    quote: "unhurried, indifferent",
    opts: [
      { t: "Farid climbs up on to the seawall at the end and lies on his back while the sea comes in below him in the dark.", why: "Retelling. Why those two words about the sea?" },
      { t: "Neither word gives the sea a motive. It was not hunting him, which makes his escape luck rather than victory.", ok: true, why: "Strong. It reads what the words withhold." },
      { t: "The sea is angry with Farid for walking out on to the mudflat when he had been told that he should not.", why: "The opposite of what the words say." },
      { t: "The writer describes the sea using two adjectives here.", why: "An observation. What is the effect of those two?" }
    ]
  },
  {
    claim: "The last line tells us something about Farid.",
    quote: "said nothing about the rest",
    opts: [
      { t: "Farid explains to his mother once he is back at home that his shoe had come off while he was walking about out on the mud that evening.", why: "Retelling. What is he choosing to leave out?" },
      { t: "He gives a true answer that hides everything. Choosing the harmless half is easier than admitting he walked out after being told not to.", ok: true, why: "Strong. It explains the choice and what it reveals." },
      { t: "Farid cannot describe what happened to him out on the mudflat that evening, because he is still much too frightened to talk to anybody about it.", why: "Nothing suggests fear of speaking. It is a choice." },
      { t: "The story ends with Farid talking to his mother at home, which is the only conversation that happens anywhere in the whole story.", why: "An observation. Why end on what he does not say?" }
    ]
  }
];
TEXTS.push({ id: "low-tide", type: "Fiction", mode: "Creative", form: "Short story", level: "6ème",
  hook: "A boy walks out on the mudflat at dusk, and the sea comes back without a wave.",
  TEXT, ANNOTATE, QUESTIONS, EVIDENCE, EXPLAIN });
}
{
const TEXT = {
  title: "Nine Floors Up",
  intro: "An original story for The Learning Deck.",
  paras: [
    "The flat sounded different with nothing in it. Mei noticed it the moment she stepped inside: her own footsteps came back to her half a second late, as though the rooms had grown since yesterday.",
    "The movers had taken everything except the curtains, and the curtains had been left because they belonged to the landlord. They hung heavy and yellow at the window, still holding the shape of a room that no longer existed.",
    "She had been sent up for a last check. Under the sink, behind the doors, on top of the cupboards: the places you forget. The kitchen tap had a drip that her father had promised for six years to fix, and it was dripping still, marking time for an empty flat.",
    "In the living room the walls were a museum of where they had lived. A pale rectangle where the bookcase had stood. Four dents in the floor from the legs of the table. A grey smudge beside the light switch, shoulder-height, from eleven years of hands. Somebody had drawn a pencil line on the doorframe with a date beside it, and then another, and then a third, and then stopped.",
    "Outside, the sky had been threatening rain all afternoon and had not delivered. The heat sat on the block the way it always did in the last week of the holidays, heavy as a hand on the back of the neck. Nine floors down, the void deck was empty. The mynahs were arguing in the rain tree. Somebody was learning the same four bars on a piano, over and over, getting them wrong in the same place every time.",
    "Mei found one thing the movers had missed: a hairclip, behind the radiator pipe, the plastic yellowed and the flower on it broken off. It had been hers when she was six. She turned it over twice, then put it in her pocket, and could not have explained why.",
    "She stood at the window for longer than the job needed. From the ninth floor you could see the whole estate, the roofs of the market, the school field with its two goalposts leaning in opposite directions, and, past all that, a line of sea so thin that it might have been a fold in the air.",
    "Her mother called up the stairwell. It was time.",
    "On the landing, Mei stopped and looked back through the open door. The curtains moved, once, though the window was shut.",
    "Then the rain arrived, all at once, the way it does here: a hiss on the roofs, a smell rising off the concrete, the mynahs going silent and the piano stopping at last. She went down the nine flights two at a time, and by the time she reached the bottom the void deck was full of people standing at the edge of the downpour, waiting it out together, laughing at the ones who were running.",
    "The van was waiting with its engine on. Her father was holding the door for her, and he was wet, and he was grinning.",
    "Mei got in. The estate slid backwards behind the rain on the window, blurred and grey and gone, and her hand, in her pocket, was closed around a broken hairclip."
  ]
};

const ANNOTATE = [
  {
    skill: "Atmosphere",
    prompt: "Find the detail about <em>sound</em> that shows the flat is empty.",
    target: ["her own footsteps came back to her half a second late"],
    decoys: [{ phrase: "The flat sounded different with nothing in it", why: "That states the idea. Look for the exact detail that proves it." }],
    miss: "Look at the first paragraph.",
    explain: "An echo is furniture missing, turned into sound. It also suggests that the flat is answering her, half a beat behind, which is unsettling in a place she knows."
  },
  {
    skill: "Setting",
    prompt: "Find the mark left by <em>eleven years of hands</em>.",
    target: ["A grey smudge beside the light switch, shoulder-height"],
    decoys: [{ phrase: "A pale rectangle where the bookcase had stood", why: "Another mark left behind, and a good one, but it was made by furniture rather than by people." }],
    miss: "Look in the paragraph about the living room walls.",
    explain: "The smudge is the family itself, printed on the wall by repetition. It is the only mark in the room made by living rather than by objects."
  },
  {
    skill: "Mood",
    prompt: "Find the comparison that describes the <em>heat</em>.",
    target: ["heavy as a hand on the back of the neck"],
    decoys: [{ phrase: "the sky had been threatening rain all afternoon and had not delivered", why: "That builds the same pressure, but it is not a comparison." }],
    miss: "Look in the paragraph about the view outside.",
    explain: "A hand on the neck is close, physical and slightly threatening. The weather presses on the scene in the same way the move is pressing on Mei."
  },
  {
    skill: "Imagery / pathetic fallacy",
    prompt: "Find the moment the <em>rain finally arrives</em>.",
    target: ["a hiss on the roofs, a smell rising off the concrete"],
    decoys: [{ phrase: "The curtains moved, once, though the window was shut", why: "A strange, quiet moment just before, but it is about the flat rather than the weather." }],
    miss: "Look just after she is called down.",
    explain: "The afternoon has been holding its breath for the whole story. The rain breaks the pressure at the exact moment she leaves, so the weather releases what Mei cannot say."
  },
  {
    skill: "Ending image",
    prompt: "Find what Mei is <em>holding</em> in the last line.",
    target: ["closed around a broken hairclip"],
    decoys: [{ phrase: "The estate slid backwards behind the rain on the window", why: "The last picture of the place, but the question asks about her hand." }],
    miss: "Look at the very end of the story.",
    explain: "A broken hairclip is worth nothing and she cannot explain why she kept it. Ending on it lets an object carry the feeling the story never states."
  }
];

const QUESTIONS = [
  {
    skill: "Mood",
    q: "What mood do the first four paragraphs create?",
    opts: [
      { t: "Still and hollow, with the flat oddly awake", ok: true, why: "Right. Late echoes, curtains holding a shape, a tap marking time. Empty, but not quite lifeless." },
      { t: "Frightening, as though the flat were haunted", why: "Nothing threatens her. The strangeness stays gentle." },
      { t: "Busy and rushed, because the movers are working", why: "The movers have already gone. She is alone." },
      { t: "Cheerful, because the family is off somewhere new", why: "The cheer only arrives with the rain at the end." }
    ]
  },
  {
    skill: "Setting",
    q: "Why does the writer list the marks on the walls and floor?",
    opts: [
      { t: "They are what eleven years of living leaves behind", ok: true, why: "Right. A rectangle, four dents, a smudge, three pencil lines. The family is gone but the room still records them." },
      { t: "They show the family did not look after the flat", why: "The marks are ordinary wear, and the story treats them tenderly." },
      { t: "They explain why the family had to move out", why: "No reason for the move is ever given." },
      { t: "They prove the movers were careless with the furniture", why: "The dents come from years of a table standing there." }
    ]
  },
  {
    skill: "Tone",
    q: "How does the tone change when the rain arrives?",
    opts: [
      { t: "It opens out, from private stillness to shared noise", ok: true, why: "Right. One girl in a silent flat becomes a void deck full of neighbours laughing at the runners." },
      { t: "It darkens, because the storm arrives and ruins the move", why: "The rain is a relief, and her father is grinning in it." },
      { t: "It stays exactly as flat and quiet as before", why: "Hiss, smell, silence from the mynahs. The scene fills up." },
      { t: "It becomes angry, because the family is leaving", why: "Nobody is angry at any point in the story." }
    ]
  },
  
  {
    skill: "Suspense",
    q: "What is the effect of the curtains moving?",
    opts: [
      { t: "A moment of strangeness that the story leaves alone", ok: true, why: "Right. The window is shut, and nobody explains it. The story lets the flat have one last word and moves on." },
      { t: "It proves that somebody else is inside the flat", why: "The flat is empty, and no one appears." },
      { t: "It shows that the window of the flat has been left open", why: "The line says clearly that it was shut." },
      { t: "It warns the reader that the ending will be sad", why: "The ending that follows is warm and busy." }
    ]
  },
  {
    skill: "Structure",
    q: "Why does the story end inside the van?",
    opts: [
      { t: "It puts the place behind glass, already turning into memory", ok: true, why: "Right. The estate slides backwards, blurred by rain, while the only solid thing left is in her pocket." },
      { t: "It shows that the whole family is glad to be leaving", why: "Gladness belongs to the rain scene, not to the last line." },
      { t: "It proves that Mei has forgotten the old flat already", why: "Her hand is closed around the hairclip." },
      { t: "It tells the reader where the family will be moving to next", why: "The destination is never mentioned." }
    ]
  },
  {
    skill: "Summary",
    q: "Which sentence best sums up what happens in this text?",
    opts: [
      { t: "As her family prepares to move out, Mei does one last check of their emptied flat, noticing traces of their years there before leaving with a small keepsake.", ok: true, why: "Right. It covers the whole shape of the text, not just one part of it." },
      { t: "Mei finds a small hairclip that used to belong to her as a child hidden behind the radiator pipe in her room. The rest of the text develops in a different direction.", why: "True, but too narrow. It only covers part of the text and misses the main point." },
      { t: "Mei decides at the last moment that she does not want to move at all and refuses to get into the waiting van. The story continues well beyond this particular moment.", why: "Too broad. This adds a claim the text does not actually make or support." },
      { t: "The mynahs arguing in the rain tree outside the block finally fall silent once the heavy rain starts to fall. It is mentioned only briefly, and is not the main focus.", why: "A real detail, but a minor one. It is not what the text is mainly about." }
    ]
  }
];

const EVIDENCE = [
  {
    quote: "still holding the shape of a room that no longer existed",
    opts: [
      { t: "The flat keeps the form of a home that has gone", ok: true, why: "Right. The curtains hang as they always did, around a room that is now only walls." },
      { t: "The curtains are too big for the living room window", why: "Their size is not the point. Their sameness is." },
      { t: "The family will come back for the curtains later", why: "They belong to the landlord and are staying." },
      { t: "The room has been changed by the new owners", why: "Nobody new has arrived yet." }
    ]
  },
  {
    quote: "a drip that her father had promised for six years to fix",
    opts: [
      { t: "Ordinary family life is written into the flat itself", ok: true, why: "Right. Six years of a small unkept promise is a whole household habit in one detail." },
      { t: "Her father is careless and unreliable around the home", why: "The tone is fond. It is a joke the family has lived with." },
      { t: "The flat was in poor condition when they moved in", why: "The drip is theirs, and it is dated from inside their years there." },
      { t: "The family could not afford to repair anything", why: "Money is never mentioned in the story." }
    ]
  },
  {
    quote: "and then another, and then a third, and then stopped",
    opts: [
      { t: "The record of growing up simply breaks off", ok: true, why: "Right. Three marks, then nothing. The rhythm of the sentence stops in the same way the habit did." },
      { t: "The family moved away before Mei had grown up", why: "Eleven years of marks on the switch say otherwise." },
      { t: "Somebody rubbed the rest of the lines off the frame", why: "Nothing suggests they were removed." },
      { t: "The pencil lines were drawn by the family before them", why: "The marks are treated as this family’s own." }
    ]
  },
  {
    quote: "waiting it out together, laughing at the ones who were running",
    opts: [
      { t: "The estate is a place where people share small moments", ok: true, why: "Right. The one thing Mei is leaving that cannot be packed is a void deck full of neighbours doing this." },
      { t: "The neighbours are being unkind about the people in the rain", why: "The laughter is shared, not cruel, and they are all sheltering." },
      { t: "The rain has caught everyone in the block by surprise", why: "The sky had threatened all afternoon." },
      { t: "The people are waiting for the moving van to leave", why: "They are waiting for the downpour to pass." }
    ]
  }
];

const EXPLAIN = [
  {
    claim: "The flat is empty but not silent.",
    quote: "her own footsteps came back to her half a second late",
    opts: [
      { t: "Mei walks into the flat after the movers have finished, and she hears the sound of her footsteps in the empty rooms.", why: "Retelling. What does the delay suggest?" },
      { t: "An echo is missing furniture made audible, and the half-second delay makes the flat seem to answer her. The place is emptied, not dead.", ok: true, why: "Strong. It reads the detail twice, physically and in mood." },
      { t: "The rooms of the flat have become bigger since the day before, which is why the sound takes longer to come back.", why: "A literal reading. The rooms are the same size." },
      { t: "The writer describes the sound of footsteps in the first paragraph, telling the reader what Mei heard as she walked into the empty flat.", why: "An observation. What does it establish?" }
    ]
  },
  {
    claim: "Objects are made to carry the family’s history.",
    quote: "A grey smudge beside the light switch, shoulder-height",
    opts: [
      { t: "The wall of the living room has a grey mark on it near to the light switch, which was made during the years that the family were living there.", why: "Retelling. Why is this mark different from the others?" },
      { t: "Height and greyness date it: years of the same hands in the same place. The wall records the family more exactly than a photograph.", ok: true, why: "Strong. It explains why this detail is chosen and what it holds." },
      { t: "The family did not clean the walls of the flat properly at any point before the movers came to take all of the furniture away.", why: "Cleaning is not the point of the detail." },
      { t: "The writer describes a mark on the living room wall here, and small details like this one are often included to make a place feel real.", why: "An observation. What does the mark stand for?" }
    ]
  },
  {
    claim: "The weather is used to hold and release the feeling.",
    quote: "the sky had been threatening rain all afternoon and had not delivered",
    opts: [
      { t: "It is hot outside the block of flats, and the clouds have been building all afternoon without any rain falling yet.", why: "Retelling. Why withhold the rain?" },
      { t: "The unbroken pressure matches a girl doing a small job instead of saying goodbye. When the rain finally falls, it breaks for both of them.", ok: true, why: "Strong. It links weather to feeling and to timing." },
      { t: "The weather in this part of the world is often very hot before a heavy rainstorm arrives in the afternoon.", why: "True of the climate, but it is not the effect." },
      { t: "The writer mentions the weather in this part of the story, describing the heat and the clouds over the block on that particular afternoon.", why: "An observation. Why mention it here?" }
    ]
  },
  {
    claim: "One strange moment is left unexplained on purpose.",
    quote: "The curtains moved, once, though the window was shut",
    opts: [
      { t: "Mei looks back into the flat from the landing outside and sees that the curtains at the window have moved slightly.", why: "Retelling. Why leave it unexplained?" },
      { t: "There is no draught, and no explanation follows. The story allows one small goodbye without turning the flat into a ghost story.", ok: true, why: "Strong. It explains the restraint and its effect." },
      { t: "Somebody else is still inside the flat behind the curtains, and that person moves them as Mei is leaving.", why: "The flat is empty. Nobody else is there." },
      { t: "The writer describes the curtains at this point in the story, which are the only things that the family have left behind in the empty flat.", why: "An observation. Why place it here?" }
    ]
  },
  {
    claim: "The last line lets an object say what Mei does not.",
    quote: "her hand, in her pocket, was closed around a broken hairclip",
    opts: [
      { t: "Mei sits in the van as the family drives away, holding the hairclip that she found behind the pipe in the empty flat.", why: "Retelling. Why finish on the hairclip?" },
      { t: "The estate blurs and disappears while the one solid thing left is worthless and hers. Holding it says the goodbye the story never writes.", ok: true, why: "Strong. It sets the vanishing place against the kept object." },
      { t: "Mei wants to keep the hairclip so that she can have it mended once the family has arrived at the new flat.", why: "Nothing suggests she plans to repair it." },
      { t: "The story ends with Mei holding something in her pocket as the van drives away from the estate through the heavy rain that has just started.", why: "An observation. What does ending there achieve?" }
    ]
  }
];
TEXTS.push({ id: "nine-floors-up", type: "Fiction", mode: "Creative", form: "Short story", level: "5ème",
  hook: "An empty flat on the ninth floor, an afternoon that will not rain, and one thing the movers missed.",
  TEXT, ANNOTATE, QUESTIONS, EVIDENCE, EXPLAIN });
}


/* ================================================================
   TEXT 30 · Fiction · Creative · Narrative poem · 6ème
   ================================================================ */
{
const TEXT = {
  title: "The Owl and the Pussy-cat",
  intro: "Edward Lear, “The Owl and the Pussy-cat”, 1871. The complete poem.",
  paras: [
    "The Owl and the Pussy-cat went to sea",
    "In a beautiful pea-green boat,",
    "They took some honey, and plenty of money,",
    "Wrapped up in a five-pound note.",
    "The Owl looked up to the stars above,",
    "And sang to a small guitar,",
    "“O lovely Pussy! O Pussy, my love,",
    "What a beautiful Pussy you are,",
    "You are,",
    "You are!",
    "What a beautiful Pussy you are!”",
    "",
    "Pussy said to the Owl, “You elegant fowl!",
    "How charmingly sweet you sing!",
    "O let us be married! too long we have tarried:",
    "But what shall we do for a ring?”",
    "They sailed away, for a year and a day,",
    "To the land where the Bong-tree grows",
    "And there in a wood a Piggy-wig stood",
    "With a ring at the end of his nose,",
    "His nose,",
    "His nose,",
    "With a ring at the end of his nose.",
    "",
    "“Dear Pig, are you willing to sell for one shilling",
    "Your ring?” Said the Piggy, “I will.”",
    "So they took it away, and were married next day",
    "By the Turkey who lives on the hill.",
    "They dined on mince, and slices of quince,",
    "Which they ate with a runcible spoon;",
    "And hand in hand, on the edge of the sand,",
    "They danced by the light of the moon,",
    "The moon,",
    "The moon,",
    "They danced by the light of the moon."
  ]
};

const ANNOTATE = [
  {
    skill: "Repetition",
    prompt: "Find the line that closes the first stanza, repeated three times.",
    target: ["What a beautiful Pussy you are"],
    decoys: [{ phrase: "The Owl looked up to the stars above", why: "This line appears only once. Look for the line that returns three times, shrinking a little each time, at the very end of the stanza." }],
    miss: "Look at the very end of the first stanza — a short phrase returns three times.",
    explain: "“What a beautiful Pussy you are” closes the stanza three times, growing shorter each time (“You are, / You are!”). The repetition makes the Owl's song sound musical, like a real refrain trailing off."
  },
  {
    skill: "Structure",
    prompt: "Find the phrase that leaps the story forward in time, skipping the journey itself.",
    target: ["for a year and a day"],
    decoys: [{ phrase: "with a ring at the end of his nose", why: "This describes what they find when they arrive, not how much time the journey there took." }],
    miss: "Look at the start of the second stanza, just after the proposal.",
    explain: "“For a year and a day” compresses a whole voyage into five words. The poem skips straight past the uneventful journey to the more interesting part of the adventure: finding a ring."
  },
  {
    skill: "Humour",
    prompt: "Find the oddly practical detail packed alongside the honey for their romantic voyage.",
    target: ["Wrapped up in a five-pound note"],
    decoys: [{ phrase: "sang to a small guitar", why: "This is about the Owl's music, not about what the two of them packed for the journey." }],
    miss: "Look at the third and fourth lines of the poem, about what they took with them.",
    explain: "A neatly wrapped five-pound note is a very sensible, everyday thing to bring on a fantastical sea voyage with a singing owl. The mismatch between romance and practicality is part of the joke."
  },
  {
    skill: "Mood",
    prompt: "Find the closing image that leaves the poem on a calm, contented note.",
    target: ["They danced by the light of the moon"],
    decoys: [{ phrase: "were married next day", why: "This tells us an event happened, but it is not the final image the poem actually leaves us with." }],
    miss: "Look at the very last line of the poem.",
    explain: "After all the sailing, buying and marrying, the poem ends quietly: two figures dancing together under moonlight. The busy adventure settles into a peaceful, happy mood."
  }
];

const QUESTIONS = [
  {
    skill: "Point of view",
    q: "What kind of narrator tells this poem?",
    opts: [
      { t: "An outside storyteller who narrates events like a fairy tale, without ever judging the characters", ok: true, why: "Right. The narrator simply reports what the Owl, Pussy-cat, Pig and Turkey do and say, the way a fairy tale is told, never stepping in with an opinion." },
      { t: "The Owl, telling the story of its own adventure and marriage to Pussy-cat in the first person the whole time", why: "The poem never uses “I”. Everything about the Owl and Pussy-cat is reported from outside, not by one of them." },
      { t: "A narrator who keeps interrupting the story to warn the reader about danger up ahead", why: "There are no warnings or interruptions anywhere. The narrator only describes what happens, calmly and in order." },
      { t: "The Piggy-wig, telling the whole story sometime after he has sold away his own ring", why: "The Piggy-wig only appears for a few lines in the second stanza. He cannot be telling the whole story." }
    ]
  },
  {
    skill: "Word choice",
    q: "Why does Lear invent words like “runcible spoon” and the “Bong-tree”?",
    opts: [
      { t: "To add to the poem's playful, nonsense world, where even ordinary objects can be invented", ok: true, why: "Right. Nonsense words like “runcible” and “Bong-tree” suit a story about a talking owl and cat sailing off to get married; the whole world is delightfully made up." },
      { t: "To describe real, ordinary objects that the English language simply did not yet have proper names for", why: "“Runcible” is not a real object at all. Lear simply enjoyed inventing sounds that felt right for his nonsense world." },
      { t: "To make the poem harder to understand for the younger readers it was written for", why: "The invented words are playful rather than difficult. Lear wrote nonsense verse to entertain children, not to confuse them." },
      { t: "To show off how many real foreign words the writer had picked up on his travels", why: "These words are not borrowed from any real language. Lear invented them purely for the fun of the sound." }
    ]
  },
  {
    skill: "Structure",
    q: "Why does the poem skip straight from setting sail to “a year and a day” later?",
    opts: [
      { t: "To move quickly past the ordinary journey and on to the next part of the adventure", ok: true, why: "Right. The poem is not interested in the details of the voyage itself; it jumps straight ahead to where the real adventure, finding a ring, begins." },
      { t: "To show that the Owl and Pussy-cat became lost and confused somewhere out at sea", why: "There is no mention anywhere of them being lost. The time skip is simply the poem moving the story along quickly." },
      { t: "To hint that a whole year passed before the two of them decided to fall in love", why: "They already call each other “my love” back in the first stanza, well before the year at sea begins." },
      { t: "To prove that sea voyages in fairy tales must always take exactly one year to finish", why: "“A year and a day” is a traditional storytelling phrase for a long stretch of time, not a strict rule about voyages." }
    ]
  },
  {
    skill: "Mood",
    q: "How does the mood change between the start of the poem and its final lines?",
    opts: [
      { t: "It moves from a lively, comic adventure to a calm and gently romantic close", ok: true, why: "Right. The poem opens with singing, sailing and buying a ring, full of energy and comedy, then settles into the quiet final image of dancing by moonlight." },
      { t: "It moves from a calm, gentle beginning into a tense and frightening final stanza", why: "The ending is peaceful, not frightening at all. Nothing threatening happens at the wedding or the dance." },
      { t: "It stays exactly the same, cheerful and busy, from the very first line to the last", why: "The ending slows right down into stillness and quiet, which is a real change from the bustle of the earlier stanzas." },
      { t: "It moves from happiness out at sea into sadness once the wedding day is over", why: "The final image of dancing by moonlight is joyful, not sad at all. The mood stays happy, just quieter." }
    ]
  },
  {
    skill: "Summary",
    q: "Which sentence best sums up what happens in this poem?",
    opts: [
      { t: "An Owl and a Pussy-cat sail off together, buy a ring from a pig they meet on a far-off island, get married by a Turkey, and end the poem dancing happily together by moonlight.", ok: true, why: "Right. It covers the whole shape of the poem, not just one part of it." },
      { t: "The Owl sings a love song to Pussy-cat on a small guitar while their boat sails further out to sea. Other parts of the poem focus on different details.", why: "True, but too narrow. It only covers part of the poem and misses the main point." },
      { t: "Owls and cats in real life often travel together across the wide ocean in search of rings and other things to get married with. The rest of the poem develops in quite a different direction from this.", why: "Too broad. This adds a claim the poem does not actually make or support." },
      { t: "They eat mince and slices of quince together using a spoon that Lear invented and named a runcible spoon. The story continues well beyond this particular moment.", why: "A real detail, but a minor one. It is not what the poem is mainly about." }
    ]
  }
];

const EVIDENCE = [
  {
    quote: "Wrapped up in a five-pound note",
    opts: [
      { t: "Even on a fantastical voyage, the animals pack something very ordinary and sensible", ok: true, why: "Right. A neatly wrapped banknote is a down-to-earth, practical detail amid an otherwise magical journey." },
      { t: "The Owl and Pussy-cat are extremely poor and cannot really afford this journey at all", why: "A five-pound note was a decent sum. Nothing suggests the pair are struggling for money." },
      { t: "Money in this poem works like a magic object that helps them sail safely across the sea", why: "The note is just something they packed. It has no magical power in the poem." },
      { t: "The five-pound note is secretly a hidden map showing them exactly where to sail", why: "It is simply money, wrapped up for the journey. There is no mention of any map at all." }
    ]
  },
  {
    quote: "How charmingly sweet you sing!",
    opts: [
      { t: "The Owl's singing has successfully charmed and won Pussy-cat over", ok: true, why: "Right. Pussy's compliment shows she is delighted by the song, right before she proposes marriage." },
      { t: "Pussy-cat secretly thinks the Owl's singing sounds terrible and badly out of tune", why: "Her words are a genuine compliment, followed immediately by a proposal of marriage." },
      { t: "Pussy-cat is only pretending to enjoy the song out of simple politeness to the Owl", why: "Nothing in the poem hints that Pussy is being insincere here at all." },
      { t: "The Owl cannot really sing and is only pretending while it plays the small guitar", why: "The poem never suggests the Owl's singing is fake. Pussy's reaction reads as genuine delight." }
    ]
  },
  {
    quote: "They danced by the light of the moon",
    opts: [
      { t: "The poem ends on a calm, happy, and gently romantic note", ok: true, why: "Right. Quiet dancing under moonlight is a peaceful, tender image to close the poem on." },
      { t: "The poem ends with the Owl and Pussy-cat lost and unable to find their way back home", why: "There is no sign of being lost. The dancing is calm and joyful, not anxious at all." },
      { t: "Dancing at night shows that the wedding guests refused to go home after dark that night", why: "The poem only mentions the Owl and Pussy-cat dancing, not a crowd of reluctant guests." },
      { t: "The moonlight makes the ending feel mysterious and slightly frightening for the reader", why: "Moonlight here creates gentle romance, not mystery or fear, closing the poem softly." }
    ]
  }
];

const EXPLAIN = [
  {
    claim: "The invented word “runcible” adds to the poem's nonsense world.",
    quote: "a runcible spoon",
    opts: [
      { t: "They eat their wedding feast of mince and quince together with a special spoon, right there on the edge of the sand near the calm, moonlit water at long last.", why: "Retelling. What does the made-up word itself add to the poem, beyond just naming an object?" },
      { t: "“Runcible” is not a real word; inventing it fits a world where owls sing, cats marry, and pigs wear rings, where ordinary rules of language don't quite apply.", ok: true, why: "Strong. It explains that the word is invented and connects that to the poem's wider nonsense logic." },
      { t: "The poem uses a fairly unusual word right here in this particular line, without ever explaining exactly why.", why: "True, but say what kind of word it is and what effect that choice actually has." },
      { t: "This shows that Lear simply did not know the real word for the spoon they were using at their wedding feast.", why: "A misreading. Lear invented nonsense words on purpose throughout his poetry, not by mistake." }
    ]
  },
  {
    claim: "The time skip keeps the story moving quickly.",
    quote: "for a year and a day",
    opts: [
      { t: "The Owl and Pussy-cat sail away together after getting engaged, right at the start of the second stanza.", why: "Retelling. Explain what skipping ahead in time like this actually achieves for the poem." },
      { t: "Compressing a whole year of sailing into five words lets the poem skip the uneventful journey and jump straight to the more interesting part of the adventure.", ok: true, why: "Strong. It explains exactly what the compression achieves and why the journey itself is skipped." },
      { t: "The poem simply moves forward in time a little at this particular point, for reasons left unclear.", why: "True, but say what effect that jump actually has on the pace of the story." },
      { t: "This proves the journey itself was really the most exciting part of the whole poem, far more exciting than anything else that ever happens after it finally ends.", why: "A misreading. The poem skips past the journey precisely because it is not the interesting part." }
    ]
  },
  {
    claim: "The five-pound note is a comic, down-to-earth detail.",
    quote: "Wrapped up in a five-pound note",
    opts: [
      { t: "They take some honey and plenty of money with them on their journey out to sea, right at the very start of the poem.", why: "Retelling. Explain why this particular detail feels funny in such a romantic setting." },
      { t: "A neatly wrapped five-pound note is a very sensible, everyday detail to pack for a fantastical voyage with a singing owl, and the mismatch is part of the joke.", ok: true, why: "Strong. It names the mismatch between the ordinary detail and the fantastical setting, and calls it comic." },
      { t: "The writer includes a rather unusual detail fairly early on in the poem, without explaining its purpose clearly.", why: "True, but say what kind of detail it is and why exactly it feels funny in this context." },
      { t: "This shows that the Owl and Pussy-cat are secretly quite wealthy business owners, despite everything else that the poem actually tells us about the pair of them here.", why: "A misreading. A single five-pound note is just a practical detail, not proof of great wealth." }
    ]
  },
  {
    claim: "The ending creates a peaceful, contented mood.",
    quote: "They danced by the light of the moon",
    opts: [
      { t: "The Owl and Pussy-cat dance together on the sand after their wedding day is finally over, right at the very end.", why: "Retelling. Explain how this particular final image works to create a mood, not just what happens." },
      { t: "After all the sailing and searching, the poem slows to one quiet, gentle image of dancing under moonlight, leaving the reader with a calm, happy final feeling.", ok: true, why: "Strong. It links the slowing pace and the image itself to the calm feeling the ending leaves behind." },
      { t: "The poem ends with quite a nice, pleasant image taking place out on the beach, without much more detail given.", why: "Too general. What kind of feeling does this particular final image leave the reader with?" },
      { t: "This shows the two characters are simply too exhausted from the long wedding day to go home at all tonight, rather than being genuinely happy together at last.", why: "A misreading. Nothing suggests exhaustion here; the dancing reads as joyful, not tired." }
    ]
  }
];

const COLLECT = [
  {
    claim: "The poem pairs the romantic voyage with a very practical, everyday detail.",
    opts: [
      { t: "plenty of money", ok: true, why: "Right. Packing “plenty of money”, neatly counted, is a down-to-earth thing to bring on a whimsical sea voyage." },
      { t: "In a beautiful pea-green boat", why: "This is a whimsical, romantic detail, not a practical one." },
      { t: "The Owl looked up to the stars above", why: "This is a dreamy, romantic image, not something practical." },
      { t: "O lovely Pussy! O Pussy, my love", why: "This is the Owl’s love song, not a practical detail." }
    ]
  },
  {
    claim: "The poem ends on a calm, peaceful, happy note.",
    opts: [
      { t: "hand in hand, on the edge of the sand", ok: true, why: "Right. Two figures side by side on the shore is a tender, peaceful image to close on." },
      { t: "were married next day", why: "This is an event partway through, not the peaceful final image." },
      { t: "They dined on mince, and slices of quince", why: "This is the wedding feast, not the calm closing picture." },
      { t: "By the Turkey who lives on the hill", why: "This tells us who married them, not the peaceful ending." }
    ]
  },
  {
    claim: "Lear invents a playful nonsense word for an ordinary object.",
    target: ["a runcible spoon"],
    decoys: [{ phrase: "slices of quince", why: "Quince is a real fruit. Look instead for the made-up word for the spoon." }],
    miss: "Look in the third stanza, at what they eat with.",
    explain: "“Runcible” is a word Lear invented; it exists nowhere outside his poems. It fits a nonsense world where owls sing and cats marry."
  },
  {
    claim: "The Owl’s song sounds musical because a line is repeated and shortened.",
    target: ["What a beautiful Pussy you are"],
    decoys: [{ phrase: "The Owl looked up to the stars above", why: "This line appears only once; the claim is about the line that returns three times. Look at the end of the first stanza." }],
    miss: "Look at the end of the first stanza, where a short phrase returns three times.",
    explain: "“What a beautiful Pussy you are” closes the stanza three times, shrinking each time (“You are, / You are!”), like the fading notes of a song the Owl sings aloud."
  }
];
TEXTS.push({ id: "owl-and-pussycat", type: "Fiction", mode: "Creative", form: "Narrative poem", level: "6ème",
  hook: "An owl, a cat, a stolen boat, and a pig who just happens to have a ring for sale: Edward Lear's nonsense classic, complete.",
  TEXT, ANNOTATE, QUESTIONS, EVIDENCE, EXPLAIN, COLLECT });
}


/* ================================================================
   TEXT 31 · Fiction · Creative · Legend · 5ème
   ================================================================ */
{
const TEXT = {
  title: "The Gordian Knot",
  intro: "An ancient legend from Phrygia, retold, and how Alexander the Great is said to have solved it.",
  paras: [
    "The ancient kingdom of Phrygia was located in what is now modern Turkey. During a time in its history, Phrygia found itself without a king. Lacking a strong ruler, the Phrygians feared for their safety. They prayed for guidance and consulted the oracle at Telmissus for advice. To their relief, the oracle declared that the next man to enter the city with an ox cart would become king.",
    "Meanwhile, the peasant Gordius was driving his ox cart towards the Phrygian capital. As he travelled, a golden eagle landed on his cart, which Gordius interpreted as a good omen. Unable to determine its meaning, he continued his journey, trusting that the meaning would be revealed.",
    "When Gordius entered the capital, the people greeted him with acclaim; the priests crowned him their new king. The capital of Phrygia was renamed Gordium. Now Gordius had a son, Midas, who stepped forwards to honour his father, to reassure the Phrygians and to pay homage to Zeus, king of all gods. He dedicated the ox cart to Zeus and tied it with an intricate knot. The knot was so complicated that whoever untied it would rule all of Asia, predicted the oracle. From then on, the knot was called the Gordian knot.",
    "As word spread about the knot and its promise, challengers arrived from everywhere to try to untie it. None succeeded. The Gordian knot held fast for generations until 333 BCE. That was when, according to legend, Alexander the Great came to Gordium, curious about the famed knot, which by now was weathered ever tighter. Unable to find its loose ends, Alexander dramatically cut the knot with a single stroke of his sword. He did go on to conquer much of Asia, thus fulfilling the prophecy."
  ]
};

const ANNOTATE = [
  {
    skill: "Problem",
    prompt: "Find the sentence that states the first problem the kingdom faces.",
    target: ["Phrygia found itself without a king"],
    decoys: [{ phrase: "consulted the oracle at Telmissus for advice", why: "This is the Phrygians' response to the problem, not the problem itself." }],
    miss: "Look at the second sentence of the whole legend.",
    explain: "A kingdom with no king is the story's first problem. Everything that follows, the prayer, the oracle, Gordius's arrival, exists to solve it."
  },
  {
    skill: "Cause and effect",
    prompt: "Find the exact test the oracle sets for choosing the next king.",
    target: ["the next man to enter the city with an ox cart would become king"],
    decoys: [{ phrase: "a golden eagle landed on his cart", why: "This happens to Gordius on the road. It is not the oracle's original test." }],
    miss: "Look at the end of the first paragraph, at what the oracle actually declares.",
    explain: "This single rule is what turns an ordinary peasant driving a cart into a king. Without this exact test, Gordius's arrival would mean nothing at all."
  },
  {
    skill: "Foreshadowing",
    prompt: "Find the sign that hints Gordius is about to receive good fortune.",
    target: ["a golden eagle landed on his cart"],
    decoys: [{ phrase: "the priests crowned him their new king", why: "This is the result of the sign, not the sign itself." }],
    miss: "Look near the start of the second paragraph, on the road to the capital.",
    explain: "Gordius reads the eagle as “a good omen” before he knows why. The detail hints at what is coming, before the reader is told what it means."
  },
  {
    skill: "Turning point",
    prompt: "Find the moment that finally solves the puzzle of the knot, generations after it was tied.",
    target: ["Alexander dramatically cut the knot with a single stroke of his sword"],
    decoys: [{ phrase: "challengers arrived from everywhere to try to untie it", why: "This describes many earlier failed attempts, not the moment the knot is finally dealt with." }],
    miss: "Look near the end of the final paragraph, at what Alexander actually does.",
    explain: "Every challenger before Alexander tried and failed to untie the knot the expected way. His single stroke changes the whole problem, solving it by refusing to play by the old rules."
  },
  {
    skill: "Vocabulary",
    prompt: "Find the word that describes just how complicated the knot Midas ties really is.",
    target: ["tied it with an intricate knot"],
    decoys: [{ phrase: "a good omen", why: "This describes the eagle earlier in the legend, not the knot itself." }],
    miss: "Look in the third paragraph, at what kind of knot Midas ties.",
    explain: "“Intricate” means extremely complicated, with many parts tangled together. It sets up exactly why the knot becomes such a famous, unsolvable challenge."
  }
];

const QUESTIONS = [
  {
    skill: "Problem and solution",
    q: "What two problems does this legend follow, one after the other?",
    opts: [
      { t: "First a kingdom left with no king, then a knot that no one seems able to untie", ok: true, why: "Right. The oracle’s prophecy answers the first problem; Alexander’s sword answers the second, generations later." },
      { t: "First choosing a king, then choosing which challenger should be allowed to try the knot", why: "Anyone could try the knot — challengers “arrived from everywhere”. The second problem is the knot resisting them, not choosing who attempts it." },
      { t: "First how best to honour the god Zeus, then how to reward whoever rules all of Asia", why: "Honouring Zeus is Midas’s reason for the offering, not a problem the legend sets out to solve." },
      { t: "First a peasant with no way to reach the city, then a king left with no heir behind him", why: "Gordius reaches the city easily by ox cart, and he does leave an heir, his son Midas. Both halves misread the text." }
    ]
  },
  {
    skill: "Cause and effect",
    q: "Why does the oracle’s prophecy matter so much to everything that happens next?",
    opts: [
      { t: "It sets the test that turns an ordinary cart’s arrival into proof of who should rule", ok: true, why: "Right. Without this rule, Gordius arriving by ox cart is just a peasant passing through, not a sign from the gods." },
      { t: "It is the sign that makes Gordius trust the golden eagle and keep travelling to the city", why: "It is the eagle, not the prophecy, that Gordius reads as an omen; he has not yet heard the oracle’s words as he travels." },
      { t: "It is the reason Midas later dedicates the ox cart to Zeus and ties his famous knot", why: "Midas ties the knot to honour his father and Zeus; a separate prophecy, not this one, is attached to the knot." },
      { t: "It points the Phrygians to the one man among them who was the rightful king all along", why: "The prophecy names a condition, not a man, and the new king is Gordius arriving from outside, not one of them." }
    ]
  },
  {
    skill: "Vocabulary",
    q: "“Midas... tied it with an intricate knot.” What does “intricate” mean here?",
    opts: [
      { t: "Extremely complicated, with many parts twisted tightly together", ok: true, why: "Right. This is exactly why the knot becomes such a legendary, seemingly unsolvable challenge." },
      { t: "Beautifully decorated, as befits a gift offered to the god Zeus above", why: "An offering to Zeus might be decorative, but “intricate” describes how complicated the knot is, not how it looks." },
      { t: "Loose enough that its ends could be found by any patient challenger", why: "The opposite: no one could find its loose ends, which is why it defeated challengers for generations." },
      { t: "So large and heavy that lifting the cart by it took real strength", why: "“Intricate” is about how complicated the knot is to undo, not its size or weight." }
    ]
  },
  {
    skill: "Structure",
    q: "Why does the legend wait until 333 BCE, generations later, to introduce Alexander?",
    opts: [
      { t: "To show how long and how completely the knot had defeated everyone before him", ok: true, why: "Right. The long gap makes the knot’s reputation as unbeatable feel earned before Alexander arrives." },
      { t: "To let the knot weather “ever tighter” so it becomes physically harder to undo", why: "The knot does weather tighter, but that is a detail; the gap’s real job is to build its unbeaten reputation." },
      { t: "To measure how many years Gordius’s family kept ruling Phrygia after his death", why: "The legend never follows Gordius’s family ruling; the gap measures the knot’s unbroken reputation instead." },
      { t: "To hint that only a foreign conqueror, never a Phrygian, could deal with the knot", why: "Nothing says only a foreigner could solve it; the gap shows how long the knot resisted every challenger." }
    ]
  },
  {
    skill: "Inference",
    q: "What does cutting the knot instead of untying it suggest about Alexander?",
    opts: [
      { t: "He will solve a problem in a bold, unexpected way rather than the way everyone assumes", ok: true, why: "Right. Where others tried to untie the knot properly, Alexander simply changes the terms of the problem." },
      { t: "He cares most of all about being the very one who fulfils the oracle’s promise of Asia", why: "He does fulfil the prophecy, but the cut shows how he tackles problems, not his concern with the oracle." },
      { t: "He is impatient, unwilling to spend real time working carefully at a hard problem", why: "The legend frames the stroke as bold and decisive, not impatient; it is admired, and he goes on to conquer Asia." },
      { t: "He thinks the knot is only a trick and not really worth any serious attempt", why: "He is “curious about the famed knot” and does take it on; he solves it rather than dismissing it." }
    ]
  },
  {
    skill: "Summary",
    q: "Which sentence best sums up what happens in this legend?",
    opts: [
      { t: "A prophecy makes the peasant Gordius king of Phrygia, his son ties an impossibly complex knot to honour Zeus, and generations later Alexander solves it by cutting it with his sword.", ok: true, why: "Right. It covers the whole shape of the legend, not just one part of it." },
      { t: "A golden eagle lands on the ox cart of a peasant travelling towards the Phrygian capital, and he takes it as a promising sign of the good fortune still to come.", why: "True, but too narrow. It covers only one early moment and misses the main point." },
      { t: "Across the ancient world, the prophecies handed down by oracles were always trusted completely, and every last one of them was shown in the end to come true exactly as it had first been spoken.", why: "Too broad. This makes a sweeping claim about all oracles that the legend never actually makes." },
      { t: "Challengers travelled to Gordium from every direction to try their luck at untying the famous knot, and not a single one of them ever managed to succeed at it.", why: "A real detail, but a minor one. It is not what the legend is mainly about." }
    ]
  }
];

const EVIDENCE = [
  {
    quote: "the next man to enter the city with an ox cart would become king",
    opts: [
      { t: "The prophecy turns an ordinary, everyday arrival into a clear sign of who should rule", ok: true, why: "Right. Because of this rule, Gordius simply driving his cart into the city becomes a sign from the gods." },
      { t: "The prophecy shows that the Phrygians already knew in advance which man would arrive by cart", why: "No one knows who will come; the test just waits for the next man with an ox cart, whoever he turns out to be." },
      { t: "The prophecy sets a contest that many men would race one another to win", why: "There is no contest; the very next man to arrive by ox cart becomes king, with no one competing against him." },
      { t: "The prophecy makes the ox cart the sacred object the Phrygians must guard", why: "The cart matters only as the sign of the new king; the offering and knot come later, from Midas." }
    ]
  },
  {
    quote: "Unable to find its loose ends, Alexander dramatically cut the knot with a single stroke of his sword",
    opts: [
      { t: "Alexander succeeds by changing the rules of the problem instead of playing by them", ok: true, why: "Right. He does not untie the knot; he removes the whole problem with one decisive stroke." },
      { t: "Alexander cuts the knot only after trying every ordinary method and failing at each", why: "The legend shows him unable to find the ends and cutting at once; it never describes him trying each method first." },
      { t: "Alexander damages the offering by accident while searching it for its loose ends", why: "The cut is “dramatic” and deliberate, a chosen solution, not an accident." },
      { t: "Alexander proves the earlier challengers had simply not pulled hard enough on it", why: "He does not out-pull them; he gives up untying altogether and cuts straight through instead." }
    ]
  },
  {
    quote: "The Gordian knot held fast for generations",
    opts: [
      { t: "It shows how impossible the challenge had come to seem before Alexander arrived", ok: true, why: "Right. Generations of failure make his eventual, unconventional solution feel all the more remarkable." },
      { t: "It shows the knot was guarded so that no one was allowed to attempt it", why: "Challengers “arrived from everywhere” to try it freely; it held fast because it was so complex, not because it was guarded." },
      { t: "It shows the knot slowly loosened over the passing years until it was finally ready to undo", why: "“Held fast” means it stayed firmly tied; if anything it “weathered ever tighter”." },
      { t: "It shows people had forgotten the knot until Alexander made it famous again", why: "Its fame spread early and challengers kept coming; Alexander is drawn by a knot already “famed”." }
    ]
  },
  {
    quote: "He did go on to conquer much of Asia, thus fulfilling the prophecy",
    opts: [
      { t: "It confirms that the oracle’s much earlier prediction about the knot really did come true", ok: true, why: "Right. The final line ties Alexander’s real conquests directly back to the oracle from generations before." },
      { t: "It shows Alexander conquered Asia in order to earn the right to cut the knot", why: "The order is reversed: he cuts the knot first, and the conquest that follows is what fulfils the prophecy." },
      { t: "It shows the prophecy had promised that Gordius, not Alexander, would be the one to rule Asia", why: "The prophecy names whoever unties the knot; that turns out to be Alexander, not Gordius." },
      { t: "It shows the conquest was a lucky accident with no link to the famous knot", why: "The line calls it “fulfilling the prophecy”, tying the conquest directly to the knot Alexander cut." }
    ]
  }
];

const EXPLAIN = [
  {
    claim: "The oracle's prophecy is what makes Gordius's arrival meaningful.",
    quote: "the next man to enter the city with an ox cart would become king",
    opts: [
      { t: "Gordius happens to be driving his ox cart into the Phrygian capital at exactly this moment. This detail alone does not capture everything the passage actually says. Other parts of the text tell a rather different story from this one.", why: "Retelling. Explain why the timing of his arrival actually matters to the story." },
      { t: "Without this exact rule from the oracle, an ordinary peasant arriving by cart would mean nothing; the prophecy is what transforms the event into proof he should be king.", ok: true, why: "Strong. It explains precisely how the prophecy converts an ordinary event into something meaningful." },
      { t: "The oracle gives the Phrygians a rule to follow near the start of the legend.", why: "Too general. What does that particular rule actually let the Phrygians do?" },
      { t: "This proves that anyone who owns an ox cart can eventually become king of Phrygia.", why: "A misreading. The rule applied only once, to the very next man to arrive, not to cart owners generally." }
    ]
  },
  {
    claim: "The eagle landing on the cart foreshadows Gordius's good fortune.",
    quote: "a golden eagle landed on his cart",
    opts: [
      { t: "A golden eagle lands on Gordius's ox cart while he is travelling towards the capital city.", why: "Retelling. Explain what this moment hints at, rather than just describing what happens." },
      { t: "Gordius reads the eagle as a good sign before he understands why; placing it here hints at coming fortune, well before the reader learns the reason.", ok: true, why: "Strong. It connects the omen to the later reveal and explains the foreshadowing itself." },
      { t: "An unusual animal appears in the story at this particular point in the journey.", why: "Too general. What kind of unusual thing happens, and what does it suggest is coming?" },
      { t: "This proves that eagles were considered sacred, protected animals throughout ancient Phrygia. This detail alone does not capture everything the passage actually says. Other parts of the text tell a rather different story from this one.", why: "A misreading. The legend never claims eagles were protected; this one eagle is simply read as a personal omen." }
    ]
  },
  {
    claim: "Alexander's solution works by changing the problem, not solving it as intended.",
    quote: "Alexander dramatically cut the knot with a single stroke of his sword",
    opts: [
      { t: "Alexander arrives at Gordium and is curious about the famous, weathered knot everyone talks about. This detail alone does not capture everything the passage actually says. Other parts of the text tell a rather different story from this one.", why: "Retelling. Explain what his actual solution achieves, not just that he arrives." },
      { t: "Every challenger before him tried to find the knot's ends and untie it properly; Alexander instead removes the whole problem with one stroke, solving it by refusing the expected method.", ok: true, why: "Strong. It contrasts his method with everyone else's and explains why that makes it a real solution." },
      { t: "Alexander does something dramatic and unexpected near the end of the legend.", why: "Too general. What exactly does he do, and why does it count as solving the puzzle?" },
      { t: "This proves that Alexander was actually unable to solve the puzzle the knot presented at all.", why: "A misreading. The legend presents the cut as a genuine, celebrated solution, not a failure." }
    ]
  },
  {
    claim: "The long gap before Alexander's arrival builds up the knot's reputation.",
    quote: "The Gordian knot held fast for generations",
    opts: [
      { t: "The Gordian knot stays tied for a very long time, until the year 333 BCE arrives at last.", why: "Retelling. Explain what this long stretch of time actually achieves for the story." },
      { t: "Generations of failed attempts make the knot's reputation as unsolvable feel fully earned, so that Alexander's eventual solution feels all the more remarkable when it finally comes.", ok: true, why: "Strong. It links the passage of time directly to how impressive Alexander's solution later feels." },
      { t: "A long period of time passes at this particular point in the legend, before anything else happens. This detail alone does not capture everything the passage actually says. Other parts of the text tell a rather different story from this one.", why: "Too general. What effect does that long stretch of failure actually have on the reader?" },
      { t: "This proves that nobody in Phrygia even remembered why the knot had originally been tied.", why: "A misreading. Nothing suggests the knot or its origin were forgotten during this time." }
    ]
  },
  {
    claim: "The final line confirms the prophecy really did come true.",
    quote: "He did go on to conquer much of Asia, thus fulfilling the prophecy",
    opts: [
      { t: "Alexander the Great goes on to conquer a large part of the continent of Asia after this event.", why: "Retelling. Explain how this links back to something earlier in the legend." },
      { t: "By naming this as “fulfilling the prophecy”, the final line directly ties Alexander's real conquests back to Midas's oracle from generations earlier, closing the legend's whole arc.", ok: true, why: "Strong. It explains exactly how the ending connects back to the earlier prophecy about the knot." },
      { t: "The legend ends by describing something that happens to Alexander after he leaves Gordium.", why: "Too general. What specifically does this final event confirm about the earlier story?" },
      { t: "This proves the prophecy was only ever really about military conquest, not about ruling wisely. This detail alone does not capture everything the passage actually says. Other parts of the text tell a rather different story from this one.", why: "A misreading. The prophecy simply said whoever untied the knot would rule Asia; the ending confirms that outcome, nothing more." }
    ]
  }
];
TEXTS.push({ id: "gordian-knot", type: "Fiction", mode: "Creative", form: "Legend", level: "5ème",
  hook: "A kingdom with no king, an eagle's omen, and a knot nobody can untie, until somebody stops trying to untie it.",
  TEXT, ANNOTATE, QUESTIONS, EVIDENCE, EXPLAIN });
}

/* ================================================================
   TEXT 32 · Fiction · Creative · Short story · 5ème
   ================================================================ */
{
const TEXT = {
  title: "New Heights",
  paras: [
    "Marnie had always thought of herself as meek and fearful, as scared of her own shadow as she was of bats, spiders, snakes and barking dogs. Her lack of confidence became a greater problem as she approached Year 8. Somehow, she’d let herself be talked into embarking on an adventurous alpine backpacking trip.",
    "When Marnie and her fears arrived at the 1.6 kilometre-high base camp, she knew, as did the others on the expedition, that many obstacles lay ahead. She was anxious, but vowed to take them on. She was prepared to learn how to trust herself.",
    "On the website, Marnie read that experienced, supportive instructors would teach the group about camping, cooking in the wilderness, rock climbing and the necessity of teamwork. She knew she would learn to apply basic first aid, use a compass and read a map. Moreover, she understood full well that she and the others would be on their own, problem-solving and cooperating to reach assigned destinations in a rugged environment.",
    "The terrain was rough indeed. While ascending to an altitude of 3000 metres, Marnie’s team found themselves both on and off steep and rocky paths. She practised remaining calm and focused, which helped her apply what she’d learned. It surprised her how much confidence she gained with each completed task. She was learning deeper things, too – about herself. Marnie found her inner strength, which was now being tapped for the first time. She discovered that she could lead as well as follow, and she liked that feeling.",
    "When she returned from the two-week challenge, Marnie felt proud of herself and invigorated. Sure, lightning, forest fires, mudslides and avalanches were still scary events, but Marnie was confident she could face them head on. She had developed new self-confidence and an eagerness to expand her horizons."
  ]
};

const ANNOTATE = [
  {
    skill: "Problem",
    prompt: "Find the sentence that names Marnie's problem right at the start of the story.",
    target: ["Her lack of confidence became a greater problem as she approached Year 8"],
    decoys: [{ phrase: "she’d let herself be talked into embarking on an adventurous alpine backpacking trip", why: "This is the challenge Marnie takes on, not the problem itself that the story is following." }],
    miss: "Look in the first paragraph, at the sentence that uses the word “problem” directly.",
    explain: "Naming the problem so plainly at the very start tells the reader exactly what this story is going to test: whether Marnie's fearfulness can change."
  },
  {
    skill: "Turning point",
    prompt: "Find the moment Marnie is surprised by her own growing confidence.",
    target: ["It surprised her how much confidence she gained with each completed task"],
    decoys: [{ phrase: "she practised remaining calm and focused", why: "This describes what she does to cope, not the moment she notices herself actually changing." }],
    miss: "Look in the fourth paragraph, partway through the ascent.",
    explain: "This is the moment the story's central problem starts to shift. Marnie is not just coping with fear any more; she is actively becoming someone more confident."
  },
  {
    skill: "Inference",
    prompt: "Find the line that shows Marnie has discovered a new side of herself.",
    target: ["she could lead as well as follow, and she liked that feeling"],
    decoys: [{ phrase: "she understood full well that she and the others would be on their own", why: "This is about what she expects before the trip, not what she discovers about herself during it." }],
    miss: "Look near the end of the fourth paragraph.",
    explain: "A girl who thought of herself only as “meek and fearful” discovering she can lead, and enjoying it, is a clear sign of real inner change."
  },
  {
    skill: "Vocabulary",
    prompt: "Find the word that describes how Marnie feels when she gets home from the trip.",
    target: ["Marnie felt proud of herself and invigorated"],
    decoys: [{ phrase: "as scared of her own shadow", why: "This describes how Marnie felt at the very start of the story, not how she feels once she returns home." }],
    miss: "Look at the start of the final paragraph.",
    explain: "“Invigorated” means full of new energy. Pairing it with “proud” shows the trip has changed how Marnie feels about herself, not just what she can do."
  },
  {
    skill: "Structure",
    prompt: "Find the closing line that sums up how Marnie has changed by the end of the story.",
    target: ["She had developed new self-confidence and an eagerness to expand her horizons"],
    decoys: [{ phrase: "lightning, forest fires, mudslides and avalanches were still scary events", why: "This reminds the reader the dangers are still real, but it is not the line that sums up Marnie's own change." }],
    miss: "Look at the very last sentence of the story.",
    explain: "The story ends by directly answering its opening problem: the fearful girl from paragraph one now has “new self-confidence” and wants more challenges, not fewer."
  }
];

const QUESTIONS = [
  {
    skill: "Problem and solution",
    q: "What problem does Marnie face at the start, and how is it resolved by the end?",
    opts: [
      { t: "She lacks confidence and is fearful; by the end the trip has given her real self-belief and a hunger for challenges", ok: true, why: "Right. The story names her lack of confidence at the start and shows exactly how it has changed by the close." },
      { t: "She has never once worked in a team before; by the end she has come to prefer leading the group over ever following it", why: "Teamwork is something she learns about, not her starting problem, and she finds she can both lead and follow, not that she prefers one." },
      { t: "She is terrified of the outdoors; by the end she has learned to love the mountains most of all", why: "Her fear at the start is general — “her own shadow”, bats, spiders, dogs — not the outdoors, and the ending is about confidence." },
      { t: "She doubts the instructors can keep her safe; by the end she trusts them with every danger", why: "Her doubt is in herself, not the instructors; by the end it is her own self-confidence that has grown." }
    ]
  },
  {
    skill: "Cause and effect",
    q: "Why does completing small tasks during the trip change how Marnie feels about herself?",
    opts: [
      { t: "Each success gives her real proof she can cope, slowly building a confidence she did not expect", ok: true, why: "Right. It “surprised her how much confidence she gained with each completed task”, showing proof building over time." },
      { t: "Each task is scored by the instructors, and her steadily rising marks show her she is improving", why: "No marks or scoring are mentioned; her confidence comes from completing the tasks themselves, which surprised her." },
      { t: "The tasks keep her so busy that she simply stops noticing her old fears for a while", why: "She does not merely forget her fears; she gains real confidence “with each completed task”, which is more than distraction." },
      { t: "Finishing the tasks quickly means the frightening trip will soon be over for her", why: "Her confidence grows during the tasks, not from relief that the trip is nearly ending." }
    ]
  },
  {
    skill: "Vocabulary",
    q: "“Marnie felt proud of herself and invigorated.” What does “invigorated” mean here?",
    opts: [
      { t: "Filled with fresh energy and feeling stronger than before", ok: true, why: "Right. Paired with “proud”, it shows the trip has left her energised as well as accomplished." },
      { t: "Certain that she would never feel truly afraid of anything ever again", why: "That is not the word’s meaning; she still finds dangers “scary”, but now faces them with new energy." },
      { t: "Relieved that a long and tiring ordeal was finally over at last", why: "Relief at the end is not the meaning; “invigorated” means energised, and it sits beside “proud”." },
      { t: "Calm and settled after weeks of demanding effort outdoors", why: "It means charged up with energy, not simply calm or settled down." }
    ]
  },
  {
    skill: "Inference",
    q: "What does “she discovered that she could lead as well as follow” suggest about Marnie?",
    opts: [
      { t: "She is finding a stronger, more capable side of herself she did not know was there", ok: true, why: "Right. A girl introduced as “meek and fearful” discovering she can lead is real evidence of inner change." },
      { t: "She now sees following other people’s instructions as a weakness she has finally grown out of", why: "She values being able to do both; following is not treated as a weakness she has left behind." },
      { t: "She has realised she works best entirely on her own, without others", why: "Both leading and following are about working with the group; the line shows range, not a wish to work alone." },
      { t: "She has decided she should be the one giving the orders from now on", why: "She discovers she is capable of leading, not that she takes charge of the group from then on." }
    ]
  },
  {
    skill: "Structure",
    q: "Why does the story name lightning, forest fires, mudslides and avalanches again at the very end?",
    opts: [
      { t: "To show the real dangers still exist, but her new confidence lets her meet them differently", ok: true, why: "Right. Naming the dangers, then “confident she could face them head on”, measures how much she has changed." },
      { t: "To reveal that Marnie had faced every single one of these frightening dangers herself on the trip", why: "These are named as things that “were still scary”, not events that actually happened to her." },
      { t: "To leave the reader worried that Marnie is now being reckless about real risks", why: "The ending is proud and hopeful, not a warning; she means to “face them head on”, not ignore them." },
      { t: "To list the exact skills the instructors had promised to teach the group", why: "These are dangers, not skills; the taught skills are things like first aid, map-reading and the compass." }
    ]
  },
  {
    skill: "Summary",
    q: "Which sentence best sums up what happens in this story?",
    opts: [
      { t: "A fearful, unconfident girl named Marnie joins a demanding two-week alpine trip, and through completing hard tasks and finding she can lead, she comes home with real self-confidence.", ok: true, why: "Right. It covers the whole shape of the story, not just one part of it." },
      { t: "On a website, Marnie reads about the camping, cooking and rock-climbing skills the instructors will teach the group during the expedition.", why: "True, but too narrow. It covers only what she reads beforehand and misses the main point." },
      { t: "Difficult outdoor trips of this kind will always turn a shy, frightened young person into a bold and confident leader, however nervous they may feel at the very start of the journey.", why: "Too broad. It makes a sweeping claim about all such trips that the story never actually makes." },
      { t: "The base camp where Marnie’s expedition begins sits high up, at an altitude of about 1.6 kilometres above the level of the sea.", why: "A real detail, but a minor one. It is not what the story is mainly about." }
    ]
  }
];

const EVIDENCE = [
  {
    quote: "as scared of her own shadow as she was of bats, spiders, snakes and barking dogs",
    opts: [
      { t: "Her fearfulness is broad and general, not fixed on one single thing", ok: true, why: "Right. Listing several unrelated fears, plus “her own shadow”, shows fear as a general trait, not one phobia." },
      { t: "She has one serious phobia of animals that a doctor will need to treat", why: "This lists ordinary childhood fears for effect; it is not presented as a medical phobia needing treatment." },
      { t: "She secretly enjoys being frightened and goes looking for scary things", why: "The opposite is shown; being “scared” of these is a problem she means to overcome, not something enjoyed." },
      { t: "She is fearful because she grew up somewhere full of dangerous animals", why: "No reason for her fearfulness is given; it is stated simply as part of who she has always been." }
    ]
  },
  {
    quote: "It surprised her how much confidence she gained with each completed task",
    opts: [
      { t: "Her confidence builds gradually, from real achievements rather than all at once", ok: true, why: "Right. “With each completed task” shows a steady process built from repeated small successes." },
      { t: "Her confidence appears all at once the instant she first arrives at the mountain base camp", why: "It builds gradually “with each completed task”, not suddenly on arrival." },
      { t: "She is let down to find the tasks turning out far too easy for her", why: "She is surprised by her own growing confidence, not disappointed by the difficulty of the tasks." },
      { t: "Her confidence grows only because her teammates keep on praising her", why: "No praise from teammates is mentioned; the confidence comes from her own sense of achievement." }
    ]
  },
  {
    quote: "she could lead as well as follow, and she liked that feeling",
    opts: [
      { t: "She uncovers a capable, confident side of herself that surprises and pleases her", ok: true, why: "Right. Discovering she can lead, and enjoying it, marks a real change from the “meek and fearful” girl at the start." },
      { t: "She now flatly refuses ever to follow anyone else’s instructions on the trip again", why: "She finds she can do both, leading and following; she does not reject following from then on." },
      { t: "She is annoyed at being expected to take charge of the group", why: "The text says she “liked that feeling”, showing pleasure rather than annoyance at leading." },
      { t: "She decides that leading is far easier than the physical tasks", why: "The line compares nothing about difficulty; it is a discovery about herself, not a ranking of tasks." }
    ]
  },
  {
    quote: "an eagerness to expand her horizons",
    opts: [
      { t: "She now wants more new experiences and challenges, not fewer, after the trip", ok: true, why: "Right. “Expand her horizons” shows the fearful girl of paragraph one now actively seeking more." },
      { t: "She wants to return to this very same mountain and repeat the identical trip", why: "“Expand her horizons” means seeking new experiences broadly, not repeating this one trip." },
      { t: "She has decided adventure is far too dangerous ever to attempt again", why: "The opposite is shown: eagerness for more, not a decision to avoid adventure in future." },
      { t: "She plans to train as a professional mountain guide after leaving school", why: "No specific future career is mentioned; the line is about a general new eagerness, not a plan." }
    ]
  }
];

const EXPLAIN = [
  {
    claim: "Naming the problem directly at the start sets up the whole story.",
    quote: "Her lack of confidence became a greater problem as she approached Year 8",
    opts: [
      { t: "Marnie has always thought of herself as meek and fearful, scared of many ordinary things. This detail alone does not capture everything the passage actually says. Other parts of the text tell a rather different story from this one.", why: "Retelling. Explain what naming this problem so early actually sets up for the story." },
      { t: "Stating the problem so plainly in the first paragraph tells the reader exactly what the rest of the story will test: whether this fearfulness can genuinely change.", ok: true, why: "Strong. It explains how naming the problem early shapes what the reader expects from the rest of the story." },
      { t: "The story introduces a difficulty for the main character fairly early on.", why: "Too general. What specific difficulty, and what effect does naming it early actually have?" },
      { t: "This proves that Marnie will definitely fail the challenge she is about to attempt.", why: "A misreading. Naming a problem at the start of a story does not predict failure; the story goes on to show her succeeding." }
    ]
  },
  {
    claim: "Marnie's growing confidence is shown as a gradual, earned process.",
    quote: "It surprised her how much confidence she gained with each completed task",
    opts: [
      { t: "Marnie completes various tasks like camping, rock climbing and reading a map during the trip. This detail alone does not capture everything the passage actually says. Other parts of the text tell a rather different story from this one.", why: "Retelling. Explain how completing these tasks actually changes the way Marnie feels." },
      { t: "Confidence arriving “with each completed task”, rather than all at once, shows it being genuinely earned through repeated small successes, not simply granted to her by the trip.", ok: true, why: "Strong. It explains exactly why the wording shows a gradual, earned process rather than a sudden change." },
      { t: "Marnie becomes more confident at some point during the story's middle section.", why: "Too general. How does she become more confident, and why does that particular process matter?" },
      { t: "This proves that Marnie was secretly already confident before the trip even began.", why: "A misreading. The story presents her fearfulness at the start as genuine, not as a disguise hiding hidden confidence." }
    ]
  },
  {
    claim: "Discovering she can lead marks a real change in how Marnie sees herself.",
    quote: "she could lead as well as follow, and she liked that feeling",
    opts: [
      { t: "Marnie finds out during the trip that she is able to take charge of the group sometimes.", why: "Retelling. Explain why this particular discovery matters for how Marnie sees herself." },
      { t: "A girl introduced as “meek and fearful” discovering she can lead, and enjoying it, directly overturns how she described herself at the very start of the story.", ok: true, why: "Strong. It connects this specific discovery back to the opening description of Marnie, showing genuine change." },
      { t: "Marnie learns something new about herself at some point during the expedition.", why: "Too general. What exactly does she learn, and why does it matter for the story?" },
      { t: "This proves that Marnie will definitely become the leader of every future group she joins. This detail alone does not capture everything the passage actually says. Other parts of the text tell a rather different story from this one.", why: "A misreading. The story shows one discovery about her own capability, not a guaranteed future role." }
    ]
  },
  {
    claim: "The final paragraph directly answers the story's opening problem.",
    quote: "She had developed new self-confidence and an eagerness to expand her horizons",
    opts: [
      { t: "Marnie returns home from the trip feeling proud of herself and full of new energy.", why: "Retelling. Explain how this ending specifically connects back to the start of the story." },
      { t: "This final line directly answers the “lack of confidence” named as Marnie's problem in the first paragraph, showing exactly how far she has come by the story's end.", ok: true, why: "Strong. It ties the ending explicitly back to the specific problem stated at the very start." },
      { t: "The story finishes by describing how Marnie feels once the whole trip is over.", why: "Too general. What specifically has changed in how she feels, compared to the beginning?" },
      { t: "This proves that Marnie will never feel afraid or nervous about anything again in her whole life. This detail alone does not capture everything the passage actually says. Other parts of the text tell a rather different story from this one.", why: "A misreading. The story shows growth in confidence, not a promise that fear will never return." }
    ]
  },
  {
    claim: "The opening description gives Marnie's change something to be measured against.",
    quote: "Marnie had always thought of herself as meek and fearful",
    opts: [
      { t: "Marnie describes herself, right near the start of the story, as someone who has always been meek and fearful. This detail alone does not capture everything the passage actually says. Other parts of the text tell a rather different story from this one.", why: "Retelling. Explain what setting up this description so early actually achieves for the story." },
      { t: "Establishing Marnie as “meek and fearful” from the very first line gives the reader a clear starting point, so her later growth into someone confident feels like a real, earned change rather than an unexplained one.", ok: true, why: "Strong. It explains what the early description achieves for how the ending is later read." },
      { t: "The story describes what kind of person the main character is fairly early on.", why: "Too general. What kind of person, and why does establishing that early actually matter?" },
      { t: "This proves that Marnie will stay meek and fearful for the whole rest of the story.", why: "A misreading. The opening sets up a starting point for change, not a fixed trait that never shifts." }
    ]
  }
];
TEXTS.push({ id: "new-heights", type: "Fiction", mode: "Creative", form: "Short story", level: "5ème",
  hook: "A girl who is scared of almost everything signs up for a two-week trip up a mountain, and comes back someone else.",
  TEXT, ANNOTATE, QUESTIONS, EVIDENCE, EXPLAIN });
}


/* ================================================================
   TEXT 33 · Fiction · Creative · Descriptive story · 5ème
   ================================================================ */
{
const TEXT = {
  title: "Clock Watching",
  paras: [
    "Many who pass through this immense, majestic train station take an occasional glance in my direction. I, meanwhile, have been observing them all for years from my bird’s-eye perspective. I, you see, am an oversized clock perched high upon the wall.",
    "At the moment, my hour hand is on the 10 and my minute hand is on the 12. That means the morning rush hour is winding down. But the concourse is still an obstacle course of scurrying people – some zig-zagging alone in the hall, others in pairs or groups. There’s the usual assortment of commuters, looking purposeful or befuddled, harried or calm. They scoot past each other, not making eye contact, or bump into one another and apologise. They stop and chat. They assist one another by retrieving dropped papers or luggage. It’s the same old bustling scene that plays out here every weekday.",
    "In a short while, the station will calm down enough for me to focus on what I really like watching – the entertainment. That’s a part of life here that frequently does change. Of the collection of clowns, jugglers, musician and others that call this great hall their stage, my favourites are the people in costume. It warms my clock heart to see their plastic buckets fill with change.",
    "I still fondly remember the guy dressed as Big Ben. His costume looked like the famed clock tower complete with chimes that rang on the hour. Sadly, he found another stage. This month’s crowd favourite seems to be the Statue of Liberty, right now encircled by onlookers seemingly bewitched by every slight, silent tilt of her crowned, green head. Ah, but what’s this I see – a newcomer? Yes, it’s a dancing hot dog coated with mustard. This fellow is siphoning away some of the statue’s gawkers. Maybe people are hungrier than they know. Oh, I love this station."
  ]
};

const ANNOTATE = [
  {
    skill: "Point of view",
    prompt: "Find the line that finally reveals <em>what</em> the narrator actually is.",
    target: ["I, you see, am an oversized clock perched high upon the wall"],
    decoys: [{ phrase: "take an occasional glance in my direction", why: "This hints that people look at the narrator, but it never says what the narrator is." }],
    miss: "Look at the last sentence of the first paragraph.",
    explain: "The writer holds the reveal back for two sentences. Once you know the narrator is a wall clock, its “bird’s-eye perspective” and its years of watching suddenly make sense."
  },
  {
    skill: "Vocabulary",
    prompt: "Find the pair of opposites that helps you work out what <em>befuddled</em> means.",
    target: ["looking purposeful or befuddled, harried or calm"],
    decoys: [{ phrase: "They stop and chat", why: "This describes something commuters do, but it gives no clue about the meaning of the word." }],
    miss: "Look in the second paragraph, at how the commuters are described.",
    explain: "The words come in contrasting pairs: harried against calm, and purposeful against befuddled. If purposeful means knowing exactly where you are going, befuddled must mean confused."
  },
  {
    skill: "Word choice",
    prompt: "Find where <em>change</em> is used to mean coins rather than things altering.",
    target: ["plastic buckets fill with change"],
    decoys: [{ phrase: "That’s a part of life here that frequently does change", why: "Here “change” means altering. That is the other meaning of the same word, a few lines earlier." }],
    miss: "Look at the last sentence of the third paragraph.",
    explain: "The same word carries two meanings in one paragraph. Reading around it is the only way to tell them apart: buckets can fill with coins, not with things altering."
  },
  {
    skill: "Vocabulary",
    prompt: "Find the earlier word that means almost the same as <em>gawkers</em>.",
    target: ["encircled by onlookers"],
    decoys: [{ phrase: "crowd favourite", why: "This describes the performer, not the people standing and staring at her." }],
    miss: "Look a little earlier in the same paragraph, at the people around the Statue of Liberty.",
    explain: "“Onlookers” and “gawkers” describe the same crowd, only a few lines apart. A nearby word with a similar meaning is one of the most useful context clues there is."
  },
  {
    skill: "Vocabulary",
    prompt: "Find the phrase showing that the hot dog is slowly pulling the crowd away from the statue.",
    target: ["siphoning away some of the statue’s gawkers"],
    decoys: [{ phrase: "Oh, I love this station", why: "This is the clock’s closing feeling about the station, not a clue about what the newcomer is doing." }],
    miss: "Look near the end of the final paragraph, just after the hot dog appears.",
    explain: "To siphon is to draw something off gradually. The word “away”, plus the word “some”, tells you the hot dog is taking part of the statue’s audience, not all of it at once."
  }
];

const QUESTIONS = [
  {
    skill: "Vocabulary in context",
    q: "“But the concourse is still an obstacle course of scurrying people.” What is the concourse?",
    opts: [
      { t: "The large open hall that people cross inside the station", ok: true, why: "Right. The next words place the people “in the hall”, and later the text calls it “this great hall”." },
      { t: "The rush of travellers hurrying to catch their morning trains", why: "That describes the people in the concourse, not the concourse itself, which is the space they move through." },
      { t: "The raised walkway the clock is fixed to, high above the floor", why: "The clock is on the wall; the concourse is the floor below, where the commuters “scoot past each other”." },
      { t: "A quieter side room where the street performers set up their stage", why: "The performers use “this great hall” too; the concourse is that same busy main hall, not a side room." }
    ]
  },
  {
    skill: "Vocabulary",
    q: "“...looking purposeful or befuddled, harried or calm.” What does “befuddled” mean?",
    opts: [
      { t: "Confused, the opposite of knowing just where you are going", ok: true, why: "Right. The words come in opposite pairs, so “befuddled” must be the opposite of “purposeful”." },
      { t: "Rushed and flustered, with barely any time at all to spare", why: "That is closer to “harried”; “befuddled” is paired against “purposeful”, so it means confused." },
      { t: "Relaxed and quite untroubled about the journey that lies ahead", why: "That is closer to “calm”; “befuddled” is the opposite of “purposeful”, not of “harried”." },
      { t: "Travelling alone rather than in one of the pairs or groups", why: "Travelling alone is mentioned separately; “befuddled” is about a traveller’s state of mind, not their company." }
    ]
  },
  {
    skill: "Word choice",
    q: "The word “change” appears twice in the third paragraph. How do the two uses differ?",
    opts: [
      { t: "The first means things altering; the second means coins", ok: true, why: "Right. Entertainment “frequently does change” (alters), and buckets “fill with change” (money)." },
      { t: "The first means coins given by the crowd; the second means the acts altering", why: "It is the other way round: the altering meaning comes first, and the coins meaning comes last." },
      { t: "The first is about the performers; the second is about the earlier commuters", why: "Both uses sit in the third paragraph and both belong to the performers’ world, not the commuters." },
      { t: "The first hints at coins; the second hints at the seasons turning outside", why: "Neither use is about seasons; the second clearly means the coins filling the buckets." }
    ]
  },
  {
    skill: "Point of view",
    q: "How does the narrator’s position affect what it can tell us?",
    opts: [
      { t: "Fixed high on one wall, it sees the whole hall but never leaves this one spot", ok: true, why: "Right. The clock has a “bird’s-eye perspective” over everything below, yet can never follow anyone out." },
      { t: "High above the crowd, it can catch every private word the commuters exchange", why: "It watches from above rather than listening in; it notices what people do, not what they quietly say." },
      { t: "Perched up high, it can follow its favourite performers home once they finish", why: "The clock cannot move; when Big Ben “found another stage”, the clock simply loses sight of him." },
      { t: "Set above the doors, it can watch the trains and the streets outside as well", why: "It watches the concourse inside the great hall; the world outside the station is beyond its view." }
    ]
  },
  {
    skill: "Vocabulary",
    q: "Which word in the final paragraph helps you most to work out what “gawkers” means?",
    opts: [
      { t: "“onlookers”, used a few lines earlier for the very same crowd", ok: true, why: "Right. Both words name the people standing around staring at the Statue of Liberty performer." },
      { t: "“bewitched”, which describes how that watching crowd feels", why: "“Bewitched” tells you how the crowd feels, but “onlookers” is the word that actually names the same people as “gawkers”." },
      { t: "“newcomer”, used just before the dancing hot dog is described", why: "“Newcomer” is the hot dog performer, not the crowd standing and watching." },
      { t: "“favourite”, used for the performer the crowd gathers around", why: "“Favourite” describes the performer, not the people watching, so it does not define “gawkers”." }
    ]
  },
  {
    skill: "Summary",
    q: "Which sentence best sums up what happens in this text?",
    opts: [
      { t: "A station clock describes the weekday crowds passing below it, then turns to the costumed street performers it most enjoys watching, including a dancing hot dog who has just arrived.", ok: true, why: "Right. It covers the whole shape of the text, not just one part of it." },
      { t: "The clock reads its own hands, hour on the 10 and minute on the 12, and works out that the morning rush hour is slowly winding down.", why: "True, but too narrow. It covers only the opening moment and misses the main point." },
      { t: "Big, grand old railway stations in the heart of a busy city are really far too loud and crowded for anyone at all to enjoy lingering in them for very long on any ordinary weekday morning.", why: "Too broad. It makes a general claim about stations that the text never actually makes." },
      { t: "One performer the clock recalls fondly was a man dressed as Big Ben, in a costume so complete that it even chimed on the hour.", why: "A real detail, but a minor one. It is not what the text is mainly about." }
    ]
  }
];

const EVIDENCE = [
  {
    quote: "an obstacle course of scurrying people",
    opts: [
      { t: "The hall is so crowded that crossing it takes effort and dodging", ok: true, why: "Right. An obstacle course has to be picked through carefully, which is how the commuters move." },
      { t: "The station has set up barriers that block the way across the hall", why: "The obstacles are the hurrying people themselves, not any barriers the station has put up." },
      { t: "The commuters are taking part in some kind of organised race", why: "It is an ordinary weekday rush; the “course” is only a way of picturing the busy crowd." },
      { t: "The hall has almost emptied, so people stroll straight across it", why: "The rush is only winding down; the concourse is still busy with scurrying people." }
    ]
  },
  {
    quote: "looking purposeful or befuddled, harried or calm",
    opts: [
      { t: "The commuters are sorted into pairs of opposite types", ok: true, why: "Right. Each pair sets one type against another, which also quietly gives the meaning of the harder words." },
      { t: "Every commuter in the hall is feeling one and the same way", why: "The opposites show variety in the crowd, not that everyone feels alike." },
      { t: "All of the commuters are late and panicking about their trains", why: "Some are “calm”; being harried is only one of the states listed here." },
      { t: "The clock is naming four real people it has come to know well", why: "These are types within the crowd generally, not four particular individuals." }
    ]
  },
  {
    quote: "encircled by onlookers seemingly bewitched",
    opts: [
      { t: "The performer holds her audience perfectly still and spellbound", ok: true, why: "Right. To be bewitched is to be held as if by a spell, fitting a crowd standing in a ring, watching." },
      { t: "The onlookers truly believe real magic is happening before them", why: "“Seemingly bewitched” is a comparison; no one in the scene thinks it is actual magic." },
      { t: "The crowd is growing bored and drifting towards the station exits", why: "They drift only later, when the hot dog arrives; here they are held fast by her performance." },
      { t: "The performer moves fast and boldly to keep the crowd amused", why: "Her movements are “slight” and “silent”, which is what makes the crowd’s fascination striking." }
    ]
  },
  {
    quote: "This fellow is siphoning away some of the statue’s gawkers",
    opts: [
      { t: "The newcomer is gradually drawing part of the crowd away", ok: true, why: "Right. To siphon is to draw off little by little, and “some” shows he takes only part of her audience." },
      { t: "The newcomer has pulled the whole crowd off the statue at once", why: "The word “some” shows he draws off only a portion of the watching crowd, not all of it." },
      { t: "The statue performer has given up and gone to find a new stage", why: "It was Big Ben who “found another stage”; the statue is still performing right now." },
      { t: "The two performers have teamed up to share the coins they earn", why: "Nothing shows them cooperating; one is quietly taking part of the other’s crowd." }
    ]
  }
];

const EXPLAIN = [
  {
    claim: "The writer delays telling us what the narrator is.",
    quote: "I, you see, am an oversized clock perched high upon the wall",
    opts: [
      { t: "The narrator explains that it is a large clock which has been fixed high up on the wall of the busy train station, and that it has been quietly watching the travellers below for many years now.", why: "Retelling. Explain what holding this information back until now actually does for the reader." },
      { t: "Two sentences pass before the reveal, so the reader first pictures a person watching; the correction then makes “bird’s-eye perspective” and years of watching suddenly fit.", ok: true, why: "Strong. It explains the delay, the reader’s first assumption, and how the reveal reorganises the earlier details." },
      { t: "The story tells us something surprising about who is speaking at the end of the first paragraph of the text.", why: "Too general. What is surprising about it, and what does the surprise achieve for the reader?" },
      { t: "This proves that the writer forgot to explain who the narrator was and had to add the information in late.", why: "A misreading. The delay is deliberate: it sets up a small surprise and makes the earlier hints pay off." }
    ]
  },
  {
    claim: "Opposites in the sentence give away the meaning of a hard word.",
    quote: "looking purposeful or befuddled, harried or calm",
    opts: [
      { t: "The commuters walking through the station hall are described using four different words in the second paragraph, which comes shortly after the clock tells us the morning rush hour is winding down.", why: "Retelling. Explain how the arrangement of those words helps a reader who is stuck." },
      { t: "The words arrive in contrasting pairs, so “befuddled” must be the opposite of “purposeful”; the sentence quietly defines a difficult word without ever stopping to explain it.", ok: true, why: "Strong. It identifies the pattern of opposites and shows exactly how a reader can use it to unlock the word." },
      { t: "The writer uses some words in this sentence that a reader of this age might not already know well.", why: "Too general. Which words, and what in the sentence helps with them?" },
      { t: "This proves that all four of these words mean roughly the same thing, since they appear in one list together.", why: "A misreading. They are set against each other in pairs, which is the opposite of meaning the same thing." }
    ]
  },
  {
    claim: "One word is made to carry two different meanings.",
    quote: "plastic buckets fill with change",
    opts: [
      { t: "People passing through the great hall drop coins into the plastic buckets that the costumed street performers have left out on the floor beside them for that purpose.", why: "Retelling. Explain why this particular word is worth noticing in this paragraph." },
      { t: "“Change” meant altering a few lines earlier and means coins here; only the words around it decide which, and the bucket is what settles it.", ok: true, why: "Strong. It names both meanings and shows which clue in the sentence tells them apart." },
      { t: "The writer uses the same word more than once within a single paragraph of the story.", why: "Too general. What are the two meanings, and how does a reader tell which is which?" },
      { t: "This proves the performers are paid by the station itself rather than by the members of the public who watch them.", why: "A misreading. Money going into their own buckets shows the opposite: they are paid by passers-by." }
    ]
  },
  {
    claim: "A nearby word gives the meaning of an unfamiliar one.",
    quote: "encircled by onlookers",
    opts: [
      { t: "A crowd of people stands in a ring around the performer who is dressed as the Statue of Liberty, watching her closely as she makes her small, slow movements in the middle of the hall.", why: "Retelling. Explain how this phrase helps with a word that appears a little later." },
      { t: "“Onlookers” describes the same crowd that becomes “gawkers” a few lines later, so the earlier, easier word hands the reader the meaning of the harder one.", ok: true, why: "Strong. It connects the two words, notes the order they appear in, and explains how one unlocks the other." },
      { t: "The writer describes the people who are standing around watching the statue performer at this point.", why: "Too general. Which later word does this help with, and how exactly?" },
      { t: "This proves that “onlookers” and “gawkers” are two completely separate groups of people in the station.", why: "A misreading. Both words describe one crowd: the people watching the Statue of Liberty." }
    ]
  },
  {
    claim: "The verb shows the crowd being taken gradually, not all at once.",
    quote: "siphoning away some of the statue’s gawkers",
    opts: [
      { t: "A performer dressed as a dancing hot dog covered in mustard arrives in the great hall as a newcomer, and starts attracting some of the watching people over to come and see him instead.", why: "Retelling. Explain what this particular verb choice adds to the picture." },
      { t: "Siphoning draws something off slowly and steadily, and “some” confirms it: the hot dog is quietly bleeding part of her audience away rather than emptying it.", ok: true, why: "Strong. It explains the verb’s meaning and links it to the word “some” to show the effect is gradual and partial." },
      { t: "The writer chooses an interesting verb here to describe what the new performer is doing to the crowd.", why: "Too general. What does that verb mean, and what does it suggest about how the crowd moves?" },
      { t: "This proves the statue performer has now lost her whole audience and will have to leave the station.", why: "A misreading. The word “some” shows she keeps part of her crowd; nothing says she leaves." }
    ]
  }
];
TEXTS.push({ id: "clock-watching", type: "Fiction", mode: "Creative", form: "Descriptive story", level: "5ème",
  hook: "A station clock has watched the same rush hour for years, and has opinions about the street performers below.",
  TEXT, ANNOTATE, QUESTIONS, EVIDENCE, EXPLAIN });
}

/* ================================================================
   TEXT 34 · Fiction · Creative · Historical fiction · 5ème
   ================================================================ */
{
const TEXT = {
  title: "Bienvenue, Mr Lindbergh!",
  intro: "Historical fiction, set in Paris in 1927, on the night Charles Lindbergh completed the first solo non-stop flight across the Atlantic.",
  paras: [
    "It was a good thing Marcelle’s family had left early for the airfield, since the traffic jam was the worst Paris had ever seen. Thousands were gathering on that summer night in 1927, eager to witness history being made. Many car headlights remained on, ringing the grassy field with light, illuminating it for the brave pilot and his small, unstable plane. All eyes were on the night sky, and the buzz of excitement was palpable.",
    "Charles Lindbergh circled the Eiffel Tower before making for the lit-up target north-east of the city. When, after more than 33 non-stop hours in the air, the bold aviator safely touched down at 10:22, he encountered a scene of instant pandemonium. Exultant people toppled a chain-link fence and raced across the field for a closer look at him and his Spirit of St Louis. Marcelle was among them.",
    "“Wow,” she exclaimed as she approached the monoplane. “Not only is it so tiny, all it’s got is a cramped, one-seat cockpit and a single engine. Plus, it’s covered only in fabric!”",
    "“And look,” her dad added, “there’s no window in the front – he must’ve had to look out the side to see where he was going!”",
    "While the family investigated the plane and others swarmed over it, grabbing what they could as souvenirs, hundreds of others thronged around the startled Lindbergh. The exhausted hero seemed overwhelmed as they carried him off the field, tugging at his coat and yanking at his leather helmet. Marcelle swore she spotted the famous dancer Isadora Duncan among them, caught her eye and earned a smile.",
    "When Marcelle finally got back home, she couldn’t sleep, for witnessing the conclusion of the first transatlantic flight was the experience of a lifetime. But she didn’t mind; Lindbergh hadn’t slept either."
  ]
};

const ANNOTATE = [
  {
    skill: "Vocabulary",
    prompt: "Find the earlier phrase that tells you what an <em>aviator</em> is.",
    target: ["the brave pilot and his small, unstable plane"],
    decoys: [{ phrase: "eager to witness history being made", why: "This tells you why the crowd came, not what kind of person Lindbergh is." }],
    miss: "Look in the first paragraph, at how the crowd’s hero is described before he is named.",
    explain: "“Pilot” and “aviator” name the same man one paragraph apart. When a hard word turns up, an easier word for the same thing is often sitting nearby, already used."
  },
  {
    skill: "Vocabulary",
    prompt: "Find the actions that show what <em>pandemonium</em> looks like.",
    target: ["toppled a chain-link fence and raced across the field"],
    decoys: [{ phrase: "circled the Eiffel Tower", why: "This is what the plane does before landing. The pandemonium happens on the ground, afterwards." }],
    miss: "Look at the sentence straight after the word “pandemonium”.",
    explain: "The writer does not define the word; the next sentence acts it out instead. A fence going down and a crowd running across a field is wild, noisy disorder."
  },
  {
    skill: "Vocabulary",
    prompt: "Find the details Marcelle gives that help explain what a <em>monoplane</em> is.",
    target: ["a cramped, one-seat cockpit and a single engine"],
    decoys: [{ phrase: "there’s no window in the front", why: "A true detail about the plane, but it comes from her dad and describes the view, not the machine’s size." }],
    miss: "Look at what Marcelle says as she walks up to the plane.",
    explain: "The clues do not give a full dictionary meaning, but they give enough: a small, simple aircraft with one seat and one engine. Often that is all a context clue needs to do."
  },
  {
    skill: "Vocabulary",
    prompt: "Find the word describing the crowd around the plane that means nearly the same as <em>thronged</em>.",
    target: ["others swarmed over it"],
    decoys: [{ phrase: "grabbing what they could as souvenirs", why: "This says what the crowd’s hands are doing, not how many of them there are or how they move." }],
    miss: "Look at the start of the fifth paragraph, at the people around the plane.",
    explain: "“Swarmed” and “thronged” appear in the same sentence, describing two crowds doing the same thing. One word you know can unlock another you do not, in the same breath."
  },
  {
    skill: "Vocabulary",
    prompt: "Find the phrase that helps you work out what <em>palpable</em> means.",
    target: ["the buzz of excitement was palpable"],
    decoys: [{ phrase: "All eyes were on the night sky", why: "This shows where the crowd is looking, but it says nothing about how strongly the excitement is felt." }],
    miss: "Look at the very last words of the first paragraph.",
    explain: "A “buzz” is something you can almost feel as well as hear. Pairing it with “palpable” tells you the excitement was strong enough to seem physical, not just imagined."
  }
];

const QUESTIONS = [
  {
    skill: "Vocabulary in context",
    q: "“Exultant people toppled a chain-link fence...” What does “exultant” mean?",
    opts: [
      { t: "Overjoyed and celebrating", ok: true, why: "Right. They have waited hours to see history made, and now surge across the field to reach the plane." },
      { t: "Impatient after a long and frustrating wait", why: "Nothing shows frustration; they have come to celebrate and rush forward the instant he lands." },
      { t: "Anxious about the pilot’s dangerous landing", why: "The plane has already “safely touched down”; their reaction is joy at success, not fear." },
      { t: "Curious to inspect an unfamiliar machine", why: "Curiosity comes later, at the plane; “exultant” names the crowd’s joy as they break through the fence." }
    ]
  },
  {
    skill: "Vocabulary",
    q: "A reader does not know the word “pandemonium”. Which nearby words help most?",
    opts: [
      { t: "A fence being toppled and people racing across the field", ok: true, why: "Right. The next sentence shows the disorder rather than explaining it, which is the clue the reader needs." },
      { t: "The pilot “safely” landing his plane just moments before", why: "A safe landing is calm; “pandemonium” is the wild scene that follows, shown by the fence and the running crowd." },
      { t: "The “buzz of excitement” felt in the paragraph before", why: "The buzz comes before he lands; “pandemonium” is defined by the disorder right after, in the next sentence." },
      { t: "The “33 non-stop hours” the long flight had taken", why: "The hours describe the flight’s length, not the scene on the ground that “pandemonium” names." }
    ]
  },
  {
    skill: "Word choice",
    q: "The crowd is “exultant”, but Lindbergh is “startled”, “exhausted” and “overwhelmed”. What does this contrast show?",
    opts: [
      { t: "One night feels utterly different to the crowd and to the man at its centre", ok: true, why: "Right. For them it is a celebration; for him, after 33 hours alone, it is a wall of noise and hands." },
      { t: "The crowd’s bright mood slowly spreads across to Lindbergh too as they carry him off the field", why: "His words stay “startled” and “overwhelmed”; the contrast is kept, not blended into one shared mood." },
      { t: "Lindbergh is angry at the crowd for damaging his precious aircraft", why: "He is overwhelmed, not angry, and the crowd swarms over the plane freely without his protest." },
      { t: "The crowd’s joy fades once they see how exhausted the pilot really is", why: "Their joy does not fade; hundreds keep pressing in and carry him off the field." }
    ]
  },
  {
    skill: "Inference",
    q: "Why does Marcelle say she did not mind being unable to sleep?",
    opts: [
      { t: "The night felt worth it, and a sleepless night links her to her hero", ok: true, why: "Right. The final joke links her excitement to Lindbergh’s 33 hours awake, making the lost sleep part of the thrill." },
      { t: "She knows she can easily catch up on all the sleep she has lost tomorrow", why: "No next day is mentioned; her reason looks back at the night, not forward to resting." },
      { t: "She is still too shaken by the enormous traffic jam to settle down", why: "The traffic is from the start of the evening, not what keeps her awake at the end." },
      { t: "She had already napped during the long wait for the plane to arrive", why: "Nothing suggests she slept at the field; she was in the crowd racing towards the plane." }
    ]
  },
  {
    skill: "Ending",
    q: "Why does the story end with “Lindbergh hadn’t slept either”?",
    opts: [
      { t: "It joins the girl and the pilot together in one light closing joke", ok: true, why: "Right. Her sleepless excitement and his 33 sleepless hours sit side by side, ending the night on a smile." },
      { t: "It hints the pilot’s tiredness will soon lead to trouble for him", why: "No later trouble is suggested; the line is a warm, playful note to finish on." },
      { t: "It quietly explains why the plane touched down as late as 10:22", why: "The ending is about sleep, not the landing time, which is given earlier." },
      { t: "It reveals Marcelle stayed up hoping to meet the pilot the next morning", why: "There is no next-day meeting; she is simply too thrilled by the night to sleep." }
    ]
  },
  {
    skill: "Summary",
    q: "Which sentence best sums up what happens in this text?",
    opts: [
      { t: "A girl named Marcelle joins the huge Paris crowd greeting Charles Lindbergh’s landing in 1927, gets close enough to study his tiny plane, and goes home far too excited to sleep.", ok: true, why: "Right. It covers the whole shape of the text, not just one part of it." },
      { t: "Marcelle’s father notices that the little plane has no window at the front, so the pilot must have looked out of the side to see ahead.", why: "True, but too narrow. It covers only one remark and misses the main point." },
      { t: "Whenever a great crowd gathers to celebrate a famous hero, the excitement nearly always ends with the hero’s belongings being pulled apart and carried off as keepsakes by the admirers who came.", why: "Too broad. It makes a sweeping claim about crowds that the text never actually makes." },
      { t: "Marcelle was sure she caught sight of the famous dancer Isadora Duncan in the crowd, and that the dancer even smiled back at her.", why: "A real detail, but a minor one. It is not what the text is mainly about." }
    ]
  }
];

const EVIDENCE = [
  {
    quote: "the buzz of excitement was palpable",
    opts: [
      { t: "The excitement is so strong it can almost be physically felt", ok: true, why: "Right. A “buzz” is close to something you can feel as well as hear, which is what “palpable” adds." },
      { t: "The crowd has grown so loud that no one can make themselves heard", why: "“Buzz” names a mood you can feel, not a noise so loud it drowns out every voice." },
      { t: "The crowd’s excitement is quietly fading as the long wait drags on", why: "The excitement is at its height as all eyes watch the sky; it is not fading." },
      { t: "The crowd stands in silence, unsure the pilot will really appear", why: "A “buzz” of excitement is not silence, and they have gathered sure that history is being made." }
    ]
  },
  {
    quote: "he encountered a scene of instant pandemonium",
    opts: [
      { t: "The calm of the landing breaks at once into wild disorder", ok: true, why: "Right. “Instant” marks the switch, and the next sentence shows the fence down and the crowd running." },
      { t: "The crowd had been carefully organised and held back before he landed", why: "A toppled fence and a crowd racing across the field is the opposite of an organised scene." },
      { t: "Lindbergh circled a long time in confusion before he could land", why: "He “safely touched down” first; the pandemonium is on the ground, after the landing." },
      { t: "The disorder built up slowly over the course of the whole evening", why: "“Instant” marks a sudden switch the moment he lands, not a slow build-up." }
    ]
  },
  {
    quote: "hundreds of others thronged around the startled Lindbergh",
    opts: [
      { t: "A vast crowd presses in on a man who did not expect it", ok: true, why: "Right. “Thronged” gives the size and crush of the crowd, while “startled” gives his reaction to it." },
      { t: "A few officials guide the tired pilot calmly away from the crowd", why: "It is hundreds of ordinary people pressing in, not a small official party escorting him." },
      { t: "The crowd hangs back out of respect once they see he is tired", why: "They do not hang back; they surround him and carry him off the field." },
      { t: "Lindbergh had planned this welcome and was ready for the crowd", why: "He is “startled”, which shows the size of the welcome caught him off guard." }
    ]
  },
  {
    quote: "tugging at his coat and yanking at his leather helmet",
    opts: [
      { t: "The crowd’s excitement has turned into something physically overwhelming", ok: true, why: "Right. Their enthusiasm becomes hands pulling at his clothes, which is why he “seemed overwhelmed”." },
      { t: "The crowd has suddenly turned hostile and is furious that he arrived late", why: "They celebrate him; the grabbing is eager enthusiasm, not anger." },
      { t: "The pilot is stripping off his own flying gear in the warm night", why: "It is the crowd’s hands doing the tugging and yanking, not Lindbergh undressing." },
      { t: "Helpers are carefully easing the exhausted pilot out of his kit", why: "These are the hundreds who “thronged” around him, not helpers gently assisting." }
    ]
  }
];

const EXPLAIN = [
  {
    claim: "An easier word earlier in the text unlocks a harder one later.",
    quote: "the brave pilot and his small, unstable plane",
    opts: [
      { t: "The first paragraph describes the man that everybody has come out to the airfield to see as a brave pilot, flying a small and unstable plane through the night sky.", why: "Retelling. Explain how this phrase helps with a word that appears in the next paragraph." },
      { t: "“Pilot” and “aviator” name the same man a paragraph apart, so the easier word already used is what tells the reader who the “bold aviator” must be.", ok: true, why: "Strong. It links the two words, notes their order, and explains how the earlier one supplies the meaning." },
      { t: "The writer describes Charles Lindbergh in two different ways at two points in this story.", why: "Too general. Which two ways, and how does one of them help with the other?" },
      { t: "This proves that the pilot and the aviator mentioned in the story are two separate men at the airfield.", why: "A misreading. Both phrases describe Lindbergh; there is only one flyer in the story." }
    ]
  },
  {
    claim: "The writer shows what a hard word means instead of explaining it.",
    quote: "toppled a chain-link fence and raced across the field",
    opts: [
      { t: "After Lindbergh has safely landed his aeroplane on the field, the waiting crowd knocks over a chain-link fence and runs across the grass towards him for a closer look at the machine.", why: "Retelling. Explain what this sentence does for a reader who does not know “pandemonium”." },
      { t: "The word “pandemonium” is never defined; the sentence acts it out instead, and a fence going down with a crowd stampeding across a field is disorder made visible.", ok: true, why: "Strong. It identifies the technique of showing rather than defining and explains how the image carries the meaning." },
      { t: "The writer describes what the crowd did immediately after the aeroplane had landed safely.", why: "Too general. What word does this description help with, and how?" },
      { t: "This proves that the crowd at the airfield that night had come intending to cause damage and trouble.", why: "A misreading. The damage comes from excitement at a historic moment, not from any intention to cause trouble." }
    ]
  },
  {
    claim: "Dialogue can carry the clues for an unfamiliar word.",
    quote: "a cramped, one-seat cockpit and a single engine",
    opts: [
      { t: "Marcelle walks up to the aeroplane after racing across the field with the rest of the crowd, and says out loud to the people nearby that the machine is tiny and that it is covered only in fabric.", why: "Retelling. Explain how what she says helps a reader stuck on the word “monoplane”." },
      { t: "Her excited description does not define “monoplane”, but it gives enough to keep reading: a small, simple aircraft built for one. Context clues often supply enough rather than everything.", ok: true, why: "Strong. It explains what the clues do supply, and makes the honest point that clues need not give a full definition." },
      { t: "A character in the story describes the aeroplane in some detail when she gets close to it.", why: "Too general. Which details, and what do they let the reader work out?" },
      { t: "This proves that Marcelle already knew a great deal about how aeroplanes were built in the 1920s.", why: "A misreading. She is describing what is in front of her with surprise, not showing expert knowledge." }
    ]
  },
  {
    claim: "Words chosen for Lindbergh pull against the words chosen for the crowd.",
    quote: "The exhausted hero seemed overwhelmed",
    opts: [
      { t: "Lindbergh is tired after his long flight across the ocean, and the crowd of people who have gathered at the airfield to greet him carries him away bodily across the grass of the field.", why: "Retelling. Explain what the difference between his words and the crowd’s words achieves." },
      { t: "“Exultant” and “thronged” belong to the crowd, while “startled”, “exhausted” and “overwhelmed” belong to him; one night is split into two very different experiences.", ok: true, why: "Strong. It sets the two sets of words against each other and explains what the contrast reveals about the moment." },
      { t: "The writer uses several different describing words in this part of the story about the pilot.", why: "Too general. Which words, and what do they show when set beside the crowd’s?" },
      { t: "This proves that Lindbergh regretted making the flight and wished that he had stayed at home instead.", why: "A misreading. Being exhausted and overwhelmed by a crowd is not the same as regretting the journey." }
    ]
  },
  {
    claim: "The closing line connects the girl and the pilot.",
    quote: "Lindbergh hadn’t slept either",
    opts: [
      { t: "Marcelle finally gets home again after the landing at the airfield, and once she is there she finds that she is still far too excited by everything she has seen to fall asleep.", why: "Retelling. Explain what the final clause adds beyond telling us she stayed awake." },
      { t: "Her sleepless excitement is set beside his 33 sleepless hours in the air, so the word “either” quietly links an ordinary girl to the hero she has just seen.", ok: true, why: "Strong. It explains the link the final word makes and why that ends the story on a warm note." },
      { t: "The story finishes with a short remark about the pilot after describing Marcelle’s journey home.", why: "Too general. What does that remark do, and why end there?" },
      { t: "This proves that Marcelle actually met Lindbergh personally and spoke with him about his flight.", why: "A misreading. She never speaks to him; the link is made by the narrator, not by a meeting." }
    ]
  }
];
TEXTS.push({ id: "mr-lindbergh", type: "Fiction", mode: "Creative", form: "Historical fiction", level: "5ème",
  hook: "Paris, 1927. A girl in the crowd gets close enough to touch the plane that has just crossed the Atlantic.",
  TEXT, ANNOTATE, QUESTIONS, EVIDENCE, EXPLAIN });
}

/* ================================================================
   TEXT · Fiction · Compare & contrast · 5ème
   Scholastic, Close Reading Fiction Ages 11+, pp. 44–45
   Annotate stage focuses on compare-and-contrast signal words,
   similarities and differences.
   ================================================================ */
{
const TEXT = {
  title: "Theatres New and Old",
  intro: "Scholastic, Close Reading Fiction Ages 11+. On the same April day, Zack watches a play in the modern Milton Keynes Theatre while his aunt Viola explores the ancient outdoor theatre at Epidaurus in Greece.",
  paras: [
    "Like his classmates, Zack was eager for the show to begin. They sat in the Milton Keynes Theatre, there to see The Frogs, a play by the Greek playwright Aristophanes. Inside the theatre, most of the comfortable seats were filled; the room was abuzz. The large, modern theatre, which opened in 1999, was colourful and welcoming. Compared to the storm raging outside, it was cosy.",
    "On the same April day, Zack’s aunt Viola was 3400 kilometres away exploring the ancient outdoor theatre at Epidaurus, Greece. That symmetrical stone venue, built nearly 2400 years ago, was carved into a natural hillside, where warm spring breezes rustled the leaves of trees that formed a living backdrop. This amphitheatre, which can accommodate over 12,000 visitors on its hard stone benches, is still used for plays and events. However, no play was being performed that day.",
    "Back in Milton Keynes, an announcer asked everyone to turn off all electronic devices as the house lights dimmed. Actors quietly entered to take their places. Zack took a last glance at his programme and focused on the stage.",
    "The simple theatre at Epidaurus had no programmes, no speaker system and no house lights – just daylight. Its most remarkable feature was its near-perfect natural acoustics. Viola’s tour guide stood on stage and spoke to visitors 30 rows away. Everyone could make out every word. By contrast, actors in Milton Keynes wore body microphones to amplify their voices.",
    "Zack enjoyed the centuries-old play performed in the Buckinghamshire venue. Meanwhile, his aunt appreciated a centuries-old Greek venue with her tour guide as the sole performer, with perhaps a chorus of ghosts for atmosphere."
  ]
};

const ANNOTATE = [
  {
    skill: "Signal words",
    prompt: "Find a <em>signal word or phrase</em> that warns the reader a contrast is coming.",
    target: ["However", "By contrast", "Meanwhile"],
    decoys: [{ phrase: "On the same April day", why: "This links the two visits in time, but it does not flag a difference. Look for a word like “However” or “By contrast”." }],
    miss: "Look for a linking word that sets one venue against the other, especially in paragraphs 2, 4 and 5.",
    explain: "Words like “However”, “By contrast” and “Meanwhile” tell the reader a difference is coming. Boxing these signal words is the first step in comparing the two theatres."
  },
  {
    skill: "Spotting a similarity",
    prompt: "Find the word that shows the two theatre experiences are <em>alike</em>.",
    target: ["centuries-old"],
    decoys: [{ phrase: "no play was being performed that day", why: "This is a difference (Epidaurus had no performance), not something the two venues share. Look for a word used about both experiences." }],
    miss: "Look at the final paragraph. What word describes both what Zack saw and what his aunt appreciated?",
    explain: "Both Zack’s play and Viola’s venue are “centuries-old”. Repeating the word circles a real similarity: both experiences reach back across time, even though the places are so different."
  },
  {
    skill: "Spotting a difference",
    prompt: "Underline a detail that shows how <em>old</em> each venue is, so the reader can compare their ages.",
    target: ["built nearly 2400 years ago", "which opened in 1999"],
    decoys: [{ phrase: "3400 kilometres away", why: "This is how far apart the two places are, not how old they are. Look for a year or an age." }],
    miss: "One theatre opened recently; the other was built long ago. Underline one of those facts.",
    explain: "The Milton Keynes theatre “opened in 1999”; Epidaurus was “built nearly 2400 years ago”. Setting a modern date against an ancient one is one of the clearest contrasts in the text."
  },
  {
    skill: "Spotting a difference",
    prompt: "Find a difference in how the audience <em>hears</em> the actors at each venue.",
    target: ["near-perfect natural acoustics", "wore body microphones to amplify their voices"],
    decoys: [{ phrase: "the house lights dimmed", why: "This is about lighting, not about how the actors are heard. Look for acoustics or microphones." }],
    miss: "At Epidaurus the sound is natural; at Milton Keynes it is helped by technology. Underline one of these.",
    explain: "Epidaurus relies on “near-perfect natural acoustics”, while the Milton Keynes actors “wore body microphones”. The same need, being heard, is met in opposite ways: nature versus technology."
  }
];

const QUESTIONS = [
  {
    skill: "Retrieval",
    q: "Who wrote the play that Zack’s class went to see?",
    opts: [
      { t: "Aristophanes", ok: true, why: "Right. The text says The Frogs is “a play by the Greek playwright Aristophanes”." },
      { t: "Milton Keynes", why: "That is the theatre where they watched the play, not a person." },
      { t: "Viola", why: "That is Zack’s aunt, who is 3400 kilometres away in Greece." },
      { t: "Epidaurus", why: "That is the ancient Greek theatre, a place, not a playwright." }
    ]
  },
  {
    skill: "Inference",
    q: "Why do you think the room was “abuzz” at the Milton Keynes theatre?",
    opts: [
      { t: "The audience was excited to see the play", ok: true, why: "Right. “Abuzz” pictures the buzz of an excited crowd, like Zack, who “was eager for the show to begin”." },
      { t: "An annoying noise was coming from the speakers", why: "Microphones are mentioned later, and nothing says the speakers made an annoying noise." },
      { t: "There were real bees in the audience", why: "“Abuzz” compares the crowd’s chatter to bees; there are no real bees." },
      { t: "The acoustics were so clear that the audience could hear everything", why: "The clear natural acoustics belong to Epidaurus, not Milton Keynes." }
    ]
  },
  {
    skill: "Structure",
    q: "How does the writer organise the whole text?",
    opts: [
      { t: "By moving back and forth between the two theatres to compare them", ok: true, why: "Right. The text keeps switching between Milton Keynes and Epidaurus, so the reader constantly compares the modern venue with the ancient one." },
      { t: "By telling Zack’s whole story first and then Viola’s separately", why: "The two visits are cut together; “On the same April day” and “Back in Milton Keynes” keep switching between them." },
      { t: "By listing every fact about ancient Greek theatre in order", why: "It follows two people on the same day, not a list of facts." },
      { t: "By describing one evening at a single theatre", why: "There are two theatres, 3400 kilometres apart." }
    ]
  },
  {
    skill: "Inference",
    q: "Does Aunt Viola watch a real play at Epidaurus?",
    opts: [
      { t: "No; no play was on, so she enjoyed the ancient venue itself", ok: true, why: "Right. The text says “no play was being performed that day”. She “appreciated” the venue, with the tour guide as the only “performer”." },
      { t: "Yes; she watches The Frogs at the same time as Zack", why: "The Frogs is Zack’s play in England, 3400 kilometres away." },
      { t: "Yes; her tour guide performs a whole play on the stage", why: "The guide speaks to visitors and is only jokingly called the “sole performer”; he does not act a play." },
      { t: "No; the play was cancelled because of the storm", why: "The storm is in Milton Keynes, not Greece, where “warm spring breezes” blow." }
    ]
  },
  {
    skill: "Summary",
    q: "Which sentence best sums up what happens in this text?",
    opts: [
      { t: "On the same day, Zack watches a play in a modern theatre while his aunt explores an ancient Greek amphitheatre, and the text compares the two venues.", ok: true, why: "Right. It covers the whole shape of the text, not just one part of it." },
      { t: "The amphitheatre at Epidaurus can hold over 12,000 visitors on its hard stone benches. Other parts of the story focus on different details.", why: "True, but too narrow. It only covers part of the text and misses the main point." },
      { t: "The text proves that ancient Greek theatres are far better than modern ones in every possible way. The rest of the text develops in a different direction.", why: "Too broad. This adds a claim the text does not actually make or support." },
      { t: "An announcer asks the Milton Keynes audience to turn off all their electronic devices. The story continues well beyond this particular moment.", why: "A real detail, but a minor one. It is not what the text is mainly about." }
    ]
  }
];

const EVIDENCE = [
  {
    quote: "no play was being performed that day",
    opts: [
      { t: "Viola’s visit is about the ancient venue, not about seeing a performance", ok: true, why: "Right. With no play on, what she “appreciated” was the theatre itself, its stone, its setting and its history." },
      { t: "The theatre at Epidaurus is broken and can no longer be used", why: "The text says it “is still used for plays and events”. It just was not in use that day." },
      { t: "It was raining too hard for the play to go ahead", why: "The storm is in Milton Keynes. In Greece there are “warm spring breezes”." },
      { t: "Viola arrived too late to watch the play", why: "Nothing says a play was scheduled at all that day." }
    ]
  },
  {
    quote: "Everyone could make out every word",
    opts: [
      { t: "The natural acoustics at Epidaurus are remarkably good", ok: true, why: "Right. A guide on the stage is heard clearly 30 rows away, with no microphone, which is the “most remarkable feature” of the venue." },
      { t: "The tour guide was shouting very loudly", why: "He simply “spoke”. The point is the acoustics, not how loud he was." },
      { t: "The audience used the speaker system to hear him", why: "Epidaurus has “no speaker system”." },
      { t: "Everyone in Greece speaks the same language", why: "The quote is about hearing the words, not about understanding a language." }
    ]
  },
  {
    quote: "Compared to the storm raging outside, it was cosy",
    opts: [
      { t: "The modern indoor theatre keeps its audience comfortable whatever the weather", ok: true, why: "Right. The storm stays “outside”, while inside it is warm and “cosy”, one advantage of an enclosed modern venue." },
      { t: "The play the class watched was about a terrible storm at sea", why: "The storm is real weather outside the building, not part of the play." },
      { t: "The theatre was cold and uncomfortable inside", why: "“Cosy” means warm and comfortable, the opposite." },
      { t: "The storm forced the whole audience to leave early", why: "They stay; the show begins as the house lights dim." }
    ]
  }
];

const COLLECT = [
  {
    claim: "At Epidaurus the audience sits on far less comfortable seating than at Milton Keynes.",
    opts: [
      { t: "hard stone benches", ok: true, why: "Right. Bare stone is uncomfortable, unlike the padded seats of a modern theatre." },
      { t: "most of the comfortable seats were filled", why: "This is the comfortable seating at Milton Keynes; the claim asks for the harder seating at Epidaurus." },
      { t: "carved into a natural hillside", why: "This is how the theatre was shaped from the land, not how comfortable the seats are." },
      { t: "over 12,000 visitors", why: "This is how many people it holds, not how comfortable the seating is." }
    ]
  },
  {
    claim: "The modern theatre relies on technology that the ancient one does without.",
    opts: [
      { t: "an announcer asked everyone to turn off all electronic devices", ok: true, why: "Right. Electronic devices, dimming house lights and body microphones all show the modern theatre runs on technology Epidaurus lacks." },
      { t: "no programmes, no speaker system and no house lights", why: "This lists what the ancient theatre does without; the claim asks for the technology the modern one uses." },
      { t: "warm spring breezes rustled the leaves", why: "This describes the natural setting at Epidaurus, not technology at Milton Keynes." },
      { t: "Actors quietly entered to take their places", why: "This is a stage detail, not a piece of technology." }
    ]
  },
  {
    claim: "At Epidaurus, nature itself is used as part of the theatre.",
    target: ["the leaves of trees that formed a living backdrop"],
    decoys: [{ phrase: "carved into a natural hillside", why: "This is how the seating was shaped from the land, not the living scenery behind the stage. Look for the trees that act as a backdrop." }],
    miss: "Look in paragraph 2 for what grows behind the stage.",
    explain: "At Epidaurus the trees themselves form a “living backdrop”. Nature does the job that painted scenery or a built set would do in a modern theatre."
  },
  {
    claim: "The ending hints the ancient venue still seems full of its long past.",
    target: ["perhaps a chorus of ghosts for atmosphere"],
    decoys: [{ phrase: "her tour guide as the sole performer", why: "This is the guide talking on the empty stage, meant literally. Look for the playful image that fills the old theatre with its past." }],
    miss: "Look at the very last line of the text.",
    explain: "There are no real ghosts. A “chorus” was part of ancient Greek plays, so “a chorus of ghosts” imagines the theatre still echoing with the actors of 2400 years ago. It evokes the venue’s history, not a haunting."
  }
];

const EXPLAIN = [
  {
    claim: "The writer stresses that the two visits happen at the very same time.",
    quote: "On the same April day",
    opts: [
      { t: "Zack’s aunt Viola was in Greece, 3400 kilometres away, while Zack was at the theatre in Milton Keynes.", why: "Retelling. Why does the writer stress that it is the same day?" },
      { t: "“On the same April day” ties Viola’s visit to Zack’s, so every difference we read is happening at one shared moment, which sharpens the comparison.", ok: true, why: "Strong. It explains what the time link does for the compare-and-contrast structure." },
      { t: "The writer gives the reader some information about the time and date in this sentence.", why: "Vague. What does “the same day” do for the comparison?" },
      { t: "This proves that Zack and Viola had planned for months to visit two theatres on exactly the same day.", why: "Overclaiming. The text never says they planned it together." }
    ]
  },
  {
    claim: "The word “abuzz” makes the modern theatre feel alive with excitement.",
    quote: "the room was abuzz",
    opts: [
      { t: "Most of the comfortable seats in the theatre were filled with people who had come to watch the play.", why: "Retelling. What does the word “abuzz” add?" },
      { t: "“Abuzz” compares the crowd’s chatter to a hive of bees, so the whole room seems to hum with the audience’s excitement before the show.", ok: true, why: "Strong. It explains the buzzing image and links it to the crowd’s excitement." },
      { t: "This shows there were insects buzzing around inside the theatre while the audience waited.", why: "A literal misreading. “Abuzz” is a metaphor for the buzz of talk." },
      { t: "The writer uses an interesting word here to describe the noise in the theatre.", why: "Which word, and what does it make the reader picture?" }
    ]
  },
  {
    claim: "The phrase “By contrast” does the work of comparing for the reader.",
    quote: "By contrast",
    opts: [
      { t: "The actors at the Milton Keynes theatre wore body microphones so the audience could hear their voices.", why: "Retelling. What job does “By contrast” do?" },
      { t: "“By contrast” warns the reader the next fact is the opposite of the one before, hinging Epidaurus’s natural acoustics against Milton Keynes’s microphones in one phrase.", ok: true, why: "Strong. It explains the signal phrase and the exact contrast it sets up." },
      { t: "This is a connective, which is a word that joins one idea in a text to another idea.", why: "Correct label. What does this connective actually show the reader?" },
      { t: "This proves that natural acoustics are always better than microphones in every theatre in the world.", why: "Overclaiming. The phrase compares two venues; it does not rank them for all theatres." }
    ]
  },
  {
    claim: "The last paragraph balances Zack’s experience against his aunt’s.",
    quote: "Meanwhile, his aunt appreciated a centuries-old Greek venue",
    opts: [
      { t: "At the end of the day Zack liked the play he saw and his aunt liked the Greek theatre she visited.", why: "Retelling. How does the wording tie the two together?" },
      { t: "“Meanwhile” sets the two side by side one last time: Zack “enjoyed” a centuries-old play, his aunt “appreciated” a centuries-old venue. The matching wording shows both valued something old.", ok: true, why: "Strong. It explains the parallel structure and what the balance achieves." },
      { t: "The writer uses the word “Meanwhile” at the start of the sentence to join it to the one before.", why: "Correct, but what does putting the two side by side achieve?" },
      { t: "This proves that Zack and his aunt both wish they had visited the other person’s theatre instead.", why: "Overclaiming. Both are happy with what they experienced." }
    ]
  }
];
TEXTS.push({ id: "theatres-new-old", type: "Fiction", mode: "Creative", form: "Compare-and-contrast story", level: "5ème",
  hook: "Same April day, two theatres: a modern one in Milton Keynes and an ancient one in Greece.",
  TEXT, ANNOTATE, QUESTIONS, EVIDENCE, EXPLAIN, COLLECT });
}

/* ================================================================
   TEXT · Fiction · Compare & contrast · 5ème
   Scholastic, Close Reading Fiction Ages 11+, pp. 42–43
   Two opposite reviews of the same restaurant. Annotate stage
   focuses on compare-and-contrast signal words, similarities and
   differences between the two reviews.
   ================================================================ */
{
const TEXT = {
  title: "Under Review",
  intro: "Scholastic, Close Reading Fiction Ages 11+. Hunter and Kiki frequently post reviews of restaurants they go to. One day recently, each posted a review of the same restaurant, Manuela’s, on their favourite dining site, YUMM.com.",
  paras: [
    "Hunter wrote this review:",
    "It was bad enough that Manuela’s was terribly crowded and deafening, but the wretched food and second-rate service irked us all. Since we could hardly hear what one another was saying, we all focused on our food, which proved to be a disappointing decision.",
    "I started with the fish taco, a bone-dry and tasteless concoction through and through. Undaunted and trying to remain optimistic, I then bit into a chicken enchilada, the speciality of the house. In contrast, this dish was mouth-watering. But the flan I had for dessert, which should’ve been creamy and sweet, was lumpy and dull. I don’t know what the others thought of their meals because I couldn’t hear them above the racket.",
    "In summation, I would rate this eatery 1½ Yumms. Still, if you prefer appalling food at steep prices, this may be the place for you.",
    "And Kiki wrote this:",
    "If you don’t mind liveliness and waiting a bit for service, run, don’t walk, to Manuela’s Restaurant. You won’t be disappointed; the ambience is welcoming and the prices won’t give you indigestion.",
    "As opposed to what another reviewer has written, my fish taco was a truly memorable dish, flavoursome and succulent, a wonderful way to start a meal. The other starters our group ordered were scrumptious, too. And aside from the chicken enchilada, which was as miniscule in taste as it was colossal in size, the other main courses pleased all diners. And, oh that flan was heavenly – creamy, sweet, and fit for a king. I gladly give this place 3 Yumms, and can’t wait to return."
  ]
};

const ANNOTATE = [
  {
    skill: "Signal words",
    prompt: "Find a <em>signal phrase</em> where one reviewer sets their view directly against the other’s.",
    target: ["As opposed to what another reviewer has written"],
    decoys: [{ phrase: "In summation", why: "This signals a conclusion, not a contrast between the two reviews. Look for where Kiki answers the other reviewer." }],
    miss: "Look at how Kiki opens her second paragraph.",
    explain: "“As opposed to what another reviewer has written” is a signal phrase that flags a disagreement between the reviews. Boxing signal words like this is the first step in comparing them."
  },
  {
    skill: "Spotting a similarity",
    prompt: "Both reviewers mention the same weak point. Circle where one of them notes the <em>slow service</em>.",
    target: ["second-rate service", "waiting a bit for service"],
    decoys: [{ phrase: "the wretched food", why: "Hunter hated the food, but Kiki loved it, so this is a difference, not something they agree on. Look for the slow service, which both mention." }],
    miss: "Hunter calls the service “second-rate”; Kiki admits you spend time “waiting a bit”. Circle one of these.",
    explain: "Hunter calls the service “second-rate”; Kiki admits you spend time “waiting a bit for service”. Both agree the service is slow, even though only Hunter minds. That shared point is worth circling."
  },
  {
    skill: "Spotting a difference",
    prompt: "Underline how the two reviews <em>disagree completely</em> about the fish taco.",
    target: ["a bone-dry and tasteless concoction", "a truly memorable dish, flavoursome and succulent"],
    decoys: [{ phrase: "the speciality of the house", why: "This describes the chicken enchilada, not the fish taco. Look for how each reviewer judged the fish taco." }],
    miss: "Hunter and Kiki describe the same fish taco in opposite words. Underline one of their descriptions.",
    explain: "For Hunter the fish taco is a “bone-dry and tasteless concoction”; for Kiki it is “flavoursome and succulent”. The same dish, opposite verdicts: a clear difference to underline."
  },
  {
    skill: "Spotting a difference",
    prompt: "Underline where the two reviews <em>disagree</em> about the flan dessert.",
    target: ["lumpy and dull", "that flan was heavenly"],
    decoys: [{ phrase: "should’ve been creamy and sweet", why: "This is what Hunter expected the flan to be, not his verdict on it. Look for the two words that give his actual judgement." }],
    miss: "One reviewer found the flan a letdown; the other adored it. Underline one verdict.",
    explain: "Hunter’s flan was “lumpy and dull”; Kiki’s was “heavenly”. Both even use the words “creamy and sweet”: Hunter says it should have been, Kiki says it was."
  }
];

const QUESTIONS = [
  {
    skill: "Vocabulary",
    q: "Hunter says he was “Undaunted” after the fish taco. What does “undaunted” mean?",
    opts: [
      { t: "Courageous, and not put off", ok: true, why: "Right. “Undaunted” means not discouraged. Despite the awful fish taco, Hunter stayed “optimistic” and ate on." },
      { t: "Appalled and disgusted", why: "Appalled means horrified. He was disappointed, but “undaunted” describes his courage to carry on, not horror." },
      { t: "Scared off", why: "The opposite. “Undaunted” means he was not put off; he “then bit into a chicken enchilada”." },
      { t: "Focused only on the food", why: "He does focus on the food, but “undaunted” describes his brave attitude, not where he looked." }
    ]
  },
  {
    skill: "Comparison",
    q: "Which of these is something both reviewers agreed on?",
    opts: [
      { t: "The service is slow", ok: true, why: "Right. Hunter calls the service “second-rate”; Kiki admits you wait “a bit for service”. Both agree it is slow, though only Hunter minds." },
      { t: "The flan", why: "They disagree: Hunter’s flan was “lumpy and dull”, Kiki’s was “heavenly”." },
      { t: "The prices", why: "They disagree: Hunter says “steep prices”, Kiki says the prices “won’t give you indigestion”." },
      { t: "The fish taco", why: "They disagree completely: “bone-dry and tasteless” for Hunter, “flavoursome and succulent” for Kiki." }
    ]
  },
  {
    skill: "Structure",
    q: "How are the two reviews connected?",
    opts: [
      { t: "They review the same restaurant and meal but reach opposite verdicts", ok: true, why: "Right. Both posted reviews of the same meal at Manuela’s on the same day, yet Hunter gives 1½ Yumms and Kiki 3 Yumms." },
      { t: "They are written by the same person on two different visits", why: "Hunter and Kiki are two different reviewers, posting on the same day." },
      { t: "They describe two different restaurants that happen to share a name", why: "It is the same restaurant, Manuela’s, in both reviews." },
      { t: "Hunter praises the food while Kiki complains about it", why: "It is the other way round: Hunter complains, Kiki praises." }
    ]
  },
  {
    skill: "Inference",
    q: "How can you best explain why the two reviews are so different?",
    opts: [
      { t: "Taste is personal, so the same meal can please one diner and disappoint another", ok: true, why: "Right. Reviews are opinions. The food, prices and noise were the same, but Hunter and Kiki reacted very differently." },
      { t: "One of the two reviewers must be lying about the meal", why: "A difference of opinion is not the same as a lie. Both can be honest and still disagree." },
      { t: "They ate at Manuela’s on completely different days", why: "They each reviewed the same restaurant after posting on the same day." },
      { t: "Kiki was secretly paid by the restaurant to write a good review", why: "Nothing in the text suggests this. The simplest explanation is different taste." }
    ]
  },
  {
    skill: "Summary",
    q: "Which sentence best sums up what happens in this text?",
    opts: [
      { t: "Two people post reviews of the same meal at Manuela’s on the same day, and their opinions turn out to be almost completely opposite.", ok: true, why: "Right. It covers the whole shape of the text, not just one part of it." },
      { t: "Hunter thought the flan was lumpy and dull instead of the creamy and sweet dessert he had expected. Other parts of the story focus on different details.", why: "True, but too narrow. It only covers part of the text and misses the main point." },
      { t: "The text proves that Manuela’s is one of the very worst restaurants that has ever opened anywhere. The rest of the text develops in a different direction.", why: "Too broad. This adds a claim the text does not actually make or support." },
      { t: "Kiki tells readers to run, not walk, to Manuela’s Restaurant. The story continues well beyond this particular moment.", why: "A real detail, but a minor one. It is not what the text is mainly about." }
    ]
  }
];

const EVIDENCE = [
  {
    quote: "the prices won’t give you indigestion",
    opts: [
      { t: "Kiki thinks the restaurant is good value", ok: true, why: "Right. A joke: the prices are so reasonable they won’t upset you. This directly contradicts Hunter’s “steep prices”." },
      { t: "The food at Manuela’s is bad for your stomach", why: "A misreading. The joke is about cheap prices, not unhealthy food." },
      { t: "Kiki found the prices very expensive", why: "The opposite. “Won’t give you indigestion” means they are easy on your wallet." },
      { t: "Kiki did not order any food at all", why: "She describes several dishes she ate, from the fish taco to the flan." }
    ]
  },
  {
    quote: "as miniscule in taste as it was colossal in size",
    opts: [
      { t: "Even Kiki admits one dish, the chicken enchilada, was a letdown", ok: true, why: "Right. Big but flavourless. It is the one dish she criticises, and the one dish Hunter actually liked." },
      { t: "Kiki loved the chicken enchilada most of all", why: "She sets it apart with “aside from”, as the exception to her praise." },
      { t: "The enchilada was too small to see on the plate", why: "“Colossal in size” means it was huge; only its taste was tiny." },
      { t: "Both reviewers agreed the enchilada was delicious", why: "They disagree: Hunter found it “mouth-watering”, Kiki found it tasteless." }
    ]
  },
  {
    quote: "I couldn’t hear them above the racket",
    opts: [
      { t: "The noise was loud enough to spoil the shared meal", ok: true, why: "Right. Hunter can’t even hear his companions, so the group gives up talking, “a disappointing decision”." },
      { t: "Hunter’s friends refused to talk to him", why: "The problem is the noise (“the racket”), not that they wouldn’t speak." },
      { t: "Hunter had left the restaurant early", why: "He is still at the table, eating his way through the meal." },
      { t: "The other diners were whispering on purpose", why: "They can’t be heard because of the “racket”, not because they whisper." }
    ]
  }
];

const COLLECT = [
  {
    claim: "Hunter uses heavy sarcasm to warn readers away from the restaurant.",
    opts: [
      { t: "if you prefer appalling food at steep prices, this may be the place for you", ok: true, why: "Right. He pretends to recommend it, but only to people who “prefer appalling food”. The fake praise is a warning." },
      { t: "I would rate this eatery 1½ Yumms", why: "This is his low score, stated plainly, not the sarcastic mock-recommendation." },
      { t: "I don’t know what the others thought of their meals", why: "This is about the noise drowning out his friends, not a sarcastic warning." },
      { t: "which proved to be a disappointing decision", why: "This describes focusing on the food, not the sarcastic sign-off." }
    ]
  },
  {
    claim: "Kiki thinks the restaurant is well worth a visit despite its faults.",
    opts: [
      { t: "run, don’t walk, to Manuela’s Restaurant", ok: true, why: "Right. Urging readers to hurry there is her strong, enthusiastic recommendation." },
      { t: "waiting a bit for service", why: "This is a fault she admits, not her verdict on whether to go." },
      { t: "as miniscule in taste as it was colossal in size", why: "This is her one criticism, of the enchilada, not her overall recommendation." },
      { t: "the ambience is welcoming", why: "This is one nice detail, not the overall “go there” verdict." }
    ]
  },
  {
    claim: "Hunter blames the noise for spoiling the whole evening.",
    target: ["we could hardly hear what one another was saying"],
    decoys: [{ phrase: "terribly crowded and deafening", why: "This describes how loud and packed it was, but the claim is about the noise changing what the group did. Look for where they give up talking." }],
    miss: "Look at Hunter’s first paragraph, about the noise.",
    explain: "Because they “could hardly hear” each other, the group stopped talking and just ate, “a disappointing decision”. The noise, not only the food, ruined the evening."
  },
  {
    claim: "Even in a scathing review, Hunter admits one dish was good.",
    target: ["In contrast, this dish was mouth-watering"],
    decoys: [{ phrase: "the speciality of the house", why: "This just names the enchilada as the house special; the claim asks for Hunter’s actual praise of it. Look for “mouth-watering”." }],
    miss: "Look at Hunter’s description of the chicken enchilada.",
    explain: "Even while trashing everything else, Hunter calls the enchilada “mouth-watering”, set against the awful fish taco with “In contrast”. Notably, Kiki disliked this very dish."
  }
];

const EXPLAIN = [
  {
    claim: "Hunter tries to stay hopeful even after a bad start.",
    quote: "Undaunted and trying to remain optimistic",
    opts: [
      { t: "After eating the fish taco, Hunter next tried a chicken enchilada, which was the speciality of the house.", why: "Retelling. What do the words show about his attitude?" },
      { t: "“Undaunted” and “trying to remain optimistic” show he refuses to give up after the dry fish taco, so he bravely tries the next dish.", ok: true, why: "Strong. It explains both phrases and links them to his determination." },
      { t: "This shows Hunter was so frightened by the fish taco that he did not dare eat anything else at all.", why: "The opposite. “Undaunted” means not put off; he ate on." },
      { t: "The writer uses some descriptive language about Hunter here.", why: "Which words, and what do they show?" }
    ]
  },
  {
    claim: "Kiki’s review is warm and enthusiastic.",
    quote: "I gladly give this place 3 Yumms, and can’t wait to return",
    opts: [
      { t: "At the end of her review Kiki gives the restaurant a score of 3 Yumms.", why: "Retelling. Which words show her enthusiasm?" },
      { t: "“Gladly” and “can’t wait to return” show real warmth, and 3 Yumms sums up how much more she enjoyed the visit than Hunter did.", ok: true, why: "Strong. It explains the word choices and contrasts her score with Hunter’s." },
      { t: "This proves Manuela’s is the best restaurant in the whole country and that everyone will love it.", why: "Overclaiming. It is Kiki’s happy opinion, not a proven fact for everyone." },
      { t: "Kiki gives the restaurant a rating at the end, just as Hunter does.", why: "True, but what do her words reveal about her feelings?" }
    ]
  },
  {
    claim: "Kiki reassures the reader the visit will be worth it.",
    quote: "You won’t be disappointed",
    opts: [
      { t: "Kiki tells the reader that the ambience at Manuela’s is welcoming and the prices are not too high.", why: "Retelling. What does “You won’t be disappointed” do?" },
      { t: "Speaking straight to the reader as “you”, she makes a confident promise, setting a positive tone from the very start of her review.", ok: true, why: "Strong. It explains the direct address and the effect of the promise." },
      { t: "This shows that Kiki was actually let down by her own meal at the restaurant.", why: "The opposite: she promises the reader they won’t be let down." },
      { t: "Kiki uses the word “you” in this part of her review.", why: "Correct, but what is the effect of that promise?" }
    ]
  },
  {
    claim: "Kiki’s praise of the flan is deliberately over-the-top.",
    quote: "creamy, sweet, and fit for a king",
    opts: [
      { t: "Kiki really enjoyed the flan that she had for dessert at the end of her meal.", why: "Retelling. Which words make it sound magnificent?" },
      { t: "“Fit for a king” is exaggerated praise, piled on top of “creamy” and “sweet”, so the dessert sounds like the highlight, the opposite of Hunter’s “lumpy and dull”.", ok: true, why: "Strong. It explains the exaggeration and contrasts it with Hunter’s verdict." },
      { t: "This shows that a real king once visited Manuela’s and ate the flan there.", why: "A literal misreading. “Fit for a king” just means very good." },
      { t: "Kiki uses several adjectives to describe the flan in this sentence.", why: "Which adjectives, and what do they suggest?" }
    ]
  }
];
TEXTS.push({ id: "under-review", type: "Fiction", mode: "Creative", form: "Compare-and-contrast story", level: "5ème",
  hook: "Two friends review the same Mexican restaurant on the same day, and completely disagree.",
  TEXT, ANNOTATE, QUESTIONS, EVIDENCE, EXPLAIN, COLLECT });
}

/* ================================================================
   TEXT · Fiction · Make inferences · 5ème
   Scholastic, Close Reading Fiction Ages 11+, pp. 46–47
   Annotate stage focuses on inference: underline a text clue,
   then think about what you already know.
   ================================================================ */
{
const TEXT = {
  title: "What, No TV?",
  intro: "Scholastic, Close Reading Fiction Ages 11+. Enid and Gary’s historian parents volunteer the family to be the caretakers of a real medieval castle for a whole year.",
  paras: [
    "When Enid and Gary got the news, they bubbled with excitement. Not everyone, they understood, gets to live in a real medieval castle. But they were about to. That’s because their parents, both historians, volunteered to be the castle’s caretakers for a year. The only bad part was really bad. They’d be so far from their friends.",
    "As Maid Enid and Squire Gary began reading about castles, their eagerness to begin their stay grew. And when they stood for the first time before the towering, 800-year-old stone castle, replete with impenetrable walls, slits for windows and crenelated towers, their anticipation rose to new heights. They exuberantly crossed the drawbridge into their new home.",
    "The first few days brought glorious hours of exploring its great rooms and halls, its dark dungeons and imposing towers. But after a week, the fun began to dissipate in the face of the realities of castle life. The massive stone walls and remote location severely limited the reception for their electronic devices: no texting for a year. Plus, there was no TV. And despite fireplaces large enough to stand in, the rooms were dimly lit, damp and often cold. Besides being so ‘middle-aged’ and uncomfortable, the castle was enormous. When Benny the beagle scampered off, it took hours of searching every nook, stairway and secret passage to find him.",
    "But the family survived their unusual year, keeping busy with the many tasks of daily living without electricity and running water. They also learned to gather firewood and build fires, pump water and prepare and preserve food. They found entertainment in playing games, telling stories and making music. Still, when their parents next considered a year on an icebreaker in the Arctic, first mates Enid and Gary got cold feet."
  ]
};

const ANNOTATE = [
  {
    skill: "Clue about character",
    prompt: "Underline a <em>clue</em> that the parents love bold, unusual adventures.",
    target: ["volunteered to be the castle’s caretakers for a year"],
    decoys: [{ phrase: "both historians", why: "This tells us the parents’ job, which explains their interest, but not that they love adventure. Look for the daring thing they choose to do." }],
    miss: "Look at why the family moves to the castle in the first paragraph.",
    explain: "Volunteering to live in a medieval castle for a year is a clue that the parents love bold adventures. Combine it with what you know: most people would never choose this."
  },
  {
    skill: "Clue about feeling",
    prompt: "Underline a <em>clue</em> that shows how thrilled the children were before they moved in.",
    target: ["their anticipation rose to new heights", "They exuberantly crossed the drawbridge"],
    decoys: [{ phrase: "The only bad part was really bad", why: "This points to a downside, the opposite of excitement. Look for the eager, thrilled words." }],
    miss: "Look for the strong, positive feeling words in the first two paragraphs.",
    explain: "‘Anticipation rose to new heights’ and ‘exuberantly’ are clues to how thrilled they were. Knowing how a big adventure feels, you can infer their eagerness before reality set in."
  },
  {
    skill: "Clue about the reality",
    prompt: "Underline a <em>clue</em> that castle life turned out to be uncomfortable.",
    target: ["the rooms were dimly lit, damp and often cold"],
    decoys: [{ phrase: "fireplaces large enough to stand in", why: "This sounds grand and impressive, not uncomfortable. Look for the words about dim, damp, cold rooms." }],
    miss: "Look in the third paragraph for what the rooms were actually like.",
    explain: "‘Dimly lit, damp and often cold’ is a clue that the reality was hard. You know a modern home is warm and bright, so the contrast tells you castle life was uncomfortable."
  },
  {
    skill: "Clue about the downside",
    prompt: "Underline the <em>clue</em> to the one big downside of the move for the children.",
    target: ["They’d be so far from their friends"],
    decoys: [{ phrase: "gets to live in a real medieval castle", why: "This is the exciting upside of the move. Look for the one bad part the children worry about." }],
    miss: "Look at the end of the first paragraph.",
    explain: "‘They’d be so far from their friends’ is the clue to the downside. You know how much friends matter at their age, so you can infer this loss will hurt, even amid the excitement."
  }
];

const QUESTIONS = [
  {
    skill: "Inference",
    q: "Which best describes Enid and Gary’s parents, based on the choices they make?",
    opts: [
      { t: "They are adventurous", ok: true, why: "Right. They volunteer to live in a medieval castle for a year, then consider a year on an Arctic icebreaker. Only adventurous people choose such things." },
      { t: "They are middle-aged", why: "‘Middle-aged’ is a pun on ‘medieval’ (the Middle Ages), used about the castle, not the parents’ age or character." },
      { t: "They are fearful", why: "The opposite. It is the children who ‘got cold feet’; the parents keep proposing bold adventures." },
      { t: "They like the cold and damp", why: "The castle was ‘damp and often cold’, but nothing says the parents enjoy that. They like adventure, not discomfort." }
    ]
  },
  {
    skill: "Vocabulary",
    q: "Which choice means about the same as “impenetrable” (the castle’s walls)?",
    opts: [
      { t: "Densely solid, impossible to get through", ok: true, why: "Right. ‘Impenetrable’ means it cannot be broken through. Thick, solid walls kept attackers out." },
      { t: "Made of stone", why: "The walls are stone, but ‘impenetrable’ describes that they can’t be got through, not what they’re made of." },
      { t: "From the Middle Ages", why: "That is ‘medieval’, the castle’s age, not the meaning of ‘impenetrable’." },
      { t: "Very tall", why: "That is ‘towering’. ‘Impenetrable’ is about being impossible to break through, not height." }
    ]
  },
  {
    skill: "Inference",
    q: "Why might Enid and Gary be less excited about a year on an icebreaker than they were about the castle?",
    opts: [
      { t: "A year of hardship has taught them that roughing it is cold and uncomfortable", ok: true, why: "Right. Damp, cold, no TV and hard work taught them the reality behind an exciting idea. An Arctic ship promises even more cold and discomfort." },
      { t: "They are afraid of boats and the open sea", why: "Nothing suggests a fear of boats. Their reluctance comes from a year of hardship." },
      { t: "They would miss exploring the castle’s towers too much", why: "Missing the towers isn’t the point; they now know how hard such an adventure really is." },
      { t: "An icebreaker has no medieval history for their parents to study", why: "The parents are historians, but the children’s reluctance is about comfort, not history." }
    ]
  },
  {
    skill: "Theme",
    q: "A cautionary tale gives a warning. What warning does this story give?",
    opts: [
      { t: "An exciting idea can turn out far harder and less fun in reality", ok: true, why: "Right. Living in a castle sounded thrilling but turned out cold, damp and isolating. The tale warns: be careful what you wish for." },
      { t: "You should never live in an old building", why: "The story doesn’t warn against old buildings in general; it shows the gap between an exciting idea and its reality." },
      { t: "Historians should not have children", why: "Nothing suggests this. The warning is about romantic ideas versus real hardship." },
      { t: "Castles are always dangerous places to live", why: "The castle is uncomfortable, not dangerous. The warning is about lost excitement and hardship, not danger." }
    ]
  },
  {
    skill: "Summary",
    q: "Which sentence best sums up what happens in this text?",
    opts: [
      { t: "A family excited to spend a year as caretakers of a medieval castle discovers how cold, dark and difficult castle life really is, and the children lose their appetite for the next adventure.", ok: true, why: "Right. It covers the whole shape of the text, not just one part of it." },
      { t: "Benny the beagle runs off and takes hours to find in the castle’s many nooks and secret passages. Other parts of the story focus on different details.", why: "True, but too narrow. It only covers part of the text and misses the main point." },
      { t: "The story proves that no modern family could ever survive a single week living inside a real medieval castle. The rest of the text develops in a different direction.", why: "Too broad. This adds a claim the text does not actually make or support." },
      { t: "The children read some books about castles to prepare themselves before they move in. The story continues well beyond this particular moment.", why: "A real detail, but a minor one. It is not what the text is mainly about." }
    ]
  }
];

const EVIDENCE = [
  {
    quote: "no texting for a year",
    opts: [
      { t: "The castle cut the family off from their usual way of keeping in touch", ok: true, why: "Right. The walls and remote spot “severely limited the reception”, so a year without texting shows how isolated they were." },
      { t: "The family chose to give up their phones on purpose", why: "They didn’t choose it: the walls and location “severely limited the reception”." },
      { t: "There was no phone signal anywhere in the whole country", why: "It is this castle’s thick walls and remote location, not the whole country." },
      { t: "The children did not own any phones", why: "They have “electronic devices”; the problem is the reception, not owning phones." }
    ]
  },
  {
    quote: "keeping busy with the many tasks of daily living without electricity and running water",
    opts: [
      { t: "The family adapted by learning to do everything the hard way", ok: true, why: "Right. With no electricity or running water, ordinary tasks took real effort, and they learned to manage them." },
      { t: "The family gave up and left the castle early", why: "They “survived their unusual year”. They stayed and coped." },
      { t: "The castle secretly had electricity all along", why: "The quote says the opposite: “without electricity and running water”." },
      { t: "The parents did all the work while the children rested", why: "The whole family kept busy together with the tasks of daily living." }
    ]
  },
  {
    quote: "The first few days brought glorious hours of exploring its great rooms and halls",
    opts: [
      { t: "At first, the family was thrilled to explore the castle", ok: true, why: "Right. “Glorious hours of exploring” shows their early delight, before the fun began to fade." },
      { t: "The family explored the castle every day for the whole year", why: "Only “the first few days” were like this. After a week the fun faded." },
      { t: "The children were bored from the very beginning", why: "“Glorious hours” shows the opposite: they were delighted at first." },
      { t: "The parents explored while the children stayed behind", why: "The delight belongs to the whole family, not just the parents." }
    ]
  }
];

const COLLECT = [
  {
    claim: "The family found ways to enjoy themselves without any technology.",
    opts: [
      { t: "They found entertainment in playing games, telling stories and making music", ok: true, why: "Right. With no TV or phones, they made their own fun the old-fashioned way." },
      { t: "there was no TV", why: "This shows what they lacked, not how they entertained themselves. Look for what they did instead." },
      { t: "gather firewood and build fires, pump water", why: "These are chores of daily living, not entertainment." },
      { t: "it took hours of searching every nook, stairway and secret passage", why: "This is the search for the lost dog, not the family having fun." }
    ]
  },
  {
    claim: "You can tell the castle was very old, not a modern building.",
    opts: [
      { t: "the towering, 800-year-old stone castle", ok: true, why: "Right. ‘800-year-old’ states the great age directly: this is no modern house." },
      { t: "slits for windows and crenelated towers", why: "These are medieval features, a good clue, but not the direct statement of the castle’s age." },
      { t: "fireplaces large enough to stand in", why: "This is a grand feature, not a statement of how old the castle is." },
      { t: "The massive stone walls and remote location", why: "This describes its size and place, not its age." }
    ]
  },
  {
    claim: "One detail shows just how enormous the castle was.",
    target: ["it took hours of searching every nook, stairway and secret passage to find him"],
    decoys: [{ phrase: "the castle was enormous", why: "This states the castle was big; the claim asks for the detail that proves it. Look at what happened when the dog ran off." }],
    miss: "Look at what happened when Benny the beagle ran off.",
    explain: "Taking ‘hours of searching every nook, stairway and secret passage’ to find a dog shows the castle’s size far better than simply saying it was big."
  },
  {
    claim: "A hidden pun hints the castle is both old and a bit tiresome.",
    target: ["so ‘middle-aged’"],
    decoys: [{ phrase: "800-year-old stone castle", why: "This states the castle’s age plainly; the claim asks for the playful wordplay. Look for the phrase in inverted commas." }],
    miss: "Look for a word in inverted commas in the third paragraph.",
    explain: "‘Middle-aged’ plays on ‘medieval’ (the Middle Ages) and on something old and dull. The inverted commas signal the joke: the castle is ancient and a little tiresome to live in."
  }
];

const EXPLAIN = [
  {
    claim: "The opening makes the children’s excitement vivid.",
    quote: "they bubbled with excitement",
    opts: [
      { t: "Enid and Gary are very happy when they hear that they are going to live in a real medieval castle for a year.", why: "Retelling. What does the word ‘bubbled’ add?" },
      { t: "‘Bubbled’ compares their excitement to a fizzing, boiling liquid, so their feelings seem to overflow. It sets up how far their mood will later fall.", ok: true, why: "Strong. It explains the image in ‘bubbled’ and links it to the change that follows." },
      { t: "This shows that Enid and Gary were blowing bubbles to celebrate the good news about the castle.", why: "A literal misreading. ‘Bubbled’ describes fizzing excitement, not real bubbles." },
      { t: "The writer uses a verb here to describe how the children felt about the news.", why: "Which verb, and what does it make you picture?" }
    ]
  },
  {
    claim: "The writer marks the turning point in the family’s year.",
    quote: "the fun began to dissipate",
    opts: [
      { t: "After about a week in the castle, the family stopped enjoying it as much as they had at the start.", why: "Retelling. What does the word ‘dissipate’ add?" },
      { t: "‘Dissipate’ means to fade and scatter away, so the fun disappears slowly rather than all at once. It marks the moment reality replaces the excitement.", ok: true, why: "Strong. It explains the precise verb and why it marks a turning point." },
      { t: "This proves the family hated every single moment of their whole year in the castle from then on.", why: "Overclaiming. The fun fades, but they still ‘survived’ and found entertainment." },
      { t: "The writer describes the family’s feelings changing in this part of the story.", why: "How does the word ‘dissipate’ show the change?" }
    ]
  },
  {
    claim: "The story hints the parents will never stop seeking adventure.",
    quote: "their parents next considered a year on an icebreaker in the Arctic",
    opts: [
      { t: "At the end of the story the parents think about spending a year living on an icebreaker ship up in the Arctic.", why: "Retelling. What does ‘next considered’ suggest about them?" },
      { t: "Straight after one hard year, the parents ‘next considered’ another extreme trip. ‘Next’ suggests a pattern: one adventure simply leads to the next.", ok: true, why: "Strong. It reads ‘next’ as evidence of a restless, adventurous pattern." },
      { t: "This shows the parents were forced to move to the Arctic against their will after the castle year ended.", why: "A misreading. They ‘considered’ it themselves; it is their own idea." },
      { t: "The writer mentions the Arctic near the end of the story.", why: "Why include another adventure right at the end?" }
    ]
  },
  {
    claim: "The final joke sums up how the children feel.",
    quote: "got cold feet",
    opts: [
      { t: "At the end Enid and Gary do not want to go and live on the icebreaker in the Arctic with their parents.", why: "Retelling. Why is ‘cold feet’ a clever way to say it?" },
      { t: "‘Got cold feet’ means became too nervous to go ahead, and it puns on the literal cold of the Arctic. In three words it shows they have learned their lesson.", ok: true, why: "Strong. It explains the idiom and the pun on Arctic cold." },
      { t: "This shows that Enid and Gary’s feet were actually cold because the Arctic is such a cold place.", why: "A literal misreading. ‘Cold feet’ means reluctance; it is a pun on the cold." },
      { t: "The story ends with an expression about the children’s feet.", why: "What does the expression mean, and why end on it?" }
    ]
  }
];
TEXTS.push({ id: "what-no-tv", type: "Fiction", mode: "Creative", form: "Make-inferences story", level: "5ème",
  hook: "A family swaps modern life for a year in a medieval castle, and learns what they wished for.",
  TEXT, ANNOTATE, QUESTIONS, EVIDENCE, EXPLAIN, COLLECT });
}

/* ================================================================
   TEXT · Fiction · Make inferences · 5ème
   Scholastic, Close Reading Fiction Ages 11+, pp. 48–49
   Annotate stage focuses on inference: underline a text clue to
   Ursula’s personality, then think about what you already know.
   ================================================================ */
{
const TEXT = {
  title: "Bad Break",
  intro: "Scholastic, Close Reading Fiction Ages 11+. Ursula, a talented young artist, breaks her leg just before the summer, and has to get through the rest of the school year on crutches.",
  paras: [
    "Ursula, a good student and talented artist, planned to attend art school to improve her skills. But her summer plans were in jeopardy when, walking her dog in May, she tripped over the lead, landed badly and broke her right leg. The moulded plaster cast Ursula wore home from the hospital immobilised her leg from knee to ankle. She’d wear it for eight weeks while finishing the school year.",
    "Ursula returned to school a few days later using crutches. She was strong, but found that navigating busy corridors and the canteen proved more awkward than she’d expected. Like any child would be, Ursula was uncomfortable with this new reality. Although classmates freely offered to carry her books, bring things for her and help her get in and out of chairs, she always resisted, insisting, “No thanks, I’m fine.” Embarrassed to feel weak and needy, she rejected help whenever it was offered.",
    "Things changed one day in art class, where students were collaborating to paint a mural. The project demanded sharing equipment and lots of bending and reaching. Fearing that she’d feel useless, maybe even mess up the mural, Ursula asked Mr Wells to excuse her to sketch by herself at her desk. “You have lessons to learn right here, Ursula,” the teacher gently suggested.",
    "“What can I learn from messing everything up?” she asked sharply.",
    "“You could learn to let others help you,” replied Mr Wells. “There’s no shame in needing help. We all want to support you, and you should learn to accept kindness.” With the sweep of his arm, Mr Wells accidentally knocked a clipboard off his desk. Ursula reached out with her crutch and gently nudged it towards him. Mr Wells smiled. Ursula, experiencing an Aha! moment, smiled back."
  ]
};

const ANNOTATE = [
  {
    skill: "Clue about character",
    prompt: "Underline a <em>clue</em> that Ursula is proud and independent.",
    target: ["she always resisted, insisting, “No thanks, I’m fine.”"],
    decoys: [{ phrase: "classmates freely offered to carry her books", why: "This shows how kind her classmates are, not Ursula’s own character. Look for how she answers their offers." }],
    miss: "Look in the second paragraph at how Ursula responds to offers of help.",
    explain: "Always resisting and saying “No thanks, I’m fine” is a clue that Ursula is proud and independent. You know how it feels to want to manage alone, so you can infer she hates seeming weak."
  },
  {
    skill: "Clue about character",
    prompt: "Underline a <em>clue</em> that Ursula cares about doing well and being good at things.",
    target: ["a good student and talented artist"],
    decoys: [{ phrase: "walking her dog in May", why: "This is how she had her accident, not a clue about her character. Look at how she is described in the very first line." }],
    miss: "Look at the very first line of the story.",
    explain: "“A good student and talented artist” is a clue to who she is before the accident: someone who cares about doing well. You can infer that feeling useless would hurt her especially."
  },
  {
    skill: "Clue about feeling",
    prompt: "Underline the <em>clue</em> to why Ursula keeps refusing help.",
    target: ["Embarrassed to feel weak and needy"],
    decoys: [{ phrase: "using crutches", why: "This tells us how she gets around, not the feeling behind her refusals. Look for the word ‘embarrassed’." }],
    miss: "Look at the end of the second paragraph.",
    explain: "“Embarrassed to feel weak and needy” is the clue to why she pushes help away. You know pride can make people hide their struggles, so you can infer her refusals come from embarrassment, not real strength."
  },
  {
    skill: "Clue about change",
    prompt: "Underline the <em>small action</em> that shows Ursula has changed by the end.",
    target: ["reached out with her crutch and gently nudged it towards him"],
    decoys: [{ phrase: "Mr Wells smiled", why: "This is the teacher’s reaction, not Ursula’s action. Look for what she does with her crutch when the clipboard falls." }],
    miss: "Look for what Ursula does when the clipboard falls.",
    explain: "Nudging the clipboard towards Mr Wells, she helps someone without a second thought. You know helping others is natural, so you can infer she now sees there’s no shame in help going either way."
  }
];

const QUESTIONS = [
  {
    skill: "Inference",
    q: "How does Ursula show that she is uncomfortable with her new situation?",
    opts: [
      { t: "She refuses help, even though she struggles to get around", ok: true, why: "Right. She ‘always resisted’ offers and insisted ‘No thanks, I’m fine’, even though the corridors were ‘awkward’. Refusing help hides her discomfort." },
      { t: "She asks her teacher for help", why: "The opposite. She refuses help and only asks to be left alone to sketch." },
      { t: "She reads a lot", why: "Reading is never mentioned. Her discomfort shows in pushing people away." },
      { t: "She eats lots of sweets", why: "Nothing about sweets. The clue is her refusing help." }
    ]
  },
  {
    skill: "Theme",
    q: "What theme does the author explore in this story?",
    opts: [
      { t: "Adapting to change", ok: true, why: "Right. Ursula must adjust to life with a broken leg, and by the end she learns to accept help and to give it. The story is about adapting." },
      { t: "Loyalty", why: "No friendships are tested for loyalty. The story is about accepting a new situation." },
      { t: "Avoiding danger", why: "The accident is over by paragraph 1. The story is about coping afterwards, not avoiding danger." },
      { t: "Expressing pity", why: "Mr Wells offers kindness, not pity, and the focus is Ursula’s change." }
    ]
  },
  {
    skill: "Inference",
    q: "Why do you think Ursula spoke to Mr Wells so sharply?",
    opts: [
      { t: "She was frustrated and defensive about feeling useless", ok: true, why: "Right. She feared she’d ‘feel useless’ and ‘mess up the mural’. Snapping ‘What can I learn from messing everything up?’ shows her frustration and hurt pride." },
      { t: "She had never liked Mr Wells", why: "Nothing suggests she dislikes him; he speaks gently and she later smiles at him." },
      { t: "She was in sudden pain from her leg", why: "Her sharpness is about her feelings, not physical pain. No pain is mentioned here." },
      { t: "She did not understand his suggestion", why: "She understood him fully; she disagreed, sharply, because she felt exposed." }
    ]
  },
  {
    skill: "Inference",
    q: "What does Ursula’s ‘Aha!’ moment at the end most likely mean?",
    opts: [
      { t: "She realises helping and being helped are both natural, with no shame in either", ok: true, why: "Right. She instinctively helps Mr Wells with her crutch, doing for him what she refused to let others do for her. She finally sees his point." },
      { t: "She realises she will never need any help again", why: "The lesson is the opposite: help is normal, not something to avoid forever." },
      { t: "She decides she dislikes painting murals", why: "Nothing about disliking murals; her change is about accepting kindness." },
      { t: "She realises Mr Wells dropped the clipboard on purpose", why: "The clipboard fell ‘accidentally’. Her realisation is about help, not a trick." }
    ]
  },
  {
    skill: "Summary",
    q: "Which sentence best sums up what happens in this text?",
    opts: [
      { t: "After breaking her leg, Ursula stubbornly refuses all help until a moment in art class teaches her that accepting, and giving, kindness is nothing to be ashamed of.", ok: true, why: "Right. It covers the whole shape of the text, not just one part of it." },
      { t: "Ursula trips over her dog’s lead in May and breaks her right leg, so she has to wear a plaster cast for eight weeks. Other parts of the story focus on different details.", why: "True, but too narrow. It only covers part of the text and misses the main point." },
      { t: "The story proves that anyone who breaks a leg will become a kinder person by the end of the year. The rest of the text develops in a different direction.", why: "Too broad. This adds a claim the text does not actually make or support." },
      { t: "Students in the art class work together to paint a large mural, sharing equipment as they go. The story continues well beyond this particular moment.", why: "A real detail, but a minor one. It is not what the text is mainly about." }
    ]
  }
];

const EVIDENCE = [
  {
    quote: "she rejected help whenever it was offered",
    opts: [
      { t: "Ursula pushes help away to seem strong and capable", ok: true, why: "Right. Turning down every offer, even when she struggles, shows she would rather cope alone than seem weak." },
      { t: "Ursula’s classmates were unkind and unhelpful", why: "The opposite: they ‘freely offered’ to help. It is Ursula who refuses." },
      { t: "Ursula genuinely did not need any help at all", why: "She found the corridors and canteen ‘awkward’, so she did need help; she just wouldn’t take it." },
      { t: "Ursula was too shy to talk to her classmates", why: "She answers them firmly (‘No thanks, I’m fine’), which is not shyness." }
    ]
  },
  {
    quote: "Fearing that she’d feel useless, maybe even mess up the mural",
    opts: [
      { t: "Ursula avoids the group work because she is afraid of failing in front of others", ok: true, why: "Right. Her ‘fear’ of feeling useless is why she asks to work alone, not a dislike of art." },
      { t: "Ursula was no longer interested in art", why: "She is a ‘talented artist’ and asks to sketch on her own, so she still loves art." },
      { t: "Ursula disliked the classmates in her group", why: "Her fear is about herself feeling useless, not about the others." },
      { t: "Ursula knew for certain she would ruin the mural", why: "She ‘fears’ she might; she does not know it for certain." }
    ]
  },
  {
    quote: "you should learn to accept kindness",
    opts: [
      { t: "Mr Wells gently teaches Ursula the story’s main lesson", ok: true, why: "Right. He tells her, kindly, that accepting help is something to learn, which is exactly what she does by the end." },
      { t: "Mr Wells is scolding Ursula for being rude to him", why: "He speaks gently and supportively, not as a telling-off." },
      { t: "Ursula has already learned to accept help by this point", why: "Not yet: her ‘Aha! moment’ comes afterwards, when she helps him." },
      { t: "Mr Wells wants Ursula to leave the art class", why: "The opposite: he wants her to stay and learn ‘right here’." }
    ]
  }
];

const COLLECT = [
  {
    claim: "You can tell Ursula’s injury made everyday school life hard.",
    opts: [
      { t: "navigating busy corridors and the canteen proved more awkward than she’d expected", ok: true, why: "Right. Corridors and the canteen being ‘awkward’ shows how much harder ordinary school life became." },
      { t: "She was strong", why: "This is a clue about her character, not about the difficulty her injury caused." },
      { t: "using crutches", why: "This tells us how she moves, not the difficulty it caused her." },
      { t: "immobilised her leg from knee to ankle", why: "This describes the cast, not how hard getting around school became." }
    ]
  },
  {
    claim: "Mr Wells believes that needing help is nothing to be ashamed of.",
    opts: [
      { t: "There’s no shame in needing help", ok: true, why: "Right. He states it plainly: needing help is normal, not shameful." },
      { t: "You have lessons to learn right here, Ursula", why: "This is his gentle nudge to stay, not the point about shame." },
      { t: "You could learn to let others help you", why: "This is his advice to accept help, but not the clear statement that there is no shame in it." },
      { t: "We all want to support you", why: "This is an offer of support, not the statement about shame." }
    ]
  },
  {
    claim: "Ursula’s sharp reply shows her pride has been hurt.",
    target: ["What can I learn from messing everything up?"],
    decoys: [{ phrase: "You have lessons to learn right here, Ursula", why: "These are Mr Wells’s gentle words, not Ursula’s sharp reply. Look for what she snaps back at him." }],
    miss: "Look at what Ursula says just after Mr Wells suggests she stay.",
    explain: "Snapping ‘What can I learn from messing everything up?’ shows her frustration and wounded pride. She fears looking useless, so she lashes out instead of admitting it."
  },
  {
    claim: "The very last line shows Ursula has understood the lesson.",
    target: ["Ursula, experiencing an Aha! moment, smiled back"],
    decoys: [{ phrase: "reached out with her crutch and gently nudged it towards him", why: "This is the action that triggers her realisation; the claim asks for the moment she understands. Look for the ‘Aha! moment’." }],
    miss: "Read the very last sentence.",
    explain: "Her ‘Aha! moment’ and smile show she finally gets Mr Wells’s point: after helping him without thinking, she sees there’s no shame in help going either way."
  }
];

const EXPLAIN = [
  {
    claim: "The opening sets up how much Ursula stands to lose.",
    quote: "her summer plans were in jeopardy",
    opts: [
      { t: "Ursula was planning to go to art school in the summer, but then she broke her leg while she was out walking her dog one day in May.", why: "Retelling. What does ‘in jeopardy’ add?" },
      { t: "‘In jeopardy’ means at risk. Placing it right after her art-school plans shows the break threatens something she really cares about.", ok: true, why: "Strong. It explains the phrase and links it to what matters to her." },
      { t: "This proves that Ursula will definitely never get to go to art school at all now that she has broken her leg so badly.", why: "Overclaiming. ‘In jeopardy’ means at risk, not certainly lost." },
      { t: "The writer gives some information about Ursula’s summer plans in this sentence.", why: "Which words matter, and what do they show?" }
    ]
  },
  {
    claim: "Mr Wells handles Ursula with patience.",
    quote: "the teacher gently suggested",
    opts: [
      { t: "Mr Wells tells Ursula that she has lessons to learn in the art class rather than sketching on her own at her desk.", why: "Retelling. What does the word ‘gently’ show?" },
      { t: "‘Gently suggested’, rather than ordered, shows he understands she is upset and chooses kindness over force.", ok: true, why: "Strong. It explains the word choice and what it reveals about him." },
      { t: "This shows Mr Wells is a weak teacher who cannot make his students do what he tells them to do.", why: "A misreading. Gentleness here is patience, not weakness." },
      { t: "The writer describes how Mr Wells speaks to Ursula in this part of the story.", why: "Which word, and what does it suggest about him?" }
    ]
  },
  {
    claim: "Mr Wells reframes accepting help as a strength, not a weakness.",
    quote: "You could learn to let others help you",
    opts: [
      { t: "Mr Wells replies to Ursula and tells her that she could learn something by letting the other people in the class help her out.", why: "Retelling. Why call it something to ‘learn’?" },
      { t: "Calling it something to ‘learn’ turns accepting help into a skill, so it becomes an achievement rather than an embarrassment.", ok: true, why: "Strong. It explains how the word ‘learn’ changes how help is seen." },
      { t: "This proves that Ursula is a bad student who has failed to learn all of the most important lessons at her school.", why: "Overclaiming, and off the point. He is talking about accepting help, not her grades." },
      { t: "Mr Wells uses the word ‘learn’ when he is speaking to Ursula in this sentence.", why: "An observation. What does framing help as learning achieve?" }
    ]
  },
  {
    claim: "The writer marks the turning point of the story.",
    quote: "Things changed one day in art class",
    opts: [
      { t: "One day the students in Ursula’s art class all worked together to paint a big mural on the wall using shared equipment.", why: "Retelling. What does the phrase signal to the reader?" },
      { t: "‘Things changed’ signals a turning point: the writer tells us this scene is where Ursula’s attitude will begin to shift.", ok: true, why: "Strong. It explains the signposting phrase and its job in the story." },
      { t: "This shows that the art class was cancelled that day and the students had to do something completely different instead.", why: "A misreading. ‘Things changed’ points to a change in Ursula, not a cancelled lesson." },
      { t: "The writer begins a new paragraph about the art class here in this part of the story.", why: "An observation. What does ‘things changed’ prepare the reader for?" }
    ]
  }
];
TEXTS.push({ id: "bad-break", type: "Fiction", mode: "Creative", form: "Make-inferences story", level: "5ème",
  hook: "A talented artist breaks her leg, refuses all help, and learns something in art class.",
  TEXT, ANNOTATE, QUESTIONS, EVIDENCE, EXPLAIN, COLLECT });
}
