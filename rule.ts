class Rule {
    private RuleCondition[] conditions;
    private priority: number

    constructor(ruleConditions: RuleCondition[], priority: number) {
        this.conditions = ruleConditions
        this.priority = priority;
    }

    public isSatisfied(object): boolean {
        for(var condition in this.conditions) {
            if (!condition.isSatisfied(object)) {
                return false;
            }
        }
        return true;
    }

}