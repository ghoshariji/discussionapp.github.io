let newtext = document.getElementById("new");

function Response() {
    let rin2 = document.getElementById("res").value;
    let rin3 = document.getElementById("res")
    let para3 = document.createElement("p");
    para3.innerText = rin2;

    let newres = document.getElementById("newres");
        newres.appendChild(para3);
        rin3.value = "";
}

function solve() {
    let right = document.getElementById("right");
    if (right) {
        right.remove();
    }

    let div1 = document.getElementById("right1");
    let div = document.createElement("div");

    let h1 = document.createElement("h1");
    h1.innerText = "Question";
    let hr = document.createElement("hr");

    let head = document.getElementById("head");
    let head1 = document.createElement("h1");
    head1.innerText = head.innerText;

    let para = document.getElementById("para");
    let para1 = document.createElement("p");
    para1.innerText = para.innerText;

    let btn = document.createElement("button");
    btn.innerText = "Resolve";

    let div2 = document.createElement("div");
    div2.setAttribute("id", "newres");

    let h3 = document.createElement("h3");
    h3.innerText = "Add Response";
    h3.setAttribute("id","head30");

    let rin = document.createElement("input");
    rin.setAttribute("id", "res");

    let btn1 = document.createElement("button");
    btn1.innerText = "Add";
    btn1.setAttribute("id", "btn2");

    div.appendChild(h1);
    div.appendChild(hr);
    div.appendChild(head1);
    div.appendChild(para1);
    div.appendChild(btn);
    div.appendChild(h3);
    div.appendChild(rin);
    div.appendChild(btn1);
    div.appendChild(div2);

    div1.appendChild(div);

    // Move the event listener assignment outside the solve function
    document.getElementById("btn2").addEventListener("click", Response);
}

function save() {
    let subject = document.getElementById("subject").value;
    let question = document.getElementById("ques").value;

    let head = document.createElement("h1");
    let para = document.createElement("p");
    let hr = document.createElement('hr');

    head.setAttribute("id", "head");
    para.setAttribute("id", "para");

    head.innerText = subject;
    para.innerText = question;

    newtext.appendChild(head);
    newtext.appendChild(para);
    newtext.appendChild(hr);
}

document.getElementById("submit").addEventListener("click", save);
document.getElementById("details").addEventListener("click", solve);
