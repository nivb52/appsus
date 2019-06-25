/*
• Has a filter object – null by default
• Has a computed property  ToShow that returns books based on the current filter
*/

// if (this.$route.params === '')
import { storageService } from '../../../services/storage.service.js'
import { utilService } from '../../../services/util.service.js'

export const emailService = {
    query,
    queryId,
    countUnreadInFolder,
    updateKey,
    updateEmails
}
const EMAIL_KEY = 'emails'
const FOLDER_OPS = ['sent', 'drafts', 'important', 'archive']
const IMG_NUMBER = 15
var emailsDB = [
    {
        "id": "O2e2G8w0skc",
        "subject": "Re: Tell me you got over with those exams",
        "from": "Eli, me (5)",
        "sentAt": 1999,
        "body": `Please complete your Conceptboard signup &nbsp;&ndash;&nbsp;  You
    recently created a Conceptboard account, but you have not yet confirmed your email. Your email is used
    for notifications about board activity, invites, as well as account related tasks (like password
    retrieval).`,
        "isRead": true,
        "labels": [
            "bills",
            "marketing"
        ],

    },
    {
        "id": "OXeMG8wNskc",
        "subject": "Lucas Kriebel (via Twitter)",
        "from": "Twitter Updates",
        "sentAt": 1999,
        "body": "Off on Thursday that place, you might as well stay here with us instead! Sent from my iPhone 4  4 mar 2014 at 5: 55 pm",
        "isRead": true,
        "labels": [
            "work",
            "social"
        ],

    },
    {
        "id": "OXe4547wNskc",
        "subject": "Eli Mana (via Twitter)",
        "from": "Twitter Updates",
        "sentAt": 1999,
        "body": "Monday that place, you might as well stay here with us instead! Sent from my iPhone 4  4 mar 2014 at 5: 55 pm",
        "isRead": true,
        "labels": [
            "work",
            "social"
        ],

    },
    {
        "id": "JYOJa2NpSCq",
        "subject": "Asaf M. is following you",
        "from":
            "Linkdin Subscribers"
        ,
        "sentAt": 1978,
        "body": `Hello There, we just wanted you to know Asaf M. is now following you. by the way,  your CV got now to 1.2 millions institutions and 302,345 followers`,
        "isRead": true,
        "labels": [
            "social"
        ],

    },

    {
        "id": "1y0Oqts35DQ",
        "subject": "Your Medium Weekly email",
        "from":
            "Medium"
        ,
        "sentAt": 1999,
        "body": "This Week's Top Stories Our top pick for you on Medium this week The Man Who Destroyed America’s Ego",
        "isRead": true,
        "labels": [
            "toread"
        ],

    },
    {
        "id": "kSnfIJyikTP",
        "subject": "Still learning VueJs ?? ",
        "from":
            "Danielle Steel"
        ,
        "sentAt": 1978,
        "body": `Mochila Beta: Subscription Confirmed You've
    been confirmed! Welcome to the ruling class of the inbox. For your records, here is a copy of the
    information you submitted to us...`,
        "isRead": false,
        "labels": [
            "work",
            "marketing"
        ],

    },
    {
        "id": "f4iuVmbuKCC",
        "subject": "Why work had when you can get those photos free",
        "from":
            "Eran from iCloud"
        ,
        "sentAt": 2011,
        "body": "Montly High-Res Photos To create this month's pack, we hosted a party with local musician Jared Mahone here in Columbus, Ohio. thought maybe you want some music inspiration for the weekend. Here are some trending tracks and playlists we think you should give a listen! habitant nam imperdiet nostra elit dapibus nisl adipiscing in",
        "isRead": false,
        "labels": [
            "social",
            "marketing"
        ],

    },
    {
        "id": "U2rfZO6oBZf",
        "subject": "לא מתוכננים לך אירועים להיום.",
        "from":
            "יומן Google"
        ,
        "sentAt": 1978,
        "body": "אין לך אירועים שנקבעו להיום ",
        "isRead": false,
        "labels": [
            "work",
            "google"
        ],

    },
    {
        "id": "xI0wrXaaAcq",
        "subject": "Apple stocks is just raising - here what Warn Buffet has to say",
        "from":
            "Stocks.com"
        ,
        "sentAt": 2011,
        "body": "nec scelerisque id cursus platea sit ullamcorper bibendum ultrices tempus ante mi aliquet cras tortor dapibus dictum scelerisque",
        "isRead": true,
        "labels": [
            "work",
            "stocks"
        ],

    },
    {
        "id": "9laHCEdSpFy",
        "subject": "Can you send me your new app version",
        "from":
            "הבוס"
        ,
        "sentAt": 1999,
        "body": "I am willing to accept your offer for the new ap build, with the price you offered, magna quisque venenatis laoreet purus in semper habitant proin pellentesque sed egestas cursus faucibus nam enim id sit mi ligula risus curabitur senectus curabitur sodales fames sem",
        "isRead": true,
        "labels": [
            "work",

        ],

    },
    {
        "id": "nGhVwZvGCGp",
        "subject": "שופרסל Online - הזמנתך נקלטה - ניצור עימך קשר בתוך שעתיים",
        "from":
            "Shupersal Online"
        ,
        "sentAt": 2011,
        "body": "porttitor nisl sodales id eu tellus venenatis laoreet auctor dictumst nulla",
        "isRead": true,
        "labels": [
            "bills",
            "marketing"
        ],

    },
    {
        "id": "Q8Q9Lsd03BD",
        "subject": "Regarding our meeting - Erik, me (5)",
        "from":
            "John"
        ,
        "sentAt": 1978,
        "body": "Call me. I can;t make it on time !!! ",
        "isRead": true,
        "labels": [
            "meetings"
        ],

    },
    {
        "id": "bd7a76kARao",
        "subject": "It is not possible ",
        "from":
            "Danielle Steel"
        ,
        "sentAt": 2018,
        "body": "Task assigned: Clone API website You have been assigned a task by Alex@Work on the board Web.",
        "isRead": true,
        "labels": [
            "marketing"
        ],

    },
    {
        "id": "qKyG0vqeO3e",
        "subject": "we will have to postpone our meeting",
        "from":
            "Emi Nave"
        ,
        "sentAt": 2018,
        "body": "Last pic over my village &nbsp;&ndash;&nbsp;  Yeah i'd like that! Do you remember the video you showed me of your train ride between Colombo and Kandy? The one with the mountain view? I would love to see that one again!",
        "isRead": false,
        "labels": [
            "pictures",
            "meetings"
        ],
    },
    {
        "id": "2RvT48ZNInj",
        "subject": "We Are Hiring!",
        "from":
            "Agatha Christie"
        ,
        "sentAt": 2011,
        "body": " In the nearly 20 years Bekelman&Tamir exists, we’ve grown to become one of the leading UX agencies in Europe by volume of work. We’ve delivered hundreds of projects to some of the biggest Israeli and multinational clients. From complex operational systems to mobile apps, websites and UI/UX projects - we’ve done it all. Among our clients are governmental agencies, banks, start-ups, and industry giants.",
        "isRead": true,
        "labels": [
            "work",
            "diggers"
        ],

    },
    {
        "id": "5z2s9pDXAYj",
        "subject": "1 new items in your Stackexchange inbox",
        "from":
            "Stack Exchange"
        ,
        "sentAt": 1999,
        "body": "following items were added to your Stack Exchange global inbox since you last checked it .etiam nec aliquam euismod platea vel laoreet quisque condimentum sapien neque ut aliquam torquent in nam",
        "isRead": true,
        "labels": [
            "work",
            "marketing"
        ],

    },
    {
        "id": "zBZu5cDEWha",
        "subject": "You can now use your storage in Google Drive for Whatsapp photos",
        "from":
            "Google Drive Team"
        ,
        "sentAt": 2011,
        "body": "Hey Nicklas Sandell! Thank you for purchasing extra storage space in Google. etiam pretium urna fusce lobortis curae viverra aptent metus semper nisi litora feugiat elementum purus nunc consequat lorem ultricies non primis phasellus sociosqu donec dolor",
        "isRead": true,
        "labels": [
            "work",
            "google"
        ],

    },
    {
        "id": "aOI7tQuPZ2f",
        "subject": " no subject",
        "from":
            "me, Susanna (11)"
        ,
        "sentAt": 2011,
        "body": "Yes ok, great! I'm not stuck in Stockholm anymore, we're making progress., dolor morbi malesuada eleifend purus taciti sit interdum aliquet commodo ut libero tincidunt",
        "isRead": false,
        "labels": [
            "work",
            "marketing"
        ],

    },
    {
        "id": "WBooB82Uvwu",
        "subject": "Yes we can",
        "from":
            "Yaron Bit"
        ,
        "sentAt": 1999,
        "body": "Trip home from Colombo has been arranged, then Jenna will come get me from Stockholm. :)rhoncus odio netus consectetur aenean hendrerit massa scelerisque elementum aptent lobortis pharetra maecenas quam nulla volutpat turpis non habitasse aenean ante sodales lobortis quisque libero imperdiet gravida eleifend nulla",
        "isRead": true,
        "labels": [
            "work",
            "marketing"
        ],

    },
    {
        "id": "xm1z5bbZjlS",
        "subject": "Purchase confirmation from Rav-Kav Online‏",
        "from":
            "Rav-Kav Online"
        ,
        "sentAt": 1999,
        "body": " The contract was loaded successfully!The contract was loaded successfully!Did you know?You can view your entire transaction history, including purchase confirmations.Open the app or the website and go to Personal area → Loading history.",
        "isRead": false,
        "labels": [
            "work",
            "marketing"
        ],

    },
    {
        "id": "u3j6QIKLlJb",
        "subject": "[Elasticsearch News] Security is now free + Kubernetes Operator",
        "from":
            "Agatha Christie  - Elastic Releases"
        ,
        "sentAt": 1978,
        "body": "Hey there,Are you a fan of free security features? How about Kubernetes? We have a feeling you’ll enjoy today’s news.Elasticsearch core security features are now freeWe are moving core security features for Elasticsearch and Kibana into the free, default distribution of the Elastic Stack, starting with version 6.8 and 7.1, which we released today. This means that users can now encrypt network traffic, create and manage users, define roles that protect index & cluster level access and fully secure Kibana with Spaces - for free! (Note, these features are already part of our standard Elasticsearch Service hosted offering today.)This is an exciting next step for our community. We opened the code of these features last year and by making them free today, our users can now run a fully secure cluster, right out of the box",
        "isRead": true,
        "labels": [
            "diggers",
            "marketing"
        ],

    },
    {
        "id": "vxYYYdVlEH3",
        "subject": "פירוט עסקאות תקופתי ירוק לשירותכם",
        "from":
            "פנגו"
        ,
        "sentAt": 2011,
        "body": " הייתה שנה נפלאה ביחדאנו שמחים שבחרת בנו כשותפים לדרךנמשיך לעבוד על שירותים וחידושים נוספיםשישדרגו את החוויה ויקלו עליך.להלן פירוט החיובים שלך לתקופה:01/01/2018 ועד 31/12/2018 לצפייה בפירוט החשבונית לחץ כאןפעולות נוספות לרשותך:עדכון פרטי חשבוןשחזור סיסמההחשבונית כוללת חיתום דיגיטלי ולכן משמשת גם לצרכי מס.",
        "isRead": true,
        "labels": [
            "חשבוניות",
            "bills"
        ],

    }

]


