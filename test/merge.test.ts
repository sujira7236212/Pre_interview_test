import { merge } from '../src/merge';

describe('merge function tests', () => {
    test('merges three sorted arrays correctly', () => {
        const collection_1 = [0, 4, 7];
        const collection_2 = [0, 5, 8];
        const collection_3 = [9, 6, 3];
        const result = merge(collection_1, collection_2, collection_3);
        expect(result).toEqual([0, 0, 3, 4, 5, 6, 7, 8, 9]);
    });

    test('handles empty arrays', () => {
        const collection_1: number[] = [];
        const collection_2: number[] = [];
        const collection_3: number[] = [];
        const result = merge(collection_1, collection_2, collection_3);
        expect(result).toEqual([]);
    });

    test('one empty arrays', () => {
        const collection_1: number[] = [0, 3, 5];
        const collection_2: number[] = [];
        const collection_3: number[] = [6, 4, 2];
        const result = merge(collection_1, collection_2, collection_3);
        expect(result).toEqual([0, 2, 3, 4, 5, 6]);
    });

    test('two empty arrays', () => {
        const collection_1: number[] = [];
        const collection_2: number[] = [];
        const collection_3: number[] = [6, 4, 2];
        const result = merge(collection_1, collection_2, collection_3);
        expect(result).toEqual([2,4,6]);
    });

});