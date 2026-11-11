// Times refer to the site's normalised Chapter 14 recording (374 seconds).
// Boundaries were checked against the narration and the gaps between sentences.
export const chapter14Reading = {
  duration: 374,
  turns: [
    {
      pauseAt: 46.02,
      resumeAt: 82.60,
      paragraphs: [6, 7],
      begin: 'Mr. Sir marched the boys out to the lake,',
      end: "but Stanley didn't think it was real gold."
    },
    {
      pauseAt: 184.80,
      resumeAt: 216.60,
      paragraphs: [21, 21],
      begin: "It didn't take long for the pickup to return.",
      end: 'She walked right up to X-Ray.'
    },
    {
      pauseAt: 277.40,
      resumeAt: 294.80,
      paragraphs: [33, 35],
      begin: 'The Warden turned to Stanley.',
      end: 'He nervously went toward her.'
    }
  ]
};

// Chapter 15 uses the 262-second recording, with slightly longer student turns.
export const chapter15Reading = {
  duration: 262,
  turns: [
    {
      pauseAt: 39.10,
      resumeAt: 82.55,
      paragraphs: [6, 8],
      begin: 'Armpit and Squid, you will keep digging where you have been,',
      end: "We don't want any dirt piles to get in the way."
    },
    {
      pauseAt: 127.75,
      resumeAt: 167.65,
      paragraphs: [13, 15],
      begin: "The Warden couldn't keep still.",
      end: 'The main thing is not to miss anything.'
    },
    {
      pauseAt: 191.20,
      resumeAt: 213.05,
      paragraphs: [19, 22],
      begin: 'I wonder how she knew all our names,',
      end: 'He wondered if Zigzag was just being paranoid.'
    }
  ]
};
