function hideAll() {
    document.getElementById("homeSection").style.display = "none";
    document.getElementById("guestbookSection").style.display = "none";
    document.getElementById("shopSection").style.display = "none";
    document.getElementById("registerSection").style.display = "none";
    document.getElementById("loginSection").style.display = "none";
    document.getElementById("eventsSection").style.display = "none";
    document.getElementById("learnSection").style.display = "none";
    document.getElementById("userlogSection").style.display = "none";

    document.getElementById("homeTab").style.backgroundColor = "transparent";
    document.getElementById("guestbookTab").style.backgroundColor = "transparent";
    document.getElementById("shopTab").style.backgroundColor = "transparent";
    document.getElementById("registerTab").style.backgroundColor = "transparent";
    document.getElementById("loginTab").style.backgroundColor = "transparent";
    document.getElementById("eventsTab").style.backgroundColor = "transparent";
    document.getElementById("learnTab").style.backgroundColor = "transparent";
    document.getElementById("userlogTab").style.backgroundColor = "transparent";
}

const showHome = () => {
    document.getElementById("homeSection").style.display = "block";
    document.getElementById("guestbookSection").style.display = "none";
    document.getElementById("shopSection").style.display = "none";
    document.getElementById("registerSection").style.display = "none";
    document.getElementById("loginSection").style.display = "none";
    document.getElementById("eventsSection").style.display = "none";
    document.getElementById("learnSection").style.display = "none";
    document.getElementById("userlogSection").style.display = "none";

    document.getElementById("homeTab").style.backgroundColor = "#FF7777";
    document.getElementById("guestbookTab").style.backgroundColor = "transparent";
    document.getElementById("shopTab").style.backgroundColor = "transparent";
    document.getElementById("registerTab").style.backgroundColor = "transparent";
    document.getElementById("loginTab").style.backgroundColor = "transparent";
    document.getElementById("eventsTab").style.backgroundColor = "transparent";
    document.getElementById("learnTab").style.backgroundColor = "transparent";
    document.getElementById("userlogTab").style.backgroundColor = "transparent";
}

const showGuestbook = () => {
    document.getElementById("homeSection").style.display = "none";
    document.getElementById("guestbookSection").style.display = "block";
    document.getElementById("shopSection").style.display = "none";
    document.getElementById("registerSection").style.display = "none";
    document.getElementById("loginSection").style.display = "none";
    document.getElementById("eventsSection").style.display = "none";
    document.getElementById("learnSection").style.display = "none";
    document.getElementById("userlogSection").style.display = "none";

    document.getElementById("homeTab").style.backgroundColor = "transparent";
    document.getElementById("guestbookTab").style.backgroundColor = "#FF7777";
    document.getElementById("shopTab").style.backgroundColor = "transparent";
    document.getElementById("registerTab").style.backgroundColor = "transparent";
    document.getElementById("loginTab").style.backgroundColor = "transparent";
    document.getElementById("eventsTab").style.backgroundColor = "transparent";
    document.getElementById("learnTab").style.backgroundColor = "transparent";
    document.getElementById("userlogTab").style.backgroundColor = "transparent";
}

const showShop = () => {
    document.getElementById("homeSection").style.display = "none";
    document.getElementById("guestbookSection").style.display = "none";
    document.getElementById("shopSection").style.display = "block";
    document.getElementById("registerSection").style.display = "none";
    document.getElementById("loginSection").style.display = "none";
    document.getElementById("eventsSection").style.display = "none";
    document.getElementById("learnSection").style.display = "none";
    document.getElementById("userlogSection").style.display = "none";

    document.getElementById("homeTab").style.backgroundColor = "transparent";
    document.getElementById("guestbookTab").style.backgroundColor = "transparent";
    document.getElementById("shopTab").style.backgroundColor = "#FF7777";
    document.getElementById("registerTab").style.backgroundColor = "transparent";
    document.getElementById("loginTab").style.backgroundColor = "transparent";
    document.getElementById("eventsTab").style.backgroundColor = "transparent";
    document.getElementById("learnTab").style.backgroundColor = "transparent";
    document.getElementById("userlogTab").style.backgroundColor = "transparent";

    if (loggedIn) {
        document.getElementById("shopLogoutWarning").style.display = "none";
    } else {
        document.getElementById("shopLogoutWarning").style.display = "block";
    }

    document.getElementById("productsSearch").value = "";

    getProducts("");
}

