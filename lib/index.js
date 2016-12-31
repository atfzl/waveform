/* @flow */
/* eslint-disable no-console */

import path from 'path';
import ffmpeg from 'fluent-ffmpeg';
import './extra';

const inputFilePath = path.resolve(__dirname, '../samples/audio.mp3');
const outputFilePath = path.resolve(__dirname, '../samples/audio.raw');

ffmpeg(inputFilePath)
  .on('end', () => {
    console.log('file has been converted succesfully');
  })
  .on('error', (err) => {
    console.log(`an error happened: ${err.message}`);
  })
  .format('s16le')
  .audioChannels(1)
  .audioCodec('pcm_s16le')
  .save(outputFilePath);
