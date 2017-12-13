
let userName;
var codeName;
let randomIndustry;
let codePic;
//main data object
let strife = {
    introduction: {
        header: 'Welcome to The Millennial Game of Strife!',
        body: function(place, description){return `To succeed at the Game of Strife, it is your job to successfully navigate the pitfalls of Millennial life, all the while (secretly?) plotting the demise of the ${place} industry. Why spend money on comforts we can't afford when we can ruthlessly destroy them instead? ${description}`},
        submitButtonVal: 'Continue',
        submitButtonClass: 'user',
        radioVal: 'user',
    },
    user: {
        header: 'What is your name?',
        body: function (userName, codeName){return 'We don\'t want to refer to you as \'Hey You\' the whole time, after all, you are a unique little snowflake! We want to get to the know the real you!'},
        submitButtonVal: 'Continue',
        submitButtonClass: '',
        radioVal: 'new',
        
    },
    new: {
        header: 'Wait...',
        body: function (userName, codeName) { return `Yeah, that's a great name, but it will never really help you stand out. Let's give you a name that you can build a brand around! We are going to call you...${codeName}! Alright, ${codeName}, let's get started!`},
        submitButtonVal: 'Continue',
        submitButtonClass: '',
        radioVal: 'scenario1',

    },
    scenario1: {
        header: `Congratulations, you're an adult now I guess…?`,
        body: function (codeName, place) { return `You are fresh out of high school, time for some big life decisions, ${codeName}. 
        Do you continue with your pursuit of higher education or are you already worried about your retirement and desperate to enter the workforce?`},
        choiceText: [
            `Not ready for #adulting yet. Let's stay in school! #schooliscool`,
            'Nah, life will teach me everything I need to know. Besides, I have a great idea for an app that will totally take off.'
        ],
        radioVal: [
            'scenario2',
            'scenario3',
        ],
        submitButtonVal: 'Continue',
        submitButtonClass: 'toScenario',
    },
    scenario2: {
        header: 'Cool, you can always save for retirement later.',
    body: function (userCodeName, place) { return `Just keep buying lottery tickets and maybe you'll be fine, ${userCodeName}. Besides, there's no guarantee you'll even live that long anyways. Focus on the here and the now! Time to accumulate some knowledge and yes…a mountain of debt!
    Where do you want to go to school?`},
        choiceText: [
            'College / Career College',
            'University'
        ],
        radioVal: [
            'scenario4',
            'scenario5',
        ],
        submitButtonVal: 'Continue',
        submitButtonClass: 'toScenario',
    },
    scenario3: {
        header: 'Great choice!',
        body: function (userCodeName, place) { return `Get started early and build a strong brand for yourself! After all, my little  ${userCodeName}, you only really need one good idea and you'll make it big. 
        Now while you're working on your big idea, where are you going to live?`},
        choiceText: [
            'Get your own space.',
            'Live at home.'
        ],
        radioVal: [
            'scenario6',
            'scenario7',
        ],
        submitButtonVal: 'Continue',
        submitButtonClass: 'toScenario',
    },
    scenario4: {
        header: 'Awesome choice!',
        body: function (userCodeName, place) { return `You decide to take courses that will help you break into the booming tech industry. You immediately start building cool shit and can't wait to finish your first app. 
        What are you going to do with it, ${userCodeName}?`},
        choiceText: [
            'Get that app up! Quick! Before someone else beats me to it!',
            'Woah! I\'ve just started learning. I mean I\'m proud of the app, but I want to put way more time into developing it.'
        ],
        radioVal: [
            'failure1',
            'scenario8',
        ],
        submitButtonVal: 'Continue',
        submitButtonClass: 'toEnd',
    },
    scenario5: {
        header: 'Awesome choice!',
        body: function (userCodeName, place) { return `You make it through your undergrad with an average GPA and most of your sanity still intact! High five, ${userCodeName}! You even have a sweet looking bachelor's degree to hang on the wall. 
        Can’t wait to see what you do next!`},
        choiceText: [
            'Time to get a job and get started on that huge pile of debt. My anxiety says so.',
            'I\'m going to stay in school. After all, I already told you #schooliscool…that\'s why it rhymes.'
        ],
        radioVal: [
            'scenario9',
            'scenario10',
        ],
        submitButtonVal: 'Continue',
        submitButtonClass: 'toEnd',
    },
    scenario6: {
        header: 'Ah what a lovely...spacious...',
        body: function (userCodeName, place) { return `...okay this place is a hole, and a small one at that. But hey, no parents constantly harping on you to get a "real job"! You're living the dream, ${userCodeName}! Do you live on your own or find some cool roommates?`},
        choiceText: [
            'Live on my own! #solitude',
            'Live with roommates.'
        ],
        radioVal: [
            'failure2',
            'failure8',
        ],
        submitButtonVal: 'Continue',
        submitButtonClass: 'toEnd',
    },
    scenario7: {
        header: 'Good choice, live with your parents a little longer.',
        body: function (userCodeName, place) { return `I mean they can be annoying, but you gotta keep a low overhead if you're gonna survive. Now that your brilliant app is complete ${userCodeName}... 
        what's your next move?` },
        choiceText: [
            'Talk to backers and build some buzz!',
            'Get that app up! Quick, before someone else steals your idea!'
        ],
        radioVal: [
            'scenario11',
            'failure1',
        ],
        submitButtonVal: 'Continue',
        submitButtonClass: 'toEnd',
    },
    scenario8: {
        header: '#Respect',
        body: function (userCodeName, place) { return `You're not looking for overnight success like most baby boomers assume. You're really gonna put in those hours of work and get the job done right, ${userCodeName}. Now, while you're in school, do you think it would be a good time to do some volunteer work? You know, gain a bit of experience in the industry?`},
        choiceText: [
            'Yeah, I mean, who needs sleep when your school is next to a place that has some killer cold brew right?',
            'Not right now. I don\'t have time to help others for free! I can barely help myself! I\'ll volunteer after school. Besides, the hours conflict with my self care schedule.'
        ],
        radioVal: [
            'scenario12',
            'failure3',
        ],
        submitButtonVal: 'Continue',
        submitButtonClass: 'toEnd',
    },
    scenario9: {
        header: 'Well you have a job...',
        body: function (userCodeName, place) { return ` It's not at all related to your field of study, but hey, a paycheque is nothing to sneeze at! Now that you have a taste of financial freedom ${userCodeName}... 
        what are you going to spend that $$ on?` },
        choiceText: [
            'MOAR SCHOOL! I don\'t want to be a barista forever. Time to get some skills that employers are actually interested in.',
            'Self care! I\'ve been making sacrifices for far too long. Time to splurge on some avocado toast! After all, I have the rest of my life to earn money.'
        ],
        radioVal: [
            'scenario12',
            'failure6',
        ],
        submitButtonVal: 'Continue',
        submitButtonClass: 'toEnd',
    },
    scenario10: {
        header: 'Nice choice!',
        body: function (userCodeName, place) { return `After all, a Bachelor's degree just ain't what it used to be. Like...it literally means nothing to employers. While you're in grad school, where are you going to live?` },
        choiceText: [
            'Live at home.',
            'Get an apartment close to school.'
        ],
        radioVal: [
            'scenario13',
            'failure4',
        ],
        submitButtonVal: 'Continue',
        submitButtonClass: 'toEnd',
    },
    scenario11: {
        header: 'Your app took a long time to develop.',
        body: function (userCodeName, place) { return `You had to build, rebuild, conceptualize, pitch, it was way harder than you thought! But you did it and actually made a little money to boot, ${userCodeName}. Awesome! 
        Now what are you gonna do with all that $$?`},
        choiceText: [
            'Invest money back into education.',
            'Invest that money into a new apartment!'
        ],
        radioVal: [
            'scenario14',
            'failure5',
        ],
        submitButtonVal: 'Continue',
        submitButtonClass: 'toEnd',
    },
    scenario12: {
        header: 'Cool, you\'re doing well!',
        body: function (userCodeName, place) { return `And your courses sound like they'll lead to an interesting career. You're a bit weary, but manage to achieve something resembling a work/school balance. Should we try for work/school/life balance now, ${userCodeName}? Another one of your friends got engaged and everyone wants to go out to brunch to celebrate! 
        Do you go?`},
        choiceText: [
            'No, I stay home and skip breakfast to save a few bucks. Besides, I deleted Facebook to avoid engagement announcements.',
            'Brunch! I love brunch! Nothing bad could ever happen at brunch! Besides…this counts as networking right?'
        ],
        radioVal: [
            'success1',
            'failure6',
        ],
        submitButtonVal: 'Continue',
        submitButtonClass: 'toEnd',
    },
    scenario13: {
        header: 'Not ready to face the harsh realities of #adulting yet?',
        body: function (userCodeName, place) { return ` That's ok, it’s a nightmare out here…(seriously). Do you know how terrifying it is to schedule your own doctor's appointments?! Of course you do ${userCodeName}, that's why you still live with your parents. Well over the years of living at home you actually manage to save a little bit of $$! Awesome! 
        What are you going to spend it on?` },
        choiceText: [
            'Spend it!? Are you insane?! You\'ll have to pry this meager sum of money from my cold, dead hands.',
            'Self care! I\'ve been making sacrifices for far too long. Time to splurge on some avocado toast! After all, I have the rest of my life to earn money.'
        ],
        radioVal: [
            'success2',
            'failure6',
        ],
        submitButtonVal: 'Continue',
        submitButtonClass: 'toEnd',
    },
    scenario14: {
        header: 'Alright alright...',
        body: function (userCodeName, place) { return `Just because you had some minor success ${userCodeName}, doesn't mean it's time to get cocky. Build on your skills and take a few courses. (I hear HackerYou is a great place to learn the industry must-haves!).
        So you've got the skills, but what's your next move?` },
        choiceText: [
            'Invest! Invest that money you don\'t * quite * have yet.',
            'Move in with your S.O.'
        ],
        radioVal: [
            'success3',
            'failure7',
        ],
        submitButtonVal: 'Continue',
        submitButtonClass: 'toEnd',
    },
    success1: {
        header: 'Congratulations, YOU WON!',
        body: function (userCodeName, place) { return `Wow ${userCodeName}! You’ve curbed your avocado toast cravings and managed to graduate with distinction. You may not have any friends, but you have 3 job offers! After all, money is all that matters in this cruel corporate world. Time to pay off that school debt and buy a condo! You watch out the window of your high rise, and in the distance you can almost see the ${place} industry crumbling.`},
        submitButtonVal: 'Play Again',
        submitButtonClass: 'replay',
        radioVal: 'reload'
    },
    success2: {
        header: 'Congratulations, YOU WON!',
        body: function (userCodeName, place) { return `Great job, ${userCodeName}! You’ve curbed your avocado toast cravings and managed to afford the castle of your dreams….a 1 bedroom centre unit townhouse. No garage, no dining room, and definitely no need for the ${place} industry.` },
        submitButtonVal: 'Play Again',
        submitButtonClass: 'replay',
        radioVal: 'reload'
    },
    success3: {
        header: 'Congratulations, YOU WON!',
        body: function (userCodeName, place) { return `Headshots for LinkedIn, drinks you can't afford, and networking galore! Conferences, coffee dates, and events of all kinds! Anything to grow your network. Your bank account may be barren, ${userCodeName}, but you have connections that span the globe. All that hard work paid off! You land a job, and even though you still live at home, you can dream of one day moving into a modest condo. And you can bask in the glory of having done it all without ever having to support the ${place} industry.` },
        submitButtonVal: 'Play Again',
        submitButtonClass: 'replay',
        radioVal: 'reload'
    },
    failure1: {
        header: 'Your app is lost in a sea of apps. YOU LOSE.',
        body: function (userCodeName, place) { return ` Without advertisements you earn little to no money off the few downloads your app does get. But hey, at least you can say you did something worthwile, ${userCodeName}. You built an app! That's so cool! Ride this wave as long as you can, because this is as good as it gets. Oh yeah, while you float along in the sea of anonymity, the ${place} industry wins. Who knows, maybe your next app will get more than 1 star.`},
        submitButtonVal: 'replay',
        radioVal: 'reload'
    },
    failure2: {
        header: 'YOU LOST. #brokeaf',
        body: function (userCodeName, place) { return `You thought moving away from home would nurture your creativity and give you some much needed staging areas for your Instagram. Sadly, between rent, and food, and the laundromat, you ended up having to get a day job....and an evening job....and you're currently on the hunt for something on weekends just to make ends meet. Your app never gets built and the ${place} industry wins. But hey, you can always go back to school, if you can stand moving back in to your former childhood bedroom.` },
        submitButtonVal: 'replay',
        radioVal: 'reload'
    },
    failure3: {
        header: 'Not enough experience to be employable. YOU LOSE.',
        body: function (userCodeName, place) { return `Sorry kid, it's not like any boomers are going to pay you to work until you have experience. You know the whole, you need a job to get experience, but experience to get a job conundrum. You're going to be living at home for a while until you can find something stable in this gig economy. Maybe you can stay on your parents' benefits somehow. Until the ${codeName} brand gains traction though, your quest to take down the ${place} industry are just lonely tweets lost in the vast twittersphere.` },
        submitButtonVal: 'replay',
        radioVal: 'reload'
    },
    failure4: {
        header: 'How does one #adult? YOU LOST.',
        body: function (userCodeName, place) { return `You thought living closer would make it easier to manage the stress of grad school, but you never learned basic life skills like how to cook. You get scurvy and are too afraid to call and make your own doctor's appointment. Maybe when you graduate you'll have time to take some #adulting classes. Until then though ${userCodeName}, the ${place} industry wins.` },
        submitButtonVal: 'replay',
        radioVal: 'reload'
    },
    failure5: {
        header: 'YOU LOST. #brokeaf',
        body: function (userCodeName, place) { return `Well ${userCodeName}, you thought getting your own apartment would give you a chance to grow and try your hand at #adulting, but man that shit is expensive! You can keep digging yourself deeper and deeper into debt, or move back home and give up on building apps for good. Either way though, the ${place} industry wins.` },
        submitButtonVal: 'replay',
        radioVal: 'reload'
    },
    failure6: {
        header: 'Care...for yourself?? YOU LOST.',
        body: function (userCodeName, place) { return `Sorry ${userCodeName}, if there's anything you can learn from the baby boomers, its that spending money on avocado toast and self care is the reason millennials will never amount to anything. Potential employers see you enjoying your brunch and resent you. You're never able to get that first big break into the ${place} industry and to destroy it from within.` },
        submitButtonVal: 'replay',
        radioVal: 'reload'
    },
    failure7: {
        header: 'Love wins, but YOU LOST.',
        body: function (userCodeName, place) { return ` Your courses went well and you found a decent relationship! Too bad you stayed in on weekends and forgot all about that necessary evil, networking! You never build a brand, your LinkedIn is a joke, and your network is built solely of people from highschool who you haven't talked to in 10 years. You're happy, ${userCodeName}, but forever broke. Love wins, but so does the ${place} industry.` },
        submitButtonVal: 'replay',
        radioVal: 'reload'
    },
    failure8: {
        header: 'YOU LOST. #brokeaf',
        body: function (userCodeName, place) { return `You thought moving away from home would nurture your creativity and give you some much needed staging areas for your Instagram. Sadly, between rent, and food, and the laundromat, you ended up having to get a day job....and an evening job....and you're currently on the hunt for something on weekends just to make ends meet. Your app never gets built and the ${place} industry wins. But hey, you can always go back to school, if you can stand moving back in to your former childhood bedroom.` },
        submitButtonVal: 'replay',
        radioVal: 'reload'
    },
    alphabet: ['Avocado', 'Beyonce', 'Craft Beer', 'Despacito', 'Emoji', 'Falcon', 'Gluten-free', 'Hipster', 'Instagram', 'Juice Bar', 'Kickstarter', 'Lumbersexual', 'Man Bun', 'Narwhal', 'Organic', 'Pour-over', 'Quinoa', 'Raw', 'Snapchat', 'Twitter', 'Unicorn Frappuccino', 'Vape', 'Whatever', 'XOXO', 'Yolo', 'Z-Gen', '0', '1', '2', '3,000', '4', '5', '6', '7', '8', '9'],
    industries: [
        {name: 'Golf', line: 'Who even likes early morning tee times, anyways?'},
        {name: 'Home Renovation', line: 'After all, you can\'t renovate your parents\' basement.' },
        {name: 'Shopping Mall', line: 'Amazon Prime shipping is cheaper than owning a car to drive there anyway.' },
        {name: 'Cable TV', line: 'And Netflix. I mean. Come on.' },
    ],
    participation: 'assets/participant.png',
    winner: 'assets/100.png',
    icon: {
        A: 'assets/avocado.png',
        B: 'assets/beyonce.png',
        C: 'assets/craft-beer.png',
        D: 'assets/despacito.png',
        E: 'assets/emoji.png',
        F: 'assets/falcon.png',
        G: 'assets/gluten-free.png',
        H: 'assets/hipster.png',
        I: 'assets/instagram.png',
        J: 'assets/juice-bar.png',
        K: 'assets/kickstarter.png',
        L: 'assets/lumbersexual.png',
        M: 'assets/man-bun.png',
        N: 'assets/narwhal.png',
        O: 'assets/organic.png',
        P: 'assets/pour-over.png',
        Q: 'assets/quinoa.png',
        R: 'assets/raw.png',
        S: 'assets/snapchat.png',
        T: 'assets/twitter.png',
        U: 'assets/unicorn-frappuccino.png',
        V: 'assets/vape.png',
        W: 'assets/whatever.png',
        X: 'assets/xoxo.png',
        Y: 'assets/yolo.png',
        Z: 'assets/z-gen.png',
        '0': 'assets/catch-all.png',
        '1': 'assets/catch-all.png',
        '2': 'assets/catch-all.png',
        '3': 'assets/catch-all.png',
        '4': 'assets/catch-all.png',
        '5': 'assets/catch-all.png',
        '6': 'assets/catch-all.png',
        '7': 'assets/catch-all.png',
        '8': 'assets/catch-all.png',
        '9': 'assets/catch-all.png',
        '0': 'assets/catch-all.png',
    }
}

