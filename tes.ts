// // import axios from "axios";

// // axios.defaults.headers.common['CLIENT_IP'] = '185.174.110.2';

// // axios.get('http://ip-api.com/json').then((response) => {
// //   console.log(response.data);
// // })

// import fs from 'fs';
// import ytdl from 'ytdl-core';
// // TypeScript: import ytdl from 'ytdl-core'; with --esModuleInterop
// // TypeScript: import * as ytdl from 'ytdl-core'; with --allowSyntheticDefaultImports
// // TypeScript: import ytdl = require('ytdl-core'); with neither of the above

// ytdl('http://www.youtube.com/watch?v=aqz-KE-bpKQ')
//   .pipe(fs.createWriteStream('video.mp4'));

import countries_option from './countries_option.json';
const { options, countries } = countries_option;

options.forEach((option) => {
  const label = option.musicMultiSelectMenuItemRenderer?.deselectedAccessibility.accessibilityData.label;
  const country = countries.filter((country) => country.name == label);
  console.log(label, country);

})