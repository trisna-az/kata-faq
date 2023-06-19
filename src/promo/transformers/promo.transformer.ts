import { BaseTransformer } from "src/transformer.base"
export class PromoTransformer extends BaseTransformer {
    static singleTransform (element) {
        return {
            id: element.id,
            promo: element.promo,
            deskripsi: element.deskripsi ?? "",
            timestamp: element.timestamp
        }
    }
}