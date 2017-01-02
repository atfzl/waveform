/* @flow */
/* eslint-disable no-console */

import fs from 'fs';
import path from 'path';
import ffmpeg from 'fluent-ffmpeg';
import H from 'highland';

import './extra';

const inputFilePath = path.resolve(__dirname, '../samples/audio.mp3');
const outputFilePath = path.resolve(__dirname, '../samples/audio.raw');
const outputFileStream = fs.createWriteStream(outputFilePath);

const transformStream = H.pipeline(
  H.map((a) => {
    const result = [];
    for (let i = 0; i < a.length; i += 2) {
      result.push(a.readInt16LE(i, true));
    }
    return result.toString();
  }),
  H.intersperse(','),
);

ffmpeg(inputFilePath)
  .on('end', () => {
    console.log('file has been converted succesfully');
  })
  .on('error', (err) => {
    console.log(`an error happened: ${err.message}`);
  })
  .duration(30)
  .format('s16le')
  .audioChannels(1)
  .audioFilters('highpass=f=200, lowpass=f=3000')
  .audioCodec('pcm_s16le')
/* .pipe(transformStream)*/
  .pipe(outputFileStream);
