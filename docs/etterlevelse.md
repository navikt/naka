---
title: Etterlevelse
---

## Hva er produktet?
"Etterlevelse" / "Støtte til etterlevelse" gir støtte til arbeidet med generelle regelverkskrav som gjelder for bredt for virksomhetens produkter, kalt [etterlevelseskrav](https://data.nav.no/begrep/BEGREP-1873). Løsningen støtter teamene som jobber med produktutvikling i å forstå og dokumentere etterlevelse av disse kravene. 

Kravinnholdet under et tema, forvaltes av de som har ansvaret for lovtolkning i organisasjonen (aka. "kraveier" eller "regelverkseier"). Kraveierne får gjennom løsningen støtte til å redigere og publisere etterlevelseskrav.

Etterlevelsekrav, etterlevelsesdokumentasjon og statistikk på dokumentert etterlevelse gjøres så åpent tilgjengelig som mulig. 

Løsningen er i pilotdrift.


### Hva brukes produktet til?
Produktet adresserer:
* hvilke tema for krav som finnes
* hvilke regelverk som ligger under et tema
* hvem som har ansvar for tolking av regelverk
* hvilke krav og suksesskriterier som finnes for et regelverk
* hvilke spørsmål som er stilt til kraveier på et krav og hvilke svar som er gitt
* hvordan team dokumenterer sin etterlevelse
  * eksport av dokumentert etterlevelse til Word
  * arkivering av dokumentert etterlevelse til Websak


### Hvordan komme i gang?
Dette er en ny løsning som erstatter det tidligere regnearket med 136 etterlevelseskrav. Løsning og innhold er i pilotering og endres fortløpende. Ta kontakt på Slack [#etterlevelse](https://nav-it.slack.com/archives/C01V697SSR2 og be om en introduksjon og deltakelse i pilotering.

### Lenker
* [Om etterlevelsekrav i systemutvikling på Navet](https://navno.sharepoint.com/sites/intranett-utvikling/SitePages/Etterlevelseskrav.aspx)
* [Etterlevelse (prod)](https://etterlevelse.intern.nav.no/)
* [Etterlevelse (test)](https://etterlevelse.dev.intern.nav.no/)
* ["Om" seksjonen i selve løsningen](https://etterlevelse.intern.nav.no/help)

### Kontaktinformasjon
[Team Datajegerne](https://teamkatalog.nav.no/team/264cebfa-ad46-4af9-8867-592f99f491e6) utvikler og forvalter løsningen. Du kan nå teamet på slack [#etterlevelse](https://nav-it.slack.com/archives/C01V697SSR2)


### Administratorfunksjoner
* Administrasjon av tilgang til applikasjonen for kraveier og administrator.
* Administrering av kodelister, for å sikre datakvalitet er en rekke felter i løsningen basert på internt kontrollerte kodeverk. 
* Versjonshistorikk som inkludert timestamp , hvem som har endret noe, samt et snapshot av hele dataobjektet når det ble endret.

### Kildekode
* [Repo](https://github.com/navikt/etterlevelse)

### API
* [Swagger API](https://etterlevelse-api.intern.nav.no/swagger-ui/index.html)
* [Swagger API (Test)](https://etterlevelse-api.dev.intern.nav.no/swagger-ui/index.html)

### Datasett
* [Etterlevelseskrav i Metabase](https://metabase.intern.nav.no/browse/95-teamdatajegerne-etterlevelse-krav)
* [Etterlevelsesdokumentasjon i Metabase](https://metabase.intern.nav.no/browse/96-teamdatajegerne-etterlevelse-etterlevelse)

### Tilgang og headers
API er åpent for lesing uten innlogging. Enkelte funksjoner (som ikke er naturlig at andre system ikke skal ha tilgang til) er begrenset. Kontakt #datajegerne for mer info.

Headers
* Authorizaion - Systemer kan sende med Azure access token som Bearer token
* Nav-Call-Id - optional callId/correlation id to set for log tracing
* Nav-Consumer-Id - optional but strongly suggested to trace source of requests
