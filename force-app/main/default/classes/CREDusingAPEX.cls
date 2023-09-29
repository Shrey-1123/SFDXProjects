public with sharing class CREDusingAPEX {
    public CREDusingAPEX() {

    }
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts()
    {
        return [select Id,Name,Phone from Account];
    }
}