"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[506],{1736:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return g},toc:function(){return d},default:function(){return p}});var t=r(7462),l=r(3366),a=(r(7294),r(3905)),i=["components"],s={title:"Veileder til Behandlingskatalogen - forvaltning og utfylling"},o=void 0,g={unversionedId:"behandlingskatalog",id:"behandlingskatalog",isDocsHomePage:!1,title:"Veileder til Behandlingskatalogen - forvaltning og utfylling",description:"alt text",source:"@site/docs/behandlingskatalog.md",sourceDirName:".",slug:"/behandlingskatalog",permalink:"/naka/behandlingskatalog",editUrl:"https://github.com/navikt/naka/edit/main/docs/behandlingskatalog.md",tags:[],version:"current",frontMatter:{title:"Veileder til Behandlingskatalogen - forvaltning og utfylling"},sidebar:"tutorialSidebar",previous:{title:"Begrepskatalog",permalink:"/naka/begrepskatalogen"},next:{title:"Etterlevelse",permalink:"/naka/etterlevelse"}},d=[{value:"1.\tHva  er en behandlingsoversikt, og hvorfor er det n\xf8dvendig ?",id:"1hva--er-en-behandlingsoversikt-og-hvorfor-er-det-n\xf8dvendig-",children:[]},{value:"2.\tIntroduksjon til veilederen  og ansvarsfordeling",id:"2introduksjon-til-veilederen--og-ansvarsfordeling",children:[{value:"2.1 Hvem har ansvaret for Behandlingskatalogen",id:"21-hvem-har-ansvaret-for-behandlingskatalogen",children:[]},{value:"2.2 Oppdatering og endring av innhold",id:"22-oppdatering-og-endring-av-innhold",children:[]},{value:"2.3 Innsyn",id:"23-innsyn",children:[]}]},{value:"3.\tUtfylling av feltene i Behandlingskatalogen",id:"3utfylling-av-feltene-i-behandlingskatalogen",children:[{value:"3.1\tHvilken behandlingsaktivitet brukes personopplysningene til?",id:"31hvilken-behandlingsaktivitet-brukes-personopplysningene-til",children:[]},{value:"3.2\tHva er form\xe5let  med behandlingen av personopplysningene?",id:"32hva-er-form\xe5let--med-behandlingen-av-personopplysningene",children:[]},{value:"3.3\tHvem er ansvarlig for behandlingen?",id:"33hvem-er-ansvarlig-for-behandlingen",children:[]},{value:"3.4\tHva er behandlingsgrunnlaget for behandlingen?",id:"34hva-er-behandlingsgrunnlaget-for-behandlingen",children:[]},{value:"3.5\tBlir det gjort helautomatiserte individuelle avgj\xf8relser og brukes profilering?",id:"35blir-det-gjort-helautomatiserte-individuelle-avgj\xf8relser-og-brukes-profilering",children:[]},{value:"3.6\tDatabehandlere og andre tredjeparter",id:"36databehandlere-og-andre-tredjeparter",children:[]},{value:"3.7\tAnnet",id:"37annet",children:[]},{value:"3.8\tHvilken tidsfrist har dere satt for hvor lenge personopplysningene skal lagres?",id:"38hvilken-tidsfrist-har-dere-satt-for-hvor-lenge-personopplysningene-skal-lagres",children:[]},{value:"3.9\tPersonvernkonsekvensvurdering (PVK)",id:"39personvernkonsekvensvurdering-pvk",children:[]},{value:"3.10\tPersonopplysninger i behandlingen",id:"310personopplysninger-i-behandlingen",children:[]}]},{value:"Hva kan man bruke det til?",id:"hva-kan-man-bruke-det-til",children:[]},{value:"Hvordan komme i gang?",id:"hvordan-komme-i-gang",children:[]},{value:"Kontaktinformasjon",id:"kontaktinformasjon",children:[]},{value:"Litt om arkitektur",id:"litt-om-arkitektur",children:[{value:"Administratorer (per n\xe5 datajegerne) kan aksessere noen f\xe5 admin funksjoner",id:"administratorer-per-n\xe5-datajegerne-kan-aksessere-noen-f\xe5-admin-funksjoner",children:[]},{value:"Kildekode",id:"kildekode",children:[]},{value:"API",id:"api",children:[]},{value:"Datasett",id:"datasett",children:[]},{value:"Tilgang og headers",id:"tilgang-og-headers",children:[]}]}],k={toc:d};function p(e){var n=e.components,r=(0,l.Z)(e,i);return(0,a.kt)("wrapper",(0,t.Z)({},k,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://github.com/navikt/naka/assets/138101809/5f8faf7b-c886-49a4-b608-2c2ae25c5e29",alt:"alt text"})," "),(0,a.kt)("h2",{id:"1hva--er-en-behandlingsoversikt-og-hvorfor-er-det-n\xf8dvendig-"},"1.\tHva  er en behandlingsoversikt, og hvorfor er det n\xf8dvendig ?"),(0,a.kt)("p",null,"Alle virksomheter som behandler personopplysninger, har en plikt til \xe5 f\xf8re en oversikt (protokoll) over alle behandlingsaktiviteter som gj\xf8res i sin virksomhet. Dette gjelder alle handlinger som gj\xf8res ved \xe5 behandle personopplysninger, som n\xe5r vi henter dem inn, n\xe5r vi sammenstiller dem, n\xe5r vi s\xf8ker, n\xe5r vi lagrer, bruker, utleverer, anonymiserer og sletter personopplysninger. For NAV betyr det alle aktiviteter p\xe5 Arbeids- og velferdsetatens ansvarsomr\xe5de: direktoratet og enheter i linjene m\xe5 lage en oversikt p\xe5 sine omr\xe5der, og hver kommune har plikt til \xe5 f\xf8re en oversikt for sine ansvarsomr\xe5der i NAV-kontoret.\nNAV har laget en egen systeml\xf8sning, Behandlingskatalogen, som er et godt hjelpemiddel n\xe5r vi skal dokumentere at vi etterlever pliktene vi har som behandlingsansvarlig   etter artikkel 30 i personvernforordningen. Behandlingskatalogen gir oss kontroll og oversikt over NAVs behandling av personopplysninger og beskytter rettighetene til alle vi har opplysninger om.\nArtikkel 30 i personvernforordningen stiller en rekke obligatoriske krav til hva en behandlingsoversikt skal inneholde av informasjon.\nDet er flere begreper innenfor personvern det kan v\xe6re nyttig \xe5 ha kjennskap til f\xf8r registrering i behandlingskatalogen. Disse er definert   og utdypet p\xe5 personvernsidene v\xe5re p\xe5 Navet  og i Begrepskatalogen. Det kan v\xe6re nyttig \xe5 kjenne til f\xf8lgende begreper:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Personopplysninger"),(0,a.kt)("li",{parentName:"ul"},"S\xe6rlige kategorier av personopplysninger"),(0,a.kt)("li",{parentName:"ul"},"Den registrerte"),(0,a.kt)("li",{parentName:"ul"},"Behandling av personopplysninger"),(0,a.kt)("li",{parentName:"ul"},"Behandlingsansvarlig"),(0,a.kt)("li",{parentName:"ul"},"Databehandler"),(0,a.kt)("li",{parentName:"ul"},"Behandlingsgrunnlag")),(0,a.kt)("h2",{id:"2introduksjon-til-veilederen--og-ansvarsfordeling"},"2.\tIntroduksjon til veilederen  og ansvarsfordeling"),(0,a.kt)("p",null,"Denne veilederen er ment som hjelp og st\xf8tte til forvaltning og utfylling av innholdet i Behandlingskatalogen."),(0,a.kt)("p",null,"Veilederen beskriver hvem som har ansvaret og hvordan Behandlingskatalogen skal oppdateres.  Behandlingskatalogen er tilgjengelig for alle medarbeidere i NAV og er tilgjengelig p\xe5 ",(0,a.kt)("img",{parentName:"p",src:"https://behandlingskatalog.intern.nav.no/",alt:"alt text"}),".\nVeilederen beskriver hvilken informasjon som skal registreres for hver behandlingsaktivitet, og den gir eksempler p\xe5 kategorier eller alternativer der det er relevant. "),(0,a.kt)("h3",{id:"21-hvem-har-ansvaret-for-behandlingskatalogen"},"2.1 Hvem har ansvaret for Behandlingskatalogen"),(0,a.kt)("p",null,"Ansvarsfordelingen f\xf8lger av Ansvarsdokumentet for direktoratet pkt. 3.5 og Styringsdokument for personvern kap. 5. Ansvaret er ogs\xe5 tatt inn i M\xe5l- og disponeringsbrevet  til avdelingene."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"R\xe5dgivningsseksjonen i Juridisk avdeling"),(0,a.kt)("br",{parentName:"p"}),"\n","R\xe5dgivningsseksjonen, som er ansvarlig for personvernregelverket, gir f\xf8ringer for verkt\xf8yet Behandlingskatalogen  , slik at den legger til rette for \xe5 dokumentere behandlingene NAV gj\xf8r med personopplysninger p\xe5 en oversiktlig m\xe5te, i tr\xe5d med kravene som stilles i personvernforordningen artikkel 30. Seksjon for informasjonsforvaltning har det overordnede ansvaret for etterlevelsesprosessen, og har dermed ogs\xe5 en rolle i \xe5 bidra til videreutviklingen av verkt\xf8yet."),(0,a.kt)("p",null,"R\xe5dgivningsseksjonen har ogs\xe5 ansvar for \xe5 gi juridisk r\xe5dgivning ved utfylling av Behandlingskatalogen."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Personvernombudet"),"\nPersonvernombudet skal bidra til \xe5 p\xe5se at etaten har en oversikt over all behandling av personopplysninger og gi r\xe5d og veiledning ved behov."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Ansvars- og linjeomr\xe5der"),"\nFagansvarlig for hvert ansvarsomr\xe5de eller linjeomr\xe5de i NAV, i henhold til ansvarsdokumentet, er ansvarlig for \xe5 fylle ut Behandlingskatalogen, holde den oppdatert ved endringer og sikre at nye behandlingsaktiviteter registreres. "),(0,a.kt)("p",null,"For ansatte i team som jobber med produktutvikling, ligger som regel ansvaret for \xe5 s\xf8rge for registrering og endring i Behandlingskatalogen til teamet, mens det overordnede ansvaret for registreringene f\xf8lger fagansvaret. Det betyr at fagansvarlig i linja m\xe5 s\xf8rge for \xe5 f\xf8re jevnlig kontroll med det som er registrert i Behandlingskatalogen."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Alle medarbeidere"),"\nAlle medarbeidere skal v\xe6re kjent med at NAV har en Behandlingskatalog, hva som er form\xe5let med den og hvordan endringer av innholdet i Behandlingskatalogen skal meldes i linja eller registreres. Behandlingskatalogen er ogs\xe5 \xe5pen for redigering for alle NAV-ansatte."),(0,a.kt)("h3",{id:"22-oppdatering-og-endring-av-innhold"},"2.2 Oppdatering og endring av innhold"),(0,a.kt)("p",null,"Behandlingskatalogen skal dokumentere hvilke behandlinger av personopplysninger som gj\xf8res i NAV. Dersom det iverksettes nye behandlinger eller det gj\xf8res endringer p\xe5 eksisterende behandlinger, skal dette oppdateres i Behandlingskatalogen f\xf8r behandlingen starter, i tr\xe5d med ansvarsfordelingen som nevnt i pkt. 2.1 over. Personvernkravene i verkt\xf8yet \xabSt\xf8tte til etterlevelse\xbb vil identifisere n\xe5r det er behov for \xe5 oppdatere behandlingen i Behandlingskatalogen. Dersom det er behov for en ny overordnet behandlingsaktivitet, kan dette bes om p\xe5 Slack p\xe5 kanalen #behandlingskatalogen eller per e-post til ",(0,a.kt)("a",{parentName:"p",href:"mailto:nav.juridisk.avdeling@nav.no"},"nav.juridisk.avdeling@nav.no"),"  dersom du ikke er p\xe5 Slack. "),(0,a.kt)("p",null,"Dersom det blant ansatte i linja utenfor direktoratet avdekkes at det er behov for endringer i allerede registrerte behandlingsaktiviteter eller en vurderer at det er behov for \xe5 legge til en ny behandlingsaktivitet, m\xe5 fagansvarlig i direktoratet (eller linja) kontaktes for dialog om hvordan det er mest hensiktsmessig \xe5 l\xf8se dette behovet. "),(0,a.kt)("h3",{id:"23-innsyn"},"2.3 Innsyn"),(0,a.kt)("p",null,"Behandlingskatalogen har en funksjon for \xe5 eksportere behandlingsaktivitetene til en rapport i Word-format. Denne kan blant annet benyttes til \xe5 gi innsyn i det som er registrert av behandlingsaktiviteter, etter foresp\xf8rsel fra de registrerte, tilsynsmyndighetene og andre interessenter. Behandlinger som er registrert med status p\xe5 utfylling satt til \xabFerdig dokumentert\xbb vil inkluderes i denne rapporten. I s\xe6rskilte tilfeller kan enkelte behandlingsomr\xe5der unntas offentlighet etter unntaksbestemmelser i offentleglova.    "),(0,a.kt)("h2",{id:"3utfylling-av-feltene-i-behandlingskatalogen"},"3.\tUtfylling av feltene i Behandlingskatalogen"),(0,a.kt)("p",null,"Registreringsbildet i Behandlingskatalogen ser slik ut. Det er lagt inn hjelpetekster til de ulike feltene som kommer frem n\xe5r man holder musepekeren over det bl\xe5 ikonet med et sp\xf8rsm\xe5lstegn. "),(0,a.kt)("p",null,"Det er ogs\xe5 viktig \xe5 merke seg at den som registrerer m\xe5 huke av i registreringsbildet under \xabStatus p\xe5 utfylling\xbb n\xe5r behandlingen er ferdig dokumentert."),(0,a.kt)("h3",{id:"31hvilken-behandlingsaktivitet-brukes-personopplysningene-til"},"3.1\tHvilken behandlingsaktivitet brukes personopplysningene til?"),(0,a.kt)("p",null,"Behandlingskatalogen er inndelt i to niv\xe5er av behandlinger: Overordnet behandlingsaktivitet og behandling. De overordnede behandlingsaktivitetene er standardiserte, mens man selv fyller inn tittelen p\xe5 behandlingen i et fritekstfelt (markert med \xabNavn\xbb)."),(0,a.kt)("p",null,"Eksempler p\xe5 ulike overordnede behandlingsaktiviteter: Oppf\xf8lging mot arbeid, erstatningskrav, forvaltning av registre, medarbeideroppf\xf8lging, hjelpemidler, eiendomsforvaltning, barnetrygd og alderspensjon."),(0,a.kt)("p",null,"Eksempler p\xe5 ulike behandlinger: arbeidsrettet brukeroppf\xf8lging, dagpengestatistikk, NAVs brukerunders\xf8kelser, saksbehandling sykepenger, saksbehandling foreldrepenger, leverand\xf8rstyring, trygdesvindel, internrevisjon, dokumenth\xe5ndtering, HR-prosesser, kameraoverv\xe5king og tilgangskontroller.\nHver behandlingsaktivitet skal ha en egen registrering. Dere definerer selv p\xe5 hvilket niv\xe5 tjeneste- eller fagomr\xe5der skal splittes opp, men det skal gj\xf8res i henhold til f\xf8lgende kriterier:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"En behandlingsaktivitet m\xe5 tilh\xf8re et logisk, samlet og tydelig definert form\xe5l. Dersom det ikke er mulig \xe5 definere en aktivitet under et form\xe5l, b\xf8r det deles opp i flere behandlingsaktiviteter."),(0,a.kt)("li",{parentName:"ul"},"Hver behandlingsaktivitet skal kun ha ett behandlingsgrunnlag. Eksempel: Hvis det innenfor en behandlingsaktivitet brukes b\xe5de ut\xf8velse av offentlig myndighetsut\xf8velse med hjemmel i lov eller forskrift og bruk av samtykke som behandlingsgrunnlag, b\xf8r den splittes opp."),(0,a.kt)("li",{parentName:"ul"},"Dersom en behandlingsaktivitet best\xe5r av b\xe5de helautomatiserte prosesser og manuelle prosesser, b\xf8r dere vurdere \xe5 dele den opp i flere aktiviteter.")),(0,a.kt)("p",null,"Eksempel:\nFago mr\xe5det \xabHjelpemidler\xbb kan grupperes under et felles form\xe5l:\n\xabKompensere for bestemte utgifter til bedring av arbeidsevnen og funksjonsevnen i arbeidslivet og dagliglivet for medlemmer som har sykdom, skade eller lyte, jf. folketrygdloven \xa7 10-7\xbb. "),(0,a.kt)("p",null,"Behandlingsgrunnlaget f\xf8lger av folketrygdlovens kap. 10 og er ut\xf8velse av offentlig myndighet etter personvernforordningen, jf. Art. 6 (1) e og art. 9 (2) b. Dette taler for at vi kan gruppere det som kun \xe9n behandlingsaktivitet. Men siden det er store variasjoner i hvilke kategorier av personopplysninger som behandles, ulikt behandlingsgrunnlag og bruk av tredjeparter som databehandlere, m\xe5 det likevel deles opp i flere behandlingsaktiviteter ."),(0,a.kt)("h3",{id:"32hva-er-form\xe5let--med-behandlingen-av-personopplysningene"},"3.2\tHva er form\xe5let  med behandlingen av personopplysningene?"),(0,a.kt)("p",null,"Angi form\xe5let med innsamling og bruk av personopplysningene innen tjeneste- eller fagomr\xe5det. Form\xe5let skal v\xe6re spesifikt og legitimt. Det betyr at form\xe5let m\xe5 angis slik at det er tydelig at det er dekket av behandlingsgrunnlaget. Form\xe5lene vil for NAV sin del ofte f\xf8lge av lovbestemmelsen/kapittelet i folketrygdloven eller NAV-loven som er behandlingsgrunnlaget for den aktuelle behandlingen. Dersom opplysningene skal brukes til flere form\xe5l, vil det si at det i praksis er snakk om flere ulike behandlinger. Det m\xe5 derfor ogs\xe5 registreres som flere behandlinger i Behandlingskatalogen. "),(0,a.kt)("p",null,"Eksempel p\xe5 beskrivelse av form\xe5l :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Tjenesteomr\xe5de: Alderspensjon",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Form\xe5l: Behandle og vurdere rett til alderspensjon som skal sikre inntekt for personer i alderdommen og legge til rette for en fleksibel og gradvis overgang fra arbeid til pensjon."))),(0,a.kt)("li",{parentName:"ul"},"Tjenesteomr\xe5de: Barnetrygd",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Form\xe5l: Behandle og vurdere rett til barnetrygd som ikke er gitt automatisk. Barnetrygd skal dekke utgifter til fors\xf8rgelse av barn."))),(0,a.kt)("li",{parentName:"ul"},"Tjenesteomr\xe5de: Ortopediske hjelpemidler",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Form\xe5l: Behandle og vurdere rett til st\xf8nad ved behov for n\xf8dvendige og hensiktsmessige ortopediske hjelpemidler ved varige og vesentlige funksjonsforstyrrelser i st\xf8tte- og bevegelsesorganene")))),(0,a.kt)("h3",{id:"33hvem-er-ansvarlig-for-behandlingen"},"3.3\tHvem er ansvarlig for behandlingen?"),(0,a.kt)("p",null,"Hver avdeling skal registrere de behandlingsaktivitetene som de har fagansvaret og eventuelt linjeansvaret for. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Seksjon/ Enhet "),"\nOppgi navn p\xe5 avdelingen og enheten/seksjonen i avdelingen eller i styringslinjen der det operative ansvaret for fagomr\xe5det/behandlingen ligger. Dersom det er aktuelt kan det ogs\xe5 registreres hvilket utviklingsteam som er ansvarlig for behandlingen. "),(0,a.kt)("p",null,"Eksempel:\nAvdeling: Ytelsesavdelingen. Linja:  NAV Familie- og pensjonsytelser. Team: Pensjon Saksbehandling."),(0,a.kt)("h3",{id:"34hva-er-behandlingsgrunnlaget-for-behandlingen"},"3.4\tHva er behandlingsgrunnlaget for behandlingen?"),(0,a.kt)("p",null,"All behandling av personopplysninger m\xe5 ha et behandlingsgrunnlag.\nOppgi hvilket behandlingsgrunnlag som ligger til grunn for behandlingen. If\xf8lge personvernforordningen er det seks mulige rettsgrunnlag som kan benyttes, og det er laget en nedtrekksmeny i registreringsbildet. Dersom det er to rettslige grunnlag som ligger til grunn for behandlingen, tilsier det at omr\xe5det eller aktiviteten m\xe5 splittes opp i to registreringer.\nDu kan lese om de forskjellige behandlingsgrunnlagene p\xe5 Navet."),(0,a.kt)("p",null,"Er du i tvil   om hvilket rettsgrunnlag som kan anvendes, ta kontakt med fagansvarlig p\xe5 omr\xe5det for veiledning. Dersom fagansvarlig har behov for veiledning, kan dette bes om p\xe5 kanalen #behandlingskatalogen p\xe5 Slack, eller per e-post til ",(0,a.kt)("a",{parentName:"p",href:"mailto:nav.juridisk.avdeling@nav.no"},"nav.juridisk.avdeling@nav.no")," dersom du ikke er p\xe5 Slack. "),(0,a.kt)("p",null,"Hvis det rettslige grunnlaget for behandlingen er rettslig forpliktelse etter Art. 6 (1) c eller offentlig myndighetsut\xf8velse etter Art. 6 (1) e, \xe5pnes et nytt felt for \xe5 registrere dette. Det supplerende rettsgrunnlaget skal finnes i norsk lovgivning, og b\xf8r angis s\xe5 presist som mulig. Kan man peke p\xe5 en bestemt lov- og forskriftsbestemmelse, b\xf8r denne oppgis."),(0,a.kt)("p",null,"Eksempel : For saksbehandling av sykepengesaker vil behandlingsgrunnlaget v\xe6re Art. 6 (1) e. Det supplerende rettsgrunnlaget vil v\xe6re folketrygdlovens kap. 8. "),(0,a.kt)("p",null,"Dersom det rettslige grunnlaget er Art. 6 (1) f, \xe5pnes et nytt felt hvor det m\xe5 det angis hvilken berettiget interesse NAV benytter seg av i denne behandlingen. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Dersom s\xe6rlige kategorier av personopplysninger behandles, m\xe5 behandlingsgrunnlaget i artikkel 9 spesifiseres"),"\nBehandling av s\xe6rlige kategorier av personopplysninger er i utgangspunktet ikke lov. Personvernforordningen beskriver ti unntak fra dette forbudet. Det riktige unntaket velges i nedtrekksmenyen i registreringsbildet. For NAV vil behandlingsgrunnlaget som hovedregel f\xf8lge av art. 9 (2) a og b."),(0,a.kt)("h3",{id:"35blir-det-gjort-helautomatiserte-individuelle-avgj\xf8relser-og-brukes-profilering"},"3.5\tBlir det gjort helautomatiserte individuelle avgj\xf8relser og brukes profilering?"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Helautomatiserte avgj\xf8relser"),"\nTas det avgj\xf8relser som gjelder en person uten at det gj\xf8res noen menneskelige vurderinger, m\xe5 det angis at behandlingen er helautomatisert. For at det skal v\xe6re snakk om en helautomatisk avgj\xf8relse, m\xe5 det dreie seg om avgj\xf8relser som har rettsvirkninger eller som har store konsekvenser for den enkelte. Under dette punktet registreres det \xabJa\xbb, \xabNei\xbb eller \xabUavklart\xbb. Dersom det registreres at det er uavklart, m\xe5 dette avklares omg\xe5ende og etterregistreres. Omr\xe5der der vedtaksprosessen i dag er helautomatisert, er barnetrygd, pensjon og foreldrepengeomr\xe5det."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Profilering"),"\nMed profilering mener vi enhver form for automatisert behandling som inneb\xe6rer \xe5 bruke opplysningene til \xe5 vurdere visse personlige aspekter knyttet til en person. For eksempel kan profilering brukes for \xe5 analysere eller forutsi en persons \xf8konomiske situasjon eller helse."),(0,a.kt)("p",null,"Under dette punktet registreres det \xabJa\xbb, \xabNei\xbb eller \xabUavklart\xbb. Dersom det registreres at det er uavklart, m\xe5 dette avklares omg\xe5ende og etterregistreres. "),(0,a.kt)("h3",{id:"36databehandlere-og-andre-tredjeparter"},"3.6\tDatabehandlere og andre tredjeparter"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Benyttes det databehandler(e)?")),(0,a.kt)("p",null,"Dersom det benyttes databehandlere, skal dette oppgis her. Svar \xabJa\xbb, \xabNei\xbb eller \xabUavklart\xbb i dette feltet. Dersom du svarer \xabJa\xbb, skal databehandleren velges fra nedtrekksmenyen. Dersom du svarer \xabUavklart\xbb, skal dette unders\xf8kes omg\xe5ende og oppdateres i registreringen."),(0,a.kt)("p",null,"Hvis ikke databehandleren er oppf\xf8rt i nedtrekksmenyen, kan den legges til under \xabDatabehandlere\xbb i venstremenyen (se markering p\xe5 bildet nedenfor) og deretter \xabOpprett ny databehandler\xbb (se markering p\xe5 bildet nedenfor). Du skal da ogs\xe5 registrere om databehandleren behandler personopplysninger utenfor EU/E\xd8S, og ev. i hvilket land."),(0,a.kt)("p",null,"Eksempler p\xe5 databehandlere:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"leverand\xf8rer av IT-systemer"),(0,a.kt)("li",{parentName:"ul"},"leverand\xf8rer p\xe5 hjelpemiddelomr\xe5det og tiltaksomr\xe5det"),(0,a.kt)("li",{parentName:"ul"},"leverand\xf8rer til gjennomf\xf8ring av brukerunders\xf8kelser "),(0,a.kt)("li",{parentName:"ul"},"leverand\xf8rer som bidrar til fors\xf8ksordninger og utredninger"),(0,a.kt)("li",{parentName:"ul"},"en annen offentlig virksomhet som gj\xf8r et oppdrag p\xe5 vegne av NAV")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Utleveres personopplysningene til andre utenfor NAV?")),(0,a.kt)("p",null,"Her oppgir du hvilke eksterne virksomheter NAV utleverer personopplysninger til, dersom dette gj\xf8res som en del av behandlingen. Det omfatter utlevering som bygger p\xe5 lovhjemler, og der NAV har en rett eller plikt til \xe5 utlevere personopplysninger. Kun regelmessige utleveringer skal oppgis. "),(0,a.kt)("p",null,"Utleveringene NAV gj\xf8r skal v\xe6re tilgjengelig nedtrekksmenyen i l\xf8sningen. Hvis ikke du finner den der, g\xe5r du inn p\xe5 \xabUtleveringer\xbb i venstremenyen (se markering) og deretter \xabOpprett ny\xbb til h\xf8yre i l\xf8sningen (se markering p\xe5 bildet nedenfor)."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Overf\xf8res det personopplysninger til land eller virksomheter utenfor EU/E\xd8S?"),"\nDersom personopplysninger overf\xf8res til databehandlere eller andre behandlingsansvarlige som opererer  i eller har tilknytning til et land utenfor EU/E\xd8S, m\xe5 det foreligge et behandlingsgrunnlag for denne overf\xf8ringen."),(0,a.kt)("p",null,"Personopplysninger overf\xf8res til land utenfor EU/E\xd8S dersom en virksomhet f\xe5r oversendt eller tilgang til personopplysningene fra land utenfor EU/E\xd8S. Det er ikke n\xf8dvendig at opplysningene faktisk overf\xf8res i tradisjonell forstand (f.eks. via e-post). Det er tilstrekkelig at virksomheten f\xe5r mulighet til innsyn i opplysningene. Overf\xf8ring inkluderer ogs\xe5 overf\xf8ring av opplysninger i henhold til trygdeavtaler."),(0,a.kt)("p",null,"Eksempler p\xe5 eksterne virksomheter:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"annen offentlig virksomhet (kommune, L\xe5nekassen, Skatteetaten, UDI, pensjonskasser, SSB)"),(0,a.kt)("li",{parentName:"ul"},"samhandlere (lege/helsepersonell, arbeidsgivere, tiltaksarrang\xf8rer mfl.)"),(0,a.kt)("li",{parentName:"ul"},"private virksomheter (finansinstitusjoner)"),(0,a.kt)("li",{parentName:"ul"},"andre lands myndigheter eller trygdemyndigheter")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Hva er det rettslige grunnlaget for overf\xf8ring av personopplysninger til land utenfor EU/E\xd8S (tredjeland)? "),"\nFor \xe5 kunne overf\xf8re personopplysninger til utlandet m\xe5 det i tillegg foreligge et gyldig rettsgrunnlag (overf\xf8ringsgrunnlag). Dersom du registrerer at det overf\xf8res personopplysninger til tredjeland, skal du angi hva som er det konkrete rettslige grunnlaget for overf\xf8ringen. Dette gj\xf8res i registreringsbildet for databehandlere og utleveringer. "),(0,a.kt)("p",null,"Eksempler:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"lovhjemmel, EU-forordning eller direktiv"),(0,a.kt)("li",{parentName:"ul"},"E\xd8S-avtalen"),(0,a.kt)("li",{parentName:"ul"},"internasjonale trygdeavtaler"),(0,a.kt)("li",{parentName:"ul"},"samtykke"),(0,a.kt)("li",{parentName:"ul"},"EUs standardavtaler")),(0,a.kt)("h3",{id:"37annet"},"3.7\tAnnet"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"I hvilke systemer behandles personopplysningene?"),"\nAngi i hvilke systemer personopplysninger behandles. Med systemer mener vi b\xe5de interne og eksterne IT-systemer, apper, skytjeneser og plattformer og fysiske og digitale arkiv. Dersom du ikke finner systemet i nedtrekksmenyen i l\xf8sningen, m\xe5 det bes om at det aktuelle systemet legges til, i kanalen #behandlingskatalogen p\xe5 Slack."),(0,a.kt)("h3",{id:"38hvilken-tidsfrist-har-dere-satt-for-hvor-lenge-personopplysningene-skal-lagres"},"3.8\tHvilken tidsfrist har dere satt for hvor lenge personopplysningene skal lagres?"),(0,a.kt)("p",null,"Etter personvernforordningen skal personopplysninger ikke lagres lenger enn n\xf8dvendig for \xe5 gjennomf\xf8re form\xe5let de er samlet inn for. Etter det skal de slettes. Det er hovedregelen med mindre annen lovgivning p\xe5legger lengre lagringstid, som for eksempel arkivlovgivning og regnskapslovgivning.\nOppgi om behandlingen omfattes av NAVs bevarings- og kassasjonsvedtak  og hvor lenge opplysningene skal lagres. Vis til begrunnelsen for lagringstid ved \xe5 legge inn referanse til aktuelt skjema for lagring p\xe5 Confluence  eller i Websak. "),(0,a.kt)("h3",{id:"39personvernkonsekvensvurdering-pvk"},"3.9\tPersonvernkonsekvensvurdering (PVK)"),(0,a.kt)("p",null,"Oppgi om det er behov for PVK ved \xe5 velge \xabJa\xbb, \xabNei\xbb eller \xabUavklart\xbb. Dersom det angis at det er \xabUavklart\xbb m\xe5 dette vurderes omg\xe5ende og oppdateres i l\xf8sningen. Hvis det er behov for \xe5 gjennomf\xf8re PVK skal referansen til PVK-en i Websak legges til. Hvis man kommer til at det ikke er behov for \xe5 gjennomf\xf8re PVK, m\xe5 det velges en begrunnelse for dette. "),(0,a.kt)("h3",{id:"310personopplysninger-i-behandlingen"},"3.10\tPersonopplysninger i behandlingen"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Hvilke kategorier av personopplysninger behandles?"),"\nEtter at behandlingen er registrert m\xe5 du angi hvilke kategorier av personopplysninger som behandles. Dette gj\xf8res ved \xe5 trykke p\xe5 \xabOpplysningstype\xbb nederst til h\xf8yre i oversikten over behandlingen. Velg de kategoriene av opplysningstyper som brukes i behandlingen. "),(0,a.kt)("p",null,"Dersom det brukes en opplysningstype som ikke st\xe5r i oversikten, kan denne legges til under \xabOpplysningstyper\xbb i venstremenyen (se markering p\xe5 bildet nedenfor) og deretter ved \xe5 trykke p\xe5 \xabOpprett ny\xbb p\xe5 h\xf8yre side. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Behandles det s\xe6rlige kategorier av personopplysninger?"),"\nHvis s\xe6rlige kategorier av personopplysninger (sensitive personopplysninger) behandles innen det respektive fagomr\xe5det, skal man ogs\xe5 registrere behandlingsgrunnlaget for denne behandlingen."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Behandles det personopplysninger om straffedommer og lovovertredelser?"),"\nDersom det behandles personopplysninger om straffedommer og lovovertredelser angis dette i l\xf8sningen ved \xe5 registrere behandlingsgrunnlaget i artikkel 6 og aktuell lovbestemmelse i nasjonal lovgivning, i tillegg til at den aktuelle opplysningstypen legges til i registreringen av behandlingen. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Hvilke grupper av personer behandles det personopplysninger om?"),"\nUnder finner dere grupper av personer som NAV behandler personopplysninger om. Bruk disse kategoriene i oversikten til \xe5 registrere hvem personopplysningene som behandles gjelder. Dersom ingen av dem passer, kan dere skrive inn en ny gruppe i feltet. Dersom det behandles personopplysninger om flere grupper, m\xe5 alle disse angis."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Fra hvilke kilder utenfor NAV innhentes personopplysninger?"),"\nPersonopplysninger innhentes typisk fra brukeren selv og fra ulike eksterne kilder."),(0,a.kt)("p",null,"Eksempler:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Personopplysninger innhentes fra brukeren eller s\xf8keren ved utfylling eller dialog i s\xf8knadsprosessen og senere i saksbehandlingsprosessen."),(0,a.kt)("li",{parentName:"ul"},"NAV innhenter opplysninger fra andre virksomheter, eksterne registre og/eller samhandlere som Folkeregisteret, A-ordningen, Kontakt- og reservasjonsregisteret, Statens pensjonskasse, UDI, Skatteetaten, kommune, lege og annet helsepersonell, arbeidsgiver, utenlandske myndigheter, etc.")),(0,a.kt)("p",null,"Dersom kategorien av personopplysninger allerede er lagt til i behandlingskatalogen, skal kilden ogs\xe5 v\xe6re registrert. Dersom det skal registreres en ny opplysningstype skal navngitt kilde oppgis i registreringsfeltet for opplysningstypen. Hvis personopplysningene innhentes fra eksterne registre, skal det oppgis hvilket register det hentes fra. Dersom det innhentes personopplysninger fra flere kilder, skal alle disse oppgis. Kommer opplysningene fra brukeren selv, er det tilstrekkelig \xe5 angi \xabbrukeren\xbb som kilde"),(0,a.kt)("p",null,"Eksempler:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"fagsystemer som f.eks. Gosys, Modia, Arena, Pesys, Bisys, Infotrygd"),(0,a.kt)("li",{parentName:"ul"},"elektronisk arkiv, f.eks. Joark"),(0,a.kt)("li",{parentName:"ul"},"papirarkiv"),(0,a.kt)("li",{parentName:"ul"},"filomr\xe5der, f.eks. NAV Global (X:)"),(0,a.kt)("li",{parentName:"ul"},"fellesregister, f.eks. TPS, TSS, A/a-registeret"),(0,a.kt)("li",{parentName:"ul"},"l\xf8nns- og personalsystem, f.eks UNIT4"),(0,a.kt)("li",{parentName:"ul"},"rekrutteringssystem"),(0,a.kt)("li",{parentName:"ul"},"database")),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Den prim\xe6re ",(0,a.kt)("strong",{parentName:"p"},"hensikten")," med Behandlingskatalogen er \xe5 ivareta ",(0,a.kt)("a",{parentName:"p",href:"https://lovdata.no/lov/2018-06-15-38/gdpr/a30"},"Personopplysningslovens artikkel 30"),", krav til en behandlingsoversikt (en protokoll over alle behandlinger en virksomhet utf\xf8rer p\xe5 personopplysninger). Informasjonen i katalogen er nyttig utover \xe5 dokumentere compliance til Personopplysningsloven da det kan v\xe6re et godt oppslagsverk for mange sp\xf8rsm\xe5l som vist under."),(0,a.kt)("h2",{id:"hva-kan-man-bruke-det-til"},"Hva kan man bruke det til?"),(0,a.kt)("p",null,"Behandlingskatalogen skal f\xf8rst og fremst gi en komplett oversikt over alle behandlinger etaten utf\xf8rer p\xe5 personopplysninger. L\xf8sningen kan ogs\xe5 gi svar p\xe5 sp\xf8rsm\xe5l som:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Hva slags personopplsninger har vi i NAV?"),(0,a.kt)("li",{parentName:"ul"},"Hva bruker vi disse personopplysningene til?"),(0,a.kt)("li",{parentName:"ul"},"Hvor henter vi ulike personopplysninger fra?"),(0,a.kt)("li",{parentName:"ul"},"Hva utleverer vi til en konkret ekstern part?"),(0,a.kt)("li",{parentName:"ul"},"Hva er behandlingsgrunnlaget (rettslige grunnlaget) for bruk av f.eks fengselsopphold i barnebidragssaker?"),(0,a.kt)("li",{parentName:"ul"},"P\xe5 hvilke omr\xe5der bruker vi sensitive personopplysninger (s\xe6rlige kategorier) som f.eks. sykdomsdiagnose?"),(0,a.kt)("li",{parentName:"ul"},"Hvor lenge lagrer vi personopplysninger ifm. en behandling, f.eks. i en uf\xf8retrygdsak?"),(0,a.kt)("li",{parentName:"ul"},"Hva er alle behandlinger som en avdeling er ansvarlig for, f.eks. Ytelsesavdeling?"),(0,a.kt)("li",{parentName:"ul"},"Hva er alle behandlinger som utf\xf8res et sted i linja, f.eks. NAV Familie og pensjonsytelser?"),(0,a.kt)("li",{parentName:"ul"},"Hva er alle behandlinger som har IT-systemer som et gitt produktteam forvalter, f.eks. Team Bidrag?"),(0,a.kt)("li",{parentName:"ul"},"Hvilke personopplysninger er det lov \xe5 bruke ifm. en behandling, f.eks. saksbehandling av sykepenger?")),(0,a.kt)("h2",{id:"hvordan-komme-i-gang"},"Hvordan komme i gang?"),(0,a.kt)("p",null,"Lenker til l\xf8sningen finnes under. "),(0,a.kt)("p",null,"For de av dere som skal dokumentere en hel behandling, velg ",(0,a.kt)("em",{parentName:"p"},"behandling")," i venstremenyen, og dertter ",(0,a.kt)("em",{parentName:"p"},"+ Opprett ny"),". Fyll s\xe5 ut skjemaet. Til slutt skal du knytte opplysningstyper til behandlingen, og dette kan gj\xf8res p\xe5 to m\xe5ter:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Legg til en og en opplysningstype ved \xe5 klikke p\xe5 ",(0,a.kt)("em",{parentName:"li"},"+ Opplysningstyper")),(0,a.kt)("li",{parentName:"ol"},"Legg til et eksisterende dokument (en samling av opplysningstyper) ved \xe5 klikke p\xe5 ",(0,a.kt)("em",{parentName:"li"},"+ Dokument"),"\nEt godt tips her er \xe5 g\xe5 inn p\xe5 ",(0,a.kt)("em",{parentName:"li"},"+ Dokument")," og deretter velge ",(0,a.kt)("em",{parentName:"li"},"Standard opplysningstyper"),", som da vil legge til noen titalls standard opplysningstyper p\xe5 en gang. ")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Produksjon"),"\nAlle NAV-ansatte har tilgang til l\xf8sningen: ",(0,a.kt)("a",{parentName:"p",href:"https://behandlingskatalog.intern.nav.no/"},"Behandlingskatalogen"),". "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Test / Preprod"),"\nAlle i NAV har b\xe5de lese- og skrivetilgang til l\xf8sningen i preprod:",(0,a.kt)("a",{parentName:"p",href:"https://behandlingskatalog.intern.dev.nav.no/"},"Behandlingskatalogen (Test)")),(0,a.kt)("h2",{id:"kontaktinformasjon"},"Kontaktinformasjon"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://teamkatalog.nav.no/team/264cebfa-ad46-4af9-8867-592f99f491e6"},"Team Datajegerne")," utvikler og forvalter l\xf8sningen. Du kan n\xe5 teamet p\xe5 slack ",(0,a.kt)("a",{parentName:"p",href:"https://nav-it.slack.com/archives/CR1B19E6L"},"#behandlingskatalogen")),(0,a.kt)("h2",{id:"litt-om-arkitektur"},"Litt om arkitektur"),(0,a.kt)("p",null,'Behandlingskatalogen best\xe5r av backend (java spring boot) Polly (fra "Policy Catalog") og en frontend (react app).\nAll data er \xe5pent tilgjengelig internt i NAV uten innlogging. Brukere med skrivetilgang kan endre data. Innlogging skjer via Single Sign-On via Azure AD, brukere i frontend vil f\xe5 en session cookie som varer i 14 dager. APIet st\xf8tter innlogging via Authorization header med Bearer token (access token fra Azure).'),(0,a.kt)("p",null,"L\xf8sningen bruker PostgreSQL som datakilde men de fleste felter er lagret i JSONB kolonner.\nEksterne kilder til data inkluderer teamkatalogen og begrepskatalogen og felles kodeverk."),(0,a.kt)("h3",{id:"administratorer-per-n\xe5-datajegerne-kan-aksessere-noen-f\xe5-admin-funksjoner"},"Administratorer (per n\xe5 datajegerne) kan aksessere noen f\xe5 admin funksjoner"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Administrasjon av tilgang til applikasjonen."),(0,a.kt)("li",{parentName:"ul"},"Versjonshistorikk som inkludert timestamp , hvem som har endret noe, samt et snapshot av hele dataobjektet n\xe5r det ble endret."),(0,a.kt)("li",{parentName:"ul"},"Administrering av kodelister, for \xe5 sikre datakvalitet er en rekke felter i l\xf8sningen basert p\xe5 internt kontrollerte kodeverk. (Om noen av disse skal flyttes ut og bli NAV-kodeverk er en p\xe5g\xe5ende diskusjon)")),(0,a.kt)("h3",{id:"kildekode"},"Kildekode"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/navikt/polly"},"Repo"))),(0,a.kt)("h3",{id:"api"},"API"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://behandlingskatalog-backend.intern.nav.no/swagger-ui/index.html"},"Swagger API")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://behandlingskatalog-backend.intern.dev.nav.no/swagger-ui/index.html"},"Swagger API (Test)"))),(0,a.kt)("h3",{id:"datasett"},"Datasett"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://data.adeo.no/datapakke/37427aeae539aba2dee2c40ae4ac9319"},"Behandlingskatalogen datasett")," (mangelfullt, under arbeid)")),(0,a.kt)("h3",{id:"tilgang-og-headers"},"Tilgang og headers"),(0,a.kt)("p",null,"API er \xe5pent for lesing for alle Nav-ansatte p\xe5 en Nav-innrullert enhet, men eksponeres ikke eksternt utenfor Nav.\nSkriving og enkelte administrative funksjoner er begrenset med rollestyring. Kontakt p\xe5 #behandlingskatalogen for mer info."),(0,a.kt)("p",null,"Headers"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Authorization - Systemer kan sende med Azure access token som Bearer token"),(0,a.kt)("li",{parentName:"ul"},"Nav-Call-Id - optional callId/correlation id to set for log tracing"),(0,a.kt)("li",{parentName:"ul"},"Nav-Consumer-Id - optional but strongly suggested to trace source of requests")))}p.isMDXComponent=!0}}]);