// Question data, elokuu 2018
var data = [
    {
        "groupTitle": "Alakoulun kysymykset",
        "questionSets": [
            {
                "questionSetTitle": "Mansikkakysymykset",
                "questionSetId": "ak_a",
                "questionSet": [
                    {
						"questionText": "Kuka on kirjoittanut sarjan **Viikinkitrilogia**?",
						"validationRegexp": "^(Roope Lipasti|Lipasti Roope|Lipasti, Roope|Lipasti)$"
					},
					{
						"questionText": "Onko kirja **Piikkipallo ihan pihalla** kaunokirjallisuutta vai tietokirjallisuutta?",
						"validationRegexp": "^(Tietokirja|tietokirjallisuutta|Tieto)$"
					},
					{
						"questionText": "Mihin sarjaan kuuluu kirja nimeltä **Morriganin koetukset**?",
						"validationRegexp": "^(Nevermoor)$"
					},
					{
						"questionText": "Kuinka monta henkilöä voi enintään olla mukana pelaamassa **Robogem**-lautapeliä?",
						"validationRegexp": "^(4|Neljä)$"
					},
					{
						"questionText": "Mikä on kirjan **Mennään jo naapuriin** hyllypaikka Tampereen kaupunginkirjaston lastenosastoilla?",
						"validationRegexp": "^(30\\.15 KAT|85\\.22 KAT)$"
					}
                ]
            },
            {
                "questionSetTitle": "Mustikkakysymykset",
                "questionSetId": "ak_b",
                "questionSet": [
                    {
						"questionText": "Kuka on kirjoittanut kirjan **Maailman rikkain poika**?",
						"validationRegexp": "^(David Walliams|Walliams David|Walliams, David|Walliams)$"
					},
                    {
						"questionText": "Minkä nimisestä etsiväkerhosta Jari Mäkipää kirjoittaa?",
						"validationRegexp": "^(Etsiväkerho Hurrikaani|Etsiväkerho Hurrikaanista|Hurrikaani|Hurrikaanista)$"
					},
                    {
						"questionText": "Mikä on **Kepler62**-sarjan kuudennen kirjan nimi?",
						"validationRegexp": "^(Salaisuus)$"
					},
					{
						"questionText": "**Mikä on Iltasatuja kapinallisille tytöille : 100 tarinaa ihmeellisistä naisista** -kirjan hyllypaikka Nokian kaupunginkirjaston lastenosastoilla?",
						"validationRegexp": "^(99\\.1 FAV)$"
					},
					{
						"questionText": "Minkä värinen kansi on kirjassa **Ella ja kaverit mestarikokkeina**?",
						"validationRegexp": "^(Keltainen|Keltanen)$"
					}
                ]
            },
            {
                "questionSetTitle": "Vadelmakysymykset",
                "questionSetId": "ak_c",
                "questionSet": [
                    {
						"questionText": "Kuka on kirjoittanut kirjan **Nyt pelittää! : Miten pelejä tehdään**?",
						"validationRegexp": "^(Elina Lappalainen|Lappalainen Elina|Lappalainen)$"
					},
					{
						"questionText": "Minkä nimisestä sirkuksesta Tiina Konttilan ja Anne Muhosen sarjakuva kertoo?",
						"validationRegexp": "^(Rinkeli|Rinkelistä|Sirkus Rinkelistä)$"
					},
					{
						"questionText": "Monesko osa Geoetsivät-sarjaa on **Geoetsivät ja Linnavuoren lurjus**?",
						"validationRegexp": "^(9|9\\.|yhdeksäs|yhdeksän)$"
					},
					{
						"questionText": "Mikä eläin on  **Jessi kaipaa kaveria**-kirjan kannessa?",
						"validationRegexp": "^(koira|koiranpentu)$"
					},
					{
						"questionText": "Mikä on kirjan **Risto Räppääjä kauhan varressa: koko perheen keittokirja** hyllypaikka Lempäälän kaupunginkirjaston lastenosastoilla?",
						"validationRegexp": "^(68\\.2 NOP)$"
					}
                ]
            },
            {
                "questionSetTitle": "Herukkakysymykset",
                "questionSetId": "ak_d",
                "questionSet": [
                    {
						"questionText": "Kuka on kirjoittanut kirjan **Oliver ja meriperuukit**?",
						"validationRegexp": "^(Philip Reeve|Reeve Philip|Reeve|Reeve, Philip)$"
					},
					{
						"questionText": "Laura Ertimo on kirjoittanut kirjan maailman tärkeimmästä aineesta. Mikä on kirjan nimi?",
						"validationRegexp": "^(Vesi|Vesi: kirja maailman tärkeimmästä aineesta)$"
					},
					{
						"questionText": "Julian Claryn kirjoissa seikkailee hyeenamaisesti naurava perhe. Mikä on kirjasarjan nimi?",
						"validationRegexp": "^(Me Ponnekkaat)$"
					},
					{
						"questionText": "Mikä on Maja Säfströmin **Tärkeitä tietoja eläimistä** -kirjan hyllypaikka Oriveden kaupunginkirjaston lastenosastolla?",
						"validationRegexp": "^(58\\.9 SÄF)$"
					},
					{
						"questionText": "Kuka on suomentanut **Tärkeitä tietoja eläimistä** -kirjan?",
						"validationRegexp": "^(Nina Tarvainen|Tarvainen Nina|Tarvainen, Nina|Tarvainen)$"
					}                   
                ]
            },
            {
                "questionSetTitle": "Karpalokysymykset",
                "questionSetId": "ak_e",
                "questionSet": [
                    {
						"questionText": "Kuka on kirjoittanut kirjan **Merten gorilla**?",
						"validationRegexp": "^(Jakob Wegelius|Wegelius Jakob|Wegelius, Jakob|Wegelius)$"
					},
					{
						"questionText": "Monesko osa Neropatin päiväkirja -kirjasarjaa on **Riemuloma**?",
						"validationRegexp": "^(12|12\\.|kahdestoista|kaksitoista)$"
					},
					{
						"questionText": "Adrienne Kress on kirjoittanut Löytöretkeilijät-kirjasarjan. Minkä niminen kirja aloittaa sarjan?",
						"validationRegexp": "^(Kätketty ovi)$"
					},
					{
						"questionText": "Minkä värinen kansi on kirjassa **Taivasklaanin kohtalo**?",
						"validationRegexp": "^(Punainen|punanen)$"
					},
					{
						"questionText": "Mikä on Andrus Kivirähkin kirjan **Kun Musti muni mummon** hyllypaikka Parkanon kaupunginkirjaston lastenosastolla?",
						"validationRegexp": "^(84\\.2 KIV)$"
					}                 
                ]
            },
            {
                "questionSetTitle": "Puolukkakysymykset",
                "questionSetId": "ak_f",
                "questionSet": [
                    {
						"questionText": "Kuka on kirjoittanut kirjan **Tippukivitapaus**?",
						"validationRegexp": "^(Laura Ruohonen|Ruohonen Laura|Ruohonen, Laura|Ruohonen)$"
					},
					{
						"questionText": "Kenen kirjoissa seikkailee päähenkilönä Arttu Tirttu?",
						"validationRegexp": "^(Riina Kaarla|Kaarla Riina|Kaarla, Riina|Kaarla|Riina Kaarlan|Kaarlan)$"
					},
					{
						"questionText": "Mihin sarjaan kuuluu **Kiusallista ja huipputärkeää** -kirja?",
						"validationRegexp": "^(Yokon yökirja)$"
					},
					{
						"questionText": "Laura Ertimo on kirjoittanut tietokirjan **Yö: kirja unesta ja pimeän salaisuuksista.** Minkä värinen kansi kirjassa on?",
						"validationRegexp": "^(Musta)$"
					},
					{
						"questionText": "Mikä on PS4-konsolipelin **de Blob 2** hyllypaikka Virtain kaupunginkirjaston nuortenosastolla?",
						"validationRegexp": "^(79\\.81 DE)$"
					}                 
                ]
            },
            {
                "questionSetTitle": "Musiikki",
                "questionSetId": "ak_g",
                "questionSet": [
                    {
                        "questionText": "Onko kirjastossa Mikael Gabrielin **Ääripäät**-CD-levyä?",
                        "validationRegexp": "^(kyllä|on|kyllä on|on kyllä|jep)$"
                    },
                    {
                        "questionText": "Vuonna 2017 ilmestyi **Risto Räppääjän laulukirja**, jossa on Iiro Rantalan säveltämiä lauluja. Montako sivua laulukirjassa on?",
                        "validationRegexp": "^(51 sivua|51)$"
                    },
                    {
                        "questionText": "Taiko on lyömäsoitin. Missä maassa taikoa soitetaan?",
                        "validationRegexp": "^(Japani|Japanissa)$"
                    },
                    {
                        "questionText": "Minkä yhtyeen laulaja on Elli Haloo?",
                        "validationRegexp": "^(Haloo Helsinki\\!|Haloo Helsinki|Haloo Helsingin\\!|Haloo Helsingin)$"
                    },
                    {
                        "questionText": "Löytyykö kirjastosta kirjaa, joka kertoisi Marcuksesta ja Martinuksesta",
                        "validationRegexp": "^(kyllä|löytyy|joo)$"
                    }                   
                ]
            }
        ]
    },
    {
        "groupTitle": "Yläkoulun kysymykset",
        "questionSets": [
            {
                "questionSetTitle": "Safiirikysymykset",
                "questionSetId": "yk_a",
                "questionSet": [
                    {
						"questionText": "Kuka on kirjoittanut kirjan **Terveisin Seepra**?",
						"validationRegexp": "^(Sumanen Nadja|Nadja Sumanen|Sumanen, Nadja|Sumanen)$"
					},
					{
						"questionText": "Sarah Crossan on kirjoittanut nuortenkirjoja, joista yksi on suomennettu. Mikä on kirjan suomenkielinen nimi?",
						"validationRegexp": "^(Yksi|1)$"
					},
					{
						"questionText": "Mihin sarjaan kuuluu Sini Helmisen **Veden vallassa** -fantasiakirja?",
						"validationRegexp": "^(Väkiveriset)$"
					},
					{
						"questionText": "Monesko sarjan osa **Veden vallassa** -kirja on?",
						"validationRegexp": "^(3|3\\.||Kolmas)$"
					},
					{
						"questionText": "Mikä on lautapelin **Huhupuheita : rikkinäinen puhelin partypelinä** hyllypaikka Punkalaitumen kunnankirjaston nuortenosastolla?",
						"validationRegexp": "^(79\\.813 HUH)$"
					}
                ]
            },
            {
                "questionSetTitle": "Rubiinikysymykset",
                "questionSetId": "yk_b",
                "questionSet": [
                    {
						"questionText": "Kuka on kirjoittanut kirjan **Kilpikonnan kuorella**?",
						"validationRegexp": "^(John Green|Green|Green John|Green, John)$"
					},
                    {
                        "questionText": "Laura Lähteenmäen kirja **Yksi kevät** kertoo Suomen sisällissodasta keväällä 1918. Etsi verkkokirjastosta kirjan kuvaus. Kuinka monesta tytöstä kirja kertoo?",
                        "validationRegexp": "^(viisi|5|viidestä)$"
                    },
                    {
                        "questionText": "Mitä **Viraalit nerot** -kirjan kannessa lukee suurilla punaisilla kirjaimilla?",
                        "validationRegexp": "^(ZOO|ZOO\\!)$"
                    },
                    {
                        "questionText": "Roni Back ja Ville Kormilainen ovat kirjoittaneet **Tubettajan käsikirjan**. Mikä on kirjan hyllypaikka Kangasalan kirjaston nuortenosastoilla?",
                        "validationRegexp": "^(61\\.72 BAC)$"
                    },
                    {
                        "questionText": "Löytyykö **Tubettajan käsikirjaa** e-kirjana?",
                        "validationRegexp": "^(kyllä|joo|löytyy|joo kyllä löytyy)$"
                    }                    
                ]
            },
            {
                "questionSetTitle": "Timanttikysymykset",
                "questionSetId": "yk_c",
                "questionSet": [
                    {
						"questionText": "16-vuotias Roi Hopponen on aina halunnut poliisiksi. Vahingossa hän päätyy vääriin pääsykokeisiin ja joutuu Roistoakatemiaan. Kuka on kirjoittanut Roistoakatemia-sarjan?",
						"validationRegexp": "^( Tuuli Vuorma|Vuorma|Vuorma Tuuli|Vuorma, Tuuli)$"
					},
                    {
                        "questionText": "Meredith Russo on kirjoittanut kiusaamisen vuoksi koulua ja paikkakuntaa vaihtaneesta Amandasta. Mikä on kirjan suomenkielinen nimi?",
                        "validationRegexp": "^(Tyttösi sun)$"
                    },
                    {
						"questionText": "Anniina Mikama kirja **Taikuri ja taskuvaras** on täynnä silmänkääntötemppuja, juonittelua ja jännitystä. Mihin kaupunkiin kirja sijoittuu?",
						"validationRegexp": "^(Helsinki|Helsinkiin)$"
					},
                    
                   {
						"questionText": "Astronautti Scott Kelly on kirjoittanut kirjan **Kiertoradalla: vuosi avaruudessa**. Etsi verkkokirjastosta kirjan kuvaus. Monellako avaruuslennolla Kelly on ollut mukana?",
						"validationRegexp": "^(4|neljä|neljällä)$"
					},
					{
						"questionText": "Löytyykö PIKI-kirjastoista **Blackhole**-peliä PS4-pelikonsolille?",
						"validationRegexp": "^(kyllä|löytyy|joo|kyllä löytyy)$"
					}                    
                ]
            },
            {
                "questionSetTitle": "Topaasikysymykset",
                "questionSetId": "yk_d",
                "questionSet": [
                    {
							"questionText": "Kuka on kirjoittanut kirjan **Minä, Simon, Homo Sapiens**?",
							"validationRegexp": "^(Becky Albertalli|Albertalli, Becky|Albertalli Becky|Albertalli)$"
						},
						{
							"questionText": "Riina Mattilan **Järistyksiä**-kirja tuli toiseksi WSOY:n kirjoituskilpailussa. Tutki PIKI-verkkokirjastosta kirjan kuvausta. Mikä on kirjoituskilpailun nimi?",
							"validationRegexp": "^(Tuhat ja yksi tarinaa nuoruudesta)$"
						},
						{
							"questionText": "Juuli Niemi on kirjoittanut kirjan **Et kävele yksin**. Egzonin ja Adan kohtaamisesta kertova kirja löytyy PIKI-kirjastoista myös E-äänikirjana. Kuka on e-äänikirjan lukija?",
							"validationRegexp": "^(Ajanto Heidi|Ajanto, Heidi|Heidi Ajanto|Ajanto)$"
						},
						{
							"questionText": "Mistä kaupungista lautapeli **Nähdään Kosken rannassa** kertoo?",
							"validationRegexp": "^(Tampere|Tampereesta)$"
						},
						{
							"questionText": "Mikä on kirjan **Skeitti-Suomi : rullalautailun tarina** hyllypaikka Ikaalisten kaupunginkirjaston aikuistenosastolla?",
							"validationRegexp": "^(79\\.709 SIR)$"
						}             
                ]
            },
            {
                "questionSetTitle": "Opaalikysymykset",  
                "questionSetId": "yk_e",
                "questionSet": [
                    {
						"questionText": "Kuka on kirjoittanut kirjan **Neljän rikoksen syksy**?",
						"validationRegexp": "^( Ilkka Mattila|Mattila Ilkka|Mattila, Ilkka|Mattila)$"
					},
                    {
                        "questionText": "Mihin sarjaan **Neljän rikoksen syksy** kuuluu?",
                        "validationRegexp": "^(Mysteerinmurtajat)$"
                    },
                    {
						"questionText": "Jenni Pääskysaari on kirjoittanut kaikille sopivan voimakirjan **Sinä olet**. Minkä värinen kansi **Sinä olet** -kirjassa on?",
						"validationRegexp": "^(vihreä)$"
					},
					{
						"questionText": "Ilkka Auer on kirjoittanut hyytävän kauhukirjan **Anastasia**. Tutki kirjan asiasanoja. Mistä paikkakunnasta **Anastasia**-kirja kertoo?",
						"validationRegexp": "^(Kirkkonummesta|Kirkkonummi)$"
					},
                   {
						"questionText": "Mikä on **Harry Potter : taikuuden historia** -kirjan hyllypaikka Pirkkalan kunnankirjaston nuortenosastoilla?",
						"validationRegexp": "^(86\\.5063 HAR)$"
					}                   
                ]
            },
            {
                "questionSetTitle": "Ametistikysymykset",  
                "questionSetId": "yk_f",
                "questionSet": [
                    {
						"questionText": "Kuka on kirjoittanut kirjan **Valpuri Vaahteran maaginen korva**?",
						"validationRegexp": "^(Anna Hallava|Hallava Anna|Hallava, Anna|Hallava)$"
					},
					{
						"questionText": "Siri Pettersen on kirjoittanut kirjan  nimeltä **Kupla**. Minkä niminen on kirjan päähenkilö?",
						"validationRegexp": "^(Kine)$"
					},
					{
						"questionText": "**Steep**-konsolipelissä lasketellaan Alaskassa, Alpeilla ja Japanissa. Tutki pelin asiasanoja. Mikä toinen talviurheilulaji mainitaan pelin asiasanoissa  laskettelun lisäksi?",
						"validationRegexp": "^(Lumilautailu)$"
					},
					{
						"questionText": "Anu Ubaud on kirjoittanut kirjan **Suuria Unelmia**. Mikä on kirjan hyllypaikka Sastamalan kaupunginkirjaston nuortenosastoilla?",
						"validationRegexp": "^(17\\.3 UBA)$"
					},
					{
						"questionText": "**Suuria unelmia** -kirjassa kymmenen julkisuuden henkilöä kertoo unelmistaan ja siitä, miten omat haaveet voi toteuttaa. Tutki kirjan kuvaustiedoista onko kirjassa mukana Jaajo Linnonmaa?",
						"validationRegexp": "^(kyllä|on|joo)$"
					}                 
                ]
            },
            {
                "questionSetTitle": "Musiikki",
                "questionSetId": "yk_g",
                "questionSet": [
                    {
                        "questionText": "Metallica on kuuluisa heavybändi. Soittaako James Hetfield yhtyeessä?",
                        "validationRegexp": "^(kyllä|soittaa|kyllä soittaa|joo)$"
                    },
                    {
                        "questionText": "John Eliot Gardiner on kirjoittanut kirjan **Musiikkia taivaan holveista**. Kenestä säveltäjästä se kertoo?",
                        "validationRegexp": "^(Bachista|Johann Sebastian Bachista|Bach|Johann Sebastian Bach)$"
                    },
                    {
                        "questionText": "Tuaregit soittavat usein afrikkalaista bluesia. Heillä on yhtyeitä kuten Tamikrest ja Tinariwen. Mistä maasta nämä yhtyeet ovat kotoisin?",
                        "validationRegexp": "^(Mali|Malista)$"
                    },
                    {
                        "questionText": "Evelinalla on laulu **Kylmii väreitä**. Löytyykö siihen nuottia?",
                        "validationRegexp": "^(kyllä|kyllä löytyy|löytyy|joo)$"
                    },
                    {
                        "questionText": "Levyllä **Works for violin and orchestra** viulusti Pekka Kuusisto soittaa säveltäjä Jean Sibeliuksen musiikkia. Kuinka monta kappaletta levyllä on?",
                        "validationRegexp": "^(10|kymmenen)$"
                    }                    
                ]
            }
        ]
    },
    {
        "groupTitle": "Lukion kysymykset",
        "questionSets": [
            {
                "questionSetTitle": "Elämää ja kuvitelmaa",
                "questionSetId": "lk_a",
                "questionSet": [
                    {
                        "questionText": "Elokuva **Boyhood** on kuvattu vuosien 2002-2013 välisenä aikana ja siinä olevat näyttelijät ovat samat koko kuvausajan. Keskiössä on Mason, joka elokuvaa aloittaessa oli 6-vuotias. Kuka on ohjannut tämän mielenkiintoisella tavalla tehdyn tarinan?",
                        "validationRegexp": "^(Richard Linklater|Linklater|Linklater, Richard|Linklater Richard)$"
                    },
                    {
                        "questionText": "Hermostoa tuhoava ALS-oireyhtymä todettiin fyysikko Stephen Hawkingilla jo 21-vuotiaana ja hänen ennustettiin kuolevan pian. Hän kirjoitti 72-vuotiaana elämäkerran **Minun lyhyt historiani**. Mihin luokkaan kirja on sijoitettu?",
                        "validationRegexp": "^(99\\.15)$"
                    },
					 {
						"questionText": "**Katukatti Bob : kissa joka muutti elämäni** on tositarina ihmisen ja eläimen ystävyydestä ja toivon mahdollisuudesta. Kirjasta tehtiin uusi pehmeäkantinen painos 2015. Missä sarjassa se ilmestyi?",
						"validationRegexp": "^(Bon)$"
					},
                    {
                        "questionText": "Christer Lybäck oli 9-vuotias, kun hänen elämänsä suistui raiteiltaan. Isän kuolema sysäsi pojan viina- ja vankilakierteeseen. Christeriä pidettiin toivottomana tapauksena, mutta 26-vuotiaana hän aloitti uuden elämän ja toimii nykyään kirurgina. Minkä niminen kirja on kyseessä?",
                        "validationRegexp": "^(Veitsen terällä)$"
                    },
                    {
                        "questionText": "Montako osaa on teoksessa **Nobel-kirjailijat : maailmankirjallisuuden mestarit**?",
                        "validationRegexp": "^(4|neljä)$"
                    }                    
                ]
            },
            {
                "questionSetTitle": "Jännitystä ja kapinaa",
                "questionSetId": "lk_b",
                "questionSet": [
                    {
                        "questionText": "Elokuva **Pieni tyttö, joka asuu kujan päässä** nosti nuoren Jodie Fosterin tähtinäyttelijöiden joukkoon. Mikä sijainti leffalla on Tampereen kaupunginkirjaston hyllypaikassa?",
                        "validationRegexp": "^(jännitys)$"
                    },
                   {
						"questionText": "Työntekijät nousivat puolustamaan tehdasta ja perustivat Massaliikkeen, kun syksyllä 2007 Stora Enso ilmoitti sulkevansa kannattavan Kemijärven sellutehtaan. Kuka teki tapahtumista kirjan **Kapinakenraalin päiväkirja**?",
						"validationRegexp": "^(Juha Pikkarainen|Pikkarainen|Pikkarainen Juha|Pikkarainen, Juha)$"
					},
                    {
                        "questionText": "Jeff Vandermeerin kirjassa **Hävitys**, alue X on joutunut vuosikymmeniä sitten tuntemattoman voiman eristämäksi ja sinne päätyneille retkikunnille on aina käynyt huonosti. Nyt retkikunta 12 yrittää saada selvyyttä rajan takaisesta todellisuudesta. Kuka on kääntänyt teoksen suomeksi?",
                        "validationRegexp": "^(Niko Aula|Aula, Niko|Aula Niko|Aula)$"
                    },
                    {
                        "questionText": "**Iltasatuja kapinallisille tytöille** sisältää 100 tarinaa ihmeellisistä naisista. Teos on myös upeasti kuvitettu. Minä vuonna se on julkaistu?",
                        "validationRegexp": "^(2017|vuonna 2017)$"
                    },
                    {
                        "questionText": "Yhä useamman tatuoinnin aiheena on taidehistoriasta tuttu teos. Kirjassa **Kuva ihollani : tatuoidut taideteokset** esitellään 95 tatuointia ja 8 tatuointitaiteilijaa. Missä museossa on ollut aiheesta näyttely?",
                        "validationRegexp": "^(Gallen-Kallelan museossa|Gallen-Kallelan|Gallen-Kallela|Gallen Kallela)$"
                    }                    
                ]
            },            
            {
                "questionSetTitle": "Tietoa ja vaikuttamista",
                "questionSetId": "lk_c",
                "questionSet": [
                    {
                        "questionText": "Verkkovihan kohteeksi joutuvat useimmiten naiset ja vähemmistöhin kuuluvat. **Vihan ja inhon internet** -kirjassa toimittaja Johanna Vehkoo ja sarjakuvataiteilija Emmi Nieminen ovat luoneet teoksen, joka käsittelee yhtä aikamme vaikeimmista ilmiöistä journalistisen sarjakuvan keinoin. Missä hyllypaikassa teos on Urjalan kirjastossa?",
                        "validationRegexp": "^(85\\.32 NIE)$"
                    },
                    {
                        "questionText": "**Kun ei ei riitä** on arvostetun toimittajan ja aktivistin Naomi Kleinin uusin teos vuodelta 2018. Kuka presidentti mainitaan kirjaa kuvailevissa asiasanoissa?",
                        "validationRegexp": "^(Donald Trump|Trump Donald|Trump, Donald|Trump)$"
                    },
                    {
                        "questionText": "**Kamara : mitä kaikkea syömmekään** on tietopaketti kaikille niille, jotka miettivät tarkemmin nykymuotoisen elintarviketeollisuuden vaaroja ennen astumistaan ruokapöytään. Kirjan kuvaustekstissä on lueteltu kirjoittajien ammatteja mm. yksi urheilija. Mikä urheilulaji tekstissä mainitaan?",
                        "validationRegexp": "^(triathlonisti|triathlon)$"
                    },
                    {
                        "questionText": "Risto Jarva tunnetaan klassikkokomedioistaan, mutta hän on ohjannut myös kriittisiäkin elokuvia suomalaisesta yhteiskunnasta. Montako DVD-videolevyä elokuvapaketti **Ohjaajana Risto Jarva sisältää**?",
                        "validationRegexp": "^(11|yksitoista)$"
                    },
                  {
                        "questionText": "**Paremmaksi puhujaksi** on esiintymis- ja puhetaidon opaskirja. Kirjalla on myös alanimeke, joka mainitaan vain kirjan irtopäällyksessä. Mikä se on?",
                        "validationRegexp": "^(Luontevan esiintyjän opas)$"
                    }                       
                ]
            },            
            {
                "questionSetTitle": "Klassikot",
                "questionSetId": "lk_d",
                "questionSet": [
                    {
                        "questionText": "**Linnasta humisevalle harjulle : 50 parasta kirjaa** kertoo, mitkä kirjat jokaisen pitäisi lukea. Mukana on rakastettuja klassikoita sekä raikkaita yllätyksiä. Missä hyllypaikassa kirja on Nokian kirjastossa?",
                        "validationRegexp": "^(86\\.12 SAV)$"
                    },
                    {
                        "questionText": "Kirjassa **Projekti Putin : uuden Venäjän historiaa 1996-2008** on käytetty sitaatteja eräästä venäläisestä klassikkoteoksesta. Mikä teos on kyseessä?",
                        "validationRegexp": "^(Anna Karenina)$"
                    },
                    {
                        "questionText": "Kuka on kirjoittanut klassikkoteoksen **Kenelle kellot soivat**?",
                        "validationRegexp": "^(Ernest Hemingway|Hemingway|Hemingway, Ernest|Hemingway Ernest)$"
                    },
                    {
                        "questionText": "Guy de Maupassantin **Leikkivä lempi ja kuoleman varjo : valikoima mestarinovelleja** - kirjan vuonden 2012 painoksen kuvauksessa kerrotaan, että se sisältää mm. kirjallisuudenhistorian parhaaksi novelliksi sanotun tarinan. Mikä on novellin nimi?",
                        "validationRegexp": "^(Rasvapallo)$"
                    },
                    {
                        "questionText": "**Gabriel, tule takaisin** on Mika Waltarin tunnettu näytelmä naisia huijaavasta miehestä. Tarinan ohjasi elokuvaksi Valentin Vaala ja hän myös käsikirjoitti elokuvan, mutta kuka toinen henkilö oli myös käsikirjoittajana elokuvassa?",
                        "validationRegexp": "^(Mika Waltari|Waltari|Waltari, Mika|Waltari Mika)$"
                    }                    
                ]
            },            
            {
                "questionSetTitle": "Kulttuuri ja identiteetti",
                "questionSetId": "lk_e",
                "questionSet": [
                    {
                        "questionText": "**Vaietut ja vaiennetut** -teos on ensimmäinen kokonaisvaltainen esitys Suomessa kotoperäisestä karjalankielisestä väestöstä. Missä sarjassa teos on julkaistu?",
                        "validationRegexp": "^(Tietolipas)$"
                    },
                    {
                        "questionText": "**Kieli verkossa : näkökulmia digitaaliseen vuorovaikutukseen**  tarkastelee miten digitaalinen media on mullistanut ihmisten tapaa viestiä keskenään, ja miten se on luonut myös kokonaan uudenlaisia ympäristöjä, jossa kieltä käytetään. Mikä aineistolaji on kirjan 2015 painoksella?",
                        "validationRegexp": "^(E-kirja|e kirja|ekirja)$"
                    },
                    {
                        "questionText": "Miksi suomen kieli on sellainen kuin se on? Ketkä ovat vaikuttaneet sen kehittymiseen nykyiselleen? Markku Variksen kirja **Kielen pilarit** vastaa esittämiinsä kysymyksiin kansanomaisesti, mutta tieteeseen nojautuen. Montako sivua kirjassa on?",
                        "validationRegexp": "^(346 sivua|346)$"
                    },
                    {
                        "questionText": "Saralla on ärrävika. Hän on vältellyt r-kirjainta koko kouluaikansa. Kahdeksan vuotta toivottomana päättyneen puheterapian jälkeen hän muuttaa Irlantiin, koska englanniksi r ei juuri koskaan ole r vaan pehmeä puolivokaali. Tästä lähtee liikkeelle Nelli Hietalan romaani **Kielillä puhumisen taito**. Millä nimellä Saraa kutsutaan Irlannissa?",
                        "validationRegexp": "^(Sarah)$"
                    },
                    {
                        "questionText": "**Sanokaa mitä näitte : suomalaiset dokumenttielokuvan tekijät kertovat** -kirjassa ohjaajat kertovat tavoistaan katsoa todellisuutta kameran läpi. Kuka on kirjoittanut kirjan?",
                        "validationRegexp": "^(Harri Römpötti|Römpötti, Harri|Römpötti Harri|Römpötti)$"
                    }                    
                ]
            },
            {
                "questionSetTitle": "Musiikki",
                "questionSetId": "lk_f",
                "questionSet": [
                    {
                        "questionText": "Punkyhtye Pää kii levyllä **Pää kii** on 14 kappaletta. Yhdellä niistä unelmoidaan amerikkalaisesta paikasta. Mistä osavaltiosta on kyse?",
                        "validationRegexp": "^(Kalifornia|Kaliforniasta)$"
                    },
                    {
                        "questionText": "Pasi Heikkilä ja Veli-Matti Halkosalmi ovat kirjoittaneet kirjan **Tohtori Toonika**. Onko se pianonsoiton opas?",
                        "validationRegexp": "^(ei|ei ole)$"
                    },
                    {
                        "questionText": "Didgerido on australialainen perinnesoitin. Soitinta käytetään joskus myös suomalaisilla levyillä kuten Hidria Spacefolkin cd-levyllä **Symetria**. Kuka tällä levyllä soittaa didgeridota?",
                        "validationRegexp": "^(Mikko Happo|Happo, Mikko|Happo Mikko|Happo)$"
                    },
                    {
                        "questionText": "Miika Snåre on tehnyt soitonoppaan **Trubaduurin komppikirja**. Minkä soittimen opas se on?",
                        "validationRegexp": "^(kitara|kitaran)$"
                    },
                    {
                        "questionText": "Kuka on kirjoittanut vuonna 2017 julkaistun kirjan Saara Aallosta?",
                        "validationRegexp": "^(Laura Friman|Friman Laura|Friman, Laura|Friman)$"
                    }                    
                ]
            }
        ]
    }
];
