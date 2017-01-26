/* @flow */
/* eslint-disable no-console */

import fs from 'fs';
import path from 'path';
import ffmpeg from 'fluent-ffmpeg';
import H from 'highland';
import Stringify from 'streaming-json-stringify';

import './extra';

const inputFilePath = path.resolve(__dirname, '../samples/video.mkv');
const outputFilePath = path.resolve(__dirname, '../samples/audio.raw');
const outputFileStream = fs.createWriteStream(outputFilePath);

const LEAST_COUNT = 1; // in seconds

const SAMPLE_RATE = 44100 / LEAST_COUNT;

const transformStream = H.pipeline(
  H.map((a) => {
    const result: Array<number> = [];
    for (let i = 0; i < a.length; i += 2) {
      result.push(a.readInt16LE(i, true));
    }
    return result.toString();
  }),
  H.intersperse(','), // each stream chunk is joined by a comma
  H.splitBy(','), // to separate each number which is separated with each other by a comma
  H.batch(SAMPLE_RATE),
  H.map((A: Array<string>) => {
    let negSum = 0;
    let posSum = 0;

    A.forEach((a) => {
      const num = Number(a);

      if (num < 0) {
        negSum += num;
      } else {
        posSum += num;
      }
    });

    const negMean = Math.floor(negSum / SAMPLE_RATE);
    const posMean = Math.floor(posSum / SAMPLE_RATE);

    return [negMean, posMean];
  }),
);

ffmpeg(inputFilePath)
  .on('end', () => {
    console.log('file has been converted succesfully');
  })
  .on('error', (err) => {
    console.log(`an error happened: ${err.message}`);
  })
  .format('s16le')
  .audioChannels(1)
  .duration(20)
  .audioFilters('highpass=f=200, lowpass=f=3000')
  .audioCodec('pcm_s16le')
  .pipe(transformStream)
  .pipe(Stringify())
  .pipe(outputFileStream);