strife.level = -2;

//same submit button for leading to next screens
strife.submitButton = $('<input>').attr('type', 'submit').attr('value', strife['introduction']['submitButtonVal']).attr('id','enable');
//radio button on welcome, to be hidden
strife.radioContinue = $('<input>').attr('type', 'radio').attr('value', strife['introduction']['radioVal']);
//try again Submit button
strife.replayButton = $('<input>').attr('type', 'submit').addClass('replay').val('Replay');

//code name generator, used in if/else 'new' in renderContentRadio function
function randomName(string) {
    let newString = string.toUpperCase();
    for (let i = 0; i < strife.alphabet.length; i = i + 1) {
        if (newString[0] === strife.alphabet[i][0]) {
            let newName = `${strife.alphabet[i]}`
            return newName;
        }
    }
}


//icon generator,used in if/else 'new' in renderContentRadio function
function pickIcon(match) {
    let firstLetter = match[0];
    let iconPath;
    for (let key in strife.icon) {
        if (firstLetter === key) {
            iconPath = strife.icon[key];
        }
    }
    return iconPath;
}

//for Which Industry, first displayed on welcome screen
function randomNumberFun(n){
    return Math.floor(Math.random()*n);
}
randomIndustry = randomNumberFun(strife.industries.length);

//implemented jquery plugin animsition (for practice), for smooth page fade n on reload
strife.pageFadeIn = function () {
    $(".animsition").animsition({
        inClass: 'fade-in',
        inDuration: 800,
    });
}

