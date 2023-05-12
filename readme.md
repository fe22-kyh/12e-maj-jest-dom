# 12e Maj 

I samtliga övningar och material reflektera kring temat för dagen, hur hjälper tester dig att undvika "smelly code"?

## Live-kod

[Live coding examples](live-coding/)

## Material
- Se förgående lektions material

## Övningar
I övningarna försök att tänka i termer av user stories när du skapar testen. Kom ihåg, röd-grön-refactor 
- Röd: skriv testet först (ger rött test)
- Grönt: Analysera och fixa koden så att testet passerar 
- Refactor: Utöka komplexiten i koden och gör om ovanstående

I länken [kraken inn user stories](https://github.com/users/Rolandsson/projects/2) så finns ett par user stories som dagens övning handlar om. Observera följande:
1. En user story ger dig vad testet handlar om och vad det förväntade utfallet är.
2. En user story innehåller tekniska krav i naturlig form, dvs. för att du ska kunna testa user story så måste du först omformulera den till tekniska krav, ex.
   - User story -> "Peter som inloggad användare vill kunna trycka på navigeringen "kundvagn" för att se innehållet i hans kundvagn och få en överblick över kostnaden"
   - Tekniskt krav -> 
     - En knapp i navigeringen som heter "kundvagn" måste finnas synlig på skärmen
     - När knappen är tryckt så ska en lista av kundvaror finns synlig på skärmen
     - En text med kostnaden för varor ska finnas synlig på skärmen

Det går att sätta upp test för API anrop, men medan detta inte är ett krav för dagen (då vi kikar på detta nästa vecka) så uppmanas det ändå att man självständigt letar i dokumentationen för jest om hur detta skulle kunna gå till.

