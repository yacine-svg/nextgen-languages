export const contact = {
  phones: ['+213 791 35 34 86', '+213 795 77 64 41'],
  city: 'Constantine 25000, Algeria',
  map: 'https://maps.app.goo.gl/ffirQcDBcwWVYZDw8',
  instagram: 'https://www.instagram.com/nextgen_languages_ielts_prep/',
  facebook: 'https://www.facebook.com/profile.php?id=61552612223537',
  tiktok: 'https://www.tiktok.com/@next.genlanguages',
};

export const tel = (p) => `tel:${p.replace(/\s/g, '')}`;

// Official IELTS band scale (paraphrased descriptors)
export const bands = [
  { band: 1, name: 'Non-user', text: 'No real ability to use English beyond a few isolated words.' },
  { band: 2, name: 'Intermittent user', text: 'Great difficulty understanding and producing spoken and written English.' },
  { band: 3, name: 'Extremely limited user', text: 'Conveys and understands only general meaning in very familiar situations.' },
  { band: 4, name: 'Limited user', text: 'Basic competence, limited to familiar situations. Frequent problems with understanding and expression.' },
  { band: 5, name: 'Modest user', text: 'Partial command of English. Copes with overall meaning in most situations, with many mistakes.' },
  { band: 6, name: 'Competent user', text: 'Generally effective command despite some inaccuracies, especially in familiar situations.' },
  { band: 7, name: 'Good user', text: 'Operational command with occasional inaccuracies. Handles complex language and detailed reasoning well.' },
  { band: 8, name: 'Very good user', text: 'Fully operational command with only occasional, unsystematic errors.' },
  { band: 9, name: 'Expert user', text: 'Complete command of English: accurate, fluent and fully understood.' },
];

export const courses = [
  { tag: 'IELTS', name: 'IELTS preparation', track: 'Exam prep', text: 'All four modules, exam strategies, mock tests and personal feedback toward your target band.', tone: 'cobalt' },
  { tag: 'TOEFL', name: 'TOEFL preparation', track: 'Exam prep', text: 'Section-by-section practice for the TOEFL, with timed tasks and score-focused coaching.', tone: 'saffron' },
  { tag: 'DHA', name: 'DHA exam prep', track: 'Exam prep', text: 'Exam preparation for healthcare professionals sitting the DHA (Dubai Health Authority) exam.', tone: 'mint' },
  { tag: 'MED', name: 'Medical English', track: 'Professional', text: 'Clinical vocabulary, patient communication and case language for doctors, nurses and pharmacists.', tone: 'mint' },
  { tag: 'BIZ', name: 'Business English', track: 'Professional', text: 'Meetings, emails, presentations and negotiation in English for work.', tone: 'saffron' },
  { tag: 'GEN', name: 'General English', track: 'Everyday', text: 'Grammar, vocabulary, listening and speaking, level by level.', tone: 'cobalt' },
  { tag: 'A1', name: 'English for beginners', track: 'Everyday', text: 'Step-by-step English from zero, focused on speaking, listening and basic communication.', tone: 'saffron' },
  { tag: 'TALK', name: 'Spoken English', track: 'Everyday', text: 'Interactive speaking practice for everyday and professional conversations.', tone: 'mint' },
  { tag: 'LANG', name: 'Foreign languages', track: 'More languages', text: 'Beginner-friendly courses in other international languages, with a practical speaking focus.', tone: 'cobalt' },
];

export const journey = [
  { title: 'Register', text: 'Call or message us. We note your goal, your deadline and the band or level you need.' },
  { title: 'Placement test', text: 'A short level check tells us where you start, so you join the right group.' },
  { title: 'Classes and mock tests', text: 'On-site in Constantine or live online. Timed mock tests show your progress module by module.' },
  { title: 'Exam booking', text: 'We guide you through booking your IELTS test date and what to expect on the day.' },
  { title: 'Results', text: 'You receive your Test Report Form. We go through your scores with you and plan the next step.' },
];

// Real IELTS test format (minutes)
export const modules = [
  { name: 'Listening', minutes: 30, detail: '4 parts, 40 questions', note: 'Recorded audio, heard once.' },
  { name: 'Reading', minutes: 60, detail: '3 passages, 40 questions', note: 'Academic or General Training texts.' },
  { name: 'Writing', minutes: 60, detail: '2 tasks', note: 'Task 2 counts for twice as much as Task 1.' },
  { name: 'Speaking', minutes: 14, detail: '3 parts, 11–14 min', note: 'Face to face with a certified examiner.' },
];

export const marquee = ['IELTS Academic', 'General Training', 'TOEFL', 'DHA', 'Speaking club', 'Medical English', 'Business English', 'Spoken English', 'Beginners', 'Online classes'];

// Free Unsplash License photos (stand-ins: swap for the center's own photos when you have them)
const U = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&q=70`;
export const photos = {
  chalkboard: { src: U('photo-1558443957-d056622df610'), alt: 'Teacher writing on a chalkboard', by: 'Leonardo Toshiro Okubo' },
  lecture: { src: U('photo-1758270705067-0d7edee57af0'), alt: 'Students listening in class', by: 'Vitaly Gariev' },
  writing: { src: U('photo-1654022963276-ef761eac346e'), alt: 'Student writing in a notebook', by: 'Benoît Deschasaux' },
  talking: { src: U('photo-1771873437314-9dbadc707dcc'), alt: 'Two women talking at a table with a laptop', by: 'Yan Kolesnyk' },
  online: { src: U('photo-1588196749597-9ff075ee6b5b'), alt: 'Laptop showing a live online class', by: 'Chris Montgomery' },
  headphones: { src: U('photo-1513258496099-48168024aec0'), alt: 'Learner with headphones at a laptop', by: 'Wes Hicks' },
};

// Photo shown in the course hover card
export const coursePhoto = {
  IELTS: 'writing', TOEFL: 'headphones', DHA: 'lecture', MED: 'lecture', BIZ: 'talking',
  GEN: 'chalkboard', A1: 'chalkboard', TALK: 'talking', LANG: 'online',
};

// "Spill the tea" speaking club. Sign-ups go into the school's Google Form.
const FORM = 'https://docs.google.com/forms/d/e/1FAIpQLSd6ZxB20uG_fJ6qwX6a3gyHclSHbLxLBNgUCKEO8LqsUtD9kg';
export const club = {
  fee: '650 DZD',
  map: 'https://maps.app.goo.gl/Lz276iuHiZvaoJrJ9',
  formUrl: `${FORM}/viewform`,
  formAction: `${FORM}/formResponse`,
  // Paste each question's entry id here (see README) to switch on the on-site form.
  // Leave any empty and the section shows a button to the Google Form instead.
  entries: {
    firstName: '', // e.g. 'entry.123456789'
    lastName: '',
    phone: '',
    address: '',
    profession: '',
    level: '',
  },
  professions: ['Student', 'Work', 'Other'],
  levels: ['Beginner', 'Intermediate', 'Advanced'],
};