const showRegister = () => {
    document.getElementById("homeSection").style.display = "none";
    document.getElementById("guestbookSection").style.display = "none";
    document.getElementById("shopSection").style.display = "none";
    document.getElementById("registerSection").style.display = "block";
    document.getElementById("loginSection").style.display = "none";
    document.getElementById("eventsSection").style.display = "none";
    document.getElementById("learnSection").style.display = "none";
    document.getElementById("userlogSection").style.display = "none";

    document.getElementById("homeTab").style.backgroundColor = "transparent";
    document.getElementById("guestbookTab").style.backgroundColor = "transparent";
    document.getElementById("shopTab").style.backgroundColor = "transparent";
    document.getElementById("registerTab").style.backgroundColor = "#FF7777";
    document.getElementById("loginTab").style.backgroundColor = "transparent";
    document.getElementById("eventsTab").style.backgroundColor = "transparent";
    document.getElementById("learnTab").style.backgroundColor = "transparent";
    document.getElementById("userlogTab").style.backgroundColor = "transparent";
}

const showLogin = () => {
    document.getElementById("homeSection").style.display = "none";
    document.getElementById("guestbookSection").style.display = "none";
    document.getElementById("shopSection").style.display = "none";
    document.getElementById("registerSection").style.display = "none";
    document.getElementById("loginSection").style.display = "block";
    document.getElementById("eventsSection").style.display = "none";
    document.getElementById("learnSection").style.display = "none";
    document.getElementById("userlogSection").style.display = "none";

    document.getElementById("homeTab").style.backgroundColor = "transparent";
    document.getElementById("guestbookTab").style.backgroundColor = "transparent";
    document.getElementById("shopTab").style.backgroundColor = "transparent";
    document.getElementById("registerTab").style.backgroundColor = "transparent";
    document.getElementById("loginTab").style.backgroundColor = "#FF7777";
    document.getElementById("eventsTab").style.backgroundColor = "transparent";
    document.getElementById("learnTab").style.backgroundColor = "transparent";
    document.getElementById("userlogTab").style.backgroundColor = "transparent";
}

const showEvents = () => {
    document.getElementById("homeSection").style.display = "none";
    document.getElementById("guestbookSection").style.display = "none";
    document.getElementById("shopSection").style.display = "none";
    document.getElementById("registerSection").style.display = "none";
    document.getElementById("loginSection").style.display = "none";
    document.getElementById("eventsSection").style.display = "block";
    document.getElementById("learnSection").style.display = "none";
    document.getElementById("userlogSection").style.display = "none";

    document.getElementById("homeTab").style.backgroundColor = "transparent";
    document.getElementById("guestbookTab").style.backgroundColor = "transparent";
    document.getElementById("shopTab").style.backgroundColor = "transparent";
    document.getElementById("registerTab").style.backgroundColor = "transparent";
    document.getElementById("loginTab").style.backgroundColor = "transparent";
    document.getElementById("eventsTab").style.backgroundColor = "#FF7777";
    document.getElementById("learnTab").style.backgroundColor = "transparent";
    document.getElementById("userlogTab").style.backgroundColor = "transparent";

    getEventsCount();
}

