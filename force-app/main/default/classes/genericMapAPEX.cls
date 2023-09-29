public with sharing class genericMapAPEX {
    public genericMapAPEX() {

    }

    @AuraEnabled(cacheable=true)
    public static List<Account> getRecord(String recordId){
        try {

            return [Select Id,Name,BillingStreet,BillingCity,BillingPostalCode,BillingState,BillingCountry from Account where Id=:recordId];

            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}