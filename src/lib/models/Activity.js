import { hydrate } from '@/lib/hydration/hydrate';

export class Activity {
    constructor(data = {}) {
        this.machine = null;
        this.weight = null;
        this.modifiers = [];

        hydrate(this, data);
    }
}
