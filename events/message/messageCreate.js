const { Client } = require('discord.js');

const cooldowns = new Map();

module.exports = {
    name: 'messageCreate',
    once: false,
    on: true,
    execute(message) {
        const messageChannel = message.guild.channels.cache.get('1173943621179953253');

        if (message.author.bot) {
            return;
        }

        if (cooldowns.has(message.author.id)) {
            const expirationTime = cooldowns.get(message.author.id);

            if (Date.now() < expirationTime) {
                return;
            }
        }

        const cooldownTime = 3 * 60 * 1000;
        cooldowns.set(message.author.id, Date.now() + cooldownTime);

        if (message.content.toLowerCase() === "tak") {
            messageChannel.send("nie");
        } else if (message.content.toLowerCase() === "nie") {
            messageChannel.send("tak");
        }

        const badwords = ['chuj', 'chuja', 'chujek', 'chujem', 'chujnia', 'chujowa', 'chujowe',
            'chujowy', 'chuju', 'cipa', 'cipą', 'cipe', 'cipę', 'cipie', 'dojebac', 'dojebać',
            'dojebal', 'dojebala', 'dojebalam', 'dojebalem', 'dojebał', 'dojebała', 'dojebałam',
            'dojebałem', 'dojebie', 'dojebię', 'dopieprzac', 'dopieprzać', 'dopierdala', 'dopierdalac',
            'dopierdalać', 'dopierdalajacy', 'dopierdalający', 'dopierdalal', 'dopierdalala',
            'dopierdalał', 'dopierdalała', 'dopierdole', 'dopierdolę', 'dopierdoli', 'dopierdolic',
            'dopierdolić', 'dopierdolil', 'dopierdolił', 'dupa', 'dupą', 'dupcia', 'dupe', 'dupeczka',
            'dupie', 'dupy', 'huj', 'huja', 'huje', 'hujek', 'hujem', 'hujnia', 'huju', 'jebac',
            'jebać', 'jebak', 'jebaka', 'jebal', 'jebał', 'jebana', 'jebaną', 'jebane', 'jebanej',
            'jebani', 'jebanka', 'jebankiem', 'jebanko', 'jebany', 'jebanych', 'jebanym', 'jebanymi',
            'jebcie', 'jebia', 'jebiaca', 'jebiacego', 'jebiacej', 'jebiacy', 'jebią', 'jebiąca',
            'jebiącego', 'jebiącej', 'jebiący', 'jebie', 'jebię', 'jebliwy', 'jebna', 'jebnac',
            'jebnać', 'jebnal', 'jebną', 'jebnąc', 'jebnąć', 'jebnął', 'jebnela', 'jebnęła', 'jebnie',
            'jebnij', 'jebut', 'koorwa', 'kórwa', 'kurestwo', 'kurew', 'kurewska', 'kurewską',
            'kurewski', 'kurewskiej', 'kurewsko', 'kurewstwo', 'kurwa', 'kurwaa', 'kurwach',
            'kurwami', 'kurwą', 'kurwe', 'kurwę', 'kurwiarz', 'kurwiący', 'kurwic', 'kurwica',
            'kurwić', 'kurwidołek', 'kurwie', 'kurwik', 'kurwiki', 'kurwiska', 'kurwiszcze', 'kurwiszon',
            'kurwiszona', 'kurwiszonem', 'kurwiszony', 'kurwo', 'kurwy', 'kutas', 'kutasa', 'kutasach',
            'kutasami', 'kutasem', 'kutasie', 'kutasow', 'kutasów', 'kutasy', 'matkojebca', 'matkojebcach',
            'matkojebcami', 'matkojebcą', 'matkojebcy', 'nabarłożyć', 'najebac', 'najebać', 'najebal',
            'najebala', 'najebał', 'najebała', 'najebana', 'najebaną', 'najebane', 'najebany', 'najebia',
            'najebią', 'najebie', 'naopierdalac', 'naopierdalać', 'naopierdalal', 'naopierdalala',
            'naopierdalał', 'naopierdalała', 'napierdalac', 'napierdalać', 'napierdalajacy', 'napierdalający',
            'napierdolic', 'napierdolić', 'nawpierdalac', 'nawpierdalać', 'nawpierdalal', 'nawpierdalala',
            'nawpierdalał', 'nawpierdalała', 'obsrywac', 'obsrywać', 'obsrywajacy', 'obsrywający', 'odpieprzac',
            'odpieprzać', 'odpieprzy', 'odpieprzyl', 'odpieprzyla', 'odpieprzył', 'odpieprzyła', 'odpierdalac',
            'odpierdalać', 'odpierdalajaca', 'odpierdalajacy', 'odpierdalająca', 'odpierdalający', 'odpierdol',
            'odpierdoli', 'odpierdolic', 'odpierdolić', 'odpierdolil', 'odpierdolila', 'odpierdolił', 'odpierdoliła',
            'opieprzający', 'opierdala', 'opierdalac', 'opierdalać', 'opierdalajacy', 'opierdalający', 'opierdol',
            'opierdola', 'opierdolą', 'opierdoli', 'opierdolic', 'opierdolić', 'piczka', 'pieprzniety', 'pieprznięty',
            'pieprzony', 'pierdel', 'pierdlu', 'pierdol', 'pierdola', 'pierdolaca', 'pierdolacy', 'pierdolą',
            'pierdoląca', 'pierdolący', 'pierdole', 'pierdolec', 'pierdolenie', 'pierdoleniem', 'pierdoleniu',
            'pierdolę', 'pierdoli', 'pierdolic', 'pierdolicie', 'pierdolić', 'pierdolil', 'pierdolila', 'pierdolił',
            'pierdoliła', 'pierdolisz', 'pierdolnac', 'pierdolnal', 'pierdolnąć', 'pierdolnął', 'pierdolnela',
            'pierdolnęła', 'pierdolnie', 'pierdolniety', 'pierdolnięty', 'pierdolnij', 'pierdolnik', 'pierdolona',
            'pierdolone', 'pierdolony', 'pierdołki', 'pierdzący', 'pierdziec', 'pierdzieć', 'pizda', 'pizdą',
            'pizde', 'pizdę', 'pizdnac', 'pizdnąć', 'pizdu', 'pizdzie', 'piździe', 'podpierdala', 'podpierdalac',
            'podpierdalać', 'podpierdalajacy', 'podpierdalający', 'podpierdoli', 'podpierdolic', 'podpierdolić',
            'pojeb', 'pojeba', 'pojebac', 'pojebać', 'pojebalo', 'pojebami', 'pojebanego', 'pojebanemu', 'pojebani',
            'pojebany', 'pojebanych', 'pojebanym', 'pojebanymi', 'pojebem', 'popierdala', 'popierdalac', 'popierdalać',
            'popierdoleni', 'popierdoli', 'popierdolic', 'popierdolić', 'popierdolone', 'popierdolonego', 'popierdolonemu',
            'popierdolony', 'popierdolonym', 'porozpierdala', 'porozpierdalac', 'porozpierdalać', 'poruchac', 'poruchać',
            'przejebac', 'przejebać', 'przejebane', 'przepierdala', 'przepierdalac', 'przepierdalać', 'przepierdalajaca',
            'przepierdalajacy', 'przepierdalająca', 'przepierdalający', 'przepierdolic', 'przepierdolić', 'przyjebac',
            'przyjebać', 'przyjebal', 'przyjebala', 'przyjebali', 'przyjebał', 'przyjebała', 'przyjebie', 'przypieprzac',
            'przypieprzać', 'przypieprzajaca', 'przypieprzajacy', 'przypieprzająca', 'przypieprzający', 'przypierdala',
            'przypierdalac', 'przypierdalać', 'przypierdalajacy', 'przypierdalający', 'przypierdoli', 'przypierdolic',
            'przypierdolić', 'qrwa', 'rozjebac', 'rozjebać', 'rozjebała', 'rozjebią', 'rozjebie', 'rozpierdala', 'rozpierdalac',
            'rozpierdalać', 'rozpierdole', 'rozpierdoli', 'rozpierdolic', 'rozpierdolić', 'rozpierducha', 'skurwić', 'skurwiel',
            'skurwiela', 'skurwielem', 'skurwielu', 'skurwysyn', 'skurwysyna', 'skurwysynem', 'skurwysynow', 'skurwysynów',
            'skurwysynski', 'skurwysynstwo', 'skurwysynu', 'skurwysyny', 'skurwysyński', 'skurwysyństwo', 'spieprza', 'spieprzac',
            'spieprzać', 'spieprzaj', 'spieprzaja', 'spieprzajaca', 'spieprzajacy', 'spieprzają', 'spieprzająca', 'spieprzający',
            'spieprzajcie', 'spierdala', 'spierdalac', 'spierdalać', 'spierdalajacy', 'spierdalający', 'spierdalal', 'spierdalala',
            'spierdalalcie', 'spierdalał', 'spierdalała', 'spierdola', 'spierdolą', 'spierdoli', 'spierdolic', 'spierdolić',
            'spierdoliła', 'spierdoliło', 'srac', 'srać', 'sraj', 'srajac', 'srajacy', 'srając', 'srający', 'sukinsyn', 'sukinsynom',
            'sukinsynow', 'sukinsynowi', 'sukinsynów', 'sukinsyny', 'śmierdziel', 'udupić', 'ujebac', 'ujebać', 'ujebal', 'ujebala',
            'ujebał', 'ujebała', 'ujebana', 'ujebany', 'ujebie', 'upierdala', 'upierdalac', 'upierdalać', 'upierdola', 'upierdolą',
            'upierdoleni', 'upierdoli', 'upierdolic', 'upierdolić', 'wjebac', 'wjebać', 'wjebia', 'wjebią', 'wjebie', 'wjebiecie',
            'wjebiemy', 'wkurwi', 'wkurwia', 'wkurwiac', 'wkurwiacie', 'wkurwiać', 'wkurwiajaca', 'wkurwiajacy', 'wkurwiają',
            'wkurwiająca', 'wkurwiający', 'wkurwial', 'wkurwiali', 'wkurwiał', 'wkurwią', 'wkurwic', 'wkurwicie', 'wkurwić',
            'wkurwimy', 'wpierdalac', 'wpierdalać', 'wpierdalajacy', 'wpierdalający', 'wpierdol', 'wpierdolic', 'wpierdolić',
            'wpizdu', 'wyjebac', 'wyjebać', 'wyjebali', 'wyjebał', 'wyjebała', 'wyjebały', 'wyjebia', 'wyjebią', 'wyjebie',
            'wyjebiecie', 'wyjebiemy', 'wyjebiesz', 'wypieprza', 'wypieprzac', 'wypieprzać', 'wypieprzal', 'wypieprzala',
            'wypieprzał', 'wypieprzała', 'wypieprzy', 'wypieprzyl', 'wypieprzyla', 'wypieprzył', 'wypieprzyła', 'wypierdal',
            'wypierdala', 'wypierdalac', 'wypierdalać', 'wypierdalaj', 'wypierdalal', 'wypierdalala', 'wypierdalał',
            'wypierdalała', 'wypierdola', 'wypierdolą', 'wypierdoli', 'wypierdolic', 'wypierdolicie', 'wypierdolić',
            'wypierdolil', 'wypierdolila', 'wypierdolili', 'wypierdolił', 'wypierdoliła', 'wypierdolimy', 'zajebac',
            'zajebać', 'zajebali', 'zajebała', 'zajebana', 'zajebane', 'zajebani', 'zajebany', 'zajebanych', 'zajebanym',
            'zajebanymi', 'zajebia', 'zajebial', 'zajebiala', 'zajebiał', 'zajebią', 'zajebie', 'zajebiscie', 'zajebista',
            'zajebiste', 'zajebisty', 'zajebistych', 'zajebistym', 'zajebistymi', 'zajebiście', 'zapieprza', 'zapieprzą',
            'zapieprzy', 'zapieprzyc', 'zapieprzycie', 'zapieprzyć', 'zapieprzyl', 'zapieprzyla', 'zapieprzył', 'zapieprzyła',
            'zapieprzymy', 'zapieprzysz', 'zapierdala', 'zapierdalac', 'zapierdalać', 'zapierdalaj', 'zapierdalaja', 'zapierdalajacy',
            'zapierdalający', 'zapierdalajcie', 'zapierdalala', 'zapierdalali', 'zapierdalał', 'zapierdalała', 'zapierdola',
            'zapierdolą', 'zapierdoli', 'zapierdolic', 'zapierdolić', 'zapierdolil', 'zapierdolila', 'zapierdolił', 'zapierdoliła',
            'zapierniczać', 'zapierniczający', 'zasrać', 'zasranym', 'zasrywać', 'zasrywający', 'zesrywać', 'zesrywający', 'zjebac',
            'zjebać', 'zjebal', 'zjebala', 'zjebali', 'zjebał', 'zjebała', 'zjebana', 'zjebią', 'zjeby']

            if (badwords.some(word => message.content.includes(word))) {
                message.delete();
                setInterval(() => {
                    message.channel.messages.fetch({ limit: 1 }).then(messages => {
                        const lastMessage = messages.first();
                        if (badwords.some(word => lastMessage.content.includes(word))) {
                            lastMessage.delete();
                        }
                    });
                }, 1000);
            }

    }
}
