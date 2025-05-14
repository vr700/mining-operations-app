import {MiningOperationAssembler} from "@/MiningOperations/Application/mining-operations.assembler.js";
import {MiningOperation} from "@/MiningOperations/Domain/mining-operation.entity.js";

export class MiningOperationService {
    async getAll() {
        const operations = MiningOperationAssembler.toEntitiesFromLocalStorage();
        return {status: 200, data: operations};
    }

    async create(operation) {
        try {
            const operations = MiningOperationAssembler.toEntitiesFromLocalStorage();
            const newOperation = new MiningOperation(operation);


            if (!newOperation.title || !newOperation.type || !newOperation.date) {
                throw new Error('Missing required fields');
            }

            operations.push(newOperation);
            localStorage.setItem('miningOperations',
                JSON.stringify(MiningOperationAssembler.toResourcesFromEntities(operations)));

            return {status: 201, data: newOperation};
        } catch (error) {
            console.error('Error in create operation:', error);
            throw error;
        }
    }

    async delete(id) {
        let operations = MiningOperationAssembler.toEntitiesFromLocalStorage();
        operations = operations.filter(op => op.id !== id);

        localStorage.setItem('miningOperations',
            JSON.stringify(MiningOperationAssembler.toResourcesFromEntities(operations)));

        return {status: 200, data: {id}};
    }
}