const showLearn = () => {
    document.getElementById("homeSection").style.display = "none";
    document.getElementById("guestbookSection").style.display = "none";
    document.getElementById("shopSection").style.display = "none";
    document.getElementById("registerSection").style.display = "none";
    document.getElementById("loginSection").style.display = "none";
    document.getElementById("eventsSection").style.display = "none";
    document.getElementById("learnSection").style.display = "block";
    document.getElementById("userlogSection").style.display = "none";

    document.getElementById("homeTab").style.backgroundColor = "transparent";
    document.getElementById("guestbookTab").style.backgroundColor = "transparent";
    document.getElementById("shopTab").style.backgroundColor = "transparent";
    document.getElementById("registerTab").style.backgroundColor = "transparent";
    document.getElementById("loginTab").style.backgroundColor = "transparent";
    document.getElementById("eventsTab").style.backgroundColor = "transparent";
    document.getElementById("learnTab").style.backgroundColor = "#FF7777";
    document.getElementById("userlogTab").style.backgroundColor = "transparent";
}

const showUserlog = () => {
    document.getElementById("homeSection").style.display = "none";
    document.getElementById("guestbookSection").style.display = "none";
    document.getElementById("shopSection").style.display = "none";
    document.getElementById("registerSection").style.display = "none";
    document.getElementById("loginSection").style.display = "none";
    document.getElementById("eventsSection").style.display = "none";
    document.getElementById("learnSection").style.display = "none";
    document.getElementById("userlogSection").style.display = "block";

    document.getElementById("homeTab").style.backgroundColor = "transparent";
    document.getElementById("guestbookTab").style.backgroundColor = "transparent";
    document.getElementById("shopTab").style.backgroundColor = "transparent";
    document.getElementById("registerTab").style.backgroundColor = "transparent";
    document.getElementById("loginTab").style.backgroundColor = "transparent";
    document.getElementById("eventsTab").style.backgroundColor = "transparent";
    document.getElementById("learnTab").style.backgroundColor = "transparent";
    document.getElementById("userlogTab").style.backgroundColor = "#FF7777";

    getKoruSymbol();
}

const newComment = (c, n) => {
    fetch('https://cws.auckland.ac.nz/ako/api/Comment',
        {
            method: 'POST',
            headers: {
                "accept": "text/plain",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ "comment": new String(c), "name": new String(n) })
        }
    )
}

let newCommentForm = document.getElementById("newEntryGuestbook");

newCommentForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let name = document.getElementById("guestbookNameInput");
    let comment = document.getElementById("guestbookCommentInput");

    if (name.value == "" || comment.value == "") {
        alert("Ensure you input a value in both fields!");
    } else {
        newComment(comment.value, name.value);

        name.value = "";
        comment.value = "";
    }
});

const registerUser = (u, p, a) => {
    fetch('https://cws.auckland.ac.nz/ako/api/Register',
        {
            method: 'POST',
            headers: {
                "accept": "text/plain",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ "username": new String(u), "password": new String(p), "address": new String(a) })
        }
    )
        .then((response) => response.text())
        .then((response) => alert(response))
}

let registerForm = document.getElementById("registerUser");

registerForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let username = document.getElementById("registerUsernameInput");
    let password = document.getElementById("registerPasswordInput");
    let address = document.getElementById("registerAddressInput");

    if (username.value == "" || password.value == "" || address.value == "") {
        alert("Ensure you input a value in all fields!");
    } else {
        registerUser(username.value, password.value, address.value);

        username.value = "";
        password.value = "";
        address.value = "";
    }
});

var username;
var password;
var loggedIn = false;

const logout = () => {
    loggedIn = false;
    username = null;
    password = null;

    document.getElementById("homeSection").style.display = "none";
    document.getElementById("guestbookSection").style.display = "none";
    document.getElementById("shopSection").style.display = "none";
    document.getElementById("registerSection").style.display = "none";
    document.getElementById("loginSection").style.display = "block";
    document.getElementById("eventsSection").style.display = "none";
    document.getElementById("learnSection").style.display = "none";

    document.getElementById("homeTab").style.backgroundColor = "transparent";
    document.getElementById("guestbookTab").style.backgroundColor = "transparent";
    document.getElementById("shopTab").style.backgroundColor = "transparent";
    document.getElementById("registerTab").style.backgroundColor = "transparent";
    document.getElementById("loginTab").style.backgroundColor = "#FF7777";
    document.getElementById("eventsTab").style.backgroundColor = "transparent";
    document.getElementById("learnTab").style.backgroundColor = "transparent";

    document.getElementById("registerTab").style.display = "inline-block";
    document.getElementById("loginTab").style.display = "inline-block";
    document.getElementById("logoutTab").style.display = "none";
    document.getElementById("logon").innerText = "Logged Out";
    alert("You are now logged out");
}

