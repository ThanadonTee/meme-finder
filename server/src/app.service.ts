import { Injectable } from '@nestjs/common';
import { execSync } from 'child_process';
import { unlinkSync, writeFileSync } from 'fs';
@Injectable()
export class AppService {
  getId(id: string): Record<string, unknown> {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const MEME = require('../AI/memes.json');

    const found = MEME.find(x => x.id == id);
    return { output: found };
  }
  postSearch(query: string): Record<string, unknown> {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const MEME = require('../AI/memes.json');

    const found = [];
    MEME.forEach(element => {
      element.generated_memes.every(el => {
        if (el.alt_text.includes(query) || el.caption_text.includes(query)) {
          found.push(element);
          return false;
        }
      });
    });
    return { output: found };
  }
  postImage(file): Record<string, unknown> {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    let MEME = require('../AI/memes.json');
    MEME = Object.freeze(MEME);
    const filename = Date.now() + file.originalname;
    writeFileSync('./AI/uploads/' + filename, file.buffer);
    let result = execSync('./AI/env/bin/python3 AI/meme_finder.py ' + filename);
    result = eval(result.toString('utf8'));
    unlinkSync('./AI/uploads/' + filename);
    result.sort((a, b) => a[1] - b[1]);
    const top9 = result.slice(result.length - 9, result.length);
    const output = [];
    top9.forEach(el => {
      let found = MEME.find(x => x.id == el[0]);
      found = Reflect.deleteProperty(found, 'prop');
      output.push(found);
    });

    return { output };
  }
}
