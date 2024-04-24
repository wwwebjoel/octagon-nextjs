export function transformNumber(number: number): number {
    const transformations: { [key: number]: number } = {0: 3, 1: 4, 2: 5, 3: 6, 4: 7, 5: 8, 6: 1, 7: 2};
    return transformations[number] || number;
}