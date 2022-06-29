

class RuleOperatorHandler {

    static operatorHandlerMap = new Map<string, OperatorHandler>([
        ["=", new EqualsHandler()],
        [">", new GreaterThanHandler()]
    ]);

    static getOperatorHandler(operator) {
        return this.operatorHandlerMap.get(operator)
    }
}