class RuleCondition {
    

    private field: string
    private operator: string
    private value: string

    constructor(field: string, operator: string, value: string, priority: number) {
        this.field = field;
        this.operator = operator;
        this.value = value;
    }

    public isSatisfied(object): boolean {
        return RuleOperatorHandler.getOperatorHandler(this.operator).checkIfSatisied(object, this.field, this.value)
    }
}