// COUNTING THE UNREAD EMAILS FOR EACH FOLDER
function countUnreadInFolder() {
    const emails = query()
    var unreadPerFolder = { none: 0 }
    const result = emails.forEach(currEmail => {
        if (!currEmail.isRead) {
            let folder = currEmail.folder;
            unreadPerFolder[folder] ? unreadPerFolder[folder]++ : unreadPerFolder[folder] = 1
        }
    })
    return unreadPerFolder
}



// TODO: USE THIS FUNC IN THE THE GLOBAL utill.js
function queryId(idx, itemsName = 'emails') {
    const items = storageService.load(EMAIL_KEY)
    const itemIdx = utilService.getItemById(idx, items)
    return items[itemIdx]
}


function query() {
    var emails = storageService.load(EMAIL_KEY) || emailsDB || _generatEmails()

    const cheackNewFeature = 'folder'
    if (!emails[0][cheackNewFeature]) _addNewFeatures(emails)

    storageService.store(EMAIL_KEY, emails)
    return emails
}

// function to update isRead isTrash and isImportant and after that more
function updateKey(key, idx, newFolder = 0) {
    key = _getCorrectKey(key) // if not found return false
    if (!key) return

    let emails = storageService.load(EMAIL_KEY)
    const foundIdx = emails.findIndex(email => { return email.id === idx })

    if (foundIdx === -1) return
    // If newVAl !== 0 than 
    // just replace true to false and opposite
    if (!newFolder) newFolder = !emails[foundIdx][key]
    emails[foundIdx][key] = newFolder

    //Changeing folder in case we need:
    if (key === 'isTrash') emails[foundIdx].folder = 'trash'
    if (key === 'isTrash') emails[foundIdx].labels = []

    storageService.store(EMAIL_KEY, emails)
}