const checkAuth = (code, u, p) => {
    if (code == '200') {
        loggedIn = true;
        username = u;
        password = p;

        document.getElementById("registerTab").style.display = "none";
        document.getElementById("loginTab").style.display = "none";
        document.getElementById("logoutTab").style.display = "inline-block";
        document.getElementById("homeSection").style.display = "block";
        document.getElementById("loginSection").style.display = "none";
        document.getElementById("homeTab").style.backgroundColor = "#FF7777";
        document.getElementById("loginTab").style.backgroundColor = "transparent";
        document.getElementById("logon").innerText = "Logged on as " + u;
        alert(u + " is now logged on!");
    } else {
        alert("Authentication unsuccessful. Check username and password.")
    }
}

const loginUser = (u, p) => {
    fetch('https://cws.auckland.ac.nz/ako/api/TestAuth',
        {
            method: 'GET',
            headers: {
                "accept": "text/plain",
                "Authorization": "Basic " + btoa(u + ':' + p)
            }
        }
    )
        .then((response) => response.status)
        .then((response) => checkAuth(response, u, p))
}

let loginForm = document.getElementById("loginUser");

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let username = document.getElementById("loginUsernameInput");
    let password = document.getElementById("loginPasswordInput");

    if (username.value == "" || password.value == "") {
        alert("Ensure you input a value in both fields!");
    } else {
        loginUser(username.value, password.value);

        username.value = "";
        password.value = "";
    }
});

const getEventsCount = () => {
    fetch('https://cws.auckland.ac.nz/ako/api/EventCount')
        .then((response) => response.text())
        .then((response) => getEvents(response));
}

const getEvents = (count) => {
    var eventsArray = [];

    for (let i = 0; i < count; i++) {
        fetch('https://cws.auckland.ac.nz/ako/api/Event/' + i)
            .then((response) => response.text())
            .then((response) => eventsArray.push(response))
            .then((response) => displayEvents(eventsArray));
    }
}

const parseDate = (date) => {
    var year = date.substr(0, 4);
    var month = date.substr(4, 2);
    var day = date.substr(6, 2);

    var hour = date.substr(9, 2);
    var minute = date.substr(11, 2);
    var second = date.substr(13, 2);

    return new Date(Date.UTC(year, month - 1, day, hour, minute, second));
}

const displayEvents = (events) => {
    var html = "<p>";

    for (let i = 0; i < events.length; i++) {
        const details = events[i].split(/\r?\n/);
        var jsonstring = "{";
        for (const detail of details) {
            const splitdetail = detail.split(":");
            if (splitdetail[0] != "BEGIN" && splitdetail[0] != "END") {
                jsonstring += '"' + splitdetail[0] + '": "' + splitdetail[1] + '",';
            }
        }
        jsonstring = jsonstring.slice(0, -1);
        jsonstring += "}";
        jsobject = JSON.parse(jsonstring);
        html += "<br><b>" + jsobject.SUMMARY + "</b><br>";
        html += jsobject.DESCRIPTION + "<br>";
        html += "Location: " + jsobject.LOCATION + "<br>";
        html += "Starts: " + parseDate(jsobject.DTSTART) + "<br>";
        html += "Ends: " + parseDate(jsobject.DTEND) + "<br>";
        html += '<br><button type="small" onclick="window.location.href=\'https://cws.auckland.ac.nz/ako/api/Event/' + i + '\';">Add to Calendar</button>' + "<br>";
    }

    html += "</p>"

    document.getElementById("eventsList").innerHTML = html;
}