//WELCOME SCREEN
strife.renderWelcome = function(){
    //when the page is loaded, print an introductory heading and intro paragraph to the page
    $('h3').text(strife.introduction.header);
    $('.textContent p').text(strife.introduction.body(strife.industries[randomIndustry].name, strife.industries[randomIndustry].line));
    //creating continue submit button
    strife.radioContinue = strife.radioContinue.attr('checked', 'true').addClass('hide');
    // add submit to screen, to continue to next screen
    $('.mainContent .buttonBox').append(strife.radioContinue).append(strife.submitButton);

}

strife.formSubmitListen = function () {
    //listen for submit on the FORM
    $('form').on('submit', function (e) {
        //prevent default
        e.preventDefault();

        strife.fadeOutOnSubmit();

    });//end of submit listener
}


strife.fadeOutOnSubmit = function () {//fades out content page, removes content, then runs renderContentRadio function to populate content depending on radio button value. Called within formSubmitListen
    //fade content out
    $('.mainContent').fadeOut(400, 'swing', function () {
        //remove content from the 'hidden' page
        $('h3', '.textContent p', strife.submitButton).text('');

        //add content, based on the value of the checked radio button, put radio function in here
        strife.renderContentRadio();

        $('.mainContent').fadeIn(400);//fades populated content back into view

    });//end of fadeOut callback
}


