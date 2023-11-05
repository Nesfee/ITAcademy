export class ObjectManipulator<T> {
    constructor(protected obj: T) {}

    public set<K extends keyof T>(key: K, value: T[K]) {
        return new ObjectManipulator<T>({...this.obj, [key]: value});
    }

    public get<K extends keyof T>(key: K) {
        return this.obj[key];
    }

    public delete<K extends keyof T>(key: K) {
        const newObj = {...this.obj};
        delete newObj[key];
        return new ObjectManipulator<T>(newObj);
    }

    public getObject() {
        return this.obj;
    }
}