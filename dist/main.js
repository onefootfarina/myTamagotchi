(()=>{"use strict";const t=document.querySelector("#help-menu"),a=document.querySelector("#help-screen"),e=document.querySelector("#help-eat"),i=document.querySelector("#food-gif"),r=document.querySelector("#help-light"),m=document.querySelector("#lights-gif"),s=document.querySelector("#help-game"),l=document.querySelector("#game-gif"),n=document.querySelector("#help-sick"),c=document.querySelector("#sick-gif"),o=document.querySelector("#help-clean"),u=document.querySelector("#poop-gif"),d=document.querySelector("#help-health"),y=document.querySelector("#health-gif"),g=(document.querySelector("#help-discipline"),document.querySelector("#help-attention"),document.querySelector("#food-screen")),v=document.querySelector("#healthButton"),S=document.querySelector("#lights-screen"),h=document.querySelector("#lights-off-screen"),p=document.querySelector("#lightsButton"),H=document.querySelector("#lightsOnButton"),A=document.querySelector("#lightsOffButton"),f=document.querySelector("#gameButton"),b=document.querySelector("#game-screen"),P=document.querySelector("#game-timer"),_=document.querySelector("#players-choice"),q=document.querySelector(".choice-text"),C=document.querySelector("#game-mad-alert1"),k=document.querySelector("#game-mad-alert2"),L=document.querySelector("#game-happy-alert"),E=document.querySelector("#choice-one"),M=document.querySelector("#choice-two"),F=document.querySelector("#tama-choice-one"),D=document.querySelector("#tama-choice-two"),w=document.querySelector("#game-child-one"),T=document.querySelector("#game-child-two"),G=document.querySelector("#game-teen-one"),I=document.querySelector("#game-teen-two"),B=document.querySelector("#game-adult-one"),x=document.querySelector("#game-adult-two"),O=document.querySelector("#game-adult-three"),N=document.querySelector("#game-adult-four"),Y=(document.querySelector("#game-adult-five"),document.querySelector("#game-adult-six"),document.querySelector("#healButton")),$=document.querySelector("#health-screen"),R=document.querySelector("#health-screen2"),W=document.querySelector("#clean-button"),j=document.querySelector("#cleaning-line"),z=document.querySelector("#discipline-button"),J=document.querySelector("#alertButtonImage"),K=document.querySelector("#heart1"),Q=document.querySelector("#heart2"),U=document.querySelector("#heart3"),V=document.querySelector("#heart4"),X=document.querySelector("#heart5"),Z=document.querySelector("#hunger1"),tt=document.querySelector("#hunger2"),at=document.querySelector("#hunger3"),et=document.querySelector("#hunger4"),it=document.querySelector("#hunger5"),rt=document.querySelector("#sickAlert"),mt=document.querySelector("#madAlert1"),st=document.querySelector("#madAlert2"),lt=document.querySelector("#happyAlert"),nt=document.querySelector(".egg"),ct=document.querySelector("#eggState1"),ot=document.querySelector("#eggState2"),ut=document.querySelector("#eggState3"),dt=(document.querySelector(".character"),document.querySelector(".child")),yt=document.querySelector("#child1"),gt=document.querySelector("#child1-low"),vt=document.querySelector("#child1-sick"),St=document.querySelector("#child1-side"),ht=document.querySelector("#child1-eat"),pt=document.querySelector("#child2"),Ht=document.querySelector("#child2-small"),At=document.querySelector("#child2-side"),ft=document.querySelector("#child2-eat"),bt=document.querySelector(".teen"),Pt=document.querySelector("#teen1"),_t=document.querySelector("#teen1-eat"),qt=document.querySelector("#teen1-sick"),Ct=document.querySelector("#teen2"),kt=document.querySelector("#teen2-eat"),Lt=document.querySelector("#teen2-lips"),Et=document.querySelector("#teen2-sick"),Mt=document.querySelector(".adult"),Ft=document.querySelector("#adult1"),Dt=document.querySelector("#adult1-eat"),wt=(document.querySelector("#adult1-sick"),document.querySelector("#adult2")),Tt=document.querySelector("#adult2-eat"),Gt=(document.querySelector("#adult2-sick"),document.querySelector("#adult2-lips"),document.querySelector("#adult3")),It=document.querySelector("#adult3-eat"),Bt=(document.querySelector("#adult3-sick"),document.querySelector("#adult4")),xt=document.querySelector("#adult4-eat"),Ot=(document.querySelector("#adult4-sick"),document.querySelector("#adult4-lips"),document.querySelector("#adult5")),Nt=document.querySelector("#adult5-eat"),Yt=(document.querySelector("#adult5-sick"),document.querySelector("#adult6")),$t=document.querySelector("#poop1"),Rt=document.querySelector("#poop2"),Wt=document.querySelector("#poop3"),jt=document.querySelector("#poop4"),zt=document.querySelector("#mealButton"),Jt=document.querySelector("#snackButton"),Kt=document.querySelector("#meal1"),Qt=document.querySelector("#meal2"),Ut=document.querySelector("#meal2half"),Vt=document.querySelector("#snack1"),Xt=document.querySelector("#snack1Half"),Zt=document.querySelector("#snack2"),ta=document.querySelector("#snack2Half"),aa=document.querySelector("#gravestone-one"),ea=document.querySelector("#gravestone-two"),ia=document.querySelector("#gravestone-text"),ra=document.querySelector("#hungerMeter"),ma=document.querySelector("#tamagotchi-container"),sa=(document.querySelector(".bottom-buttons"),document.querySelector("#buttonOne")),la=document.querySelector("#buttonTwo"),na=document.querySelector("#buttonThree"),ca=document.querySelector("#buttonFour"),oa=document.querySelector("#drop-down-menu"),ua=document.querySelector("#theme-selection"),da=document.querySelector("#drop-down-color-choice"),ya=document.querySelector("#color1"),ga=document.querySelector("#color2"),va=document.querySelector("#color3"),Sa=document.querySelector("#color5"),ha=(document.querySelector("#options"),document.querySelector("#options-menu"),document.querySelector("#option1"),document.querySelector("#color-choice-menu"),document.querySelector("#alf-logo"));function pa(t){return Math.floor(Math.random()*t)}function Ha(t){return Math.floor((new Date-t)/1e3)}let Aa=["Egg","Child_1","Child_2","Teen_1","Teen_2","Secret_Adult","Secret_Adult_2","Adult_1","Adult_2","Adult_3","Adult_4","Secret_Adult_Evolve","12","Dead"];const fa={gameStarted:!1,tamaTheme:3,tamaName:"Larry",tamaAge:8,tamaHatch:2,tamaStage:Aa,tamaDead:!1,tamaHealth:3,tamaHappy:4,tamaIsHappy:!1,tamaIsMad:!1,needAttention:!1,tamaDiscipline:0,tamaSpoiled:0,tamaNeglect:0,tamaPoop:0,tamaSick:!1,animationCount:0,lightIsOff:!1,foodAnimationGoing:!1,timeState:{gameStart:new Date,lastHatchCycle:new Date,lastInteract:new Date,lastEvolve:new Date,lastPoop:new Date,lastSick:new Date,lastHealth:new Date,lastHappy:new Date,lastComplain:new Date,lastAnimation:new Date}};let ba,Pa,_a=!1,qa=!1,Ca=!1,ka=0,La=0,Ea=0,Ma=!1,Fa=0,Da=0,wa=0,Ta=0,Ga=!1,Ia=!1,Ba=!1,xa=0,Oa=!1,Na=!1,Ya=0,$a=!1,Ra=!1,Wa=!1;const ja=document.querySelector("body");var za;function Ja(t){t.style.visibility="hidden"}function Ka(t){t.style.visibility="visible"}function Qa(t){if(1!=fa.foodAnimationGoing&&fa.tamaPoop<=2&&Ha(fa.timeState.gameStart)%2==0){let a=pa(3);1===a?3===pa(5)?(t.classList.remove("left"),t.classList.remove("right"),t.classList.remove("rightSmall"),t.classList.add("leftSmall")):3===pa(5)&&(t.classList.remove("right"),t.classList.remove("rightSmall"),t.classList.remove("leftSmall"),t.classList.add("left")):2===a?3===pa(5)?(t.classList.remove("left"),t.classList.remove("leftSmall"),t.classList.remove("right"),t.classList.add("rightSmall")):3===pa(5)&&(t.classList.remove("left"),t.classList.remove("leftSmall"),t.classList.remove("rightSmall"),t.classList.add("right")):(t.classList.remove("left"),t.classList.remove("leftSmall"),t.classList.remove("rightSmall"),t.classList.remove("right"))}}function Ua(t){if(1!=fa.foodAnimationGoing&&Ha(fa.timeState.gameStart)%1==0){let a=pa(3);1===a||2===a?t.classList.add("flip"):t.classList.remove("flip")}}function Va(t){1===t||(2===t?(Ja(Kt),Ja(Qt),Ja(Ut),Ja(Vt),Ja(Xt),Ja(Zt),Ja(ta),fa.animationCount>0&&fa.animationCount<=2&&Ka(Qt),3==fa.animationCount&&(Ja(Qt),Ka(Ut)),5==fa.animationCount&&Ja(Ut)):3===t?(fa.animationCount>0&&fa.animationCount<=2&&Ka(Zt),3==fa.animationCount&&(Ja(Zt),Ka(ta)),5==fa.animationCount&&Ja(ta)):4===t&&(fa.animationCount>0&&fa.animationCount<=2&&Ka(Vt),3==fa.animationCount&&(Ja(Vt),Ka(Xt)),5==fa.animationCount&&Ja(Xt)))}function Xa(){fa.tamaStage===Aa[1]&&!0===fa.foodAnimationGoing&&(Ha(fa.timeState.gameStart)%1==0&&fa.animationCount<=6&&fa.animationCount++,1==fa.animationCount&&(Ja(yt),Ja(vt),Ja(gt),Ka(St)),2!=fa.animationCount&&4!=fa.animationCount||(Ja(St),Ka(ht)),3!=fa.animationCount&&5!=fa.animationCount||(Ja(ht),Ka(St)),6==fa.animationCount&&(Ja(St),fa.foodAnimationGoing=!1,fa.animationCount=0)),Va(3),fa.tamaStage===Aa[2]&&!0===fa.foodAnimationGoing&&(Ha(fa.timeState.gameStart)%1==0&&fa.animationCount<=6&&fa.animationCount++,1==fa.animationCount&&(Ja(Ht),Ja(ft),Ja(pt),Ka(At)),2!=fa.animationCount&&4!=fa.animationCount||(Ja(pt),Ja(At),Ka(ft)),3!=fa.animationCount&&5!=fa.animationCount||(Ja(pt),Ja(ft),Ka(At)),6==fa.animationCount&&(Ja(At),fa.foodAnimationGoing=!1,fa.animationCount=0)),Va(3),fa.tamaStage===Aa[3]&&!0===fa.foodAnimationGoing&&(Ha(fa.timeState.gameStart)%1==0&&fa.animationCount<=6&&fa.animationCount++,1==fa.animationCount&&(Ja(bt),Ka(Pt)),2!=fa.animationCount&&4!=fa.animationCount||(Ja(Pt),Ka(_t)),3!=fa.animationCount&&5!=fa.animationCount||(Ja(_t),Ka(Pt)),6==fa.animationCount&&(Ja(Pt),fa.foodAnimationGoing=!1,fa.animationCount=0)),Va(3),fa.tamaStage===Aa[4]&&!0===fa.foodAnimationGoing&&(Ha(fa.timeState.gameStart)%1==0&&fa.animationCount<=6&&fa.animationCount++,1==fa.animationCount&&(Ja(bt),Ka(Ct)),2!=fa.animationCount&&4!=fa.animationCount||(Ja(Ct),Ka(kt)),3!=fa.animationCount&&5!=fa.animationCount||(Ja(kt),Ka(Ct)),6==fa.animationCount&&(Ja(Ct),fa.foodAnimationGoing=!1,fa.animationCount=0)),Va(3),fa.tamaStage===Aa[7]&&!0===fa.foodAnimationGoing&&(Ha(fa.timeState.gameStart)%1==0&&fa.animationCount<=6&&fa.animationCount++,1==fa.animationCount&&(Ja(Mt),Ka(Ft)),2!=fa.animationCount&&4!=fa.animationCount||(Ja(Ft),Ka(Dt)),3!=fa.animationCount&&5!=fa.animationCount||(Ja(Dt),Ka(Ft)),6==fa.animationCount&&(Ja(Ft),fa.foodAnimationGoing=!1,fa.animationCount=0)),Va(3),fa.tamaStage===Aa[8]&&!0===fa.foodAnimationGoing&&(Ha(fa.timeState.gameStart)%1==0&&fa.animationCount<=6&&fa.animationCount++,1==fa.animationCount&&(Ja(Mt),Ka(wt)),2!=fa.animationCount&&4!=fa.animationCount||(Ja(wt),Ka(Tt)),3!=fa.animationCount&&5!=fa.animationCount||(Ja(Tt),Ka(wt)),6==fa.animationCount&&(Ja(wt),fa.foodAnimationGoing=!1,fa.animationCount=0)),Va(3),fa.tamaStage===Aa[9]&&!0===fa.foodAnimationGoing&&(Ha(fa.timeState.gameStart)%1==0&&fa.animationCount<=6&&fa.animationCount++,1==fa.animationCount&&(Ja(Mt),Ka(Gt)),2!=fa.animationCount&&4!=fa.animationCount||(Ja(Gt),Ka(It)),3!=fa.animationCount&&5!=fa.animationCount||(Ja(It),Ka(Gt)),6==fa.animationCount&&(Ja(Gt),fa.foodAnimationGoing=!1,fa.animationCount=0)),Va(3),fa.tamaStage===Aa[10]&&!0===fa.foodAnimationGoing&&(Ha(fa.timeState.gameStart)%1==0&&fa.animationCount<=6&&fa.animationCount++,1==fa.animationCount&&(Ja(Mt),Ka(Bt)),2!=fa.animationCount&&4!=fa.animationCount||(Ja(Bt),Ka(xt)),3!=fa.animationCount&&5!=fa.animationCount||(Ja(xt),Ka(Bt)),6==fa.animationCount&&(Ja(Bt),fa.foodAnimationGoing=!1,fa.animationCount=0)),Va(3),fa.tamaStage===Aa[5]&&!0===fa.foodAnimationGoing&&(Ha(fa.timeState.gameStart)%1==0&&fa.animationCount<=6&&fa.animationCount++,1==fa.animationCount&&(Ja(Mt),Ka(Ot)),2!=fa.animationCount&&4!=fa.animationCount||(Ja(Ot),Ka(Nt)),3!=fa.animationCount&&5!=fa.animationCount||(Ja(Nt),Ka(Ot)),6==fa.animationCount&&(Ja(Ot),fa.foodAnimationGoing=!1,fa.animationCount=0)),Va(3)}function Za(){ct.style.visibility="hidden",ot.style.visibility="hidden",ut.style.visibility="hidden",yt.style.visibility="hidden",gt.style.visibility="hidden",vt.style.visibility="hidden",ht.style.visibility="hidden",pt.style.visibility="hidden",At.style.visibility="hidden",ft.style.visibility="hidden",Ht.style.visibility="hidden",dt.style.visibility="hidden",Pt.style.visibility="hidden",_t.style.visibility="hidden",qt.style.visibility="hidden",Ct.style.visibility="hidden",kt.style.visibility="hidden",Et.style.visibility="hidden",Lt.style.visibility="hidden",bt.style.visibility="hidden"}1==(10,20,(za=pa(30))>=10&&za<=20)&&console.log("its true!");const te=document.querySelector("#discipline-one"),ae=document.querySelector("#discipline-two"),ee=document.querySelector("#discipline-three"),ie=document.querySelector("#discipline-four"),re=document.querySelector("#discipline-five");function me(){let t=pa(21);Da=t<=10?1:2}function se(t){return t.style.display="flex",t}function le(t){return t.style.display="none",t}function ne(){0!=Ba&&(Ga=!1,Ia=!1,xa=0,Ca=!1,ka=0,La=0,Ea=0,Ma=!1,Fa=0,Da=0,wa=0,Ta=0,Ja(b))}function ce(){Fa===Da?wa++:Ta++}function oe(t,a,e,i){ja.style.backgroundColor=t,ja.style.background=t,ma.style.backgroundColor=a,ma.style.background=a,oa.style.backgroundColor=a,oa.style.background=a,sa.style.backgroundColor=e,la.style.backgroundColor=e,na.style.backgroundColor=e,ca.style.backgroundColor=e,sa.style.borderColor=i,la.style.borderColor=i,na.style.borderColor=i,ca.style.borderColor=i}const ue=document.querySelector("#express-logo");function de(t){1==t&&fa.tamaHealth<5?fa.tamaHealth++:2==t&&fa.tamaHealth<5?fa.tamaHappy<5&&(fa.tamaHappy=fa.tamaHappy+1):2==t&&(fa.tamaHealth=fa.tamaHealth+0,fa.tamaHappy<5&&(fa.tamaHappy=fa.tamaHappy+1)),fa.tamaHealth>=5&&(fa.tamaHealth+=0),2==t&&fa.tamaHealth>=5?fa.tamaHealth=5:1==t&&fa.tamaHealth>=5&&(fa.tamaHealth=5,console.log("tamagotchi is full"))}function ye(){Ha(fa.timeState.gameStart)%86400==0&&(fa.tamaAge++,console.log(Aa)),Ha(fa.timeState.gameStart)<10&&(fa.tamaStage=Aa[1]),function(){if(fa.tamaStage==Aa[0]&&fa.tamaHatch<3&&Ha(fa.timeState.gameStart)>2&&Ha(fa.timeState.gameStart)%2==0){let t=pa(500);(t>=100&&t<=180||t>=300&&t<=310)&&3!=fa.tamaHatch&&fa.tamaHatch++}3==fa.tamaHatch&&(fa.timeState.lastHatchCycle=new Date,fa.tamaHatch=4)}(),function(){if(fa.tamaStage==Aa[0]&&4==fa.tamaHatch&&Ha(fa.timeState.lastHatchCycle)>10&&Ha(fa.timeState.lastHatchCycle)<120){if(Ha(fa.timeState.gameStart)%2==0){let t=pa(100);t>=75&&t<=80&&(fa.tamaStage=Aa[1],fa.tamaName=fa.tamaStage,fa.timeState.lastEvolve=new Date)}}else fa.tamaStage==Aa[0]&&Ha(fa.timeState.lastHatchCycle)>120&&(fa.tamaStage=Aa[1],fa.timeState.lastEvolve=new Date);if(fa.tamaStage==Aa[1]&&Ha(fa.timeState.lastEvolve)>10&&Ha(fa.timeState.lastEvolve)<120&&1!=fa.foodAnimationGoing){if(Ha(fa.timeState.gameStart)%2==0){let t=pa(500);t>=35&&t<=45&&(fa.tamaStage=Aa[2],fa.timeState.lastEvolve=new Date)}}else fa.tamaStage===Aa[1]&&Ha(fa.timeState.lastEvolve)>120&&(fa.tamaStage=Aa[2],fa.timeState.lastEvolve=new Date)}(),function(){if(fa.tamaStage==Aa[2]&&Ha(fa.timeState.lastEvolve)>=60&&1!=fa.foodAnimationGoing){if(Ha(fa.gameStarted)%30==0){let t=pa(2);fa.tamaStage=0===t?Aa[3]:Aa[4]}}else if(fa.tamaStage==Aa[2]&&Ha(fa.timeState.lastEvolve>43200)){if(Ha(fa.gameStarted)%60==0){let t=pa(2);fa.tamaStage=0===t?Aa[3]:Aa[4]}}else if(fa.tamaStage==Aa[2]&&Ha(fa.timeState.lastEvolve>86400)){let t=pa(2);fa.tamaStage=0===t?Aa[3]:Aa[4]}}(),function(){if((fa.tamaStage==Aa[3]||fa.tamaStage==Aa[4])&&Ha(fa.timeState.lastEvolve)>20&&Ha(fa.timeState.gameStart)%2==0&&pa(100)>46){let t=pa(100);t>=0&&t<=23?fa.tamaStage=Aa[7]:t>=24&&t<=47?fa.tamaStage=Aa[8]:t>=48&&t<=71?fa.tamaStage=Aa[9]:t>=72&&t<=95?fa.tamaStage=Aa[10]:t>=96&&(fa.tamaStage==Aa[3]?fa.tamaStage=Aa[5]:fa.tamaStage==Aa[4]&&(fa.tamaStage=Aa[6]))}}(),fa.tamaStage!==Aa[1]&&fa.tamaStage!==Aa[0]||0!==fa.tamaHealth?0==fa.tamaHealth&&(fa.tamaStage=Aa[13],clearInterval(ba),fa.gameStarted=!1,fa.tamaDead=!0):fa.tamaHealth=1}function ge(){fa.tamaStage==Aa[0]||(function(){let t=pa(4e3);4==fa.tamaPoop&&Ha(fa.timeState.lastPoop)>15&&(fa.tamaSick=!0,fa.timeState.lastSick=new Date),(Ha(fa.timeState.lastSick)>60||fa.timeState.lastSick==fa.timeState.gameStart)&&(8!=t&&573!=t&&1362!=t||(fa.tamaSick=!0,fa.timeState.lastSick=new Date))}(),function(){let t=pa(1e3);4==fa.tamaPoop||(1==fa.tamaSick?Ha(fa.timeState.lastPoop)%10==0&&(t<=10&&t>=95||t<=510&&t>=595||t<=800&&t>=885)&&(fa.tamaPoop++,fa.timeState.lastPoop=new Date):Ha(fa.timeState.lastPoop)%30==0&&(t>=10&&t<=45||t>=400&&t<=435||t>=900&&t<=935)&&(fa.tamaPoop++,fa.timeState.lastPoop=new Date,2==pa(4)&&fa.tamaHealth--)),fa.tamaPoop}(),1==fa.tamaSick&&Ha(fa.timeState.lastSick)%15==0&&(fa.tamaHealth-=.5),function(){let t=pa(2500);Ha(fa.timeState.gameStart)%10==0&&Ha(fa.timeState.lastHealth)>11&&(fa.tamaHappy<=2?(t>=10&&t<=70||t>=900&&t<=970||t>=2300&&t<=2370)&&(fa.tamaHealth-=1,fa.timeState.lastHealth=new Date):(t>=10&&t<=69||t>=880&&t<=930||t>=2280&&t<=2330)&&(fa.tamaHealth-=1,fa.timeState.lastHealth=new Date))}(),function(){let t=pa(3e3);Ha(fa.timeState.gameStart)%5==0&&(fa.tamaHealth<=2?(t>=100&&t<=160||t>=1200&&t<=1280||t>=2800&&t<=2880)&&(fa.tamaHappy-=1,fa.timeState.lastHappy=new Date):(t>=50&&t<=80||t>=1600&&t<=1630||t>=2200&&t<=2230)&&(fa.tamaHappy-=1,fa.timeState.lastHappy=new Date))}(),function(){if(fa.tamaHappy>=5&&fa.tamaHealth>=5&&(fa.tamaStage==Aa[1]||fa.tamaStage==Aa[2]||fa.tamaStage==Aa[3]||fa.tamaStage==Aa[4]))if(5==fa.tamaDiscipline);else if(fa.tamaDiscipline<3){if(Ha(fa.timeState.lastComplain)>60){let t=pa(100);t>=50&&t<=58&&(fa.needAttention=!0,fa.timeState.lastComplain=new Date)}1==fa.needAttention&&Ha(fa.timeState.lastComplain)<30?(Wa=!0,J.style.backgroundColor="red"):(J.style.backgroundColor="green",fa.needAttention=!1,2===pa(5)&&fa.tamaNeglect++)}}(),0!=Ca&&(Ea<8?console.log("game running"):8===Ea&&(Ma=!1,Fa=0,Ea=0,console.log("game ended")))),ye(),1!=fa.needAttention&&(1==fa.tamaDead?ra.textContent="im ded":fa.tamaStage===Aa[0]?ra.textContent="egg":fa.tamaNeglect>=8||(fa.tamaHappy<=2&&fa.tamaHealth<=2||fa.tamaHappy<=2||fa.tamaHealth<=2?J.style.backgroundColor="red":(fa.tamaHappy>2||fa.tamaHealth>=2)&&(J.style.backgroundColor="green"))),function(){if(fa.tamaSpoiled>=7&&(fa.tamaStage==Aa[4]||fa.tamaStage==Aa[5]||fa.tamaStage==Aa[6]||fa.tamaStage==Aa[7]||fa.tamaStage==Aa[8]||fa.tamaStage==Aa[9]||fa.tamaStage==Aa[10]||fa.tamaStage==Aa[11])){if(Ha(fa.timeState.lastComplain)>60){let t=pa(200);t>=40&&t<=50&&(fa.needAttention=!0,fa.timeState.lastComplain=new Date)}1==fa.needAttention&&Ha(fa.timeState.lastComplain)<30?attentionText.textContent=" i want attention":(attentionText.textContent="",fa.needAttention=!1)}}()}function ve(){Ja(g),_a=!1,Ja(S),qa=!1,ne(),Ba=!0,Ja($),Oa=!1,Ja(R),Na=!1}function Se(){da.classList.remove("second-menu-animate-open"),da.classList.add("second-menu-animate-close"),setTimeout((function(){Ra=!1,le(da),da.classList.add("second-menu-animate-open"),da.classList.remove("second-menu-animate-close")}),990),setTimeout((function(){oa.classList.remove("menu-animate-open"),oa.classList.add("menu-animate-close"),setTimeout((function(){le(oa),le(da),oa.classList.remove("menu-animate-close"),oa.classList.add("menu-animate-open"),$a=!1}),990)}),400)}function he(){le(i),le(m),le(l),le(c),le(u),le(y)}ba=setInterval((function(){0===fa.tamaTheme?(se(ue),le(ha),oe("var(--greenBackground)","var(--mintGreen)","var(--redButton)","var(--darkerRedButton)")):1===fa.tamaTheme?(le(ue),le(ha),oe("var(--yellowBackground)","var(--lightYellow)","var(--purpleButton)","var(--darkerPurpleButton)")):2===fa.tamaTheme?(le(ue),le(ha),oe("var(--whiteBackground)","var(--offWhite)","var(--blackButton)","var(--darkerBlackButton)"),oa.style.backgroundColor="var(--offWhiteMenu)"):3===fa.tamaTheme?(le(ue),le(ha),oe("var(--blueBackground)","var(--myBlueAndRed)","var(--blackButton)","var(--darkerBlackButton)")):4===fa.tamaTheme&&(le(ue),se(ha),oe("var(--alfBackground)","var(--alf)","var(--alfButton)","var(--darkerAlfButton)")),Ya<=5&&!0===fa.tamaIsHappy?Ha(fa.timeState.gameStart)%2==0?(Ya++,Ka(lt)):(Ya++,Ja(lt)):Ya>5&&!0===fa.tamaIsHappy&&(fa.tamaIsHappy=!1,Ya=0,Ja(lt)),Ya<=11&&!0===fa.tamaIsMad?Ha(fa.timeState.gameStart)%2==0?(Ya++,Ja(st),Ka(mt)):(Ya++,Ja(mt),Ka(st)):Ya>7&&!0===fa.tamaIsMad&&(fa.tamaIsMad=!1,Ya=0,Ja(mt),Ja(st)),Ha(fa.timeState.lastAnimation)>1&&(Kt.style.visibility="hidden",Qt.style.visibility="hidden",Vt.style.visibility="hidden",Zt.style.visibility="hidden"),1===fa.tamaPoop&&($t.style.visibility="visible"),2===fa.tamaPoop&&($t.style.visibility="visible",Rt.style.visibility="visible"),3===fa.tamaPoop&&($t.style.visibility="visible",Rt.style.visibility="visible",Wt.style.visibility="visible"),4===fa.tamaPoop&&($t.style.visibility="visible",Rt.style.visibility="visible",Wt.style.visibility="visible",jt.style.visibility="visible"),0===fa.tamaPoop&&($t.style.visibility="hidden",Rt.style.visibility="hidden",Wt.style.visibility="hidden",jt.style.visibility="hidden"),!0===fa.tamaSick?rt.style.visibility="visible":rt.style.visibility="hidden",fa.tamaStage===Aa[0]&&(Ha(fa.timeState.gameStart)%2==0?(ot.style.visibility="hidden",ct.style.visibility="visible"):(ct.style.visibility="hidden",ot.style.visibility="visible")),Xa(),0===fa.tamaHealth?(K.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_heartEmpty.svg",Q.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_heartEmpty.svg",U.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_heartEmpty.svg",V.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_heartEmpty.svg",X.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_heartEmpty.svg"):.5===fa.tamaHealth?(K.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_heartHalf.svg",Q.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_heartEmpty.svg",U.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_heartEmpty.svg",V.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_heartEmpty.svg",X.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_heartEmpty.svg"):1===fa.tamaHealth?(K.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_heartFull.svg",Q.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_heartEmpty.svg",U.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_heartEmpty.svg",V.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_heartEmpty.svg",X.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_heartEmpty.svg"):1.5===fa.tamaHealth?(K.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_heartFull.svg",Q.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_heartHalf.svg",U.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_heartEmpty.svg",V.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_heartEmpty.svg",X.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_heartEmpty.svg"):2===fa.tamaHealth?(K.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_heartFull.svg",Q.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_heartFull.svg",U.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_heartEmpty.svg",V.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_heartEmpty.svg",X.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_heartEmpty.svg"):2.5===fa.tamaHealth?(K.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_heartFull.svg",Q.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_heartFull.svg",U.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_heartHalf.svg",V.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_heartEmpty.svg",X.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_heartEmpty.svg"):3===fa.tamaHealth?(K.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_heartFull.svg",Q.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_heartFull.svg",U.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_heartFull.svg",V.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_heartEmpty.svg",X.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_heartEmpty.svg"):3.5===fa.tamaHealth?(K.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_heartFull.svg",Q.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_heartFull.svg",U.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_heartFull.svg",V.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_heartHalf.svg",X.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_heartEmpty.svg"):4===fa.tamaHealth?(K.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_heartFull.svg",Q.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_heartFull.svg",U.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_heartFull.svg",V.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_heartFull.svg",X.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_heartEmpty.svg"):4.5===fa.tamaHealth?(K.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_heartFull.svg",Q.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_heartFull.svg",U.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_heartFull.svg",V.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_heartFull.svg",X.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_heartHalf.svg"):5===fa.tamaHealth&&(K.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_heartFull.svg",Q.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_heartFull.svg",U.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_heartFull.svg",V.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_heartFull.svg",X.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_heartFull.svg"),0===fa.tamaHappy?(Z.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_heartEmpty.svg",tt.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_heartEmpty.svg",at.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_heartEmpty.svg",et.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_heartEmpty.svg",it.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_heartEmpty.svg"):.5===fa.tamaHappy?(Z.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_heartHalf.svg",tt.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_heartEmpty.svg",at.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_heartEmpty.svg",et.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_heartEmpty.svg",it.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_heartEmpty.svg"):1===fa.tamaHappy?(Z.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_heartFull.svg",tt.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_heartEmpty.svg",at.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_heartEmpty.svg",et.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_heartEmpty.svg",it.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_heartEmpty.svg"):1.5===fa.tamaHappy?(Z.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_heartEmpty.svg",tt.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_heartHalf.svg",at.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_heartEmpty.svg",et.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_heartEmpty.svg",it.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_heartEmpty.svg"):2===fa.tamaHappy?(Z.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_heartFull.svg",tt.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_heartFull.svg",at.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_heartEmpty.svg",et.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_heartEmpty.svg",it.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_heartEmpty.svg"):2.5===fa.tamaHappy?(Z.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_heartFull.svg",tt.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_heartFull.svg",at.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_heartHalf.svg",et.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_heartEmpty.svg",it.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_heartEmpty.svg"):3===fa.tamaHappy?(Z.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_heartFull.svg",tt.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_heartFull.svg",at.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_heartFull.svg",et.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_heartEmpty.svg",it.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_heartEmpty.svg"):3.5===fa.tamaHappy?(Z.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_heartFull.svg",tt.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_heartFull.svg",at.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_heartFull.svg",et.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_heartHalf.svg",it.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_heartEmpty.svg"):4===fa.tamaHappy?(Z.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_heartFull.svg",tt.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_heartFull.svg",at.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_heartFull.svg",et.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_heartFull.svg",it.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_heartEmpty.svg"):4.5===fa.tamaHappy?(Z.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_heartFull.svg",tt.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_heartFull.svg",at.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_heartFull.svg",et.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_heartFull.svg",it.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_heartHalf.svg"):5===fa.tamaHappy&&(Z.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_heartFull.svg",tt.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_heartFull.svg",at.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_heartFull.svg",et.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_heartFull.svg",it.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_heartFull.svg"),0===fa.tamaDiscipline?(te.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_disciplineMeter1.svg",ae.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_disciplineMeter1.svg",ee.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_disciplineMeter1.svg",ie.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_disciplineMeter1.svg",re.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_disciplineMeter1.svg"):1===fa.tamaDiscipline?(te.classList.add("full"),te.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_disciplineMeter2.svg",ae.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_disciplineMeter1.svg",ee.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_disciplineMeter1.svg",ie.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_disciplineMeter1.svg",re.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_disciplineMeter1.svg"):2===fa.tamaDiscipline?(te.classList.add("full"),ae.classList.add("full"),te.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_disciplineMeter2.svg",ae.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_disciplineMeter2.svg",ee.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_disciplineMeter1.svg",ie.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_disciplineMeter1.svg",re.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_disciplineMeter1.svg"):3===fa.tamaDiscipline?(te.classList.add("full"),ae.classList.add("full"),ee.classList.add("full"),te.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_disciplineMeter2.svg",ae.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_disciplineMeter2.svg",ee.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_disciplineMeter2.svg",ie.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_disciplineMeter1.svg",re.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_disciplineMeter1.svg"):4===fa.tamaDiscipline?(te.classList.add("full"),ae.classList.add("full"),ee.classList.add("full"),ie.classList.add("full"),te.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_disciplineMeter2.svg",ae.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_disciplineMeter2.svg",ee.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_disciplineMeter2.svg",ie.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_disciplineMeter2.svg",re.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_disciplineMeter1.svg"):5===fa.tamaDiscipline&&(te.classList.add("full"),ae.classList.add("full"),ee.classList.add("full"),ie.classList.add("full"),re.classList.add("full"),te.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_disciplineMeter2.svg",ae.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_disciplineMeter2.svg",ee.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_disciplineMeter2.svg",ie.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_disciplineMeter2.svg",re.src="../src/tamaPictures/tamaAlert/tamaHeart/tama_disciplineMeter2.svg"),1!=fa.tamaDead&&1!=fa.foodAnimationGoing&&1!=Ca&&(fa.tamaStage===Aa[1]&&!0===fa.tamaSick&&(nt.style.visibility="hidden",vt.style.visibility="hidden",gt.style.visibility="visible",Ha(fa.timeState.gameStart)%2==0)&&(3===pa(5)?(gt.style.visibility="hidden",vt.style.visibility="visible"):(vt.style.visibility="hidden",gt.style.visibility="visible")),fa.tamaStage===Aa[1]&&!1===fa.tamaSick&&(nt.style.visibility="hidden",gt.style.visibility="hidden",yt.style.visibility="visible",Ha(fa.timeState.gameStart)%2==0&&(3===pa(4)?(yt.style.visibility="hidden",gt.style.visibility="visible",Qa(gt)):(gt.style.visibility="hidden",yt.style.visibility="visible",Qa(yt))),Qa(yt)),fa.tamaStage===Aa[2]&&(yt.style.visibility="hidden",gt.style.visibility="hidden",vt.style.visibility="hidden",pt.style.visibility="visible",Qa(pt)),fa.tamaStage===Aa[3]&&(pt.style.visibility="hidden",Pt.style.visibility="visible",Ua(Pt),Qa(Pt)),fa.tamaStage===Aa[4]&&(pt.style.visibility="hidden",Ct.style.visibility="visible",Ua(Ct),Qa(Ct)),fa.tamaStage===Aa[5]&&(Za(),Ot.style.visibility="visible",Ua(Ot),Qa(Ot)),fa.tamaStage===Aa[6]&&(Za(),Yt.style.visibility="visible",Ua(Yt),Qa(Yt)),fa.tamaStage===Aa[7]&&(Za(),Ft.style.visibility="visible",Ua(Ft),Qa(Ft)),fa.tamaStage===Aa[8]&&(Za(),wt.style.visibility="visible",Ua(wt),Qa(wt)),fa.tamaStage===Aa[9]&&(Za(),Gt.style.visibility="visible",Ua(Gt),Qa(Gt)),fa.tamaStage===Aa[10]&&(Za(),Bt.style.visibility="visible",Ua(Bt),Qa(Bt)),fa.tamaStage===Aa[13]&&(aa.style.visibility="visible")),!0===fa.tamaDead&&(fa.tamaStage=Aa[13],Ja($t),Ja(Rt),Ja(Wt),Ja(jt),dt.style.visibility="hidden",bt.style.visibility="hidden",Mt.style.visibility="hidden",Ft.style.visibility="hidden",wt.style.visibility="hidden",Gt.style.visibility="hidden",Bt.style.visibility="hidden",Ot.style.visibility="hidden",Yt.style.visibility="hidden",Ha(fa.timeState.lastAnimation)%2==0?(se(ia),ia.innerHTML=`${fa.tamaAge} Years`,le(aa),se(ea)):(se(ia),ia.innerHTML=`${fa.tamaAge} Years`,le(ea),se(aa))),0!=Ca&&(La<=24?(La++,La%3==0&&Ea<30&&(Ea++,P.innerHTML=`${Ea}`)):La>24&&(ka++,Ma=!1,Fa=0,La=0,Ea=0),!1===Ma&&Ea<=29?Ha(fa.gameStarted)%3==0?(_.style.gap="12px",q.innerHTML="choose"):(_.style.gap="24px",q.innerHTML="one"):!0===Ma&&Ea<=29?(_.style.gap="37.5px",q.innerHTML=""):!1===Ma&&30===Ea&&(_.style.gap="6px",q.innerHTML="times up"),1===Fa&&1===Da?(F.style.backgroundColor="green",E.style.backgroundColor="green",Ga=!0):2===Fa&&2===Da?(D.style.backgroundColor="green",M.style.backgroundColor="green",Ga=!0):1===Fa&&2===Da?(D.style.backgroundColor="maroon",E.style.backgroundColor="maroon",Ia=!0):2===Fa&&1===Da?(F.style.backgroundColor="maroon",M.style.backgroundColor="maroon",Ia=!0):0===Fa&&(F.style.backgroundColor="transparent",D.style.backgroundColor="transparent",E.style.backgroundColor="transparent",M.style.backgroundColor="transparent"),fa.tamaStage===Aa[1]?(se(w),Ua(w)):fa.tamaStage===Aa[2]?(le(w),se(T),Ua(T)):fa.tamaStage===Aa[3]?(le(w),le(T),se(G)):fa.tamaStage===Aa[4]?(le(w),le(T),le(G),se(I)):fa.tamaStage===Aa[5]||fa.tamaStage===Aa[6]||(fa.tamaStage===Aa[7]?(le(w),le(T),le(G),le(I),se(B)):fa.tamaStage===Aa[8]?(le(w),le(T),le(G),le(I),se(x)):fa.tamaStage===Aa[9]?(le(w),le(T),le(G),le(I),se(O)):fa.tamaStage===Aa[10]&&(le(w),le(T),le(G),le(I),se(N))),0!=Ia&&xa<5?Ha(fa.timeState.gameStart)%2==0?(le(k),se(C),xa++):(le(C),se(k),xa++):(Ia=!1,Ga=!1,xa=0,le(k),le(C)),0!=Ga&&xa<5?Ha(fa.timeState.gameStart)%2==0?(se(L),xa++):(le(L),xa++):(Ga=!1,Ia=!1,xa=0,le(L)),ne(),wa>2?(Ba=!0,fa.tamaHappy++,fa.tamaIsHappy=!0):Ta>2&&(Ba=!0))}),400),fa.gameStarted=!0,fa.tamaDead=!1,fa.timeState.gameStart=new Date,ba=setInterval(ge,1e3),fa.gameStarted=!0,fa.tamaDead=!1,fa.timeState.gameStart=new Date,foodButton.addEventListener("click",(function(){1!=fa.foodAnimationGoing&&1!=fa.tamaIsMad&&(!0===qa||!0===Ca?(ve(),Ka(g),_a=!0):!0===Oa?(ve(),g.style.visibility="visible",_a=!0):!1===_a?(g.style.visibility="visible",_a=!0):!0===_a&&(g.style.visibility="hidden",_a=!1))})),zt.addEventListener("click",(function(){fa.tamaHealth<5&&(fa.foodAnimationGoing=!0,de(1),Xa())})),Jt.addEventListener("click",(function(){fa.tamaHappy<=5&&(fa.foodAnimationGoing=!0,de(2),Xa(),!0===fa.needAttention&&(fa.needAttention=!1,fa.tamaSpoiled++))})),p.addEventListener("click",(function(){1!=fa.foodAnimationGoing&&(!0===_a||!0===Ca||!0===Oa||!0===Na?(ve(),Ka(S),qa=!0):!0===fa.lightIsOff&&!1===qa?(Ja(h),Ka(S),qa=!0):!0===fa.lightIsOff&&!0===qa?(Ja(S),Ka(h),qa=!1):!1===qa?(S.style.visibility="visible",qa=!0):!0===qa&&(S.style.visibility="hidden",qa=!1))})),H.addEventListener("click",(function(){Ja(S),qa=!1,Ja(h),fa.lightIsOff=!1,console.log(fa.lightIsOff)})),A.addEventListener("click",(function(){fa.lightIsOff=!0,Ja(S),qa=!1,Ka(h),console.log(fa.lightIsOff)})),f.addEventListener("click",(function(){1!=fa.tamaIsMad&&(ve(),!0===_a?(ve(),Za(),Ka(b),Ca=!0):!1===Ca?(Ba=!1,Ca=!0,Za(),Ka(b)):!0===Ca&&(Ba=!0))})),E.addEventListener("click",(function(){1!=Ma&&(Ma=!0,Fa=1,Ea=6,me(),ce(),Pa=new Date)})),M.addEventListener("click",(function(){1!=Ma&&(Ma=!0,Fa=2,Ea=6,me(),ce(),Pa=new Date)})),Y.addEventListener("click",(function(){ve(),1!=fa.tamaIsMad&&(!0===fa.tamaSick?(fa.tamaSick=!1,fa.tamaHappy-=1,fa.tamaIsMad=!0):fa.tamaIsMad=!0)})),v.addEventListener("click",(function(){1!=fa.foodAnimationGoing&&(!0===_a?(ve(),$.style.visibility="visible",Oa=!0):!0===qa||!0===Ca?(ve(),Ka($),Oa=!0):!1===Oa?($.style.visibility="visible",Oa=!0):!0===Oa&&!1===Na?(Ja($),Ka(R),Na=!0):!0===Oa&&!0===Oa&&(Ja(R),Ja($),Oa=!1,Na=!1))})),W.addEventListener("click",(function(){ve(),fa.tamaPoop>0?(0==fa.tamaPoop||(fa.tamaPoop=0,fa.tamaHappy++),j.classList.add("cleanAnimation"),Ka(j),setTimeout((function(){j.classList.remove("cleanAnimation"),Ja(j),fa.tamaIsHappy=!0}),800)):(j.classList.add("cleanAnimation"),Ka(j),setTimeout((function(){j.classList.remove("cleanAnimation"),Ja(j)}),800))})),z.addEventListener("click",(function(){ve(),!0===fa.needAttention?(fa.tamaIsMad=!0,fa.needAttention=!1,fa.tamaDiscipline++):(fa.tamaIsMad=!0,2===pa(5)&&fa.tamaHappy--)})),ca.addEventListener("click",(function(){!1===$a?($a=!0,se(oa)):!0===$a&&(!0===Ra?Se():(oa.classList.remove("menu-animate-open"),oa.classList.add("menu-animate-close"),setTimeout((function(){le(oa),le(da),oa.classList.remove("menu-animate-close"),oa.classList.add("menu-animate-open"),$a=!1}),1e3)))})),ua.addEventListener("click",(function(){!1===Ra?(Ra=!0,se(da)):!0===Ra&&(da.classList.remove("second-menu-animate-open"),da.classList.add("second-menu-animate-close"),setTimeout((function(){Ra=!1,le(da),da.classList.add("second-menu-animate-open"),da.classList.remove("second-menu-animate-close")}),1e3))})),ya.addEventListener("click",(function(){fa.tamaTheme=0,Se()})),ga.addEventListener("click",(function(){fa.tamaTheme=1,Se()})),va.addEventListener("click",(function(){fa.tamaTheme=2,Se()})),document.querySelector("#color4").addEventListener("click",(function(){fa.tamaTheme=3,Se()})),Sa.addEventListener("click",(function(){fa.tamaTheme=4,Se()})),t.addEventListener("click",(function(){oa.classList.remove("menu-animate-open"),oa.classList.add("menu-animate-close"),setTimeout((function(){le(oa),le(da),oa.classList.remove("menu-animate-close"),oa.classList.add("menu-animate-open"),$a=!1}),1e3),setTimeout((function(){se(a)}),500)})),e.addEventListener("click",(function(){he(),se(i)})),r.addEventListener("click",(function(){he(),se(m)})),s.addEventListener("click",(function(){he(),se(l)})),n.addEventListener("click",(function(){he(),se(c)})),o.addEventListener("click",(function(){he(),se(u)})),d.addEventListener("click",(function(){he(),se(y)}))})();