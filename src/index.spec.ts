import { main } from './index';

describe('index', () => {
    it('should work', () => {
        const spy = jest.spyOn(console, 'info');
        main();
        expect(spy).toHaveBeenNthCalledWith(1, 'This is a beginning of a beautiful friendship.');
    });
});
