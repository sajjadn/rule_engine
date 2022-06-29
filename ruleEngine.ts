class RuleEngine {
    rules: Rule[] 

    constructor(rules: Rules[]) {
        this.rules = rules;
    }

    public evaluate(object): Rule {
        sortedRules = this.rules.sort((rule1, rule2) => {
            return rule1.priority - rule2.priority;
        });
        for(var rule in sortedRules) {
            if(rule.isSatisfied()) {
                return rule;
            }
        }
    }
}