function _getCorrectKey(key) {
    key = key.toLowerCase()
    switch (key) {
        case 'trash':
            return 'isTrash'
        case 'read':
            return 'isRead'
        case 'important':
            return 'isImportant'

        default:
            return false
    }
}

function updateEmails(email) {
    let emails = storageService.load(EMAIL_KEY)
    email.id = utilService.makeId()
    email.folder = 'sent'
    email.from = 'me'

    email.sentAt = new Date
    email.sentAt = email.sentAt.toDateString()

    email.isRead = true
    email.isTrash = false
    email.avatar = '../../../../img/yaron.jpg'
    emails.push(email)
    storageService.store(EMAIL_KEY, emails)
}








/* ============================ */
/* generate DB */
/* ============================ */

function _generatEmails() {
    var emails = []
    for (let index = 0; index < 20; index++) {
        var email = _createEmail()
        emails.push(email)

    }
    return emails;
}

function _createEmail() {
    var email = {
        id: utilService.makeId(),
        from: _randomName(),
        subject: utilService.makeLorem(10),
        body: utilService.getRandomInt(1900, 2000),
        isRead: Math.random() > 0.3 ? true : false,

        // IT IS HERE JUST TO MAKE IT EASIER TO SEE 
        // AND NOT UPDATE HERE AND THE _newFeature func 

        // sentAt: _randomDate(new Date(2019, 6, 6), new Date(2019, 1, 21)),
        // folder: _randomFolder(),
        // isImportant: Math.random() > 0.75 ? true : false,
        // email.isTrash = false
    }
    return email
}



function _randomDate(start, end) {
    var date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return date.toDateString()
    /// WE NEED TO GET IT THIS FORM: 155550515515
    //utilService.getRandomInt(Date.now(), Date.now() - 10000000)
}

function _addNewFeatures(emails) {
    return emails.forEach(email => {
        email.folder = Math.random() > 0.6 ? 'inbox' : _randomFolder();
        email.isTrash = false;
        email.isImportant = Math.random() > 0.75 ? true : false;
        email.sentAt = _randomDate(new Date(2019, 1, 1), new Date(2019, 4, 4));
        email.avatar = '../../../../img/' + Math.floor(Math.random() * IMG_NUMBER) + '.jpg'
    })
}

function _randomFolder() {
    let folders = FOLDER_OPS
    return folders[Math.floor(Math.random() * folders.length)]
}