//this function will render content on the page, used in strife.fadeOutOnSubmit to render content on the page you are going TO
strife.renderContentRadio = function(){
    strife.level = strife.level + 1;
    
    let userChoice = $('input[type=radio]:checked').val();//stores the value of the checked radio button, directs flow to next screen

    userName = $('input[type=text]').val();//stores username
        
    if(userChoice === 'user'){//from start screen, adding a button to continue to username entry page
        
        $('h3').text(strife[userChoice].header);//populates header depending on users selection
        $('.textContent p').text(strife[userChoice].body(userName));//polpulates body based on users selection
        //username input
        strife.nameInput = $('<input>').attr('type', 'text').attr('required', 'true').attr('placeholder', 'Your name...');
        //save username
        $('.mainContent .inputBox').prepend(strife.nameInput);
        strife.radioContinue.attr('value', strife[userChoice]['radioVal']);
        
        
    } else if (userChoice === 'new') {//from username input screen, generates code name
        codeName = randomName(userName);//generates code name
        codePic = pickIcon(codeName);//generates icon to match name
        let pic = $('<img/>');
        pic.attr('src', codePic);

        //add the card and result div to the start of main content
        strife.cardAndResultDiv = $('<div>').addClass('cardAndResult');
        $('.mainContent').prepend(strife.cardAndResultDiv);

        //add the character div to the start of card and result div
        strife.characterDiv = $('<div>').addClass('character').addClass('card');
        $('.cardAndResult').prepend(strife.characterDiv);
        //add the award div to the end of the award and result div
        strife.awardDiv = $('<div>').addClass('award');
        $('.cardAndResult').append(strife.awardDiv);
        //append avatarIcon div to character
        strife.avatarIconDiv = $('<div>').addClass('avatarIcon');
        $('.character').append(strife.avatarIconDiv);
        //append pic to avatarIcon
        $('.avatarIcon').append(pic);
        //append avatarName to character div
        strife.avatarNameDiv = $('<div>').addClass('avatarName');
        $('.character').append(strife.avatarNameDiv);
        //append p tag to avatarName
        strife.avatarNameTag = $('<p>');
        $('.avatarName').append(strife.avatarNameTag);
        //add html to p tag inside avatarName
        $('.avatarName p').text(codeName);

        
        $('h3').text(strife[userChoice].header);//populates header depending on users selection
        $('.textContent p').text(strife[userChoice].body(userName, codeName));//populates body based on users selection
        
        $('.mainContent .buttonBox').empty();
        $('.mainContent .inputBox').empty();
        strife.radioContinue.attr('value', strife[userChoice]['radioVal']);
        $('.mainContent .buttonBox').append(strife.radioContinue).append(strife.submitButton);
        
        
        
    } else if ((userChoice === 'success1') || (userChoice === 'success2') || (userChoice === 'success3')){//if user wins, clear form and add replay button
        //adds winning ribbon to doc
        let winnerRibbon = $('<img/>');
        winnerRibbon.attr('src', strife.winner);
        $('.award').append(winnerRibbon);


        $('h3').text(strife[userChoice].header);//populates header depending on users selection
        $('.textContent p').text(strife[userChoice].body(codeName, strife.industries[randomIndustry].name));//polpulates body based on users selection
        $('.radioBox1, .radioBox2').removeClass('radioContainerStyle');

        $('.mainContent .radioBox1').empty();
        $('.mainContent .radioBox2').empty();
        $('.mainContent .buttonBox').empty();
        $('.mainContent .buttonBox').append(strife.replayButton);
        
        
    } else if ((userChoice === 'failure1') || (userChoice === 'failure2') || (userChoice === 'failure3') || (userChoice === 'failure4') || (userChoice === 'failure5') || (userChoice === 'failure6') || (userChoice === 'failure7') || (userChoice === 'failure8')){//if user loses, clear form and add replay button

        //adds participant ribbon img to doc
        let participantRibbon = $('<img/>');
        participantRibbon.attr('src', strife.participation);
        $('.award').append(participantRibbon);

        $('.radioBox1, .radioBox2').removeClass('radioContainerStyle');
        $('h3').text(strife[userChoice].header);//populates header depending on users selection
        $('.textContent p').text(strife[userChoice].body(codeName, strife.industries[randomIndustry].name));//polpulates body based on users selection
        
        $('.mainContent .radioBox1').empty();
        $('.mainContent .radioBox2').empty();
        $('.mainContent .buttonBox').empty();
        $('.mainContent .buttonBox').append(strife.replayButton);
        
    } else {
        //when the userchoice leads to a scenario page with 2 radio buttons
        $('h3').text(strife[userChoice].header);//populates header depending on users selection
        $('.textContent p').text(strife[userChoice].body(codeName, strife.industries[randomIndustry].name));//polpulates body based on users selection
        
        strife.radio1 = $('<input>')//creates radio button
        .attr('type', 'radio')
        .attr('value', strife[userChoice]['radioVal'][0])
        .attr('id', strife[userChoice]['radioVal'][0])
        .attr('name', 'scenario')
        .attr('required', true)
        .addClass('hide');//HERE 
        strife.radio2 = $('<input>')//creates radio button
        .attr('type', 'radio')
        .attr('value', strife[userChoice]['radioVal'][1])
        .attr('id', strife[userChoice]['radioVal'][1])
        .attr('name', 'scenario')
        .addClass('hide');//HERE
        strife.label1 = $('<label>')//creates label
        .attr('for', strife[userChoice]['radioVal'][0])
        .text(strife[userChoice]['choiceText'][0]).addClass('labelStyle');
        strife.label2 = $('<label>')//creates label
        .attr('for', strife[userChoice]['radioVal'][1])
        .text(strife[userChoice]['choiceText'][1]).addClass('labelStyle');



        $('.mainContent .radioBox1').empty();//empties previous content
        $('.mainContent .radioBox2').empty();//empties previous content
        $('.mainContent .buttonBox').empty();//empties previous content
        $('.radioBox1, .radioBox2').addClass('radioContainerStyle');
        $('.mainContent .radioBox2').append(strife.radio2);//adds radio button
        $('.mainContent .radioBox2').append(strife.label2);//adds label
        $('.mainContent .radioBox1').append(strife.radio1);//adds radio button
        $('.mainContent .radioBox1').append(strife.label1);//adds label
        
        $('.mainContent .buttonBox').append(strife.submitButton)//adds submit button for choice
    }
}
    
    strife.replay = function () {//to refresh the page to replay game
        $('body').on('click', '.replay', function () {
            $('.mainContent').fadeOut(400, function () {
                window.location = '';
            });
        });
    }

strife.init =function(){
    strife.pageFadeIn();
    strife.renderWelcome();
    strife.formSubmitListen();
    strife.replay();
}

$(document).ready(function(){ 
    strife.init();
    
});//end of doc ready


