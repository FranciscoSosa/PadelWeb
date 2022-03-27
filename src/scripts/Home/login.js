$(document).ready( () => {
    $("#login-form").submit(login)
});

function login(e) {

    e.preventDefault();

    $.getJSON("../../../json/login-info.json", (loginInfo) => {
        const email = $("#email-id").val();
        const passwd = $("#password-id").val();

        loginInfo.forEach((l)=>{
            if(email === l.email && passwd === l.passwd){
                if(l.type === "user"){
                    window.location.href = "../../Pages/User/user-statistics.html"
                } else {
                    window.location.href = "../../Pages/Club/club-pending-events.html"
                }
            }
        })

    })
}