interface Trapezoid {
    selected: boolean;
    data: string | null;
}

interface Level {
    octagon: (state: State) => State;
    level: number;
    selected: boolean;
    trapezoid: Record<number, Trapezoid>;
}

interface State {
    [levelKey: string]: Level;
}

export const getNonNullTrapezoidDataValues = (state: State): string[] => {
    const nonNullDataValues: string[] = [];

    Object.values(state).forEach(level => {
        Object.values(level.trapezoid).forEach(trapezoid => {
            if (trapezoid.data !== null) {
                nonNullDataValues.push(trapezoid.data);
            }
        });
    });

    return nonNullDataValues;
};
