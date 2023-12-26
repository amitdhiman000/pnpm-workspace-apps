export class MathUtils {
    static lerp(a: number, b: number, t: number): number {
        return a + t * (b - a);
    }

    static clamp(value: number, lower: number, upper: number): number {
        return Math.min(Math.max(value, lower, upper));
    }
}