import { hydrate } from '../hydration/hydrate';

export class Workout {
    constructor(data = {}) {
        this.workoutId = null;
        this.type = null;
        this.activities = [];

        hydrate(this, data);
    }
}
