import { describe, expect, it } from 'vitest';

import checkSalamMessage from '../src/utils/checkSalamMessage';

describe('check salam message testing', () => {
  it('should returns true', () => {
    expect(checkSalamMessage('assalamualaikum')).toEqual(true);
    expect(checkSalamMessage('Assalamualaikum')).toEqual(true);
    expect(checkSalamMessage("assalamu'alaikum")).toEqual(true);
    expect(checkSalamMessage("Assalamu'alaikum")).toEqual(true);
  });

  it('should returns false', () => {
    expect(checkSalamMessage('ass')).toEqual(false);
    expect(checkSalamMessage('Ass')).toEqual(false);
    expect(checkSalamMessage('mikum')).toEqual(false);
    expect(checkSalamMessage('Mikum')).toEqual(false);
    expect(checkSalamMessage('assalamualaykum')).toEqual(false);
    expect(checkSalamMessage('Assalamualaykum')).toEqual(false);
    expect(checkSalamMessage("assalamu'alaykum")).toEqual(false);
    expect(checkSalamMessage("Assalamu'alaykum")).toEqual(false);
  });
});
