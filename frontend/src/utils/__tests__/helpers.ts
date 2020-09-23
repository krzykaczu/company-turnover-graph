import { formatInPLN } from '../helpers'

test('Test formatInPLN 1000', () => {
    expect(formatInPLN(1000)).toBe("1,000 PLN");
});