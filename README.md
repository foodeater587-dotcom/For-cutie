<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>For My Cutie ❤️</title>

<style>
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

body{
    font-family:Arial, Helvetica, sans-serif;
    display:flex;
    justify-content:center;
    align-items:center;
    height:100vh;
    background:linear-gradient(135deg,#ff9a9e,#fad0c4,#ffd1dc);
    overflow:hidden;
}

/* Floating Hearts */
.hearts{
    position:fixed;
    width:100%;
    height:100%;
    top:0;
    left:0;
    overflow:hidden;
    z-index:0;
}

.hearts span{
    position:absolute;
    display:block;
    color:#ff3366;
    font-size:25px;
    animation:float 10s linear infinite;
    opacity:0.8;
}

.hearts span:nth-child(1){left:5%;animation-duration:8s;font-size:22px;}
.hearts span:nth-child(2){left:15%;animation-duration:12s;font-size:35px;}
.hearts span:nth-child(3){left:28%;animation-duration:9s;}
.hearts span:nth-child(4){left:40%;animation-duration:11s;font-size:40px;}
.hearts span:nth-child(5){left:52%;animation-duration:7s;}
.hearts span:nth-child(6){left:65%;animation-duration:13s;font-size:30px;}
.hearts span:nth-child(7){left:78%;animation-duration:10s;}
.hearts span:nth-child(8){left:90%;animation-duration:8s;font-size:36px;}

@keyframes float{
    0%{
        transform:translateY(110vh) scale(0.5);
        opacity:0;
    }
    20%{
        opacity:1;
    }
    100%{
        transform:translateY(-120vh) scale(1.3) rotate(360deg);
        opacity:0;
    }
}

.card{
    position:relative;
    z-index:2;
    background:rgba(255,255,255,0.92);
    padding:40px;
    border-radius:20px;
    text-align:center;
    max-width:650px;
    box-shadow:0 15px 35px rgba(0,0,0,.2);
}

h1{
    color:#ff3366;
    font-size:40px;
}

p{
    margin-top:20px;
    font-size:24px;
    line-height:1.7;
    color:#444;
}

.main-heart{
    font-size:60px;
    animation:beat 1s infinite;
}

@keyframes beat{
    0%,100%{transform:scale(1);}
    50%{transform:scale(1.2);}
}
</style>
</head>

<body>

<div class="hearts">
<span>❤</span>
<span>💖</span>
<span>💕</span>
<span>💗</span>
<span>💘</span>
<span>💝</span>
<span>❤</span>
<span>💞</span>
</div>

<div class="card">
<div class="main-heart">❤️</div>

<h1>For My Cutie</h1>

<p>
Pagluuu ❤️<br><br>
I love you, my cutiee. 🥹💕<br><br>
I know we are not in a relationship,<br>
but I will always be with you. 🌸❤️
</p>

<div class="main-heart">💖</div>
</div>

</body>
</html>
