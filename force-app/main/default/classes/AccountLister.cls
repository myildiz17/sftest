public with sharing class AccountLister {
    public AccountLister() {

    }

    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts(){
        return [SELECT Id, Name, Type, Industry FROM Account ];
    }

    @AuraEnabled(cacheable=true)
    public static List<Account> getFilteredAccounts(String type){
        return [SELECT Id, Name, Type, Industry FROM Account WHERE Type=: type];
    }
}