let searchInput = document.getElementById("productsSearch");

searchInput.addEventListener('change', (e) => {
    getProducts(searchInput.value);
})

const getProducts = (term) => {
    var products;

    if (term == "") {
        fetch('https://cws.auckland.ac.nz/ako/api/AllItems')
            .then((response) => response.json())
            .then((response) => products = response)
            .then((response) => displayProducts(products));
    } else {
        fetch('https://cws.auckland.ac.nz/ako/api/Items/' + term)
            .then((response) => response.json())
            .then((response) => products = response)
            .then((response) => displayProducts(products));
    }
}

const displayProducts = (products) => {
    var html = "<p><table>";

    for (const product of products) {
        html += "<tr><td><img src=\"https://cws.auckland.ac.nz/ako/api/ItemImage/" + product.id + "\" height=\"150\"></td>";
        html += "<td><b>" + product.name + "</b><br><br>" + product.description + "<br><br>$" + product.price;
        if (loggedIn) {
            html += '<br><br><button type="small" onclick="purchaseItem(' + product.id + ')">Purchase</button>'
        }
        html += "</td></tr>";
    }

    html += "</table></p>"

    document.getElementById("productsList").innerHTML = html;
}

const purchaseItem = (id) => {
    fetch('https://cws.auckland.ac.nz/ako/api/PurchaseItem/' + id,
        {
            method: 'GET',
            headers: {
                "accept": "text/plain",
                "Authorization": "Basic " + btoa(username + ':' + password)
            }
        }
    )
        .then((response) => response.status)
        .then((response) => checkPurchase(response));
}

const checkPurchase = (code) => {
    if (code == 200) {
        document.getElementById("productsList").style.display = "none";
        document.getElementById("purchaseSuccess").style.display = "block";
    } else {
        alert("Something went wrong. Please try again.");
    }
}

const returnProductsList = () => {
    document.getElementById("purchaseSuccess").style.display = "none";
    document.getElementById("productsList").style.display = "block";

    document.getElementById("productsSearch").value = "";

    getProducts("");
}

const getKoruSymbol = () => {
    fetch('https://cws.auckland.ac.nz/ako/api/Koru',
        {
            method: 'GET',
            headers: {
                "accept": "text/plain"
            }
        }
    )
    .then((response) => response.text())
    .then((response) => getUserLog(response));
}

const getUserLog = (symbol) => {
    fetch('https://cws.auckland.ac.nz/ako/api/Log',
        {
            method: 'GET',
            headers: {
                "accept": "text/plain"
            }
        }
    )
    .then((response) => response.json())
    .then((response) => useResponse(symbol, response));
}

const useResponse = (symbol, logs) => {
    var svg = '';

    svg += '';

    var minute = 1;

    for(const log of logs) {
        var whole = log / 10;
        var remain = Math.round((whole - Math.floor(whole)) * 10) / 10;
        svg += '<svg height="25" width="30"><text x="0" y="20" font-size="larger" stroke="white" fill="white">' + minute + '</text></svg>';
        minute ++;
        for(var i=1; i<whole; i++) {
            svg += '<svg height="20" width="20"><use href="#koru" height="20"/></svg>';
        }
        svg += '<svg height="20" width="' + 20 * remain + '"><use href="#koru" height="20" width="20"/></svg>';
        svg += '<br>';
    }

    document.getElementById("korudiv").innerHTML = symbol  + svg + '<br><br>' + logs;
}

const refreshGuestbook = () => { document.getElementById("commentsiframe").src = document.getElementById("commentsiframe").src; };

const fetchPromise = fetch('https://cws.auckland.ac.nz/ako/api/Version',
    {
        headers: {
            "accept": "text/plain"
        },
    }
);
const streamPromise = fetchPromise.then((response) => response.text());
streamPromise.then((data) => { document.getElementById("version").innerText = data; });

window.onload = showUserlog;

