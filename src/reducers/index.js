import { combineReducers } from 'redux';
// reducers
const songsReducer = () => {
  return [
    {title: 'thunderloud', duration: '3:50', description : 'All I need is one\n' +
        'One old man is enough\n' +
        'Babe, you got it wrong\n' +
        'Just turn your fears into trust, to trust\n' +
        'Where\'d the love go?\n' +
        'When all is said and done\n' +
        'Hey now, put your hands in the air\n' +
        'I\'ma go through your stuff\n' +
        'Where\'d the love go?\n' +
        'Put the running into run\n' +
        'You asking me to stay\n' +
        'But I never met a girl I could trust\n' +
        'You\'re sayin\' those words like you hate me now (wo-oah)\n' +
        'Our house is burning when you\'re raisin\' hell (wo-oah)\n' +
        'Here in the ashes your soul cries out (a-a-ah)\n' +
        'But don\'t be afraid of these thunderclouds\n' +
        'These thunderclouds, oh, no\n' +
        'These thunderclouds, oh, no, no\n' +
        'All I need is love (da-dum, dum, dum)\n' +
        'All I need is a word (da-dum, dum, dum)\n' +
        'All I need is us (da-dum, dum, dum)\n' +
        'You turned nouns into verbs, to verbs\n' +
        'Where did love go?\n' +
        'When all is said and…',
      image: '/images/thundercloud.jpg'
    },

    {title: 'can\'t hold us', duration: '4:03'},
    {title: 'with you', duration: '4:30'},
    {title: 'genius', duration: '5:02', description: 'Labrinth\n' +
        'Do you think I\'m stupid?\n' +
        'Do you think I\'m bat shit crazy, having you on my mind\n' +
        'Do you think I\'m helpless?\n' +
        'My algebra gon\' equal you every time\n' +
        'Do you think I\'m calling?\n' +
        'Do you think I\'m calling out your name every night\n' +
        'Girl, I have fallen for you\n' +
        'What, what you say?\n' +
        'Oh my god, baby baby don\'t you see-e-e\n' +
        'I got everythin\' you ne-e-ed\n' +
        'O-only a genius could love a woman like she\n' +
        'Oh my god, baby baby don\'t you see-e-e\n' +
        'I got everythin\' you ne-e-ed\n' +
        'O-o-only a genius could love a woman like she\n' +
        'I\'m a ge-ge-ge-ge-ge-ge-genius\n' +
        'A ge-ge-ge-ge-ge-ge-genius\n' +
        'A ge-ge-ge-ge-ge-ge-genius\n' +
        'He\'s a genius\n' +
        '\'Cause I love a woman like you\n' +
        'I\'m a ge-ge-ge-ge-ge-ge-genius\n' +
        'A ge-ge-ge-ge-ge-ge-genius\n' +
        'A ge-ge-ge-ge-ge-ge-genius\n' +
        'He\'s a genius\n' +
        '\'Cause I love a woman like you\n' +
        'Sia\n' +
        'Oh!…'}
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SELECTED_SONG') {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
