const main=document.querySelector(".main-contain");
const aboutVar=document.querySelector("#About");
const body=document.querySelector('body');
aboutVar.addEventListener("click",()=>{
    body.style.backgroundImage="url('DeveloperMap.png')";
    body.style.backgroundRepeat="no-repeat";
    body.style.backgroundAttachment="fixed";
    body.style.backgroundSize="contain";
    body.style.backgroundPosition="center";
    main.innerHTML=`
    <div style="display:grid;grid-template-columns:auto 500px;justify-content;justify-content:space-between;">
        <div style="margin-top:25px;margin-left:30px;">
            <div style="font-weight:bold; font-size:30px;display:grid;grid-template-columns: 100px 1fr;"><div><img src="Ryan.jpg" style="height:100px ;width:100px; border-radius:50px;"></div><div style="width:400px;padding-top:17px;margin-left:10px;text-align:left;margin-top:10px;">FOSSO KOAGNE DAVID RYAN</div></div>
            <div style="color:rgb(247, 125, 80);font-size:20px;font-weight:bold;margin-bottom:10px;">Software Engeneering Student <br> ICT UNIVERSITY</div>
            <div style="color:rgb(179, 173, 173);font-weight:bold;"> Passionate about creation of websites,3D and 2D games , mobile apps <br> Interactive experiences  on the web <br> Formation still on going</div>
        </div>
   
        <div style="display:grid;grid-template-columns:100px auto ;align-items:center;background-color:white;width:80%;justify-content:center;border-radius:30px; column-gap:20px;margin-top:45px;">
            <div style="color:rgb(247, 125, 80);font-size:20px;font-weight:bold;">Age</div>
            <div  style="color:rgba(126, 123, 123, 1);font-weight:bold;font-size:20px;">18 years old</div>
            <div style="color:rgb(247, 125, 80);font-size:20px;font-weight:bold;">Place of Birth</div>
            <div  style="color:rgba(127, 123, 123, 1);font-weight:bold;font-size:20px;">Yaounde</div>
            <div style="color:rgb(247, 125, 80);font-size:20px;font-weight:bold;">Sex</div>
            <div  style="color:rgba(127, 123, 123, 1);font-weight:bold;font-size:20px;">Male</div>
            <div style="color:rgb(247, 125, 80);font-size:20px;font-weight:bold;">Date of Birth</div>
            <div  style="color:rgba(127, 123, 123, 1);font-weight:bold;font-size:20px;">5th November 2007</div>
            <div style="color:rgb(247, 125, 80);font-size:20px;font-weight:bold;">Professional Domain</div>
            <div  style="color:rgba(127, 123, 123, 1);font-weight:bold;font-size:20px;">Software Engeneering</div>

        </div>

    </div>
    <div>
    <div style="color:rgba(226, 221, 221, 1);font-weight:bold;margin-top:100px;margin-left:30px;line-height:50px;font-size:20px;"> I have got a BAC C with 15.39/20 <br> I like make researchs on YouTube , on WebSites ans AI apps to improve myself in my domain(SEN) and others things in informatic:<br> + &nbsp  Make Flyers, Powerpoints and Text Documents <br> +&nbsp   Use Unity and Unreal Engine(UE 5.0) to make high games <br> + &nbsp Computer Maintenance</div>
    </div>

    `;
});