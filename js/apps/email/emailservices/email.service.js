/*
• Has a filter object – null by default
• Has a computed property  ToShow that returns books based on the current filter
*/

import { storageService } from '../../../services/storage.service.js'
import { utilService } from '../../../services/util.service.js'

export const emailService = {
    query,
    queryId,
    countUnreadInFolder
}
const EMAIL_KEY = 'emails'
const FOLDER_OPS = ['sent', 'drafts', 'important', 'archive']

var emailsDB = [
    {
        "id": "O2e2G8w0skc",
        "subject": "Randy, me (5)",
        "from": "Randy",
        "sentAt": 1999,
        "body": `Please complete your Conceptboard signup &nbsp;&ndash;&nbsp;  You
    recently created a Conceptboard account, but you have not yet confirmed your email. Your email is used
    for notifications about board activity, invites, as well as account related tasks (like password
    retrieval).`,
        "isRead": true,
        "labels": [
            "work",
            "marketing"
        ],

    },
    {
        "id": "OXeMG8wNskc",
        "subject": "Lucas Kriebel (via Twitter)",
        "from": "Eli",
        "sentAt": 1999,
        "body": "Off on Thursday >Eff that place, you might as well stay here with us instead! Sent from my iPhone 4 & gt; 4 mar 2014 at 5: 55 pm",
        "isRead": true,
        "labels": [
            "work",
            "marketing"
        ],

    },
    {
        "id": "JYOJa2NpSCq",
        "subject": "Asaf is following you",
        "from":
            "Barbara Cartland"
        ,
        "sentAt": 1978,
        "body": `Last pic over my village &nbsp;&ndash;&nbsp;  Yeah i'd like that!
    Do you remember the video you showed me of your train ride between Colombo and Kandy? The one with the
    mountain view? I would love to see that one again!`,
        "isRead": true,
        "labels": [
            "work",
            "marketing"
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
            "work",
            "marketing"
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
            "Dr. Seuss"
        ,
        "sentAt": 2011,
        "body": "Montly High-Res Photos To create this month's pack, we hosted a party with local musician Jared Mahone here in Columbus, Ohio.",
        "isRead": false,
        "labels": [
            "work",
            "marketing"
        ],

    },
    {
        "id": "U2rfZO6oBZf",
        "subject": "Infinity Revibe on HR",
        "from":
            "Leo Tolstoy"
        ,
        "sentAt": 1978,
        "body": "thought maybe you want some music inspiration for the weekend. Here are some trending tracks and playlists we think you should give a listen! habitant nam imperdiet nostra elit dapibus nisl adipiscing in",
        "isRead": false,
        "labels": [
            "work",
            "marketing"
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
            "marketing"
        ],

    },
    {
        "id": "9laHCEdSpFy",
        "subject": "Can you send me your new app version",
        "from":
            "Dr. Aviad"
        ,
        "sentAt": 1999,
        "body": "I am willing to accept your offer for the new ap build, with the price you offered, magna quisque venenatis laoreet purus in semper habitant proin pellentesque sed egestas cursus faucibus nam enim id sit mi ligula risus curabitur senectus curabitur sodales fames sem",
        "isRead": true,
        "labels": [
            "work",
            "marketing"
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
            "work",
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
        "body": "curabitur bibendum in dolor neque magna phasellus arcu nulla cubilia senectus maecenas ullamcorper neque accumsan facilisis dictumst ornare",
        "isRead": true,
        "labels": [
            "work",
            "marketing"
        ],

    },
    {
        "id": "bd7a76kARao",
        "subject": "It is not possible ",
        "from":
            "Danielle Steel"
        ,
        "sentAt": 2018,
        "body": "Task assigned: Clone ARP's website You have been assigned a task by Alex@Work on the board Web.",
        "isRead": true,
        "labels": [
            "work",
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
        "body": "aenean mauris porta netus accumsan turpis etiam vestibulum vivamus sagittis nullam nec tellus quam mattis est pellentesque nisi litora sit ad",
        "isRead": false,
        "labels": [
            "work",
            "marketing"
        ],
    },
    {
        "id": "2RvT48ZNInj",
        "subject": "Let's go fishing!",
        "from":
            "Agatha Christie"
        ,
        "sentAt": 2011,
        "body": " Hi, what do you say,  at the lake tomorrow? It'll be awesome. nec faucibus arcu suspendisse tempus potenti lobortis aliquam quisque augue integer consectetur etiam ultrices curabitur tristique metus",
        "isRead": true,
        "labels": [
            "work",
            "marketing"
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
            "marketing"
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
        "subject": "class habitant at commodo semper ligula a bibendum",
        "from":
            "Leo Tolstoy"
        ,
        "sentAt": 1999,
        "body": "himenaeos quis iaculis orci libero egestas quam varius primis erat lacus facilisis blandit dictum tristique interdum litora quisque purus senectus pretium purus",
        "isRead": false,
        "labels": [
            "work",
            "marketing"
        ],

    },
    {
        "id": "u3j6QIKLlJb",
        "subject": "nullam class risus amet senectus scelerisque etiam curabitur",
        "from":
            "Agatha Christie"
        ,
        "sentAt": 1978,
        "body": "torquent in et id lacus vivamus aptent cursus erat integer venenatis risus ac ante quam etiam euismod feugiat risus suscipit rhoncus pharetra quisque felis",
        "isRead": true,
        "labels": [
            "work",
            "marketing"
        ],

    },
    {
        "id": "vxYYYdVlEH3",
        "subject": "varius malesuada augue molestie sollicitudin faucibus mi eu tempus",
        "from":
            "William Shakespeare"
        ,
        "sentAt": 2011,
        "body": "aliquet euismod mi vivamus bibendum donec etiam quisque iaculis ullamcorper est sed",
        "isRead": true,
        "labels": [
            "work",
            "marketing"
        ],

    }

]


// COUNTING THE UNREAD EMAILS FOR EACH FOLDER
function countUnreadInFolder() {
    const emails = query()
    var unreadPerFolder = { emails: 0 }
    const result = emails.forEach(currEmail => {
        if (!currEmail.isRead) {
            let folder = currEmail.folder;

            unreadPerFolder[folder] ? unreadPerFolder[folder]++ : unreadPerFolder[folder] = 1
        }
        return unreadPerFolder
    })
    return unreadPerFolder
}




function queryId(idx, itemsName) {
    if (itemsName.toLowerCase() === 'emails') items = storageService.load(EMAIL_KEY) || emailsDB
    return utilService.getItemById(idx, items)
}


function query() {
    var emails = storageService.load(EMAIL_KEY) || emailsDB || _generatEmails()

    const cheackNewFeature = 'folder'
    if (!emails[0][cheackNewFeature]) _addNewFeatures(emails)

    storageService.store(EMAIL_KEY, emails)
    return emails
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
        email.folder = Math.random() > 0.3 ? 'inbox' : _randomFolder();
        email.isTrash = false;
        email.isImportant = Math.random() > 0.75 ? true : false;
        email.sentAt = _randomDate(new Date(2019, 1, 1), new Date(2019, 4, 4));
    })
}

function _randomFolder() {
    let folders = FOLDER_OPS
    return folders[Math.floor(Math.random() * folders.length - 1)]
}

