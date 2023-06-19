import { BaseTransformer } from "src/transformer.base"
export class TodoTransformer extends BaseTransformer {
    static singleTransform (element) {
        return {
            id: element.id,
            kritik: element.kritik,
            saran: element.saran,
            promo: element.promo ?? "",
            timestamp: element.timestamp
        }
    }
}