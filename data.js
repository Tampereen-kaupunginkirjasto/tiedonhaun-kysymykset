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
						"questionText": "Mihin sarjaan kuuluu kirja nimelt� **Morriganin koetukset**?",
						"validationRegexp": "^(Nevermoor)$"
					},
					{
						"questionText": "Kuinka monta henkil�� voi enint��n olla mukana pelaamassa **Robogem**-lautapeli�?",
						"validationRegexp": "^(4|Nelj�)$"
					},
					{
						"questionText": "Mik� on kirjan **Menn��n jo naapuriin** hyllypaikka Tampereen kaupunginkirjaston lastenosastoilla?",
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
						"questionText": "Mink� nimisest� etsiv�kerhosta Jari M�kip�� kirjoittaa?",
						"validationRegexp": "^(Etsiv�kerho Hurrikaani|Etsiv�kerho Hurrikaanista|Hurrikaani|Hurrikaanista)$"
					},
                    {
						"questionText": "Mik� on **Kepler62**-sarjan kuudennen kirjan nimi?",
						"validationRegexp": "^(Salaisuus)$"
					},
					{
						"questionText": "**Mik� on Iltasatuja kapinallisille tyt�ille : 100 tarinaa ihmeellisist� naisista** -kirjan hyllypaikka Nokian kaupunginkirjaston lastenosastoilla?",
						"validationRegexp": "^(99\\.1 FAV)$"
					},
					{
						"questionText": "Mink� v�rinen kansi on kirjassa **Ella ja kaverit mestarikokkeina**?",
						"validationRegexp": "^(Keltainen|Keltanen)$"
					}
                ]
            },
            {
                "questionSetTitle": "Vadelmakysymykset",
                "questionSetId": "ak_c",
                "questionSet": [
                    {
						"questionText": "Kuka on kirjoittanut kirjan **Nyt pelitt��! : Miten pelej� tehd��n**?",
						"validationRegexp": "^(Elina Lappalainen|Lappalainen Elina|Lappalainen)$"
					},
					{
						"questionText": "Mink� nimisest� sirkuksesta Tiina Konttilan ja Anne Muhosen sarjakuva kertoo?",
						"validationRegexp": "^(Rinkeli|Rinkelist�|Sirkus Rinkelist�)$"
					},
					{
						"questionText": "Monesko osa Geoetsiv�t-sarjaa on **Geoetsiv�t ja Linnavuoren lurjus**?",
						"validationRegexp": "^(9|9\\.|yhdeks�s|yhdeks�n)$"
					},
					{
						"questionText": "Mik� el�in on  **Jessi kaipaa kaveria**-kirjan kannessa?",
						"validationRegexp": "^(koira|koiranpentu)$"
					},
					{
						"questionText": "Mik� on kirjan **Risto R�pp��j� kauhan varressa: koko perheen keittokirja** hyllypaikka Lemp��l�n kaupunginkirjaston lastenosastoilla?",
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
						"questionText": "Laura Ertimo on kirjoittanut kirjan maailman t�rkeimm�st� aineesta. Mik� on kirjan nimi?",
						"validationRegexp": "^(Vesi|Vesi: kirja maailman t�rkeimm�st� aineesta)$"
					},
					{
						"questionText": "Julian Claryn kirjoissa seikkailee hyeenamaisesti naurava perhe. Mik� on kirjasarjan nimi?",
						"validationRegexp": "^(Me Ponnekkaat)$"
					},
					{
						"questionText": "Mik� on Maja S�fstr�min **T�rkeit� tietoja el�imist�** -kirjan hyllypaikka Oriveden kaupunginkirjaston lastenosastolla?",
						"validationRegexp": "^(58\\.9 S�F)$"
					},
					{
						"questionText": "Kuka on suomentanut **T�rkeit� tietoja el�imist�** -kirjan?",
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
						"questionText": "Monesko osa Neropatin p�iv�kirja -kirjasarjaa on **Riemuloma**?",
						"validationRegexp": "^(12|12\\.|kahdestoista|kaksitoista)$"
					},
					{
						"questionText": "Adrienne Kress on kirjoittanut L�yt�retkeilij�t-kirjasarjan. Mink� niminen kirja aloittaa sarjan?",
						"validationRegexp": "^(K�tketty ovi)$"
					},
					{
						"questionText": "Mink� v�rinen kansi on kirjassa **Taivasklaanin kohtalo**?",
						"validationRegexp": "^(Punainen|punanen)$"
					},
					{
						"questionText": "Mik� on Andrus Kivir�hkin kirjan **Kun Musti muni mummon** hyllypaikka Parkanon kaupunginkirjaston lastenosastolla?",
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
						"questionText": "Kenen kirjoissa seikkailee p��henkil�n� Arttu Tirttu?",
						"validationRegexp": "^(Riina Kaarla|Kaarla Riina|Kaarla, Riina|Kaarla|Riina Kaarlan|Kaarlan)$"
					},
					{
						"questionText": "Mihin sarjaan kuuluu **Kiusallista ja huipput�rke��** -kirja?",
						"validationRegexp": "^(Yokon y�kirja)$"
					},
					{
						"questionText": "Laura Ertimo on kirjoittanut tietokirjan **Y�: kirja unesta ja pime�n salaisuuksista.** Mink� v�rinen kansi kirjassa on?",
						"validationRegexp": "^(Musta)$"
					},
					{
						"questionText": "Mik� on PS4-konsolipelin **de Blob 2** hyllypaikka Virtain kaupunginkirjaston nuortenosastolla?",
						"validationRegexp": "^(79\\.81 DE)$"
					}                 
                ]
            },
            {
                "questionSetTitle": "Musiikki",
                "questionSetId": "ak_g",
                "questionSet": [
                    {
                        "questionText": "Onko kirjastossa Mikael Gabrielin **��rip��t**-CD-levy�?",
                        "validationRegexp": "^(kyll�|on|kyll� on|on kyll�|jep)$"
                    },
                    {
                        "questionText": "Vuonna 2017 ilmestyi **Risto R�pp��j�n laulukirja**, jossa on Iiro Rantalan s�velt�mi� lauluja. Montako sivua laulukirjassa on?",
                        "validationRegexp": "^(51 sivua|51)$"
                    },
                    {
                        "questionText": "Taiko on ly�m�soitin. Miss� maassa taikoa soitetaan?",
                        "validationRegexp": "^(Japani|Japanissa)$"
                    },
                    {
                        "questionText": "Mink� yhtyeen laulaja on Elli Haloo?",
                        "validationRegexp": "^(Haloo Helsinki\\!|Haloo Helsinki|Haloo Helsingin\\!|Haloo Helsingin)$"
                    },
                    {
                        "questionText": "L�ytyyk� kirjastosta kirjaa, joka kertoisi Marcuksesta ja Martinuksesta",
                        "validationRegexp": "^(kyll�|l�ytyy|joo)$"
                    }                   
                ]
            }
        ]
    },
    {
        "groupTitle": "Yl�koulun kysymykset",
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
						"questionText": "Sarah Crossan on kirjoittanut nuortenkirjoja, joista yksi on suomennettu. Mik� on kirjan suomenkielinen nimi?",
						"validationRegexp": "^(Yksi|1)$"
					},
					{
						"questionText": "Mihin sarjaan kuuluu Sini Helmisen **Veden vallassa** -fantasiakirja?",
						"validationRegexp": "^(V�kiveriset)$"
					},
					{
						"questionText": "Monesko sarjan osa **Veden vallassa** -kirja on?",
						"validationRegexp": "^(3|3\\.||Kolmas)$"
					},
					{
						"questionText": "Mik� on lautapelin **Huhupuheita : rikkin�inen puhelin partypelin�** hyllypaikka Punkalaitumen kunnankirjaston nuortenosastolla?",
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
                        "questionText": "Laura L�hteenm�en kirja **Yksi kev�t** kertoo Suomen sis�llissodasta kev��ll� 1918. Etsi verkkokirjastosta kirjan kuvaus. Kuinka monesta tyt�st� kirja kertoo?",
                        "validationRegexp": "^(viisi|5|viidest�)$"
                    },
                    {
                        "questionText": "Mit� **Viraalit nerot** -kirjan kannessa lukee suurilla punaisilla kirjaimilla?",
                        "validationRegexp": "^(ZOO|ZOO\\!)$"
                    },
                    {
                        "questionText": "Roni Back ja Ville Kormilainen ovat kirjoittaneet **Tubettajan k�sikirjan**. Mik� on kirjan hyllypaikka Kangasalan kirjaston nuortenosastoilla?",
                        "validationRegexp": "^(61\\.72 BAC)$"
                    },
                    {
                        "questionText": "L�ytyyk� **Tubettajan k�sikirjaa** e-kirjana?",
                        "validationRegexp": "^(kyll�|joo|l�ytyy|joo kyll� l�ytyy)$"
                    }                    
                ]
            },
            {
                "questionSetTitle": "Timanttikysymykset",
                "questionSetId": "yk_c",
                "questionSet": [
                    {
						"questionText": "16-vuotias Roi Hopponen on aina halunnut poliisiksi. Vahingossa h�n p��tyy v��riin p��sykokeisiin ja joutuu Roistoakatemiaan. Kuka on kirjoittanut Roistoakatemia-sarjan?",
						"validationRegexp": "^( Tuuli Vuorma|Vuorma|Vuorma Tuuli|Vuorma, Tuuli)$"
					},
                    {
                        "questionText": "Meredith Russo on kirjoittanut kiusaamisen vuoksi koulua ja paikkakuntaa vaihtaneesta Amandasta. Mik� on kirjan suomenkielinen nimi?",
                        "validationRegexp": "^(Tytt�si sun)$"
                    },
                    {
						"questionText": "Anniina Mikama kirja **Taikuri ja taskuvaras** on t�ynn� silm�nk��nt�temppuja, juonittelua ja j�nnityst�. Mihin kaupunkiin kirja sijoittuu?",
						"validationRegexp": "^(Helsinki|Helsinkiin)$"
					},
                    
                   {
						"questionText": "Astronautti Scott Kelly on kirjoittanut kirjan **Kiertoradalla: vuosi avaruudessa**. Etsi verkkokirjastosta kirjan kuvaus. Monellako avaruuslennolla Kelly on ollut mukana?",
						"validationRegexp": "^(4|nelj�|nelj�ll�)$"
					},
					{
						"questionText": "L�ytyyk� PIKI-kirjastoista **Blackhole**-peli� PS4-pelikonsolille?",
						"validationRegexp": "^(kyll�|l�ytyy|joo|kyll� l�ytyy)$"
					}                    
                ]
            },
            {
                "questionSetTitle": "Topaasikysymykset",
                "questionSetId": "yk_d",
                "questionSet": [
                    {
							"questionText": "Kuka on kirjoittanut kirjan **Min�, Simon, Homo Sapiens**?",
							"validationRegexp": "^(Becky Albertalli|Albertalli, Becky|Albertalli Becky|Albertalli)$"
						},
						{
							"questionText": "Riina Mattilan **J�ristyksi�**-kirja tuli toiseksi WSOY:n kirjoituskilpailussa. Tutki PIKI-verkkokirjastosta kirjan kuvausta. Mik� on kirjoituskilpailun nimi?",
							"validationRegexp": "^(Tuhat ja yksi tarinaa nuoruudesta)$"
						},
						{
							"questionText": "Juuli Niemi on kirjoittanut kirjan **Et k�vele yksin**. Egzonin ja Adan kohtaamisesta kertova kirja l�ytyy PIKI-kirjastoista my�s E-��nikirjana. Kuka on e-��nikirjan lukija?",
							"validationRegexp": "^(Ajanto Heidi|Ajanto, Heidi|Heidi Ajanto|Ajanto)$"
						},
						{
							"questionText": "Mist� kaupungista lautapeli **N�hd��n Kosken rannassa** kertoo?",
							"validationRegexp": "^(Tampere|Tampereesta)$"
						},
						{
							"questionText": "Mik� on kirjan **Skeitti-Suomi : rullalautailun tarina** hyllypaikka Ikaalisten kaupunginkirjaston aikuistenosastolla?",
							"validationRegexp": "^(79\\.709 SIR)$"
						}             
                ]
            },
            {
                "questionSetTitle": "Opaalikysymykset",  
                "questionSetId": "yk_e",
                "questionSet": [
                    {
						"questionText": "Kuka on kirjoittanut kirjan **Nelj�n rikoksen syksy**?",
						"validationRegexp": "^( Ilkka Mattila|Mattila Ilkka|Mattila, Ilkka|Mattila)$"
					},
                    {
                        "questionText": "Mihin sarjaan **Nelj�n rikoksen syksy** kuuluu?",
                        "validationRegexp": "^(Mysteerinmurtajat)$"
                    },
                    {
						"questionText": "Jenni P��skysaari on kirjoittanut kaikille sopivan voimakirjan **Sin� olet**. Mink� v�rinen kansi **Sin� olet** -kirjassa on?",
						"validationRegexp": "^(vihre�)$"
					},
					{
						"questionText": "Ilkka Auer on kirjoittanut hyyt�v�n kauhukirjan **Anastasia**. Tutki kirjan asiasanoja. Mist� paikkakunnasta **Anastasia**-kirja kertoo?",
						"validationRegexp": "^(Kirkkonummesta|Kirkkonummi)$"
					},
                   {
						"questionText": "Mik� on **Harry Potter : taikuuden historia** -kirjan hyllypaikka Pirkkalan kunnankirjaston nuortenosastoilla?",
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
						"questionText": "Siri Pettersen on kirjoittanut kirjan  nimelt� **Kupla**. Mink� niminen on kirjan p��henkil�?",
						"validationRegexp": "^(Kine)$"
					},
					{
						"questionText": "**Steep**-konsolipeliss� lasketellaan Alaskassa, Alpeilla ja Japanissa. Tutki pelin asiasanoja. Mik� toinen talviurheilulaji mainitaan pelin asiasanoissa  laskettelun lis�ksi?",
						"validationRegexp": "^(Lumilautailu)$"
					},
					{
						"questionText": "Anu Ubaud on kirjoittanut kirjan **Suuria Unelmia**. Mik� on kirjan hyllypaikka Sastamalan kaupunginkirjaston nuortenosastoilla?",
						"validationRegexp": "^(17\\.3 UBA)$"
					},
					{
						"questionText": "**Suuria unelmia** -kirjassa kymmenen julkisuuden henkil�� kertoo unelmistaan ja siit�, miten omat haaveet voi toteuttaa. Tutki kirjan kuvaustiedoista onko kirjassa mukana Jaajo Linnonmaa?",
						"validationRegexp": "^(kyll�|on|joo)$"
					}                 
                ]
            },
            {
                "questionSetTitle": "Musiikki",
                "questionSetId": "yk_g",
                "questionSet": [
                    {
                        "questionText": "Metallica on kuuluisa heavyb�ndi. Soittaako James Hetfield yhtyeess�?",
                        "validationRegexp": "^(kyll�|soittaa|kyll� soittaa|joo)$"
                    },
                    {
                        "questionText": "John Eliot Gardiner on kirjoittanut kirjan **Musiikkia taivaan holveista**. Kenest� s�velt�j�st� se kertoo?",
                        "validationRegexp": "^(Bachista|Johann Sebastian Bachista|Bach|Johann Sebastian Bach)$"
                    },
                    {
                        "questionText": "Tuaregit soittavat usein afrikkalaista bluesia. Heill� on yhtyeit� kuten Tamikrest ja Tinariwen. Mist� maasta n�m� yhtyeet ovat kotoisin?",
                        "validationRegexp": "^(Mali|Malista)$"
                    },
                    {
                        "questionText": "Evelinalla on laulu **Kylmii v�reit�**. L�ytyyk� siihen nuottia?",
                        "validationRegexp": "^(kyll�|kyll� l�ytyy|l�ytyy|joo)$"
                    },
                    {
                        "questionText": "Levyll� **Works for violin and orchestra** viulusti Pekka Kuusisto soittaa s�velt�j� Jean Sibeliuksen musiikkia. Kuinka monta kappaletta levyll� on?",
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
                "questionSetTitle": "El�m�� ja kuvitelmaa",
                "questionSetId": "lk_a",
                "questionSet": [
                    {
                        "questionText": "Elokuva **Boyhood** on kuvattu vuosien 2002-2013 v�lisen� aikana ja siin� olevat n�yttelij�t ovat samat koko kuvausajan. Keski�ss� on Mason, joka elokuvaa aloittaessa oli 6-vuotias. Kuka on ohjannut t�m�n mielenkiintoisella tavalla tehdyn tarinan?",
                        "validationRegexp": "^(Richard Linklater|Linklater|Linklater, Richard|Linklater Richard)$"
                    },
                    {
                        "questionText": "Hermostoa tuhoava ALS-oireyhtym� todettiin fyysikko Stephen Hawkingilla jo 21-vuotiaana ja h�nen ennustettiin kuolevan pian. H�n kirjoitti 72-vuotiaana el�m�kerran **Minun lyhyt historiani**. Mihin luokkaan kirja on sijoitettu?",
                        "validationRegexp": "^(99\\.15)$"
                    },
					 {
						"questionText": "**Katukatti Bob : kissa joka muutti el�m�ni** on tositarina ihmisen ja el�imen yst�vyydest� ja toivon mahdollisuudesta. Kirjasta tehtiin uusi pehme�kantinen painos 2015. Miss� sarjassa se ilmestyi?",
						"validationRegexp": "^(Bon)$"
					},
                    {
                        "questionText": "Christer Lyb�ck oli 9-vuotias, kun h�nen el�m�ns� suistui raiteiltaan. Is�n kuolema sys�si pojan viina- ja vankilakierteeseen. Christeri� pidettiin toivottomana tapauksena, mutta 26-vuotiaana h�n aloitti uuden el�m�n ja toimii nyky��n kirurgina. Mink� niminen kirja on kyseess�?",
                        "validationRegexp": "^(Veitsen ter�ll�)$"
                    },
                    {
                        "questionText": "Montako osaa on teoksessa **Nobel-kirjailijat : maailmankirjallisuuden mestarit**?",
                        "validationRegexp": "^(4|nelj�)$"
                    }                    
                ]
            },
            {
                "questionSetTitle": "J�nnityst� ja kapinaa",
                "questionSetId": "lk_b",
                "questionSet": [
                    {
                        "questionText": "Elokuva **Pieni tytt�, joka asuu kujan p��ss�** nosti nuoren Jodie Fosterin t�htin�yttelij�iden joukkoon. Mik� sijainti leffalla on Tampereen kaupunginkirjaston hyllypaikassa?",
                        "validationRegexp": "^(j�nnitys)$"
                    },
                   {
						"questionText": "Ty�ntekij�t nousivat puolustamaan tehdasta ja perustivat Massaliikkeen, kun syksyll� 2007 Stora Enso ilmoitti sulkevansa kannattavan Kemij�rven sellutehtaan. Kuka teki tapahtumista kirjan **Kapinakenraalin p�iv�kirja**?",
						"validationRegexp": "^(Juha Pikkarainen|Pikkarainen|Pikkarainen Juha|Pikkarainen, Juha)$"
					},
                    {
                        "questionText": "Jeff Vandermeerin kirjassa **H�vitys**, alue X on joutunut vuosikymmeni� sitten tuntemattoman voiman erist�m�ksi ja sinne p��tyneille retkikunnille on aina k�ynyt huonosti. Nyt retkikunta 12 yritt�� saada selvyytt� rajan takaisesta todellisuudesta. Kuka on k��nt�nyt teoksen suomeksi?",
                        "validationRegexp": "^(Niko Aula|Aula, Niko|Aula Niko|Aula)$"
                    },
                    {
                        "questionText": "**Iltasatuja kapinallisille tyt�ille** sis�lt�� 100 tarinaa ihmeellisist� naisista. Teos on my�s upeasti kuvitettu. Min� vuonna se on julkaistu?",
                        "validationRegexp": "^(2017|vuonna 2017)$"
                    },
                    {
                        "questionText": "Yh� useamman tatuoinnin aiheena on taidehistoriasta tuttu teos. Kirjassa **Kuva ihollani : tatuoidut taideteokset** esitell��n 95 tatuointia ja 8 tatuointitaiteilijaa. Miss� museossa on ollut aiheesta n�yttely?",
                        "validationRegexp": "^(Gallen-Kallelan museossa|Gallen-Kallelan|Gallen-Kallela|Gallen Kallela)$"
                    }                    
                ]
            },            
            {
                "questionSetTitle": "Tietoa ja vaikuttamista",
                "questionSetId": "lk_c",
                "questionSet": [
                    {
                        "questionText": "Verkkovihan kohteeksi joutuvat useimmiten naiset ja v�hemmist�hin kuuluvat. **Vihan ja inhon internet** -kirjassa toimittaja Johanna Vehkoo ja sarjakuvataiteilija Emmi Nieminen ovat luoneet teoksen, joka k�sittelee yht� aikamme vaikeimmista ilmi�ist� journalistisen sarjakuvan keinoin. Miss� hyllypaikassa teos on Urjalan kirjastossa?",
                        "validationRegexp": "^(85\\.32 NIE)$"
                    },
                    {
                        "questionText": "**Kun ei ei riit�** on arvostetun toimittajan ja aktivistin Naomi Kleinin uusin teos vuodelta 2018. Kuka presidentti mainitaan kirjaa kuvailevissa asiasanoissa?",
                        "validationRegexp": "^(Donald Trump|Trump Donald|Trump, Donald|Trump)$"
                    },
                    {
                        "questionText": "**Kamara : mit� kaikkea sy�mmek��n** on tietopaketti kaikille niille, jotka miettiv�t tarkemmin nykymuotoisen elintarviketeollisuuden vaaroja ennen astumistaan ruokap�yt��n. Kirjan kuvaustekstiss� on lueteltu kirjoittajien ammatteja mm. yksi urheilija. Mik� urheilulaji tekstiss� mainitaan?",
                        "validationRegexp": "^(triathlonisti|triathlon)$"
                    },
                    {
                        "questionText": "Risto Jarva tunnetaan klassikkokomedioistaan, mutta h�n on ohjannut my�s kriittisi�kin elokuvia suomalaisesta yhteiskunnasta. Montako DVD-videolevy� elokuvapaketti **Ohjaajana Risto Jarva sis�lt��**?",
                        "validationRegexp": "^(11|yksitoista)$"
                    },
                  {
                        "questionText": "**Paremmaksi puhujaksi** on esiintymis- ja puhetaidon opaskirja. Kirjalla on my�s alanimeke, joka mainitaan vain kirjan irtop��llyksess�. Mik� se on?",
                        "validationRegexp": "^(Luontevan esiintyj�n opas)$"
                    }                       
                ]
            },            
            {
                "questionSetTitle": "Klassikot",
                "questionSetId": "lk_d",
                "questionSet": [
                    {
                        "questionText": "**Linnasta humisevalle harjulle : 50 parasta kirjaa** kertoo, mitk� kirjat jokaisen pit�isi lukea. Mukana on rakastettuja klassikoita sek� raikkaita yll�tyksi�. Miss� hyllypaikassa kirja on Nokian kirjastossa?",
                        "validationRegexp": "^(86\\.12 SAV)$"
                    },
                    {
                        "questionText": "Kirjassa **Projekti Putin : uuden Ven�j�n historiaa 1996-2008** on k�ytetty sitaatteja er��st� ven�l�isest� klassikkoteoksesta. Mik� teos on kyseess�?",
                        "validationRegexp": "^(Anna Karenina)$"
                    },
                    {
                        "questionText": "Kuka on kirjoittanut klassikkoteoksen **Kenelle kellot soivat**?",
                        "validationRegexp": "^(Ernest Hemingway|Hemingway|Hemingway, Ernest|Hemingway Ernest)$"
                    },
                    {
                        "questionText": "Guy de Maupassantin **Leikkiv� lempi ja kuoleman varjo : valikoima mestarinovelleja** - kirjan vuonden 2012 painoksen kuvauksessa kerrotaan, ett� se sis�lt�� mm. kirjallisuudenhistorian parhaaksi novelliksi sanotun tarinan. Mik� on novellin nimi?",
                        "validationRegexp": "^(Rasvapallo)$"
                    },
                    {
                        "questionText": "**Gabriel, tule takaisin** on Mika Waltarin tunnettu n�ytelm� naisia huijaavasta miehest�. Tarinan ohjasi elokuvaksi Valentin Vaala ja h�n my�s k�sikirjoitti elokuvan, mutta kuka toinen henkil� oli my�s k�sikirjoittajana elokuvassa?",
                        "validationRegexp": "^(Mika Waltari|Waltari|Waltari, Mika|Waltari Mika)$"
                    }                    
                ]
            },            
            {
                "questionSetTitle": "Kulttuuri ja identiteetti",
                "questionSetId": "lk_e",
                "questionSet": [
                    {
                        "questionText": "**Vaietut ja vaiennetut** -teos on ensimm�inen kokonaisvaltainen esitys Suomessa kotoper�isest� karjalankielisest� v�est�st�. Miss� sarjassa teos on julkaistu?",
                        "validationRegexp": "^(Tietolipas)$"
                    },
                    {
                        "questionText": "**Kieli verkossa : n�k�kulmia digitaaliseen vuorovaikutukseen**  tarkastelee miten digitaalinen media on mullistanut ihmisten tapaa viesti� kesken��n, ja miten se on luonut my�s kokonaan uudenlaisia ymp�rist�j�, jossa kielt� k�ytet��n. Mik� aineistolaji on kirjan 2015 painoksella?",
                        "validationRegexp": "^(E-kirja|e kirja|ekirja)$"
                    },
                    {
                        "questionText": "Miksi suomen kieli on sellainen kuin se on? Ketk� ovat vaikuttaneet sen kehittymiseen nykyiselleen? Markku Variksen kirja **Kielen pilarit** vastaa esitt�miins� kysymyksiin kansanomaisesti, mutta tieteeseen nojautuen. Montako sivua kirjassa on?",
                        "validationRegexp": "^(346 sivua|346)$"
                    },
                    {
                        "questionText": "Saralla on �rr�vika. H�n on v�ltellyt r-kirjainta koko kouluaikansa. Kahdeksan vuotta toivottomana p��ttyneen puheterapian j�lkeen h�n muuttaa Irlantiin, koska englanniksi r ei juuri koskaan ole r vaan pehme� puolivokaali. T�st� l�htee liikkeelle Nelli Hietalan romaani **Kielill� puhumisen taito**. Mill� nimell� Saraa kutsutaan Irlannissa?",
                        "validationRegexp": "^(Sarah)$"
                    },
                    {
                        "questionText": "**Sanokaa mit� n�itte : suomalaiset dokumenttielokuvan tekij�t kertovat** -kirjassa ohjaajat kertovat tavoistaan katsoa todellisuutta kameran l�pi. Kuka on kirjoittanut kirjan?",
                        "validationRegexp": "^(Harri R�mp�tti|R�mp�tti, Harri|R�mp�tti Harri|R�mp�tti)$"
                    }                    
                ]
            },
            {
                "questionSetTitle": "Musiikki",
                "questionSetId": "lk_f",
                "questionSet": [
                    {
                        "questionText": "Punkyhtye P�� kii levyll� **P�� kii** on 14 kappaletta. Yhdell� niist� unelmoidaan amerikkalaisesta paikasta. Mist� osavaltiosta on kyse?",
                        "validationRegexp": "^(Kalifornia|Kaliforniasta)$"
                    },
                    {
                        "questionText": "Pasi Heikkil� ja Veli-Matti Halkosalmi ovat kirjoittaneet kirjan **Tohtori Toonika**. Onko se pianonsoiton opas?",
                        "validationRegexp": "^(ei|ei ole)$"
                    },
                    {
                        "questionText": "Didgerido on australialainen perinnesoitin. Soitinta k�ytet��n joskus my�s suomalaisilla levyill� kuten Hidria Spacefolkin cd-levyll� **Symetria**. Kuka t�ll� levyll� soittaa didgeridota?",
                        "validationRegexp": "^(Mikko Happo|Happo, Mikko|Happo Mikko|Happo)$"
                    },
                    {
                        "questionText": "Miika Sn�re on tehnyt soitonoppaan **Trubaduurin komppikirja**. Mink� soittimen opas se on?",
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
