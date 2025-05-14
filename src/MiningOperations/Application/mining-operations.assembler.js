import {MiningOperation} from "@/MiningOperations/Domain/mining-operation.entity.js"

export class MiningOperationAssembler {
    static toEntitiesFromLocalStorage() {
        const operations = localStorage.getItem('miningOperations');
        if (!operations) return [];

        return JSON.parse(operations).map(operation => {
            return this.toEntityFromResource(operation);
        });
    }

    static toEntityFromResource(resource) {
        return new MiningOperation(resource);
    }

    static toResourcesFromEntities(entities) {
        return entities.map(entity => {
            return {
                id: entity.id,
                title: entity.title,
                type: entity.type,
                date: entity.date
            };
        });
    }
}