---
title: Behandlingskatalog
---

## Hva er produktet?
Behandlingskatalogen gir en oversikt over alle behandlinger NAV gjør med personopplysninger. Eksempler på behandlinger kan være å saksbehandle alderspensjon, gi bruker innsyn i personopplysninger, utarbeide arbeidsmarkedsstatistikk, gjennomføre medarbeidersamtale osv. 

Alle behandlinger beskriver:
* hvilke personopplysninger de bruker, kalt _opplysningstyper_ 
* hva som er det _behandlingsgrunnlaget_ for bruken av personopplysninger i behandlingen
* hva man ønsker å oppnå med behandlingen, kalt _formål_
* hvor i organisasjonen behandlingen utføres, hvor den eies og hvor tilhørende IT-løsninger forvaltes
* lagringstid, automatisk behandling, bruk av databehandlere mm.

Den primære **hensikten** med Behandlingskatalogen er å ivareta [Personopplysningslovens artikkel 30](https://lovdata.no/lov/2018-06-15-38/gdpr/a30), krav til en behandlingsoversikt (en protokoll over alle behandlinger en virksomhet utfører på personopplysninger). Informasjonen i katalogen er nyttig utover å dokumentere compliance til Personopplysningsloven da det kan være et godt oppslagsverk for mange spørsmål som vist under.

## Hva kan man bruke det til?
Behandlingskatalogen skal først og fremst gi en komplett oversikt over alle behandlinger etaten utfører på personopplysninger. Løsningen kan også gi svar på spørsmål som:
* Hva slags personopplsninger har vi i NAV?
* Hva bruker vi disse personopplysningene til?
* Hvor henter vi ulike personopplysninger fra?
* Hva utleverer vi til en konkret ekstern part?
* Hva er behandlingsgrunnlaget (rettslige grunnlaget) for bruk av f.eks fengselsopphold i barnebidragssaker?
* På hvilke områder bruker vi sensitive personopplysninger (særlige kategorier) som f.eks. sykdomsdiagnose?
* Hvor lenge lagrer vi personopplysninger ifm. en behandling, f.eks. i en uføretrygdsak?
* Hva er alle behandlinger som en avdeling er ansvarlig for, f.eks. Ytelsesavdeling?
* Hva er alle behandlinger som utføres et sted i linja, f.eks. NAV Familie og pensjonsytelser?
* Hva er alle behandlinger som har IT-systemer som et gitt produktteam forvalter, f.eks. Team Bidrag?
* Hvilke personopplysninger er det lov å bruke ifm. en behandling, f.eks. saksbehandling av sykepenger?


## Hvordan komme i gang?
Lenker til løsningen finnes under. 

For de av dere som skal dokumentere en hel behandling, velg _behandling_ i venstremenyen, og dertter _+ Opprett ny_. Fyll så ut skjemaet. Til slutt skal du knytte opplysningstyper til behandlingen, og dette kan gjøres på to måter:
1. Legg til en og en opplysningstype ved å klikke på _+ Opplysningstyper_
2. Legg til et eksisterende dokument (en samling av opplysningstyper) ved å klikke på _+ Dokument_
Et godt tips her er å gå inn på _+ Dokument_ og deretter velge _Standard opplysningstyper_, som da vil legge til noen titalls standard opplysningstyper på en gang. 

**Produksjon**
Alle NAV-ansatte har tilgang til løsningen: [Behandlingskatalogen](https://behandlingskatalog.intern.nav.no/). 

**Test / Preprod**
Alle i NAV har både lese- og skrivetilgang til løsningen i preprod:[Behandlingskatalogen (Test)](https://behandlingskatalog.intern.dev.nav.no/)


## Kontaktinformasjon
[Team Datajegerne](https://teamkatalog.nav.no/team/264cebfa-ad46-4af9-8867-592f99f491e6) utvikler og forvalter løsningen. Du kan nå teamet på slack [#behandlingskatalogen](https://nav-it.slack.com/archives/CR1B19E6L)


## Litt om arkitektur
Behandlingskatalogen består av backend (java spring boot) Polly (fra "Policy Catalog") og en frontend (react app).
All data er åpent tilgjengelig internt i NAV uten innlogging. Brukere med skrivetilgang kan endre data. Innlogging skjer via Single Sign-On via Azure AD, brukere i frontend vil få en session cookie som varer i 14 dager. APIet støtter innlogging via Authorization header med Bearer token (access token fra Azure).

Løsningen bruker PostgreSQL som datakilde men de fleste felter er lagret i JSONB kolonner.
Eksterne kilder til data inkluderer teamkatalogen og begrepskatalogen og felles kodeverk.

### Administratorer (per nå datajegerne) kan aksessere noen få admin funksjoner
* Administrasjon av tilgang til applikasjonen.
* Versjonshistorikk som inkludert timestamp , hvem som har endret noe, samt et snapshot av hele dataobjektet når det ble endret.
* Administrering av kodelister, for å sikre datakvalitet er en rekke felter i løsningen basert på internt kontrollerte kodeverk. (Om noen av disse skal flyttes ut og bli NAV-kodeverk er en pågående diskusjon)

### Kildekode
* [Repo](https://github.com/navikt/polly)

### API
* [Swagger API](https://behandlingskatalog-backend.intern.nav.no/swagger-ui/index.html)
* [Swagger API (Test)](https://behandlingskatalog-backend.intern.dev.nav.no/swagger-ui/index.html)

### Datasett
* [Behandlingskatalogen datasett](https://data.adeo.no/datapakke/37427aeae539aba2dee2c40ae4ac9319) (mangelfullt, under arbeid)

### Tilgang og headers
API er åpent for lesing for alle Nav-ansatte på en Nav-innrullert enhet, men eksponeres ikke eksternt utenfor Nav. 
Skriving og enkelte administrative funksjoner er begrenset med rollestyring. Kontakt på #behandlingskatalogen for mer info.

Headers
* Authorization - Systemer kan sende med Azure access token som Bearer token
* Nav-Call-Id - optional callId/correlation id to set for log tracing
* Nav-Consumer-Id - optional but strongly suggested to trace source of requests

![alt text](https://github.com/navikt/naka/blob/main/static/img/seal.png)
